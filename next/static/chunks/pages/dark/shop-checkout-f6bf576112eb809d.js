(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5279],
  {
    713: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/shop-checkout",
        function () {
          return t(1978);
        },
      ]);
    },
    1978: function (e, s, t) {
      "use strict";
      t.r(s);
      var n = t(5893),
        o = t(7294),
        i = t(9008),
        c = t.n(i),
        r = t(7283),
        l = t(7458),
        u = t(7683),
        a = t(5444),
        d = t(2441),
        h = t(4361);
      function m() {
        return (
          (0, o.useEffect)(
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
              (0, n.jsx)(c(), {
                children: (0, n.jsx)("title", {
                  children: "Cleverest - Shop Checkout",
                }),
              }),
              (0, n.jsx)(l.Z, {}),
              (0, n.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                  (0, n.jsx)(u.Z, { mainBg: !0, noStatic: !0 }),
                  (0, n.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                      (0, n.jsxs)("main", {
                        className: "main-bg",
                        children: [
                          (0, n.jsx)(a.Z, {
                            data: { subTitle: "SHOPPING", title: "checkout." },
                          }),
                          (0, n.jsx)(d.Z, {}),
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
      (m.getLayout = (e) => (0, n.jsx)(r.Z, { children: e })), (s.default = m);
    },
  },
  function (e) {
    e.O(0, [1664, 1329, 3263, 9774, 2888, 179], function () {
      return e((e.s = 713));
    }),
      (_N_E = e.O());
  },
]);
