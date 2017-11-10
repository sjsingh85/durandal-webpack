webpackJsonp([1],{

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

var ko = __webpack_require__(2);
var dialog = __webpack_require__(9);
var ViewModel = __webpack_require__(3);

function Hello() {
	this.message = ko.observable('');
	this.text = ko.observable('');
	this.title = ko.observable('');
	this.canClose = ko.observable(true);
};

Hello.prototype.view = __webpack_require__(38);

Hello.prototype.getView = ViewModel.prototype.getView;

Hello.prototype.close = function() {
	return dialog.close(this, null);
};

module.exports = Hello;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n\t<div class=\"modal-content\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<!-- ko if: canClose -->\r\n\t\t\t\t<a role=\"button\" title=\"Close Dialog\" class=\"close\" data-bind=\"click: close\">\r\n\t\t\t\t\t&times;\r\n\t\t\t\t</a>\r\n\t\t\t<!-- /ko-->\r\n\r\n\t\t\t<h4 class=\"modal-title\">Hello world!</h4>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<p>\r\n\t\t\t\tI was loaded in a separate network request to the rest of the application. I'm not\r\n\t\t\t\topened that much, so it's probably for the best... :(\r\n\t\t\t</p>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"modal-footer\">\r\n\t\t\t<a class=\"btn btn-default\" data-bind=\"click: close\">Bye!</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ })

});