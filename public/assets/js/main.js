'use strict';

//Assets vars
var KUNGA_IMG = 'kunga1.png';
var DIRECT_IMG = 'directtv1.png';
var IMG_FOLDER = './assets/img/';

//API End Point
var API_END_POINT = './login';

//Selectors
var $appImg = $('.appsContainer img');
var $form = $('#NuncheeModal form');

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
    $('#loginAppBrand').attr('src', IMG_FOLDER + appLogo);
    $('#NuncheeModal').modal('show')
}
$('#NuncheeModal').on('hidden.bs.modal', function() {
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
    $.ajax({
        type: "POST",
        url: API_END_POINT,
        data: $form.serialize(),
        success: function(response) {
            displayResponse(response);
            NProgress.done();
        }
    });
}
var displayResponse = function(response) {

    var obj = JSON && JSON.parse(response) || $.parseJSON(response);

    console.log("response ====>")
    console.log(obj)
    console.log(obj.http_code)

    return false;

    var HTTP_CODE = parseInt(response.http_code)
    alert(HTTP_CODE);

    $.toast({
        text: getErrorMsg(HTTP_CODE),
        hideAfter: false
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
        case 503:
            msg = "Datos incorrectos :( ";
            break;
    }
    return msg;
}