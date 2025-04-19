const DataList = (props) => {
  return (
    <div>
      <div className="header">
        <h1 className="title">Listando Pilotos</h1>
        <button type="button" className="btn btn-success" onClick={props.onAdd}>Criar Piloto</button>
      </div>

      <ul className="list">
        {props.data.map((item) => (
            <div className="card" key={item.idPiloto}>
              <img className="card-img-top" src={`/${item.imagem !== null ? item.imagem : 'sem_imagem.png'}`} alt="" />              
              <div className="card-body">
                <p className="card-text" id="nome">Nome: {item.nome}</p>
                <p className="card-text" id="idade">Idade: {item.idade}</p>
                <p className="card-text" id="escuderia">Escuderia: {item.escuderia}</p>
                <p className="card-text" id="rating">Rating: {item.rating}</p>
                <p className="card-text" id="pontos">Pontuação: {item.pontos}</p>
              </div>
              <div className="botoesModalDetalhesPiloto">
                <button
                  className="btn btn-primary botaoMaisDetalhes"
                  onClick={() => props.clicked(item)}
                >
                  Mais detalhes
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    console.log("Item que será excluído:", item);
                    props.onConfirmDelete(item)
                  }
                  }
                >
                  Excluir
                </button>
              </div>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
