const getDb = require("./dbconnect");
const ObjectID = require("mongodb").ObjectID;

const userId1 = new ObjectID("5fc2796c89e37e419ca67578");
const userId2 = new ObjectID("5fc2796c89e37e419ca67575");
const musicId1 = new ObjectID("5fc284211d90724004054e73");

const singleData = {
  title: "Shonali Din gulo",
  owner: new ObjectID("5fc2796c89e37e419ca67577"),
  duration: 260,
  genre: ["RabindraSangeet"],
  musicBy: ["Rabindranath tagore"],
};
const data = require("./music_data.js");

getDb().then((db) => {
  const users = db.collection("users");
  const musics = db.collection("musics");

  //insertOne(singleData);
  //insertMany(data);
  //ownerOfMusic(new ObjectID("5fc27e1a94510d21881d3d80"));
  addComment(musicId1, userId1, "this is a comment");

  async function insertMany(data) {
    data.forEach(async (e) => {
      const { title, owner, duration, genre, musicBy } = e;
      const music = await musics.insertOne({
        title,
        owner,
        duration,
        genre,
        musicBy,
        privacy: 0,
      });
      await users.updateOne(
        { _id: owner },
        { $push: { uploadList: music.insertedId } }
      );
    });
  }

  async function insertOne({ title, owner, duration, genre, musicBy }) {
    const music = await musics.insertOne({
      title,
      owner,
      duration,
      genre,
      musicBy,
    });
    await users.updateOne(
      { _id: owner },
      { $push: { uploadList: music.insertedId } }
    );
  }

  async function ownerOfMusic(id) {
    const music = await musics.findOne({ _id: id });
    const owner = await users.findOne(
      { _id: music.owner },
      { projection: { _id: 1, username: 1 } }
    );
    console.log(owner);
  }

  async function addComment(musicId, userId, comment) {
    const commentId = new ObjectID();
    console.log(commentId);
    const user = await users.findOne(
      { _id: userId },
      { projection: { username: 1 } }
    );
    console.log(user);
    await musics.updateOne(
      { _id: musicId },
      {
        $push: {
          comments: {
            _id: commentId,
            by: userId,
            name: user.username,
            comment,
          },
        },
      }
    );
  }
});

// await users.updateOne({}, [
//   {
//     $set: {
//       "lastModified": "$$NOW",
//     },
//   },
// ]);
