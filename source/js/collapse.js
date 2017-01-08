$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.sidebar-nav__item');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.sidebar-nav__item-secondary-container').not($next).slideUp().parent().removeClass('open');
        }
    };

    var accordion = new Accordion($('.sidebar-nav'), false);
});