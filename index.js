'use strict';

module.exports = function() {};

window.stage = {};

window.stage.width = function(use_px) {
	var w=window,
		d=document,
		e=d.documentElement,
		g=d.getElementsByTagName('body')[0],
		x=w.innerWidth||e.clientWidth||g.clientWidth,
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