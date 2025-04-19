import React from "react";

function ModalErro({ mensagem, onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Erro</h2>
                <p>{mensagem}</p>
                <button className="btn btn-danger" onClick={onClose}>
                    Fechar
                </button>
            </div>
        </div>
    );
}

export default ModalErro;
