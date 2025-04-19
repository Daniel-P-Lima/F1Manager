/*
    Consulta no banco de dados
*/

import { db } from "../db.js";

export const getPilotos = (_, res) => {
  const query = "SELECT * FROM pilotos";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const editarPiloto = (req, res) => {
  const { idPiloto, nome, idade, escuderia, rating, pontos } = req.body;
  const sql =
    "UPDATE pilotos SET nome = ?, idade = ?, escuderia = ?, rating = ?, pontos = ? WHERE idPiloto = ?";

  db.query(
    sql,
    [nome, idade, escuderia, rating, pontos, idPiloto],
    (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      console.log();
      return res.json({ message: results });
    }
  );
};

export const adicionarPiloto = (req, res) => {
  const { nome, idade, escuderia, rating, pontos } = req.body;

  const insertSql =
    "INSERT INTO pilotos (nome, idade, escuderia, rating, pontos) VALUES (?, ?, ?, ?, ?)";
  db.query(
    insertSql,
    [nome, idade, escuderia, rating, pontos],
    (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.json({ message: "Piloto adicionado com sucesso!" });
    }
  );
};

export const deletarPiloto = (req, res) => {
  const idPiloto = req.params.idPiloto;

  const buscaPiloto = "SELECT * FROM time WHERE idPiloto = ?";

  db.query(buscaPiloto, [idPiloto], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao verificar piloto" });
    }

    if (results.length > 0) {
      return res.status(400).json({
        error: `O piloto está vinculado ao seu time!
        Exclua o piloto do seu time primeiro!`,
      });
    }

    const sql = "DELETE FROM pilotos WHERE idPiloto = ?";

    db.query(sql, [idPiloto], (err, results) => {
      if (err) {
        console.error("Erro ao excluir piloto:", err);
        return res.status(500).json({ error: "Erro ao excluir" });
      }

      return res.json({ message: "Piloto excluído com sucesso!" });
    });
  });
};

export const meuTime = (req, res) => {
  const sql = `SELECT 
  t.idTime, 
  t.idPiloto,
  p.nome, 
  p.idade,
  p.escuderia,
  p.rating,
  p.pontos,
  p.imagem
  FROM time t 
  INNER JOIN pilotos p
    ON p.idPiloto = t.idPiloto
  WHERE idUsuario = 1;`;

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const removerPilotoDoTime = (req, res) => {
  const idPiloto = req.params.idPiloto;

  const sql = `DELETE 
  FROM time 
  WHERE idPiloto = ?
  `;
  db.query(sql, [idPiloto], (err, results) => {
    if (err) {
      console.error("Erro ao remover o piloto piloto:", err);
      return res.status(500).json({ error: "Erro ao excluir" });
    }

    return res.json({ message: "Piloto removido com sucesso!" });
  });
};

export const getPilotosDisponiveis = (req, res) => {
  const sql = `
    SELECT * FROM pilotos 
    WHERE idPiloto NOT IN (SELECT idPiloto FROM time WHERE idUsuario = 1)
  `;

  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    return res.status(200).json(data);
  });
};

export const adicionarPilotoAoTime = (req, res) => {
  const { idUsuario, idPiloto } = req.body;

  const sql = "INSERT INTO time (idUsuario, idPiloto) VALUES (?, ?)";

  db.query(sql, [idUsuario, idPiloto], (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Erro ao adicionar piloto ao time" });

    return res
      .status(200)
      .json({ message: "Piloto adicionado ao time com sucesso" });
  });
};
