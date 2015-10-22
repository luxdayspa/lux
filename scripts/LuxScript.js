




/*
     FILE ARCHIVED ON 14:23:21 Sep 15, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:31:52 Mar 29, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
// Set slideShowSpeed (milliseconds)
var slideShowSpeed = 5000

// Duration of crossfade (seconds)
var crossFadeDuration = 5

// Specify the image files
var Pic = new Array() // don't touch this
// to add more images, just continue
// the pattern, adding to the array below


Pic[0] = 'images/frontdesk.jpg'
Pic[1] = 'images/2.jpg'
Pic[2] = 'images/3.jpg'
Pic[3] = 'images/4.jpg'
Pic[4] = 'images/5.jpg'
Pic[5] = 'images/6.jpg'
Pic[6] = 'images/1.jpg'

// =======================================
// do not edit anything below this line
// =======================================

var t
var j = 0
var p = Pic.length

var preLoad = new Array()
for (i = 0; i < p; i++) {
    preLoad[i] = new Image()
    preLoad[i].src = Pic[i]
}

function runSlideShow() {
    if (document.all) {
        document.images.SlideShow.style.filter = "blendTrans(duration=2)"
        document.images.SlideShow.style.filter = "blendTrans(duration=crossFadeDuration)"
        document.images.SlideShow.filters.blendTrans.Apply()
    }
    document.images.SlideShow.src = preLoad[j].src
    if (document.all) {
        document.images.SlideShow.filters.blendTrans.Play()
    }
    j = j + 1
    if (j > (p - 1)) j = 0
    t = setTimeout('runSlideShow()', slideShowSpeed)
}