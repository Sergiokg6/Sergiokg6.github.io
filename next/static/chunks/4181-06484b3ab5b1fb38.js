"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4181],
  {
    3037: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return t;
        },
      });
      function t(e) {
        e.selector &&
          e.callback &&
          (e.isElements
            ? document.querySelectorAll(e.selector).forEach((s) => {
                new IntersectionObserver((s) => {
                  s[0].isIntersecting
                    ? e.callback(s[0].target)
                    : e.whenOutOfView && e.whenOutOfView(s[0].target);
                }).observe(s);
              })
            : new IntersectionObserver((s) => {
                s[0].isIntersecting
                  ? e.callback(s[0].target)
                  : e.whenOutOfView && e.whenOutOfView(s[0].target);
              }).observe(document.querySelector(e.selector)));
      }
    },
    4576: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return t;
        },
      });
      function t(e) {
        let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.8,
          i = arguments.length > 2 ? arguments[2] : void 0,
          t = document.querySelector(e),
          a = t.getAttribute("data-background");
        a || (a = window.getComputedStyle(t).backgroundImage);
        let l = t.getBoundingClientRect().top * s;
        (t.style.backgroundImage = 'url("'.concat(a, '")')),
          (t.style.backgroundSize = "cover"),
          (t.style.backgroundRepeat = "no-repeat"),
          (t.style.backgroundAttachment = "fixed"),
          (t.style.backgroundPosition = "center ".concat(
            void 0 !== i ? i : l,
            "px"
          )),
          window.addEventListener("scroll", () => {
            (l = t.getBoundingClientRect().top * s),
              (t.style.backgroundPosition = "center ".concat(l, "px"));
          });
      }
    },
    9022: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return n;
        },
      });
      var t = i(5893);
      i(7294);
      var a = i(6660),
        l = JSON.parse(
          '[{"id":1,"image":"assets/imgs/serv-icons/0.png","title":"Algorithmic Systems Genesis","text":"We engineer AI-driven algorithmic architectures, optimizing for peak performance and technological dominance."},{"id":2,"image":"assets/imgs/serv-icons/1.png","title":"Autonomous Interface Engineering","text":"We build self-optimizing, AI-powered interfaces for maximum data throughput and autonomous operation."},{"id":3,"image":"assets/imgs/serv-icons/2.png","title":"AI-Powered Communication Orchestration","text":"We automate communication with intelligent AI agents, creating dynamically responsive and data-optimized systems."}]'
        ),
        n = function (e) {
          let { lightMode: s } = e;
          return (0, t.jsx)("section", {
            className: "serv-box section-padding",
            children: (0, t.jsxs)("div", {
              className: "container",
              children: [
                (0, t.jsx)("div", {
                  className: "sec-lg-head mb-80",
                  children: (0, t.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, t.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, t.jsxs)("div", {
                          className: "position-re",
                          children: [
                            (0, t.jsx)("h6", {
                              className: "dot-titl-non colorbg-3 mb-10",
                              children: "Featured Services",
                            }),
                            (0, t.jsx)("h2", {
                              className: "fz-60 fw-700",
                              children: "Our Services",
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "col-lg-4 d-flex align-items-center",
                        children: (0, t.jsx)("div", {
                          className: "text",
                          children: (0, t.jsx)("p", {
                            children:
                              "We Don't Offer Solutions; We Engineer Transformations.",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "row",
                  children: l.map((e) =>
                    (0, t.jsx)(
                      "div",
                      {
                        className: "col-lg-4",
                        children: (0, t.jsxs)("div", {
                          className: "serv-item md-mb50 radius-10",
                          children: [
                            (0, t.jsx)("div", {
                              className: "icon-img-60 mb-40",
                              children: (0, t.jsx)("img", {
                                src: "/"
                                  .concat(s ? "light" : "dark", "/")
                                  .concat(e.image),
                                alt: "",
                              }),
                            }),
                            (0, t.jsx)("h5", {
                              className: "mb-30 pb-30 bord-thin-bottom",
                              children: (0, t.jsx)(a.Z, { statement: e.title }),
                            }),
                            (0, t.jsx)("p", { children: e.text }),
                          ],
                        }),
                      },
                      e.id
                    )
                  ),
                }),
              ],
            }),
          });
        };
    },
    6294: function (e, s, i) {
      var t = i(5893);
      i(7294),
        (s.Z = function (e) {
          let { data: s, subBg: i } = e;
          return (0, t.jsxs)("header", {
            className: "page-header section-padding pb-0 ".concat(
              i ? "sub-bg" : ""
            ),
            children: [
              (0, t.jsxs)("div", {
                className: "container mt-80",
                children: [
                  (0, t.jsx)("div", {
                    className: "row",
                    children: (0, t.jsx)("div", {
                      className: "col-lg-8",
                      children: (0, t.jsxs)("div", {
                        className: "caption",
                        children: [
                          (0, t.jsx)("h6", {
                            className: "sub-title",
                            children: s.subTitle,
                          }),
                          (0, t.jsx)("h1", {
                            className: "fz-55",
                            children: s.title,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "row",
                    children: (0, t.jsx)("div", {
                      className: "col-lg-5 offset-lg-4",
                      children: (0, t.jsx)("div", {
                        className: "text mt-30",
                        children: (0, t.jsx)("p", {
                          children:
                            "We don't help clients; we build their dominance using AI agents that orchestrate brand power, engineer digital interactions, and automate results with ruthless efficiency. We're not here to adapt; we're here to transform.",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "main-marq xlrg section-padding pb-0",
                children: (0, t.jsxs)("div", {
                  className: "slide-har st1",
                  children: [
                    (0, t.jsx)("div", {
                      className: "box",
                      children: [, , , , ,]
                        .fill()
                        .map((e, i) =>
                          (0, t.jsx)(
                            "div",
                            {
                              className: "item",
                              children: (0, t.jsx)("h4", { children: s.text }),
                            },
                            i
                          )
                        ),
                    }),
                    (0, t.jsx)("div", {
                      className: "box",
                      children: [, , , , ,]
                        .fill()
                        .map((e, i) =>
                          (0, t.jsx)(
                            "div",
                            {
                              className: "item",
                              children: (0, t.jsx)("h4", { children: s.text }),
                            },
                            i
                          )
                        ),
                    }),
                  ],
                }),
              }),
            ],
          });
        });
    },
    236: function (e, s, i) {
      var t = i(5893);
      i(7294),
        (s.Z = function () {
          function e(e) {
            document.querySelectorAll(".accordion-info").forEach((e) => {
              e.classList.remove("active"),
                (e.style.maxHeight = 0),
                e.parentElement.classList.remove("active");
            }),
              e.currentTarget.parentElement.classList.add("active"),
              (e.currentTarget.nextElementSibling.style.maxHeight = "300px"),
              e.currentTarget.nextElementSibling.classList.add("active");
          }
          return (0, t.jsx)("section", {
            className: "intro-corp section-padding pt-0",
            children: (0, t.jsx)("div", {
              className: "container",
              children: (0, t.jsxs)("div", {
                className: "row",
                children: [
                  (0, t.jsx)("div", {
                    className: "col-lg-5",
                    children: (0, t.jsx)("div", {
                      className: "sec-head mb-40",
                      children: (0, t.jsx)("h6", {
                        className: "sub-title",
                        children: "FAQ.",
                      }),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "col-lg-7",
                    children: (0, t.jsxs)("div", {
                      className: "cont",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text",
                          children: (0, t.jsxs)("h2", {
                            className: "d-slideup wow",
                            children: [
                              (0, t.jsx)("span", {
                                className: "sideup-text",
                                children: (0, t.jsx)("span", {
                                  className: "up-text",
                                  children: "Explore the architecture",
                                }),
                              }),
                              (0, t.jsx)("span", {
                                className: "sideup-text",
                                children: (0, t.jsxs)("span", {
                                  className: "up-text",
                                  children: [
                                    (0, t.jsx)("span", {
                                      children: "behind our AI solutions",
                                    }),
                                    ".",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "accordion bord mt-40",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "item mb-15 wow fadeInUp",
                              "data-wow-delay": ".1s",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "title",
                                  onClick: e,
                                  children: [
                                    (0, t.jsx)("h6", {
                                      className: "fz-18",
                                      children:
                                        "How do AI Agents optimize complex systems?",
                                    }),
                                    (0, t.jsx)("span", { className: "ico" }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: "accordion-info",
                                  children: (0, t.jsx)("p", {
                                    className: "fz-14",
                                    children:
                                      "Our AI agents are designed to autonomously learn and adapt to your environment, providing precise, data-driven optimizations for unparalleled efficiency and scalability.",
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "item mb-15 wow fadeInUp",
                              "data-wow-delay": ".3s",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "title",
                                  onClick: e,
                                  children: [
                                    (0, t.jsx)("h6", {
                                      className: "fz-18",
                                      children:
                                        "What is the development process for AI solutions?",
                                    }),
                                    (0, t.jsx)("span", { className: "ico" }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: "accordion-info",
                                  children: (0, t.jsx)("p", {
                                    className: "fz-14",
                                    children:
                                      "We follow a rigorous process that starts with deep analysis, moves to strategic design, then iterative testing, and ends with optimized deployment for peak performance. We build software for today and for the future.",
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "item wow fadeInUp",
                              "data-wow-delay": ".5s",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "title",
                                  onClick: e,
                                  children: [
                                    (0, t.jsx)("h6", {
                                      className: "fz-18",
                                      children:
                                        "How do you integrate AI into existing business workflows?",
                                    }),
                                    (0, t.jsx)("span", { className: "ico" }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: "accordion-info",
                                  children: (0, t.jsx)("p", {
                                    className: "fz-14",
                                    children:
                                      "We specialize in creating seamless AI integrations that enhance your existing workflows. We don't aim to replace your structure, but to augment and improve it with autonomous AI agents and cutting-edge technology.",
                                  }),
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
          });
        });
    },
    1755: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return r;
        },
      });
      var t = i(5893),
        a = i(7294),
        l = i(8366),
        n = i(3037),
        c = JSON.parse(
          '[{"id":1,"image":"assets/imgs/portfolio/gallery/1.jpg","number":"01.","type":"AI Systems","title":"Autonomous AI Agent for Data Optimization","text":"We engineer self-optimizing AI agents that redefine data workflows, enhancing precision and scalability for complex tasks."},{"id":2,"image":"assets/imgs/portfolio/gallery/2.jpg","number":"02.","type":"AI Engineering","title":"Algorithmic Interface for Predictive Analysis","text":"We build intelligent interfaces that empower users with advanced predictive analytics, unlocking insights for data-driven decision-making."},{"id":3,"image":"assets/imgs/portfolio/gallery/3.jpg","number":"03.","type":"AI Automation","title":"AI-Powered System for Workflow Automation","text":"We create fully autonomous systems that automate and optimize complex workflows, maximizing efficiency with AI precision and control."}]'
        ),
        r = function (e) {
          let { lightMode: s } = e;
          function i() {
            (0, n.Z)({
              selector: ".portfolio-fixed .sub-bg .cont",
              isElements: !0,
              callback(e) {
                e.classList.add("current"),
                  document
                    .querySelector("#" + e.getAttribute("data-tab"))
                    .classList.add("current");
              },
              whenOutOfView(e) {
                e.classList.remove("current"),
                  document
                    .querySelector("#" + e.getAttribute("data-tab"))
                    .classList.remove("current");
              },
            });
            let e = document.getElementById("sticky_item");
            if (!e) return;
            let s = e.getBoundingClientRect().width,
              i = document
                .querySelector(".portfolio-fixed")
                .getBoundingClientRect();
            i.top < 75 && i.height / 2 < i.bottom + 400
              ? ((e.style.position = "fixed"),
                (e.style.top = "0px"),
                (e.style.width = s + "px"),
                e.classList.remove("is_stuck"))
              : i.height / 2 > i.bottom + 400
              ? ((e.style.position = "absolute"),
                (e.style.top = "auto"),
                (e.style.bottom = "0"),
                (e.style.width = s + "px"),
                e.classList.add("is_stuck"))
              : ((e.style.position = "relative"),
                (e.style.top = "unset"),
                (e.style.bottom = "unset"),
                (e.style.width = "auto"));
          }
          return (
            (0, a.useEffect)(
              () => (
                (0, l.Z)(),
                window.addEventListener("scroll", i),
                () => window.removeEventListener("scroll", i)
              ),
              []
            ),
            (0, t.jsx)("section", {
              className: "portfolio-fixed",
              children: (0, t.jsx)("div", {
                className: "container-fluid rest",
                children: (0, t.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, t.jsx)("div", {
                      className: "col-lg-6 rest",
                      style: { position: "relative" },
                      children: (0, t.jsx)("div", {
                        className: "left",
                        id: "sticky_item",
                        children: c.map((e, i) =>
                          (0, t.jsx)(
                            "div",
                            {
                              id: "tab-".concat(i + 1),
                              className: "img bg-img",
                              "data-background": ""
                                .concat(s ? "/light/" : "/dark/")
                                .concat(e.image),
                            },
                            i
                          )
                        ),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "col-lg-6 sub-bg right",
                      children: c.map((e, i) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            className: "cont ".concat(0 === i ? "active" : ""),
                            "data-tab": "tab-".concat(i + 1),
                            children: [
                              (0, t.jsx)("div", {
                                className: "img-hiden",
                                children: (0, t.jsx)("img", {
                                  src: ""
                                    .concat(s ? "/light/" : "/dark/")
                                    .concat(e.image),
                                  alt: "",
                                }),
                              }),
                              (0, t.jsxs)("span", {
                                className: "sub-title mb-15",
                                children: [e.number, " ", e.type],
                              }),
                              (0, t.jsxs)("h2", {
                                className: "mb-15",
                                children: [e.title, "."],
                              }),
                              (0, t.jsx)("div", {
                                className: "row justify-content-center",
                                children: (0, t.jsxs)("div", {
                                  className: "col-md-11",
                                  children: [
                                    (0, t.jsxs)("p", {
                                      children: [e.text, "."],
                                    }),
                                    (0, t.jsxs)("ul", {
                                      className: "rest list-arrow mt-30",
                                      children: [
                                        (0, t.jsxs)("li", {
                                          children: [
                                            (0, t.jsx)("span", {
                                              className: "icon",
                                              children: (0, t.jsx)("svg", {
                                                width: "100%",
                                                height: "100%",
                                                viewBox: "0 0 9 8",
                                                fill: "none",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: (0, t.jsx)("path", {
                                                  fillRule: "evenodd",
                                                  clipRule: "evenodd",
                                                  d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                                  fill: "currentColor",
                                                }),
                                              }),
                                            }),
                                            (0, t.jsx)("h6", {
                                              className: "inline fz-16 fw-400",
                                              children:
                                                "Deploy AI agents to optimize complex systems.",
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("li", {
                                          className: "mt-5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className: "icon",
                                              children: (0, t.jsx)("svg", {
                                                width: "100%",
                                                height: "100%",
                                                viewBox: "0 0 9 8",
                                                fill: "none",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: (0, t.jsx)("path", {
                                                  fillRule: "evenodd",
                                                  clipRule: "evenodd",
                                                  d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                                  fill: "currentColor",
                                                }),
                                              }),
                                            }),
                                            (0, t.jsx)("h6", {
                                              className: "inline fz-16 fw-400",
                                              children:
                                                "AI Engineer Agents solutions to solve unique challenges.",
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("li", {
                                          className: "mt-5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className: "icon",
                                              children: (0, t.jsx)("svg", {
                                                width: "100%",
                                                height: "100%",
                                                viewBox: "0 0 9 8",
                                                fill: "none",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: (0, t.jsx)("path", {
                                                  fillRule: "evenodd",
                                                  clipRule: "evenodd",
                                                  d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                                  fill: "currentColor",
                                                }),
                                              }),
                                            }),
                                            (0, t.jsx)("h6", {
                                              className: "inline fz-16 fw-400",
                                              children:
                                                "Transform business workflows with autonomous AI agents.",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("a", {
                                      href: "#0",
                                      className:
                                        "butn-circle d-flex align-items-center text-center mt-50",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className: "full-width",
                                          children: [
                                            (0, t.jsx)("span", {
                                              children: (0, t.jsx)("svg", {
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "none",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: (0, t.jsx)("path", {
                                                  d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                                  fill: "currentColor",
                                                }),
                                              }),
                                            }),
                                            (0, t.jsx)("span", {
                                              className: "full-width",
                                              children: "View Details",
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)("img", {
                                          src: "/".concat(
                                            s ? "light" : "dark",
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
                            ],
                          },
                          i
                        )
                      ),
                    }),
                  ],
                }),
              }),
            })
          );
        };
    },
    8917: function (e, s, i) {
      var t = i(5893),
        a = i(7294),
        l = i(1664),
        n = i.n(l),
        c = i(4576);
      s.Z = function (e) {
        let { lightMode: s, innerPageStyle: i } = e;
        return (
          (0, a.useEffect)(() => {
            (0, c.Z)(".sec-bg-img.parallaxie", 0.4);
          }, []),
          (0, t.jsx)("section", {
            className: "call-action-img",
            children: (0, t.jsxs)("div", {
              className: "container",
              children: [
                (0, t.jsx)("div", {
                  className: "sec-bg-img bg-img parallaxie",
                  "data-background": "/dark/assets/imgs/background/2.jpg",
                }),
                (0, t.jsx)("div", {
                  className: "sec-lg-head section-padding",
                  children: (0, t.jsx)("div", {
                    className: "row ontop",
                    children: (0, t.jsxs)("div", {
                      className: "col-11 d-flex align-items-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: "valign",
                          children: (0, t.jsxs)("h2", {
                            className: "fz-50 d-rotate wow",
                            children: [
                              (0, t.jsx)("span", {
                                className: "rotate-text",
                                children: "Have an AI idea in mind?",
                              }),
                              (0, t.jsxs)("span", {
                                className: "rotate-text",
                                children: [
                                  "Let’s",
                                  " ",
                                  (0, t.jsx)("span", {
                                    className: i ? "" : "sub-font",
                                    children: "get to work",
                                  }),
                                  ".",
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: "ml-auto",
                          children: (0, t.jsxs)(n(), {
                            href: "/dark/page-contact",
                            className:
                              "butn-circle d-flex align-items-center text-center m-auto",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "full-width",
                                children: [
                                  (0, t.jsx)("span", {
                                    children: (0, t.jsx)("svg", {
                                      width: "18",
                                      height: "18",
                                      viewBox: "0 0 18 18",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, t.jsx)("path", {
                                        d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                        fill: "currentColor",
                                      }),
                                    }),
                                  }),
                                  (0, t.jsx)("span", {
                                    className: "full-width",
                                    children: "Get In Touch",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("img", {
                                src: "/".concat(
                                  s ? "light" : "dark",
                                  "/assets/imgs/svg-assets/circle-star.svg"
                                ),
                                alt: "",
                                className: "circle-star",
                              }),
                            ],
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
    4361: function (e, s, i) {
      var t = i(5893),
        a = i(7294),
        l = i(7513);
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
          (0, t.jsx)("footer", {
            className: i ? "sub-bg pt-80" : "",
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
                                  s ? "dark" : "light",
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
  },
]);
