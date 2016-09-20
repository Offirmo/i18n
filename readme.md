# Offirmo's internationalize

Based on yahoo i18n libs (http://formatjs.io/), but offering more:
- integrated Intl API polyfill (taken from yahoo doc itself)
- simpler API (keeping all features, 
- safer failover

While message resolution may fail, we try to not aggressively fail with a throw,
but instead return the "best possible message":
- **never throw**, always return a displayable string
- fallback to "en" if possible
- display a raw key to the user (in UI) rather than nothing, to ease pinpointing
- allow passing a custom debug id to more easily identify components with broken i18n

TODO add a customizable error handler
 
Interesting reads:
* http://userguide.icu-project.org/formatparse
* http://userguide.icu-project.org/formatparse/messages
* http://formatjs.io/
 
