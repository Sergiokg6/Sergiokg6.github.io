(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5840],
  {
    6396: function (e, s, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index_original",
        function () {
          return i(3456);
        },
      ]);
    },
    8104: function (e, s, i) {
      "use strict";
      function a(e) {
        let { preview: s, lightMode: i } = e,
          a = document.querySelector(
            'link[href="/landing-preview/css/preview-style.css"]'
          ),
          r = document.querySelector('link[href="/dark/assets/css/style.css"]'),
          l = document.querySelector(
            'link[href="/light/assets/css/style.css"]'
          ),
          n = document.querySelector(
            'link[href="/dark/assets/css/plugins.css"]'
          ),
          d = document.querySelector(
            'link[href="/light/assets/css/plugins.css"]'
          );
        if (i && !s) {
          document.querySelector("noscript").before(d),
            document.querySelector("noscript").before(l);
          let e = document.querySelectorAll(
            'link[href="/light/assets/css/plugins.css"]'
          );
          e.length > 1 && e[0].remove();
          let s = document.querySelectorAll(
            'link[href="/light/assets/css/style.css"]'
          );
          s.length > 1 && s[0].remove();
        }
        if (!i && !s) {
          document.querySelector("noscript").before(n),
            document.querySelector("noscript").before(r);
          let e = document.querySelectorAll(
            'link[href="/dark/assets/css/plugins.css"]'
          );
          e.length > 1 && e[0].remove();
          let s = document.querySelectorAll(
            'link[href="/dark/assets/css/style.css"]'
          );
          s.length > 1 && s[0].remove();
        }
        s && a
          ? (document.head.append(a), l && l.remove(), d && d.remove())
          : !s && a && a.remove();
      }
      i.d(s, {
        Z: function () {
          return a;
        },
      });
    },
    8366: function (e, s, i) {
      "use strict";
      function a() {
        let e = document.querySelectorAll("[data-background]");
        e.length > 0 &&
          e.forEach((e) => {
            let s = e.dataset.background;
            e.style.backgroundImage = "url('".concat(s, "')");
          });
      }
      i.d(s, {
        Z: function () {
          return a;
        },
      });
    },
    4576: function (e, s, i) {
      "use strict";
      function a(e) {
        let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.8,
          i = arguments.length > 2 ? arguments[2] : void 0,
          a = document.querySelector(e),
          r = a.getAttribute("data-background");
        r || (r = window.getComputedStyle(a).backgroundImage);
        let l = a.getBoundingClientRect().top * s;
        (a.style.backgroundImage = 'url("'.concat(r, '")')),
          (a.style.backgroundSize = "cover"),
          (a.style.backgroundRepeat = "no-repeat"),
          (a.style.backgroundAttachment = "fixed"),
          (a.style.backgroundPosition = "center ".concat(
            void 0 !== i ? i : l,
            "px"
          )),
          window.addEventListener("scroll", () => {
            (l = a.getBoundingClientRect().top * s),
              (a.style.backgroundPosition = "center ".concat(l, "px"));
          });
      }
      i.d(s, {
        Z: function () {
          return a;
        },
      });
    },
    6054: function (e, s, i) {
      "use strict";
      var a = i(5893),
        r = i(7294);
      s.Z = function () {
        return (
          (0, r.useEffect)(() => {
            let e = document.querySelectorAll(".hover-this"),
              s = document.querySelector(".cursor"),
              i = function (e) {
                let s = this.querySelector(".hover-anim"),
                  { offsetX: i, offsetY: a } = e,
                  { offsetWidth: r, offsetHeight: l } = this;
                (s.style.transform = "translate("
                  .concat((i / r) * 50 - 25, "px, ")
                  .concat((a / l) * 50 - 25, "px)")),
                  "mouseleave" === e.type && (s.style.transform = "");
              },
              a = (e) => {
                let { clientX: i, clientY: a } = e;
                (s.style.left = i + "px"), (s.style.top = a + "px");
              };
            e.forEach((e) => e.addEventListener("mousemove", i)),
              e.forEach((e) => e.addEventListener("mouseleave", i)),
              window.addEventListener("mousemove", a),
              document.querySelectorAll("a, .cursor-pointer").forEach((e) => {
                e.addEventListener("mousemove", () => {
                  s.classList.add("cursor-active");
                }),
                  e.addEventListener("mouseleave", () => {
                    s.classList.remove("cursor-active");
                  });
              });
          }, []),
          (0, a.jsx)("div", { className: "cursor" })
        );
      };
    },
    7458: function (e, s, i) {
      "use strict";
      var a = i(5893),
        r = i(7294);
      s.Z = function () {
        return (
          (0, r.useEffect)(() => {
            let e = document.getElementById("svg"),
              s = gsap.timeline();
            s.to(
              ".loader-wrap-heading .load-text , .loader-wrap-heading .cont",
              { delay: 1.5, y: -100, opacity: 0 }
            ),
              s
                .to(e, {
                  duration: 0.5,
                  attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
                  ease: "power2.easeIn",
                })
                .to(e, {
                  duration: 0.5,
                  attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" },
                  ease: "power2.easeOut",
                }),
              s.to(".loader-wrap", { y: -1500 }),
              s.to(".loader-wrap", { zIndex: -1, display: "none" }),
              s.from("header", { y: 200 }, "-=1.5"),
              s.from(
                "header .container",
                { y: 40, opacity: 0, delay: 0.3 },
                "-=1.5"
              );
          }, []),
          (0, a.jsxs)("div", {
            className: "loader-wrap",
            children: [
              (0, a.jsx)("svg", {
                viewBox: "0 0 1000 1000",
                preserveAspectRatio: "none",
                children: (0, a.jsx)("path", {
                  id: "svg",
                  d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z",
                }),
              }),
              (0, a.jsx)("div", {
                className: "loader-wrap-heading",
                children: (0, a.jsx)("span", {
                  children: (0, a.jsxs)("h2", {
                    className: "load-text",
                    children: [
                      (0, a.jsx)("span", { children: "C" }),
                      (0, a.jsx)("span", { children: "l" }),
                      (0, a.jsx)("span", { children: "e" }),
                      (0, a.jsx)("span", { children: "v" }),
                      (0, a.jsx)("span", { children: "e" }),
                      (0, a.jsx)("span", { children: "r" }),
                      (0, a.jsx)("span", { children: "e" }),
                      (0, a.jsx)("span", { children: "s" }),
                      (0, a.jsx)("span", { children: "t" }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    4555: function (e, s, i) {
      "use strict";
      i.d(s, {
        Z: function () {
          return d;
        },
      });
      var a = i(5893),
        r = i(7294);
      let l = () => {
          let e = document.querySelector(".progress-wrap"),
            s = document.querySelector(".progress-wrap path"),
            i = s.getTotalLength(),
            a = () => {
              let e = window.pageYOffset,
                a = document.documentElement.scrollHeight - window.innerHeight;
              s.style.strokeDashoffset = i - (e * i) / a;
            };
          e &&
            ((s.style.transition = s.style.WebkitTransition = "none"),
            (s.style.strokeDasharray = i + " " + i),
            (s.style.strokeDashoffset = i),
            s.getBoundingClientRect(),
            (s.style.transition = s.style.WebkitTransition =
              "stroke-dashoffset 10ms linear"),
            a(),
            window.addEventListener("scroll", a),
            window.addEventListener("scroll", function () {
              window.pageYOffset > 150
                ? e.classList.add("active-progress")
                : document
                    .querySelector(".progress-wrap")
                    .classList.remove("active-progress");
            }),
            e.addEventListener("click", function (e) {
              return (
                e.preventDefault(),
                window.scrollTo({ top: 0, behavior: "smooth" }),
                !1
              );
            }));
        },
        n = () => (
          (0, r.useEffect)(() => {
            l();
          }, []),
          (0, a.jsx)("div", {
            className: "progress-wrap cursor-pointer",
            children: (0, a.jsx)("svg", {
              className: "progress-circle svg-content",
              width: "100%",
              height: "100%",
              viewBox: "-1 -1 102 102",
              children: (0, a.jsx)("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",
              }),
            }),
          })
        );
      var d = n;
    },
    3456: function (e, s, i) {
      "use strict";
      i.r(s),
        i.d(s, {
          default: function () {
            return P;
          },
        });
      var a = i(5893),
        r = i(7294),
        l = i(9008),
        n = i.n(l),
        d = i(7458),
        t = i(6054),
        o = i(4555),
        c = i(8104);
      let m = (e) => {
        let { children: s } = e;
        return (
          (0, r.useEffect)(() => {
            (0, c.Z)({ preview: !0 });
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(n(), {
                children: (0, a.jsx)("link", {
                  rel: "stylesheet",
                  href: "/landing-preview/css/preview-style.css",
                }),
              }),
              (0, a.jsx)(d.Z, {}),
              (0, a.jsx)(t.Z, {}),
              (0, a.jsx)(o.Z, {}),
              s,
            ],
          })
        );
      };
      var h = i(1664),
        g = i.n(h),
        p = i(7513),
        j = function () {
          function e() {
            let e = window.scrollY,
              s = document.querySelector(".navbar");
            e > 300
              ? s.classList.add("nav-scroll")
              : s.classList.remove("nav-scroll");
          }
          function s(e) {
            e.currentTarget
              .querySelector(".dropdown-menu")
              .classList.add("show");
          }
          function i(e) {
            e.currentTarget
              .querySelector(".dropdown-menu")
              .classList.remove("show");
          }
          function l(e) {
            e.currentTarget
              .querySelector(".dropdown-side")
              .classList.add("show");
          }
          function n(e) {
            e.currentTarget
              .querySelector(".dropdown-side")
              .classList.remove("show");
          }
          return (
            (0, r.useEffect)(
              () => (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              ),
              []
            ),
            (0, a.jsx)("nav", {
              className: "navbar navbar-expand-lg static",
              children: (0, a.jsxs)("div", {
                className: "container",
                children: [
                  (0, a.jsx)("a", {
                    className: "logo icon-img-100",
                    href: "#",
                    children: (0, a.jsx)("img", {
                      src: "/dark/assets/imgs/logo-light.png",
                      alt: "logo",
                    }),
                  }),
                  (0, a.jsx)("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    onClick: function () {
                      document
                        .querySelector(".navbar .navbar-collapse")
                        .classList.toggle("show");
                    },
                    children: (0, a.jsx)("span", {
                      className: "icon-bar",
                      children: (0, a.jsx)("i", { className: "fas fa-bars" }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "collapse navbar-collapse justify-content-center",
                    id: "navbarSupportedContent",
                    children: (0, a.jsxs)("ul", {
                      className: "navbar-nav",
                      children: [
                        (0, a.jsxs)("li", {
                          className: "nav-item dropdown",
                          onMouseMove: s,
                          onMouseLeave: i,
                          children: [
                            (0, a.jsx)("a", {
                              className: "nav-link dropdown-toggle",
                              "data-toggle": "dropdown",
                              href: "#",
                              role: "button",
                              "aria-haspopup": "true",
                              "aria-expanded": "false",
                              children: (0, a.jsx)("span", {
                                className: "rolling-text",
                                children: "Home",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "dropdown-menu mega-menu",
                              children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsxs)("div", {
                                  className: "row",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "col-lg-3",
                                      children: (0, a.jsxs)("div", {
                                        className: "clumn",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: "title",
                                            children: (0, a.jsx)("h6", {
                                              className: "sub-title ls1",
                                              children: "Home Dark",
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: "links",
                                            children: [
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/home-main",
                                                children: "Main Home",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/home-corporate",
                                                children: "Corporate Business",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/home-onepage",
                                                children: "Home One page",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/home-digital-agency",
                                                children: "Digital Agency",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/home-freelancer",
                                                children: "Freelancer",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/home-marketing-agency",
                                                children: "Marketing Agency",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/home-creative-agency",
                                                children: "Creative Agency",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/home-startup",
                                                children: "Startup Bussines",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/home-architecture",
                                                children: "Architecture",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "col-lg-3",
                                      children: (0, a.jsxs)("div", {
                                        className: "clumn",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: "title",
                                            children: (0, a.jsx)("h6", {
                                              className: "sub-title ls1",
                                              children: "Home Light",
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: "links",
                                            children: [
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/home-main",
                                                children: "Main Home",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/home-corporate",
                                                children: "Corporate Business",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/home-onepage",
                                                children: "Home One page",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/home-digital-agency",
                                                children: "Digital Agency",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/home-freelancer",
                                                children: "Freelancer",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/home-marketing-agency",
                                                children: "Marketing Agency",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/home-creative-agency",
                                                children: "Creative Agency",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/home-startup",
                                                children: "Startup Bussines",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/home-architecture",
                                                children: "Architecture",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "col-lg-3",
                                      children: (0, a.jsxs)("div", {
                                        className: "clumn",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: "title",
                                            children: (0, a.jsx)("h6", {
                                              className: "sub-title ls1",
                                              children: "Showcases",
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: "links",
                                            children: [
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/showcase-parallax-slider",
                                                children: "Parallax Slider",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/showcase-frame-slider",
                                                children: "Frame Slider",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/showcase-circle-slider",
                                                children: "Circle Slider",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/showcase-carousel",
                                                children: "Showcase Carousel",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/showcase-interactive-center-horizontal",
                                                children: "Interactive Links1",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/showcase-interactive-center",
                                                children: "Interactive Links2",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/dark/showcase-parallax",
                                                children: "Vertical Parallax",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "col-lg-3",
                                      children: (0, a.jsxs)("div", {
                                        className: "clumn",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: "title",
                                            children: (0, a.jsx)("h6", {
                                              className: "sub-title ls1",
                                              children: "Showcases Light",
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: "links",
                                            children: [
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/showcase-parallax-slider",
                                                children: "Parallax Slider",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/showcase-carousel",
                                                children: "Showcase Carousel",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/showcase-frame-slider",
                                                children: "Frame Slider",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/showcase-circle-slider",
                                                children: "Circle Slider",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/showcase-interactive-center-horizontal",
                                                children: "Interactive Links1",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/showcase-interactive-center",
                                                children: "Interactive Links2",
                                              }),
                                              (0, a.jsx)(g(), {
                                                className: "dropdown-item",
                                                href: "/light/showcase-parallax",
                                                children: "Vertical Parallax",
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
                        (0, a.jsxs)("li", {
                          className: "nav-item dropdown",
                          onMouseMove: s,
                          onMouseLeave: i,
                          children: [
                            (0, a.jsx)("a", {
                              className: "nav-link dropdown-toggle",
                              "data-toggle": "dropdown",
                              href: "#",
                              role: "button",
                              "aria-haspopup": "true",
                              "aria-expanded": "false",
                              children: (0, a.jsx)("span", {
                                className: "rolling-text",
                                children: "Pages",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "dropdown-menu",
                              children: [
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/page-about",
                                  children: "About",
                                }),
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/page-services",
                                  children: "Services",
                                }),
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/page-team",
                                  children: "Our Team",
                                }),
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/page-contact",
                                  children: "Contact Us",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("li", {
                          className: "nav-item dropdown",
                          onMouseMove: s,
                          onMouseLeave: i,
                          children: [
                            (0, a.jsx)("a", {
                              className: "nav-link dropdown-toggle",
                              "data-toggle": "dropdown",
                              href: "#",
                              role: "button",
                              "aria-haspopup": "true",
                              "aria-expanded": "false",
                              children: (0, a.jsx)("span", {
                                className: "rolling-text",
                                children: "Portfolio",
                              }),
                            }),
                            (0, a.jsxs)("ul", {
                              className: "dropdown-menu",
                              children: [
                                (0, a.jsxs)("li", {
                                  className: "dropdown-item",
                                  onMouseMove: l,
                                  onMouseLeave: n,
                                  children: [
                                    (0, a.jsxs)("a", {
                                      href: "#0",
                                      children: [
                                        "Classic Grid ",
                                        (0, a.jsx)("i", {
                                          className:
                                            "fas fa-angle-right icon-arrow",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("ul", {
                                      className: "dropdown-side",
                                      children: [
                                        (0, a.jsx)("li", {
                                          children: (0, a.jsx)(g(), {
                                            className: "dropdown-item",
                                            href: "/dark/portfolio-grid-2",
                                            children: "Grid 2 Columns",
                                          }),
                                        }),
                                        (0, a.jsx)("li", {
                                          children: (0, a.jsx)(g(), {
                                            className: "dropdown-item",
                                            href: "/dark/portfolio-grid-3",
                                            children: "Grid 3 Columns",
                                          }),
                                        }),
                                        (0, a.jsx)("li", {
                                          children: (0, a.jsx)(g(), {
                                            className: "dropdown-item",
                                            href: "/dark/portfolio-grid-4",
                                            children: "Grid 4 Columns",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("li", {
                                  className: "dropdown-item",
                                  onMouseMove: l,
                                  onMouseLeave: n,
                                  children: [
                                    (0, a.jsxs)("a", {
                                      href: "#0",
                                      children: [
                                        "Masonry ",
                                        (0, a.jsx)("i", {
                                          className:
                                            "fas fa-angle-right icon-arrow",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("ul", {
                                      className: "dropdown-side",
                                      children: [
                                        (0, a.jsx)("li", {
                                          children: (0, a.jsx)(g(), {
                                            className: "dropdown-item",
                                            href: "/dark/portfolio-masonry-2",
                                            children: "Masonry 2 Columns",
                                          }),
                                        }),
                                        (0, a.jsx)("li", {
                                          children: (0, a.jsx)(g(), {
                                            className: "dropdown-item",
                                            href: "/dark/portfolio-masonry-3",
                                            children: "Masonry 3 Columns",
                                          }),
                                        }),
                                        (0, a.jsx)("li", {
                                          children: (0, a.jsx)(g(), {
                                            className: "dropdown-item",
                                            href: "/dark/portfolio-masonry-4",
                                            children: "Masonry 4 Columns",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(g(), {
                                    className: "dropdown-item",
                                    href: "/dark/portfolio-metro",
                                    children: "Portfolio Metro",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(g(), {
                                    className: "dropdown-item",
                                    href: "/dark/portfolio-modern",
                                    children: "Modern Grid",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(g(), {
                                    className: "dropdown-item",
                                    href: "/dark/project-details1",
                                    children: "Project Details 1",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(g(), {
                                    className: "dropdown-item",
                                    href: "/dark/project-details2",
                                    children: "Project Details 2",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("li", {
                          className: "nav-item dropdown",
                          onMouseMove: s,
                          onMouseLeave: i,
                          children: [
                            (0, a.jsx)("a", {
                              className: "nav-link dropdown-toggle",
                              "data-toggle": "dropdown",
                              href: "#",
                              role: "button",
                              "aria-haspopup": "true",
                              "aria-expanded": "false",
                              children: (0, a.jsx)("span", {
                                className: "rolling-text",
                                children: "Blogs",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "dropdown-menu",
                              children: [
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/blog-classic",
                                  children: "Blog Standerd",
                                }),
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/blog-list",
                                  children: "Blog List",
                                }),
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/blog-half-img",
                                  children: "Image Out Frame",
                                }),
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/blog-details",
                                  children: "Blog Details",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("li", {
                          className: "nav-item dropdown",
                          onMouseMove: s,
                          onMouseLeave: i,
                          children: [
                            (0, a.jsx)("a", {
                              className: "nav-link dropdown-toggle",
                              "data-toggle": "dropdown",
                              href: "#",
                              role: "button",
                              "aria-haspopup": "true",
                              "aria-expanded": "false",
                              children: (0, a.jsx)("span", {
                                className: "rolling-text",
                                children: "Shop",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "dropdown-menu",
                              children: [
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/shop-list",
                                  children: "Shop List",
                                }),
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/shop-product",
                                  children: "Single Product",
                                }),
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/shop-cart",
                                  children: "Cart",
                                }),
                                (0, a.jsx)(g(), {
                                  className: "dropdown-item",
                                  href: "/dark/shop-checkout",
                                  children: "Checkout",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("li", {
                          className: "nav-item",
                          children: (0, a.jsx)(g(), {
                            className: "nav-link",
                            href: "/dark/page-contact",
                            children: (0, a.jsx)("span", {
                              className: "rolling-text",
                              children: "Contact",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "purchase",
                    children: (0, a.jsx)("a", {
                      href: p.a,
                      className: "butn butn-md butn-bord radius-30",
                      children: (0, a.jsx)("span", { children: "Purchase" }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        u = i(8366),
        x = function () {
          return (
            (0, r.useEffect)(() => {
              (0, u.Z)();
            }, []),
            (0, a.jsx)("div", {
              className: "overlay bg-img",
              "data-background": "/landing-preview/img/header/overlay.webp",
            })
          );
        },
        v = function () {
          return (0, a.jsx)("header", {
            className: "land-header valign",
            children: (0, a.jsx)("div", {
              className: "container ontop",
              children: (0, a.jsx)("div", {
                className: "row justify-content-center",
                children: (0, a.jsx)("div", {
                  className: "col-lg-8",
                  children: (0, a.jsxs)("div", {
                    className: "caption text-center",
                    children: [
                      (0, a.jsxs)("h6", {
                        className: "sub-title",
                        children: [
                          (0, a.jsx)("span", {
                            className: "icon-img-20 mr-10",
                            children: (0, a.jsx)("img", {
                              src: "/landing-preview/img/star.svg",
                              alt: "",
                            }),
                          }),
                          "Awesome Template",
                        ],
                      }),
                      (0, a.jsxs)("h1", {
                        children: [
                          "A ",
                          (0, a.jsx)("span", { children: "perfect" }),
                          " Place for Your Creative ",
                          (0, a.jsx)("span", { children: "AI Mind" }),
                          ".",
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        w = JSON.parse(
          '[{"id":0,"link":"/dark/home-main","image":"/landing-preview/img/demos/m1.jpg","title":"Home Main","mode":"dark","new":true},{"id":0.1,"link":"/light/home-main","image":"/landing-preview/img/demos/m01.jpg","title":"Home Main","mode":"light","new":true},{"id":1,"link":"/dark/home-corporate","image":"/landing-preview/img/demos/1.jpg","title":"Corporate","mode":"dark"},{"id":2,"link":"/light/home-corporate","image":"/landing-preview/img/demos/01.jpg","title":"Corporate","mode":"light"},{"id":3,"link":"/dark/home-onepage","image":"/landing-preview/img/demos/2.jpg","title":"One page","mode":"dark"},{"id":4,"link":"/light/home-onepage","image":"/landing-preview/img/demos/02.jpg","title":"One page","mode":"light"},{"id":5,"link":"/dark/home-digital-agency","image":"/landing-preview/img/demos/3.jpg","title":"Digital Agency","mode":"dark"},{"id":6,"link":"/light/home-digital-agency","image":"/landing-preview/img/demos/03.jpg","title":"Digital Agency","mode":"light"},{"id":7,"link":"/dark/home-freelancer","image":"/landing-preview/img/demos/4.jpg","title":"Freelancer","mode":"dark"},{"id":8,"link":"/light/home-freelancer","image":"/landing-preview/img/demos/04.jpg","title":"Freelancer","mode":"light"},{"id":9,"link":"/dark/home-marketing-agency","image":"/landing-preview/img/demos/5.jpg","title":"Marketing","mode":"dark"},{"id":10,"link":"/light/home-marketing-agency","image":"/landing-preview/img/demos/05.jpg","title":"Marketing","mode":"light"},{"id":11,"link":"/dark/home-creative-agency","image":"/landing-preview/img/demos/6.jpg","title":"Creative agency","mode":"dark"},{"id":12,"link":"/light/home-creative-agency","image":"/landing-preview/img/demos/06.jpg","title":"Creative agency","mode":"light"},{"id":13,"link":"/dark/home-startup","image":"/landing-preview/img/demos/7.jpg","title":"Startup Business","mode":"dark"},{"id":14,"link":"/light/home-startup","image":"/landing-preview/img/demos/07.jpg","title":"Startup Business","mode":"light"},{"id":15,"link":"/dark/home-architecture","image":"/landing-preview/img/demos/8.jpg","title":"Architecture","mode":"dark"},{"id":16,"link":"/light/home-architecture","image":"/landing-preview/img/demos/08.jpg","title":"Architecture","mode":"light"},{"id":17,"link":"/dark/showcase-parallax-slider","image":"/landing-preview/img/demos/s1.jpg","title":"Parallax Full Screen","mode":"dark"},{"id":18,"link":"/dark/showcase-carousel","image":"/landing-preview/img/demos/s4.jpg","title":"Columns Carousel","mode":"dark"},{"id":19,"link":"/light/showcase-carousel","image":"/landing-preview/img/demos/s04.jpg","title":"Columns Carousel","mode":"light"},{"id":20,"link":"/dark/showcase-circle-slider","image":"/landing-preview/img/demos/s2.jpg","title":"Showcase Circle","mode":"dark"},{"id":21,"link":"/dark/showcase-frame-slider","image":"/landing-preview/img/demos/s3.jpg","title":"Showcase Frame","mode":"dark"},{"id":22,"link":"/dark/showcase-interactive-center-horizontal","image":"/landing-preview/img/demos/s5.jpg","title":"Interactive","mode":"dark"},{"id":23,"link":"/light/showcase-interactive-center-horizontal","image":"/landing-preview/img/demos/s05.jpg","title":"Interactive","mode":"light"}]'
        ),
        f = function () {
          return (0, a.jsx)("section", {
            className: "demos section-padding pt-80",
            children: (0, a.jsx)("div", {
              className: "container-xxl",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  w.map((e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "col-lg-4 col-md-6",
                        children: (0, a.jsxs)("div", {
                          className: "item text-center",
                          children: [
                            (0, a.jsxs)(g(), {
                              href: e.link,
                              target: "_blank",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "img",
                                  children: (0, a.jsx)("img", {
                                    src: e.image,
                                    alt: "",
                                  }),
                                }),
                                (0, a.jsxs)("h6", {
                                  className: "mt-15",
                                  children: [
                                    e.title,
                                    " ",
                                    "light" === e.mode &&
                                      (0, a.jsx)("span", {
                                        children: "(Light)",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            e.new &&
                              (0, a.jsx)("span", {
                                className: "new",
                                children: "New",
                              }),
                          ],
                        }),
                      },
                      e.id
                    )
                  ),
                  (0, a.jsx)("div", {
                    className: "col-lg-4 col-md-6",
                    children: (0, a.jsxs)("div", {
                      className: "item text-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "img",
                          children: (0, a.jsx)("img", {
                            src: "/landing-preview/img/demos/more.jpg",
                            alt: "",
                          }),
                        }),
                        (0, a.jsx)("h6", {
                          className: "mt-15",
                          children: "Coming More",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        k = function () {
          return (0, a.jsx)("section", {
            className: "serv-marq skew ontop o-hidden",
            children: (0, a.jsx)("div", {
              className: "container-fluid",
              children: (0, a.jsx)("div", {
                className: "row",
                children: (0, a.jsx)("div", {
                  className: "col-12",
                  children: (0, a.jsx)("div", {
                    className: "main-marq lrg opacity-4",
                    children: (0, a.jsxs)("div", {
                      className: "slide-har st1 strok",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "box",
                          children: [
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "+ 7 AI Engineers",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "+ 7 AI Engineers",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "+ 7 AI Engineers",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "+ 7 AI Engineers",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "+ 7 AI Engineers",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "box",
                          children: [
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "+ 7 AI Engineers",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "+ 7 AI Engineers",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "+ 7 AI Engineers",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "+ 7 AI Engineers",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("h4", {
                                children: "+ 7 AI Engineers",
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
        },
        N = i(719),
        y = i(8116),
        b = JSON.parse(
          '[{"id":1,"link":"/dark/page-about","image":"/landing-preview/img/pages/1.jpg"},{"id":2,"link":"/light/page-about","image":"/landing-preview/img/pages/01.jpg"},{"id":3,"link":"/dark/page-services","image":"/landing-preview/img/pages/2.jpg"},{"id":4,"link":"/light/page-services","image":"/landing-preview/img/pages/02.jpg"},{"id":5,"link":"/dark/page-team","image":"/landing-preview/img/pages/3.jpg"},{"id":6,"link":"/light/page-team","image":"/landing-preview/img/pages/03.jpg"},{"id":7,"link":"/dark/page-contact","image":"/landing-preview/img/pages/4.jpg"},{"id":8,"link":"/light/page-contact","image":"/landing-preview/img/pages/04.jpg"},{"id":9,"link":"/dark/portfolio-classic-grid","image":"/landing-preview/img/pages/5.jpg"},{"id":10,"link":"/light/portfolio-classic-grid","image":"/landing-preview/img/pages/05.jpg"},{"id":11,"link":"/dark/portfolio-grid","image":"/landing-preview/img/pages/6.jpg"},{"id":12,"link":"/light/portfolio-grid","image":"/landing-preview/img/pages/06.jpg"},{"id":13,"link":"/dark/blog-list","image":"/landing-preview/img/pages/7.jpg"},{"id":14,"link":"/light/blog-list","image":"/landing-preview/img/pages/07.jpg"},{"id":15,"link":"/dark/blog-half-img","image":"/landing-preview/img/pages/8.jpg"},{"id":16,"link":"/light/blog-half-img","image":"/landing-preview/img/pages/08.jpg"},{"id":17,"link":"/dark/blog-details","image":"/landing-preview/img/pages/9.jpg"},{"id":18,"link":"/light/blog-details","image":"/landing-preview/img/pages/09.jpg"},{"id":19,"link":"/dark/project-details1","image":"/landing-preview/img/pages/10.jpg"},{"id":20,"link":"/light/project-details1","image":"/landing-preview/img/pages/010.jpg"}]'
        );
      let S = {
        modules: [y.pt],
        slidesPerView: 3,
        loop: !0,
        autoplay: !0,
        spaceBetween: 60,
        speed: 1e3,
      };
      var C = function () {
          let [e, s] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              s(!0);
            }, []),
            (0, a.jsx)("section", {
              className: "pages section-padding position-re ontop",
              children: (0, a.jsx)("div", {
                className: "container-fluid",
                children: (0, a.jsx)("div", {
                  className: "swiper3",
                  children:
                    e &&
                    (0, a.jsx)(N.tq, {
                      ...S,
                      children: b.map((e) =>
                        (0, a.jsx)(
                          N.o5,
                          {
                            children: (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)(g(), {
                                href: e.link,
                                children: (0, a.jsx)("img", {
                                  src: e.image,
                                  alt: "",
                                }),
                              }),
                            }),
                          },
                          e.id
                        )
                      ),
                    }),
                }),
              }),
            })
          );
        },
        L = JSON.parse(
          '[{"id":1,"link":"/dark/shop-list","image":"/landing-preview/img/shop/1.jpg","title":"Main Shop","mode":"dark","new":true},{"id":2,"link":"/light/shop-list","image":"/landing-preview/img/shop/01.jpg","title":"Main Shop","mode":"light","new":true},{"id":3,"link":"/dark/shop-product","image":"/landing-preview/img/shop/2.jpg","title":"Single Product","mode":"dark","new":true},{"id":4,"link":"/light/shop-product","image":"/landing-preview/img/shop/02.jpg","title":"Single Product","mode":"light","new":true},{"id":5,"link":"/dark/shop-cart","image":"/landing-preview/img/shop/3.jpg","title":"Cart","mode":"dark","new":true},{"id":6,"link":"/light/shop-cart","image":"/landing-preview/img/shop/03.jpg","title":"Cart","mode":"light","new":true},{"id":7,"link":"/dark/shop-checkout","image":"/landing-preview/img/shop/4.jpg","title":"Checkout","mode":"dark","new":true},{"id":8,"link":"/light/shop-checkout","image":"/landing-preview/img/shop/04.jpg","title":"Checkout","mode":"light","new":true}]'
        ),
        M = function () {
          return (0, a.jsxs)("section", {
            className: "shop-demos section-padding sub-bg",
            children: [
              (0, a.jsx)("div", {
                className: "container",
                children: (0, a.jsx)("div", {
                  className: "sec-lg-head text-center mb-50",
                  children: (0, a.jsxs)("h2", {
                    className: "fz-50 d-rotate wow",
                    children: [
                      (0, a.jsx)("span", {
                        className: "rotate-text",
                        children: "Carefully crafted.",
                      }),
                      (0, a.jsx)("span", {
                        className: "rotate-text",
                        children: "AI Agents Demos.",
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "container-fluid",
                children: (0, a.jsx)("div", {
                  className: "row",
                  children: L.map((e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "col-lg-3 col-md-6",
                        children: (0, a.jsxs)("div", {
                          className: "item",
                          children: [
                            (0, a.jsx)("div", {
                              className: "img",
                              children: (0, a.jsx)("img", {
                                src: e.image,
                                alt: "",
                              }),
                            }),
                            (0, a.jsx)("h6", { children: e.title }),
                            (0, a.jsx)(g(), { href: e.link, target: "_blank" }),
                            e.new &&
                              (0, a.jsx)("span", {
                                className: "new",
                                children: "New",
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
          });
        },
        A = i(4576),
        E = function () {
          return (
            (0, r.useEffect)(() => {
              (0, A.Z)(".sec-bg-img.parallaxie", 0.3);
            }, []),
            (0, a.jsx)("section", {
              className: "call-action-img sub-bg",
              children: (0, a.jsxs)("div", {
                className: "container",
                children: [
                  (0, a.jsx)("div", {
                    className: "sec-bg-img bg-img parallaxie",
                    "data-background": "/dark/assets/imgs/background/2.jpg",
                  }),
                  (0, a.jsx)("div", {
                    className: "sec-lg-head section-padding",
                    children: (0, a.jsx)("div", {
                      className: "row ontop",
                      children: (0, a.jsxs)("div", {
                        className: "col-11 d-flex align-items-center",
                        children: [
                          (0, a.jsx)("div", {
                            className: "valign",
                            children: (0, a.jsxs)("h2", {
                              className: "fz-50 d-rotate wow",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "rotate-text",
                                  children:
                                    "Build and Add a stunning AI agent today.",
                                }),
                                (0, a.jsxs)("span", {
                                  className: "rotate-text",
                                  children: [
                                    "Let’s ",
                                    (0, a.jsx)("span", {
                                      className: "sub-font",
                                      children: "get to work",
                                    }),
                                    ".",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "ml-auto",
                            children: (0, a.jsxs)("a", {
                              href: p.a,
                              className:
                                "butn-circle d-flex align-items-center text-center m-auto",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "full-width",
                                  children: [
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
                                    (0, a.jsx)("span", {
                                      className: "full-width",
                                      children: "Purchase",
                                    }),
                                  ],
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
                    }),
                  }),
                ],
              }),
            })
          );
        },
        q = function () {
          return (0, a.jsx)("footer", {
            children: (0, a.jsx)("div", {
              className: "sub-footer pt-40 pb-40 ontop sub-bg",
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
                            src: "/dark/assets/imgs/logo-light.png",
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
                              "\xa9 2025 Cleverest.cl is Powered by ",
                              (0, a.jsx)("span", {
                                className: "underline",
                                children: (0, a.jsx)("a", {
                                  href: "https://cleverest.cl/",
                                  target: "_blank",
                                  children: p.v,
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
          });
        };
      function I() {
        return (
          (0, r.useEffect)(
            () => (
              document.body.classList.add("sub-bg"),
              () => document.body.classList.remove("sub-bg")
            ),
            []
          ),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(n(), {
                children: (0, a.jsx)("title", {
                  children: "Cleverest - AI Agents for everybody",
                }),
              }),
              (0, a.jsx)(j, {}),
              (0, a.jsx)(x, {}),
              (0, a.jsxs)("main", {
                children: [
                  (0, a.jsx)(v, {}),
                  (0, a.jsx)(f, {}),
                  (0, a.jsx)(k, {}),
                  (0, a.jsx)(C, {}),
                  (0, a.jsx)(M, {}),
                  (0, a.jsx)(E, {}),
                ],
              }),
              (0, a.jsx)(q, {}),
            ],
          })
        );
      }
      I.getLayout = (e) => (0, a.jsx)(m, { children: e });
      var P = I;
    },
    7513: function (e) {
      "use strict";
      e.exports = JSON.parse('{"v":"Cleverest","a":"https://cleverest.cl/"}');
    },
  },
  function (e) {
    e.O(0, [1664, 719, 9774, 2888, 179], function () {
      return e((e.s = 6396));
    }),
      (_N_E = e.O());
  },
]);
