const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db("startup");
const userCollection = db.collection("user");
const scoresCollection = db.collection("scores");


(async function testDatabaseConnection() {
    try {
        await db.command({ ping: 1 });
        console.log("Connected to MongoDB database");
    }
    catch (ex) {
        console.log(`Couldn't connect to MongoDB database because ${ex.message}`);
        process.exit(1);
    }
})();

function getUser(email) {
    return userCollection.findOne({ email: email});
}

function getToken(token) {
    return userCollection.findOne({ token: token });
}

async function addNewUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    await userCollection.updateOne({ emial: user.email }, { $Set: user});
}

async function addNewScore(score) {
    return scoresCollection.insertOne(score);
}

function getScores() {
    const query = { wins: { $gt: -1 } };
    const options = {
        sort: { score: -1 },
        limit: 10,
    };
    const cursor = scoresCollection.find(query, options);
    return cursor.toArray();
}

module.exports = {
    getUser,
    getToken,
    addNewUser,
    addNewScore,
    updateUser,
    getScores
}