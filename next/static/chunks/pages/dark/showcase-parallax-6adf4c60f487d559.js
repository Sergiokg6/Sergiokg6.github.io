(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [690],
  {
    8527: function (n, s, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/showcase-parallax",
        function () {
          return e(8631);
        },
      ]);
    },
    8631: function (n, s, e) {
      "use strict";
      e.r(s);
      var a = e(5893),
        i = e(7294),
        t = e(9008),
        c = e.n(t),
        r = e(7283),
        u = e(7458),
        l = e(7217),
        o = e(8232),
        d = e(2774),
        x = e(2519),
        f = e(7590),
        j = e(3638);
      function _() {
        return (
          (0, i.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(c(), {
                children: (0, a.jsx)("title", {
                  children: "Geekfolio - Vertical Parallax",
                }),
              }),
              (0, a.jsx)(u.Z, {}),
              (0, a.jsx)(l.Z, {}),
              (0, a.jsx)(o.Z, {}),
              (0, a.jsxs)("main", {
                className: "main-bg",
                children: [
                  (0, a.jsx)(d.Z, {}),
                  (0, a.jsx)(x.Z, { paddingTop: !0 }),
                  (0, a.jsx)(f.Z, {}),
                ],
              }),
              (0, a.jsx)(j.Z, {}),
            ],
          })
        );
      }
      (_.getLayout = (n) => (0, a.jsx)(r.Z, { children: n })), (s.default = _);
    },
  },
  function (n) {
    n.O(0, [1664, 7142, 6526, 9774, 2888, 179], function () {
      return n((n.s = 8527));
    }),
      (_N_E = n.O());
  },
]);
