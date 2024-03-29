const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
// const nodemailer = require("nodemailer");
const userModel = require('./modules/users');
//coneccting database
mongoose.connect("mongodb://localhost:27017/userdb")
  .then(() => console.log("Connection established"))
  .catch(err => console.error("Error in connection" + err))
app.use(express.json());
app.use(express.static('public'))
// app.get('/addstatic', (req, res) => {
//   var mydata = {
//     user_email: "Kiran Baraiya",
//     user_pass: 18
//   }
//   userModel.create(mydata)
//     .then(() => console.log("Record added successfully"))
//     .catch(err => console.error("Error in data addition" + err))
//   res.send("Record added successfully");
// //   sendmail().catch(console.error); 
// })
//addding data through api (POSTMAN check)
app.post('/login_form', (req, res) => {
  var mydata = req.body;
  userModel.create(mydata)
    .then(() => console.log("Record added successfully"))
    .catch(err => console.error("Error in data addition" + err))
  res.send(JSON.stringify("Record added successfully"))
})
app.get('/display', (req, res) => {
  userModel.find()
    .then(data => res.json(data))
    .catch(err => console.error(err));
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: "", //sender's email address
//     pass: "", //app password
//   },
// });
// async..await is not allowed in global scope, must use a wrapper
// async function sendmail() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '<>', // sender address
//     to: "kiranbaraiya2005@gmail.com", // list of receivers
//     subject: "Value removed", // Subject line
//     text: "Value removed from database", // plain text body
//     html: "<b>Value removed successfully</b>", // html body
//   });
//   console.log("Message sent: %s", info.messageId);
// }
//conforming listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})