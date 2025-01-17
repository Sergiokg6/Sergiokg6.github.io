"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6526],
  {
    3037: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return a;
        },
      });
      function a(e) {
        e.selector &&
          e.callback &&
          (e.isElements
            ? document.querySelectorAll(e.selector).forEach((s) => {
                new IntersectionObserver((s) => {
                  s[0].isIntersecting
                    ? e.callback(s[0].target)
                    : e.whenOutOfView && e.whenOutOfView(s[0].target);
                }).observe(s);
              })
            : new IntersectionObserver((s) => {
                s[0].isIntersecting
                  ? e.callback(s[0].target)
                  : e.whenOutOfView && e.whenOutOfView(s[0].target);
              }).observe(document.querySelector(e.selector)));
      }
    },
    7590: function (e, s, l) {
      var a = l(5893),
        i = l(7294),
        c = l(3037);
      s.Z = function () {
        function e() {
          (0, c.Z)({
            selector: ".skill-progress .progres",
            isElements: !0,
            callback: (e) => {
              e.style.width = e.getAttribute("data-value");
            },
          });
        }
        return (
          (0, i.useEffect)(
            () => (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            ),
            []
          ),
          (0, a.jsx)("section", {
            className: "block-sec section-padding pt-0",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row lg-marg",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-6 valign",
                    children: (0, a.jsxs)("div", {
                      className: "md-mb50",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "item-flex d-flex align-items-center mb-50",
                          children: [
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)("div", {
                                className: "icon-img-60",
                                children: (0, a.jsx)("img", {
                                  src: "/dark/assets/imgs/serv-icons/0.png",
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "cont ml-50",
                              children: [
                                (0, a.jsx)("h6", { children: "High Standerd" }),
                                (0, a.jsx)("p", {
                                  className: "fz-15",
                                  children:
                                    "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "item-flex d-flex align-items-center",
                          children: [
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)("div", {
                                className: "icon-img-60",
                                children: (0, a.jsx)("img", {
                                  src: "/dark/assets/imgs/serv-icons/1.png",
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "cont ml-50",
                              children: [
                                (0, a.jsx)("h6", {
                                  children: "Ease of Communication",
                                }),
                                (0, a.jsx)("p", {
                                  className: "fz-15",
                                  children:
                                    "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-6",
                    children: (0, a.jsxs)("div", {
                      className: "cont",
                      children: [
                        (0, a.jsx)("h6", {
                          className: "sub-title mb-15",
                          children: "Our Value",
                        }),
                        (0, a.jsxs)("h3", {
                          className: "mb-15",
                          children: [
                            "Watch the creative process behind our ",
                            (0, a.jsx)("span", {
                              className: "stroke fw-700 opacity-7",
                              children: "digital marketing",
                            }),
                            ".",
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "skills mt-50",
                          children: (0, a.jsxs)("div", {
                            className: "skills-box",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "skill-item mb-40",
                                children: [
                                  (0, a.jsx)("h5", {
                                    className: "fz-14 mb-15",
                                    children: "UI / UX Design",
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "skill-progress",
                                    children: (0, a.jsx)("div", {
                                      className: "progres",
                                      "data-value": "90%",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "skill-item",
                                children: [
                                  (0, a.jsx)("h5", {
                                    className: "fz-14 mb-15",
                                    children: "Apps Development",
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "skill-progress",
                                    children: (0, a.jsx)("div", {
                                      className: "progres",
                                      "data-value": "80%",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    3638: function (e, s, l) {
      var a = l(5893),
        i = l(7294),
        c = l(7513);
      s.Z = function (e) {
        let { lightMode: s } = e;
        return (
          (0, i.useEffect)(() => {
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
            className: "sub-bg",
            children: (0, a.jsxs)("div", {
              className: "footer-container",
              children: [
                (0, a.jsxs)("div", {
                  className: "container pb-80 pt-80 ontop",
                  children: [
                    (0, a.jsx)("div", {
                      className: "call-box text-center mb-80",
                      children: (0, a.jsxs)("h2", {
                        children: [
                          (0, a.jsxs)("a", {
                            href: "#0",
                            children: [
                              "Let's ",
                              (0, a.jsx)("span", {
                                className: "stroke",
                                children: " Discuss",
                              }),
                            ],
                          }),
                          (0, a.jsx)("span", {
                            className: "arrow main-color",
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
                    (0, a.jsxs)("div", {
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
                              children: (0, a.jsx)("h6", {
                                children: "Social",
                              }),
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
                  ],
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
                                  "\xa9 2023 Geekfolio is Powered by",
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "underline",
                                    children: (0, a.jsx)("a", {
                                      href: c.a,
                                      target: "_blank",
                                      children: c.v,
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
    2519: function (e, s, l) {
      var a = l(5893);
      l(7294),
        (s.Z = function () {
          return (0, a.jsx)("section", {
            className: "numbers section-padding",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-3 col-md-6",
                    children: (0, a.jsxs)("div", {
                      className: "item md-mb50",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "fw-800 stroke",
                          children: "16",
                        }),
                        (0, a.jsx)("h6", { children: "Years of Experience" }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "col-lg-3 col-md-6 d-flex justify-content-around",
                    children: (0, a.jsxs)("div", {
                      className: "item md-mb50",
                      children: [
                        (0, a.jsxs)("h2", {
                          className: "fw-800",
                          children: [
                            "4",
                            (0, a.jsx)("span", {
                              className: "fz-80 fw-600",
                              children: "k",
                            }),
                          ],
                        }),
                        (0, a.jsx)("h6", { children: "Projects Complated" }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "col-lg-3 col-md-6 d-flex justify-content-around",
                    children: (0, a.jsxs)("div", {
                      className: "item sm-mb50",
                      children: [
                        (0, a.jsxs)("h2", {
                          className: "fw-800 stroke",
                          children: [
                            "9",
                            (0, a.jsx)("span", {
                              className: "fz-80 fw-600",
                              children: "k",
                            }),
                          ],
                        }),
                        (0, a.jsx)("h6", { children: "Happy Customers" }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-3 col-md-6 d-flex",
                    children: (0, a.jsxs)("div", {
                      className: "item ml-auto",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "fw-800",
                          children: "12",
                        }),
                        (0, a.jsx)("h6", { children: "Awards Winning" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        });
    },
    2774: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return n;
        },
      });
      var a = l(5893),
        i = l(7294),
        c = l(1664),
        r = l.n(c),
        n = function () {
          return (
            (0, i.useEffect)(() => {
              !(function (e) {
                let s =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0.8,
                  l = arguments.length > 2 ? arguments[2] : void 0;
                document.querySelectorAll(e).forEach((e) => {
                  if (e) {
                    let a = e.getAttribute("data-background");
                    a || (a = window.getComputedStyle(e).backgroundImage);
                    let i = e.getBoundingClientRect().top * s;
                    (e.style.backgroundImage = 'url("'.concat(a, '")')),
                      (e.style.backgroundSize = "cover"),
                      (e.style.backgroundRepeat = "no-repeat"),
                      (e.style.backgroundAttachment = "fixed"),
                      (e.style.backgroundPosition = "center ".concat(
                        void 0 !== l ? l : i,
                        "px"
                      )),
                      window.addEventListener("scroll", () => {
                        (i = e.getBoundingClientRect().top * s),
                          (e.style.backgroundPosition = "center ".concat(
                            i,
                            "px"
                          ));
                      });
                  }
                });
              })(".bg-img.parallaxie", 0.2);
            }, []),
            (0, a.jsxs)("section", {
              className: "parallax-show",
              children: [
                (0, a.jsx)("div", {
                  className: "bg-img inner parallaxie valign",
                  "data-background": "/dark/assets/imgs/works/full/1.jpg",
                  "data-overlay-dark": "3",
                  children: (0, a.jsx)("div", {
                    className: "container",
                    children: (0, a.jsx)("div", {
                      className: "row justify-content-center",
                      children: (0, a.jsx)("div", {
                        className: "col-lg-10",
                        children: (0, a.jsxs)("div", {
                          className: "caption text-center",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "sub-title mb-30",
                              "data-swiper-parallax": "-1000",
                              children: "\xa9 2023 Branding",
                            }),
                            (0, a.jsx)("h1", {
                              children: (0, a.jsx)(r(), {
                                href: "/project-details1",
                                children: "Snack Midnight",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "bg-img inner parallaxie valign",
                  "data-background": "/dark/assets/imgs/works/full/2.jpg",
                  "data-overlay-dark": "3",
                  children: (0, a.jsx)("div", {
                    className: "container",
                    children: (0, a.jsx)("div", {
                      className: "row justify-content-center",
                      children: (0, a.jsx)("div", {
                        className: "col-lg-10",
                        children: (0, a.jsxs)("div", {
                          className: "caption text-center",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "sub-title mb-30",
                              "data-swiper-parallax": "-1000",
                              children: "\xa9 2023 Branding",
                            }),
                            (0, a.jsx)("h1", {
                              children: (0, a.jsx)(r(), {
                                href: "/project-details1",
                                children: "Fisherman Portrait",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "bg-img inner parallaxie valign",
                  "data-background": "/dark/assets/imgs/works/full/3.jpg",
                  "data-overlay-dark": "3",
                  children: (0, a.jsx)("div", {
                    className: "container",
                    children: (0, a.jsx)("div", {
                      className: "row justify-content-center",
                      children: (0, a.jsx)("div", {
                        className: "col-lg-10",
                        children: (0, a.jsxs)("div", {
                          className: "caption text-center",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "sub-title mb-30",
                              "data-swiper-parallax": "-1000",
                              children: "\xa9 2023 Branding",
                            }),
                            (0, a.jsx)("h1", {
                              children: (0, a.jsx)(r(), {
                                href: "/project-details1",
                                children: "Tribos Urbanas",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "bg-img inner parallaxie valign",
                  "data-background": "/dark/assets/imgs/works/full/4.jpg",
                  "data-overlay-dark": "3",
                  children: (0, a.jsx)("div", {
                    className: "container",
                    children: (0, a.jsx)("div", {
                      className: "row justify-content-center",
                      children: (0, a.jsx)("div", {
                        className: "col-lg-10",
                        children: (0, a.jsxs)("div", {
                          className: "caption text-center",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "sub-title mb-30",
                              "data-swiper-parallax": "-1000",
                              children: "\xa9 2023 Branding",
                            }),
                            (0, a.jsx)("h1", {
                              children: (0, a.jsx)(r(), {
                                href: "/project-details1",
                                children: "Monsoon in the city",
                              }),
                            }),
                          ],
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
    7283: function (e, s, l) {
      var a = l(5893),
        i = l(7294),
        c = l(9008),
        r = l.n(c),
        n = l(8104),
        t = l(6054),
        d = l(4555);
      let o = (e) => {
        let { children: s, lightMode: l } = e;
        return (
          (0, i.useEffect)(() => {
            (0, n.Z)({ lightMode: l });
          }, [l]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(r(), {
                children: l
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/plugins.css",
                        }),
                        (0, a.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/style.css",
                        }),
                      ],
                    })
                  : (0, a.jsx)("link", {
                      rel: "stylesheet",
                      href: "/dark/assets/css/base.css",
                    }),
              }),
              (0, a.jsx)(t.Z, {}),
              (0, a.jsx)(d.Z, {}),
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
