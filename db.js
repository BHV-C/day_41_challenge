const { MongoClient } = require("mongodb");
const products = require("./model/products")

const uri = "mongodb://127.0.0.1:27017";
const dbName = "productsDB"

const client = new MongoClient(uri, { useUnifiedTopology: true })
// console.log(products)
// async function run(){
//   try{
//     await client.connect()
//     const db = client.db(dbName)
//       console.log("connected successfully")

//     // console.log(phones)
//     const collection = db.collection("products");
//     collection.insertMany(products, (err, result) => {
//       if (err) {
//         console.error('Failed to insert document:', err);
//         return;
//       }
//       console.log('Document inserted:', result.insertedId);
//     });
//     return {db,collection};
//   }catch(err){
//     console.log(err.message)
//   }
// }
client.connect()
const db = client.db(dbName)
  console.log("connected successfully")

// console.log(phones)
const collection = db.collection("products");
collection.insertMany(products, (err, result) => {
  if (err) {
    console.error('Failed to insert document:', err);
    return;
  }
  console.log('Document inserted:', result.insertedId);
});
module.exports = {db}















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
