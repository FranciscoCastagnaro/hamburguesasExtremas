var my_window = $(window);
var position = my_window.scrollTop();
var flag = false;

my_window.scroll(function () {

    console.log(position)

    if (my_window.scrollTop()  > 900) {
        $('.main-header').addClass('navup');
        $('.main-header').removeClass('navAgain');
        flag = true
    }else{
        $('.main-header').removeClass('navup');
        if(flag){
            $('.main-header').addClass('navAgain');
        }
    }
    
    position = my_window.scrollTop();
});