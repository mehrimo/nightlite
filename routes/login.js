'use strict';

const express = require('express');
// const app = express();
const router = express.Router();

const knex = require('../knex');

const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

// const boom = require('boom');
// router.use(bodyParser.json());

router.post('/login',(req, res, next) => {
  req.session = null;
  console.log('log out');
  res.send('logged out');
});

//new acct
//is working and posting to db
// router.post('/login', (req,res,next) => {
//
//   let userName = req.body.loginuser;
//   let hashedPW = bcrypt.hashSync(req.body.userpassword, 8);
//   console.log(userName);
//   console.log(hashedPW);
//
//   knex('users')
//   .where({username: userName})
//   .then(function (results) {
//     if (results.length === 0) {
//       knex('users')
//       .insert({
//         username: userName,
//         hashed_password: hashedPW
//       }, '*')
//       .then(function (result) {
//         //success/redirect
//         // console.log(result[0].id);
//
//         req.session.id = result[0].id;
//         req.session.username = result[0].username;
//         req.session.isAdmin = result[0].admin;
//         req.session.created = result[0].created_at;
//
//         console.log(req.session.id);
//         console.log(req.session.username);
//         console.log(req.session.isAdmin);
//         console.log(req.session.created);
//         // console.log(readId);
//         res.redirect('/login.html');
//         /////////need to get user info back to set in session
//
//
//       })
//       .catch(function (err) {
//         next(err);
//       });
//     }else{
//       res.status(400).send('User Already Exists');
//     }
//   });
// });

// existing users
// router.post('/login',(req, res, next) =>{
//
//   let userName = req.body.loginuser;
//   let password = req.body.userpassword;
//   let path = req.body.action1;
//
//   console.log(userName);
//   console.log(password);
//   console.log(path);
//
//   if (!userName || !password) {
//     res.sendStatus(400);
//   }
//
//     knex('users')
//       .where({username: userName})
//       .first()
//       .then((result) => {
//         console.log(result);
//         if (!result) {
//           if (!result || !bcrypt.compareSync(password,result[0].password_hash)) {
//           res.sendStatus(401);
//         }else{
//           req.session.username = result[0].username;
//           console.log(req.session.username);
//           //logging user's id
//           res.redirect('/login.html');
//         }
//       }
//       })
//       .catch((err)=>{
//         next(err);
//       });
//
// });

// router.post('/login',(req, res, next) => {
//   req.session = null;
//   res.send('logged out');
// });


module.exports = router;