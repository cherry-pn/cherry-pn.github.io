
var client;
var dt = new Date();
var topicInput = "barlas/volume";
var payload = "the volume is on at level ";


$('#slider').on("click", function () {
  if ($('#slider').text() == "on") {
    var finalLoad=payload +" 51" + " " + dt.toUTCString();
    client.publish(topicInput, finalLoad);
    console.log(finalLoad);
  
    {
      var finalLoad=payload +" 52" + " " + dt.toUTCString();
      client.publish(topicInput, finalLoad);
      console.log(finalLoad);
  
    }
  } else {
    client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
    console.log("Successfully connected");
    $('#slider').text("on");
  }
  
});

// $('value').click(function () {
// //   var finalLoad=payload +" demo" + " " + dt.toUTCString();
// //   client.publish(topicInput, finalLoad);
// //   console.log(finalLoad);
// // });