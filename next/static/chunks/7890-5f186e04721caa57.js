"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7890],
  {
    2627: function (e, s) {
      let i = () => {
        let e;
        let s = document.querySelectorAll(".gallery"),
          i = document.querySelector(".filtering"),
          a = document.querySelectorAll(".filtering");
        if (
          (s.length >= 1 &&
            s.forEach((s) => {
              e = new Isotope(s, { itemSelector: ".items" });
            }),
          i)
        ) {
          i.addEventListener("click", function (s) {
            if (matchesSelector(s.target, "span")) {
              var i = s.target.getAttribute("data-filter");
              e.arrange({ filter: i });
            }
          });
          let s = (e) => {
            e.addEventListener("click", (s) => {
              matchesSelector(s.target, "span") &&
                (e.querySelector(".active").classList.remove("active"),
                s.target.classList.add("active"));
            });
          };
          for (var l = 0, r = a.length; l < r; l++) s(a[l]);
        }
      };
      s.Z = i;
    },
    5466: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return d;
        },
      });
      var a = i(5893),
        l = i(7294),
        r = i(1664),
        t = i.n(r),
        c = i(2627),
        n = JSON.parse(
          '{"u":[{"id":1,"title":"All","filter":"*","count":"08"},{"id":2,"title":"Branding","filter":".brand","count":"03"},{"id":3,"title":"Mobile App","filter":".app","count":"02"},{"id":4,"title":"Creative","filter":".web","count":"03"}],"l":[{"id":1,"filter":"web","image":"/dark/assets/imgs/works/grid2/1.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":2,"filter":"app","image":"/dark/assets/imgs/works/grid2/2.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":3,"filter":"brand","image":"/dark/assets/imgs/works/grid2/3.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":4,"filter":"web","image":"/dark/assets/imgs/works/grid2/4.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":5,"filter":"brand","image":"/dark/assets/imgs/works/grid2/5.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":6,"filter":"app","image":"/dark/assets/imgs/works/grid2/6.jpg","type":"Design ART","year":"2023","title":"Character Design"}]}'
        ),
        d = function () {
          return (
            (0, l.useEffect)(() => {
              (0, c.Z)();
            }, []),
            (0, a.jsx)("section", {
              className: "portfolio section-padding pb-40",
              children: (0, a.jsxs)("div", {
                className: "container-xxl",
                children: [
                  (0, a.jsx)("div", {
                    className: "row",
                    children: (0, a.jsx)("div", {
                      className: "filtering col-12 mb-80 text-center",
                      children: (0, a.jsxs)("div", {
                        className: "filter",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text",
                            children: "Filter By :",
                          }),
                          n.u.map((e, s) =>
                            (0, a.jsx)(
                              "span",
                              {
                                "data-filter": e.filter,
                                className: 0 === s ? "active" : "",
                                "data-count": e.count,
                                children: e.title,
                              },
                              e.id
                            )
                          ),
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "gallery",
                    children: (0, a.jsx)("div", {
                      className: "row grid max-margin",
                      children: n.l.map((e) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className: "col-md-6 items ".concat(
                              e.filter,
                              " info-overlay mb-80"
                            ),
                            children: (0, a.jsxs)("div", {
                              className: "item-img o-hidden",
                              children: [
                                (0, a.jsx)(t(), {
                                  href: "/dark/project-details1",
                                  className: "imago wow",
                                  children: (0, a.jsx)("div", {
                                    className: "inner wow",
                                    children: (0, a.jsx)("img", {
                                      src: e.image,
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "info",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "mb-15",
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
                                    (0, a.jsx)("h6", {
                                      className: "sub-title tag",
                                      children: (0, a.jsxs)(t(), {
                                        href: "/dark/project-details1",
                                        children: [
                                          "\xa9 ",
                                          e.year,
                                          " ",
                                          (0, a.jsx)("br", {}),
                                          " ",
                                          e.type,
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)("h5", {
                                      children: (0, a.jsx)(t(), {
                                        href: "/dark/project-details1",
                                        children: e.title,
                                      }),
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
                ],
              }),
            })
          );
        };
    },
    5046: function (e, s, i) {
      var a = i(5893);
      i(7294),
        (s.Z = function (e) {
          let { data: s } = e;
          return (0, a.jsx)("header", {
            className: "work-header section-padding pb-0",
            children: (0, a.jsx)("div", {
              className: "container mt-80",
              children: (0, a.jsx)("div", {
                className: "row",
                children: (0, a.jsx)("div", {
                  className: "col-12",
                  children: (0, a.jsxs)("div", {
                    className: "caption",
                    children: [
                      (0, a.jsx)("h6", {
                        className: "sub-title",
                        children: s.subTitle,
                      }),
                      (0, a.jsx)("h1", { children: s.title }),
                    ],
                  }),
                }),
              }),
            }),
          });
        });
    },
    4361: function (e, s, i) {
      var a = i(5893),
        l = i(7294),
        r = i(7513);
      s.Z = function (e) {
        let { lightMode: s, subBg: i } = e;
        return (
          (0, l.useEffect)(() => {
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
  },
]);
