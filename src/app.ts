import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import { movieRoutes } from './movie.controller';
import { commentRoutes } from './comment.controller';

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(movieRoutes);
app.use(commentRoutes);


export { app }

