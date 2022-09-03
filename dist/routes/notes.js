"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_1 = require("../controllers/notes");
const notesRoutes = (0, express_1.Router)();
notesRoutes.get('/', notes_1.notesController.getNotes);
notesRoutes.get('/:id', notes_1.notesController.getNote);
notesRoutes.post('/', notes_1.notesController.postNotes);
exports.default = notesRoutes;
