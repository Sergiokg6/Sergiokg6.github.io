(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2141],
  {
    3431: function (t) {
      var e = "function" == typeof Float32Array;
      function i(t, e, i) {
        return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      }
      function s(t, e, i) {
        return (
          3 * (1 - 3 * i + 3 * e) * t * t + 2 * (3 * i - 6 * e) * t + 3 * e
        );
      }
      function n(t) {
        return t;
      }
      t.exports = function (t, r, a, l) {
        if (!(0 <= t && t <= 1 && 0 <= a && a <= 1))
          throw Error("bezier x values must be in [0, 1] range");
        if (t === r && a === l) return n;
        for (var o = e ? new Float32Array(11) : Array(11), h = 0; h < 11; ++h)
          o[h] = i(0.1 * h, t, a);
        return function (e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : i(
                (function (e) {
                  for (var n = 0, r = 1; 10 !== r && o[r] <= e; ++r) n += 0.1;
                  var l = n + ((e - o[--r]) / (o[r + 1] - o[r])) * 0.1,
                    h = s(l, t, a);
                  return h >= 0.001
                    ? (function (t, e, n, r) {
                        for (var a = 0; a < 4; ++a) {
                          var l = s(e, n, r);
                          if (0 === l) break;
                          var o = i(e, n, r) - t;
                          e -= o / l;
                        }
                        return e;
                      })(e, l, t, a)
                    : 0 === h
                    ? l
                    : (function (t, e, s, n, r) {
                        var a,
                          l,
                          o = 0;
                        do
                          (a = i((l = e + (s - e) / 2), n, r) - t) > 0
                            ? (s = l)
                            : (e = l);
                        while (Math.abs(a) > 1e-7 && ++o < 10);
                        return l;
                      })(e, n, n + 0.1, t, a);
                })(e),
                r,
                l
              );
        };
      };
    },
    2141: function (t, e, i) {
      "use strict";
      i.d(e, {
        Xu: function () {
          return D;
        },
        YT: function () {
          return U;
        },
      });
      var s,
        n,
        r,
        a,
        l,
        o,
        h,
        u,
        c,
        d,
        p,
        f = i(3431),
        v = i.n(f),
        g = function (t) {
          (this.startX = t.startX),
            (this.startY = t.startY),
            (this.endX = t.endX),
            (this.endY = t.endY),
            (this.totalX = this.endX - this.startX),
            (this.totalY = this.endY - this.startY),
            (this.startMultiplierX = t.startMultiplierX || 1),
            (this.endMultiplierX = t.endMultiplierX || 1),
            (this.startMultiplierY = t.startMultiplierY || 1),
            (this.endMultiplierY = t.endMultiplierY || 1);
        };
      function m() {
        return (m =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
            }
            return t;
          }).apply(this, arguments);
      }
      ((s = o || (o = {})).speed = "speed"),
        (s.translateX = "translateX"),
        (s.translateY = "translateY"),
        (s.rotate = "rotate"),
        (s.rotateX = "rotateX"),
        (s.rotateY = "rotateY"),
        (s.rotateZ = "rotateZ"),
        (s.scale = "scale"),
        (s.scaleX = "scaleX"),
        (s.scaleY = "scaleY"),
        (s.scaleZ = "scaleZ"),
        (s.opacity = "opacity"),
        ((n = h || (h = {})).px = "px"),
        (n["%"] = "%"),
        (n.vh = "vh"),
        (n.vw = "vw"),
        ((r = u || (u = {})).deg = "deg"),
        (r.turn = "turn"),
        (r.rad = "rad"),
        ((c || (c = {}))[""] = ""),
        ((a = d || (d = {})).vertical = "vertical"),
        (a.horizontal = "horizontal"),
        ((l = p || (p = {})).ease = "ease"),
        (l.easeIn = "easeIn"),
        (l.easeOut = "easeOut"),
        (l.easeInOut = "easeInOut"),
        (l.easeInQuad = "easeInQuad"),
        (l.easeInCubic = "easeInCubic"),
        (l.easeInQuart = "easeInQuart"),
        (l.easeInQuint = "easeInQuint"),
        (l.easeInSine = "easeInSine"),
        (l.easeInExpo = "easeInExpo"),
        (l.easeInCirc = "easeInCirc"),
        (l.easeOutQuad = "easeOutQuad"),
        (l.easeOutCubic = "easeOutCubic"),
        (l.easeOutQuart = "easeOutQuart"),
        (l.easeOutQuint = "easeOutQuint"),
        (l.easeOutSine = "easeOutSine"),
        (l.easeOutExpo = "easeOutExpo"),
        (l.easeOutCirc = "easeOutCirc"),
        (l.easeInOutQuad = "easeInOutQuad"),
        (l.easeInOutCubic = "easeInOutCubic"),
        (l.easeInOutQuart = "easeInOutQuart"),
        (l.easeInOutQuint = "easeInOutQuint"),
        (l.easeInOutSine = "easeInOutSine"),
        (l.easeInOutExpo = "easeInOutExpo"),
        (l.easeInOutCirc = "easeInOutCirc"),
        (l.easeInBack = "easeInBack"),
        (l.easeOutBack = "easeOutBack"),
        (l.easeInOutBack = "easeInOutBack");
      var w = 0,
        E = (function () {
          function t(t) {
            var e = t.el.getBoundingClientRect();
            if (t.view.scrollContainer) {
              var i = t.view.scrollContainer.getBoundingClientRect();
              e = m({}, e, {
                top: e.top - i.top,
                right: e.right - i.left,
                bottom: e.bottom - i.top,
                left: e.left - i.left,
              });
            }
            (this.height = t.el.offsetHeight),
              (this.width = t.el.offsetWidth),
              (this.left = e.left),
              (this.right = e.right),
              (this.top = e.top),
              (this.bottom = e.bottom),
              t.rootMargin && this._setRectWithRootMargin(t.rootMargin);
          }
          return (
            (t.prototype._setRectWithRootMargin = function (t) {
              var e = t.top + t.bottom,
                i = t.left + t.right;
              (this.top -= t.top),
                (this.right += t.right),
                (this.bottom += t.bottom),
                (this.left -= t.left),
                (this.height += e),
                (this.width += i);
            }),
            t
          );
        })(),
        b = [c[""], h.px, h["%"], h.vh, h.vw, u.deg, u.turn, u.rad];
      function C(t, e) {
        void 0 === e && (e = h["%"]);
        var i = { value: 0, unit: e };
        if (void 0 === t) return i;
        if (!("number" == typeof t || "string" == typeof t))
          throw Error(
            "Invalid value provided. Must provide a value as a string or number"
          );
        if (
          ((t = String(t)),
          (i.value = parseFloat(t)),
          (i.unit = t.match(/[\d.\-+]*\s*(.*)/)[1] || e),
          !b.includes(i.unit))
        )
          throw Error("Invalid unit provided.");
        return i;
      }
      var _ = {
        ease: [0.25, 0.1, 0.25, 1],
        easeIn: [0.42, 0, 1, 1],
        easeOut: [0, 0, 0.58, 1],
        easeInOut: [0.42, 0, 0.58, 1],
        easeInQuad: [0.55, 0.085, 0.68, 0.53],
        easeInCubic: [0.55, 0.055, 0.675, 0.19],
        easeInQuart: [0.895, 0.03, 0.685, 0.22],
        easeInQuint: [0.755, 0.05, 0.855, 0.06],
        easeInSine: [0.47, 0, 0.745, 0.715],
        easeInExpo: [0.95, 0.05, 0.795, 0.035],
        easeInCirc: [0.6, 0.04, 0.98, 0.335],
        easeOutQuad: [0.25, 0.46, 0.45, 0.94],
        easeOutCubic: [0.215, 0.61, 0.355, 1],
        easeOutQuart: [0.165, 0.84, 0.44, 1],
        easeOutQuint: [0.23, 1, 0.32, 1],
        easeOutSine: [0.39, 0.575, 0.565, 1],
        easeOutExpo: [0.19, 1, 0.22, 1],
        easeOutCirc: [0.075, 0.82, 0.165, 1],
        easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
        easeInOutCubic: [0.645, 0.045, 0.355, 1],
        easeInOutQuart: [0.77, 0, 0.175, 1],
        easeInOutQuint: [0.86, 0, 0.07, 1],
        easeInOutSine: [0.445, 0.05, 0.55, 0.95],
        easeInOutExpo: [1, 0, 0, 1],
        easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
        easeInBack: [0.6, -0.28, 0.735, 0.045],
        easeOutBack: [0.175, 0.885, 0.32, 1.275],
        easeInOutBack: [0.68, -0.55, 0.265, 1.55],
      };
      function y(t) {
        if (Array.isArray(t)) return v()(t[0], t[1], t[2], t[3]);
        if ("string" == typeof t && void 0 !== _[t]) {
          var e = _[t];
          return v()(e[0], e[1], e[2], e[3]);
        }
      }
      var x = Object.values(o),
        O = {
          speed: "px",
          translateX: "%",
          translateY: "%",
          rotate: "deg",
          rotateX: "deg",
          rotateY: "deg",
          rotateZ: "deg",
          scale: "",
          scaleX: "",
          scaleY: "",
          scaleZ: "",
          opacity: "",
        };
      function I(t, e) {
        var i = {};
        return (
          x.forEach(function (s) {
            var n = O[s];
            if ("number" == typeof (null == t ? void 0 : t[s])) {
              var r = null == t ? void 0 : t[s],
                a = C(10 * (r || 0) + "px"),
                l = C(-10 * (r || 0) + "px"),
                o = { start: a.value, end: l.value, unit: a.unit };
              e === d.vertical && (i.translateY = o),
                e === d.horizontal && (i.translateX = o);
            }
            if (Array.isArray(null == t ? void 0 : t[s])) {
              var h = null == t ? void 0 : t[s];
              if (void 0 !== h[0] && void 0 !== h[1]) {
                var u = C(null == h ? void 0 : h[0], n),
                  c = C(null == h ? void 0 : h[1], n),
                  p = y(null == h ? void 0 : h[2]);
                if (
                  ((i[s] = {
                    start: u.value,
                    end: c.value,
                    unit: u.unit,
                    easing: p,
                  }),
                  u.unit !== c.unit)
                )
                  throw Error(
                    "Must provide matching units for the min and max offset values of each axis."
                  );
              }
            }
          }),
          i
        );
      }
      function S(t, e, i, s) {
        var n = (i - t) / e;
        return s && (n = s(n)), n;
      }
      function P(t, e) {
        var i, s;
        return {
          value:
            ((i = "function" == typeof t.easing ? t.easing(e) : e),
            (s = (null == t ? void 0 : t.start) || 0),
            ((((null == t ? void 0 : t.end) || 0) - s) * (i - 0)) / 1 + s),
          unit: null == t ? void 0 : t.unit,
        };
      }
      var Y = Object.values(o).filter(function (t) {
        return "opacity" !== t;
      });
      function X(t) {
        var e = t.el;
        e && ((e.style.transform = ""), (e.style.opacity = ""));
      }
      function A(t, e, i) {
        return Math.max(
          i / (i + (Math.abs(t) + Math.abs(e)) * (e > t ? -1 : 1)),
          1
        );
      }
      function M(t, e) {
        var i = t.start,
          s = t.end,
          n = t.unit;
        if ("%" === n) {
          var r = e / 100;
          (i *= r), (s *= r);
        }
        if ("vw" === n) {
          var a = i / 100,
            l = s / 100;
          (i = window.innerWidth * a), (s = window.innerWidth * l);
        }
        if ("vh" === n) {
          var o = i / 100,
            h = s / 100;
          (i = window.innerHeight * o), (s = window.innerHeight * h);
        }
        return { start: i, end: s };
      }
      var H = { start: 0, end: 0, unit: "" },
        k = function (t, e, i) {
          return Math.min(Math.max(t, e), i);
        },
        z = (function () {
          function t(t) {
            var e, i;
            (this.el = t.el),
              (this.props = t.props),
              (this.scrollAxis = t.scrollAxis),
              (this.disabledParallaxController =
                t.disabledParallaxController || !1),
              (this.id = ++w),
              (this.effects = I(this.props, this.scrollAxis)),
              (this.isInView = null),
              (this.progress = 0),
              this._setElementEasing(t.props.easing),
              (e = t.el),
              (i = Object.keys(this.effects).includes("opacity")),
              (e.style.willChange = "transform" + (i ? ",opacity" : ""));
          }
          var e = t.prototype;
          return (
            (e.updateProps = function (t) {
              return (
                (this.props = m({}, this.props, t)),
                (this.effects = I(t, this.scrollAxis)),
                this._setElementEasing(t.easing),
                this
              );
            }),
            (e.setCachedAttributes = function (t, e) {
              X(this),
                (this.rect = new E({
                  el: this.props.targetElement || this.el,
                  rootMargin: this.props.rootMargin,
                  view: t,
                }));
              var i,
                s,
                n,
                r,
                a,
                l,
                o,
                h,
                u,
                c,
                p,
                f,
                v =
                  ((i = this.props),
                  (s = this.effects),
                  (n = this.scrollAxis),
                  !i.rootMargin &&
                    !i.targetElement &&
                    !i.shouldDisableScalingTranslations &&
                    ((!!s.translateX && n === d.horizontal) ||
                      (!!s.translateY && n === d.vertical)));
              return "number" == typeof this.props.startScroll &&
                "number" == typeof this.props.endScroll
                ? ((this.limits = new g({
                    startX: this.props.startScroll,
                    startY: this.props.startScroll,
                    endX: this.props.endScroll,
                    endY: this.props.endScroll,
                  })),
                  this._setElementStyles(),
                  this)
                : (v
                    ? ((this.limits = (function (t, e, i, s, n, r) {
                        var a = i.translateX || H,
                          l = i.translateY || H,
                          o = M(a, t.width),
                          h = o.start,
                          u = o.end,
                          c = M(l, t.height),
                          p = c.start,
                          f = c.end,
                          v = t.top - e.height,
                          m = t.left - e.width,
                          w = t.bottom,
                          E = t.right,
                          b = 1,
                          C = 1;
                        n === d.vertical &&
                          (C = b = A(p, f, e.height + t.height));
                        var _ = 1,
                          y = 1;
                        if (
                          (n === d.horizontal &&
                            (y = _ = A(h, u, e.width + t.width)),
                          p < 0 && (v += p * b),
                          f > 0 && (w += f * C),
                          h < 0 && (m += h * _),
                          u > 0 && (E += u * y),
                          (m += s.x),
                          (E += s.x),
                          (v += s.y),
                          (w += s.y),
                          r)
                        ) {
                          var x = s.y + t.top < e.height,
                            O = s.x + t.left < e.width,
                            I = s.y + t.bottom > e.scrollHeight - e.height,
                            S = s.x + t.right > e.scrollWidth - e.height;
                          x &&
                            I &&
                            ((b = 1),
                            (C = 1),
                            (v = 0),
                            (w = e.scrollHeight - e.height)),
                            O &&
                              S &&
                              ((_ = 1),
                              (y = 1),
                              (m = 0),
                              (E = e.scrollWidth - e.width)),
                            !x &&
                              I &&
                              ((v = t.top - e.height + s.y),
                              (b = A(
                                p,
                                f,
                                (w = e.scrollHeight - e.height) - v
                              )),
                              (C = 1),
                              p < 0 && (v += p * b)),
                            !O &&
                              S &&
                              ((m = t.left - e.width + s.x),
                              (_ = A(h, u, (E = e.scrollWidth - e.width) - m)),
                              (y = 1),
                              h < 0 && (m += h * _)),
                            x &&
                              !I &&
                              ((v = 0),
                              (b = 1),
                              (C = A(p, f, (w = t.bottom + s.y) - v)),
                              f > 0 && (w += f * C)),
                            O &&
                              !S &&
                              ((m = 0),
                              (_ = 1),
                              (y = A(h, u, (E = t.right + s.x) - m)),
                              u > 0 && (E += u * y));
                        }
                        return new g({
                          startX: m,
                          startY: v,
                          endX: E,
                          endY: w,
                          startMultiplierX: _,
                          endMultiplierX: y,
                          startMultiplierY: b,
                          endMultiplierY: C,
                        });
                      })(
                        this.rect,
                        t,
                        this.effects,
                        e,
                        this.scrollAxis,
                        this.props.shouldAlwaysCompleteAnimation
                      )),
                      (this.scaledEffects =
                        ((r = this.effects),
                        (a = this.limits),
                        (l = m({}, r)).translateX &&
                          (l.translateX = m({}, r.translateX, {
                            start: l.translateX.start * a.startMultiplierX,
                            end: l.translateX.end * a.endMultiplierX,
                          })),
                        l.translateY &&
                          (l.translateY = m({}, r.translateY, {
                            start: l.translateY.start * a.startMultiplierY,
                            end: l.translateY.end * a.endMultiplierY,
                          })),
                        l)))
                    : (this.limits =
                        ((o = this.rect),
                        (h = this.props.shouldAlwaysCompleteAnimation),
                        (u = o.top - t.height),
                        (c = o.left - t.width),
                        (p = o.bottom),
                        (f = o.right),
                        (c += e.x),
                        (f += e.x),
                        (u += e.y),
                        (p += e.y),
                        h &&
                          (e.y + o.top < t.height && (u = 0),
                          e.x + o.left < t.width && (c = 0),
                          p > t.scrollHeight - t.height &&
                            (p = t.scrollHeight - t.height),
                          f > t.scrollWidth - t.width &&
                            (f = t.scrollWidth - t.width)),
                        new g({ startX: c, startY: u, endX: f, endY: p }))),
                  this._setElementStyles(),
                  this);
            }),
            (e._updateElementIsInView = function (t) {
              var e = null === this.isInView;
              t !== this.isInView &&
                (t
                  ? this.props.onEnter && this.props.onEnter(this)
                  : !e &&
                    (this._setFinalProgress(),
                    this._setElementStyles(),
                    this.props.onExit && this.props.onExit(this))),
                (this.isInView = t);
            }),
            (e._setFinalProgress = function () {
              var t = k(Math.round(this.progress), 0, 1);
              this._updateElementProgress(t);
            }),
            (e._setElementStyles = function () {
              this.props.disabled ||
                this.disabledParallaxController ||
                (function (t, e, i) {
                  if (i) {
                    var s,
                      n = Y.reduce(function (i, s) {
                        var n = t[s] && P(t[s], e);
                        return void 0 === n ||
                          void 0 === n.value ||
                          void 0 === n.unit
                          ? i
                          : i + (s + "(" + n.value) + n.unit + ")";
                      }, ""),
                      r =
                        void 0 === (s = t.opacity && P(t.opacity, e)) ||
                        void 0 === s.value ||
                        void 0 === s.unit
                          ? ""
                          : "" + s.value;
                    (i.style.transform = n), (i.style.opacity = r);
                  }
                })(this.scaledEffects || this.effects, this.progress, this.el);
            }),
            (e._updateElementProgress = function (t) {
              (this.progress = t),
                this.props.onProgressChange &&
                  this.props.onProgressChange(this.progress),
                this.props.onChange && this.props.onChange(this);
            }),
            (e._setElementEasing = function (t) {
              this.easing = y(t);
            }),
            (e.updateElementOptions = function (t) {
              (this.scrollAxis = t.scrollAxis),
                (this.disabledParallaxController =
                  t.disabledParallaxController || !1);
            }),
            (e.updatePosition = function (t) {
              if (!this.limits) return this;
              var e = this.scrollAxis === d.vertical,
                i = null === this.isInView,
                s = e ? this.limits.startY : this.limits.startX,
                n = e ? this.limits.endY : this.limits.endX,
                r = e ? this.limits.totalY : this.limits.totalX,
                a = e ? t.y : t.x,
                l = a >= s && a <= n;
              if ((this._updateElementIsInView(l), l)) {
                var o = S(s, r, a, this.easing);
                this._updateElementProgress(o), this._setElementStyles();
              } else
                i &&
                  ((this.progress = k(
                    Math.round(S(s, r, a, this.easing)),
                    0,
                    1
                  )),
                  this._setElementStyles());
              return this;
            }),
            t
          );
        })(),
        Q = (function () {
          function t(t) {
            (this.scrollContainer = t.scrollContainer),
              (this.width = t.width),
              (this.height = t.height),
              (this.scrollHeight = t.scrollHeight),
              (this.scrollWidth = t.scrollWidth);
          }
          var e = t.prototype;
          return (
            (e.hasChanged = function (t) {
              return (
                t.width !== this.width ||
                t.height !== this.height ||
                t.scrollWidth !== this.scrollWidth ||
                t.scrollHeight !== this.scrollHeight
              );
            }),
            (e.setSize = function (t) {
              return (
                (this.width = t.width),
                (this.height = t.height),
                (this.scrollHeight = t.scrollHeight),
                (this.scrollWidth = t.scrollWidth),
                this
              );
            }),
            t
          );
        })(),
        L = (function () {
          function t(t, e) {
            (this.x = t), (this.y = e), (this.dx = 0), (this.dy = 0);
          }
          return (
            (t.prototype.setScroll = function (t, e) {
              return (
                (this.dx = t - this.x),
                (this.dy = e - this.y),
                (this.x = t),
                (this.y = e),
                this
              );
            }),
            t
          );
        })(),
        W = (function () {
          function t(t) {
            var e = t.scrollAxis,
              i = void 0 === e ? d.vertical : e,
              s = t.scrollContainer,
              n = t.disabled;
            (this.disabled = void 0 !== n && n),
              (this.scrollAxis = i),
              (this.elements = []),
              (this._hasScrollContainer = !!s),
              (this.viewEl = null != s ? s : window);
            var r = this._getScrollPosition(),
              a = r[0],
              l = r[1];
            (this.scroll = new L(a, l)),
              (this.view = new Q({
                width: 0,
                height: 0,
                scrollWidth: 0,
                scrollHeight: 0,
                scrollContainer: this._hasScrollContainer ? s : void 0,
              })),
              (this._ticking = !1),
              (this._supportsPassive = (function () {
                var t = !1;
                try {
                  var e = Object.defineProperty({}, "passive", {
                    get: function () {
                      return (t = !0), !0;
                    },
                  });
                  window.addEventListener("test", null, e),
                    window.removeEventListener("test", null, e);
                } catch (t) {}
                return t;
              })()),
              this._bindAllMethods(),
              this.disabled ||
                (this._addListeners(this.viewEl),
                this._addResizeObserver(),
                this._setViewSize());
          }
          t.init = function (e) {
            if (!("undefined" != typeof window))
              throw Error(
                "Looks like ParallaxController.init() was called on the server. This method must be called on the client."
              );
            return new t(e);
          };
          var e = t.prototype;
          return (
            (e._bindAllMethods = function () {
              var t = this;
              [
                "_addListeners",
                "_removeListeners",
                "_getScrollPosition",
                "_handleScroll",
                "_handleUpdateCache",
                "_updateAllElements",
                "_updateElementPosition",
                "_setViewSize",
                "_addResizeObserver",
                "_checkIfViewHasChanged",
                "_getViewParams",
                "getElements",
                "createElement",
                "removeElementById",
                "resetElementStyles",
                "updateElementPropsById",
                "update",
                "updateScrollContainer",
                "destroy",
              ].forEach(function (e) {
                t[e] = t[e].bind(t);
              });
            }),
            (e._addListeners = function (t) {
              t.addEventListener(
                "scroll",
                this._handleScroll,
                !!this._supportsPassive && { passive: !0 }
              ),
                window.addEventListener("resize", this._handleUpdateCache, !1),
                window.addEventListener("blur", this._handleUpdateCache, !1),
                window.addEventListener("focus", this._handleUpdateCache, !1),
                window.addEventListener("load", this._handleUpdateCache, !1);
            }),
            (e._removeListeners = function (t) {
              var e;
              t.removeEventListener("scroll", this._handleScroll, !1),
                window.removeEventListener(
                  "resize",
                  this._handleUpdateCache,
                  !1
                ),
                window.removeEventListener("blur", this._handleUpdateCache, !1),
                window.removeEventListener(
                  "focus",
                  this._handleUpdateCache,
                  !1
                ),
                window.removeEventListener("load", this._handleUpdateCache, !1),
                null == (e = this._resizeObserver) || e.disconnect();
            }),
            (e._addResizeObserver = function () {
              var t = this;
              try {
                var e = this._hasScrollContainer
                  ? this.viewEl
                  : document.documentElement;
                (this._resizeObserver = new ResizeObserver(function () {
                  return t.update();
                })),
                  this._resizeObserver.observe(e);
              } catch (t) {
                console.warn(
                  "Failed to create the resize observer in the ParallaxContoller"
                );
              }
            }),
            (e._getScrollPosition = function () {
              return [
                this._hasScrollContainer
                  ? this.viewEl.scrollLeft
                  : window.pageXOffset,
                this._hasScrollContainer
                  ? this.viewEl.scrollTop
                  : window.pageYOffset,
              ];
            }),
            (e._handleScroll = function () {
              var t = this._getScrollPosition(),
                e = t[0],
                i = t[1];
              this.scroll.setScroll(e, i),
                !this._ticking &&
                  this.elements.length > 0 &&
                  ((this._ticking = !0),
                  window.requestAnimationFrame(this._updateAllElements));
            }),
            (e._handleUpdateCache = function () {
              this._setViewSize(), this._updateAllElements({ updateCache: !0 });
            }),
            (e._updateAllElements = function (t) {
              var e = this,
                i = (void 0 === t ? {} : t).updateCache;
              this.elements &&
                this.elements.forEach(function (t) {
                  i && t.setCachedAttributes(e.view, e.scroll),
                    e._updateElementPosition(t);
                }),
                (this._ticking = !1);
            }),
            (e._updateElementPosition = function (t) {
              t.props.disabled ||
                this.disabled ||
                t.updatePosition(this.scroll);
            }),
            (e._getViewParams = function () {
              if (this._hasScrollContainer) {
                var t = this.viewEl.offsetWidth,
                  e = this.viewEl.offsetHeight,
                  i = this.viewEl.scrollHeight,
                  s = this.viewEl.scrollWidth;
                return this.view.setSize({
                  width: t,
                  height: e,
                  scrollHeight: i,
                  scrollWidth: s,
                });
              }
              var n = document.documentElement;
              return {
                width: window.innerWidth || n.clientWidth,
                height: window.innerHeight || n.clientHeight,
                scrollHeight: n.scrollHeight,
                scrollWidth: n.scrollWidth,
              };
            }),
            (e._setViewSize = function () {
              return this.view.setSize(this._getViewParams());
            }),
            (e._checkIfViewHasChanged = function () {
              return this.view.hasChanged(this._getViewParams());
            }),
            (e.getElements = function () {
              return this.elements;
            }),
            (e.createElement = function (t) {
              var e = new z(
                m({}, t, {
                  scrollAxis: this.scrollAxis,
                  disabledParallaxController: this.disabled,
                })
              );
              return (
                e.setCachedAttributes(this.view, this.scroll),
                (this.elements = this.elements
                  ? [].concat(this.elements, [e])
                  : [e]),
                this._updateElementPosition(e),
                this._checkIfViewHasChanged() && this.update(),
                e
              );
            }),
            (e.removeElementById = function (t) {
              this.elements &&
                (this.elements = this.elements.filter(function (e) {
                  return e.id !== t;
                }));
            }),
            (e.updateElementPropsById = function (t, e) {
              this.elements &&
                (this.elements = this.elements.map(function (i) {
                  return i.id === t ? i.updateProps(e) : i;
                })),
                this.update();
            }),
            (e.resetElementStyles = function (t) {
              X(t);
            }),
            (e.update = function () {
              var t = this._getScrollPosition(),
                e = t[0],
                i = t[1];
              this.scroll.setScroll(e, i),
                this._setViewSize(),
                this._updateAllElements({ updateCache: !0 });
            }),
            (e.updateScrollContainer = function (t) {
              this._removeListeners(this.viewEl),
                (this.viewEl = t),
                (this._hasScrollContainer = !!t),
                (this.view = new Q({
                  width: 0,
                  height: 0,
                  scrollWidth: 0,
                  scrollHeight: 0,
                  scrollContainer: t,
                })),
                this._setViewSize(),
                this._addListeners(this.viewEl),
                this._updateAllElements({ updateCache: !0 });
            }),
            (e.disableParallaxController = function () {
              (this.disabled = !0),
                this._removeListeners(this.viewEl),
                this.elements &&
                  this.elements.forEach(function (t) {
                    return X(t);
                  });
            }),
            (e.enableParallaxController = function () {
              var t = this;
              (this.disabled = !1),
                this.elements &&
                  this.elements.forEach(function (e) {
                    return e.updateElementOptions({
                      disabledParallaxController: !1,
                      scrollAxis: t.scrollAxis,
                    });
                  }),
                this._addListeners(this.viewEl),
                this._addResizeObserver(),
                this._setViewSize();
            }),
            (e.disableAllElements = function () {
              console.warn(
                "deprecated: use disableParallaxController() instead"
              ),
                this.elements &&
                  (this.elements = this.elements.map(function (t) {
                    return t.updateProps({ disabled: !0 });
                  })),
                this.update();
            }),
            (e.enableAllElements = function () {
              console.warn(
                "deprecated: use enableParallaxController() instead"
              ),
                this.elements &&
                  (this.elements = this.elements.map(function (t) {
                    return t.updateProps({ disabled: !1 });
                  })),
                this.update();
            }),
            (e.destroy = function () {
              this._removeListeners(this.viewEl),
                this.elements &&
                  this.elements.forEach(function (t) {
                    return X(t);
                  }),
                (this.elements = void 0);
            }),
            t
          );
        })(),
        V = i(7294);
      function B(t, e) {
        return (B =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var Z = [
          "disabled",
          "easing",
          "endScroll",
          "onChange",
          "onEnter",
          "onExit",
          "onProgressChange",
          "opacity",
          "rootMargin",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "scale",
          "scaleX",
          "scaleY",
          "scaleZ",
          "shouldAlwaysCompleteAnimation",
          "shouldDisableScalingTranslations",
          "speed",
          "startScroll",
          "targetElement",
          "translateX",
          "translateY",
        ],
        R = V.createContext(null);
      function U(t) {
        var e,
          i,
          s,
          n,
          r,
          a,
          l,
          o,
          h,
          u,
          c,
          d,
          p,
          f,
          v,
          g,
          m,
          w,
          E,
          b,
          C,
          _,
          y,
          x,
          O,
          I,
          S = (function () {
            var t = (0, V.useContext)(R);
            if ("undefined" == typeof window) return null;
            if (!t)
              throw Error(
                "Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>"
              );
            return t;
          })(),
          P = (0, V.useRef)(null),
          Y = ((e = t.disabled),
          (i = t.easing),
          (s = t.endScroll),
          (n = t.onChange),
          (r = t.onEnter),
          (a = t.onExit),
          (l = t.onProgressChange),
          (o = t.opacity),
          (h = t.rootMargin),
          (u = t.rotate),
          (c = t.rotateX),
          (d = t.rotateY),
          (p = t.rotateZ),
          (f = t.scale),
          (v = t.scaleX),
          (g = t.scaleY),
          (m = t.scaleZ),
          (w = t.shouldAlwaysCompleteAnimation),
          (E = t.shouldDisableScalingTranslations),
          (b = t.speed),
          (C = t.startScroll),
          (_ = t.targetElement),
          (y = t.translateX),
          (x = t.translateY),
          (O = (function (t, e) {
            if (null == t) return {};
            var i,
              s,
              n = {},
              r = Object.keys(t);
            for (s = 0; s < r.length; s++)
              (i = r[s]), e.indexOf(i) >= 0 || (n[i] = t[i]);
            return n;
          })(t, Z)),
          {
            parallaxProps:
              (Object.keys(
                (I = {
                  disabled: e,
                  easing: i,
                  endScroll: s,
                  onChange: n,
                  onEnter: r,
                  onExit: a,
                  onProgressChange: l,
                  opacity: o,
                  rootMargin: h,
                  rotate: u,
                  rotateX: c,
                  rotateY: d,
                  rotateZ: p,
                  scale: f,
                  scaleX: v,
                  scaleY: g,
                  scaleZ: m,
                  shouldAlwaysCompleteAnimation: w,
                  shouldDisableScalingTranslations: E,
                  speed: b,
                  startScroll: C,
                  targetElement: _,
                  translateX: y,
                  translateY: x,
                })
              ).forEach(function (t) {
                return void 0 === I[t] && delete I[t];
              }),
              I),
            rest: O,
          }).parallaxProps;
        (0, V.useEffect)(
          function () {
            if ("undefined" != typeof window && !S && !(S instanceof W))
              throw Error(
                "Must wrap your application's <Parallax /> components in a <ParallaxProvider />."
              );
          },
          [S]
        );
        var X = (0, V.useState)(),
          A = X[0],
          M = X[1];
        return (
          (0, V.useEffect)(function () {
            var t;
            if (P.current instanceof HTMLElement) {
              var e = { el: P.current, props: Y };
              M((t = null == S ? void 0 : S.createElement(e)));
            } else throw Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");
            return function () {
              t && (null == S || S.removeElementById(t.id));
            };
          }, []),
          (0, V.useEffect)(
            function () {
              A &&
                (t.disabled && (null == S || S.resetElementStyles(A)),
                null == S || S.updateElementPropsById(A.id, Y));
            },
            [
              t.disabled,
              t.easing,
              t.endScroll,
              t.onChange,
              t.onEnter,
              t.onExit,
              t.onProgressChange,
              t.opacity,
              t.rootMargin,
              t.rotate,
              t.rotateX,
              t.rotateY,
              t.rotateZ,
              t.scale,
              t.scaleX,
              t.scaleY,
              t.scaleZ,
              t.shouldAlwaysCompleteAnimation,
              t.shouldDisableScalingTranslations,
              t.speed,
              t.startScroll,
              t.targetElement,
              t.translateX,
              t.translateY,
            ]
          ),
          { ref: P, controller: S, element: A }
        );
      }
      var D = (function (t) {
        function e(e) {
          var i, s;
          return (
            ((i = t.call(this, e) || this).controller =
              ((s = {
                scrollAxis: e.scrollAxis,
                scrollContainer: e.scrollContainer,
                disabled: e.isDisabled,
              }),
              "undefined" != typeof window ? W.init(s) : null)),
            i
          );
        }
        ((i = e).prototype = Object.create(t.prototype)),
          (i.prototype.constructor = i),
          B(i, t);
        var i,
          s = e.prototype;
        return (
          (s.componentDidUpdate = function (t) {
            var e, i, s;
            t.scrollContainer !== this.props.scrollContainer &&
              this.props.scrollContainer &&
              (null == (e = this.controller) ||
                e.updateScrollContainer(this.props.scrollContainer)),
              t.isDisabled === this.props.isDisabled ||
                (this.props.isDisabled &&
                  (null == (i = this.controller) ||
                    i.disableParallaxController()),
                this.props.isDisabled ||
                  null == (s = this.controller) ||
                  s.enableParallaxController());
          }),
          (s.componentWillUnmount = function () {
            this.controller = this.controller.destroy();
          }),
          (s.render = function () {
            var t = this.props.children;
            return V.createElement(R.Provider, { value: this.controller }, t);
          }),
          e
        );
      })(V.Component);
      D.defaultProps = { scrollAxis: d.vertical };
    },
  },
]);
