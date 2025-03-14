(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9770],
  {
    3455: function (e, s, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/blog-classic",
        function () {
          return i(5044);
        },
      ]);
    },
    4698: function (e, s, i) {
      "use strict";
      i.d(s, {
        Z: function () {
          return n;
        },
      });
      var l = i(5893);
      i(7294);
      var a = i(1664),
        t = i.n(a),
        c = JSON.parse(
          '[{"id":1,"date":"11 July 2022","title":"AI Agents: A world of an Artificial Intelligence","image":"/dark/assets/imgs/blog/h1.jpg"},{"id":2,"date":"22 January 2023","title":"Automating the User Experience with Intelligent Interfaces","image":"/dark/assets/imgs/blog/h2.jpg"},{"id":3,"date":"1 April 2024","title":"The Algorithmic Revolution: Data as the New Creative","image":"/dark/assets/imgs/blog/h3.jpg"},{"id":4,"date":"29 August 2024","title":"Beyond Human Limits: How AI is Transforming Business","image":"/dark/assets/imgs/blog/h4.jpg"},{"id":5,"date":"13 December 2024","title":"AI Agents: The End of Common People?","image":"/dark/assets/imgs/blog/h5.jpg"},{"id":6,"date":"16 January 2025","title":"Engineering the Future: A Look at Autonomous AI Systems","image":"/dark/assets/imgs/blog/h6.jpg"}]'
        ),
        n = function () {
          return (0, l.jsx)("section", {
            className: "blog-modern section-padding sub-bg",
            children: (0, l.jsx)("div", {
              className: "container",
              children: (0, l.jsx)("div", {
                className: "row",
                children: c.map((e, s) =>
                  (0, l.jsx)(
                    "div",
                    {
                      className: "col-lg-4 col-md-6",
                      children: (0, l.jsxs)("div", {
                        className: "item ".concat(
                          s !== c.length - 1 ? "mb-50" : ""
                        ),
                        children: [
                          (0, l.jsxs)("div", {
                            className: "img",
                            children: [
                              (0, l.jsx)("img", { src: e.image, alt: "" }),
                              (0, l.jsx)("div", {
                                className: "date",
                                children: (0, l.jsx)(t(), {
                                  href: "/dark/blog-details",
                                  children: e.date,
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "cont mt-30",
                            children: [
                              (0, l.jsx)("h6", {
                                children: (0, l.jsx)(t(), {
                                  href: "/dark/blog-details",
                                  children: e.title,
                                }),
                              }),
                              (0, l.jsxs)(t(), {
                                href: "/dark/blog-details",
                                className: "mt-20 ls1 sub-title",
                                children: [
                                  "Read More ",
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
                        ],
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
    6299: function (e, s, i) {
      "use strict";
      var l = i(5893);
      i(7294),
        (s.Z = function (e) {
          let { data: s } = e;
          return (0, l.jsx)("header", {
            className: "page-header section-padding pb-0",
            children: (0, l.jsx)("div", {
              className: "container mt-80",
              children: (0, l.jsx)("div", {
                className: "row",
                children: (0, l.jsx)("div", {
                  className: "col-lg-8",
                  children: (0, l.jsxs)("div", {
                    className: "caption",
                    children: [
                      (0, l.jsx)("h6", {
                        className: "sub-title",
                        children: s.subTitle,
                      }),
                      (0, l.jsx)("h1", {
                        className: "fz-80",
                        children: s.title,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        });
    },
    4361: function (e, s, i) {
      "use strict";
      var l = i(5893),
        a = i(7294),
        t = i(7513);
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
                                      href: t.a,
                                      target: "_blank",
                                      children: t.v,
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
    5044: function (e, s, i) {
      "use strict";
      i.r(s);
      var l = i(5893),
        a = i(7294),
        t = i(9008),
        c = i.n(t),
        n = i(7283),
        r = i(7458),
        d = i(7683),
        o = i(6299),
        h = i(4698),
        m = i(4361);
      function x() {
        return (
          (0, a.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(c(), {
                children: (0, l.jsx)("title", {
                  children: "Cleverest - Blog Classic",
                }),
              }),
              (0, l.jsx)(r.Z, {}),
              (0, l.jsx)(d.Z, { mainBg: !0 }),
              (0, l.jsxs)("main", {
                className: "main-bg",
                children: [
                  (0, l.jsx)(o.Z, {
                    data: { subTitle: "OUR BLOG", title: "Latest News." },
                  }),
                  (0, l.jsx)(h.Z, {}),
                ],
              }),
              (0, l.jsx)(m.Z, {}),
            ],
          })
        );
      }
      (x.getLayout = (e) => (0, l.jsx)(n.Z, { children: e })), (s.default = x);
    },
  },
  function (e) {
    e.O(0, [1664, 1329, 9774, 2888, 179], function () {
      return e((e.s = 3455));
    }),
      (_N_E = e.O());
  },
]);
