(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7597],
  {
    4332: function (e, o, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/shop-product",
        function () {
          return n(6757);
        },
      ]);
    },
    6757: function (e, o, n) {
      "use strict";
      n.r(o);
      var t = n(5893),
        i = n(7294),
        s = n(9008),
        r = n.n(s),
        c = n(7283),
        l = n(7458),
        d = n(7683),
        u = n(4476),
        h = n(4361);
      function a() {
        return (
          (0, i.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              gsap.registerPlugin(ScrollTrigger, ScrollSmoother),
              ScrollTrigger.normalizeScroll(!0),
              ScrollSmoother.create({ smooth: 2, effects: !0 }),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(r(), {
                children: (0, t.jsx)("title", {
                  children: "Geekfolio - Shop Product",
                }),
              }),
              (0, t.jsx)(l.Z, {}),
              (0, t.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                  (0, t.jsx)(d.Z, { mainBg: !0, noStatic: !0, lightMode: !0 }),
                  (0, t.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                      (0, t.jsx)("main", {
                        className: "main-bg",
                        children: (0, t.jsx)(u.Z, {}),
                      }),
                      (0, t.jsx)(h.Z, { subBg: !0, lightMode: !0 }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      (a.getLayout = (e) => (0, t.jsx)(c.Z, { lightMode: !0, children: e })),
        (o.default = a);
    },
  },
  function (e) {
    e.O(0, [1664, 719, 1329, 4864, 9774, 2888, 179], function () {
      return e((e.s = 4332));
    }),
      (_N_E = e.O());
  },
]);
