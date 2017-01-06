'use strict';

//Assets vars
var KUNGA_IMG = 'kunga1.png';
var DIRECT_IMG = 'directtv1.png';
var IMG_FOLDER = './assets/img/';

//API End Point
var API_END_POINT = './login';

//Selectors
var $appImg = $('.apps-container .app > img');
var $form = $('#nunchee-modal form');


//Set LocalStorage Item
if (localStorage.getItem('error_logs') === null) {
    localStorage.setItem('error_logs', JSON.stringify([]));
}

/*
 * Modal Behavior
 * ---------------------------------------- */

$appImg.on('click', function() {
    var appName = $(this).data('app');
    openNuncheeModal(appName);
});

var openNuncheeModal = function(appName) {
    var appLogo = null;
    if (appName === 'directtv') {
        appLogo = DIRECT_IMG;
    } else if (appName === 'kunga') {
        appLogo = KUNGA_IMG;
    }
    $('#login-app-brand').attr('src', IMG_FOLDER + appLogo);
    $('#nunchee-modal').modal('show')
}

$('#nunchee-modal').on('hidden.bs.modal', function() {
    $form.find('input').each(function() {
        $(this).val('');
    })
})

/*
 * AJAX Request - Form
 * ---------------------------------------- */

$form.on('submit', function(e) {
    e.preventDefault();
    sendForm();
});

var sendForm = function() {
    NProgress.start();
    var date = new Date();
    $.ajax({
        type: "POST",
        url: API_END_POINT,
        data: $form.serialize(),
        success: function(response) {
            displayResponse(response);
            NProgress.done();
            setStorageData(date, $form.serialize(), response)
        }
    });
}

var displayResponse = function(response) {
    var obj = JSON && JSON.parse(response) || $.parseJSON(response);
    var HTTP_CODE = parseInt(obj.code);
    var message = obj.code === 503 ? 'Datos incorrectos :(' : getErrorMsg(HTTP_CODE);

    //Send notification to user
    $.toast({
        text: message,
        hideAfter: 3500,
        position : 'top-right'
    })
}

var getErrorMsg = function(code) {
    var msg = '';
    switch (code) {
        case 200:
            msg = "Inicio de sesión correcto";
            break;
        case 403:
            msg = "No autorizado";
            break;
        case 404:
            msg = "Problemas al realizar el inicio de sesión";
            break;
        case 501:
            msg = "Problemas internos del servidor";
            break;
        case 502:
            msg = "Colapso del servidor";
            break;
    }
    return msg;
}

//LocalStorage Data
var setStorageData = function(date, params, response) {
    var logs = JSON.parse(localStorage.getItem('error_logs'));
    var newLog = {'date': date, 'params': params, 'response': response};
    logs.push(newLog);
    localStorage.setItem('error_logs', JSON.stringify(logs));
}
