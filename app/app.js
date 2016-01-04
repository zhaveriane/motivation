(function(){

var $  = document.getElementById.bind(document);
var $$ = document.querySelectorAll.bind(document);

var App = function($el){
  this.$el = $el;
  this.load();
  this.submit();

  if (this.dob) {
    this.renderAgeLoop();
    this.renderMessage();
  }
};

App.fn = App.prototype;

App.fn.load = function(){
  var value;

  if (value = localStorage.dob)
    this.dob = new Date(2016, 0, 30, 21, 45, 0, 0);
};

App.fn.save = function(){
  if (this.dob)
    localStorage.dob = this.dob.getTime();
};

App.fn.submit = function(){
  this.dob = new Date(2016, 0, 30, 21, 45, 0, 0);
  this.save();
  this.renderAgeLoop();
};

App.fn.renderAgeLoop = function(){
  this.interval = setInterval(this.renderAge.bind(this), 100);
};

App.fn.renderAge = function(){
  var now       = new Date
  var duration  = Math.max(this.dob - now, 0);
  var days      = duration / 86400000;

  var majorMinor = days.toFixed(9).toString().split('.');

  requestAnimationFrame(function(){
    this.html(this.view('age')({
      days:         majorMinor[0],
      milliseconds: majorMinor[1]
    }));
  }.bind(this));
};

App.fn.renderMessage = function(){
  console.log("Render message");
  var text = document.getElementById("content");
  var message = "";

  var now       = new Date
  var duration  = Math.max(this.dob - now, 0);
  var days      = duration / 86400000;

  if (days < 1) {
    message = "GOOD LUCK WITH YOUR EXAM, babe! <3";
  } else if (days < 2) {
    message = "Cheesy pizza.";
  } else if (days < 3) {
    message = "THREE. MORE. DAYS.";
  } else if (days < 4) {
    message = "kissy face :*";
  } else if (days < 5) {
    message = "Remember that day I took two shots and we made out in my room?";
  } else if (days < 6) {
    message = "You are the apple of my eye.";
  } else if (days < 7) {
    message = "One more week!";
  } else if (days < 8) {
    message = "Poop snapchats.";
  } else if (days < 9) {
    message = "Feeding my chocolate milk addiction....";
  } else if (days < 10) {
    message = "Shotgun kiss.";
  } else if (days < 11) {
    message = "Uhhh... (miss you)";
  } else if (days < 12) {
    message = "... and with my genitals.";
  } else if (days < 13) {
    message = "I love you with my heart... <3";
  } else if (days < 14) {
    message = "Or a trip to Montreal.";
  } else if (days < 15) {
    message = "Someday, Taipei!";
  } else if (days < 16) {
    message = "xesttub";
  } else if (days < 17) {
    message = "Bite me. ;)";
  } else if (days < 18) {
    message = "I've been wearing your hoodie every day.";
  } else if (days < 19) {
    message = "LULULEMON BOXERS. >:)";
  } else if (days < 20) {
    message = "Google Hangout dates. ^_^";
  } else if (days < 21) {
    message = "Shopping at Bodega with you.";
  } else if (days < 22) {
    message = "Laughing on your bed until I couldn't breathe.";
  } else if (days < 23) {
    message = "HAPPY ONE MONTH!";
  } else if (days < 24) {
    message = "Dumpling Cafe date.";
  } else if (days < 25) {
    message = "~3mw~";
  } else {
    message = "Missing you!";
  }

  text.innerHTML += message;
}

App.fn.$$ = function(sel){
  return this.$el.querySelectorAll(sel);
};

App.fn.html = function(html){
  this.$el.innerHTML = html;
};

App.fn.view = function(name){
  var $el = $(name + '-template');
  return Handlebars.compile($el.innerHTML);
};

window.app = new App($('app'))

})();
