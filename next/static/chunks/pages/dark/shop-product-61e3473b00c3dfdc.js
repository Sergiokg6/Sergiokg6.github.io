(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8446],
  {
    6104: function (e, n, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/shop-product",
        function () {
          return o(5959);
        },
      ]);
    },
    5959: function (e, n, o) {
      "use strict";
      o.r(n);
      var r = o(5893),
        s = o(7294),
        t = o(9008),
        i = o.n(t),
        c = o(7283),
        l = o(7458),
        d = o(7683),
        u = o(4476),
        a = o(4361);
      function h() {
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
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i(), {
                children: (0, r.jsx)("title", {
                  children: "Geekfolio - Shop Product",
                }),
              }),
              (0, r.jsx)(l.Z, {}),
              (0, r.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                  (0, r.jsx)(d.Z, { mainBg: !0, noStatic: !0 }),
                  (0, r.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                      (0, r.jsx)("main", {
                        className: "main-bg",
                        children: (0, r.jsx)(u.Z, {}),
                      }),
                      (0, r.jsx)(a.Z, { subBg: !0 }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      (h.getLayout = (e) => (0, r.jsx)(c.Z, { children: e })), (n.default = h);
    },
  },
  function (e) {
    e.O(0, [1664, 719, 1329, 4864, 9774, 2888, 179], function () {
      return e((e.s = 6104));
    }),
      (_N_E = e.O());
  },
]);
