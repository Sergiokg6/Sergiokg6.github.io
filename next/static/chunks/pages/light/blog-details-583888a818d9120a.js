(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6894],
  {
    8376: function (n, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/blog-details",
        function () {
          return i(6629);
        },
      ]);
    },
    6629: function (n, e, i) {
      "use strict";
      i.r(e);
      var t = i(5893),
        s = i(7294),
        o = i(9008),
        l = i.n(o),
        c = i(7283),
        u = i(7458),
        d = i(7683),
        r = i(5209),
        a = i(4361);
      function h() {
        return (
          (0, s.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(l(), {
                children: (0, t.jsx)("title", {
                  children: "Geekfolio - Blog Details",
                }),
              }),
              (0, t.jsx)(u.Z, {}),
              (0, t.jsx)(d.Z, { mainBg: !0, lightMode: !0 }),
              (0, t.jsx)("main", { children: (0, t.jsx)(r.Z, {}) }),
              (0, t.jsx)(a.Z, { lightMode: !0 }),
            ],
          })
        );
      }
      (h.getLayout = (n) => (0, t.jsx)(c.Z, { lightMode: !0, children: n })),
        (e.default = h);
    },
  },
  function (n) {
    n.O(0, [1664, 1329, 6729, 9774, 2888, 179], function () {
      return n((n.s = 8376));
    }),
      (_N_E = n.O());
  },
]);