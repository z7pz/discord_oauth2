import * as web from 'express-decorators';
import { Response, Request } from 'express';
import { Oauth2Model } from '../database';
@web.basePath('/oauth2')
class Oauth2Controller {
  @web.get('/discord')
  async outh2(req: Request, res: Response) {
    res.send('discord');
  }
}

export { Oauth2Controller };
