const mongodb = require("mongodb");

const id1 = new mongodb.ObjectID("5fc2796c89e37e419ca67575");
const id2 = new mongodb.ObjectID("5fc2796c89e37e419ca67576");
const id3 = new mongodb.ObjectID("5fc2796c89e37e419ca67577");

const data = [
  {
    title: "Tumi robe nirobe",
    owner: id1,
    duration: 300,
    genre: ["RabindraSangeet"],
    musicBy: ["Rabindranath tagore"],
  },
  {
    title: "Amar shonar bangla",
    owner: id2,
    duration: 250,
    genre: ["RabindraSangeet"],
    musicBy: ["Rabindranath tagore"],
  },
  {
    title: "Purple Haze",
    owner: id3,
    duration: 270,
    genre: ["Rock"],
    musicBy: ["Jim Hendrix"],
  },
  {
    title: "Kobita",
    owner: id1,
    duration: 310,
    genre: ["band", "Pop"],
    musicBy: ["James"],
  },
  {
    title: "Take me Home",
    owner: id2,
    duration: 250,
    genre: ["Country"],
    musicBy: ["John Denver"],
  },
  {
    title: "Say What",
    owner: id2,
    duration: 369,
    genre: ["Jazz"],
    musicBy: ["Miles Davis"],
  },
  {
    title: "She je boshe ase",
    owner: id3,
    duration: 270,
    genre: ["Slow Song"],
    musicBy: ["Arnab"],
  },
  {
    title: "Alo Alo",
    owner: id2,
    duration: 300,
    genre: ["Modern"],
    musicBy: ["Tahsan"],
  },
  {
    title: "Keno chole gele dure",
    owner: id1,
    duration: 250,
    genre: ["Romantic"],
    musicBy: ["Sahana Bajpaie"],
  },
  {
    title: "Ami taray taray",
    owner: id3,
    duration: 300,
    genre: ["Romantic", "Band"],
    musicBy: ["James"],
  },
];
module.exports = data;
