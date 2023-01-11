function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {
  /* NAV BUTTON JS */
  const navButton = document.getElementById("nav-button");
  navButton.addEventListener("click", function () {
    navButton.classList.toggle("active");
  });

  /* Change nav color on scroll */
  const nav = document.querySelector('.header__nav');
  window.onscroll = () => {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  }

  /* TYPEWRITER JS */
  new Typewriter("#typewriter", {
    strings: [
      "Outdoor Furniture",
      "Grills & Outdoor Kitchens",
      "Fireplaces, Gas Logs & Wood Stoves",
      "Get Started Today",
    ],
    autoStart: true,
    delay: 75,
    loop: true,
  });

  /* LOCATION JS */
  // Get the user's current location
  navigator.geolocation.getCurrentPosition(function (position) {
    var userLat = position.coords.latitude;
    var userLng = position.coords.longitude;

    // Example store locations
    var storeLocations = [
      { 
        name: "Winston Salem", 
        phone: '(336)-760-1766',
        phoneLink: 'tel:+1-336-760-1766',
        address: '1500 Hanes Mall Blvd, Winston-Salem, NC 27103',
        href: 'https://www.google.com/search?q=casual+furniture+world+winston+salem',
        lat: 36.07007, 
        lng: -80.33271 
      },
      { 
        name: "Greensboro", 
        phone: '(336)-252-2640',
        phoneLink: 'tel:+1-336-252-2640',
        address: '3809 Lawndale Dr, Greensboro, NC 27455',
        href: 'https://www.google.com/search?q=casual+furniture+world+greensboro',
        lat: 36.12056, 
        lng: -79.83115 
      },
      { 
        name: "Myrtle Beach", 
        phone: '(843)-272-1376',
        phoneLink: 'tel:+1-843-272-1376',
        address: '2500 Hwy 17 S, North Myrtle Beach, SC 29582',
        href: 'https://www.google.com/search?q=casual+furniture+world+myrtle+beach',
        lat: 33.80839, 
        lng: -78.71382 
      },
    ];

    var nearestStore = null;
    var nearestDistance = Infinity;

    // Find the nearest store
    for (var i = 0; i < storeLocations.length; i++) {
      var store = storeLocations[i];
      var distance = getDistanceFromLatLonInMile(
        userLat,
        userLng,
        store.lat,
        store.lng
      );
      if (distance < nearestDistance) {
        nearestStore = store;
        nearestDistance = distance;
      }
    }

    var locationDiv = document.getElementById("location");
    var distanceLink = document.querySelector('.distance');
    var addressLink = document.querySelector('.address');
    var phoneLink = document.querySelector('.phone');
    
    locationDiv.innerHTML =
      "Nearest store: " +
      nearestStore.name;
    distanceLink.innerHTML = "Distance: " + nearestDistance.toFixed(2) + " miles away";
    distanceLink.href = nearestStore.href;
    addressLink.innerHTML = "Address: " + nearestStore.address;
    addressLink.href = nearestStore.href;
    phoneLink.innerHTML = "Phone: " + nearestStore.phone;
    phoneLink.href = nearestStore.phoneLink;
  });

  function getDistanceFromLatLonInMile(lat1, lon1, lat2, lon2) {
    var R = 3958.8; // radius of the earth in miles
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in miles
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
});
