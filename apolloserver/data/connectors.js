import Mongoose from 'mongoose';
import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';
import fetch from 'node-fetch';

Mongoose.Promise = global.Promise;

const db = new Sequelize('blog', null, null, {
  dialect: 
  'sqlite',
  storage: './blog.sqlite',
});

//const mongo = Mongoose.connect('mongodb://root:password@ds241869.mlab.com:41869/homemanagement', {  useMongoClient: true});
//const mongo = Mongoose.connect('mongodb://localhost/views', {  useMongoClient: true});

const ViewSchema = Mongoose.Schema({
  postId: Number,
  views: Number,
});
const View = Mongoose.model('views', ViewSchema);

let mng;
export async function context(headers, secrets) {
  if(!mng) { 
    let db = await Mongoose.connect('mongodb://localhost/views', {  useMongoClient: true});
    mng = db.db('homemanagement');
 }
  return {
    headers,
    secrets,
    mng,   
  };
};

export { Author, Post, View, FortuneCookie, Option};