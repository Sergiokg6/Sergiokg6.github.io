(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [875],
  {
    8974: function (n, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/portfolio-masonry-3",
        function () {
          return t(4025);
        },
      ]);
    },
    4025: function (n, s, t) {
      "use strict";
      t.r(s);
      var e = t(5893),
        i = t(7294),
        o = t(9008),
        r = t.n(o),
        l = t(7283),
        u = t(7458),
        a = t(7683),
        c = t(4361),
        d = t(5046),
        f = t(6947);
      function h() {
        return (
          (0, i.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(r(), {
                children: (0, e.jsx)("title", {
                  children: "Geekfolio - Portfolio Masonry 3 Col",
                }),
              }),
              (0, e.jsx)(u.Z, {}),
              (0, e.jsx)(a.Z, { mainBg: !0, lightMode: !0 }),
              (0, e.jsxs)("main", {
                className: "main-bg",
                children: [
                  (0, e.jsx)(d.Z, {
                    data: { subTitle: "Our Works", title: "Masonry 3." },
                  }),
                  (0, e.jsx)(f.Z, {}),
                ],
              }),
              (0, e.jsx)(c.Z, { subBg: !0, lightMode: !0 }),
            ],
          })
        );
      }
      (h.getLayout = (n) => (0, e.jsx)(l.Z, { lightMode: !0, children: n })),
        (s.default = h);
    },
  },
  function (n) {
    n.O(0, [1664, 1329, 1965, 9774, 2888, 179], function () {
      return n((n.s = 8974));
    }),
      (_N_E = n.O());
  },
]);
