(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7758],
  {
    986: function (s, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/blog-list",
        function () {
          return i(6803);
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
    3491: function (s, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var a = i(5893);
      i(7294);
      var t = i(1664),
        l = i.n(t),
        n = JSON.parse(
          '[{"id":1,"date":"August 6, 2022","title":"AI-Powered Brand Growth: Automating Marketing Impact","image":"/dark/assets/imgs/blog/h1.jpg","tags":["AI Marketing","Automation"]},{"id":2,"date":"August 6, 2022","title":"The Algorithmic Future: Business Strategies in the Age of AI","image":"/dark/assets/imgs/blog/h2.jpg","tags":["AI Strategy","Future Tech"]},{"id":3,"date":"August 6, 2022","title":"Unlocking Data Insights: How AI Optimizes Brand Experiences","image":"/dark/assets/imgs/blog/h3.jpg","tags":["AI Analytics","Data Science"]},{"id":4,"date":"August 6, 2022","title":"Beyond Human Creativity: AI as the Next Generation Design Tool","image":"/dark/assets/imgs/blog/h4.jpg","tags":["AI Design","Innovation"]},{"id":5,"date":"August 6, 2022","title":"AI-Driven Communication: Transforming Media and Storytelling","image":"/dark/assets/imgs/blog/h5.jpg","tags":["AI Media","Storytelling"]},{"id":6,"date":"August 6, 2022","title":"The Rise of Autonomous Agents: Reshaping Business Operations","image":"/dark/assets/imgs/blog/h6.jpg","tags":["AI Agents","Autonomous Systems"]}]'
        ),
        c = function () {
          return (0, a.jsx)("section", {
            className: "blog-list-half section-padding sub-bg",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsx)("div", {
                className: "row",
                children: n.map((s, e) =>
                  (0, a.jsx)(
                    "div",
                    {
                      className: "col-lg-6",
                      children: (0, a.jsx)("div", {
                        className: "item ".concat(
                          e !== n.length - 1 ? "mb-50" : ""
                        ),
                        children: (0, a.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, a.jsx)("div", {
                              className: "col-md-6 img",
                              children: (0, a.jsx)("img", {
                                src: s.image,
                                alt: "",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-md-6 main-bg cont valign",
                              children: (0, a.jsxs)("div", {
                                className: "full-width",
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
                                    className: "tags colorbg mt-15",
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
    6803: function (s, e, i) {
      "use strict";
      i.r(e);
      var a = i(5893),
        t = i(7294),
        l = i(9008),
        n = i.n(l),
        c = i(7283),
        r = i(7458),
        d = i(7683),
        o = i(6299),
        h = i(3491),
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
              (0, a.jsx)(n(), {
                children: (0, a.jsx)("title", {
                  children: "Cleverest - Blog List",
                }),
              }),
              (0, a.jsx)(r.Z, {}),
              (0, a.jsx)(d.Z, { mainBg: !0 }),
              (0, a.jsxs)("main", {
                className: "main-bg",
                children: [
                  (0, a.jsx)(o.Z, {
                    data: { subTitle: "OUR BLOG", title: "Latest News." },
                  }),
                  (0, a.jsx)(h.Z, {}),
                ],
              }),
              (0, a.jsx)(m.Z, {}),
            ],
          })
        );
      }
      (g.getLayout = (s) => (0, a.jsx)(c.Z, { children: s })), (e.default = g);
    },
  },
  function (s) {
    s.O(0, [1664, 1329, 9774, 2888, 179], function () {
      return s((s.s = 986));
    }),
      (_N_E = s.O());
  },
]);
