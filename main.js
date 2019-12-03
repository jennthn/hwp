/*function show() {
    var div=document.getElementById('pizzas');
    div.style.display = (div.style.display == "none") ? "block" : "none";
};*/

$(document).ready(function() {

    $('section').on('click', () => {
        $('section').toggle("slide");
    });
  });

$(document).ready(() => {
    $("#pizza").click(() => {
        $(".pizza").toggle("slide"); 
    });
});

$(document).ready(() => {
    $('#combos').click(() => {
        $(".combo").toggle("slide"); 
    });
});