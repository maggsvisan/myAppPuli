
var app= require('express')();

var http= require('http').Server(app);

var io=require('socket.io')(http);

var admin = require("firebase-admin");
var firebaseCredential= require( __dirname+"/private/serverCredential.json")

admin.initializeApp({
  credential: admin.credential.cert(firebaseCredential),
  databaseURL: "https://community-fbbae.firebaseio.com"
});

io.on('connection', (socket)=>{
  console.log(`Client ${socket.id} has connected`);

  socket.on('disconnect',()=>{
    console.log('A client has disconnected');
  });

});

app.get('/',(req,res) => {
//  res.render('index.html');
  console.log("it works!");
});

http.listen(3000,()=>{
  console.log('Listening on port 3000');
});
