(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [180],
  {
    4640: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/showcase-parallax-slider",
        function () {
          return a(1844);
        },
      ]);
    },
    8366: function (e, s, a) {
      "use strict";
      function r() {
        let e = document.querySelectorAll("[data-background]");
        e.length > 0 &&
          e.forEach((e) => {
            let s = e.dataset.background;
            e.style.backgroundImage = "url('".concat(s, "')");
          });
      }
      a.d(s, {
        Z: function () {
          return r;
        },
      });
    },
    1744: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return p;
        },
      });
      var r = a(5893),
        l = a(7294),
        i = a(1664),
        t = a.n(i),
        n = a(719),
        c = a(8116),
        d = a(8366),
        o = JSON.parse(
          '[{"id":1,"background":"/dark/assets/imgs/works/full/1.jpg","year":"2023","type":"Branding","title":"Basket Lamp"},{"id":2,"background":"/dark/assets/imgs/works/full/2.jpg","year":"2023","type":"Branding","title":"Moon Light"},{"id":3,"background":"/dark/assets/imgs/works/full/3.jpg","year":"2023","type":"Branding","title":"Red Glasses"},{"id":4,"background":"/dark/assets/imgs/works/full/4.jpg","year":"2023","type":"Branding","title":"Waffile Maker"},{"id":5,"background":"/dark/assets/imgs/works/full/5.jpg","year":"2023","type":"Branding","title":"Headphone"},{"id":6,"background":"/dark/assets/imgs/works/full/6.jpg","year":"2023","type":"Branding","title":"Table Lamp"}]'
        );
      let u = {
        modules: [c.W_, c.pt, c.tl, c.VS],
        speed: 1500,
        autoplay: { delay: 5e3 },
        parallax: !0,
        loop: !0,
        onSwiper: function (e) {
          for (var s = 0; s < e.slides.length; s++)
            e.slides[s]
              .querySelector(".bg-img")
              .setAttribute("data-swiper-parallax", 0.75 * e.width);
        },
        onResize: function (e) {
          e.update();
        },
        pagination: { el: ".showcase-full .swiper-pagination", clickable: !0 },
        navigation: {
          nextEl: ".showcase-full .swiper-button-next",
          prevEl: ".showcase-full .swiper-button-prev",
        },
      };
      var p = function () {
        let [e, s] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            s(!0);
          }, []),
          (0, l.useEffect)(() => {
            e && (0, d.Z)();
          }, [e]),
          (0, r.jsxs)("header", {
            className: "slider showcase-full",
            children: [
              e &&
                (0, r.jsx)(n.tq, {
                  ...u,
                  className: "swiper-container parallax-slider",
                  children: o.map((e) =>
                    (0, r.jsx)(
                      n.o5,
                      {
                        children: (0, r.jsx)("div", {
                          className: "bg-img valign",
                          "data-background": e.background,
                          "data-overlay-dark": "3",
                          children: (0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsx)("div", {
                              className: "row",
                              children: (0, r.jsx)("div", {
                                className: "col-lg-11 offset-lg-1",
                                children: (0, r.jsxs)("div", {
                                  className: "caption",
                                  children: [
                                    (0, r.jsxs)("h6", {
                                      className: "sub-title mb-30",
                                      "data-swiper-parallax": "-1000",
                                      children: [
                                        "\xa9 ",
                                        e.year,
                                        " ",
                                        (0, r.jsx)("br", {}),
                                        " ",
                                        e.type,
                                      ],
                                    }),
                                    (0, r.jsx)("h1", {
                                      children: (0, r.jsx)(t(), {
                                        href: "/dark/project-details1",
                                        children: (0, r.jsx)("span", {
                                          "data-swiper-parallax": "-2000",
                                          children: e.title,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                      },
                      e.id
                    )
                  ),
                }),
              (0, r.jsxs)("div", {
                className: "slider-contro",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "swiper-button-next swiper-nav-ctrl cursor-pointer",
                    children: [
                      (0, r.jsx)("div", {
                        children: (0, r.jsx)("span", {
                          children: "Next Slide",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        children: (0, r.jsx)("i", {
                          className: "fas fa-chevron-right",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "swiper-button-prev swiper-nav-ctrl cursor-pointer",
                    children: [
                      (0, r.jsx)("div", {
                        children: (0, r.jsx)("i", {
                          className: "fas fa-chevron-left",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        children: (0, r.jsx)("span", {
                          children: "Prev Slide",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", { className: "swiper-pagination dots" }),
            ],
          })
        );
      };
    },
    7283: function (e, s, a) {
      "use strict";
      var r = a(5893),
        l = a(7294),
        i = a(9008),
        t = a.n(i),
        n = a(8104),
        c = a(6054),
        d = a(4555);
      let o = (e) => {
        let { children: s, lightMode: a } = e;
        return (
          (0, l.useEffect)(() => {
            (0, n.Z)({ lightMode: a });
          }, [a]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(t(), {
                children: a
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/plugins.css",
                        }),
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/style.css",
                        }),
                      ],
                    })
                  : (0, r.jsx)("link", {
                      rel: "stylesheet",
                      href: "/dark/assets/css/base.css",
                    }),
              }),
              (0, r.jsx)(c.Z, {}),
              (0, r.jsx)(d.Z, {}),
              s,
            ],
          })
        );
      };
      s.Z = o;
    },
    1844: function (e, s, a) {
      "use strict";
      a.r(s);
      var r = a(5893);
      a(7294);
      var l = a(9008),
        i = a.n(l),
        t = a(7283),
        n = a(7458),
        c = a(7217),
        d = a(8232),
        o = a(1744);
      function u() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i(), {
              children: (0, r.jsx)("title", {
                children: "Geekfolio - Parallax Slider",
              }),
            }),
            (0, r.jsx)(n.Z, {}),
            (0, r.jsx)(c.Z, {}),
            (0, r.jsx)(d.Z, {}),
            (0, r.jsx)("main", { children: (0, r.jsx)(o.Z, {}) }),
          ],
        });
      }
      (u.getLayout = (e) => (0, r.jsx)(t.Z, { children: e })), (s.default = u);
    },
  },
  function (e) {
    e.O(0, [1664, 719, 7142, 9774, 2888, 179], function () {
      return e((e.s = 4640));
    }),
      (_N_E = e.O());
  },
]);
