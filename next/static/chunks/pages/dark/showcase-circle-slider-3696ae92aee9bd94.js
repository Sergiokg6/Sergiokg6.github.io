(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [389],
  {
    6679: function (s, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/showcase-circle-slider",
        function () {
          return a(1549);
        },
      ]);
    },
    2899: function (s, e, a) {
      "use strict";
      a.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = a(5893),
        n = a(7294),
        l = a(1664),
        d = a.n(l),
        r = a(8366),
        t = JSON.parse(
          '[{"id":1,"background":"/dark/assets/imgs/works/full/1.jpg","year":"2023","type":"Branding","title":"Basket Lamp"},{"id":2,"background":"/dark/assets/imgs/works/full/2.jpg","year":"2023","type":"Branding","title":"Moon Light"},{"id":3,"background":"/dark/assets/imgs/works/full/3.jpg","year":"2023","type":"Branding","title":"Red Glasses"},{"id":4,"background":"/dark/assets/imgs/works/full/4.jpg","year":"2023","type":"Branding","title":"Waffile Maker"},{"id":5,"background":"/dark/assets/imgs/works/full/5.jpg","year":"2023","type":"Branding","title":"Headphone"}]'
        ),
        c = function (s) {
          let { lightMode: e } = s;
          return (
            (0, n.useEffect)(() => {
              (0, r.Z)();
            }, []),
            (0, i.jsxs)("section", {
              className: "position-re ".concat(e ? "bg-dark" : ""),
              children: [
                (0, i.jsx)("div", {
                  className: "frame",
                  children: (0, i.jsxs)("nav", {
                    className: "slides-nav",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "slide-nav-butn",
                        children: [
                          (0, i.jsx)("button", {
                            className:
                              "slides-nav__button slides-nav__button--prev",
                            "aria-label": "Previous slide",
                            children: (0, i.jsxs)("svg", {
                              children: [
                                (0, i.jsx)("path", {
                                  d: "M1.176 11.532a.5.5 0 00-.352.936c5.228 1.96 9.475 5.555 12.752 10.797a.5.5 0 00.848-.53c-3.39-5.424-7.81-9.163-13.248-11.203z",
                                }),
                                (0, i.jsx)("path", {
                                  d: "M1.176 12.468a.5.5 0 01-.352-.936C6.052 9.572 10.3 5.978 13.576.735a.5.5 0 01.848.53c-3.39 5.424-7.81 9.163-13.248 11.203z",
                                }),
                                (0, i.jsx)("path", {
                                  d: "M1 12.5a.5.5 0 110-1h53a.5.5 0 110 1H1z",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("button", {
                            className:
                              "slides-nav__button slides-nav__button--next",
                            "aria-label": "Next slide",
                            children: (0, i.jsxs)("svg", {
                              children: [
                                (0, i.jsx)("path", {
                                  d: "M53.824 11.532a.5.5 0 01.352.936c-5.228 1.96-9.475 5.555-12.752 10.797a.5.5 0 01-.848-.53c3.39-5.424 7.81-9.163 13.248-11.203z",
                                }),
                                (0, i.jsx)("path", {
                                  d: "M53.824 12.468a.5.5 0 00.352-.936C48.948 9.572 44.7 5.978 41.424.735a.5.5 0 00-.848.53c3.39 5.424 7.81 9.163 13.248 11.203z",
                                }),
                                (0, i.jsx)("path", {
                                  d: "M54 12.5a.5.5 0 100-1H1a.5.5 0 100 1h53z",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "slides-nav__index",
                        children: [
                          (0, i.jsx)("span", {
                            className: "slides-nav__index-current",
                            children: (0, i.jsx)("span", { children: "1" }),
                          }),
                          "—",
                          (0, i.jsx)("span", {
                            className: "slides-nav__index-total",
                            children: "5",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "slideshow",
                  children: t.map((s, e) =>
                    (0, i.jsxs)(
                      "figure",
                      {
                        className: "slide ".concat(
                          0 === e ? "slide--current" : ""
                        ),
                        children: [
                          (0, i.jsx)("div", {
                            className: "slide__img-wrap",
                            children: (0, i.jsx)("div", {
                              className: "slide__img bg-img",
                              "data-background": s.background,
                            }),
                          }),
                          (0, i.jsxs)("figcaption", {
                            className: "slide__caption",
                            children: [
                              (0, i.jsxs)("h1", {
                                className: "slides__caption-headline",
                                children: [
                                  (0, i.jsx)("span", {
                                    className: "text-row sub-title mb-15",
                                    children: (0, i.jsxs)("span", {
                                      children: ["\xa9 ", s.year, " ", s.type],
                                    }),
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "text-row",
                                    children: (0, i.jsx)("span", {
                                      children: s.title,
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsx)(d(), {
                                className:
                                  "slides__caption-link sub-title mt-30",
                                href: "/dark/project-details1",
                                children: (0, i.jsx)("span", {
                                  children: "Explore",
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      s.id
                    )
                  ),
                }),
              ],
            })
          );
        };
    },
    1549: function (s, e, a) {
      "use strict";
      a.r(e);
      var i = a(5893),
        n = a(7294),
        l = a(9008),
        d = a.n(l),
        r = a(480),
        t = a(9729),
        c = a(5451),
        o = a.n(c),
        u = a(7458),
        h = a(7217),
        x = a(8232),
        j = a(2899);
      function p() {
        return (
          (0, n.useEffect)(() => {
            (0, t.Z)(), o().showcase1();
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(d(), {
                children: (0, i.jsx)("title", {
                  children: "Cleverest - Circle Slider",
                }),
              }),
              (0, i.jsx)(u.Z, {}),
              (0, i.jsx)(h.Z, {}),
              (0, i.jsx)(x.Z, {}),
              (0, i.jsx)("main", { children: (0, i.jsx)(j.Z, {}) }),
            ],
          })
        );
      }
      (p.getLayout = (s) => (0, i.jsx)(r.Z, { children: s })), (e.default = p);
    },
  },
  function (s) {
    s.O(0, [1664, 7142, 2271, 9774, 2888, 179], function () {
      return s((s.s = 6679));
    }),
      (_N_E = s.O());
  },
]);
