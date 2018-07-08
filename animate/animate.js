$(document).ready(function () {     
    var bouncetime = 1000;
    var ballheight = 280;
    var ballsize = 80;
 
    $('#ball').css({'width':ballsize, 'height':ballsize, 'margin-left':-(ballsize/2),'display':'block', 'bottom':ballheight});
    $('#shadow').css({'width':ballsize*1.5, 'height':ballsize/3, 'margin-left':-(ballsize*0.75),'display':'block', 'opacity':0.2});
 
    ballbounce();
    ballshadow();
 
    function ballbounce() {
        $('#ball').animate({'bottom':20}, bouncetime, 'easeInQuad', function() {
            $('#ball').animate({'bottom':ballheight}, bouncetime, 'easeOutQuad', function() {
                ballbounce();
            });
        });
    }
    function ballshadow() {
        $('#shadow').animate({'width':ballsize, 'height':ballsize/4, 'margin-left':-(ballsize/2), 'opacity':1}, bouncetime, 'easeInQuad', function() {
            $('#shadow').animate({'width':ballsize*1.5, 'height':ballsize/3, 'margin-left':-(ballsize*0.75), 'opacity':0.2}, bouncetime, 'easeOutQuad', function() {
                ballshadow();
            });
        });
    }
});
