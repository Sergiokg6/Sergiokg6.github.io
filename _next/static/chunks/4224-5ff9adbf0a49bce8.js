"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4224],
  {
    3037: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return l;
        },
      });
      function l(s) {
        s.selector &&
          s.callback &&
          (s.isElements
            ? document.querySelectorAll(s.selector).forEach((e) => {
                new IntersectionObserver((e) => {
                  e[0].isIntersecting
                    ? s.callback(e[0].target)
                    : s.whenOutOfView && s.whenOutOfView(e[0].target);
                }).observe(e);
              })
            : new IntersectionObserver((e) => {
                e[0].isIntersecting
                  ? s.callback(e[0].target)
                  : s.whenOutOfView && s.whenOutOfView(e[0].target);
              }).observe(document.querySelector(s.selector)));
      }
    },
    8366: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return l;
        },
      });
      function l() {
        let s = document.querySelectorAll("[data-background]");
        s.length > 0 &&
          s.forEach((s) => {
            let e = s.dataset.background;
            s.style.backgroundImage = "url('".concat(e, "')");
          });
      }
    },
    3821: function (s, e, i) {
      var l = i(5893);
      i(7294),
        (e.Z = function () {
          return (0, l.jsx)("div", { className: "lines two-out" });
        });
    },
    6036: function (s, e, i) {
      var l = i(5893),
        a = i(7294);
      e.Z = function (s) {
        let { videoId: e, channel: i, isOpen: c, onClose: n, autoplay: r } = s,
          t = (0, a.useRef)(null),
          [d, o] = (0, a.useState)("");
        return (
          (0, a.useEffect)(() => {
            "youtube" === i
              ? o("//www.youtube.com/embed/" + e)
              : "vimeo" === i && o("//player.vimeo.com/video/" + e);
          }, [i, e]),
          c
            ? (0, l.jsx)("div", {
                className: "modal-video",
                tabIndex: "-1",
                role: "dialog",
                "aria-label": "video",
                onClick: n,
                children: (0, l.jsx)("div", {
                  className: "modal-video-body",
                  children: (0, l.jsxs)("div", {
                    className: "modal-video-inner",
                    children: [
                      (0, l.jsx)("button", {
                        className: "modal-video-close-btn",
                        "aria-label": "video",
                        ref: t,
                        onClick: n,
                      }),
                      (0, l.jsx)("div", {
                        className: "modal-video-movie-wrap",
                        children: (0, l.jsx)("iframe", {
                          width: "460",
                          height: "230",
                          src: d,
                          allowFullScreen: "allowFullScreen",
                          autoPlay: r || !1,
                          tabIndex: "-1",
                        }),
                      }),
                    ],
                  }),
                }),
              })
            : null
        );
      };
    },
    5019: function (s, e, i) {
      var l = i(5893);
      i(7294);
      var a = i(1664),
        c = i.n(a);
      e.Z = function (s) {
        let { lightMode: e } = s;
        return (0, l.jsx)("section", {
          className: "intro-corp section-padding sub-bg",
          children: (0, l.jsx)("div", {
            className: "container",
            children: (0, l.jsxs)("div", {
              className: "row lg-marg",
              children: [
                (0, l.jsx)("div", {
                  className: "col-lg-6 md-mb50",
                  children: (0, l.jsxs)("div", {
                    className: "imgs mb-80",
                    children: [
                      (0, l.jsx)("div", {
                        className: "img1 main-color3",
                        children: (0, l.jsx)("img", {
                          src: "/dark/assets/imgs/about/sq1.jpg",
                          alt: "",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: "img2",
                        children: (0, l.jsx)("img", {
                          src: "/dark/assets/imgs/about/sq2.jpg",
                          alt: "",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "col-lg-6 valign",
                  children: (0, l.jsxs)("div", {
                    className: "cont",
                    children: [
                      (0, l.jsx)("h6", {
                        className: "sub-title mb-15",
                        children: "About Company",
                      }),
                      (0, l.jsxs)("h3", {
                        className: "mb-15",
                        children: [
                          "Watch the creative process behind our ",
                          (0, l.jsx)("span", {
                            className: "stroke fw-700 opacity-7",
                            children: "digital marketing",
                          }),
                          ".",
                        ],
                      }),
                      (0, l.jsx)("p", {
                        children:
                          "We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion.",
                      }),
                      (0, l.jsx)("div", {
                        className: "mt-50 pt-30 bord-thin-top",
                        children: (0, l.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, l.jsx)("div", {
                              className: "col-md-6",
                              children: (0, l.jsxs)("ul", {
                                className: "rest list-arrow",
                                children: [
                                  (0, l.jsxs)("li", {
                                    className: "mt-20",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "icon",
                                        children: (0, l.jsx)("svg", {
                                          width: "100%",
                                          height: "100%",
                                          viewBox: "0 0 9 8",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, l.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                            fill: e ? "#000" : "#fff",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("span", {
                                        children: "Marketing Strategy",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("li", {
                                    className: "mt-20",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "icon",
                                        children: (0, l.jsx)("svg", {
                                          width: "100%",
                                          height: "100%",
                                          viewBox: "0 0 9 8",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, l.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                            fill: e ? "#000" : "#fff",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("span", {
                                        children: "Rebranding",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "col-md-6",
                              children: (0, l.jsxs)("ul", {
                                className: "rest list-arrow",
                                children: [
                                  (0, l.jsxs)("li", {
                                    className: "mt-20",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "icon",
                                        children: (0, l.jsx)("svg", {
                                          width: "100%",
                                          height: "100%",
                                          viewBox: "0 0 9 8",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, l.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                            fill: e ? "#000" : "#fff",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("span", {
                                        children: "Unique Production",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("li", {
                                    className: "mt-20",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "icon",
                                        children: (0, l.jsx)("svg", {
                                          width: "100%",
                                          height: "100%",
                                          viewBox: "0 0 9 8",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, l.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                            fill: e ? "#000" : "#fff",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("span", {
                                        children: "Corporate Identity",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)(c(), {
                        href: "/dark/page-about",
                        className: "butn butn-md butn-bord radius-30 mt-50",
                        children: (0, l.jsx)("span", {
                          children: "Explore More",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    3589: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      var l = i(5893),
        a = i(7294),
        c = i(3037),
        n = function () {
          function s() {
            (0, c.Z)({
              selector: ".skill-progress .progres",
              isElements: !0,
              callback: (s) => {
                s.style.width = s.getAttribute("data-value");
              },
            });
          }
          return (
            (0, a.useEffect)(
              () => (
                window.addEventListener("scroll", s),
                () => window.removeEventListener("scroll", s)
              ),
              []
            ),
            (0, l.jsxs)("div", {
              className: "row lg-marg mt-80",
              children: [
                (0, l.jsx)("div", {
                  className: "col-lg-6 valign",
                  children: (0, l.jsxs)("div", {
                    className: "md-mb50",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "item-flex d-flex align-items-center mb-50",
                        children: [
                          (0, l.jsx)("div", {
                            children: (0, l.jsx)("div", {
                              className: "icon-img-60",
                              children: (0, l.jsx)("img", {
                                src: "/dark/assets/imgs/serv-icons/0.png",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "cont ml-50",
                            children: [
                              (0, l.jsx)("h6", { children: "High Standerd" }),
                              (0, l.jsx)("p", {
                                className: "fz-15",
                                children:
                                  "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "item-flex d-flex align-items-center",
                        children: [
                          (0, l.jsx)("div", {
                            children: (0, l.jsx)("div", {
                              className: "icon-img-60",
                              children: (0, l.jsx)("img", {
                                src: "/dark/assets/imgs/serv-icons/1.png",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "cont ml-50",
                            children: [
                              (0, l.jsx)("h6", {
                                children: "Ease of Communication",
                              }),
                              (0, l.jsx)("p", {
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
                (0, l.jsx)("div", {
                  className: "col-lg-6",
                  children: (0, l.jsxs)("div", {
                    className: "cont",
                    children: [
                      (0, l.jsx)("h6", {
                        className: "sub-title mb-15",
                        children: "Our Value",
                      }),
                      (0, l.jsxs)("h3", {
                        className: "mb-15",
                        children: [
                          "Watch the creative process behind our ",
                          (0, l.jsx)("span", {
                            className: "stroke fw-700 opacity-7",
                            children: "digital marketing",
                          }),
                          ".",
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "skills mt-50",
                        children: (0, l.jsxs)("div", {
                          className: "skills-box",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "skill-item mb-40",
                              children: [
                                (0, l.jsx)("h5", {
                                  className: "fz-14 mb-15",
                                  children: "UI / UX Design",
                                }),
                                (0, l.jsx)("div", {
                                  className: "skill-progress",
                                  children: (0, l.jsx)("div", {
                                    className: "progres",
                                    "data-value": "90%",
                                  }),
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "skill-item",
                              children: [
                                (0, l.jsx)("h5", {
                                  className: "fz-14 mb-15",
                                  children: "Apps Development",
                                }),
                                (0, l.jsx)("div", {
                                  className: "skill-progress",
                                  children: (0, l.jsx)("div", {
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
            })
          );
        },
        r = i(6036),
        t = i(7513),
        d = function (s) {
          let { lightMode: e } = s,
            [i, c] = (0, a.useState)(!1);
          return (0, l.jsxs)("div", {
            className: "row lg-marg",
            children: [
              (0, l.jsx)("div", {
                className: "col-lg-7 valign",
                children: (0, l.jsxs)("div", {
                  className: "clients md-mb50",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "mb-20",
                      children: [
                        (0, l.jsx)("h6", {
                          className: "sub-title mb-15",
                          children: "Check Out All",
                        }),
                        (0, l.jsx)("h3", {
                          children: "Successful Our Reputation",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, l.jsx)("div", {
                          className: "col-md-4 col-6",
                          children: (0, l.jsx)("div", {
                            className: "item mt-30 wow fadeIn",
                            "data-wow-delay": ".6s",
                            children: (0, l.jsx)("div", {
                              className: "img",
                              children: (0, l.jsx)("a", {
                                href: t.a,
                                children: (0, l.jsx)("img", {
                                  src: "".concat(
                                    e ? "/light" : "/dark",
                                    "/assets/imgs/brands/01.png"
                                  ),
                                  alt: "",
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "col-md-4 col-6",
                          children: (0, l.jsx)("div", {
                            className: "item mt-30 wow fadeIn",
                            "data-wow-delay": ".6s",
                            children: (0, l.jsx)("div", {
                              className: "img",
                              children: (0, l.jsx)("a", {
                                href: t.a,
                                children: (0, l.jsx)("img", {
                                  src: "".concat(
                                    e ? "/light" : "/dark",
                                    "/assets/imgs/brands/02.png"
                                  ),
                                  alt: "",
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "col-md-4 col-6",
                          children: (0, l.jsx)("div", {
                            className: "item mt-30 wow fadeIn",
                            "data-wow-delay": ".8s",
                            children: (0, l.jsx)("div", {
                              className: "img",
                              children: (0, l.jsx)("a", {
                                href: t.a,
                                children: (0, l.jsx)("img", {
                                  src: "".concat(
                                    e ? "/light" : "/dark",
                                    "/assets/imgs/brands/03.png"
                                  ),
                                  alt: "",
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "col-md-4 col-6",
                          children: (0, l.jsx)("div", {
                            className: "item mt-30 wow fadeIn",
                            "data-wow-delay": ".3s",
                            children: (0, l.jsx)("div", {
                              className: "img",
                              children: (0, l.jsx)("a", {
                                href: t.a,
                                children: (0, l.jsx)("img", {
                                  src: "".concat(
                                    e ? "/light" : "/dark",
                                    "/assets/imgs/brands/04.png"
                                  ),
                                  alt: "",
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "col-md-4 col-6",
                          children: (0, l.jsx)("div", {
                            className: "item mt-30 wow fadeIn",
                            "data-wow-delay": ".4s",
                            children: (0, l.jsx)("div", {
                              className: "img",
                              children: (0, l.jsx)("a", {
                                href: t.a,
                                children: (0, l.jsx)("img", {
                                  src: "".concat(
                                    e ? "/light" : "/dark",
                                    "/assets/imgs/brands/05.png"
                                  ),
                                  alt: "",
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "col-md-4 col-6",
                          children: (0, l.jsx)("div", {
                            className: "item mt-30 wow fadeIn",
                            "data-wow-delay": ".7s",
                            children: (0, l.jsx)("div", {
                              className: "img",
                              children: (0, l.jsx)("a", {
                                href: t.a,
                                children: (0, l.jsx)("img", {
                                  src: "".concat(
                                    e ? "/light" : "/dark",
                                    "/assets/imgs/brands/06.png"
                                  ),
                                  alt: "",
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("div", {
                className: "col-lg-5",
                children: (0, l.jsxs)("div", {
                  className: "img-vid",
                  children: [
                    (0, l.jsx)("img", {
                      src: "/dark/assets/imgs/about/1.jpg",
                      alt: "",
                    }),
                    (0, l.jsx)("div", {
                      className: "rota-vid",
                      children: (0, l.jsx)("a", {
                        href: "https://www.youtube.com/embed/g4jWb-0nj44?si=w-_yLl7VqrwMu8c-",
                        className: "vid",
                        onClick: function (s) {
                          s.preventDefault(), c(!0);
                        },
                        children: (0, l.jsxs)("div", {
                          className: "circle-button in-bord",
                          children: [
                            (0, l.jsx)("div", {
                              className: "rotate-circle fz-30 text-u",
                              children: (0, l.jsxs)("svg", {
                                className: "textcircle",
                                viewBox: "0 0 500 500",
                                children: [
                                  (0, l.jsx)("defs", {
                                    children: (0, l.jsx)("path", {
                                      id: "textcircle",
                                      d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z",
                                    }),
                                  }),
                                  (0, l.jsx)("text", {
                                    children: (0, l.jsx)("textPath", {
                                      xlinkHref: "#textcircle",
                                      textLength: "900",
                                      children: "Explore More - Explore More -",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "arrow text-dark",
                              children: (0, l.jsx)("i", {
                                className: "fas fa-play",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)(r.Z, {
                videoId: "AzwC6umvd1s",
                channel: "youtube",
                isOpen: i,
                onClose: () => c(!1),
                autoplay: !0,
              }),
            ],
          });
        },
        o = function (s) {
          let { lightMode: e } = s;
          return (0, l.jsx)("section", {
            className: "block-sec section-padding",
            children: (0, l.jsxs)("div", {
              className: "container",
              children: [(0, l.jsx)(d, { lightMode: e }), (0, l.jsx)(n, {})],
            }),
          });
        };
    },
    1672: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var l = i(5893);
      i(7294);
      var a = i(1664),
        c = i.n(a),
        n = JSON.parse(
          '[{"id":1,"title":"Creative advertising in our life became a info noise","cover":"/dark/assets/imgs/blog/b1.jpg","author":"Admin","date":"august 6, 2021"},{"id":3,"title":"We create some things for your success in future growth","cover":"/dark/assets/imgs/blog/b3.jpg","author":"Admin","date":"august 6, 2021"},{"id":2,"title":"Creative advertising in our life became a info noise","cover":"/dark/assets/imgs/blog/b2.jpg","author":"Admin","date":"august 6, 2021"}]'
        ),
        r = function () {
          return (0, l.jsx)("section", {
            className: "blog-crev section-padding",
            children: (0, l.jsxs)("div", {
              className: "container",
              children: [
                (0, l.jsx)("div", {
                  className: "sec-lg-head mb-80",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, l.jsxs)("div", {
                          className: "position-re",
                          children: [
                            (0, l.jsx)("h6", {
                              className: "dot-titl colorbg-3 mb-10",
                              children: "Our Blogs",
                            }),
                            (0, l.jsx)("h2", {
                              className: "fz-60 fw-700",
                              children: "Latest News",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: "col-lg-4 d-flex align-items-center",
                        children: (0, l.jsx)("div", {
                          className:
                            "full-width d-flex justify-content-end justify-end",
                          children: (0, l.jsx)("div", {
                            className: "vew-all wow fadeIn",
                            children: (0, l.jsxs)(c(), {
                              href: "/dark/dark/blog-classic",
                              children: [
                                "View All Our News",
                                (0, l.jsx)("span", {
                                  children: (0, l.jsx)("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 18 18",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, l.jsx)("path", {
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
                (0, l.jsx)("div", {
                  className: "row",
                  children: n.map((s, e) =>
                    (0, l.jsx)(
                      "div",
                      {
                        className: "col-lg-4",
                        children: (0, l.jsxs)("div", {
                          className: "item ".concat(
                            e !== n.length - 1 ? "md-mb50" : ""
                          ),
                          children: [
                            (0, l.jsxs)("div", {
                              className: "cont",
                              children: [
                                (0, l.jsx)("h6", {
                                  children: (0, l.jsx)(c(), {
                                    href: "/dark/blog-details",
                                    children: s.title,
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "info mt-20 mb-20 pt-20 bord-thin-top",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "by",
                                      children: (0, l.jsxs)(c(), {
                                        href: "/dark/blog-classic",
                                        children: [
                                          (0, l.jsx)("i", {
                                            className:
                                              "far fa-user fz-14 mr-10",
                                          }),
                                          " By ",
                                          s.author,
                                        ],
                                      }),
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "dot main-colorbg3",
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "date",
                                      children: (0, l.jsxs)(c(), {
                                        href: "/dark/blog-details",
                                        children: [
                                          (0, l.jsx)("i", {
                                            className:
                                              "far fa-calendar-alt fz-14 mr-10",
                                          }),
                                          s.date,
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "img",
                              children: [
                                (0, l.jsx)("img", { src: s.cover, alt: "" }),
                                (0, l.jsx)(c(), {
                                  href: "/dark/blog-details",
                                  className: "main-colorbg3",
                                  children: (0, l.jsx)("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 18 18",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, l.jsx)("path", {
                                      d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                      fill: "currentColor",
                                    }),
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
              ],
            }),
          });
        };
    },
    6704: function (s, e, i) {
      var l = i(5893),
        a = i(7294),
        c = i(1664),
        n = i.n(c),
        r = i(7513);
      e.Z = function (s) {
        let { lightMode: e } = s;
        function i() {
          if (
            (window.innerWidth < 991 &&
              document.querySelector(".footer-container").style.transform &&
              (document.querySelector(".footer-container").style.transform =
                ""),
            window.innerWidth > 991 &&
              !document.querySelector(".footer-container").style.transform)
          ) {
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
        }
        return (
          (0, a.useEffect)(() => {
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
            return (
              window.addEventListener("resize", i),
              () => window.removeEventListener("resize", i)
            );
          }, []),
          (0, l.jsx)("footer", {
            className: "sub-bg",
            children: (0, l.jsxs)("div", {
              className: "footer-container",
              children: [
                (0, l.jsxs)("div", {
                  className: "container pb-80 pt-80 ontop",
                  children: [
                    (0, l.jsx)("div", {
                      className: "call-box text-center mb-80",
                      children: (0, l.jsxs)("h2", {
                        children: [
                          (0, l.jsxs)(n(), {
                            href: "/dark/page-contact",
                            children: [
                              "Let's ",
                              (0, l.jsx)("span", {
                                className: "stroke",
                                children: " Discuss",
                              }),
                            ],
                          }),
                          (0, l.jsx)("span", {
                            className: "arrow main-color3",
                            children: (0, l.jsx)("svg", {
                              width: "18",
                              height: "18",
                              viewBox: "0 0 18 18",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, l.jsx)("path", {
                                d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                fill: "currentColor",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, l.jsx)("div", {
                          className: "col-lg-3",
                          children: (0, l.jsxs)("div", {
                            className: "colum md-mb50",
                            children: [
                              (0, l.jsx)("div", {
                                className: "tit mb-20",
                                children: (0, l.jsx)("h6", {
                                  children: "Address",
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "text",
                                children: (0, l.jsx)("p", {
                                  children:
                                    "Santiago — 785 15h Street, Office 478 Santiago de Chile",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "col-lg-3 offset-lg-1",
                          children: (0, l.jsxs)("div", {
                            className: "colum md-mb50",
                            children: [
                              (0, l.jsx)("div", {
                                className: "tit mb-20",
                                children: (0, l.jsx)("h6", {
                                  children: "Say Hello",
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "text",
                                children: [
                                  (0, l.jsx)("p", {
                                    className: "mb-10",
                                    children: (0, l.jsx)("a", {
                                      href: "mailto:scayuqueo@usm.cl",
                                      children: "scayuqueo@usm.cl",
                                    }),
                                  }),
                                  (0, l.jsx)("h5", {
                                    children: (0, l.jsx)("a", {
                                      href: "callto:+56929202244",
                                      children: "+569 29202244",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className: "col-lg-2 md-mb50",
                          children: [
                            (0, l.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, l.jsx)("h6", {
                                children: "Social",
                              }),
                            }),
                            (0, l.jsxs)("ul", {
                              className: "rest social-text",
                              children: [
                                (0, l.jsx)("li", {
                                  children: (0, l.jsx)("a", {
                                    href: "#0",
                                    children: "Facebook",
                                  }),
                                }),
                                (0, l.jsx)("li", {
                                  children: (0, l.jsx)("a", {
                                    href: "#0",
                                    children: "Twitter",
                                  }),
                                }),
                                (0, l.jsx)("li", {
                                  children: (0, l.jsx)("a", {
                                    href: "#0",
                                    children: "LinkedIn",
                                  }),
                                }),
                                (0, l.jsx)("li", {
                                  children: (0, l.jsx)("a", {
                                    href: "#0",
                                    children: "Instagram",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "col-lg-3",
                          children: [
                            (0, l.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, l.jsx)("h6", {
                                children: "Newsletter",
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "subscribe",
                              children: (0, l.jsx)("form", {
                                action: "contact.php",
                                children: (0, l.jsxs)("div", {
                                  className: "form-group rest",
                                  children: [
                                    (0, l.jsx)("input", {
                                      type: "email",
                                      placeholder: "Type Your Email",
                                    }),
                                    (0, l.jsx)("button", {
                                      type: "submit",
                                      children: (0, l.jsx)("i", {
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
                (0, l.jsx)("div", {
                  className: "sub-footer pt-40 pb-40 bord-thin-top ontop",
                  children: (0, l.jsx)("div", {
                    className: "container",
                    children: (0, l.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, l.jsx)("div", {
                          className: "col-lg-4",
                          children: (0, l.jsx)("div", {
                            className: "logo",
                            children: (0, l.jsx)("a", {
                              href: "#",
                              children: (0, l.jsx)("img", {
                                src: "/dark/assets/imgs/logo-".concat(
                                  e ? "dark" : "light",
                                  ".png"
                                ),
                                alt: "",
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "col-lg-8",
                          children: (0, l.jsx)("div", {
                            className: "copyright d-flex",
                            children: (0, l.jsx)("div", {
                              className: "ml-auto",
                              children: (0, l.jsxs)("p", {
                                className: "fz-13",
                                children: [
                                  "\xa9 2023 Geekfolio is Proudly Powered by",
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "underline",
                                    children: (0, l.jsx)("a", {
                                      href: r.a,
                                      target: "_blank",
                                      children: r.v,
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
    9452: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return h;
        },
      });
      var l = i(5893),
        a = i(7294),
        c = i(1664),
        n = i.n(c),
        r = i(719),
        t = i(8116),
        d = i(8366),
        o = JSON.parse(
          '[{"id":1,"background":"/dark/assets/imgs/background/17.jpg","title":"Creative Agency","text":"Providing Best Digital Solutions & Grow Business.","button":{"link":"/dark/page-about","text":"Get Solutions"}},{"id":2,"background":"/dark/assets/imgs/background/14.jpg","title":"Creative Agency","text":"Providing Best Digital Solutions & Grow Business.","button":{"link":"/dark/page-about","text":"Get Solutions"}},{"id":3,"background":"/dark/assets/imgs/background/19.jpg","title":"Creative Agency","text":"Providing Best Digital Solutions & Grow Business.","button":{"link":"/dark/page-about","text":"Get Solutions"}}]'
        );
      let m = {
        modules: [t.W_, t.pt, t.tl, t.VS],
        speed: 1500,
        autoplay: { delay: 5e3 },
        parallax: !0,
        loop: !0,
        onSwiper: function (s) {
          for (var e = 0; e < s.slides.length; e++)
            s.slides[e]
              .querySelector(".bg-img")
              .setAttribute("data-swiper-parallax", 0.75 * s.width);
        },
        onResize: function (s) {
          s.update();
        },
        pagination: {
          el: ".slider-prlx .parallax-slider .swiper-pagination",
          type: "fraction",
          clickable: !0,
        },
        navigation: {
          nextEl: ".slider-prlx .parallax-slider .next-ctrl",
          prevEl: ".slider-prlx .parallax-slider .prev-ctrl",
        },
      };
      var h = function () {
        let [s, e] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            e(!0);
          }, []),
          (0, a.useEffect)(() => {
            s && (0, d.Z)();
          }, [s]),
          (0, l.jsxs)("header", {
            className: "slider slider-prlx o-hidden",
            children: [
              (0, l.jsx)("div", { className: "lines two" }),
              s &&
                (0, l.jsx)(r.tq, {
                  className: "parallax-slider",
                  ...m,
                  children: o.map((s) =>
                    (0, l.jsx)(
                      r.o5,
                      {
                        children: (0, l.jsx)("div", {
                          className: "bg-img valign",
                          "data-background": s.background,
                          "data-overlay-dark": "7",
                          children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsx)("div", {
                              className: "row justify-content-center",
                              children: (0, l.jsx)("div", {
                                className: "col-lg-10",
                                children: (0, l.jsxs)("div", {
                                  className: "caption text-center",
                                  children: [
                                    (0, l.jsxs)("h6", {
                                      className: "sub-title mb-15",
                                      children: [
                                        (0, l.jsx)("svg", {
                                          width: "18",
                                          height: "18",
                                          viewBox: "0 0 18 18",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, l.jsx)("path", {
                                            d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                            fill: "currentColor",
                                          }),
                                        }),
                                        (0, l.jsx)("span", {
                                          className: "ml-10",
                                          children: s.title,
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)("h1", {
                                      className: "fz-60",
                                      children: s.text,
                                    }),
                                    (0, l.jsxs)(n(), {
                                      href: s.button.link,
                                      className:
                                        "butn butn-md butn-bg main-colorbg3 text-dark mt-30",
                                      children: [
                                        s.button.text,
                                        (0, l.jsx)("i", {
                                          className: "ml-5",
                                          children: (0, l.jsx)("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 18 18",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, l.jsx)("path", {
                                              d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                              fill: "currentColor",
                                            }),
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
    2655: function (s, e, i) {
      var l = i(5893);
      i(7294),
        (e.Z = function () {
          return (0, l.jsx)("section", {
            className: "serv-marq main-colorbg3",
            children: (0, l.jsx)("div", {
              className: "container-fluid rest pt-20 pb-20",
              children: (0, l.jsx)("div", {
                className: "row",
                children: (0, l.jsx)("div", {
                  className: "col-12",
                  children: (0, l.jsx)("div", {
                    className: "main-marq dark-text",
                    children: (0, l.jsxs)("div", {
                      className: "slide-har st1",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "box non-strok",
                          children: [
                            (0, l.jsx)("div", {
                              className: "item",
                              children: (0, l.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "UI-UX Experience",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "item",
                              children: (0, l.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Web Development",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "item",
                              children: (0, l.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Digital Marketing",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "item",
                              children: (0, l.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Product Design",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "item",
                              children: (0, l.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Mobile Solutions",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "box non-strok",
                          children: [
                            (0, l.jsx)("div", {
                              className: "item",
                              children: (0, l.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "UI-UX Experience",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "item",
                              children: (0, l.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Web Development",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "item",
                              children: (0, l.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Digital Marketing",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "item",
                              children: (0, l.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Product Design",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "item",
                              children: (0, l.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Mobile Solutions",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
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
    1723: function (s, e, i) {
      var l = i(5893);
      i(7294),
        (e.Z = function (s) {
          let { paddingTop: e } = s;
          return (0, l.jsx)("section", {
            className: "numbers section-padding ".concat(e ? "" : "pt-0"),
            children: (0, l.jsx)("div", {
              className: "container",
              children: (0, l.jsxs)("div", {
                className: "row",
                children: [
                  (0, l.jsx)("div", {
                    className: "col-lg-3 col-md-6",
                    children: (0, l.jsxs)("div", {
                      className: "item md-mb50",
                      children: [
                        (0, l.jsx)("h2", {
                          className: "fw-800 stroke",
                          children: "16",
                        }),
                        (0, l.jsx)("h6", { children: "Years of Experience" }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "col-lg-3 col-md-6 d-flex justify-content-around",
                    children: (0, l.jsxs)("div", {
                      className: "item md-mb50",
                      children: [
                        (0, l.jsxs)("h2", {
                          className: "fw-800",
                          children: [
                            "4",
                            (0, l.jsx)("span", {
                              className: "fz-80 fw-600",
                              children: "k",
                            }),
                          ],
                        }),
                        (0, l.jsx)("h6", { children: "Projects Complated" }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "col-lg-3 col-md-6 d-flex justify-content-around",
                    children: (0, l.jsxs)("div", {
                      className: "item sm-mb50",
                      children: [
                        (0, l.jsxs)("h2", {
                          className: "fw-800 stroke",
                          children: [
                            "9",
                            (0, l.jsx)("span", {
                              className: "fz-80 fw-600",
                              children: "k",
                            }),
                          ],
                        }),
                        (0, l.jsx)("h6", { children: "Happy Customers" }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "col-lg-3 col-md-6 d-flex",
                    children: (0, l.jsxs)("div", {
                      className: "item ml-auto",
                      children: [
                        (0, l.jsx)("h2", {
                          className: "fw-800",
                          children: "12",
                        }),
                        (0, l.jsx)("h6", { children: "Awards Winning" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        });
    },
    3408: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var l = i(5893);
      i(7294);
      var a = i(1664),
        c = i.n(a),
        n = JSON.parse(
          '[{"id":1,"number":"01","title":"Elegant Lamp","image":"/dark/assets/imgs/portfolio/3/1.jpg","details":"Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","marqText":"Red Package"},{"id":2,"number":"02","title":"Wall Lamp","image":"/dark/assets/imgs/portfolio/3/2.jpg","details":"Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","marqText":"Wall Lamp"},{"id":3,"number":"03","title":"Wall Lamp","image":"/dark/assets/imgs/portfolio/3/3.jpg","details":"Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","marqText":"Elegant Stoves"}]'
        ),
        r = function () {
          return (0, l.jsx)("section", {
            className: "portfolio section-padding",
            children: (0, l.jsxs)("div", {
              className: "container",
              children: [
                (0, l.jsx)("div", {
                  className: "sec-lg-head mb-80",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, l.jsxs)("div", {
                          className: "position-re",
                          children: [
                            (0, l.jsx)("h6", {
                              className: "dot-titl colorbg-3 mb-10",
                              children: "Selected Projects",
                            }),
                            (0, l.jsx)("h2", {
                              className: "fz-60 fw-700",
                              children: "Featured Works",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: "col-lg-4 d-flex align-items-center",
                        children: (0, l.jsx)("div", {
                          className: "text",
                          children: (0, l.jsx)("p", {
                            children:
                              "Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "work-row",
                  children: n.map((s, e) =>
                    (0, l.jsxs)(
                      "div",
                      {
                        className: "item bord-thin-top ".concat(
                          e === n.length - 1 ? "bord-thin-bottom" : ""
                        ),
                        children: [
                          (0, l.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-lg-3 d-flex align-items-end",
                                children: (0, l.jsxs)("div", {
                                  className: "title",
                                  children: [
                                    (0, l.jsxs)("span", {
                                      className: "numb",
                                      children: [s.number, "."],
                                    }),
                                    (0, l.jsx)("h5", { children: s.title }),
                                  ],
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, l.jsx)("div", {
                                  className: "img md-mb30",
                                  children: (0, l.jsx)("img", {
                                    src: s.image,
                                    alt: "",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "col-lg-5 d-flex align-items-end",
                                children: (0, l.jsxs)("div", {
                                  className: "cont",
                                  children: [
                                    (0, l.jsx)("p", { children: s.text }),
                                    (0, l.jsxs)(c(), {
                                      href: "/dark/project-details1",
                                      className: "mt-30 ls1 sub-title",
                                      children: [
                                        "View Project ",
                                        (0, l.jsx)("i", {
                                          className: "ml-5",
                                          children: (0, l.jsx)("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 18 18",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, l.jsx)("path", {
                                              d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                              fill: "currentColor",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "main-marq xlrg",
                            children: (0, l.jsxs)("div", {
                              className: "slide-har st1 strok",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "box",
                                  children: [, , , , ,]
                                    .fill()
                                    .map((e, i) =>
                                      (0, l.jsx)(
                                        "div",
                                        {
                                          className: "item",
                                          children: (0, l.jsx)("h4", {
                                            children: s.marqText,
                                          }),
                                        },
                                        i
                                      )
                                    ),
                                }),
                                (0, l.jsx)("div", {
                                  className: "box",
                                  children: [, , , , ,]
                                    .fill()
                                    .map((e, i) =>
                                      (0, l.jsx)(
                                        "div",
                                        {
                                          className: "item",
                                          children: (0, l.jsx)("h4", {
                                            children: s.marqText,
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
    4596: function (s, e, i) {
      var l = i(5893),
        a = i(7294),
        c = i(1664),
        n = i.n(c),
        r = i(8366);
      e.Z = function () {
        return (
          (0, a.useEffect)(() => {
            (0, r.Z)();
          }, []),
          (0, l.jsx)("section", {
            className: "pricing section-padding sub-bg",
            children: (0, l.jsxs)("div", {
              className: "container",
              children: [
                (0, l.jsx)("div", {
                  className: "sec-lg-head mb-80",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, l.jsxs)("div", {
                          className: "position-re",
                          children: [
                            (0, l.jsx)("h6", {
                              className: "dot-titl colorbg-3 mb-10",
                              children: "Featured Services",
                            }),
                            (0, l.jsx)("h2", {
                              className: "fz-60 fw-700",
                              children: "Our Services",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: "col-lg-4 d-flex align-items-center",
                        children: (0, l.jsx)("div", {
                          className: "text",
                          children: (0, l.jsx)("p", {
                            children:
                              "Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "row md-marg",
                  children: [
                    (0, l.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, l.jsxs)("div", {
                        className: "item main-bg position-re o-hidden md-mb50",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "info-box pb-30 bord-thin-bottom mb-30",
                            children: [
                              (0, l.jsx)("h6", {
                                className: "sub-title mb-15",
                                children: "Basic Plan",
                              }),
                              (0, l.jsx)("div", {
                                className: "amount",
                                children: (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("span", {
                                      className:
                                        "main-color3 num-font fw-600 fz-50",
                                      children: "$19",
                                    }),
                                    " ",
                                    (0, l.jsx)("span", {
                                      className: "fz-14 fw-400",
                                      children: "/ Mounth",
                                    }),
                                  ],
                                }),
                              }),
                              (0, l.jsx)("p", {
                                className: "fz-13",
                                children:
                                  "10% taxes will include after make price.",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("ul", {
                            className: "rest",
                            children: [
                              (0, l.jsx)("li", {
                                children: "10 Hours of task work",
                              }),
                              (0, l.jsx)("li", { children: "1 User included" }),
                              (0, l.jsx)("li", { children: "Advertising" }),
                              (0, l.jsx)("li", {
                                children: "Web developments",
                              }),
                              (0, l.jsx)("li", { children: "24 / 7 Support" }),
                            ],
                          }),
                          (0, l.jsxs)(n(), {
                            href: "/dark/page-contact",
                            className: "butn butn-md butn-bord mt-30",
                            children: [
                              (0, l.jsx)("span", { children: "Get Started" }),
                              (0, l.jsx)("i", {
                                className: "ml-5",
                                children: (0, l.jsx)("svg", {
                                  width: "18",
                                  height: "18",
                                  viewBox: "0 0 18 18",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, l.jsx)("path", {
                                    d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                    fill: "currentColor",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "bg-pattern bg-img opacity-1",
                            "data-background":
                              "/dark/assets/imgs/patterns/1.svg",
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, l.jsxs)("div", {
                        className: "item main-bg position-re o-hidden md-mb50",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "info-box pb-30 bord-thin-bottom mb-30",
                            children: [
                              (0, l.jsx)("h6", {
                                className: "sub-title mb-15",
                                children: "Basic Plan",
                              }),
                              (0, l.jsx)("div", {
                                className: "amount",
                                children: (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("span", {
                                      className:
                                        "main-color3 num-font fw-600 fz-50",
                                      children: "$49",
                                    }),
                                    " ",
                                    (0, l.jsx)("span", {
                                      className: "fz-14 fw-400",
                                      children: "/ Mounth",
                                    }),
                                  ],
                                }),
                              }),
                              (0, l.jsx)("p", {
                                className: "fz-13",
                                children:
                                  "10% taxes will include after make price.",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("ul", {
                            className: "rest",
                            children: [
                              (0, l.jsx)("li", {
                                children: "10 Hours of task work",
                              }),
                              (0, l.jsx)("li", { children: "1 User included" }),
                              (0, l.jsx)("li", { children: "Advertising" }),
                              (0, l.jsx)("li", {
                                children: "Web developments",
                              }),
                              (0, l.jsx)("li", { children: "24 / 7 Support" }),
                            ],
                          }),
                          (0, l.jsxs)(n(), {
                            href: "/dark/page-contact",
                            className:
                              "butn butn-md butn-bg main-colorbg3 text-dark mt-30",
                            children: [
                              (0, l.jsx)("span", { children: "Get Started" }),
                              (0, l.jsx)("i", {
                                className: "ml-5",
                                children: (0, l.jsx)("svg", {
                                  width: "18",
                                  height: "18",
                                  viewBox: "0 0 18 18",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, l.jsx)("path", {
                                    d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                    fill: "currentColor",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "bg-pattern bg-img opacity-3",
                            "data-background":
                              "/dark/assets/imgs/patterns/abstact-BG.png",
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, l.jsxs)("div", {
                        className: "item main-bg position-re o-hidden",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "info-box pb-30 bord-thin-bottom mb-30",
                            children: [
                              (0, l.jsx)("h6", {
                                className: "sub-title mb-15",
                                children: "Basic Plan",
                              }),
                              (0, l.jsx)("div", {
                                className: "amount",
                                children: (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("span", {
                                      className:
                                        "main-color3 num-font fw-600 fz-50",
                                      children: "$79",
                                    }),
                                    " ",
                                    (0, l.jsx)("span", {
                                      className: "fz-14 fw-400",
                                      children: "/ Mounth",
                                    }),
                                  ],
                                }),
                              }),
                              (0, l.jsx)("p", {
                                className: "fz-13",
                                children:
                                  "10% taxes will include after make price.",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("ul", {
                            className: "rest",
                            children: [
                              (0, l.jsx)("li", {
                                children: "10 Hours of task work",
                              }),
                              (0, l.jsx)("li", { children: "1 User included" }),
                              (0, l.jsx)("li", { children: "Advertising" }),
                              (0, l.jsx)("li", {
                                children: "Web developments",
                              }),
                              (0, l.jsx)("li", { children: "24 / 7 Support" }),
                            ],
                          }),
                          (0, l.jsxs)(n(), {
                            href: "/dark/page-contact",
                            className: "butn butn-md butn-bord mt-30",
                            children: [
                              (0, l.jsx)("span", { children: "Get Started" }),
                              (0, l.jsx)("i", {
                                className: "ml-5",
                                children: (0, l.jsx)("svg", {
                                  width: "18",
                                  height: "18",
                                  viewBox: "0 0 18 18",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, l.jsx)("path", {
                                    d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                    fill: "currentColor",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "bg-pattern bg-img opacity-1",
                            "data-background":
                              "/dark/assets/imgs/patterns/1.svg",
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
    4183: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var l = i(5893);
      i(7294);
      var a = i(1664),
        c = i.n(a),
        n = JSON.parse(
          '[{"id":1,"image":"assets/imgs/serv-icons/0.png","category":"Product Design","title":"Digital Product Design","text":"Creating a higher spacing and how people move through a unique."},{"id":2,"image":"assets/imgs/serv-icons/1.png","category":"Customs Services","title":"Branding & Design","text":"Creating a higher spacing and how people move through a unique."},{"id":3,"image":"assets/imgs/serv-icons/2.png","category":"Product Development","title":"Web Development","text":"Creating a higher spacing and how people move through a unique."}]'
        ),
        r = function (s) {
          let { lightMode: e } = s;
          return (0, l.jsx)("section", {
            className: "serv-box section-padding",
            children: (0, l.jsxs)("div", {
              className: "container",
              children: [
                (0, l.jsx)("div", {
                  className: "sec-lg-head mb-80",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, l.jsxs)("div", {
                          className: "position-re",
                          children: [
                            (0, l.jsx)("h6", {
                              className: "dot-titl colorbg-3 mb-10",
                              children: "Featured Services",
                            }),
                            (0, l.jsx)("h2", {
                              className: "fz-60 fw-700",
                              children: "Our Services",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: "col-lg-4 d-flex align-items-center",
                        children: (0, l.jsx)("div", {
                          className: "text",
                          children: (0, l.jsx)("p", {
                            children:
                              "Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "row",
                  children: n.map((s) =>
                    (0, l.jsx)(
                      "div",
                      {
                        className: "col-lg-4",
                        children: (0, l.jsxs)("div", {
                          className: "serv-item md-mb50 radius-5",
                          children: [
                            (0, l.jsx)("div", {
                              className: "icon-img-50 mb-40",
                              children: e
                                ? (0, l.jsx)("img", {
                                    src: "/light/".concat(s.image),
                                    alt: "",
                                  })
                                : (0, l.jsx)("img", {
                                    src: "/dark/".concat(s.image),
                                    alt: "",
                                  }),
                            }),
                            (0, l.jsx)("span", {
                              className: "mb-10 opacity-7",
                              children: s.category,
                            }),
                            (0, l.jsx)("h6", {
                              className: "mb-15",
                              children: s.title,
                            }),
                            (0, l.jsx)("p", {
                              className: "fz-14",
                              children: s.text,
                            }),
                            (0, l.jsx)("div", {
                              className: "underline",
                              children: (0, l.jsxs)(c(), {
                                href: "/dark/page-services",
                                className: "mt-30 ls1 fz-12 text-u",
                                children: [
                                  "Read More",
                                  (0, l.jsx)("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 18 18",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, l.jsx)("path", {
                                      d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                      fill: "currentColor",
                                    }),
                                  }),
                                ],
                              }),
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
    5567: function (s, e, i) {
      var l = i(5893),
        a = i(7294),
        c = i(719),
        n = i(8116),
        r = i(8366);
      let t = {
        modules: [n.tl, n.W_],
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
      e.Z = function (s) {
        let { lightMode: e } = s,
          [i, n] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            n(!0), (0, r.Z)();
          }, []),
          (0, l.jsxs)("section", {
            className: "testim-crv2 sub-bg position-re",
            children: [
              (0, l.jsxs)("div", {
                className: "container section-padding position-re",
                children: [
                  (0, l.jsx)("div", {
                    className: "row",
                    children: (0, l.jsxs)("div", {
                      className: "col-lg-6 offset-lg-6",
                      children: [
                        (0, l.jsx)("div", {
                          className: "testim-swiper mt-80",
                          children:
                            i &&
                            (0, l.jsx)(c.tq, {
                              ...t,
                              id: "content-carousel-container-unq-testim",
                              children: (0, l.jsx)(c.o5, {
                                children: (0, l.jsxs)("div", {
                                  className: "item",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "cont mb-30",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "rate-stars mb-20 fz-14",
                                          children: (0, l.jsxs)("span", {
                                            className: "rate main-color3",
                                            children: [
                                              (0, l.jsx)("i", {
                                                className: "fas fa-star me-1",
                                              }),
                                              (0, l.jsx)("i", {
                                                className: "fas fa-star me-1",
                                              }),
                                              (0, l.jsx)("i", {
                                                className: "fas fa-star me-1",
                                              }),
                                              (0, l.jsx)("i", {
                                                className: "fas fa-star me-1",
                                              }),
                                              (0, l.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)("h5", {
                                          className: "fw-400",
                                          children:
                                            "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "line-icon mb-20 d-flex",
                                      children: (0, l.jsx)("div", {
                                        className: "ml-auto",
                                        children: (0, l.jsx)("div", {
                                          className: "img sub-bg",
                                          children: (0, l.jsx)("img", {
                                            src: "".concat(
                                              e ? "/light" : "/dark",
                                              "/assets/imgs/svg-assets/quote.png"
                                            ),
                                            alt: "",
                                          }),
                                        }),
                                      }),
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, l.jsx)("div", {
                                          children: (0, l.jsx)("div", {
                                            className: "img circle-60",
                                            children: (0, l.jsx)("img", {
                                              src: "".concat(
                                                e ? "/light" : "/dark",
                                                "/assets/imgs/testim/4.jpg"
                                              ),
                                              alt: "",
                                              className: "circle-img",
                                            }),
                                          }),
                                        }),
                                        (0, l.jsx)("div", {
                                          className: "ml-30",
                                          children: (0, l.jsxs)("div", {
                                            className: "info",
                                            children: [
                                              (0, l.jsx)("h6", {
                                                className: "fz-16",
                                                children: "Leonard Heiser",
                                              }),
                                              (0, l.jsx)("span", {
                                                className:
                                                  "opacity-7 sub-title",
                                                children: "Ceo",
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
                        (0, l.jsxs)("div", {
                          className:
                            "swiper-controls testim-controls arrow-out d-flex mt-50",
                          children: [
                            (0, l.jsx)("div", {
                              className: "swiper-button-prev",
                              children: (0, l.jsx)("span", {
                                className: "left",
                                children: (0, l.jsx)("svg", {
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 20 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, l.jsx)("path", {
                                    d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                    fill: "currentColor",
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "swiper-button-next ml-50",
                              children: (0, l.jsx)("span", {
                                className: "right",
                                children: (0, l.jsx)("svg", {
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 20 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, l.jsx)("path", {
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
                  (0, l.jsx)("div", {
                    className: "half-img-left bg-img ontop md-hide",
                    "data-background": "/dark/assets/imgs/testim/01.png",
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "bg-pattern bg-repeat bg-img opacity-1",
                "data-background": "/dark/assets/imgs/patterns/dots.png",
              }),
            ],
          })
        );
      };
    },
  },
]);
