(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2134],
  {
    9783: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/portfolio-metro",
        function () {
          return n(5812);
        },
      ]);
    },
    5812: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(5893),
        s = n(7294),
        o = n(9008),
        r = n.n(o),
        u = n(7283),
        l = n(7458),
        c = n(7683),
        a = n(4361),
        d = n(5046),
        f = n(2652);
      function h() {
        return (
          (0, s.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(r(), {
                children: (0, i.jsx)("title", {
                  children: "Geekfolio - Portfolio Metro",
                }),
              }),
              (0, i.jsx)(l.Z, {}),
              (0, i.jsx)(c.Z, { mainBg: !0, lightMode: !0 }),
              (0, i.jsxs)("main", {
                className: "main-bg",
                children: [
                  (0, i.jsx)(d.Z, {
                    data: { subTitle: "Our Works", title: "Work Metro." },
                  }),
                  (0, i.jsx)(f.Z, {}),
                ],
              }),
              (0, i.jsx)(a.Z, { subBg: !0, lightMode: !0 }),
            ],
          })
        );
      }
      (h.getLayout = (t) => (0, i.jsx)(u.Z, { lightMode: !0, children: t })),
        (e.default = h);
    },
  },
  function (t) {
    t.O(0, [1664, 1329, 505, 9774, 2888, 179], function () {
      return t((t.s = 9783));
    }),
      (_N_E = t.O());
  },
]);
