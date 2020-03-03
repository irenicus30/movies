import { app } from './app';
import * as http from 'http';
import * as mongoose from "mongoose";

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://test:test1!@ds145346.mlab.com:45346/movies54698';

const server = http.createServer(app);

server.listen(PORT);
server.on('error', (err) => {
  console.error(err);
});

server.on('listening', async () => {
    console.info(`Listening on port ${PORT}`);
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
          () => { console.info('Connected to Mongo via Mongoose'); },
          (err) => { console.error('Unable to connect to Mongo via Mongoose', err); }
    );
});

