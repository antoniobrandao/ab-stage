'use strict';

module.exports = function() {};

window.stage = {};

window.stage.width = function(use_px) {
	var w=window,
		d=document,
		e=d.documentElement,
		g=d.getElementsByTagName('body')[0],
		x=w.innerWidth||e.clientWidth||g.clientWidth;
		return (use_px ? x + 'px' : x);
}
window.stage.height = function(use_px) {
	var w=window,
		d=document,
		e=d.documentElement,
		g=d.getElementsByTagName('body')[0],
		y=w.innerHeight||e.clientHeight||g.clientHeight;
		return (use_px ? y + 'px' : y);
}


window.stage.onResize = function( callBack )
{
	if(window.attachEvent) 			 	{window.attachEvent('onresize', callBack);
	} else if(window.addEventListener) 	{window.addEventListener('resize', callBack, true);
	} else { 							//The browser does not support Javascript event binding
	}
}

window.stage.removeOnResize = function(callBack)
{
	if(window.detachEvent)  				{ window.detachEvent('onresize', 		callBack);
	} else if(window.removeEventListener) 	{ window.removeEventListener('resize', 	callBack);
	} else { 								//The browser does not support Javascript event binding
	}
}

// filters
// mouseEnabled (interactivity blocker)
// add / remove child

// rotation
// scaleX
// scaleY
// transform
// visible


/*



// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];

module.exports = {

	// call to disable scroll where possible
	disableScroll: function()
	{
		if (window.addEventListener) {
			window.addEventListener('DOMMouseScroll', wheel, false);
		}

		window.onmousewheel = document.onmousewheel = wheel;
		document.onkeydown = keydown;
		scroll_lock = true;
	},

	// call to enable scroll
	enableScroll: function()
	{
		if (window.removeEventListener) {
			window.removeEventListener('DOMMouseScroll', wheel, false);
		}

		window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
		scroll_lock = false;
	},

  	getScrollbarWidth: function() 
    {
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

        document.body.appendChild(outer);

        var widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = "scroll";

        // add innerdiv
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);        

        var widthWithScroll = inner.offsetWidth;

        // remove divs
        outer.parentNode.removeChild(outer);

        return widthNoScroll - widthWithScroll;
    }
}


// system

var preventDefault = function(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

var keydown = function(e) {
  for (var i = keys.length; i--;) {
    if (e.keyCode === keys[i]) {
      preventDefault(e);
      return;
    }
  }
}

var wheel = function(e) {
  preventDefault(e);
}


*/