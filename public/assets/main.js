'use strict';

var KUNGA_IMG = 'kunga1.png';
var DIRECT_IMG = 'directtv1.png';
var IMG_FOLDER = './assets/img/';
var $appImg = $('.appsContainer img');

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