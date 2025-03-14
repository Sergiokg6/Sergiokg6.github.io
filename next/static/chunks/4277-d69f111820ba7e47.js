"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4277],
  {
    4576: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return i;
        },
      });
      function i(e) {
        let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.8,
          a = arguments.length > 2 ? arguments[2] : void 0,
          i = document.querySelector(e),
          c = i.getAttribute("data-background");
        c || (c = window.getComputedStyle(i).backgroundImage);
        let l = i.getBoundingClientRect().top * s;
        (i.style.backgroundImage = 'url("'.concat(c, '")')),
          (i.style.backgroundSize = "cover"),
          (i.style.backgroundRepeat = "no-repeat"),
          (i.style.backgroundAttachment = "fixed"),
          (i.style.backgroundPosition = "center ".concat(
            void 0 !== a ? a : l,
            "px"
          )),
          window.addEventListener("scroll", () => {
            (l = i.getBoundingClientRect().top * s),
              (i.style.backgroundPosition = "center ".concat(l, "px"));
          });
      }
    },
    600: function (e, s, a) {
      var i = a(5893),
        c = a(7294),
        l = a(4576);
      s.Z = function () {
        return (
          (0, c.useEffect)(() => {
            (0, l.Z)(".back-image.parallaxie", 0.4);
          }, []),
          (0, i.jsxs)("section", {
            className: "section-padding",
            children: [
              (0, i.jsx)("div", {
                className: "container",
                children: (0, i.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, i.jsx)("div", {
                    className: "col-lg-8",
                    children: (0, i.jsxs)("div", {
                      className: "cont",
                      children: [
                        (0, i.jsx)("h3", {
                          className: "mb-15",
                          children: "About the Project.",
                        }),
                        (0, i.jsx)("p", {
                          children:
                            "Won’t seasons, appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above.",
                        }),
                        (0, i.jsxs)("div", {
                          className: "info d-flex mt-50",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "item mr-50",
                              children: [
                                (0, i.jsx)("h6", {
                                  className: "fz-16",
                                  children: "Category",
                                }),
                                (0, i.jsx)("span", {
                                  className: "sub-title ls1",
                                  children: "Digital Design",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "item mr-50",
                              children: [
                                (0, i.jsx)("h6", {
                                  className: "fz-16",
                                  children: "Customer",
                                }),
                                (0, i.jsx)("span", {
                                  className: "sub-title ls1",
                                  children: "ThemesCamp",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "item",
                              children: [
                                (0, i.jsx)("h6", {
                                  className: "fz-16",
                                  children: "Date",
                                }),
                                (0, i.jsx)("span", {
                                  className: "sub-title ls1",
                                  children: "August 6, 2020",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: "back-image bg-img parallaxie mt-100",
                "data-background": "/dark/assets/imgs/works/projects/2/2.jpg",
              }),
            ],
          })
        );
      };
    },
    7522: function (e, s, a) {
      var i = a(5893),
        c = a(7294),
        l = a(1664),
        r = a.n(l),
        t = a(4576);
      s.Z = function () {
        return (
          (0, c.useEffect)(() => {
            (0, t.Z)(".sec-bg-img.parallaxie", 0.4);
          }, []),
          (0, i.jsx)("section", {
            className: "call-action-img",
            children: (0, i.jsxs)("div", {
              className: "container",
              children: [
                (0, i.jsx)("div", {
                  className: "sec-bg-img bg-img parallaxie",
                  "data-background": "/dark/assets/imgs/works/projects/1/1.jpg",
                }),
                (0, i.jsx)("div", {
                  className: "sec-lg-head section-padding",
                  children: (0, i.jsx)("div", {
                    className: "row ontop",
                    children: (0, i.jsxs)("div", {
                      className: "col-11 d-flex align-items-center",
                      children: [
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("h6", {
                              className: "sub-title",
                              children: "Next Project",
                            }),
                            (0, i.jsx)("h2", {
                              className: "fz-50 d-rotate wow",
                              children: (0, i.jsx)("span", {
                                className: "rotate-text",
                                children: "Antichrist",
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "ml-auto",
                          children: (0, i.jsxs)(r(), {
                            href: "/dark/project-details1",
                            className:
                              "butn-circle d-flex align-items-center text-center m-auto",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "full-width",
                                children: [
                                  (0, i.jsx)("span", {
                                    children: (0, i.jsx)("svg", {
                                      width: "18",
                                      height: "18",
                                      viewBox: "0 0 18 18",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, i.jsx)("path", {
                                        d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                        fill: "currentColor",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "full-width",
                                    children: "Next Project",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("img", {
                                src: "/dark/assets/imgs/svg-assets/circle-star.svg",
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
    8638: function (e, s, a) {
      var i = a(5893),
        c = a(7294),
        l = a(719);
      let r = {
        loop: !0,
        slidesPerView: 4,
        spaceBetween: 80,
        centeredSlides: !0,
        speed: 1e3,
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        },
      };
      s.Z = function () {
        let [e, s] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(() => {
            s(!0);
          }, []),
          (0, i.jsxs)("div", {
            className: "section-padding pt-0",
            children: [
              (0, i.jsx)("div", {
                className: "container-fluid rest",
                children: (0, i.jsx)("div", {
                  className: "swiper4",
                  children:
                    e &&
                    (0, i.jsxs)(l.tq, {
                      div: !0,
                      id: "content-carousel-container-unq-img",
                      className: "swiper-container",
                      ...r,
                      children: [
                        (0, i.jsx)(l.o5, {
                          children: (0, i.jsx)("div", {
                            className: "img",
                            children: (0, i.jsx)("img", {
                              src: "/dark/assets/imgs/works/projects/2/3.jpg",
                              alt: "",
                            }),
                          }),
                        }),
                        (0, i.jsx)(l.o5, {
                          children: (0, i.jsx)("div", {
                            className: "img",
                            children: (0, i.jsx)("img", {
                              src: "/dark/assets/imgs/works/projects/2/4.jpg",
                              alt: "",
                            }),
                          }),
                        }),
                        (0, i.jsx)(l.o5, {
                          children: (0, i.jsx)("div", {
                            className: "img",
                            children: (0, i.jsx)("img", {
                              src: "/dark/assets/imgs/works/projects/2/5.jpg",
                              alt: "",
                            }),
                          }),
                        }),
                        (0, i.jsx)(l.o5, {
                          children: (0, i.jsx)("div", {
                            className: "img",
                            children: (0, i.jsx)("img", {
                              src: "/dark/assets/imgs/works/projects/2/6.jpg",
                              alt: "",
                            }),
                          }),
                        }),
                        (0, i.jsx)(l.o5, {
                          children: (0, i.jsx)("div", {
                            className: "img",
                            children: (0, i.jsx)("img", {
                              src: "/dark/assets/imgs/works/projects/2/4.jpg",
                              alt: "",
                            }),
                          }),
                        }),
                        (0, i.jsx)(l.o5, {
                          children: (0, i.jsx)("div", {
                            className: "img",
                            children: (0, i.jsx)("img", {
                              src: "/dark/assets/imgs/works/projects/2/5.jpg",
                              alt: "",
                            }),
                          }),
                        }),
                      ],
                    }),
                }),
              }),
              (0, i.jsx)("div", {
                className: "container mt-100",
                children: (0, i.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, i.jsx)("div", {
                    className: "col-lg-8",
                    children: (0, i.jsx)("div", {
                      className: "text-center",
                      children: (0, i.jsx)("h5", {
                        className: "fw-300",
                        children:
                          "Visual hierarchy is the principle of arranging elements to show their order of importance. Designers structure visual characteristics—e.g., menu icons—so users can understand information easily. By laying out elements logically and strategically, designers influence users’ perceptions and guide them to desired actions. Users notice larger elements more easily can convert.",
                      }),
                    }),
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    7385: function (e, s, a) {
      var i = a(5893),
        c = a(7294),
        l = a(4576);
      s.Z = function () {
        return (
          (0, c.useEffect)(() => {
            (0, l.Z)(".proj-header2.parallaxie", 0.3, 0);
          }, []),
          (0, i.jsx)("header", {
            className: "proj-header2 bg-img valign parallaxie",
            "data-background": "/dark/assets/imgs/works/projects/2/1.jpg",
            "data-overlay-dark": "5",
            children: (0, i.jsx)("div", {
              className: "container mt-80",
              children: (0, i.jsx)("div", {
                className: "row justify-content-center",
                children: (0, i.jsx)("div", {
                  className: "col-lg-8",
                  children: (0, i.jsxs)("div", {
                    className: "caption text-center",
                    children: [
                      (0, i.jsx)("h1", { children: "Sinzere The Mission" }),
                      (0, i.jsx)("h6", {
                        className: "sub-title",
                        children: "Digital Marketing",
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
    4361: function (e, s, a) {
      var i = a(5893),
        c = a(7294),
        l = a(7513);
      s.Z = function (e) {
        let { lightMode: s, subBg: a } = e;
        return (
          (0, c.useEffect)(() => {
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
          (0, i.jsx)("footer", {
            className: a ? "sub-bg pt-80" : "",
            children: (0, i.jsxs)("div", {
              className: "footer-container",
              children: [
                (0, i.jsx)("div", {
                  className: "container pb-80 pt-80 ontop",
                  children: (0, i.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-lg-3",
                        children: (0, i.jsxs)("div", {
                          className: "colum md-mb50",
                          children: [
                            (0, i.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, i.jsx)("h6", {
                                children: "Address",
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "text",
                              children: (0, i.jsx)("p", {
                                children:
                                  "Chile — 785 15h Street, Office 478 Santiago de Chile",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-lg-3 offset-lg-1",
                        children: (0, i.jsxs)("div", {
                          className: "colum md-mb50",
                          children: [
                            (0, i.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, i.jsx)("h6", {
                                children: "Say Hello",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: "text",
                              children: [
                                (0, i.jsx)("p", {
                                  className: "mb-10",
                                  children: (0, i.jsx)("a", {
                                    href: "mailto:scayuqueo@usm.cl",
                                    children: "sergio@cleverest.cl",
                                  }),
                                }),
                                (0, i.jsx)("h5", {
                                  children: (0, i.jsx)("a", {
                                    href: "callto:+56929202244",
                                    children: "+569 29202244",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "col-lg-2 md-mb50",
                        children: [
                          (0, i.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, i.jsx)("h6", { children: "Social" }),
                          }),
                          (0, i.jsxs)("ul", {
                            className: "rest social-text",
                            children: [
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  href: "#0",
                                  children: "Facebook",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  target: "_blank",
                                  href: "https://x.com/cleverest_cl",
                                  children: "Twitter",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.linkedin.com/in/cleverest/",
                                  children: "LinkedIn",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.instagram.com/cleverest.cl",
                                  children: "Instagram",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "col-lg-3",
                        children: [
                          (0, i.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, i.jsx)("h6", {
                              children: "Newsletter",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "subscribe",
                            children: (0, i.jsx)("form", {
                              action: "contact.php",
                              children: (0, i.jsxs)("div", {
                                className: "form-group rest",
                                children: [
                                  (0, i.jsx)("input", {
                                    type: "email",
                                    placeholder: "Type Your Email",
                                  }),
                                  (0, i.jsx)("button", {
                                    type: "submit",
                                    children: (0, i.jsx)("i", {
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
                (0, i.jsx)("div", {
                  className: "sub-footer pt-40 pb-40 bord-thin-top ontop",
                  children: (0, i.jsx)("div", {
                    className: "container",
                    children: (0, i.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, i.jsx)("div", {
                          className: "col-lg-4",
                          children: (0, i.jsx)("div", {
                            className: "logo",
                            children: (0, i.jsx)("a", {
                              href: "#0",
                              children: (0, i.jsx)("img", {
                                src: "/dark/assets/imgs/logo-".concat(
                                  s ? "dark" : "light",
                                  ".png"
                                ),
                                alt: "",
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-lg-8",
                          children: (0, i.jsx)("div", {
                            className: "copyright d-flex",
                            children: (0, i.jsx)("div", {
                              className: "ml-auto",
                              children: (0, i.jsxs)("p", {
                                className: "fz-13",
                                children: [
                                  "\xa9 2025 Cleverest.cl is Powered by",
                                  " ",
                                  (0, i.jsx)("span", {
                                    className: "underline",
                                    children: (0, i.jsx)("a", {
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
    7283: function (e, s, a) {
      var i = a(5893),
        c = a(7294),
        l = a(9008),
        r = a.n(l),
        t = a(8104),
        n = a(6054),
        d = a(4555);
      let o = (e) => {
        let { children: s, lightMode: a } = e;
        return (
          (0, c.useEffect)(() => {
            (0, t.Z)({ lightMode: a });
          }, [a]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(r(), {
                children: a
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/plugins.css",
                        }),
                        (0, i.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/style.css",
                        }),
                      ],
                    })
                  : (0, i.jsx)("link", {
                      rel: "stylesheet",
                      href: "/dark/assets/css/base.css",
                    }),
              }),
              (0, i.jsx)(n.Z, {}),
              (0, i.jsx)(d.Z, {}),
              s,
            ],
          })
        );
      };
      s.Z = o;
    },
    7513: function (e) {
      e.exports = JSON.parse('{"v":"Cleverest","a":"https://cleverest.cl/"}');
    },
  },
]);
