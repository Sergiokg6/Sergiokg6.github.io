(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8416],
  {
    3197: function (s, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/shop-list",
        function () {
          return t(838);
        },
      ]);
    },
    838: function (s, e, t) {
      "use strict";
      t.r(e);
      var i = t(5893),
        n = t(7294),
        o = t(9008),
        r = t.n(o),
        c = t(7283),
        l = t(7458),
        a = t(7683),
        d = t(5444),
        u = t(6110),
        h = t(4361);
      function m() {
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
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(r(), {
                children: (0, i.jsx)("title", {
                  children: "Geekfolio - Shop List",
                }),
              }),
              (0, i.jsx)(l.Z, {}),
              (0, i.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                  (0, i.jsx)(a.Z, { mainBg: !0, noStatic: !0 }),
                  (0, i.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                      (0, i.jsxs)("main", {
                        className: "main-bg",
                        children: [
                          (0, i.jsx)(d.Z, {
                            data: { subTitle: "SHOPPING", title: "List." },
                          }),
                          (0, i.jsx)(u.Z, {}),
                        ],
                      }),
                      (0, i.jsx)(h.Z, { subBg: !0 }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      (m.getLayout = (s) => (0, i.jsx)(c.Z, { children: s })), (e.default = m);
    },
  },
  function (s) {
    s.O(0, [1664, 1329, 9351, 9774, 2888, 179], function () {
      return s((s.s = 3197));
    }),
      (_N_E = s.O());
  },
]);
