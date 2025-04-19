import { useState } from "react";

const ModalAdicionarPilotoTime = (props) => {
  const [pilotoSelecionado, setPilotoSelecionado] = useState("");

  const handleSalvar = async () => {
    if (!pilotoSelecionado) return;

    try {
      const response = await fetch("http://localhost:8800/adicionarPilotoAoTime", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUsuario: 1, // ou dinamicamente via props
          idPiloto: pilotoSelecionado,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Erro ao adicionar");
        return;
      }

      props.atualizarPilotos(); 
      props.onClose();          
    } catch (err) {
      console.error(err);
      alert("Erro de rede ao adicionar piloto");
    }
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Selecionar Piloto</h5>
            <button type="button" className="btn-close" onClick={props.onClose}></button>
          </div>

          <div className="modal-body">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">
                  Opções
                </label>
              </div>
              <select
                className="form-select"
                onChange={(e) => setPilotoSelecionado(e.target.value)}
              >
                <option value="">Escolha um piloto...</option>
                {props.data?.map((item) => (
                  <option key={item.idPiloto} value={item.idPiloto}>
                    {item.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleSalvar}>
              Salvar
            </button>
            <button type="button" className="btn btn-secondary" onClick={props.onClose}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdicionarPilotoTime;
