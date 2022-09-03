"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesController = void 0;
const notes_1 = require("../models/notes");
exports.notesController = {
    getNotes: (req, res) => {
        notes_1.Notes.findAll()
            .then(data => {
            if (data.length > 0) {
                return res.json({
                    "message": "List of notes found",
                    data
                });
            }
            else {
                res.statusCode = 404;
                return res.json({
                    "message": "Add a note to the list of notes to view notes"
                });
            }
        })
            .catch(err => {
            res.statusCode = 500;
            return res.json({
                "message": "there was an error locating your notes " + err
            });
        });
    },
    getNote: (req, res) => {
        return res.json({
            "message": "notesRoutes " + req.params.id
        });
    },
    postNotes: (req, res) => {
        if (req.body.title !== undefined && req.body.description !== undefined) {
            notes_1.Notes.create(Object.assign({}, req.body))
                .then((note) => {
                res.status(201);
                return res.json({
                    "message": "successfully posted to notesRoutes with " + note
                });
            })
                .catch((error) => {
                res.status(400);
                return res.json({
                    "message": "failed to post to notesRoutes " + error
                });
            });
        }
        return res.json({
            "message": "enter a valid post to notesRoutes "
        });
    },
};
