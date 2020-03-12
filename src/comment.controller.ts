import * as express from 'express';
import { CommentModel } from './comment';

const API_KEY = 'http://www.omdbapi.com/?apikey=4bcca09a';
 
const commentRoutes = express.Router();


commentRoutes.get('/comments', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    try {
        let comments: any = await CommentModel.find({});
        resp.json(comments);
        next();
    } catch(err) {
        resp.status(500);
        resp.end();
        console.error('Caught error', err);
    }
});
 
commentRoutes.post('/comments', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const id  = req.body['imdbID'] || req.body['i'] || req.body['id'] || req.body['ID'] || req.body['Id'];
    const text = req.body['comment'] || req.body['text'];

    await CommentModel.create({imdbID: id, text: text});

    resp.json(text);
    next();
});
 
 
export { commentRoutes }
