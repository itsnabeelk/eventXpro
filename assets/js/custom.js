// sidenav-open
$(document).ready(function () {
    var isOpen = localStorage.getItem('dropdownOpen') === 'true';
    var dropdownMenu = $('.dropdown-toggle').siblings('.dropdown-menu');
    
    if (isOpen) {
        dropdownMenu.slideDown('slow', function() {
            dropdownMenu.addClass('open');
        });
    } else {
        dropdownMenu.hide();
        dropdownMenu.removeClass('open');
    }

    $('.dropdown-toggle').click(function () {
        dropdownMenu.slideToggle('slow', function() {
            dropdownMenu.toggleClass('open');
            isOpen = dropdownMenu.hasClass('open');
            localStorage.setItem('dropdownOpen', isOpen);
        });
    });

    // Add event listener to document to close dropdown menus on outside click
    $(document).click(function (event) {
        var target = $(event.target);
        
        if (!target.closest('.dropdown-toggle').length && !target.closest('.dropdown-menu').length) {
            $('.dropdown-menu').slideUp('slow', function() {
                $('.dropdown-menu').removeClass('open');
                isOpen = false;
                localStorage.setItem('dropdownOpen', isOpen);
            });
        }
    });
});
// close

// drop-solution
$(document).ready(function() {
    $('.link-nav').click(function(e) {
        e.preventDefault();

        $('.drop-solutions').slideToggle('slow');
        $(this).find('img').toggleClass('icon-rotate');
    });
});
// close