(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7270],
  {
    4822: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/home-main",
        function () {
          return r(8055);
        },
      ]);
    },
    8055: function (e, n, r) {
      "use strict";
      r.r(n);
      var t = r(5893),
        i = r(7294),
        o = r(9008),
        s = r.n(o),
        c = r(7283),
        a = r(7458),
        l = r(7683),
        d = r(8280),
        g = r(4316),
        u = r(5104),
        h = r(8465),
        m = r(4556),
        f = r(4886),
        x = r(1093),
        p = r(7394),
        j = r(7013),
        w = r(2289);
      function S() {
        function e() {
          if (
            (window.innerWidth < 991 &&
              document.querySelector(".thecontainer").style.maxHeight &&
              location.reload(),
            window.innerWidth > 991 &&
              !document.querySelector(".thecontainer").style.maxHeight)
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
        }
        return (
          (0, i.useEffect)(() => {
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
                  end: () => {
                    var e;
                    return (
                      "+=" +
                      (null === (e = document.querySelector(".thecontainer")) ||
                      void 0 === e
                        ? void 0
                        : e.offsetWidth)
                    );
                  },
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
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e),
                  document.body.classList.remove("home-main-crev", "main-bg");
              }
            );
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(s(), {
                children: (0, t.jsx)("title", { children: "Geekfolio - Main" }),
              }),
              (0, t.jsx)(a.Z, {}),
              (0, t.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                  (0, t.jsx)(l.Z, { mainBg: !0, noStatic: !0 }),
                  (0, t.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                      (0, t.jsxs)("main", {
                        className: "main-bg",
                        children: [
                          (0, t.jsx)(d.Z, {}),
                          (0, t.jsx)(g.Z, {}),
                          (0, t.jsx)(u.Z, {}),
                          (0, t.jsx)(h.Z, {}),
                          (0, t.jsx)(m.Z, {}),
                          (0, t.jsx)(f.Z, {}),
                          (0, t.jsx)(x.Z, {}),
                          (0, t.jsx)(p.Z, {}),
                          (0, t.jsx)(j.Z, {}),
                        ],
                      }),
                      (0, t.jsx)(w.Z, {}),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      (S.getLayout = (e) => (0, t.jsx)(c.Z, { children: e })), (n.default = S);
    },
  },
  function (e) {
    e.O(0, [1664, 719, 1329, 6163, 9774, 2888, 179], function () {
      return e((e.s = 4822));
    }),
      (_N_E = e.O());
  },
]);
