import express from "express";
import * as dotenv from "dotenv";
// import {
//   buildConnection,
//   registerUserData,
//   findExistingUser,
// } from "./connectionDB.js";

import productsList from './allProducts.js';

dotenv.config();
const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", function (req, res) {
  res.send("Server is running /👍");
});


// get product filters

app.get('/products',function(req,res){
  let productList = productsList;
  res.status(200).json({result:productList});
})

//Post request for login user;
// app.post("/login", function (request, response) {
//   console.log(request.body.email);
//   let email = request.body.email;
//   let password = request.body.password;
//   if (!email && !password) return;
//   buildConnection().then((resolve) => {
//     let query = { email: email, securityKey: password };
//     findExistingUser(query).then((resolve) => {
//       if (resolve.length > 0) {
//         response.status(200).json({ email: email, isLogedIn: true });
//       } else {
//         response
//           .status(201)
//           .json({
//             email: email,
//             isLogedIn: false,
//             errorMsg: "Check your email and password",
//           });
//       }
//     });
//   });
// });

// POST request for register user
// app.post("/register", function (request, response) {
//   let { firstName, lastName, email, password } = request.body;
//   if (!firstName && !lastName && !email && !password)
//     response.status(404).json({ message: "Data not found" });
//   buildConnection().then((resolve) => {
//     let payload = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       securityKey: password,
//     };
//     let query = { email: email };
//     findExistingUser(query).then((resolve) => {
//       if (resolve.length > 0) {
//         response
//           .status(201)
//           .json({ message: "User already registered", isExistingUser: true });
//       } else {
//         registerUserData(payload)
//           .then((resolve) => {
//             response.status(200).json({
//               message: "User Registered Successfully",
//               isRegisterd: true,
//             });
//           })
//           .catch((error) => {
//             response.status(501).json({
//               message: "Not able to Register User",
//               error: error,
//               isRegisterd: false,
//             });
//           });
//       }
//     });
//   });
// });

app.listen(PORT, () => console.log("Server is running /👍"));
