"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [684],
  {
    498: function (s, e, l) {
      var c = l(5893);
      l(7294);
      var a = l(1664),
        i = l.n(a);
      e.Z = function (s) {
        let { lightMode: e } = s;
        function l(s) {
          let e = s.currentTarget.parentElement.querySelector("input");
          1 !== parseInt(e.value) && (e.value = parseInt(e.value) - 1);
        }
        function a(s) {
          let e = s.currentTarget.parentElement.querySelector("input");
          e.value = parseInt(e.value) + 1;
        }
        return (0, c.jsx)("section", {
          className: "shop-cart ".concat(e ? "light" : "", " section-padding"),
          children: (0, c.jsx)("div", {
            className: "container",
            children: (0, c.jsx)("div", {
              className: "row justify-content-center",
              children: (0, c.jsxs)("div", {
                className: "col-lg-11",
                children: [
                  (0, c.jsx)("div", {
                    children: (0, c.jsxs)("table", {
                      children: [
                        (0, c.jsx)("thead", {
                          children: (0, c.jsxs)("tr", {
                            children: [
                              (0, c.jsx)("th", { children: "Product" }),
                              (0, c.jsx)("th", { children: "Price" }),
                              (0, c.jsx)("th", { children: "Quantity" }),
                              (0, c.jsx)("th", { children: "Subtotal" }),
                              (0, c.jsx)("th", { children: "\xa0" }),
                            ],
                          }),
                        }),
                        (0, c.jsxs)("tbody", {
                          children: [
                            (0, c.jsxs)("tr", {
                              children: [
                                (0, c.jsx)("td", {
                                  "data-column": "Product",
                                  children: (0, c.jsxs)("div", {
                                    className: "d-flex align-items-center",
                                    children: [
                                      (0, c.jsx)("div", {
                                        children: (0, c.jsx)("div", {
                                          className: "img icon-img-80",
                                          children: (0, c.jsx)("img", {
                                            src: "/dark/assets/imgs/shop/5.jpg",
                                            alt: "",
                                          }),
                                        }),
                                      }),
                                      (0, c.jsx)("div", {
                                        className: "ml-30",
                                        children: (0, c.jsx)("h6", {
                                          children: "Men Hooded",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, c.jsx)("td", {
                                  "data-column": "price",
                                  children: (0, c.jsx)("h5", {
                                    className: "main-color4 fz-18",
                                    children: "$130.00",
                                  }),
                                }),
                                (0, c.jsx)("td", {
                                  "data-column": " Quantity",
                                  children: (0, c.jsxs)("div", {
                                    className: "counter",
                                    children: [
                                      (0, c.jsx)("span", {
                                        className: "down",
                                        onClick: l,
                                        children: "-",
                                      }),
                                      (0, c.jsx)("input", {
                                        type: "text",
                                        defaultValue: "1",
                                      }),
                                      (0, c.jsx)("span", {
                                        className: "up",
                                        onClick: a,
                                        children: "+",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, c.jsx)("td", {
                                  "data-column": "Subtotal",
                                  children: (0, c.jsx)("h5", {
                                    className: "main-color4 fz-18",
                                    children: "$130.00",
                                  }),
                                }),
                                (0, c.jsx)("td", {
                                  className: "remove",
                                  children: (0, c.jsx)("a", {
                                    href: "#0",
                                    children: (0, c.jsx)("span", {
                                      className: "pe-7s-close",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsxs)("tr", {
                              children: [
                                (0, c.jsx)("td", {
                                  "data-column": "Product",
                                  children: (0, c.jsxs)("div", {
                                    className: "d-flex align-items-center",
                                    children: [
                                      (0, c.jsx)("div", {
                                        children: (0, c.jsx)("div", {
                                          className: "img icon-img-80",
                                          children: (0, c.jsx)("img", {
                                            src: "/dark/assets/imgs/shop/3.jpg",
                                            alt: "",
                                          }),
                                        }),
                                      }),
                                      (0, c.jsx)("div", {
                                        className: "ml-30",
                                        children: (0, c.jsx)("h6", {
                                          children: "Men Hooded",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, c.jsx)("td", {
                                  "data-column": "price",
                                  children: (0, c.jsx)("h5", {
                                    className: "main-color4 fz-18",
                                    children: "$130.00",
                                  }),
                                }),
                                (0, c.jsx)("td", {
                                  "data-column": " Quantity",
                                  children: (0, c.jsxs)("div", {
                                    className: "counter",
                                    children: [
                                      (0, c.jsx)("span", {
                                        className: "down",
                                        onClick: l,
                                        children: "-",
                                      }),
                                      (0, c.jsx)("input", {
                                        type: "text",
                                        defaultValue: "1",
                                      }),
                                      (0, c.jsx)("span", {
                                        className: "up",
                                        onClick: a,
                                        children: "+",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, c.jsx)("td", {
                                  "data-column": "Subtotal",
                                  children: (0, c.jsx)("h5", {
                                    className: "main-color4 fz-18",
                                    children: "$130.00",
                                  }),
                                }),
                                (0, c.jsx)("td", {
                                  className: "remove",
                                  children: (0, c.jsx)("a", {
                                    href: "#0",
                                    children: (0, c.jsx)("span", {
                                      className: "pe-7s-close",
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
                  (0, c.jsxs)("div", {
                    className: "row mt-80",
                    children: [
                      (0, c.jsx)("div", {
                        className: "col-lg-6",
                        children: (0, c.jsxs)("div", {
                          className: "coupon mt-40",
                          children: [
                            (0, c.jsx)("h4", { children: "Discount" }),
                            (0, c.jsx)("p", {
                              className: "fz-13",
                              children:
                                "Enter your coupon code if you have one.",
                            }),
                            (0, c.jsxs)("form", {
                              action: "contact.php",
                              children: [
                                (0, c.jsxs)("div", {
                                  className: "form-group d-flex mt-30",
                                  children: [
                                    (0, c.jsx)("input", {
                                      type: "text",
                                      name: "coupon_code",
                                    }),
                                    (0, c.jsx)("button", {
                                      type: "submit",
                                      className: "butn butn-md butn-bord",
                                      children: (0, c.jsx)("span", {
                                        children: "Apply",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsx)("span", {
                                  className: "fz-13 opacity-7 mt-10",
                                  children: "Coupon code",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, c.jsx)("div", {
                        className: "col-lg-4 offset-lg-2",
                        children: (0, c.jsxs)("div", {
                          className: "total mt-40",
                          children: [
                            (0, c.jsx)("h4", { children: "Cart totals" }),
                            (0, c.jsxs)("ul", {
                              className: "rest mt-30",
                              children: [
                                (0, c.jsx)("li", {
                                  className: "mb-5",
                                  children: (0, c.jsxs)("h6", {
                                    children: [
                                      "Subtotal : ",
                                      (0, c.jsx)("span", {
                                        className: "fz-16 main-color4 ml-10",
                                        children: "$130.00",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, c.jsx)("li", {
                                  children: (0, c.jsxs)("h6", {
                                    children: [
                                      "Total : ",
                                      (0, c.jsx)("span", {
                                        className: "fz-16 main-color4 ml-10",
                                        children: "$260.00",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsx)(i(), {
                              href: "/dark/shop-checkout",
                              className: "".concat(
                                e ? "main-colorbg4" : "bg-white",
                                " butn butn-md butn-bg text-dark mt-30"
                              ),
                              children: (0, c.jsx)("span", {
                                className: "text-u fz-13 fw-600",
                                children: "Proceed to checkout",
                              }),
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
        });
      };
    },
    5444: function (s, e, l) {
      var c = l(5893);
      l(7294),
        (e.Z = function (s) {
          let { data: e } = s;
          return (0, c.jsx)("header", {
            className: "work-header section-padding pb-0",
            children: (0, c.jsx)("div", {
              className: "container mt-80",
              children: (0, c.jsx)("div", {
                className: "row",
                children: (0, c.jsx)("div", {
                  className: "col-12",
                  children: (0, c.jsxs)("div", {
                    className: "caption",
                    children: [
                      (0, c.jsx)("h6", {
                        className: "sub-title",
                        children: e.subTitle,
                      }),
                      (0, c.jsx)("h1", { children: e.title }),
                    ],
                  }),
                }),
              }),
            }),
          });
        });
    },
    4361: function (s, e, l) {
      var c = l(5893),
        a = l(7294),
        i = l(7513);
      e.Z = function (s) {
        let { lightMode: e, subBg: l } = s;
        return (
          (0, a.useEffect)(() => {
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
          (0, c.jsx)("footer", {
            className: l ? "sub-bg pt-80" : "",
            children: (0, c.jsxs)("div", {
              className: "footer-container",
              children: [
                (0, c.jsx)("div", {
                  className: "container pb-80 pt-80 ontop",
                  children: (0, c.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, c.jsx)("div", {
                        className: "col-lg-3",
                        children: (0, c.jsxs)("div", {
                          className: "colum md-mb50",
                          children: [
                            (0, c.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, c.jsx)("h6", {
                                children: "Address",
                              }),
                            }),
                            (0, c.jsx)("div", {
                              className: "text",
                              children: (0, c.jsx)("p", {
                                children:
                                  "Chile — 785 15h Street, Office 478 Santiago de Chile",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, c.jsx)("div", {
                        className: "col-lg-3 offset-lg-1",
                        children: (0, c.jsxs)("div", {
                          className: "colum md-mb50",
                          children: [
                            (0, c.jsx)("div", {
                              className: "tit mb-20",
                              children: (0, c.jsx)("h6", {
                                children: "Say Hello",
                              }),
                            }),
                            (0, c.jsxs)("div", {
                              className: "text",
                              children: [
                                (0, c.jsx)("p", {
                                  className: "mb-10",
                                  children: (0, c.jsx)("a", {
                                    href: "mailto:scayuqueo@usm.cl",
                                    children: "sergio@cleverest.cl",
                                  }),
                                }),
                                (0, c.jsx)("h5", {
                                  children: (0, c.jsx)("a", {
                                    href: "callto:+56929202244",
                                    children: "+569 29202244",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, c.jsxs)("div", {
                        className: "col-lg-2 md-mb50",
                        children: [
                          (0, c.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, c.jsx)("h6", { children: "Social" }),
                          }),
                          (0, c.jsxs)("ul", {
                            className: "rest social-text",
                            children: [
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("a", {
                                  href: "#0",
                                  children: "Facebook",
                                }),
                              }),
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("a", {
                                  target: "_blank",
                                  href: "https://x.com/cleverest_cl",
                                  children: "Twitter",
                                }),
                              }),
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.linkedin.com/in/cleverest/",
                                  children: "LinkedIn",
                                }),
                              }),
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("a", {
                                  target: "_blank",
                                  href: "https://www.instagram.com/cleverest.cl",
                                  children: "Instagram",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, c.jsxs)("div", {
                        className: "col-lg-3",
                        children: [
                          (0, c.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, c.jsx)("h6", {
                              children: "Newsletter",
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "subscribe",
                            children: (0, c.jsx)("form", {
                              action: "contact.php",
                              children: (0, c.jsxs)("div", {
                                className: "form-group rest",
                                children: [
                                  (0, c.jsx)("input", {
                                    type: "email",
                                    placeholder: "Type Your Email",
                                  }),
                                  (0, c.jsx)("button", {
                                    type: "submit",
                                    children: (0, c.jsx)("i", {
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
                (0, c.jsx)("div", {
                  className: "sub-footer pt-40 pb-40 bord-thin-top ontop",
                  children: (0, c.jsx)("div", {
                    className: "container",
                    children: (0, c.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, c.jsx)("div", {
                          className: "col-lg-4",
                          children: (0, c.jsx)("div", {
                            className: "logo",
                            children: (0, c.jsx)("a", {
                              href: "#0",
                              children: (0, c.jsx)("img", {
                                src: "/dark/assets/imgs/logo-".concat(
                                  e ? "dark" : "light",
                                  ".png"
                                ),
                                alt: "",
                              }),
                            }),
                          }),
                        }),
                        (0, c.jsx)("div", {
                          className: "col-lg-8",
                          children: (0, c.jsx)("div", {
                            className: "copyright d-flex",
                            children: (0, c.jsx)("div", {
                              className: "ml-auto",
                              children: (0, c.jsxs)("p", {
                                className: "fz-13",
                                children: [
                                  "\xa9 2025 Cleverest.cl is Powered by",
                                  " ",
                                  (0, c.jsx)("span", {
                                    className: "underline",
                                    children: (0, c.jsx)("a", {
                                      href: i.a,
                                      target: "_blank",
                                      children: i.v,
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
