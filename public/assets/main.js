'use strict';
var KUNGA_IMG = 'kunga1.png';
var DIRECT_IMG = 'directtv1.png';
var IMG_FOLDER = './assets/img/';
var API_END_POINT = './login';
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

$('#NuncheeModal').on('hidden.bs.modal', function () {
    $form.find('input').each(function(){
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
            console.log(response);
            NProgress.done();
        }
    });
}