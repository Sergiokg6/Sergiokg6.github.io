"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5471],
  {
    8366: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return a;
        },
      });
      function a() {
        let s = document.querySelectorAll("[data-background]");
        s.length > 0 &&
          s.forEach((s) => {
            let e = s.dataset.background;
            s.style.backgroundImage = "url('".concat(e, "')");
          });
      }
    },
    4576: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return a;
        },
      });
      function a(s) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.8,
          i = arguments.length > 2 ? arguments[2] : void 0,
          a = document.querySelector(s),
          l = a.getAttribute("data-background");
        l || (l = window.getComputedStyle(a).backgroundImage);
        let c = a.getBoundingClientRect().top * e;
        (a.style.backgroundImage = 'url("'.concat(l, '")')),
          (a.style.backgroundSize = "cover"),
          (a.style.backgroundRepeat = "no-repeat"),
          (a.style.backgroundAttachment = "fixed"),
          (a.style.backgroundPosition = "center ".concat(
            void 0 !== i ? i : c,
            "px"
          )),
          window.addEventListener("scroll", () => {
            (c = a.getBoundingClientRect().top * e),
              (a.style.backgroundPosition = "center ".concat(c, "px"));
          });
      }
    },
    33: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return m;
        },
      });
      var a = i(5893),
        l = i(7294),
        c = i(1664),
        n = i.n(c),
        r = i(719),
        t = i(8116),
        d = JSON.parse(
          '[{"id":1,"image":"/dark/assets/imgs/blog/h1.jpg","date":"30 august 2021","title":"Creative advertising in our life became a info noise"},{"id":2,"image":"/dark/assets/imgs/blog/h2.jpg","date":"30 august 2021","title":"Creative advertising in our life became a info noise"},{"id":3,"image":"/dark/assets/imgs/blog/h3.jpg","date":"30 august 2021","title":"We create some things for your success in future growth"}]'
        );
      let o = {
        modules: [t.W_],
        slidesPerView: 3,
        loop: !0,
        spaceBetween: 10,
        speed: 1e3,
        breakpoints: {
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
        navigation: {
          nextEl: ".blog-modern .swiper-button-next",
          prevEl: ".blog-modern .swiper-button-prev",
        },
      };
      var m = function () {
        let [s, e] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            e(!0);
          }, []),
          (0, a.jsx)("section", {
            className: "blog-modern section-padding",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "sec-lg-head mb-80",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, a.jsxs)("div", {
                          className: "position-re",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "dot-titl mb-10",
                              children: "Selected Projects",
                            }),
                            (0, a.jsx)("h2", {
                              className: "fz-70 fw-700",
                              children: "Featured Works",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-4 d-flex align-items-center",
                        children: (0, a.jsx)("div", {
                          className: "text",
                          children: (0, a.jsx)("p", {
                            children:
                              "Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "blog-carsouel",
                  children:
                    s &&
                    (0, a.jsx)(r.tq, {
                      ...o,
                      id: "content-carousel-container-unq-blog",
                      className: "swiper-container",
                      children: d.map((s) =>
                        (0, a.jsx)(
                          r.o5,
                          {
                            className: "wow fadeInUp",
                            "data-wow-delay": ".1s",
                            children: (0, a.jsxs)("div", {
                              className: "item",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "img",
                                  children: [
                                    (0, a.jsx)("img", {
                                      src: s.image,
                                      alt: "",
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "date",
                                      children: (0, a.jsx)(n(), {
                                        href: "/dark/blog-post",
                                        children: s.date,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "cont mt-30",
                                  children: [
                                    (0, a.jsx)("h6", {
                                      children: (0, a.jsx)(n(), {
                                        href: "/dark/blog-post",
                                        children: s.title,
                                      }),
                                    }),
                                    (0, a.jsxs)(n(), {
                                      href: "/dark/blog-post",
                                      className: "mt-20 ls1 sub-title",
                                      children: [
                                        "Read More ",
                                        (0, a.jsx)("i", {
                                          className: "ml-5",
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
                                  ],
                                }),
                              ],
                            }),
                          },
                          s.id
                        )
                      ),
                    }),
                }),
              ],
            }),
          })
        );
      };
    },
    7771: function (s, e, i) {
      var a = i(5893),
        l = i(7294),
        c = i(7513);
      e.Z = function (s) {
        let { lightMode: e } = s;
        return (
          (0, l.useEffect)(() => {
            if (window.innerWidth > 991) {
              gsap.set(".footer-container", { yPercent: -50 });
              let s = gsap.timeline({ paused: !0 });
              s.to(".footer-container", { yPercent: 0, ease: "none" }),
                ScrollTrigger.create({
                  trigger: "main",
                  start: "bottom bottom",
                  end: "+=50%",
                  animation: s,
                  scrub: !0,
                });
            }
          }, []),
          (0, a.jsx)("footer", {
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
                                  "Germany — 785 15h Street, Office 478 Berlin, De 81566",
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
                                    href: "#0",
                                    children: "hello@design.com",
                                  }),
                                }),
                                (0, a.jsx)("h5", {
                                  children: (0, a.jsx)("a", {
                                    href: "#",
                                    children: "+1 840 841 25 69",
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
                                  href: "#0",
                                  children: "Twitter",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#0",
                                  children: "LinkedIn",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#0",
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
                                  e ? "dark" : "light",
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
                                  "\xa9 2023 Geekfolio is Proudly Powered by ",
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
    7336: function (s, e, i) {
      var a = i(5893),
        l = i(7294),
        c = i(8366);
      e.Z = function (s) {
        let { lightMode: e } = s;
        return (
          (0, l.useEffect)(() => {
            (0, c.Z)();
          }, []),
          (0, a.jsxs)("header", {
            className: "header-creative",
            children: [
              (0, a.jsx)("div", {
                className: "container ontop",
                children: (0, a.jsxs)("div", {
                  className: "row justify-content-center full-height",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-3 d-flex align-items-end",
                      children: (0, a.jsxs)("div", {
                        className: "img md-hide",
                        children: [
                          (0, a.jsx)("div", {
                            className: "img-assets1 parallax",
                            "data-speed": "-0.01",
                            children: (0, a.jsx)("img", {
                              src: "/dark/assets/imgs/svg-assets/claw.svg",
                              alt: "",
                            }),
                          }),
                          (0, a.jsx)("img", {
                            src: "/dark/assets/imgs/header/c1.jpg",
                            alt: "",
                            "data-speed": "0.01",
                            className: "parallax",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-6 valign",
                      children: (0, a.jsxs)("div", {
                        className: "caption text-center full-width md-mb50",
                        children: [
                          (0, a.jsx)("div", {
                            className: "mb-30",
                            children: (0, a.jsxs)("svg", {
                              className: "svg-animation star",
                              width: "100",
                              height: "100",
                              viewBox: "0 0 100 100",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              preserveAspectRatio: "none",
                              children: [
                                (0, a.jsx)("line", {
                                  y1: "50",
                                  x2: "100",
                                  y2: "50",
                                  vectorEffect: "non-scaling-stroke",
                                  stroke: "currentColor",
                                  style: {
                                    "--index": 1,
                                    "--transform": "30deg",
                                  },
                                }),
                                (0, a.jsx)("line", {
                                  y1: "50",
                                  x2: "100",
                                  y2: "50",
                                  vectorEffect: "non-scaling-stroke",
                                  stroke: "currentColor",
                                  style: {
                                    "--index": 2,
                                    "--transform": "60deg",
                                  },
                                }),
                                (0, a.jsx)("line", {
                                  y1: "50",
                                  x2: "100",
                                  y2: "50",
                                  vectorEffect: "non-scaling-stroke",
                                  stroke: "currentColor",
                                  style: {
                                    "--index": 3,
                                    "--transform": "90deg",
                                  },
                                }),
                                (0, a.jsx)("line", {
                                  y1: "50",
                                  x2: "100",
                                  y2: "50",
                                  vectorEffect: "non-scaling-stroke",
                                  stroke: "currentColor",
                                  style: {
                                    "--index": 4,
                                    "--transform": "120deg",
                                  },
                                }),
                                (0, a.jsx)("line", {
                                  y1: "50",
                                  x2: "100",
                                  y2: "50",
                                  vectorEffect: "non-scaling-stroke",
                                  stroke: "currentColor",
                                  style: {
                                    "--index": 5,
                                    "--transform": "150deg",
                                  },
                                }),
                                (0, a.jsx)("line", {
                                  y1: "50",
                                  x2: "100",
                                  y2: "50",
                                  vectorEffect: "non-scaling-stroke",
                                  stroke: "currentColor",
                                  style: {
                                    "--index": 6,
                                    "--transform": "180deg",
                                  },
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("h4", {
                            className: "fw-300 mb-15",
                            children: "Digital agency studio",
                          }),
                          (0, a.jsxs)("h1", {
                            className: "fw-600 d-rotate wow",
                            children: [
                              (0, a.jsx)("span", {
                                className: "rotate-text",
                                children: "a creative digital",
                              }),
                              (0, a.jsx)("span", {
                                className: "rotate-text",
                                children: "design studio",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "col-lg-3",
                      children: [
                        (0, a.jsx)("div", {
                          className: "img parallax",
                          "data-speed": "0.01",
                          children: (0, a.jsx)("img", {
                            src: "/dark/assets/imgs/header/c2.jpg",
                            alt: "",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "mt-30 md-hide",
                          children: [
                            (0, a.jsx)("div", {
                              className: "text-center hover-this",
                              children: (0, a.jsxs)("div", {
                                className: "circle-button hover-anim",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "rotate-circle fz-30 text-u",
                                    children: (0, a.jsxs)("svg", {
                                      className: "textcircle",
                                      viewBox: "0 0 500 500",
                                      children: [
                                        (0, a.jsx)("defs", {
                                          children: (0, a.jsx)("path", {
                                            id: "textcircle1",
                                            d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z",
                                          }),
                                        }),
                                        (0, a.jsx)("text", {
                                          children: (0, a.jsx)("textPath", {
                                            xlinkHref: "#textcircle1",
                                            textLength: "900",
                                            children:
                                              "Creative - Agency - Winner -",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "in-circle text-center",
                                    children: (0, a.jsxs)("h3", {
                                      children: [
                                        "A ",
                                        (0, a.jsx)("span", {
                                          className: "fw-300 fz-30",
                                          children: "+",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "text-center",
                              children: [
                                (0, a.jsxs)("h6", {
                                  children: [
                                    "500k ",
                                    (0, a.jsx)("span", {
                                      className: "fz-14",
                                      children: "Customers",
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: "fz-13",
                                  children:
                                    "Avg rating 4.8 makes us world best.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "bg-pattern bg-img",
                "data-background": "/".concat(
                  e ? "light" : "dark",
                  "/assets/imgs/patterns/graph.png"
                ),
              }),
            ],
          })
        );
      };
    },
    8474: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return m;
        },
      });
      var a = i(5893),
        l = i(7294),
        c = function () {
          return (0, a.jsx)("div", {
            className: "panel o-hidden intro-pan sub-bg",
            children: (0, a.jsxs)("div", {
              className: "container o-hidden rest mt-60",
              children: [
                (0, a.jsxs)("div", {
                  className: "row mb-80 rest",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-7 rest valign",
                      children: (0, a.jsx)("div", {
                        className: "main-marq lrg",
                        children: (0, a.jsxs)("div", {
                          className: "slide-har st1",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "box pb-20",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsx)("h4", {
                                    children: "Awards &",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsx)("h4", {
                                    children: "Recognition",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsx)("h4", {
                                    children: "Awards &",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsx)("h4", {
                                    children: "Recognition",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsx)("h4", {
                                    children: "Awards &",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "box pb-20",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsx)("h4", {
                                    children: "Awards &",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsx)("h4", {
                                    children: "Recognition",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsx)("h4", {
                                    children: "Awards &",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsx)("h4", {
                                    children: "Recognition",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsx)("h4", {
                                    children: "Awards &",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-5 rest",
                      children: (0, a.jsx)("div", {
                        className: "text valign",
                        children: (0, a.jsx)("p", {
                          className: "fz-14",
                          children:
                            "Our area of practice is quite wide: design, development. The experts who work at our web design studio know exactly how to make your project unique, fresh, and profitable.",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "container numbers",
                  children: (0, a.jsxs)("div", {
                    className: "row md-marg",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-lg-3 col-md-6",
                        children: (0, a.jsxs)("div", {
                          className: "item md-mb50",
                          children: [
                            (0, a.jsx)("h2", {
                              className: "fw-800 stroke",
                              children: "28",
                            }),
                            (0, a.jsx)("h6", {
                              children: "Years of Experience",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-3 col-md-6",
                        children: (0, a.jsxs)("div", {
                          className: "item md-mb50",
                          children: [
                            (0, a.jsx)("h2", {
                              className: "fw-800",
                              children: "4k",
                            }),
                            (0, a.jsx)("h6", {
                              children: "Projects Complated",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-3 col-md-6",
                        children: (0, a.jsxs)("div", {
                          className: "item sm-mb50",
                          children: [
                            (0, a.jsx)("h2", {
                              className: "fw-800 stroke",
                              children: "12k",
                            }),
                            (0, a.jsx)("h6", { children: "Happy Customers" }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-3 col-md-6",
                        children: (0, a.jsxs)("div", {
                          className: "item",
                          children: [
                            (0, a.jsx)("h2", {
                              className: "fw-800",
                              children: "17",
                            }),
                            (0, a.jsx)("h6", { children: "Awards Winning" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        n = i(1664),
        r = i.n(n),
        t = function (s) {
          let { lightMode: e } = s;
          return (0, a.jsx)("div", {
            className: "panel awards-list main-bg",
            children: (0, a.jsx)("div", {
              className: "container mt-60",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-5",
                    children: (0, a.jsx)("div", {
                      className: "sec-lg-head mb-80",
                      children: (0, a.jsxs)("div", {
                        className: "position-re",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "fz-80",
                            children: [
                              (0, a.jsx)("h6", {
                                className: "dot-titl mb-10",
                                children: "ACHIEVEMENTS",
                              }),
                              (0, a.jsx)("h2", {
                                className: "fz-70 fw-700",
                                children: "Our Awards",
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "text mt-15",
                            children: (0, a.jsx)("p", {
                              children:
                                "Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "exp-box sub-bg mt-50 inline",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "numb",
                                    children: (0, a.jsx)("h2", {
                                      className: "fz-60",
                                      children: "20",
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "cont ml-30",
                                    children: (0, a.jsxs)("h6", {
                                      className: "sub-title",
                                      children: [
                                        "Years of ",
                                        (0, a.jsx)("br", {}),
                                        " Experience",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "img-icon",
                                children: (0, a.jsx)("img", {
                                  src: "/dark/assets/imgs/svg-assets/star.png",
                                  alt: "",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-6 offset-lg-1",
                    children: (0, a.jsx)("div", {
                      className: "cont",
                      children: (0, a.jsxs)("ul", {
                        className: "rest",
                        children: [
                          (0, a.jsxs)("li", {
                            className: "d-flex",
                            children: [
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h6", {
                                    children:
                                      "Independent of the year nomination",
                                  }),
                                  (0, a.jsxs)("span", {
                                    className: "fz-14 opacity-8",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "date",
                                        children: "2020",
                                      }),
                                      " Awwwards",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "ml-auto",
                                children: (0, a.jsx)(r(), {
                                  href: "/dark/page-about",
                                  className: "arrow-icon",
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
                                      fill: e ? "#fff" : "#000",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            className: "d-flex",
                            children: [
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h6", {
                                    children: "Awwwards Site of the Day",
                                  }),
                                  (0, a.jsxs)("span", {
                                    className: "fz-14 opacity-8",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "date",
                                        children: "2020",
                                      }),
                                      " Awwwards",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "ml-auto",
                                children: (0, a.jsx)(r(), {
                                  href: "/dark/page-about",
                                  className: "arrow-icon",
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
                                      fill: e ? "#fff" : "#000",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            className: "d-flex",
                            children: [
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h6", {
                                    children: "CSSDA Website of the Day",
                                  }),
                                  (0, a.jsxs)("span", {
                                    className: "fz-14 opacity-8",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "date",
                                        children: "2020",
                                      }),
                                      " Awwwards",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "ml-auto",
                                children: (0, a.jsx)(r(), {
                                  href: "/dark/page-about",
                                  className: "arrow-icon",
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
                                      fill: e ? "#fff" : "#000",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            className: "d-flex",
                            children: [
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h6", {
                                    children: "Sydney Design Awards – Silver",
                                  }),
                                  (0, a.jsxs)("span", {
                                    className: "fz-14 opacity-8",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "date",
                                        children: "2020",
                                      }),
                                      " Awwwards",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "ml-auto",
                                children: (0, a.jsx)(r(), {
                                  href: "/dark/page-about",
                                  className: "arrow-icon",
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
                                      fill: e ? "#fff" : "#000",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        d = i(8366),
        o = function (s) {
          let { lightMode: e } = s;
          return (
            (0, l.useEffect)(() => {
              (0, d.Z)();
            }, []),
            (0, a.jsxs)("div", {
              className: "panel call-action-center sub-bg",
              children: [
                (0, a.jsx)("div", {
                  className: "container mt-60",
                  children: (0, a.jsx)("div", {
                    className: "row justify-content-center",
                    children: (0, a.jsx)("div", {
                      className: "col-lg-10",
                      children: (0, a.jsxs)("div", {
                        className: "sec-lg-head text-center",
                        children: [
                          (0, a.jsx)("h6", {
                            className: "dot-titl mb-10",
                            children: "Call to Action",
                          }),
                          (0, a.jsxs)("h2", {
                            className: "fz-70 fw-700",
                            children: [
                              (0, a.jsx)("span", {
                                children: "Have a project in mind?",
                              }),
                              (0, a.jsx)("br", {}),
                              (0, a.jsx)("span", {
                                children: "Let’s get to work.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)(r(), {
                            href: "/".concat(
                              e ? "light" : "dark",
                              "/page-contact"
                            ),
                            className:
                              "butn-circle colorbg-2 d-flex align-items-center text-center mt-50 m-auto",
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
                                  e ? "light" : "dark",
                                  "/assets/imgs/svg-assets/circle-star.svg"
                                ),
                                alt: "",
                                className: "circle-star",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "bg-pattern bg-img",
                  "data-background": "/".concat(
                    e ? "light" : "dark",
                    "/assets/imgs/patterns/graph.png"
                  ),
                }),
              ],
            })
          );
        },
        m = function (s) {
          let { lightMode: e } = s;
          function i() {
            if (
              window.innerWidth < 991 &&
              document.querySelector(".thecontainer").style.maxHeight
            )
              location.reload();
            else if (
              window.innerWidth > 991 &&
              !document.querySelector(".thecontainer").style.maxHeight
            ) {
              gsap.registerPlugin(ScrollTrigger);
              let s = gsap.utils.toArray(".panel");
              gsap.to(s, {
                xPercent: -100 * (s.length - 1),
                ease: "none",
                scrollTrigger: {
                  trigger: ".thecontainer",
                  pin: !0,
                  scrub: 1,
                  end: () => {
                    var s;
                    return (
                      "+=" +
                      (null === (s = document.querySelector(".thecontainer")) ||
                      void 0 === s
                        ? void 0
                        : s.offsetWidth)
                    );
                  },
                },
              });
            }
          }
          return (
            (0, l.useEffect)(() => {
              if (window.innerWidth > 991) {
                gsap.registerPlugin(ScrollTrigger);
                let s = gsap.utils.toArray(".panel");
                gsap.to(s, {
                  xPercent: -100 * (s.length - 1),
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".thecontainer",
                    pin: !0,
                    scrub: 1,
                    end: () =>
                      "+=" +
                      document.querySelector(".thecontainer").offsetWidth,
                  },
                });
              }
              return (
                window.addEventListener("resize", i),
                () => window.removeEventListener("resize", i)
              );
            }, []),
            (0, a.jsxs)("section", {
              className: "thecontainer ontop",
              children: [
                (0, a.jsx)(c, {}),
                (0, a.jsx)(t, { lightMode: e }),
                (0, a.jsx)(o, { lightMode: e }),
              ],
            })
          );
        };
    },
    8964: function (s, e, i) {
      var a = i(5893);
      i(7294);
      var l = i(1664),
        c = i.n(l);
      e.Z = function (s) {
        let { lightMode: e } = s;
        return (0, a.jsx)("section", {
          className: "about section-padding main-bg",
          children: (0, a.jsxs)("div", {
            className: "container ontop",
            children: [
              (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-5 valign",
                    children: (0, a.jsxs)("div", {
                      className: "about-circle-crev md-hide",
                      children: [
                        (0, a.jsx)("div", {
                          className: "circle-button",
                          children: (0, a.jsx)("div", {
                            className: "rotate-circle fz-16 ls1 text-u",
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
                                      " Creative Branding Agency - Creative Branding Agency - ",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "half-circle-img",
                          children: (0, a.jsx)("img", {
                            src: "/".concat(
                              e ? "light" : "dark",
                              "/assets/imgs/about/1.jpg"
                            ),
                            alt: "",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-7 valign",
                    children: (0, a.jsxs)("div", {
                      className: "cont sec-lg-head",
                      children: [
                        (0, a.jsx)("h6", {
                          className: "dot-titl mb-20",
                          children: "About Agency",
                        }),
                        (0, a.jsxs)("h2", {
                          className: "d-slideup wow",
                          children: [
                            (0, a.jsx)("span", {
                              className: "sideup-text",
                              children: (0, a.jsx)("span", {
                                className: "up-text",
                                children: "We’re sharp brands creators",
                              }),
                            }),
                            (0, a.jsx)("span", {
                              className: "sideup-text",
                              children: (0, a.jsx)("span", {
                                className: "up-text",
                                children: "open for any new collabs",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "row",
                          children: (0, a.jsxs)("div", {
                            className: "col-lg-12",
                            children: [
                              (0, a.jsx)("div", {
                                className: "text mt-20",
                                children: (0, a.jsx)("p", {
                                  children:
                                    "Grow brands through bold and strategic creative, focused on searching new ways to showcase user content on digital support and envisioning the future arts.",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "underline",
                                children: (0, a.jsxs)(c(), {
                                  href: "/dark/page-about",
                                  className: "mt-30 ls1 sub-title",
                                  children: [
                                    "Read More ",
                                    (0, a.jsx)("i", {
                                      className: "ml-5",
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
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "row md-marg mt-100 justify-content-center",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-4 col-md-6",
                    children: (0, a.jsxs)("div", {
                      className: "item-serv md-mb50",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "d-flex align-items-center pb-20 mb-30 bord-thin-bottom",
                          children: [
                            (0, a.jsx)("div", {
                              className: "mr-30",
                              children: (0, a.jsx)("div", {
                                className: "icon-img-50",
                                children: (0, a.jsx)("img", {
                                  src: "/".concat(
                                    e ? "light" : "dark",
                                    "/assets/imgs/serv-icons/0.png"
                                  ),
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)("h6", {
                                children: "Digital Product Design",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: "fz-14",
                          children:
                            "new ways to showcase user content on digital support and envisioning the future arts.",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-4 col-md-6",
                    children: (0, a.jsxs)("div", {
                      className: "item-serv md-mb50",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "d-flex align-items-center pb-20 mb-30 bord-thin-bottom",
                          children: [
                            (0, a.jsx)("div", {
                              className: "mr-30",
                              children: (0, a.jsx)("div", {
                                className: "icon-img-50",
                                children: (0, a.jsx)("img", {
                                  src: "/".concat(
                                    e ? "light" : "dark",
                                    "/assets/imgs/serv-icons/1.png"
                                  ),
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)("h6", {
                                children: "Branding & Design",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: "fz-14",
                          children:
                            "new ways to showcase user content on digital support and envisioning the future arts.",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-4 col-md-6",
                    children: (0, a.jsxs)("div", {
                      className: "item-serv",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "d-flex align-items-center pb-20 mb-30 bord-thin-bottom",
                          children: [
                            (0, a.jsx)("div", {
                              className: "mr-30",
                              children: (0, a.jsx)("div", {
                                className: "icon-img-50",
                                children: (0, a.jsx)("img", {
                                  src: "/".concat(
                                    e ? "light" : "dark",
                                    "/assets/imgs/serv-icons/2.png"
                                  ),
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)("h6", {
                                children: "Web Development",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: "fz-14",
                          children:
                            "new ways to showcase user content on digital support and envisioning the future arts.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    8453: function (s, e, i) {
      var a = i(5893);
      i(7294),
        (e.Z = function () {
          return (0, a.jsx)("section", {
            className: "serv-marq main-colorbg2",
            children: (0, a.jsx)("div", {
              className: "container-fluid ontop sub-bg rest pt-20 pb-20",
              children: (0, a.jsx)("div", {
                className: "row",
                children: (0, a.jsx)("div", {
                  className: "col-12",
                  children: (0, a.jsx)("div", {
                    className: "main-marq light-text",
                    children: (0, a.jsxs)("div", {
                      className: "slide-har st1",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "box non-strok",
                          children: [
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "UI-UX Experience",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Web Development",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Digital Marketing",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Product Design",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Mobile Solutions",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "box non-strok",
                          children: [
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "UI-UX Experience",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Web Development",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Digital Marketing",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Product Design",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Mobile Solutions",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        });
    },
    7238: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var a = i(5893);
      i(7294);
      var l = JSON.parse(
          '[{"BH":"/dark/assets/imgs/portfolio/2/1.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/portfolio/2/3.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/portfolio/2/2.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/portfolio/2/4.jpg","ty":"2023","dt":"Branding"}]'
        ),
        c = function () {
          return (0, a.jsx)("section", {
            className: "portfolio section-padding",
            children: (0, a.jsxs)("div", {
              className: "container ontop",
              children: [
                (0, a.jsx)("div", {
                  className: "sec-lg-head mb-80",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, a.jsxs)("div", {
                          className: "position-re",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "dot-titl mb-10",
                              children: "Selected Projects",
                            }),
                            (0, a.jsx)("h2", {
                              className: "fz-70 fw-700",
                              children: "Featured Works",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-4 d-flex align-items-center",
                        children: (0, a.jsx)("div", {
                          className: "text",
                          children: (0, a.jsx)("p", {
                            children:
                              "Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "row justify-content-center",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-5",
                      children: (0, a.jsxs)("div", {
                        className: "item md-mb80",
                        children: [
                          (0, a.jsx)("div", {
                            className: "o-hidden",
                            children: (0, a.jsx)("div", {
                              className: "img imago wow",
                              children: (0, a.jsx)("img", {
                                src: l[0].BH,
                                alt: "",
                              }),
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "cont mt-30 d-flex",
                            children: [
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h6", {
                                    className: "line-height-1",
                                    children: "From our gallery",
                                  }),
                                  (0, a.jsx)("p", { children: l[0].dt }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "ml-auto",
                                children: (0, a.jsxs)("p", {
                                  className: "fz-14",
                                  children: ["\xa9 ", l[0].ty],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-6 valign",
                      children: (0, a.jsx)("div", {
                        className: "item full-width",
                        children: (0, a.jsx)("div", {
                          className: "row justify-content-center",
                          children: (0, a.jsxs)("div", {
                            className: "col-lg-8",
                            children: [
                              (0, a.jsx)("div", {
                                className: "o-hidden",
                                children: (0, a.jsx)("div", {
                                  className: "img imago wow",
                                  children: (0, a.jsx)("img", {
                                    src: l[1].BH,
                                    alt: "",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "cont mt-30 d-flex",
                                children: [
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "line-height-1",
                                        children: "From our gallery",
                                      }),
                                      (0, a.jsx)("p", { children: l[1].dt }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "ml-auto",
                                    children: (0, a.jsxs)("p", {
                                      className: "fz-14",
                                      children: ["\xa9 ", l[1].ty],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-6 valign",
                      children: (0, a.jsx)("div", {
                        className: "item mt-80 full-width",
                        children: (0, a.jsx)("div", {
                          className: "row justify-content-center",
                          children: (0, a.jsxs)("div", {
                            className: "col-lg-9",
                            children: [
                              (0, a.jsx)("div", {
                                className: "o-hidden",
                                children: (0, a.jsx)("div", {
                                  className: "img imago wow",
                                  children: (0, a.jsx)("img", {
                                    src: l[2].BH,
                                    alt: "",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "cont mt-30 d-flex",
                                children: [
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "line-height-1",
                                        children: "From our gallery",
                                      }),
                                      (0, a.jsx)("p", { children: l[2].dt }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "ml-auto",
                                    children: (0, a.jsxs)("p", {
                                      className: "fz-14",
                                      children: ["\xa9 ", l[2].ty],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-6",
                      children: (0, a.jsx)("div", {
                        className: "item mt-80",
                        children: (0, a.jsx)("div", {
                          className: "row justify-content-center",
                          children: (0, a.jsxs)("div", {
                            className: "col-lg-9",
                            children: [
                              (0, a.jsx)("div", {
                                className: "o-hidden",
                                children: (0, a.jsx)("div", {
                                  className: "img imago wow",
                                  children: (0, a.jsx)("img", {
                                    src: l[3].BH,
                                    alt: "",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "cont mt-30 d-flex",
                                children: [
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "line-height-1",
                                        children: "From our gallery",
                                      }),
                                      (0, a.jsx)("p", { children: l[3].dt }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "ml-auto",
                                    children: (0, a.jsxs)("p", {
                                      className: "fz-14",
                                      children: ["\xa9 ", l[3].ty],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    8684: function (s, e, i) {
      var a = i(5893),
        l = i(4576),
        c = i(7294);
      e.Z = function () {
        return (
          (0, c.useEffect)(() => {
            (0, l.Z)(".back-image.parallaxie", 0.35);
          }, []),
          (0, a.jsx)("div", {
            className: "back-image bg-img parallaxie",
            "data-background": "/dark/assets/imgs/background/17.jpg",
            "data-overlay-dark": "5",
          })
        );
      };
    },
    3414: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var a = i(5893);
      i(7294);
      var l = i(1664),
        c = i.n(l),
        n = JSON.parse(
          '[{"id":1,"image":"/assets/imgs/serv-icons/0.png","title":"Marketing Strategy","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus."},{"id":2,"image":"/assets/imgs/serv-icons/1.png","title":"Product Design","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus."},{"id":3,"image":"/assets/imgs/serv-icons/2.png","title":"Website Design","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus."},{"id":4,"image":"/assets/imgs/serv-icons/0.png","title":"Marketing Strategy","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus."}]'
        ),
        r = function (s) {
          let { lightMode: e } = s;
          return (0, a.jsx)("section", {
            className: "services main-bg ontop bord-thin-top bord-thin-bottom",
            children: (0, a.jsx)("div", {
              className: "container-fluid",
              children: (0, a.jsx)("div", {
                className: "row",
                children: n.map((s) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: "item-bord col-lg-3 col-md-6",
                      children: [
                        (0, a.jsx)("div", {
                          className: "icon-img-70 mb-40",
                          children: (0, a.jsx)("img", {
                            src: "/"
                              .concat(e ? "light" : "dark")
                              .concat(s.image),
                            alt: "",
                          }),
                        }),
                        (0, a.jsx)("h6", {
                          className: "mb-15",
                          children: s.title,
                        }),
                        (0, a.jsx)("p", { children: s.text }),
                        (0, a.jsxs)(c(), {
                          href: "/dark/page-services",
                          className: "arrow mt-40",
                          children: [
                            (0, a.jsx)("span", {
                              className: "circle",
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
                              className: "fz-12 text-u ml-10",
                              children: "Read More",
                            }),
                          ],
                        }),
                      ],
                    },
                    s.id
                  )
                ),
              }),
            }),
          });
        };
    },
    7591: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var a = i(5893);
      i(7294);
      var l = JSON.parse(
          '[{"id":1,"picture":"/dark/assets/imgs/team/1.jpg","name":"Matt Smith","position":"Co-Founder"},{"id":2,"picture":"/dark/assets/imgs/team/2.jpg","name":"Matt Smith","position":"Co-Founder"},{"id":3,"picture":"/dark/assets/imgs/team/3.jpg","name":"Matt Smith","position":"Co-Founder"}]'
        ),
        c = function () {
          return (0, a.jsx)("section", {
            className: "team-box section-padding",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "sec-lg-head mb-80",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, a.jsxs)("div", {
                          className: "position-re",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "dot-titl mb-10",
                              children: "Selected Projects",
                            }),
                            (0, a.jsx)("h2", {
                              className: "fz-70 fw-700",
                              children: "Featured Works",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-4 d-flex align-items-center",
                        children: (0, a.jsx)("div", {
                          className: "text",
                          children: (0, a.jsx)("p", {
                            children:
                              "Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "row md-marg",
                  children: l.map((s, e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "col-lg-4",
                        children: (0, a.jsxs)("div", {
                          className: "item ".concat(
                            e !== l.length - 1 ? "md-mb50" : ""
                          ),
                          children: [
                            (0, a.jsx)("div", {
                              className: "img",
                              children: (0, a.jsx)("img", {
                                src: s.picture,
                                alt: "",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "info d-flex align-items-center",
                              children: [
                                (0, a.jsx)("div", {
                                  children: (0, a.jsx)("div", {
                                    className: "circle-50",
                                    children: (0, a.jsx)("img", {
                                      src: s.picture,
                                      alt: "",
                                      className: "circle-img",
                                    }),
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "cont ml-20",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "fz-12 opacity-8",
                                      children: s.position,
                                    }),
                                    (0, a.jsx)("h6", {
                                      className: "fz-16",
                                      children: s.name,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      s.id
                    )
                  ),
                }),
              ],
            }),
          });
        };
    },
    2006: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return m;
        },
      });
      var a = i(5893),
        l = i(7294),
        c = i(1664),
        n = i.n(c),
        r = i(719),
        t = i(8116),
        d = JSON.parse(
          '[{"id":1,"content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.","picture":"/dark/assets/imgs/testim/1.jpg","author":"Leonard Heiser","position":"Ceo"},{"id":2,"content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.","picture":"/dark/assets/imgs/testim/2.jpg","author":"Leonard Heiser","position":"Ceo"}]'
        );
      let o = {
        modules: [t.W_, t.tl],
        slidesPerView: 1,
        loop: !0,
        spaceBetween: 30,
        speed: 1e3,
        pagination: { el: ".swiper-pagination", clickable: !0 },
        navigation: {
          nextEl: ".testim-controls .swiper-button-next",
          prevEl: ".testim-controls .swiper-button-prev",
        },
      };
      var m = function (s) {
        let { lightMode: e } = s,
          [i, c] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            c(!0);
          }, []),
          (0, a.jsx)("section", {
            className: "testim-creative sub-bg o-hidden",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "sec-lg-head section-padding pb-80 bord-thin-bottom o-hidden",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, a.jsxs)("div", {
                          className: "position-re inline",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "dot-titl mb-10",
                              children: "What's People Says?",
                            }),
                            (0, a.jsx)("h2", {
                              className: "fz-70 fw-700",
                              children: "Our Clients",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-4 d-flex align-items-end",
                        children: (0, a.jsx)("div", {
                          className: "arrows-carsouel testim-controls",
                          children: (0, a.jsxs)("div", {
                            className: "swiper-controls",
                            children: [
                              (0, a.jsx)("div", {
                                className: "swiper-button-prev",
                                children: (0, a.jsx)("span", {
                                  className: "left",
                                  children: (0, a.jsx)("img", {
                                    src: "/".concat(
                                      e ? "light" : "dark",
                                      "/assets/imgs/svg-assets/arrow-right-top.svg"
                                    ),
                                    alt: "",
                                  }),
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "swiper-button-next",
                                children: (0, a.jsx)("span", {
                                  className: "right",
                                  children: (0, a.jsx)("img", {
                                    src: "/".concat(
                                      e ? "light" : "dark",
                                      "/assets/imgs/svg-assets/arrow-right-top.svg"
                                    ),
                                    alt: "",
                                  }),
                                }),
                              }),
                            ],
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
                      children: (0, a.jsx)("div", {
                        className: "mt-80 md-hide",
                        id: "sticky_item",
                        children: (0, a.jsxs)(n(), {
                          href: "/dark/page-contact",
                          className:
                            "butn butn-md butn-bg main-colorbg2 radius-30 mb-80",
                          children: [
                            (0, a.jsx)("span", { children: "Become a Client" }),
                            (0, a.jsx)("span", {
                              className: "icon ml-10",
                              children: (0, a.jsx)("img", {
                                src: "/".concat(
                                  e ? "light" : "dark",
                                  "/assets/imgs/svg-assets/arrow-right-top.svg"
                                ),
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-9",
                      children: (0, a.jsx)("div", {
                        className: "testim-items section-padding",
                        children: (0, a.jsx)("div", {
                          className: "testim-swiper",
                          children:
                            i &&
                            (0, a.jsx)(r.tq, {
                              ...o,
                              id: "content-carousel-container-unq-testim",
                              className: "swiper-container",
                              children: d.map((s) =>
                                (0, a.jsx)(
                                  r.o5,
                                  {
                                    children: (0, a.jsxs)("div", {
                                      className: "item",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className: "cont mb-40",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "rate-stars mb-30 fz-12",
                                              children: (0, a.jsxs)("span", {
                                                className: "rate main-color2",
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
                                            (0, a.jsx)("h3", {
                                              className: "fw-400",
                                              children: s.content,
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              children: (0, a.jsx)("div", {
                                                className: "img circle-80",
                                                children: (0, a.jsx)("img", {
                                                  src: s.picture,
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
                                                    children: s.author,
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "main-color2 sub-title",
                                                    children: s.position,
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  s.id
                                )
                              ),
                            }),
                        }),
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
  },
]);
