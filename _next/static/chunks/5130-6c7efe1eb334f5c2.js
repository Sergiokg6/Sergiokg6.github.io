"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5130],
  {
    4576: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return a;
        },
      });
      function a(e) {
        let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.8,
          i = arguments.length > 2 ? arguments[2] : void 0,
          a = document.querySelector(e),
          t = a.getAttribute("data-background");
        t || (t = window.getComputedStyle(a).backgroundImage);
        let l = a.getBoundingClientRect().top * s;
        (a.style.backgroundImage = 'url("'.concat(t, '")')),
          (a.style.backgroundSize = "cover"),
          (a.style.backgroundRepeat = "no-repeat"),
          (a.style.backgroundAttachment = "fixed"),
          (a.style.backgroundPosition = "center ".concat(
            void 0 !== i ? i : l,
            "px"
          )),
          window.addEventListener("scroll", () => {
            (l = a.getBoundingClientRect().top * s),
              (a.style.backgroundPosition = "center ".concat(l, "px"));
          });
      }
    },
    9863: function (e, s, i) {
      var a = i(5893);
      i(7294),
        (s.Z = function () {
          return (0, a.jsxs)("header", {
            className: "page-header section-padding pb-0",
            children: [
              (0, a.jsx)("div", {
                className: "container mt-80",
                children: (0, a.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "col-lg-8",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "caption",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "sub-title",
                              children: "Our Pioneers",
                            }),
                            (0, a.jsx)("h1", {
                              className: "fz-80",
                              children: "Talented pioneers.",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "row",
                          children: (0, a.jsx)("div", {
                            className: "col-lg-9 offset-lg-1",
                            children: (0, a.jsx)("div", {
                              className: "text mt-30",
                              children: (0, a.jsxs)("p", {
                                children: [
                                  "We're not a team; we're a collective of algorithmic pioneers, data visionaries, and AI engineers forging a future where intelligent agents redefine the limits of what's possible. We do not aim to design the universe; we are building the systems that will power it.",
                                  " ",
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-3 valign justify-end",
                      children: (0, a.jsx)("div", {
                        className: "ml-auto explore",
                        children: (0, a.jsx)("a", {
                          href: "#0",
                          children: (0, a.jsxs)("div", {
                            className: "circle-button",
                            children: [
                              (0, a.jsx)("div", {
                                className: "rotate-circle fz-30 text-u",
                                children: (0, a.jsxs)("svg", {
                                  className: "textcircle",
                                  viewBox: "0 0 500 500",
                                  children: [
                                    (0, a.jsx)("defs", {
                                      children: (0, a.jsx)("path", {
                                        id: "textcircle",
                                        d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z",
                                      }),
                                    }),
                                    (0, a.jsx)("text", {
                                      children: (0, a.jsx)("textPath", {
                                        xlinkHref: "#textcircle",
                                        textLength: "900",
                                        children:
                                          "I Have to Join - I Have to Join -",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "arrow",
                                children: (0, a.jsx)("svg", {
                                  width: "18",
                                  height: "18",
                                  viewBox: "0 0 18 18",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, a.jsx)("path", {
                                    d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                    fill: "currentColor",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "main-marq xlrg section-padding pb-0",
                children: (0, a.jsxs)("div", {
                  className: "slide-har st1",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "box",
                      children: [
                        (0, a.jsx)("div", {
                          className: "item",
                          children: (0, a.jsx)("h4", { children: "Our Team" }),
                        }),
                        (0, a.jsx)("div", {
                          className: "item",
                          children: (0, a.jsx)("h4", { children: "Our Team" }),
                        }),
                        (0, a.jsx)("div", {
                          className: "item",
                          children: (0, a.jsx)("h4", { children: "Our Team" }),
                        }),
                        (0, a.jsx)("div", {
                          className: "item",
                          children: (0, a.jsx)("h4", { children: "Our Team" }),
                        }),
                        (0, a.jsx)("div", {
                          className: "item",
                          children: (0, a.jsx)("h4", { children: "Our Team" }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "box",
                      children: [
                        (0, a.jsx)("div", {
                          className: "item",
                          children: (0, a.jsx)("h4", { children: "Our Team" }),
                        }),
                        (0, a.jsx)("div", {
                          className: "item",
                          children: (0, a.jsx)("h4", { children: "Our Team" }),
                        }),
                        (0, a.jsx)("div", {
                          className: "item",
                          children: (0, a.jsx)("h4", { children: "Our Team" }),
                        }),
                        (0, a.jsx)("div", {
                          className: "item",
                          children: (0, a.jsx)("h4", { children: "Our Team" }),
                        }),
                        (0, a.jsx)("div", {
                          className: "item",
                          children: (0, a.jsx)("h4", { children: "Our Team" }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        });
    },
    8855: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return l;
        },
      });
      var a = i(5893);
      i(7294);
      var t = JSON.parse(
          '[{"id":1,"image":"/dark/assets/imgs/team/1.jpg","name":"Dr. Aris Thorne","position":"Chief AI Architect"},{"id":2,"image":"/dark/assets/imgs/team/2.jpg","name":"Evelyn Vance","position":"Lead AI Engineer"},{"id":3,"image":"/dark/assets/imgs/team/3.jpg","name":"Kai Sterling","position":"Chief Data Strategist"},{"id":4,"image":"/dark/assets/imgs/team/4.jpg","name":"Lena Reyes","position":"Lead Automation Specialist"},{"id":5,"image":"/dark/assets/imgs/team/1.jpg","name":"Jax Vorn","position":"Chief Algorithmic Innovation"},{"id":6,"image":"/dark/assets/imgs/team/2.jpg","name":"Zara Hayes","position":"Lead AI Integration"}]'
        ),
        l = function () {
          return (0, a.jsx)("section", {
            className: "team-crev section-padding sub-bg",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsx)("div", {
                className: "row md-marg",
                children: t.map((e) =>
                  (0, a.jsx)(
                    "div",
                    {
                      className: "col-lg-4",
                      children: (0, a.jsx)("div", {
                        className: "swiper-slide mb-50",
                        children: (0, a.jsxs)("div", {
                          className: "item",
                          children: [
                            (0, a.jsx)("div", {
                              className: "img",
                              children: (0, a.jsx)("img", {
                                src: e.image,
                                alt: "",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "info",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "main-marq team-position",
                                  children: (0, a.jsxs)("div", {
                                    className: "slide-har st1 non-strok",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "box",
                                        children: [, , , , ,]
                                          .fill()
                                          .map((s, i) =>
                                            (0, a.jsx)(
                                              "div",
                                              {
                                                className: "item",
                                                children: (0, a.jsx)("h4", {
                                                  children: e.position,
                                                }),
                                              },
                                              i
                                            )
                                          ),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "box",
                                        children: [, , , , ,]
                                          .fill()
                                          .map((s, i) =>
                                            (0, a.jsx)(
                                              "div",
                                              {
                                                className: "item",
                                                children: (0, a.jsx)("h4", {
                                                  children: e.position,
                                                }),
                                              },
                                              i
                                            )
                                          ),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "main-marq team-name",
                                  children: (0, a.jsxs)("div", {
                                    className: "slide-har st1 non-strok",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "box",
                                        children: [, , , , ,]
                                          .fill()
                                          .map((s, i) =>
                                            (0, a.jsx)(
                                              "div",
                                              {
                                                className: "item",
                                                children: (0, a.jsx)("h4", {
                                                  children: e.name,
                                                }),
                                              },
                                              i
                                            )
                                          ),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "box",
                                        children: [, , , , ,]
                                          .fill()
                                          .map((s, i) =>
                                            (0, a.jsx)(
                                              "div",
                                              {
                                                className: "item",
                                                children: (0, a.jsx)("h4", {
                                                  children: e.name,
                                                }),
                                              },
                                              i
                                            )
                                          ),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    },
                    e.id
                  )
                ),
              }),
            }),
          });
        };
    },
    1086: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return d;
        },
      });
      var a = i(5893),
        t = i(7294),
        l = i(719),
        n = i(8116),
        r = JSON.parse(
          '[{"id":1,"content":"Before Cleverest, I was navigating the limitations of human-driven strategies. Now, I\'m witnessing the raw power of algorithmic intelligence. They don\'t just meet expectations; they transcend them.","image":"/dark/assets/imgs/testim/1.jpg","author":"Dr. Anya Sharma","position":"Chief Innovation Officer"},{"id":2,"content":"I\'ve worked with countless teams, but Cleverest operates on a different plane. Their AI-driven solutions aren\'t just efficient; they are breathtakingly transformative. They\'ve redefined what\'s possible in our industry.","image":"/dark/assets/imgs/testim/2.jpg","author":"Marcus Vance","position":"CEO & Founder"},{"id":3,"content":"Cleverest didn\'t just automate our systems; they unlocked a new dimension of potential. Their AI agents are not mere tools; they are the architects of an engineered future. The results are beyond anything I\'ve ever witnessed.","image":"/dark/assets/imgs/testim/1.jpg","author":"Evelyn Reed","position":"Lead Data Scientist"},{"id":4,"content":"With Cleverest, we didn\'t just improve processes; we transcended them. Their approach is not simply professional; it\'s visionary, with solutions that are nothing short of astonishing. They\'ve proven that AI isn\'t just the future—it\'s the present.","image":"/dark/assets/imgs/testim/2.jpg","author":"Dr. Ben Carter","position":"CTO"}]'
        );
      let c = {
        modules: [n.W_, n.tl],
        loop: !0,
        spaceBetween: 30,
        speed: 1e3,
        slidesPerView: 2,
        pagination: { el: ".swiper-pagination", clickable: !0 },
        navigation: {
          nextEl: ".testim-controls .swiper-button-next",
          prevEl: ".testim-controls .swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        },
      };
      var d = function () {
        let [e, s] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            s(!0);
          }, []),
          (0, a.jsx)("section", {
            className: "testim-crv section-padding",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-4 valign",
                    children: (0, a.jsxs)("div", {
                      className: "sec-lg-head md-mb80",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "position-re",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "dot-titl-non mb-10",
                              children: "What Clients Says?",
                            }),
                            (0, a.jsx)("h2", {
                              className: "fz-50",
                              children: "Testimonials",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "swiper-controls testim-controls arrow-out d-flex mt-50",
                          children: [
                            (0, a.jsx)("div", {
                              className: "swiper-button-prev",
                              children: (0, a.jsx)("span", {
                                className: "left",
                                children: (0, a.jsx)("svg", {
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 20 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, a.jsx)("path", {
                                    d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                    fill: "currentColor",
                                  }),
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "swiper-button-next ml-50",
                              children: (0, a.jsx)("span", {
                                className: "right",
                                children: (0, a.jsx)("svg", {
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 20 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, a.jsx)("path", {
                                    d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                    fill: "currentColor",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-8",
                    children: (0, a.jsx)("div", {
                      className: "testim-swiper2",
                      children:
                        e &&
                        (0, a.jsx)(l.tq, {
                          ...c,
                          id: "content-carousel-container-unq-testim",
                          className: "swiper-container",
                          children: r.map((e) =>
                            (0, a.jsx)(
                              l.o5,
                              {
                                children: (0, a.jsxs)("div", {
                                  className: "item",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "cont mb-40",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "rate-stars mb-20 fz-12",
                                          children: (0, a.jsxs)("span", {
                                            className: "rate main-color",
                                            children: [
                                              (0, a.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                              (0, a.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                              (0, a.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                              (0, a.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                              (0, a.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)("p", {
                                          className: "fw-400",
                                          children: e.content,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)("div", {
                                          children: (0, a.jsx)("div", {
                                            className: "img circle-60",
                                            children: (0, a.jsx)("img", {
                                              src: e.image,
                                              alt: "",
                                              className: "circle-img",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "ml-30",
                                          children: (0, a.jsxs)("div", {
                                            className: "info",
                                            children: [
                                              (0, a.jsx)("h6", {
                                                className: "fz-16",
                                                children: e.author,
                                              }),
                                              (0, a.jsx)("span", {
                                                className:
                                                  "opacity-7 sub-title",
                                                children: e.position,
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              e.id
                            )
                          ),
                        }),
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    8917: function (e, s, i) {
      var a = i(5893),
        t = i(7294),
        l = i(1664),
        n = i.n(l),
        r = i(4576);
      s.Z = function (e) {
        let { lightMode: s, innerPageStyle: i } = e;
        return (
          (0, t.useEffect)(() => {
            (0, r.Z)(".sec-bg-img.parallaxie", 0.4);
          }, []),
          (0, a.jsx)("section", {
            className: "call-action-img",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "sec-bg-img bg-img parallaxie",
                  "data-background": "/dark/assets/imgs/background/2.jpg",
                }),
                (0, a.jsx)("div", {
                  className: "sec-lg-head section-padding",
                  children: (0, a.jsx)("div", {
                    className: "row ontop",
                    children: (0, a.jsxs)("div", {
                      className: "col-11 d-flex align-items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "valign",
                          children: (0, a.jsxs)("h2", {
                            className: "fz-50 d-rotate wow",
                            children: [
                              (0, a.jsx)("span", {
                                className: "rotate-text",
                                children: "Have an AI idea in mind?",
                              }),
                              (0, a.jsxs)("span", {
                                className: "rotate-text",
                                children: [
                                  "Let’s",
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: i ? "" : "sub-font",
                                    children: "get to work",
                                  }),
                                  ".",
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "ml-auto",
                          children: (0, a.jsxs)(n(), {
                            href: "/dark/page-contact",
                            className:
                              "butn-circle d-flex align-items-center text-center m-auto",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "full-width",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: (0, a.jsx)("svg", {
                                      width: "18",
                                      height: "18",
                                      viewBox: "0 0 18 18",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, a.jsx)("path", {
                                        d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                        fill: "currentColor",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "full-width",
                                    children: "Get In Touch",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("img", {
                                src: "/".concat(
                                  s ? "light" : "dark",
                                  "/assets/imgs/svg-assets/circle-star.svg"
                                ),
                                alt: "",
                                className: "circle-star",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    4361: function (e, s, i) {
      var a = i(5893),
        t = i(7294),
        l = i(7513);
      s.Z = function (e) {
        let { lightMode: s, subBg: i } = e;
        return (
          (0, t.useEffect)(() => {
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
          }, []),
          (0, a.jsx)("footer", {
            className: i ? "sub-bg pt-80" : "",
            children: (0, a.jsxs)("div", {
              className: "footer-container",
              children: [
                (0, a.jsx)("div", {
                  className: "container pb-80 pt-80 ontop",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-lg-3",
                        children: (0, a.jsxs)("div", {
                          className: "colum md-mb50",
                          children: [
                            (0, a.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, a.jsx)("h6", {
                                children: "Address",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "text",
                              children: (0, a.jsx)("p", {
                                children:
                                  "Chile — 785 15h Street, Office 478 Santiago de Chile",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-3 offset-lg-1",
                        children: (0, a.jsxs)("div", {
                          className: "colum md-mb50",
                          children: [
                            (0, a.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, a.jsx)("h6", {
                                children: "Say Hello",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "text",
                              children: [
                                (0, a.jsx)("p", {
                                  className: "mb-10",
                                  children: (0, a.jsx)("a", {
                                    href: "mailto:scayuqueo@usm.cl",
                                    children: "sergio@cleverest.cl",
                                  }),
                                }),
                                (0, a.jsx)("h5", {
                                  children: (0, a.jsx)("a", {
                                    href: "callto:+56929202244",
                                    children: "+569 29202244",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "col-lg-2 md-mb50",
                        children: [
                          (0, a.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, a.jsx)("h6", { children: "Social" }),
                          }),
                          (0, a.jsxs)("ul", {
                            className: "rest social-text",
                            children: [
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#0",
                                  children: "Facebook",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  target: "_blank",
                                  href: "https://x.com/cleverest_cl",
                                  children: "Twitter",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.linkedin.com/in/cleverest/",
                                  children: "LinkedIn",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.instagram.com/cleverest.cl",
                                  children: "Instagram",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "col-lg-3",
                        children: [
                          (0, a.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, a.jsx)("h6", {
                              children: "Newsletter",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "subscribe",
                            children: (0, a.jsx)("form", {
                              action: "contact.php",
                              children: (0, a.jsxs)("div", {
                                className: "form-group rest",
                                children: [
                                  (0, a.jsx)("input", {
                                    type: "email",
                                    placeholder: "Type Your Email",
                                  }),
                                  (0, a.jsx)("button", {
                                    type: "submit",
                                    children: (0, a.jsx)("i", {
                                      className: "fas fa-arrow-right",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "sub-footer pt-40 pb-40 bord-thin-top ontop",
                  children: (0, a.jsx)("div", {
                    className: "container",
                    children: (0, a.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, a.jsx)("div", {
                          className: "col-lg-4",
                          children: (0, a.jsx)("div", {
                            className: "logo",
                            children: (0, a.jsx)("a", {
                              href: "#0",
                              children: (0, a.jsx)("img", {
                                src: "/dark/assets/imgs/logo-".concat(
                                  s ? "dark" : "light",
                                  ".png"
                                ),
                                alt: "",
                              }),
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "col-lg-8",
                          children: (0, a.jsx)("div", {
                            className: "copyright d-flex",
                            children: (0, a.jsx)("div", {
                              className: "ml-auto",
                              children: (0, a.jsxs)("p", {
                                className: "fz-13",
                                children: [
                                  "\xa9 2025 Cleverest.cl is Powered by",
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "underline",
                                    children: (0, a.jsx)("a", {
                                      href: l.a,
                                      target: "_blank",
                                      children: l.v,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
  },
]);
