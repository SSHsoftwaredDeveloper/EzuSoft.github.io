import mongoose from "mongoose";

const connectDB = async () => {
    try {
    if(mongoose.connection.readyState === 0) {
      await mongoose.connect("process.env.mongodb+srv://itxmurshad786736:RgoiZpynMyKwpefy@cluster0.iwxs3gi.mongodb.net/");
      console.log("db connect")
    }
  } catch (e) {
    console.log(e)
  }
}


export default connectDB;



// const MONGODB_URL = process.env.MONGODB_URL;

// if(!MONGODB_URL) {
//     throw new Error("Please define the MONGODB_URL environment variablr inside .env")
// }

// let cached = global.mongoose ;

// if(!cached) {
//     cached = global.mongoose = {con: null , promise: null}
// }


// const connectDB = async () => {
//     if(cached.conn) {
//         return cached.conn;
//     }

//     if(!cached.promise){
//         const opts = {
//             bufferCommands : false
//         };

//         cached.promise = mongoose.connect(MONGODB_URL , opts).then((mongoose) => {
//             return mongoose
//         });
    
//     }
//     try {
//         cached.conn = await cached.promise;
//     } catch (e) {
//         cached.promise = null;
//         throw e;
//     }
//     return cached.conn;
// };

