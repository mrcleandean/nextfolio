import 'dotenv/config';
import http from 'http';
import express from 'express';
import { setupSocket } from './src/chadchess/index.ts';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);

setupSocket(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
