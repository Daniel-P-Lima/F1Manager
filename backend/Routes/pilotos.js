import express from "express";
import { editarPiloto, getPilotos, adicionarPiloto, deletarPiloto, meuTime, removerPilotoDoTime,
     getPilotosDisponiveis, adicionarPilotoAoTime} from "../Controllers/pilotos.js";

const router = express.Router();
router.get("/", getPilotos);
router.put("/editarPiloto", editarPiloto);
router.post("/adicionarPiloto", adicionarPiloto);
router.delete("/deletarPiloto/:idPiloto", deletarPiloto);
router.delete("/removerPilotoDoTime/:idPiloto", removerPilotoDoTime);
router.get("/meuTime", meuTime);
router.get("/pilotos-disponiveis", getPilotosDisponiveis);
router.post("/adicionarPilotoAoTime", adicionarPilotoAoTime);

export default router;