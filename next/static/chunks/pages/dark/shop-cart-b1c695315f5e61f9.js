(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1393],
  {
    5369: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/shop-cart",
        function () {
          return t(1035);
        },
      ]);
    },
    1035: function (e, s, t) {
      "use strict";
      t.r(s);
      var n = t(5893),
        r = t(7294),
        i = t(9008),
        o = t.n(i),
        c = t(7283),
        l = t(7458),
        a = t(7683),
        d = t(5444),
        u = t(498),
        h = t(4361);
      function m() {
        return (
          (0, r.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              gsap.registerPlugin(ScrollTrigger, ScrollSmoother),
              ScrollTrigger.normalizeScroll(!0),
              ScrollSmoother.create({ smooth: 2, effects: !0 }),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(o(), {
                children: (0, n.jsx)("title", {
                  children: "Geekfolio - Shop Cart",
                }),
              }),
              (0, n.jsx)(l.Z, {}),
              (0, n.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                  (0, n.jsx)(a.Z, { mainBg: !0, noStatic: !0 }),
                  (0, n.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                      (0, n.jsxs)("main", {
                        className: "main-bg",
                        children: [
                          (0, n.jsx)(d.Z, {
                            data: { subTitle: "SHOPPING", title: "Cart." },
                          }),
                          (0, n.jsx)(u.Z, {}),
                        ],
                      }),
                      (0, n.jsx)(h.Z, { subBg: !0 }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      (m.getLayout = (e) => (0, n.jsx)(c.Z, { children: e })), (s.default = m);
    },
  },
  function (e) {
    e.O(0, [1664, 1329, 684, 9774, 2888, 179], function () {
      return e((e.s = 5369));
    }),
      (_N_E = e.O());
  },
]);
