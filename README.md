# NSS Music History Project - Angular Edition

![Splashpage](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-mitchellblom/partAng/screenshots/mh1.png)
<br>
![Splashpage](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-mitchellblom/partAng/screenshots/mh2.png)
<br>
![Splashpage](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-mitchellblom/partAng/screenshots/mh3.png)
<br>
![Splashpage](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-mitchellblom/partAng/screenshots/mh4.png)

<hr>

## Project Summary / Requirements
Continuation of long term project. Rewriting the entire project using **AngularJS**. Full **CRUD** capabilities and interaction between the music library interface and Firebase database. User-specific authorization: users "a" and "b" have passwords of 123456, and they have user-specific songs loaded onto them. **Bootstrap**, **Font-Awesome**, and **Sass** used in styling.

<hr>

## To Access Necessary Libaries:
 - Pull down project
 - cd into lib
 - Run command "bower install"
 - Run command "npm install"
 - Seed database/seed.json to firebase with read & write permissions of:

```{ "rules": { ".read": "true", ".write": "true", "songs": { ".indexOn": "uid" }, "users": { ".indexOn": "uid"}}}```
 - Finally, run grunt from lib directory before serving up.