import { Notes } from "../models/notes";
import { Request, Response, RequestHandler } from "express"

export const notesController = {
    getNotes: (req:Request, res:Response) => {

        Notes.findAll()
            .then( data => {
                if (data.length > 0) {
                    return res.json({
                        "message":"List of notes found",
                        data
                    })
            }else {
                res.statusCode = 404;
                return res.json({
                    "message":"Add a note to the list of notes to view notes"
                })
            }
        })
            .catch( err => {
                res.statusCode = 500;
                return res.json({
                    "message":"there was an error locating your notes " + err
                })
            })
    },
    getNote: (req:Request, res:Response) :Response => {
        return res.json({
            "message":"notesRoutes " + req.params.id
        });
    },
    postNotes: (req:Request, res:Response) : Response => {

        if (req.body.title !== undefined && req.body.description !== undefined) {
            Notes.create({...req.body})
                .then((note) => {
                    res.status(201)
                    return res.json({
                        "message":"successfully posted to notesRoutes with " + note
                    });
                })
                .catch((error) => {
                    res.status(400)
                    return res.json({
                        "message":"failed to post to notesRoutes " + error
                    });
                });
        }

        return res.json({
            "message":"enter a valid post to notesRoutes "
        });
    },
}