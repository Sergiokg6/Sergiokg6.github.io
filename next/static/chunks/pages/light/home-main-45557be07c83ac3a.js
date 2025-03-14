(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9914],
  {
    301: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/home-main",
        function () {
          return n(7924);
        },
      ]);
    },
    7924: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(5893),
        r = n(7294),
        o = n(9008),
        s = n.n(o),
        l = n(7283),
        c = n(7458),
        a = n(7683),
        g = n(8280),
        d = n(4316),
        h = n(5104),
        m = n(8465),
        u = n(4556),
        f = n(4886),
        x = n(1093),
        j = n(7394),
        p = n(7013),
        Z = n(2289);
      function _() {
        return (
          (0, r.useEffect)(() => {
            if (
              (document.body.classList.add("home-main-crev", "main-bg"),
              gsap.registerPlugin(ScrollTrigger, ScrollSmoother),
              ScrollTrigger.normalizeScroll(!0),
              ScrollSmoother.create({ smooth: 2, effects: !0 }),
              window.innerWidth > 991)
            ) {
              gsap.registerPlugin(ScrollTrigger);
              let e = gsap.utils.toArray(".panel");
              gsap.to(e, {
                xPercent: -100 * (e.length - 1),
                ease: "none",
                scrollTrigger: {
                  trigger: ".thecontainer",
                  pin: !0,
                  scrub: 1,
                  end: () =>
                    "+=" + document.querySelector(".thecontainer").offsetWidth,
                },
              });
            }
            if (window.innerWidth > 991) {
              gsap.set(".footer-container", { yPercent: -50 });
              let e = gsap.timeline({ paused: !0 });
              e.to(".footer-container", { yPercent: 0, ease: "none" }),
                ScrollTrigger.create({
                  trigger: "main",
                  start: "bottom bottom",
                  end: "+=50%",
                  animation: e,
                  scrub: !0,
                });
            }
            return () =>
              document.body.classList.remove("home-main-crev", "main-bg");
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(s(), {
                children: (0, i.jsx)("title", { children: "Geekfolio - Main" }),
              }),
              (0, i.jsx)(c.Z, {}),
              (0, i.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                  (0, i.jsx)(a.Z, { mainBg: !0, noStatic: !0, lightMode: !0 }),
                  (0, i.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                      (0, i.jsxs)("main", {
                        className: "main-bg",
                        children: [
                          (0, i.jsx)(g.Z, {}),
                          (0, i.jsx)(d.Z, {}),
                          (0, i.jsx)(h.Z, {}),
                          (0, i.jsx)(m.Z, { lightMode: !0 }),
                          (0, i.jsx)(u.Z, { lightMode: !0 }),
                          (0, i.jsx)(f.Z, {}),
                          (0, i.jsx)(x.Z, { lightMode: !0 }),
                          (0, i.jsx)(j.Z, { lightMode: !0 }),
                          (0, i.jsx)(p.Z, {}),
                        ],
                      }),
                      (0, i.jsx)(Z.Z, { lightMode: !0 }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      (_.getLayout = (e) => (0, i.jsx)(l.Z, { lightMode: !0, children: e })),
        (t.default = _);
    },
  },
  function (e) {
    e.O(0, [1664, 719, 1329, 6163, 9774, 2888, 179], function () {
      return e((e.s = 301));
    }),
      (_N_E = e.O());
  },
]);
