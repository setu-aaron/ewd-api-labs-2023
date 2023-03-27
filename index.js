import dotenv from 'dotenv';
import express from 'express';
import createMoviesRouter from './src/movies/routes';
import genresRouter from './src/genres/routes';
import createAccountsRouter from './src/accounts/routes';
import buildDependencies from './src/config/dependencies';

dotenv.config();

const dependencies = buildDependencies();

const app = express();

let port = process.env.PORT;

if (port == null || port == '') {
  port = 8080;
}

app.use(express.json());

app.use('/api/movies', createMoviesRouter(dependencies));
app.use('/api/genres', genresRouter(dependencies));
app.use('/api/accounts', createAccountsRouter(dependencies));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
