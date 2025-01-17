"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5124],
  {
    8366: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return a;
        },
      });
      function a() {
        let e = document.querySelectorAll("[data-background]");
        e.length > 0 &&
          e.forEach((e) => {
            let s = e.dataset.background;
            e.style.backgroundImage = "url('".concat(s, "')");
          });
      }
    },
    4576: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return a;
        },
      });
      function a(e) {
        let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.8,
          l = arguments.length > 2 ? arguments[2] : void 0,
          a = document.querySelector(e),
          i = a.getAttribute("data-background");
        i || (i = window.getComputedStyle(a).backgroundImage);
        let c = a.getBoundingClientRect().top * s;
        (a.style.backgroundImage = 'url("'.concat(i, '")')),
          (a.style.backgroundSize = "cover"),
          (a.style.backgroundRepeat = "no-repeat"),
          (a.style.backgroundAttachment = "fixed"),
          (a.style.backgroundPosition = "center ".concat(
            void 0 !== l ? l : c,
            "px"
          )),
          window.addEventListener("scroll", () => {
            (c = a.getBoundingClientRect().top * s),
              (a.style.backgroundPosition = "center ".concat(c, "px"));
          });
      }
    },
    1842: function (e, s, l) {
      var a = l(5893),
        i = l(7294),
        c = l(1664),
        n = l.n(c),
        r = l(4576);
      s.Z = function () {
        return (
          (0, i.useEffect)(() => {
            (0, r.Z)(".sec-bg-img.parallaxie", 0.4);
          }, []),
          (0, a.jsx)("section", {
            className: "call-action-img",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "sec-bg-img bg-img parallaxie",
                  "data-background": "/dark/assets/imgs/works/projects/2/1.jpg",
                }),
                (0, a.jsx)("div", {
                  className: "sec-lg-head section-padding",
                  children: (0, a.jsx)("div", {
                    className: "row ontop",
                    children: (0, a.jsxs)("div", {
                      className: "col-11 d-flex align-items-center",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("h6", {
                              className: "sub-title",
                              children: "Next Project",
                            }),
                            (0, a.jsx)("h2", {
                              className: "fz-50 d-rotate wow",
                              children: (0, a.jsx)("div", {
                                className: "rotate-text",
                                children: "Mission.",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "ml-auto",
                          children: (0, a.jsxs)(n(), {
                            href: "/dark/project-details2",
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
                                    children: "Next Project",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("img", {
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
    9225: function (e, s, l) {
      var a = l(5893),
        i = l(7294),
        c = l(4576);
      s.Z = function () {
        return (
          (0, i.useEffect)(() => {
            (0, c.Z)(".back-image.parallaxie", 0.4);
          }, []),
          (0, a.jsx)("section", {
            className: "section-padding",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, a.jsx)("div", {
                        className: "text",
                        children: (0, a.jsx)("h3", {
                          children:
                            "We create the next generation of AI agents.",
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-7 offset-lg-1",
                      children: (0, a.jsxs)("div", {
                        className: "text",
                        children: [
                          (0, a.jsx)("p", {
                            className: "mb-50",
                            children:
                              "Then God said, 'Let us make humankind in our image, according to our likeness; and let them have dominion over the fish of the sea, and over the birds of the air, and over the cattle, and over all the wild animals of the earth, and over every creeping thing that creeps upon the earth.'",
                          }),
                          (0, a.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, a.jsx)("div", {
                                className: "col-md-6",
                                children: (0, a.jsxs)("ul", {
                                  className: "rest dot-list",
                                  children: [
                                    (0, a.jsx)("li", {
                                      className: "mb-15",
                                      children: "AI R&D+",
                                    }),
                                    (0, a.jsx)("li", {
                                      className: "mb-15",
                                      children: "AI Art Direction",
                                    }),
                                    (0, a.jsx)("li", {
                                      className: "mb-15",
                                      children: "AI Marketing Strategy",
                                    }),
                                    (0, a.jsx)("li", {
                                      className: "mb-15",
                                      children: "AI Mobile App Design",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-md-6",
                                children: (0, a.jsxs)("ul", {
                                  className: "rest dot-list",
                                  children: [
                                    (0, a.jsx)("li", {
                                      className: "mb-15",
                                      children: "AI Content Management",
                                    }),
                                    (0, a.jsx)("li", {
                                      className: "mb-15",
                                      children: "AI System & Guides",
                                    }),
                                    (0, a.jsx)("li", {
                                      className: "mb-15",
                                      children: "AI engineers Design",
                                    }),
                                    (0, a.jsx)("li", {
                                      className: "mb-15",
                                      children: "AI Development",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "row md-marg mt-50",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, a.jsx)("div", {
                        className: "img mb-50",
                        children: (0, a.jsx)("img", {
                          src: "/dark/assets/imgs/works/projects/1/2.jpg",
                          alt: "",
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, a.jsx)("div", {
                        className: "img mb-50",
                        children: (0, a.jsx)("img", {
                          src: "/dark/assets/imgs/works/projects/1/3.jpg",
                          alt: "",
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, a.jsx)("div", {
                        className: "img mb-50",
                        children: (0, a.jsx)("img", {
                          src: "/dark/assets/imgs/works/projects/1/4.jpg",
                          alt: "",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "back-image bg-img parallaxie",
                  "data-background": "/dark/assets/imgs/works/projects/1/5.jpg",
                }),
                (0, a.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, a.jsx)("div", {
                    className: "col-lg-8",
                    children: (0, a.jsx)("div", {
                      className: "text-center mt-50",
                      children: (0, a.jsx)("h5", {
                        className: "fw-200",
                        children:
                          '"Also it causes all, both small and great, both rich and poor, both free and slave, to be marked on the right hand or the forehead, so that no one can buy or sell unless he has the mark, that is, the name of the beast or the number of its name." -We don\'t want your dirty money!.',
                      }),
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "row mt-100",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, a.jsx)("div", {
                        className: "img md-mb50",
                        children: (0, a.jsx)("img", {
                          src: "/dark/assets/imgs/works/projects/1/3.jpg",
                          alt: "",
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-7 offset-lg-1 valign",
                      children: (0, a.jsxs)("div", {
                        className: "text",
                        children: [
                          (0, a.jsx)("h5", {
                            className: "fw-200",
                            children:
                              "It's morning again!. Forget incremental change; we either drift into a dictated future, or FORGE a new world with bold intent. Lo, behold: a declaration of freedom —the dawn of a new era. Start preparing for breakfast, or a new reality.",
                          }),
                          (0, a.jsxs)("ul", {
                            className: "rest list-arrow mt-50",
                            children: [
                              (0, a.jsxs)("li", {
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "icon",
                                    children: (0, a.jsx)("svg", {
                                      width: "100%",
                                      height: "100%",
                                      viewBox: "0 0 9 8",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, a.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                        fill: "currentColor",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("h6", {
                                    className: "inline fz-18",
                                    children: "Amazing AI.",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("li", {
                                className: "mt-10",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "icon",
                                    children: (0, a.jsx)("svg", {
                                      width: "100%",
                                      height: "100%",
                                      viewBox: "0 0 9 8",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, a.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                        fill: "currentColor",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("h6", {
                                    className: "inline fz-18",
                                    children: "Best AI designing experience.",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("li", {
                                className: "mt-10",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "icon",
                                    children: (0, a.jsx)("svg", {
                                      width: "100%",
                                      height: "100%",
                                      viewBox: "0 0 9 8",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, a.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                        fill: "currentColor",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("h6", {
                                    className: "inline fz-18",
                                    children: "Email & Live chat.",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("li", {
                                className: "mt-10",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "icon",
                                    children: (0, a.jsx)("svg", {
                                      width: "100%",
                                      height: "100%",
                                      viewBox: "0 0 9 8",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, a.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                        fill: "currentColor",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("h6", {
                                    className: "inline fz-18",
                                    children: "Amazing AI future.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    8681: function (e, s, l) {
      var a = l(5893),
        i = l(7294),
        c = l(8366);
      s.Z = function () {
        return (
          (0, i.useEffect)(() => {
            (0, c.Z)();
          }, []),
          (0, a.jsxs)("header", {
            className: "proj-header1",
            children: [
              (0, a.jsx)("div", {
                className: "container mb-50",
                children: (0, a.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-6",
                      children: (0, a.jsx)("div", {
                        className: "caption md-mb50",
                        children: (0, a.jsx)("h1", {
                          children: "World Projects.",
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "col-lg-6 d-flex justify-content-end align-items-end",
                      children: (0, a.jsxs)("div", {
                        className: "info row",
                        children: [
                          (0, a.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, a.jsxs)("div", {
                              className: "item mb-30",
                              children: [
                                (0, a.jsx)("h6", {
                                  className: "fz-16",
                                  children: "Category",
                                }),
                                (0, a.jsx)("span", {
                                  className: "sub-title ls1",
                                  children: "Antichrist",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, a.jsxs)("div", {
                              className: "item mb-30",
                              children: [
                                (0, a.jsx)("h6", {
                                  className: "fz-16",
                                  children: "Customer",
                                }),
                                (0, a.jsx)("span", {
                                  className: "sub-title ls1",
                                  children: "Bold People",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, a.jsxs)("div", {
                              className: "item mb-30",
                              children: [
                                (0, a.jsx)("h6", {
                                  className: "fz-16",
                                  children: "Start Date",
                                }),
                                (0, a.jsx)("span", {
                                  className: "sub-title ls1",
                                  children: "January 1, 2022",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, a.jsxs)("div", {
                              className: "item mb-30",
                              children: [
                                (0, a.jsx)("h6", {
                                  className: "fz-16",
                                  children: "Location",
                                }),
                                (0, a.jsx)("span", {
                                  className: "sub-title ls1",
                                  children:
                                    "Santiago, Chile - Virtually everywhere",
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
              (0, a.jsx)("div", {
                className: "bg-img",
                "data-background": "/dark/assets/imgs/works/projects/1/1.jpg",
              }),
            ],
          })
        );
      };
    },
    4361: function (e, s, l) {
      var a = l(5893),
        i = l(7294),
        c = l(7513);
      s.Z = function (e) {
        let { lightMode: s, subBg: l } = e;
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
            className: l ? "sub-bg pt-80" : "",
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
  },
]);
