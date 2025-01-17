"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2522],
  {
    6036: function (s, e, i) {
      var a = i(5893),
        n = i(7294);
      e.Z = function (s) {
        let { videoId: e, channel: i, isOpen: t, onClose: l, autoplay: c } = s,
          r = (0, n.useRef)(null),
          [d, o] = (0, n.useState)("");
        return (
          (0, n.useEffect)(() => {
            "youtube" === i
              ? o("//www.youtube.com/embed/" + e)
              : "vimeo" === i && o("//player.vimeo.com/video/" + e);
          }, [i, e]),
          t
            ? (0, a.jsx)("div", {
                className: "modal-video",
                tabIndex: "-1",
                role: "dialog",
                "aria-label": "video",
                onClick: l,
                children: (0, a.jsx)("div", {
                  className: "modal-video-body",
                  children: (0, a.jsxs)("div", {
                    className: "modal-video-inner",
                    children: [
                      (0, a.jsx)("button", {
                        className: "modal-video-close-btn",
                        "aria-label": "video",
                        ref: r,
                        onClick: l,
                      }),
                      (0, a.jsx)("div", {
                        className: "modal-video-movie-wrap",
                        children: (0, a.jsx)("iframe", {
                          width: "460",
                          height: "230",
                          src: d,
                          allowFullScreen: "allowFullScreen",
                          autoPlay: c || !1,
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
    9426: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var a = i(5893);
      i(7294);
      var n = i(1664),
        t = i.n(n),
        l = JSON.parse(
          '[{"id":1,"title":"The Future of AI Agents in Business","cover":"dark/assets/imgs/blog/b1.jpg","author":"admin","date":"January 5, 2025","tag":"AI Agents"},{"id":2,"title":"Unlocking Automation with Langchain","cover":"dark/assets/imgs/blog/b2.jpg","author":"admin","date":"January 6, 2025","tag":"Langchain"},{"id":3,"title":"How AI is Transforming Data Analysis","cover":"dark/assets/imgs/blog/b3.jpg","author":"admin","date":"January 9, 2025","tag":"Data Analysis"}]'
        ),
        c = function () {
          return (0, a.jsxs)("section", {
            className: "blog-list2 section-padding",
            children: [
              (0, a.jsx)("div", {
                className: "container",
                children: (0, a.jsxs)("div", {
                  className: "row mb-80",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, a.jsxs)("h6", {
                        children: [
                          (0, a.jsx)("span", {
                            className: "fz-14",
                            children: "08 . ",
                          }),
                          " Latest News",
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-6 offset-lg-1",
                      children: (0, a.jsx)("div", {
                        className: "text",
                        children: (0, a.jsxs)("h3", {
                          children: [
                            "We create ",
                            (0, a.jsx)("span", {
                              className: "sub-font",
                              children: "AI experiences",
                            }),
                            " and turn ideas into reality.",
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "container",
                children: (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "col-12",
                    children: (0, a.jsx)("div", {
                      className: "items",
                      children: l.map((s) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className: "item",
                            children: (0, a.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "col-lg-2 d-flex align-items-center",
                                  children: (0, a.jsx)("div", {
                                    className: "categ fz-13 md-mb30",
                                    children: (0, a.jsx)(t(), {
                                      href: "/dark/blog-classic",
                                      children: s.tag,
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "col-lg-5",
                                  children: (0, a.jsx)("div", {
                                    className: "title",
                                    children: (0, a.jsx)("h5", {
                                      children: (0, a.jsx)(t(), {
                                        href: "/dark/blog-details",
                                        children: s.title,
                                      }),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "col-lg-2 position-re",
                                  children: (0, a.jsx)("div", {
                                    className: "img",
                                    children: (0, a.jsx)("img", {
                                      src: s.cover,
                                      alt: "",
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "col-lg-3 d-flex align-items-center justify-end",
                                  children: (0, a.jsxs)("div", {
                                    className: "info fz-13 ml-auto opacity-7",
                                    children: [
                                      (0, a.jsx)("span", { children: s.date }),
                                      (0, a.jsx)("span", {
                                        className: "ml-15 mr-15",
                                        children: "/",
                                      }),
                                      (0, a.jsxs)("span", {
                                        children: ["By ", s.author],
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
                  }),
                }),
              }),
            ],
          });
        };
    },
    3814: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var a = i(5893);
      i(7294);
      var n = JSON.parse(
          '["/assets/imgs/brands/01.png","/assets/imgs/brands/02.png","/assets/imgs/brands/03.png","/assets/imgs/brands/04.png","/assets/imgs/brands/05.png","/assets/imgs/brands/03.png"]'
        ),
        t = i(7513),
        l = i(2637),
        c = function (s) {
          let { lightMode: e } = s;
          return (0, a.jsxs)("div", {
            className: "clients section-padding pb-100 position-re",
            children: [
              (0, a.jsx)("div", {
                className: "container",
                children: (0, a.jsx)("div", {
                  className: "row justify-content-center mb-80",
                  children: (0, a.jsxs)("div", {
                    className: "col-lg-6 text-center",
                    children: [
                      (0, a.jsxs)("h6", {
                        children: [
                          (0, a.jsx)("span", {
                            className: "fz-14",
                            children: "06 . ",
                          }),
                          " Clients",
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "text",
                        children: (0, a.jsxs)("h3", {
                          children: [
                            "We create ",
                            (0, a.jsx)("span", {
                              className: "sub-font",
                              children: "AI experiences",
                            }),
                            " and turn ideas into reality.",
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "container",
                children: (0, a.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, a.jsx)("div", {
                    className: "col-lg-11",
                    children: (0, a.jsx)("div", {
                      className: "row md-marg",
                      children: n.map((s) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className: "col-md-4 col-6 brand box-bg",
                            children: (0, a.jsxs)("div", {
                              className: "item mb-30 wow fadeIn",
                              "data-wow-delay": ".6s",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "img",
                                  children: (0, a.jsx)("img", {
                                    src: "/"
                                      .concat(e ? "light" : "dark")
                                      .concat(s),
                                    alt: "",
                                  }),
                                }),
                                (0, a.jsx)(l.Z, {
                                  tag: "a",
                                  href: t.a,
                                  className: "link",
                                  children: "www.cleverest.cl",
                                }),
                              ],
                            }),
                          },
                          Math.floor(1e4 * Math.random())
                        )
                      ),
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "bg-pattern patrn1 bg-img opacity-5",
                "data-background": "/".concat(
                  e ? "light" : "dark",
                  "/assets/imgs/patterns/pattern.svg"
                ),
              }),
            ],
          });
        };
    },
    970: function (s, e, i) {
      var a = i(5893),
        n = i(7294),
        t = i(8366);
      e.Z = function (s) {
        let { lightMode: e } = s;
        return (
          (0, n.useEffect)(() => {
            (0, t.Z)();
          }, []),
          (0, a.jsxs)("header", {
            className: "header-startup full-height valign bord-thin-bottom",
            children: [
              (0, a.jsx)("div", {
                className: "container",
                children: (0, a.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, a.jsx)("div", {
                    className: "col-lg-11",
                    children: (0, a.jsxs)("div", {
                      className: "caption text-center mt-50",
                      children: [
                        (0, a.jsx)("div", {
                          className: "sec-lg-head",
                          children: (0, a.jsx)("h6", {
                            className: "dot-titl-non mb-15",
                            children: "Cleverest AI Agents",
                          }),
                        }),
                        (0, a.jsxs)("h1", {
                          className: "fw-700 fz-80",
                          children: [
                            "We’re ",
                            (0, a.jsx)("span", {
                              className:
                                "img-in-text icon-img-120 radius-30 bg-img",
                              "data-background": "/".concat(
                                e ? "light" : "dark",
                                "/assets/imgs/about/1.jpg"
                              ),
                            }),
                            " sharp team, ",
                            (0, a.jsx)("span", {
                              className: "sub-font",
                              children: "creators",
                            }),
                            " open for any ",
                            (0, a.jsx)("span", {
                              className: "icon-img-60",
                              children: (0, a.jsx)("img", {
                                src: "/".concat(
                                  e ? "light" : "dark",
                                  "/assets/imgs/svg-assets/star.png"
                                ),
                                alt: "",
                              }),
                            }),
                            " kind of ",
                            (0, a.jsx)("span", {
                              className: "stroke fw-800",
                              children: "new",
                            }),
                            " works",
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "arrow-down main-bg",
                children: (0, a.jsx)("svg", {
                  width: "20",
                  height: "15",
                  viewBox: "0 0 20 15",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "svg-for-tablet",
                  children: (0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.835489 6.51022L15.5607 6.51022L10.9081 1.85764C10.5179 1.46747 10.9555 1.24491 11.3626 0.837776C11.7697 0.430646 11.9923 -0.00687319 12.3825 0.383293L18.7406 6.74141C19.1307 7.13158 19.117 7.77791 18.7099 8.18504L12.0753 14.8196C11.6682 15.2267 11.371 14.7053 11.0739 14.4081C10.7767 14.111 10.2553 13.8138 10.6624 13.4067L15.5173 8.55182L0.792051 8.55182L0.835489 6.51022Z",
                    fill: "currentColor",
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "bg-pattern-half bg-img opacity-5",
                "data-background": "/".concat(
                  e ? "light" : "dark",
                  "/assets/imgs/svg-assets/patern-bg.png"
                ),
              }),
              (0, a.jsx)("div", {
                className: "bg-pattern-half bg-img opacity-5",
                "data-background": "/".concat(
                  e ? "light" : "dark",
                  "/assets/imgs/svg-assets/patern-bg.png"
                ),
              }),
            ],
          })
        );
      };
    },
    1753: function (s, e, i) {
      var a = i(5893);
      i(7294),
        (e.Z = function () {
          return (0, a.jsx)("section", {
            className: "intro-imgs section-padding",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-4",
                    children: (0, a.jsx)("div", {
                      className: "img1 md-mb50",
                      children: (0, a.jsx)("img", {
                        src: "/dark/assets/imgs/about/sq1.jpg",
                        alt: "",
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-5 valign",
                    children: (0, a.jsxs)("div", {
                      className: "cont md-mb50",
                      children: [
                        (0, a.jsxs)("h6", {
                          className: "mb-15",
                          children: [
                            (0, a.jsx)("span", {
                              className: "fz-14",
                              children: "01 . ",
                            }),
                            " Cleverest",
                          ],
                        }),
                        (0, a.jsx)("p", {
                          children:
                            "We unleash AI agents to ask the right questions. To win every battle. To always be first.",
                        }),
                        (0, a.jsxs)("div", {
                          className: "stauts d-flex align-items-center mt-80",
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h2", { children: "46" }),
                                (0, a.jsx)("p", {
                                  className: "fz-14",
                                  children: "Satisfied Clients",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "ml-auto",
                              children: [
                                (0, a.jsx)("h2", { children: "50 +" }),
                                (0, a.jsx)("p", {
                                  className: "fz-14",
                                  children: "Projects Completed",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-3",
                    children: (0, a.jsx)("div", {
                      className: "img1 mt-30",
                      children: (0, a.jsx)("img", {
                        src: "/dark/assets/imgs/about/1.jpg",
                        alt: "",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        });
    },
    6846: function (s, e, i) {
      var a = i(5893);
      i(7294),
        (e.Z = function () {
          return (0, a.jsx)("section", {
            className: "serv-marq skew ontop",
            children: (0, a.jsx)("div", {
              className: "container-fluid",
              children: (0, a.jsx)("div", {
                className: "row",
                children: (0, a.jsx)("div", {
                  className: "col-12",
                  children: (0, a.jsx)("div", {
                    className: "main-marq lrg opacity-4",
                    children: (0, a.jsxs)("div", {
                      className: "slide-har st1 strok",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "box",
                          children: [
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "AI Experience",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "AI Engineers",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "Future of Automation",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "AI Age",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "AI Solutions",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "box",
                          children: [
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "UI-UX Experience",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "Web Development",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "Digital Marketing",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "Product Design",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "Mobile Solutions",
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
    4923: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return t;
        },
      });
      var a = i(5893);
      i(7294);
      var n = JSON.parse(
          '[{"BH":"/dark/assets/imgs/portfolio/2/1.jpg","ty":"2025","dt":"AI Agent Implementation"},{"BH":"/dark/assets/imgs/portfolio/2/3.jpg","ty":"2025","dt":"Langchain Application"},{"BH":"/dark/assets/imgs/portfolio/2/2.jpg","ty":"2025","dt":"AI-Driven Automation"},{"BH":"/dark/assets/imgs/portfolio/2/4.jpg","ty":"2025","dt":"Custom AI Data Solution"}]'
        ),
        t = function () {
          return (0, a.jsx)("section", {
            className: "portfolio section-padding",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "sec-head md-mb80",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-lg-4",
                        children: (0, a.jsxs)("h6", {
                          children: [
                            (0, a.jsx)("span", {
                              className: "fz-14",
                              children: "04 . ",
                            }),
                            " Our Portfolio",
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-5 offset-lg-3",
                        children: (0, a.jsx)("div", {
                          className: "text",
                          children: (0, a.jsx)("h3", {
                            className: "lg-text text-u",
                            children: "Case Studies",
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
                                src: n[0].BH,
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
                                    children: "From our Clients",
                                  }),
                                  (0, a.jsx)("p", { children: n[0].dt }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "ml-auto",
                                children: (0, a.jsxs)("p", {
                                  className: "fz-14",
                                  children: ["\xa9 ", n[0].ty],
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
                                    src: n[1].BH,
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
                                      (0, a.jsx)("p", { children: n[1].dt }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "ml-auto",
                                    children: (0, a.jsxs)("p", {
                                      className: "fz-14",
                                      children: ["\xa9 ", n[1].ty],
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
                                    src: n[2].BH,
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
                                        children: "From our Clients",
                                      }),
                                      (0, a.jsx)("p", { children: n[2].dt }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "ml-auto",
                                    children: (0, a.jsxs)("p", {
                                      className: "fz-14",
                                      children: ["\xa9 ", n[2].ty],
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
                                    src: n[3].BH,
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
                                      (0, a.jsx)("p", { children: n[3].dt }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "ml-auto",
                                    children: (0, a.jsxs)("p", {
                                      className: "fz-14",
                                      children: ["\xa9 ", n[3].ty],
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
    8997: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return h;
        },
      });
      var a = i(5893),
        n = i(7294),
        t = i(1664),
        l = i.n(t),
        c = i(6036),
        r = JSON.parse(
          '[{"id":1,"number":"01","title":"AI Needs Analysis","text":"We begin by deeply understanding your business needs and identifying where AI can deliver the most value, focusing on Langchain integrations."},{"id":2,"number":"02","title":"AI Agent Design & Prototyping","text":"Our AI engineers design and develop custom AI agents, creating detailed prototypes for optimal automation and integration."},{"id":3,"number":"03","title":"Rigorous AI Testing & Validation","text":"We thoroughly test our AI solutions, ensuring they meet stringent performance and reliability standards before deployment."},{"id":4,"number":"04","title":"Deployment and Optimization","text":"We seamlessly deploy AI agents and Langchain apps, focusing on ongoing optimization for continuous improvement and results."}]'
        ),
        d = function () {
          let [s, e] = (0, n.useState)(!1);
          return (0, a.jsxs)("div", {
            className: "intro-feat section-padding ontop",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "container section-padding pb-0 bord-thin-top bord-dark",
                children: [
                  (0, a.jsxs)("div", {
                    className: "row justify-content-around",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-lg-6",
                        children: (0, a.jsxs)("div", {
                          className: "cont md-mb50",
                          children: [
                            (0, a.jsxs)("h6", {
                              className: "mb-15",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "fz-14",
                                  children: "03 . ",
                                }),
                                "Our AI Implementation Process",
                              ],
                            }),
                            (0, a.jsxs)("h3", {
                              className: "mb-30",
                              children: [
                                "We empower your business to achieve greater results with our",
                                " ",
                                (0, a.jsx)("span", {
                                  className: "sub-font",
                                  children: "AI solutions",
                                }),
                                ".",
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "row justify-content-center",
                              children: (0, a.jsx)("div", {
                                className: "col-md-10",
                                children: (0, a.jsx)("div", {
                                  className: "text",
                                  children: (0, a.jsxs)("p", {
                                    children: [
                                      " ",
                                      "Cleverest utilizes a strategic AI implementation process, from analysis and design to testing and deployment, ensuring your business benefits from the latest Langchain and automation technologies.",
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-5 offset-lg-1 valign",
                        children: (0, a.jsx)("div", {
                          className:
                            "bg-img full-width d-flex align-items-center justify-content-center",
                          "data-background":
                            "/dark/assets/imgs/background/13.jpg",
                          children: (0, a.jsx)("div", {
                            children: (0, a.jsx)("div", {
                              className: "play-button",
                              children: (0, a.jsx)("a", {
                                href: "https://www.youtube.com/embed/g4jWb-0nj44?si=w-_yLl7VqrwMu8c-",
                                className: "btn vid",
                                onClick: function (s) {
                                  s.preventDefault(), e(!0);
                                },
                                children: (0, a.jsxs)("div", {
                                  className: "butn-ply",
                                  children: [
                                    (0, a.jsx)("svg", {
                                      width: "80px",
                                      height: "80px",
                                      viewBox: "0 0 80 80",
                                      preserveAspectRatio: "none",
                                      children: (0, a.jsx)("circle", {
                                        className: "circle",
                                        cx: "40",
                                        cy: "40",
                                        r: "38",
                                        stroke: "#c9f31d",
                                        strokeWidth: "2",
                                        fill: "none",
                                      }),
                                    }),
                                    (0, a.jsx)("i", {
                                      className: "fas fa-play",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "process-crev mt-100",
                    children: (0, a.jsx)("div", {
                      className: "row",
                      children: r.map((s) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: "item col-lg-3 col-md-6",
                            children: [
                              (0, a.jsxs)("h6", {
                                className: "mb-10",
                                children: [s.number, " ."],
                              }),
                              (0, a.jsx)("h5", {
                                className: "fw-600",
                                children: s.title,
                              }),
                              (0, a.jsx)("p", { children: s.text }),
                              (0, a.jsxs)(l(), {
                                href: "/dark/page-services",
                                className: "arrow mt-20",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "fz-12 text-u",
                                    children: "Read More",
                                  }),
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
                                ],
                              }),
                            ],
                          },
                          s.id
                        )
                      ),
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(c.Z, {
                videoId: "AzwC6umvd1s",
                channel: "youtube",
                isOpen: s,
                onClose: () => e(!1),
                autoplay: !0,
              }),
            ],
          });
        },
        o = JSON.parse(
          '[{"id":1,"image":"/assets/imgs/serv-icons/01-dark.svg","title":"Custom AI Agent Development","text":"We design intelligent AI agents tailored to your specific business needs, powered by Langchain."},{"id":2,"image":"/assets/imgs/serv-icons/02-dark.svg","title":"Langchain Integration","text":"Implementing Langchain frameworks for seamless AI application development and enhanced data workflows."},{"id":3,"image":"/assets/imgs/serv-icons/03-dark.svg","title":"Business Process Automation","text":"Automating workflows with AI agents to enhance productivity and streamline your operations."},{"id":4,"image":"/assets/imgs/serv-icons/04-dark.svg","title":"AI-Driven Data Analysis","text":"Transforming data into actionable insights using our advanced AI analytics and Langchain tools."},{"id":5,"image":"/assets/imgs/serv-icons/01-dark.svg","title":"AI Engineering and Consulting","text":"Providing expert guidance and implementation services for integrating AI into your business systems."}]'
        ),
        m = function (s) {
          let { lightMode: e } = s;
          function i() {
            if (
              window.innerWidth < 991 &&
              document.querySelector(".metro .items").style.transform
            )
              location.reload();
            else if (
              window.innerWidth > 991 &&
              !document.querySelector(".metro .items").style.transform
            ) {
              let s = document.querySelector(".metro .items"),
                e = document.querySelector(".metro"),
                i = 0,
                a = !1,
                n,
                t,
                l = (s) => s * (2 - s),
                c = () => {
                  (i = l(0.003 * window.scrollY)),
                    (s.style.transform = "translateX(".concat(i, "%)")),
                    requestAnimationFrame(c);
                };
              requestAnimationFrame(c);
              let r = (s) => {
                  (a = !0), (n = s.pageX), (t = e.scrollLeft);
                },
                d = (s) => {
                  if (!a) return;
                  let i = s.pageX - n;
                  e.scrollLeft = t - i;
                },
                o = (s) => {
                  (a = !1), (n = s.pageX), (t = e.scrollLeft);
                };
              s.addEventListener("mousedown", r),
                s.addEventListener("mousemove", d),
                s.addEventListener("mouseup", o);
            }
          }
          return (
            (0, n.useEffect)(() => {
              if (window.innerWidth > 991) {
                let s = document.querySelector(".metro .items"),
                  e = document.querySelector(".metro"),
                  i = 0,
                  a = !1,
                  n,
                  t,
                  l = (s) => s * (2 - s),
                  c = () => {
                    (i = l(0.003 * window.scrollY)),
                      (s.style.transform = "translateX(".concat(i, "%)")),
                      requestAnimationFrame(c);
                  };
                requestAnimationFrame(c);
                let r = (s) => {
                    (a = !0), (n = s.pageX), (t = e.scrollLeft);
                  },
                  d = (s) => {
                    if (!a) return;
                    let i = s.pageX - n;
                    e.scrollLeft = t - i;
                  },
                  o = (s) => {
                    (a = !1), (n = s.pageX), (t = e.scrollLeft);
                  };
                s.addEventListener("mousedown", r),
                  s.addEventListener("mousemove", d),
                  s.addEventListener("mouseup", o);
              }
              return (
                window.addEventListener("resize", i),
                () => window.removeEventListener("resize", i)
              );
            }, []),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: "container ontop",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-lg-4",
                        children: (0, a.jsxs)("h6", {
                          children: [
                            (0, a.jsx)("span", {
                              className: "fz-14",
                              children: "02 . ",
                            }),
                            " AI Solutions",
                          ],
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "col-lg-6 offset-lg-1",
                        children: [
                          (0, a.jsx)("div", {
                            className: "text",
                            children: (0, a.jsxs)("h3", {
                              children: [
                                "We build ",
                                (0, a.jsx)("span", {
                                  className: "sub-font",
                                  children: "intelligent agents",
                                }),
                                " ",
                                "and transform your business with AI.",
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "row mt-40",
                            children: (0, a.jsx)("div", {
                              className: "col-md-9 offset-md-2",
                              children: (0, a.jsxs)("p", {
                                children: [
                                  " ",
                                  "Cleverest.cl delivers custom AI solutions using Langchain, helping you automate processes and unlock the power of your data. Our AI engineers are ready to propel your business into the future.",
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
                  className: "metro mt-80 ontop",
                  children: (0, a.jsx)("div", {
                    className: "items",
                    children: o.map((s, i) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "item",
                          children: [
                            (0, a.jsx)("span", {
                              className: "icon icon-img-80 ".concat(
                                i !== o.length - 1 ? "mb-40" : ""
                              ),
                              children: (0, a.jsx)("img", {
                                src: "/"
                                  .concat(e ? "light" : "dark", "/")
                                  .concat(s.image),
                                alt: "",
                              }),
                            }),
                            (0, a.jsx)("h5", {
                              className: "mb-20 fw-700",
                              children: (0, a.jsx)(l(), {
                                href: "/dark/page-services",
                                children: s.title,
                              }),
                            }),
                            (0, a.jsx)("p", { children: s.text }),
                          ],
                        },
                        s.id
                      )
                    ),
                  }),
                }),
              ],
            })
          );
        },
        h = function (s) {
          let { lightMode: e } = s;
          return (0, a.jsxs)("section", {
            className:
              "services section-padding pb-0 bg-gray1 position-re o-hidden radius-30",
            children: [
              (0, a.jsx)(m, { lightMode: e }),
              (0, a.jsx)(d, { lightMode: e }),
              (0, a.jsx)("div", {
                className: "bg-pattern bg-img bg-repeat",
                "data-background": "/".concat(
                  e ? "light" : "dark",
                  "/assets/imgs/patterns/bg-pattern.png"
                ),
              }),
            ],
          });
        };
    },
    999: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return d;
        },
      });
      var a = i(5893),
        n = i(7294),
        t = i(719),
        l = i(8116),
        c = JSON.parse(
          '[{"id":1,"picture":"/dark/assets/imgs/testim/1.jpg","name":"Alex Johnson","position":"Client","content":"Cleverest has redefined how we approach AI solutions. Their innovative use of Langchain and AI agents has not only solved our problems but has also opened doors to new possibilities. This isn\'t just about technology; it\'s about transforming our business."},{"id":2,"picture":"/dark/assets/imgs/testim/2.jpg","name":"Jamie Smith","position":"Partner","content":"Collaborating with Cleverest is like partnering with architects of the future. Their expertise in AI agents and automation has clearly shown how AI can be an extension of human intellect, marking the start of a more efficient and innovative era."},{"id":3,"picture":"/dark/assets/imgs/testim/3.jpg","name":"Jordan Lee","position":"Business Owner","content":"Cleverest’s solutions demonstrate how humans and machines can work together to create greater value. Their implementations are not just impressive, they are monumental improvements to our daily workflow and efficiency."},{"id":4,"picture":"/dark/assets/imgs/testim/4.jpg","name":"Taylor Davis","position":"Tech Lead","content":"Cleverest stands out at the convergence of innovative solutions and practical implementation. They aren\'t just keeping up with the AI industry—they\'re defining its direction with their groundbreaking solutions. This company proves that ingenuity can shape business success."}]'
        );
      let r = {
        modules: [l.W_, l.tl],
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
      var d = function (s) {
        let { lightMode: e } = s,
          [i, l] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            l(!0);
          }, []),
          (0, a.jsx)("section", {
            className: "testim-clasic section-padding sub-bg ".concat(
              e ? "light" : ""
            ),
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsx)("div", {
                className: "row",
                children: (0, a.jsx)("div", {
                  className: "col-lg-12",
                  children: (0, a.jsxs)("div", {
                    className: "testim",
                    children: [
                      (0, a.jsx)("div", {
                        className: "testim-swiper",
                        children:
                          i &&
                          (0, a.jsx)(t.tq, {
                            ...r,
                            id: "content-carousel-container-unq-testim",
                            className: "swiper-container",
                            children: c.map((s) =>
                              (0, a.jsx)(
                                t.o5,
                                {
                                  children: (0, a.jsx)("div", {
                                    className: "item",
                                    children: (0, a.jsxs)("div", {
                                      className: "row",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "col-md-4",
                                          children: (0, a.jsx)("div", {
                                            className: "author-info valign",
                                            children: (0, a.jsxs)("div", {
                                              className: "full-width",
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "img circle-120 m-auto mb-30",
                                                  children: (0, a.jsx)("img", {
                                                    src: s.picture,
                                                    alt: "",
                                                    className: "circle-img",
                                                  }),
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className: "info",
                                                  children: [
                                                    (0, a.jsx)("h6", {
                                                      children: s.name,
                                                    }),
                                                    (0, a.jsx)("p", {
                                                      className: "sub-title",
                                                      children: s.position,
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "arrow sub-bg",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "col-md-8",
                                          children: (0, a.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className:
                                                  "mb-30 icon-img-80 opacity-1",
                                                children: (0, a.jsx)("img", {
                                                  src: "/dark/assets/imgs/svg-assets/quote.png",
                                                  alt: "",
                                                }),
                                              }),
                                              (0, a.jsx)("h4", {
                                                className: "fw-300",
                                                children: s.content,
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                },
                                s.id
                              )
                            ),
                          }),
                      }),
                      (0, a.jsx)("div", {
                        className: "swiper-controls",
                        children: (0, a.jsx)("div", {
                          className: "row",
                          children: (0, a.jsx)("div", {
                            className: "col-md-8 offset-md-4",
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
                                    className: "swiper-pagination",
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
  },
]);
