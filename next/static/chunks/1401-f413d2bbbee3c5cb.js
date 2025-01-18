"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1401],
  {
    5046: function (e, s, i) {
      var l = i(5893);
      i(7294),
        (s.Z = function (e) {
          let { data: s } = e;
          return (0, l.jsx)("header", {
            className: "work-header section-padding pb-0",
            children: (0, l.jsx)("div", {
              className: "container mt-80",
              children: (0, l.jsx)("div", {
                className: "row",
                children: (0, l.jsx)("div", {
                  className: "col-12",
                  children: (0, l.jsxs)("div", {
                    className: "caption",
                    children: [
                      (0, l.jsx)("h6", {
                        className: "sub-title",
                        children: s.subTitle,
                      }),
                      (0, l.jsx)("h1", { children: s.title }),
                    ],
                  }),
                }),
              }),
            }),
          });
        });
    },
    7342: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return t;
        },
      });
      var l = i(5893);
      i(7294);
      var a = i(1664),
        c = i.n(a),
        r = JSON.parse(
          '[{"id":1,"image":"/dark/assets/imgs/portfolio/2/1.jpg","year":"2023","type":"Branding","style":{"width":5,"isFullWidth":false,"mb":80}},{"id":2,"image":"/dark/assets/imgs/portfolio/2/3.jpg","year":"2023","type":"Branding","style":{"width":6,"align":"valign","isFullWidth":true,"mt":80,"innerCol":"8"}},{"id":3,"image":"/dark/assets/imgs/portfolio/2/2.jpg","year":"2023","type":"Branding","style":{"width":6,"align":"valign","isFullWidth":true,"mt":80,"innerCol":"9"}},{"id":4,"image":"/dark/assets/imgs/portfolio/2/4.jpg","year":"2023","type":"Branding","style":{"width":6,"isFullWidth":false,"mt":80,"innerCol":"9"}},{"id":5,"image":"/dark/assets/imgs/portfolio/2/5.jpg","year":"2023","type":"Branding","style":{"width":6,"isFullWidth":false,"mt":80,"innerCol":"9"}},{"id":6,"image":"/dark/assets/imgs/portfolio/2/6.jpg","year":"2023","type":"Branding","style":{"width":6,"align":"valign","isFullWidth":true,"mt":80,"innerCol":"9"}}]'
        ),
        t = function () {
          return (0, l.jsx)("section", {
            className: "portfolio section-padding",
            children: (0, l.jsx)("div", {
              className: "container",
              children: (0, l.jsx)("div", {
                className: "row justify-content-center",
                children: r.map((e) =>
                  (0, l.jsx)(
                    "div",
                    {
                      className: "col-lg-"
                        .concat(e.style.width, " ")
                        .concat(e.style.align ? e.style.align : ""),
                      children: (0, l.jsx)("div", {
                        className: "item md-mb80 "
                          .concat(e.style.isFullWidth ? "full-width" : "", " ")
                          .concat(e.style.mt ? "mt-" + e.style.mt : "", " ")
                          .concat(e.style.mb ? "mb-" + e.style.mb : ""),
                        children: e.style.innerCol
                          ? (0, l.jsx)("div", {
                              className: "row justify-content-center",
                              children: (0, l.jsxs)("div", {
                                className: "col-lg-".concat(e.style.innerCol),
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "img",
                                    children: (0, l.jsx)("img", {
                                      src: e.image,
                                      alt: "",
                                    }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "cont mt-30 d-flex",
                                    children: [
                                      (0, l.jsxs)("div", {
                                        children: [
                                          (0, l.jsx)("h6", {
                                            className: "line-height-1",
                                            children: (0, l.jsx)(c(), {
                                              href: "/dark/project-details2",
                                              children: "From our gallery",
                                            }),
                                          }),
                                          (0, l.jsx)("p", { children: e.type }),
                                        ],
                                      }),
                                      (0, l.jsx)("div", {
                                        className: "ml-auto",
                                        children: (0, l.jsxs)("p", {
                                          className: "fz-14",
                                          children: ["\xa9 ", e.year],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            })
                          : (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "img",
                                  children: (0, l.jsx)("img", {
                                    src: e.image,
                                    alt: "",
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "cont mt-30 d-flex",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      children: [
                                        (0, l.jsx)("h6", {
                                          className: "line-height-1",
                                          children: (0, l.jsx)(c(), {
                                            href: "/dark/project-details2",
                                            children: "From our gallery",
                                          }),
                                        }),
                                        (0, l.jsx)("p", { children: e.type }),
                                      ],
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "ml-auto",
                                      children: (0, l.jsxs)("p", {
                                        className: "fz-14",
                                        children: ["\xa9 ", e.year],
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
    4361: function (e, s, i) {
      var l = i(5893),
        a = i(7294),
        c = i(7513);
      s.Z = function (e) {
        let { lightMode: s, subBg: i } = e;
        return (
          (0, a.useEffect)(() => {
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
          (0, l.jsx)("footer", {
            className: i ? "sub-bg pt-80" : "",
            children: (0, l.jsxs)("div", {
              className: "footer-container",
              children: [
                (0, l.jsx)("div", {
                  className: "container pb-80 pt-80 ontop",
                  children: (0, l.jsxs)("div", {
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
                                  "Chile — 785 15h Street, Office 478 Santiago de Chile",
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
                                    children: "sergio@cleverest.cl",
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
                            children: (0, l.jsx)("h6", { children: "Social" }),
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
                                  target: "_blank",
                                  href: "https://x.com/cleverest_cl",
                                  children: "Twitter",
                                }),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.linkedin.com/in/cleverest/",
                                  children: "LinkedIn",
                                }),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.instagram.com/cleverest.cl",
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
                              href: "#0",
                              children: (0, l.jsx)("img", {
                                src: "/dark/assets/imgs/logo-".concat(
                                  s ? "dark" : "light",
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
                                  "\xa9 2025 Cleverest.cl is Powered by",
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "underline",
                                    children: (0, l.jsx)("a", {
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