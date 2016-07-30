"use strict";



// PART 1: SHOW A FORTUNE
function showFortuneResult(result){
    $('#fortune-text').html(result);
}

function showFortune(evt) {

    $.get('/fortune', showFortuneResult);  

    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER
function showWeatherResult(result){
   
    var fortune = result['forecast'];
   // console.log(fortune)
   // alert(fortune);
   
    $('#forecast-text').html(fortune);


}

function showWeather(evt) {
    evt.preventDefault();

    var url = '/weather.json?zipcode='+ $("#zipcode-field").val();
    $.get(url, showWeatherResult)
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
function showOrderResults(result){
    status = result['code'];
    //alert(status)
    $('#order-status').html(status);
    if(status === 'ERROR'){
        $('#order-status').addClass('order-error');
    }
}

function orderMelons(evt) {
    evt.preventDefault();
    var formInputs = {
        "melon_type": $('#melon-type-field').val(),
        "qty": $('#qty-field').val()
    }

    $.post('/order-melons.json', formInputs, showOrderResults)

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


