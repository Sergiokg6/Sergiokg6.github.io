(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2240],
  {
    3529: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/shop-cart",
        function () {
          return i(1440);
        },
      ]);
    },
    1440: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i(5893),
        n = i(7294),
        o = i(9008),
        r = i.n(o),
        l = i(7283),
        c = i(7458),
        a = i(7683),
        d = i(5444),
        h = i(498),
        u = i(4361);
      function g() {
        return (
          (0, n.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              gsap.registerPlugin(ScrollTrigger, ScrollSmoother),
              ScrollTrigger.normalizeScroll(!0),
              ScrollSmoother.create({ smooth: 2, effects: !0 }),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(r(), {
                children: (0, s.jsx)("title", {
                  children: "Cleverest - Shop Cart",
                }),
              }),
              (0, s.jsx)(c.Z, {}),
              (0, s.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                  (0, s.jsx)(a.Z, { mainBg: !0, noStatic: !0, lightMode: !0 }),
                  (0, s.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                      (0, s.jsxs)("main", {
                        className: "main-bg",
                        children: [
                          (0, s.jsx)(d.Z, {
                            data: { subTitle: "SHOPPING", title: "Cart." },
                          }),
                          (0, s.jsx)(h.Z, { lightMode: !0 }),
                        ],
                      }),
                      (0, s.jsx)(u.Z, { subBg: !0, lightMode: !0 }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      (g.getLayout = (e) => (0, s.jsx)(l.Z, { lightMode: !0, children: e })),
        (t.default = g);
    },
  },
  function (e) {
    e.O(0, [1664, 1329, 684, 9774, 2888, 179], function () {
      return e((e.s = 3529));
    }),
      (_N_E = e.O());
  },
]);
