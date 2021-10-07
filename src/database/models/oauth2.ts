import Mongoose from 'mongoose';
import { schema, field, buildSchema } from 'mongoose-schema-decorators';

@schema({ _id: false })
class Oauth2 {
  @field
  public access_token: string;

  @field
  public refresh_token: string;

  @field
  public id: string;
}
const Oauth2Schema: Mongoose.Schema = buildSchema(Oauth2);

const Oauth2Model = Mongoose.model<
  Oauth2 & Mongoose.Document,
  Mongoose.Model<Oauth2 & Mongoose.Document>
>('Oauth2', Oauth2Schema);
export { Oauth2Model };
