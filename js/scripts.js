// constructor function to create tickets//
function Ticket (movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = price;
}

// prototype to adjust the price of a ticket//
Ticket.prototype.priceAdjust = function() {
  console.log("made it!");
  if (this.movie === "The Room" || this.movie === "Carol") {
    console.log("made it here too");
    return this.price - 2;
  } else if (this.time === "7:00 p.m." || this.time === "9:30 p.m.") {
    return this.price + 3;
  } else if (this.age === "Over 55") {
    return this.price - 2;
  }
};

//user interface logic
$(document).ready(function() {
  $("form#movie").submit(function(event) {
    event.preventDefault();
    var selectedMovie = $("#movieChoice").val();
    var selectedShowTime = $("#showTime").val();
    var selectedAge = $("#age").val();
    var newTicket = new Ticket(selectedMovie, selectedShowTime, selectedAge, 7);
    newTicket.priceAdjust();

    $("#show-ticket").show();
    $(".movie-name").text(newTicket.movie);
    $(".showtime").text(newTicket.time);
    $(".price").text("$" + newTicket.price);
  });
});
