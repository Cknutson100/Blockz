import cookieParser from 'cookie-parser';
import path from 'path';
import helmet from 'helmet';
import logger from 'jet-logger';

import express from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';
import cors from 'cors';

import indexRouter from './index';


// **** Variables **** //

const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
  }

const port = process.env.NODE_ENV === "production" ? 80 : process.env.NODE_ENV === "piproduction" ? 3001 : 3002;

// **** Set basic express settings ****# //

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOptions))
app.use(express.static(__dirname + "../build/static"));

// **** Routers **** //

app.use('*', indexRouter);



app.listen(port, () => {
    console.log(`To Do App listening at http://localhost:${port}`);
  })

// **** Export default **** //

export default app;
