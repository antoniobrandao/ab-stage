'use strict';

window.stage = {};



//////     ######  #### ######## ######## 
//////    ##    ##  ##       ##  ##       
//////    ##        ##      ##   ##       
//////     ######   ##     ##    ######   
//////          ##  ##    ##     ##       
//////    ##    ##  ##   ##      ##       
//////     ######  #### ######## ######## 



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




//////     ######  ####  ######   ##    ##    ###    ##        ######  
//////    ##    ##  ##  ##    ##  ###   ##   ## ##   ##       ##    ## 
//////    ##        ##  ##        ####  ##  ##   ##  ##       ##       
//////     ######   ##  ##   #### ## ## ## ##     ## ##        ######  
//////          ##  ##  ##    ##  ##  #### ######### ##             ## 
//////    ##    ##  ##  ##    ##  ##   ### ##     ## ##       ##    ## 
//////     ######  ####  ######   ##    ## ##     ## ########  ######  



window.signal = require("signals").Signal;
window.stage.signals = {};
window.stage.signals.bindings = {};


window.stage.addSignal = function(string_key)
{
  window.stage.signals[string_key] = new window.signal();
}

window.stage.dispatchSignal = function(string_key)
{
  if (!window.stage.signals[string_key]) { window.stage.addSignal(string_key); }

  window.stage.signals[string_key].dispatch();
}

window.stage.addSignalListener = function(string_key, callBack, context, once)
{
  if (!window.stage.signals[string_key]) { window.stage.addSignal(string_key); }

  if (!once) { window.stage.signals[string_key].add(callBack, context);
  } else     { window.stage.signals[string_key].addOnce(callBack, context); }
}

window.stage.removeSignalListener = function(string_key, callBack)
{
  if (window.stage.signals[string_key]) {
    window.stage.signals[string_key].remove(callBack);
  }
}

window.stage.removeSignalListenerAll = function(string_key, callBack)
{
  if (window.stage.signals[string_key]) {
    window.stage.signals[string_key].removeAll();
  }
}

window.stage.removeSignal = function(string_key)
{
  if (window.stage.signals[string_key]) {
    window.stage.signals[string_key].removeAll();
    window.stage.signals[string_key] = null;
  }
}



//////    ########  ########  ######  #### ######## ######## 
//////    ##     ## ##       ##    ##  ##       ##  ##       
//////    ##     ## ##       ##        ##      ##   ##       
//////    ########  ######    ######   ##     ##    ######   
//////    ##   ##   ##             ##  ##    ##     ##       
//////    ##    ##  ##       ##    ##  ##   ##      ##       
//////    ##     ## ########  ######  #### ######## ######## 



window.stage.onResize = function(callBack)
{
  if(window.attachEvent)        {window.attachEvent('onresize', callBack);
  } else if(window.addEventListener)  {window.addEventListener('resize', callBack, true);
  } else {              //The browser does not support Javascript event binding
  }
}

window.stage.removeOnResize = function(callBack)
{
  if(window.detachEvent)          { window.detachEvent('onresize',    callBack);
  } else if(window.removeEventListener)   { window.removeEventListener('resize',  callBack);
  } else {                //The browser does not support Javascript event binding
  }
}



//////    ########  ########  #######  ##     ## ########  ######  ######## 
//////    ##     ## ##       ##     ## ##     ## ##       ##    ##    ##    
//////    ##     ## ##       ##     ## ##     ## ##       ##          ##    
//////    ########  ######   ##     ## ##     ## ######    ######     ##    
//////    ##   ##   ##       ##  ## ## ##     ## ##             ##    ##    
//////    ##    ##  ##       ##    ##  ##     ## ##       ##    ##    ##    
//////    ##     ## ########  ##### ##  #######  ########  ######     ##    
//////    
//////    
//////       ###    ##    ## #### ##     ##    ###    ######## ####  #######  ##    ## 
//////      ## ##   ###   ##  ##  ###   ###   ## ##      ##     ##  ##     ## ###   ## 
//////     ##   ##  ####  ##  ##  #### ####  ##   ##     ##     ##  ##     ## ####  ## 
//////    ##     ## ## ## ##  ##  ## ### ## ##     ##    ##     ##  ##     ## ## ## ## 
//////    ######### ##  ####  ##  ##     ## #########    ##     ##  ##     ## ##  #### 
//////    ##     ## ##   ###  ##  ##     ## ##     ##    ##     ##  ##     ## ##   ### 
//////    ##     ## ##    ## #### ##     ## ##     ##    ##    ####  #######  ##    ## 
//////    
//////    
//////    ######## ########     ###    ##     ## ######## 
//////    ##       ##     ##   ## ##   ###   ### ##       
//////    ##       ##     ##  ##   ##  #### #### ##       
//////    ######   ########  ##     ## ## ### ## ######   
//////    ##       ##   ##   ######### ##     ## ##       
//////    ##       ##    ##  ##     ## ##     ## ##       
//////    ##       ##     ## ##     ## ##     ## ######## 



(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());



//////     ######   ######  ########   #######  ##       ##          ##     ## ######## #### ##        ######  
//////    ##    ## ##    ## ##     ## ##     ## ##       ##          ##     ##    ##     ##  ##       ##    ## 
//////    ##       ##       ##     ## ##     ## ##       ##          ##     ##    ##     ##  ##       ##       
//////     ######  ##       ########  ##     ## ##       ##          ##     ##    ##     ##  ##        ######  
//////          ## ##       ##   ##   ##     ## ##       ##          ##     ##    ##     ##  ##             ## 
//////    ##    ## ##    ## ##    ##  ##     ## ##       ##          ##     ##    ##     ##  ##       ##    ## 
//////     ######   ######  ##     ##  #######  ######## ########     #######     ##    #### ########  ######  




// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];
var scroll_lock = false;

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

window.stage.disableScroll = function()
{
  if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', wheel, false);
  }

  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
  scroll_lock = true;
}

window.stage.enableScroll = function()
{
  if (window.removeEventListener) {
    window.removeEventListener('DOMMouseScroll', wheel, false);
  }

  window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
  scroll_lock = false;
}

window.stage.getScrollbarWidth = function() 
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




//////    ########   #######     ###    ########  ##     ##    ###    ########  
//////    ##     ## ##     ##   ## ##   ##     ## ###   ###   ## ##   ##     ## 
//////    ##     ## ##     ##  ##   ##  ##     ## #### ####  ##   ##  ##     ## 
//////    ########  ##     ## ##     ## ##     ## ## ### ## ##     ## ########  
//////    ##   ##   ##     ## ######### ##     ## ##     ## ######### ##        
//////    ##    ##  ##     ## ##     ## ##     ## ##     ## ##     ## ##        
//////    ##     ##  #######  ##     ## ########  ##     ## ##     ## ##        

// UI BLOCKER
// CREATE APP LEVELS
// ADD/REMOVE CHILD FROM APP LEVELS
// MANAGE APP LEVELS
// CONTROL NOTIFICATIONS AND MODALS AND LIGHTBOXES
