import React from "react";
import "../../App.css";
import { useEffect, useState } from "react";
import ModalAdicionarPilotoTime from "../ModalAdicionarPilotoTime/ModalAdicionarPilotoTime";

export default function MeuTime() {
    const [meuTime, setMeuTime] = useState([]);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [pilotosDisponiveis, setPilotosDisponiveis] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [modalErro, setModalErro] = useState(false);
    const [mensagemErro, setMensagemErro] = useState("");
    const [contagemPilotos, setContagemPilotos] = useState(0);

    const fetchData = () => {
        fetch("http://localhost:8800/meuTime")
            .then((res) => res.json())
            .then((data) => {
                setMeuTime(data)
                setContagemPilotos(data.length);
            })
            .catch((err) => console.error("Erro ao buscar o time:", err));
    };

    useEffect(() => {
        fetchData();
    }, []);    


    function clicked(item) {
        setAddModalOpen(true);
        buscarPilotosDisponiveis();
    }

    function handleAdicionar() {
        if (contagemPilotos >= 2) {
          setMensagemErro("Você já atingiu o limite de 2 pilotos no time.");
          setModalErro(true);
          return;
        }
      
        buscarPilotosDisponiveis();
        setAddModalOpen(true);
      }
      
    function BotaoAdicionar() {
        return (
            <button
                type="button"
                className="btn btn-success"
                onClick={clicked}
            >
                Adicionar Piloto ao Time
            </button>
        );
    }
    
    const buscarPilotosDisponiveis = () => {
        fetch("http://localhost:8800/pilotos-disponiveis")
            .then((res) => res.json())
            .then((data) => setPilotosDisponiveis(data))
            .catch((err) => console.error("Erro ao buscar pilotos disponíveis:", err));
    };


    const handleDelete = async (idPiloto) => {
        try {
            const response = await fetch(`http://localhost:8800/removerPilotoDoTime/${idPiloto}`, {

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
            console.log(error)
        }
    };

    return (
        <div>
            <div className="header">
                <h1 className="meuTimeTitle">Meu time</h1>
                <button type="button" className="btn btn-success" onClick={handleAdicionar}>
                    Adicionar Piloto ao Time
                </button>
            </div>
            <ul className="listMeuTime" >
                {meuTime.map((item) => (
                    <div className="card">
                        <img className="card-img-top" src={`/${item.imagem !== null ? item.imagem : 'sem_imagem.png'}`} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.nome}</h5>
                            <p className="card-text">Idade: {item.idade}</p>
                            <p className="card-text">Escuderia: {item.escuderia}</p>
                            <p className="card-text">Rating: {item.rating}</p>
                            <p className="card-text">Pontos: {item.pontos}</p>
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    handleDelete(item.idPiloto)
                                }
                                }
                            >
                                Remover piloto
                            </button>
                        </div>
                    </div>
                ))}
            </ul>

            {addModalOpen && (
                <ModalAdicionarPilotoTime
                    onClose={() => setAddModalOpen(false)}
                    data={pilotosDisponiveis}
                    atualizarPilotos={fetchData}
                />
            )}

            {modalErro && (
            <div className="modal show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Erro</h5>
                    <button type="button" className="btn-close" onClick={() => setModalErro(false)}></button>
                    </div>
                    <div className="modal-body">
                    <p>{mensagemErro}</p>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setModalErro(false)}>
                        Fechar
                    </button>
                    </div>
                </div>
                </div>
            </div>
            )}

        </div>





    )
}