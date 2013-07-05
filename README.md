## Introduction

apod.js is a JavaScript library that offers simple access to data published on the [Astronomy Picture of the Day](http://apod.nasa.gov/apod/archivepix.html) website.

## Setup

Download a copy of apod.js and attach it to your document.

    <script src="/path/to/apod.js"></script>

Data frequently includes non-English characters, so be sure to use UTF-8 encoding.

    <meta charset="utf-8" />

## Examples

```javascript
apod.get(new Date(2013, 4, 23), function (m109) {
  console.log(m109.title); // Messier 109
  console.log(m109.explanation); // Beautiful barred spiral ... of the larger M109.
  console.log(m109.pictureURL); // http://apod.nasa.gov/apod/image/1305/m109franke2400.jpg
  console.log(m109.url); // http://apod.nasa.gov/apod/ap130523.html
  console.log(m109.date); // Thu May 23 2013 00:00:00 GMT-0800 (PDT)
});

apod.getBetween(new Date(2013, 5, 1), new Date(2013, 5, 3), function (earlyJune) {
  console.log(earlyJune[0].title); // The Milky Trail
  console.log(earlyJune[1].title); // A Roll Cloud Over Uruguay
  console.log(earlyJune[2].title); // Curiosity: Wheels on Mars
});

apod.get(new Date(1930, 1, 18), function (discovery) {
  console.log("Thanks for inviting me guys! We're gonna be best friends forever!");
}, function (errorName, errorDesc) {
  console.log(errorName); // NothingPublishedError
  console.log(errorDesc); // No Astronomy Picture of the Day published on specified date.
});

apod.getBetween(new Date(2012, 11, 31), new Date(2010, 0, 1), function (recentYears) {
  console.log("I know how dates work.");
}, function (errorName, errorDesc) {
  console.log(errorName); // TimespanError
  console.log(errorDesc); // End date cannot fall before start date.
});
```

## API Documentation

### Methods

#### apod.get

Load data from a single Astronomy Picture of the Day.

##### Parameters

###### date

The date an Astronomy Picture of the Day was published, in the form of a JavaScript Date object. Time and timezone are ignored.

###### success

A callback to run if no errors are thrown. The callback is passed one argument: an APOD object.

###### failure

A callback to run if an error is thrown. The callback is passed two arguments: the first is the name of the error, the second is its description.

#### apod.getBetween

Load data from several consecutive Astronomy Pictures of the Day.

##### Parameters

###### startDate

The start date (inclusively), in the form of a JavaScript Date object. Time and timezone are ignored.

###### endDate

The end date (inclusively), in the form of a JavaScript Date object. Time and timezone are ignored.

###### success

A callback to run if no errors are thrown. The callback is passed one argument: an array of APOD objects.

###### failure

A callback to run if an error is thrown. The callback is passed two arguments: the first is the name of the error, the second is its description.

### The APOD Object

`APOD` objects are used to represent Astronomy Pictures of the Day. These objects are simply collections of data, with one named property for each type of data.

#### Properties

##### date

The day the Astronomy Picture of the Day was published, in the form of a JavaScript Date object. NASA does not publish time or timezone information, so the Date object defaults to midnight in the user's timezone.

##### url

The URL of the Astronomy Picture of the Day landing page. The landing page lists the picture itself as well as a title, an explanation, navigational links, and other information.

##### title

The Astronomy Picture of the Day title.

##### explanation

The Astronomy Picture of the Day explanation. The explanation often contains HTML elements.

##### pictureURL

The URL of the picture itself.

### Errors

#### NothingPublishedError

Thrown when no Astronomy Pictures of the Day were published on the given date or between the given start and end dates (inclusively).

#### TimespanError

Thrown when the end date passed to `apod.getBetween` falls before the start date.

## Browser support

apod.js should work in [any browser that supports CORS](http://caniuse.com/cors), but has only been confirmed to work in the following.

* Chrome 14+
* Firefox 3.6+
* Internet Explorer 8+
* Opera 12.00+
* Safari 5.1+