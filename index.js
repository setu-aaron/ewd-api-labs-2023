import dotenv from 'dotenv';
import express from 'express';
import createMoviesRouter from './src/movies/routes';
import createShowsRouter from './src/shows/routes';
import genresRouter from './src/genres/routes';
import createAccountsRouter from './src/accounts/routes';
import buildDependencies from './src/config/dependencies';
import db from './src/config/db';
import errorHandler from './src/utils/ErrorHandler';

dotenv.config();
db.init();

const dependencies = buildDependencies();

const app = express();
const cors = require('cors');

// app.use(cors({
//   origin: '*',
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// }));

let port = process.env.PORT;

if (port == null || port == '') {
  port = 8080;
}

console.log("Databae Dialect: ", process.env.DATABASE_DIALECT);

app.use(express.json());
app.use(errorHandler);

app.use('/api/movies', createMoviesRouter(dependencies));
app.use('/api/shows', createShowsRouter(dependencies));
app.use('/api/genres', genresRouter(dependencies));
app.use('/api/accounts', createAccountsRouter(dependencies));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
}); 

