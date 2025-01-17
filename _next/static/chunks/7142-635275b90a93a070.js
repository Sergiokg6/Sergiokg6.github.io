"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7142],
  {
    8104: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return r;
        },
      });
      function r(e) {
        let { preview: s, lightMode: l } = e,
          r = document.querySelector(
            'link[href="/landing-preview/css/preview-style.css"]'
          ),
          n = document.querySelector('link[href="/dark/assets/css/style.css"]'),
          a = document.querySelector(
            'link[href="/light/assets/css/style.css"]'
          ),
          i = document.querySelector(
            'link[href="/dark/assets/css/plugins.css"]'
          ),
          c = document.querySelector(
            'link[href="/light/assets/css/plugins.css"]'
          );
        if (l && !s) {
          document.querySelector("noscript").before(c),
            document.querySelector("noscript").before(a);
          let e = document.querySelectorAll(
            'link[href="/light/assets/css/plugins.css"]'
          );
          e.length > 1 && e[0].remove();
          let s = document.querySelectorAll(
            'link[href="/light/assets/css/style.css"]'
          );
          s.length > 1 && s[0].remove();
        }
        if (!l && !s) {
          document.querySelector("noscript").before(i),
            document.querySelector("noscript").before(n);
          let e = document.querySelectorAll(
            'link[href="/dark/assets/css/plugins.css"]'
          );
          e.length > 1 && e[0].remove();
          let s = document.querySelectorAll(
            'link[href="/dark/assets/css/style.css"]'
          );
          s.length > 1 && s[0].remove();
        }
        s && r
          ? (document.head.append(r), a && a.remove(), c && c.remove())
          : !s && r && r.remove();
      }
    },
    6054: function (e, s, l) {
      var r = l(5893),
        n = l(7294);
      s.Z = function () {
        return (
          (0, n.useEffect)(() => {
            let e = document.querySelectorAll(".hover-this"),
              s = document.querySelector(".cursor"),
              l = function (e) {
                let s = this.querySelector(".hover-anim"),
                  { offsetX: l, offsetY: r } = e,
                  { offsetWidth: n, offsetHeight: a } = this;
                (s.style.transform = "translate("
                  .concat((l / n) * 50 - 25, "px, ")
                  .concat((r / a) * 50 - 25, "px)")),
                  "mouseleave" === e.type && (s.style.transform = "");
              },
              r = (e) => {
                let { clientX: l, clientY: r } = e;
                (s.style.left = l + "px"), (s.style.top = r + "px");
              };
            e.forEach((e) => e.addEventListener("mousemove", l)),
              e.forEach((e) => e.addEventListener("mouseleave", l)),
              window.addEventListener("mousemove", r),
              document.querySelectorAll("a, .cursor-pointer").forEach((e) => {
                e.addEventListener("mousemove", () => {
                  s.classList.add("cursor-active");
                }),
                  e.addEventListener("mouseleave", () => {
                    s.classList.remove("cursor-active");
                  });
              });
          }, []),
          (0, r.jsx)("div", { className: "cursor" })
        );
      };
    },
    7458: function (e, s, l) {
      var r = l(5893),
        n = l(7294);
      s.Z = function () {
        return (
          (0, n.useEffect)(() => {
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
          (0, r.jsxs)("div", {
            className: "loader-wrap",
            children: [
              (0, r.jsx)("svg", {
                viewBox: "0 0 1000 1000",
                preserveAspectRatio: "none",
                children: (0, r.jsx)("path", {
                  id: "svg",
                  d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z",
                }),
              }),
              (0, r.jsx)("div", {
                className: "loader-wrap-heading",
                children: (0, r.jsx)("span", {
                  children: (0, r.jsxs)("h2", {
                    className: "load-text",
                    children: [
                      (0, r.jsx)("span", { children: "C" }),
                      (0, r.jsx)("span", { children: "l" }),
                      (0, r.jsx)("span", { children: "e" }),
                      (0, r.jsx)("span", { children: "v" }),
                      (0, r.jsx)("span", { children: "e" }),
                      (0, r.jsx)("span", { children: "r" }),
                      (0, r.jsx)("span", { children: "e" }),
                      (0, r.jsx)("span", { children: "s" }),
                      (0, r.jsx)("span", { children: "t" }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    4555: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return c;
        },
      });
      var r = l(5893),
        n = l(7294);
      let a = () => {
          let e = document.querySelector(".progress-wrap"),
            s = document.querySelector(".progress-wrap path"),
            l = s.getTotalLength(),
            r = () => {
              let e = window.pageYOffset,
                r = document.documentElement.scrollHeight - window.innerHeight;
              s.style.strokeDashoffset = l - (e * l) / r;
            };
          e &&
            ((s.style.transition = s.style.WebkitTransition = "none"),
            (s.style.strokeDasharray = l + " " + l),
            (s.style.strokeDashoffset = l),
            s.getBoundingClientRect(),
            (s.style.transition = s.style.WebkitTransition =
              "stroke-dashoffset 10ms linear"),
            r(),
            window.addEventListener("scroll", r),
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
        i = () => (
          (0, n.useEffect)(() => {
            a();
          }, []),
          (0, r.jsx)("div", {
            className: "progress-wrap cursor-pointer",
            children: (0, r.jsx)("svg", {
              className: "progress-circle svg-content",
              width: "100%",
              height: "100%",
              viewBox: "-1 -1 102 102",
              children: (0, r.jsx)("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",
              }),
            }),
          })
        );
      var c = i;
    },
    8232: function (e, s, l) {
      var r = l(5893);
      l(7294);
      var n = l(1664),
        a = l.n(n);
      s.Z = function (e) {
        let { lightMode: s } = e;
        function l(e) {
          document.querySelectorAll("ul.main-menu li").forEach((e) => {
            e.classList.add("hoverd");
          }),
            e.currentTarget.classList.remove("hoverd");
        }
        function n() {
          document
            .querySelectorAll("ul.main-menu li")
            .forEach((e) => e.classList.remove("hoverd"));
        }
        function i(e) {
          let s = e.currentTarget.querySelector(".sub-menu");
          s &&
            (s.classList.contains("sub-open")
              ? (document.querySelectorAll(".sub-menu").forEach((e) => {
                  e.classList.remove("sub-open"),
                    (e.style.maxHeight = "0"),
                    e.previousElementSibling.children[0].classList.remove(
                      "dopen"
                    );
                }),
                s.classList.remove("sub-open"),
                (s.style.maxHeight = "0"),
                s.previousElementSibling.children[0].classList.remove("dopen"))
              : s.classList.contains("sub-open") ||
                (document.querySelectorAll(".sub-menu").forEach((e) => {
                  e.classList.remove("sub-open"),
                    (e.style.maxHeight = "0"),
                    e.previousElementSibling.children[0].classList.remove(
                      "dopen"
                    );
                }),
                s.classList.add("sub-open"),
                (s.style.maxHeight = "400px"),
                s.previousElementSibling.children[0].classList.add("dopen")));
        }
        return (0, r.jsx)("div", {
          className: "hamenu",
          children: (0, r.jsx)("div", {
            className: "container",
            children: (0, r.jsxs)("div", {
              className: "row",
              children: [
                (0, r.jsx)("div", {
                  className: "col-lg-2",
                  children: (0, r.jsx)("div", {
                    className: "menu-text",
                    children: (0, r.jsx)("div", {
                      className: "text",
                      children: (0, r.jsx)("h2", { children: "Menu" }),
                    }),
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "col-lg-7",
                  children: (0, r.jsx)("div", {
                    className: "menu-links",
                    children: (0, r.jsxs)("ul", {
                      className: "main-menu rest",
                      children: [
                        (0, r.jsxs)("li", {
                          onMouseEnter: l,
                          onMouseLeave: n,
                          onClick: i,
                          children: [
                            (0, r.jsx)("div", {
                              className: "o-hidden",
                              children: (0, r.jsxs)("div", {
                                className: "link cursor-pointer dmenu",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "fill-text",
                                    "data-text": "Home",
                                    children: "Home",
                                  }),
                                  " ",
                                  (0, r.jsx)("i", {}),
                                ],
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "sub-menu",
                              children: (0, r.jsxs)("ul", {
                                children: [
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/home-corporate"
                                      ),
                                      className: "sub-link",
                                      children: "Home Corporate",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/home-onepage"
                                      ),
                                      className: "sub-link",
                                      children: "Home One page",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/home-digital-agency"
                                      ),
                                      className: "sub-link",
                                      children: "Digital Agency",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/home-freelancer"
                                      ),
                                      className: "sub-link",
                                      children: "Freelancer",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/home-marketing-agency"
                                      ),
                                      className: "sub-link",
                                      children: "Marketing Agency",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/home-creative-agency"
                                      ),
                                      className: "sub-link",
                                      children: "Creative Agency",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/home-startup"
                                      ),
                                      className: "sub-link",
                                      children: "Startup Bussines",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/home-architecture"
                                      ),
                                      className: "sub-link",
                                      children: "Architecture",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)("li", {
                          onMouseEnter: l,
                          onMouseLeave: n,
                          children: (0, r.jsx)("div", {
                            className: "o-hidden",
                            children: (0, r.jsx)(a(), {
                              href: "/".concat(
                                s ? "light" : "dark",
                                "/page-about"
                              ),
                              className: "link",
                              children: (0, r.jsx)("span", {
                                className: "fill-text",
                                "data-text": "About Us",
                                children: "About Us",
                              }),
                            }),
                          }),
                        }),
                        (0, r.jsxs)("li", {
                          onMouseEnter: l,
                          onMouseLeave: n,
                          onClick: i,
                          children: [
                            (0, r.jsx)("div", {
                              className: "o-hidden",
                              children: (0, r.jsxs)("div", {
                                className: "link cursor-pointer dmenu",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "fill-text",
                                    "data-text": "Pages",
                                    children: "Pages",
                                  }),
                                  " ",
                                  (0, r.jsx)("i", {}),
                                ],
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "sub-menu",
                              children: (0, r.jsxs)("ul", {
                                children: [
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/page-services"
                                      ),
                                      className: "sub-link",
                                      children: "Services",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/page-team"
                                      ),
                                      className: "sub-link",
                                      children: "Our Team",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/page-contact"
                                      ),
                                      className: "sub-link",
                                      children: "Contact Us",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          onMouseEnter: l,
                          onMouseLeave: n,
                          onClick: i,
                          children: [
                            (0, r.jsx)("div", {
                              className: "o-hidden",
                              children: (0, r.jsxs)("div", {
                                className: "link cursor-pointer dmenu",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "fill-text",
                                    "data-text": "Showcases",
                                    children: "Showcases",
                                  }),
                                  " ",
                                  (0, r.jsx)("i", {}),
                                ],
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "sub-menu",
                              children: (0, r.jsxs)("ul", {
                                children: [
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/showcase-parallax-slider"
                                      ),
                                      className: "sub-link",
                                      children: "Parallax Slider",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/showcase-frame-slider"
                                      ),
                                      className: "sub-link",
                                      children: "Frame Slider",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/showcase-circle-slider"
                                      ),
                                      className: "sub-link",
                                      children: "Circle Slider",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/showcase-carousel"
                                      ),
                                      className: "sub-link",
                                      children: "Showcase Carousel",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/showcase-interactive-center-horizontal"
                                      ),
                                      className: "sub-link",
                                      children: "Interactive Links1",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/showcase-interactive-center"
                                      ),
                                      className: "sub-link",
                                      children: "Interactive Links2",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/showcase-parallax"
                                      ),
                                      className: "sub-link",
                                      children: "Vertical Parallax",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          onMouseEnter: l,
                          onMouseLeave: n,
                          onClick: i,
                          children: [
                            (0, r.jsx)("div", {
                              className: "o-hidden",
                              children: (0, r.jsxs)("div", {
                                className: "link cursor-pointer dmenu",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "fill-text",
                                    "data-text": "Portfolio",
                                    children: "Portfolio",
                                  }),
                                  " ",
                                  (0, r.jsx)("i", {}),
                                ],
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "sub-menu",
                              children: (0, r.jsxs)("ul", {
                                children: [
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/portfolio-classic-grid"
                                      ),
                                      className: "sub-link",
                                      children: "Classic Grid",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/portfolio-grid"
                                      ),
                                      className: "sub-link",
                                      children: "Modern Grid",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/portfolio-metro"
                                      ),
                                      className: "sub-link",
                                      children: "Portfolio Metro",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/project-details1"
                                      ),
                                      className: "sub-link",
                                      children: "Project Details 1",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/project-details2"
                                      ),
                                      className: "sub-link",
                                      children: "Project Details 2",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          onMouseEnter: l,
                          onMouseLeave: n,
                          onClick: i,
                          children: [
                            (0, r.jsx)("div", {
                              className: "o-hidden",
                              children: (0, r.jsxs)("div", {
                                className: "link cursor-pointer dmenu",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "fill-text",
                                    "data-text": "Blogs",
                                    children: "Blogs",
                                  }),
                                  " ",
                                  (0, r.jsx)("i", {}),
                                ],
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "sub-menu",
                              children: (0, r.jsxs)("ul", {
                                children: [
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/blog-classic"
                                      ),
                                      className: "sub-link",
                                      children: "Blog Standerd",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/blog-list"
                                      ),
                                      className: "sub-link",
                                      children: "Blog List",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/blog-half-img"
                                      ),
                                      className: "sub-link",
                                      children: "Image Out Frame",
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsx)(a(), {
                                      href: "/".concat(
                                        s ? "light" : "dark",
                                        "/blog-details"
                                      ),
                                      className: "sub-link",
                                      children: "Blog Details",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)("li", {
                          onMouseEnter: l,
                          onMouseLeave: n,
                          children: (0, r.jsx)("div", {
                            className: "o-hidden",
                            children: (0, r.jsx)(a(), {
                              href: "/".concat(
                                s ? "light" : "dark",
                                "/page-contact"
                              ),
                              className: "link",
                              children: (0, r.jsx)("span", {
                                className: "fill-text",
                                "data-text": "Contact",
                                children: "Contact",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "col-lg-3 d-flex align-items-end",
                  children: (0, r.jsxs)("div", {
                    className: "cont-info full-width",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "item",
                        children: [
                          (0, r.jsx)("h5", {
                            className: "mb-15",
                            children: "Get In Touch",
                          }),
                          (0, r.jsx)("p", {
                            children: "541 Melville Geek, Palo Alto, CA 94301",
                          }),
                          (0, r.jsx)("p", {
                            className: "underline main-color mt-5 mb-5",
                            children: (0, r.jsx)("a", {
                              href: "#0",
                              children: "+1 840 841 25 69",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            children: (0, r.jsx)("a", {
                              href: "#0",
                              children: "GeekFolio_website@gmail.com",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "search-form",
                        children: (0, r.jsxs)("div", {
                          className: "form-group",
                          children: [
                            (0, r.jsx)("input", {
                              type: "text",
                              name: "search",
                              placeholder: "Search",
                            }),
                            (0, r.jsx)("button", {
                              children: (0, r.jsx)("span", {
                                className: "pe-7s-search",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsxs)("ul", {
                        className: "rest social-text d-flex mt-50 fz-13",
                        children: [
                          (0, r.jsx)("li", {
                            className: "mr-20",
                            children: (0, r.jsx)("a", {
                              href: "#0",
                              className: "hover-this",
                              children: (0, r.jsx)("span", {
                                className: "hover-anim",
                                children: "Facebook",
                              }),
                            }),
                          }),
                          (0, r.jsx)("li", {
                            className: "mr-20",
                            children: (0, r.jsx)("a", {
                              href: "#0",
                              className: "hover-this",
                              children: (0, r.jsx)("span", {
                                className: "hover-anim",
                                children: "Twitter",
                              }),
                            }),
                          }),
                          (0, r.jsx)("li", {
                            className: "mr-20",
                            children: (0, r.jsx)("a", {
                              href: "#0",
                              className: "hover-this",
                              children: (0, r.jsx)("span", {
                                className: "hover-anim",
                                children: "LinkedIn",
                              }),
                            }),
                          }),
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)("a", {
                              href: "#0",
                              className: "hover-this",
                              children: (0, r.jsx)("span", {
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
              ],
            }),
          }),
        });
      };
    },
    7217: function (e, s, l) {
      var r = l(5893),
        n = l(7294);
      s.Z = function (e) {
        let { lightMode: s, alwaysDark: l, darkOnScroll: a } = e;
        return (
          (0, n.useEffect)(() => {
            if (a) {
              let e = document.querySelector("#navi");
              window.addEventListener("scroll", () => {
                window.scrollY > 500
                  ? ((e.className = "topnav dark change nav-scroll"),
                    (e.querySelector("img").src =
                      "/dark/assets/imgs/logo-dark.png"))
                  : ((e.className = "topnav"),
                    (e.querySelector("img").src =
                      "/dark/assets/imgs/logo-light.png"));
              });
            }
          }, [a]),
          (0, r.jsx)("div", {
            id: "navi",
            className: "topnav ".concat(l && "navlit"),
            children: (0, r.jsxs)("div", {
              className: "container",
              children: [
                (0, r.jsx)("div", {
                  className: "logo icon-img-120",
                  children: (0, r.jsx)("a", {
                    href: "#",
                    children: (0, r.jsx)("img", {
                      src: "/dark/assets/imgs/logo-".concat(
                        l ? "dark" : "light",
                        ".png"
                      ),
                      alt: "",
                    }),
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "menu-icon cursor-pointer",
                  onClick: function (e) {
                    let r = document.querySelector(".hamenu"),
                      n = document.querySelector("#navi");
                    e.currentTarget.classList.contains("open")
                      ? (e.currentTarget.classList.remove("open"),
                        null == r || r.classList.remove("open"),
                        (r.style.left = "-100%"),
                        s &&
                          !l &&
                          (n.classList.remove("navlit"),
                          (n.querySelector("img").src =
                            "/dark/assets/imgs/logo-light.png")))
                      : (e.currentTarget.classList.add("open"),
                        null == r || r.classList.add("open"),
                        (r.style.left = 0),
                        s &&
                          !l &&
                          (n.classList.add("navlit"),
                          (n.querySelector("img").src =
                            "/dark/assets/imgs/logo-dark.png")));
                  },
                  children: [
                    (0, r.jsxs)("span", {
                      className: "icon",
                      children: [(0, r.jsx)("i", {}), (0, r.jsx)("i", {})],
                    }),
                    (0, r.jsx)("span", {
                      className: "text",
                      children: (0, r.jsx)("span", {
                        className: "word",
                        children: "Menu",
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
  },
]);
