/*!
 * Integrated Plugin Library v1.0.0
 * Date: 2022-08-25 11:52 AM
 */

/* Indian Number Formatting*/
/* Example var IEV = $("#inputelement").toINR(); alert(IEV); */
(function ($) { $.fn.toINR = function () { if (this.val().trim() != "") { var IPVal = this.val().trim(); var GRP1, GRP2; IPVal = IPVal + '' || ''; GRP1 = IPVal.split('.'); GRP2 = GRP1[1] || null; GRP1 = GRP1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,"); IPVal = GRP2 ? GRP1 + '.' + GRP2 : GRP1; return IPVal; } return this.val(); }; } (jQuery));

/* Example "123456.toINR() */
if (typeof String.prototype.toINR !== "function") { String.prototype.toINR = function () { if (this != "") { var IPVal = this; var GRP1, GRP2; IPVal = IPVal + '' || ''; GRP1 = IPVal.split('.'); GRP2 = GRP1[1] || null; GRP1 = GRP1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,"); IPVal = GRP2 ? GRP1 + '.' + GRP2 : GRP1; return IPVal; } return this; }; }