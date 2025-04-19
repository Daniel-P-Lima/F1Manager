import React from "react";

function ModalEditarUser({ piloto, atualizarPilotos, onClose}) {
  const [formData, setFormData] = React.useState({
    idPiloto: piloto.idPiloto,
    nome: piloto.nome,
    idade: piloto.idade,
    escuderia: piloto.escuderia,
    rating: piloto.rating,
    pontos: piloto.pontos,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8800/editarPiloto", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Resposta do servidor:", data);
        atualizarPilotos();
        onClose();
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Piloto</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm">
              <label for="validarNome">Nome</label>
              <input type="text" className="form-control" id="validarNome" placeholder="Nome" required
              name="nome"
              value={formData.nome}
              onChange={handleChange}/>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validarIdade">Idade</label>
              <input type="number" className="form-control" id="validarIdade" placeholder="Idade" required
              name="idade"
              value={formData.idade}
              onChange={handleChange}/>
            </div>
          </div>
          
          <div className="row">
            <div class="col-md-4 mb-3">
              <label for="validarEscuderia">Escuderia</label>
              <input type="text" class="form-control" id="validarEscuderia" placeholder="Escuderia" required
              name="escuderia"
              value={formData.escuderia}
              onChange={handleChange}/>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validarRating">Rating</label>
              <input type="number" class="form-control" id="validarRating" placeholder="Rating" required
              name="rating"
              value={formData.rating}
              onChange={handleChange}/>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validarPontos">Pontuação</label>
              <input type="text" class="form-control" id="validarPontos" placeholder="Pontuação" required
              name="pontos"
              value={formData.pontos}
              onChange={handleChange}/>
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

export default ModalEditarUser;
