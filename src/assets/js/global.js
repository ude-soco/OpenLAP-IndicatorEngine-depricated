import $ from 'jquery';

$(window).scroll(function () {
	$('#main-navbar').toggleClass('openlap-header-scrolled shadow-sm', $(this).scrollTop() > 20);
});