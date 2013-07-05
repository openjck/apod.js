/*jslint indent: 2*/
/*global asyncTest, strictEqual, start, apod, ok*/

(function () {
  'use strict';

  var ngcDate;

  module('apod.get', {
    setup: function () {
      ngcDate = new Date(2013, 1, 8);
    }
  });

  asyncTest('Title', 1, function () {
    var success = function (ngc) {
      strictEqual(ngc.title, "NGC 6822: Barnard's Galaxy");
      start();
    };
    apod.get(ngcDate, success);
  });

  asyncTest('Explanation', 1, function () {
    var success = function (ngc) {
      strictEqual(ngc.explanation, '<a href="http://apod.nasa.gov/apod/ap130206.html">Grand spiral galaxies</a> often seem to get all the glory, flaunting their young, bright, blue star clusters in beautiful, symmetric spiral arms. But small galaxies form stars too, like nearby NGC 6822, also known as <a href="http://messier.seds.org/xtra/ngc/n6822.html">Barnard\'s Galaxy</a>. Beyond the rich starfields in the constellation Sagittarius, <a href="http://apod.nasa.gov/apod/ap020123.html">NGC 6822</a> is a mere 1.5 million light-years away, a member of our <a href="http://www.atlasoftheuniverse.com/localgr.html">Local Group</a> of galaxies. About 7,000 light-years across, the dwarf irregular galaxy is seen to be filled with young blue stars and mottled with the telltale pinkish hydrogen glow of star forming <a href="http://apod.nasa.gov/apod/ap010216.html">regions</a> in the deep <a href="http://sleshin.startlogic.com/stargazergallery/ main.php?g2_itemId=656">color composite image</a>. Contributing to the science of <a href="http://www2.lowell.edu/users/dah/littlethings/">LITTLE THINGS</a>, this portrait of a small galaxy was made as part of the <a href="http://www.lowell.edu/LARI_welcome.php">Lowell Amateur Research Initiative</a> (LARI), welcoming collaborations with amateur astronomers.');
      start();
    };
    apod.get(ngcDate, success);
  });

  asyncTest('Picture URL', 1, function () {
    var success = function (ngc) {
      strictEqual(ngc.pictureURL, 'http://apod.nasa.gov/apod/image/1302/NGC6822_L_HaR_GB_final2000.jpg');
      start();
    };
    apod.get(ngcDate, success);
  });

  asyncTest('URL', 1, function () {
    var success = function (ngc) {
      strictEqual(ngc.url, 'http://apod.nasa.gov/apod/ap130208.html');
      start();
    };
    apod.get(ngcDate, success);
  });

  asyncTest('Date', 1, function () {
    var success = function (ngc) {
      var fetchedDate = ngc.date;
      strictEqual(fetchedDate.getTime(), ngcDate.getTime());
      start();
    };
    apod.get(ngcDate, success);
  });

}());

(function () {
  'use strict';

  var startDate, endDate;

  module('apod.getBetween', {
    setup: function () {
      startDate = new Date(2013, 1, 8);
      endDate = new Date(2013, 1, 12);
    }
  });

  asyncTest('Title', 1, function () {
    var success = function (span) {
      strictEqual(span[0].title, "NGC 6822: Barnard's Galaxy");
      start();
    };
    apod.getBetween(startDate, endDate, success);
  });

  asyncTest('Explanation', 1, function () {
    var success = function (span) {
      strictEqual(span[1].explanation, 'One hundred years ago today the <a href="http://www.redorbit.com/news/space/1112769773/great-meteor-procession-1913-range-uncovered-012413/">Great Meteor Procession of 1913</a> occurred, a sky event <a href="http://adsabs.harvard.edu/abs/2011JRASC.105..167R">described by some</a> as "magnificent" and "entrancing" and which left people feeling "spellbound" and "privileged". Because one had to be in a right location, outside, and under clear skies, only about 1,000 people noted seeing the <a href="http://en.wikipedia.org/wiki/Meteor_procession">procession</a>. Lucky sky gazers -- particularly those near <a href="http://en.wikipedia.org/wiki/Toronto">Toronto</a>, <a href="http://en.wikipedia.org/wiki/Canada">Canada</a> -- had their eyes drawn to an amazing train of <a href="http://adsabs.harvard.edu/abs/1956Metic...1..405M">bright meteors</a> streaming across the sky, in groups, over the course of a few minutes. A current leading progenitor hypothesis is that a single <a href="http://apod.nasa.gov/apod/ap090302.html">large meteor once grazed</a> the Earth\'s atmosphere and broke up. When the resulting pieces next encountered the Earth, they came in over south-central Canada, <a href="http://skynotesbyrich.blogspot.com/2010/10/october-30-2010-101-procession-of.html">traveled thousands of kilometers</a> as they crossed over the northeastern <a href="http://en.wikipedia.org/wiki/USA">USA</a>, and eventually fell into the central <a href="http://en.wikipedia.org/wiki/Atlantic_Ocean">Atlantic ocean</a>. Pictured above is a digital scan of a <a href="http://en.wikipedia.org/wiki/Halftone">halftone</a> hand-tinted image by the artist <a href="http://www.gallery.ca/en/see/collections/artist.php?iartistid=2264">Gustav Hahn</a> who was fortunate enough to witness <a href="http://www.rasc.ca/meteor-procession-1913">the event</a> first hand. Although nothing quite like the <a href="http://www.messagetoeagle.com/historicmeteor.php">Great Meteor Procession of 1913</a> has been reported since, numerous bright fireballs -- themselves <a href="http://apod.nasa.gov/apod/ap011119.html">pretty spectacular</a> -- have since been <a href="http://apod.nasa.gov/apod/ap100722.html">recorded</a>, some even <a href="http://apod.nasa.gov/apod/ap081125.html">on</a> <a href="http://apod.nasa.gov/apod/ap110123.html">video</a>.');
      start();
    };
    apod.getBetween(startDate, endDate, success);
  });

  asyncTest('Picture URL', 1, function () {
    var success = function (span) {
      strictEqual(span[2].pictureURL, 'http://apod.nasa.gov/apod/image/1302/asteroidstreak_hst_350.jpg');
      start();
    };
    apod.getBetween(startDate, endDate, success);
  });

  asyncTest('URL', 1, function () {
    var success = function (span) {
      strictEqual(span[3].url, 'http://apod.nasa.gov/apod/ap130211.html');
      start();
    };
    apod.getBetween(startDate, endDate, success);
  });

  asyncTest('Date', 1, function () {
    var success = function (span) {
      var fifthDate, expectedDate;
      fifthDate = span[4].date;
      expectedDate = new Date(2013, 1, 12);
      strictEqual(fifthDate.getTime(), expectedDate.getTime());
      start();
    };
    apod.getBetween(startDate, endDate, success);
  });

  asyncTest('Length', 1, function () {
    var success = function (span) {
      strictEqual(span.length, 5);
      start();
    };
    apod.getBetween(startDate, endDate, success);
  });

}());

