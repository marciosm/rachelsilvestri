google.maps.__gjsload__('search_impl', function(_) {
    var r3 = _.l(),
        s3 = {
            df: function(a) {
                if (_.qg[15]) {
                    var b = a.A,
                        c = a.A = a.getMap();
                    b && s3.eg(a, b);
                    c && s3.uj(a, c)
                }
            },
            uj: function(a, b) {
                var c = s3.se(a.get("layerId"), a.get("spotlightDescription"), a.get("paintExperimentIds"));
                a.j = c;
                a.m = a.get("renderOnBaseMap");
                a.m ? (a = b.__gm.l, a.set(_.Tj(a.get(), c))) : s3.rj(a, b, c);
                _.fm(b, "Lg")
            },
            rj: function(a, b, c) {
                var d = _.TA(new _.BT);
                c.pf = (0, _.z)(d.load, d);
                c.clickable = 0 != a.get("clickable");
                _.CT.cf(c, b);
                var e = [];
                e.push(_.S.addListener(c, "click", (0, _.z)(s3.tg, s3, a)));
                _.C(["mouseover", "mouseout",
                    "mousemove"
                ], function(b) {
                    e.push(_.S.addListener(c, b, (0, _.z)(s3.Om, s3, a, b)))
                });
                e.push(_.S.addListener(a, "clickable_changed", function() {
                    a.j.clickable = 0 != a.get("clickable")
                }));
                a.l = e
            },
            se: function(a, b, c) {
                var d = new _.Pp;
                a = a.split("|");
                d.xa = a[0];
                for (var e = 1; e < a.length; ++e) {
                    var f = a[e].split(":");
                    d.parameters[f[0]] = f[1]
                }
                b && (d.He = new _.so(b));
                c && (d.Oh = c.slice(0));
                return d
            },
            tg: function(a, b, c, d, e) {
                var f = null;
                if (e && (f = {
                        status: e.getStatus()
                    }, 0 == e.getStatus())) {
                    f.location = _.wj(e, 1) ? new _.Q(_.G(e.getLocation(), 0),
                        _.G(e.getLocation(), 1)) : null;
                    f.fields = {};
                    for (var g = 0, h = _.oc(e, 2); g < h; ++g) {
                        var k = new _.qS(_.zj(e, 2, g));
                        f.fields[k.getKey()] = _.H(k, 1)
                    }
                }
                _.S.trigger(a, "click", b, c, d, f)
            },
            Om: function(a, b, c, d, e, f, g) {
                var h = null;
                f && (h = {
                    title: f[1].title,
                    snippet: f[1].snippet
                });
                _.S.trigger(a, b, c, d, e, h, g)
            },
            eg: function(a, b) {
                a.j && (a.m ? (b = b.__gm.l, b.set(b.get().Ab(a.j))) : s3.Xl(a, b))
            },
            Xl: function(a, b) {
                a.j && _.CT.fg(a.j, b) && (_.C(a.l || [], _.S.removeListener), a.l = null)
            }
        };
    r3.prototype.df = s3.df;
    _.Ke("search_impl", new r3);
});