import * as express from 'express';
import { MovieModel } from './movie';
import { api } from './api';

const API_KEY = 'http://www.omdbapi.com/?apikey=4bcca09a';
 
const movieRoutes = express.Router();


movieRoutes.get('/movies', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    try {
        let movies: any = await MovieModel.find({});
        resp.json(movies);
    } catch(err) {
        resp.status(500);
        resp.end();
        console.error('Caught error', err);
    }
});
 
movieRoutes.post('/movies', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const title  = req.body['Title'];
    const id  = req.body['imdbID'] || req.body['i'] || req.body['id'] || req.body['ID'] || req.body['Id'];

    console.log(req.body);
    let exists = false;
    if(title!==undefined && exists===false) {
        try {
              exists = await MovieModel.exists({Title: title});

        } catch(err) {
              console.error('Cought error', err);
        }
    }
    if(id!==undefined && exists===false) {
        try {
              exists = await MovieModel.exists({imdbID: id});
        } catch(err) {
              console.error('Cought error', err);
        }
    }
    //console.log(exists, title, id);
    if(exists===true) {
        resp.end();
        return;
    }
    if(title===undefined && id===undefined) {
        resp.end();
        return;
    }

    let url: string = API_KEY;
    if(title) {
        url = url + '&Title=' + title;
    }
    if(id) {
        url = url + '&i=' + id;
    }

    const data = await api(url);
    //console.log(url);
    await MovieModel.create(data);



    resp.json(data);
    resp.end();
});
 
 
export { movieRoutes }