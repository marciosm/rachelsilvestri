google.maps.__gjsload__('overlay', function(_) {
    var hu = _.oa("j"),
        iu = _.l(),
        ju = function(a) {
            a.Xf = a.Xf || new iu;
            return a.Xf
        },
        ku = function(a) {
            this.U = new _.hg(function() {
                var b = a.Xf;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.j && a.onAdd) a.onAdd();
                        b.j = !0;
                        a.draw()
                    }
                } else {
                    if (b.j)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.j = !1
                }
            }, 0)
        },
        lu = function(a, b) {
            function c() {
                return _.ig(e.U)
            }
            var d = ju(a),
                e = d.Be;
            e || (e = d.Be = new ku(a));
            _.C(d.W || [], _.S.removeListener);
            var f = d.da = d.da || new _.sl,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Rh = d.Rh || new hu(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.W = [_.S.addListener(a, "panes_changed", c), _.S.addListener(g, "zoom_changed", c), _.S.addListener(g, "offset_changed", c), _.S.addListener(b, "projection_changed", c), _.S.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.fe && (_.fm(b, "Ox"), _.hm("Ox", "-p", a))
        },
        ou = function(a) {
            if (a) {
                var b = a.getMap(),
                    c = a.__gmop;
                if (c) {
                    if (c.map == b) return;
                    a.__gmop = null;
                    c.eg()
                }
                if (b && b instanceof _.fe) {
                    var d = b.__gm;
                    d.overlayLayer ? a.__gmop = new mu(b, a, d.overlayLayer) : d.j.then(function(c) {
                        c = c.qa;
                        var e = new nu(b, c);
                        c.ra(e);
                        d.overlayLayer = e;
                        ou(a)
                    })
                }
            }
        },
        mu = function(a, b, c) {
            this.map = a;
            this.na = b;
            this.Ol = c;
            this.me = !1;
            _.fm(this.map, "Ox");
            _.hm("Ox", "-p", this.na);
            c.l.push(this);
            c.j && pu(this, c.j);
            c.m.Of()
        },
        pu = function(a, b) {
            a.na.get("projection") != b && (a.na.bindTo("panes", a.map.__gm), a.na.set("projection",
                b))
        },
        nu = function(a, b) {
            this.A = a;
            this.m = b;
            this.j = null;
            this.l = []
        };
    _.A(hu, _.T);
    hu.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.L(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.j : null))
    };
    _.A(ku, _.T);
    mu.prototype.draw = function() {
        this.me || (this.me = !0, this.na.onAdd && this.na.onAdd());
        this.na.draw && this.na.draw()
    };
    mu.prototype.eg = function() {
        _.im("Ox", "-p", this.na);
        this.na.unbindAll();
        this.na.set("panes", null);
        this.na.set("projection", null);
        _.db(this.Ol.l, this);
        this.me && (this.me = !1, this.na.onRemove ? this.na.onRemove() : this.na.remove())
    };
    nu.prototype.dispose = _.l();
    nu.prototype.yb = function(a, b, c, d, e, f) {
        var g = this.j = this.j || new _.Vl(this.A, this.m, _.l());
        g.yb(a, b, c, d, e, f);
        a = _.ua(this.l);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, pu(b, g), b.draw()
    };
    _.Ke("overlay", {
        Jg: function(a) {
            if (a) {
                var b = a.getMap();
                if (b && b instanceof _.fe || a.__gmop) ou(a);
                else {
                    b = a.getMap();
                    var c = ju(a),
                        d = c.dl;
                    c.dl = b;
                    d && (c = ju(a), (d = c.da) && d.unbindAll(), (d = c.Rh) && d.unbindAll(), a.unbindAll(), a.set("panes", null), a.set("projection", null), _.C(c.W, _.S.removeListener), c.W = null, c.Be && (c.Be.U.La(), c.Be = null), _.im("Ox", "-p", a));
                    b && lu(a, b)
                }
            }
        },
        preventMapHitsFrom: function(a) {
            _.Xm(a, {
                onClick: function(a) {
                    return _.pm(a.event)
                },
                Ga: function(a) {
                    return _.mm(a)
                },
                Yb: function(a) {
                    return _.nm(a)
                },
                Ta: function(a) {
                    return _.nm(a)
                },
                Ja: function(a) {
                    return _.om(a)
                }
            }).vc(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.wd);
            a.addEventListener("contextmenu", _.wd);
            a.addEventListener("dblclick", _.wd);
            a.addEventListener("mousedown", _.wd);
            a.addEventListener("mousemove", _.wd);
            a.addEventListener("MSPointerDown", _.wd);
            a.addEventListener("pointerdown", _.wd);
            a.addEventListener("touchstart", _.wd);
            a.addEventListener("wheel", _.wd)
        }
    });
});