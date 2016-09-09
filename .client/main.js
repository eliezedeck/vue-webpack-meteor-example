var Vue = require('vue');
var App = Vue.extend(require('./app/app.vue'));

// Template.body.onRendered(function () {
//   new App({ el: '#app' })
// });

// Normally, this should be wrapped above, but the loading of the Webpack file is so late, that the Template.body is
// already loaded and its onRendered method executed. So we can immediately just launch the App.
new App({ el: '#app' });
