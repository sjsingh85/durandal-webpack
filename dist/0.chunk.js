webpackJsonp([0],{

/***/ 35:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var router = __webpack_require__(8);
var ViewModel = __webpack_require__(3);

var Index = new ViewModel({
	view: __webpack_require__(39)
});

Index.router  = router.createChildRouter()
	.makeRelative({ fromParent: true })
	.map(
		__webpack_require__(40)
	)
	.buildNavigationModel();

module.exports = Index;


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = "<section id=\"async\">\r\n\t<header><h3>Router</h3></header>\r\n\t<p>\r\n\t\tWe can interface nicely with the <code>router</code> component, too. You're seeing that in action now!\r\n\t</p>\r\n\t<br />\r\n\r\n\t<article>\r\n\t\t<header><h4>How?</h4></header>\r\n\t\t<p>\r\n\t\t\tTypically Durandals <code>router</code> module requires you to specify a <code>moduleId</code>\r\n\t\t\tfor each route.\r\n\t\t</p>\r\n\r\n\t\t<p>\r\n\t\t\tTo allow Webpack to know these are actual dependencies, we instead set each\r\n\t\t\t<code>moduleId</code> to the actual ViewModel module instance instead, and override the core\r\n\t\t\tDurandal <code>composition</code> and <code>system</code> modules to handle it.\r\n\t\t</p>\r\n\t</article>\r\n\t<br />\r\n\r\n\t<article>\r\n\t\t<header><h4>Asynchronous Routes!</h4></header>\r\n\r\n\t\t<ul class=\"nav nav-tabs\" data-bind=\"foreach: router.navigationModel\">\r\n\t\t\t<li data-bind=\"css: { active: isActive }\">\r\n\t\t\t\t<a data-bind=\"attr: { href: hash }, html: title\"></a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\t\t<div class=\"container\" style=\"padding-top: 20px;\" data-bind=\"router: {}\"></div>\t\r\n\t</article>\r\n</section>";

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = [
	{
		route: '', 
		title: 'What?',
		moduleId: function() {
			return __webpack_require__(41);
		},
		nav: true
	},

	// We can nest async routes, too, allowing us to conviniently
	// separate out various parts of our application into distinct,
	// async loaded parts. Beautiful!
	{
		route: 'nested', 
		title: 'One other thing...',
		moduleId: function(cb) {
			__webpack_require__.e/* require */(2).then(function() { /* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(43)]; (function(module) {
				cb(null, module);
			}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))}).catch(__webpack_require__.oe);
		},
		nav: true
	}
];


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var router = __webpack_require__(8);
var ViewModel = __webpack_require__(3);

var How = new ViewModel({
	view: __webpack_require__(42)
});

module.exports = How;


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<p>\r\n\t\tAlong with the ability to bundle all the routes together, we can also optionally bundle specific\r\n\t\tparts of the application together into chucks we can grab on-the-fly when the user goes to\r\n\t\tspecific routes!\r\n\t</p>\r\n\t<p>\r\n\t\tIn fact... <b>this very page was requested separately from the main <code>app.js</code></b>.\r\n\t\tCheck the network tab to see this in action (look for the <code>1.chunk.js</code> file)!\r\n\t</b>\r\n\t<p>\r\n\t\tThis is great for large apps where we don't need or want the user to download the entirety of\r\n\t\tthe application code at once.\r\n\t</p>\r\n</div>";

/***/ })

});