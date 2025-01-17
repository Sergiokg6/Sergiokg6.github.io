"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1329],
  {
    8104: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return t;
        },
      });
      function t(e) {
        let { preview: s, lightMode: a } = e,
          t = document.querySelector(
            'link[href="/landing-preview/css/preview-style.css"]'
          ),
          r = document.querySelector('link[href="/dark/assets/css/style.css"]'),
          n = document.querySelector(
            'link[href="/light/assets/css/style.css"]'
          ),
          l = document.querySelector(
            'link[href="/dark/assets/css/plugins.css"]'
          ),
          o = document.querySelector(
            'link[href="/light/assets/css/plugins.css"]'
          );
        if (a && !s) {
          document.querySelector("noscript").before(o),
            document.querySelector("noscript").before(n);
          let e = document.querySelectorAll(
            'link[href="/light/assets/css/plugins.css"]'
          );
          e.length > 1 && e[0].remove();
          let s = document.querySelectorAll(
            'link[href="/light/assets/css/style.css"]'
          );
          s.length > 1 && s[0].remove();
        }
        if (!a && !s) {
          document.querySelector("noscript").before(l),
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
        s && t
          ? (document.head.append(t), n && n.remove(), o && o.remove())
          : !s && t && t.remove();
      }
    },
    6054: function (e, s, a) {
      var t = a(5893),
        r = a(7294);
      s.Z = function () {
        return (
          (0, r.useEffect)(() => {
            let e = document.querySelectorAll(".hover-this"),
              s = document.querySelector(".cursor"),
              a = function (e) {
                let s = this.querySelector(".hover-anim"),
                  { offsetX: a, offsetY: t } = e,
                  { offsetWidth: r, offsetHeight: n } = this;
                (s.style.transform = "translate("
                  .concat((a / r) * 50 - 25, "px, ")
                  .concat((t / n) * 50 - 25, "px)")),
                  "mouseleave" === e.type && (s.style.transform = "");
              },
              t = (e) => {
                let { clientX: a, clientY: t } = e;
                (s.style.left = a + "px"), (s.style.top = t + "px");
              };
            e.forEach((e) => e.addEventListener("mousemove", a)),
              e.forEach((e) => e.addEventListener("mouseleave", a)),
              window.addEventListener("mousemove", t),
              document.querySelectorAll("a, .cursor-pointer").forEach((e) => {
                e.addEventListener("mousemove", () => {
                  s.classList.add("cursor-active");
                }),
                  e.addEventListener("mouseleave", () => {
                    s.classList.remove("cursor-active");
                  });
              });
          }, []),
          (0, t.jsx)("div", { className: "cursor" })
        );
      };
    },
    7458: function (e, s, a) {
      var t = a(5893),
        r = a(7294);
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
          (0, t.jsxs)("div", {
            className: "loader-wrap",
            children: [
              (0, t.jsx)("svg", {
                viewBox: "0 0 1000 1000",
                preserveAspectRatio: "none",
                children: (0, t.jsx)("path", {
                  id: "svg",
                  d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z",
                }),
              }),
              (0, t.jsx)("div", {
                className: "loader-wrap-heading",
                children: (0, t.jsx)("span", {
                  children: (0, t.jsxs)("h2", {
                    className: "load-text",
                    children: [
                      (0, t.jsx)("span", { children: "C" }),
                      (0, t.jsx)("span", { children: "l" }),
                      (0, t.jsx)("span", { children: "e" }),
                      (0, t.jsx)("span", { children: "v" }),
                      (0, t.jsx)("span", { children: "e" }),
                      (0, t.jsx)("span", { children: "r" }),
                      (0, t.jsx)("span", { children: "e" }),
                      (0, t.jsx)("span", { children: "s" }),
                      (0, t.jsx)("span", { children: "t" }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    7683: function (e, s, a) {
      var t = a(5893),
        r = a(7294),
        n = a(1664),
        l = a.n(n);
      s.Z = function (e) {
        let { lightMode: s, mainBg: a, subBg: n, noStatic: o, curve: c } = e,
          i = (0, r.useCallback)(() => {
            let e = window.scrollY,
              s = document.querySelector(".navbar");
            e > 300
              ? s.classList.add("nav-scroll")
              : s.classList.remove("nav-scroll");
          }, []);
        function d(e) {
          e.currentTarget.querySelector(".dropdown-menu").classList.add("show");
        }
        function h(e) {
          e.currentTarget
            .querySelector(".dropdown-menu")
            .classList.remove("show");
        }
        return (
          (0, r.useEffect)(
            () => (
              window.addEventListener("scroll", i),
              () => window.removeEventListener("scroll", i)
            ),
            [i]
          ),
          (0, t.jsx)("nav", {
            className: "navbar navbar-expand-lg "
              .concat(c ? "nav-crev" : "", " ")
              .concat(o ? "" : "static", " ")
              .concat(a ? "main-bg" : "", " ")
              .concat(n ? "sub-bg" : ""),
            children: (0, t.jsxs)("div", {
              className: "container",
              children: [
                (0, t.jsx)("a", {
                  className: "logo icon-img-100",
                  href: "#",
                  children: s
                    ? (0, t.jsx)("img", {
                        src: "/dark/assets/imgs/logo-dark.png",
                        alt: "logo",
                      })
                    : (0, t.jsx)("img", {
                        src: "/dark/assets/imgs/logo-light.png",
                        alt: "logo",
                      }),
                }),
                (0, t.jsx)("button", {
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
                  children: (0, t.jsx)("span", {
                    className: "icon-bar",
                    children: (0, t.jsx)("i", { className: "fas fa-bars" }),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "collapse navbar-collapse justify-content-center",
                  id: "navbarSupportedContent",
                  children: (0, t.jsxs)("ul", {
                    className: "navbar-nav",
                    children: [
                      (0, t.jsxs)("li", {
                        className: "nav-item dropdown",
                        onMouseMove: d,
                        onMouseLeave: h,
                        children: [
                          (0, t.jsx)("a", {
                            className: "nav-link dropdown-toggle",
                            "data-toggle": "dropdown",
                            href: "#",
                            role: "button",
                            "aria-haspopup": "true",
                            "aria-expanded": "false",
                            children: (0, t.jsx)("span", {
                              className: "rolling-text",
                              children: "Home",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "dropdown-menu mega-menu",
                            children: (0, t.jsx)("div", {
                              className: "container",
                              children: (0, t.jsx)("div", {
                                className: "row",
                                children: (0, t.jsx)("div", {
                                  className: "col-lg-3",
                                  children: (0, t.jsxs)("div", {
                                    className: "clumn",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "title",
                                        children: (0, t.jsx)("h6", {
                                          className: "sub-title ls1",
                                          children: "Home",
                                        }),
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "links",
                                        children: (0, t.jsx)(l(), {
                                          className: "dropdown-item",
                                          href: "/",
                                          children: "Cleverest Home",
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
                      (0, t.jsxs)("li", {
                        className: "nav-item dropdown",
                        onMouseMove: d,
                        onMouseLeave: h,
                        children: [
                          (0, t.jsx)("a", {
                            className: "nav-link dropdown-toggle",
                            "data-toggle": "dropdown",
                            href: "#",
                            role: "button",
                            "aria-haspopup": "true",
                            "aria-expanded": "false",
                            children: (0, t.jsx)("span", {
                              className: "rolling-text",
                              children: "Pages",
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "dropdown-menu",
                            children: [
                              (0, t.jsx)(l(), {
                                className: "dropdown-item",
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/page-about"
                                ),
                                children: "About",
                              }),
                              (0, t.jsx)(l(), {
                                className: "dropdown-item",
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/page-services"
                                ),
                                children: "Services",
                              }),
                              (0, t.jsx)(l(), {
                                className: "dropdown-item",
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/page-team"
                                ),
                                children: "Our Team",
                              }),
                              (0, t.jsx)(l(), {
                                className: "dropdown-item",
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/page-contact"
                                ),
                                children: "Contact Us",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("li", {
                        className: "nav-item dropdown",
                        onMouseMove: d,
                        onMouseLeave: h,
                        children: [
                          (0, t.jsx)("a", {
                            className: "nav-link dropdown-toggle",
                            "data-toggle": "dropdown",
                            href: "#",
                            role: "button",
                            "aria-haspopup": "true",
                            "aria-expanded": "false",
                            children: (0, t.jsx)("span", {
                              className: "rolling-text",
                              children: "Blogs",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "dropdown-menu",
                            children: (0, t.jsx)(l(), {
                              className: "dropdown-item",
                              href: "/".concat(
                                s ? "light" : "dark",
                                "/blog-classic"
                              ),
                              children: "Blog Standerd",
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("li", {
                        className: "nav-item",
                        children: (0, t.jsx)(l(), {
                          className: "nav-link",
                          href: "/".concat(
                            s ? "light" : "dark",
                            "/page-contact"
                          ),
                          children: (0, t.jsx)("span", {
                            className: "rolling-text",
                            children: "Contact",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "search-form",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "form-group",
                      children: [
                        (0, t.jsx)("input", {
                          type: "text",
                          name: "search",
                          placeholder: "Search",
                        }),
                        (0, t.jsx)("button", {
                          children: (0, t.jsx)("span", {
                            className: "pe-7s-search",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "search-icon",
                      onClick: function () {
                        let e = document.querySelector(".navbar .search-form"),
                          s = document.querySelector(
                            ".search-form .close-search"
                          );
                        e.classList.toggle("open"),
                          e.classList.contains("open")
                            ? (s.style.display = "block")
                            : (s.style.display = "none");
                      },
                      children: [
                        (0, t.jsx)("span", {
                          className: "pe-7s-search open-search",
                        }),
                        (0, t.jsx)("span", {
                          className: "pe-7s-close close-search",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    4555: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return o;
        },
      });
      var t = a(5893),
        r = a(7294);
      let n = () => {
          let e = document.querySelector(".progress-wrap"),
            s = document.querySelector(".progress-wrap path"),
            a = s.getTotalLength(),
            t = () => {
              let e = window.pageYOffset,
                t = document.documentElement.scrollHeight - window.innerHeight;
              s.style.strokeDashoffset = a - (e * a) / t;
            };
          e &&
            ((s.style.transition = s.style.WebkitTransition = "none"),
            (s.style.strokeDasharray = a + " " + a),
            (s.style.strokeDashoffset = a),
            s.getBoundingClientRect(),
            (s.style.transition = s.style.WebkitTransition =
              "stroke-dashoffset 10ms linear"),
            t(),
            window.addEventListener("scroll", t),
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
        l = () => (
          (0, r.useEffect)(() => {
            n();
          }, []),
          (0, t.jsx)("div", {
            className: "progress-wrap cursor-pointer",
            children: (0, t.jsx)("svg", {
              className: "progress-circle svg-content",
              width: "100%",
              height: "100%",
              viewBox: "-1 -1 102 102",
              children: (0, t.jsx)("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",
              }),
            }),
          })
        );
      var o = l;
    },
    7283: function (e, s, a) {
      var t = a(5893),
        r = a(7294),
        n = a(9008),
        l = a.n(n),
        o = a(8104),
        c = a(6054),
        i = a(4555);
      let d = (e) => {
        let { children: s, lightMode: a } = e;
        return (
          (0, r.useEffect)(() => {
            (0, o.Z)({ lightMode: a });
          }, [a]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(l(), {
                children: a
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/plugins.css",
                        }),
                        (0, t.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/style.css",
                        }),
                      ],
                    })
                  : (0, t.jsx)("link", {
                      rel: "stylesheet",
                      href: "/dark/assets/css/base.css",
                    }),
              }),
              (0, t.jsx)(c.Z, {}),
              (0, t.jsx)(i.Z, {}),
              s,
            ],
          })
        );
      };
      s.Z = d;
    },
    7513: function (e) {
      e.exports = JSON.parse('{"v":"Cleverest","a":"https://cleverest.cl/"}');
    },
  },
]);
