import mongoose, {ConnectOptions} from 'mongoose';

interface MongoDBConnectOptions extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

export const connectToMongoDB = async():Promise<void>=>{
  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }as MongoDBConnectOptions);
    console.log('Connected to MongoDB');
  } catch (error) {
    throw error;
  }
};