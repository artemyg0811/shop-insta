! function(e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r
        .exports, n), r.l = !0, r
      .exports
  }
  n.m = e, n.c = t, n.d = function(e, t,
      o) {
      n.o(e, t) || Object
        .defineProperty(e, t, {
          enumerable: !0,
          get: o
        })
    }, n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag && Object
        .defineProperty(e, Symbol
          .toStringTag, {
            value: "Module"
          }), Object.defineProperty(e,
          "__esModule", {
            value: !0
          })
    }, n.t = function(e, t) {
      if (1 & t && (e = n(e)), 8 & t)
        return e;
      if (4 & t && "object" ==
        typeof e && e && e.__esModule)
        return e;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(
          o, "default", {
            enumerable: !0,
            value: e
          }), 2 & t && "string" !=
        typeof e)
        for (var r in e) n.d(o, r,
          function(t) {
            return e[t]
          }.bind(null, r));
      return o
    }, n.n = function(e) {
      var t = e && e.__esModule ?
        function() {
          return e["default"]
        } : function() {
          return e
        };
      return n.d(t, "a", t), t
    }, n.o = function(e, t) {
      return Object.prototype
        .hasOwnProperty.call(e, t)
    }, n.p =
    "https://yastatic.net/share2/", n(n
      .s = 18)
}([function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  var o = {
    closest: function(e, t) {
      do {
        if (e.classList && e
          .classList.contains(t)
        ) return e
      } while (e = e.parentNode)
    },
    toArray: function(e) {
      for (var t = [], n = e
          .length, o = 0; o <
        n; o += 1) t.push(e[o]);
      return t
    },
    getTarget: function(e) {
      return e.target || e
        .srcElement
    },
    remove: function(e) {
      return e.parentNode
        .removeChild(e)
    },
    getRectRelativeToDocument: function(
      e) {
      var t = e
        .getBoundingClientRect(),
        n = window.scrollY ===
        undefined ? document
        .documentElement
        .scrollTop : window
        .scrollY,
        o = window.scrollX ===
        undefined ? document
        .documentElement
        .scrollLeft : window
        .scrollX;
      return {
        top: t.top + n,
        left: t.left + o,
        width: t.width ===
          undefined ? t.right -
          t.left : t.width,
        height: t.height ===
          undefined ? t.bottom -
          t.top : t.height
      }
    }
  };
  t["default"] = o
}, function(e, t, n) {
  "use strict";
  var o = n(10)(Object, "create");
  e.exports = o
}, function(e, t, n) {
  "use strict";
  var o = n(16);
  e.exports = function(e, t) {
    for (var n = e.length; n--;)
      if (o(e[n][0], t)) return n;
    return -1
  }
}, function(e, t, n) {
  "use strict";
  var o = n(116);
  e.exports = function(e, t) {
    var n = e.__data__;
    return o(t) ? n["string" ==
      typeof t ? "string" :
      "hash"] : n.map
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t.injectJs = function(e) {
    var t = document
      .createElement("script");
    return t.src = e, t.defer = !
      0, document.head
      .appendChild(t), t
  }, t.ready = function(e) {
    function t() {
      document
        .removeEventListener(
          "DOMContentLoaded", t),
        window
        .removeEventListener(
          "load", t), e()
    }
    "complete" === document
      .readyState || "loading" !==
      document.readyState && !
      document.documentElement
      .doScroll ? e() : (document
        .addEventListener(
          "DOMContentLoaded", t),
        window.addEventListener(
          "load", t))
  }, t["default"] = void 0;
  var o = function(e) {
    this._document = e
  };
  o.prototype.injectCss = function(
    e, t) {
    var n, o = t.nonce,
      r = (n = this._document)
      .getElementsByTagName(
        "head")[0] || n.body,
      i = this._document
      .createElement("style");
    i.type = "text/css", i
      .innerHTML = e, o && i
      .setAttribute("nonce", o), r
      .appendChild(i)
  };
  var r = o;
  t["default"] = r
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  var r = Object.prototype
    .hasOwnProperty,
    i = Object.prototype.toString,
    a = Object.defineProperty,
    s = Object
    .getOwnPropertyDescriptor,
    u = function(e) {
      return "function" ==
        typeof Array.isArray ? Array
        .isArray(e) :
        "[object Array]" === i.call(
          e)
    },
    c = function(e) {
      if (!e ||
        "[object Object]" !== i
        .call(e)) return !1;
      var t, n = r.call(e,
          "constructor"),
        o = e.constructor && e
        .constructor.prototype && r
        .call(e.constructor
          .prototype,
          "isPrototypeOf");
      if (e.constructor && !n && !o)
        return !1;
      for (t in e);
      return void 0 === t || r.call(
        e, t)
    },
    l = function(e, t) {
      a && "__proto__" === t.name ?
        a(e, t.name, {
          enumerable: !0,
          configurable: !0,
          value: t.newValue,
          writable: !0
        }) : e[t.name] = t.newValue
    },
    p = function(e, t) {
      if ("__proto__" === t) {
        if (!r.call(e, t)) return;
        if (s) return s(e, t).value
      }
      return e[t]
    };
  e.exports = function f() {
    var e, t, n, r, i, a, s =
      arguments[0],
      d = 1,
      m = arguments.length,
      h = !1;
    for ("boolean" == typeof s &&
      (h = s, s = arguments[1] || {}, d = 2), (null == s ||
        "object" !== o(s) &&
        "function" != typeof s) &&
      (s = {}); d < m; ++d)
      if (null != (e = arguments[
          d]))
        for (t in e) n = p(s, t),
          s !== (r = p(e, t)) && (
            h && r && (c(r) || (
              i = u(r))) ? (i ? (
                i = !1, a = n &&
                u(n) ? n : []) :
              a = n && c(n) ? n : {}, l(s, {
                name: t,
                newValue: f(h,
                  a, r)
              })) : void 0 !==
            r && l(s, {
              name: t,
              newValue: r
            }));
    return s
  }
}, function(e, t, n) {
  "use strict";
  var o = Array.isArray;
  e.exports = o
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  var r = n(15),
    i = n(90);
  e.exports = function(e) {
    return "symbol" == o(e) || i(
        e) && "[object Symbol]" ==
      r(e)
  }
}, function(e, t, n) {
  "use strict";
  var o = n(9).Symbol;
  e.exports = o
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  var r = n(87),
    i = "object" == ("undefined" ==
      typeof self ? "undefined" : o(
        self)) && self && self
    .Object === Object && self,
    a = r || i || Function(
      "return this")();
  e.exports = a
}, function(e, t, n) {
  "use strict";
  var o = n(98),
    r = n(103);
  e.exports = function(e, t) {
    var n = r(e, t);
    return o(n) ? n : undefined
  }
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  e.exports = function(e) {
    var t = o(e);
    return null != e && (
      "object" == t ||
      "function" == t)
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
      "__esModule", {
        value: !0
      }), t.loadPlugins =
    function() {
      var e = n(21);
      return e.keys().reduce((
        function(t, n) {
          var o = n.match(
            /^\.\/(\w+)\.js/);
          return o && (t[o[1]] =
              e(n)["default"]),
            t
        }), {})
    }, t.getCss = function(e) {
      return n(47)["default"] +
        Object.keys(e).map((
          function(t) {
            return "\n.ya-share2__item_service_"
              .concat(t,
                " .ya-share2__badge\n{\n    background-color: "
              ).concat(e[t]
                .color,
                ";\n}\n\n.ya-share2__item_service_"
              ).concat(t,
                ' .ya-share2__icon\n{\n    background-image: url("'
              ).concat(n(48)(
                  "./".concat(t,
                    ".svg")),
                '");\n}\n')
          })).join("")
    }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  var o = i(n(81)),
    r = i(n(0));

  function i(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var a = {
    findInside: function(e, t) {
      return e.querySelectorAll(
        ".".concat(o[
            "default"]
          .stringify(t)))
    },
    findOutside: function(e, t) {
      return r["default"]
        .closest(e, o["default"]
          .stringify(t))
    },
    getMod: function(e, t) {
      for (var n = 0, r = e
          .classList.length; n <
        r; n += 1) {
        var i = o["default"]
          .parse(e.classList[
            n]);
        if (i && i.modName ===
          t) return i.modVal
      }
    }
  };
  t["default"] = a
}, function(e, t, n) {
  "use strict";
  var o = n(6),
    r = n(86),
    i = n(91),
    a = n(120);
  e.exports = function(e, t) {
    return o(e) ? e : r(e, t) ? [
      e
    ] : i(a(e))
  }
}, function(e, t, n) {
  "use strict";
  var o = n(8),
    r = n(88),
    i = n(89),
    a = o ? o.toStringTag :
    undefined;
  e.exports = function(e) {
    return null == e ? e ===
      undefined ?
      "[object Undefined]" :
      "[object Null]" : a && a in
      Object(e) ? r(e) : i(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e, t) {
    return e === t || e != e &&
      t != t
  }
}, function(e, t, n) {
  "use strict";
  var o = n(7);
  e.exports = function(e) {
    if ("string" == typeof e || o(
        e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -
      1 / 0 ? "-0" : t
  }
}, function(e, t, n) {
  "use strict";
  n(19);
  var o = u(n(20)),
    r = n(12),
    i = u(n(74)),
    a = u(n(75)),
    s = n(4);

  function u(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function c(e) {
    return (c = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  var l = (0, r.loadPlugins)(),
    p = new i["default"](o[
      "default"].metrika.id),
    f = o["default"].defaults,
    d = (0, a["default"])({
      defaults: f,
      plugins: l,
      metrika: p
    });
  (0, s.ready)((function() {
    p.init(), d(".ya-share2", {
      reinit: !1
    })
  })), window.Ya = window.Ya || {},
    window.Ya.share2 = function(e,
      t) {
      if ("object" === c(e) && 1 ===
        e.nodeType) return d(e, t)[
        0];
      if ("string" == typeof e)
        return 0 === e.indexOf(
          "#") && (console.log(
          "DEPRECATION: use element id instead of query selector for initialization"
        ), e = e.slice(1)), d(
          "#" + e, t)[0];
      throw new TypeError(
        "Neither element nor element id is provided"
      )
    }
}, function(e, t, n) {}, function(e,
  t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  var o = {
    metrika: {
      id: 26812653
    },
    defaults: {
      hooks: {
        onready: function() {},
        onshare: function() {}
      },
      theme: {
        bare: !1,
        copy: "last",
        lang: "ru",
        limit: !1,
        nonce: "",
        popupPosition: "inner",
        popupDirection: "bottom",
        services: "collections,vkontakte,facebook,twitter",
        size: "m",
        useLinks: !1,
        direction: "horizontal"
      },
      i18n: {
        az: {
          copyLink: "Əlaqə",
          pressToCopy: "Press ctrl+C and Enter to copy"
        },
        be: {
          copyLink: "Cпасылка",
          pressToCopy: "Press ctrl+C and Enter to copy"
        },
        en: {
          copyLink: "Copy link",
          pressToCopy: "Press ctrl+C and Enter to copy"
        },
        hy: {
          copyLink: "Հղում",
          pressToCopy: "Press ctrl+C and Enter to copy"
        },
        ka: {
          copyLink: "ბმული",
          pressToCopy: "Press ctrl+C and Enter to copy"
        },
        kk: {
          copyLink: "Сілтеме",
          pressToCopy: "Press ctrl+C and Enter to copy"
        },
        ro: {
          copyLink: "Link",
          pressToCopy: "Press ctrl+C and Enter to copy"
        },
        ru: {
          copyLink: "Скопировать ссылку",
          pressToCopy: "Чтобы скопировать, нажмите ctrl+С и enter"
        },
        tr: {
          copyLink: "Bağlantı",
          pressToCopy: "Press ctrl+C and Enter to copy"
        },
        tt: {
          copyLink: "Сылтама",
          pressToCopy: "Press ctrl+C and Enter to copy"
        },
        uk: {
          copyLink: "Посилання",
          pressToCopy: "Press ctrl+C and Enter to copy"
        },
        uz: {
          copyLink: "Havoladan nusxa olish",
          pressToCopy: "Nusxa olish uchun ctrl+С va enter tugmalarini bosing"
        }
      },
      content: {
        template: "default",
        description: "",
        image: "",
        title: window.document
          .title,
        url: window.location.href
      },
      contentByService: {}
    }
  };
  t["default"] = o
}, function(e, t, n) {
  var o = {
    "./blogger.js": 22,
    "./collections.js": 23,
    "./delicious.js": 24,
    "./digg.js": 25,
    "./evernote.js": 26,
    "./facebook.js": 27,
    "./linkedin.js": 28,
    "./lj.js": 29,
    "./moimir.js": 30,
    "./odnoklassniki.js": 31,
    "./pinterest.js": 32,
    "./pocket.js": 33,
    "./qzone.js": 34,
    "./reddit.js": 35,
    "./renren.js": 36,
    "./sinaWeibo.js": 37,
    "./skype.js": 38,
    "./surfingbird.js": 39,
    "./telegram.js": 40,
    "./tencentWeibo.js": 41,
    "./tumblr.js": 42,
    "./twitter.js": 43,
    "./viber.js": 44,
    "./vkontakte.js": 45,
    "./whatsapp.js": 46
  };

  function r(e) {
    var t = i(e);
    return n(t)
  }

  function i(e) {
    if (!n.o(o, e)) {
      var t = new Error(
        "Cannot find module '" +
        e + "'");
      throw t.code =
        "MODULE_NOT_FOUND", t
    }
    return o[e]
  }
  r.keys = function() {
      return Object.keys(o)
    }, r.resolve = i, e.exports = r,
    r.id = 21
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://www.blogger.com/blog-this.g",
          params: {
            t: "description",
            u: "url",
            n: "title"
          }
        }
      }
    },
    popupDimensions: [800, 320],
    i18n: {
      az: "Blogger",
      be: "Blogger",
      en: "Blogger",
      hy: "Blogger",
      ka: "Blogger",
      kk: "Blogger",
      ro: "Blogger",
      ru: "Blogger",
      tr: "Blogger",
      tt: "Blogger",
      uk: "Blogger",
      uz: "Blogger"
    },
    color: "#fb8f3d"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://yandex.ru/collections/share/",
          params: {
            url: "url",
            image: "image",
            description: "title"
          }
        }
      }
    },
    popupDimensions: [994, 576],
    i18n: {
      az: "Yandex.Collections",
      be: "Яндэкс.Калекцыi",
      en: "Yandex.Collections",
      hy: "Yandex.Collections",
      ka: "Yandex.Collections",
      kk: "Yandex.Collections",
      ro: "Yandex.Collections",
      ru: "Яндекс.Коллекции",
      tr: "Yandex.Collections",
      tt: "Yandex.Collections",
      uk: "Yandex.Collections",
      uz: "Yandex.To‘plam"
    },
    color: "#f55"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://www.delicious.com/save?v=5&noui&jump=close",
          params: {
            url: "url",
            title: "title"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Delicious",
      be: "Delicious",
      en: "Delicious",
      hy: "Delicious",
      ka: "Delicious",
      kk: "Delicious",
      ro: "Delicious",
      ru: "Delicious",
      tr: "Delicious",
      tt: "Delicious",
      uk: "Delicious",
      uz: "Delicious"
    },
    color: "#31a9ff"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://digg.com/submit",
          params: {
            url: "url",
            title: "title",
            bodytext: "description"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Digg",
      be: "Digg",
      en: "Digg",
      hy: "Digg",
      ka: "Digg",
      kk: "Digg",
      ro: "Digg",
      ru: "Digg",
      tr: "Digg",
      tt: "Digg",
      uk: "Digg",
      uz: "Digg"
    },
    color: "#000"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://www.evernote.com/clip.action",
          params: {
            title: "title",
            body: "description",
            url: "url"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Evernote",
      be: "Evernote",
      en: "Evernote",
      hy: "Evernote",
      ka: "Evernote",
      kk: "Evernote",
      ro: "Evernote",
      ru: "Evernote",
      tr: "Evernote",
      tt: "Evernote",
      uk: "Evernote",
      uz: "Evernote"
    },
    color: "#24d666"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://www.facebook.com/sharer.php?src=sp",
          params: {
            u: "url",
            title: "title",
            description: "description",
            picture: "image"
          }
        },
        share: {
          baseUrl: "https://www.facebook.com/dialog/share?display=popup",
          params: {
            app_id: "appId",
            href: "url",
            redirect_uri: "nextUrl"
          }
        },
        feed: {
          baseUrl: "https://www.facebook.com/dialog/feed?display=popup",
          params: {
            app_id: "appId",
            link: "url",
            next: "nextUrl",
            name: "title",
            description: "description",
            picture: "image"
          }
        }
      }
    },
    contentOptions: {
      accessToken: "",
      appId: "",
      nextUrl: ""
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Facebook",
      be: "Facebook",
      en: "Facebook",
      hy: "Facebook",
      ka: "Facebook",
      kk: "Facebook",
      ro: "Facebook",
      ru: "Facebook",
      tr: "Facebook",
      tt: "Facebook",
      uk: "Facebook",
      uz: "Facebook"
    },
    color: "#3b5998"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://www.linkedin.com/shareArticle?mini=true",
          params: {
            url: "url",
            title: "title",
            summary: "description"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "LinkedIn",
      be: "LinkedIn",
      en: "LinkedIn",
      hy: "LinkedIn",
      ka: "LinkedIn",
      kk: "LinkedIn",
      ro: "LinkedIn",
      ru: "LinkedIn",
      tr: "LinkedIn",
      tt: "LinkedIn",
      uk: "LinkedIn",
      uz: "LinkedIn"
    },
    color: "#0083be"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://www.livejournal.com/update.bml",
          params: {
            subject: "title",
            event: {
              options: ["url",
                "description"
              ],
              separator: "\n"
            }
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "LiveJournal",
      be: "LiveJournal",
      en: "LiveJournal",
      hy: "LiveJournal",
      ka: "LiveJournal",
      kk: "LiveJournal",
      ro: "LiveJournal",
      ru: "LiveJournal",
      tr: "LiveJournal",
      tt: "LiveJournal",
      uk: "LiveJournal",
      uz: "LiveJournal"
    },
    color: "#0d425a"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://connect.mail.ru/share",
          params: {
            url: "url",
            title: "title",
            description: "description"
          }
        }
      }
    },
    popupDimensions: [560, 400],
    i18n: {
      az: "Moy Mir",
      be: "Мой Мир",
      en: "Moi Mir",
      hy: "Moi Mir",
      ka: "Moi Mir",
      kk: "Мой Мир",
      ro: "Moi Mir",
      ru: "Мой Мир",
      tr: "Moi Mir",
      tt: "Мой Мир",
      uk: "Мой Мир",
      uz: "Moy Mir"
    },
    color: "#168de2"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://connect.ok.ru/offer",
          params: {
            url: "url",
            title: "title",
            description: "description",
            imageUrl: "image"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Odnoklassniki",
      be: "Одноклассники",
      en: "Odnoklassniki",
      hy: "Odnoklassniki",
      ka: "Odnoklasniki",
      kk: "Одноклассники",
      ro: "Odnoklassniki",
      ru: "Одноклассники",
      tr: "Odnoklasniki",
      tt: "Одноклассники",
      uk: "Однокласники",
      uz: "Odnoklassniki"
    },
    color: "#eb722e"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://pinterest.com/pin/create/button/",
          params: {
            url: "url",
            media: "image",
            description: "title"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Pinterest",
      be: "Pinterest",
      en: "Pinterest",
      hy: "Pinterest",
      ka: "Pinterest",
      kk: "Pinterest",
      ro: "Pinterest",
      ru: "Pinterest",
      tr: "Pinterest",
      tt: "Pinterest",
      uk: "Pinterest",
      uz: "Pinterest"
    },
    color: "#c20724"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://getpocket.com/save",
          params: {
            url: "url",
            title: "title"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Pocket",
      be: "Pocket",
      en: "Pocket",
      hy: "Pocket",
      ka: "Pocket",
      kk: "Pocket",
      ro: "Pocket",
      ru: "Pocket",
      tr: "Pocket",
      tt: "Pocket",
      uk: "Pocket",
      uz: "Pocket"
    },
    color: "#ee4056"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
          params: {
            url: "url",
            title: "title",
            pics: "image"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Qzone",
      be: "Qzone",
      en: "Qzone",
      hy: "Qzone",
      ka: "Qzone",
      kk: "Qzone",
      ro: "Qzone",
      ru: "Qzone",
      tr: "Qzone",
      tt: "Qzone",
      uk: "Qzone",
      uz: "Qzone"
    },
    color: "#f5b53c"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://www.reddit.com/submit",
          params: {
            url: "url",
            title: "title"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "reddit",
      be: "reddit",
      en: "reddit",
      hy: "reddit",
      ka: "reddit",
      kk: "reddit",
      ro: "reddit",
      ru: "reddit",
      tr: "reddit",
      tt: "reddit",
      uk: "reddit",
      uz: "reddit"
    },
    color: "#ff4500"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "http://widget.renren.com/dialog/share",
          params: {
            resourceUrl: "url",
            srcUrl: "url",
            title: "title",
            pic: "image",
            description: "description"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Renren",
      be: "Renren",
      en: "Renren",
      hy: "Renren",
      ka: "Renren",
      kk: "Renren",
      ro: "Renren",
      ru: "Renren",
      tr: "Renren",
      tt: "Renren",
      uk: "Renren",
      uz: "Renren"
    },
    color: "#1760a7"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "http://service.weibo.com/share/share.php?type=3",
          params: {
            url: "url",
            pic: "image",
            title: "title"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Sina Weibo",
      be: "Sina Weibo",
      en: "Sina Weibo",
      hy: "Sina Weibo",
      ka: "Sina Weibo",
      kk: "Sina Weibo",
      ro: "Sina Weibo",
      ru: "Sina Weibo",
      tr: "Sina Weibo",
      tt: "Sina Weibo",
      uk: "Sina Weibo",
      uz: "Sina Weibo"
    },
    color: "#c53220"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://web.skype.com/share",
          params: {
            url: "url"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Skype",
      be: "Skype",
      en: "Skype",
      hy: "Skype",
      ka: "Skype",
      kk: "Skype",
      ro: "Skype",
      ru: "Skype",
      tr: "Skype",
      tt: "Skype",
      uk: "Skype",
      uz: "Skype"
    },
    color: "#00aff0"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://surfingbird.ru/share",
          params: {
            url: "url",
            title: "title",
            desc: "description"
          }
        }
      }
    },
    popupDimensions: [500, 170],
    i18n: {
      az: "Surfingbird",
      be: "Surfingbird",
      en: "Surfingbird",
      hy: "Surfingbird",
      ka: "Surfingbird",
      kk: "Surfingbird",
      ro: "Surfingbird",
      ru: "Surfingbird",
      tr: "Surfingbird",
      tt: "Surfingbird",
      uk: "Surfingbird",
      uz: "Surfingbird"
    },
    color: "#30baff"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "tg://msg_url",
          params: {
            url: "url",
            text: "title"
          }
        }
      }
    },
    i18n: {
      az: "Telegram",
      be: "Telegram",
      en: "Telegram",
      hy: "Telegram",
      ka: "Telegram",
      kk: "Telegram",
      ro: "Telegram",
      ru: "Telegram",
      tr: "Telegram",
      tt: "Telegram",
      uk: "Telegram",
      uz: "Telegram"
    },
    color: "#64a9dc"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "http://share.v.t.qq.com/index.php?c=share&a=index",
          params: {
            url: "url",
            title: "title",
            pic: "image"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Tencent Weibo",
      be: "Tencent Weibo",
      en: "Tencent Weibo",
      hy: "Tencent Weibo",
      ka: "Tencent Weibo",
      kk: "Tencent Weibo",
      ro: "Tencent Weibo",
      ru: "Tencent Weibo",
      tr: "Tencent Weibo",
      tt: "Tencent Weibo",
      uk: "Tencent Weibo",
      uz: "Tencent Weibo"
    },
    color: "#53a9d7"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://www.tumblr.com/share/link",
          params: {
            url: "url",
            description: "description"
          }
        }
      }
    },
    popupDimensions: [800, 520],
    i18n: {
      az: "Tumblr",
      be: "Tumblr",
      en: "Tumblr",
      hy: "Tumblr",
      ka: "Tumblr",
      kk: "Tumblr",
      ro: "Tumblr",
      ru: "Tumblr",
      tr: "Tumblr",
      tt: "Tumblr",
      uk: "Tumblr",
      uz: "Tumblr"
    },
    color: "#547093"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://twitter.com/intent/tweet",
          params: {
            text: "title",
            url: "url",
            hashtags: "hashtags",
            via: "via"
          }
        }
      }
    },
    contentOptions: {
      hashtags: "",
      via: ""
    },
    popupDimensions: [550, 420],
    i18n: {
      az: "Twitter",
      be: "Twitter",
      en: "Twitter",
      hy: "Twitter",
      ka: "Twitter",
      kk: "Twitter",
      ro: "Twitter",
      ru: "Twitter",
      tr: "Twitter",
      tt: "Twitter",
      uk: "Twitter",
      uz: "Twitter"
    },
    color: "#00aced"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "viber://forward",
          params: {
            text: {
              options: ["title",
                "url"
              ],
              separator: " "
            }
          }
        }
      }
    },
    i18n: {
      az: "Viber",
      be: "Viber",
      en: "Viber",
      hy: "Viber",
      ka: "Viber",
      kk: "Viber",
      ro: "Viber",
      ru: "Viber",
      tr: "Viber",
      tt: "Viber",
      uk: "Viber",
      uz: "Viber"
    },
    color: "#7b519d"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://vk.com/share.php",
          params: {
            url: "url",
            title: "title",
            description: "description",
            image: "image"
          }
        }
      }
    },
    popupDimensions: [550, 420],
    i18n: {
      az: "ВКонтакте",
      be: "ВКонтакте",
      en: "VKontakte",
      hy: "VKontakte",
      ka: "VKontakte",
      kk: "ВКонтакте",
      ro: "VKontakte",
      ru: "ВКонтакте",
      tr: "VKontakte",
      tt: "ВКонтакте",
      uk: "ВКонтакті",
      uz: "VKontakte"
    },
    color: "#4680c2"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  t["default"] = {
    config: {
      shareUrl: {
        "default": {
          baseUrl: "https://api.whatsapp.com/send",
          params: {
            text: {
              options: ["title",
                "url"
              ],
              separator: " "
            }
          }
        }
      }
    },
    i18n: {
      az: "WhatsApp",
      be: "WhatsApp",
      en: "WhatsApp",
      hy: "WhatsApp",
      ka: "WhatsApp",
      kk: "WhatsApp",
      ro: "WhatsApp",
      ru: "WhatsApp",
      tr: "WhatsApp",
      tt: "WhatsApp",
      uk: "WhatsApp",
      uz: "WhatsApp"
    },
    color: "#65bc54"
  }
}, function(e, t, n) {
  "use strict";
  n.r(t), t["default"] =
    ".ya-share2,\n.ya-share2 * {\n  line-height: normal;\n}\n.ya-share2 :link:hover,\n.ya-share2 :visited:hover {\n  color: #000 !important;\n}\n.ya-share2 input {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  line-height: normal;\n}\n.ya-share2__container_size_m {\n  font-size: 13px;\n}\n.ya-share2__container_size_m .ya-share2__icon {\n  height: 40px;\n  width: 40px;\n  background-size: 40px 40px;\n}\n.ya-share2__container_size_m .ya-share2__title {\n  line-height: 24px;\n}\n.ya-share2__container_size_m .ya-share2__item {\n  margin: 5px 4px 5px 0;\n}\n.ya-share2__container_size_m .ya-share2__item:last-child {\n  margin-right: 0;\n}\n.ya-share2__container_size_m .ya-share2__icon_more:before {\n  font-size: 12px;\n  line-height: 24px;\n}\n.ya-share2__container_size_m .ya-share2__popup {\n  padding: 5px 10px;\n}\n.ya-share2__container_size_m .ya-share2__popup_direction_auto {\n  visibility: hidden;\n}\n.ya-share2__container_size_m .ya-share2__popup_direction_bottom {\n  visibility: visible;\n  top: 28px;\n}\n.ya-share2__container_size_m .ya-share2__popup_direction_top {\n  visibility: visible;\n  bottom: 28px;\n}\n.ya-share2__container_size_m .ya-share2__input_copy {\n  width: 140px;\n}\n.ya-share2__container_size_m .ya-share2__badge + .ya-share2__title {\n  margin-left: 10px;\n}\n.ya-share2__container_size_s {\n  font-size: 12px;\n}\n.ya-share2__container_size_s .ya-share2__icon {\n  height: 18px;\n  width: 18px;\n  background-size: 18px 18px;\n}\n.ya-share2__container_size_s .ya-share2__title {\n  line-height: 18px;\n}\n.ya-share2__container_size_s .ya-share2__item {\n  margin: 3px 4px 3px 0;\n}\n.ya-share2__container_size_s .ya-share2__item:last-child {\n  margin-right: 0;\n}\n.ya-share2__container_size_s .ya-share2__icon_more:before {\n  font-size: 10px;\n  line-height: 18px;\n}\n.ya-share2__container_size_s .ya-share2__popup {\n  padding: 3px 6px;\n}\n.ya-share2__container_size_s .ya-share2__popup_direction_auto {\n  visibility: hidden;\n}\n.ya-share2__container_size_s .ya-share2__popup_direction_bottom {\n  visibility: visible;\n  top: 21px;\n}\n.ya-share2__container_size_s .ya-share2__popup_direction_top {\n  visibility: visible;\n  bottom: 21px;\n}\n.ya-share2__container_size_s .ya-share2__input_copy {\n  width: 110px;\n}\n.ya-share2__container_size_s .ya-share2__badge + .ya-share2__title {\n  margin-left: 6px;\n}\n.ya-share2__list_direction_horizontal > .ya-share2__item {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ya-share2__list_direction_horizontal > .ya-share2__item > .ya-share2__link > .ya-share2__title {\n  display: none;\n}\n.ya-share2__list_direction_vertical > .ya-share2__item {\n  display: block;\n  margin-right: 0;\n}\n.ya-share2__list {\n  display: inline-block;\n  vertical-align: top;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n.ya-share2__item {\n  font-family: Arial, sans;\n  display: inline-block;\n}\n.ya-share2__item:hover {\n  opacity: 1;\n}\n.ya-share2__link {\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.ya-share2__badge {\n  display: inline-block;\n  vertical-align: top;\n  border-radius: 100%;\n  color: #fff;\n  overflow: hidden;\n  position: relative;\n}\n.ya-share2__icon {\n  display: inline-block;\n  vertical-align: top;\n}\n.ya-share2__icon:active {\n  box-shadow: inset 0 2px 0 0 rgba(0,0,0,0.1);\n}\n.ya-share2__title {\n  display: inline-block;\n  color: #000;\n  vertical-align: bottom;\n}\n.ya-share2__title:hover {\n  color: #f00;\n}\n.ya-share2__item_more {\n  position: relative;\n}\n.ya-share2__item_more:hover {\n  opacity: 1;\n}\n.ya-share2__icon_more {\n  background-color: #fff;\n  border: 1px solid #cdcdcd;\n  box-sizing: border-box;\n  position: relative;\n}\n.ya-share2__icon_more:before {\n  content: '•••';\n  color: #a0a0a0;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  text-align: center;\n}\n.ya-share2__popup {\n  position: absolute;\n  display: none;\n  border: 1px solid #e6e6e6;\n  z-index: 9999;\n  background-color: #fff;\n}\n.ya-share2__popup_direction_bottom {\n  box-shadow: 0 10px 20px -5px rgba(0,0,0,0.4);\n}\n.ya-share2__popup_direction_top {\n  box-shadow: 0 0 20px -5px rgba(0,0,0,0.4);\n}\n.ya-share2__popup_list-direction_horizontal {\n  right: 0;\n}\n.ya-share2__popup_list-direction_vertical {\n  left: 0;\n}\n.ya-share2__popup_visible {\n  display: block;\n}\n.ya-share2__popup_clipboard .ya-share2__input_copy,\n.ya-share2__item_copy .ya-share2__input_copy,\n.ya-share2__link_copy {\n  display: none;\n}\n.ya-share2__popup_clipboard .ya-share2__link_copy {\n  display: inline-block;\n}\n.ya-share2__item_copy .ya-share2__icon {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 5h7.795c1.115 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926V16a1 1 0 1 0 2 0V8.128c0-1.783-.186-2.43-.534-3.082a3.635 3.635 0 0 0-1.512-1.512C18.302 3.186 17.655 3 15.872 3H8a1 1 0 0 0 0 2zM6.205 7c-.882 0-1.393.049-1.926.334a2.272 2.272 0 0 0-.945.945C3.049 8.812 3 9.323 3 10.205v7.59c0 .882.049 1.392.334 1.926.218.407.538.727.945.945.533.285 1.044.334 1.926.334h7.59c.882 0 1.393-.049 1.926-.334.407-.218.727-.538.945-.945.285-.534.334-1.044.334-1.926v-7.59c0-.882-.049-1.393-.334-1.926a2.272 2.272 0 0 0-.945-.945C15.187 7.049 14.677 7 13.795 7h-7.59zm-.983 2.098a.52.52 0 0 1 .197-.062c.138-.021.363-.036.786-.036h7.59c.423 0 .648.015.786.036a.52.52 0 0 1 .197.062.275.275 0 0 1 .124.124.52.52 0 0 1 .062.197c.021.138.036.363.036.786v7.59c0 .423-.015.648-.036.786a.52.52 0 0 1-.062.197.275.275 0 0 1-.124.125.52.52 0 0 1-.197.06c-.138.022-.363.037-.786.037h-7.59c-.423 0-.648-.015-.786-.036a.52.52 0 0 1-.197-.061.275.275 0 0 1-.124-.125.52.52 0 0 1-.062-.197c-.021-.138-.036-.363-.036-.786v-7.59c0-.423.015-.648.036-.786a.52.52 0 0 1 .062-.197.275.275 0 0 1 .124-.124z' fill='%23000000'%3E%3C/path%3E%3C/svg%3E%0A\");\n  opacity: 0.5;\n}\n.ya-share2__item_copy .ya-share2__icon:hover {\n  opacity: 1;\n}\n.ya-share2__item_copy .ya-share2__icon:active {\n  transform: scale(0.95);\n  box-shadow: none;\n}\n"
}, function(e, t, n) {
  var o = {
    "./blogger.svg": 49,
    "./collections.svg": 50,
    "./delicious.svg": 51,
    "./digg.svg": 52,
    "./evernote.svg": 53,
    "./facebook.svg": 54,
    "./linkedin.svg": 55,
    "./lj.svg": 56,
    "./moimir.svg": 57,
    "./odnoklassniki.svg": 58,
    "./pinterest.svg": 59,
    "./pocket.svg": 60,
    "./qzone.svg": 61,
    "./reddit.svg": 62,
    "./renren.svg": 63,
    "./sinaWeibo.svg": 64,
    "./skype.svg": 65,
    "./surfingbird.svg": 66,
    "./telegram.svg": 67,
    "./tencentWeibo.svg": 68,
    "./tumblr.svg": 69,
    "./twitter.svg": 70,
    "./viber.svg": 71,
    "./vkontakte.svg": 72,
    "./whatsapp.svg": 73
  };

  function r(e) {
    var t = i(e);
    return n(t)
  }

  function i(e) {
    if (!n.o(o, e)) {
      var t = new Error(
        "Cannot find module '" +
        e + "'");
      throw t.code =
        "MODULE_NOT_FOUND", t
    }
    return o[e]
  }
  r.keys = function() {
      return Object.keys(o)
    }, r.resolve = i, e.exports = r,
    r.id = 48
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.896 14.833A5.167 5.167 0 0114.729 20H9.166A5.167 5.167 0 014 14.833V9.167A5.166 5.166 0 019.166 4h2.608a5.167 5.167 0 015.167 5.167l.002.011c.037.536.484.96 1.03.96l.018-.002h.872c.57 0 1.034.463 1.034 1.034l-.001 3.663zM9.038 10.176h2.926a.993.993 0 000-1.987H9.038a.994.994 0 000 1.987zm5.867 3.83H9.032a.94.94 0 000 1.879h5.873a.94.94 0 100-1.88z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M5.346 4c-.264 0-.477.104-.612.19a1.568 1.568 0 00-.367.336c-.19.237-.367.59-.367 1V15.2a.8.8 0 001.6 0V6.4a.8.8 0 01.8-.8h5.68a.8.8 0 100-1.6H5.346zm2.185 3.75a1.35 1.35 0 011.077-.55h9.002c.543 0 1.024.31 1.29.687.142.2.262.47.262.786 0 .329-.13.637-.367.878l-3.408 3.68a.737.737 0 000 .737l3.407 3.68c.215.216.367.494.4.815.033.326-.066.621-.222.851-.3.443-.83.684-1.362.684H8.743c-.393.012-.926-.032-1.272-.456a1.198 1.198 0 01-.251-.591c-.02-.138-.02-.278-.02-.359V8.747c0-.35.111-.71.33-.998z' fill='%23FFF' fill-rule='evenodd'/%3E %3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 12h8v8H4zm8-8h8v8h-7.984z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.555 10.814V14.1h.96s.18.005.18-.222v-3.287h-.96s-.18-.006-.18.222zm8.032 3.065v-3.287h-.96s-.18-.006-.18.222V14.1h.96s.18.006.18-.222zm-5.306 1.32c0 .227-.18.222-.18.222H4V9.497c0-.227.18-.222.18-.222h2.514V7.222c0-.227.18-.222.18-.222h1.408l-.001 8.199zm2.065 0c0 .227-.18.221-.18.221H8.761V9.496c0-.226.18-.221.18-.221h1.406v5.924zm0-7.103c0 .227-.18.222-.18.222H8.76V7.222c0-.227.18-.222.18-.222h1.408l-.001 1.096zm4.827 9.21c0 .228-.18.223-.18.223h-4.1v-1.096c0-.227.18-.222.18-.222h2.513v-.79h-2.694V9.497c0-.227.18-.222.18-.222l4.102.003v8.029zm4.826 0c0 .228-.18.223-.18.223h-4.1v-1.096c0-.227.18-.222.18-.222h2.514v-.79h-2.695V9.497c0-.227.18-.222.18-.222L20 9.279v8.028zm-1.585-3.427v-3.287h-.96s-.18-.006-.18.222V14.1h.96s.18.006.18-.222z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.277 7.109h1.517c.08 0 .16-.08.16-.16V5.313c0-.28.08-.559.159-.758l.04-.12L5.2 7.348l.16-.08c.239-.12.558-.16.917-.16zm11.654-.28c-.12-.638-.479-.917-.838-1.037-.36-.12-.718-.28-1.676-.4-.759-.08-1.557-.12-2.116-.12-.16-.438-.399-.917-1.317-1.156-.638-.16-1.796-.12-2.155-.08-.559.08-.758.319-.918.479-.16.16-.28.598-.28.878v1.556c0 .48-.318.838-.877.838H6.397c-.32 0-.559.04-.758.12-.16.12-.32.28-.4.4-.2.279-.239.598-.239.957 0 0 0 .28.08.798.04.4.479 3.033.878 3.911.16.36.28.48.599.639.718.32 2.354.639 3.152.758.759.08 1.278.32 1.557-.279 0 0 .04-.16.12-.36a6.3 6.3 0 00.28-1.915c0-.04.079-.04.079 0 0 .36-.08 1.557.838 1.876.36.12 1.118.24 1.876.32.678.079 1.197.358 1.197 2.114 0 1.078-.24 1.238-1.397 1.238-.958 0-1.317.04-1.317-.759 0-.598.599-.558 1.078-.558.2 0 .04-.16.04-.52 0-.398.24-.598 0-.598-1.557-.04-2.475 0-2.475 1.956 0 1.796.679 2.115 2.914 2.115 1.756 0 2.354-.04 3.073-2.275.16-.439.479-1.796.678-4.03.16-1.478-.12-5.788-.319-6.866zm-3.033 4.75c-.2 0-.32 0-.519.04h-.08s-.04 0-.04-.04v-.04c.08-.4.28-.878.878-.878.639.04.799.599.799 1.038v.04c0 .04-.04.04-.04.04-.04 0-.04 0-.04-.04-.28-.08-.599-.12-.958-.16z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.423 20v-7.298h2.464l.369-2.845h-2.832V8.042c0-.824.23-1.385 1.417-1.385h1.515V4.111A20.255 20.255 0 0014.148 4c-2.183 0-3.678 1.326-3.678 3.76v2.097H8v2.845h2.47V20h2.953z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.246 8.954h3.41v10.281h-3.41zm1.725-4.935c-1.167 0-1.929.769-1.929 1.776 0 .987.74 1.777 1.884 1.777h.022c1.19 0 1.93-.79 1.93-1.777-.023-1.007-.74-1.776-1.907-1.776zm10.052 4.715c-1.81 0-2.62.997-3.073 1.698V8.976H9.54c.045.965 0 10.281 0 10.281h3.41v-5.742c0-.307.022-.614.112-.834.246-.613.807-1.25 1.75-1.25 1.233 0 1.727.944 1.727 2.325v5.501h3.41v-5.896c0-3.158-1.683-4.627-3.926-4.627z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M17.815 13.3c.438 2.114.868 4.221 1.306 6.336.037.178-.148.385-.334.311-2.025-.741-4.006-1.49-6.01-2.24a.625.625 0 01-.318-.23l-7.39-8.903c-.067-.082-.082-.215-.06-.32.312-1.23.72-2.143 1.752-3.019C7.799 4.36 8.779 4.1 10.047 4.004c.156-.015.223.014.312.133 2.418 2.909 4.837 5.817 7.248 8.725a.888.888 0 01.208.438z' fill='%23FFF'/%3E%3Cpath d='M6.175 8.462c.69-1.795 2.3-3.004 3.835-3.301l-.185-.223a4.242 4.242 0 00-3.85 3.272l.2.252z' fill='%230D425A'/%3E%3Cpath d='M10.53 5.792c-1.744.326-3.124 1.513-3.851 3.271l.905 1.091c.787-1.78 2.3-2.997 3.836-3.302l-.89-1.06zm2.76 7.827L9.364 8.9a6.119 6.119 0 00-1.269 1.87l4.89 5.89c.289-.385.867-2.359.303-3.041zM9.647 8.633l3.947 4.748c.445.542 2.456.327 3.086-.193l-4.756-5.72c-.793.156-1.587.564-2.277 1.165zm7.308 5.045c-.609.46-1.9.735-2.931.527.074.823-.096 1.892-.616 2.745l1.885.712 1.528.564c.223-.378.542-.608.913-.764l-.35-1.692-.43-2.092z' fill='%230D425A'/%3E%3C/g%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.889 9.667a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667zm6.222 0a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667zm4.77 6.108l-1.802-3.028a.879.879 0 00-1.188-.307.843.843 0 00-.313 1.166l.214.36a6.71 6.71 0 01-4.795 1.996 6.711 6.711 0 01-4.792-1.992l.217-.364a.844.844 0 00-.313-1.166.878.878 0 00-1.189.307l-1.8 3.028a.844.844 0 00.312 1.166.88.88 0 001.189-.307l.683-1.147a8.466 8.466 0 005.694 2.18 8.463 8.463 0 005.698-2.184l.685 1.151a.873.873 0 001.189.307.844.844 0 00.312-1.166z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.674 6.536a1.69 1.69 0 00-1.688 1.688c0 .93.757 1.687 1.688 1.687a1.69 1.69 0 001.688-1.687 1.69 1.69 0 00-1.688-1.688zm0 5.763a4.08 4.08 0 01-4.076-4.075 4.08 4.08 0 014.076-4.077 4.08 4.08 0 014.077 4.077 4.08 4.08 0 01-4.077 4.075zm-1.649 3.325a7.633 7.633 0 01-2.367-.98 1.194 1.194 0 011.272-2.022 5.175 5.175 0 005.489 0 1.194 1.194 0 111.272 2.022 7.647 7.647 0 01-2.367.98l2.279 2.28a1.194 1.194 0 01-1.69 1.688l-2.238-2.24-2.24 2.24a1.193 1.193 0 11-1.689-1.689l2.279-2.279' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9.742c0 1.58.599 2.986 1.884 3.51.21.087.4.003.46-.23.043-.16.144-.568.189-.738.06-.23.037-.31-.133-.512-.37-.436-.608-1.001-.608-1.802 0-2.322 1.74-4.402 4.53-4.402 2.471 0 3.829 1.508 3.829 3.522 0 2.65-1.174 4.887-2.917 4.887-.963 0-1.683-.795-1.452-1.77.276-1.165.812-2.421.812-3.262 0-.752-.405-1.38-1.24-1.38-.985 0-1.775 1.017-1.775 2.38 0 .867.293 1.454.293 1.454L8.69 16.406c-.352 1.487-.053 3.309-.028 3.492.015.11.155.136.22.054.09-.119 1.262-1.564 1.66-3.008.113-.409.647-2.526.647-2.526.32.61 1.254 1.145 2.248 1.145 2.957 0 4.964-2.693 4.964-6.298C18.4 6.539 16.089 4 12.576 4 8.204 4 6 7.13 6 9.742z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.9 5c1.159 0 2.1.948 2.1 2.117v5.862c0 .108-.008.215-.024.32.016.156.024.314.024.473 0 3.36-3.582 6.085-8 6.085s-8-2.724-8-6.085c0-.159.008-.317.024-.473a2.148 2.148 0 01-.024-.32V7.117C4 5.948 4.94 5 6.1 5h11.8zM8.596 9.392L12 12.795l3.404-3.403a1.063 1.063 0 011.502 1.502l-4.132 4.131c-.21.21-.486.314-.76.311a1.062 1.062 0 01-.788-.31l-4.132-4.132a1.063 1.063 0 011.502-1.502z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.367 14.463s-.105.148-.457.299l-.553.222.597 3.273c.062.282.25.983-.082 1.062-.17.04-.307-.067-.395-.121l-.769-.445-2.675-1.545c-.204-.122-.78-.546-1.093-.489-.205.038-.336.127-.483.216l-.77.445-2.39 1.386-.883.508c-.123.06-.301.058-.394-.025-.07-.063-.09-.253-.063-.388l.19-1.004.572-3.02c.047-.2.237-.975.166-1.137-.048-.107-.173-.196-.261-.267l-.61-.565-2.13-1.983c-.189-.153-.345-.345-.533-.496l-.235-.216c-.062-.078-.165-.235-.09-.369.142-.248.974-.218 1.335-.28l2.682-.31.82-.09c.146-.024.299-.004.413-.063.239-.123.51-.809.636-1.087l1.31-2.714c.151-.297.286-.603.431-.896.075-.15.133-.308.305-.356.162-.045.257.105.312.178.177.235.325.685.451.973l1.29 2.853c.104.238.363.964.54 1.074.266.166.858.108 1.227.172l2.841.292c.355.062 1.245.01 1.36.267.076.17-.072.314-.152.394l-.864.814-1.983 1.868c-.185.164-.77.637-.833.858-.04.14.02.414.088.722a95.62 95.62 0 01-1.182-.029c-.63-.007-2.616-.17-2.713-.178l-.84-.076c-.14-.023-.326.012-.4-.076v-.02c1.727-1.168 3.407-2.416 5.142-3.578l-.006-.044c-.146-.072-.359-.059-.54-.095-.385-.077-.79-.078-1.208-.147-.75-.124-1.59-.114-2.434-.114-1.172 0-2.329.03-3.35.21-.45.079-.894.095-1.309.197-.172.042-.358.03-.49.108l.007.012c.1.027.253.02.381.02l.928.019.808.025.813.032.591.032c.486.075 1.007.036 1.475.114.404.068.804.065 1.182.14.113.022.245.015.33.064v.006c-.039.094-.336.255-.432.318l-1.055.743-2.256 1.62-1.417.992c.003.048.024.035.045.061 1.15.167 2.52.258 3.77.262 1.298.005 2.465-.094 3.118-.193.561-.086 1.082-.147 1.653-.287.325-.08.521-.148.521-.148z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.542 10.63c-1.105-.636-2.494-1.033-4.025-1.118l.808-2.393 2.182.637c0 .963.78 1.742 1.743 1.742.964 0 1.758-.779 1.758-1.742C19.008 6.78 18.214 6 17.25 6c-.609 0-1.148.326-1.459.793l-2.65-.764a.482.482 0 00-.61.311l-1.063 3.172c-1.516.085-2.905.482-4.01 1.119a1.987 1.987 0 00-1.46-.623A1.995 1.995 0 004 12.004c0 .75.425 1.403 1.035 1.742-.029.17-.043.34-.043.51 0 2.62 3.146 4.744 7.015 4.744 3.855 0 7-2.124 7-4.744 0-.17-.013-.34-.042-.51A1.974 1.974 0 0020 12.004a1.995 1.995 0 00-1.998-1.996 2.01 2.01 0 00-1.46.623zM9.499 12.5a1.01 1.01 0 011.006 1.006.998.998 0 01-1.006.991.986.986 0 01-.992-.991.997.997 0 01.992-1.006zm5.002 0a.998.998 0 00-.992 1.006c0 .552.44.991.992.991a.998.998 0 001.006-.991 1.01 1.01 0 00-1.006-1.006zm-5.3 3.597a.484.484 0 01-.085-.694c.156-.226.482-.255.694-.085.567.44 1.474.68 2.197.68.709 0 1.616-.24 2.197-.68a.484.484 0 01.694.085.496.496 0 01-.085.694c-.737.58-1.885.907-2.806.907-.935 0-2.07-.326-2.806-.907zm8.05-7.59a.757.757 0 01-.752-.75c0-.426.34-.752.751-.752s.752.326.752.751c0 .41-.34.75-.752.75z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.019 15.562l-.001-.003-.018.002a.055.055 0 00.019.001zM7.71 12.398l.146-.68c.048-.205.03-.452.03-.692V9.812L7.88 8c-.139 0-.278.043-.393.076-.358.102-.666.201-.962.352-1.158.59-2.022 1.565-2.387 2.944-.343 1.297-.007 2.652.522 3.507.118.19.269.48.44.61.135-.02.272-.15.375-.217a6.06 6.06 0 00.622-.452l.24-.229c.63-.506 1.075-1.346 1.373-2.193zm4.276 3.164h.02a.382.382 0 00-.019-.003v.003zm-3.01-.888l-.258-.575-.088-.264h-.01l-.264.498c-.176.288-.358.574-.557.839a6.5 6.5 0 01-.85.944l-.517.422.012.024.287.14c.206.091.43.173.657.235.788.217 1.811.177 2.545-.053.178-.055.643-.194.739-.305v-.017c-.177-.092-.324-.254-.47-.381a5.573 5.573 0 01-1.225-1.507zm10.884-3.302c-.365-1.379-1.23-2.354-2.387-2.944a5.277 5.277 0 00-.962-.352c-.115-.033-.254-.077-.393-.076l-.005 1.812v1.214c0 .24-.019.487.029.692l.147.68c.297.847.741 1.687 1.372 2.193l.24.23c.196.164.402.309.622.45.103.067.24.198.375.218.171-.13.322-.42.44-.61.529-.855.865-2.21.522-3.507zm-3.66 3.8c-.2-.265-.381-.55-.557-.839l-.264-.498h-.011l-.088.264-.258.575a5.576 5.576 0 01-1.226 1.507c-.145.127-.292.29-.469.38v.018c.096.111.561.25.739.305.734.23 1.757.27 2.545.053a4.85 4.85 0 00.657-.234l.287-.141a1.31 1.31 0 00.012-.024l-.516-.422a6.5 6.5 0 01-.85-.944zm-1.653-2.727c.068-.192.097-.402.146-.61.05-.21.024-.484.024-.727V9.753l-.006-1.741c-.015-.008-.02-.01-.047-.012-.197.047-.326.05-.592.14-.357.102-.685.275-.985.44-.289.16-.53.388-.78.587-.097.077-.199.19-.308.312l.01.01a1.19 1.19 0 00-.01.012l.36.47c.232.359.445.763.581 1.213.326 1.079.182 2.411-.235 3.273a4.9 4.9 0 01-.445.75l-.258.323a.018.018 0 01-.003.007c.004.007.01.016.012.022h.008c.395-.215.686-.574 1.027-.844.189-.15.354-.35.504-.54.404-.514.755-1.046.997-1.73zm-2.55 3.085l-.259-.323a4.903 4.903 0 01-.445-.75c-.417-.862-.561-2.194-.235-3.273.136-.45.35-.854.58-1.214L12 9.501l-.01-.011.01-.01a2.791 2.791 0 00-.308-.313c-.25-.2-.491-.427-.78-.586-.3-.166-.628-.339-.985-.44-.266-.09-.395-.094-.592-.141a.083.083 0 00-.047.012l-.006 1.741v1.355c0 .243-.026.517.024.727.049.208.078.418.146.61.242.684.593 1.216.997 1.73.15.19.315.39.505.54.34.27.63.629 1.026.844h.008c.001-.006.008-.015.012-.022a.019.019 0 01-.003-.007z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.266 14.696c-.103.421.55.447.64.063.037-.191-.103-.332-.282-.332-.167 0-.333.128-.358.269zm-.128.945c.102-.498-.307-.869-.793-.843-.46.038-.843.358-.92.754-.115.511.307.882.793.844.46-.026.843-.345.92-.755zm3.797-3.157c-1.586-.997-3.707-1.01-5.42-.447-.857.28-1.764.818-2.301 1.495-.627.793-.882 1.815-.23 2.8.958 1.431 3.413 2.033 5.675 1.508 1.33-.307 2.749-1.048 3.35-2.326.562-1.177-.052-2.378-1.074-3.03zm-3.17.498c.945.167 1.7.755 1.827 1.739.243 1.854-2.173 3.336-4.026 2.327a1.933 1.933 0 01-.742-2.723c.435-.767 1.266-1.266 2.148-1.355a2.75 2.75 0 01.793.012zm6.11-.37c-.268-.18-.538-.281-.856-.383-.308-.103-.359-.154-.243-.46.076-.218.14-.41.166-.666.14-1.15-.793-1.495-1.854-1.406-.498.039-.92.167-1.355.307-.281.09-.806.384-.92.205-.064-.09.013-.23.038-.32.166-.626.23-1.496-.384-1.88-.447-.28-1.227-.204-1.7-.038-2.556.87-6.455 4.552-5.663 7.479.18.664.55 1.163.908 1.521 1.061 1.061 2.71 1.65 4.231 1.866 1.112.154 2.263.14 3.375-.064 1.815-.332 3.554-1.15 4.679-2.607.754-.972.997-2.352 0-3.235a3.334 3.334 0 00-.422-.319zm1.623-3.682c.652 1.483-.064 2.148.166 2.66.192.421.767.46 1.023.14.191-.243.294-.959.307-1.278a4.193 4.193 0 00-1.125-3.12c-.984-1.073-2.276-1.444-3.694-1.303-.256.025-.46.064-.601.217-.332.358-.166.882.294.959.384.063 1.342-.23 2.416.396.498.307.971.792 1.214 1.33zm-3.45-.562c-.282.345-.078.87.408.856.294-.012.358-.05.677.051.307.103.626.448.64.857.025.268-.282.895.32 1.061a.523.523 0 00.536-.166c.115-.128.166-.371.192-.575.089-.857-.333-1.598-1.01-2.02-.384-.23-1.445-.46-1.764-.064z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.537 13.698c.115-.52.176-1.06.176-1.614 0-4.155-3.415-7.524-7.63-7.524-.444 0-.88.038-1.304.11A4.444 4.444 0 008.425 4C5.981 4 4 5.954 4 8.364c0 .805.222 1.56.608 2.207a7.428 7.428 0 00-.155 1.513c0 4.156 3.416 7.4 7.63 7.4.477 0 .944-.044 1.397-.126.623.33 1.335.642 2.092.642 2.444 0 4.425-1.953 4.425-4.364a4.3 4.3 0 00-.46-1.938zm-3.974 1.457c-.294.418-.725.747-1.293.984-.567.238-1.239.356-2.016.356-.933 0-1.702-.162-2.308-.486a2.986 2.986 0 01-1.047-.934c-.268-.39-.403-.768-.403-1.137 0-.213.08-.395.242-.547a.855.855 0 01.615-.229.76.76 0 01.512.178c.14.119.26.294.358.527.12.278.25.51.39.695.139.185.336.34.589.46.254.12.587.18 1 .18.566 0 1.027-.12 1.382-.364.354-.243.532-.547.532-.91a.919.919 0 00-.287-.702 1.88 1.88 0 00-.741-.412 13.21 13.21 0 00-1.216-.303c-.678-.146-1.247-.318-1.703-.513-.458-.196-.822-.463-1.09-.8-.269-.34-.403-.759-.403-1.26 0-.48.142-.904.426-1.275.283-.372.693-.658 1.23-.858.537-.2 1.17-.299 1.895-.299.58 0 1.082.066 1.505.198.423.133.774.309 1.053.528.28.22.484.45.612.691.13.24.194.477.194.705 0 .21-.08.4-.241.567a.8.8 0 01-.603.252c-.22 0-.386-.05-.5-.151-.114-.101-.237-.266-.37-.495a2.27 2.27 0 00-.618-.768c-.241-.184-.627-.276-1.16-.276-.494 0-.893.1-1.196.3-.303.199-.455.44-.455.72 0 .173.053.324.155.45.103.128.245.235.426.326.18.091.363.162.547.214.185.052.49.126.916.225a15.47 15.47 0 011.446.38c.432.138.8.307 1.103.503.302.198.54.45.709.752.17.302.255.673.255 1.111 0 .525-.148.998-.442 1.417z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.315 8.49l-.214 1.987-3.436 3.382h-1.826l-.698 1.826v2.523l-2.47-.698 2.846-5.1L4 8.167l5.638.752L6.899 5l7.463 4.027 2.202-2.47h1.02L20 7.631z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.92 6.089L4.747 11.555c-.967.388-.962.928-.176 1.168l3.534 1.104 1.353 4.146c.164.454.083.634.56.634.368 0 .53-.168.736-.368.13-.127.903-.88 1.767-1.719l3.677 2.717c.676.373 1.165.18 1.333-.628l2.414-11.374c.247-.99-.378-1.44-1.025-1.146zM8.66 13.573l7.967-5.026c.398-.242.763-.112.463.154l-6.822 6.155-.265 2.833-1.343-4.116z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.813 6.01a4.397 4.397 0 00-4.326 6.121c.087.199.312.29.511.2a.382.382 0 00.206-.51 3.566 3.566 0 01-.286-1.668A3.616 3.616 0 018.76 6.79a3.615 3.615 0 013.366 3.84 3.615 3.615 0 01-4.65 3.218.39.39 0 00-.486.263.394.394 0 00.262.485c.315.093.647.152.977.174a4.397 4.397 0 004.677-4.087A4.398 4.398 0 008.813 6.01zm-1.348 5.658a1.67 1.67 0 10-.46-.655c-.274.27-.565.59-.854.966-1.022 1.315-2.224 3.694-2.148 7.007.006.204.157.484.355.497l.04.002c.213.015.394-.301.391-.516-.064-2.458.6-4.662 1.955-6.423.242-.316.488-.626.72-.878zm12.388 4.106c-1.307-.48-2.302-1.27-2.95-2.352a4.873 4.873 0 01-.354-.71.819.819 0 00.337-.36.829.829 0 00-.395-1.098.822.822 0 00-1.098.392.822.822 0 00.724 1.177c.091.237.218.516.39.81.483.812 1.431 1.912 3.196 2.558a.226.226 0 00.278-.113c0-.006.005-.01.007-.022a.224.224 0 00-.135-.282zm-3.767-1.676a2.04 2.04 0 01-1.707-3.042 2.039 2.039 0 012.784-.787 2.04 2.04 0 01.786 2.783 1.92 1.92 0 01-.268.378.223.223 0 00.014.314c.09.082.234.074.313-.016a2.489 2.489 0 10-4.017-2.89 2.493 2.493 0 002.08 3.708.224.224 0 00.015-.448z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.72 7.7h3.699v2.857h-3.7v4.102c0 .928-.01 1.463.087 1.726.098.262.343.534.61.69.355.213.758.32 1.214.32.81 0 1.616-.264 2.417-.79v2.522c-.683.322-1.302.55-1.857.678a7.94 7.94 0 01-1.798.195 4.905 4.905 0 01-1.724-.276 4.215 4.215 0 01-1.438-.79c-.399-.343-.673-.706-.826-1.09-.154-.386-.23-.945-.23-1.676v-5.611H7V8.29c.628-.203 1.357-.496 1.804-.877.45-.382.809-.84 1.08-1.374.272-.534.459-1.214.56-2.039h2.276v3.7z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 7.539a6.56 6.56 0 01-1.885.517 3.294 3.294 0 001.443-1.816 6.575 6.575 0 01-2.085.796 3.283 3.283 0 00-5.593 2.994A9.32 9.32 0 015.114 6.6a3.28 3.28 0 001.016 4.382 3.274 3.274 0 01-1.487-.41v.041a3.285 3.285 0 002.633 3.218 3.305 3.305 0 01-1.482.056 3.286 3.286 0 003.066 2.28A6.585 6.585 0 014 17.524 9.291 9.291 0 009.032 19c6.038 0 9.34-5 9.34-9.337 0-.143-.004-.285-.01-.425A6.672 6.672 0 0020 7.538z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Cpath d='M18.434 15.574c-.484-.391-1.002-.743-1.511-1.102-1.016-.718-1.945-.773-2.703.38-.426.648-1.021.677-1.644.392-1.718-.782-3.044-1.989-3.821-3.743-.344-.777-.34-1.473.465-2.022.425-.29.854-.634.82-1.268-.045-.828-2.043-3.593-2.832-3.885a1.429 1.429 0 00-.984 0C4.373 4.95 3.606 6.48 4.34 8.292c2.19 5.405 6.043 9.167 11.349 11.463.302.13.638.183.808.23 1.208.012 2.623-1.158 3.032-2.318.393-1.117-.438-1.56-1.096-2.093zM12.485 4.88c3.879.6 5.668 2.454 6.162 6.38.045.363-.09.909.426.919.538.01.408-.528.413-.89.045-3.699-3.163-7.127-6.888-7.253-.281.04-.863-.195-.9.438-.024.427.466.357.787.406z'/%3E%3Cpath d='M13.244 5.957c-.373-.045-.865-.222-.953.299-.09.546.458.49.811.57 2.395.538 3.23 1.414 3.624 3.802.057.349-.057.89.532.8.436-.066.278-.53.315-.802.02-2.293-1.936-4.38-4.329-4.669z'/%3E%3Cpath d='M13.464 7.832c-.249.006-.493.033-.585.3-.137.4.152.496.446.544.983.158 1.5.74 1.598 1.725.027.268.195.484.452.454.356-.043.389-.361.378-.664.017-1.106-1.227-2.385-2.289-2.359z'/%3E%3C/g%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.623 7.66c.12-.372 0-.643-.525-.643h-1.745c-.44 0-.644.237-.763.491 0 0-.898 2.17-2.152 3.576-.406.406-.593.542-.813.542-.119 0-.271-.136-.271-.508V7.644c0-.44-.136-.644-.509-.644H10.1c-.27 0-.44.203-.44.407 0 .423.627.525.694 1.711v2.576c0 .559-.101.66-.322.66-.593 0-2.033-2.185-2.897-4.676-.17-.492-.339-.678-.78-.678H4.593C4.085 7 4 7.237 4 7.491c0 .458.593 2.762 2.762 5.813 1.44 2.084 3.49 3.202 5.338 3.202 1.118 0 1.254-.254 1.254-.678v-1.575c0-.509.101-.594.457-.594.254 0 .712.136 1.746 1.136 1.186 1.186 1.39 1.728 2.05 1.728h1.745c.509 0 .746-.254.61-.745-.152-.492-.728-1.203-1.474-2.05-.407-.475-1.017-1-1.203-1.255-.254-.339-.186-.474 0-.78-.017 0 2.118-3.015 2.338-4.032' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t) {
  e.exports =
    "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 11.794c0 4.304-3.517 7.794-7.855 7.794a7.87 7.87 0 01-3.796-.97L4 20l1.418-4.182a7.714 7.714 0 01-1.127-4.024C4.29 7.489 7.807 4 12.145 4S20 7.49 20 11.794zm-7.855-6.553c-3.641 0-6.603 2.94-6.603 6.553A6.48 6.48 0 006.8 15.636l-.825 2.433 2.537-.806a6.6 6.6 0 003.633 1.084c3.642 0 6.604-2.94 6.604-6.553s-2.962-6.553-6.604-6.553zm3.967 8.348c-.049-.08-.177-.128-.37-.223-.192-.095-1.139-.558-1.315-.621-.177-.064-.305-.096-.434.095a10.92 10.92 0 01-.61.749c-.112.128-.224.143-.416.048-.193-.096-.813-.297-1.549-.948a5.76 5.76 0 01-1.07-1.323c-.113-.191-.013-.295.084-.39.086-.086.192-.223.289-.334.096-.112.128-.191.192-.319s.032-.239-.016-.335c-.048-.095-.433-1.035-.594-1.418-.16-.382-.32-.318-.433-.318-.112 0-.24-.016-.369-.016a.71.71 0 00-.513.239c-.177.19-.674.653-.674 1.593s.69 1.848.786 1.976c.096.127 1.332 2.119 3.289 2.884 1.958.764 1.958.51 2.31.477.353-.031 1.14-.461 1.3-.908.16-.446.16-.829.113-.908z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  var o = n(4);

  function r(e, t) {
    for (var n = 0; n < t
      .length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable ||
        !1, o.configurable = !0,
        "value" in o && (o
          .writable = !0), Object
        .defineProperty(e, o.key, o)
    }
  }

  function i(e) {
    var t = arguments.length > 1 &&
      arguments[1] !== undefined ?
      arguments[1] : function() {};
    try {
      window["yaCounter".concat(
          e)] = new window.Ya
        .Metrika2({
          id: e,
          trackLinks: !0,
          accurateTrackBounce: !0,
          params: {
            shareVersion: 2
          },
          triggerEvent: !0
        }), t()
    } catch (n) {}
  }
  var a = function() {
    function e(t) {
      ! function(e, t) {
        if (!(e instanceof t))
          throw new TypeError(
            "Cannot call a class as a function"
          )
      }(this, e), this._id = t
    }
    var t, n, a;
    return t = e, (n = [{
          key: "init",
          value: function() {
            var e, t, n =
              this;
            if (window.Ya &&
              "Metrika2" in
              window.Ya) i(
              this._id);
            else {
              var r = (0, o
                .injectJs)(
                "https://mc.yandex.ru/metrika/tag.js"
              );
              e = function() {
                  i(n._id, (
                    function() {
                      return r &&
                        r
                        .parentNode
                        .removeChild(
                          r
                        )
                    }))
                }, t =
                "yandex_metrika_callbacks2",
                window[t] =
                window[t] || [], window[t]
                .push(e)
            }
          }
        },
        {
          key: "getCounter",
          value: function() {
            return window[
              "yaCounter"
              .concat(this
                ._id)]
          }
        }
      ]) && r(t.prototype, n),
      a && r(t, a), e
  }();
  t["default"] = a
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = function(
    e) {
    return function(t) {
      var n = arguments.length >
        1 && arguments[1] !==
        undefined ? arguments[
          1] : {};
      return "string" ==
        typeof t && (t = i[
          "default"].toArray(
          document
          .querySelectorAll(t)
        )), Array.isArray(
          t) || (t = [t]), !
        1 ===
        n.reinit && (t = t
          .filter((function(e) {
            return !u[
                "default"]
              .getMod(e,
                "inited")
          }))), t.map((function(
          t) {
          var i = new r[
            "default"](t,
            (0, o[
              "default"
            ])({
              options: n
            }, e));
          return i
            .isBare() ||
            p ||
            (l.injectCss((0,
              a.getCss)(
              e.plugins
            ), {
              nonce: i
                .getNonce()
            }), p = !0), i
        }))
    }
  };
  var o = c(n(5)),
    r = c(n(76)),
    i = c(n(0)),
    a = n(12),
    s = c(n(4)),
    u = c(n(13));

  function c(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var l = new s["default"](window
      .document),
    p = !1
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = void 0;
  var r = f(n(77)),
    i = n(79),
    a = function(e) {
      if (e && e.__esModule)
        return e;
      if (null === e || "object" !==
        o(e) && "function" !=
        typeof e) return {
        "default": e
      };
      var t = p();
      if (t && t.has(e)) return t
        .get(e);
      var n = {},
        r = Object.defineProperty &&
        Object
        .getOwnPropertyDescriptor;
      for (var i in e)
        if (Object.prototype
          .hasOwnProperty.call(e, i)
        ) {
          var a = r ? Object
            .getOwnPropertyDescriptor(
              e, i) : null;
          a && (a.get || a.set) ?
            Object.defineProperty(n,
              i, a) : n[i] = e[i]
        } n["default"] = e, t && t
        .set(e, n);
      return n
    }(n(80)),
    s = f(n(13)),
    u = n(82),
    c = f(n(0)),
    l = f(n(83));

  function p() {
    if ("function" !=
      typeof WeakMap) return null;
    var e = new WeakMap;
    return p = function() {
      return e
    }, e
  }

  function f(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function d(e, t) {
    return function(e) {
        if (Array.isArray(e))
          return e
      }(e) || function(e, t) {
        if ("undefined" ==
          typeof Symbol || !(Symbol
            .iterator in Object(e)))
          return;
        var n = [],
          o = !0,
          r = !1,
          i = undefined;
        try {
          for (var a, s = e[Symbol
              .iterator](); !(o = (
              a = s.next()).done) &&
            (n.push(a.value), !t ||
              n.length !== t); o = !
            0);
        } catch (u) {
          r = !0, i = u
        } finally {
          try {
            o || null == s[
              "return"] || s[
              "return"]()
          } finally {
            if (r) throw i
          }
        }
        return n
      }(e, t) || m(e, t) ||
      function() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        )
      }()
  }

  function m(e, t) {
    if (e) {
      if ("string" == typeof e)
        return h(e, t);
      var n = Object.prototype
        .toString.call(e).slice(8, -
          1);
      return "Object" === n && e
        .constructor && (n = e
          .constructor.name),
        "Map" === n || "Set" === n ?
        Array.from(n) :
        "Arguments" === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
        .test(n) ? h(e, t) : void 0
    }
  }

  function h(e, t) {
    (null == t || t > e.length) && (
      t = e.length);
    for (var n = 0, o = new Array(
        t); n < t; n++) o[n] = e[n];
    return o
  }

  function y(e, t) {
    for (var n = 0; n < t
      .length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable ||
        !1, o.configurable = !0,
        "value" in o && (o
          .writable = !0), Object
        .defineProperty(e, o.key, o)
    }
  }
  var v = [
    "ya-share2__popup_direction_top",
    "ya-share2__popup_direction_bottom"
  ];
  var _ = !1,
    g = [];
  var b = function() {
    function e(t, n) {
      ! function(e, t) {
        if (!(e instanceof t))
          throw new TypeError(
            "Cannot call a class as a function"
          )
      }(this, e);
      var o = n.plugins,
        r = n.defaults,
        i = n.options,
        a = n.metrika,
        u = function(e) {
          return Object.keys(e)
            .reduce((function(t,
              n) {
              var o = e[n];
              return o
                .contentOptions &&
                (t[n] = o
                  .contentOptions
                ), t
            }), {})
        }(o),
        c = "ya-share2." + Math
        .random();
      this._params = n, this
        ._domNode = t, this
        ._namespace = c, this
        ._plugins = o, this
        ._options = (0, l[
          "default"])(u, r, t
          .dataset, i);
      var p = this._options.get(
        "theme.lang");
      this._i18n = this._options
        .get("i18n.".concat(p)),
        this._initLayout(o, c),
        this._bindEvents(a), t
        .classList.add(
          "ya-share2"), t
        .classList.add(
          "ya-share2_inited"),
        this._morePopup = s[
          "default"].findInside(
          this._domNode, {
            block: "ya-share2",
            elem: "popup"
          })[0], "outer" === this
        ._options.get(
          "theme.popupPosition"
        ) && this
        ._moveMorePopupOutside(),
        this._options.get(
          "hooks.onready").call(
          this)
    }
    var t, n, o;
    return t = e, (n = [{
          key: "_isDestroyed",
          value: function() {
            return null ===
              this._domNode
          }
        },
        {
          key: "_moveMorePopupOutside",
          value: function() {
            var e = s[
                "default"]
              .findInside(this
                ._domNode, {
                  block: "ya-share2",
                  elem: "container"
                })[0];
            this
              ._morePopupContainer =
              document
              .createElement(
                "div"), this
              ._morePopupContainer
              .style
              .position =
              "absolute", this
              ._morePopupContainer
              .style[
                "pointer-events"
              ] = "none",
              this._morePopup
              .style[
                "pointer-events"
              ] = "all",
              this
              ._morePopupContainer
              .className = e
              .className, this
              ._morePopupContainer
              .appendChild(
                this
                ._morePopup),
              document.body
              .appendChild(
                this
                ._morePopupContainer
              )
          }
        },
        {
          key: "updateContent",
          value: function(e) {
            if (this
              ._isDestroyed())
              throw new Error(
                "Could not operate on destroyed block."
              );
            this._options
              .merge({
                content: e
              }), this
              ._initLayout(
                this._params
                .plugins, this
                ._namespace)
          }
        },
        {
          key: "updateContentByService",
          value: function(e) {
            if (this
              ._isDestroyed())
              throw new Error(
                "Could not operate on destroyed block."
              );
            this._options
              .merge({
                contentByService: e
              }), this
              ._initLayout(
                this._params
                .plugins, this
                ._namespace)
          }
        },
        {
          key: "destroy",
          value: function() {
            this._domNode
              .classList
              .remove(
                "ya-share2_inited"
              ), this
              ._domNode
              .innerHTML = "",
              this._domNode =
              null, this
              ._morePopupContainer &&
              (c["default"]
                .remove(this
                  ._morePopupContainer
                ), this
                ._morePopupContainer =
                null),
              document.body
              .removeEventListener(
                "click", this
                ._onBodyClick
              ), document
              .body
              .removeEventListener(
                "keydown",
                this
                ._onKeydown)
          }
        },
        {
          key: "_getContentForService",
          value: function(e) {
            var t = this,
              n = function(
                n) {
                return t
                  ._options
                  .get(n, e)
              },
              o = {
                title: n(
                  "content.title"
                ),
                description: n(
                  "content.description"
                ),
                image: n(
                  "content.image"
                ),
                url: n(
                  "content.url"
                )
              },
              r = this
              ._plugins[e]
              .contentOptions || {};
            return Object
              .keys(r)
              .forEach((
                function(
                  e) {
                  o[e] = n(
                    "content."
                    .concat(
                      e))
                })), o
          }
        },
        {
          key: "_initLayout",
          value: function(e,
            t) {
            var n = this;
            this._services =
              this._options
              .get(
                "theme.services"
              ).split(",")
              .filter((
                function(
                  t) {
                  return e[
                    t]
                })).map((
                function(
                  t) {
                  var o =
                    function(
                      e) {
                      return n
                        ._options
                        .get(
                          e,
                          t)
                    },
                    r = n
                    ._getContentForService(
                      t),
                    a = e[t]
                    .config
                    .shareUrl,
                    s = a[o(
                      "content.template"
                    )] ||
                    a[
                      "default"
                    ],
                    u = (0,
                      i
                      .buildUrl
                    )(s,
                      r);
                  return u +=
                    "&utm_source=share2", {
                      name: t,
                      title: e[
                          t]
                        .i18n[
                          o(
                            "theme.lang"
                          )
                        ],
                      location: u,
                      popupDimensions: e[
                          t]
                        .popupDimensions
                    }
                })), (0, r[
                "default"])(
                this._i18n)
              .update(this
                ._domNode,
                "container",
                [{
                  urls: {
                    content: this
                      ._options
                      .get(
                        "content.url"
                      )
                  },
                  theme: this
                    ._options
                    .get(
                      "theme"
                    ),
                  services: this
                    ._services,
                  namespace: t
                }])
          }
        },
        {
          key: "getNonce",
          value: function() {
            return this
              ._options.get(
                "theme.nonce")
          }
        },
        {
          key: "_bindEvents",
          value: function(e) {
            var t, n = this;
            this
              ._onBodyClick =
              this
              ._onBodyClick
              .bind(this, e),
              this
              ._onKeydown =
              this._onKeydown
              .bind(this),
              document.body
              .addEventListener(
                "click", this
                ._onBodyClick
              ), document
              .body
              .addEventListener(
                "keydown",
                this
                ._onKeydown),
              document
              .addEventListener(
                "yacounter" +
                e._id +
                "inited", this
                ._onMetrikaInited
              ), t =
              function() {
                e.getCounter()
                  .params({
                    services: n
                      ._services
                      .map((
                        function(
                          e
                        ) {
                          return e
                            .name
                        }
                      ))
                      .join(
                        ",")
                  })
              }, _ ? t() : g
              .push(t)
          }
        },
        {
          key: "_onKeydown",
          value: function(e) {
            switch (e.which ||
              e.keyCode) {
              case 27:
                this
                  ._closePopup()
            }
          }
        },
        {
          key: "_onBodyClick",
          value: function(e,
            t) {
            var n = c[
                "default"]
              .getTarget(t),
              o = s["default"]
              .findOutside(
                n, {
                  block: "ya-share2",
                  elem: "container"
                }),
              r = s["default"]
              .findInside(this
                ._domNode, {
                  block: "ya-share2",
                  elem: "container"
                })[0];
            if (!o || o !==
              r && o !== this
              ._morePopupContainer
            ) this
              ._closePopup();
            else {
              var i = s[
                  "default"]
                .findOutside(
                  n, {
                    block: "ya-share2",
                    elem: "item"
                  });
              i && (s[
                  "default"]
                .getMod(i,
                  "more") ?
                this
                ._onMoreClick(
                  t) : s[
                  "default"]
                .getMod(i,
                  "copy") ?
                this
                ._onCopyClick(
                  t) : this
                ._onServiceClick(
                  t, i, e))
            }
          }
        },
        {
          key: "_onCopyClick",
          value: function(e) {
            var t = this;
            if (this
              ._morePopup &&
              this._morePopup
              .classList
              .contains(
                "ya-share2__popup_clipboard"
              )) this
              ._closePopup(),
              (0, u.clip)(this
                ._options.get(
                  "content.url"
                ), (
                  function(
                    e) {
                    prompt(t
                      ._i18n
                      .pressToCopy,
                      e)
                  }));
            else if (!1 ===
              this._options
              .get(
                "theme.limit"
              ) &&
              "extraItem" ===
              this._options
              .get(
                "theme.copy")
            ) {
              var n = this
                ._options.get(
                  "content.title"
                ) + " " +
                this._options
                .get(
                  "content.url"
                );
              (0, u.clip)(n, (
                function(
                  e) {
                  prompt(t
                    ._i18n
                    .pressToCopy,
                    e)
                }))
            }
            e.preventDefault(),
              e
              .stopPropagation()
          }
        },
        {
          key: "_handleAutoDirection",
          value: function() {
            var e = this;
            if ("auto" ===
              this._options
              .get(
                "theme.popupDirection"
              )) {
              var t = d(v
                .filter((
                  function(
                    t) {
                    return e
                      ._morePopup
                      .classList
                      .contains(
                        t)
                  })), 1)[0];
              if (t) this
                ._morePopup
                .classList
                .toggle(t);
              else {
                var n = this
                  ._morePopup
                  .getBoundingClientRect(),
                  o = n.y,
                  r = n
                  .height + (
                    "m" ===
                    this
                    ._options
                    .get(
                      "theme.size"
                    ) ? 28 :
                    21);
                o - r > 0 &&
                  o + r >
                  window
                  .innerHeight ?
                  this
                  ._morePopup
                  .classList
                  .toggle(
                    "ya-share2__popup_direction_top"
                  ) : this
                  ._morePopup
                  .classList
                  .toggle(
                    "ya-share2__popup_direction_bottom"
                  )
              }
            }
          }
        },
        {
          key: "_onMoreClick",
          value: function(e) {
            if ((0, u.copy)
              () ? this
              ._morePopup
              .classList.add(
                "ya-share2__popup_clipboard"
              ) : this
              ._morePopup
              .classList
              .remove(
                "ya-share2__popup_clipboard"
              ), this
              ._morePopupContainer
            ) {
              var t = s[
                  "default"]
                .findInside(
                  this
                  ._domNode, {
                    block: "ya-share2",
                    elem: "item",
                    modName: "more"
                  })[0],
                n = c[
                  "default"]
                .getRectRelativeToDocument(
                  t),
                o = n.top,
                r = n.left,
                i = n.width,
                a = n.height;
              this
                ._morePopupContainer
                .style.top =
                "".concat(o,
                  "px"), this
                ._morePopupContainer
                .style.left =
                "".concat(r,
                  "px"), this
                ._morePopupContainer
                .style.width =
                "".concat(i,
                  "px"), this
                ._morePopupContainer
                .style
                .height = ""
                .concat(a,
                  "px")
            }
            this._morePopup
              .classList
              .toggle(
                "ya-share2__popup_visible"
              ), this
              ._handleAutoDirection(),
              e
              .preventDefault(),
              e
              .stopPropagation()
          }
        },
        {
          key: "_onServiceClick",
          value: function(e, t,
            n) {
            this
              ._closePopup();
            var o = s[
                "default"]
              .getMod(t,
                "service");
            if (o) {
              var r = this
                ._services
                .filter((
                  function(
                    e) {
                    return e
                      .name ===
                      o
                  }))[0];
              if (r && (this
                  ._options
                  .get(
                    "hooks.onshare"
                  ).call(
                    this, r
                    .name), !
                  this
                  ._isDestroyed()
                )) {
                if (!this
                  ._options
                  .get(
                    "theme.useLinks"
                  ) && r
                  .popupDimensions
                ) {
                  var i = s[
                      "default"
                    ]
                    .findInside(
                      t, {
                        block: "ya-share2",
                        elem: "link"
                      })[0];
                  e.preventDefault(),
                    e
                    .stopPropagation(),
                    a.open(
                      "ya-share2",
                      i.href,
                      r
                      .popupDimensions
                    )
                }
                var u = s[
                    "default"]
                  .findInside(
                    this
                    ._domNode, {
                      block: "ya-share2",
                      elem: "item"
                    }),
                  c = []
                  .indexOf
                  .call(u, t);
                n.getCounter()
                  .reachGoal(
                    "BUTTON_CLICK", {
                      serviceName: o,
                      buttonIndex: c
                    })
              }
            }
          }
        },
        {
          key: "_onMetrikaInited",
          value: function() {
            _ = !0, g.forEach(
              (function(e) {
                return e()
              })), g = []
          }
        },
        {
          key: "isBare",
          value: function() {
            return Boolean(
              this._options
              .get(
                "theme.bare"
              ))
          }
        },
        {
          key: "_closePopup",
          value: function() {
            if (this
              ._morePopup && (
                this
                ._morePopup
                .classList
                .remove(
                  "ya-share2__popup_visible"
                ),
                "auto" ===
                this._options
                .get(
                  "theme.popupDirection"
                ))) {
              var e, t =
                function(e) {
                  if (
                    "undefined" ==
                    typeof Symbol ||
                    null == e[
                      Symbol
                      .iterator
                    ]) {
                    if (Array
                      .isArray(
                        e) ||
                      (e = m(
                        e))) {
                      var t =
                        0,
                        n =
                        function() {};
                      return {
                        s: n,
                        n: function() {
                          return t >=
                            e
                            .length ? {
                              done:
                                !
                                0
                            } : {
                              done:
                                !
                                1,
                              value: e[
                                t++
                              ]
                            }
                        },
                        e: function(
                          e
                        ) {
                          throw e
                        },
                        f: n
                      }
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    )
                  }
                  var o, r,
                    i = !0,
                    a = !1;
                  return {
                    s: function() {
                      o = e[
                          Symbol
                          .iterator
                        ]
                        ()
                    },
                    n: function() {
                      var
                        e =
                        o
                        .next();
                      return i =
                        e
                        .done,
                        e
                    },
                    e: function(
                      e) {
                      a = !
                        0,
                        r =
                        e
                    },
                    f: function() {
                      try {
                        i ||
                          null ==
                          o[
                            "return"
                          ] ||
                          o[
                            "return"
                          ]
                          ()
                      } finally {
                        if (
                          a)
                          throw r
                      }
                    }
                  }
                }(v);
              try {
                for (t.s(); !(
                    e = t.n())
                  .done;) {
                  var n = e
                    .value;
                  this
                    ._morePopup
                    .classList
                    .remove(n)
                }
              } catch (o) {
                t.e(o)
              } finally {
                t.f()
              }
            }
          }
        }
      ]) && y(t.prototype, n),
      o && y(t, o), e
  }();
  t["default"] = b
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t["default"] = function(
    e) {
    var t = new r["default"],
      n = {
        container: function(e) {
          var t = e.urls,
            n = e.theme,
            o = e.services;
          return {
            mods: {
              size: n.size
            },
            content: [i("list",
              n.direction,
              o, n.limit, t
              .content, n
              .copy, n
              .popupDirection
            )]
          }
        },
        list: function(e, t) {
          var n = arguments
            .length > 2 &&
            arguments[2] !==
            undefined ?
            arguments[2] : t
            .length,
            o = arguments
            .length > 3 &&
            arguments[3] !==
            undefined ?
            arguments[3] : "",
            r = arguments
            .length > 4 ?
            arguments[4] :
            undefined,
            a = arguments
            .length > 5 ?
            arguments[5] :
            undefined;
          !1 === n && (n = t
            .length);
          var s = t.slice(0, n),
            u = t.slice(n);
          return {
            tag: "ul",
            mods: {
              direction: e
            },
            content: [s.map((
                function(
                  e) {
                  return i(
                    "item",
                    e)
                })), 0 === u
              .length &&
              "extraItem" ===
              r && i(
                "item_extra_copy",
                o), u.length >
              0 && i(
                "item_more",
                u, o, r, a, e)
            ]
          }
        },
        item: function() {
          var e = arguments
            .length > 0 &&
            arguments[0] !==
            undefined ?
            arguments[0] : {};
          return {
            tag: "li",
            mods: {
              service: e.name
            },
            content: i("link",
              e)
          }
        },
        link: function() {
          var e = arguments
            .length > 0 &&
            arguments[0] !==
            undefined ?
            arguments[0] : {},
            t = e.location,
            n = e.title;
          return {
            tag: "a",
            attrs: {
              href: t || "#",
              rel: t && u(t),
              target: t &&
                "_blank",
              title: n
            },
            content: [i(
              "badge"), i(
              "title", n)]
          }
        },
        badge: function() {
          return {
            tag: "span",
            content: [i("icon")]
          }
        },
        icon: function() {
          return {
            tag: "span"
          }
        },
        title: function(e) {
          return {
            tag: "span",
            content: e
          }
        },
        item_more: function(e, t,
          n, r, a) {
          return (0, o[
            "default"])(i(
            "item"), {
            mods: {
              more: !0
            },
            content: [i(
              "link_more"
            ), i(
              "popup",
              e, t, n,
              r, a)]
          })
        },
        link_more: function() {
          return (0, o[
            "default"])(i(
            "link"), {
            mods: {
              more: !0
            },
            content: i(
              "badge_more"
            )
          })
        },
        badge_more: function() {
          return (0, o[
            "default"])(i(
            "badge"), {
            mods: {
              more: !0
            },
            content: i(
              "icon_more")
          })
        },
        icon_more: function() {
          return (0, o[
            "default"])(i(
            "icon"), {
            mods: {
              more: !0
            }
          })
        },
        item_copy: function(e) {
          return (0, o[
            "default"])(i(
            "item"), {
            mods: {
              copy: !0
            },
            content: [i(
              "link_copy"
            ), i(
              "input_copy",
              e)]
          })
        },
        item_extra_copy: function(
          t) {
          return (0, o[
            "default"])(i(
            "item"), {
            mods: {
              copy: !0
            },
            content: [i(
              "link", {
                title: e
                  .copyLink
              }), i(
              "input_copy",
              t)]
          })
        },
        link_copy: function() {
          return (0, o[
            "default"])(i(
            "link"), {
            mods: {
              copy: !0
            },
            content: i(
              "title", e
              .copyLink)
          })
        },
        input_copy: function(e) {
          return {
            tag: "input",
            attrs: {
              value: e
            }
          }
        },
        popup: function(e, t) {
          var n = arguments
            .length > 2 &&
            arguments[2] !==
            undefined ?
            arguments[2] :
            "last",
            o = arguments
            .length > 3 ?
            arguments[3] :
            undefined,
            r = arguments
            .length > 4 ?
            arguments[4] :
            undefined,
            a = i("list",
              "vertical", e);
          return "first" === n ?
            a.content.unshift(i(
              "item_copy", t)) :
            "last" === n && a
            .content.push(i(
              "item_copy", t
            )), {
              mods: {
                direction: o =
                  "top" === o ?
                  "top" : "auto" === o ?
                  "auto" : "bottom",
                "list-direction": r =
                  "vertical" ===
                  r ?
                  "vertical" : "horizontal"
              },
              content: a
            }
        }
      };

    function i(e) {
      for (var t = arguments
          .length, r = new Array(
            t > 1 ? t - 1 : 0),
          i = 1; i < t; i++) r[i -
        1] = arguments[i];
      return (0, o["default"])({
        block: "ya-share2",
        elem: e
      }, n[e].apply(n, r))
    }
    return {
      update: function(e, n) {
        var o = arguments
          .length > 2 &&
          arguments[2] !==
          undefined ? arguments[
            2] : [];
        e.innerHTML = t.toHtml(i
          .apply(void 0, [n]
            .concat(a(o))))
      }
    }
  };
  var o = i(n(5)),
    r = i(n(78));

  function i(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function a(e) {
    return function(e) {
      if (Array.isArray(e))
        return s(e)
    }(e) || function(e) {
      if ("undefined" !=
        typeof Symbol && Symbol
        .iterator in Object(e))
        return Array.from(e)
    }(e) || function(e, t) {
      if (!e) return;
      if ("string" == typeof e)
        return s(e, t);
      var n = Object.prototype
        .toString.call(e).slice(8,
          -1);
      "Object" === n && e
        .constructor && (n = e
          .constructor.name);
      if ("Map" === n || "Set" ===
        n) return Array.from(n);
      if ("Arguments" === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
        .test(n)) return s(e, t)
    }(e) || function() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      )
    }()
  }

  function s(e, t) {
    (null == t || t > e.length) && (
      t = e.length);
    for (var n = 0, o = new Array(
        t); n < t; n++) o[n] = e[n];
    return o
  }

  function u(e) {
    var t = ["nofollow"];
    return /^https?:/.test(e) && t
      .push("noopener"), t.join(" ")
  }
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  var r = function() {
    function e() {
      this._shortTags = {};
      for (var e = 0; e < t
        .length; e++) this
        ._shortTags[t[e]] = 1;
      this._optJsAttrName =
        "onclick", this
        ._optJsAttrIsJs = !0, this
        ._optJsCls = "i-bem", this
        ._optJsElem = !0, this
        ._optEscapeContent = !0,
        this._optNobaseMods = !1,
        this._optDelimElem = "__",
        this._optDelimMod = "_"
    }
    e.prototype = {
      toHtml: function(e) {
        this._buf = "", this
          ._html(e);
        var t = this._buf;
        return delete this
          ._buf, t
      },
      _html: function(e) {
        var t, s, u;
        if (!1 !== e &&
          null != e)
          if ("object" !== o(
              e)) this._buf +=
            this
            ._optEscapeContent ?
            n(e) : e;
          else if (Array
          .isArray(e))
          for (t = 0, s = e
            .length; t <
            s; t++) !1 !== (
              u = e[t]) &&
            null != u && this
            ._html(u);
        else {
          if (e.toHtml) {
            var c = e.toHtml
              .call(this,
                e) || "";
            return void(this
              ._buf += c)
          }
          var l = !1 !== e
            .bem;
          if ("undefined" !=
            typeof e.tag && !e
            .tag) return void(
            e.html ? this
            ._buf += e
            .html : this
            ._html(e
              .content));
          e.mix && !Array
            .isArray(e.mix) &&
            (e.mix = [e.mix]);
          var p, f, d, m = "",
            h = "",
            y = !1;
          if (p = e.attrs)
            for (t in p) !
              0 === (f = p[
                t]) ? h +=
              " " +
              t : !1 !== f &&
              null !== f &&
              f !==
              undefined && (
                h += " " + t +
                '="' + r(f) +
                '"');
          if (l) {
            var v = e.block +
              (e.elem ? this
                ._optDelimElem +
                e.elem : "");
            e.block && (m = a(
              e, v, null,
              this
              ._optNobaseMods,
              this
              ._optDelimMod
            ), e.js && (
              (d = {})[
                v] = !
              0 ===
              e.js ? {} :
              e.js));
            var _ = this
              ._optJsCls && (
                this
                ._optJsElem ||
                !e.elem),
              g = e.mix;
            if (g && g.length)
              for (t = 0, s =
                g.length; t <
                s; t++) {
                var b = g[t];
                if (b && !
                  1 !== b.bem
                ) {
                  var k = b
                    .block ||
                    e.block ||
                    "",
                    w = b
                    .elem || (
                      b
                      .block ?
                      null : e
                      .block &&
                      e.elem),
                    x = k + (
                      w ? this
                      ._optDelimElem +
                      w : "");
                  k && (m +=
                    a(b, x,
                      v,
                      this
                      ._optNobaseMods,
                      this
                      ._optDelimMod
                    ), b
                    .js && (
                      (d =
                        d || {})[
                        x
                      ] = !
                      0 ===
                      b.js ? {} : b
                      .js,
                      y = !
                      0,
                      _ || (
                        _ =
                        k &&
                        this
                        ._optJsCls &&
                        (this
                          ._optJsElem ||
                          !w
                        ))
                    ))
                }
              }
            if (d) {
              _ && (m += " " +
                this
                ._optJsCls);
              var C = y || !
                0 !== e.js ?
                i(JSON
                  .stringify(
                    d)) :
                '{"' + v +
                '":{}}';
              h += " " + (e
                .jsAttr ||
                this
                ._optJsAttrName
              ) + "='" + (
                this
                ._optJsAttrIsJs ?
                "return " +
                C : C) + "'"
            }
          }
          e.cls && (m = (m ?
              m + " " : ""
            ) + r(e.cls)
            .trim());
          var z = e.tag ||
            "div";
          this._buf += "<" +
            z + (m ?
              ' class="' + m +
              '"' : "") + (
              h || ""), this
            ._shortTags[z] ?
            this._buf +=
            "/>" : (this
              ._buf += ">", e
              .html ? this
              ._buf += e
              .html : this
              ._html(e
                .content),
              this._buf +=
              "</" + z + ">")
        }
      }
    };
    var t =
      "area base br col command embed hr img input keygen link menuitem meta param source track wbr"
      .split(" "),
      n = e.prototype.xmlEscape =
      function(e) {
        return (e + "").replace(
            /&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
      },
      r = e.prototype.attrEscape =
      function(e) {
        return (e + "").replace(
            /&/g, "&amp;")
          .replace(/"/g, "&quot;")
      },
      i = e.prototype
      .jsAttrEscape = function(
        e) {
        return (e + "").replace(
            /&/g, "&amp;")
          .replace(/'/g, "&#39;")
      },
      a = function(e, t, n, o,
        r) {
        var i, a, s, u = "";
        if (n !== t && (n && (u +=
            " "), u += t), i = e
          .elem && e.elemMods || e
          .mods)
          for (s in i)((a = i[
            s]) || 0 === a) && (
            u += " " + (o ? r :
              t + r) + s + (!
              0 === a ? "" : r +
              a));
        return u
      };
    return e
  }();
  e.exports = r
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }

  function r(e) {
    return Object.keys(e).map((
      function(t) {
        return "".concat(
          encodeURIComponent(
            t), "=").concat(
          encodeURIComponent(
            e[t]))
      })).join("&")
  }
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t.buildUrl = function(e,
    t) {
    var n = r(function(e, t) {
        return Object.keys(e)
          .reduce((function(n,
            r) {
            var i = e[r];
            if ("object" ===
              o(i)) {
              var a = i
                .options
                .reduce((
                  function(
                    e, n
                  ) {
                    var
                      o =
                      t[
                        n
                      ];
                    return o &&
                      e
                      .push(
                        o
                      ),
                      e
                  }), [])
                .join(i
                  .separator
                );
              return n[r] =
                a, n
            }
            var s = t[i];
            return s && (n[
              r] = s), n
          }), {})
      }(e.params, t)),
      i = -1 === e.baseUrl
      .indexOf("?") ? "?" : "&";
    return "".concat(e.baseUrl)
      .concat(i).concat(n)
  }, t.serializeParams = r
}, function(e, t, n) {
  "use strict";

  function o(e, t) {
    (null == t || t > e.length) && (
      t = e.length);
    for (var n = 0, o = new Array(
        t); n < t; n++) o[n] = e[n];
    return o
  }
  Object.defineProperty(t,
    "__esModule", {
      value: !0
    }), t.open = function(e, t,
    n) {
    var r = "".concat(e).concat(
        Date.now()),
      i = (p = n, f = 2, function(
        e) {
        if (Array.isArray(e))
          return e
      }(p) || function(e, t) {
        if ("undefined" !=
          typeof Symbol &&
          Symbol.iterator in
          Object(e)) {
          var n = [],
            o = !0,
            r = !1,
            i = undefined;
          try {
            for (var a, s = e[
                Symbol
                .iterator](); !(
                o = (a = s
                  .next()).done
              ) && (n.push(a
                  .value), !t ||
                n.length !== t
              ); o = !0);
          } catch (u) {
            r = !0, i = u
          } finally {
            try {
              o || null == s[
                  "return"] ||
                s["return"]()
            } finally {
              if (r) throw i
            }
          }
          return n
        }
      }(p, f) || function(e,
        t) {
        if (e) {
          if ("string" ==
            typeof e) return o(
            e, t);
          var n = Object
            .prototype.toString
            .call(e).slice(8, -
              1);
          return "Object" ===
            n && e
            .constructor && (n =
              e.constructor.name
            ), "Map" === n ||
            "Set" === n ? Array
            .from(n) :
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
            .test(n) ? o(e, t) :
            void 0
        }
      }(p, f) || function() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        )
      }()),
      a = i[0],
      s = i[1],
      u = {
        scrollbars: 1,
        resizable: 1,
        menubar: 0,
        toolbar: 0,
        status: 0,
        left: (screen.width - a) /
          2,
        top: (screen.height - s) /
          2,
        width: a,
        height: s
      },
      c = Object.keys(u).map((
        function(e) {
          return "".concat(e,
            "=").concat(u[e])
        })).join(","),
      l = window.open(t, r, c);
    var p, f;
    l && l.focus()
  }
}, function(e, t, n) {
  "use strict";
  var o;

  function r(e) {
    return (r = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }! function(i) {
    var a = "block",
      s = "blockMod",
      u = "elem",
      c = "elemMod",
      l = {
        origin: {
          delims: {
            elem: "__",
            mod: {
              name: "_",
              val: "_"
            }
          },
          wordPattern: "[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*"
        },
        "two-dashes": {
          delims: {
            elem: "__",
            mod: {
              name: "--",
              val: "_"
            }
          },
          wordPattern: "[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*"
        }
      },
      p = {};

    function f(e) {
      var t = function(e) {
          if (e || (e = {}),
            "string" == typeof e) {
            var t = l[e];
            if (!t) throw new Error(
              "The `" + e +
              "` naming is unknown."
            );
            return t
          }
          var n = l.origin,
            o = n.delims,
            r = o.mod,
            i = e.mod || o.mod;
          return {
            delims: {
              elem: e.elem || o
                .elem,
              mod: "string" ==
                typeof i ? {
                  name: i,
                  val: i
                } : {
                  name: i.name || r
                    .name,
                  val: i.val || i
                    .name || r.val
                }
            },
            wordPattern: e
              .wordPattern || n
              .wordPattern
          }
        }(e),
        n = JSON.stringify(t);
      if (p[n]) return p[n];
      var o = t.delims,
        r = function(e, t) {
          var n = "(" + t + ")",
            o = "(?:" + e.elem +
            "(" + t + "))?",
            r = "(?:" + e.mod.name +
            "(" + t + "))?",
            i = "(?:" + e.mod.val +
            "(" + t + "))?",
            a = r + i;
          return new RegExp("^" +
            n + a + "$|^" + n +
            o + a + "$")
        }(o, t.wordPattern);

      function i(e) {
        var t = r.exec(e);
        if (!t) return undefined;
        var n = {
            block: t[1] || t[4]
          },
          o = t[5],
          i = t[2] || t[6];
        if (o && (n.elem = o), i) {
          var a = t[3] || t[7];
          n.modName = i, n.modVal =
            a || !0
        }
        return n
      }

      function f(e) {
        if ("string" == typeof e &&
          (e = i(e)), !e || !e.block
        ) return undefined;
        var t = e.modName,
          n = t && (e.modVal || !e
            .hasOwnProperty(
              "modVal"));
        if (e.elem) {
          if (n) return c;
          if (!t) return u
        }
        return n ? s : t ? void 0 :
          a
      }
      var d = {
        validate: function(e) {
          return r.test(e)
        },
        typeOf: f,
        isBlock: function(e) {
          return f(e) === a
        },
        isBlockMod: function(e) {
          return f(e) === s
        },
        isElem: function(e) {
          return f(e) === u
        },
        isElemMod: function(e) {
          return f(e) === c
        },
        parse: i,
        stringify: function(e) {
          if (!e || !e.block)
            return undefined;
          var t = e.block;
          if (e.elem && (t += o
              .elem + e.elem), e
            .modName) {
            var n = e.modVal;
            !n && 0 !== n && e
              .hasOwnProperty(
                "modVal") || (
                t += o.mod
                .name + e
                .modName), n &&
              !0 !== n && (t +=
                o.mod.val + n)
          }
          return t
        },
        elemDelim: o.elem,
        modDelim: o.mod.name,
        modValDelim: o.mod.val
      };
      return p[n] = d, d
    }
    var d = f();
    ["validate", "typeOf",
      "isBlock", "isBlockMod",
      "isElem", "isElemMod",
      "parse", "stringify",
      "elemDelim", "modDelim",
      "modValDelim"
    ].forEach((function(e) {
        f[e] = d[e]
      })), "object" === r(t) && (e
        .exports = f), "object" ===
      ("undefined" ==
        typeof modules ?
        "undefined" : r(modules)) &&
      modules.define("bem-naming", (
        function(e) {
          e(f)
        })), (o = function(e, t,
        n) {
        n.exports = f
      }.call(t, n, t, e)) ===
      undefined || (e.exports = o),
      !1 && (i.bemNaming = f)
  }("undefined" != typeof window ?
    window : global)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
      "__esModule", {
        value: !0
      }), t.copy = i, t.clip =
    function(e, t) {
      var n = function(e) {
        var t = document
          .createElement("input");
        return t.setAttribute(
            "type", "text"), t
          .setAttribute("value",
            e), t.style.position =
          "absolute", t.style
          .left = "-9999px",
          document.body
          .appendChild(t), t
      }(e);
      n.select();
      var o = i();
      r["default"].remove(n), o ||
        t(e)
    };
  var o, r = (o = n(0)) && o
    .__esModule ? o : {
      "default": o
    };

  function i() {
    try {
      return document.execCommand(
        "copy")
    } catch (e) {
      return !1
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t,
      "__esModule", {
        value: !0
      }), t.createSchema = d, t
    .fromDataset = h, t
    .applyWhitelist = y, t[
      "default"] = function(e, t,
      n) {
      var o = arguments.length >
        3 && arguments[3] !==
        undefined ? arguments[3] : {},
        r = d(t, e),
        i = h(n),
        a = y(i, r),
        s = y(o, r);
      return new f(r, a, s)
    }, t.Storage = void 0;
  var o = a(n(5)),
    r = a(n(84)),
    i = a(n(123));

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function s(e) {
    return (s = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }

  function u(e, t) {
    return function(e) {
      if (Array.isArray(e))
        return e
    }(e) || function(e, t) {
      if ("undefined" ==
        typeof Symbol || !(Symbol
          .iterator in Object(e)))
        return;
      var n = [],
        o = !0,
        r = !1,
        i = undefined;
      try {
        for (var a, s = e[Symbol
            .iterator](); !(o = (
            a = s.next()).done) &&
          (n.push(a.value), !t ||
            n.length !== t); o = !
          0);
      } catch (u) {
        r = !0, i = u
      } finally {
        try {
          o || null == s[
            "return"] || s[
            "return"]()
        } finally {
          if (r) throw i
        }
      }
      return n
    }(e, t) || function(e, t) {
      if (!e) return;
      if ("string" == typeof e)
        return c(e, t);
      var n = Object.prototype
        .toString.call(e).slice(8,
          -1);
      "Object" === n && e
        .constructor && (n = e
          .constructor.name);
      if ("Map" === n || "Set" ===
        n) return Array.from(n);
      if ("Arguments" === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
        .test(n)) return c(e, t)
    }(e, t) || function() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      )
    }()
  }

  function c(e, t) {
    (null == t || t > e.length) && (
      t = e.length);
    for (var n = 0, o = new Array(
        t); n < t; n++) o[n] = e[n];
    return o
  }

  function l(e, t) {
    if (!(e instanceof t))
      throw new TypeError(
        "Cannot call a class as a function"
      )
  }

  function p(e, t) {
    for (var n = 0; n < t
      .length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable ||
        !1, o.configurable = !0,
        "value" in o && (o
          .writable = !0), Object
        .defineProperty(e, o.key, o)
    }
  }
  var f = function() {
    function e() {
      l(this, e);
      for (var t = arguments
          .length, n = new Array(
            t), r = 0; r < t; r++)
        n[r] = arguments[r];
      this._options = o["default"]
        .apply(void 0, [!0,
            {}
          ]
          .concat(n))
    }
    var t, n, i;
    return t = e, (n = [{
          key: "merge",
          value: function(e) {
            (0, o["default"])(
              !0, this
              ._options, e)
          }
        },
        {
          key: "get",
          value: function(e,
            t) {
            if (t && e.match(
                /^content\./
              )) {
              var n = e
                .replace(
                  /^content\./,
                  "contentByService."
                  .concat(t,
                    ".")),
                o = (0, r[
                  "default"
                ])(this
                  ._options, n
                );
              if (o !==
                undefined)
                return o
            }
            return (0, r[
              "default"])(
              this._options,
              e)
          }
        }
      ]) && p(t.prototype, n),
      i && p(t, i), e
  }();

  function d(e, t) {
    var n = (0, o["default"])(!
      0, {}, e, {
        contentByService: {}
      });
    return Object.keys(t).forEach((
      function(e) {
        var o = t[e];
        Object.keys(o).forEach((
          function(t) {
            var r =
              "contentByService."
              .concat(e,
                ".").concat(
                t),
              a = o[t];
            (0, i[
              "default"])(n,
              r, a)
          }))
      })), n
  }
  t.Storage = f;
  var m = {
    _defaults: {
      group: "content",
      type: "string"
    },
    bare: {
      group: "theme",
      type: "boolean"
    },
    copy: {
      group: "theme",
      type: "string"
    },
    lang: {
      group: "theme",
      type: "string"
    },
    limit: {
      group: "theme",
      type: "string"
    },
    nonce: {
      group: "theme",
      type: "string"
    },
    popupPosition: {
      group: "theme",
      type: "string"
    },
    popupDirection: {
      group: "theme",
      type: "string"
    },
    services: {
      group: "theme",
      type: "string"
    },
    size: {
      group: "theme",
      type: "string"
    },
    direction: {
      group: "theme",
      type: "string"
    },
    useLinks: {
      group: "theme",
      type: "boolean"
    }
  };

  function h(e) {
    var t = {};
    return Object.keys(e).forEach((
      function(n) {
        var o, r = u(n.split(
            ":"), 2),
          a = r[0],
          s = r[1],
          c = m[a] || m
          ._defaults,
          l = c.group,
          p = function(e, t) {
            switch (e) {
              case "boolean":
                return t !==
                  undefined;
              default:
                return t
            }
          }(c.type, e[n]);
        if (s) {
          if ("content" !== l)
            return;
          o =
            "contentByService."
            .concat(s, ".")
            .concat(a)
        } else o = "".concat(l,
          ".").concat(a);
        (0, i["default"])(t, o,
          p)
      })), t
  }

  function y(e, t) {
    var n = {};
    return Object.keys(e).forEach((
      function(o) {
        var a = e[o];
        if ("object" === s(a) &&
          null !== a)
          if (
            "contentByService" ===
            o) {
            var u = a;
            Object.keys(u)
              .forEach((
                function(e) {
                  var o = u[
                    e];
                  "object" ===
                  s(a) &&
                    null !==
                    a &&
                    Object
                    .keys(o)
                    .forEach((
                      function(
                        a) {
                        var
                          s =
                          o[
                            a
                          ],
                          u =
                          "contentByService."
                          .concat(
                            e,
                            "."
                          )
                          .concat(
                            a
                          );
                        (0,
                          r[
                            "default"
                          ]
                        )(
                          t,
                          "content."
                          .concat(
                            a
                          )
                        ) ===
                        undefined
                          &&
                          (0,
                            r[
                              "default"
                            ]
                          )
                          (t,
                            "contentByService."
                            .concat(
                              e,
                              "."
                            )
                            .concat(
                              a
                            )
                          ) ===
                          undefined ||
                          (0,
                            i[
                              "default"
                            ]
                          )
                          (n,
                            u,
                            s
                          )
                      }))
                }))
          }
        else {
          var c = a;
          Object.keys(c)
            .forEach((
              function(e) {
                var a = c[
                    e],
                  s = ""
                  .concat(o,
                    ".")
                  .concat(
                    e);
                (0, r[
                  "default"
                ])(t, ""
                  .concat(o,
                    ".")
                  .concat(e)
                ) !==
                undefined &&
                  (0, i[
                    "default"
                  ])(n, s,
                    a)
              }))
        }
      })), n
  }
}, function(e, t, n) {
  "use strict";
  var o = n(85);
  e.exports = function(e, t, n) {
    var r = null == e ?
      undefined : o(e, t);
    return r === undefined ? n : r
  }
}, function(e, t, n) {
  "use strict";
  var o = n(14),
    r = n(17);
  e.exports = function(e, t) {
    for (var n = 0, i = (t = o(t,
        e)).length; null != e &&
      n < i;) e = e[r(t[n++])];
    return n && n == i ? e :
      undefined
  }
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  var r = n(6),
    i = n(7),
    a =
    /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    s = /^\w*$/;
  e.exports = function(e, t) {
    if (r(e)) return !1;
    var n = o(e);
    return !("number" != n &&
      "symbol" != n &&
      "boolean" != n && null !=
      e && !i(e)) || (s.test(
        e) || !a.test(e) ||
      null != t && e in Object(
        t))
  }
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  var r = "object" == (
      "undefined" == typeof global ?
      "undefined" : o(global)) &&
    global && global.Object ===
    Object && global;
  e.exports = r
}, function(e, t, n) {
  "use strict";
  var o = n(8),
    r = Object.prototype,
    i = r.hasOwnProperty,
    a = r.toString,
    s = o ? o.toStringTag :
    undefined;
  e.exports = function(e) {
    var t = i.call(e, s),
      n = e[s];
    try {
      e[s] = undefined;
      var o = !0
    } catch (u) {}
    var r = a.call(e);
    return o && (t ? e[s] = n :
      delete e[s]), r
  }
}, function(e, t, n) {
  "use strict";
  var o = Object.prototype.toString;
  e.exports = function(e) {
    return o.call(e)
  }
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  e.exports = function(e) {
    return null != e &&
      "object" == o(e)
  }
}, function(e, t, n) {
  "use strict";
  var o = n(92),
    r =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    i = /\\(\\)?/g,
    a = o((function(e) {
      var t = [];
      return 46 === e
        .charCodeAt(0) && t
        .push(""), e.replace(r,
          (function(e, n, o,
            r) {
            t.push(o ? r
              .replace(i,
                "$1") : n ||
              e)
          })), t
    }));
  e.exports = a
}, function(e, t, n) {
  "use strict";
  var o = n(93);
  e.exports = function(e) {
    var t = o(e, (function(e) {
        return 500 === n
          .size && n.clear(),
          e
      })),
      n = t.cache;
    return t
  }
}, function(e, t, n) {
  "use strict";
  var o = n(94);

  function r(e, t) {
    if ("function" != typeof e ||
      null != t && "function" !=
      typeof t) throw new TypeError(
      "Expected a function");
    var n = function i() {
      var n = arguments,
        o = t ? t.apply(this, n) :
        n[0],
        r = i.cache;
      if (r.has(o)) return r.get(
        o);
      var a = e.apply(this, n);
      return i.cache = r.set(o,
        a) || r, a
    };
    return n.cache = new(r.Cache ||
      o), n
  }
  r.Cache = o, e.exports = r
}, function(e, t, n) {
  "use strict";
  var o = n(95),
    r = n(115),
    i = n(117),
    a = n(118),
    s = n(119);

  function u(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var o = e[t];
      this.set(o[0], o[1])
    }
  }
  u.prototype.clear = o, u
    .prototype["delete"] = r, u
    .prototype.get = i, u.prototype
    .has = a, u.prototype.set = s, e
    .exports = u
}, function(e, t, n) {
  "use strict";
  var o = n(96),
    r = n(108),
    i = n(114);
  e.exports = function() {
    this.size = 0, this
      .__data__ = {
        hash: new o,
        map: new(i || r),
        string: new o
      }
  }
}, function(e, t, n) {
  "use strict";
  var o = n(97),
    r = n(104),
    i = n(105),
    a = n(106),
    s = n(107);

  function u(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var o = e[t];
      this.set(o[0], o[1])
    }
  }
  u.prototype.clear = o, u
    .prototype["delete"] = r, u
    .prototype.get = i, u.prototype
    .has = a, u.prototype.set = s, e
    .exports = u
}, function(e, t, n) {
  "use strict";
  var o = n(1);
  e.exports = function() {
    this.__data__ = o ? o(null) : {}, this.size = 0
  }
}, function(e, t, n) {
  "use strict";
  var o = n(99),
    r = n(100),
    i = n(11),
    a = n(102),
    s =
    /^\[object .+?Constructor\]$/,
    u = Function.prototype,
    c = Object.prototype,
    l = u.toString,
    p = c.hasOwnProperty,
    f = RegExp("^" + l.call(p)
      .replace(
        /[\\^$.*+?()[\]{}|]/g,
        "\\$&").replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        "$1.*?") + "$");
  e.exports = function(e) {
    return !(!i(e) || r(e)) && (o(
      e) ? f : s).test(a(e))
  }
}, function(e, t, n) {
  "use strict";
  var o = n(15),
    r = n(11);
  e.exports = function(e) {
    if (!r(e)) return !1;
    var t = o(e);
    return "[object Function]" ==
      t ||
      "[object GeneratorFunction]" ==
      t ||
      "[object AsyncFunction]" ==
      t || "[object Proxy]" == t
  }
}, function(e, t, n) {
  "use strict";
  var o, r = n(101),
    i = (o = /[^.]+$/.exec(r && r
      .keys && r.keys.IE_PROTO ||
      "")) ? "Symbol(src)_1." + o :
    "";
  e.exports = function(e) {
    return !!i && i in e
  }
}, function(e, t, n) {
  "use strict";
  var o = n(9)[
    "__core-js_shared__"];
  e.exports = o
}, function(e, t, n) {
  "use strict";
  var o = Function.prototype
    .toString;
  e.exports = function(e) {
    if (null != e) {
      try {
        return o.call(e)
      } catch (t) {}
      try {
        return e + ""
      } catch (t) {}
    }
    return ""
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e, t) {
    return null == e ? undefined :
      e[t]
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    var t = this.has(e) &&
      delete this.__data__[e];
    return this.size -= t ? 1 : 0,
      t
  }
}, function(e, t, n) {
  "use strict";
  var o = n(1),
    r = Object.prototype
    .hasOwnProperty;
  e.exports = function(e) {
    var t = this.__data__;
    if (o) {
      var n = t[e];
      return "__lodash_hash_undefined__" ===
        n ? undefined : n
    }
    return r.call(t, e) ? t[e] :
      undefined
  }
}, function(e, t, n) {
  "use strict";
  var o = n(1),
    r = Object.prototype
    .hasOwnProperty;
  e.exports = function(e) {
    var t = this.__data__;
    return o ? t[e] !==
      undefined : r.call(t, e)
  }
}, function(e, t, n) {
  "use strict";
  var o = n(1);
  e.exports = function(e, t) {
    var n = this.__data__;
    return this.size += this.has(
        e) ? 0 : 1, n[e] = o &&
      t === undefined ?
      "__lodash_hash_undefined__" :
      t, this
  }
}, function(e, t, n) {
  "use strict";
  var o = n(109),
    r = n(110),
    i = n(111),
    a = n(112),
    s = n(113);

  function u(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var o = e[t];
      this.set(o[0], o[1])
    }
  }
  u.prototype.clear = o, u
    .prototype["delete"] = r, u
    .prototype.get = i, u.prototype
    .has = a, u.prototype.set = s, e
    .exports = u
}, function(e, t, n) {
  "use strict";
  e.exports = function() {
    this.__data__ = [], this
      .size = 0
  }
}, function(e, t, n) {
  "use strict";
  var o = n(2),
    r = Array.prototype.splice;
  e.exports = function(e) {
    var t = this.__data__,
      n = o(t, e);
    return !(n < 0) && (n == t
      .length - 1 ? t.pop() : r
      .call(t, n, 1), --this
      .size, !0)
  }
}, function(e, t, n) {
  "use strict";
  var o = n(2);
  e.exports = function(e) {
    var t = this.__data__,
      n = o(t, e);
    return n < 0 ? undefined : t[
      n][1]
  }
}, function(e, t, n) {
  "use strict";
  var o = n(2);
  e.exports = function(e) {
    return o(this.__data__, e) > -
      1
  }
}, function(e, t, n) {
  "use strict";
  var o = n(2);
  e.exports = function(e, t) {
    var n = this.__data__,
      r = o(n, e);
    return r < 0 ? (++this.size, n
        .push([e, t])) : n[r][1] =
      t, this
  }
}, function(e, t, n) {
  "use strict";
  var o = n(10)(n(9), "Map");
  e.exports = o
}, function(e, t, n) {
  "use strict";
  var o = n(3);
  e.exports = function(e) {
    var t = o(this, e)["delete"](
      e);
    return this.size -= t ? 1 : 0,
      t
  }
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  e.exports = function(e) {
    var t = o(e);
    return "string" == t ||
      "number" == t || "symbol" ==
      t || "boolean" == t ?
      "__proto__" !== e : null ===
      e
  }
}, function(e, t, n) {
  "use strict";
  var o = n(3);
  e.exports = function(e) {
    return o(this, e).get(e)
  }
}, function(e, t, n) {
  "use strict";
  var o = n(3);
  e.exports = function(e) {
    return o(this, e).has(e)
  }
}, function(e, t, n) {
  "use strict";
  var o = n(3);
  e.exports = function(e, t) {
    var n = o(this, e),
      r = n.size;
    return n.set(e, t), this
      .size += n.size == r ? 0 :
      1, this
  }
}, function(e, t, n) {
  "use strict";
  var o = n(121);
  e.exports = function(e) {
    return null == e ? "" : o(e)
  }
}, function(e, t, n) {
  "use strict";
  var o = n(8),
    r = n(122),
    i = n(6),
    a = n(7),
    s = o ? o.prototype : undefined,
    u = s ? s.toString : undefined;
  e.exports = function c(e) {
    if ("string" == typeof e)
      return e;
    if (i(e)) return r(e, c) + "";
    if (a(e)) return u ? u.call(
      e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -
      1 / 0 ? "-0" : t
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e, t) {
    for (var n = -1, o = null ==
        e ? 0 : e.length, r =
        Array(o); ++n < o;) r[n] =
      t(e[n], n, e);
    return r
  }
}, function(e, t, n) {
  "use strict";
  var o = n(124);
  e.exports = function(e, t, n) {
    return null == e ? e : o(e, t,
      n)
  }
}, function(e, t, n) {
  "use strict";
  var o = n(125),
    r = n(14),
    i = n(128),
    a = n(11),
    s = n(17);
  e.exports = function(e, t, n, u) {
    if (!a(e)) return e;
    for (var c = -1, l = (t = r(t,
          e)).length, p = l - 1,
        f = e; null != f && ++c <
      l;) {
      var d = s(t[c]),
        m = n;
      if (c != p) {
        var h = f[d];
        (m = u ? u(h, d, f) :
          undefined) === undefined
          &&
          (m = a(h) ? h : i(t[
            c + 1]) ? [] : {})
      }
      o(f, d, m), f = f[d]
    }
    return e
  }
}, function(e, t, n) {
  "use strict";
  var o = n(126),
    r = n(16),
    i = Object.prototype
    .hasOwnProperty;
  e.exports = function(e, t, n) {
    var a = e[t];
    i.call(e, t) && r(a, n) && (
      n !== undefined || t in e
    ) || o(e, t, n)
  }
}, function(e, t, n) {
  "use strict";
  var o = n(127);
  e.exports = function(e, t, n) {
    "__proto__" == t && o ? o(e,
      t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
      }) : e[t] = n
  }
}, function(e, t, n) {
  "use strict";
  var o = n(10),
    r = function() {
      try {
        var e = o(Object,
          "defineProperty");
        return e({}, "", {}), e
      } catch (t) {}
    }();
  e.exports = r
}, function(e, t, n) {
  "use strict";

  function o(e) {
    return (o = "function" ==
      typeof Symbol && "symbol" ==
      typeof Symbol.iterator ?
      function(e) {
        return typeof e
      } : function(e) {
        return e && "function" ==
          typeof Symbol && e
          .constructor ===
          Symbol && e !== Symbol
          .prototype ? "symbol" :
          typeof e
      })(e)
  }
  var r = /^(?:0|[1-9]\d*)$/;
  e.exports = function(e, t) {
    var n = o(e);
    return !!(t = null == t ?
        9007199254740991 : t) && (
        "number" == n ||
        "symbol" != n && r.test(e)
      ) && e > -1 && e % 1 ==
      0 && e < t
  }
}]);
//# sourceMappingURL=share.js.map