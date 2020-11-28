const ObjectId = require("mongodb").BSONType.ObjectId;
const String = require("mongodb").BSONType.String;
const Boolean = require("mongodb").BSONType.Boolean;
const Double = require("mongodb").BSONType.Double;
const Int = require("mongodb").BSONType.Int;
const Date = require("mongodb").BSONType.Date;

// using manual referencing

UserSchema = {
  id: ObjectId, // @required
  username: String, // @required
  email: String, // @required
  password: String, // @required
  lastModified: Date,
  followerlist: [ObjectId], // refs of user
  followinglist: [ObjectId], // refs of user
  uploadList: [ObjectId], // refs of music
  downloadList: [ObjectId], // refs of music
  likedList: [ObjectId], // refs of music
  SearchList: [String], // searched keywords
  watchList: [Music_id], // refs of music
  Playlist: [ObjectId], // refs of playlist
};

MusicSchema = {
  id: ObjectId, // @required
  owner: ObjectId, // @required
  title: String, // @required
  duration: Double, // @required
  createdAt: Date,
  lastModified: Date,
  musicBy: [String],
  viewCount: Int,
  likeCount: Int,
  genre: [String],
  tags: [String],
  privacy: Int, // 0->public , 1->private
  comments: [
    {
      _id: ObjectId, // id of comment
      by: ObjectId, // id of user
      name: String, // name of user
      comment: String,
    },
  ],
};

Moderator = {
  Id: String,
  Password: String,
  Name: String,
  Email: String,
};

Playlist = {
  _id: String,
  name: String,
  musics: [Music_id],
  privacy: Boolean /*true-->private , false-->public*/,
};

Report = {
  _id: String,
  by: userid,
  status: String,
  contentType: String,
  musicId: String,
  commentId: String,
  playlistId: String,
};
