(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1181],
  {
    7016: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/shop-list",
        function () {
          return i(6661);
        },
      ]);
    },
    6661: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i(5893),
        n = i(7294),
        o = i(9008),
        r = i.n(o),
        l = i(7283),
        c = i(7458),
        d = i(7683),
        a = i(5444),
        h = i(6110),
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
                  children: "Geekfolio - Shop List",
                }),
              }),
              (0, s.jsx)(c.Z, {}),
              (0, s.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                  (0, s.jsx)(d.Z, { mainBg: !0, noStatic: !0, lightMode: !0 }),
                  (0, s.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                      (0, s.jsxs)("main", {
                        className: "main-bg",
                        children: [
                          (0, s.jsx)(a.Z, {
                            data: { subTitle: "SHOPPING", title: "List." },
                          }),
                          (0, s.jsx)(h.Z, {}),
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
    e.O(0, [1664, 1329, 9351, 9774, 2888, 179], function () {
      return e((e.s = 7016));
    }),
      (_N_E = e.O());
  },
]);
