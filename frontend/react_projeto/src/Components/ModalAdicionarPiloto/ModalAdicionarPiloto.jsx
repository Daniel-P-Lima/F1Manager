import { useState } from "react";
import "../../App.css";
export default function ModalAdicionarPiloto({ onClose, atualizarPilotos, setErro }) {
    const [formData, setFormData] = useState({
        nome: "",
        idade: "",
        escuderia: "",
        rating: "",
        pontos: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8800/adicionarPiloto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(async (response) => {
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Erro ao adicionar piloto.");
                }

                console.log("Piloto adicionado:", data);
                atualizarPilotos();
                onClose();
            })
            .catch((error) => {
                console.error("Erro ao adicionar:", error);
                setErro(error.message);
            });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Adicionar Piloto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm">
                            <label for="adicionarNome">Nome</label>
                            <input type="text" className="form-control" id="adicionarNome" placeholder="Nome" required
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="adicionarIdade">Idade</label>
                            <input type="number" className="form-control" id="adicionarIdade" placeholder="Idade" required
                                name="idade"
                                value={formData.idade}
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div class="col-md-4 mb-3">
                            <label for="adicionarEscuderia">Escuderia</label>
                            <input type="text" class="form-control" id="adicionarEscuderia" placeholder="Escuderia" required
                                name="escuderia"
                                value={formData.escuderia}
                                onChange={handleChange} />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="adicionarRating">Rating</label>
                            <input type="number" class="form-control" id="adicionarRating" placeholder="Rating" required
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange} />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="adicionarPontos">Pontuação</label>
                            <input type="text" class="form-control" id="adicionarPontos" placeholder="Pontuação" required
                                name="pontos"
                                value={formData.pontos}
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className="botoes">
                        <button type="submit" className="btn btn-success">Salvar</button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

