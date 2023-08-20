//Importo la funcion ES:


//Importo la funcion COMMON JS:
const whiteboard = require("./whiteboard");
const io = require("socket.io-client");
 
var socket = io(window.location.origin); //Le indica a "io", a lo que tiene que estar atento

  socket.on("connect", function () {
    console.log("Connected!");
  });

  socket.on("load", function (strokes) {
    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });
  });

  socket.on("draw", function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on("draw", function (start, end, color) {
    socket.emit("draw", start, end, color);
  });

