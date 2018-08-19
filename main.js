var currentElement = null;
var currentButton = null;
var currentClass = null;

var convenientButton = function() {
  $(currentElement).removeClass('button-active');
  $(currentButton).removeClass(currentClass);
  $('#convenient').addClass('button-active');
  $('#sprite-convenient').addClass('convenient-active');
  currentElement = '#convenient';
  currentButton = '#sprite-convenient';
  currentClass = 'convenient-active';
}

var convenientBlurb = function() {
  $('p').html('<blockquote class="highlight"><div id="highlight-convenient"><img src="http://icdn.kiwicrate.com/site/home/why-kiwico-convenient.png"></div><p class ="text-convenient"><em>\"I enjoy crafting with my daughter, but don\'t have the time to research the activities and buy all the supplies. I like that everything comes to my door and we can start an activity right away.\"</em></p><cite class="text-customer">Jane X, Koala Crate subscriber since 2016</cite></blockquote>');
};

var educationalButton = function() {
  $(currentElement).removeClass('button-active');
  $(currentButton).removeClass(currentClass);
  $('#educational').addClass('button-active');
  $('#sprite-educational').addClass('educational-active');
  currentElement = '#educational';
  currentButton = '#sprite-educational';
  currentClass = 'educational-active';
};

var educationalBlurb = function() {
  $('p').html('<blockquote class="highlight"><div id="highlight-educational"><img src="http://icdn.kiwicrate.com/site/home/why-kiwico-educational.jpg"></div><p class ="text-educational"><em>\"My daughter is a <strong>sponge for STEM projects​</strong> and this is the perfect solution to constantly searching for new things to keep her engaged.\"</em></p></blockquote>');
};

$(document).ready(function() {
  convenientButton();
  convenientBlurb();
});

$('#convenient').on('click', function() {
  convenientButton();
  convenientBlurb();
});

$('#educational').on('click', function() {
  educationalButton();
  educationalBlurb();
});
