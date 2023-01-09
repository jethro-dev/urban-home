import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

const connect = async () => {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return;
    }
    await mongoose.disconnect();
  }

  const db = mongoose.connect(process.env.MONGO_URI as string);
  console.log("new connection");
  connection.isConnected = mongoose.connections[0].readyState;
};

// const disconnect = async ()=>{
//     if(connection.isConnected){
//         if(process.env)
//     }
// }

const db = { connect };
export default db;
