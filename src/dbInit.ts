import { connect } from 'mongoose';

const dbInit = async () => {
  await connect(process.env.MONGO_URL)
    .then(() => {
      console.log('Database connected!')
    })
    .catch((err) => {
      console.log('Unable to connect to MongoDB Database.\nError: ' + err)
    });
};

export default dbInit;