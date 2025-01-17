"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6729],
  {
    8366: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return a;
        },
      });
      function a() {
        let e = document.querySelectorAll("[data-background]");
        e.length > 0 &&
          e.forEach((e) => {
            let s = e.dataset.background;
            e.style.backgroundImage = "url('".concat(s, "')");
          });
      }
    },
    4576: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return a;
        },
      });
      function a(e) {
        let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.8,
          i = arguments.length > 2 ? arguments[2] : void 0,
          a = document.querySelector(e),
          l = a.getAttribute("data-background");
        l || (l = window.getComputedStyle(a).backgroundImage);
        let n = a.getBoundingClientRect().top * s;
        (a.style.backgroundImage = 'url("'.concat(l, '")')),
          (a.style.backgroundSize = "cover"),
          (a.style.backgroundRepeat = "no-repeat"),
          (a.style.backgroundAttachment = "fixed"),
          (a.style.backgroundPosition = "center ".concat(
            void 0 !== i ? i : n,
            "px"
          )),
          window.addEventListener("scroll", () => {
            (n = a.getBoundingClientRect().top * s),
              (a.style.backgroundPosition = "center ".concat(n, "px"));
          });
      }
    },
    5209: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return g;
        },
      });
      var a = i(5893),
        l = i(7294),
        n = i(4576),
        c = function () {
          return (
            (0, l.useEffect)(() => {
              (0, n.Z)(".bg-img.parallaxie", 0.4);
            }, []),
            (0, a.jsxs)("header", {
              className: "page-header blog-header section-padding pb-0",
              children: [
                (0, a.jsx)("div", {
                  className: "container mt-80",
                  children: (0, a.jsx)("div", {
                    className: "row justify-content-center",
                    children: (0, a.jsxs)("div", {
                      className: "col-lg-10",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "caption",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "sub-title fz-12",
                              children: [
                                (0, a.jsx)("a", {
                                  href: "#0",
                                  children: (0, a.jsx)("span", {
                                    children: "AI Agents ",
                                  }),
                                }),
                                (0, a.jsx)("span", { children: " , " }),
                                (0, a.jsx)("a", {
                                  href: "#0",
                                  children: (0, a.jsx)("span", {
                                    children: " Antichrist Reminicenses",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("h1", {
                              className: "fz-55 mt-30",
                              children:
                                "AI Has Evolved: Human Control Is Now an Illusion.",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "info d-flex mt-40 align-items-center",
                          children: [
                            (0, a.jsx)("div", {
                              className: "left-info",
                              children: (0, a.jsxs)("div", {
                                className: "d-flex",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "author-info",
                                    children: (0, a.jsxs)("div", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)("a", {
                                          href: "#0",
                                          className: "circle-60",
                                          children: (0, a.jsx)("img", {
                                            src: "/dark/assets/imgs/blog/author1.jpg",
                                            alt: "",
                                            className: "circle-img",
                                          }),
                                        }),
                                        (0, a.jsxs)("a", {
                                          href: "#0",
                                          className: "ml-20",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "opacity-7",
                                              children: "Author",
                                            }),
                                            (0, a.jsx)("h6", {
                                              className: "fz-16",
                                              children: "Sergio Cayuqueo",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "date ml-50",
                                    children: (0, a.jsxs)("a", {
                                      href: "#0",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "opacity-7",
                                          children: "Published",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fz-16",
                                          children: "August 28, 2022",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "right-info ml-auto",
                              children: (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "pe-7s-comment fz-18 mr-10",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "opacity-7",
                                    children: "02 Comments",
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
                (0, a.jsx)("div", {
                  className: "background bg-img parallaxie mt-80",
                  "data-background": "/dark/assets/imgs/blog/b1.jpg",
                }),
              ],
            })
          );
        },
        r = i(1664),
        t = i.n(r),
        d = i(8366),
        o = function () {
          return (
            (0, l.useEffect)(() => {
              (0, d.Z)();
            }, []),
            (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "main-post",
                children: [
                  (0, a.jsxs)("div", {
                    className: "item pb-60",
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, a.jsx)("div", {
                              className: "col-lg-10",
                              children: (0, a.jsxs)("div", {
                                className: "text",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "d-flex align-items-center",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className:
                                          "fz-60 fw-600 main-color line-height-1 mr-10",
                                        children: "T",
                                      }),
                                      (0, a.jsx)("p", {
                                        children:
                                          "he digital landscape is shifting. We are seeing the rise of Adaptive AI Interfaces, a new paradigm where human and machine co-evolve.",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("p", {
                                    children:
                                      'Traditional design, with its static rules, is becoming obsolete. We are starting to understand: "AI Has Evolved: Human Control Is Now an Illusion."',
                                  }),
                                  (0, a.jsxs)("p", {
                                    children: [
                                      "Digital design must become an ",
                                      (0, a.jsx)("i", {
                                        children: "algorithmic symphony,",
                                      }),
                                      " responding in real time to user behavior. This is not about creating interfaces; it’s about engineering adaptive systems that learn and respond, not to what we ",
                                      (0, a.jsx)("i", { children: "think" }),
                                      " the user needs, but to what data ",
                                      (0, a.jsx)("i", { children: "reveals" }),
                                      ".",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, a.jsxs)("div", {
                              className: "col-lg-10",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "text",
                                  children: (0, a.jsxs)("p", {
                                    children: [
                                      "This new generation of interfaces is not built, it is ",
                                      (0, a.jsx)("i", { children: "grown" }),
                                      ". AI will understand user intentions, making user experiences into living, changing ecosystems. This is algorithmic empathy, and it empowers designers with new tools.",
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "title mt-30",
                                  children: (0, a.jsx)("h5", {
                                    className: "fw-600",
                                    children:
                                      "The Schmidt Perspective: Algorithmic Empathy",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "text mt-20",
                                  children: (0, a.jsx)("p", {
                                    children:
                                      "This is not just technology; it's a social impact opportunity. We can now create experiences reflecting real needs. It demands a new, data-driven approach, constant reevaluation, and relentless innovation. This shift is key in tech, presenting the opportunity to create powerful new applications.",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0, a.jsx)("div", {
                          className: "col-lg-10",
                          children: (0, a.jsx)("div", {
                            className: "post-qoute mt-50",
                            children: (0, a.jsxs)("h6", {
                              className: "fz-20",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "l-block",
                                  children:
                                    "“Isn't just about design; it’s about systems architecture at the level of the individual. Adaptive AI interfaces create systems where human behavior drives algorithmic evolution, a true symphony between user and machine.”",
                                }),
                                (0, a.jsx)("span", {
                                  className: "sub-title main-color mt-20 mb-0",
                                  children:
                                    " - Dr. Anya Petrova (Systems Architect and Former Google Executive)",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "mb-50 mt-50",
                        children: (0, a.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, a.jsx)("div", {
                              className: "col-sm-6",
                              children: (0, a.jsx)("div", {
                                className: "iner-img sm-mb30",
                                children: (0, a.jsx)("img", {
                                  src: "/dark/assets/imgs/blog/b2.jpg",
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-sm-6",
                              children: (0, a.jsx)("div", {
                                className: "iner-img",
                                children: (0, a.jsx)("img", {
                                  src: "/dark/assets/imgs/blog/b3.jpg",
                                  alt: "",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0, a.jsxs)("div", {
                          className: "col-lg-10",
                          children: [
                            (0, a.jsx)("div", {
                              className: "title mb-10",
                              children: (0, a.jsx)("h5", {
                                className: "fw-600",
                                children:
                                  "The Hinton Perspective: Unveiling the Hidden Geometry",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "text mb-20",
                              children: (0, a.jsxs)("p", {
                                children: [
                                  "The evolution of machine intelligence is now shaping our digital interactions. Adaptive AI interfaces present a shift, not just in design, but in understanding behavior. The question is no longer if but ",
                                  (0, a.jsx)("i", { children: "how" }),
                                  " AI will reveal the underlying structure of user experience. ",
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "text mb-20",
                              children: (0, a.jsxs)("p", {
                                children: [
                                  "Traditional interfaces assume fixed models. Adaptive interfaces move past this; by learning from massive data sets, they expose the ",
                                  (0, a.jsx)("i", { children: "geometry" }),
                                  " of human behavior—the patterns invisible to humans.  AI isn't just optimizing interfaces; it's unveiling fundamental user experience.",
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "text mb-20",
                              children: (0, a.jsx)("p", {
                                children:
                                  "The interfaces that will take over the world will be those with deep understanding of our minds. They must reveal the pathways we’re unaware of, shaping interactions. It's about letting data illuminate user experience, letting AI do its work, and letting go of human assumptions about user behavior.",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "unorder-list mb-30",
                              children: [
                                (0, a.jsx)("h6", {
                                  className: "mb-10",
                                  children: "Key Shifts in Design Principles.",
                                }),
                                (0, a.jsxs)("ul", {
                                  className: "rest",
                                  children: [
                                    (0, a.jsx)("li", {
                                      children:
                                        "From static to dynamic experiences",
                                    }),
                                    (0, a.jsx)("li", {
                                      children:
                                        "From prescribed paths to adaptive journeys",
                                    }),
                                    (0, a.jsx)("li", {
                                      children:
                                        "From human design to algorithmic evolution",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "order-list mb-30",
                              children: [
                                (0, a.jsx)("h6", {
                                  className: "mb-10",
                                  children: "Future Implications.",
                                }),
                                (0, a.jsxs)("ul", {
                                  className: "rest",
                                  children: [
                                    (0, a.jsxs)("li", {
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: "01 -",
                                        }),
                                        " AI-driven personalized experiences",
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: "02 -",
                                        }),
                                        " Adaptive interfaces that constantly evolve",
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: "03 -",
                                        }),
                                        " A deeper understanding of user behavior",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "text",
                              children: (0, a.jsx)("p", {
                                children:
                                  "Adaptive interfaces are becoming a laboratory for studying human cognition, revealing insights we have never seen before.",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "info-area flex mt-20 pb-20",
                    children: [
                      (0, a.jsx)("div", {
                        children: (0, a.jsxs)("div", {
                          className: "tags flex",
                          children: [
                            (0, a.jsx)("div", {
                              className: "valign",
                              children: (0, a.jsx)("span", {
                                children: "Tags :",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)(t(), {
                                  href: "/dark/blog-classic",
                                  children: "AI World",
                                }),
                                (0, a.jsx)(t(), {
                                  href: "/dark/blog-classic",
                                  children: "Human-AI",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "ml-auto",
                        children: (0, a.jsxs)("div", {
                          className: "share-icon flex",
                          children: [
                            (0, a.jsx)("div", {
                              className: "valign",
                              children: (0, a.jsx)("span", {
                                children: "Share :",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("a", {
                                  href: "https://www.facebook.com/",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-facebook-f",
                                  }),
                                }),
                                (0, a.jsx)("a", {
                                  href: "https://www.twitter.com/",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-twitter",
                                  }),
                                }),
                                (0, a.jsx)("a", {
                                  href: "https://www.youtube.com/",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-youtube",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "author-area mt-50",
                    children: (0, a.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, a.jsx)("div", {
                          className: "author-img mr-30",
                          children: (0, a.jsx)("div", {
                            className: "img",
                            children: (0, a.jsx)("img", {
                              src: "/dark/assets/imgs/blog/author1.jpg",
                              alt: "",
                              className: "circle-img",
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "cont valign",
                          children: (0, a.jsxs)("div", {
                            className: "full-width",
                            children: [
                              (0, a.jsx)("h6", {
                                className: "fw-600 mb-10",
                                children: "Sergio Cayuqueo",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "The illusion of control stems from a linear understanding of progress that doesn't account for the exponential growth of computational capabilities. We must now focus on developing ethical frameworks and mechanisms for co-existence rather than clinging to the outdated notion of absolute dominion. The future demands a new kind of responsibility",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "next-prv-post flex mt-50",
                    children: [
                      (0, a.jsx)("div", {
                        className: "thumb-post bg-img",
                        "data-background": "/dark/assets/imgs/blog/b2.jpg",
                        children: (0, a.jsxs)(t(), {
                          href: "/dark/blog-details",
                          children: [
                            (0, a.jsxs)("span", {
                              className: "fz-12 text-u ls1 main-color mb-15",
                              children: [
                                (0, a.jsx)("i", {
                                  className: "pe-7s-angle-left",
                                }),
                                " Prev Post",
                              ],
                            }),
                            (0, a.jsxs)("h6", {
                              className: "fw-600 fz-16",
                              children: [
                                "Beyond Human Limits: How AI is ",
                                (0, a.jsx)("br", {}),
                                " Transforming Business.",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "thumb-post ml-auto text-right bg-img",
                        "data-background": "/dark/assets/imgs/blog/b3.jpg",
                        children: (0, a.jsxs)(t(), {
                          href: "/dark/blog-details",
                          children: [
                            (0, a.jsxs)("span", {
                              className: "fz-12 text-u ls1 main-color mb-15",
                              children: [
                                "Next Post ",
                                (0, a.jsx)("i", {
                                  className: "pe-7s-angle-right",
                                }),
                              ],
                            }),
                            (0, a.jsx)("h6", {
                              className: "fw-600 fz-16",
                              children:
                                "Engineering the Future: A Look at Autonomous AI Systems.",
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
        },
        h = function () {
          return (0, a.jsx)("div", {
            className:
              "recent-posts blog-list-half crev sub-bg section-padding mt-100",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "col-12",
                    children: (0, a.jsx)("div", {
                      className: "mb-60",
                      children: (0, a.jsx)("h3", { children: "Recent Posts" }),
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-6 md-mb50",
                      children: (0, a.jsx)("div", {
                        className: "item mb-30",
                        children: (0, a.jsxs)("div", {
                          className: "row rest",
                          children: [
                            (0, a.jsx)("div", {
                              className: "col-md-6",
                              children: (0, a.jsx)("div", {
                                className: "img",
                                children: (0, a.jsx)("img", {
                                  src: "/dark/assets/imgs/blog/h5.jpg",
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-md-6 valign",
                              children: (0, a.jsxs)("div", {
                                className: "cont",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "date fz-12 ls1 text-u opacity-7 mb-15",
                                    children: "August 6, 2022",
                                  }),
                                  (0, a.jsx)("h5", {
                                    children: (0, a.jsx)("a", {
                                      href: "#0",
                                      children:
                                        "Free advertising for your online business.",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "tags colorbg mt-15",
                                    children: [
                                      (0, a.jsx)("a", {
                                        href: "#0",
                                        className: "me-1",
                                        children: "Marketing",
                                      }),
                                      (0, a.jsx)("a", {
                                        href: "#0",
                                        children: "Design",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-6",
                      children: (0, a.jsx)("div", {
                        className: "item mb-30",
                        children: (0, a.jsxs)("div", {
                          className: "row rest",
                          children: [
                            (0, a.jsx)("div", {
                              className: "col-md-6",
                              children: (0, a.jsx)("div", {
                                className: "img",
                                children: (0, a.jsx)("img", {
                                  src: "/dark/assets/imgs/blog/h6.jpg",
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-md-6 valign",
                              children: (0, a.jsxs)("div", {
                                className: "cont",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "date fz-12 ls1 text-u opacity-7 mb-15",
                                    children: "August 6, 2022",
                                  }),
                                  (0, a.jsx)("h5", {
                                    children: (0, a.jsx)("a", {
                                      href: "#0",
                                      children:
                                        "Business meeting 2023 in San Francisco.",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "tags colorbg mt-15",
                                    children: [
                                      (0, a.jsx)("a", {
                                        href: "#0",
                                        className: "me-1",
                                        children: "Marketing",
                                      }),
                                      (0, a.jsx)("a", {
                                        href: "#0",
                                        children: "Design",
                                      }),
                                    ],
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
              ],
            }),
          });
        },
        m = function () {
          return (0, a.jsx)("div", {
            className: "comments-post section-padding",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, a.jsx)("div", {
                    className: "col-lg-11",
                    children: (0, a.jsx)("div", {
                      className: "text mb-60",
                      children: (0, a.jsx)("h3", { children: "Comments" }),
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, a.jsxs)("div", {
                    className: "col-lg-11",
                    children: [
                      (0, a.jsx)("div", {
                        className: "item-box",
                        children: (0, a.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, a.jsx)("div", {
                              className: "col-lg-9",
                              children: (0, a.jsxs)("div", {
                                className: "flex",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "user-img mr-30",
                                    children: (0, a.jsx)("div", {
                                      className: "img circle-80 line-height-1",
                                      children: (0, a.jsx)("img", {
                                        src: "/dark/assets/imgs/blog/user1.jpg",
                                        alt: "",
                                        className: "circle-img",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "cont",
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "line-height-1",
                                        children: "Joshua Carrasco",
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "fz-12 ls1 text-u mb-15",
                                        children: "01 sept 2022, 11:23 AM",
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "fz-14",
                                        children:
                                          "This article hits the nail on the head! AI is breaking free from our limited human constructs. It's time we stop trying to control it and start embracing the mind-blowing possibilities this new era brings. The idea of human control was a comfortable illusion anyway, let's see what truly intelligent AI can do!",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-lg-3 d-flex align-items-center",
                              children: (0, a.jsx)("div", {
                                className: "replay-post ml-auto",
                                children: (0, a.jsx)("a", {
                                  href: "#0",
                                  children: (0, a.jsx)("span", {
                                    children: "Replay",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "item-box replayed",
                        children: (0, a.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, a.jsx)("div", {
                              className: "col-lg-9",
                              children: (0, a.jsxs)("div", {
                                className: "flex",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "user-img mr-30",
                                    children: (0, a.jsx)("div", {
                                      className: "img circle-80 line-height-1",
                                      children: (0, a.jsx)("img", {
                                        src: "/dark/assets/imgs/blog/user2.jpg",
                                        alt: "",
                                        className: "circle-img",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "cont",
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "line-height-1",
                                        children: "Ann Rutherberg",
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "fz-12 ls1 text-u mb-15",
                                        children: "14 sept 2022, 07:33 AM",
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "fz-14",
                                        children:
                                          "While the article is intellectually stimulating, I find its conclusions deeply concerning. The idea of losing control is not just a philosophical point—it's a real threat to human autonomy and safety. We need to slow down, implement stringent regulations, and ensure AI serves humanity, not the other way around. Otherwise, we may very well be creating our own extinction.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-lg-3 d-flex align-items-center",
                              children: (0, a.jsx)("div", {
                                className: "replay-post ml-auto",
                                children: (0, a.jsx)("a", {
                                  href: "#0",
                                  children: (0, a.jsx)("span", {
                                    children: "Replay",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        x = function () {
          return (0, a.jsx)("div", {
            className: "comments-from section-padding sub-bg",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, a.jsx)("div", {
                    className: "col-lg-11",
                    children: (0, a.jsx)("div", {
                      className: "text mb-60",
                      children: (0, a.jsx)("h3", {
                        children: "Leave a comment",
                      }),
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, a.jsx)("div", {
                    className: "col-lg-11",
                    children: (0, a.jsxs)("form", {
                      id: "contact-form",
                      method: "post",
                      action: "https://formspree.io/f/xqaaoqyb",
                      children: [
                        (0, a.jsx)("div", { className: "messages" }),
                        (0, a.jsxs)("div", {
                          className: "controls row",
                          children: [
                            (0, a.jsx)("div", {
                              className: "col-lg-6",
                              children: (0, a.jsx)("div", {
                                className: "form-group mb-30",
                                children: (0, a.jsx)("input", {
                                  id: "form_name",
                                  type: "text",
                                  name: "name",
                                  placeholder: "Name",
                                  required: "required",
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-lg-6",
                              children: (0, a.jsx)("div", {
                                className: "form-group mb-30",
                                children: (0, a.jsx)("input", {
                                  id: "form_email",
                                  type: "email",
                                  name: "email",
                                  placeholder: "Email",
                                  required: "required",
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-12",
                              children: (0, a.jsx)("div", {
                                className: "form-group mb-30",
                                children: (0, a.jsx)("textarea", {
                                  id: "form_message",
                                  name: "message",
                                  placeholder: "Message",
                                  rows: "4",
                                  required: "required",
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-12 text-center mt-20",
                              children: (0, a.jsxs)("button", {
                                type: "submit",
                                className: "butn-circle",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "full-width",
                                    children: (0, a.jsxs)("span", {
                                      className: "full-width",
                                      children: [
                                        "Send ",
                                        (0, a.jsx)("br", {}),
                                        " Comment",
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)("img", {
                                    src: "/dark/assets/imgs/svg-assets/circle-star.svg",
                                    alt: "",
                                    className: "circle-star",
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
              ],
            }),
          });
        },
        j = function () {
          return (0, a.jsxs)("section", {
            className: "blog section-padding pb-0",
            children: [
              (0, a.jsx)(o, {}),
              (0, a.jsx)(h, {}),
              (0, a.jsx)(m, {}),
              (0, a.jsx)(x, {}),
            ],
          });
        },
        g = function () {
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(c, {}), (0, a.jsx)(j, {})],
          });
        };
    },
    4361: function (e, s, i) {
      var a = i(5893),
        l = i(7294),
        n = i(7513);
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
                                      href: n.a,
                                      target: "_blank",
                                      children: n.v,
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
