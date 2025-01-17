"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [505],
  {
    2627: function (e, i) {
      let s = () => {
        let e;
        let i = document.querySelectorAll(".gallery"),
          s = document.querySelector(".filtering"),
          t = document.querySelectorAll(".filtering");
        if (
          (i.length >= 1 &&
            i.forEach((i) => {
              e = new Isotope(i, { itemSelector: ".items" });
            }),
          s)
        ) {
          s.addEventListener("click", function (i) {
            if (matchesSelector(i.target, "span")) {
              var s = i.target.getAttribute("data-filter");
              e.arrange({ filter: s });
            }
          });
          let i = (e) => {
            e.addEventListener("click", (i) => {
              matchesSelector(i.target, "span") &&
                (e.querySelector(".active").classList.remove("active"),
                i.target.classList.add("active"));
            });
          };
          for (var a = 0, r = t.length; a < r; a++) i(t[a]);
        }
      };
      i.Z = s;
    },
    5046: function (e, i, s) {
      var t = s(5893);
      s(7294),
        (i.Z = function (e) {
          let { data: i } = e;
          return (0, t.jsx)("header", {
            className: "work-header section-padding pb-0",
            children: (0, t.jsx)("div", {
              className: "container mt-80",
              children: (0, t.jsx)("div", {
                className: "row",
                children: (0, t.jsx)("div", {
                  className: "col-12",
                  children: (0, t.jsxs)("div", {
                    className: "caption",
                    children: [
                      (0, t.jsx)("h6", {
                        className: "sub-title",
                        children: i.subTitle,
                      }),
                      (0, t.jsx)("h1", { children: i.title }),
                    ],
                  }),
                }),
              }),
            }),
          });
        });
    },
    2652: function (e, i, s) {
      s.d(i, {
        Z: function () {
          return d;
        },
      });
      var t = s(5893),
        a = s(7294),
        r = s(1664),
        l = s.n(r),
        c = s(2627),
        n = JSON.parse(
          '{"u":[{"id":1,"title":"All","filter":"*","count":"08"},{"id":2,"title":"Branding","filter":".brand","count":"03"},{"id":3,"title":"Mobile App","filter":".app","count":"02"},{"id":4,"title":"Creative","filter":".web","count":"03"}],"l":[{"id":1,"filter":"web","image":"/dark/assets/imgs/works/grid/1.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"3","height":"1"},{"id":2,"filter":"app","image":"/dark/assets/imgs/works/grid/10.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"3","height":"2"},{"id":3,"filter":"brand","image":"/dark/assets/imgs/works/grid/3.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"6","height":"1"},{"id":4,"filter":"web","image":"/dark/assets/imgs/works/grid/4.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"3","height":"2"},{"id":5,"filter":"brand","image":"/dark/assets/imgs/works/grid/5.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"6","height":"1"},{"id":6,"filter":"app","image":"/dark/assets/imgs/works/grid/6.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"6","height":"2"},{"id":7,"filter":"web","image":"/dark/assets/imgs/works/grid/7.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"3","height":"2"},{"id":8,"filter":"brand","image":"/dark/assets/imgs/works/grid/8.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"3","height":"2"}]}'
        ),
        d = function () {
          return (
            (0, a.useEffect)(() => {
              (0, c.Z)();
            }, []),
            (0, t.jsx)("section", {
              className: "portfolio section-padding pb-100",
              children: (0, t.jsxs)("div", {
                className: "container-xxl",
                children: [
                  (0, t.jsx)("div", {
                    className: "row",
                    children: (0, t.jsx)("div", {
                      className: "filtering col-12 mb-80 text-center",
                      children: (0, t.jsxs)("div", {
                        className: "filter",
                        children: [
                          (0, t.jsx)("span", {
                            className: "text",
                            children: "Filter By :",
                          }),
                          n.u.map((e, i) =>
                            (0, t.jsx)(
                              "span",
                              {
                                "data-filter": e.filter,
                                className: 0 === i ? "active" : "",
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
                  (0, t.jsx)("div", {
                    className: "gallery metro text-center",
                    children: (0, t.jsx)("div", {
                      className: "row",
                      children: n.l.map((e) =>
                        (0, t.jsx)(
                          "div",
                          {
                            className: "col-lg-"
                              .concat(e.width, " col-md-6 items ")
                              .concat(e.filter, " info-overlay height-")
                              .concat(e.height, " mb-30"),
                            children: (0, t.jsxs)("div", {
                              className: "item-img o-hidden",
                              children: [
                                (0, t.jsx)(l(), {
                                  href: "/dark/project-details1",
                                  className: "imago wow",
                                  children: (0, t.jsx)("div", {
                                    className: "inner wow",
                                    children: (0, t.jsx)("img", {
                                      src: e.image,
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  className: "info",
                                  children: [
                                    (0, t.jsx)("h6", {
                                      children: (0, t.jsx)(l(), {
                                        href: "/dark/project-details1",
                                        children: e.title,
                                      }),
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "sub-title tag",
                                      children: (0, t.jsxs)(l(), {
                                        href: "/dark/project-details1",
                                        children: [
                                          "\xa9 ",
                                          e.year,
                                          " ",
                                          (0, t.jsx)("br", {}),
                                          " ",
                                          e.type,
                                        ],
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
    4361: function (e, i, s) {
      var t = s(5893),
        a = s(7294),
        r = s(7513);
      i.Z = function (e) {
        let { lightMode: i, subBg: s } = e;
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
          (0, t.jsx)("footer", {
            className: s ? "sub-bg pt-80" : "",
            children: (0, t.jsxs)("div", {
              className: "footer-container",
              children: [
                (0, t.jsx)("div", {
                  className: "container pb-80 pt-80 ontop",
                  children: (0, t.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, t.jsx)("div", {
                        className: "col-lg-3",
                        children: (0, t.jsxs)("div", {
                          className: "colum md-mb50",
                          children: [
                            (0, t.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, t.jsx)("h6", {
                                children: "Address",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "text",
                              children: (0, t.jsx)("p", {
                                children:
                                  "Chile — 785 15h Street, Office 478 Santiago de Chile",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "col-lg-3 offset-lg-1",
                        children: (0, t.jsxs)("div", {
                          className: "colum md-mb50",
                          children: [
                            (0, t.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, t.jsx)("h6", {
                                children: "Say Hello",
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: "text",
                              children: [
                                (0, t.jsx)("p", {
                                  className: "mb-10",
                                  children: (0, t.jsx)("a", {
                                    href: "mailto:scayuqueo@usm.cl",
                                    children: "sergio@cleverest.cl",
                                  }),
                                }),
                                (0, t.jsx)("h5", {
                                  children: (0, t.jsx)("a", {
                                    href: "callto:+56929202244",
                                    children: "+569 29202244",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "col-lg-2 md-mb50",
                        children: [
                          (0, t.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, t.jsx)("h6", { children: "Social" }),
                          }),
                          (0, t.jsxs)("ul", {
                            className: "rest social-text",
                            children: [
                              (0, t.jsx)("li", {
                                children: (0, t.jsx)("a", {
                                  href: "#0",
                                  children: "Facebook",
                                }),
                              }),
                              (0, t.jsx)("li", {
                                children: (0, t.jsx)("a", {
                                  target: "_blank",
                                  href: "https://x.com/cleverest_cl",
                                  children: "Twitter",
                                }),
                              }),
                              (0, t.jsx)("li", {
                                children: (0, t.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.linkedin.com/in/cleverest/",
                                  children: "LinkedIn",
                                }),
                              }),
                              (0, t.jsx)("li", {
                                children: (0, t.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.instagram.com/cleverest.cl",
                                  children: "Instagram",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "col-lg-3",
                        children: [
                          (0, t.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, t.jsx)("h6", {
                              children: "Newsletter",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "subscribe",
                            children: (0, t.jsx)("form", {
                              action: "contact.php",
                              children: (0, t.jsxs)("div", {
                                className: "form-group rest",
                                children: [
                                  (0, t.jsx)("input", {
                                    type: "email",
                                    placeholder: "Type Your Email",
                                  }),
                                  (0, t.jsx)("button", {
                                    type: "submit",
                                    children: (0, t.jsx)("i", {
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
                (0, t.jsx)("div", {
                  className: "sub-footer pt-40 pb-40 bord-thin-top ontop",
                  children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, t.jsx)("div", {
                          className: "col-lg-4",
                          children: (0, t.jsx)("div", {
                            className: "logo",
                            children: (0, t.jsx)("a", {
                              href: "#0",
                              children: (0, t.jsx)("img", {
                                src: "/dark/assets/imgs/logo-".concat(
                                  i ? "dark" : "light",
                                  ".png"
                                ),
                                alt: "",
                              }),
                            }),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: "col-lg-8",
                          children: (0, t.jsx)("div", {
                            className: "copyright d-flex",
                            children: (0, t.jsx)("div", {
                              className: "ml-auto",
                              children: (0, t.jsxs)("p", {
                                className: "fz-13",
                                children: [
                                  "\xa9 2025 Cleverest.cl is Powered by",
                                  " ",
                                  (0, t.jsx)("span", {
                                    className: "underline",
                                    children: (0, t.jsx)("a", {
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
