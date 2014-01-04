function activateSlider() {
        jQuery('.item').first().addClass('active-slide');
};
function makeSlideActive() {
        var activediv = jQuery('.item').filter('.active-slide');//or jQuery('.item.active')
        var index = activediv.index();
        var jQueryall = jQuery(".item").removeClass("active-slide");
        var jQuerytotal = jQuery(".item").length;
        var jQuerynextslide = index+1;
        if (jQuerynextslide == jQuerytotal) {
          jQuerynextslide = 0;
        }
        jQuery('div.item').eq(jQuerynextslide).addClass('active-slide');
};