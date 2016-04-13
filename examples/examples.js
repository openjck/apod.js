/*jslint unparam: true, browser: true*/
/*global apod*/

'use strict';

apod.get(new Date(2013, 4, 23), function (m109) {
    console.log(m109.title);
    console.log(m109.explanation);
    console.log(m109.credit);
    console.log(m109.pictureURL);
    console.log(m109.pictureThumbnailURL);
    console.log(m109.videoURL);
    console.log(m109.url);
    console.log(m109.date);
});

apod.getBetween(new Date(2013, 5, 1), new Date(2013, 5, 3), function (earlyJune) {
    console.log(earlyJune[0].title);
    console.log(earlyJune[1].title);
    console.log(earlyJune[2].title);
});

apod.get(new Date(1930, 1, 18), function (discovery) {
    console.log("Thanks for inviting me guys! We're gonna be best friends forever!");
}, function (errorName, errorDesc) {
    console.log(errorName);
    console.log(errorDesc);
});
