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

    var wWidth = window.innerWidth
    
    //if not mobile
    if(wWidth > 590 && window.screen.orientation.type == 'landscape-primary'){

        wWidth = wWidth*0.9;
        var wHight = window.innerHeight;
        var percentTOP = [0.49,0.66,0.76,0.81,0.81,0.76,0.32,0.21,0.175,0.21,0.32,0.48,0.65],
            percentRight = [0.762,0.715,0.59,0.46,0.31,0.17,0.7,0.55,0.39,0.22,0.08,0,0.05];
        
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