"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6163],
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
    6036: function (s, e, a) {
      var i = a(5893),
        l = a(7294);
      e.Z = function (s) {
        let { videoId: e, channel: a, isOpen: c, onClose: n, autoplay: r } = s,
          t = (0, l.useRef)(null),
          [d, m] = (0, l.useState)("");
        return (
          (0, l.useEffect)(() => {
            "youtube" === a
              ? m("//www.youtube.com/embed/" + e)
              : "vimeo" === a && m("//player.vimeo.com/video/" + e);
          }, [a, e]),
          c
            ? (0, i.jsx)("div", {
                className: "modal-video",
                tabIndex: "-1",
                role: "dialog",
                "aria-label": "video",
                onClick: n,
                children: (0, i.jsx)("div", {
                  className: "modal-video-body",
                  children: (0, i.jsxs)("div", {
                    className: "modal-video-inner",
                    children: [
                      (0, i.jsx)("button", {
                        className: "modal-video-close-btn",
                        "aria-label": "video",
                        ref: t,
                        onClick: n,
                      }),
                      (0, i.jsx)("div", {
                        className: "modal-video-movie-wrap",
                        children: (0, i.jsx)("iframe", {
                          width: "460",
                          height: "230",
                          src: d,
                          allowFullScreen: "allowFullScreen",
                          autoPlay: r || !1,
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
    4316: function (s, e, a) {
      var i = a(5893);
      a(7294);
      var l = a(1664),
        c = a.n(l);
      e.Z = function (s) {
        let { lightMode: e } = s;
        return (0, i.jsx)("section", {
          className: "about-intro section-padding",
          children: (0, i.jsxs)("div", {
            className: "container",
            children: [
              (0, i.jsxs)("div", {
                className: "row mb-80",
                children: [
                  (0, i.jsx)("div", {
                    className: "col-lg-5",
                    children: (0, i.jsxs)("div", {
                      className: "sec-lg-head md-mb30",
                      children: [
                        (0, i.jsx)("h6", {
                          className: "dot-titl-non mb-15 wow fadeIn",
                          children: "OUR BENEFITS",
                        }),
                        (0, i.jsx)("h2", {
                          className: "d-rotate wow",
                          children: (0, i.jsx)("span", {
                            className: "rotate-text",
                            children:
                              "Our Team of Expert AI Engineers and Strategists.",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "col-lg-5 offset-lg-2 valign",
                    children: (0, i.jsxs)("div", {
                      className: "text",
                      children: [
                        (0, i.jsxs)("p", {
                          className: "d-slideup wow",
                          children: [
                            (0, i.jsx)("span", {
                              className: "sideup-text",
                              children: (0, i.jsx)("span", {
                                className: "up-text",
                                children:
                                  "With our extensive experience, we've discovered that while",
                              }),
                            }),
                            (0, i.jsx)("span", {
                              className: "sideup-text",
                              children: (0, i.jsx)("span", {
                                className: "up-text",
                                children:
                                  "each AI solution offers unique capabilities, they achieve their peak",
                              }),
                            }),
                            (0, i.jsx)("span", {
                              className: "sideup-text",
                              children: (0, i.jsx)("span", {
                                className: "up-text",
                                children:
                                  "when strategically integrated with our custom AI agents and tools.",
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "vew-all mt-50 ml-30 wow fadeIn",
                          "data-wow-delay": ".8s",
                          children: (0, i.jsxs)(c(), {
                            href: "/dark/blog-classic",
                            children: [
                              "Explore Our AI Insights",
                              (0, i.jsx)("span", {
                                children: (0, i.jsx)("svg", {
                                  width: "18",
                                  height: "18",
                                  viewBox: "0 0 18 18",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, i.jsx)("path", {
                                    d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                    fill: "currentColor",
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
              (0, i.jsxs)("div", {
                className: "row justify-content-center",
                children: [
                  (0, i.jsx)("div", {
                    className: "col-lg-6 rest",
                    children: (0, i.jsxs)("div", {
                      className: "imgs md-mb50",
                      children: [
                        (0, i.jsx)("div", {
                          className: "img1",
                          children: (0, i.jsx)("div", {
                            className: "o-hidden",
                            children: (0, i.jsx)("div", {
                              className: "imago wow",
                              children: (0, i.jsx)("img", {
                                src: "/".concat(
                                  e ? "light" : "dark",
                                  "/assets/imgs/about/01.jpg"
                                ),
                                alt: "AI agent implementation",
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "img2",
                          children: (0, i.jsx)("div", {
                            className: "o-hidden",
                            children: (0, i.jsx)("div", {
                              className: "imago wow",
                              children: (0, i.jsx)("img", {
                                src: "/".concat(
                                  e ? "light" : "dark",
                                  "/assets/imgs/about/1.jpg"
                                ),
                                alt: "AI engineering team",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "col-lg-5 valign rest",
                    children: (0, i.jsxs)("div", {
                      className: "cont",
                      children: [
                        (0, i.jsx)("h2", {
                          className: "d-rotate wow",
                          children: (0, i.jsx)("span", {
                            className: "rotate-text",
                            children:
                              "Powering Innovation and Growth Through AI.",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "feat mt-80",
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "item-flex d-flex align-items-center mb-50 wow fadeInUp",
                              "data-wow-delay": ".4s",
                              children: [
                                (0, i.jsx)("div", {
                                  children: (0, i.jsx)("div", {
                                    className: "icon-img-50",
                                    children: (0, i.jsx)("img", {
                                      src: "/".concat(
                                        e ? "light" : "dark",
                                        "/assets/imgs/serv-icons/0.png"
                                      ),
                                      alt: "high standards",
                                    }),
                                  }),
                                }),
                                (0, i.jsxs)("div", {
                                  className: "cont ml-30",
                                  children: [
                                    (0, i.jsx)("h6", {
                                      children: "High Quality AI Solutions",
                                    }),
                                    (0, i.jsx)("p", {
                                      className: "fz-15",
                                      children:
                                        "We design and implement AI solutions with the highest quality and ethical standards.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "item-flex d-flex align-items-center wow fadeInUp",
                              "data-wow-delay": ".8s",
                              children: [
                                (0, i.jsx)("div", {
                                  children: (0, i.jsx)("div", {
                                    className: "icon-img-50",
                                    children: (0, i.jsx)("img", {
                                      src: "/".concat(
                                        e ? "light" : "dark",
                                        "/assets/imgs/serv-icons/1.png"
                                      ),
                                      alt: "Easy communication",
                                    }),
                                  }),
                                }),
                                (0, i.jsxs)("div", {
                                  className: "cont ml-30",
                                  children: [
                                    (0, i.jsx)("h6", {
                                      children:
                                        "Clear and Direct Communication",
                                    }),
                                    (0, i.jsx)("p", {
                                      className: "fz-15",
                                      children:
                                        "We keep our communication clear and direct using our AI tools.",
                                    }),
                                  ],
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
            ],
          }),
        });
      };
    },
    7013: function (s, e, a) {
      a.d(e, {
        Z: function () {
          return r;
        },
      });
      var i = a(5893);
      a(7294);
      var l = a(1664),
        c = a.n(l),
        n = JSON.parse(
          '[{"id":1,"title":"Free advertising for your online business.","image":"/dark/assets/imgs/sass-img/blog/1.jpg","date":"August 6, 2022","tags":["Marketing","Design"]},{"id":2,"title":"Business meeting 2023 in San Francisco.","image":"/dark/assets/imgs/sass-img/blog/2.jpg","date":"August 6, 2022","tags":["Marketing","Design"]}]'
        ),
        r = function () {
          return (0, i.jsx)("section", {
            className: "blog-list-half crev section-padding",
            children: (0, i.jsxs)("div", {
              className: "container",
              children: [
                (0, i.jsx)("div", {
                  className: "sec-lg-head mb-80",
                  children: (0, i.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "col-lg-6",
                        children: [
                          (0, i.jsx)("h6", {
                            className: "dot-titl-non mb-15 wow fadeIn",
                            children: "Our Blog",
                          }),
                          (0, i.jsx)("h2", {
                            className: "d-rotate wow",
                            children: (0, i.jsx)("span", {
                              className: "rotate-text",
                              children: "Latest News.",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "col-lg-6 d-flex align-items-center",
                        children: (0, i.jsx)("div", {
                          className:
                            "full-width d-flex justify-content-end justify-end",
                          children: (0, i.jsx)("div", {
                            className: "vew-all",
                            children: (0, i.jsxs)(c(), {
                              href: "/dark/blog-list",
                              children: [
                                "View All Our News",
                                (0, i.jsx)("span", {
                                  children: (0, i.jsx)("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 18 18",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, i.jsx)("path", {
                                      d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                      fill: "currentColor",
                                    }),
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
                (0, i.jsx)("div", {
                  className: "row wow fadeIn",
                  "data-wow-delay": ".4s",
                  children: n.map((s) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: "col-lg-6",
                        children: (0, i.jsx)("div", {
                          className: "item md-mb80",
                          children: (0, i.jsxs)("div", {
                            className: "row rest",
                            children: [
                              (0, i.jsx)("div", {
                                className: "col-md-6",
                                children: (0, i.jsx)("div", {
                                  className: "img",
                                  children: (0, i.jsx)("img", {
                                    src: s.image,
                                    alt: "",
                                  }),
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "col-md-6 valign",
                                children: (0, i.jsxs)("div", {
                                  className: "cont",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "date fz-12 ls1 text-u opacity-7 mb-15",
                                      children: s.date,
                                    }),
                                    (0, i.jsx)("h5", {
                                      children: (0, i.jsx)(c(), {
                                        href: "/dark/blog-details",
                                        children: s.title,
                                      }),
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "tags colorbg mt-15",
                                      children: s.tags.map((s, e) =>
                                        (0, i.jsx)(
                                          c(),
                                          {
                                            href: "/dark/blog-half-img",
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
              ],
            }),
          });
        };
    },
    8465: function (s, e, a) {
      a.d(e, {
        Z: function () {
          return t;
        },
      });
      var i = a(5893),
        l = a(7294),
        c = a(719),
        n = JSON.parse(
          '["assets/imgs/brands/01.png","assets/imgs/brands/02.png","assets/imgs/brands/03.png","assets/imgs/brands/04.png","assets/imgs/brands/05.png"]'
        );
      let r = {
        slidesPerView: 5,
        loop: !0,
        spaceBetween: 40,
        breakpoints: {
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        },
      };
      var t = function (s) {
        let { lightMode: e } = s,
          [a, t] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            t(!0);
          }, []),
          (0, i.jsx)("div", {
            className: "clients-carso2",
            children: (0, i.jsx)("div", {
              className: "container",
              children: (0, i.jsx)("div", {
                className: "row justify-content-center",
                children: (0, i.jsx)("div", {
                  className: "col-lg-11",
                  children: (0, i.jsx)("div", {
                    className: "swiper5",
                    children:
                      a &&
                      (0, i.jsx)(c.tq, {
                        ...r,
                        id: "content-carousel-container-unq-clients",
                        className: "swiper-container",
                        children: n.map((s, a) =>
                          (0, i.jsx)(
                            c.o5,
                            {
                              children: (0, i.jsx)("div", {
                                className: "item",
                                children: (0, i.jsx)("div", {
                                  className: "img icon-img-100",
                                  children: (0, i.jsx)("a", {
                                    href: "#0",
                                    children: (0, i.jsx)("img", {
                                      src: "/"
                                        .concat(e ? "light" : "dark", "/")
                                        .concat(s),
                                      alt: "",
                                    }),
                                  }),
                                }),
                              }),
                            },
                            a
                          )
                        ),
                      }),
                  }),
                }),
              }),
            }),
          })
        );
      };
    },
    2289: function (s, e, a) {
      var i = a(5893);
      a(7294);
      var l = a(7513);
      e.Z = function (s) {
        let { lightMode: e } = s;
        return (0, i.jsx)("footer", {
          className: "sub-bg",
          children: (0, i.jsxs)("div", {
            className: "footer-container",
            children: [
              (0, i.jsxs)("div", {
                className: "container pb-80 pt-80 ontop",
                children: [
                  (0, i.jsx)("div", {
                    className: "call-box text-center mb-80",
                    children: (0, i.jsxs)("h2", {
                      children: [
                        (0, i.jsxs)("a", {
                          href: "page-contact.html",
                          children: [
                            "Let's ",
                            (0, i.jsx)("span", {
                              className: "stroke",
                              children: " Discuss",
                            }),
                          ],
                        }),
                        (0, i.jsx)("span", {
                          className: "arrow",
                          children: (0, i.jsx)("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                              fill: "currentColor",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-lg-3",
                        children: (0, i.jsxs)("div", {
                          className: "colum md-mb50",
                          children: [
                            (0, i.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, i.jsx)("h6", {
                                children: "Address",
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "text",
                              children: (0, i.jsx)("p", {
                                children:
                                  "Germany — 785 15h Street, Office 478 Berlin, De 81566",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-lg-3 offset-lg-1",
                        children: (0, i.jsxs)("div", {
                          className: "colum md-mb50",
                          children: [
                            (0, i.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, i.jsx)("h6", {
                                children: "Say Hello",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: "text",
                              children: [
                                (0, i.jsx)("p", {
                                  className: "mb-10",
                                  children: (0, i.jsx)("a", {
                                    href: "#0",
                                    children: "hello@design.com",
                                  }),
                                }),
                                (0, i.jsx)("h5", {
                                  children: (0, i.jsx)("a", {
                                    href: "#",
                                    children: "+1 840 841 25 69",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "col-lg-2 md-mb50",
                        children: [
                          (0, i.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, i.jsx)("h6", { children: "Social" }),
                          }),
                          (0, i.jsxs)("ul", {
                            className: "rest social-text",
                            children: [
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  href: "#0",
                                  children: "Facebook",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  href: "#0",
                                  children: "Twitter",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  href: "#0",
                                  children: "LinkedIn",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  href: "#0",
                                  children: "Instagram",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "col-lg-3",
                        children: [
                          (0, i.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, i.jsx)("h6", {
                              children: "Newsletter",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "subscribe",
                            children: (0, i.jsx)("form", {
                              action: "contact.php",
                              children: (0, i.jsxs)("div", {
                                className: "form-group rest",
                                children: [
                                  (0, i.jsx)("input", {
                                    type: "email",
                                    placeholder: "Type Your Email",
                                  }),
                                  (0, i.jsx)("button", {
                                    type: "submit",
                                    children: (0, i.jsx)("i", {
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
                ],
              }),
              (0, i.jsx)("div", {
                className: "sub-footer pt-40 pb-40 bord-thin-top ontop",
                children: (0, i.jsx)("div", {
                  className: "container",
                  children: (0, i.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-lg-4",
                        children: (0, i.jsx)("div", {
                          className: "logo",
                          children: (0, i.jsx)("a", {
                            href: "#",
                            children: (0, i.jsx)("img", {
                              src: "/dark/assets/imgs/logo-".concat(
                                e ? "dark" : "light",
                                ".png"
                              ),
                              alt: "",
                            }),
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, i.jsx)("div", {
                          className: "copyright d-flex",
                          children: (0, i.jsx)("div", {
                            className: "ml-auto",
                            children: (0, i.jsxs)("p", {
                              className: "fz-13",
                              children: [
                                "\xa9 2023 Geekfolio is Proudly Powered by ",
                                (0, i.jsxs)("span", {
                                  className: "underline",
                                  children: [
                                    " ",
                                    (0, i.jsx)("a", {
                                      href: l.a,
                                      target: "_blank",
                                      children: l.v,
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
                }),
              }),
            ],
          }),
        });
      };
    },
    8280: function (s, e, a) {
      var i = a(5893),
        l = a(7294),
        c = a(1664),
        n = a.n(c),
        r = a(6036),
        t = a(8366);
      e.Z = function (s) {
        let { lightMode: e } = s,
          [a, c] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            (0, t.Z)();
          }, []),
          (0, i.jsxs)("header", {
            className: "crev-header",
            children: [
              (0, i.jsx)("div", {
                className: "container mt-80",
                children: (0, i.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, i.jsx)("div", {
                      className: "col-lg-9",
                      children: (0, i.jsxs)("div", {
                        className: "caption",
                        children: [
                          (0, i.jsxs)("h1", {
                            children: [
                              "High End ",
                              (0, i.jsx)("br", {}),
                              " ",
                              (0, i.jsx)("span", {
                                className: "stroke",
                                children: "AI",
                              }),
                              " Agents",
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "row mt-30",
                            children: (0, i.jsxs)("div", {
                              className: "col-lg-5 offset-lg-1",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "text",
                                  children: (0, i.jsx)("p", {
                                    children:
                                      "Through our years of experience, we've also learned that while each channel has its own set of advantages.",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "crv-butn-vid mt-30",
                                  children: (0, i.jsxs)("a", {
                                    href: "https://youtu.be/AzwC6umvd1s",
                                    className: "vid",
                                    onClick: function (s) {
                                      s.preventDefault(), c(!0);
                                    },
                                    children: [
                                      (0, i.jsx)("span", {
                                        className: "text sub-title",
                                        children: "Watch",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "icon main-colorbg4",
                                        children: (0, i.jsx)("svg", {
                                          className: "default",
                                          width: "13",
                                          height: "20",
                                          viewBox: "0 0 13 20",
                                          fill: "currentColor",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, i.jsx)("path", {
                                            d: "M0 20L13 10L0 0V20Z",
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
                    }),
                    (0, i.jsx)("div", {
                      className: "col-lg-3",
                      children: (0, i.jsx)("div", {
                        className: "md-hide",
                        children: (0, i.jsx)(n(), {
                          href: "/dark/page-about",
                          className: "hover-this",
                          children: (0, i.jsxs)("div", {
                            className: "circle-button in-bord hover-anim",
                            children: [
                              (0, i.jsx)("div", {
                                className: "rotate-circle fz-30 text-u",
                                children: (0, i.jsxs)("svg", {
                                  className: "textcircle",
                                  viewBox: "0 0 500 500",
                                  children: [
                                    (0, i.jsx)("defs", {
                                      children: (0, i.jsx)("path", {
                                        id: "textcircle",
                                        d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z",
                                      }),
                                    }),
                                    (0, i.jsx)("text", {
                                      children: (0, i.jsx)("textPath", {
                                        xlinkHref: "#textcircle",
                                        textLength: "900",
                                        children:
                                          "Explore More - Explore More -",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "arrow",
                                children: (0, i.jsx)("svg", {
                                  width: "18",
                                  height: "18",
                                  viewBox: "0 0 18 18",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, i.jsx)("path", {
                                    d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                    fill: "currentColor",
                                  }),
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
              (0, i.jsx)("div", {
                className: "main-img",
                children: (0, i.jsx)("img", {
                  src: "/dark/assets/imgs/background/14.jpg",
                  alt: "",
                }),
              }),
              (0, i.jsx)("div", {
                className: "bg-pattern bg-img",
                "data-background": "/".concat(
                  e ? "light" : "dark",
                  "/assets/imgs/patterns/graph.png"
                ),
              }),
              (0, i.jsx)(r.Z, {
                videoId: "AzwC6umvd1s",
                channel: "youtube",
                isOpen: a,
                onClose: () => c(!1),
                autoplay: !0,
              }),
            ],
          })
        );
      };
    },
    5104: function (s, e, a) {
      var i = a(5893);
      a(7294),
        (e.Z = function () {
          return (0, i.jsx)("section", {
            className: "marquee",
            children: (0, i.jsx)("div", {
              className: "container-fluid rest",
              children: (0, i.jsx)("div", {
                className: "row",
                children: (0, i.jsx)("div", {
                  className: "col-12",
                  children: (0, i.jsx)("div", {
                    className: "main-marq",
                    children: (0, i.jsxs)("div", {
                      className: "slide-har st1",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "box non-strok",
                          children: [
                            (0, i.jsx)("div", {
                              className: "item",
                              children: (0, i.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("span", {
                                    children: "AI Agents Experience",
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "item",
                              children: (0, i.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("span", {
                                    children: "AI Development",
                                  }),
                                  " ",
                                  (0, i.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "item",
                              children: (0, i.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("span", {
                                    children: "Automation Process",
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "item",
                              children: (0, i.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("span", {
                                    children: "New Design",
                                  }),
                                  " ",
                                  (0, i.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "item",
                              children: (0, i.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("span", {
                                    children: "Solutions in the AI World",
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "box non-strok",
                          children: [
                            (0, i.jsx)("div", {
                              className: "item",
                              children: (0, i.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("span", {
                                    children: "AI Experience",
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "item",
                              children: (0, i.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("span", {
                                    children: "AI Development",
                                  }),
                                  " ",
                                  (0, i.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "item",
                              children: (0, i.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("span", {
                                    children: "Automation Process",
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "item",
                              children: (0, i.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("span", { children: "AI Design" }),
                                  " ",
                                  (0, i.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "item",
                              children: (0, i.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("span", {
                                    children: "Solutions in the AI World",
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
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
              }),
            }),
          });
        });
    },
    4556: function (s, e, a) {
      a.d(e, {
        Z: function () {
          return r;
        },
      });
      var i = a(5893);
      a(7294);
      var l = a(1664),
        c = a.n(l),
        n = JSON.parse(
          '[{"id":1,"image":"assets/imgs/serv-icons/0.png","type":"Product Design","title":"Digital Product Design","text":"Creating a higher spacing and how people move through a unique."},{"id":2,"image":"assets/imgs/serv-icons/1.png","type":"Customs Services","title":"Branding & Design","text":"Creating a higher spacing and how people move through a unique."},{"id":3,"image":"assets/imgs/serv-icons/2.png","type":"Product Development","title":"Web Development","text":"Creating a higher spacing and how people move through a unique."}]'
        ),
        r = function (s) {
          let { lightMode: e } = s;
          return (0, i.jsx)("section", {
            className: "serv-box section-padding pb-0",
            children: (0, i.jsxs)("div", {
              className: "container",
              children: [
                (0, i.jsx)("div", {
                  className: "sec-lg-head mb-80",
                  children: (0, i.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, i.jsxs)("div", {
                          className: "position-re",
                          children: [
                            (0, i.jsx)("h6", {
                              className: "dot-titl-non mb-15 wow fadeIn",
                              children: "Featured Services",
                            }),
                            (0, i.jsx)("h2", {
                              className: "d-rotate wow",
                              children: (0, i.jsx)("span", {
                                className: "rotate-text",
                                children: "Our Services",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-lg-4 d-flex align-items-center",
                        children: (0, i.jsx)("div", {
                          className: "text wow fadeIn",
                          children: (0, i.jsx)("p", {
                            children:
                              "Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "row",
                  children: n.map((s) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: "col-lg-4",
                        children: (0, i.jsxs)("div", {
                          className:
                            "serv-item lg-pad md-mb50 radius-5 wow fadeIn",
                          "data-wow-delay": ".5s",
                          children: [
                            (0, i.jsx)("div", {
                              className: "icon-img-50 mb-40",
                              children: (0, i.jsx)("img", {
                                src: "/"
                                  .concat(e ? "light" : "dark", "/")
                                  .concat(s.image),
                                alt: "",
                              }),
                            }),
                            (0, i.jsx)("span", {
                              className: "mb-10 opacity-7",
                              children: s.type,
                            }),
                            (0, i.jsx)("h6", {
                              className: "mb-15",
                              children: s.title,
                            }),
                            (0, i.jsx)("p", {
                              className: "fz-14",
                              children: s.text,
                            }),
                            (0, i.jsx)("div", {
                              className: "crv-more",
                              children: (0, i.jsxs)(c(), {
                                href: "/dark/page-services",
                                className: "mt-30 ls1 fz-12 text-u",
                                children: [
                                  "Read More",
                                  (0, i.jsx)("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 18 18",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, i.jsx)("path", {
                                      d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                      fill: "currentColor",
                                    }),
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
              ],
            }),
          });
        };
    },
    1093: function (s, e, a) {
      var i = a(5893),
        l = a(7294),
        c = a(1664),
        n = a.n(c),
        r = a(8366);
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
        return (
          (0, l.useEffect)(() => {
            (0, r.Z)();
          }, []),
          (0, i.jsx)("section", {
            className: "services-tab revers section-padding pt-0",
            children: (0, i.jsxs)("div", {
              className: "container",
              children: [
                (0, i.jsx)("div", {
                  className: "row mb-80",
                  children: (0, i.jsx)("div", {
                    className: "col-lg-12",
                    children: (0, i.jsx)("div", {
                      className: "full-width",
                      children: (0, i.jsx)("div", {
                        className:
                          "main-marq o-hidden pt-40 pb-40 bord-thin-top bord-thin-bottom",
                        children: (0, i.jsxs)("div", {
                          className: "slide-har st1",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "box",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "item",
                                  children: (0, i.jsxs)("h4", {
                                    className:
                                      "d-flex align-items-center fz-70",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Amazing Design",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "fz-50 ml-50 stroke icon",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "item",
                                  children: (0, i.jsxs)("h4", {
                                    className:
                                      "d-flex align-items-center fz-70",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Amazing Design",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "fz-50 ml-50 stroke icon",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "item",
                                  children: (0, i.jsxs)("h4", {
                                    className:
                                      "d-flex align-items-center fz-70",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Amazing Design",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "fz-50 ml-50 stroke icon",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "item",
                                  children: (0, i.jsxs)("h4", {
                                    className:
                                      "d-flex align-items-center fz-70",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Amazing Design",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "fz-50 ml-50 stroke icon",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "item",
                                  children: (0, i.jsxs)("h4", {
                                    className:
                                      "d-flex align-items-center fz-70",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Amazing Design",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "fz-50 ml-50 stroke icon",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "box",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "item",
                                  children: (0, i.jsxs)("h4", {
                                    className:
                                      "d-flex align-items-center fz-70",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Amazing Design",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "fz-50 ml-50 stroke icon",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "item",
                                  children: (0, i.jsxs)("h4", {
                                    className:
                                      "d-flex align-items-center fz-70",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Amazing Design",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "fz-50 ml-50 stroke icon",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "item",
                                  children: (0, i.jsxs)("h4", {
                                    className:
                                      "d-flex align-items-center fz-70",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Amazing Design",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "fz-50 ml-50 stroke icon",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "item",
                                  children: (0, i.jsxs)("h4", {
                                    className:
                                      "d-flex align-items-center fz-70",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Amazing Design",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "fz-50 ml-50 stroke icon",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "item",
                                  children: (0, i.jsxs)("h4", {
                                    className:
                                      "d-flex align-items-center fz-70",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Amazing Design",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "fz-50 ml-50 stroke icon",
                                        children: "*",
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
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "row justify-content-center",
                  id: "tabs",
                  children: [
                    (0, i.jsx)("div", {
                      className: "col-lg-5 valign",
                      children: (0, i.jsxs)("div", {
                        className: "serv-tab-link tab-links full-width md-mb50",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "sec-lg-head mb-80 wow fadeIn",
                            children: [
                              (0, i.jsx)("h6", {
                                className: "dot-titl-non mb-15",
                                children: "Services",
                              }),
                              (0, i.jsx)("p", {
                                children:
                                  "We help you to go online and increase your conversion rate Better design for your digital products. ",
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "row",
                            children: (0, i.jsx)("div", {
                              className: "col-lg-10",
                              children: (0, i.jsxs)("ul", {
                                className: "rest",
                                children: [
                                  (0, i.jsxs)("li", {
                                    className:
                                      "item-link current mb-15 pb-15 bord-thin-bottom",
                                    "data-tab": "tabs-1",
                                    onClick: a,
                                    children: [
                                      (0, i.jsx)("span", { children: "01" }),
                                      " UI/UX Design",
                                    ],
                                  }),
                                  (0, i.jsxs)("li", {
                                    className:
                                      "item-link mb-15 pb-15 bord-thin-bottom",
                                    "data-tab": "tabs-2",
                                    onClick: a,
                                    children: [
                                      (0, i.jsx)("span", { children: "02" }),
                                      " Branding",
                                    ],
                                  }),
                                  (0, i.jsxs)("li", {
                                    className:
                                      "item-link mb-15 pb-15 bord-thin-bottom",
                                    "data-tab": "tabs-3",
                                    onClick: a,
                                    children: [
                                      (0, i.jsx)("span", { children: "03" }),
                                      " Development",
                                    ],
                                  }),
                                  (0, i.jsxs)("li", {
                                    className: "item-link",
                                    "data-tab": "tabs-4",
                                    onClick: a,
                                    children: [
                                      (0, i.jsx)("span", { children: "04" }),
                                      " Marketing",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "col-lg-6",
                      children: (0, i.jsxs)("div", {
                        className: "serv-tab-cont",
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
                                      "/assets/imgs/sass-img/serv/4.jpg"
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
                                          "We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.",
                                      }),
                                    }),
                                    (0, i.jsxs)(n(), {
                                      href: "/".concat(
                                        e ? "light" : "dark",
                                        "/page-services"
                                      ),
                                      className: "mt-30",
                                      children: [
                                        (0, i.jsx)("span", {
                                          className: "mr-15",
                                          children: "Read More",
                                        }),
                                        (0, i.jsx)("i", {
                                          className:
                                            "fas fa-long-arrow-alt-right",
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "bg-pattern bg-img",
                                      "data-background": "/".concat(
                                        e ? "light" : "dark",
                                        "/assets/imgs/patterns/abstact-BG.png"
                                      ),
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
                                          "We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.",
                                      }),
                                    }),
                                    (0, i.jsxs)(n(), {
                                      href: "/".concat(
                                        e ? "light" : "dark",
                                        "/page-services"
                                      ),
                                      className: "mt-30",
                                      children: [
                                        (0, i.jsx)("span", {
                                          className: "mr-15",
                                          children: "Read More",
                                        }),
                                        (0, i.jsx)("i", {
                                          className:
                                            "fas fa-long-arrow-alt-right",
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
                                          "We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.",
                                      }),
                                    }),
                                    (0, i.jsxs)(n(), {
                                      href: "/".concat(
                                        e ? "light" : "dark",
                                        "/page-services"
                                      ),
                                      className: "mt-30",
                                      children: [
                                        (0, i.jsx)("span", {
                                          className: "mr-15",
                                          children: "Read More",
                                        }),
                                        (0, i.jsx)("i", {
                                          className:
                                            "fas fa-long-arrow-alt-right",
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
                                          "We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.",
                                      }),
                                    }),
                                    (0, i.jsxs)(n(), {
                                      href: "/".concat(
                                        e ? "light" : "dark",
                                        "/page-services"
                                      ),
                                      className: "mt-30",
                                      children: [
                                        (0, i.jsx)("span", {
                                          className: "mr-15",
                                          children: "Read More",
                                        }),
                                        (0, i.jsx)("i", {
                                          className:
                                            "fas fa-long-arrow-alt-right",
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
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    7394: function (s, e, a) {
      a.d(e, {
        Z: function () {
          return d;
        },
      });
      var i = a(5893),
        l = a(7294),
        c = a(719),
        n = a(8116),
        r = function () {
          return (0, i.jsx)("div", {
            className: "numbers mt-80 pt-80 bord-thin-top wow fadeIn",
            "data-wow-delay": ".4s",
            children: (0, i.jsxs)("div", {
              className: "row",
              children: [
                (0, i.jsx)("div", {
                  className: "col-lg-3 col-md-6",
                  children: (0, i.jsxs)("div", {
                    className: "item md-mb50",
                    children: [
                      (0, i.jsx)("h2", {
                        className: "fw-800 stroke",
                        children: "16",
                      }),
                      (0, i.jsx)("h6", { children: "Years of Experience" }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "col-lg-3 col-md-6 d-flex justify-content-around",
                  children: (0, i.jsxs)("div", {
                    className: "item md-mb50",
                    children: [
                      (0, i.jsxs)("h2", {
                        className: "fw-800",
                        children: [
                          "4",
                          (0, i.jsx)("span", {
                            className: "fz-80 fw-600",
                            children: "k",
                          }),
                        ],
                      }),
                      (0, i.jsx)("h6", { children: "Projects Complated" }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "col-lg-3 col-md-6 d-flex justify-content-around",
                  children: (0, i.jsxs)("div", {
                    className: "item sm-mb50",
                    children: [
                      (0, i.jsxs)("h2", {
                        className: "fw-800 stroke",
                        children: [
                          "9",
                          (0, i.jsx)("span", {
                            className: "fz-80 fw-600",
                            children: "k",
                          }),
                        ],
                      }),
                      (0, i.jsx)("h6", { children: "Happy Customers" }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "col-lg-3 col-md-6 d-flex",
                  children: (0, i.jsxs)("div", {
                    className: "item ml-auto",
                    children: [
                      (0, i.jsx)("h2", { className: "fw-800", children: "12" }),
                      (0, i.jsx)("h6", { children: "Awards Winning" }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      let t = {
        modules: [n.W_, n.tl],
        slidesPerView: 1,
        loop: !0,
        spaceBetween: 30,
        pagination: { el: ".swiper-pagination", clickable: !0 },
        navigation: {
          nextEl: ".testim-controls .swiper-button-next",
          prevEl: ".testim-controls .swiper-button-prev",
        },
      };
      var d = function (s) {
        let { lightMode: e } = s,
          [a, n] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            n(!0);
          }, []),
          (0, i.jsx)("section", {
            className: "testim-crv2 section-padding sub-bg ".concat(
              e ? "light" : ""
            ),
            children: (0, i.jsxs)("div", {
              className: "container",
              children: [
                (0, i.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, i.jsx)("div", {
                      className: "col-12",
                      children: (0, i.jsx)("div", {
                        className: "sec-lg-head mb-80",
                        children: (0, i.jsxs)("div", {
                          className: "position-re text-center",
                          children: [
                            (0, i.jsx)("h6", {
                              className: "dot-titl-non mb-15 wow fadeIn",
                              children: "Testimonials",
                            }),
                            (0, i.jsx)("h2", {
                              className: "d-rotate wow",
                              children: (0, i.jsx)("span", {
                                className: "rotate-text",
                                children: "What People Says?",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "col-lg-5 position-re wow fadeInUp",
                      "data-wow-delay": ".4s",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "bord-qoute d-flex align-items-center justify-content-center",
                          children: (0, i.jsx)("div", {
                            className: "qoute-icon main-bg",
                            children: (0, i.jsx)("img", {
                              src: "/".concat(
                                e ? "light" : "dark",
                                "/assets/imgs/svg-assets/quote.png"
                              ),
                              alt: "",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "img-qoute",
                          children: (0, i.jsx)("img", {
                            src: "/".concat(
                              e ? "light" : "dark",
                              "/assets/imgs/about/sq1.jpg"
                            ),
                            alt: "",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "col-lg-7 wow fadeInUp",
                      "data-wow-delay": ".4s",
                      children: [
                        (0, i.jsx)("div", {
                          className: "testim-swiper",
                          children:
                            a &&
                            (0, i.jsxs)(c.tq, {
                              ...t,
                              id: "content-carousel-container-unq-testim",
                              className: "swiper-container",
                              children: [
                                (0, i.jsx)(c.o5, {
                                  children: (0, i.jsxs)("div", {
                                    className: "item",
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className: "cont mb-40",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className: "rate-stars mb-20 fz-16",
                                            children: (0, i.jsxs)("span", {
                                              className: "rate main-color4",
                                              children: [
                                                (0, i.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, i.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, i.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, i.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, i.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, i.jsx)("h5", {
                                            className: "fw-400",
                                            children:
                                              "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className: "d-flex align-items-center",
                                        children: [
                                          (0, i.jsx)("div", {
                                            children: (0, i.jsx)("div", {
                                              className: "img circle-60",
                                              children: (0, i.jsx)("img", {
                                                src: "/".concat(
                                                  e ? "light" : "dark",
                                                  "/assets/imgs/testim/1.jpg"
                                                ),
                                                alt: "",
                                                className: "circle-img",
                                              }),
                                            }),
                                          }),
                                          (0, i.jsx)("div", {
                                            className: "ml-30",
                                            children: (0, i.jsxs)("div", {
                                              className: "info",
                                              children: [
                                                (0, i.jsx)("h6", {
                                                  className: "fz-16",
                                                  children: "Leonard Heiser",
                                                }),
                                                (0, i.jsx)("span", {
                                                  className:
                                                    "opacity-7 sub-title",
                                                  children: "Ceo",
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)(c.o5, {
                                  children: (0, i.jsxs)("div", {
                                    className: "item",
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className: "cont mb-40",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className: "rate-stars mb-20 fz-16",
                                            children: (0, i.jsxs)("span", {
                                              className: "rate main-color4",
                                              children: [
                                                (0, i.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, i.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, i.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, i.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, i.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, i.jsx)("h5", {
                                            className: "fw-400",
                                            children:
                                              "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className: "d-flex align-items-center",
                                        children: [
                                          (0, i.jsx)("div", {
                                            children: (0, i.jsx)("div", {
                                              className: "img circle-60",
                                              children: (0, i.jsx)("img", {
                                                src: "/".concat(
                                                  e ? "light" : "dark",
                                                  "/assets/imgs/testim/2.jpg"
                                                ),
                                                alt: "",
                                                className: "circle-img",
                                              }),
                                            }),
                                          }),
                                          (0, i.jsx)("div", {
                                            className: "ml-30",
                                            children: (0, i.jsxs)("div", {
                                              className: "info",
                                              children: [
                                                (0, i.jsx)("h6", {
                                                  className: "fz-16",
                                                  children: "Leonard Heiser",
                                                }),
                                                (0, i.jsx)("span", {
                                                  className:
                                                    "opacity-7 sub-title",
                                                  children: "Ceo",
                                                }),
                                              ],
                                            }),
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
                          className: "d-flex",
                          children: (0, i.jsxs)("div", {
                            className:
                              "swiper-controls testim-controls arrow-out d-flex ml-auto",
                            children: [
                              (0, i.jsx)("div", {
                                className: "swiper-button-prev",
                                children: (0, i.jsx)("span", {
                                  className: "left",
                                  children: (0, i.jsx)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, i.jsx)("path", {
                                      d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                      fill: "currentColor",
                                    }),
                                  }),
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "swiper-button-next ml-50",
                                children: (0, i.jsx)("span", {
                                  className: "right",
                                  children: (0, i.jsx)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, i.jsx)("path", {
                                      d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                      fill: "currentColor",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(r, {}),
              ],
            }),
          })
        );
      };
    },
    4886: function (s, e, a) {
      a.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = a(5893);
      a(7294);
      var l = JSON.parse(
          '[{"id":1,"image":"/dark/assets/imgs/portfolio/4/01.jpg","tag":"Web Design","title":"Color Integration","date":2023},{"id":2,"image":"/dark/assets/imgs/portfolio/4/02.jpg","tag":"Mobile Software","title":"Color Integration","date":2023},{"id":3,"image":"/dark/assets/imgs/portfolio/4/03.jpg","tag":"Web Design","title":"New Gadgets","date":2023},{"id":4,"image":"/dark/assets/imgs/portfolio/4/04.jpg","tag":"Web Design","title":"Digital Platform","date":2023},{"id":5,"image":"/dark/assets/imgs/portfolio/4/05.jpg","tag":"Web Design","title":"Branding Process","date":2023},{"id":6,"image":"/dark/assets/imgs/portfolio/4/06.jpg","tag":"Web Design","title":"Branding Process","date":2023}]'
        ),
        c = function () {
          return (0, i.jsx)("section", {
            className: "works thecontainer",
            children: l.map((s) =>
              (0, i.jsx)(
                "div",
                {
                  className: "panel mt-30",
                  children: (0, i.jsxs)("div", {
                    className: "item",
                    children: [
                      (0, i.jsx)("div", {
                        className: "img",
                        children: (0, i.jsx)("img", { src: s.image, alt: "" }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "cont d-flex align-items-end",
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("span", { children: s.tag }),
                              (0, i.jsx)("h5", { children: s.title }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "ml-auto",
                            children: (0, i.jsx)("h6", { children: s.date }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("a", {
                        href: "#0",
                        className: "link-overlay",
                      }),
                    ],
                  }),
                },
                s.id
              )
            ),
          });
        };
    },
  },
]);
