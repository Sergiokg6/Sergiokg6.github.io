(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2473],
  {
    913: function (n, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/portfolio-modern",
        function () {
          return i(4605);
        },
      ]);
    },
    4605: function (n, e, i) {
      "use strict";
      i.r(e);
      var t = i(5893),
        s = i(7294),
        o = i(9008),
        r = i.n(o),
        d = i(7283),
        u = i(7458),
        l = i(7683),
        c = i(4361),
        a = i(5046),
        f = i(7342);
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
              (0, t.jsx)(r(), {
                children: (0, t.jsx)("title", {
                  children: "Cleverest - Portfolio Modern",
                }),
              }),
              (0, t.jsx)(u.Z, {}),
              (0, t.jsx)(l.Z, { mainBg: !0, lightMode: !0 }),
              (0, t.jsxs)("main", {
                className: "main-bg",
                children: [
                  (0, t.jsx)(a.Z, {
                    data: { subTitle: "Our Works", title: "Modern Grid." },
                  }),
                  (0, t.jsx)(f.Z, {}),
                ],
              }),
              (0, t.jsx)(c.Z, { subBg: !0, lightMode: !0 }),
            ],
          })
        );
      }
      (h.getLayout = (n) => (0, t.jsx)(d.Z, { lightMode: !0, children: n })),
        (e.default = h);
    },
  },
  function (n) {
    n.O(0, [1664, 1329, 1401, 9774, 2888, 179], function () {
      return n((n.s = 913));
    }),
      (_N_E = n.O());
  },
]);
