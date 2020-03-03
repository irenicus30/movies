import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import { todoRoutes } from './todo.controller';

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(todoRoutes);


export { app }

