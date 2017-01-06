'use strict';

//Assets vars
var KUNGA_IMG = 'kunga1.png';
var DIRECT_IMG = 'directtv1.png';
var IMG_FOLDER = 'assets/img/';

//API End Point
var API_END_POINT = 'login';

//Selectors
var $appImg = $('.apps-container .app > img');
var $form = $('#nunchee-modal form');

//Set LocalStorage Item
if (localStorage.getItem('error_logs') === null) {
    localStorage.setItem('error_logs', JSON.stringify([]));
}

/*
 * Login window behavior
 * ---------------------------------------- */
$appImg.on('click', function() {
    var appName = $(this).data('app');
    openNuncheeModal(appName);
});

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