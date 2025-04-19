import "../../App.css";
import DataList from "../DataList/DataList";
import ModalEditarPiloto from "../ModalEditarPiloto/ModalEditarPiloto";
import ModalAdicionarPiloto from "../ModalAdicionarPiloto/ModalAdicionarPiloto";

import { useEffect, useState } from "react";

export default function ModalPiloto() {
  const [pilotos, setPilotos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemClicked, setItemClicked] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [erro, setErro] = useState(null);
  const [deletando, setDeletando] = useState(false);
  const [pilotoParaExcluir, setPilotoParaExcluir] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [modalErro, setModalErro] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");



  const fetchData = () => {
    fetch("http://localhost:8800/")
      .then((res) => res.json())
      .then((data) => setPilotos(data))
      .catch((err) => console.error("Erro ao buscar pilotos:", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function clicked(item) {
    setModalIsOpen(true);
    setItemClicked(item);
  }

  function closeModal() {
    setModalIsOpen(false);
    setItemClicked(null);
  }

  const handleDelete = async () => {
    if (!pilotoParaExcluir) return;
    setDeletando(true);

    try {
      const response = await fetch(`http://localhost:8800/deletarPiloto/${pilotoParaExcluir.idPiloto}`, {

        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setMensagemErro(data.error || "Erro ao excluir");
        setModalErro(true);
        return;
      }

      setShowToast(true);
      fetchData();
    }
    catch (error) {
      setMensagemErro("Erro de rede ou servidor");
      setModalErro(true);
    } finally {
      setDeletando(false);
      setPilotoParaExcluir(null);
    }
  };

  return (
    <div className="DataList">
      <DataList clicked={clicked} data={pilotos} onAdd={() => setAddModalOpen(true)} onConfirmDelete={(item) => setPilotoParaExcluir(item)} />

      {modalIsOpen && itemClicked && (
        <div className="modal">
          <div className="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Detalhes do Piloto</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                onClick={() => closeModal()}
              ></button>
            </div>
            <div className="modal-body">
              <div className="containerLateralEsquerdo">
                <p>
                  <strong>Nome:</strong> {itemClicked.nome}
                </p>
                <p>
                  <strong>Escuderia:</strong> {itemClicked.escuderia}
                </p>
                <p>
                  <strong>Pontuação:</strong> {itemClicked.pontos}
                </p>
              </div>
              <div className="containerLateralDireito">
                <button
                  className="btn btn-primary botaoEditarUsuario"
                  onClick={() => setEditModalOpen(true)}
                >
                  <i className="material-icons">edit</i>
                </button>
                <p>
                  <strong>Idade:</strong> {itemClicked.idade}
                </p>
                <p>
                  <strong>Rating:</strong> {itemClicked.rating}
                </p>

              </div>
            </div>
          </div>
        </div>
      )}

      {editModalOpen && itemClicked && (
        <ModalEditarPiloto
          piloto={itemClicked}
          onClose={() => {
            setEditModalOpen(false);
            setModalIsOpen(false);
          }}
          atualizarPilotos={fetchData}
        />
      )}

      {addModalOpen && (
        <ModalAdicionarPiloto
          onClose={() => setAddModalOpen(false)}
          atualizarPilotos={fetchData}
          setErro={setErro}
        />
      )}

      {pilotoParaExcluir && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar Exclusão</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setPilotoParaExcluir(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Tem certeza que deseja excluir o piloto <strong>{pilotoParaExcluir.nome}</strong>?</p>
                {deletando && (
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setPilotoParaExcluir(null)}
                  disabled={deletando}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                  disabled={deletando}
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="toast-container position-fixed bottom-0 end-0 p-3"
        style={{ zIndex: 9999 }}
      >
        <div
          className={`toast align-items-center text-white bg-success border-0 ${showToast ? "show" : ""}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">Piloto excluído com sucesso!</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => setShowToast(false)}
            ></button>
          </div>
        </div>
      </div>

      {modalErro && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Erro</h5>
              </div>
              <div className="modal-body">
                <p>{mensagemErro}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalErro(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>


  );
}

