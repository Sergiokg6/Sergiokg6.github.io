"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [719],
  {
    719: function (e, t, i) {
      i.d(t, {
        tq: function () {
          return w;
        },
        o5: function () {
          return y;
        },
      });
      var s = i(7294),
        a = i(8116);
      function r(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function l(e, t) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : r(t[i]) && r(e[i]) && Object.keys(t[i]).length > 0
              ? t[i].__swiper__
                ? (e[i] = t[i])
                : l(e[i], t[i])
              : (e[i] = t[i]);
          });
      }
      function n(e = {}) {
        return (
          e.navigation &&
          void 0 === e.navigation.nextEl &&
          void 0 === e.navigation.prevEl
        );
      }
      function o(e = {}) {
        return e.pagination && void 0 === e.pagination.el;
      }
      function d(e = {}) {
        return e.scrollbar && void 0 === e.scrollbar.el;
      }
      function p(e = "") {
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = [];
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e);
          }),
          i.join(" ")
        );
      }
      let c = [
          "modules",
          "init",
          "_direction",
          "touchEventsTarget",
          "initialSlide",
          "_speed",
          "cssMode",
          "updateOnWindowResize",
          "resizeObserver",
          "nested",
          "focusableElements",
          "_enabled",
          "_width",
          "_height",
          "preventInteractionOnTransition",
          "userAgent",
          "url",
          "_edgeSwipeDetection",
          "_edgeSwipeThreshold",
          "_freeMode",
          "_autoHeight",
          "setWrapperSize",
          "virtualTranslate",
          "_effect",
          "breakpoints",
          "_spaceBetween",
          "_slidesPerView",
          "maxBackfaceHiddenSlides",
          "_grid",
          "_slidesPerGroup",
          "_slidesPerGroupSkip",
          "_slidesPerGroupAuto",
          "_centeredSlides",
          "_centeredSlidesBounds",
          "_slidesOffsetBefore",
          "_slidesOffsetAfter",
          "normalizeSlideIndex",
          "_centerInsufficientSlides",
          "_watchOverflow",
          "roundLengths",
          "touchRatio",
          "touchAngle",
          "simulateTouch",
          "_shortSwipes",
          "_longSwipes",
          "longSwipesRatio",
          "longSwipesMs",
          "_followFinger",
          "allowTouchMove",
          "_threshold",
          "touchMoveStopPropagation",
          "touchStartPreventDefault",
          "touchStartForcePreventDefault",
          "touchReleaseOnEdges",
          "uniqueNavElements",
          "_resistance",
          "_resistanceRatio",
          "_watchSlidesProgress",
          "_grabCursor",
          "preventClicks",
          "preventClicksPropagation",
          "_slideToClickedSlide",
          "_preloadImages",
          "updateOnImagesReady",
          "_loop",
          "_loopAdditionalSlides",
          "_loopedSlides",
          "_loopedSlidesLimit",
          "_loopFillGroupWithBlank",
          "loopPreventsSlide",
          "_rewind",
          "_allowSlidePrev",
          "_allowSlideNext",
          "_swipeHandler",
          "_noSwiping",
          "noSwipingClass",
          "noSwipingSelector",
          "passiveListeners",
          "containerModifierClass",
          "slideClass",
          "slideBlankClass",
          "slideActiveClass",
          "slideDuplicateActiveClass",
          "slideVisibleClass",
          "slideDuplicateClass",
          "slideNextClass",
          "slideDuplicateNextClass",
          "slidePrevClass",
          "slideDuplicatePrevClass",
          "wrapperClass",
          "runCallbacksOnInit",
          "observer",
          "observeParents",
          "observeSlideChildren",
          "a11y",
          "_autoplay",
          "_controller",
          "coverflowEffect",
          "cubeEffect",
          "fadeEffect",
          "flipEffect",
          "creativeEffect",
          "cardsEffect",
          "hashNavigation",
          "history",
          "keyboard",
          "lazy",
          "mousewheel",
          "_navigation",
          "_pagination",
          "parallax",
          "_scrollbar",
          "_thumbs",
          "virtual",
          "zoom",
        ],
        u = (e, t) => {
          let i = t.slidesPerView;
          if (t.breakpoints) {
            let e = a.ZP.prototype.getBreakpoint(t.breakpoints),
              s = e in t.breakpoints ? t.breakpoints[e] : void 0;
            s && s.slidesPerView && (i = s.slidesPerView);
          }
          let s = Math.ceil(parseFloat(t.loopedSlides || i, 10));
          return (
            (s += t.loopAdditionalSlides) > e.length &&
              t.loopedSlidesLimit &&
              (s = e.length),
            s
          );
        };
      function h(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      let f = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.lazy && e.params.lazy.enabled && e.lazy.load(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function m(e, t) {
        return "undefined" == typeof window
          ? (0, s.useEffect)(e, t)
          : (0, s.useLayoutEffect)(e, t);
      }
      let g = (0, s.createContext)(null),
        v = (0, s.createContext)(null);
      function b() {
        return (b = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var s in i)
                  Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      let w = (0, s.forwardRef)(function (e, t) {
        let {
            className: i,
            tag: g = "div",
            wrapperTag: w = "div",
            children: C,
            onSwiper: y,
            ...S
          } = void 0 === e ? {} : e,
          x = !1,
          [T, E] = (0, s.useState)("swiper"),
          [P, k] = (0, s.useState)(null),
          [M, $] = (0, s.useState)(!1),
          O = (0, s.useRef)(!1),
          L = (0, s.useRef)(null),
          _ = (0, s.useRef)(null),
          A = (0, s.useRef)(null),
          I = (0, s.useRef)(null),
          z = (0, s.useRef)(null),
          D = (0, s.useRef)(null),
          N = (0, s.useRef)(null),
          B = (0, s.useRef)(null),
          {
            params: G,
            passedParams: j,
            rest: F,
            events: H,
          } = (function (e = {}, t = !0) {
            let i = { on: {} },
              s = {},
              n = {};
            l(i, a.ZP.defaults),
              l(i, a.ZP.extendedDefaults),
              (i._emitClasses = !0),
              (i.init = !1);
            let o = {},
              d = c.map((e) => e.replace(/_/, "")),
              p = Object.assign({}, e);
            return (
              Object.keys(p).forEach((a) => {
                void 0 !== e[a] &&
                  (d.indexOf(a) >= 0
                    ? r(e[a])
                      ? ((i[a] = {}), (n[a] = {}), l(i[a], e[a]), l(n[a], e[a]))
                      : ((i[a] = e[a]), (n[a] = e[a]))
                    : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a]
                    ? t
                      ? (s[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                      : (i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                    : (o[a] = e[a]));
              }),
              ["navigation", "pagination", "scrollbar"].forEach((e) => {
                !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
              }),
              { params: i, passedParams: n, rest: o, events: s }
            );
          })(S),
          { slides: V, slots: q } = (function (e) {
            let t = [],
              i = {
                "container-start": [],
                "container-end": [],
                "wrapper-start": [],
                "wrapper-end": [],
              };
            return (
              s.Children.toArray(e).forEach((e) => {
                if (h(e)) t.push(e);
                else if (e.props && e.props.slot && i[e.props.slot])
                  i[e.props.slot].push(e);
                else if (e.props && e.props.children) {
                  let a = (function e(t) {
                    let i = [];
                    return (
                      s.Children.toArray(t).forEach((t) => {
                        h(t)
                          ? i.push(t)
                          : t.props &&
                            t.props.children &&
                            e(t.props.children).forEach((e) => i.push(e));
                      }),
                      i
                    );
                  })(e.props.children);
                  a.length > 0
                    ? a.forEach((e) => t.push(e))
                    : i["container-end"].push(e);
                } else i["container-end"].push(e);
              }),
              { slides: t, slots: i }
            );
          })(C),
          R = () => {
            $(!M);
          };
        Object.assign(G.on, {
          _containerClasses(e, t) {
            E(t);
          },
        });
        let W = () => {
          if (
            (Object.assign(G.on, H),
            (x = !0),
            (_.current = new a.ZP(G)),
            (_.current.loopCreate = () => {}),
            (_.current.loopDestroy = () => {}),
            G.loop && (_.current.loopedSlides = u(V, G)),
            _.current.virtual && _.current.params.virtual.enabled)
          ) {
            _.current.virtual.slides = V;
            let e = {
              cache: !1,
              slides: V,
              renderExternal: k,
              renderExternalUpdate: !1,
            };
            l(_.current.params.virtual, e),
              l(_.current.originalParams.virtual, e);
          }
        };
        L.current || W(), _.current && _.current.on("_beforeBreakpoint", R);
        let X = () => {
            !x &&
              H &&
              _.current &&
              Object.keys(H).forEach((e) => {
                _.current.on(e, H[e]);
              });
          },
          Y = () => {
            H &&
              _.current &&
              Object.keys(H).forEach((e) => {
                _.current.off(e, H[e]);
              });
          };
        return (
          (0, s.useEffect)(() => () => {
            _.current && _.current.off("_beforeBreakpoint", R);
          }),
          (0, s.useEffect)(() => {
            !O.current &&
              _.current &&
              (_.current.emitSlidesClasses(), (O.current = !0));
          }),
          m(() => {
            if ((t && (t.current = L.current), L.current))
              return (
                _.current.destroyed && W(),
                (function (
                  {
                    el: e,
                    nextEl: t,
                    prevEl: i,
                    paginationEl: s,
                    scrollbarEl: a,
                    swiper: r,
                  },
                  l
                ) {
                  n(l) &&
                    t &&
                    i &&
                    ((r.params.navigation.nextEl = t),
                    (r.originalParams.navigation.nextEl = t),
                    (r.params.navigation.prevEl = i),
                    (r.originalParams.navigation.prevEl = i)),
                    o(l) &&
                      s &&
                      ((r.params.pagination.el = s),
                      (r.originalParams.pagination.el = s)),
                    d(l) &&
                      a &&
                      ((r.params.scrollbar.el = a),
                      (r.originalParams.scrollbar.el = a)),
                    r.init(e);
                })(
                  {
                    el: L.current,
                    nextEl: z.current,
                    prevEl: D.current,
                    paginationEl: N.current,
                    scrollbarEl: B.current,
                    swiper: _.current,
                  },
                  G
                ),
                y && y(_.current),
                () => {
                  _.current &&
                    !_.current.destroyed &&
                    _.current.destroy(!0, !1);
                }
              );
          }, []),
          m(() => {
            X();
            let e = (function (e, t, i, s, a) {
              let l = [];
              if (!t) return l;
              let n = (e) => {
                0 > l.indexOf(e) && l.push(e);
              };
              if (i && s) {
                let e = s.map(a),
                  t = i.map(a);
                e.join("") !== t.join("") && n("children"),
                  s.length !== i.length && n("children");
              }
              let o = c
                .filter((e) => "_" === e[0])
                .map((e) => e.replace(/_/, ""));
              return (
                o.forEach((i) => {
                  if (i in e && i in t) {
                    if (r(e[i]) && r(t[i])) {
                      let s = Object.keys(e[i]),
                        a = Object.keys(t[i]);
                      s.length !== a.length
                        ? n(i)
                        : (s.forEach((s) => {
                            e[i][s] !== t[i][s] && n(i);
                          }),
                          a.forEach((s) => {
                            e[i][s] !== t[i][s] && n(i);
                          }));
                    } else e[i] !== t[i] && n(i);
                  }
                }),
                l
              );
            })(j, A.current, V, I.current, (e) => e.key);
            return (
              (A.current = j),
              (I.current = V),
              e.length &&
                _.current &&
                !_.current.destroyed &&
                (function ({
                  swiper: e,
                  slides: t,
                  passedParams: i,
                  changedParams: s,
                  nextEl: a,
                  prevEl: n,
                  scrollbarEl: o,
                  paginationEl: d,
                }) {
                  let p, c, u, h, f;
                  let m = s.filter(
                      (e) => "children" !== e && "direction" !== e
                    ),
                    {
                      params: g,
                      pagination: v,
                      navigation: b,
                      scrollbar: w,
                      virtual: C,
                      thumbs: y,
                    } = e;
                  s.includes("thumbs") &&
                    i.thumbs &&
                    i.thumbs.swiper &&
                    g.thumbs &&
                    !g.thumbs.swiper &&
                    (p = !0),
                    s.includes("controller") &&
                      i.controller &&
                      i.controller.control &&
                      g.controller &&
                      !g.controller.control &&
                      (c = !0),
                    s.includes("pagination") &&
                      i.pagination &&
                      (i.pagination.el || d) &&
                      (g.pagination || !1 === g.pagination) &&
                      v &&
                      !v.el &&
                      (u = !0),
                    s.includes("scrollbar") &&
                      i.scrollbar &&
                      (i.scrollbar.el || o) &&
                      (g.scrollbar || !1 === g.scrollbar) &&
                      w &&
                      !w.el &&
                      (h = !0),
                    s.includes("navigation") &&
                      i.navigation &&
                      (i.navigation.prevEl || n) &&
                      (i.navigation.nextEl || a) &&
                      (g.navigation || !1 === g.navigation) &&
                      b &&
                      !b.prevEl &&
                      !b.nextEl &&
                      (f = !0);
                  let S = (t) => {
                    e[t] &&
                      (e[t].destroy(),
                      "navigation" === t
                        ? ((g[t].prevEl = void 0),
                          (g[t].nextEl = void 0),
                          (e[t].prevEl = void 0),
                          (e[t].nextEl = void 0))
                        : ((g[t].el = void 0), (e[t].el = void 0)));
                  };
                  if (
                    (m.forEach((e) => {
                      if (r(g[e]) && r(i[e])) l(g[e], i[e]);
                      else {
                        let t = i[e];
                        (!0 === t || !1 === t) &&
                        ("navigation" === e ||
                          "pagination" === e ||
                          "scrollbar" === e)
                          ? !1 === t && S(e)
                          : (g[e] = i[e]);
                      }
                    }),
                    m.includes("controller") &&
                      !c &&
                      e.controller &&
                      e.controller.control &&
                      g.controller &&
                      g.controller.control &&
                      (e.controller.control = g.controller.control),
                    s.includes("children") && t && C && g.virtual.enabled
                      ? ((C.slides = t), C.update(!0))
                      : s.includes("children") &&
                        e.lazy &&
                        e.params.lazy.enabled &&
                        e.lazy.load(),
                    p)
                  ) {
                    let e = y.init();
                    e && y.update(!0);
                  }
                  c && (e.controller.control = g.controller.control),
                    u &&
                      (d && (g.pagination.el = d),
                      v.init(),
                      v.render(),
                      v.update()),
                    h &&
                      (o && (g.scrollbar.el = o),
                      w.init(),
                      w.updateSize(),
                      w.setTranslate()),
                    f &&
                      (a && (g.navigation.nextEl = a),
                      n && (g.navigation.prevEl = n),
                      b.init(),
                      b.update()),
                    s.includes("allowSlideNext") &&
                      (e.allowSlideNext = i.allowSlideNext),
                    s.includes("allowSlidePrev") &&
                      (e.allowSlidePrev = i.allowSlidePrev),
                    s.includes("direction") &&
                      e.changeDirection(i.direction, !1),
                    e.update();
                })({
                  swiper: _.current,
                  slides: V,
                  passedParams: j,
                  changedParams: e,
                  nextEl: z.current,
                  prevEl: D.current,
                  scrollbarEl: B.current,
                  paginationEl: N.current,
                }),
              () => {
                Y();
              }
            );
          }),
          m(() => {
            f(_.current);
          }, [P]),
          s.createElement(
            g,
            b({ ref: L, className: p(`${T}${i ? ` ${i}` : ""}`) }, F),
            s.createElement(
              v.Provider,
              { value: _.current },
              q["container-start"],
              s.createElement(
                w,
                { className: "swiper-wrapper" },
                q["wrapper-start"],
                G.virtual
                  ? (function (e, t, i) {
                      if (!i) return null;
                      let a = e.isHorizontal()
                        ? {
                            [e.rtlTranslate
                              ? "right"
                              : "left"]: `${i.offset}px`,
                          }
                        : { top: `${i.offset}px` };
                      return t
                        .filter((e, t) => t >= i.from && t <= i.to)
                        .map((t) => s.cloneElement(t, { swiper: e, style: a }));
                    })(_.current, V, P)
                  : !G.loop || (_.current && _.current.destroyed)
                  ? V.map((e) => s.cloneElement(e, { swiper: _.current }))
                  : (function (e, t, i) {
                      let a = t.map((t, i) =>
                        s.cloneElement(t, {
                          swiper: e,
                          "data-swiper-slide-index": i,
                        })
                      );
                      function r(e, t, a) {
                        return s.cloneElement(e, {
                          key: `${e.key}-duplicate-${t}-${a}`,
                          className: `${e.props.className || ""} ${
                            i.slideDuplicateClass
                          }`,
                        });
                      }
                      if (i.loopFillGroupWithBlank) {
                        let e =
                          i.slidesPerGroup - (a.length % i.slidesPerGroup);
                        if (e !== i.slidesPerGroup)
                          for (let t = 0; t < e; t += 1) {
                            let e = s.createElement("div", {
                              className: `${i.slideClass} ${i.slideBlankClass}`,
                            });
                            a.push(e);
                          }
                      }
                      "auto" !== i.slidesPerView ||
                        i.loopedSlides ||
                        (i.loopedSlides = a.length);
                      let l = u(a, i),
                        n = [],
                        o = [];
                      for (let e = 0; e < l; e += 1) {
                        let t = e - Math.floor(e / a.length) * a.length;
                        o.push(r(a[t], e, "append")),
                          n.unshift(r(a[a.length - t - 1], e, "prepend"));
                      }
                      return e && (e.loopedSlides = l), [...n, ...a, ...o];
                    })(_.current, V, G),
                q["wrapper-end"]
              ),
              n(G) &&
                s.createElement(
                  s.Fragment,
                  null,
                  s.createElement("div", {
                    ref: D,
                    className: "swiper-button-prev",
                  }),
                  s.createElement("div", {
                    ref: z,
                    className: "swiper-button-next",
                  })
                ),
              d(G) &&
                s.createElement("div", {
                  ref: B,
                  className: "swiper-scrollbar",
                }),
              o(G) &&
                s.createElement("div", {
                  ref: N,
                  className: "swiper-pagination",
                }),
              q["container-end"]
            )
          )
        );
      });
      function C() {
        return (C = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var s in i)
                  Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      w.displayName = "Swiper";
      let y = (0, s.forwardRef)(function (e, t) {
        let {
            tag: i = "div",
            children: a,
            className: r = "",
            swiper: l,
            zoom: n,
            virtualIndex: o,
            ...d
          } = void 0 === e ? {} : e,
          c = (0, s.useRef)(null),
          [u, h] = (0, s.useState)("swiper-slide");
        function f(e, t, i) {
          t === c.current && h(i);
        }
        m(() => {
          if ((t && (t.current = c.current), c.current && l)) {
            if (l.destroyed) {
              "swiper-slide" !== u && h("swiper-slide");
              return;
            }
            return (
              l.on("_slideClass", f),
              () => {
                l && l.off("_slideClass", f);
              }
            );
          }
        }),
          m(() => {
            l && c.current && !l.destroyed && h(l.getSlideClasses(c.current));
          }, [l]);
        let v = {
            isActive:
              u.indexOf("swiper-slide-active") >= 0 ||
              u.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: u.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: u.indexOf("swiper-slide-duplicate") >= 0,
            isPrev:
              u.indexOf("swiper-slide-prev") >= 0 ||
              u.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext:
              u.indexOf("swiper-slide-next") >= 0 ||
              u.indexOf("swiper-slide-duplicate-next") >= 0,
          },
          b = () => ("function" == typeof a ? a(v) : a);
        return s.createElement(
          i,
          C(
            {
              ref: c,
              className: p(`${u}${r ? ` ${r}` : ""}`),
              "data-swiper-slide-index": o,
            },
            d
          ),
          s.createElement(
            g.Provider,
            { value: v },
            n
              ? s.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof n ? n : void 0,
                  },
                  b()
                )
              : b()
          )
        );
      });
      y.displayName = "SwiperSlide";
    },
    8116: function (e, t, i) {
      let s, a, r;
      function l(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function n(e = {}, t = {}) {
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : l(t[i]) &&
              l(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              n(e[i], t[i]);
        });
      }
      i.d(t, {
        pt: function () {
          return Y;
        },
        Qr: function () {
          return X;
        },
        xW: function () {
          return Z;
        },
        W_: function () {
          return V;
        },
        tl: function () {
          return R;
        },
        VS: function () {
          return W;
        },
        o3: function () {
          return U;
        },
        ZP: function () {
          return F;
        },
      });
      let o = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function d() {
        let e = "undefined" != typeof document ? document : {};
        return n(e, o), e;
      }
      let p = {
        document: o,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function c() {
        let e = "undefined" != typeof window ? window : {};
        return n(e, p), e;
      }
      class u extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                let t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function h(e = []) {
        let t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...h(e)) : t.push(e);
          }),
          t
        );
      }
      function f(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function m(e, t) {
        let i = c(),
          s = d(),
          a = [];
        if (!t && e instanceof u) return e;
        if (!e) return new u(a);
        if ("string" == typeof e) {
          let i = e.trim();
          if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            let e = "div";
            0 === i.indexOf("<li") && (e = "ul"),
              0 === i.indexOf("<tr") && (e = "tbody"),
              (0 === i.indexOf("<td") || 0 === i.indexOf("<th")) && (e = "tr"),
              0 === i.indexOf("<tbody") && (e = "table"),
              0 === i.indexOf("<option") && (e = "select");
            let t = s.createElement(e);
            t.innerHTML = i;
            for (let e = 0; e < t.childNodes.length; e += 1)
              a.push(t.childNodes[e]);
          } else
            a = (function (e, t) {
              if ("string" != typeof e) return [e];
              let i = [],
                s = t.querySelectorAll(e);
              for (let e = 0; e < s.length; e += 1) i.push(s[e]);
              return i;
            })(e.trim(), t || s);
        } else if (e.nodeType || e === i || e === s) a.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof u) return e;
          a = e;
        }
        return new u(
          (function (e) {
            let t = [];
            for (let i = 0; i < e.length; i += 1)
              -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t;
          })(a)
        );
      }
      m.fn = u.prototype;
      let g = "resize scroll".split(" ");
      function v(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              0 > g.indexOf(e) &&
                (e in this[t] ? this[t][e]() : m(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      v("click"),
        v("blur"),
        v("focus"),
        v("focusin"),
        v("focusout"),
        v("keyup"),
        v("keydown"),
        v("keypress"),
        v("submit"),
        v("change"),
        v("mousedown"),
        v("mousemove"),
        v("mouseup"),
        v("mouseenter"),
        v("mouseleave"),
        v("mouseout"),
        v("mouseover"),
        v("touchstart"),
        v("touchend"),
        v("touchmove"),
        v("resize"),
        v("scroll");
      let b = {
        addClass: function (...e) {
          let t = h(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          let t = h(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          let t = h(e.map((e) => e.split(" ")));
          return (
            f(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          let t = h(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 == arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let i = 0; i < this.length; i += 1)
            if (2 == arguments.length) this[i].setAttribute(e, t);
            else
              for (let t in e)
                (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let t,
            [i, s, a, r] = e;
          function l(e) {
            let t = e.target;
            if (!t) return;
            let i = e.target.dom7EventData || [];
            if ((0 > i.indexOf(e) && i.unshift(e), m(t).is(s))) a.apply(t, i);
            else {
              let e = m(t).parents();
              for (let t = 0; t < e.length; t += 1)
                m(e[t]).is(s) && a.apply(e[t], i);
            }
          }
          function n(e) {
            let t = (e && e.target && e.target.dom7EventData) || [];
            0 > t.indexOf(e) && t.unshift(e), a.apply(this, t);
          }
          "function" == typeof e[1] && (([i, a, r] = e), (s = void 0)),
            r || (r = !1);
          let o = i.split(" ");
          for (let e = 0; e < this.length; e += 1) {
            let i = this[e];
            if (s)
              for (t = 0; t < o.length; t += 1) {
                let e = o[t];
                i.dom7LiveListeners || (i.dom7LiveListeners = {}),
                  i.dom7LiveListeners[e] || (i.dom7LiveListeners[e] = []),
                  i.dom7LiveListeners[e].push({
                    listener: a,
                    proxyListener: l,
                  }),
                  i.addEventListener(e, l, r);
              }
            else
              for (t = 0; t < o.length; t += 1) {
                let e = o[t];
                i.dom7Listeners || (i.dom7Listeners = {}),
                  i.dom7Listeners[e] || (i.dom7Listeners[e] = []),
                  i.dom7Listeners[e].push({ listener: a, proxyListener: n }),
                  i.addEventListener(e, n, r);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, i, s, a] = e;
          "function" == typeof e[1] && (([t, s, a] = e), (i = void 0)),
            a || (a = !1);
          let r = t.split(" ");
          for (let e = 0; e < r.length; e += 1) {
            let t = r[e];
            for (let e = 0; e < this.length; e += 1) {
              let r;
              let l = this[e];
              if (
                (!i && l.dom7Listeners
                  ? (r = l.dom7Listeners[t])
                  : i && l.dom7LiveListeners && (r = l.dom7LiveListeners[t]),
                r && r.length)
              )
                for (let e = r.length - 1; e >= 0; e -= 1) {
                  let i = r[e];
                  s && i.listener === s
                    ? (l.removeEventListener(t, i.proxyListener, a),
                      r.splice(e, 1))
                    : s &&
                      i.listener &&
                      i.listener.dom7proxy &&
                      i.listener.dom7proxy === s
                    ? (l.removeEventListener(t, i.proxyListener, a),
                      r.splice(e, 1))
                    : s ||
                      (l.removeEventListener(t, i.proxyListener, a),
                      r.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          let t = c(),
            i = e[0].split(" "),
            s = e[1];
          for (let a = 0; a < i.length; a += 1) {
            let r = i[a];
            for (let i = 0; i < this.length; i += 1) {
              let a = this[i];
              if (t.CustomEvent) {
                let i = new t.CustomEvent(r, {
                  detail: s,
                  bubbles: !0,
                  cancelable: !0,
                });
                (a.dom7EventData = e.filter((e, t) => t > 0)),
                  a.dispatchEvent(i),
                  (a.dom7EventData = []),
                  delete a.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          let t = this;
          return (
            e &&
              t.on("transitionend", function i(s) {
                s.target === this &&
                  (e.call(this, s), t.off("transitionend", i));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              let e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              let e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          let e = c();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            let e = c(),
              t = d(),
              i = this[0],
              s = i.getBoundingClientRect(),
              a = t.body,
              r = i.clientTop || a.clientTop || 0,
              l = i.clientLeft || a.clientLeft || 0,
              n = i === e ? e.scrollY : i.scrollTop,
              o = i === e ? e.scrollX : i.scrollLeft;
            return { top: s.top + n - r, left: s.left + o - l };
          }
          return null;
        },
        css: function (e, t) {
          let i;
          let s = c();
          if (1 == arguments.length) {
            if ("string" == typeof e) {
              if (this[0])
                return s.getComputedStyle(this[0], null).getPropertyValue(e);
            } else {
              for (i = 0; i < this.length; i += 1)
                for (let t in e) this[i].style[t] = e[t];
              return this;
            }
          }
          if (2 == arguments.length && "string" == typeof e)
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        },
        each: function (e) {
          return (
            e &&
              this.forEach((t, i) => {
                e.apply(t, [t, i]);
              }),
            this
          );
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          let t, i;
          let s = c(),
            a = d(),
            r = this[0];
          if (!r || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (r.matches) return r.matches(e);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
            if (r.msMatchesSelector) return r.msMatchesSelector(e);
            for (i = 0, t = m(e); i < t.length; i += 1)
              if (t[i] === r) return !0;
            return !1;
          }
          if (e === a) return r === a;
          if (e === s) return r === s;
          if (e.nodeType || e instanceof u) {
            for (i = 0, t = e.nodeType ? [e] : e; i < t.length; i += 1)
              if (t[i] === r) return !0;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          let t = this.length;
          if (e > t - 1) return m([]);
          if (e < 0) {
            let i = t + e;
            return i < 0 ? m([]) : m([this[i]]);
          }
          return m([this[e]]);
        },
        append: function (...e) {
          let t;
          let i = d();
          for (let s = 0; s < e.length; s += 1) {
            t = e[s];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                let s = i.createElement("div");
                for (s.innerHTML = t; s.firstChild; )
                  this[e].appendChild(s.firstChild);
              } else if (t instanceof u)
                for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          let t, i;
          let s = d();
          for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              let a = s.createElement("div");
              for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)
                this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
            } else if (e instanceof u)
              for (i = 0; i < e.length; i += 1)
                this[t].insertBefore(e[i], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          if (this.length > 0) {
            if (e)
              return this[0].nextElementSibling &&
                m(this[0].nextElementSibling).is(e)
                ? m([this[0].nextElementSibling])
                : m([]);
            if (this[0].nextElementSibling)
              return m([this[0].nextElementSibling]);
          }
          return m([]);
        },
        nextAll: function (e) {
          let t = [],
            i = this[0];
          if (!i) return m([]);
          for (; i.nextElementSibling; ) {
            let s = i.nextElementSibling;
            e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return m(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            let t = this[0];
            if (e)
              return t.previousElementSibling &&
                m(t.previousElementSibling).is(e)
                ? m([t.previousElementSibling])
                : m([]);
            if (t.previousElementSibling) return m([t.previousElementSibling]);
          }
          return m([]);
        },
        prevAll: function (e) {
          let t = [],
            i = this[0];
          if (!i) return m([]);
          for (; i.previousElementSibling; ) {
            let s = i.previousElementSibling;
            e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return m(t);
        },
        parent: function (e) {
          let t = [];
          for (let i = 0; i < this.length; i += 1)
            null !== this[i].parentNode &&
              (e
                ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                : t.push(this[i].parentNode));
          return m(t);
        },
        parents: function (e) {
          let t = [];
          for (let i = 0; i < this.length; i += 1) {
            let s = this[i].parentNode;
            for (; s; )
              e ? m(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
          }
          return m(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? m([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          let t = [];
          for (let i = 0; i < this.length; i += 1) {
            let s = this[i].querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) t.push(s[e]);
          }
          return m(t);
        },
        children: function (e) {
          let t = [];
          for (let i = 0; i < this.length; i += 1) {
            let s = this[i].children;
            for (let i = 0; i < s.length; i += 1)
              (!e || m(s[i]).is(e)) && t.push(s[i]);
          }
          return m(t);
        },
        filter: function (e) {
          let t = f(this, e);
          return m(t);
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      function w(e, t = 0) {
        return setTimeout(e, t);
      }
      function C() {
        return Date.now();
      }
      function y(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function S(...e) {
        let t = Object(e[0]),
          i = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < e.length; s += 1) {
          let a = e[s];
          if (
            null != a &&
            ("undefined" != typeof window && void 0 !== window.HTMLElement
              ? !(a instanceof HTMLElement)
              : !a || (1 !== a.nodeType && 11 !== a.nodeType))
          ) {
            let e = Object.keys(Object(a)).filter((e) => 0 > i.indexOf(e));
            for (let i = 0, s = e.length; i < s; i += 1) {
              let s = e[i],
                r = Object.getOwnPropertyDescriptor(a, s);
              void 0 !== r &&
                r.enumerable &&
                (y(t[s]) && y(a[s])
                  ? a[s].__swiper__
                    ? (t[s] = a[s])
                    : S(t[s], a[s])
                  : !y(t[s]) && y(a[s])
                  ? ((t[s] = {}),
                    a[s].__swiper__ ? (t[s] = a[s]) : S(t[s], a[s]))
                  : (t[s] = a[s]));
            }
          }
        }
        return t;
      }
      function x(e, t, i) {
        e.style.setProperty(t, i);
      }
      function T({ swiper: e, targetPosition: t, side: i }) {
        let s;
        let a = c(),
          r = -e.translate,
          l = null,
          n = e.params.speed;
        (e.wrapperEl.style.scrollSnapType = "none"),
          a.cancelAnimationFrame(e.cssModeFrameID);
        let o = t > r ? "next" : "prev",
          d = (e, t) => ("next" === o && e >= t) || ("prev" === o && e <= t),
          p = () => {
            (s = new Date().getTime()), null === l && (l = s);
            let o = Math.max(Math.min((s - l) / n, 1), 0),
              c = r + (0.5 - Math.cos(o * Math.PI) / 2) * (t - r);
            if (
              (d(c, t) && (c = t), e.wrapperEl.scrollTo({ [i]: c }), d(c, t))
            ) {
              (e.wrapperEl.style.overflow = "hidden"),
                (e.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (e.wrapperEl.style.overflow = ""),
                    e.wrapperEl.scrollTo({ [i]: c });
                }),
                a.cancelAnimationFrame(e.cssModeFrameID);
              return;
            }
            e.cssModeFrameID = a.requestAnimationFrame(p);
          };
        p();
      }
      function E() {
        return (
          s ||
            (s = (function () {
              let e = c(),
                t = d();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    let i = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, i);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          s
        );
      }
      function P({ swiper: e, runCallbacks: t, direction: i, step: s }) {
        let { activeIndex: a, previousIndex: r } = e,
          l = i;
        if (
          (l || (l = a > r ? "next" : a < r ? "prev" : "reset"),
          e.emit(`transition${s}`),
          t && a !== r)
        ) {
          if ("reset" === l) {
            e.emit(`slideResetTransition${s}`);
            return;
          }
          e.emit(`slideChangeTransition${s}`),
            "next" === l
              ? e.emit(`slideNextTransition${s}`)
              : e.emit(`slidePrevTransition${s}`);
        }
      }
      function k(e) {
        let t = this,
          i = d(),
          s = c(),
          a = t.touchEventsData,
          { params: r, touches: l, enabled: n } = t;
        if (!n || (t.animating && r.preventInteractionOnTransition)) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let o = e;
        o.originalEvent && (o = o.originalEvent);
        let p = m(o.target);
        if (
          ("wrapper" === r.touchEventsTarget &&
            !p.closest(t.wrapperEl).length) ||
          ((a.isTouchEvent = "touchstart" === o.type),
          (!a.isTouchEvent && "which" in o && 3 === o.which) ||
            (!a.isTouchEvent && "button" in o && o.button > 0) ||
            (a.isTouched && a.isMoved))
        )
          return;
        let u = !!r.noSwipingClass && "" !== r.noSwipingClass,
          h = e.composedPath ? e.composedPath() : e.path;
        u && o.target && o.target.shadowRoot && h && (p = m(h[0]));
        let f = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          g = !!(o.target && o.target.shadowRoot);
        if (
          r.noSwiping &&
          (g
            ? (function (e, t = this) {
                return (function t(i) {
                  if (!i || i === d() || i === c()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  let s = i.closest(e);
                  return s || i.getRootNode
                    ? s || t(i.getRootNode().host)
                    : null;
                })(t);
              })(f, p[0])
            : p.closest(f)[0])
        ) {
          t.allowClick = !0;
          return;
        }
        if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return;
        (l.currentX =
          "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
          (l.currentY =
            "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
        let v = l.currentX,
          b = l.currentY,
          w = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (w && (v <= y || v >= s.innerWidth - y)) {
          if ("prevent" !== w) return;
          e.preventDefault();
        }
        if (
          (Object.assign(a, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (l.startX = v),
          (l.startY = b),
          (a.touchStartTime = C()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          r.threshold > 0 && (a.allowThresholdMove = !1),
          "touchstart" !== o.type)
        ) {
          let e = !0;
          p.is(a.focusableElements) &&
            ((e = !1), "SELECT" === p[0].nodeName && (a.isTouched = !1)),
            i.activeElement &&
              m(i.activeElement).is(a.focusableElements) &&
              i.activeElement !== p[0] &&
              i.activeElement.blur();
          let s = e && t.allowTouchMove && r.touchStartPreventDefault;
          (r.touchStartForcePreventDefault || s) &&
            !p[0].isContentEditable &&
            o.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", o);
      }
      function M(e) {
        let t = d(),
          i = this,
          s = i.touchEventsData,
          { params: a, touches: r, rtlTranslate: l, enabled: n } = i;
        if (!n) return;
        let o = e;
        if ((o.originalEvent && (o = o.originalEvent), !s.isTouched)) {
          s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", o);
          return;
        }
        if (s.isTouchEvent && "touchmove" !== o.type) return;
        let p =
            "touchmove" === o.type &&
            o.targetTouches &&
            (o.targetTouches[0] || o.changedTouches[0]),
          c = "touchmove" === o.type ? p.pageX : o.pageX,
          u = "touchmove" === o.type ? p.pageY : o.pageY;
        if (o.preventedByNestedSwiper) {
          (r.startX = c), (r.startY = u);
          return;
        }
        if (!i.allowTouchMove) {
          m(o.target).is(s.focusableElements) || (i.allowClick = !1),
            s.isTouched &&
              (Object.assign(r, {
                startX: c,
                startY: u,
                currentX: c,
                currentY: u,
              }),
              (s.touchStartTime = C()));
          return;
        }
        if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop) {
          if (i.isVertical()) {
            if (
              (u < r.startY && i.translate <= i.maxTranslate()) ||
              (u > r.startY && i.translate >= i.minTranslate())
            ) {
              (s.isTouched = !1), (s.isMoved = !1);
              return;
            }
          } else if (
            (c < r.startX && i.translate <= i.maxTranslate()) ||
            (c > r.startX && i.translate >= i.minTranslate())
          )
            return;
        }
        if (
          s.isTouchEvent &&
          t.activeElement &&
          o.target === t.activeElement &&
          m(o.target).is(s.focusableElements)
        ) {
          (s.isMoved = !0), (i.allowClick = !1);
          return;
        }
        if (
          (s.allowTouchCallbacks && i.emit("touchMove", o),
          o.targetTouches && o.targetTouches.length > 1)
        )
          return;
        (r.currentX = c), (r.currentY = u);
        let h = r.currentX - r.startX,
          f = r.currentY - r.startY;
        if (
          i.params.threshold &&
          Math.sqrt(h ** 2 + f ** 2) < i.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (i.isHorizontal() && r.currentY === r.startY) ||
          (i.isVertical() && r.currentX === r.startX)
            ? (s.isScrolling = !1)
            : h * h + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
              (s.isScrolling = i.isHorizontal()
                ? e > a.touchAngle
                : 90 - e > a.touchAngle));
        }
        if (
          (s.isScrolling && i.emit("touchMoveOpposite", o),
          void 0 === s.startMoving &&
            (r.currentX !== r.startX || r.currentY !== r.startY) &&
            (s.startMoving = !0),
          s.isScrolling)
        ) {
          s.isTouched = !1;
          return;
        }
        if (!s.startMoving) return;
        (i.allowClick = !1),
          !a.cssMode && o.cancelable && o.preventDefault(),
          a.touchMoveStopPropagation && !a.nested && o.stopPropagation(),
          s.isMoved ||
            (a.loop && !a.cssMode && i.loopFix(),
            (s.startTranslate = i.getTranslate()),
            i.setTransition(0),
            i.animating &&
              i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (s.allowMomentumBounce = !1),
            a.grabCursor &&
              (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) &&
              i.setGrabCursor(!0),
            i.emit("sliderFirstMove", o)),
          i.emit("sliderMove", o),
          (s.isMoved = !0);
        let g = i.isHorizontal() ? h : f;
        (r.diff = g),
          (g *= a.touchRatio),
          l && (g = -g),
          (i.swipeDirection = g > 0 ? "prev" : "next"),
          (s.currentTranslate = g + s.startTranslate);
        let v = !0,
          b = a.resistanceRatio;
        if (
          (a.touchReleaseOnEdges && (b = 0),
          g > 0 && s.currentTranslate > i.minTranslate()
            ? ((v = !1),
              a.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + g) ** b))
            : g < 0 &&
              s.currentTranslate < i.maxTranslate() &&
              ((v = !1),
              a.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - g) ** b)),
          v && (o.preventedByNestedSwiper = !0),
          !i.allowSlideNext &&
            "next" === i.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !i.allowSlidePrev &&
            "prev" === i.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          i.allowSlidePrev ||
            i.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          a.threshold > 0)
        ) {
          if (Math.abs(g) > a.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
              (s.allowThresholdMove = !0),
                (r.startX = r.currentX),
                (r.startY = r.currentY),
                (s.currentTranslate = s.startTranslate),
                (r.diff = i.isHorizontal()
                  ? r.currentX - r.startX
                  : r.currentY - r.startY);
              return;
            }
          } else {
            s.currentTranslate = s.startTranslate;
            return;
          }
        }
        a.followFinger &&
          !a.cssMode &&
          (((a.freeMode && a.freeMode.enabled && i.freeMode) ||
            a.watchSlidesProgress) &&
            (i.updateActiveIndex(), i.updateSlidesClasses()),
          i.params.freeMode &&
            a.freeMode.enabled &&
            i.freeMode &&
            i.freeMode.onTouchMove(),
          i.updateProgress(s.currentTranslate),
          i.setTranslate(s.currentTranslate));
      }
      function $(e) {
        let t;
        let i = this,
          s = i.touchEventsData,
          {
            params: a,
            touches: r,
            rtlTranslate: l,
            slidesGrid: n,
            enabled: o,
          } = i;
        if (!o) return;
        let d = e;
        if (
          (d.originalEvent && (d = d.originalEvent),
          s.allowTouchCallbacks && i.emit("touchEnd", d),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        ) {
          s.isMoved && a.grabCursor && i.setGrabCursor(!1),
            (s.isMoved = !1),
            (s.startMoving = !1);
          return;
        }
        a.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) &&
          i.setGrabCursor(!1);
        let p = C(),
          c = p - s.touchStartTime;
        if (i.allowClick) {
          let e = d.path || (d.composedPath && d.composedPath());
          i.updateClickedSlide((e && e[0]) || d.target),
            i.emit("tap click", d),
            c < 300 &&
              p - s.lastClickTime < 300 &&
              i.emit("doubleTap doubleClick", d);
        }
        if (
          ((s.lastClickTime = C()),
          w(() => {
            i.destroyed || (i.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !i.swipeDirection ||
            0 === r.diff ||
            s.currentTranslate === s.startTranslate)
        ) {
          (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
          return;
        }
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (t = a.followFinger
            ? l
              ? i.translate
              : -i.translate
            : -s.currentTranslate),
          a.cssMode)
        )
          return;
        if (i.params.freeMode && a.freeMode.enabled) {
          i.freeMode.onTouchEnd({ currentPos: t });
          return;
        }
        let u = 0,
          h = i.slidesSizesGrid[0];
        for (
          let e = 0;
          e < n.length;
          e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
        ) {
          let i = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== n[e + i]
            ? t >= n[e] && t < n[e + i] && ((u = e), (h = n[e + i] - n[e]))
            : t >= n[e] && ((u = e), (h = n[n.length - 1] - n[n.length - 2]));
        }
        let f = null,
          m = null;
        a.rewind &&
          (i.isBeginning
            ? (m =
                i.params.virtual && i.params.virtual.enabled && i.virtual
                  ? i.virtual.slides.length - 1
                  : i.slides.length - 1)
            : i.isEnd && (f = 0));
        let g = (t - n[u]) / h,
          v = u < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
          if (!a.longSwipes) {
            i.slideTo(i.activeIndex);
            return;
          }
          "next" === i.swipeDirection &&
            (g >= a.longSwipesRatio
              ? i.slideTo(a.rewind && i.isEnd ? f : u + v)
              : i.slideTo(u)),
            "prev" === i.swipeDirection &&
              (g > 1 - a.longSwipesRatio
                ? i.slideTo(u + v)
                : null !== m && g < 0 && Math.abs(g) > a.longSwipesRatio
                ? i.slideTo(m)
                : i.slideTo(u));
        } else {
          if (!a.shortSwipes) {
            i.slideTo(i.activeIndex);
            return;
          }
          let e =
            i.navigation &&
            (d.target === i.navigation.nextEl ||
              d.target === i.navigation.prevEl);
          e
            ? d.target === i.navigation.nextEl
              ? i.slideTo(u + v)
              : i.slideTo(u)
            : ("next" === i.swipeDirection && i.slideTo(null !== f ? f : u + v),
              "prev" === i.swipeDirection && i.slideTo(null !== m ? m : u));
        }
      }
      function O() {
        let e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: s, allowSlidePrev: a, snapGrid: r } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = a),
          (e.allowSlideNext = s),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function L(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function _() {
        let e = this,
          { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
        if (!s) return;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        let a = e.maxTranslate() - e.minTranslate();
        (0 === a ? 0 : (e.translate - e.minTranslate()) / a) !== e.progress &&
          e.updateProgress(i ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      Object.keys(b).forEach((e) => {
        Object.defineProperty(m.fn, e, { value: b[e], writable: !0 });
      });
      let A = !1;
      function I() {}
      let z = (e, t) => {
          let i = d(),
            {
              params: s,
              touchEvents: a,
              el: r,
              wrapperEl: l,
              device: n,
              support: o,
            } = e,
            p = !!s.nested,
            c = "on" === t ? "addEventListener" : "removeEventListener";
          if (o.touch) {
            let t = "touchstart" === a.start &&
              !!o.passiveListener &&
              !!s.passiveListeners && { passive: !0, capture: !1 };
            r[c](a.start, e.onTouchStart, t),
              r[c](
                a.move,
                e.onTouchMove,
                o.passiveListener ? { passive: !1, capture: p } : p
              ),
              r[c](a.end, e.onTouchEnd, t),
              a.cancel && r[c](a.cancel, e.onTouchEnd, t);
          } else
            r[c](a.start, e.onTouchStart, !1),
              i[c](a.move, e.onTouchMove, p),
              i[c](a.end, e.onTouchEnd, !1);
          (s.preventClicks || s.preventClicksPropagation) &&
            r[c]("click", e.onClick, !0),
            s.cssMode && l[c]("scroll", e.onScroll),
            s.updateOnWindowResize
              ? e[t](
                  n.ios || n.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  O,
                  !0
                )
              : e[t]("observerUpdate", O, !0);
        },
        D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var N = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let B = {
          eventsEmitter: {
            on(e, t, i) {
              let s = this;
              if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                return s;
              let a = i ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  s.eventsListeners[e] || (s.eventsListeners[e] = []),
                    s.eventsListeners[e][a](t);
                }),
                s
              );
            },
            once(e, t, i) {
              let s = this;
              if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                return s;
              function a(...i) {
                s.off(e, a),
                  a.__emitterProxy && delete a.__emitterProxy,
                  t.apply(s, i);
              }
              return (a.__emitterProxy = t), s.on(e, a, i);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let i = this;
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((s, a) => {
                          (s === t ||
                            (s.__emitterProxy && s.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(a, 1);
                        });
                  }),
                i
              );
            },
            emit(...e) {
              let t, i, s;
              let a = this;
              if (!a.eventsListeners || a.destroyed || !a.eventsListeners)
                return a;
              "string" == typeof e[0] || Array.isArray(e[0])
                ? ((t = e[0]), (i = e.slice(1, e.length)), (s = a))
                : ((t = e[0].events), (i = e[0].data), (s = e[0].context || a)),
                i.unshift(s);
              let r = Array.isArray(t) ? t : t.split(" ");
              return (
                r.forEach((e) => {
                  a.eventsAnyListeners &&
                    a.eventsAnyListeners.length &&
                    a.eventsAnyListeners.forEach((t) => {
                      t.apply(s, [e, ...i]);
                    }),
                    a.eventsListeners &&
                      a.eventsListeners[e] &&
                      a.eventsListeners[e].forEach((e) => {
                        e.apply(s, i);
                      });
                }),
                a
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let i = this.$el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : i[0].clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : i[0].clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt(i.css("padding-left") || 0, 10) -
                    parseInt(i.css("padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt(i.css("padding-top") || 0, 10) -
                    parseInt(i.css("padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function i(e) {
                return t.isHorizontal()
                  ? e
                  : {
                      width: "height",
                      "margin-top": "margin-left",
                      "margin-bottom ": "margin-right",
                      "margin-left": "margin-top",
                      "margin-right": "margin-bottom",
                      "padding-left": "padding-top",
                      "padding-right": "padding-bottom",
                      marginRight: "marginBottom",
                    }[e];
              }
              function s(e, t) {
                return parseFloat(e.getPropertyValue(i(t)) || 0);
              }
              let a = t.params,
                { $wrapperEl: r, size: l, rtlTranslate: n, wrongRTL: o } = t,
                d = t.virtual && a.virtual.enabled,
                p = d ? t.virtual.slides.length : t.slides.length,
                c = r.children(`.${t.params.slideClass}`),
                u = d ? t.virtual.slides.length : c.length,
                h = [],
                f = [],
                m = [],
                g = a.slidesOffsetBefore;
              "function" == typeof g && (g = a.slidesOffsetBefore.call(t));
              let v = a.slidesOffsetAfter;
              "function" == typeof v && (v = a.slidesOffsetAfter.call(t));
              let b = t.snapGrid.length,
                w = t.slidesGrid.length,
                C = a.spaceBetween,
                y = -g,
                S = 0,
                T = 0;
              if (void 0 === l) return;
              "string" == typeof C &&
                C.indexOf("%") >= 0 &&
                (C = (parseFloat(C.replace("%", "")) / 100) * l),
                (t.virtualSize = -C),
                n
                  ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                  : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                a.centeredSlides &&
                  a.cssMode &&
                  (x(t.wrapperEl, "--swiper-centered-offset-before", ""),
                  x(t.wrapperEl, "--swiper-centered-offset-after", ""));
              let E = a.grid && a.grid.rows > 1 && t.grid;
              E && t.grid.initSlides(u);
              let P =
                "auto" === a.slidesPerView &&
                a.breakpoints &&
                Object.keys(a.breakpoints).filter(
                  (e) => void 0 !== a.breakpoints[e].slidesPerView
                ).length > 0;
              for (let r = 0; r < u; r += 1) {
                e = 0;
                let n = c.eq(r);
                if (
                  (E && t.grid.updateSlide(r, n, u, i),
                  "none" !== n.css("display"))
                ) {
                  if ("auto" === a.slidesPerView) {
                    P && (c[r].style[i("width")] = "");
                    let l = getComputedStyle(n[0]),
                      o = n[0].style.transform,
                      d = n[0].style.webkitTransform;
                    if (
                      (o && (n[0].style.transform = "none"),
                      d && (n[0].style.webkitTransform = "none"),
                      a.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? n.outerWidth(!0)
                        : n.outerHeight(!0);
                    else {
                      let t = s(l, "width"),
                        i = s(l, "padding-left"),
                        a = s(l, "padding-right"),
                        r = s(l, "margin-left"),
                        o = s(l, "margin-right"),
                        d = l.getPropertyValue("box-sizing");
                      if (d && "border-box" === d) e = t + r + o;
                      else {
                        let { clientWidth: s, offsetWidth: l } = n[0];
                        e = t + i + a + r + o + (l - s);
                      }
                    }
                    o && (n[0].style.transform = o),
                      d && (n[0].style.webkitTransform = d),
                      a.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (l - (a.slidesPerView - 1) * C) / a.slidesPerView),
                      a.roundLengths && (e = Math.floor(e)),
                      c[r] && (c[r].style[i("width")] = `${e}px`);
                  c[r] && (c[r].swiperSlideSize = e),
                    m.push(e),
                    a.centeredSlides
                      ? ((y = y + e / 2 + S / 2 + C),
                        0 === S && 0 !== r && (y = y - l / 2 - C),
                        0 === r && (y = y - l / 2 - C),
                        0.001 > Math.abs(y) && (y = 0),
                        a.roundLengths && (y = Math.floor(y)),
                        T % a.slidesPerGroup == 0 && h.push(y),
                        f.push(y))
                      : (a.roundLengths && (y = Math.floor(y)),
                        (T - Math.min(t.params.slidesPerGroupSkip, T)) %
                          t.params.slidesPerGroup ==
                          0 && h.push(y),
                        f.push(y),
                        (y = y + e + C)),
                    (t.virtualSize += e + C),
                    (S = e),
                    (T += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, l) + v),
                n &&
                  o &&
                  ("slide" === a.effect || "coverflow" === a.effect) &&
                  r.css({ width: `${t.virtualSize + a.spaceBetween}px` }),
                a.setWrapperSize &&
                  r.css({
                    [i("width")]: `${t.virtualSize + a.spaceBetween}px`,
                  }),
                E && t.grid.updateWrapperSize(e, h, i),
                !a.centeredSlides)
              ) {
                let e = [];
                for (let i = 0; i < h.length; i += 1) {
                  let s = h[i];
                  a.roundLengths && (s = Math.floor(s)),
                    h[i] <= t.virtualSize - l && e.push(s);
                }
                (h = e),
                  Math.floor(t.virtualSize - l) - Math.floor(h[h.length - 1]) >
                    1 && h.push(t.virtualSize - l);
              }
              if ((0 === h.length && (h = [0]), 0 !== a.spaceBetween)) {
                let e = t.isHorizontal() && n ? "marginLeft" : i("marginRight");
                c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({
                  [e]: `${C}px`,
                });
              }
              if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t) => {
                  e += t + (a.spaceBetween ? a.spaceBetween : 0);
                }),
                  (e -= a.spaceBetween);
                let t = e - l;
                h = h.map((e) => (e < 0 ? -g : e > t ? t + v : e));
              }
              if (a.centerInsufficientSlides) {
                let e = 0;
                if (
                  (m.forEach((t) => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0);
                  }),
                  (e -= a.spaceBetween) < l)
                ) {
                  let t = (l - e) / 2;
                  h.forEach((e, i) => {
                    h[i] = e - t;
                  }),
                    f.forEach((e, i) => {
                      f[i] = e + t;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: c,
                  snapGrid: h,
                  slidesGrid: f,
                  slidesSizesGrid: m,
                }),
                a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
              ) {
                x(t.wrapperEl, "--swiper-centered-offset-before", `${-h[0]}px`),
                  x(
                    t.wrapperEl,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - m[m.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + i));
              }
              if (
                (u !== p && t.emit("slidesLengthChange"),
                h.length !== b &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                f.length !== w && t.emit("slidesGridLengthChange"),
                a.watchSlidesProgress && t.updateSlidesOffset(),
                !d &&
                  !a.cssMode &&
                  ("slide" === a.effect || "fade" === a.effect))
              ) {
                let e = `${a.containerModifierClass}backface-hidden`,
                  i = t.$el.hasClass(e);
                u <= a.maxBackfaceHiddenSlides
                  ? i || t.$el.addClass(e)
                  : i && t.$el.removeClass(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let i = this,
                s = [],
                a = i.virtual && i.params.virtual.enabled,
                r = 0;
              "number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed);
              let l = (e) =>
                a
                  ? i.slides.filter(
                      (t) =>
                        parseInt(
                          t.getAttribute("data-swiper-slide-index"),
                          10
                        ) === e
                    )[0]
                  : i.slides.eq(e)[0];
              if (
                "auto" !== i.params.slidesPerView &&
                i.params.slidesPerView > 1
              ) {
                if (i.params.centeredSlides)
                  (i.visibleSlides || m([])).each((e) => {
                    s.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t;
                    if (e > i.slides.length && !a) break;
                    s.push(l(e));
                  }
              } else s.push(l(i.activeIndex));
              for (t = 0; t < s.length; t += 1)
                if (void 0 !== s[t]) {
                  let e = s[t].offsetHeight;
                  r = e > r ? e : r;
                }
              (r || 0 === r) && i.$wrapperEl.css("height", `${r}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides;
              for (let t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal()
                  ? e[t].offsetLeft
                  : e[t].offsetTop;
            },
            updateSlidesProgress: function (e = (this && this.translate) || 0) {
              let t = this,
                i = t.params,
                { slides: s, rtlTranslate: a, snapGrid: r } = t;
              if (0 === s.length) return;
              void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
              let l = -e;
              a && (l = e),
                s.removeClass(i.slideVisibleClass),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = []);
              for (let e = 0; e < s.length; e += 1) {
                let n = s[e],
                  o = n.swiperSlideOffset;
                i.cssMode && i.centeredSlides && (o -= s[0].swiperSlideOffset);
                let d =
                    (l + (i.centeredSlides ? t.minTranslate() : 0) - o) /
                    (n.swiperSlideSize + i.spaceBetween),
                  p =
                    (l - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - o) /
                    (n.swiperSlideSize + i.spaceBetween),
                  c = -(l - o),
                  u = c + t.slidesSizesGrid[e],
                  h =
                    (c >= 0 && c < t.size - 1) ||
                    (u > 1 && u <= t.size) ||
                    (c <= 0 && u >= t.size);
                h &&
                  (t.visibleSlides.push(n),
                  t.visibleSlidesIndexes.push(e),
                  s.eq(e).addClass(i.slideVisibleClass)),
                  (n.progress = a ? -d : d),
                  (n.originalProgress = a ? -p : p);
              }
              t.visibleSlides = m(t.visibleSlides);
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                { progress: s, isBeginning: a, isEnd: r } = this,
                l = a,
                n = r;
              0 === i
                ? ((s = 0), (a = !0), (r = !0))
                : ((a = (s = (e - this.minTranslate()) / i) <= 0),
                  (r = s >= 1)),
                Object.assign(this, { progress: s, isBeginning: a, isEnd: r }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                a && !l && this.emit("reachBeginning toEdge"),
                r && !n && this.emit("reachEnd toEdge"),
                ((l && !a) || (n && !r)) && this.emit("fromEdge"),
                this.emit("progress", s);
            },
            updateSlidesClasses: function () {
              let e;
              let {
                  slides: t,
                  params: i,
                  $wrapperEl: s,
                  activeIndex: a,
                  realIndex: r,
                } = this,
                l = this.virtual && i.virtual.enabled;
              t.removeClass(
                `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
              ),
                (e = l
                  ? this.$wrapperEl.find(
                      `.${i.slideClass}[data-swiper-slide-index="${a}"]`
                    )
                  : t.eq(a)).addClass(i.slideActiveClass),
                i.loop &&
                  (e.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                        )
                        .addClass(i.slideDuplicateActiveClass)
                    : s
                        .children(
                          `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                        )
                        .addClass(i.slideDuplicateActiveClass));
              let n = e
                .nextAll(`.${i.slideClass}`)
                .eq(0)
                .addClass(i.slideNextClass);
              i.loop &&
                0 === n.length &&
                (n = t.eq(0)).addClass(i.slideNextClass);
              let o = e
                .prevAll(`.${i.slideClass}`)
                .eq(0)
                .addClass(i.slidePrevClass);
              i.loop &&
                0 === o.length &&
                (o = t.eq(-1)).addClass(i.slidePrevClass),
                i.loop &&
                  (n.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          `.${i.slideClass}:not(.${
                            i.slideDuplicateClass
                          })[data-swiper-slide-index="${n.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(i.slideDuplicateNextClass)
                    : s
                        .children(
                          `.${i.slideClass}.${
                            i.slideDuplicateClass
                          }[data-swiper-slide-index="${n.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(i.slideDuplicateNextClass),
                  o.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          `.${i.slideClass}:not(.${
                            i.slideDuplicateClass
                          })[data-swiper-slide-index="${o.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(i.slideDuplicatePrevClass)
                    : s
                        .children(
                          `.${i.slideClass}.${
                            i.slideDuplicateClass
                          }[data-swiper-slide-index="${o.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(i.slideDuplicatePrevClass)),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t;
              let i = this,
                s = i.rtlTranslate ? i.translate : -i.translate,
                {
                  slidesGrid: a,
                  snapGrid: r,
                  params: l,
                  activeIndex: n,
                  realIndex: o,
                  snapIndex: d,
                } = i,
                p = e;
              if (void 0 === p) {
                for (let e = 0; e < a.length; e += 1)
                  void 0 !== a[e + 1]
                    ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
                      ? (p = e)
                      : s >= a[e] && s < a[e + 1] && (p = e + 1)
                    : s >= a[e] && (p = e);
                l.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
              }
              if (r.indexOf(s) >= 0) t = r.indexOf(s);
              else {
                let e = Math.min(l.slidesPerGroupSkip, p);
                t = e + Math.floor((p - e) / l.slidesPerGroup);
              }
              if ((t >= r.length && (t = r.length - 1), p === n)) {
                t !== d && ((i.snapIndex = t), i.emit("snapIndexChange"));
                return;
              }
              let c = parseInt(
                i.slides.eq(p).attr("data-swiper-slide-index") || p,
                10
              );
              Object.assign(i, {
                snapIndex: t,
                realIndex: c,
                previousIndex: n,
                activeIndex: p,
              }),
                i.emit("activeIndexChange"),
                i.emit("snapIndexChange"),
                o !== c && i.emit("realIndexChange"),
                (i.initialized || i.params.runCallbacksOnInit) &&
                  i.emit("slideChange");
            },
            updateClickedSlide: function (e) {
              let t;
              let i = this,
                s = i.params,
                a = m(e).closest(`.${s.slideClass}`)[0],
                r = !1;
              if (a) {
                for (let e = 0; e < i.slides.length; e += 1)
                  if (i.slides[e] === a) {
                    (r = !0), (t = e);
                    break;
                  }
              }
              if (a && r)
                (i.clickedSlide = a),
                  i.virtual && i.params.virtual.enabled
                    ? (i.clickedIndex = parseInt(
                        m(a).attr("data-swiper-slide-index"),
                        10
                      ))
                    : (i.clickedIndex = t);
              else {
                (i.clickedSlide = void 0), (i.clickedIndex = void 0);
                return;
              }
              s.slideToClickedSlide &&
                void 0 !== i.clickedIndex &&
                i.clickedIndex !== i.activeIndex &&
                i.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
              let {
                params: t,
                rtlTranslate: i,
                translate: s,
                $wrapperEl: a,
              } = this;
              if (t.virtualTranslate) return i ? -s : s;
              if (t.cssMode) return s;
              let r = (function (e, t = "x") {
                let i, s, a;
                let r = c(),
                  l = (function (e) {
                    let t;
                    let i = c();
                    return (
                      i.getComputedStyle && (t = i.getComputedStyle(e, null)),
                      !t && e.currentStyle && (t = e.currentStyle),
                      t || (t = e.style),
                      t
                    );
                  })(e, null);
                return (
                  r.WebKitCSSMatrix
                    ? ((s = l.transform || l.webkitTransform).split(",")
                        .length > 6 &&
                        (s = s
                          .split(", ")
                          .map((e) => e.replace(",", "."))
                          .join(", ")),
                      (a = new r.WebKitCSSMatrix("none" === s ? "" : s)))
                    : (i = (a =
                        l.MozTransform ||
                        l.OTransform ||
                        l.MsTransform ||
                        l.msTransform ||
                        l.transform ||
                        l
                          .getPropertyValue("transform")
                          .replace("translate(", "matrix(1, 0, 0, 1,"))
                        .toString()
                        .split(",")),
                  "x" === t &&
                    (s = r.WebKitCSSMatrix
                      ? a.m41
                      : 16 === i.length
                      ? parseFloat(i[12])
                      : parseFloat(i[4])),
                  "y" === t &&
                    (s = r.WebKitCSSMatrix
                      ? a.m42
                      : 16 === i.length
                      ? parseFloat(i[13])
                      : parseFloat(i[5])),
                  s || 0
                );
              })(a[0], e);
              return i && (r = -r), r || 0;
            },
            setTranslate: function (e, t) {
              let i = this,
                {
                  rtlTranslate: s,
                  params: a,
                  $wrapperEl: r,
                  wrapperEl: l,
                  progress: n,
                } = i,
                o = 0,
                d = 0;
              i.isHorizontal() ? (o = s ? -e : e) : (d = e),
                a.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
                a.cssMode
                  ? (l[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      i.isHorizontal() ? -o : -d)
                  : a.virtualTranslate ||
                    r.transform(`translate3d(${o}px, ${d}px, 0px)`),
                (i.previousTranslate = i.translate),
                (i.translate = i.isHorizontal() ? o : d);
              let p = i.maxTranslate() - i.minTranslate();
              (0 === p ? 0 : (e - i.minTranslate()) / p) !== n &&
                i.updateProgress(e),
                i.emit("setTranslate", i.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (
              e = 0,
              t = this.params.speed,
              i = !0,
              s = !0,
              a
            ) {
              let r;
              let l = this,
                { params: n, wrapperEl: o } = l;
              if (l.animating && n.preventInteractionOnTransition) return !1;
              let d = l.minTranslate(),
                p = l.maxTranslate();
              if (
                ((r = s && e > d ? d : s && e < p ? p : e),
                l.updateProgress(r),
                n.cssMode)
              ) {
                let e = l.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -r;
                else {
                  if (!l.support.smoothScroll)
                    return (
                      T({
                        swiper: l,
                        targetPosition: -r,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  o.scrollTo({ [e ? "left" : "top"]: -r, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (l.setTransition(0),
                    l.setTranslate(r),
                    i &&
                      (l.emit("beforeTransitionStart", t, a),
                      l.emit("transitionEnd")))
                  : (l.setTransition(t),
                    l.setTranslate(r),
                    i &&
                      (l.emit("beforeTransitionStart", t, a),
                      l.emit("transitionStart")),
                    l.animating ||
                      ((l.animating = !0),
                      l.onTranslateToWrapperTransitionEnd ||
                        (l.onTranslateToWrapperTransitionEnd = function (e) {
                          l &&
                            !l.destroyed &&
                            e.target === this &&
                            (l.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              l.onTranslateToWrapperTransitionEnd
                            ),
                            l.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              l.onTranslateToWrapperTransitionEnd
                            ),
                            (l.onTranslateToWrapperTransitionEnd = null),
                            delete l.onTranslateToWrapperTransitionEnd,
                            i && l.emit("transitionEnd"));
                        }),
                      l.$wrapperEl[0].addEventListener(
                        "transitionend",
                        l.onTranslateToWrapperTransitionEnd
                      ),
                      l.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        l.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode || this.$wrapperEl.transition(e),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
              let { params: i } = this;
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                P({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e = !0, t) {
              let i = this,
                { params: s } = i;
              (i.animating = !1),
                s.cssMode ||
                  (i.setTransition(0),
                  P({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: {
            slideTo: function (e = 0, t = this.params.speed, i = !0, s, a) {
              let r;
              if ("number" != typeof e && "string" != typeof e)
                throw Error(
                  `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
                );
              if ("string" == typeof e) {
                let t = parseInt(e, 10),
                  i = isFinite(t);
                if (!i)
                  throw Error(
                    `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                  );
                e = t;
              }
              let l = this,
                n = e;
              n < 0 && (n = 0);
              let {
                params: o,
                snapGrid: d,
                slidesGrid: p,
                previousIndex: c,
                activeIndex: u,
                rtlTranslate: h,
                wrapperEl: f,
                enabled: m,
              } = l;
              if (
                (l.animating && o.preventInteractionOnTransition) ||
                (!m && !s && !a)
              )
                return !1;
              let g = Math.min(l.params.slidesPerGroupSkip, n),
                v = g + Math.floor((n - g) / l.params.slidesPerGroup);
              v >= d.length && (v = d.length - 1);
              let b = -d[v];
              if (o.normalizeSlideIndex)
                for (let e = 0; e < p.length; e += 1) {
                  let t = -Math.floor(100 * b),
                    i = Math.floor(100 * p[e]),
                    s = Math.floor(100 * p[e + 1]);
                  void 0 !== p[e + 1]
                    ? t >= i && t < s - (s - i) / 2
                      ? (n = e)
                      : t >= i && t < s && (n = e + 1)
                    : t >= i && (n = e);
                }
              if (
                l.initialized &&
                n !== u &&
                ((!l.allowSlideNext &&
                  b < l.translate &&
                  b < l.minTranslate()) ||
                  (!l.allowSlidePrev &&
                    b > l.translate &&
                    b > l.maxTranslate() &&
                    (u || 0) !== n))
              )
                return !1;
              if (
                (n !== (c || 0) && i && l.emit("beforeSlideChangeStart"),
                l.updateProgress(b),
                (r = n > u ? "next" : n < u ? "prev" : "reset"),
                (h && -b === l.translate) || (!h && b === l.translate))
              )
                return (
                  l.updateActiveIndex(n),
                  o.autoHeight && l.updateAutoHeight(),
                  l.updateSlidesClasses(),
                  "slide" !== o.effect && l.setTranslate(b),
                  "reset" !== r &&
                    (l.transitionStart(i, r), l.transitionEnd(i, r)),
                  !1
                );
              if (o.cssMode) {
                let e = l.isHorizontal(),
                  i = h ? b : -b;
                if (0 === t) {
                  let t = l.virtual && l.params.virtual.enabled;
                  t &&
                    ((l.wrapperEl.style.scrollSnapType = "none"),
                    (l._immediateVirtual = !0)),
                    (f[e ? "scrollLeft" : "scrollTop"] = i),
                    t &&
                      requestAnimationFrame(() => {
                        (l.wrapperEl.style.scrollSnapType = ""),
                          (l._swiperImmediateVirtual = !1);
                      });
                } else {
                  if (!l.support.smoothScroll)
                    return (
                      T({
                        swiper: l,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  f.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
                }
                return !0;
              }
              return (
                l.setTransition(t),
                l.setTranslate(b),
                l.updateActiveIndex(n),
                l.updateSlidesClasses(),
                l.emit("beforeTransitionStart", t, s),
                l.transitionStart(i, r),
                0 === t
                  ? l.transitionEnd(i, r)
                  : l.animating ||
                    ((l.animating = !0),
                    l.onSlideToWrapperTransitionEnd ||
                      (l.onSlideToWrapperTransitionEnd = function (e) {
                        l &&
                          !l.destroyed &&
                          e.target === this &&
                          (l.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            l.onSlideToWrapperTransitionEnd
                          ),
                          l.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            l.onSlideToWrapperTransitionEnd
                          ),
                          (l.onSlideToWrapperTransitionEnd = null),
                          delete l.onSlideToWrapperTransitionEnd,
                          l.transitionEnd(i, r));
                      }),
                    l.$wrapperEl[0].addEventListener(
                      "transitionend",
                      l.onSlideToWrapperTransitionEnd
                    ),
                    l.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      l.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e = 0, t = this.params.speed, i = !0, s) {
              if ("string" == typeof e) {
                let t = parseInt(e, 10),
                  i = isFinite(t);
                if (!i)
                  throw Error(
                    `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                  );
                e = t;
              }
              let a = e;
              return (
                this.params.loop && (a += this.loopedSlides),
                this.slideTo(a, t, i, s)
              );
            },
            slideNext: function (e = this.params.speed, t = !0, i) {
              let s = this,
                { animating: a, enabled: r, params: l } = s;
              if (!r) return s;
              let n = l.slidesPerGroup;
              "auto" === l.slidesPerView &&
                1 === l.slidesPerGroup &&
                l.slidesPerGroupAuto &&
                (n = Math.max(s.slidesPerViewDynamic("current", !0), 1));
              let o = s.activeIndex < l.slidesPerGroupSkip ? 1 : n;
              if (l.loop) {
                if (a && l.loopPreventsSlide) return !1;
                s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
              }
              return l.rewind && s.isEnd
                ? s.slideTo(0, e, t, i)
                : s.slideTo(s.activeIndex + o, e, t, i);
            },
            slidePrev: function (e = this.params.speed, t = !0, i) {
              let s = this,
                {
                  params: a,
                  animating: r,
                  snapGrid: l,
                  slidesGrid: n,
                  rtlTranslate: o,
                  enabled: d,
                } = s;
              if (!d) return s;
              if (a.loop) {
                if (r && a.loopPreventsSlide) return !1;
                s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
              }
              let p = o ? s.translate : -s.translate;
              function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let u = c(p),
                h = l.map((e) => c(e)),
                f = l[h.indexOf(u) - 1];
              if (void 0 === f && a.cssMode) {
                let e;
                l.forEach((t, i) => {
                  u >= t && (e = i);
                }),
                  void 0 !== e && (f = l[e > 0 ? e - 1 : e]);
              }
              let m = 0;
              if (
                (void 0 !== f &&
                  ((m = n.indexOf(f)) < 0 && (m = s.activeIndex - 1),
                  "auto" === a.slidesPerView &&
                    1 === a.slidesPerGroup &&
                    a.slidesPerGroupAuto &&
                    (m = Math.max(
                      (m = m - s.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                a.rewind && s.isBeginning)
              ) {
                let a =
                  s.params.virtual && s.params.virtual.enabled && s.virtual
                    ? s.virtual.slides.length - 1
                    : s.slides.length - 1;
                return s.slideTo(a, e, t, i);
              }
              return s.slideTo(m, e, t, i);
            },
            slideReset: function (e = this.params.speed, t = !0, i) {
              return this.slideTo(this.activeIndex, e, t, i);
            },
            slideToClosest: function (
              e = this.params.speed,
              t = !0,
              i,
              s = 0.5
            ) {
              let a = this.activeIndex,
                r = Math.min(this.params.slidesPerGroupSkip, a),
                l = r + Math.floor((a - r) / this.params.slidesPerGroup),
                n = this.rtlTranslate ? this.translate : -this.translate;
              if (n >= this.snapGrid[l]) {
                let e = this.snapGrid[l],
                  t = this.snapGrid[l + 1];
                n - e > (t - e) * s && (a += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[l - 1],
                  t = this.snapGrid[l];
                n - e <= (t - e) * s && (a -= this.params.slidesPerGroup);
              }
              return (
                (a = Math.min(
                  (a = Math.max(a, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(a, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this,
                { params: i, $wrapperEl: s } = t,
                a =
                  "auto" === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                r = t.clickedIndex;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  m(t.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                  i.centeredSlides
                    ? r < t.loopedSlides - a / 2 ||
                      r > t.slides.length - t.loopedSlides + a / 2
                      ? (t.loopFix(),
                        (r = s
                          .children(
                            `.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`
                          )
                          .eq(0)
                          .index()),
                        w(() => {
                          t.slideTo(r);
                        }))
                      : t.slideTo(r)
                    : r > t.slides.length - a
                    ? (t.loopFix(),
                      (r = s
                        .children(
                          `.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      w(() => {
                        t.slideTo(r);
                      }))
                    : t.slideTo(r);
              } else t.slideTo(r);
            },
          },
          loop: {
            loopCreate: function () {
              let e = this,
                t = d(),
                { params: i, $wrapperEl: s } = e,
                a = s.children().length > 0 ? m(s.children()[0].parentNode) : s;
              a.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
              let r = a.children(`.${i.slideClass}`);
              if (i.loopFillGroupWithBlank) {
                let e = i.slidesPerGroup - (r.length % i.slidesPerGroup);
                if (e !== i.slidesPerGroup) {
                  for (let s = 0; s < e; s += 1) {
                    let e = m(t.createElement("div")).addClass(
                      `${i.slideClass} ${i.slideBlankClass}`
                    );
                    a.append(e);
                  }
                  r = a.children(`.${i.slideClass}`);
                }
              }
              "auto" !== i.slidesPerView ||
                i.loopedSlides ||
                (i.loopedSlides = r.length),
                (e.loopedSlides = Math.ceil(
                  parseFloat(i.loopedSlides || i.slidesPerView, 10)
                )),
                (e.loopedSlides += i.loopAdditionalSlides),
                e.loopedSlides > r.length &&
                  e.params.loopedSlidesLimit &&
                  (e.loopedSlides = r.length);
              let l = [],
                n = [];
              r.each((e, t) => {
                let i = m(e);
                i.attr("data-swiper-slide-index", t);
              });
              for (let t = 0; t < e.loopedSlides; t += 1) {
                let e = t - Math.floor(t / r.length) * r.length;
                n.push(r.eq(e)[0]), l.unshift(r.eq(r.length - e - 1)[0]);
              }
              for (let e = 0; e < n.length; e += 1)
                a.append(m(n[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
              for (let e = l.length - 1; e >= 0; e -= 1)
                a.prepend(
                  m(l[e].cloneNode(!0)).addClass(i.slideDuplicateClass)
                );
            },
            loopFix: function () {
              let e;
              let t = this;
              t.emit("beforeLoopFix");
              let {
                activeIndex: i,
                slides: s,
                loopedSlides: a,
                allowSlidePrev: r,
                allowSlideNext: l,
                snapGrid: n,
                rtlTranslate: o,
              } = t;
              (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
              let d = -n[i],
                p = d - t.getTranslate();
              if (i < a) {
                e = s.length - 3 * a + i + a;
                let r = t.slideTo(e, 0, !1, !0);
                r &&
                  0 !== p &&
                  t.setTranslate((o ? -t.translate : t.translate) - p);
              } else if (i >= s.length - a) {
                e = -s.length + i + a + a;
                let r = t.slideTo(e, 0, !1, !0);
                r &&
                  0 !== p &&
                  t.setTranslate((o ? -t.translate : t.translate) - p);
              }
              (t.allowSlidePrev = r), (t.allowSlideNext = l), t.emit("loopFix");
            },
            loopDestroy: function () {
              let { $wrapperEl: e, params: t, slides: i } = this;
              e
                .children(
                  `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
                )
                .remove(),
                i.removeAttr("data-swiper-slide-index");
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              if (
                this.support.touch ||
                !this.params.simulateTouch ||
                (this.params.watchOverflow && this.isLocked) ||
                this.params.cssMode
              )
                return;
              let t =
                "container" === this.params.touchEventsTarget
                  ? this.el
                  : this.wrapperEl;
              (t.style.cursor = "move"),
                (t.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              let e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: {
            attachEvents: function () {
              let e = this,
                t = d(),
                { params: i, support: s } = e;
              (e.onTouchStart = k.bind(e)),
                (e.onTouchMove = M.bind(e)),
                (e.onTouchEnd = $.bind(e)),
                i.cssMode && (e.onScroll = _.bind(e)),
                (e.onClick = L.bind(e)),
                s.touch &&
                  !A &&
                  (t.addEventListener("touchstart", I), (A = !0)),
                z(e, "on");
            },
            detachEvents: function () {
              z(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                {
                  activeIndex: t,
                  initialized: i,
                  loopedSlides: s = 0,
                  params: a,
                  $el: r,
                } = e,
                l = a.breakpoints;
              if (!l || (l && 0 === Object.keys(l).length)) return;
              let n = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
              if (!n || e.currentBreakpoint === n) return;
              let o = n in l ? l[n] : void 0,
                d = o || e.originalParams,
                p = D(e, a),
                c = D(e, d),
                u = a.enabled;
              p && !c
                ? (r.removeClass(
                    `${a.containerModifierClass}grid ${a.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !p &&
                  c &&
                  (r.addClass(`${a.containerModifierClass}grid`),
                  ((d.grid.fill && "column" === d.grid.fill) ||
                    (!d.grid.fill && "column" === a.grid.fill)) &&
                    r.addClass(`${a.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  let i = a[t] && a[t].enabled,
                    s = d[t] && d[t].enabled;
                  i && !s && e[t].disable(), !i && s && e[t].enable();
                });
              let h = d.direction && d.direction !== a.direction,
                f = a.loop && (d.slidesPerView !== a.slidesPerView || h);
              h && i && e.changeDirection(), S(e.params, d);
              let m = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                u && !m ? e.disable() : !u && m && e.enable(),
                (e.currentBreakpoint = n),
                e.emit("_beforeBreakpoint", d),
                f &&
                  i &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - s + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", d);
            },
            getBreakpoint: function (e, t = "window", i) {
              if (!e || ("container" === t && !i)) return;
              let s = !1,
                a = c(),
                r = "window" === t ? a.innerHeight : i.clientHeight,
                l = Object.keys(e).map((e) => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    let t = parseFloat(e.substr(1));
                    return { value: r * t, point: e };
                  }
                  return { value: e, point: e };
                });
              l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < l.length; e += 1) {
                let { point: r, value: n } = l[e];
                "window" === t
                  ? a.matchMedia(`(min-width: ${n}px)`).matches && (s = r)
                  : n <= i.clientWidth && (s = r);
              }
              return s || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let e = this,
                { isLocked: t, params: i } = e,
                { slidesOffsetBefore: s } = i;
              if (s) {
                let t = e.slides.length - 1,
                  i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let {
                  classNames: e,
                  params: t,
                  rtl: i,
                  $el: s,
                  device: a,
                  support: r,
                } = this,
                l = (function (e, t) {
                  let i = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((s) => {
                            e[s] && i.push(t + s);
                          })
                        : "string" == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "pointer-events": !r.touch },
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: a.android },
                    { ios: a.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...l),
                s.addClass([...e].join(" ")),
                this.emitContainerClasses();
            },
            removeClasses: function () {
              let { $el: e, classNames: t } = this;
              e.removeClass(t.join(" ")), this.emitContainerClasses();
            },
          },
          images: {
            loadImage: function (e, t, i, s, a, r) {
              let l;
              let n = c();
              function o() {
                r && r();
              }
              let d = m(e).parent("picture")[0];
              d || (e.complete && a)
                ? o()
                : t
                ? (((l = new n.Image()).onload = o),
                  (l.onerror = o),
                  s && (l.sizes = s),
                  i && (l.srcset = i),
                  t && (l.src = t))
                : o();
            },
            preloadImages: function () {
              let e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                let s = e.imagesToLoad[i];
                e.loadImage(
                  s,
                  s.currentSrc || s.getAttribute("src"),
                  s.srcset || s.getAttribute("srcset"),
                  s.sizes || s.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        G = {};
      class j {
        constructor(...e) {
          let t, i;
          if (
            (1 === e.length &&
            e[0].constructor &&
            "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
              ? (i = e[0])
              : ([t, i] = e),
            i || (i = {}),
            (i = S({}, i)),
            t && !i.el && (i.el = t),
            i.el && m(i.el).length > 1)
          ) {
            let e = [];
            return (
              m(i.el).each((t) => {
                let s = S({}, i, { el: t });
                e.push(new j(s));
              }),
              e
            );
          }
          let s = this;
          (s.__swiper__ = !0),
            (s.support = E()),
            (s.device = (function (e = {}) {
              return (
                a ||
                  (a = (function ({ userAgent: e } = {}) {
                    let t = E(),
                      i = c(),
                      s = i.navigator.platform,
                      a = e || i.navigator.userAgent,
                      r = { ios: !1, android: !1 },
                      l = i.screen.width,
                      n = i.screen.height,
                      o = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                      d = a.match(/(iPad).*OS\s([\d_]+)/),
                      p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                      u = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                      h = "MacIntel" === s;
                    return (
                      !d &&
                        h &&
                        t.touch &&
                        [
                          "1024x1366",
                          "1366x1024",
                          "834x1194",
                          "1194x834",
                          "834x1112",
                          "1112x834",
                          "768x1024",
                          "1024x768",
                          "820x1180",
                          "1180x820",
                          "810x1080",
                          "1080x810",
                        ].indexOf(`${l}x${n}`) >= 0 &&
                        ((d = a.match(/(Version)\/([\d.]+)/)) ||
                          (d = [0, 1, "13_0_0"]),
                        (h = !1)),
                      o &&
                        "Win32" !== s &&
                        ((r.os = "android"), (r.android = !0)),
                      (d || u || p) && ((r.os = "ios"), (r.ios = !0)),
                      r
                    );
                  })(e)),
                a
              );
            })({ userAgent: i.userAgent })),
            (s.browser =
              (r ||
                (r = (function () {
                  let e = c();
                  return {
                    isSafari: (function () {
                      let t = e.navigator.userAgent.toLowerCase();
                      return (
                        t.indexOf("safari") >= 0 &&
                        0 > t.indexOf("chrome") &&
                        0 > t.indexOf("android")
                      );
                    })(),
                    isWebView:
                      /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                        e.navigator.userAgent
                      ),
                  };
                })()),
              r)),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            i.modules &&
              Array.isArray(i.modules) &&
              s.modules.push(...i.modules);
          let l = {};
          s.modules.forEach((e) => {
            var t;
            e({
              swiper: s,
              extendParams:
                ((t = i),
                function (e = {}) {
                  let i = Object.keys(e)[0],
                    s = e[i];
                  if (
                    "object" != typeof s ||
                    null === s ||
                    (["navigation", "pagination", "scrollbar"].indexOf(i) >=
                      0 &&
                      !0 === t[i] &&
                      (t[i] = { auto: !0 }),
                    !(i in t && "enabled" in s))
                  ) {
                    S(l, e);
                    return;
                  }
                  !0 === t[i] && (t[i] = { enabled: !0 }),
                    "object" != typeof t[i] ||
                      "enabled" in t[i] ||
                      (t[i].enabled = !0),
                    t[i] || (t[i] = { enabled: !1 }),
                    S(l, e);
                }),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s),
            });
          });
          let n = S({}, N, l);
          return (
            (s.params = S({}, n, G, i)),
            (s.originalParams = S({}, s.params)),
            (s.passedParams = S({}, i)),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((e) => {
                s.on(e, s.params.on[e]);
              }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            (s.$ = m),
            Object.assign(s, {
              enabled: s.params.enabled,
              el: t,
              classNames: [],
              slides: m(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === s.params.direction,
              isVertical: () => "vertical" === s.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents:
                ((s.touchEventsTouch = {
                  start: "touchstart",
                  move: "touchmove",
                  end: "touchend",
                  cancel: "touchcancel",
                }),
                (s.touchEventsDesktop = {
                  start: "pointerdown",
                  move: "pointermove",
                  end: "pointerup",
                }),
                s.support.touch || !s.params.simulateTouch
                  ? s.touchEventsTouch
                  : s.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: s.params.focusableElements,
                lastClickTime: C(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
          );
        }
        enable() {
          let e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          let e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let i = this.minTranslate(),
            s = this.maxTranslate(),
            a = (s - i) * e + i;
          this.translateTo(a, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.each((i) => {
            let s = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e = "current", t = !1) {
          let {
              params: i,
              slides: s,
              slidesGrid: a,
              slidesSizesGrid: r,
              size: l,
              activeIndex: n,
            } = this,
            o = 1;
          if (i.centeredSlides) {
            let e,
              t = s[n].swiperSlideSize;
            for (let i = n + 1; i < s.length; i += 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (o += 1), t > l && (e = !0));
            for (let i = n - 1; i >= 0; i -= 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (o += 1), t > l && (e = !0));
          } else if ("current" === e)
            for (let e = n + 1; e < s.length; e += 1) {
              let i = t ? a[e] + r[e] - a[n] < l : a[e] - a[n] < l;
              i && (o += 1);
            }
          else
            for (let e = n - 1; e >= 0; e -= 1) {
              let t = a[n] - a[e] < l;
              t && (o += 1);
            }
          return o;
        }
        update() {
          let e = this;
          if (!e || e.destroyed) return;
          let { snapGrid: t, params: i } = e;
          function s() {
            let t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          i.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (s(), e.params.autoHeight && e.updateAutoHeight())
              : (("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          let i = this,
            s = i.params.direction;
          return (
            e || (e = "horizontal" === s ? "vertical" : "horizontal"),
            e === s ||
              ("horizontal" !== e && "vertical" !== e) ||
              (i.$el
                .removeClass(`${i.params.containerModifierClass}${s}`)
                .addClass(`${i.params.containerModifierClass}${e}`),
              i.emitContainerClasses(),
              (i.params.direction = e),
              i.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              i.emit("changeDirection"),
              t && i.update()),
            i
          );
        }
        changeLanguageDirection(e) {
          let t = this;
          (!t.rtl || "rtl" !== e) &&
            (t.rtl || "ltr" !== e) &&
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let i = m(e || t.params.el);
          if (!(e = i[0])) return !1;
          e.swiper = t;
          let s = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            a = (() => {
              if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                let t = m(e.shadowRoot.querySelector(s()));
                return (t.children = (e) => i.children(e)), t;
              }
              return i.children ? i.children(s()) : m(i).children(s());
            })();
          if (0 === a.length && t.params.createElements) {
            let e = d(),
              s = e.createElement("div");
            (a = m(s)),
              (s.className = t.params.wrapperClass),
              i.append(s),
              i.children(`.${t.params.slideClass}`).each((e) => {
                a.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: i,
              el: e,
              $wrapperEl: a,
              wrapperEl: a[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
              wrongRTL: "-webkit-box" === a.css("display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized) return t;
          let i = t.mount(e);
          return (
            !1 === i ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e = !0, t = !0) {
          let i = this,
            { params: s, $el: a, $wrapperEl: r, slides: l } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                a.removeAttr("style"),
                r.removeAttr("style"),
                l &&
                  l.length &&
                  l
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                (function (e) {
                  let t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          S(G, e);
        }
        static get extendedDefaults() {
          return G;
        }
        static get defaults() {
          return N;
        }
        static installModule(e) {
          j.prototype.__modules__ || (j.prototype.__modules__ = []);
          let t = j.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => j.installModule(e)), j)
            : (j.installModule(e), j);
        }
      }
      Object.keys(B).forEach((e) => {
        Object.keys(B[e]).forEach((t) => {
          j.prototype[t] = B[e][t];
        });
      }),
        j.use([
          function ({ swiper: e, on: t, emit: i }) {
            let s = c(),
              a = null,
              r = null,
              l = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              n = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (a = new ResizeObserver((t) => {
                    r = s.requestAnimationFrame(() => {
                      let { width: i, height: s } = e,
                        a = i,
                        r = s;
                      t.forEach(
                        ({ contentBoxSize: t, contentRect: i, target: s }) => {
                          (s && s !== e.el) ||
                            ((a = i ? i.width : (t[0] || t).inlineSize),
                            (r = i ? i.height : (t[0] || t).blockSize));
                        }
                      ),
                        (a !== i || r !== s) && l();
                    });
                  })).observe(e.el);
              },
              o = () => {
                r && s.cancelAnimationFrame(r),
                  a && a.unobserve && e.el && (a.unobserve(e.el), (a = null));
              },
              d = () => {
                e && !e.destroyed && e.initialized && i("orientationchange");
              };
            t("init", () => {
              if (e.params.resizeObserver && void 0 !== s.ResizeObserver) {
                n();
                return;
              }
              s.addEventListener("resize", l),
                s.addEventListener("orientationchange", d);
            }),
              t("destroy", () => {
                o(),
                  s.removeEventListener("resize", l),
                  s.removeEventListener("orientationchange", d);
              });
          },
          function ({ swiper: e, extendParams: t, on: i, emit: s }) {
            let a = [],
              r = c(),
              l = (e, t = {}) => {
                let i = r.MutationObserver || r.WebkitMutationObserver,
                  l = new i((e) => {
                    if (1 === e.length) {
                      s("observerUpdate", e[0]);
                      return;
                    }
                    let t = function () {
                      s("observerUpdate", e[0]);
                    };
                    r.requestAnimationFrame
                      ? r.requestAnimationFrame(t)
                      : r.setTimeout(t, 0);
                  });
                l.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  a.push(l);
              },
              n = () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    let t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) l(t[e]);
                  }
                  l(e.$el[0], { childList: e.params.observeSlideChildren }),
                    l(e.$wrapperEl[0], { attributes: !1 });
                }
              },
              o = () => {
                a.forEach((e) => {
                  e.disconnect();
                }),
                  a.splice(0, a.length);
              };
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", n),
              i("destroy", o);
          },
        ]);
      var F = j;
      function H(e, t, i, s) {
        let a = d();
        return (
          e.params.createElements &&
            Object.keys(s).forEach((r) => {
              if (!i[r] && !0 === i.auto) {
                let l = e.$el.children(`.${s[r]}`)[0];
                l ||
                  (((l = a.createElement("div")).className = s[r]),
                  e.$el.append(l)),
                  (i[r] = l),
                  (t[r] = l);
              }
            }),
          i
        );
      }
      function V({ swiper: e, extendParams: t, on: i, emit: s }) {
        function a(t) {
          let i;
          return (
            t &&
              ((i = m(t)),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                i.length > 1 &&
                1 === e.$el.find(t).length &&
                (i = e.$el.find(t))),
            i
          );
        }
        function r(t, i) {
          let s = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[i ? "addClass" : "removeClass"](s.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? "addClass" : "removeClass"](s.lockClass));
        }
        function l() {
          if (e.params.loop) return;
          let { $nextEl: t, $prevEl: i } = e.navigation;
          r(i, e.isBeginning && !e.params.rewind),
            r(t, e.isEnd && !e.params.rewind);
        }
        function n(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              (e.slidePrev(), s("navigationPrev"));
        }
        function o(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) &&
              (e.slideNext(), s("navigationNext"));
        }
        function d() {
          let t = e.params.navigation;
          if (
            ((e.params.navigation = H(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !(t.nextEl || t.prevEl))
          )
            return;
          let i = a(t.nextEl),
            s = a(t.prevEl);
          i && i.length > 0 && i.on("click", o),
            s && s.length > 0 && s.on("click", n),
            Object.assign(e.navigation, {
              $nextEl: i,
              nextEl: i && i[0],
              $prevEl: s,
              prevEl: s && s[0],
            }),
            !e.enabled &&
              (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass));
        }
        function p() {
          let { $nextEl: t, $prevEl: i } = e.navigation;
          t &&
            t.length &&
            (t.off("click", o),
            t.removeClass(e.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off("click", n),
              i.removeClass(e.params.navigation.disabledClass));
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          i("init", () => {
            !1 === e.params.navigation.enabled ? u() : (d(), l());
          }),
          i("toEdge fromEdge lock unlock", () => {
            l();
          }),
          i("destroy", () => {
            p();
          }),
          i("enable disable", () => {
            let { $nextEl: t, $prevEl: i } = e.navigation;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              i &&
                i[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          }),
          i("click", (t, i) => {
            let { $nextEl: a, $prevEl: r } = e.navigation,
              l = i.target;
            if (e.params.navigation.hideOnClick && !m(l).is(r) && !m(l).is(a)) {
              let t;
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === l || e.pagination.el.contains(l))
              )
                return;
              a
                ? (t = a.hasClass(e.params.navigation.hiddenClass))
                : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                !0 === t ? s("navigationShow") : s("navigationHide"),
                a && a.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass);
            }
          });
        let c = () => {
            e.$el.removeClass(e.params.navigation.navigationDisabledClass),
              d(),
              l();
          },
          u = () => {
            e.$el.addClass(e.params.navigation.navigationDisabledClass), p();
          };
        Object.assign(e.navigation, {
          enable: c,
          disable: u,
          update: l,
          init: d,
          destroy: p,
        });
      }
      function q(e = "") {
        return `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`;
      }
      function R({ swiper: e, extendParams: t, on: i, emit: s }) {
        let a;
        let r = "swiper-pagination";
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let l = 0;
        function n() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function o(t, i) {
          let { bulletActiveClass: s } = e.params.pagination;
          t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`);
        }
        function d() {
          let t;
          let i = e.rtl,
            r = e.params.pagination;
          if (n()) return;
          let d =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            p = e.pagination.$el,
            c = e.params.loop
              ? Math.ceil((d - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((t = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )) >
                  d - 1 - 2 * e.loopedSlides && (t -= d - 2 * e.loopedSlides),
                t > c - 1 && (t -= c),
                t < 0 && "bullets" !== e.params.paginationType && (t = c + t))
              : (t = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === r.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            let s, n, d;
            let c = e.pagination.bullets;
            if (
              (r.dynamicBullets &&
                ((a = c
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                p.css(
                  e.isHorizontal() ? "width" : "height",
                  `${a * (r.dynamicMainBullets + 4)}px`
                ),
                r.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((l += t - (e.previousIndex - e.loopedSlides || 0)) >
                  r.dynamicMainBullets - 1
                    ? (l = r.dynamicMainBullets - 1)
                    : l < 0 && (l = 0)),
                (d =
                  ((n =
                    (s = Math.max(t - l, 0)) +
                    (Math.min(c.length, r.dynamicMainBullets) - 1)) +
                    s) /
                  2)),
              c.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${r.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              p.length > 1)
            )
              c.each((e) => {
                let i = m(e),
                  a = i.index();
                a === t && i.addClass(r.bulletActiveClass),
                  r.dynamicBullets &&
                    (a >= s &&
                      a <= n &&
                      i.addClass(`${r.bulletActiveClass}-main`),
                    a === s && o(i, "prev"),
                    a === n && o(i, "next"));
              });
            else {
              let i = c.eq(t),
                a = i.index();
              if ((i.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                let t = c.eq(s),
                  i = c.eq(n);
                for (let e = s; e <= n; e += 1)
                  c.eq(e).addClass(`${r.bulletActiveClass}-main`);
                if (e.params.loop) {
                  if (a >= c.length) {
                    for (let e = r.dynamicMainBullets; e >= 0; e -= 1)
                      c.eq(c.length - e).addClass(
                        `${r.bulletActiveClass}-main`
                      );
                    c.eq(c.length - r.dynamicMainBullets - 1).addClass(
                      `${r.bulletActiveClass}-prev`
                    );
                  } else o(t, "prev"), o(i, "next");
                } else o(t, "prev"), o(i, "next");
              }
            }
            if (r.dynamicBullets) {
              let t = Math.min(c.length, r.dynamicMainBullets + 4),
                s = (a * t - a) / 2 - d * a;
              c.css(
                e.isHorizontal() ? (i ? "right" : "left") : "top",
                `${s}px`
              );
            }
          }
          if (
            ("fraction" === r.type &&
              (p.find(q(r.currentClass)).text(r.formatFractionCurrent(t + 1)),
              p.find(q(r.totalClass)).text(r.formatFractionTotal(c))),
            "progressbar" === r.type)
          ) {
            let i;
            i = r.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            let s = (t + 1) / c,
              a = 1,
              l = 1;
            "horizontal" === i ? (a = s) : (l = s),
              p
                .find(q(r.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${a}) scaleY(${l})`)
                .transition(e.params.speed);
          }
          "custom" === r.type && r.renderCustom
            ? (p.html(r.renderCustom(e, t + 1, c)), s("paginationRender", p[0]))
            : s("paginationUpdate", p[0]),
            e.params.watchOverflow &&
              e.enabled &&
              p[e.isLocked ? "addClass" : "removeClass"](r.lockClass);
        }
        function p() {
          let t = e.params.pagination;
          if (n()) return;
          let i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            a = e.pagination.$el,
            r = "";
          if ("bullets" === t.type) {
            let s = e.params.loop
              ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              s > i &&
              (s = i);
            for (let i = 0; i < s; i += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, i, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            a.html(r), (e.pagination.bullets = a.find(q(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            a.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              a.html(r)),
            "custom" !== t.type && s("paginationRender", e.pagination.$el[0]);
        }
        function c() {
          e.params.pagination = H(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
          );
          let t = e.params.pagination;
          if (!t.el) return;
          let i = m(t.el);
          0 === i.length ||
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              i.length > 1 &&
              (i = e.$el.find(t.el)).length > 1 &&
              (i = i.filter((t) => m(t).parents(".swiper")[0] === e.el)),
            "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (l = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              i.addClass(t.progressbarOppositeClass),
            t.clickable &&
              i.on("click", q(t.bulletClass), function (t) {
                t.preventDefault();
                let i = m(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
              }),
            Object.assign(e.pagination, { $el: i, el: i[0] }),
            e.enabled || i.addClass(t.lockClass));
        }
        function u() {
          let t = e.params.pagination;
          if (n()) return;
          let i = e.pagination.$el;
          i.removeClass(t.hiddenClass),
            i.removeClass(t.modifierClass + t.type),
            i.removeClass(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            ),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && i.off("click", q(t.bulletClass));
        }
        i("init", () => {
          !1 === e.params.pagination.enabled ? f() : (c(), p(), d());
        }),
          i("activeIndexChange", () => {
            e.params.loop ? d() : void 0 === e.snapIndex && d();
          }),
          i("snapIndexChange", () => {
            e.params.loop || d();
          }),
          i("slidesLengthChange", () => {
            e.params.loop && (p(), d());
          }),
          i("snapGridLengthChange", () => {
            e.params.loop || (p(), d());
          }),
          i("destroy", () => {
            u();
          }),
          i("enable disable", () => {
            let { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          i("lock unlock", () => {
            d();
          }),
          i("click", (t, i) => {
            let a = i.target,
              { $el: r } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !m(a).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                  (e.navigation.prevEl && a === e.navigation.prevEl))
              )
                return;
              let t = r.hasClass(e.params.pagination.hiddenClass);
              !0 === t ? s("paginationShow") : s("paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass);
            }
          });
        let h = () => {
            e.$el.removeClass(e.params.pagination.paginationDisabledClass),
              e.pagination.$el &&
                e.pagination.$el.removeClass(
                  e.params.pagination.paginationDisabledClass
                ),
              c(),
              p(),
              d();
          },
          f = () => {
            e.$el.addClass(e.params.pagination.paginationDisabledClass),
              e.pagination.$el &&
                e.pagination.$el.addClass(
                  e.params.pagination.paginationDisabledClass
                ),
              u();
          };
        Object.assign(e.pagination, {
          enable: h,
          disable: f,
          render: p,
          update: d,
          init: c,
          destroy: u,
        });
      }
      function W({ swiper: e, extendParams: t, on: i }) {
        t({ parallax: { enabled: !1 } });
        let s = (t, i) => {
            let { rtl: s } = e,
              a = m(t),
              r = s ? -1 : 1,
              l = a.attr("data-swiper-parallax") || "0",
              n = a.attr("data-swiper-parallax-x"),
              o = a.attr("data-swiper-parallax-y"),
              d = a.attr("data-swiper-parallax-scale"),
              p = a.attr("data-swiper-parallax-opacity");
            n || o
              ? ((n = n || "0"), (o = o || "0"))
              : e.isHorizontal()
              ? ((n = l), (o = "0"))
              : ((o = l), (n = "0")),
              (n =
                n.indexOf("%") >= 0
                  ? `${parseInt(n, 10) * i * r}%`
                  : `${n * i * r}px`),
              (o =
                o.indexOf("%") >= 0 ? `${parseInt(o, 10) * i}%` : `${o * i}px`),
              null != p &&
                (a[0].style.opacity = p - (p - 1) * (1 - Math.abs(i))),
              null == d
                ? a.transform(`translate3d(${n}, ${o}, 0px)`)
                : a.transform(
                    `translate3d(${n}, ${o}, 0px) scale(${
                      d - (d - 1) * (1 - Math.abs(i))
                    })`
                  );
          },
          a = () => {
            let { $el: t, slides: i, progress: a, snapGrid: r } = e;
            t
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each((e) => {
                s(e, a);
              }),
              i.each((t, i) => {
                let l = t.progress;
                e.params.slidesPerGroup > 1 &&
                  "auto" !== e.params.slidesPerView &&
                  (l += Math.ceil(i / 2) - a * (r.length - 1)),
                  (l = Math.min(Math.max(l, -1), 1)),
                  m(t)
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each((e) => {
                      s(e, l);
                    });
              });
          },
          r = (t = e.params.speed) => {
            let { $el: i } = e;
            i.find(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            ).each((e) => {
              let i = m(e),
                s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
              0 === t && (s = 0), i.transition(s);
            });
          };
        i("beforeInit", () => {
          e.params.parallax.enabled &&
            ((e.params.watchSlidesProgress = !0),
            (e.originalParams.watchSlidesProgress = !0));
        }),
          i("init", () => {
            e.params.parallax.enabled && a();
          }),
          i("setTranslate", () => {
            e.params.parallax.enabled && a();
          }),
          i("setTransition", (t, i) => {
            e.params.parallax.enabled && r(i);
          });
      }
      function X({ swiper: e, extendParams: t, on: i }) {
        function s(e, t) {
          let i, s, a, r, l;
          let n = (e, t) => {
            for (r = -1, a = e.length; a - r > 1; )
              e[(l = (a + r) >> 1)] <= t ? (r = l) : (a = l);
            return a;
          };
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((i = (s = n(this.x, e)) - 1),
                  ((e - this.x[i]) * (this.y[s] - this.y[i])) /
                    (this.x[s] - this.x[i]) +
                    this.y[i])
                : 0;
            }),
            this
          );
        }
        function a() {
          e.controller.control &&
            e.controller.spline &&
            ((e.controller.spline = void 0), delete e.controller.spline);
        }
        t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
          (e.controller = { control: void 0 }),
          i("beforeInit", () => {
            e.controller.control = e.params.controller.control;
          }),
          i("update", () => {
            a();
          }),
          i("resize", () => {
            a();
          }),
          i("observerUpdate", () => {
            a();
          }),
          i("setTranslate", (t, i, s) => {
            e.controller.control && e.controller.setTranslate(i, s);
          }),
          i("setTransition", (t, i, s) => {
            e.controller.control && e.controller.setTransition(i, s);
          }),
          Object.assign(e.controller, {
            setTranslate: function (t, i) {
              let a, r;
              let l = e.controller.control,
                n = e.constructor;
              function o(t) {
                let i = e.rtlTranslate ? -e.translate : e.translate;
                "slide" === e.params.controller.by &&
                  (e.controller.spline ||
                    (e.controller.spline = e.params.loop
                      ? new s(e.slidesGrid, t.slidesGrid)
                      : new s(e.snapGrid, t.snapGrid)),
                  (r = -e.controller.spline.interpolate(-i))),
                  (r && "container" !== e.params.controller.by) ||
                    ((a =
                      (t.maxTranslate() - t.minTranslate()) /
                      (e.maxTranslate() - e.minTranslate())),
                    (r = (i - e.minTranslate()) * a + t.minTranslate())),
                  e.params.controller.inverse && (r = t.maxTranslate() - r),
                  t.updateProgress(r),
                  t.setTranslate(r, e),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses();
              }
              if (Array.isArray(l))
                for (let e = 0; e < l.length; e += 1)
                  l[e] !== i && l[e] instanceof n && o(l[e]);
              else l instanceof n && i !== l && o(l);
            },
            setTransition: function (t, i) {
              let s;
              let a = e.constructor,
                r = e.controller.control;
              function l(i) {
                i.setTransition(t, e),
                  0 !== t &&
                    (i.transitionStart(),
                    i.params.autoHeight &&
                      w(() => {
                        i.updateAutoHeight();
                      }),
                    i.$wrapperEl.transitionEnd(() => {
                      r &&
                        (i.params.loop &&
                          "slide" === e.params.controller.by &&
                          i.loopFix(),
                        i.transitionEnd());
                    }));
              }
              if (Array.isArray(r))
                for (s = 0; s < r.length; s += 1)
                  r[s] !== i && r[s] instanceof a && l(r[s]);
              else r instanceof a && i !== r && l(r);
            },
          });
      }
      function Y({ swiper: e, extendParams: t, on: i, emit: s }) {
        let a;
        function r() {
          if (!e.size) {
            (e.autoplay.running = !1), (e.autoplay.paused = !1);
            return;
          }
          let t = e.slides.eq(e.activeIndex),
            i = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(a),
            (a = w(() => {
              let t;
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    s("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? n()
                    : ((t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      s("autoplay"))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)), s("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  s("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? n()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)), s("autoplay"))
                : ((t = e.slideNext(e.params.speed, !0, !0)), s("autoplay")),
                e.params.cssMode && e.autoplay.running ? r() : !1 === t && r();
            }, i));
        }
        function l() {
          return (
            void 0 === a &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0), s("autoplayStart"), r(), !0)
          );
        }
        function n() {
          return (
            !!e.autoplay.running &&
            void 0 !== a &&
            (a && (clearTimeout(a), (a = void 0)),
            (e.autoplay.running = !1),
            s("autoplayStop"),
            !0)
          );
        }
        function o(t) {
          e.autoplay.running &&
            (e.autoplay.paused ||
              (a && clearTimeout(a),
              (e.autoplay.paused = !0),
              0 !== t && e.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                    e.$wrapperEl[0].addEventListener(t, c);
                  })
                : ((e.autoplay.paused = !1), r())));
        }
        function p() {
          let t = d();
          "hidden" === t.visibilityState && e.autoplay.running && o(),
            "visible" === t.visibilityState &&
              e.autoplay.paused &&
              (r(), (e.autoplay.paused = !1));
        }
        function c(t) {
          e &&
            !e.destroyed &&
            e.$wrapperEl &&
            t.target === e.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, c);
            }),
            (e.autoplay.paused = !1),
            e.autoplay.running ? r() : n());
        }
        function u() {
          e.params.autoplay.disableOnInteraction
            ? n()
            : (s("autoplayPause"), o()),
            ["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, c);
            });
        }
        function h() {
          e.params.autoplay.disableOnInteraction ||
            ((e.autoplay.paused = !1), s("autoplayResume"), r());
        }
        (e.autoplay = { running: !1, paused: !1 }),
          t({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          i("init", () => {
            if (e.params.autoplay.enabled) {
              l();
              let t = d();
              t.addEventListener("visibilitychange", p),
                e.params.autoplay.pauseOnMouseEnter &&
                  (e.$el.on("mouseenter", u), e.$el.on("mouseleave", h));
            }
          }),
          i("beforeTransitionStart", (t, i, s) => {
            e.autoplay.running &&
              (s || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(i)
                : n());
          }),
          i("sliderFirstMove", () => {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction ? n() : o());
          }),
          i("touchEnd", () => {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              r();
          }),
          i("destroy", () => {
            e.$el.off("mouseenter", u),
              e.$el.off("mouseleave", h),
              e.autoplay.running && n();
            let t = d();
            t.removeEventListener("visibilitychange", p);
          }),
          Object.assign(e.autoplay, { pause: o, run: r, start: l, stop: n });
      }
      function U({ swiper: e, extendParams: t, on: i }) {
        t({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          },
        });
        let s = !1,
          a = !1;
        function r() {
          let t;
          let i = e.thumbs.swiper;
          if (!i || i.destroyed) return;
          let s = i.clickedIndex,
            a = i.clickedSlide;
          if (
            !(a && m(a).hasClass(e.params.thumbs.slideThumbActiveClass)) &&
            null != s
          ) {
            if (
              ((t = i.params.loop
                ? parseInt(
                    m(i.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : s),
              e.params.loop)
            ) {
              let i = e.activeIndex;
              e.slides.eq(i).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (i = e.activeIndex));
              let s = e.slides
                  .eq(i)
                  .prevAll(`[data-swiper-slide-index="${t}"]`)
                  .eq(0)
                  .index(),
                a = e.slides
                  .eq(i)
                  .nextAll(`[data-swiper-slide-index="${t}"]`)
                  .eq(0)
                  .index();
              t = void 0 === s ? a : void 0 === a ? s : a - i < i - s ? a : s;
            }
            e.slideTo(t);
          }
        }
        function l() {
          let { thumbs: t } = e.params;
          if (s) return !1;
          s = !0;
          let i = e.constructor;
          if (t.swiper instanceof i)
            (e.thumbs.swiper = t.swiper),
              Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              });
          else if (y(t.swiper)) {
            let s = Object.assign({}, t.swiper);
            Object.assign(s, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
              (e.thumbs.swiper = new i(s)),
              (a = !0);
          }
          return (
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", r),
            !0
          );
        }
        function n(t) {
          let i = e.thumbs.swiper;
          if (!i || i.destroyed) return;
          let s =
              "auto" === i.params.slidesPerView
                ? i.slidesPerViewDynamic()
                : i.params.slidesPerView,
            a = 1,
            r = e.params.thumbs.slideThumbActiveClass;
          if (
            (e.params.slidesPerView > 1 &&
              !e.params.centeredSlides &&
              (a = e.params.slidesPerView),
            e.params.thumbs.multipleActiveThumbs || (a = 1),
            (a = Math.floor(a)),
            i.slides.removeClass(r),
            i.params.loop || (i.params.virtual && i.params.virtual.enabled))
          )
            for (let t = 0; t < a; t += 1)
              i.$wrapperEl
                .children(`[data-swiper-slide-index="${e.realIndex + t}"]`)
                .addClass(r);
          else
            for (let t = 0; t < a; t += 1)
              i.slides.eq(e.realIndex + t).addClass(r);
          let l = e.params.thumbs.autoScrollOffset,
            n = l && !i.params.loop;
          if (e.realIndex !== i.realIndex || n) {
            let a,
              r,
              o = i.activeIndex;
            if (i.params.loop) {
              i.slides.eq(o).hasClass(i.params.slideDuplicateClass) &&
                (i.loopFix(),
                (i._clientLeft = i.$wrapperEl[0].clientLeft),
                (o = i.activeIndex));
              let t = i.slides
                  .eq(o)
                  .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                  .eq(0)
                  .index(),
                s = i.slides
                  .eq(o)
                  .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                  .eq(0)
                  .index();
              (a =
                void 0 === t
                  ? s
                  : void 0 === s
                  ? t
                  : s - o == o - t
                  ? i.params.slidesPerGroup > 1
                    ? s
                    : o
                  : s - o < o - t
                  ? s
                  : t),
                (r = e.activeIndex > e.previousIndex ? "next" : "prev");
            } else r = (a = e.realIndex) > e.previousIndex ? "next" : "prev";
            n && (a += "next" === r ? l : -1 * l),
              i.visibleSlidesIndexes &&
                0 > i.visibleSlidesIndexes.indexOf(a) &&
                (i.params.centeredSlides
                  ? (a =
                      a > o
                        ? a - Math.floor(s / 2) + 1
                        : a + Math.floor(s / 2) - 1)
                  : a > o && i.params.slidesPerGroup,
                i.slideTo(a, t ? 0 : void 0));
          }
        }
        (e.thumbs = { swiper: null }),
          i("beforeInit", () => {
            let { thumbs: t } = e.params;
            t && t.swiper && (l(), n(!0));
          }),
          i("slideChange update resize observerUpdate", () => {
            n();
          }),
          i("setTransition", (t, i) => {
            let s = e.thumbs.swiper;
            s && !s.destroyed && s.setTransition(i);
          }),
          i("beforeDestroy", () => {
            let t = e.thumbs.swiper;
            t && !t.destroyed && a && t.destroy();
          }),
          Object.assign(e.thumbs, { init: l, update: n });
      }
      function Z({ swiper: e, extendParams: t, on: i }) {
        t({ fadeEffect: { crossFade: !1, transformEl: null } });
        let s = () => {
            let { slides: t } = e,
              i = e.params.fadeEffect;
            for (let s = 0; s < t.length; s += 1) {
              let t = e.slides.eq(s),
                a = t[0].swiperSlideOffset,
                r = -a;
              e.params.virtualTranslate || (r -= e.translate);
              let l = 0;
              e.isHorizontal() || ((l = r), (r = 0));
              let n = e.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(t[0].progress), 0)
                  : 1 + Math.min(Math.max(t[0].progress, -1), 0),
                o = i.transformEl
                  ? t
                      .find(i.transformEl)
                      .css({
                        "backface-visibility": "hidden",
                        "-webkit-backface-visibility": "hidden",
                      })
                  : t;
              o.css({ opacity: n }).transform(
                `translate3d(${r}px, ${l}px, 0px)`
              );
            }
          },
          a = (t) => {
            let { transformEl: i } = e.params.fadeEffect,
              s = i ? e.slides.find(i) : e.slides;
            s.transition(t),
              (function ({
                swiper: e,
                duration: t,
                transformEl: i,
                allSlides: s,
              }) {
                let { slides: a, activeIndex: r, $wrapperEl: l } = e;
                if (e.params.virtualTranslate && 0 !== t) {
                  let t = !1;
                  (s
                    ? i
                      ? a.find(i)
                      : a
                    : i
                    ? a.eq(r).find(i)
                    : a.eq(r)
                  ).transitionEnd(() => {
                    if (t || !e || e.destroyed) return;
                    (t = !0), (e.animating = !1);
                    let i = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < i.length; e += 1) l.trigger(i[e]);
                  });
                }
              })({ swiper: e, duration: t, transformEl: i, allSlides: !0 });
          };
        !(function (e) {
          let t;
          let {
            effect: i,
            swiper: s,
            on: a,
            setTranslate: r,
            setTransition: l,
            overwriteParams: n,
            perspective: o,
            recreateShadows: d,
            getEffectParams: p,
          } = e;
          a("beforeInit", () => {
            if (s.params.effect !== i) return;
            s.classNames.push(`${s.params.containerModifierClass}${i}`),
              o &&
                o() &&
                s.classNames.push(`${s.params.containerModifierClass}3d`);
            let e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
          }),
            a("setTranslate", () => {
              s.params.effect === i && r();
            }),
            a("setTransition", (e, t) => {
              s.params.effect === i && l(t);
            }),
            a("transitionEnd", () => {
              s.params.effect === i &&
                d &&
                p &&
                p().slideShadows &&
                (s.slides.each((e) => {
                  let t = s.$(e);
                  t.find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  ).remove();
                }),
                d());
            }),
            a("virtualUpdate", () => {
              s.params.effect === i &&
                (s.slides.length || (t = !0),
                requestAnimationFrame(() => {
                  t && s.slides && s.slides.length && (r(), (t = !1));
                }));
            });
        })({
          effect: "fade",
          swiper: e,
          on: i,
          setTranslate: s,
          setTransition: a,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
      }
    },
  },
]);
