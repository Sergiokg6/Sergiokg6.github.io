(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2162],
  {
    6840: function (i, s, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/portfolio-grid-3",
        function () {
          return n(295);
        },
      ]);
    },
    295: function (i, s, n) {
      "use strict";
      n.r(s);
      var t = n(5893),
        e = n(7294),
        o = n(9008),
        l = n.n(o),
        r = n(7283),
        u = n(7458),
        c = n(7683),
        d = n(4361),
        a = n(5046),
        f = n(1148);
      function h() {
        return (
          (0, e.useEffect)(
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
                  children: "Geekfolio - Portfolio Classic Grid 3 Col",
                }),
              }),
              (0, t.jsx)(u.Z, {}),
              (0, t.jsx)(c.Z, { mainBg: !0, lightMode: !0 }),
              (0, t.jsxs)("main", {
                children: [
                  (0, t.jsx)(a.Z, {
                    data: { subTitle: "Our Works", title: "Classic Grid 3." },
                  }),
                  (0, t.jsx)(f.Z, {}),
                ],
              }),
              (0, t.jsx)(d.Z, { subBg: !0, lightMode: !0 }),
            ],
          })
        );
      }
      (h.getLayout = (i) => (0, t.jsx)(r.Z, { lightMode: !0, children: i })),
        (s.default = h);
    },
  },
  function (i) {
    i.O(0, [1664, 1329, 6961, 9774, 2888, 179], function () {
      return i((i.s = 6840));
    }),
      (_N_E = i.O());
  },
]);
