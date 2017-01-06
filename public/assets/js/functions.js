'use strict';

// Set img to modal windows
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

// AJAX - Send Form
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

// Dislay response msg (UI)
var displayResponse = function(response) {
        var responseObj = JSON && JSON.parse(response) || $.parseJSON(response);
        var HTTP_CODE = parseInt(responseObj.code);
        var message = 'Status: ' + responseObj.status + '<br>' + getErrorMsg(HTTP_CODE);
        //Send notification to user
        $.toast({
            text: message,
            hideAfter: 3500,
            position: 'top-right'
        })
    }

// Error msgs according HTTP Code
var getErrorMsg = function(code) {
        var msg = '';
        switch (code) {
            case 200:
                msg = 'Inicio de sesión correcto';
                break;
            case 403:
                msg = 'No autorizado';
                break;
            case 404:
                msg = 'Problemas al realizar el inicio de sesión';
                break;
            case 501:
                msg = 'Problemas internos del servidor';
                break;
            case 502:
                msg = 'Colapso del servidor';
                break;
            case 503:
                msg = 'Datos incorrectos :(';
                break;
            default:
                msg = 'Error desconocido';
                break;
        }
        return msg;
    }

// LocalStorage Data
var setStorageData = function(date, params, response) {
    var logs = JSON.parse(localStorage.getItem('error_logs'));
    var newLog = {
        'date': date,
        'params': params,
        'response': JSON.parse(response)
    };
    logs.push(newLog);
    localStorage.setItem('error_logs', JSON.stringify(logs));
}