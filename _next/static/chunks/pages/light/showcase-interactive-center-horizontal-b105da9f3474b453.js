(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5517],
  {
    9239: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/light/showcase-interactive-center-horizontal",
        function () {
          return t(7565);
        },
      ]);
    },
    4348: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      var i = t(5893);
      t(7294);
      var r = t(1664),
        n = t.n(r),
        l = JSON.parse(
          '[{"id":1,"number":"01","type":"Design","title":"Everybody sunshine","image":"/dark/assets/imgs/works/full/1.jpg"},{"id":2,"number":"02","type":"Branding","title":"Who Dares Wins","image":"/dark/assets/imgs/works/full/2.jpg"},{"id":3,"number":"03","type":"Branding","title":"Fountain Studio","image":"/dark/assets/imgs/works/full/3.jpg"},{"id":4,"number":"04","type":"Photography","title":"April willow flower","image":"/dark/assets/imgs/works/full/4.jpg"},{"id":5,"number":"05","type":"Design","title":"Step Over","image":"/dark/assets/imgs/works/full/1.jpg"},{"id":6,"number":"06","type":"ART Design","title":"Snowy Zero","image":"/dark/assets/imgs/works/full/2.jpg"},{"id":7,"number":"07","type":"Design","title":"Fun Bike","image":"/dark/assets/imgs/works/full/3.jpg"},{"id":8,"number":"08","type":"Apps","title":"Mobile Apps","image":"/dark/assets/imgs/works/full/4.jpg"}]'
        ),
        a = function () {
          function e(e) {
            var s = e.currentTarget.getAttribute("data-tab");
            if (
              (document.querySelectorAll(".links-text li").forEach((e) => {
                e.classList.remove("current"), e.classList.add("no-active");
              }),
              e.currentTarget.classList.add("current"),
              e.currentTarget.classList.remove("no-active"),
              document
                .querySelectorAll(".links-img .img")
                .forEach((e) => e.classList.remove("current")),
              document.querySelector("#" + s).classList.add("current"),
              e.currentTarget.classList.contains("current"))
            )
              return !1;
          }
          function s() {
            document
              .querySelectorAll(".links-text li")
              .forEach((e) => e.classList.remove("current")),
              document
                .querySelectorAll(".links-img .img")
                .forEach((e) => e.classList.remove("current")),
              document
                .querySelectorAll(".links-text li")
                .forEach((e) => e.classList.remove("no-active"));
          }
          return (0, i.jsxs)("section", {
            className:
              "inter-links-center horizontal section-padding d-flex align-items-center",
            children: [
              (0, i.jsx)("div", {
                className: "container-xxl",
                children: (0, i.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, i.jsx)("div", {
                    className: "col-lg-10",
                    children: (0, i.jsx)("div", {
                      className: "links-text d-flex justify-content-center",
                      children: (0, i.jsx)("ul", {
                        className: "rest",
                        children: l.map((t) =>
                          (0, i.jsx)(
                            "li",
                            {
                              "data-tab": "tab-".concat(t.id),
                              onMouseEnter: e,
                              onMouseLeave: s,
                              children: (0, i.jsxs)("h2", {
                                children: [
                                  (0, i.jsxs)("span", {
                                    className: "num",
                                    children: [t.number, "."],
                                  }),
                                  (0, i.jsxs)(n(), {
                                    href: "/dark/project-details1",
                                    children: [
                                      (0, i.jsx)("span", {
                                        className: "tag sub-title",
                                        children: t.type,
                                      }),
                                      " ",
                                      (0, i.jsx)("span", {
                                        className: "text",
                                        children: t.title,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            t.id
                          )
                        ),
                      }),
                    }),
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: "links-img",
                children: l.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: "img",
                      id: "tab-".concat(e.id),
                      children: (0, i.jsx)("img", { src: e.image, alt: "" }),
                    },
                    e.id
                  )
                ),
              }),
            ],
          });
        };
    },
    480: function (e, s, t) {
      "use strict";
      var i = t(5893),
        r = t(7294),
        n = t(9008),
        l = t.n(n),
        a = t(8104),
        c = t(7458),
        o = t(6054),
        d = t(4555);
      let u = (e) => {
        let { children: s, lightMode: t } = e;
        return (
          (0, r.useEffect)(() => {
            (0, a.Z)({ lightMode: t });
          }, [t]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(l(), {
                children: t
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/plugins.css",
                        }),
                        (0, i.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/style.css",
                        }),
                        (0, i.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/showcase/assets/css/showcases.css",
                        }),
                      ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("link", {
                          rel: "stylesheet",
                          href: "/dark/assets/css/base.css",
                        }),
                        (0, i.jsx)("link", {
                          rel: "stylesheet",
                          href: "/dark/showcase/assets/css/showcases.css",
                        }),
                      ],
                    }),
              }),
              (0, i.jsx)(c.Z, {}),
              (0, i.jsx)(o.Z, {}),
              (0, i.jsx)(d.Z, {}),
              s,
            ],
          })
        );
      };
      s.Z = u;
    },
    7565: function (e, s, t) {
      "use strict";
      t.r(s);
      var i = t(5893),
        r = t(7294),
        n = t(9008),
        l = t.n(n),
        a = t(480),
        c = t(7458),
        o = t(7217),
        d = t(8232),
        u = t(4348);
      function m() {
        return (
          (0, r.useEffect)(
            () => (
              document.body.classList.add("main-bg", "inter-center"),
              () => document.body.classList.remove("main-bg", "inter-center")
            ),
            []
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(l(), {
                children: (0, i.jsx)("title", {
                  children: "Geekfolio - Interactive Horizontal",
                }),
              }),
              (0, i.jsx)(c.Z, {}),
              (0, i.jsx)(o.Z, { alwaysDark: !0 }),
              (0, i.jsx)(d.Z, { lightMode: !0 }),
              (0, i.jsx)("main", { children: (0, i.jsx)(u.Z, {}) }),
            ],
          })
        );
      }
      (m.getLayout = (e) => (0, i.jsx)(a.Z, { lightMode: !0, children: e })),
        (s.default = m);
    },
  },
  function (e) {
    e.O(0, [1664, 7142, 9774, 2888, 179], function () {
      return e((e.s = 9239));
    }),
      (_N_E = e.O());
  },
]);
