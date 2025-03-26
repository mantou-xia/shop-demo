(window._iconfont_svg_string_4871027 =
  '<svg><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M946.176 887.808L767.488 709.12c125.44-154.624 116.224-382.976-27.648-526.848-153.6-153.6-403.968-153.6-557.568 0s-153.6 403.968 0 557.568c76.8 76.8 177.664 115.2 278.528 115.2 88.064 0 176.128-29.184 248.32-88.064l178.688 178.688c8.192 8.192 18.432 11.776 29.184 11.776 10.24 0 20.992-4.096 29.184-11.776 15.872-15.872 15.872-41.472 0-57.856zM240.128 681.472c-121.856-121.856-121.856-320 0-441.856 60.928-60.416 140.8-91.136 220.672-91.136 79.872 0 159.744 30.208 220.672 91.136 121.856 121.856 121.856 320 0 441.856-121.344 121.856-319.488 121.856-441.344 0z" fill="#666666" ></path></symbol></svg>'),
  ((n) => {
    const t = (e = (e = document.getElementsByTagName("script"))[
      e.length - 1
    ]).getAttribute("data-injectcss");
    var e = e.getAttribute("data-disable-injectsvg");
    if (!e) {
      let o;
      let i;
      var c;
      var d;
      var s;
      const a = function (t, e) {
        e.parentNode.insertBefore(t, e);
      };
      if (t && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
          );
        } catch (t) {
          console && console.log(t);
        }
      }
      (o = function () {
        let t;
        let e = document.createElement("div");
        (e.innerHTML = n._iconfont_svg_string_4871027),
          (e = e.getElementsByTagName("svg")[0]) &&
            (e.setAttribute("aria-hidden", "true"),
            (e.style.position = "absolute"),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = "hidden"),
            (e = e),
            (t = document.body).firstChild
              ? a(e, t.firstChild)
              : t.appendChild(e));
      }),
        document.addEventListener
          ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener("DOMContentLoaded", i, !1), o();
              }),
              document.addEventListener("DOMContentLoaded", i, !1))
          : document.attachEvent &&
            ((c = o),
            (d = n.document),
            (s = !1),
            r(),
            (d.onreadystatechange = function () {
              d.readyState == "complete" &&
                ((d.onreadystatechange = null), l());
            }));
    }
    function l() {
      s || ((s = !0), c());
    }
    function r() {
      try {
        d.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
