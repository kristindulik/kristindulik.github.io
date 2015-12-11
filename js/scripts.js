/**
 * Created by Aaron on 12/6/2015.
 */

function nightMode() {
    $('body').addClass('darkbg');
    $("#darktheme").removeAttr('disabled');

    $('.menu>li:not(.menu-text)>a').css('color', ' #F9EE98');
}
$(document).ready(function() {
    var currentTime = new Date();

    var hours = currentTime.getHours();

    //Auto dark theme
    if(hours >= 20) {
        nightMode();
    }


    var config = {
        duration: 800,
    };
    Waves.init(config);
    //Waves.ripple('.btn.float-button-light');
    Waves.attach('.float-buttons', ['waves-button', 'waves-float']);

    $('.btn.float-button-light.light').click(function(){
        $('body').removeClass('darkbg');
        $("#darktheme").attr("disabled", "disabled");
        $('.menu>li:not(.menu-text)>a').css('color', '');
    });
    $('.btn.float-button-light.dark').click(function(){
        nightMode();
    });
});