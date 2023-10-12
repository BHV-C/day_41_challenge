const { MongoClient } = require("mongodb");
const products = require("./model/products")

const uri = "mongodb://127.0.0.1:27017";
const dbName = "products"

const client = new MongoClient(uri)
// console.log(products)
async function run(){
  try{
    await client.connect()
    const db = client.db(dbName)
      console.log("connected successfully")

    // console.log(phones)
    return db;
  }catch(err){
    console.log(err.message)
  }
}
module.exports = {run}















// const { MongoClient } = require("mongodb");

// const uri = "mongodb://127.0.0.1:27017";
// const dbName = "products"; // Replace with your actual database name

// const client = new MongoClient(uri);
// async function run() {

//       try {
//         await client.connect();
//         const db = client.db(dbName);
//         console.log("Connected to database");
//         return db;
//       } catch (error) {
//         console.error("Error connecting to database:", error.message);
//       }

// }

// module.exports = { run };
