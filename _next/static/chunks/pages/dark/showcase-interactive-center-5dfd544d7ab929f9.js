(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7123],
  {
    4388: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/showcase-interactive-center",
        function () {
          return t(7542);
        },
      ]);
    },
    6852: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      var r = t(5893);
      t(7294);
      var i = t(1664),
        n = t.n(i),
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
          return (0, r.jsxs)("section", {
            className: "inter-links-center section-padding",
            children: [
              (0, r.jsx)("div", {
                className: "container-xxl",
                children: (0, r.jsx)("div", {
                  className: "row",
                  children: (0, r.jsx)("div", {
                    className: "col-12",
                    children: (0, r.jsx)("div", {
                      className: "links-text d-flex justify-content-center",
                      children: (0, r.jsx)("ul", {
                        className: "rest",
                        children: l.map((t) =>
                          (0, r.jsx)(
                            "li",
                            {
                              "data-tab": "tab-".concat(t.id),
                              onMouseEnter: e,
                              onMouseLeave: s,
                              children: (0, r.jsxs)("h2", {
                                children: [
                                  (0, r.jsxs)("span", {
                                    className: "num",
                                    children: [t.number, "."],
                                  }),
                                  (0, r.jsxs)(n(), {
                                    href: "/dark/project-details1",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "tag sub-title",
                                        children: t.type,
                                      }),
                                      " ",
                                      (0, r.jsx)("span", {
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
              (0, r.jsx)("div", {
                className: "links-img",
                children: l.map((e) =>
                  (0, r.jsx)(
                    "div",
                    {
                      className: "img",
                      id: "tab-".concat(e.id),
                      children: (0, r.jsx)("img", { src: e.image, alt: "" }),
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
      var r = t(5893),
        i = t(7294),
        n = t(9008),
        l = t.n(n),
        a = t(8104),
        c = t(7458),
        d = t(6054),
        o = t(4555);
      let u = (e) => {
        let { children: s, lightMode: t } = e;
        return (
          (0, i.useEffect)(() => {
            (0, a.Z)({ lightMode: t });
          }, [t]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(l(), {
                children: t
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/plugins.css",
                        }),
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/style.css",
                        }),
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/showcase/assets/css/showcases.css",
                        }),
                      ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/dark/assets/css/base.css",
                        }),
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/dark/showcase/assets/css/showcases.css",
                        }),
                      ],
                    }),
              }),
              (0, r.jsx)(c.Z, {}),
              (0, r.jsx)(d.Z, {}),
              (0, r.jsx)(o.Z, {}),
              s,
            ],
          })
        );
      };
      s.Z = u;
    },
    7542: function (e, s, t) {
      "use strict";
      t.r(s);
      var r = t(5893),
        i = t(7294),
        n = t(9008),
        l = t.n(n),
        a = t(480),
        c = t(7458),
        d = t(7217),
        o = t(8232),
        u = t(6852);
      function m() {
        return (
          (0, i.useEffect)(
            () => (
              document.body.classList.add("main-bg", "inter-center"),
              () => document.body.classList.remove("main-bg", "inter-center")
            ),
            []
          ),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(l(), {
                children: (0, r.jsx)("title", {
                  children: "Geekfolio - Interactive",
                }),
              }),
              (0, r.jsx)(c.Z, {}),
              (0, r.jsx)(d.Z, {}),
              (0, r.jsx)(o.Z, {}),
              (0, r.jsx)("main", { children: (0, r.jsx)(u.Z, {}) }),
            ],
          })
        );
      }
      (m.getLayout = (e) => (0, r.jsx)(a.Z, { children: e })), (s.default = m);
    },
  },
  function (e) {
    e.O(0, [1664, 7142, 9774, 2888, 179], function () {
      return e((e.s = 4388));
    }),
      (_N_E = e.O());
  },
]);
