(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1887],
  {
    3710: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/shop-checkout",
        function () {
          return o(1984);
        },
      ]);
    },
    1984: function (e, t, o) {
      "use strict";
      o.r(t);
      var i = o(5893),
        s = o(7294),
        n = o(9008),
        c = o.n(n),
        r = o(7283),
        l = o(7458),
        h = o(7683),
        u = o(5444),
        d = o(2441),
        a = o(4361);
      function g() {
        return (
          (0, s.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              gsap.registerPlugin(ScrollTrigger, ScrollSmoother),
              ScrollTrigger.normalizeScroll(!0),
              ScrollSmoother.create({ smooth: 2, effects: !0 }),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(c(), {
                children: (0, i.jsx)("title", {
                  children: "Geekfolio - Shop Checkout",
                }),
              }),
              (0, i.jsx)(l.Z, {}),
              (0, i.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                  (0, i.jsx)(h.Z, { mainBg: !0, noStatic: !0, lightMode: !0 }),
                  (0, i.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                      (0, i.jsxs)("main", {
                        className: "main-bg",
                        children: [
                          (0, i.jsx)(u.Z, {
                            data: { subTitle: "SHOPPING", title: "checkout." },
                          }),
                          (0, i.jsx)(d.Z, {}),
                        ],
                      }),
                      (0, i.jsx)(a.Z, { subBg: !0, lightMode: !0 }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      (g.getLayout = (e) => (0, i.jsx)(r.Z, { lightMode: !0, children: e })),
        (t.default = g);
    },
  },
  function (e) {
    e.O(0, [1664, 1329, 3263, 9774, 2888, 179], function () {
      return e((e.s = 3710));
    }),
      (_N_E = e.O());
  },
]);
