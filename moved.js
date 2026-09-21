(function () {
  if (window.location.hostname !== 'creating.works') { return; }

  var MOVED = [
    '/profile-edit',
    '/account',
    '/profile',
    '/giving',
    '/claim',
    '/terms-of-service.html',
    '/privacy-policy.html',
    '/code-of-conduct.html'
  ];

  var here = window.location.pathname.replace(/\/index\.html$/, '/');
  for (var i = 0; i < MOVED.length; i++) {
    var m = MOVED[i];
    if (here === m || here === m + '/' || here.indexOf(m + '/') === 0) {
      window.location.replace('https://2gather.network' + window.location.pathname
        + window.location.search + window.location.hash);
      return;
    }
  }
})();
