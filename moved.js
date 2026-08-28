/* creating.works is where these pages live. 2gather.network is where people meet them.
 * Version: V1.00 | Date: 2026-08-28
 *
 * A browser keeps a session per address, so somebody signed in on 2gather is a stranger on
 * creating.works. That is the whole reason the profile kept asking for a code and My account
 * showed no email: the page was not being difficult, it genuinely did not know them.
 *
 * creating.works is ours rather than anybody's destination, so anything with a home on
 * 2gather sends people there. The check is on the hostname, so the copy 2gather already
 * serves through the apex Worker never redirects and cannot loop.
 *
 * MOVED is deliberately a list rather than "everything". A path that is not yet in the apex
 * Worker's PROXY_PATHS has no home on 2gather, and sending somebody there would hand them a
 * 404 instead of a page. Add a path here only once 2gather actually answers for it.
 */
(function () {
  if (window.location.hostname !== 'creating.works') { return; }

  var MOVED = [
    '/profile-edit'
    // Waiting on PROXY_PATHS in the apex Worker, then each of these joins the list:
    // '/account', '/profile', '/terms-of-service.html', '/privacy-policy.html',
    // '/code-of-conduct.html', '/giving', '/claim'
  ];

  var here = window.location.pathname.replace(/\/index\.html$/, '/');
  for (var i = 0; i < MOVED.length; i++) {
    var m = MOVED[i];
    if (here === m || here === m + '/' || here.indexOf(m + '/') === 0) {
      // replace rather than assign, so the back button does not land straight back here.
      window.location.replace('https://2gather.network' + window.location.pathname
        + window.location.search + window.location.hash);
      return;
    }
  }
})();
