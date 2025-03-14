"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1018],
  {
    8366: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return i;
        },
      });
      function i() {
        let e = document.querySelectorAll("[data-background]");
        e.length > 0 &&
          e.forEach((e) => {
            let s = e.dataset.background;
            e.style.backgroundImage = "url('".concat(s, "')");
          });
      }
    },
    4576: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return i;
        },
      });
      function i(e) {
        let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.8,
          t = arguments.length > 2 ? arguments[2] : void 0,
          i = document.querySelector(e),
          a = i.getAttribute("data-background");
        a || (a = window.getComputedStyle(i).backgroundImage);
        let l = i.getBoundingClientRect().top * s;
        (i.style.backgroundImage = 'url("'.concat(a, '")')),
          (i.style.backgroundSize = "cover"),
          (i.style.backgroundRepeat = "no-repeat"),
          (i.style.backgroundAttachment = "fixed"),
          (i.style.backgroundPosition = "center ".concat(
            void 0 !== t ? t : l,
            "px"
          )),
          window.addEventListener("scroll", () => {
            (l = i.getBoundingClientRect().top * s),
              (i.style.backgroundPosition = "center ".concat(l, "px"));
          });
      }
    },
    2637: function (e, s, t) {
      var i = t(5893),
        a = t(7294);
      class l extends a.Component {
        render() {
          return "span" === this.props.tag
            ? (0, i.jsx)("span", {
                ref: this.target,
                children: this.props.children,
              })
            : "a" === this.props.tag
            ? (0, i.jsx)("a", {
                href: this.props.href,
                className: this.props.className,
                ref: this.target,
                children: this.props.children,
              })
            : (0, i.jsx)("div", {
                ref: this.target,
                children: this.props.children,
              });
        }
        constructor(...e) {
          super(...e),
            (this.target = a.createRef()),
            (this.split = () => {
              this.target.current && Splitting({ target: this.target.current });
            }),
            (this.componentDidMount = this.split),
            (this.componentDidUpdate = this.split);
        }
      }
      s.Z = l;
    },
    8917: function (e, s, t) {
      var i = t(5893),
        a = t(7294),
        l = t(1664),
        n = t.n(l),
        c = t(4576);
      s.Z = function (e) {
        let { lightMode: s, innerPageStyle: t } = e;
        return (
          (0, a.useEffect)(() => {
            (0, c.Z)(".sec-bg-img.parallaxie", 0.4);
          }, []),
          (0, i.jsx)("section", {
            className: "call-action-img",
            children: (0, i.jsxs)("div", {
              className: "container",
              children: [
                (0, i.jsx)("div", {
                  className: "sec-bg-img bg-img parallaxie",
                  "data-background": "/dark/assets/imgs/background/2.jpg",
                }),
                (0, i.jsx)("div", {
                  className: "sec-lg-head section-padding",
                  children: (0, i.jsx)("div", {
                    className: "row ontop",
                    children: (0, i.jsxs)("div", {
                      className: "col-11 d-flex align-items-center",
                      children: [
                        (0, i.jsx)("div", {
                          className: "valign",
                          children: (0, i.jsxs)("h2", {
                            className: "fz-50 d-rotate wow",
                            children: [
                              (0, i.jsx)("span", {
                                className: "rotate-text",
                                children: "Have an AI idea in mind?",
                              }),
                              (0, i.jsxs)("span", {
                                className: "rotate-text",
                                children: [
                                  "Let’s",
                                  " ",
                                  (0, i.jsx)("span", {
                                    className: t ? "" : "sub-font",
                                    children: "get to work",
                                  }),
                                  ".",
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "ml-auto",
                          children: (0, i.jsxs)(n(), {
                            href: "/dark/page-contact",
                            className:
                              "butn-circle d-flex align-items-center text-center m-auto",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "full-width",
                                children: [
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
                                  (0, i.jsx)("span", {
                                    className: "full-width",
                                    children: "Get In Touch",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("img", {
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
    4361: function (e, s, t) {
      var i = t(5893),
        a = t(7294),
        l = t(7513);
      s.Z = function (e) {
        let { lightMode: s, subBg: t } = e;
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
          (0, i.jsx)("footer", {
            className: t ? "sub-bg pt-80" : "",
            children: (0, i.jsxs)("div", {
              className: "footer-container",
              children: [
                (0, i.jsx)("div", {
                  className: "container pb-80 pt-80 ontop",
                  children: (0, i.jsxs)("div", {
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
                                  "Chile — 785 15h Street, Office 478 Santiago de Chile",
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
                                    href: "mailto:scayuqueo@usm.cl",
                                    children: "sergio@cleverest.cl",
                                  }),
                                }),
                                (0, i.jsx)("h5", {
                                  children: (0, i.jsx)("a", {
                                    href: "callto:+56929202244",
                                    children: "+569 29202244",
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
                                  target: "_blank",
                                  href: "https://x.com/cleverest_cl",
                                  children: "Twitter",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.linkedin.com/in/cleverest/",
                                  children: "LinkedIn",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.instagram.com/cleverest.cl",
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
                              href: "#0",
                              children: (0, i.jsx)("img", {
                                src: "/dark/assets/imgs/logo-".concat(
                                  s ? "dark" : "light",
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
                                  "\xa9 2025 Cleverest.cl is Powered by",
                                  " ",
                                  (0, i.jsx)("span", {
                                    className: "underline",
                                    children: (0, i.jsx)("a", {
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
    5616: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return r;
        },
      });
      var i = t(5893),
        a = t(7294),
        l = t(719),
        n = JSON.parse(
          '[{"id":1,"image":"/dark/assets/imgs/team/1.jpg","name":"Pedro Lu","position":"Full-Stack Dev"},{"id":2,"image":"/dark/assets/imgs/team/2.jpg","name":"Sergio Cayuqueo","position":"Founder & CEO"},{"id":3,"image":"/dark/assets/imgs/team/3.jpg","name":"Thomas Clerk","position":"AI Scientist"},{"id":4,"image":"/dark/assets/imgs/team/4.jpg","name":"Jhosua Berkeley","position":"AI Data Dev"},{"id":5,"image":"/dark/assets/imgs/team/3.jpg","name":"Mark Vanderhold","position":"AI Researcher"}]'
        );
      let c = {
        slidesPerView: 4,
        loop: 1e3,
        spaceBetween: 60,
        loop: !0,
        centeredSlides: !0,
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        },
      };
      var r = function () {
        let [e, s] = (0, a.useState)(!1);
        function t() {
          let e = document.getElementById("sticky_item");
          if (!e) return;
          let s = e.getBoundingClientRect().width,
            t = e.getBoundingClientRect().height,
            i = document.querySelector(".team-crev").getBoundingClientRect();
          if (i.top < -30 && i.height / 2 < i.bottom) {
            if (
              ((e.style.position = "fixed"),
              (e.style.top = "0px"),
              (e.style.width = s + "px"),
              e.classList.add("is_stuck"),
              "placeholder" !== e.nextElementSibling.id)
            ) {
              let i = document.createElement("div");
              (i.id = "placeholder"),
                (i.style.height = t + "px"),
                (i.style.width = s + "px"),
                e.after(i);
            }
          } else
            i.height / 2 > i.bottom
              ? ((e.style.position = "absolute"),
                (e.style.top = "auto"),
                (e.style.bottom = "0"),
                (e.style.width = s + "px"))
              : ((e.style.position = "unset"),
                (e.style.top = "unset"),
                (e.style.bottom = "unset"),
                (e.style.width = "auto"),
                e.classList.remove("is_stuck"),
                "placeholder" === e.nextElementSibling.id &&
                  e.nextElementSibling.remove());
        }
        return (
          (0, a.useEffect)(() => {
            s(!0);
          }, []),
          (0, a.useEffect)(
            () => (
              window.addEventListener("scroll", t),
              () => window.removeEventListener("scroll", t)
            ),
            []
          ),
          (0, i.jsx)("section", {
            className: "team-crev section-padding pb-0 bord-thin-bottom",
            children: (0, i.jsx)("div", {
              className: "container-fluid rest",
              children: (0, i.jsx)("div", {
                className: "row",
                children: (0, i.jsxs)("div", {
                  className: "col-12",
                  style: { position: "relative" },
                  children: [
                    (0, i.jsx)("div", {
                      className: "sec-head-lg text-center text-u mb-80",
                      id: "sticky_item",
                      children: (0, i.jsx)("h2", { children: "Team" }),
                    }),
                    (0, i.jsx)("div", {
                      className: "swiper4",
                      children:
                        e &&
                        (0, i.jsx)(l.tq, {
                          ...c,
                          id: "content-carousel-container-unq-team",
                          className: "swiper-container",
                          children: n.map((e) =>
                            (0, i.jsx)(
                              l.o5,
                              {
                                children: (0, i.jsxs)("div", {
                                  className: "item",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "img",
                                      children: (0, i.jsx)("img", {
                                        src: e.image,
                                        alt: "",
                                      }),
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: "info",
                                      children: [
                                        (0, i.jsx)("div", {
                                          className: "main-marq team-position",
                                          children: (0, i.jsxs)("div", {
                                            className:
                                              "slide-har st1 non-strok",
                                            children: [
                                              (0, i.jsx)("div", {
                                                className: "box",
                                                children: [, , , , ,]
                                                  .fill()
                                                  .map((s, t) =>
                                                    (0, i.jsx)(
                                                      "div",
                                                      {
                                                        className: "item",
                                                        children: (0, i.jsx)(
                                                          "h4",
                                                          {
                                                            children:
                                                              e.position,
                                                          }
                                                        ),
                                                      },
                                                      t
                                                    )
                                                  ),
                                              }),
                                              (0, i.jsx)("div", {
                                                className: "box",
                                                children: [, , , , ,]
                                                  .fill()
                                                  .map((s, t) =>
                                                    (0, i.jsx)(
                                                      "div",
                                                      {
                                                        className: "item",
                                                        children: (0, i.jsx)(
                                                          "h4",
                                                          {
                                                            children:
                                                              e.position,
                                                          }
                                                        ),
                                                      },
                                                      t
                                                    )
                                                  ),
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, i.jsx)("div", {
                                          className: "main-marq team-name",
                                          children: (0, i.jsxs)("div", {
                                            className:
                                              "slide-har st1 non-strok",
                                            children: [
                                              (0, i.jsx)("div", {
                                                className: "box",
                                                children: [, , , , ,]
                                                  .fill()
                                                  .map((s, t) =>
                                                    (0, i.jsx)(
                                                      "div",
                                                      {
                                                        className: "item",
                                                        children: (0, i.jsx)(
                                                          "h4",
                                                          { children: e.name }
                                                        ),
                                                      },
                                                      t
                                                    )
                                                  ),
                                              }),
                                              (0, i.jsx)("div", {
                                                className: "box",
                                                children: [, , , , ,]
                                                  .fill()
                                                  .map((s, t) =>
                                                    (0, i.jsx)(
                                                      "div",
                                                      {
                                                        className: "item",
                                                        children: (0, i.jsx)(
                                                          "h4",
                                                          { children: e.name }
                                                        ),
                                                      },
                                                      t
                                                    )
                                                  ),
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
                  ],
                }),
              }),
            }),
          })
        );
      };
    },
  },
]);
