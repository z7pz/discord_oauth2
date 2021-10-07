import mongoose, { ConnectOptions } from 'mongoose';

export async function connect() {
  await mongoose.connect(
    'mongodb://localhost:27017/test',
    {
      useNewUrlParser: true,
    } as ConnectOptions,
    (err) => {
      if (!err) {
        console.info('MongoDB Connection Succeeded.');
      } else {
        console.error('Error in DB connection: ' + err);
      }
    }
  );
}
