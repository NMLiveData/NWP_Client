$(document).ready(function(){
    initializePosition();
});


$(window).resize(function() {
    clear();
    initializePosition();
});

$(window).on("orientationchange",function(){
    clear();
    initializePosition();
});


function clear(){
    $(".imgWrapper").each(function () {
            $(this).removeAttr('style');
        });
}

function initializePosition(){

    var wWidth = window.innerWidth;
    var wHight = window.innerHeight;
    console.log(wWidth);
    //if not mobile
    if((wWidth > 590 && window.screen.orientation.type == 'landscape-primary')||
       (wWidth > wHight)){

        wWidth = wWidth*0.9;
        var percentTOP = [0.47,0.63,0.73,0.78,0.78,0.73,0.31,0.243,0.21,0.243,0.31,0.47,0.63],
            percentRight = [0.76,0.705,0.578,0.445,0.307,0.175,0.68,0.54,0.38,0.22,0.08,0,0.05];
        
        var i=0;

        $(".imgWrapper").each(function () {
            var top = percentTOP[i]*wHight;
            var right = percentRight[i]*wWidth;
            console.log(right);
            $(this).css({
                    "top": top,
                    "right": right
                });
            i++;
        });
    }
}
