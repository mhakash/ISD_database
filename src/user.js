const getDb = require("./dbconnect");
const ObjectID = require("mongodb").ObjectID;

const singleData = {
  username: "fox",
  email: "fox@gmail.co",
  password: "kadnakdakd",
};
const data = require("./data");

const userId1 = new ObjectID("5fc2796c89e37e419ca67578");
const userId2 = new ObjectID("5fc2796c89e37e419ca67575");
const musicId1 = new ObjectID("5fc284211d90724004054e73");

getDb().then((db) => {
  const users = db.collection("users");
  const musics = db.collection("musics");

  //insertOne(singleData);
  //insertMany(db);
  // searchByUserName("shorna");
  //follow(userId1, userId2);
  //likeMusic(userId1, musicId1);
  //likeMusic(userId2, musicId1);

  async function insertMany() {
    await users.insertMany(data);
  }

  async function insertOne({ username, email, password }) {
    await users.insertOne({
      username,
      email,
      password,
    });
  }

  async function searchByUserName(name) {
    const result = await users.findOne({ username: name });
    console.log(result);
  }

  async function follow(followerId, followingId) {
    const result = await users.findOne({
      _id: followerId,
      followinglist: followingId,
    });
    if (!result) {
      await users.updateOne(
        { _id: followerId },
        { $push: { followinglist: followingId } }
      );
      await users.updateOne(
        { _id: followingId },
        { $push: { followerlist: followerId } }
      );
    }
  }

  async function likeMusic(userId, musicId) {
    const result = await users.findOne({
      _id: userId,
      likedList: musicId,
    });
    if (!result) {
      await users.updateOne({ _id: userId }, { $push: { likedList: musicId } });
      await musics.updateOne(
        {
          _id: musicId,
        },
        { $inc: { likeCount: 1 } }
      );
    }
  }
});

// await users.updateOne({}, [
//   {
//     $set: {
//       "lastModified": "$$NOW",
//     },
//   },
// ]);
