"use strict";

$('body').on('click', '.toggle', function (e) {
  $(e.currentTarget).next().slideDown(300);
  $(e.currentTarget).remove();
});
$('body').on('click', '.show-filter', function (e) {
  $('.sidebar').toggleClass('active');
  $('html, body').toggleClass('overflow');
});
$('body').on('click', '.sidebar__close', function (e) {
  $('.sidebar').toggleClass('active');
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

if ($(window).width() >= 1024 && $('.sticky').length > 0) {
  var sticky = new Sticky('.sticky', {
    marginTop: 20
  });
}

var sameHeight = function sameHeight(item, element, count) {
  var titleHeight = 0;
  var items = [];

  for (var i = 1; i < $(item).length + 1; i++) {
    var $step = $(item).eq(i - 1);

    if (i !== 0 && i % count === 0) {
      if ($step.find(element).height() > titleHeight) {
        titleHeight = $step.find(element).height();
      }

      items.push(i - 1);

      for (var j = 0; j < items.length; j++) {
        $(item).eq(items[j]).find(element).height(titleHeight);
      }

      items = [];
      titleHeight = 0;
    } else {
      items.push(i - 1);

      if ($step.find(element).height() > titleHeight) {
        titleHeight = $step.find(element).height();
      }

      for (var _j = 0; _j < items.length; _j++) {
        $(item).eq(items[_j]).find(element).height(titleHeight);
      }
    }
  }
};

$(window).on('resize', function () {
  sameHeight('.grid .item', '.item__title', 2);
});
sameHeight('.grid .item', '.item__title', 2);