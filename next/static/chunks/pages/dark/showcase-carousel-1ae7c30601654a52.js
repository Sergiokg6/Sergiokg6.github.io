(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4168],
  {
    345: function (s, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/showcase-carousel",
        function () {
          return i(9819);
        },
      ]);
    },
    9370: function (s, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return h;
        },
      });
      var r = i(5893),
        t = i(7294),
        a = i(1664),
        n = i.n(a),
        l = i(719),
        c = i(8116),
        d = JSON.parse(
          '[{"id":1,"image":"/dark/assets/imgs/works/grid2/6.jpg","category":"Branding","title":"Artboard Studio"},{"id":2,"image":"/dark/assets/imgs/works/grid2/2.jpg","category":"Branding","title":"Artboard Studio"},{"id":3,"image":"/dark/assets/imgs/works/grid2/3.jpg","category":"Branding","title":"Artboard Studio"},{"id":4,"image":"/dark/assets/imgs/works/grid2/4.jpg","category":"Branding","title":"Artboard Studio"},{"id":5,"image":"/dark/assets/imgs/works/grid2/5.jpg","category":"Branding","title":"Artboard Studio"}]'
        );
      let o = {
        modules: [c.W_, c.tl],
        speed: 1e3,
        spaceBetween: 80,
        loop: !0,
        centeredSlides: !0,
        mousewheel: !0,
        slidesPerView: 2,
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 30 },
          640: { slidesPerView: 2, spaceBetween: 60 },
          768: { slidesPerView: 2, spaceBetween: 60 },
          1024: { slidesPerView: 2 },
        },
        pagination: { el: ".work-carsouel .swiper-pagination", clickable: !0 },
        navigation: {
          nextEl: ".work-carsouel .swiper-button-next",
          prevEl: ".work-carsouel .swiper-button-prev",
        },
      };
      var h = function (s) {
        let { lightMode: e } = s,
          [i, a] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            a(!0);
          }, []),
          (0, r.jsx)("section", {
            className:
              "work-carsouel full-height valign section-padding ".concat(
                e ? "light" : ""
              ),
            children: (0, r.jsx)("div", {
              className: "container-fluid rest",
              children: (0, r.jsx)("div", {
                className: "row",
                children: (0, r.jsx)("div", {
                  className: "col-12",
                  children: (0, r.jsxs)("div", {
                    className: "work-crus work-crus2",
                    children: [
                      i &&
                        (0, r.jsx)(l.tq, {
                          ...o,
                          id: "content-carousel-container-unq-w",
                          className: "swiper-container",
                          children: d.map((s) =>
                            (0, r.jsx)(
                              l.o5,
                              {
                                children: (0, r.jsx)("div", {
                                  className: "item",
                                  children: (0, r.jsxs)("div", {
                                    className: "img",
                                    children: [
                                      (0, r.jsx)("img", {
                                        src: s.image,
                                        alt: "",
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                          (0, r.jsx)("span", {
                                            className: "mb-5",
                                            children: s.category,
                                          }),
                                          (0, r.jsx)("h6", {
                                            className: "fz-18",
                                            children: s.title,
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(n(), {
                                        href: "/dark/project-details1",
                                        className: "plink",
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              s.id
                            )
                          ),
                        }),
                      (0, r.jsx)("div", {
                        className: "swiper-controls work-controls arrow-out",
                        children: (0, r.jsxs)("div", {
                          className: "container",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "d-flex",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "swiper-button-prev",
                                  children: (0, r.jsx)("span", {
                                    className: "left",
                                    children: (0, r.jsx)("svg", {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 20 20",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, r.jsx)("path", {
                                        d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                        fill: "currentColor",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "swiper-button-next ml-auto",
                                  children: (0, r.jsx)("span", {
                                    className: "right",
                                    children: (0, r.jsx)("svg", {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 20 20",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, r.jsx)("path", {
                                        d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                        fill: "currentColor",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "swiper-pagination",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          })
        );
      };
    },
    480: function (s, e, i) {
      "use strict";
      var r = i(5893),
        t = i(7294),
        a = i(9008),
        n = i.n(a),
        l = i(8104),
        c = i(7458),
        d = i(6054),
        o = i(4555);
      let h = (s) => {
        let { children: e, lightMode: i } = s;
        return (
          (0, t.useEffect)(() => {
            (0, l.Z)({ lightMode: i });
          }, [i]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(n(), {
                children: i
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
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/showcase/assets/css/showcases.css",
                        }),
                      ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/dark/assets/css/base.css",
                        }),
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/dark/showcase/assets/css/showcases.css",
                        }),
                      ],
                    }),
              }),
              (0, r.jsx)(c.Z, {}),
              (0, r.jsx)(d.Z, {}),
              (0, r.jsx)(o.Z, {}),
              e,
            ],
          })
        );
      };
      e.Z = h;
    },
    9819: function (s, e, i) {
      "use strict";
      i.r(e);
      var r = i(5893),
        t = i(7294),
        a = i(9008),
        n = i.n(a),
        l = i(480),
        c = i(7458),
        d = i(7217),
        o = i(8232),
        h = i(9370);
      function g() {
        return (
          (0, t.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(n(), {
                children: (0, r.jsx)("title", {
                  children: "Cleverest - Carousel",
                }),
              }),
              (0, r.jsx)(c.Z, {}),
              (0, r.jsx)(d.Z, {}),
              (0, r.jsx)(o.Z, {}),
              (0, r.jsx)("main", { children: (0, r.jsx)(h.Z, {}) }),
            ],
          })
        );
      }
      (g.getLayout = (s) => (0, r.jsx)(l.Z, { children: s })), (e.default = g);
    },
  },
  function (s) {
    s.O(0, [1664, 719, 7142, 9774, 2888, 179], function () {
      return s((s.s = 345));
    }),
      (_N_E = s.O());
  },
]);
