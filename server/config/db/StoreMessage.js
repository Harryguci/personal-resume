const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://harryguci:harryguci@cluster01.chrqhpv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// The database to use
const dbName = "test";

async function store(messDocument) {
  try {
    await client.connect();
    console.log("Store successfully...");
    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection("message");

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(messDocument);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
module.exports = { store };
