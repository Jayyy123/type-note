"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const notes_1 = __importDefault(require("./routes/notes"));
const notes_2 = __importDefault(require("./services/notes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(bodyParser)
notes_2.default.sync()
    .then(() => {
    console.log('connection established');
});
const port = process.env.PORT || 3000;
app.use('/notes', notes_1.default);
app.listen(port);
