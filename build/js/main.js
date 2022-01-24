"use strict";

$('body').on('click', '.toggle', function (e) {
  $(e.currentTarget).next().slideDown(300);
  $(e.currentTarget).remove();
});
$('body').on('click', '.show-filter', function (e) {
  $('.sidebar').toggleClass('active');
  $('html, body').toggleClass('overflow');
});
$('body').on('click', '.show-search', function (e) {
  $('.mobile-search').toggleClass('active');
  $('html, body').toggleClass('overflow');
});
$('body').on('click', '.sidebar__close', function (e) {
  $('.sidebar').toggleClass('active');
  $('html, body').toggleClass('overflow');
});
$('body').on('click', '.mobile-search .close', function (e) {
  $('.mobile-search').toggleClass('active');
  $('html, body').toggleClass('overflow');
});
$('body').on('click', '.heart', function (e) {
  $(e.currentTarget).toggleClass('active');
});
$('body').on('click', '.share', function (e) {
  $(e.currentTarget).toggleClass('active');
});
$('body').on('click', '.login svg:not(.active)', function (e) {
  $(e.currentTarget).toggleClass('active');
  $('.login .form-group input').attr('type', 'text');
});
$('body').on('click', '.login svg.active', function (e) {
  $(e.currentTarget).toggleClass('active');
  $('.login .form-group input').attr('type', 'password');
});
$('body').on('click', '.sidebar__toggle', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).next().slideToggle(300);
});
$('body').on('click', '.toggle__body div:not(.hide)', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).next().slideToggle(300);
}); // show modal

$('body').on('click', '[data-modal]:not(.modal)', function (e) {
  if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
  $('.modal.active').removeClass('active');
  $(".modal[data-modal=\"".concat($(e.currentTarget).attr('data-modal'), "\"]")).addClass('active');
  $('html, body').toggleClass('overflow');

  if ($(e.currentTarget).attr('data-modal') === 'thanks') {
    setTimeout(function () {
      $('.modal.active').find('svg').addClass('animate');
    }, 100);
  }
}); // close modal events

var closeModal = function closeModal() {
  $('.backdrop').removeClass('active');
  $('.modal').removeClass('active');
  $('html, body').removeClass('overflow');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);
$('body').on('click', '.mobile-sidebar .close', closeModal);
$('body').on('click', '.backdrop', function (e) {
  if ($(e.target)[0].className === 'backdrop active') closeModal();
}); // close modal on press ESC

$(document).keyup(function (e) {
  if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});
$('body').on('submit', 'form', function (e) {
  e.preventDefault();
});