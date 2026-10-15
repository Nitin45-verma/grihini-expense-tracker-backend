const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/housewives';
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,  // Fail fast if MongoDB unreachable (5s)
      socketTimeoutMS: 10000,          // Abort slow queries after 10s
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.error(`Attempted URI: ${(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/housewives').replace(/:\/\/.*@/, '://<credentials>@')}`);
    console.warn('⚠️  Server will start without DB — Admin panel accessible but API calls will fail until DB reconnects.');
    // Don't exit; let the Express server start so the admin dashboard is still accessible
  }
};

module.exports = connectDB;
