import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import handleErrors from './middlewares/handleErrors';
import usersRouter from './components/users/routers';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/users', usersRouter);

app.use(handleErrors)

export default app;
