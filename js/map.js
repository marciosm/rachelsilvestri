google.maps.__gjsload__('map', function(_) {
    var Pr = function(a, b) {
            b = new _.lj(new _.hj(b));
            _.Jh && (0, _.Jh)(b, a.prototype);
            return b
        },
        Qr = function(a) {
            _.Ui ? _.y.requestAnimationFrame(a) : _.y.setTimeout(function() {
                return a(_.Ya())
            }, 0)
        },
        Rr = function(a, b) {
            a.Z.appendChild(b);
            a.Z.parentNode || a.l.appendChild(a.Z)
        },
        Sr = function(a, b, c, d) {
            var e = a.j.Fa();
            if (e) {
                var f = a.ja,
                    g = f.size,
                    h = a.ka.Y,
                    k = _.jl(a);
                if (!k.j || d && !b.equals(k.origin)) k.j = _.Yj(f, b, h);
                if (!c.equals(k.scale) || !b.equals(k.origin)) {
                    k.origin = b;
                    k.scale = c;
                    b = _.Mj(_.Nj(c, _.Hj(_.Xj(f, k.j), b)));
                    var n = _.Nj(c, _.Xj(f, {
                            M: 0,
                            N: 0,
                            Y: h
                        })),
                        p = _.Nj(c, _.Xj(f, {
                            M: 0,
                            N: 1,
                            Y: h
                        }));
                    c = _.Nj(c, _.Xj(f, {
                        M: 1,
                        N: 0,
                        Y: h
                    }));
                    c = "matrix(" + (c.L - n.L) / g.L + "," + (c.O - n.O) / g.L + "," + (p.L - n.L) / g.O + "," + (p.O - n.O) / g.O + "," + b.L + "," + b.O + ")";
                    k.Z.style[_.fl()] = c
                }
                k.Z.style.willChange = d ? "" : "transform";
                d = e.style;
                k = k.j;
                d.position = "absolute";
                d.left = g.L * (a.ka.M - k.M) + "px";
                d.top = g.O * (a.ka.N - k.N) + "px";
                d.width = g.L + "px";
                d.height = g.O + "px"
            }
        },
        Tr = function(a, b) {
            b = void 0 === b ? !0 : b;
            return a.C || (a.C = new Promise(function(c) {
                var d, e;
                Qr(function() {
                    if (a.A)
                        if (d = a.j.Fa())
                            if (d.parentElement ||
                                Rr(_.jl(a), d), e = d.style, e.position = "absolute", b) {
                                e.transition = "opacity 200ms linear";
                                e.opacity = "0";
                                Qr(function() {
                                    e.opacity = ""
                                });
                                var f = function() {
                                    a.l = !0;
                                    d.removeEventListener("transitionend", f);
                                    clearTimeout(g);
                                    c()
                                };
                                d.addEventListener("transitionend", f);
                                var g = setTimeout(f, 400)
                            } else a.l = !0, c();
                    else a.l = !0, c();
                    else c()
                })
            }))
        },
        Ur = function(a, b, c) {
            var d = _.Yj(a, b.min, c);
            a = _.Yj(a, b.max, c);
            this.m = Math.min(d.M, a.M);
            this.A = Math.min(d.N, a.N);
            this.j = Math.max(d.M, a.M);
            this.l = Math.max(d.N, a.N);
            this.Y = c
        },
        Vr = function(a,
            b) {
            return a < b ? a : 1E3 - a
        },
        Wr = function(a) {
            return "(" + a.M + "," + a.N + ")@" + a.Y
        },
        Xr = function(a, b) {
            var c = a.Y;
            b = c - b;
            return {
                M: a.M >> b,
                N: a.N >> b,
                Y: c - b
            }
        },
        Yr = function(a, b) {
            var c = Math.min(a.Y, b.Y);
            a = Xr(a, c);
            b = Xr(b, c);
            return a.M == b.M && a.N == b.N
        },
        Zr = function(a, b) {
            var c = [];
            a = _.ua(a.j.values());
            for (var d = a.next(); !d.done; d = a.next()) d = d.value.ka, d.Y != b.Y && Yr(d, b) && c.push(Wr(d));
            return c
        },
        $r = function(a, b) {
            return (b = a.j.get(Wr(b))) ? a.ca ? b.eb() : b.l : !1
        },
        bs = function(a) {
            a.K && [].concat(_.va(as(a.F))).every(function(b) {
                return $r(a,
                    b)
            }) && (a.K = !1, a.ta(!1))
        },
        cs = function(a, b) {
            if (a.F.has(b.ka)) {
                b = _.ua(Zr(a, b.ka));
                for (var c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = a.j.get(c);
                    a: {
                        var e = a;
                        for (var f = d.ka, g = _.ua(as(e.F)), h = g.next(); !h.done; h = g.next())
                            if (h = h.value, Yr(h, f) && !$r(e, h)) {
                                e = !1;
                                break a
                            }
                        e = !0
                    }
                    e && (d.release(), a.j["delete"](c))
                }
                if (a.ca)
                    for (b = _.ua(as(a.F)), c = b.next(); !c.done; c = b.next()) c = c.value, d = a.j.get(Wr(c)), 0 == Zr(a, c).length && Tr(d, !1)
            }
            bs(a)
        },
        ds = function(a, b, c, d) {
            a.H && (clearTimeout(a.H), a.H = 0);
            if (a.J && b.Y == a.m)
                if (!c && !d &&
                    _.Ya() < a.fa + 250) a.H = setTimeout(function() {
                    return ds(a, b, c, d)
                }, a.fa + 250 - _.Ya());
                else {
                    a.F = b;
                    bs(a);
                    for (var e = _.ua(a.j.values()), f = e.next(); !f.done; f = e.next()) f = f.value, f.setZIndex(String(Vr(f.ka.Y, b.Y)));
                    if (a.J && (d || 3 != a.A.Sa)) {
                        e = {};
                        f = _.ua(as(b));
                        for (var g = f.next(); !g.done; e = {
                                tb: e.tb
                            }, g = f.next()) {
                            g = g.value;
                            var h = Wr(g);
                            if (!a.j.has(h)) {
                                a.K || (a.K = !0, a.ta(!0));
                                var k = g,
                                    n = k.Y,
                                    p = a.A.ja;
                                k = _.Yj(p, _.Kj(a.qa.l, _.Xj(p, {
                                    M: k.M + .5,
                                    N: k.N + .5,
                                    Y: n
                                })), n);
                                e.tb = a.A.Rk({
                                    Kc: a.l,
                                    ka: g,
                                    dn: k
                                });
                                a.j.set(h, e.tb);
                                e.tb.setZIndex(String(Vr(n,
                                    b.Y)));
                                a.C && a.D && a.ia && Sr(e.tb, a.C, a.D, a.ia.nc);
                                a.ca ? e.tb.loaded.then(function(b) {
                                    return function() {
                                        return cs(a, b.tb)
                                    }
                                }(e)) : e.tb.loaded.then(function(b) {
                                    return function() {
                                        return Tr(b.tb, a.wd)
                                    }
                                }(e)).then(function(b) {
                                    return function() {
                                        return cs(a, b.tb)
                                    }
                                }(e))
                            }
                        }
                    }
                }
        },
        es = function(a) {
            if (!a.j || !a.m || !a.l) return null;
            var b = _.Nj(a.l, _.Hj(a.j.min, a.m));
            a = _.Nj(a.l, _.Hj(a.j.max, a.m));
            return new _.dd([new _.O(b.L, b.O), new _.O(a.L, a.O)])
        },
        fs = function(a, b) {
            a = _.kc(new _.Cj(a.l.B[7]), 0).slice();
            return _.oj(a, function(a) {
                return a +
                    "deg=" + b + "&"
            })
        },
        gs = function(a) {
            this.B = a || []
        },
        hs = function() {
            this.W = new _.Kd
        },
        is = function(a) {
            _.Md(a.W, function(a) {
                a(null)
            })
        },
        js = function(a, b) {
            if (_.dr) return new MouseEvent(a, {
                bubbles: !0,
                cancelable: !0,
                view: window,
                detail: 1,
                screenX: b.clientX,
                screenY: b.clientY,
                clientX: b.clientX,
                clientY: b.clientY
            });
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(a, !0, !0, window, 1, b.clientX, b.clientY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
            return c
        },
        ks = function(a, b, c) {
            this.j = a;
            this.m = b;
            this.l = c
        },
        ms = function(a, b,
            c, d) {
            var e = this;
            this.A = b;
            this.F = c;
            this.D = d;
            this.m = null;
            this.l = this.j = 0;
            this.C = new _.Fn(function() {
                e.j = 0;
                e.l = 0
            }, 1E3);
            new _.Dm(a, "wheel", function(a) {
                return ls(e, a)
            })
        },
        ls = function(a, b) {
            if (!_.Sj(b)) {
                var c = a.D();
                if (0 != c) {
                    var d = null == c && !b.ctrlKey && !b.altKey && !b.metaKey && !b.buttons;
                    c = a.F(d ? 1 : 4);
                    if ("none" != c && ("cooperative" != c || !d))
                        if (_.td(b), d = (b.deltaY || b.wheelDelta || 0) * (1 == b.deltaMode ? 16 : 1), 0 < d && d < a.l || 0 > d && d > a.l) a.l = d;
                        else {
                            a.l = d;
                            a.j += d;
                            a.C.La();
                            var e = a.A.j.j;
                            16 > Math.abs(a.j) || (d = Math.round(e.zoom - Math.sign(a.j)),
                                a.j = 0, b = "zoomaroundcenter" == c ? e.center : a.A.xb(b), a.m != d && (ns(a.A, d, b, function() {
                                    a.m = null
                                }), a.m = d))
                        }
                }
            }
        },
        os = function(a, b, c) {
            this.m = a;
            this.A = b;
            this.l = c || null;
            this.j = null
        },
        ps = function(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.C = c;
            this.m = d || null;
            this.j = null
        },
        qs = function(a, b) {
            return {
                Ea: a.l.xb(b.Ea),
                radius: b.radius,
                zoom: a.l.j.j.zoom
            }
        },
        rs = function(a, b, c, d, e) {
            d = void 0 === d ? _.qa("greedy") : d;
            var f = void 0 === e ? {} : e;
            e = void 0 === f.jh ? _.qa(!0) : f.jh;
            var g = void 0 === f.Sj ? !1 : f.Sj,
                h = void 0 === f.$h ? _.qa(null) : f.$h;
            f = {
                Le: void 0 === f.Le ?
                    !1 : f.Le,
                onClick: function(a) {
                    var b = a.coords,
                        c = a.event;
                    a.oc && (c = 3 == c.button, n.l() && (a = n.m(4), "none" != a && (c = Math.round(n.j.j.j.zoom + (c ? -1 : 1)), b = "zoomaroundcenter" == a ? n.j.j.j.center : n.j.xb(b), ns(n.j, c, b))))
                }
            };
            var k = _.Xm(b.m, f);
            new ms(b.m, a, d, h);
            var n = new ks(a, d, e);
            f.kc = new ps(a, d, k, c);
            g && (f.Rj = new os(a, k, c));
            return k
        },
        ss = function() {
            var a = window.innerWidth / (document.body.scrollWidth + 1);
            return .95 > window.innerHeight / (document.body.scrollHeight + 1) || .95 > a || _.Jk()
        },
        ts = function(a, b, c, d) {
            return 0 == b ? "none" : "none" ==
                c || "greedy" == c || "zoomaroundcenter" == c ? c : d ? "greedy" : "cooperative" == c || a() ? "cooperative" : "greedy"
        },
        us = function(a) {
            return new _.Gn([a.draggable, a.Lj, a.oe], _.nj(ts, ss))
        },
        vs = function(a) {
            this.j = new hs;
            this.l = a
        },
        ws = function(a, b) {
            return (a.get("featureRects") || []).some(function(a) {
                return a.contains(b)
            })
        },
        xs = function(a, b) {
            if (!b) return 0;
            var c = 0,
                d = a.ma,
                e = a.ga;
            b = _.ua(b);
            for (var f = b.next(); !f.done; f = b.next()) {
                var g = f.value;
                if (a.intersects(g)) {
                    f = g.ma;
                    var h = g.ga;
                    if (_.Rj(g, a)) return 1;
                    g = e.contains(h.j) && h.contains(e.j) &&
                        !e.equals(h) ? _.md(h.j, e.l) + _.md(e.j, h.l) : _.md(e.contains(h.j) ? h.j : e.j, e.contains(h.l) ? h.l : e.l);
                    c += g * (Math.min(d.l, f.l) - Math.max(d.j, f.j))
                }
            }
            return c /= (d.isEmpty() ? 0 : d.l - d.j) * _.nd(e)
        },
        ys = function() {
            return function(a, b) {
                if (a && b) return .9 <= xs(a, b)
            }
        },
        zs = function() {
            var a = !1;
            return function(b, c) {
                if (b && c) {
                    if (.999999 > xs(b, c)) return a = !1;
                    b = _.rl(b, (_.mr - 1) / 2);
                    return .999999 < xs(b, c) ? a = !0 : a
                }
            }
        },
        As = function(a, b, c, d, e, f, g) {
            var h = new _.Wp;
            _.Xp(h, a, b, "hybrid" != c);
            null != c && _.$p(h, c, 0, d);
            g && g.forEach(function(a) {
                return h.ra(a,
                    c)
            });
            e && _.C(e, function(a) {
                return _.aq(h, a)
            });
            f && _.bq(h, f);
            return h.j
        },
        Bs = function(a, b, c, d, e, f, g, h, k) {
            var n = [];
            if (e) {
                var p = new _.tk;
                p.B[0] = e.type;
                if (e.params)
                    for (var q in e.params) {
                        var t = _.uk(p);
                        _.sk(t, q);
                        var w = e.params[q];
                        w && (t.B[1] = w)
                    }
                n.push(p)
            }
            e = new _.tk;
            e.B[0] = 37;
            _.sk(_.uk(e), "smartmaps");
            n.push(e);
            return {
                Za: As(a, b, c, d, n, f, k),
                Ic: g,
                scale: h
            }
        },
        Cs = function(a, b, c, d, e, f, g, h, k, n, p, q, t, w) {
            _.jh.call(this);
            this.C = a;
            this.m = b;
            this.projection = c;
            this.maxZoom = d;
            this.tileSize = new _.P(256, 256);
            this.name = e;
            this.alt =
                f;
            this.H = g;
            this.heading = w;
            this.J = _.L(w);
            this.cd = h;
            this.__gmsd = k;
            this.mapTypeId = n;
            this.j = null;
            this.F = p;
            this.A = q;
            this.D = t;
            this.triggersTileLoadEvent = !0;
            this.l = _.be({})
        },
        Ds = function(a, b, c, d, e) {
            Cs.call(this, a.C, a.m, a.projection, a.maxZoom, a.name, a.alt, a.H, a.cd, a.__gmsd, a.mapTypeId, a.F, a.A, a.D, a.heading);
            this.m && this.l.set(Bs(this.A, this.D, this.mapTypeId, this.F, this.__gmsd, b, c, d, e))
        },
        Es = function(a, b, c) {
            var d = document.createElement("div"),
                e = document.createElement("div"),
                f = document.createElement("span");
            f.innerText = "For development purposes only";
            f.style.l = "break-all";
            e.appendChild(f);
            f = e.style;
            f.color = "white";
            f.fontFamily = "Roboto, sans-serif";
            f.fontSize = "14px";
            f.textAlign = "center";
            f.position = "absolute";
            f.left = "0";
            f.top = "50%";
            f.transform = "translateY(-50%)";
            f.msTransform = "translateY(-50%)";
            f.maxHeight = "100%";
            f.width = "100%";
            f.overflow = "hidden";
            d.appendChild(e);
            e = d.style;
            e.backgroundColor = "rgba(0, 0, 0, 0.5)";
            e.position = "absolute";
            e.overflow = "hidden";
            e.top = "0";
            e.left = "0";
            e.width = b + "px";
            e.height = c + "px";
            e.zIndex = 100;
            a.appendChild(d)
        },
        Fs = function(a, b, c, d, e) {
            e = void 0 === e ? {} : e;
            this.j = a;
            this.l = b.slice(0);
            this.m = e.Ia || _.Ma;
            this.loaded = Promise.all(b.map(function(a) {
                return a.loaded
            })).then(_.l());
            d && Es(this.j, c.L, c.O)
        },
        Gs = function(a, b) {
            this.ja = a[0].ja;
            this.j = a;
            this.Sa = a[0].Sa;
            this.l = void 0 === b ? !1 : b
        },
        Is = function(a, b, c, d, e, f, g, h) {
            var k = this;
            this.j = a;
            this.F = _.oj(b || [], function(a) {
                return a.replace(/&$/, "")
            });
            this.J = c;
            this.H = d;
            this.m = e;
            this.D = f;
            this.l = g;
            this.loaded = new Promise(function(a) {
                k.C = a
            });
            this.A = !1;
            h && (a = this.Fa(), Es(a, f.size.L, f.size.O));
            Hs(this)
        },
        Hs = function(a) {
            var b = a.j.ka,
                c = b.M,
                d = b.N,
                e = b.Y;
            if (a.l && (b = _.dl(_.Xj(a.D, {
                    M: c + .5,
                    N: d + .5,
                    Y: e
                }), null), !ws(a.l, b))) {
                a.A = !0;
                a.l.j.addListenerOnce(function() {
                    return Hs(a)
                });
                return
            }
            a.A = !1;
            b = 2 == a.m || 4 == a.m ? a.m : 1;
            b = Math.min(1 << e, b);
            for (var f = a.J && 4 != b, g = e, h = b; 1 < h; h /= 2) g--;
            (c = a.H({
                M: c,
                N: d,
                Y: e
            })) ? (c = _.Sl(_.Sl(_.Sl(new _.Ml(_.dq(a.F, c)), "x", c.M), "y", c.N), "z", g), 1 != b && _.Sl(c, "w", a.D.size.L / b), f && (b *= 2), 1 != b && _.Sl(c, "scale", b), a.j.setUrl(c.toString()).then(a.C)) :
            a.j.setUrl("").then(a.C)
        },
        Js = function(a, b, c, d, e, f, g) {
            this.j = a || [];
            this.D = new _.P(e.size.L, e.size.O);
            this.F = b;
            this.l = c;
            this.C = d;
            this.Sa = 1;
            this.ja = e;
            this.m = f;
            this.A = void 0 === g ? !1 : g
        },
        Ks = function(a, b) {
            this.l = a;
            this.j = b;
            this.ja = _.Wi;
            this.Sa = 1
        },
        Ls = function(a, b, c) {
            var d = _.Fj(),
                e = _.wc(_.V);
            this.j = b;
            this.m = new _.xf;
            this.l = _.uc(e);
            this.A = _.vc(e);
            this.D = _.G(d, 14);
            this.C = _.G(d, 15);
            this.F = new _.Up(a, d, e);
            this.H = c
        },
        Ms = function(a, b, c, d) {
            d = void 0 === d ? {
                ab: null
            } : d;
            var e = _.L(d.heading),
                f = ("hybrid" == b && !e || "terrain" ==
                    b || "roadmap" == b) && 0 != d.zj,
                g = d.ab;
            if ("satellite" == b) {
                var h;
                e ? h = fs(a.F, d.heading || 0) : h = _.kc(new _.Cj(a.F.l.B[1]), 0).slice();
                b = new _.jg({
                    L: 256,
                    O: 256
                }, e ? 45 : 0, d.heading || 0);
                return new Js(h, f && 1 < _.vk(), _.lq(d.heading), g && g.scale || null, b, e ? a.H : null, !!d.eh)
            }
            return new _.kq(_.Vp(a.F), "Sentimos muito, mas n\u00e3o temos imagens daqui.", f && 1 < _.vk(), _.lq(d.heading), c, g, d.heading)
        },
        Ns = function(a) {
            function b(a, b) {
                if (!b || !b.Za) return b;
                var c = new _.wp(_.Aj(b.Za));
                (new _.tk(_.nc(_.Op(c), 11))).B[0] = a;
                return {
                    scale: b.scale,
                    Ic: b.Ic,
                    Za: c
                }
            }
            return function(c) {
                var d = Ms(a, "roadmap", a.j, {
                        zj: !1,
                        ab: b(3, c.ab().get())
                    }),
                    e = Ms(a, "roadmap", a.j, {
                        ab: b(18, c.ab().get())
                    });
                d = new Gs([d, e]);
                c = Ms(a, "roadmap", a.j, {
                    ab: c.ab().get()
                });
                return new Ks(d, c)
            }
        },
        Os = function(a) {
            return function(b, c) {
                var d = b.ab().get(),
                    e = Ms(a, "satellite", null, {
                        heading: b.heading,
                        ab: d,
                        eh: !1
                    });
                b = Ms(a, "hybrid", a.j, {
                    heading: b.heading,
                    ab: d
                });
                return new Gs([e, b], c)
            }
        },
        Ps = function(a, b) {
            return new Cs(Os(a), a.j, _.Ha(b) ? new _.al(b) : a.m, _.Ha(b) ? 21 : 22, "H\u00edbrido", "Mostrar imagens com nomes de rua",
                _.Wq.hybrid, "m@" + a.D, {
                    type: 68,
                    params: {
                        set: "RoadmapSatellite"
                    }
                }, "hybrid", a.C, a.l, a.A, b)
        },
        Qs = function(a) {
            return function(b, c) {
                return Ms(a, "satellite", null, {
                    heading: b.heading,
                    ab: b.ab().get(),
                    eh: c
                })
            }
        },
        Rs = function(a, b) {
            var c = _.Ha(b);
            return new Cs(Qs(a), null, _.Ha(b) ? new _.al(b) : a.m, c ? 21 : 22, "Sat\u00e9lite", "Mostrar imagens de sat\u00e9lite", c ? "a" : _.Wq.satellite, null, null, "satellite", a.C, a.l, a.A, b)
        },
        Ss = function(a, b) {
            return function(c) {
                return Ms(a, b, a.j, {
                    ab: c.ab().get()
                })
            }
        },
        Ts = function(a, b, c) {
            c = void 0 === c ? {} : c;
            var d = [0, 90, 180, 270];
            if ("hybrid" == b)
                for (b = Ps(a), b.j = {}, d = _.ua(d), c = d.next(); !c.done; c = d.next()) c = c.value, b.j[c] = Ps(a, c);
            else if ("satellite" == b)
                for (b = Rs(a), b.j = {}, d = _.ua(d), c = d.next(); !c.done; c = d.next()) c = c.value, b.j[c] = Rs(a, c);
            else b = "roadmap" == b && 1 < _.vk() && c.Vj ? new Cs(Ns(a), a.j, a.m, 22, "Mapa", "Mostrar mapa de ruas", _.Wq.roadmap, "m@" + a.D, {
                type: 68,
                params: {
                    set: "Roadmap"
                }
            }, "roadmap", a.C, a.l, a.A, void 0) : "terrain" == b ? new Cs(Ss(a, "terrain"), a.j, a.m, 21, "Relevo", "Mostrar mapa de ruas com relevo", _.Wq.terrain,
                "r@" + a.D, {
                    type: 68,
                    params: {
                        set: "Terrain"
                    }
                }, "terrain", a.C, a.l, a.A, void 0) : new Cs(Ss(a, "roadmap"), a.j, a.m, 22, "Mapa", "Mostrar mapa de ruas", _.Wq.roadmap, "m@" + a.D, {
                type: 68
            }, "roadmap", a.C, a.l, a.A, void 0);
            return b
        },
        Us = _.qa(".gm-style-pbc{transition:opacity ease-in-out;background-color:rgba(0,0,0,0.45);text-align:center}.gm-style-pbt{font-size:22px;color:white;font-family:Roboto,Arial,sans-serif;position:relative;margin:0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}\n"),
        Vs = function(a) {
            this.j = a;
            this.l = _.X("p", a);
            this.A = 0;
            _.ek(a, "gm-style-pbc");
            _.ek(this.l, "gm-style-pbt");
            _.an(Us);
            a.style.transitionDuration = "0";
            a.style.opacity = 0;
            _.Gk(a)
        },
        Ws = function(a, b) {
            var c = 2 == _.me.j ? "Use \u2318 e role a tela simultaneamente para aplicar zoom no mapa" : "Pressione Ctrl e role a tela simultaneamente para aplicar zoom no mapa";
            a.l.textContent = (void 0 === b ? 0 : b) ? c : "Use dois dedos para mover o mapa";
            a.j.style.transitionDuration = "0.3s";
            a.j.style.opacity = 1
        },
        Xs = function(a) {
            a.j.style.transitionDuration =
                "0.8s";
            a.j.style.opacity = 0
        },
        $s = function(a, b, c, d) {
            var e = this;
            this.j = a;
            this.C = b;
            this.F = c.m;
            this.D = d;
            this.A = 0;
            this.m = null;
            this.l = !1;
            _.Xm(c.C, {
                Ga: function(a) {
                    return Ys(e, "mousedown", a.coords, a.ea)
                },
                Yb: function(a) {
                    e.C.j.l || (e.m = a, 5 < _.Ya() - e.A && Zs(e))
                },
                Ja: function(a) {
                    return Ys(e, "mouseup", a.coords, a.ea)
                },
                onClick: function(a) {
                    var b = a.coords,
                        c = a.event;
                    a = a.oc;
                    3 == c.button ? a || Ys(e, "rightclick", b, c.ea) : a ? Ys(e, "dblclick", b, c.ea, js("dblclick", b)) : Ys(e, "click", b, c.ea, js("click", b))
                },
                kc: {
                    Xb: function(a, b) {
                        e.l || (e.l = !0, Ys(e, "dragstart", a.Ea, b.ea))
                    },
                    Vc: function(a) {
                        Ys(e, e.l ? "drag" : "mousemove", a.Ea)
                    },
                    rc: function(a) {
                        e.l && (e.l = !1, Ys(e, "dragend", a))
                    }
                }
            }).vc(!0);
            new _.oq(c.m, c.C, {
                Dd: function(a) {
                    return Ys(e, "mouseout", a, a)
                },
                Ed: function(a) {
                    return Ys(e, "mouseover", a, a)
                }
            })
        },
        Zs = function(a) {
            if (a.m) {
                var b = a.m;
                at(a, "mousemove", b.coords, b.ea);
                a.m = null;
                a.A = _.Ya()
            }
        },
        Ys = function(a, b, c, d, e) {
            Zs(a);
            at(a, b, c, d, e)
        },
        at = function(a, b, c, d, e) {
            var f = e || d,
                g = a.C.xb(c),
                h = _.dl(g, a.j.getProjection()),
                k = a.F.getBoundingClientRect();
            c = new _.qk(h,
                f, new _.O(c.clientX - k.left, c.clientY - k.top), new _.O(g.R, g.S));
            h = !!d && "touch" == d.pointerType;
            k = !!d && !!window.MSPointerEvent && d.pointerType == window.MSPointerEvent.MSPOINTER_TYPE_TOUCH;
            f = a.j.__gm.m;
            g = b;
            h = !!d && !!d.touches || h || k;
            k = f.A;
            var n = c.va && _.Sj(c.va);
            if (f.j) {
                var p = f.j;
                var q = f.m
            } else if ("mouseout" == g || n) q = p = null;
            else {
                for (var t = 0; p = k[t++];) {
                    var w = c.pa,
                        u = c.latLng;
                    (q = p.m(c, !1)) && !p.l(g, q) && (q = null, c.pa = w, c.latLng = u);
                    if (q) break
                }
                if (!q && h)
                    for (t = 0;
                        (p = k[t++]) && (w = c.pa, u = c.latLng, (q = p.m(c, !0)) && !p.l(g, q) &&
                            (q = null, c.pa = w, c.latLng = u), !q););
            }
            if (p != f.l || q != f.C) f.l && f.l.handleEvent("mouseout", c, f.C), f.l = p, f.C = q, p && p.handleEvent("mouseover", c, q);
            p ? "mouseover" == g || "mouseout" == g ? q = !1 : (p.handleEvent(g, c, q), q = !0) : q = !!n;
            if (q) d && e && _.Sj(e) && _.wd(d);
            else {
                a.j.__gm.set("cursor", a.j.get("draggableCursor"));
                "dragstart" != b && "drag" != b && "dragend" != b || _.S.trigger(a.j.__gm, b, c);
                if ("none" == a.D.get()) {
                    if ("dragstart" == b || "dragend" == b) return;
                    "drag" == b && (b = "mousemove")
                }
                "dragstart" == b || "drag" == b || "dragend" == b ? _.S.trigger(a.j,
                    b) : _.S.trigger(a.j, b, c)
            }
        },
        ht = function(a, b, c, d, e, f) {
            var g = bt,
                h = this;
            this.F = a;
            this.D = b;
            this.l = c;
            this.C = d;
            this.A = g;
            e.addListener(function() {
                return ct(h)
            });
            f.addListener(function() {
                return ct(h)
            });
            this.m = f;
            this.j = [];
            _.S.addListener(c, "insert_at", function(a) {
                dt(h, a)
            });
            _.S.addListener(c, "remove_at", function(a) {
                var b = h.j[a];
                b && (h.j.splice(a, 1), et(h), b.clear())
            });
            _.S.addListener(c, "set_at", function(a) {
                var b = h.l.getAt(a);
                ft(h, b);
                a = h.j[a];
                (b = gt(h, b)) ? _.vq(a, b): a.clear()
            });
            this.l.forEach(function(a, b) {
                dt(h, b)
            })
        },
        ct = function(a) {
            for (var b = a.j.length, c = 0; c < b; ++c) _.vq(a.j[c], gt(a, a.l.getAt(c)))
        },
        dt = function(a, b) {
            var c = a.l.getAt(b);
            ft(a, c);
            var d = a.A(a.D, b, a.C, function(c) {
                var d = a.l.getAt(b);
                !c && d && _.S.trigger(d, "tilesloaded")
            });
            _.vq(d, gt(a, c));
            a.j.splice(b, 0, d);
            et(a, b)
        },
        et = function(a, b) {
            for (var c = 0; c < a.j.length; ++c) c != b && a.j[c].setZIndex(c)
        },
        ft = function(a, b) {
            if (b) {
                var c = "Oto";
                switch (b.mapTypeId) {
                    case "roadmap":
                        c = "Otm";
                        break;
                    case "satellite":
                        c = "Otk";
                        break;
                    case "hybrid":
                        c = "Oth";
                        break;
                    case "terrain":
                        c = "Otr"
                }
                b instanceof
                _.kh && (c = "Ots");
                a.F(c)
            }
        },
        gt = function(a, b) {
            return b ? b instanceof _.jh ? b.Ma(a.m.get()) : new _.sq(b) : null
        },
        bt = function(a, b, c, d) {
            return new _.tq(function(d, f) {
                d = new _.ll(a, b, c, _.kl(d), f, {
                    wd: !0
                });
                c.ra(d);
                return d
            }, d)
        },
        it = function(a, b) {
            this.l = a;
            this.C = b
        },
        jt = function(a, b, c, d) {
            return d ? new it(a, function() {
                return b
            }) : _.qg[23] ? new it(a, function(a) {
                var d = c.get("scale");
                return 2 == d || 4 == d ? b : a
            }) : a
        },
        kt = function() {
            var a = null,
                b = null,
                c = !1;
            return function(d, e, f) {
                if (f) return null;
                if (b == d && c == e) return a;
                b = d;
                c = e;
                a = null;
                d instanceof _.jh ? a = d.Ma(e) : d && (a = new _.sq(d));
                return a
            }
        },
        lt = function(a, b, c) {
            this.l = a;
            var d = _.Jn(this, "apistyle"),
                e = _.Jn(this, "authUser"),
                f = _.Jn(this, "baseMapType"),
                g = _.Jn(this, "scale"),
                h = _.Jn(this, "tilt");
            a = _.Jn(this, "blockingLayerCount");
            this.j = null;
            var k = (0, _.z)(this.Cj, this);
            b = new _.Gn([d, e, b, f, g, h], k);
            _.Hn(this, "tileMapType", b);
            this.A = new _.Gn([b, c, a], kt())
        },
        mt = function(a, b) {
            var c = a.__gm;
            b = new lt(a.mapTypes, c.l, b, _.nj(_.fm, a));
            b.bindTo("heading", a);
            b.bindTo("mapTypeId", a);
            _.qg[23] && b.bindTo("scale",
                a);
            b.bindTo("apistyle", c);
            b.bindTo("authUser", c);
            b.bindTo("tilt", c);
            b.bindTo("blockingLayerCount", c);
            return b
        },
        nt = _.l(),
        qt = function(a, b) {
            var c = this;
            this.A = !1;
            var d = new _.hg(function() {
                c.notify("bounds");
                ot(c)
            }, 0);
            this.map = a;
            this.D = !1;
            this.l = null;
            this.m = function() {
                _.ig(d)
            };
            this.j = this.C = !1;
            this.qa = b(function(a, b) {
                c.D = !0;
                var d = c.map.getProjection();
                c.l && b.min.equals(c.l.min) && b.max.equals(c.l.max) || (c.l = b, c.m());
                if (!c.j) {
                    c.j = !0;
                    try {
                        var e = _.dl(a.center, d, !0);
                        e && !e.equals(c.map.getCenter()) && c.map.setCenter(e);
                        var f = Math.round(a.zoom);
                        c.map.getZoom() != f && c.map.setZoom(f)
                    } finally {
                        c.j = !1
                    }
                }
            });
            a.bindTo("bounds", this, void 0, !0);
            a.addListener("center_changed", function() {
                return pt(c)
            });
            a.addListener("zoom_changed", function() {
                return pt(c)
            });
            a.addListener("projection_changed", function() {
                return pt(c)
            });
            a.addListener("tilt_changed", function() {
                return pt(c)
            });
            a.addListener("heading_changed", function() {
                return pt(c)
            });
            pt(this)
        },
        pt = function(a) {
            if (!a.C) {
                a.m();
                var b = a.qa.j.j,
                    c = a.map.getTilt() || 0,
                    d = !b || b.tilt != c,
                    e = a.map.getHeading() ||
                    0,
                    f = !b || b.heading != e;
                if (!a.j || d || f) {
                    a.C = !0;
                    try {
                        var g = a.map.getProjection(),
                            h = a.map.getCenter(),
                            k = a.map.getZoom();
                        if (g && h && null != k && !isNaN(h.lat()) && !isNaN(h.lng())) {
                            var n = _.cl(h, g),
                                p = !b || b.zoom != k || d || f;
                            a.qa.we({
                                center: n,
                                zoom: k,
                                tilt: c,
                                heading: e
                            }, a.D && p)
                        }
                    } finally {
                        a.C = !1
                    }
                }
            }
        },
        ot = function(a) {
            if (!a.A) {
                a.A = !0;
                var b = function() {
                    a.qa.j.l ? Qr(b) : (a.A = !1, _.S.trigger(a.map, "idle"))
                };
                Qr(b)
            }
        },
        vt = function(a) {
            if (!a) return "";
            var b = [];
            a = _.ua(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                c = c.value;
                var d = c.featureType,
                    e =
                    c.elementType,
                    f = c.stylers;
                c = [];
                var g;
                (g = d) ? (g = g.toLowerCase(), g = rt.hasOwnProperty(g) ? rt[g] : null) : g = null;
                g && c.push("s.t:" + g);
                null != d && null == g && _.Lc(_.M("invalid style feature type: " + d, null));
                d = e && st[e.toLowerCase()];
                (d = null != d ? d : null) && c.push("s.e:" + d);
                null != e && null == d && _.Lc(_.M("invalid style element type: " + e, null));
                if (f)
                    for (e = _.ua(f), d = e.next(); !d.done; d = e.next()) {
                        a: {
                            f = void 0;
                            d = d.value;
                            for (f in d) {
                                g = d[f];
                                var h = f && tt[f.toLowerCase()] || null;
                                if (h && (_.L(g) || _.Gc(g) || _.Hc(g)) && g) {
                                    "color" == f && ut.test(g) &&
                                        (g = "#ff" + g.substr(1));
                                    f = "p." + h + ":" + g;
                                    break a
                                }
                            }
                            f = void 0
                        }
                        f && c.push(f)
                    }(c = c.join("|")) && b.push(c)
            }
            b = b.join(",");
            return 1E3 >= b.length ? b : ""
        },
        wt = _.l(),
        xt = function() {
            this.D = new hs;
            this.C = {};
            this.l = {}
        },
        yt = function(a, b, c) {
            b = void 0 === b ? -Infinity : b;
            c = void 0 === c ? Infinity : c;
            return b > c ? (b + c) / 2 : Math.max(Math.min(a, c), b)
        },
        zt = function(a, b, c, d) {
            this.l = a && {
                min: a.min,
                max: a.min.R <= a.max.R ? a.max : new _.Yc(a.max.R + 256, a.max.S),
                Fn: a.max.R - a.min.R,
                Gn: a.max.S - a.min.S
            };
            var e = this.l;
            e && c.width && c.height ? (a = Math.log2(c.width /
                (e.max.R - e.min.R)), e = Math.log2(c.height / (e.max.S - e.min.S)), d = Math.max(b ? b.min : 0, (void 0 === d ? 0 : d) ? Math.max(Math.ceil(a), Math.ceil(e)) : Math.min(Math.floor(a), Math.floor(e)))) : d = b ? b.min : 0;
            this.j = {
                min: d,
                max: Math.min(b ? b.max : Infinity, 30)
            };
            this.j.max = Math.max(this.j.min, this.j.max);
            this.m = c
        },
        At = function(a, b, c) {
            this.l = a;
            this.m = b;
            this.j = c
        },
        Bt = function(a, b, c) {
            this.j = b;
            this.wa = c;
            this.m = b.heading + 360 * Math.round((c.heading - b.heading) / 360);
            var d = a.width || 1,
                e = a.height || 1;
            a = new At(b.center.R / d, b.center.S / e, .5 * Math.pow(2, -b.zoom));
            d = new At(c.center.R / d, c.center.S / e, .5 * Math.pow(2, -c.zoom));
            this.l = (d.j - a.j) / a.j;
            this.Ua = Math.hypot(.5 * Math.hypot(d.l - a.l, d.m - a.m, d.j - a.j) * (this.l ? Math.log1p(this.l) / this.l : 1) / a.j, .005 * (c.tilt - b.tilt), .007 * (c.heading - this.m));
            this.pe = [];
            b = this.j.zoom;
            if (this.j.zoom < this.wa.zoom)
                for (;;) {
                    b = 3 * Math.floor(b / 3 + 1);
                    if (b >= this.wa.zoom) break;
                    this.pe.push(Math.abs(b - this.j.zoom) / Math.abs(this.wa.zoom - this.j.zoom) * this.Ua)
                } else if (this.j.zoom > this.wa.zoom)
                    for (;;) {
                        b = 3 * Math.ceil(b / 3 - 1);
                        if (b <= this.wa.zoom) break;
                        this.pe.push(Math.abs(b - this.j.zoom) / Math.abs(this.wa.zoom - this.j.zoom) * this.Ua)
                    }
        },
        Ct = function(a, b) {
            this.l = a;
            this.A = b;
            this.j = Math.PI / 2 / b;
            this.m = a / this.j
        },
        Dt = function(a, b) {
            var c = void 0 === b ? {} : b;
            b = void 0 === c.Uj ? 300 : c.Uj;
            var d = void 0 === c.maxDistance ? Infinity : c.maxDistance,
                e = void 0 === c.fb ? _.l() : c.fb;
            c = void 0 === c.speed ? 1.5 : c.speed;
            this.Ka = a;
            this.fb = e;
            this.l = new Ct(c / 1E3, b);
            this.j = a.Ua <= d ? 0 : -1
        },
        Et = function(a) {
            return {
                Ka: {
                    wa: a,
                    Xa: function() {
                        return a
                    },
                    pe: [],
                    Ua: 0
                },
                Xa: function() {
                    return {
                        Hb: a,
                        done: 0
                    }
                },
                fb: _.l()
            }
        },
        Ft = function(a, b, c) {
            this.K = b;
            this.J = c;
            this.l = {};
            this.m = this.j = null;
            this.D = new _.Yc(0, 0);
            this.F = null;
            this.fa = a.m;
            this.C = a.j;
            this.A = a.l;
            this.H = _.fl();
            this.J.Gf && (this.A.style.willChange = this.C.style.willChange = "transform")
        },
        Gt = function(a, b) {
            return ((void 0 === b ? 0 : b) ? a.F : null) || (a.F = a.fa.getBoundingClientRect())
        },
        Ht = function(a, b, c, d) {
            var e = b.center,
                f = _.bd(b.zoom, b.tilt, b.heading);
            a.j = {
                center: e,
                scale: f
            };
            b = a.getBounds(b);
            a.D = _.cd(f, _.Mj(_.Nj(f, e)));
            a.m = {
                L: 0,
                O: 0
            };
            var g = a.H;
            g && (a.A.style[g] = a.C.style[g] = "translate(" +
                a.m.L + "px," + a.m.O + "px)");
            a.J.Gf || (a.A.style.willChange = a.C.style.willChange = "");
            g = Gt(a, !0);
            for (var h in a.l) a.l[h].yb(b, a.D, f, e, {
                L: g.width,
                O: g.height
            }, {
                Dk: d,
                nc: !0,
                timestamp: c
            })
        },
        It = function(a, b, c, d) {
            this.A = a;
            this.C = d;
            this.m = c;
            this.j = null;
            this.F = !1;
            this.l = null;
            this.D = !0;
            this.H = b
        },
        Kt = function(a, b, c) {
            b = a.m.Zc(b);
            a.j && c ? Jt(a, a.H(Gt(a.A, !0), a.j, b, _.l())) : Jt(a, Et(b))
        },
        Lt = function(a, b) {
            a.m = b;
            !a.l && a.j && (b = a.m.Zc(a.j), b.center == a.j.center && b.zoom == a.j.zoom && b.heading == a.j.heading && b.tilt == a.j.tilt || Jt(a,
                Et(b)))
        },
        Mt = function(a) {
            a.F || (a.F = !0, Qr(function(b) {
                a.F = !1;
                if (a.l) {
                    var c = a.l,
                        d = c.Xa(b),
                        e = d.Hb;
                    d = d.done;
                    0 == d && (a.l = null, c.fb());
                    e ? a.j = e = a.m.Zc(e) : e = a.j;
                    if (e)
                        if (0 == d && a.D) Ht(a.A, e, b, !1);
                        else {
                            var f = a.A,
                                g = e,
                                h = c.Ka,
                                k = g.center,
                                n = _.bd(g.zoom, g.tilt, g.heading),
                                p = !n.equals(f.j && f.j.scale);
                            f.j = {
                                scale: n,
                                center: k
                            };
                            if (p && f.m) f.D = _.cd(n, _.Mj(_.Nj(n, _.Gj(k, _.cd(n, f.m)))));
                            else if (f.m = _.Mj(_.Nj(n, _.Hj(f.D, k))), p = f.H) f.A.style[p] = f.C.style[p] = "translate(" + f.m.L + "px," + f.m.O + "px)", f.A.style.willChange = f.C.style.willChange =
                                "transform";
                            g = f.getBounds(g);
                            p = Gt(f, !0);
                            for (var q in f.l) f.l[q].yb(g, f.D, n, k, {
                                L: p.width,
                                O: p.height
                            }, {
                                Dk: !0,
                                nc: !1,
                                Ka: h,
                                timestamp: b
                            });
                            1 != d && 0 != d || Mt(a)
                        }
                    e && !c.Ka && a.C(e)
                } else a.j && Ht(a.A, a.j, b, !0);
                a.D = !1
            }))
        },
        Jt = function(a, b) {
            a.l && a.l.fb();
            a.l = b;
            a.D = !0;
            (b = b.Ka) && a.C(a.m.Zc(b.wa));
            Mt(a)
        },
        Nt = function(a, b) {
            this.Ka = a;
            this.j = b
        },
        Ot = function(a, b, c, d) {
            var e = a.zoom - b.zoom,
                f = a.zoom;
            f = -.1 > e ? Math.floor(f) : .1 < e ? Math.ceil(f) : Math.round(f);
            e = d + 1E3 * Math.sqrt(Math.hypot(a.center.R - b.center.R, a.center.S - b.center.S) * Math.pow(2,
                a.zoom) / c) / 3.2;
            var g = d + 1E3 * (.5 - Math.abs(a.zoom % 1 - .5)) / 2;
            this.Ua = (0 >= c ? g : Math.max(g, e)) - d;
            d = 0 >= c ? 0 : (a.center.R - b.center.R) / c;
            b = 0 >= c ? 0 : (a.center.S - b.center.S) / c;
            this.j = .5 * this.Ua * d;
            this.l = .5 * this.Ua * b;
            this.m = a;
            this.wa = {
                center: _.Gj(a.center, new _.Yc(this.Ua * d / 2, this.Ua * b / 2)),
                heading: a.heading,
                tilt: a.tilt,
                zoom: f
            };
            this.pe = []
        },
        Pt = function(a, b, c, d) {
            this.l = b;
            this.A = c;
            this.C = d;
            this.m = a;
            this.j = []
        },
        Qt = function(a, b) {
            a.m = b;
            a.A();
            var c = _.Ui ? _.y.performance.now() : _.Ya();
            0 < a.j.length && 10 > c - a.j.slice(-1)[0].Me || (a.j.push({
                Me: c,
                Hb: b
            }), 10 < a.j.length && a.j.splice(0, 1))
        },
        Rt = function(a, b, c) {
            var d = this;
            this.m = a(function() {
                Mt(d.j)
            });
            this.j = new It(this.m, b, {
                Zc: _.na(),
                ce: function() {
                    return {
                        min: 0,
                        max: 1E3
                    }
                }
            }, function(a) {
                return c(a, d.m.getBounds(a))
            });
            this.A = b;
            this.l = _.vi
        },
        ns = function(a, b, c, d) {
            d = void 0 === d ? _.l() : d;
            var e = a.j.ce(),
                f = a.j.j;
            b = Math.min(b, e.max);
            b = Math.max(b, e.min);
            f && (b = {
                center: _.Gj(c, _.cd(_.bd(b, f.tilt, f.heading), _.Nj(_.bd(f.zoom, f.tilt, f.heading), _.Hj(f.center, c)))),
                zoom: b,
                heading: f.heading,
                tilt: f.tilt
            }, d = a.A(Gt(a.m, !0),
                f, b, d), Jt(a.j, d))
        },
        St = function(a, b) {
            var c = a.j.j;
            if (!c) return null;
            b = new Pt(c, b, function() {
                Mt(a.j)
            }, function(b) {
                Jt(a.j, b)
            });
            Jt(a.j, b);
            return b
        },
        Tt = function(a, b, c) {
            c = void 0 === c ? {} : c;
            var d = 0 != c.Aj,
                e = !!c.Gf;
            return new Rt(function(b) {
                return new Ft(a, b, {
                    Gf: e
                })
            }, function(a, b, c, e) {
                return new Dt(new Bt(a, b, c), {
                    fb: e,
                    maxDistance: d ? 1.5 : 0
                })
            }, b)
        },
        Vt = function(a, b) {
            this.j = a;
            this.l = b;
            Ut(this)
        },
        Ut = function(a) {
            var b = null,
                c = a.get("restriction");
            c && _.fm(a.l, "Mbr");
            var d = a.get("projection");
            if (c) {
                b = _.cl(c.latLngBounds.getSouthWest(),
                    d);
                var e = _.cl(c.latLngBounds.getNorthEast(), d);
                b = {
                    min: new _.Yc(_.Oj(c.latLngBounds.ga) ? -Infinity : b.R, e.S),
                    max: new _.Yc(_.Oj(c.latLngBounds.ga) ? Infinity : e.R, b.S)
                };
                e = 1 == c.strictBounds
            }
            c = new _.Dq(a.get("minZoom") || 0, a.get("maxZoom") || 30);
            d = a.get("mapTypeMinZoom");
            var f = a.get("mapTypeMaxZoom"),
                g = a.get("trackerMaxZoom");
            _.L(d) && (c.min = Math.max(c.min, d));
            _.L(g) ? c.max = Math.min(c.max, g) : _.L(f) && (c.max = Math.min(c.max, f));
            _.Rc(function(a) {
                return a.min <= a.max
            }, "minZoom cannot exceed maxZoom")(c);
            d = a.j.Nf();
            e = new zt(b, c, {
                width: d.width,
                height: d.height
            }, e);
            Lt(a.j.j, e);
            a.set("zoomRange", c);
            a.set("boundsRange", b)
        },
        Wt = _.oa("j"),
        Xt = function(a, b) {
            function c(c) {
                var d = b.getAt(c);
                if (d instanceof _.kh) {
                    c = d.get("styles");
                    var f = vt(c);
                    d.Ma = function(b) {
                        var c = b ? "hybrid" == d.j ? "" : "p.s:-60|p.l:-60" : f,
                            e = Ts(a, d.j);
                        return (new Ds(e, c, null, null, null)).Ma(b)
                    }
                }
            }
            _.S.addListener(b, "insert_at", c);
            _.S.addListener(b, "set_at", c);
            b.forEach(function(a, b) {
                return c(b)
            })
        },
        Yt = function(a) {
            var b = this;
            this.j = a;
            a.addListener(function() {
                return b.notify("style")
            })
        },
        Zt = function(a, b, c) {
            _.xc(_.mi, function(d, e) {
                b.set(e, Ts(a, e, {
                    Vj: c
                }))
            })
        },
        $t = function(a, b) {
            function c(a) {
                switch (a.mapTypeId) {
                    case "roadmap":
                        return "Tm";
                    case "satellite":
                        return a.J ? "Ta" : "Tk";
                    case "hybrid":
                        return a.J ? "Ta" : "Th";
                    case "terrain":
                        return "Tr";
                    default:
                        return "To"
                }
            }
            _.S.la(b, "basemaptype_changed", function() {
                var d = b.get("baseMapType");
                d && _.fm(a, c(d))
            });
            var d = a.__gm;
            _.S.la(d, "hascustomstyles_changed", function() {
                if (d.get("hasCustomStyles")) {
                    _.fm(a, "Ts");
                    var b = d.get("apistyle");
                    b && _.U("stats").then(function(a) {
                        a.Xk(b)
                    })
                }
            })
        },
        au = function(a) {
            if (a && _.yk(a.getDiv()) && _.wk()) {
                _.fm(a, "Tdev");
                var b = document.querySelector('meta[name="viewport"]');
                (b = b && b.content) && b.match(/width=device-width/) && _.fm(a, "Mfp")
            }
        },
        bu = function() {
            var a = new vs(ys()),
                b = {};
            b.obliques = new vs(zs());
            b.report_map_issue = a;
            return b
        },
        cu = function(a) {
            var b = a.get("embedReportOnceLog");
            if (b) {
                var c = function() {
                    for (; b.getLength();) {
                        var c = b.pop();
                        _.fm(a, c)
                    }
                };
                _.S.addListener(b, "insert_at", c);
                c()
            } else _.S.addListenerOnce(a, "embedreportoncelog_changed", function() {
                cu(a)
            })
        },
        du = function(a) {
            var b = a.get("embedFeatureLog");
            if (b) {
                var c = function() {
                    for (; b.getLength();) {
                        var c = b.pop();
                        _.gm(a, c)
                    }
                };
                _.S.addListener(b, "insert_at", c);
                c()
            } else _.S.addListenerOnce(a, "embedfeaturelog_changed", function() {
                du(a)
            })
        },
        eu = _.l();
    Ur.prototype.has = function(a, b) {
        var c = a.M,
            d = a.N;
        b = void 0 === b ? {} : b;
        b = void 0 === b.li ? 0 : b.li;
        return a.Y != this.Y ? !1 : this.m - b <= c && c <= this.j + b && this.A - b <= d && d <= this.l + b
    };
    var as = function fu(a) {
        var c, d, e, f, g, h, k;
        return Pr(fu, function(n) {
            switch (n.j) {
                case 1:
                    return c = Math.ceil((a.m + a.j) / 2), d = Math.ceil((a.A + a.l) / 2), _.gj(n, {
                        M: c,
                        N: d,
                        Y: a.Y
                    }, 2);
                case 2:
                    e = [-1, 0, 1, 0], f = [0, -1, 0, 1], g = 0, h = 1;
                case 3:
                    k = 0;
                case 5:
                    if (!(k < h)) {
                        g = (g + 1) % 4;
                        0 == f[g] && h++;
                        n.j = 3;
                        break
                    }
                    c += e[g];
                    d += f[g];
                    if ((d < a.A || d > a.l) && (c < a.m || c > a.j)) return n["return"]();
                    if (!(a.A <= d && d <= a.l && a.m <= c && c <= a.j)) {
                        n.j = 6;
                        break
                    }
                    return _.gj(n, {
                        M: c,
                        N: d,
                        Y: a.Y
                    }, 6);
                case 6:
                    ++k, n.j = 5
            }
        })
    };
    _.gl.prototype.yb = _.bj(8, function(a, b, c, d, e, f) {
        a = _.Mj(_.Nj(c, _.Hj(this.l.min, b)));
        b = _.Nj(c, this.l.min);
        d = _.Nj(c, new _.Yc(this.l.max.R, this.l.min.S));
        c = _.Nj(c, new _.Yc(this.l.min.R, this.l.max.S));
        this.j.style[this.A] = "matrix(" + (d.L - b.L) / this.m.width + "," + (d.O - b.O) / this.m.width + "," + (c.L - b.L) / this.m.height + "," + (c.O - b.O) / this.m.height + "," + a.L + "," + a.O + ")";
        this.j.style.willChange = f.nc ? "" : "transform"
    });
    _.ll.prototype.yb = _.bj(7, function(a, b, c, d, e, f) {
        d = f.nc || this.C && !b.equals(this.C) || this.D && !c.equals(this.D);
        this.C = b;
        this.D = c;
        this.ia = f;
        e = f.Ka && f.Ka.wa;
        var g = Math.round(Math.log(c.j) / Math.LN2),
            h = e ? e.zoom : g;
        switch (this.A.Sa) {
            case 2:
                var k = g;
                break;
            case 1:
            case 3:
                k = h
        }
        void 0 != k && k != this.m && (this.m = k, this.fa = _.Ya());
        k = 1 == this.A.Sa && e && this.qa.uf(e) || a;
        g = this.A.ja;
        h = _.ua(this.j.keys());
        for (var n = h.next(); !n.done; n = h.next()) {
            n = n.value;
            var p = this.j.get(n),
                q = p.ka,
                t = q.Y,
                w = new Ur(g, k, t),
                u = new Ur(g, a, t),
                v = !this.J &&
                !p.eb(),
                x = t != this.m && !p.eb();
            t = t != this.m && !w.has(q) && !u.has(q);
            q = f.nc && !w.has(q, {
                li: 2
            });
            v || x || t || q ? (p.release(), this.j["delete"](n)) : d && Sr(p, b, c, f.nc)
        }
        ds(this, new Ur(g, k, this.m), e, f.nc)
    });
    _.Vl.prototype.yb = _.bj(6, function(a, b, c) {
        this.j = a;
        this.m = b;
        this.l = c;
        this.D()
    });
    _.A(gs, _.E);
    gs.prototype.getTile = function() {
        return new _.up(this.B[1])
    };
    var tt = {
            hue: "h",
            saturation: "s",
            lightness: "l",
            gamma: "g",
            invert_lightness: "il",
            visibility: "v",
            color: "c",
            weight: "w"
        },
        rt = {
            all: 0,
            administrative: 1,
            "administrative.country": 17,
            "administrative.province": 18,
            "administrative.locality": 19,
            "administrative.neighborhood": 20,
            "administrative.land_parcel": 21,
            poi: 2,
            "poi.business": 33,
            "poi.government": 34,
            "poi.school": 35,
            "poi.medical": 36,
            "poi.attraction": 37,
            "poi.place_of_worship": 38,
            "poi.sports_complex": 39,
            "poi.park": 40,
            road: 3,
            "road.highway": 49,
            "road.highway.controlled_access": 785,
            "road.arterial": 50,
            "road.local": 51,
            transit: 4,
            "transit.line": 65,
            "transit.station": 66,
            "transit.station.rail": 1057,
            "transit.station.bus": 1058,
            "transit.station.airport": 1059,
            "transit.station.ferry": 1060,
            landscape: 5,
            "landscape.man_made": 81,
            "landscape.natural": 82,
            "landscape.natural.landcover": 1313,
            "landscape.natural.terrain": 1314,
            water: 6
        },
        st = {
            all: "",
            geometry: "g",
            "geometry.fill": "g.f",
            "geometry.stroke": "g.s",
            labels: "l",
            "labels.icon": "l.i",
            "labels.text": "l.t",
            "labels.text.fill": "l.t.f",
            "labels.text.stroke": "l.t.s"
        };
    hs.prototype.addListener = function(a, b) {
        this.W.addListener(a, b)
    };
    hs.prototype.addListenerOnce = function(a, b) {
        this.W.addListenerOnce(a, b)
    };
    hs.prototype.removeListener = function(a, b) {
        this.W.removeListener(a, b)
    };
    os.prototype.Xb = function(a, b) {
        var c = this;
        b.stop();
        this.j || (this.l && _.Qp(this.l, !0), (b = St(this.m, function() {
            c.j = null;
            c.A.reset()
        })) ? this.j = {
            origin: a.Ea,
            Nl: this.m.j.j.zoom,
            rd: b
        } : this.A.reset())
    };
    os.prototype.Vc = function(a) {
        if (this.j) {
            var b = this.m.j.j;
            Qt(this.j.rd, {
                center: b.center,
                zoom: this.j.Nl + (a.Ea.clientY - this.j.origin.clientY) / 128,
                heading: b.heading,
                tilt: b.tilt
            })
        }
    };
    os.prototype.rc = function() {
        this.l && _.Qp(this.l, !1);
        this.j && this.j.rd.release();
        this.j = null
    };
    ps.prototype.Xb = function(a, b) {
        var c = this,
            d = !this.j && 1 == b.button && 1 == a.xe,
            e = this.A(d ? 2 : 4);
        "none" == e || "cooperative" == e && d || (b.stop(), this.j ? this.j.Ce = qs(this, a) : (this.m && _.Qp(this.m, !0), (b = St(this.l, function() {
            c.j = null;
            c.C.reset()
        })) ? this.j = {
            Ce: qs(this, a),
            rd: b
        } : this.C.reset()))
    };
    ps.prototype.Vc = function(a) {
        if (this.j) {
            var b = this.A(4);
            if ("none" != b) {
                var c = this.l.j.j;
                b = "zoomaroundcenter" == b && 1 < a.xe ? c.center : _.Hj(_.Gj(c.center, this.j.Ce.Ea), this.l.xb(a.Ea));
                Qt(this.j.rd, {
                    center: b,
                    zoom: this.j.Ce.zoom + Math.log(a.radius / this.j.Ce.radius) / Math.LN2,
                    heading: c.heading,
                    tilt: c.tilt
                })
            }
        }
    };
    ps.prototype.rc = function() {
        this.A(3);
        this.m && _.Qp(this.m, !1);
        this.j && this.j.rd.release();
        this.j = null
    };
    _.cj(vs, _.T);
    vs.prototype.changed = function(a) {
        if ("available" != a) {
            "featureRects" == a && is(this.j);
            a = this.get("viewport");
            var b = this.get("featureRects");
            a = this.l(a, b);
            null != a && a != this.get("available") && this.set("available", a)
        }
    };
    _.cj(Cs, _.jh);
    Cs.prototype.Ma = function(a) {
        return this.C(this, void 0 === a ? !1 : a)
    };
    Cs.prototype.ab = _.pa("l");
    _.cj(Ds, Cs);
    Fs.prototype.Fa = _.pa("j");
    Fs.prototype.eb = function() {
        return _.Zj(this.l, function(a) {
            return a.eb()
        })
    };
    Fs.prototype.release = function() {
        for (var a = _.ua(this.l), b = a.next(); !b.done; b = a.next()) b.value.release();
        this.m()
    };
    Gs.prototype.Va = function(a, b) {
        b = void 0 === b ? {} : b;
        var c = _.Ub("DIV"),
            d = _.oj(this.j, function(b, d) {
                b = b.Va(a);
                var e = b.Fa();
                e.style.position = "absolute";
                e.style.zIndex = d;
                c.appendChild(e);
                return b
            });
        return new Fs(c, d, this.ja.size, this.l, {
            Ia: b.Ia
        })
    };
    Is.prototype.Fa = function() {
        return this.j.Fa()
    };
    Is.prototype.eb = function() {
        return !this.A && this.j.eb()
    };
    Is.prototype.release = function() {
        this.j.release()
    };
    Js.prototype.Va = function(a, b) {
        a = new _.fq(a, this.D, _.Ub("DIV"), {
            errorMessage: "Sentimos muito, mas n\u00e3o temos imagens daqui.",
            Ia: b && b.Ia
        });
        return new Is(a, this.j, this.F, this.l, this.C, this.ja, this.m, this.A)
    };
    var gu = [{
        Pe: 108.25,
        Oe: 109.625,
        Re: 49,
        Qe: 51.5
    }, {
        Pe: 109.625,
        Oe: 109.75,
        Re: 49,
        Qe: 50.875
    }, {
        Pe: 109.75,
        Oe: 110.5,
        Re: 49,
        Qe: 50.625
    }, {
        Pe: 110.5,
        Oe: 110.625,
        Re: 49,
        Qe: 49.75
    }];
    Ks.prototype.Va = function(a, b) {
        a: {
            var c = a.Y;
            if (!(7 > c)) {
                var d = 1 << c - 7;
                c = a.M / d;
                d = a.N / d;
                for (var e = _.ua(gu), f = e.next(); !f.done; f = e.next())
                    if (f = f.value, c >= f.Pe && c <= f.Oe && d >= f.Re && d <= f.Qe) {
                        c = !0;
                        break a
                    }
            }
            c = !1
        }
        return c ? this.j.Va(a, b) : this.l.Va(a, b)
    };
    Vs.prototype.m = function(a) {
        var b = this;
        clearTimeout(this.A);
        1 == a ? (Ws(this, !0), this.A = setTimeout(function() {
            return Xs(b)
        }, 1500)) : 2 == a ? Ws(this, !1) : 3 == a ? Xs(this) : 4 == a && (this.j.style.transitionDuration = "0.2s", this.j.style.opacity = 0)
    };
    it.prototype.A = function(a) {
        return this.C(this.l.A(a))
    };
    it.prototype.m = function(a) {
        return this.C(this.l.m(a))
    };
    it.prototype.j = function() {
        return this.l.j()
    };
    _.A(lt, _.T);
    _.m = lt.prototype;
    _.m.mapTypeId_changed = function() {
        var a = this.get("mapTypeId");
        this.Md(a)
    };
    _.m.heading_changed = function() {
        var a = this.get("heading");
        if (_.Ha(a)) {
            var b = _.Ac(90 * Math.round(a / 90), 0, 360);
            a != b ? this.set("heading", b) : (a = this.get("mapTypeId"), this.Md(a))
        }
    };
    _.m.tilt_changed = function() {
        var a = this.get("mapTypeId");
        this.Md(a)
    };
    _.m.setMapTypeId = function(a) {
        this.Md(a);
        this.set("mapTypeId", a)
    };
    _.m.Md = function(a) {
        var b = this.get("heading") || 0,
            c = this.l.get(a),
            d = this.get("tilt");
        if (d && c && c instanceof Cs && c.j && c.j[b]) c = c.j[b];
        else if (0 == d && 0 != b) {
            this.set("heading", 0);
            return
        }
        c && c == this.C || (this.m && (_.S.removeListener(this.m), this.m = null), b = (0, _.z)(this.Md, this, a), a && (this.m = _.S.addListener(this.l, a.toLowerCase() + "_changed", b)), c && c instanceof _.kh ? (a = c.j, this.set("styles", c.get("styles")), this.set("baseMapType", this.l.get(a))) : (this.set("styles", null), this.set("baseMapType", c)), this.set("maxZoom",
            c && c.maxZoom), this.set("minZoom", c && c.minZoom), this.C = c)
    };
    _.m.Cj = function(a, b, c, d, e, f) {
        if (void 0 == f) return null;
        if (d instanceof Cs) {
            a = new Ds(d, a, b, e, c);
            if (b = this.j instanceof Ds)
                if (b = this.j, b == a) b = !0;
                else if (b && a) {
                if (c = b.heading == a.heading && b.projection == a.projection && b.cd == a.cd) b = b.l.get(), c = a.l.get(), c = b == c ? !0 : b && c ? b.scale == c.scale && b.Ic == c.Ic && (b.Za == c.Za ? !0 : b.Za && c.Za ? b.Za.equals(c.Za) : !1) : !1;
                b = c
            } else b = !1;
            b || (this.j = a)
        } else this.j = d;
        return this.j
    };
    _.A(nt, _.T);
    nt.prototype.changed = function(a) {
        if ("maxZoomRects" == a || "latLng" == a) {
            a = this.get("latLng");
            var b = this.get("maxZoomRects");
            if (a && b) {
                for (var c = void 0, d = 0, e; e = b[d++];) e.bounds.contains(a) && (c = Math.max(c || 0, e.maxZoom));
                a = c;
                a != this.get("maxZoom") && this.set("maxZoom", a)
            } else void 0 != this.get("maxZoom") && this.set("maxZoom", void 0)
        }
    };
    _.cj(qt, _.T);
    qt.prototype.getBounds = function() {
        var a = this.map.get("center"),
            b = this.map.get("zoom");
        if (a && null != b) {
            var c = this.map.get("tilt") || 0,
                d = this.map.get("heading") || 0;
            var e = this.map.getProjection();
            a = {
                center: _.cl(a, e),
                zoom: b,
                tilt: c,
                heading: d
            };
            a = this.qa.uf(a);
            b = !1;
            b = void 0 === b ? !0 : b;
            e = _.bl(e);
            e = new _.R(e.fromPointToLatLng(new _.O(a.min.R, a.max.S), !b), e.fromPointToLatLng(new _.O(a.max.R, a.min.S), !b))
        } else e = null;
        return e
    };
    var ut = /^#[0-9a-fA-F]{6}$/;
    _.A(wt, _.T);
    wt.prototype.changed = function(a) {
        if ("apistyle" != a && "hasCustomStyles" != a) {
            var b = this.get("mapTypeStyles") || this.get("styles");
            this.set("hasCustomStyles", _.J(b));
            a = [];
            _.qg[13] && a.push({
                featureType: "poi.business",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            });
            _.Ec(a, b);
            b = this.get("uDS") ? "hybrid" == this.get("mapTypeId") ? "" : "p.s:-60|p.l:-60" : vt(a);
            b != this.j && (this.j = b, this.notify("apistyle"));
            a.length && !b && _.Ib(_.nj(_.S.trigger, this, "styleerror"))
        }
    };
    wt.prototype.getApistyle = _.pa("j");
    xt.prototype.F = function(a) {
        if (_.oc(a, 0)) {
            this.C = {};
            this.l = {};
            for (var b = 0; b < _.oc(a, 0); ++b) {
                var c = new gs(_.zj(a, 0, b)),
                    d = c.getTile(),
                    e = d.getZoom(),
                    f = _.G(d, 1);
                d = _.G(d, 2);
                c = _.G(c, 2);
                var g = this.C;
                g[e] = g[e] || {};
                g[e][f] = g[e][f] || {};
                g[e][f][d] = c;
                this.l[e] = Math.max(this.l[e] || 0, c)
            }
            is(this.D)
        }
    };
    xt.prototype.A = function(a) {
        var b = this.C,
            c = a.M,
            d = a.N;
        a = a.Y;
        return b[a] && b[a][c] && b[a][c][d] || 0
    };
    xt.prototype.m = function(a) {
        return this.l[a] || 0
    };
    xt.prototype.j = _.pa("D");
    zt.prototype.Zc = function(a) {
        var b = a.center,
            c = a.zoom,
            d = a.heading;
        a = a.tilt;
        c = yt(c, this.j.min, this.j.max);
        if (!this.l || !this.m.width || !this.m.height) return {
            center: b,
            zoom: c,
            heading: d,
            tilt: a
        };
        var e = this.m.width / Math.pow(2, c),
            f = this.m.height / Math.pow(2, c);
        b = new _.Yc(yt(b.R, this.l.min.R + e / 2, this.l.max.R - e / 2), yt(b.S, this.l.min.S + f / 2, this.l.max.S - f / 2));
        return {
            center: b,
            zoom: c,
            heading: d,
            tilt: a
        }
    };
    zt.prototype.ce = function() {
        return {
            min: this.j.min,
            max: this.j.max
        }
    };
    Bt.prototype.Xa = function(a) {
        if (0 >= a) return this.j;
        if (a >= this.Ua) return this.wa;
        a /= this.Ua;
        var b = this.l ? Math.expm1(a * Math.log1p(this.l)) / this.l : a;
        return {
            center: new _.Yc(this.j.center.R * (1 - b) + this.wa.center.R * b, this.j.center.S * (1 - b) + this.wa.center.S * b),
            zoom: this.j.zoom * (1 - a) + this.wa.zoom * a,
            heading: this.m * (1 - a) + this.wa.heading * a,
            tilt: this.j.tilt * (1 - a) + this.wa.tilt * a
        }
    };
    Dt.prototype.Xa = function(a) {
        a = void 0 === a ? 0 : a;
        if (!this.j) {
            var b = this.l,
                c = this.Ka.Ua;
            this.j = a + (c < b.m ? Math.acos(1 - c / b.l * b.j) / b.j : b.A + (c - b.m) / b.l);
            return {
                done: 1,
                Hb: this.Ka.Xa(0)
            }
        }
        a >= this.j ? a = {
            done: 0,
            Hb: this.Ka.wa
        } : (b = this.l, a = this.j - a, a = {
            done: 1,
            Hb: this.Ka.Xa(this.Ka.Ua - (a < b.A ? (1 - Math.cos(a * b.j)) * b.l / b.j : b.m + b.l * (a - b.A)))
        });
        return a
    };
    Ft.prototype.ra = function(a) {
        var b = _.Ua(a);
        this.l[b] || (this.l[b] = a, this.K())
    };
    Ft.prototype.getBounds = function(a, b) {
        var c = void 0 === b ? {} : b,
            d = void 0 === c.top ? 0 : c.top;
        b = void 0 === c.left ? 0 : c.left;
        var e = void 0 === c.bottom ? 0 : c.bottom;
        c = void 0 === c.right ? 0 : c.right;
        var f = Gt(this, !0);
        b -= f.width / 2;
        c = f.width / 2 - c;
        b > c && (b = c = (b + c) / 2);
        d -= f.height / 2;
        f = f.height / 2 - e;
        d > f && (d = f = (d + f) / 2);
        var g = _.bd(a.zoom, a.tilt, a.heading);
        e = _.Gj(a.center, _.cd(g, {
            L: b,
            O: d
        }));
        d = _.Gj(a.center, _.cd(g, {
            L: c,
            O: d
        }));
        c = _.Gj(a.center, _.cd(g, {
            L: c,
            O: f
        }));
        a = _.Gj(a.center, _.cd(g, {
            L: b,
            O: f
        }));
        return {
            min: new _.Yc(Math.min(e.R, d.R, c.R,
                a.R), Math.min(e.S, d.S, c.S, a.S)),
            max: new _.Yc(Math.max(e.R, d.R, c.R, a.R), Math.max(e.S, d.S, c.S, a.S))
        }
    };
    It.prototype.ce = function() {
        return this.m.ce()
    };
    Nt.prototype.fb = _.l();
    Nt.prototype.Xa = function(a) {
        a -= this.j;
        return {
            Hb: this.Ka.Xa(a),
            done: a < this.Ka.Ua ? 1 : 0
        }
    };
    Ot.prototype.Xa = function(a) {
        if (a >= this.Ua) return this.wa;
        a = Math.min(1, 1 - a / this.Ua);
        return {
            center: _.Hj(this.wa.center, new _.Yc(this.j * a * a * a, this.l * a * a * a)),
            zoom: this.wa.zoom - a * (this.wa.zoom - this.m.zoom),
            tilt: this.wa.tilt,
            heading: this.wa.heading
        }
    };
    Pt.prototype.fb = function() {
        this.l && (this.l(), this.l = null)
    };
    Pt.prototype.Xa = function() {
        return {
            Hb: this.m,
            done: this.l ? 2 : 0
        }
    };
    Pt.prototype.release = function() {
        var a = _.Ui ? _.y.performance.now() : _.Ya();
        if (!(0 >= this.j.length)) {
            var b = this.j.slice(-1)[0],
                c = _.bb(this.j, function(b) {
                    return 125 > a - b.Me
                });
            c = 0 > c ? b : this.j[c];
            this.C(new Nt(new Ot(b.Hb, c.Hb, b.Me - c.Me, a), a))
        }
    };
    _.m = Rt.prototype;
    _.m.ra = function(a) {
        this.m.ra(a)
    };
    _.m.Sc = function(a) {
        var b = this.m,
            c = _.Ua(a);
        b.l[c] && (a.dispose(), delete b.l[c])
    };
    _.m.Nf = function() {
        return Gt(this.m)
    };
    _.m.xb = function(a) {
        var b = this.m,
            c = Gt(b, void 0),
            d = (c.left + c.right) / 2;
        c = (c.top + c.bottom) / 2;
        return b.j ? _.Gj(b.j.center, _.cd(b.j.scale, {
            L: a.clientX - d,
            O: a.clientY - c
        })) : new _.Yc(0, 0)
    };
    _.m.Yk = function(a) {
        var b = this.m;
        if (b.j) {
            var c = _.Nj(b.j.scale, _.Hj(a, b.j.center));
            a = c.L;
            c = c.O;
            b = Gt(b);
            b = {
                clientX: (b.left + b.right) / 2 + a,
                clientY: (b.top + b.bottom) / 2 + c
            }
        } else b = {
            clientX: 0,
            clientY: 0
        };
        return b
    };
    _.m.uf = function(a, b) {
        return this.m.getBounds(a, b)
    };
    _.m.Of = function() {
        Mt(this.j)
    };
    _.m.we = function(a, b) {
        Kt(this.j, a, b)
    };
    _.A(Vt, _.T);
    Vt.prototype.changed = function(a) {
        "zoomRange" != a && "boundsRange" != a && Ut(this)
    };
    _.A(Wt, _.T);
    Wt.prototype.immutable_changed = function() {
        var a = this,
            b = a.get("immutable"),
            c = a.l;
        b != c && (_.xc(a.j, function(d) {
            (c && c[d]) !== (b && b[d]) && a.set(d, b && b[d])
        }), a.l = b)
    };
    _.cj(Yt, _.T);
    Yt.prototype.changed = function(a) {
        "tileMapType" != a && "style" != a && this.notify("style")
    };
    Yt.prototype.getStyle = function() {
        var a = [],
            b = this.get("tileMapType");
        if (b instanceof Cs && (b = b.__gmsd)) {
            var c = new _.tk;
            c.B[0] = b.type;
            if (b.params)
                for (var d in b.params) {
                    var e = _.uk(c);
                    _.sk(e, d);
                    var f = b.params[d];
                    f && (e.B[1] = f)
                }
            a.push(c)
        }
        d = new _.tk;
        d.B[0] = 37;
        _.sk(_.uk(d), "smartmaps");
        a.push(d);
        this.j.get().forEach(function(b) {
            b.ki && a.push(b.ki)
        });
        return a
    };
    eu.prototype.l = function(a, b, c, d, e) {
        var f = _.uc(_.wc(_.V)),
            g = a.__gm,
            h = a.getDiv();
        if (h) {
            _.S.addDomListenerOnce(c, "mousedown", function() {
                _.fm(a, "Mi")
            }, !0);
            var k = new _.Sq({
                    Kc: c,
                    gh: h,
                    Yg: !0,
                    Ah: _.xj(_.wc(_.V), 15),
                    backgroundColor: b.backgroundColor,
                    og: !0,
                    Hk: 1 == _.me.type,
                    Ik: !0
                }),
                n = k.j,
                p = new _.T;
            _.Ek(k.A, 0);
            g.set("panes", k.Wc);
            g.set("innerContainer", k.m);
            var q = new nt,
                t = bu(),
                w, u;
            (function() {
                var b = _.G(_.Fj(), 14),
                    c = a.get("noPerTile") && _.qg[15],
                    d = new xt;
                w = jt(d, b, a, c);
                u = new _.Iq(f, q, t, c ? null : d)
            })();
            u.bindTo("tilt",
                a);
            u.bindTo("heading", a);
            u.bindTo("bounds", a);
            u.bindTo("zoom", a);
            h = new Ls(new _.Ej(_.I(_.V, 1)), w, t.obliques);
            Zt(h, a.mapTypes, b.enableSplitTiles);
            g.set("eventCapturer", k.C);
            g.set("panBlock", k.D);
            var v = _.be(!1),
                x = mt(a, v);
            u.bindTo("baseMapType", x);
            h = g.Jc = x.A;
            var B = _.be(!1),
                D = us({
                    draggable: _.Jn(a, "draggable"),
                    Lj: _.Jn(a, "gestureHandling"),
                    oe: B
                }),
                F = !_.qg[20] || 0 != a.get("animatedZoom"),
                K = null,
                ma = function() {
                    _.U("util").then(function(b) {
                        b.l.j();
                        setTimeout(function() {
                            return _.rn(b.j, 1)
                        }, _.wj(_.V, 38) ? _.G(_.V,
                            38) : 5E3);
                        b.A(a)
                    })
                },
                Xa = !1,
                Qd = null,
                vd = new qt(a, function(a) {
                    return Tt(k, a, {
                        Aj: F
                    })
                }),
                ub = vd.qa,
                JV = new _.tq(function(a, b) {
                    a = new _.ll(n, 0, ub, _.kl(a), b, {
                        wd: !0
                    });
                    ub.ra(a);
                    return a
                }, function(b) {
                    a.get("tilesloading") != b && a.set("tilesloading", b);
                    b || (K && K(), Xa || (Xa = !0, ma(), d && d.j && _.Hg(d.j), Qd && (ub.Sc(Qd), Qd = null)), _.S.trigger(a, "tilesloaded"))
                }),
                RG = null;
            x.A.la(function(a) {
                RG != a && (RG = a, _.vq(JV, a))
            });
            g.set("cursor", a.get("draggableCursor"));
            new $s(a, ub, k, D);
            var jo = _.Jn(a, "draggingCursor"),
                KV = _.Jn(g, "cursor"),
                LV =
                new Vs(g.get("panBlock")),
                MV = rs(ub, k, new _.Rp(k.m, jo, KV), function(a) {
                    var b = D.get();
                    LV.m("cooperative" == b ? a : 4);
                    return b
                }, {
                    Le: !0,
                    jh: function() {
                        return !a.get("disableDoubleClickZoom")
                    },
                    $h: function() {
                        return a.get("scrollwheel")
                    }
                });
            D.la(function(a) {
                MV.vc("cooperative" == a || "none" == a)
            });
            e({
                map: a,
                qa: ub,
                Jc: h,
                Wc: k.Wc
            });
            _.U("onion").then(function(b) {
                b.l(a, w)
            });
            _.qg[35] && (cu(a), du(a));
            var Qh = new _.Eq;
            Qh.bindTo("tilt", a);
            Qh.bindTo("zoom", a);
            Qh.bindTo("mapTypeId", a);
            Qh.bindTo("aerial", t.obliques, "available");
            g.bindTo("tilt",
                Qh, "actualTilt");
            _.S.addListener(u, "attributiontext_changed", function() {
                a.set("mapDataProviders", u.get("attributionText"))
            });
            var kg = new wt;
            _.U("util").then(function(a) {
                a.j.j.la(function(a) {
                    2 == a.getStatus() && (v.set(!0), kg.set("uDS", !0))
                })
            });
            kg.bindTo("styles", a);
            kg.bindTo("mapTypeId", x);
            kg.bindTo("mapTypeStyles", x, "styles");
            g.bindTo("apistyle", kg);
            g.bindTo("hasCustomStyles", kg);
            _.S.forward(kg, "styleerror", a);
            e = new Yt(g.l);
            e.bindTo("tileMapType", x);
            g.bindTo("style", e);
            var ko = new _.Vl(a, ub, function() {
                    g.set("pixelBounds",
                        es(ko))
                }),
                NV = ko;
            ub.ra(ko);
            g.set("projectionController", ko);
            g.set("mouseEventTarget", {});
            (new _.Vq(_.me.l, k.m)).bindTo("title", g);
            d && (d.m.la(function() {
                var a = d.m.get();
                Qd || !a || Xa || (Qd = new _.gl(n, -1, a), d.j && _.Hg(d.j), ub.ra(Qd))
            }), d.bindTo("tilt", g), d.bindTo("size", g));
            g.bindTo("zoom", a);
            g.bindTo("center", a);
            g.bindTo("size", p);
            g.bindTo("baseMapType", x);
            a.set("tosUrl", _.jr);
            e = new Wt({
                projection: 1
            });
            e.bindTo("immutable", g, "baseMapType");
            jo = new _.Tq({
                projection: new _.xf
            });
            jo.bindTo("projection", e);
            a.bindTo("projection",
                jo);
            var ow = function(b, c, d) {
                var e = a.getCenter(),
                    f = a.getZoom(),
                    g = a.getProjection();
                if (e && null != f && g) {
                    var h = a.getTilt() || 0,
                        k = a.getHeading() || 0,
                        n = _.bd(f, h, k);
                    ub.we({
                        center: _.Gj(_.cl(e, g), _.cd(n, {
                            L: b,
                            O: c
                        })),
                        zoom: f,
                        heading: k,
                        tilt: h
                    }, d)
                }
            };
            _.S.addListener(g, "panby", function(a, b) {
                ow(a, b, !0)
            });
            _.S.addListener(g, "panbynow", function(a, b) {
                ow(a, b, !1)
            });
            _.S.addListener(g, "panbyfraction", function(a, b) {
                var c = ub.Nf();
                a *= c.right - c.left;
                b *= c.bottom - c.top;
                ow(a, b, !0)
            });
            _.S.addListener(g, "pantolatlngbounds", function(b,
                c) {
                _.nq(a, ub, b, c)
            });
            _.S.addListener(g, "panto", function(b) {
                if (b instanceof _.Q) {
                    var c = a.getCenter(),
                        d = a.getZoom(),
                        e = a.getProjection();
                    c && null != d && e ? (b = _.cl(b, e), c = _.cl(c, e), d = {
                        center: _.Lj(vd.qa.l, b, c),
                        zoom: d,
                        heading: a.getHeading() || 0,
                        tilt: a.getTilt() || 0
                    }, vd.qa.we(d, !0), vd.m()) : a.setCenter(b)
                } else throw Error("panTo: latLng must be of type LatLng");
            });
            var Qe = new Vt(ub, a);
            Qe.bindTo("mapTypeMaxZoom", x, "maxZoom");
            Qe.bindTo("mapTypeMinZoom", x, "minZoom");
            Qe.bindTo("maxZoom", a);
            Qe.bindTo("minZoom", a);
            Qe.bindTo("trackerMaxZoom",
                q, "maxZoom");
            Qe.bindTo("restriction", a);
            Qe.bindTo("projection", a);
            var SG = new _.Uq(_.yk(c));
            g.bindTo("fontLoaded", SG);
            e = g.F;
            e.bindTo("scrollwheel", a);
            e.bindTo("disableDoubleClickZoom", a);
            e = function() {
                var b = a.get("streetView");
                b ? (a.bindTo("svClient", b, "client"), b.__gm.bindTo("fontLoaded", SG)) : (a.unbind("svClient"), a.set("svClient", null))
            };
            e();
            _.S.addListener(a, "streetview_changed", e);
            a.j || (K = function() {
                K = null;
                _.U("controls").then(function(b) {
                    var d = new b.Cg(k.A);
                    g.set("layoutManager", d);
                    b.Sk(d, a, x, k.A,
                        u, t.report_map_issue, Qe, Qh, c, B, NV, ub);
                    b.Tk(a, k.m);
                    b.pg(c)
                })
            }, _.fm(a, "Mm"), b.v2 && _.fm(a, "Mz"), _.hm("Mm", "-p", a), $t(a, x), _.km(a, "Mm"), _.Lk(function() {
                _.km(a, "Mm")
            }), au(a));
            var OV = _.G(_.Fj(), 14);
            b = new Ls(new _.Ej(_.I(_.V, 1)), new it(w, function(a) {
                return a || OV
            }), t.obliques);
            Xt(b, a.overlayMapTypes);
            new ht(_.nj(_.fm, a), k.Wc.mapPane, a.overlayMapTypes, ub, h, v);
            _.qg[35] && g.bindTo("card", a);
            _.qg[15] && g.bindTo("authUser", a);
            var TG = 0,
                UG = 0,
                VG = function() {
                    var a = k.A,
                        b = a.clientWidth;
                    a = a.clientHeight;
                    if (TG != b || UG != a) {
                        TG =
                            b;
                        UG = a;
                        if (ub) {
                            var c = ub.j,
                                d = c.A;
                            d.F = null;
                            d.K();
                            c.l && c.l.Ka ? c.C(c.m.Zc(c.l.Ka.wa)) : c.j && c.C(c.j)
                        }
                        p.set("size", new _.P(b, a));
                        Ut(Qe)
                    }
                },
                lg = document.createElement("iframe");
            lg.setAttribute("aria-hidden", "true");
            lg.frameBorder = "0";
            lg.style.cssText = "z-index: -1; position: absolute; width: 100%;height: 100%; top: 0; left: 0; border: none";
            k.A.appendChild(lg);
            _.S.addDomListener(lg, "load", function() {
                VG();
                _.S.addDomListener(lg.contentWindow, "resize", VG)
            });
            lg.src = "about:blank"
        }
    };
    eu.prototype.fitBounds = function(a, b, c) {
        function d() {
            var c = _.re(a.getDiv());
            c.width -= e;
            c.width = Math.max(1, c.width);
            c.height -= f;
            c.height = Math.max(1, c.height);
            var d = a.getProjection(),
                k = b.getSouthWest(),
                n = b.getNorthEast(),
                p = k.lng(),
                x = n.lng();
            p > x && (k = new _.Q(k.lat(), p - 360, !0));
            k = d.fromLatLngToPoint(k);
            p = d.fromLatLngToPoint(n);
            n = Math.max(k.x, p.x) - Math.min(k.x, p.x);
            k = Math.max(k.y, p.y) - Math.min(k.y, p.y);
            c = n > c.width || k > c.height ? 0 : Math.floor(Math.min(_.jk(c.width + 1E-12) - _.jk(n + 1E-12), _.jk(c.height + 1E-12) - _.jk(k +
                1E-12)));
            n = _.ol(d, b, 0);
            n = _.ml(d, new _.O((n.V + n.$) / 2, (n.X + n.aa) / 2), 0);
            _.L(c) && n && (k = _.cd(_.bd(c, a.getTilt() || 0, a.getHeading() || 0), {
                L: g / 2,
                O: h / 2
            }), n = _.Hj(_.cl(n, d), k), n = _.dl(n, d), a.setCenter(n), a.setZoom(c))
        }
        var e = 80,
            f = 80,
            g = 0,
            h = 0;
        if (_.Ha(c)) e = f = 2 * c - .01;
        else if (c) {
            var k = c.left || 0,
                n = c.right || 0,
                p = c.bottom || 0;
            c = c.top || 0;
            e = k + n - .01;
            f = c + p - .01;
            h = c - p;
            g = k - n
        }
        a.getProjection() ? d() : _.S.addListenerOnce(a, "projection_changed", d)
    };
    eu.prototype.j = function(a, b, c, d, e) {
        a = new _.fq(a, b, c, {});
        a.setUrl(d).then(e);
        return a
    };
    _.Ke("map", new eu);
});