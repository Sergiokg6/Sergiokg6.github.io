(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9521],
  {
    6315: function (s, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/showcase-frame-slider",
        function () {
          return i(4466);
        },
      ]);
    },
    2905: function (s, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var a = i(5893),
        n = i(7294),
        r = i(1664),
        d = i.n(r),
        l = i(8366),
        t = JSON.parse(
          '[{"id":1,"background":"/dark/assets/imgs/works/full/1.jpg","year":"2023","type":"Branding","title":"Basket Lamp"},{"id":2,"background":"/dark/assets/imgs/works/full/2.jpg","year":"2023","type":"Branding","title":"Moon Light"},{"id":3,"background":"/dark/assets/imgs/works/full/3.jpg","year":"2023","type":"Branding","title":"Red Glasses"},{"id":4,"background":"/dark/assets/imgs/works/full/4.jpg","year":"2023","type":"Branding","title":"Waffile Maker"},{"id":5,"background":"/dark/assets/imgs/works/full/5.jpg","year":"2023","type":"Branding","title":"Headphone"}]'
        ),
        c = function () {
          return (
            (0, n.useEffect)(() => {
              (0, l.Z)();
            }, []),
            (0, a.jsxs)("div", {
              className: "slideshow",
              children: [
                (0, a.jsx)("div", {
                  className: "slides slides--images",
                  children: t.map((s, e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "slide ".concat(
                          0 === e ? "slide--current" : ""
                        ),
                        children: (0, a.jsx)("div", {
                          className: "slide__img bg-img",
                          "data-background": s.background,
                        }),
                      },
                      s.id
                    )
                  ),
                }),
                (0, a.jsx)("div", {
                  className: "slides slides--titles",
                  children: t.map((s, e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "slide ".concat(
                          0 === e ? "slide--current" : ""
                        ),
                        children: (0, a.jsxs)("h1", {
                          className: "slide__title text-center",
                          children: [
                            (0, a.jsxs)("span", {
                              className: "sub-title mb-15",
                              children: ["\xa9 ", s.year, " ", s.type],
                            }),
                            " ",
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)("span", {
                              children: (0, a.jsx)(d(), {
                                href: "/dark/project-details1",
                                children: s.title,
                              }),
                            }),
                          ],
                        }),
                      },
                      s.id
                    )
                  ),
                }),
                (0, a.jsx)("nav", {
                  className: "slidenav",
                  children: (0, a.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, a.jsxs)("button", {
                        className:
                          "slidenav__item slidenav__item--prev cursor-pointer",
                        children: [
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)("i", {
                              className: "fas fa-chevron-left",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)("span", { children: "Prev" }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("button", {
                        className:
                          "slidenav__item slidenav__item--next cursor-pointer",
                        children: [
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)("span", { children: "Next" }),
                          }),
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)("i", {
                              className: "fas fa-chevron-right",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
    },
    4466: function (s, e, i) {
      "use strict";
      i.r(e);
      var a = i(5893),
        n = i(7294),
        r = i(9008),
        d = i.n(r),
        l = i(480),
        t = i(9729),
        c = i(5451),
        o = i.n(c),
        u = i(7458),
        j = i(7217),
        h = i(8232),
        x = i(2905);
      function m() {
        return (
          (0, n.useEffect)(() => {
            (0, t.Z)(), o().demo();
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(d(), {
                children: (0, a.jsx)("title", {
                  children: "Geekfolio - Frame Slider",
                }),
              }),
              (0, a.jsx)(u.Z, {}),
              (0, a.jsx)(j.Z, {}),
              (0, a.jsx)(h.Z, {}),
              (0, a.jsx)("main", { children: (0, a.jsx)(x.Z, {}) }),
            ],
          })
        );
      }
      (m.getLayout = (s) => (0, a.jsx)(l.Z, { children: s })), (e.default = m);
    },
  },
  function (s) {
    s.O(0, [1664, 7142, 2271, 9774, 2888, 179], function () {
      return s((s.s = 6315));
    }),
      (_N_E = s.O());
  },
]);
