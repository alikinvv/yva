$('body').on('click', '.toggle', (e) => {
    $(e.currentTarget).next().slideDown(300);
    $(e.currentTarget).remove();
});

$('body').on('click', '.show-filter', (e) => {
    $('.sidebar').toggleClass('active');
    $('html, body').toggleClass('overflow');
});

$('body').on('click', '.show-search', (e) => {
    $('.mobile-search').toggleClass('active');
    $('html, body').toggleClass('overflow');
});

$('body').on('click', '.sidebar__close', (e) => {
    $('.sidebar').toggleClass('active');
    $('html, body').toggleClass('overflow');
});

$('body').on('click', '.mobile-search .close', (e) => {
    $('.mobile-search').toggleClass('active');
    $('html, body').toggleClass('overflow');
});

$('body').on('click', '.heart', (e) => {
    $(e.currentTarget).toggleClass('active');
});

$('body').on('click', '.share', (e) => {
    $(e.currentTarget).toggleClass('active');
});

$('body').on('click', '.login svg:not(.active)', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.login .form-group input').attr('type', 'text');
});

$('body').on('click', '.login svg.active', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.login .form-group input').attr('type', 'password');
});

$('body').on('click', '.sidebar__toggle', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).next().slideToggle(300);
});

$('body').on('click', '.toggle__body div:not(.hide)', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).next().slideToggle(300);
});

// show modal
$('body').on('click', '[data-modal]:not(.modal)', (e) => {
    if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
    $('.modal.active').removeClass('active');
    $(`.modal[data-modal="${$(e.currentTarget).attr('data-modal')}"]`).addClass('active');
    $('html, body').toggleClass('overflow');

    if ($(e.currentTarget).attr('data-modal') === 'thanks') {
        setTimeout(() => {
            $('.modal.active').find('svg').addClass('animate');
        }, 100);
    }
});

// close modal events
let closeModal = () => {
    $('.backdrop').removeClass('active');
    $('.modal').removeClass('active');
    $('html, body').removeClass('overflow');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);
$('body').on('click', '.mobile-sidebar .close', closeModal);

$('body').on('click', '.backdrop', (e) => {
    if ($(e.target)[0].className === 'backdrop active') closeModal();
});

// close modal on press ESC
$(document).keyup((e) => {
    if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});

$('body').on('submit', 'form', (e) => {
    e.preventDefault();
});
