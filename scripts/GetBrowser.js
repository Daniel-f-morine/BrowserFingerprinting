/* eslint-disable */
(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = typeof require === "function" && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          a.code = "MODULE_NOT_FOUND";
          throw a;
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }

    for (var u = typeof require === "function" && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }
    return o;
  }

  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        !function (e, t) {
          if (typeof exports === "object" && typeof module === "object") {
            module.exports = t();
          } else if (typeof define === "function" && define.amd) {
            define([], t);
          } else if (typeof exports === "object") {
            exports.bowser = t();
          } else {
            e.bowser = t();
          }
        }(this, function () {
          return function (e) {
            var t = {};

            function r(n) {
              if (t[n]) {
                return t[n].exports;
              }
              var i = (t[n] = { i: n, l: false, exports: {} });
              e[n].call(i.exports, i, i.exports, r);
              i.l = true;
              return i.exports;
            }

            r.m = e;
            r.c = t;

            r.d = function (e, t, n) {
              if (!r.o(e, t)) {
                Object.defineProperty(e, t, { enumerable: true, get: n });
              }
            };

            r.r = function (e) {
              if (
                typeof Symbol !== "undefined" &&
                Symbol.toStringTag
              ) {
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                });
              }
              Object.defineProperty(e, "__esModule", { value: true });
            };

            r.t = function (e, t) {
              if (1 & t) e = r(e);
              if (8 & t) return e;
              if (
                4 & t &&
                typeof e === "object" &&
                e &&
                e.__esModule
              ) {
                return e;
              }
              var n = Object.create(null);
              r.r(n);
              Object.defineProperty(n, "default", {
                enumerable: true,
                value: e,
              });
              if (2 & t && typeof e !== "string") {
                for (var i in e) {
                  r.d(
                    n,
                    i,
                    function (t) {
                      return e[t];
                    }.bind(null, i)
                  );
                }
              }
              return n;
            };

            r.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              r.d(t, "a", t);
              return t;
            };

            r.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            };

            r.p = "";
            return r((r.s = 90));
          };
        });
      },
      {},
    ],

    2: [
      function (require, module, exports) {
        const Bowser = require("bowser"); // CommonJS
        const browser = Bowser.getParser(window.navigator.userAgent);

        const UserBrowser = document.querySelector("#bowser_browser");
        UserBrowser.innerText = `Your Browser: "${browser.getBrowserName()}"`;
      },
      { bowser: 1 },
    ],
  },
  {},
  [2]
);
