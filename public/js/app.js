(function() {
    'use strict';
    var toggles = document.querySelector('.c-hamburger');
    var menu = document.querySelector('.menu');
    toggleHandler(toggles);

    function toggleHandler(toggle) {
        toggle.addEventListener('click', function(e){
            e.preventDefault();
            (this.classList.contains('is-active') == true) ? this.classList.remove('is-active') : this.classList.add('is-active');
            (menu.classList.contains('active') == true) ? menu.classList.remove('active') : menu.classList.add('active');
        });

}
})();
