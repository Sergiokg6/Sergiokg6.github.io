"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5513],
  {
    8366: function (s, e, a) {
      a.d(e, {
        Z: function () {
          return i;
        },
      });
      function i() {
        let s = document.querySelectorAll("[data-background]");
        s.length > 0 &&
          s.forEach((s) => {
            let e = s.dataset.background;
            s.style.backgroundImage = "url('".concat(e, "')");
          });
      }
    },
    6660: function (s, e, a) {
      var i = a(5893);
      e.Z = function (s) {
        let { statement: e } = s,
          a = e.split("<BR>");
        return a.map((s, e) =>
          (0, i.jsxs)(
            "span",
            {
              style: { display: "block" },
              children: [s, e !== a.length - 1 ? (0, i.jsx)("br", {}) : null],
            },
            e
          )
        );
      };
    },
    624: function (s, e, a) {
      var i = a(5893);
      a(7294);
      var t = a(1664),
        n = a.n(t);
      e.Z = function (s) {
        let { lightMode: e } = s;
        function a(s) {
          document
            .querySelectorAll(".tab-content")
            .forEach((s) => (s.style.display = "none"));
          let e = s.currentTarget.getAttribute("data-tab");
          document.querySelector(".tab-content#".concat(e)).style.display =
            "block";
        }
        return (0, i.jsx)("section", {
          className: "services-tab section-padding",
          children: (0, i.jsx)("div", {
            className: "container",
            children: (0, i.jsxs)("div", {
              className: "row",
              id: "tabs",
              children: [
                (0, i.jsx)("div", {
                  className: "col-lg-6 order2",
                  children: (0, i.jsxs)("div", {
                    className: "serv-tab-cont mb-80",
                    children: [
                      (0, i.jsx)("div", {
                        className: "tab-content current",
                        id: "tabs-1",
                        children: (0, i.jsxs)("div", {
                          className: "item",
                          children: [
                            (0, i.jsx)("div", {
                              className: "img",
                              children: (0, i.jsx)("img", {
                                src: "/".concat(
                                  e ? "light" : "dark",
                                  "/assets/imgs/sass-img/serv/1.jpg"
                                ),
                                alt: "",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: "cont sub-bg",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "icon-img-60 mb-40",
                                  children: (0, i.jsx)("img", {
                                    src: "/".concat(
                                      e ? "light" : "dark",
                                      "/assets/imgs/serv-icons/0.png"
                                    ),
                                    alt: "",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "text",
                                  children: (0, i.jsx)("p", {
                                    children:
                                      "We engineer autonomous interfaces that are not only functional, but intelligent and data-driven, creating complex AI driven software for a better future.",
                                  }),
                                }),
                                (0, i.jsxs)(n(), {
                                  href: "/dark/page-services",
                                  className: "mt-30",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: "mr-15",
                                      children: "Read More",
                                    }),
                                    (0, i.jsx)("i", {
                                      className: "fas fa-long-arrow-alt-right",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "tab-content",
                        id: "tabs-2",
                        children: (0, i.jsxs)("div", {
                          className: "item",
                          children: [
                            (0, i.jsx)("div", {
                              className: "img",
                              children: (0, i.jsx)("img", {
                                src: "/".concat(
                                  e ? "light" : "dark",
                                  "/assets/imgs/sass-img/serv/2.jpg"
                                ),
                                alt: "",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: "cont sub-bg",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "icon-img-60 mb-40",
                                  children: (0, i.jsx)("img", {
                                    src: "/".concat(
                                      e ? "light" : "dark",
                                      "/assets/imgs/serv-icons/1.png"
                                    ),
                                    alt: "",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "text",
                                  children: (0, i.jsx)("p", {
                                    children:
                                      "We forge algorithmic identities that aren't just visually compelling, but strategically optimized to drive unparalleled results for forward-thinking businesses.",
                                  }),
                                }),
                                (0, i.jsxs)(n(), {
                                  href: "/dark/page-services",
                                  className: "mt-30",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: "mr-15",
                                      children: "Read More",
                                    }),
                                    (0, i.jsx)("i", {
                                      className: "fas fa-long-arrow-alt-right",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "tab-content",
                        id: "tabs-3",
                        children: (0, i.jsxs)("div", {
                          className: "item",
                          children: [
                            (0, i.jsx)("div", {
                              className: "img",
                              children: (0, i.jsx)("img", {
                                src: "/".concat(
                                  e ? "light" : "dark",
                                  "/assets/imgs/sass-img/serv/3.jpg"
                                ),
                                alt: "",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: "cont sub-bg",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "icon-img-60 mb-40",
                                  children: (0, i.jsx)("img", {
                                    src: "/".concat(
                                      e ? "light" : "dark",
                                      "/assets/imgs/serv-icons/2.png"
                                    ),
                                    alt: "",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "text",
                                  children: (0, i.jsx)("p", {
                                    children:
                                      "We build robust, scalable, and AI-powered systems with unparalleled precision that are designed to deliver the best results possible. We engineer the future, one line of code at a time.",
                                  }),
                                }),
                                (0, i.jsxs)(n(), {
                                  href: "/dark/page-services",
                                  className: "mt-30",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: "mr-15",
                                      children: "Read More",
                                    }),
                                    (0, i.jsx)("i", {
                                      className: "fas fa-long-arrow-alt-right",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "tab-content",
                        id: "tabs-4",
                        children: (0, i.jsxs)("div", {
                          className: "item",
                          children: [
                            (0, i.jsx)("div", {
                              className: "img",
                              children: (0, i.jsx)("img", {
                                src: "/".concat(
                                  e ? "light" : "dark",
                                  "/assets/imgs/sass-img/serv/1.jpg"
                                ),
                                alt: "",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: "cont sub-bg",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "icon-img-60 mb-40",
                                  children: (0, i.jsx)("img", {
                                    src: "/".concat(
                                      e ? "light" : "dark",
                                      "/assets/imgs/serv-icons/0.png"
                                    ),
                                    alt: "",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "text",
                                  children: (0, i.jsx)("p", {
                                    children:
                                      "We orchestrate AI-driven communication strategies that do more than generate action, but reach each member of your process with pinpoint accuracy and maximum impact.",
                                  }),
                                }),
                                (0, i.jsxs)(n(), {
                                  href: "/dark/page-services",
                                  className: "mt-30",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: "mr-15",
                                      children: "Read More",
                                    }),
                                    (0, i.jsx)("i", {
                                      className: "fas fa-long-arrow-alt-right",
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
                }),
                (0, i.jsx)("div", {
                  className: "col-lg-5 offset-lg-1 valign order1",
                  children: (0, i.jsxs)("div", {
                    className: "serv-tab-link tab-links full-width md-mb50",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "sec-lg-head mb-80",
                        children: [
                          (0, i.jsx)("h6", {
                            className: "dot-titl-non mb-15",
                            children: "Services",
                          }),
                          (0, i.jsx)("p", {
                            children:
                              "We are Cleverest, and we understand that the emergence of ARTIFICIAL INTELLIGENCE is not just a technological challenge —it is a fundamental shift in the human condition. With this great power comes great possibilities, and we are building the intelligent agents and systems that will not only reshape the world but navigate it with purpose and integrity. ",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("ul", {
                        className: "rest",
                        children: [
                          (0, i.jsxs)("li", {
                            className: "item-link current mb-15",
                            "data-tab": "tabs-1",
                            onClick: a,
                            children: [
                              (0, i.jsx)("span", { children: "01" }),
                              " AI Interface",
                            ],
                          }),
                          (0, i.jsxs)("li", {
                            className: "item-link mb-15",
                            "data-tab": "tabs-2",
                            onClick: a,
                            children: [
                              (0, i.jsx)("span", { children: "02" }),
                              " AI Identity",
                            ],
                          }),
                          (0, i.jsxs)("li", {
                            className: "item-link mb-15",
                            "data-tab": "tabs-3",
                            onClick: a,
                            children: [
                              (0, i.jsx)("span", { children: "03" }),
                              " AI-Powered Systems",
                            ],
                          }),
                          (0, i.jsxs)("li", {
                            className: "item-link",
                            "data-tab": "tabs-4",
                            onClick: a,
                            children: [
                              (0, i.jsx)("span", { children: "04" }),
                              " AI-Driven Orchestration",
                            ],
                          }),
                        ],
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
  },
]);
