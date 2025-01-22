"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3790],
  {
    8366: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return a;
        },
      });
      function a() {
        let s = document.querySelectorAll("[data-background]");
        s.length > 0 &&
          s.forEach((s) => {
            let e = s.dataset.background;
            s.style.backgroundImage = "url('".concat(e, "')");
          });
      }
    },
    7390: function (s, e, i) {
      var a = i(5893);
      i(7294),
        (e.Z = function () {
          function s(s) {
            document.querySelectorAll(".accordion-info").forEach((s) => {
              s.classList.remove("active"),
                (s.style.maxHeight = 0),
                s.parentElement.classList.remove("active");
            }),
              s.currentTarget.parentElement.classList.add("active"),
              (s.currentTarget.nextElementSibling.style.maxHeight = "300px"),
              s.currentTarget.nextElementSibling.classList.add("active");
          }
          return (0, a.jsx)("section", {
            className: "intro-corp section-padding",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-lg-5 valign md-mb50",
                    children: (0, a.jsxs)("div", {
                      className: "imgs mb-80",
                      children: [
                        (0, a.jsx)("div", {
                          className: "img1",
                          children: (0, a.jsx)("img", {
                            src: "/dark/assets/imgs/arch/intro/sq1.jpg",
                            alt: "",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "img2",
                          children: (0, a.jsx)("img", {
                            src: "/dark/assets/imgs/arch/intro/sq2.jpg",
                            alt: "",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-lg-6 offset-lg-1 valign",
                    children: (0, a.jsxs)("div", {
                      className: "cont",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text",
                          children: (0, a.jsx)("h3", {
                            children:
                              "We create with passion architecture design that has great impact.",
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
                                  onClick: s,
                                  children: [
                                    (0, a.jsx)("h6", {
                                      className: "fz-18",
                                      children: "Building the Future Cities",
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
                                  onClick: s,
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
                                  onClick: s,
                                  children: [
                                    (0, a.jsx)("h6", {
                                      className: "fz-18",
                                      children: "Award-Winning Architecture",
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
    6096: function (s, e, i) {
      var a = i(5893),
        l = i(7294),
        c = i(8366);
      e.Z = function (s) {
        let { lightMode: e } = s;
        return (
          (0, l.useEffect)(() => {
            (0, c.Z)();
          }, []),
          (0, a.jsx)("div", {
            className: "bg-pattern bg-img",
            "data-background": "/".concat(
              e ? "light" : "dark",
              "/assets/imgs/patterns/bg-lines-1.svg"
            ),
          })
        );
      };
    },
    9794: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var a = i(5893);
      i(7294);
      var l = i(1664),
        c = i.n(l),
        n = JSON.parse(
          '[{"id":1,"title":"Free advertising for your online business.","cover":"/dark/assets/imgs/arch/blog/1.jpg","date":"august 6, 2021","tags":["Marketing","Design"]},{"id":2,"title":"Business meeting 2023 in San Francisco.","cover":"/dark/assets/imgs/arch/blog/2.jpg","date":"august 6, 2021","tags":["Marketing","Design"]}]'
        ),
        r = function () {
          return (0, a.jsx)("section", {
            className: "blog-list-half crev section-padding sub-bg",
            children: (0, a.jsxs)("div", {
              className: "container mb-30",
              children: [
                (0, a.jsxs)("div", {
                  className: "sec-leter-head mb-80",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "d-flex align-items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "leter",
                          children: (0, a.jsx)("h4", { children: "B" }),
                        }),
                        (0, a.jsx)("div", { className: "line" }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "title",
                      children: (0, a.jsx)("h6", {
                        className: "sub-title",
                        children: "Our Blog.",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "row",
                  children: n.map((s) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "col-lg-6",
                        children: (0, a.jsx)("div", {
                          className: "item md-mb80",
                          children: (0, a.jsxs)("div", {
                            className: "row rest",
                            children: [
                              (0, a.jsx)("div", {
                                className: "col-md-6",
                                children: (0, a.jsx)("div", {
                                  className: "img",
                                  children: (0, a.jsx)("img", {
                                    src: s.cover,
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
                                      children: s.date,
                                    }),
                                    (0, a.jsx)("h5", {
                                      children: (0, a.jsx)(c(), {
                                        href: "/dark/blog-details",
                                        children: s.title,
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "tags colorbg mt-15",
                                      children: s.tags.map((s) =>
                                        (0, a.jsx)(
                                          c(),
                                          {
                                            href: "/dark/blog-half-img",
                                            children: s,
                                          },
                                          s
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
    3557: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return t;
        },
      });
      var a = i(5893),
        l = i(7294),
        c = i(719),
        n = JSON.parse(
          '["/assets/imgs/brands/01.png","/assets/imgs/brands/02.png","/assets/imgs/brands/03.png","/assets/imgs/brands/04.png","/assets/imgs/brands/05.png","/assets/imgs/brands/03.png"]'
        );
      let r = {
        slidesPerView: 5,
        loop: !0,
        spaceBetween: 40,
        speed: 1e3,
        breakpoints: {
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        },
      };
      var t = function (s) {
        let { lightMode: e } = s,
          [i, t] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            t(!0);
          }, []),
          (0, a.jsx)("section", {
            className: "clients-carso section-padding pt-0",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsx)("div", {
                className: "row justify-content-center",
                children: (0, a.jsx)("div", {
                  className: "col-lg-11",
                  children: (0, a.jsx)("div", {
                    className: "swiper5",
                    children: (0, a.jsx)("div", {
                      id: "content-carousel-container-unq-clients",
                      className: "swiper-container",
                      "data-swiper": "container",
                      children:
                        i &&
                        (0, a.jsx)(c.tq, {
                          ...r,
                          className: "swiper-container",
                          id: "content-carousel-container-unq-clients",
                          children: n.map((s) =>
                            (0, a.jsx)(
                              c.o5,
                              {
                                children: (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsx)("div", {
                                    className: "img icon-img-100",
                                    children: (0, a.jsx)("img", {
                                      src: ""
                                        .concat(e ? "/light" : "/dark", "/")
                                        .concat(s),
                                      alt: "",
                                    }),
                                  }),
                                }),
                              },
                              Math.floor(1e5 * Math.random())
                            )
                          ),
                        }),
                    }),
                  }),
                }),
              }),
            }),
          })
        );
      };
    },
    3253: function (s, e, i) {
      var a = i(5893),
        l = i(7294);
      i(7513),
        (e.Z = function (s) {
          let { lightMode: e } = s;
          return (
            (0, l.useEffect)(() => {
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
                                    className: "main-color underline",
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
                              children: (0, a.jsx)("h6", {
                                children: "Social",
                              }),
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
                                    href: "#0",
                                    children: "Twitter",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)("a", {
                                    href: "#0",
                                    children: "LinkedIn",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)("a", {
                                    href: "#0",
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
                                    "\xa9 2025 Cleverest is Proudly Powered by ",
                                    (0, a.jsx)("span", {
                                      className: "underline",
                                      children: (0, a.jsx)("a", {
                                        href: "https://cleverest.cl/",
                                        target: "_blank",
                                        children: "Cleverest",
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
        });
    },
    5964: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return x;
        },
      });
      var a = i(5893),
        l = i(7294),
        c = i(1664),
        n = i.n(c),
        r = i(719),
        t = i(8116),
        d = i(6660),
        o = i(8366),
        m = JSON.parse(
          '[{"id":1,"number":"01","background":"/dark/assets/imgs/arch/slid/3.jpg","title":"Explore <BR> The Future","text":"We developed strong relationships with contractors and specialist companies offering discounted prices."},{"id":2,"number":"02","background":"/dark/assets/imgs/arch/slid/2.jpg","title":"Dustin <BR> Villa, Spain","text":"We developed strong relationships with contractors and specialist companies offering discounted prices."},{"id":3,"number":"03","background":"/dark/assets/imgs/arch/slid/1.jpg","title":"Minimalest Architectures","text":"We developed strong relationships with contractors and specialist companies offering discounted prices."}]'
        );
      let h = {
        modules: [t.W_, t.pt, t.tl, t.VS],
        speed: 1500,
        autoplay: { delay: 5e3 },
        parallax: !0,
        loop: !0,
        onSwiper: function (s) {
          for (var e = 0; e < s.slides.length; e++)
            s.slides[e]
              .querySelector(".bg-img")
              .setAttribute("data-swiper-parallax", 0.75 * s.width);
        },
        onResize: function (s) {
          s.update();
        },
        pagination: {
          el: ".slider-prlx .swiper-pagination",
          type: "fraction",
          clickable: !0,
        },
        navigation: {
          nextEl: ".slider-prlx .next-ctrl",
          prevEl: ".slider-prlx .prev-ctrl",
        },
      };
      var x = function () {
        let [s, e] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            e(!0);
          }, []),
          (0, l.useEffect)(() => {
            s && (0, o.Z)();
          }, [s]),
          (0, a.jsxs)("header", {
            className: "slider arch-slider slider-prlx",
            children: [
              s &&
                (0, a.jsx)(r.tq, {
                  ...h,
                  className: "swiper-container parallax-slider",
                  children: m.map((s) =>
                    (0, a.jsx)(
                      r.o5,
                      {
                        children: (0, a.jsx)("div", {
                          className: "bg-img valign",
                          "data-background": s.background,
                          "data-overlay-dark": "5",
                          children: (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "col-lg-7",
                                  children: (0, a.jsxs)("div", {
                                    className: "caption mt-30",
                                    children: [
                                      (0, a.jsx)("h5", {
                                        className: "main-colorbg inline",
                                        children: (0, a.jsx)("span", {
                                          children: s.number,
                                        }),
                                      }),
                                      (0, a.jsx)("h1", {
                                        children: (0, a.jsx)(d.Z, {
                                          statement: s.title,
                                        }),
                                      }),
                                      (0, a.jsx)("p", { children: s.text }),
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "col-lg-3 offset-lg-1 valign",
                                  children: (0, a.jsx)("div", {
                                    className: "ml-auto explore",
                                    children: (0, a.jsx)(n(), {
                                      href: "/dark/project-details1",
                                      children: (0, a.jsxs)("div", {
                                        className: "circle-button",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "rotate-circle fz-30 text-u",
                                            children: (0, a.jsxs)("svg", {
                                              className: "textcircle",
                                              viewBox: "0 0 500 500",
                                              children: [
                                                (0, a.jsx)("defs", {
                                                  children: (0, a.jsx)("path", {
                                                    id: "textcircle1",
                                                    d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z",
                                                  }),
                                                }),
                                                (0, a.jsx)("text", {
                                                  children: (0, a.jsx)(
                                                    "textPath",
                                                    {
                                                      xlinkHref: "#textcircle1",
                                                      textLength: "900",
                                                      children:
                                                        " Explore More - Explore More -",
                                                    }
                                                  ),
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
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      },
                      s.id
                    )
                  ),
                }),
              (0, a.jsx)("div", {
                className: "setting",
                children: (0, a.jsxs)("div", {
                  className: "controls",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                      children: (0, a.jsx)("i", {
                        className: "ion-chevron-right",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                      children: (0, a.jsx)("i", {
                        className: "ion-chevron-left",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    200: function (s, e, i) {
      var a = i(5893);
      i(7294),
        (e.Z = function () {
          return (0, a.jsx)("section", {
            className: "intro-imgs section-padding",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsxs)("div", {
                  className: "sec-leter-head mb-80",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "d-flex align-items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "leter",
                          children: (0, a.jsx)("h4", { children: "A" }),
                        }),
                        (0, a.jsx)("div", { className: "line" }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "title",
                      children: (0, a.jsx)("h6", {
                        className: "sub-title",
                        children: "About Us.",
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-3 valign",
                      children: (0, a.jsx)("div", {
                        className: "img1 to-up full-width md-mb50",
                        children: (0, a.jsx)("img", {
                          src: "/dark/assets/imgs/arch/intro/1.jpg",
                          alt: "",
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-5 valign",
                      children: (0, a.jsxs)("div", {
                        className: "cont full-width md-mb50",
                        children: [
                          (0, a.jsxs)("h3", {
                            className: "mb-15",
                            children: [
                              "Cleverest ",
                              (0, a.jsx)("br", {}),
                              " Architects studio",
                            ],
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "Through a unique combination of engineering, construction and design disciplines and expertise, Concor delivers world class infrastructure.",
                          }),
                          (0, a.jsxs)("div", {
                            className: "stauts d-flex align-items-center mt-40",
                            children: [
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "20k" }),
                                  (0, a.jsx)("p", {
                                    children: "Satisfied Clients",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "ml-auto",
                                children: [
                                  (0, a.jsx)("h4", { children: "500+" }),
                                  (0, a.jsx)("p", {
                                    children: "Projects Completed",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, a.jsx)("div", {
                        className: "img1",
                        children: (0, a.jsx)("img", {
                          src: "/dark/assets/imgs/arch/intro/2.jpg",
                          alt: "",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        });
    },
    4621: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var a = i(5893);
      i(7294);
      var l = JSON.parse(
          '[{"BH":"/dark/assets/imgs/arch/works/1.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/arch/works/3.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/arch/works/2.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/arch/works/4.jpg","ty":"2023","dt":"Branding"}]'
        ),
        c = function () {
          return (0, a.jsx)("section", {
            className: "portfolio sub-bg section-padding",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsxs)("div", {
                  className: "sec-leter-head mb-80",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "d-flex align-items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "leter",
                          children: (0, a.jsx)("h4", { children: "P" }),
                        }),
                        (0, a.jsx)("div", { className: "line" }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "title",
                      children: (0, a.jsx)("h6", {
                        className: "sub-title",
                        children: "Portfolio.",
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "row justify-content-center",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-5",
                      children: (0, a.jsxs)("div", {
                        className: "item md-mb80",
                        children: [
                          (0, a.jsx)("div", {
                            className: "o-hidden",
                            children: (0, a.jsx)("div", {
                              className: "img imago wow",
                              children: (0, a.jsx)("img", {
                                src: l[0].BH,
                                alt: "",
                              }),
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "cont mt-30 d-flex",
                            children: [
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h6", {
                                    className: "line-height-1",
                                    children: "From our gallery",
                                  }),
                                  (0, a.jsx)("p", { children: l[0].dt }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "ml-auto",
                                children: (0, a.jsxs)("p", {
                                  className: "fz-14",
                                  children: ["\xa9 ", l[0].ty],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-6 valign",
                      children: (0, a.jsx)("div", {
                        className: "item full-width",
                        children: (0, a.jsx)("div", {
                          className: "row justify-content-center",
                          children: (0, a.jsxs)("div", {
                            className: "col-lg-8",
                            children: [
                              (0, a.jsx)("div", {
                                className: "o-hidden",
                                children: (0, a.jsx)("div", {
                                  className: "img imago wow",
                                  children: (0, a.jsx)("img", {
                                    src: l[1].BH,
                                    alt: "",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "cont mt-30 d-flex",
                                children: [
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "line-height-1",
                                        children: "From our gallery",
                                      }),
                                      (0, a.jsx)("p", { children: l[1].dt }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "ml-auto",
                                    children: (0, a.jsxs)("p", {
                                      className: "fz-14",
                                      children: ["\xa9 ", l[1].ty],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-6 valign",
                      children: (0, a.jsx)("div", {
                        className: "item mt-80 full-width",
                        children: (0, a.jsx)("div", {
                          className: "row justify-content-center",
                          children: (0, a.jsxs)("div", {
                            className: "col-lg-9",
                            children: [
                              (0, a.jsx)("div", {
                                className: "o-hidden",
                                children: (0, a.jsx)("div", {
                                  className: "img imago wow",
                                  children: (0, a.jsx)("img", {
                                    src: l[2].BH,
                                    alt: "",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "cont mt-30 d-flex",
                                children: [
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "line-height-1",
                                        children: "From our gallery",
                                      }),
                                      (0, a.jsx)("p", { children: l[2].dt }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "ml-auto",
                                    children: (0, a.jsxs)("p", {
                                      className: "fz-14",
                                      children: ["\xa9 ", l[2].ty],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-6",
                      children: (0, a.jsx)("div", {
                        className: "item mt-80",
                        children: (0, a.jsx)("div", {
                          className: "row justify-content-center",
                          children: (0, a.jsxs)("div", {
                            className: "col-lg-9",
                            children: [
                              (0, a.jsx)("div", {
                                className: "o-hidden",
                                children: (0, a.jsx)("div", {
                                  className: "img imago wow",
                                  children: (0, a.jsx)("img", {
                                    src: l[3].BH,
                                    alt: "",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "cont mt-30 d-flex",
                                children: [
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "line-height-1",
                                        children: "From our gallery",
                                      }),
                                      (0, a.jsx)("p", { children: l[3].dt }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "ml-auto",
                                    children: (0, a.jsxs)("p", {
                                      className: "fz-14",
                                      children: ["\xa9 ", l[3].ty],
                                    }),
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
              ],
            }),
          });
        };
    },
    192: function (s, e, i) {
      var a = i(5893),
        l = i(7294),
        c = i(8366);
      e.Z = function () {
        return (
          (0, l.useEffect)(() => {
            (0, c.Z)();
          }, []),
          (0, a.jsx)("section", {
            className: "sec-img section-padding bg-img",
            "data-background": "/dark/assets/imgs/arch/slid/2.jpg",
            "data-overlay-dark": "5",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, a.jsxs)("div", {
                        className: "expr-box md-mb50",
                        children: [
                          (0, a.jsxs)("h6", {
                            className: "text-u fz-16 mb-40",
                            children: [
                              "Europe's Leading ",
                              (0, a.jsx)("br", {}),
                              " Architectural",
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsxs)("p", {
                                className: "fz-14 fw-600 line-height-1 mb-15",
                                children: [
                                  "Years ",
                                  (0, a.jsx)("br", {}),
                                  " Experience",
                                ],
                              }),
                              (0, a.jsx)("h2", {
                                className: "fz-80 line-height-1",
                                children: "25",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-4 offset-lg-1",
                      children: (0, a.jsxs)("div", {
                        className: "cont",
                        children: [
                          (0, a.jsxs)("h3", {
                            className: "text-u",
                            children: [
                              "Design With ",
                              (0, a.jsx)("span", {
                                className: "main-color",
                                children: "Community",
                              }),
                              " ",
                              (0, a.jsx)("br", {}),
                              " In Mind.",
                            ],
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "Through a unique combination of engineering, construction and design disciplines and expertise, Concor delivers world className infrastructure.",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "row mt-100",
                  children: (0, a.jsx)("div", {
                    className: "col-lg-7 offset-lg-5",
                    children: (0, a.jsx)("div", {
                      className: "numbers",
                      children: (0, a.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, a.jsx)("div", {
                            className: "col-md-3 col-6",
                            children: (0, a.jsxs)("div", {
                              className: "item sm-mb50",
                              children: [
                                (0, a.jsx)("h4", {
                                  className: "fz-40",
                                  children: "450",
                                }),
                                (0, a.jsx)("h6", {
                                  className: "sub-title ls2",
                                  children: "Projects",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-md-3 col-6",
                            children: (0, a.jsxs)("div", {
                              className: "item sm-mb50",
                              children: [
                                (0, a.jsx)("h4", {
                                  className: "fz-40",
                                  children: "70",
                                }),
                                (0, a.jsx)("h6", {
                                  className: "sub-title ls2",
                                  children: "Clients",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-md-3 col-6",
                            children: (0, a.jsxs)("div", {
                              className: "item",
                              children: [
                                (0, a.jsx)("h4", {
                                  className: "fz-40",
                                  children: "20",
                                }),
                                (0, a.jsx)("h6", {
                                  className: "sub-title ls2",
                                  children: "Countries",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-md-3 col-6",
                            children: (0, a.jsxs)("div", {
                              className: "item",
                              children: [
                                (0, a.jsx)("h4", {
                                  className: "fz-40",
                                  children: "7",
                                }),
                                (0, a.jsx)("h6", {
                                  className: "sub-title ls2",
                                  children: "Awards",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    9526: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var a = i(5893);
      i(7294);
      var l = JSON.parse(
          '[{"id":1,"image":"/assets/imgs/serv-icons/0.png","title":"Architecture","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus."},{"id":2,"image":"/assets/imgs/serv-icons/1.png","title":"Planning","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus."},{"id":3,"image":"/assets/imgs/serv-icons/2.png","title":"Interior design","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus."},{"id":4,"image":"/assets/imgs/serv-icons/0.png","title":"Landscape","text":"Praesent faucibus nisl sit amet nulla pretium a sed purus."}]'
        ),
        c = function (s) {
          let { lightMode: e } = s;
          return (0, a.jsx)("section", {
            className: "serv-box section-padding pt-0",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsxs)("div", {
                  className: "sec-leter-head mb-80",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "d-flex align-items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "leter",
                          children: (0, a.jsx)("h4", { children: "S" }),
                        }),
                        (0, a.jsx)("div", { className: "line" }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "title",
                      children: (0, a.jsx)("h6", {
                        className: "sub-title",
                        children: "Services.",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "row",
                  children: l.map((s) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "col-lg-3 col-md-6",
                        children: (0, a.jsxs)("div", {
                          className: "serv-item md-mb50",
                          children: [
                            (0, a.jsx)("div", {
                              className: "icon-img-60 mb-40",
                              children: (0, a.jsx)("img", {
                                src: "/"
                                  .concat(e ? "light" : "dark")
                                  .concat(s.image),
                                alt: "",
                              }),
                            }),
                            (0, a.jsx)("h5", {
                              className: "mb-20",
                              children: s.title,
                            }),
                            (0, a.jsx)("p", { children: s.text }),
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
    8874: function (s, e, i) {
      i.d(e, {
        Z: function () {
          return d;
        },
      });
      var a = i(5893),
        l = i(7294),
        c = i(719),
        n = i(8116),
        r = JSON.parse(
          '[{"id":1,"picture":"/dark/assets/imgs/testim/1.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."},{"id":2,"picture":"/dark/assets/imgs/testim/2.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."},{"id":3,"picture":"/dark/assets/imgs/testim/3.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."},{"id":4,"picture":"/dark/assets/imgs/testim/4.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."}]'
        );
      let t = {
        modules: [n.W_, n.tl],
        slidesPerView: 1,
        loop: !0,
        spaceBetween: 30,
        speed: 1e3,
        pagination: { el: ".swiper-pagination", clickable: !0 },
        navigation: {
          nextEl: ".testim-controls .swiper-button-next",
          prevEl: ".testim-controls .swiper-button-prev",
        },
      };
      var d = function (s) {
        let { lightMode: e } = s,
          [i, n] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            n(!0);
          }, []),
          (0, a.jsx)("section", {
            className: "testim-clasic section-padding ".concat(
              e ? "light" : ""
            ),
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsx)("div", {
                className: "row",
                children: (0, a.jsx)("div", {
                  className: "col-lg-12",
                  children: (0, a.jsxs)("div", {
                    className: "testim",
                    children: [
                      (0, a.jsx)("div", {
                        className: "testim-swiper",
                        children:
                          i &&
                          (0, a.jsx)(c.tq, {
                            ...t,
                            id: "content-carousel-container-unq-testim",
                            className: "swiper-container",
                            children: r.map((s) =>
                              (0, a.jsx)(
                                c.o5,
                                {
                                  children: (0, a.jsx)("div", {
                                    className: "item",
                                    children: (0, a.jsxs)("div", {
                                      className: "row",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "col-md-4",
                                          children: (0, a.jsx)("div", {
                                            className: "author-info valign",
                                            children: (0, a.jsxs)("div", {
                                              className: "full-width",
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "img circle-120 m-auto mb-30",
                                                  children: (0, a.jsx)("img", {
                                                    src: s.picture,
                                                    alt: "",
                                                    className: "circle-img",
                                                  }),
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className: "info",
                                                  children: [
                                                    (0, a.jsx)("h6", {
                                                      children: s.name,
                                                    }),
                                                    (0, a.jsx)("p", {
                                                      className: "sub-title",
                                                      children: s.position,
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "arrow main-bg",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "col-md-8",
                                          children: (0, a.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className:
                                                  "mb-30 icon-img-80 opacity-1",
                                                children: (0, a.jsx)("img", {
                                                  src: "/".concat(
                                                    e ? "light" : "dark",
                                                    "/assets/imgs/svg-assets/quote.png"
                                                  ),
                                                  alt: "",
                                                }),
                                              }),
                                              (0, a.jsx)("h4", {
                                                className: "fw-300",
                                                children: s.content,
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
                      (0, a.jsx)("div", {
                        className: "swiper-controls",
                        children: (0, a.jsx)("div", {
                          className: "row",
                          children: (0, a.jsx)("div", {
                            className: "col-md-8 offset-md-4",
                            children: (0, a.jsx)("div", {
                              className: "arrows-carsouel testim-controls",
                              children: (0, a.jsxs)("div", {
                                className: "swiper-controls",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "swiper-button-prev",
                                    children: (0, a.jsx)("span", {
                                      className: "left",
                                      children: (0, a.jsx)("img", {
                                        src: "/".concat(
                                          e ? "light" : "dark",
                                          "/assets/imgs/svg-assets/arrow-right-top.svg"
                                        ),
                                        alt: "",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "swiper-pagination",
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "swiper-button-next",
                                    children: (0, a.jsx)("span", {
                                      className: "right",
                                      children: (0, a.jsx)("img", {
                                        src: "/".concat(
                                          e ? "light" : "dark",
                                          "/assets/imgs/svg-assets/arrow-right-top.svg"
                                        ),
                                        alt: "",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          })
        );
      };
    },
    6660: function (s, e, i) {
      var a = i(5893);
      e.Z = function (s) {
        let { statement: e } = s,
          i = e.split("<BR>");
        return i.map((s, e) =>
          (0, a.jsxs)(
            "span",
            {
              style: { display: "block" },
              children: [s, e !== i.length - 1 ? (0, a.jsx)("br", {}) : null],
            },
            e
          )
        );
      };
    },
  },
]);
