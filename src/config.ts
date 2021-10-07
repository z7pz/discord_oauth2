import 'dotenv/config';
import env from 'env-var';

const config = {
  port: 3000,
  discord: {
    secret: '',
    id: '',
    callback_uri: '',
  },
} as const;

export default config;
