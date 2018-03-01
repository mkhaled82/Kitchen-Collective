// var db = require("../models");

module.exports = function(app, db) {
  //GET all guests
  app.get("/", function(req, res) {
    db.Guests.findAll()
    .then(function(data) {
      var guests = {
        guests: data
      };
      console.log(guests);
      res.render("index", guests);
    });
  });

  
  app.get("/api/guests", function(req,res){
    
    db.Guests.findAll()
    .then(function(guests){
      res.json(guests);
      console.log("and again...", guests);
    });
      });


  app.post("/api/guests", function (req, res) {
    db.Guests.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone
    }).then(function (result) {
      res.json(result);
      console.log("New guest: ", req.body.first_name);
    })
  });
} //end module.exports
//POST guests not sure if this is correct or above
// app.post("/api/guests", function(req,res){
//   var name = req.body.name;
//   var event = req.body.event;
//   var email = req.body.email;
//   var phone = req.body.phone;

//   db.Guests.create({
//     //verify that these are in db
//     name: name,
//     event: event,
//     email: email,
//     phone: phone
//   })
//   .then(function(newGuest){
//     res.json(newGuest);
//   })
// });
//DELETE single guest
// app.delete("/guest/:id", function(req,res){
//   var id= req.params.id;

//   db.guests.destroy({
//     where: {id: id}
//   })
//   .then(function(deletedGuest){
//     res.json(deletedGuest);
//   });
// });
// //when a new guest is posted, number must also be taken from event maximum
// };//end module.exports