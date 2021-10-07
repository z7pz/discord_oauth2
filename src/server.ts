import express from 'express';
import morgan from 'morgan';
import * as web from 'express-decorators';
import config from './config';
import { Oauth2Controller } from './controllers';
const app = express();
app.listen(config.port, () => {
  console.log(`Server is online on port: ${config.port}`);
});
const oauth2Controller = new Oauth2Controller();
app.use(morgan('dev'));
web.register(app, oauth2Controller);
