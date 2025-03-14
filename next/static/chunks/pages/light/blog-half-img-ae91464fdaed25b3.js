(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6543],
  {
    4803: function (s, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/blog-half-img",
        function () {
          return i(3282);
        },
      ]);
    },
    6299: function (s, e, i) {
      "use strict";
      var a = i(5893);
      i(7294),
        (e.Z = function (s) {
          let { data: e } = s;
          return (0, a.jsx)("header", {
            className: "page-header section-padding pb-0",
            children: (0, a.jsx)("div", {
              className: "container mt-80",
              children: (0, a.jsx)("div", {
                className: "row",
                children: (0, a.jsx)("div", {
                  className: "col-lg-8",
                  children: (0, a.jsxs)("div", {
                    className: "caption",
                    children: [
                      (0, a.jsx)("h6", {
                        className: "sub-title",
                        children: e.subTitle,
                      }),
                      (0, a.jsx)("h1", {
                        className: "fz-80",
                        children: e.title,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        });
    },
    5423: function (s, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      var a = i(5893);
      i(7294);
      var t = i(1664),
        l = i.n(t),
        c = JSON.parse(
          '[{"id":1,"date":"August 6, 2022","title":"Automated Brand Growth: The Power of AI Agents","image":"/dark/assets/imgs/blog/h1.jpg","tags":["AI Agents","Automation"]},{"id":2,"date":"August 6, 2022","title":"Future of Work: AI-Driven Strategies for Business","image":"/dark/assets/imgs/blog/h2.jpg","tags":["AI Strategy","Future Tech"]},{"id":3,"date":"August 6, 2022","title":"Unlocking Data Potential: AI Analytics for Brand Optimization","image":"/dark/assets/imgs/blog/h3.jpg","tags":["AI Analytics","Data Science"]},{"id":4,"date":"August 6, 2022","title":"The Algorithmic Edge: Transforming Industries with AI","image":"/dark/assets/imgs/blog/h4.jpg","tags":["AI Innovation","Disruption"]},{"id":5,"date":"August 6, 2022","title":"Beyond Traditional Marketing: AI-Powered Communication Strategies","image":"/dark/assets/imgs/blog/h5.jpg","tags":["AI Marketing","Future Media"]},{"id":6,"date":"August 6, 2022","title":"Building the Future: Autonomous AI Agents for Business","image":"/dark/assets/imgs/blog/h6.jpg","tags":["AI Agents","Autonomous Systems"]}]'
        ),
        n = function () {
          return (0, a.jsx)("section", {
            className: "blog-list-half crev section-padding sub-bg",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsx)("div", {
                className: "row",
                children: c.map((s, e) =>
                  (0, a.jsx)(
                    "div",
                    {
                      className: "col-lg-6",
                      children: (0, a.jsx)("div", {
                        className: "item ".concat(
                          e !== c.length - 1 ? "mb-80" : ""
                        ),
                        children: (0, a.jsxs)("div", {
                          className: "row rest",
                          children: [
                            (0, a.jsx)("div", {
                              className: "col-md-6",
                              children: (0, a.jsx)("div", {
                                class: "img",
                                children: (0, a.jsx)("img", {
                                  src: s.image,
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              class: "col-md-6 valign",
                              children: (0, a.jsxs)("div", {
                                class: "cont",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "date fz-12 ls1 text-u opacity-7 mb-15",
                                    children: s.date,
                                  }),
                                  (0, a.jsx)("h5", {
                                    children: (0, a.jsx)(l(), {
                                      href: "/dark/blog-details",
                                      children: s.title,
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    class: "tags colorbg mt-15",
                                    children: s.tags.map((s, e) =>
                                      (0, a.jsx)(
                                        l(),
                                        {
                                          href: "/dark/blog-list",
                                          className: "me-1",
                                          children: s,
                                        },
                                        e
                                      )
                                    ),
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
          });
        };
    },
    4361: function (s, e, i) {
      "use strict";
      var a = i(5893),
        t = i(7294),
        l = i(7513);
      e.Z = function (s) {
        let { lightMode: e, subBg: i } = s;
        return (
          (0, t.useEffect)(() => {
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
    3282: function (s, e, i) {
      "use strict";
      i.r(e);
      var a = i(5893),
        t = i(7294),
        l = i(9008),
        c = i.n(l),
        n = i(7283),
        r = i(7458),
        d = i(7683),
        o = i(6299),
        h = i(5423),
        m = i(4361);
      function g() {
        return (
          (0, t.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(c(), {
                children: (0, a.jsx)("title", {
                  children: "Geekfolio - Image Out Frame",
                }),
              }),
              (0, a.jsx)(r.Z, {}),
              (0, a.jsx)(d.Z, { mainBg: !0, lightMode: !0 }),
              (0, a.jsxs)("main", {
                className: "main-bg",
                children: [
                  (0, a.jsx)(o.Z, {
                    data: { subTitle: "OUR BLOG", title: "Latest News." },
                  }),
                  (0, a.jsx)(h.Z, {}),
                ],
              }),
              (0, a.jsx)(m.Z, { lightMode: !0 }),
            ],
          })
        );
      }
      (g.getLayout = (s) => (0, a.jsx)(n.Z, { lightMode: !0, children: s })),
        (e.default = g);
    },
  },
  function (s) {
    s.O(0, [1664, 1329, 9774, 2888, 179], function () {
      return s((s.s = 4803));
    }),
      (_N_E = s.O());
  },
]);
