"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9295],
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
    9729: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return a;
        },
      });
      function a() {
        var e, s;
        (document.documentElement.className = "js"),
          ((s = document.createElement("style")).innerHTML =
            "root: { --tmp-var: bold; }"),
          document.head.appendChild(s),
          (e = !!(
            window.CSS &&
            window.CSS.supports &&
            window.CSS.supports("font-weight", "var(--tmp-var)")
          )),
          s.parentNode.removeChild(s),
          e ||
            alert(
              "Please view this demo in a modern browser that supports CSS Variables."
            );
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
        let c = a.getBoundingClientRect().top * s;
        (a.style.backgroundImage = 'url("'.concat(l, '")')),
          (a.style.backgroundSize = "cover"),
          (a.style.backgroundRepeat = "no-repeat"),
          (a.style.backgroundAttachment = "fixed"),
          (a.style.backgroundPosition = "center ".concat(
            void 0 !== i ? i : c,
            "px"
          )),
          window.addEventListener("scroll", () => {
            (c = a.getBoundingClientRect().top * s),
              (a.style.backgroundPosition = "center ".concat(c, "px"));
          });
      }
    },
    6036: function (e, s, i) {
      var a = i(5893),
        l = i(7294);
      s.Z = function (e) {
        let { videoId: s, channel: i, isOpen: c, onClose: n, autoplay: r } = e,
          t = (0, l.useRef)(null),
          [d, o] = (0, l.useState)("");
        return (
          (0, l.useEffect)(() => {
            "youtube" === i
              ? o("//www.youtube.com/embed/" + s)
              : "vimeo" === i && o("//player.vimeo.com/video/" + s);
          }, [i, s]),
          c
            ? (0, a.jsx)("div", {
                className: "modal-video",
                tabIndex: "-1",
                role: "dialog",
                "aria-label": "video",
                onClick: n,
                children: (0, a.jsx)("div", {
                  className: "modal-video-body",
                  children: (0, a.jsxs)("div", {
                    className: "modal-video-inner",
                    children: [
                      (0, a.jsx)("button", {
                        className: "modal-video-close-btn",
                        "aria-label": "video",
                        ref: t,
                        onClick: n,
                      }),
                      (0, a.jsx)("div", {
                        className: "modal-video-movie-wrap",
                        children: (0, a.jsx)("iframe", {
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
    9912: function (e, s, i) {
      var a = i(5893);
      i(7294);
      var l = i(1664),
        c = i.n(l),
        n = i(2141);
      s.Z = function (e) {
        let { lightMode: s } = e,
          i = (0, n.YT)({ speed: 10, translateY: [40, -40] });
        return (0, a.jsx)("section", {
          className: "intro-serv section-padding",
          children: (0, a.jsx)("div", {
            className: "container",
            children: (0, a.jsxs)("div", {
              className: "row md-marg justify-content-center",
              children: [
                (0, a.jsx)("div", {
                  className: "col-lg-5",
                  children: (0, a.jsxs)("div", {
                    className: "cont md-mb50",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "mb-50",
                        children: [
                          (0, a.jsx)("h6", {
                            className: "sub-title mb-15",
                            children: "What we do ?",
                          }),
                          (0, a.jsx)("h3", {
                            children:
                              "We want to bring business & the digital world together.",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "item d-flex align-items-center pb-20 mb-20 bord-thin-bottom",
                        children: [
                          (0, a.jsx)("div", {
                            children: (0, a.jsx)("div", {
                              className: "icon-img-50 mr-60",
                              children: (0, a.jsx)("img", {
                                src: "/".concat(
                                  s ? "light" : "dark",
                                  "/assets/imgs/serv-icons/0.png"
                                ),
                                alt: "",
                              }),
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("h6", {
                                children: "Marketing Strategy",
                              }),
                              (0, a.jsxs)("p", {
                                children: [
                                  "Praesent faucibus nisl sit amet nulla ",
                                  (0, a.jsx)("br", {}),
                                  " pretium a sed purus.",
                                ],
                              }),
                              (0, a.jsxs)(c(), {
                                href: "/dark/page-services",
                                className: "arrow mt-20",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "fz-13 mr-10",
                                    children: "Read More",
                                  }),
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
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "item d-flex align-items-center pb-20 mb-20 bord-thin-bottom",
                        children: [
                          (0, a.jsx)("div", {
                            children: (0, a.jsx)("div", {
                              className: "icon-img-50 mr-60",
                              children: (0, a.jsx)("img", {
                                src: "/".concat(
                                  s ? "light" : "dark",
                                  "/assets/imgs/serv-icons/1.png"
                                ),
                                alt: "",
                              }),
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("h6", { children: "Product Design" }),
                              (0, a.jsxs)("p", {
                                children: [
                                  "Praesent faucibus nisl sit amet nulla ",
                                  (0, a.jsx)("br", {}),
                                  " pretium a sed purus.",
                                ],
                              }),
                              (0, a.jsxs)(c(), {
                                href: "/dark/page-services",
                                className: "arrow mt-20",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "fz-13 mr-10",
                                    children: "Read More",
                                  }),
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
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "item d-flex align-items-center pb-20 bord-thin-bottom",
                        children: [
                          (0, a.jsx)("div", {
                            children: (0, a.jsx)("div", {
                              className: "icon-img-50 mr-60",
                              children: (0, a.jsx)("img", {
                                src: "/".concat(
                                  s ? "light" : "dark",
                                  "/assets/imgs/serv-icons/2.png"
                                ),
                                alt: "",
                              }),
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("h6", { children: "E-Commerce" }),
                              (0, a.jsxs)("p", {
                                children: [
                                  "Praesent faucibus nisl sit amet nulla ",
                                  (0, a.jsx)("br", {}),
                                  " pretium a sed purus.",
                                ],
                              }),
                              (0, a.jsxs)(c(), {
                                href: "/dark/page-services",
                                className: "arrow mt-20",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "fz-13 mr-10",
                                    children: "Read More",
                                  }),
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
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "col-lg-5 offset-lg-1",
                  children: (0, a.jsx)("div", {
                    ref: i.ref,
                    children: (0, a.jsx)("img", {
                      src: "/".concat(
                        s ? "light" : "dark",
                        "/assets/imgs/about/v1.jpg"
                      ),
                      alt: "",
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    4097: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return h;
        },
      });
      var a = i(5893),
        l = i(7294),
        c = i(1664),
        n = i.n(c),
        r = i(719),
        t = i(8116),
        d = JSON.parse(
          '[{"id":1,"image":"/assets/imgs/blog/h1.jpg","date":"30 august 2021","title":"Creative advertising in our life became a info noise"},{"id":2,"image":"/assets/imgs/blog/h2.jpg","date":"30 august 2021","title":"Creative advertising in our life became a info noise"},{"id":3,"image":"/assets/imgs/blog/h3.jpg","date":"30 august 2021","title":"Creative advertising in our life became a info noise"}]'
        );
      let o = {
        modules: [t.W_],
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 1e3,
        loop: !0,
        breakpoints: {
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
        navigation: {
          nextEl: ".blog-modern .swiper-button-next",
          prevEl: ".blog-modern .swiper-button-prev",
        },
      };
      var h = function (e) {
        let { lightMode: s } = e,
          [i, c] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            c(!0);
          }, []),
          (0, a.jsx)("section", {
            className: "blog-modern section-padding",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "sec-head mb-80",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "col-lg-6",
                        children: [
                          (0, a.jsx)("h6", {
                            className: "sub-title mb-15",
                            children: "Latest News",
                          }),
                          (0, a.jsx)("h2", {
                            className: "fz-50",
                            children: "Our News.",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-6 d-flex align-items-center",
                        children: (0, a.jsx)("div", {
                          className: "full-width",
                          children: (0, a.jsx)("div", {
                            className: "d-flex justify-content-end justify-end",
                            children: (0, a.jsxs)("div", {
                              className: "swiper-controls arrow-out d-flex",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "swiper-button-prev",
                                  tabIndex: "0",
                                  role: "button",
                                  "aria-label": "Previous slide",
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
                                  tabIndex: "0",
                                  role: "button",
                                  "aria-label": "Next slide",
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
                (0, a.jsx)("div", {
                  className: "blog-carsouel",
                  children:
                    i &&
                    (0, a.jsx)(r.tq, {
                      ...o,
                      id: "content-carousel-container-unq-blog",
                      className: "swiper-container",
                      children: d.map((e) =>
                        (0, a.jsx)(
                          r.o5,
                          {
                            className: "wow fadeInUp",
                            "data-wow-delay": ".1s",
                            children: (0, a.jsxs)("div", {
                              className: "item",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "img",
                                  children: [
                                    (0, a.jsx)("img", {
                                      src: "/"
                                        .concat(s ? "light" : "dark")
                                        .concat(e.image),
                                      alt: "",
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "date",
                                      children: (0, a.jsx)(n(), {
                                        href: "/dark/blog-post",
                                        children: e.date,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "cont mt-30",
                                  children: [
                                    (0, a.jsx)("h6", {
                                      children: (0, a.jsx)(n(), {
                                        href: "/dark/blog-post",
                                        children: e.title,
                                      }),
                                    }),
                                    (0, a.jsxs)(n(), {
                                      href: "/dark/blog-post",
                                      className: "mt-20 ls1 sub-title",
                                      children: [
                                        "Read More ",
                                        (0, a.jsx)("i", {
                                          className: "ml-5",
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
          })
        );
      };
    },
    7818: function (e, s, i) {
      var a = i(5893),
        l = i(7294),
        c = i(1664),
        n = i.n(c),
        r = i(8366);
      s.Z = function (e) {
        let { lightMode: s } = e;
        return (
          (0, l.useEffect)(() => {
            (0, r.Z)();
          }, []),
          (0, a.jsxs)("section", {
            className: "call-action-center section-padding position-re sub-bg",
            children: [
              (0, a.jsx)("div", {
                className: "container",
                children: (0, a.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, a.jsx)("div", {
                    className: "col-lg-10",
                    children: (0, a.jsx)("div", {
                      className: "sec-lg-head text-center",
                      children: (0, a.jsxs)("h2", {
                        className: "fz-70 fw-700",
                        children: [
                          (0, a.jsx)("span", {
                            children: "Have a project in mind?",
                          }),
                          " ",
                          (0, a.jsx)("br", {}),
                          (0, a.jsx)("span", {
                            className: "underline",
                            children: (0, a.jsx)(n(), {
                              href: "/dark/page-contact",
                              className: "main-color2",
                              children: "Let’s get to work.",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "bg-pattern bg-img",
                "data-background": "/".concat(
                  s ? "light" : "dark",
                  "/assets/imgs/patterns/graph.png"
                ),
              }),
            ],
          })
        );
      };
    },
    6560: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return d;
        },
      });
      var a = i(5893),
        l = i(7294),
        c = i(719),
        n = i(8116),
        r = JSON.parse(
          '["/assets/imgs/brands/01.png","/assets/imgs/brands/02.png","/assets/imgs/brands/03.png","/assets/imgs/brands/04.png","/assets/imgs/brands/05.png"]'
        );
      let t = {
        modules: [n.W_, n.pt],
        slidesPerView: 5,
        speed: 1e3,
        loop: !0,
        spaceBetween: 40,
        breakpoints: {
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        },
      };
      var d = function (e) {
        let { lightMode: s } = e,
          [i, n] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            n(!0);
          }, []),
          (0, a.jsx)("section", {
            className: "clients-carso section-padding pt-0",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, a.jsx)("div", {
                    className: "col-lg-9",
                    children: (0, a.jsx)("div", {
                      className: "text-center mb-50",
                      children: (0, a.jsxs)("h6", {
                        className: "fz-14 fw-400",
                        children: [
                          "More than ",
                          (0, a.jsx)("span", {
                            className: "fw-600",
                            children: "200+ companies",
                          }),
                          " trusted us worldwide",
                        ],
                      }),
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "swiper5",
                  children:
                    i &&
                    (0, a.jsx)(c.tq, {
                      ...t,
                      id: "content-carousel-container-unq-clients",
                      className: "swiper-container",
                      children: r.map((e) =>
                        (0, a.jsx)(
                          c.o5,
                          {
                            children: (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsx)("div", {
                                className: "img icon-img-100",
                                children: (0, a.jsx)("img", {
                                  src: "/"
                                    .concat(s ? "light" : "dark")
                                    .concat(e),
                                  alt: "",
                                }),
                              }),
                            }),
                          },
                          e
                        )
                      ),
                    }),
                }),
              ],
            }),
          })
        );
      };
    },
    570: function (e, s, i) {
      var a = i(5893),
        l = i(7294),
        c = i(7513);
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
            className: "main-bg",
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
                                  "\xa9 2025 This page is Powered by ",
                                  (0, a.jsx)("span", {
                                    className: "underline",
                                    children: (0, a.jsx)("a", {
                                      href: c.a,
                                      target: "_blank",
                                      children: c.v,
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
    5471: function (e, s, i) {
      var a = i(5893),
        l = i(7294),
        c = i(1664),
        n = i.n(c),
        r = i(8366);
      s.Z = function (e) {
        let { lightMode: s } = e;
        return (
          (0, l.useEffect)(() => {
            (0, r.Z)();
          }, []),
          (0, a.jsxs)("header", {
            className: "header-main-crev sub-bg",
            children: [
              (0, a.jsx)("div", {
                className: "container ontop",
                children: (0, a.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-9",
                      children: (0, a.jsx)("div", {
                        className: "caption",
                        children: (0, a.jsxs)("h1", {
                          className: "fz-80",
                          children: [
                            "Digital marketing ",
                            (0, a.jsx)("br", {}),
                            " the new way.",
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-3 d-flex align-items-center",
                      children: (0, a.jsx)("div", {
                        children: (0, a.jsx)("div", {
                          className: "text",
                          children: (0, a.jsx)("p", {
                            children:
                              "We take a similar approach to design commercial we do impactfully approches over the flowchart of user friendly wireframe.",
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-3 valign",
                      children: (0, a.jsx)("div", {
                        className: "md-hide",
                        children: (0, a.jsx)(n(), {
                          href: "/dark/page-about",
                          className: "hover-this",
                          children: (0, a.jsxs)("div", {
                            className: "circle-button in-bord hover-anim",
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
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-9",
                      children: (0, a.jsx)("div", {
                        className: "img",
                        children: (0, a.jsx)("img", {
                          src: "/dark/assets/imgs/background/19.jpg",
                          alt: "",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "bg-pattern bg-img",
                "data-background": "/".concat(
                  s ? "light" : "dark",
                  "/assets/imgs/patterns/graph.png"
                ),
              }),
            ],
          })
        );
      };
    },
    4919: function (e, s, i) {
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
                      className: "imgs full-width mb-80",
                      children: [
                        (0, a.jsx)("div", {
                          className: "img1 main-color2 wow fadeInUp",
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
                      className: "cont full-width",
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
                                children: (0, a.jsx)("span", {
                                  className: "up-text",
                                  children: "digital marketing.",
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
    6564: function (e, s, i) {
      var a = i(5893);
      i(7294),
        (s.Z = function () {
          return (0, a.jsx)("section", {
            className: "serv-marq main-colorbg2",
            children: (0, a.jsx)("div", {
              className: "container-fluid no-skew rest pt-20 pb-20",
              children: (0, a.jsx)("div", {
                className: "row",
                children: (0, a.jsx)("div", {
                  className: "col-12",
                  children: (0, a.jsx)("div", {
                    className: "main-marq dark-text",
                    children: (0, a.jsxs)("div", {
                      className: "slide-har st1",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "box non-strok",
                          children: [
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "UI-UX Experience",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Web Development",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Digital Marketing",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Product Design",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Mobile Solutions",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "box non-strok",
                          children: [
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "UI-UX Experience",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Web Development",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Digital Marketing",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Product Design",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
                                    className: "fz-50 ml-50 stroke icon",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "item",
                              children: (0, a.jsxs)("h4", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Mobile Solutions",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", {
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
    2720: function (e, s, i) {
      var a = i(5893);
      i(7294);
      var l = i(1664),
        c = i.n(l);
      s.Z = function () {
        return (0, a.jsx)("section", {
          className: "call-marq",
          children: (0, a.jsx)("div", {
            className: "container-fluid main-colorbg2 rest no-skew pt-20 pb-15",
            children: (0, a.jsx)("div", {
              className: "row",
              children: (0, a.jsx)("div", {
                className: "col-12",
                children: (0, a.jsx)("div", {
                  className: "main-marq dark-text",
                  children: (0, a.jsxs)("div", {
                    className: "slide-har st1",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "box non-strok",
                        children: [
                          (0, a.jsx)("div", {
                            className: "item",
                            children: (0, a.jsx)(c(), {
                              href: "/dark/page-contact",
                              children: (0, a.jsx)("h4", {
                                children: "Get In Touch",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "item",
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
                          (0, a.jsx)("div", {
                            className: "item",
                            children: (0, a.jsx)(c(), {
                              href: "/dark/page-contact",
                              children: (0, a.jsx)("h4", {
                                children: "Get In Touch",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "item",
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
                          (0, a.jsx)("div", {
                            className: "item",
                            children: (0, a.jsx)(c(), {
                              href: "/dark/page-contact",
                              children: (0, a.jsx)("h4", {
                                children: "Get In Touch",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "item",
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
                          (0, a.jsx)("div", {
                            className: "item",
                            children: (0, a.jsx)(c(), {
                              href: "/dark/page-contact",
                              children: (0, a.jsx)("h4", {
                                children: "Get In Touch",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "item",
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
                          (0, a.jsx)("div", {
                            className: "item",
                            children: (0, a.jsx)(c(), {
                              href: "/dark/page-contact",
                              children: (0, a.jsx)("h4", {
                                children: "Get In Touch",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "item",
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
                      (0, a.jsxs)("div", {
                        className: "box non-strok",
                        children: [
                          (0, a.jsx)("div", {
                            className: "item",
                            children: (0, a.jsx)(c(), {
                              href: "/dark/page-contact",
                              children: (0, a.jsx)("h4", {
                                children: "Get In Touch",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "item",
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
                          (0, a.jsx)("div", {
                            className: "item",
                            children: (0, a.jsx)(c(), {
                              href: "/dark/page-contact",
                              children: (0, a.jsx)("h4", {
                                children: "Get In Touch",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "item",
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
                          (0, a.jsx)("div", {
                            className: "item",
                            children: (0, a.jsx)(c(), {
                              href: "/dark/page-contact",
                              children: (0, a.jsx)("h4", {
                                children: "Get In Touch",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "item",
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
                          (0, a.jsx)("div", {
                            className: "item",
                            children: (0, a.jsx)(c(), {
                              href: "/dark/page-contact",
                              children: (0, a.jsx)("h4", {
                                children: "Get In Touch",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "item",
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
                          (0, a.jsx)("div", {
                            className: "item",
                            children: (0, a.jsx)(c(), {
                              href: "/dark/page-contact",
                              children: (0, a.jsx)("h4", {
                                children: "Get In Touch",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "item",
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
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      };
    },
    8309: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return h;
        },
      });
      var a = i(5893),
        l = i(7294),
        c = i(1664),
        n = i.n(c),
        r = i(719),
        t = i(8116),
        d = JSON.parse(
          '[{"id":1,"image":"/dark/assets/imgs/portfolio/4/01.jpg","tag":"Branding","title":"Artboard Studio"},{"id":2,"image":"/dark/assets/imgs/portfolio/4/02.jpg","tag":"Branding","title":"Artboard Studio"},{"id":3,"image":"/dark/assets/imgs/portfolio/4/03.jpg","tag":"Branding","title":"Artboard Studio"},{"id":4,"image":"/dark/assets/imgs/portfolio/4/04.jpg","tag":"Branding","title":"Artboard Studio"},{"id":5,"image":"/dark/assets/imgs/portfolio/4/05.jpg","tag":"Branding","title":"Artboard Studio"}]'
        );
      let o = {
        modules: [t.W_, t.tl, t.pt],
        slidesPerView: 3,
        spaceBetween: 120,
        loop: !0,
        speed: 1e3,
        centeredSlides: !0,
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 30 },
          640: { slidesPerView: 2, spaceBetween: 60 },
          768: { slidesPerView: 2, spaceBetween: 60 },
          1024: { slidesPerView: 3 },
        },
        pagination: { el: ".work-carsouel .swiper-pagination", clickable: !0 },
        navigation: {
          nextEl: ".work-carsouel .swiper-button-next",
          prevEl: ".work-carsouel .swiper-button-prev",
        },
      };
      var h = function () {
        let [e, s] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            s(!0);
          }, []),
          (0, a.jsxs)("section", {
            className: "work-carsouel section-padding sub-bg",
            children: [
              (0, a.jsx)("div", {
                className: "container",
                children: (0, a.jsx)("div", {
                  className: "sec-head mb-80",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "col-lg-6",
                        children: [
                          (0, a.jsx)("h6", {
                            className: "sub-title mb-15",
                            children: "Our Portfolio",
                          }),
                          (0, a.jsx)("h2", {
                            className: "fz-50",
                            children: "Selected Projects.",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-6 d-flex align-items-center",
                        children: (0, a.jsx)("div", {
                          className: "full-width",
                          children: (0, a.jsx)("div", {
                            className: "d-flex justify-content-end justify-end",
                            children: (0, a.jsxs)("div", {
                              className: "swiper-controls arrow-out d-flex",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "swiper-button-prev",
                                  tabIndex: "0",
                                  role: "button",
                                  "aria-label": "Previous slide",
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
                                  tabIndex: "0",
                                  role: "button",
                                  "aria-label": "Next slide",
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
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "col-12",
                    children: (0, a.jsx)("div", {
                      className: "work-crus work-crus3 random out",
                      children:
                        e &&
                        (0, a.jsx)(r.tq, {
                          ...o,
                          id: "content-carousel-container-unq-w",
                          className: "swiper-container",
                          children: d.map((e) =>
                            (0, a.jsx)(
                              r.o5,
                              {
                                children: (0, a.jsx)("div", {
                                  className: "item",
                                  children: (0, a.jsxs)("div", {
                                    className: "img",
                                    children: [
                                      (0, a.jsx)("img", {
                                        src: e.image,
                                        alt: "",
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                          (0, a.jsx)("span", {
                                            className: "mb-5",
                                            children: e.tag,
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fz-18",
                                            children: e.title,
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)(n(), {
                                        href: "/dark/project-details1",
                                        className: "plink",
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              e.id
                            )
                          ),
                        }),
                    }),
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    2300: function (e, s, i) {
      i.d(s, {
        Z: function () {
          return r;
        },
      });
      var a = i(5893);
      i(7294);
      var l = i(1664),
        c = i.n(l),
        n = JSON.parse(
          '[{"id":1,"image":"/assets/imgs/serv-img/1.jpg","icon":"/assets/imgs/serv-icons/0.png","title":"Branding Services"},{"id":2,"image":"/assets/imgs/serv-img/2.jpg","icon":"/assets/imgs/serv-icons/1.png","title":"Digital Product Design"},{"id":3,"image":"/assets/imgs/serv-img/3.jpg","icon":"/assets/imgs/serv-icons/2.png","title":"Media Planning"},{"id":4,"image":"/assets/imgs/serv-img/4.jpg","icon":"/assets/imgs/serv-icons/0.png","title":"Advertising Marketing"},{"id":5,"image":"/assets/imgs/serv-img/5.jpg","icon":"/assets/imgs/serv-icons/1.png","title":"IT Consulting"},{"id":6,"image":"/assets/imgs/serv-img/6.jpg","icon":"/assets/imgs/serv-icons/2.png","title":"Web Development"}]'
        ),
        r = function (e) {
          let { lightMode: s } = e;
          return (0, a.jsx)("section", {
            className: "serv-img-reveal section-padding",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "sec-head mb-80",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "col-lg-6",
                        children: [
                          (0, a.jsx)("h6", {
                            className: "sub-title mb-15",
                            children: "What we do ?",
                          }),
                          (0, a.jsx)("h2", {
                            className: "fz-50",
                            children: "Featured Services.",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-6 d-flex align-items-center",
                        children: (0, a.jsx)("div", {
                          className:
                            "full-width d-flex justify-content-end justify-end",
                          children: (0, a.jsxs)("div", {
                            className: "vew-all wow fadeIn",
                            children: [
                              "Link ",
                              (0, a.jsxs)(c(), {
                                href: "/dark/page-services",
                                children: [
                                  "View All Services",
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
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "row md-marg content",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-lg-6",
                      children: (0, a.jsx)("div", {
                        children: (0, a.jsx)("ul", {
                          className: "rest",
                          children: n.slice(0, 3).map((e) =>
                            (0, a.jsx)(
                              "li",
                              {
                                className: "block",
                                "data-fx": "1",
                                children: (0, a.jsx)(c(), {
                                  href: "/dark/project-details1",
                                  className:
                                    "mb-30 pb-30 bord-thin-bottom full-width block__title",
                                  "data-img": "/"
                                    .concat(s ? "light" : "dark")
                                    .concat(e.image),
                                  children: (0, a.jsxs)("div", {
                                    className: "d-flex align-items-center",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "mr-80",
                                        children: (0, a.jsx)("span", {
                                          className: "icon-img-50",
                                          children: (0, a.jsx)("img", {
                                            src: "/"
                                              .concat(s ? "light" : "dark")
                                              .concat(e.icon),
                                            alt: "",
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        children: (0, a.jsx)("h5", {
                                          children: e.title,
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "ml-auto",
                                        children: (0, a.jsx)("div", {
                                          className: "arrow",
                                          children: (0, a.jsx)("span", {
                                            className: "circle",
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
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              e.id
                            )
                          ),
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-lg-6",
                      children: (0, a.jsx)("div", {
                        children: (0, a.jsx)("ul", {
                          className: "rest",
                          children: n.slice(3).map((e) =>
                            (0, a.jsx)(
                              "li",
                              {
                                className: "block",
                                "data-fx": "1",
                                children: (0, a.jsx)(c(), {
                                  href: "/project-details1",
                                  className:
                                    "mb-30 pb-30 bord-thin-bottom full-width block__title",
                                  "data-img": "/"
                                    .concat(s ? "light" : "dark")
                                    .concat(e.image),
                                  children: (0, a.jsxs)("div", {
                                    className: "d-flex align-items-center",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "mr-80",
                                        children: (0, a.jsx)("span", {
                                          className: "icon-img-50",
                                          children: (0, a.jsx)("img", {
                                            src: "/"
                                              .concat(s ? "light" : "dark")
                                              .concat(e.icon),
                                            alt: "",
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        children: (0, a.jsx)("h5", {
                                          children: e.title,
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "ml-auto",
                                        children: (0, a.jsx)("div", {
                                          className: "arrow",
                                          children: (0, a.jsx)("span", {
                                            className: "circle",
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
                                        }),
                                      }),
                                    ],
                                  }),
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
              ],
            }),
          });
        };
    },
    4207: function (e, s, i) {
      var a = i(5893),
        l = i(7294),
        c = i(1664),
        n = i.n(c),
        r = i(6036),
        t = i(4576);
      s.Z = function () {
        let [e, s] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            (0, t.Z)(".bg-img.parallaxie", 0.4);
          }, []),
          (0, a.jsxs)("section", {
            className: "sideimg-numbers section-padding sub-bg",
            children: [
              (0, a.jsx)("div", {
                className: "container",
                children: (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "col-lg-6 offset-lg-6",
                    children: (0, a.jsx)("div", {
                      className: "cont",
                      children: (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("h6", {
                            className: "sub-title mb-15",
                            children: "Who we are ?",
                          }),
                          (0, a.jsx)("h2", {
                            className: "fz-50",
                            children:
                              "We want to bring business & the digital world together.",
                          }),
                          (0, a.jsx)("div", {
                            className: "underline",
                            children: (0, a.jsxs)(n(), {
                              href: "/dark/page-about",
                              className: "arrow mt-30",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "sub-title",
                                  children: "Explore about us",
                                }),
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
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className:
                  "bg-img bg-left parallaxie d-flex align-items-center justify-content-center",
                "data-background": "/dark/assets/imgs/background/3.jpg",
                children: (0, a.jsx)("div", {
                  className: "vid-circle bg-white text-dark",
                  children: (0, a.jsx)("a", {
                    href: "https://youtu.be/AzwC6umvd1s",
                    className: "vid",
                    onClick: function (e) {
                      e.preventDefault(), s(!0);
                    },
                    children: (0, a.jsx)("span", {
                      className: "icon",
                      children: (0, a.jsx)("svg", {
                        className: "default",
                        width: "13",
                        height: "20",
                        viewBox: "0 0 13 20",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                          d: "M0 20L13 10L0 0V20Z",
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "container-fluid mt-100",
                children: (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "col-12",
                    children: (0, a.jsx)("div", {
                      className: "main-marq xlrg",
                      children: (0, a.jsxs)("div", {
                        className: "slide-har st1 strok",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "box",
                            children: [
                              (0, a.jsx)("div", {
                                className: "item",
                                children: (0, a.jsx)("h4", {
                                  className: "stroke opacity-4",
                                  children: "Amazing Services",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "item",
                                children: (0, a.jsx)("h4", {
                                  className: "stroke opacity-4",
                                  children: "Amazing Services",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "item",
                                children: (0, a.jsx)("h4", {
                                  className: "stroke opacity-4",
                                  children: "Amazing Services",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "item",
                                children: (0, a.jsx)("h4", {
                                  className: "stroke opacity-4",
                                  children: "Amazing Services",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "item",
                                children: (0, a.jsx)("h4", {
                                  className: "stroke opacity-4",
                                  children: "Amazing Services",
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
                                  className: "stroke opacity-4",
                                  children: "Amazing Services",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "item",
                                children: (0, a.jsx)("h4", {
                                  className: "stroke opacity-4",
                                  children: "Amazing Services",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "item",
                                children: (0, a.jsx)("h4", {
                                  className: "stroke opacity-4",
                                  children: "Amazing Services",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "item",
                                children: (0, a.jsx)("h4", {
                                  className: "stroke opacity-4",
                                  children: "Amazing Services",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "item",
                                children: (0, a.jsx)("h4", {
                                  className: "stroke opacity-4",
                                  children: "Amazing Services",
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
              (0, a.jsx)(r.Z, {
                videoId: "AzwC6umvd1s",
                channel: "youtube",
                isOpen: e,
                onClose: () => s(!1),
                autoplay: !0,
              }),
            ],
          })
        );
      };
    },
    9522: function (e, s, i) {
      var a = i(5893),
        l = i(7294),
        c = i(719),
        n = i(8116),
        r = i(8366);
      let t = {
        modules: [n.W_, n.tl],
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        pagination: { el: ".swiper-pagination", clickable: !0 },
        navigation: {
          nextEl: ".testim-controls .swiper-button-next",
          prevEl: ".testim-controls .swiper-button-prev",
        },
      };
      s.Z = function (e) {
        let { lightMode: s } = e,
          [i, n] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            n(!0), (0, r.Z)();
          }, []),
          (0, a.jsx)("section", {
            className: "testim-crv2 sub-bg",
            children: (0, a.jsxs)("div", {
              className: "container section-padding position-re",
              children: [
                (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsxs)("div", {
                    className: "col-lg-5",
                    children: [
                      (0, a.jsx)("div", {
                        className: "testim-swiper mt-80",
                        children:
                          i &&
                          (0, a.jsx)(c.tq, {
                            ...t,
                            id: "content-carousel-container-unq-testim",
                            className: "swiper-container",
                            children: (0, a.jsx)(c.o5, {
                              children: (0, a.jsxs)("div", {
                                className: "item",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "cont mb-40",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "rate-stars mb-20 fz-16",
                                        children: (0, a.jsxs)("span", {
                                          className: "rate main-color2",
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
                                      (0, a.jsx)("h5", {
                                        className: "fw-400",
                                        children:
                                          "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "line-icon mb-20 d-flex",
                                    children: (0, a.jsx)("div", {
                                      className: "ml-auto",
                                      children: (0, a.jsx)("div", {
                                        className: "img sub-bg",
                                        children: (0, a.jsx)("img", {
                                          src: "/".concat(
                                            s ? "light" : "dark",
                                            "/assets/imgs/svg-assets/quote.png"
                                          ),
                                          alt: "",
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "d-flex align-items-center",
                                    children: [
                                      (0, a.jsx)("div", {
                                        children: (0, a.jsx)("div", {
                                          className: "img circle-60",
                                          children: (0, a.jsx)("img", {
                                            src: "/".concat(
                                              s ? "light" : "dark",
                                              "/assets/imgs/testim/1.jpg"
                                            ),
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
                                              children: "Leonard Heiser",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "opacity-7 sub-title",
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
                          }),
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "swiper-controls testim-controls arrow-out d-flex mt-80",
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
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "half-img-right bg-img ontop md-hide",
                  "data-background": "/".concat(
                    s ? "light" : "dark",
                    "/assets/imgs/testim/01.png"
                  ),
                }),
              ],
            }),
          })
        );
      };
    },
  },
]);
