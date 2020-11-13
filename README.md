# Webpack 5 unused export bug
This is a minimal repro of an issue the Microsoft Office team ran into when upgrading to webpack 5. To get set up follow these steps:

1. Run `npm install`
2. Run `npm run webpack`
3. Open the index.html page in your favorite browser

In the console you will see an error like this:

```
boot.js:3914 Uncaught TypeError: (0 , lib.createTheme) is not a function
    at Object.844 (boot.js:3914)
    at __webpack_require__ (boot.js:3966)
    at boot.js:4207
    at boot.js:4208
```


This error goes away when changing any of the following:
1. Making it only a single entry point (remove the logout entrypoint)
2. Switch the webpack mode to development
3. Set optimization.concatenateModules to false in the webpack config
4. Set optimization.usedExports to false in the webpack config 
5. Switch the dynamic import in ErrorDialog.js to a static import