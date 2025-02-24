
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://ayushmaurya:#Ayush12@portfolio.mxcks.mongodb.net/?retryWrites=true&w=majority&appName=portfolio';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};
