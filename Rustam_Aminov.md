# Issues that i faced

- Can't use https://developer.marvel.com , i don't have an secret key, that is needed to call API as written here https://developer.marvel.com/documentation/authorization
  - i've tried to find it anywhere, but i was unlucky
- src/components/layout/breadcrumb.tsx matchPathToName function
  - i don't want to install lodash only to transform from snake case to uppercase/remove _ sign and etc, just an easy function is better IMHO
- markup can be done way better and with mobile devices support, but honestly i'm not really best at it and i've get unused to work with markup from a scratch, usually there is some system of components behind that, but i didn't want to spend more time on this aspect than i already did
- is it a problem or not: i did a different routes and pages for filter system that we have, it could be better to just pass as URL param, but without api there is no difference
- github pages
  - didn't expected that i need to define subdomain for it =/
- tests
  - didn't provided since create-react-app and react-router v6 having issues together and i'm short in time, don't wanna prolong this challenge for a big time
