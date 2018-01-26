var $a = $(".app");
var aH = $a.outerHeight();
var aW = $a.outerWidth();
var $w = $("body");

var starterData = {   
    size: {  width: $w.width(), height: $w.height() }
};

var Rz = function() {   
    var scale = Math.min(    
        $w.width()/aW,
        $w.height()/aH
    );
    $a.css({transform: "translate(-50%, -50%) " + "scale(" + scale + ")"  });
}

var rzFn = function(){ return function(){ return Rz(); }}
$(window).resize(rzFn());
$(document).ready(function(){$(window).trigger('resize'); });