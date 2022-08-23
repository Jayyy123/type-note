import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import notesRoutes from './routes/notes';
import connection from './services/notes';


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser)


connection.sync()
    .then(() => {
        console.log('connection established');
    })

const port = process.env.PORT || 3000;

app.use('/notes', notesRoutes)


app.listen(port);


