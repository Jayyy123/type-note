import { Router } from "express";
import {Request, Response } from "express";
import { notesController } from "../controllers/notes";

const notesRoutes = Router();

notesRoutes.get('/', notesController.getNotes)

notesRoutes.get('/:id', notesController.getNote)

notesRoutes.post('/', notesController.postNotes)


export default notesRoutes;