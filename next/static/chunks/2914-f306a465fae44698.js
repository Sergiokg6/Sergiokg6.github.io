"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2914],
  {
    3037: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return a;
        },
      });
      function a(e) {
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
        let t = a.getBoundingClientRect().top * s;
        (a.style.backgroundImage = 'url("'.concat(l, '")')),
          (a.style.backgroundSize = "cover"),
          (a.style.backgroundRepeat = "no-repeat"),
          (a.style.backgroundAttachment = "fixed"),
          (a.style.backgroundPosition = "center ".concat(
            void 0 !== i ? i : t,
            "px"
          )),
          window.addEventListener("scroll", () => {
            (t = a.getBoundingClientRect().top * s),
              (a.style.backgroundPosition = "center ".concat(t, "px"));
          });
      }
    },
    3821: function (e, s, i) {
      var a = i(5893);
      i(7294),
        (s.Z = function () {
          return (0, a.jsx)("div", { className: "lines two-out" });
        });
    },
    990: function (e, s, i) {
      var a = i(5893);
      i(7294),
        (s.Z = function () {
          return (0, a.jsx)("section", {
            className: "about section-padding",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row md-marg",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-6 valign",
                    children: (0, a.jsxs)("div", {
                      className: "cont md-mb50",
                      children: [
                        (0, a.jsx)("h6", {
                          className: "sub-title opacity-8 wow fadeInUp",
                          children: "About Us.",
                        }),
                        (0, a.jsxs)("h2", {
                          className: "d-slideup wow",
                          children: [
                            (0, a.jsx)("span", {
                              className: "sideup-text",
                              children: (0, a.jsxs)("span", {
                                className: "up-text",
                                children: [
                                  "We are a ",
                                  (0, a.jsx)("span", {
                                    className: "sub-font",
                                    children: "full–service",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("span", {
                              className: "sideup-text",
                              children: (0, a.jsx)("span", {
                                className: "up-text",
                                children: "creative studio",
                              }),
                            }),
                            (0, a.jsx)("span", {
                              className: "sideup-text",
                              children: (0, a.jsx)("span", {
                                className: "up-text",
                                children: "revolutionize web design.",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "text mt-20 wow fadeIn",
                          "data-wow-delay": ".5s",
                          children: (0, a.jsx)("p", {
                            children:
                              "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "stutas pt-40 mt-40 bord-thin-top",
                          children: (0, a.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, a.jsx)("div", {
                                className: "col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className:
                                    "d-flex align-items-center sm-mb30",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "mr-30",
                                      children: (0, a.jsx)("h2", {
                                        className: "stroke fw-800",
                                        children: "12k",
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      children: (0, a.jsxs)("h6", {
                                        className: "sub-title ls1 opacity-8",
                                        children: [
                                          "Happy Users ",
                                          (0, a.jsx)("br", {}),
                                          " Around World",
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "d-flex align-items-center",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "mr-30",
                                      children: (0, a.jsx)("h2", {
                                        className: "stroke fw-800",
                                        children: "30k",
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      children: (0, a.jsxs)("h6", {
                                        className: "sub-title ls1 opacity-8",
                                        children: [
                                          "Projects ",
                                          (0, a.jsx)("br", {}),
                                          " Already Done",
                                        ],
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
                  (0, a.jsx)("div", {
                    className: "col-lg-6",
                    children: (0, a.jsxs)("div", {
                      className: "img",
                      children: [
                        (0, a.jsx)("img", {
                          src: "/dark/assets/imgs/about/2.jpg",
                          alt: "",
                        }),
                        (0, a.jsxs)("div", {
                          className: "exp main-bg",
                          children: [
                            (0, a.jsx)("h2", { children: "28+" }),
                            (0, a.jsx)("h6", {
                              className: "sub-title",
                              children: "Years Of Experience",
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
    4696: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return d;
        },
      });
      var a = i(5893),
        l = i(7294),
        t = i(1664),
        n = i.n(t),
        c = i(8366),
        r = JSON.parse(
          '[{"id":1,"image":"/dark/assets/imgs/blog/b1.jpg","author":{"name":"Olivia Rhye","picture":"/dark/assets/imgs/blog/author1.jpg"},"title":"The Highly Creative UI/UX Workflow from a Silicon Valley.","date":"6 August 2022","tags":["Design","Marketing"]},{"id":2,"image":"/dark/assets/imgs/blog/b2.jpg","author":{"name":"Olivia Rhye","picture":"/dark/assets/imgs/blog/author1.jpg"},"title":"Creativo J\xf3venes: a Lead Designer\'s UI/UX Core Checklist.","date":"6 August 2022","tags":["Design","Marketing"]},{"id":3,"image":"/dark/assets/imgs/blog/b3.jpg","author":{"name":"Olivia Rhye","picture":"/dark/assets/imgs/blog/author1.jpg"},"title":"Definitive Guide to Make a Daily More Productive Working Flow.","date":"6 August 2022","tags":["Design","Marketing"]}]'
        ),
        d = function () {
          return (
            (0, l.useEffect)(() => {
              (0, c.Z)();
            }, []),
            (0, a.jsx)("section", {
              className: "blog-list section-padding sub-bg",
              children: (0, a.jsxs)("div", {
                className: "container",
                children: [
                  (0, a.jsx)("div", {
                    className: "sec-head mb-80",
                    children: (0, a.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "col-lg-8",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "sub-title wow fadeInUp",
                              children: "Featured Stories",
                            }),
                            (0, a.jsx)("h2", {
                              className: "d-rotate wow",
                              children: (0, a.jsx)("span", {
                                className: "rotate-text",
                                children: "Latest News",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "col-lg-4 d-flex align-items-center",
                          children: (0, a.jsx)("div", {
                            className:
                              "full-width d-flex justify-content-end justify-end",
                            children: (0, a.jsx)("div", {
                              className: "vew-all wow fadeIn",
                              children: (0, a.jsxs)(n(), {
                                href: "/dark/blog-classic",
                                children: [
                                  "View All Our News",
                                  (0, a.jsx)("span", {
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
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  r.map((e, s) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: "item bord-thin-top ".concat(
                          s === r.length - 1 ? "bord-thin-bottom" : "",
                          " wow fadeInUp"
                        ),
                        "data-wow-delay": "".concat(0.1 * s + 0.2, "s"),
                        children: [
                          (0, a.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, a.jsx)("div", {
                                className: "col-lg-3",
                                children: (0, a.jsx)("div", {
                                  className: "info md-mb30",
                                  children: (0, a.jsxs)("div", {
                                    className: "d-flex align-items-center",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "author",
                                        children: (0, a.jsx)("div", {
                                          className: "img",
                                          children: (0, a.jsx)("img", {
                                            src: e.author.picture,
                                            alt: "",
                                          }),
                                        }),
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "author-info",
                                        children: [
                                          (0, a.jsx)("span", {
                                            className: "fz-13 opacity-8 mb-5",
                                            children: "Posted by",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fz-18",
                                            children: e.author.name,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, a.jsxs)("div", {
                                  className: "cont",
                                  children: [
                                    (0, a.jsx)("h5", {
                                      className: "mb-10 underline",
                                      children: (0, a.jsx)(n(), {
                                        href: "/dark/blog-details",
                                        children: e.title,
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "tags",
                                      children: e.tags.map((e, s) =>
                                        (0, a.jsx)(
                                          n(),
                                          {
                                            href: "/dark/blog-classic",
                                            children: e,
                                          },
                                          s
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "col-lg-3 d-flex align-items-center justify-end",
                                children: (0, a.jsx)("div", {
                                  className: "ml-auto",
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "date sub-title fz-13 opacity-8 mb-30",
                                    children: e.date,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "background bg-img valign text-center",
                            "data-background": e.image,
                            "data-overlay-dark": "4",
                            children: (0, a.jsx)("div", {
                              className: "more ontop full-width",
                              children: (0, a.jsx)(n(), {
                                href: "/dark/blog-details",
                                children: (0, a.jsxs)("span", {
                                  children: [
                                    "Read More ",
                                    (0, a.jsx)("i", {
                                      className: "fas fa-arrow-right ml-10",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                ],
              }),
            })
          );
        };
    },
    5060: function (e, s, i) {
      var a = i(5893);
      i(7294),
        (s.Z = function () {
          return (0, a.jsx)("section", {
            className: "contact-crev no-crev section-padding",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-5",
                    children: (0, a.jsxs)("div", {
                      className: "sec-head md-mb80",
                      children: [
                        (0, a.jsx)("h6", {
                          className: "sub-title wow fadeInUp",
                          children: "Get In Touch",
                        }),
                        (0, a.jsx)("h2", {
                          className: "fz-50 d-rotate wow",
                          children: (0, a.jsx)("span", {
                            className: "rotate-text",
                            children: "Let's make your brand brilliant!",
                          }),
                        }),
                        (0, a.jsx)("p", {
                          className: "fz-15 mt-10",
                          children:
                            "If you would like to work with us or just want to get in touch, we’d love to hear from you!",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "phone fz-30 fw-600 mt-30 underline main-color",
                          children: (0, a.jsx)("a", {
                            href: "#0",
                            children: "+1 840 841 25 69",
                          }),
                        }),
                        (0, a.jsxs)("ul", {
                          className: "rest social-text d-flex mt-60",
                          children: [
                            (0, a.jsx)("li", {
                              className: "mr-30",
                              children: (0, a.jsx)("a", {
                                href: "#0",
                                className: "hover-this",
                                children: (0, a.jsx)("span", {
                                  className: "hover-anim",
                                  children: "Facebook",
                                }),
                              }),
                            }),
                            (0, a.jsx)("li", {
                              className: "mr-30",
                              children: (0, a.jsx)("a", {
                                href: "#0",
                                className: "hover-this",
                                children: (0, a.jsx)("span", {
                                  className: "hover-anim",
                                  children: "Twitter",
                                }),
                              }),
                            }),
                            (0, a.jsx)("li", {
                              className: "mr-30",
                              children: (0, a.jsx)("a", {
                                href: "#0",
                                className: "hover-this",
                                children: (0, a.jsx)("span", {
                                  className: "hover-anim",
                                  children: "LinkedIn",
                                }),
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "#0",
                                className: "hover-this",
                                children: (0, a.jsx)("span", {
                                  className: "hover-anim",
                                  children: "Instagram",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-6 offset-lg-1 valign",
                    children: (0, a.jsx)("div", {
                      className: "full-width",
                      children: (0, a.jsxs)("form", {
                        id: "contact-form",
                        method: "post",
                        action: "contact.php",
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
                                  children: (0, a.jsx)("input", {
                                    id: "form_subject",
                                    type: "text",
                                    name: "subject",
                                    placeholder: "Subject",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "col-12",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "form-group",
                                    children: (0, a.jsx)("textarea", {
                                      id: "form_message",
                                      name: "message",
                                      placeholder: "Message",
                                      rows: "4",
                                      required: "required",
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "mt-30",
                                    children: (0, a.jsx)("button", {
                                      type: "submit",
                                      className:
                                        "butn butn-full butn-bord radius-30",
                                      children: (0, a.jsx)("span", {
                                        className: "text",
                                        children: "Let's Talk",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        });
    },
    3193: function (e, s, i) {
      var a = i(5893),
        l = i(7294),
        t = i(7513);
      s.Z = function (e) {
        let { lightMode: s } = e;
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
                                  "Germany — 785 15h Street, Office 478 Berlin, De 81566",
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
                                    href: "#0",
                                    children: "hello@design.com",
                                  }),
                                }),
                                (0, a.jsx)("h5", {
                                  children: (0, a.jsx)("a", {
                                    href: "#",
                                    children: "+1 840 841 25 69",
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
                                  "\xa9 2025 This page is Powered by",
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "underline",
                                    children: (0, a.jsx)("a", {
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
    4382: function (e, s, i) {
      var a = i(5893),
        l = i(7294),
        t = i(1664),
        n = i.n(t),
        c = i(4576);
      s.Z = function () {
        return (
          (0, l.useEffect)(() => {
            (0, c.Z)("header.parallaxie", 0.2, 0);
          }, []),
          (0, a.jsx)("header", {
            className: "header-main full-height valign bg-img parallaxie",
            "data-background": "/dark/assets/imgs/background/14.jpg",
            "data-overlay-dark": "7",
            children: (0, a.jsx)("div", {
              className: "container ontop",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-8",
                    children: (0, a.jsxs)("div", {
                      className: "caption",
                      children: [
                        (0, a.jsx)("h5", {
                          className: "fw-300 mb-15",
                          children: "Digital agency studio",
                        }),
                        (0, a.jsx)("h1", {
                          className: "fz-80",
                          children: "a creative digital design studio",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "col-lg-4 d-flex align-items-end justify-content-end justify-end",
                    children: (0, a.jsxs)("div", {
                      className: "d-flex align-items-center",
                      children: [
                        (0, a.jsx)("div", {
                          children: (0, a.jsx)(n(), {
                            href: "/dark/portfolio-grid",
                            className: "hover-this",
                            children: (0, a.jsxs)("div", {
                              className: "circle-button hover-anim",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "rotate-circle fz-30 text-u",
                                  children: (0, a.jsxs)("svg", {
                                    className: "textcircle",
                                    viewBox: "0 0 500 500",
                                    children: [
                                      (0, a.jsx)("defs", {
                                        children: (0, a.jsx)("path", {
                                          id: "textcircle",
                                          d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z",
                                        }),
                                      }),
                                      (0, a.jsx)("text", {
                                        children: (0, a.jsx)("textPath", {
                                          xlinkHref: "#textcircle",
                                          textLength: "900",
                                          children:
                                            "Explore More - Explore More -",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "arrow",
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
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          children: (0, a.jsxs)("h6", {
                            className: "sub-title",
                            children: [
                              "Explore ",
                              (0, a.jsx)("br", {}),
                              " Our Portfolio",
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    7163: function (e, s, i) {
      var a = i(5893),
        l = i(7294),
        t = i(4576);
      s.Z = function () {
        return (
          (0, l.useEffect)(() => {
            (0, t.Z)(".back-image.parallaxie");
          }, []),
          (0, a.jsx)("div", {
            className: "back-image states bg-img parallaxie",
            "data-background": "/dark/assets/imgs/background/13.jpg",
            "data-overlay-dark": "3",
            children: (0, a.jsx)("div", {
              className: "container box position-re",
              children: (0, a.jsxs)("ul", {
                className: "rest",
                children: [
                  (0, a.jsxs)("li", {
                    className: "sd-dark",
                    children: [
                      (0, a.jsx)("span", {
                        className: "numb",
                        children: "5920",
                      }),
                      (0, a.jsxs)("h5", {
                        children: [
                          "Succeeded ",
                          (0, a.jsx)("br", {}),
                          " Projects",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("li", {
                    className: "blur",
                    children: [
                      (0, a.jsxs)("h5", {
                        children: [
                          "Huge template ",
                          (0, a.jsx)("br", {}),
                          " collection.",
                        ],
                      }),
                      (0, a.jsx)("span", {
                        className: "icon pe-7s-paper-plane",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    7002: function (e, s, i) {
      var a = i(5893);
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
          return (0, a.jsx)("section", {
            className: "intro-corp section-padding",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row justify-content-around",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-5 valign md-mb50",
                    children: (0, a.jsxs)("div", {
                      className: "imgs mb-80",
                      children: [
                        (0, a.jsx)("div", {
                          className: "img1 wow fadeInUp",
                          children: (0, a.jsx)("img", {
                            src: "/dark/assets/imgs/about/sq1.jpg",
                            alt: "",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "img2 wow fadeInLeft",
                          children: (0, a.jsx)("img", {
                            src: "/dark/assets/imgs/about/sq2.jpg",
                            alt: "",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-5 valign",
                    children: (0, a.jsxs)("div", {
                      className: "cont",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text",
                          children: (0, a.jsxs)("h2", {
                            className: "d-slideup wow",
                            children: [
                              (0, a.jsx)("span", {
                                className: "sideup-text",
                                children: (0, a.jsx)("span", {
                                  className: "up-text",
                                  children: "Watch the creative",
                                }),
                              }),
                              (0, a.jsx)("span", {
                                className: "sideup-text",
                                children: (0, a.jsx)("span", {
                                  className: "up-text",
                                  children: "process behind our",
                                }),
                              }),
                              (0, a.jsx)("span", {
                                className: "sideup-text",
                                children: (0, a.jsxs)("span", {
                                  className: "up-text",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "sub-font",
                                      children: "digital marketing",
                                    }),
                                    ".",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "accordion bord mt-40",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "item mb-15 wow fadeInUp",
                              "data-wow-delay": ".1s",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "title",
                                  onClick: e,
                                  children: [
                                    (0, a.jsx)("h6", {
                                      className: "fz-18",
                                      children:
                                        "The Power of Influencer Marketing",
                                    }),
                                    (0, a.jsx)("span", { className: "ico" }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "accordion-info",
                                  children: (0, a.jsx)("p", {
                                    className: "fz-14",
                                    children:
                                      "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "item mb-15 wow fadeInUp",
                              "data-wow-delay": ".3s",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "title",
                                  onClick: e,
                                  children: [
                                    (0, a.jsx)("h6", {
                                      className: "fz-18",
                                      children: "Unique and Influential Design",
                                    }),
                                    (0, a.jsx)("span", { className: "ico" }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "accordion-info",
                                  children: (0, a.jsx)("p", {
                                    className: "fz-14",
                                    children:
                                      "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "item wow fadeInUp",
                              "data-wow-delay": ".5s",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "title",
                                  onClick: e,
                                  children: [
                                    (0, a.jsx)("h6", {
                                      className: "fz-18",
                                      children: "We Build and Activate Brands",
                                    }),
                                    (0, a.jsx)("span", { className: "ico" }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "accordion-info",
                                  children: (0, a.jsx)("p", {
                                    className: "fz-14",
                                    children:
                                      "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.",
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
    4086: function (e, s, i) {
      var a = i(5893);
      i(7294),
        (s.Z = function () {
          return (0, a.jsx)("section", {
            className: "serv-marq ontop",
            children: (0, a.jsx)("div", {
              className: "container-fluid",
              children: (0, a.jsx)("div", {
                className: "row",
                children: (0, a.jsx)("div", {
                  className: "col-12",
                  children: (0, a.jsx)("div", {
                    className: "main-marq xlrg text-u",
                    children: (0, a.jsxs)("div", {
                      className: "slide-har st1 non-strok",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "box",
                          children: [
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                children: [
                                  "UI-UX ",
                                  (0, a.jsx)("span", {
                                    className: "stroke opacity-4",
                                    children: "Experience",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                children: [
                                  "Web ",
                                  (0, a.jsx)("span", {
                                    className: "stroke opacity-4",
                                    children: "Development",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                children: [
                                  "Digital ",
                                  (0, a.jsx)("span", {
                                    className: "stroke opacity-4",
                                    children: "Marketing",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                children: [
                                  "Product ",
                                  (0, a.jsx)("span", {
                                    className: "stroke opacity-4",
                                    children: "Design",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                children: [
                                  "Mobile ",
                                  (0, a.jsx)("span", {
                                    className: "stroke opacity-4",
                                    children: "Solutions",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "box",
                          children: [
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                children: [
                                  "UI-UX ",
                                  (0, a.jsx)("span", {
                                    className: "stroke opacity-4",
                                    children: "Experience",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                children: [
                                  "Web ",
                                  (0, a.jsx)("span", {
                                    className: "stroke opacity-4",
                                    children: "Development",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                children: [
                                  "Digital ",
                                  (0, a.jsx)("span", {
                                    className: "stroke opacity-4",
                                    children: "Marketing",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                children: [
                                  "Product ",
                                  (0, a.jsx)("span", {
                                    className: "stroke opacity-4",
                                    children: "Design",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                children: [
                                  "Mobile ",
                                  (0, a.jsx)("span", {
                                    className: "stroke opacity-4",
                                    children: "Solutions",
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
    2915: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return o;
        },
      });
      var a = i(5893),
        l = i(7294),
        t = i(1664),
        n = i.n(t),
        c = i(8366),
        r = i(3037),
        d = JSON.parse(
          '[{"id":1,"image":"assets/imgs/portfolio/gallery/1.jpg","number":"01.","type":"Digital","title":"Luxury Glassware","text":"We craft premium designs for agencies and global brands around the globe."},{"id":2,"image":"assets/imgs/portfolio/gallery/2.jpg","number":"02.","type":"Marketing","title":"Brand Identity","text":"We craft premium designs for agencies and global brands around the globe."},{"id":3,"image":"assets/imgs/portfolio/gallery/3.jpg","number":"03.","type":"Design","title":"Roseville Pottery","text":"We craft premium designs for agencies and global brands around the globe."}]'
        ),
        o = function (e) {
          let { lightMode: s } = e;
          function i() {
            (0, r.Z)({
              selector: ".portfolio-fixed .sub-bg .cont",
              isElements: !0,
              callback(e) {
                var s;
                e.classList.add("current"),
                  null ===
                    (s = document.querySelector(
                      "#" + e.getAttribute("data-tab")
                    )) ||
                    void 0 === s ||
                    s.classList.add("current");
              },
              whenOutOfView(e) {
                var s;
                e.classList.remove("current"),
                  null ===
                    (s = document.querySelector(
                      "#" + e.getAttribute("data-tab")
                    )) ||
                    void 0 === s ||
                    s.classList.remove("current");
              },
            });
            let e = document.getElementById("sticky_item");
            if (!e) return;
            let s = e.getBoundingClientRect().width,
              i = document
                .querySelector(".portfolio-fixed")
                .getBoundingClientRect();
            i.top < 75 && i.height / 2 < i.bottom
              ? ((e.style.position = "fixed"),
                (e.style.top = "0px"),
                (e.style.width = s + "px"),
                e.classList.remove("is_stuck"))
              : i.height / 2 > i.bottom
              ? ((e.style.position = "absolute"),
                (e.style.top = "auto"),
                (e.style.bottom = "0"),
                (e.style.width = s + "px"),
                e.classList.add("is_stuck"),
                document
                  .querySelector(
                    "#tab-".concat(
                      document.querySelectorAll("[data-tab]").length
                    )
                  )
                  .classList.add("current"))
              : ((e.style.position = "relative"),
                (e.style.top = "unset"),
                (e.style.bottom = "unset"),
                (e.style.width = "auto"));
          }
          return (
            (0, l.useEffect)(
              () => (
                (0, c.Z)(),
                window.addEventListener("scroll", i),
                () => window.removeEventListener("scroll", i)
              ),
              []
            ),
            (0, a.jsx)("section", {
              className: "portfolio-fixed",
              children: (0, a.jsx)("div", {
                className: "container-fluid rest",
                children: (0, a.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-6 rest",
                      style: { position: "relative" },
                      children: (0, a.jsx)("div", {
                        className: "left",
                        id: "sticky_item",
                        children: d.map((e, i) =>
                          (0, a.jsx)(
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
                    (0, a.jsx)("div", {
                      className: "col-lg-6 sub-bg right",
                      children: d.map((e, i) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: "cont ".concat(0 === i ? "active" : ""),
                            "data-tab": "tab-".concat(i + 1),
                            children: [
                              (0, a.jsx)("div", {
                                className: "img-hiden",
                                children: (0, a.jsx)("img", {
                                  src: ""
                                    .concat(s ? "/light/" : "/dark/")
                                    .concat(e.image),
                                  alt: "",
                                }),
                              }),
                              (0, a.jsxs)("span", {
                                className: "sub-title mb-15",
                                children: [e.number, " ", e.type],
                              }),
                              (0, a.jsxs)("h2", {
                                className: "mb-15",
                                children: [e.title, "."],
                              }),
                              (0, a.jsx)("div", {
                                className: "row",
                                children: (0, a.jsxs)("div", {
                                  className: "col-md-9",
                                  children: [
                                    (0, a.jsxs)("p", {
                                      children: [e.text, "."],
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "vew-all mt-50 ml-25",
                                      children: (0, a.jsxs)(n(), {
                                        href: "/dark/project-details2",
                                        className: "sub-title",
                                        children: [
                                          "Explore More",
                                          (0, a.jsx)("span", {
                                            children: (0, a.jsx)("svg", {
                                              width: "18",
                                              height: "18",
                                              viewBox: "0 0 18 18",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              children: (0, a.jsx)("path", {
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
    7019: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return m;
        },
      });
      var a = i(5893),
        l = i(7294),
        t = i(1664),
        n = i.n(t),
        c = i(719),
        r = i(8116),
        d = JSON.parse(
          '[{"id":1,"title":"Marketing Strategy","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus.","image":"assets/imgs/serv-icons/0.png"},{"id":2,"title":"Product Design","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus.","image":"assets/imgs/serv-icons/1.png"},{"id":3,"title":"Website Design","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus.","image":"assets/imgs/serv-icons/2.png"},{"id":4,"title":"E-Commerce","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus.","image":"assets/imgs/serv-icons/1.png"}]'
        );
      let o = {
        modules: [r.W_, r.pt],
        slidesPerView: 5,
        spaceBetween: 0,
        speed: 1e3,
        loop: !0,
        breakpoints: {
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        },
        navigation: {
          nextEl: ".services .swiper-button-next",
          prevEl: ".services .swiper-button-prev",
        },
      };
      var m = function (e) {
        let { lightMode: s } = e,
          [i, t] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            t(!0);
          }, []),
          (0, a.jsxs)("section", {
            className: "services section-padding pb-0 block-pattern",
            children: [
              (0, a.jsx)("div", {
                className: "container",
                children: (0, a.jsx)("div", {
                  className: "sec-head mb-80",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "col-lg-5",
                        children: [
                          (0, a.jsx)("h6", {
                            className: "sub-title opacity-8 wow fadeInUp",
                            children: "Main directions",
                          }),
                          (0, a.jsx)("h2", {
                            className: "d-rotate wow",
                            children: (0, a.jsx)("span", {
                              className: "rotate-text",
                              children: "Services.",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-4 d-flex align-items-center",
                        children: (0, a.jsx)("div", {
                          className: "text d-rotate wow md-mb30",
                          children: (0, a.jsx)("p", {
                            className: "rotate-text",
                            children:
                              "Finding the best marketing solution for your business. Driven by data based on human behavior.",
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "col-lg-3 d-flex align-items-center wow fadeIn",
                        children: (0, a.jsx)("div", {
                          className: "full-width",
                          children: (0, a.jsx)("div", {
                            className: "d-flex justify-content-end justify-end",
                            children: (0, a.jsxs)("div", {
                              className: "swiper-controls arrow-out d-flex",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "swiper-button-prev",
                                  children: (0, a.jsx)("span", {
                                    className: "left",
                                    children: (0, a.jsx)("svg", {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 20 20",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, a.jsx)("path", {
                                        d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                        fill: "currentColor",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "swiper-button-next ml-50",
                                  children: (0, a.jsx)("span", {
                                    className: "right",
                                    children: (0, a.jsx)("svg", {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 20 20",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, a.jsx)("path", {
                                        d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                        fill: "currentColor",
                                      }),
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
              }),
              (0, a.jsx)("div", {
                className: "container-fluid rest",
                children: (0, a.jsx)("div", {
                  className: "serv-items-crev",
                  children: (0, a.jsx)("div", {
                    className: "serv-swiper",
                    children:
                      i &&
                      (0, a.jsx)(c.tq, {
                        ...o,
                        id: "content-carousel-container-unq-serv",
                        children: d.map((e, i) =>
                          (0, a.jsx)(
                            c.o5,
                            {
                              className: "wow fadeIn",
                              "data-wow-delay": "".concat(
                                (d.length - i + 1) * 0.2,
                                "s"
                              ),
                              children: (0, a.jsxs)("div", {
                                className: "item",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "icon-img-60 mb-40",
                                    children: (0, a.jsx)("img", {
                                      src: ""
                                        .concat(s ? "/light/" : "/dark/")
                                        .concat(e.image),
                                      alt: "",
                                    }),
                                  }),
                                  (0, a.jsx)("h6", {
                                    className: "mb-15",
                                    children: e.title,
                                  }),
                                  (0, a.jsx)("p", { children: e.text }),
                                  (0, a.jsxs)(n(), {
                                    href: "/dark/page-services",
                                    className: "arrow mt-40",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "circle",
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
                                      (0, a.jsx)("span", {
                                        className: "fz-12 text-u ml-10",
                                        children: "Read More",
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
                }),
              }),
              (0, a.jsx)("div", {
                className: "bg-pattern bg-img",
                "data-background": "".concat(
                  s ? "/light/" : "/dark/",
                  "assets/imgs/patterns/bg-line-1.svg"
                ),
              }),
            ],
          })
        );
      };
    },
    5996: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return c;
        },
      });
      var a = i(5893);
      i(7294);
      var l = i(1664),
        t = i.n(l),
        n = JSON.parse(
          '[{"id":1,"picture":"/dark/assets/imgs/team/t1.jpg","position":"Co-Founder","name":"Matt Smith"},{"id":2,"picture":"/dark/assets/imgs/team/t2.jpg","position":"Co-Founder","name":"Matt Smith"},{"id":3,"picture":"/dark/assets/imgs/team/t3.jpg","position":"Co-Founder","name":"Matt Smith"},{"id":4,"picture":"/dark/assets/imgs/team/t4.jpg","position":"Co-Founder","name":"Matt Smith"},{"id":5,"picture":"/dark/assets/imgs/team/t3.jpg","position":"Co-Founder","name":"Matt Smith"},{"id":6,"picture":"/dark/assets/imgs/team/t4.jpg","position":"Co-Founder","name":"Matt Smith"},{"id":7,"picture":"/dark/assets/imgs/team/t1.jpg","position":"Co-Founder","name":"Matt Smith"}]'
        ),
        c = function () {
          return (0, a.jsx)("section", {
            className: "team section-padding",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "sec-head mb-80",
                  children: (0, a.jsx)("div", {
                    className: "row",
                    children: (0, a.jsxs)("div", {
                      className: "col-lg-8",
                      children: [
                        (0, a.jsx)("h6", {
                          className: "sub-title opacity-8 wow fadeInUp",
                          children: "The Avengers",
                        }),
                        (0, a.jsx)("h2", {
                          className: "d-rotate wow",
                          children: (0, a.jsx)("span", {
                            className: "rotate-text",
                            children: "Meet Our Team.",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "row md-marg",
                  children: [
                    n.map((e) =>
                      (0, a.jsx)(
                        "div",
                        {
                          className: "col-lg-3 col-md-6",
                          children: (0, a.jsxs)("div", {
                            className: "item mb-50",
                            children: [
                              (0, a.jsx)("div", {
                                className: "img",
                                children: (0, a.jsx)("img", {
                                  src: e.picture,
                                  alt: "",
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "info mt-20",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "fz-12 opacity-8",
                                    children: e.position,
                                  }),
                                  (0, a.jsx)("h6", {
                                    className: "fz-18",
                                    children: e.name,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        e.id
                      )
                    ),
                    (0, a.jsx)("div", {
                      className: "col-lg-3 col-md-6",
                      children: (0, a.jsx)("div", {
                        className: "item-join valign",
                        children: (0, a.jsxs)("div", {
                          className: "full-width",
                          children: [
                            (0, a.jsxs)("h6", {
                              className: "text-u ls2",
                              children: [
                                "Become ",
                                (0, a.jsx)("br", {}),
                                " A Member",
                              ],
                            }),
                            (0, a.jsxs)(t(), {
                              href: "/dark/page-team",
                              className: "arrow mt-30",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "circle",
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
                                (0, a.jsx)("span", {
                                  className: "fz-12 text-u ml-10",
                                  children: "Join Us",
                                }),
                              ],
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
        };
    },
    2875: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return x;
        },
      });
      var a = i(5893),
        l = i(7294),
        t = i(719),
        n = i(8116),
        c = i(8366),
        r = JSON.parse(
          '[{"id":1,"content":"Before Cleverest, our strategies were like navigating by candlelight. Now, it\'s as if we\'re charting the cosmos with a supercomputer. They don\'t just understand AI; they wield it like a conductor leading an orchestra of code.","image":"assets/imgs/testim/4.jpg","author":"Dr. Aris Thorne","position":"Chief Innovation Officer"},{"id":2,"content":"Working with Cleverest is like partnering with the future itself. Their AI-driven solutions aren\'t just effective; they’re like a sculptor chiseling away the old to reveal a masterpiece of efficiency and innovation. They have an unparalleled control over the code.","image":"assets/imgs/testim/4.jpg","author":"Sergio Cayuqueo","position":"CEO & Founder"},{"id":3,"content":"If our old processes were a horse-drawn carriage, Cleverest\'s AI agents are a hypersonic jet. They don\'t just automate; they accelerate us into a new dimension of capability. The results are as astonishing as witnessing the birth of a star.","image":"assets/imgs/testim/3.jpg","author":"Dr. Kai Sterling","position":"Lead Data Strategist"},{"id":4,"content":"Cleverest doesn’t offer solutions; they forge revolutions. Their approach is not simply insightful; it\'s like unlocking the secrets of the universe. They have taken our company to new heights, and we couldn\'t be happier.","image":"assets/imgs/testim/4.jpg","author":"Lena Reyes","position":"Lead Automation Specialist"}]'
        ),
        d = JSON.parse(
          '["assets/imgs/brands/1.png","assets/imgs/brands/2.png","assets/imgs/brands/3.png","assets/imgs/brands/4.png","assets/imgs/brands/5.png"]'
        ),
        o = i(7513);
      let m = {
          modules: [n.W_, n.pt],
          slidesPerView: 3,
          spaceBetween: 30,
          loop: !0,
          speed: 1e3,
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          },
        },
        h = {
          modules: [n.W_, n.pt],
          slidesPerView: 6,
          spaceBetween: 30,
          loop: !0,
          speed: 1e3,
          breakpoints: {
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          },
        };
      var x = function (e) {
        let { lightMode: s } = e,
          [i, n] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            n(!0), (0, c.Z)();
          }, []),
          (0, a.jsxs)("section", {
            className:
              "testim-crv section-padding main-colorbg text-dark position-re",
            children: [
              (0, a.jsx)("div", {
                className: "container ontop",
                children: (0, a.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-md-6",
                      children: (0, a.jsxs)("div", {
                        className: "sec-head md-mb50",
                        children: [
                          (0, a.jsx)("h6", {
                            className: "sub-title wow fadeInUp",
                            children: "What Clients Says?",
                          }),
                          (0, a.jsx)("h2", {
                            className: "d-rotate wow",
                            children: (0, a.jsx)("span", {
                              className: "rotate-text",
                              children: "Testimonials",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-md-6 valign",
                      children: (0, a.jsx)("div", {
                        className:
                          "swiper-controls testim-controls arrow-out d-flex justify-content-end justify-end-sm full-width",
                        children: (0, a.jsxs)("div", {
                          className: "d-flex ",
                          children: [
                            (0, a.jsx)("div", {
                              className: "swiper-button-prev",
                              children: (0, a.jsx)("span", {
                                className: "left",
                                children: (0, a.jsx)("svg", {
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 20 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, a.jsx)("path", {
                                    d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                    fill: "#1d1d1d",
                                  }),
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "swiper-button-next ml-50",
                              children: (0, a.jsx)("span", {
                                className: "right",
                                children: (0, a.jsx)("svg", {
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 20 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, a.jsx)("path", {
                                    d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                    fill: "#1d1d1d",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-12 mt-80",
                      children: (0, a.jsx)("div", {
                        className: "testim-swiper testim-swiper3 to-out",
                        children:
                          i &&
                          (0, a.jsx)(t.tq, {
                            ...m,
                            id: "content-carousel-container-unq-testim",
                            className: "swiper-container",
                            children: r.map((e) =>
                              (0, a.jsx)(
                                t.o5,
                                {
                                  children: (0, a.jsxs)("div", {
                                    className: "item bg-white",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className: "cont mb-40",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: "rate-stars mb-20 fz-12",
                                            children: (0, a.jsxs)("span", {
                                              className: "rate",
                                              children: [
                                                (0, a.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, a.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, a.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, a.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                (0, a.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, a.jsx)("p", {
                                            className: "fw-400",
                                            children: e.content,
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "d-flex align-items-center",
                                        children: [
                                          (0, a.jsx)("div", {
                                            children: (0, a.jsx)("div", {
                                              className: "img circle-60",
                                              children: (0, a.jsx)("img", {
                                                src: s
                                                  ? "/dark/" + e.image
                                                  : "/light/" + e.image,
                                                alt: "",
                                                className: "circle-img",
                                              }),
                                            }),
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "ml-30",
                                            children: (0, a.jsxs)("div", {
                                              className: "info",
                                              children: [
                                                (0, a.jsx)("h6", {
                                                  className: "fz-16",
                                                  children: e.author,
                                                }),
                                                (0, a.jsx)("span", {
                                                  className:
                                                    "opacity-7 sub-title",
                                                  children: e.position,
                                                }),
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
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "clients-carso section-padding pb-0",
                children: (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsx)("div", {
                    className: "row",
                    children: (0, a.jsx)("div", {
                      className: "col-12",
                      children: (0, a.jsx)("div", {
                        className: "swiper5",
                        "data-carousel": "swiper",
                        "data-items": "6",
                        "data-loop": "true",
                        "data-space": "30",
                        "data-speed": "1000",
                        children:
                          i &&
                          (0, a.jsx)(t.tq, {
                            ...h,
                            id: "content-carousel-container-unq-clients",
                            children: d.map((e) =>
                              (0, a.jsx)(
                                t.o5,
                                {
                                  children: (0, a.jsx)("div", {
                                    className: "item",
                                    children: (0, a.jsx)("div", {
                                      className: "img icon-img-100",
                                      children: (0, a.jsx)("a", {
                                        href: o.a,
                                        children: (0, a.jsx)("img", {
                                          src: "/dark/" + e,
                                          alt: "",
                                        }),
                                      }),
                                    }),
                                  }),
                                },
                                e
                              )
                            ),
                          }),
                      }),
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "bg-pattern bg-img bg-repeat",
                "data-background": "/dark/assets/imgs/patterns/noise.png",
              }),
            ],
          })
        );
      };
    },
  },
]);
