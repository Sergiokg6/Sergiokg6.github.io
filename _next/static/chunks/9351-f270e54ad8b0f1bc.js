"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9351],
  {
    5444: function (s, e, a) {
      var i = a(5893);
      a(7294),
        (e.Z = function (s) {
          let { data: e } = s;
          return (0, i.jsx)("header", {
            className: "work-header section-padding pb-0",
            children: (0, i.jsx)("div", {
              className: "container mt-80",
              children: (0, i.jsx)("div", {
                className: "row",
                children: (0, i.jsx)("div", {
                  className: "col-12",
                  children: (0, i.jsxs)("div", {
                    className: "caption",
                    children: [
                      (0, i.jsx)("h6", {
                        className: "sub-title",
                        children: e.subTitle,
                      }),
                      (0, i.jsx)("h1", { children: e.title }),
                    ],
                  }),
                }),
              }),
            }),
          });
        });
    },
    6110: function (s, e, a) {
      a.d(e, {
        Z: function () {
          return n;
        },
      });
      var i = a(5893);
      a(7294);
      var l = function () {
          function s(s) {
            let e = s.currentTarget,
              a = parseInt(e[0].value),
              i = parseInt(e[1].value),
              l = document.querySelectorAll(".range-input input");
            i - a >= 1e3 &&
              i <= l[1].max &&
              ("input-min" === s.currentTarget.className
                ? (l[0].value = a)
                : (l[1].value = i));
          }
          function e(s) {
            let e = document.querySelectorAll(".range-input input"),
              a = document.querySelectorAll(".price-input input"),
              i = document.querySelector(".slider-range .progress"),
              l = parseInt(e[0].value),
              r = parseInt(e[1].value);
            r - l < 1e3
              ? "range-min" === s.currentTarget.className
                ? (e[0].value = r - 1e3)
                : (e[1].value = l + 1e3)
              : ((a[0].value = l),
                (a[1].value = r),
                (i.style.left = (l / e[0].max) * 100 + "%"),
                (i.style.right = 100 - (r / e[1].max) * 100 + "%"));
          }
          return (0, i.jsx)("div", {
            className: "col-lg-3",
            children: (0, i.jsxs)("div", {
              className: "sidebar md-mb80",
              children: [
                (0, i.jsx)("div", {
                  className: "item search mb-40",
                  children: (0, i.jsx)("form", {
                    action: "contact.php",
                    children: (0, i.jsxs)("div", {
                      className: "form-group",
                      children: [
                        (0, i.jsx)("input", {
                          type: "text",
                          name: "shop_search",
                          placeholder: "Search",
                        }),
                        (0, i.jsx)("button", {
                          type: "submit",
                          children: (0, i.jsx)("span", {
                            className: "pe-7s-search",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "item categories mb-40",
                  children: [
                    (0, i.jsx)("div", {
                      className: "title",
                      children: (0, i.jsx)("h6", { children: "Categories" }),
                    }),
                    (0, i.jsx)("div", {
                      className: "dot-list",
                      children: (0, i.jsxs)("ul", {
                        className: "rest",
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)("a", {
                              href: "#0",
                              children: "Technology",
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)("a", {
                              href: "#0",
                              children: "Accessories",
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)("a", {
                              href: "#0",
                              children: "Furniture",
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)("a", {
                              href: "#0",
                              children: "Clothes",
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)("a", {
                              href: "#0",
                              children: "Jewellery",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "item price-range mb-40",
                  children: [
                    (0, i.jsx)("div", {
                      className: "title",
                      children: (0, i.jsx)("h6", {
                        children: "Filter by Price",
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "wrapper",
                      children: [
                        (0, i.jsx)("div", {
                          className: "slider-range",
                          children: (0, i.jsx)("div", {
                            className: "progress",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "range-input",
                          children: [
                            (0, i.jsx)("input", {
                              type: "range",
                              className: "range-min",
                              min: "10",
                              max: "10000",
                              defaultValue: "10",
                              step: "100",
                              onInput: e,
                            }),
                            (0, i.jsx)("input", {
                              type: "range",
                              className: "range-max",
                              min: "0",
                              max: "10000",
                              defaultValue: "7500",
                              step: "100",
                              onInput: e,
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "price-input d-flex align-items-center mt-15",
                          children: [
                            (0, i.jsx)("div", {
                              children: (0, i.jsxs)("div", {
                                className: "field",
                                children: [
                                  (0, i.jsx)("span", { children: "$" }),
                                  (0, i.jsx)("input", {
                                    type: "number",
                                    className: "input-min",
                                    defaultValue: "10",
                                    onInput: s,
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "ml-auto",
                              children: (0, i.jsxs)("div", {
                                className: "field",
                                children: [
                                  (0, i.jsx)("span", { children: "$" }),
                                  (0, i.jsx)("input", {
                                    type: "number",
                                    className: "input-max",
                                    defaultValue: "7500",
                                    onInput: s,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "item best-sale mb-40",
                  children: [
                    (0, i.jsx)("div", {
                      className: "title",
                      children: (0, i.jsx)("h6", { children: "Best Sellers" }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "line-list d-flex align-items-center",
                      children: [
                        (0, i.jsx)("div", {
                          children: (0, i.jsx)("div", {
                            className: "img",
                            children: (0, i.jsx)("img", {
                              src: "/dark/assets/imgs/shop/1.jpg",
                              alt: "",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          children: (0, i.jsxs)("div", {
                            className: "cont",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "rate",
                                children: [
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                ],
                              }),
                              (0, i.jsx)("h6", { children: "Men Hooded" }),
                              (0, i.jsx)("h5", { children: "$130.00" }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("a", { href: "#0", className: "over-link" }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "line-list d-flex align-items-center",
                      children: [
                        (0, i.jsx)("div", {
                          children: (0, i.jsx)("div", {
                            className: "img",
                            children: (0, i.jsx)("img", {
                              src: "/dark/assets/imgs/shop/3.jpg",
                              alt: "",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          children: (0, i.jsxs)("div", {
                            className: "cont",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "rate",
                                children: [
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                ],
                              }),
                              (0, i.jsx)("h6", { children: "Men Hooded" }),
                              (0, i.jsx)("h5", { children: "$130.00" }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("a", { href: "#0", className: "over-link" }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "line-list d-flex align-items-center",
                      children: [
                        (0, i.jsx)("div", {
                          children: (0, i.jsx)("div", {
                            className: "img",
                            children: (0, i.jsx)("img", {
                              src: "/dark/assets/imgs/shop/5.jpg",
                              alt: "",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          children: (0, i.jsxs)("div", {
                            className: "cont",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "rate",
                                children: [
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                  (0, i.jsx)("i", { className: "fas fa-star" }),
                                ],
                              }),
                              (0, i.jsx)("h6", { children: "Men Hooded" }),
                              (0, i.jsx)("h5", { children: "$130.00" }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("a", { href: "#0", className: "over-link" }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "item tags",
                  children: [
                    (0, i.jsx)("div", {
                      className: "title",
                      children: (0, i.jsx)("h6", { children: "Popular Tags" }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "tags-links",
                      children: [
                        (0, i.jsx)("a", { href: "#0", children: "Design" }),
                        (0, i.jsx)("a", {
                          href: "#0",
                          children: "Development",
                        }),
                        (0, i.jsx)("a", { href: "#0", children: "Tech" }),
                        (0, i.jsx)("a", { href: "#0", children: "Blog" }),
                        (0, i.jsx)("a", { href: "#0", children: "Branding" }),
                        (0, i.jsx)("a", { href: "#0", children: "Mobile" }),
                        (0, i.jsx)("a", { href: "#0", children: "ThemesCamp" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        r = JSON.parse(
          '[{"id":1,"image":"/dark/assets/imgs/shop/5.jpg","stars":5,"name":"Men Hooded","price":"130.00"},{"id":2,"image":"/dark/assets/imgs/shop/4.jpg","stars":4,"name":"Men Hooded","price":"130.00"},{"id":3,"image":"/dark/assets/imgs/shop/8.jpg","stars":5,"name":"Men Hooded","price":"130.00"},{"id":4,"image":"/dark/assets/imgs/shop/2.jpg","stars":4,"name":"Men Hooded","price":"130.00"},{"id":5,"image":"/dark/assets/imgs/shop/3.jpg","stars":5,"name":"Men Hooded","price":"130.00"},{"id":6,"image":"/dark/assets/imgs/shop/6.jpg","stars":3,"name":"Men Hooded","price":"130.00"},{"id":7,"image":"/dark/assets/imgs/shop/1.jpg","stars":5,"name":"Men Hooded","price":"130.00"},{"id":8,"image":"/dark/assets/imgs/shop/7.jpg","stars":5,"name":"Men Hooded","price":"130.00"},{"id":9,"image":"/dark/assets/imgs/shop/9.jpg","stars":4,"name":"Men Hooded","price":"130.00"}]'
        ),
        c = function () {
          function s(s) {
            s.stopPropagation();
            let e = document.querySelector(".select-options");
            "none" === e.style.display
              ? (e.style.display = "block")
              : (e.style.display = "none"),
              document
                .querySelector(".select-styled")
                .classList.toggle("active");
          }
          function e(s) {
            s.stopPropagation(),
              document
                .querySelector(".select-styled")
                .classList.remove("active"),
              (document.querySelector(".select-styled").innerHTML =
                s.currentTarget.innerHTML),
              (document.querySelector("select").value =
                s.currentTarget.getAttribute("rel")),
              (document.querySelector(".select-options").style.display =
                "none");
          }
          return (0, i.jsx)("div", {
            className: "col-lg-9",
            children: (0, i.jsxs)("div", {
              className: "shop-products",
              children: [
                (0, i.jsxs)("div", {
                  className: "top-side d-flex align-items-end mb-40",
                  children: [
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("h6", {
                        className: "fz-16 line-height-1",
                        children: "Showing 1–9 of 12 results",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "ml-auto",
                      children: (0, i.jsxs)("div", {
                        className: "select",
                        children: [
                          (0, i.jsxs)("select", {
                            className: "form-control select-hidden",
                            onClick: s,
                            children: [
                              (0, i.jsx)("option", {
                                value: "Most Popular",
                                children: "Most Popular",
                              }),
                              (0, i.jsx)("option", {
                                value: "Sort by average rating",
                                children: "Sort by average rating",
                              }),
                              (0, i.jsx)("option", {
                                value: "Price [Lowest to Highest]",
                                children: "Price [Lowest to Highest]",
                              }),
                              (0, i.jsx)("option", {
                                value: "Price [Highest to Lowest]",
                                children: "Price [Highest to Lowest]",
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "select-styled",
                            onClick: s,
                            children: "Most Popular",
                          }),
                          (0, i.jsxs)("ul", {
                            className: "select-options",
                            children: [
                              (0, i.jsx)("li", {
                                rel: "Most Popular",
                                onClick: e,
                                children: "Most Popular",
                              }),
                              (0, i.jsx)("li", {
                                rel: "Sort by average rating",
                                onClick: e,
                                children: "Sort by average rating",
                              }),
                              (0, i.jsx)("li", {
                                rel: "Price [Lowest to Highest]",
                                onClick: e,
                                children: "Price [Lowest to Highest]",
                              }),
                              (0, i.jsx)("li", {
                                rel: "Price [Highest to Lowest]",
                                onClick: e,
                                children: "Price [Highest to Lowest]",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "row",
                  children: r.map((s) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: "col-md-6 col-lg-4",
                        children: (0, i.jsxs)("div", {
                          className: "item mb-50",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "img",
                              children: [
                                (0, i.jsx)("img", { src: s.image, alt: "" }),
                                (0, i.jsx)("a", {
                                  href: "#0",
                                  className: "add-cart",
                                  children: "Add to Cart",
                                }),
                                (0, i.jsx)("span", {
                                  className: "fav",
                                  children: (0, i.jsx)("i", {
                                    className: "far fa-heart",
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "cont",
                              children: [
                                (0, i.jsxs)("div", {
                                  className: "rate",
                                  children: [
                                    Array(s.stars)
                                      .fill()
                                      .map((s, e) =>
                                        (0, i.jsx)(
                                          "i",
                                          { className: "fas fa-star" },
                                          e
                                        )
                                      ),
                                    Array(5 - s.stars)
                                      .fill()
                                      .map((s, e) =>
                                        (0, i.jsx)(
                                          "i",
                                          { className: "far fa-star" },
                                          e
                                        )
                                      ),
                                  ],
                                }),
                                (0, i.jsx)("h6", { children: s.name }),
                                (0, i.jsxs)("h5", { children: ["$", s.price] }),
                              ],
                            }),
                          ],
                        }),
                      },
                      s.id
                    )
                  ),
                }),
                (0, i.jsx)("div", {
                  className: "pagination d-flex justify-content-center mt-30",
                  children: (0, i.jsxs)("ul", {
                    className: "rest",
                    children: [
                      (0, i.jsx)("li", {
                        className: "active",
                        children: (0, i.jsx)("a", {
                          href: "#0",
                          children: "1",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)("a", {
                          href: "#0",
                          children: "2",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)("a", {
                          href: "#0",
                          children: (0, i.jsx)("i", {
                            className: "fas fa-chevron-right",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        n = function () {
          return (0, i.jsx)("section", {
            className: "main-shop section-padding",
            children: (0, i.jsx)("div", {
              className: "container",
              children: (0, i.jsxs)("div", {
                className: "row md-marg",
                children: [(0, i.jsx)(l, {}), (0, i.jsx)(c, {})],
              }),
            }),
          });
        };
    },
    4361: function (s, e, a) {
      var i = a(5893),
        l = a(7294),
        r = a(7513);
      e.Z = function (s) {
        let { lightMode: e, subBg: a } = s;
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
          (0, i.jsx)("footer", {
            className: a ? "sub-bg pt-80" : "",
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
                                  "\xa9 2025 Cleverest.cl is Powered by",
                                  " ",
                                  (0, i.jsx)("span", {
                                    className: "underline",
                                    children: (0, i.jsx)("a", {
                                      href: r.a,
                                      target: "_blank",
                                      children: r.v,
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
