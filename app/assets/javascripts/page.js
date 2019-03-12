// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assetss/javascripts, or any plugin's
// vendor/assetss/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// require rails-ujs
// require turbolinks
// require_tree .

//= require jquery/jquery-3.2.1.min.js
//= require animsition/js/animsition.min.js
//= require bootstrap
//= require select2/select2.min.js
//= require slick/slick.min.js
//= require js/slick-custom.js
//= require countdowntime/countdowntime.js
//= require lightbox2/js/lightbox.min.js
//= require sweetalert/sweetalert.min.js
//= require js/main.js

    $(".selection-1").select2({
        minimumResultsForSearch: 20,
        dropdownParent: $('#dropDownSelect1')
    });
$('.block2-btn-addcart').each(function(){
    var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
    $(this).on('click', function(){
        swal(nameProduct, "is added to cart !", "success");
    });
});

$('.block2-btn-addwishlist').each(function(){
    var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
    $(this).on('click', function(){
        swal(nameProduct, "is added to wishlist !", "success");
    });
});