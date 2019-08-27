const express = require('express');
const app = express();
const fs = require('fs')
const fileUpload = require('express-fileupload');

var arr = [
    "1",
    "2"
  ];

app.use(express.static('public'));

 var traverseFileSystem = function (currentPath) {
    console.log(currentPath);
    var files = fs.readdirSync(currentPath);
    for (var i in files) {
       var currentFile = currentPath + '/' + files[i];
       var stats = fs.statSync(currentFile);
       if (stats.isFile()) {
       console.log(currentFile);
       arr.push(currentFile)
       }
      else if (stats.isDirectory()) {
             traverseFileSystem(currentFile);
           }
     }
   };
  var a = traverseFileSystem('./public/memes/');

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});
app.get('/browse', function(request, response) {
    response.send(arr[2]);
    response.send(arr[3]);
    response.send(arr[4]);
  });

app.get('/upload', function(request, response) {
    response.sendFile(__dirname + '/public/upload.html');
  });

app.use(fileUpload());

app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('You didnt put a file, Remeber to embed one next time!');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('public/memes/'+sampleFile.name, function(err) {
    if (err)
      return res.status(500).send("ERR");

    res.send('File uploaded! <br> You can leave this page!');
  });
});
  
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/404.html');
    console.log("A IDIOT JUST DIDNT KNOW WHERE THE FILE WAS HAHA!")
  });
// listen for requests :)
const listener = app.listen(7000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
