(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [617],
  {
    6494: function (n, s, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/showcase-parallax",
        function () {
          return e(9679);
        },
      ]);
    },
    9679: function (n, s, e) {
      "use strict";
      e.r(s);
      var i = e(5893),
        t = e(7294),
        a = e(9008),
        c = e.n(a),
        l = e(7283),
        o = e(7458),
        d = e(7217),
        r = e(8232),
        u = e(2774),
        h = e(2519),
        x = e(7590),
        f = e(3638);
      function j() {
        return (
          (0, t.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(c(), {
                children: (0, i.jsx)("title", {
                  children: "Cleverest - Vertical Parallax",
                }),
              }),
              (0, i.jsx)(o.Z, {}),
              (0, i.jsx)(d.Z, { lightMode: !0 }),
              (0, i.jsx)(r.Z, { lightMode: !0 }),
              (0, i.jsxs)("main", {
                className: "main-bg",
                children: [
                  (0, i.jsx)(u.Z, {}),
                  (0, i.jsx)(h.Z, { paddingTop: !0 }),
                  (0, i.jsx)(x.Z, {}),
                ],
              }),
              (0, i.jsx)(f.Z, {}),
            ],
          })
        );
      }
      (j.getLayout = (n) => (0, i.jsx)(l.Z, { lightMode: !0, children: n })),
        (s.default = j);
    },
  },
  function (n) {
    n.O(0, [1664, 7142, 6526, 9774, 2888, 179], function () {
      return n((n.s = 6494));
    }),
      (_N_E = n.O());
  },
]);
