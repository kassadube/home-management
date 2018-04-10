# react-base-site

## Git Commands

add TAG
    git tag -a v0.1.1 -m " release v0.1.1"
push tags
    git push --tags
 
## Static Server

For environments using Node, the easiest way to handle this would be to install serve and let it handle the rest:
``` npm
npm install -g serve
serve -s build
```

The last command shown above will serve your static site on the port 5000. Like many of serve’s internal settings, the port can be adjusted using the -p or --port flags.

Run this command to get a full list of the options available:

``` node
serve -h
```

add express to run from build dir

``` node
node / nodemone server.js
```

### firebase

add firebase account kassadubes@gmail.com

``` node
npm install -g firebase-tools
firebase login
firebase init
```
to deploy 

``` node
firebase deploy
```
https://react-start-93b26.firebaseapp.com/

## github

npm install --save gh-pages
add "homepage": "https://kassadube.github.io/react-base-site",
to package json
https://kassadube.github.io/react-base-site/


## netlify

``` npm
npm install netlify-cli -g
netlify deploy
```

## Now

npm install -g now
account : kassadubes@gmail.com
Run now --name react-base-site


# Redux router

yarn add redux react-redux react-router-dom react-router-redux redux-thunk history redux-devtools-extension