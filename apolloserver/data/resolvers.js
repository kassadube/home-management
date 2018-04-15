//import { Author, View, FortuneCookie, Option } from './connectors';
import { GraphQLScalarType } from 'graphql/type';
import {MongoClient, ObjectId} from 'mongodb';
import { Kind } from 'graphql/language';
import jwt from 'jsonwebtoken';

//const conn = "mongodb://root:password@ds241869.mlab.com:41869/";
const conn = "mongodb://localhost/";

const TEMP_USER = {
  _id: "1",
  email:"noams@pointer.com",
}

const JWT_SECRET ="jwtsecret";

const resolvers = {  
  Query: {
    currentUser: (root, args, {user}) =>
    {
      return user;
    }
  },
  Mutation: {
    async login(root,{email, password}, {mng}){
     	const dbUsers = mng.collection('users'); 
      const user = await dbUsers.findOne({email});
      if(!user){
        throw Error("User not exists");
      }
      if(user.password != password)
      {
        throw Error("Password not valid");
      }
      user.jwt = jwt.sign({_id: user._id},JWT_SECRET);
      return user;     
    },
    async signup(root,{email, password}, {mng}){

       const dbUsers =  mng.collection('users');       
      
      const existingUser = await dbUsers.findOne({email});
      if(existingUser){
        throw Error("User exists");
      }
      
      const hash = password;// await bcrypt.hash(password,10);
      await dbUsers.insert({
        email,
        password:hash
      });
      let user = await dbUsers.findOne({email});
      user.jwt = jwt.sign({_id: user._id},JWT_SECRET);
      return user;
    }
  }, 
};

let mng;


const getUser = async (authorization, mng) =>{
  let bearerLength = "Bearer ".length;
  console.log('authorization',authorization);
  if(authorization && authorization.length > bearerLength)
  {
  		const token = authorization.slice(bearerLength);
    	console.log(token);
    const {ok, result} = await new Promise(resolve =>
                                          	jwt.verify(token, JWT_SECRET, (err, result) => {
    																						if(err){
                                                  resolve({
                                                    ok: false,
                                                    result: err
                                                  })
                                                }else{
                                                  	resolve({
                                                      ok: true,
                                                      result
                                                    })
                                                }
                                                       
   																				 })
                                          );
    if(ok){
     	const dbUsers = mng.collection('users');
    	let user = await dbUsers.findOne({_id: ObjectId(result._id)});
      user.jwt = token;
      return user;
    }
    return null;
  }
  return null;
  
}

export async function context(headers, secrets) {
  console.log("CONTEXT");
  if(!mng) { 
    let db = await MongoClient.connect(conn);
    mng = db.db('homemanagement');
  }
  const user = getUser(headers['authorization'], mng);
  return {
    headers,
    secrets,
    mng, 
    user,  
  };
};

export default resolvers;