(function () {
  'use strict';

  var craterDate;

  module('Unicode', {
    setup: function () {
      craterDate = new Date(1999, 5, 10);
    }
  });

  asyncTest('Title', 1, function () {
    var success = function (crater) {
      strictEqual(crater.title, 'Mjølnir: Impact Crater');
      start();
    };
    apod.get(craterDate, success);
  });

  asyncTest('Explanation', 1, function () {
    var success = function (crater) {
      strictEqual(crater.explanation, 'The stark surface of <a href="http://apod.nasa.gov/apod/ap990326.html">Earth\'s moon</a> is pocked with large craters, records of a history of fierce bombardment by the solar system\'s formative debris. It may be difficult to imagine, but nearby planet Earth itself <a href="http://apod.nasa.gov/apod/ap971012.html">has endured</a> a similar cosmic pounding, though oceans, weathering, and geological activity have removed or hidden many of the telltale scars. For example, this false color image produced from seismic data shows <a href="http://www.geologi.uio.no/avdG/mjolnir/mjolnir.html">a recently discovered ringed structure</a> about 24 miles wide <a href="http://www.geologi.uio.no/avdG/mjolnir/photo_gallery/ html/location.html">on the floor of the Barents Sea</a>. It is most probably the result of the impact, roughly 150 million years ago, of a mile or so wide asteroid-like body. <a href="http://www.geologi.uio.no/avdG/mjolnir/photo_gallery/ html/environ_cons.html">Estimates indicate</a> that the energy released in the <a href="http://impact.arc.nasa.gov/index.html">impact could have</a> been as high as a million megatons of TNT, resulting in immense earthquakes and tidal waves. Drawing on <a href="http://www.ugcs.caltech.edu/~cherryne/mythology.html">Norse mythology</a>, the crater has been <a href="http://www.islandia.is/~oldnorse/gods/thor.htm">aptly named</a> Mjølnir - Thor\'s hammer.');
      start();
    };
    apod.get(craterDate, success);
  });

}());

(function () {
  'use strict';

  module('Edge cases');

  asyncTest('Same start and end date', 2, function () {
    var success, startEndDate;
    startEndDate = new Date(2013, 1, 8);
    success = function (ngc6822) {
      strictEqual(ngc6822.length, 1);
      strictEqual(ngc6822[0].title, "NGC 6822: Barnard's Galaxy");
      start();
    };
    apod.getBetween(startEndDate, startEndDate, success);
  });

  asyncTest('Nothing published for some dates in range', 4, function () {
    var success, startDate, endDate;
    startDate = new Date(1800, 1, 1);
    endDate = new Date(1995, 5, 21);
    success = function (twoCenturies) {
      strictEqual(twoCenturies.length, 3);
      strictEqual(twoCenturies[0].title, 'Neutron Star Earth');
      strictEqual(twoCenturies[1].title, 'Pleiades Star Cluster');
      strictEqual(twoCenturies[2].title, 'Supernova 1987a Aftermath');
      start();
    };
    apod.getBetween(startDate, endDate, success);
  });

}());

(function () {
  'use strict';

  module('Exceptions');

  asyncTest('End date falls before start date', 1, function () {
    var startDate, endDate, success, failure, span;
    startDate = new Date(2013, 1, 9);
    endDate = new Date(2013, 1, 8);

    success = function (span) {
      ok(false); // Fail the test if success is called.
      start();
    };

    failure = function (errorName, errorDesc) {
      strictEqual(errorName, 'TimespanError');
      start();
    };

    span = apod.getBetween(startDate, endDate, success, failure);
  });

  asyncTest('No APOD published on given date', 1, function () {
    var date, success, failure;
    date = new Date(1800, 0, 1);

    success = function (nothing) {
      ok(false); // Fail the test if success is called.
      start();
    };

    failure = function (errorName, errorDesc) {
      strictEqual(errorName, 'NothingPublishedError');
      start();
    };

    apod.get(date, success, failure);
  });

  asyncTest('No APODs published between given dates', 1, function () {
    var startDate, endDate, success, failure;
    startDate = new Date(1800, 1, 1);
    endDate = new Date(1800, 1, 10);

    success = function () {
      ok(false); // Fail the test if success is called.
      start();
    };

    failure = function (name, message) {
      strictEqual(name, 'NothingPublishedError');
      start();
    };

    apod.getBetween(startDate, endDate, success, failure);
  });

}());
