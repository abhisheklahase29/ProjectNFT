(function(g) {
    var window = this;
    'use strict';
    var P7 = function(a) {
            g.cl(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Va()).toString(36));
            return a
        },
        Q7 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Gga(a.u, b, c)
        },
        Znb = function(a) {
            if (a instanceof g.Xn) return a;
            if ("function" == typeof a.pk) return a.pk(!1);
            if (g.Na(a)) {
                var b = 0,
                    c = new g.Xn;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.h3;
                        if (b in a) return g.Yn(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        $nb = function(a, b, c) {
            if (g.Na(a)) g.Ub(a, b, c);
            else
                for (a = Znb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        aob = function(a, b) {
            var c = [];
            $nb(b, function(d) {
                try {
                    var e = g.uq.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.ola(e) && c.push(d)
            }, a);
            return c
        },
        bob = function(a, b) {
            aob(a, b).forEach(function(c) {
                g.uq.prototype.remove.call(this, c)
            }, a)
        },
        cob = function(a) {
            if (a.ma) {
                if (a.ma.locationOverrideToken) return {
                    locationOverrideToken: a.ma.locationOverrideToken
                };
                if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7) return {
                    latitudeE7: a.ma.latitudeE7,
                    longitudeE7: a.ma.longitudeE7
                }
            }
            return null
        },
        dob = function(a, b) {
            g.ub(a, b) || a.push(b)
        },
        eob = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        fob = function(a, b) {
            return g.cd(a, b)
        },
        gob = function(a) {
            try {
                return g.Ja.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        R7 = function(a) {
            if (g.Ja.JSON) try {
                return g.Ja.JSON.parse(a)
            } catch (b) {}
            return gob(a)
        },
        hob = function(a, b, c, d) {
            var e = new g.Nk(null);
            a && g.Wk(e, a);
            b && g.Xk(e, b);
            c && g.Yk(e, c);
            d && (e.B = d);
            return e
        },
        iob = function() {
            this.j = S7();
            this.j.Aj("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Wd: 3,
                Vd: "channel_type"
            })
        },
        job = function(a, b) {
            a.j.jk("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        kob = function() {
            this.j = S7();
            this.j.Aj("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Wd: 3,
                Vd: "channel_type"
            })
        },
        lob = function(a, b) {
            a.j.jk("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        mob = function() {
            this.j = S7();
            this.j.Aj("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Wd: 3,
                Vd: "channel_type"
            })
        },
        nob = function(a, b) {
            a.j.jk("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        oob = function() {
            this.j = S7();
            this.j.Aj("/client_streamz/youtube/living_room/mdx/channel/error", {
                Wd: 3,
                Vd: "channel_type"
            })
        },
        pob = function(a, b) {
            a.j.jk("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        qob = function() {
            this.j = S7();
            this.j.Aj("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        rob = function() {
            this.j = S7();
            this.j.Aj("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        T7 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.dq;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
                a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", sob(this, a.capabilities || ""), tob(this, a.compatibleSenderThemes || ""), uob(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        sob = function(a, b) {
            a.capabilities.clear();
            g.bo(b.split(","), g.Ua(fob, vob)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        tob = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.bo(b.split(","), g.Ua(fob, wob)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        uob = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        U7 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        V7 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        xob = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        yob = function(a) {
            return new U7(a)
        },
        zob = function(a) {
            return Array.isArray(a) ? g.nm(a, yob) : []
        },
        W7 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        Aob = function(a) {
            return Array.isArray(a) ? "[" + g.nm(a, W7).join(",") + "]" : "null"
        },
        Bob = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        Cob = function(a) {
            return g.nm(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Dob = function(a, b) {
            return g.sb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        X7 = function(a, b) {
            return g.sb(a, function(c) {
                return V7(c, b)
            })
        },
        Eob = function() {
            var a = (0, g.cA)();
            a && bob(a, a.j.pk(!0))
        },
        Y7 = function() {
            var a = g.fA("yt-remote-connected-devices") || [];
            g.Rb(a);
            return a
        },
        Fob = function(a) {
            if (g.xb(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.nm(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        Gob = function(a) {
            g.eA("yt-remote-connected-devices", a, 86400)
        },
        Z7 = function() {
            if (Hob) return Hob;
            var a = g.fA("yt-remote-device-id");
            a || (a = Bob(), g.eA("yt-remote-device-id", a, 31536E3));
            for (var b = Y7(), c = 1, d = a; g.ub(b, d);) c++, d = a + "#" + c;
            return Hob = d
        },
        Iob = function() {
            var a = Y7(),
                b = Z7();
            g.hA() && g.Tb(a, b);
            a = Fob(a);
            if (g.xb(a)) try {
                g.gz("remote_sid")
            } catch (c) {} else try {
                g.ez("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        Job = function() {
            return g.fA("yt-remote-session-browser-channel")
        },
        Kob = function() {
            return g.fA("yt-remote-local-screens") || []
        },
        Lob = function() {
            g.eA("yt-remote-lounge-token-expiration", !0, 86400)
        },
        Mob = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.nm(Kob(), function(d) {
                    return d.loungeToken
                }),
                c = g.nm(a, function(d) {
                    return d.loungeToken
                });
            g.om(c, function(d) {
                return !g.ub(b, d)
            }) && Lob();
            g.eA("yt-remote-local-screens", a, 31536E3)
        },
        $7 = function(a) {
            a || (g.gA("yt-remote-session-screen-id"), g.gA("yt-remote-session-video-id"));
            Iob();
            a = Y7();
            g.zb(a, Z7());
            Gob(a)
        },
        Nob = function() {
            if (!a8) {
                var a = g.Qq();
                a && (a8 = new g.rq(a))
            }
        },
        Oob = function() {
            Nob();
            return a8 ? !!a8.get("yt-remote-use-staging-server") : !1
        },
        b8 = function(a, b) {
            g.BC[a] = !0;
            var c = g.zC();
            c && c.publish.apply(c, arguments);
            g.BC[a] = !1
        },
        Pob = function() {},
        S7 = function() {
            if (!c8) {
                c8 = new g.Of(new Pob);
                var a = g.vy("client_streamz_web_flush_count", -1); - 1 !== a && (c8.C = a)
            }
            return c8
        },
        Qob = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        Rob = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        Sob = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        d8 = function(a) {
            a.length ? Tob(a.shift(), function() {
                d8(a)
            }) : Uob()
        },
        Vob = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        Tob = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.qk(d, g.Cr(a));
            (document.head || document.documentElement).appendChild(d)
        },
        Wob = function() {
            var a = Qob(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        Uob = function() {
            var a = Sob();
            a && a(!1, "No cast extension found")
        },
        Yob = function() {
            if (Xob) {
                var a = 2,
                    b = Sob(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                Tob("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Uob, c)
            }
        },
        Zob = function() {
            Yob();
            var a = Wob();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            d8(a)
        },
        apb = function() {
            Yob();
            var a = Wob();
            a.push.apply(a, g.la($ob.map(Vob)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            d8(a)
        },
        e8 = function(a, b, c) {
            g.E.call(this);
            this.J = null != c ? (0, g.Ta)(a, c) : a;
            this.Ji = b;
            this.D = (0, g.Ta)(this.x_, this);
            this.j = !1;
            this.u = 0;
            this.B = this.Jc = null;
            this.C = []
        },
        f8 = function(a, b, c) {
            g.E.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.Ji = b;
            this.B = null;
            this.j = !1;
            this.u = 0;
            this.Jc = null
        },
        bpb = function(a) {
            a.Jc = g.Mf(function() {
                a.Jc = null;
                a.j && !a.u && (a.j = !1, bpb(a))
            }, a.Ji);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        g8 = function() {},
        cpb = function() {
            g.pb.call(this, "p")
        },
        dpb = function() {
            g.pb.call(this, "o")
        },
        fpb = function() {
            return epb = epb || new g.Cd
        },
        gpb = function(a) {
            g.pb.call(this, "serverreachability", a)
        },
        h8 = function(a) {
            var b = fpb();
            b.dispatchEvent(new gpb(b, a))
        },
        hpb = function(a) {
            g.pb.call(this, "statevent", a)
        },
        i8 = function(a) {
            var b = fpb();
            b.dispatchEvent(new hpb(b, a))
        },
        ipb = function(a, b, c, d) {
            g.pb.call(this, "timingevent", a);
            this.size = b;
            this.Mz = d
        },
        j8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Ja.setTimeout(function() {
                a()
            }, b)
        },
        jpb = function() {},
        k8 = function(a, b, c, d) {
            this.D = a;
            this.C = b;
            this.od = c;
            this.Lc = d || 1;
            this.gb = new g.hl(this);
            this.Kb = 45E3;
            a = g.eL ? 125 : void 0;
            this.qb = new g.Lf(a);
            this.Ma = null;
            this.B = !1;
            this.V = this.fb = this.K = this.Pa = this.Aa = this.Ab = this.ea = null;
            this.qa = [];
            this.j = null;
            this.ma = 0;
            this.J = this.Da = null;
            this.Lb = -1;
            this.Ka = !1;
            this.ub = 0;
            this.Za = null;
            this.Ec = this.Ua = this.uc = this.Ba = !1;
            this.u = new kpb
        },
        kpb = function() {
            this.B = null;
            this.j = "";
            this.u = !1
        },
        mpb = function(a, b, c) {
            a.Pa = 1;
            a.K = P7(b.clone());
            a.V = c;
            a.Ba = !0;
            lpb(a, null)
        },
        lpb = function(a, b) {
            a.Aa = Date.now();
            l8(a);
            a.fb = a.K.clone();
            Q7(a.fb, "t", a.Lc);
            a.ma = 0;
            var c = a.D.Pa;
            a.u = new kpb;
            a.j = npb(a.D, c ? b : null, !a.V);
            0 < a.ub && (a.Za = new f8((0, g.Ta)(a.XQ, a, a.j), a.ub));
            a.gb.Sa(a.j, "readystatechange", a.A_);
            b = a.Ma ? g.jd(a.Ma) : {};
            a.V ? (a.Da || (a.Da = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.fb, a.Da, a.V, b)) : (a.Da = "GET", a.j.send(a.fb, a.Da, null, b));
            h8(1)
        },
        opb = function(a) {
            return a.j ? "GET" == a.Da && 2 != a.Pa && a.D.Ie : !1
        },
        spb = function(a, b, c) {
            for (var d = !0, e; !a.Ka && a.ma < c.length;)
                if (e = ppb(a, c), e == m8) {
                    4 ==
                        b && (a.J = 4, i8(14), d = !1);
                    break
                } else if (e == qpb) {
                a.J = 4;
                i8(15);
                d = !1;
                break
            } else rpb(a, e);
            opb(a) && e != m8 && e != qpb && (a.u.j = "", a.ma = 0);
            4 != b || 0 != c.length || a.u.u || (a.J = 1, i8(16), d = !1);
            a.B = a.B && d;
            d ? 0 < c.length && !a.Ec && (a.Ec = !0, a.D.PN(a)) : (n8(a), o8(a))
        },
        ppb = function(a, b) {
            var c = a.ma,
                d = b.indexOf("\n", c);
            if (-1 == d) return m8;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return qpb;
            d += 1;
            if (d + c > b.length) return m8;
            b = b.slice(d, d + c);
            a.ma = d + c;
            return b
        },
        l8 = function(a) {
            a.Ab = Date.now() + a.Kb;
            tpb(a, a.Kb)
        },
        tpb = function(a, b) {
            if (null != a.ea) throw Error("WatchDog timer not null");
            a.ea = j8((0, g.Ta)(a.y_, a), b)
        },
        p8 = function(a) {
            a.ea && (g.Ja.clearTimeout(a.ea), a.ea = null)
        },
        o8 = function(a) {
            a.D.Yg() || a.Ka || upb(a.D, a)
        },
        n8 = function(a) {
            p8(a);
            g.fb(a.Za);
            a.Za = null;
            a.qb.stop();
            a.gb.Hf();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        rpb = function(a, b) {
            try {
                var c = a.D;
                if (0 != c.rh && (c.j == a || vpb(c.u, a)))
                    if (!a.Ua && vpb(c.u, a) && 3 == c.rh) {
                        try {
                            var d = c.zf.j.parse(b)
                        } catch (C) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.V) {
                                    if (c.j)
                                        if (c.j.Aa + 3E3 < a.Aa) q8(c), r8(c);
                                        else break a;
                                    wpb(c);
                                    i8(18)
                                }
                            }
                            else c.ye = e[1], 0 < c.ye - c.Za && 37500 > e[2] && c.Ua && 0 == c.qa && !c.ma && (c.ma = j8((0, g.Ta)(c.B_, c), 6E3));
                            if (1 >= xpb(c.u) && c.Yc) {
                                try {
                                    c.Yc()
                                } catch (C) {}
                                c.Yc = void 0
                            }
                        } else s8(c, 11)
                    } else if ((a.Ua || c.j == a) && q8(c), !g.Zb(b))
                    for (e = c.zf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Za = f[0];
                        f = f[1];
                        if (2 == c.rh)
                            if ("c" == f[0]) {
                                c.C = f[1];
                                c.Ec = f[2];
                                var h = f[3];
                                null != h && (c.YQ = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.gb = 1.5 * l);
                                d = c;
                                var m = a.iM();
                                if (m) {
                                    var n = g.Aj(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.u;
                                        !p.j && (g.cc(n, "spdy") || g.cc(n, "quic") || g.cc(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (ypb(p, p.u), p.u = null))
                                    }
                                    if (d.Ba) {
                                        var q = g.Aj(m, "X-HTTP-Session-Id");
                                        q && (d.Ae = q, g.cl(d.Ma, d.Ba, q))
                                    }
                                }
                                c.rh = 3;
                                c.D && c.D.eR();
                                c.Rc && (c.yd = Date.now() - a.Aa);
                                d = c;
                                var t = a;
                                d.Fd = zpb(d, d.Pa ? d.Ec : null, d.Lc);
                                if (t.Ua) {
                                    Apb(d.u,
                                        t);
                                    var v = t,
                                        y = d.gb;
                                    y && v.setTimeout(y);
                                    v.ea && (p8(v), l8(v));
                                    d.j = t
                                } else Bpb(d);
                                0 < c.B.length && t8(c)
                            } else "stop" != f[0] && "close" != f[0] || s8(c, 7);
                        else 3 == c.rh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? s8(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.dR(f), c.qa = 0)
                    }
                h8(4)
            } catch (C) {}
        },
        Cpb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Dpb = function(a) {
            this.D = a || 10;
            g.Ja.PerformanceNavigationTiming ? (a = g.Ja.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Ja.chrome && g.Ja.chrome.loadTimes && g.Ja.chrome.loadTimes() && g.Ja.chrome.loadTimes().wasFetchedViaSpdy);
            this.C = a ? this.D : 1;
            this.j = null;
            1 < this.C && (this.j = new Set);
            this.u = null;
            this.B = []
        },
        Epb = function(a) {
            return a.u ? !0 : a.j ? a.j.size >= a.C : !1
        },
        xpb = function(a) {
            return a.u ? 1 : a.j ? a.j.size : 0
        },
        vpb = function(a, b) {
            return a.u ? a.u == b : a.j ? a.j.has(b) : !1
        },
        ypb =
        function(a, b) {
            a.j ? a.j.add(b) : a.u = b
        },
        Apb = function(a, b) {
            a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        Fpb = function(a) {
            if (null != a.u) return a.B.concat(a.u.qa);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.B;
                a = g.w(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.qa);
                return b
            }
            return g.Db(a.B)
        },
        Gpb = function(a, b) {
            var c = new jpb;
            if (g.Ja.Image) {
                var d = new Image;
                d.onload = g.Ua(u8, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.Ua(u8, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.Ua(u8, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.Ua(u8, c, d, "TestLoadImage: timeout", !1, b);
                g.Ja.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        u8 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        Hpb = function() {
            this.j = new g8
        },
        Ipb = function(a, b, c) {
            var d = c || "";
            try {
                g.Mk(a, function(e, f) {
                    var h = e;
                    g.Oa(e) && (h = g.Pi(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        v8 = function(a, b, c) {
            return c && c.C4 ? c.C4[a] || b : b
        },
        Jpb = function(a) {
            this.B = [];
            this.Ec = this.Fd = this.Ma = this.Lc = this.j = this.Ae = this.Ba = this.Ka = this.K = this.Ab = this.ea = null;
            this.Zf = this.fb = 0;
            this.Xf = v8("failFast", !1, a);
            this.Ua = this.ma = this.V = this.J = this.D = null;
            this.od = !0;
            this.ye = this.Za = -1;
            this.uc = this.qa = this.Aa = 0;
            this.Jf = v8("baseRetryDelayMs", 5E3, a);
            this.ag = v8("retryDelaySeedMs", 1E4, a);
            this.Yf = v8("forwardChannelMaxRetries", 2, a);
            this.xe = v8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.ze = a && a.u9a || void 0;
            this.Ie = a && a.r9a || !1;
            this.gb = void 0;
            this.Pa = a && a.D9 || !1;
            this.C = "";
            this.u =
                new Dpb(a && a.e7a);
            this.zf = new Hpb;
            this.Kb = a && a.u7a || !1;
            this.ub = a && a.k7a || !1;
            this.Kb && this.ub && (this.ub = !1);
            this.cg = a && a.X6a || !1;
            a && a.w7a && (this.od = !1);
            this.Rc = !this.Kb && this.od && a && a.g7a || !1;
            this.zd = void 0;
            a && a.MV && 0 < a.MV && (this.zd = a.MV);
            this.Yc = void 0;
            this.yd = 0;
            this.qb = !1;
            this.Lb = this.Da = null
        },
        r8 = function(a) {
            a.j && (Kpb(a), a.j.cancel(), a.j = null)
        },
        Lpb = function(a) {
            r8(a);
            a.V && (g.Ja.clearTimeout(a.V), a.V = null);
            q8(a);
            a.u.cancel();
            a.J && ("number" === typeof a.J && g.Ja.clearTimeout(a.J), a.J = null)
        },
        t8 = function(a) {
            Epb(a.u) || a.J || (a.J = !0, g.Af(a.aR, a), a.Aa = 0)
        },
        Npb = function(a, b) {
            if (xpb(a.u) >= a.u.C - (a.J ? 1 : 0)) return !1;
            if (a.J) return a.B = b.qa.concat(a.B), !0;
            if (1 == a.rh || 2 == a.rh || a.Aa >= (a.Xf ? 0 : a.Yf)) return !1;
            a.J = j8((0, g.Ta)(a.aR, a, b), Mpb(a, a.Aa));
            a.Aa++;
            return !0
        },
        Ppb = function(a, b) {
            var c;
            b ? c = b.od : c = a.fb++;
            var d = a.Ma.clone();
            g.cl(d, "SID", a.C);
            g.cl(d, "RID", c);
            g.cl(d, "AID", a.Za);
            w8(a, d);
            a.K && a.ea && g.gl(d, a.K, a.ea);
            c = new k8(a, a.C, c, a.Aa + 1);
            null === a.K && (c.Ma = a.ea);
            b && (a.B = b.qa.concat(a.B));
            b = Opb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.xe) + Math.round(.5 * a.xe * Math.random()));
            ypb(a.u, c);
            mpb(c, d, b)
        },
        w8 = function(a, b) {
            a.Ka && g.Uc(a.Ka, function(c, d) {
                g.cl(b, d, c)
            });
            a.D && g.Mk({}, function(c, d) {
                g.cl(b, d, c)
            })
        },
        Opb = function(a, b, c) {
            c = Math.min(a.B.length, c);
            var d = a.D ? (0, g.Ta)(a.D.C_, a.D, a) : null;
            a: for (var e = a.B, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        Ipb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.B.splice(0, c);
            b.qa = a;
            return d
        },
        Bpb = function(a) {
            a.j || a.V || (a.uc = 1, g.Af(a.ZQ, a), a.qa = 0)
        },
        wpb = function(a) {
            if (a.j || a.V || 3 <= a.qa) return !1;
            a.uc++;
            a.V = j8((0, g.Ta)(a.ZQ, a), Mpb(a, a.qa));
            a.qa++;
            return !0
        },
        Kpb = function(a) {
            null != a.Da && (g.Ja.clearTimeout(a.Da), a.Da = null)
        },
        Qpb = function(a) {
            a.j = new k8(a, a.C, "rpc", a.uc);
            null === a.K && (a.j.Ma = a.ea);
            a.j.ub = 0;
            var b = a.Fd.clone();
            g.cl(b, "RID", "rpc");
            g.cl(b, "SID", a.C);
            g.cl(b, "AID", a.Za);
            g.cl(b, "CI", a.Ua ? "0" : "1");
            !a.Ua && a.zd && g.cl(b, "TO", a.zd);
            g.cl(b, "TYPE", "xmlhttp");
            w8(a, b);
            a.K && a.ea && g.gl(b, a.K, a.ea);
            a.gb && a.j.setTimeout(a.gb);
            var c = a.j;
            a = a.Ec;
            c.Pa = 1;
            c.K = P7(b.clone());
            c.V = null;
            c.Ba = !0;
            lpb(c, a)
        },
        q8 = function(a) {
            null != a.ma && (g.Ja.clearTimeout(a.ma), a.ma = null)
        },
        upb = function(a, b) {
            var c = null;
            if (a.j == b) {
                q8(a);
                Kpb(a);
                a.j = null;
                var d = 2
            } else if (vpb(a.u, b)) c = b.qa, Apb(a.u, b), d = 1;
            else return;
            if (0 != a.rh)
                if (b.B)
                    if (1 == d) {
                        c = b.V ? b.V.length : 0;
                        b = Date.now() - b.Aa;
                        var e = a.Aa;
                        d = fpb();
                        d.dispatchEvent(new ipb(d, c, b, e));
                        t8(a)
                    } else Bpb(a);
            else {
                var f = b.Lb;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && Npb(a, b) || 2 == d && wpb(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) {
                    case 1:
                        s8(a, 5);
                        break;
                    case 4:
                        s8(a, 10);
                        break;
                    case 3:
                        s8(a, 6);
                        break;
                    default:
                        s8(a, 2)
                }
            }
        },
        Mpb = function(a, b) {
            var c = a.Jf + Math.floor(Math.random() *
                a.ag);
            a.isActive() || (c *= 2);
            return c * b
        },
        s8 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.D && (c = null);
                var d = (0, g.Ta)(a.J9, a);
                c || (c = new g.Nk("//www.google.com/images/cleardot.gif"), g.Ja.location && "http" == g.Ja.location.protocol || g.Wk(c, "https"), P7(c));
                Gpb(c.toString(), d)
            } else i8(2);
            a.rh = 0;
            a.D && a.D.cR(b);
            Rpb(a);
            Lpb(a)
        },
        Rpb = function(a) {
            a.rh = 0;
            a.Lb = [];
            if (a.D) {
                var b = Fpb(a.u);
                if (0 != b.length || 0 != a.B.length) g.Eb(a.Lb, b), g.Eb(a.Lb, a.B), a.u.B.length = 0, g.Db(a.B), a.B.length = 0;
                a.D.bR()
            }
        },
        Spb = function(a) {
            if (0 == a.rh) return a.Lb;
            var b = [];
            g.Eb(b, Fpb(a.u));
            g.Eb(b, a.B);
            return b
        },
        zpb = function(a, b, c) {
            var d = g.dl(c);
            "" != d.j ? (b && g.Xk(d, b + "." + d.j), g.Yk(d, d.C)) : (d = g.Ja.location, d = hob(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ba;
            c = a.Ae;
            b && c && g.cl(d, b, c);
            g.cl(d, "VER", a.YQ);
            w8(a, d);
            return d
        },
        npb = function(a, b, c) {
            if (b && !a.Pa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = c && a.Ie && !a.ze ? new g.tj(new g.Ik({
                oY: !0
            })) : new g.tj(a.ze);
            b.J = a.Pa;
            return b
        },
        Tpb = function() {},
        Upb = function() {
            if (g.Ve && !g.Lc(10)) throw Error("Environmental error: no available transport.");
        },
        y8 = function(a, b) {
            g.Cd.call(this);
            this.j = new Jpb(b);
            this.D = a;
            this.u = b && b.h5 || null;
            a = b && b.g5 || null;
            b && b.d7a && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.ea = a;
            a = b && b.h8a || null;
            b && b.TV && (a ? a["X-WebChannel-Content-Type"] = b.TV : a = {
                "X-WebChannel-Content-Type": b.TV
            });
            b && b.nT && (a ? a["X-WebChannel-Client-Profile"] = b.nT : a = {
                "X-WebChannel-Client-Profile": b.nT
            });
            this.j.Ab = a;
            (a = b && b.g8a) && !g.Zb(a) && (this.j.K = a);
            this.J = b && b.D9 || !1;
            this.C = b && b.S8a || !1;
            (b = b && b.x4) && !g.Zb(b) && (this.j.Ba = b, g.bd(this.u, b) && g.gd(this.u,
                b));
            this.B = new x8(this)
        },
        Vpb = function(a) {
            cpb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.Zc(b)) ? g.hd(b, this.j) : b : this.data = a
        },
        Wpb = function(a) {
            dpb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        x8 = function(a) {
            this.j = a
        },
        Xpb = function(a, b) {
            this.u = a;
            this.j = b
        },
        Ypb = function(a) {
            return Spb(a.j).map(function(b) {
                b = b.map;
                "__data__" in b && (b = b.__data__, b = a.u.C ? gob(b) : b);
                return b
            })
        },
        z8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Ja.setTimeout(function() {
                a()
            }, b)
        },
        B8 = function(a) {
            A8.dispatchEvent(new Zpb(A8, a))
        },
        Zpb = function(a) {
            g.pb.call(this, "statevent", a)
        },
        C8 = function(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.K = c;
            this.J = d || 1;
            this.u = 45E3;
            this.B = new g.hl(this);
            this.D = new g.Lf;
            this.D.setInterval(250)
        },
        aqb = function(a, b, c) {
            a.Xw = 1;
            a.Dr = P7(b.clone());
            a.mu = c;
            a.Ba = !0;
            $pb(a, null)
        },
        bqb = function(a, b, c, d, e) {
            a.Xw = 1;
            a.Dr = P7(b.clone());
            a.mu = null;
            a.Ba = c;
            e && (a.TX = !1);
            $pb(a, d)
        },
        $pb = function(a, b) {
            a.Ww = Date.now();
            D8(a);
            a.Fr = a.Dr.clone();
            Q7(a.Fr, "t", a.J);
            a.GE = 0;
            a.Ti = a.j.qJ(a.j.HA() ? b : null);
            0 < a.oJ && (a.EE = new f8((0, g.Ta)(a.fR, a, a.Ti), a.oJ));
            a.B.Sa(a.Ti, "readystatechange", a.E_);
            b = a.ju ? g.jd(a.ju) : {};
            a.mu ? (a.FE = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Ti.send(a.Fr, a.FE, a.mu, b)) : (a.FE = "GET", a.TX && !g.Nc && (b.Connection = "close"), a.Ti.send(a.Fr, a.FE, null, b));
            a.j.xn(1)
        },
        eqb = function(a, b) {
            var c = a.GE,
                d = b.indexOf("\n", c);
            if (-1 == d) return cqb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return dqb;
            d += 1;
            if (d + c > b.length) return cqb;
            b = b.slice(d, d + c);
            a.GE = d + c;
            return b
        },
        gqb = function(a, b) {
            a.Ww = Date.now();
            D8(a);
            var c = b ? window.location.hostname : "";
            a.Fr = a.Dr.clone();
            g.cl(a.Fr, "DOMAIN", c);
            g.cl(a.Fr, "t", a.J);
            try {
                a.Kn = new ActiveXObject("htmlfile")
            } catch (m) {
                E8(a);
                a.Er = 7;
                B8(22);
                F8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in G8) f = G8[f];
                        else if (f in fqb) f = G8[f] = fqb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                G8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            g.Sd("b/12014412");
            c = g.ge(d);
            a.Kn.open();
            a.Kn.write(g.fe(c));
            a.Kn.close();
            a.Kn.parentWindow.m = (0, g.Ta)(a.e8, a);
            a.Kn.parentWindow.d = (0, g.Ta)(a.VW, a, !0);
            a.Kn.parentWindow.rpcClose = (0, g.Ta)(a.VW, a, !1);
            c = a.Kn.createElement("DIV");
            a.Kn.parentWindow.document.body.appendChild(c);
            d = g.$d(a.Fr.toString());
            d = g.Ge(g.Yd(d));
            g.Sd("b/12014412");
            d = g.ge('<iframe src="' + d + '"></iframe>');
            g.Zba(c, d);
            a.j.xn(1)
        },
        D8 = function(a) {
            a.pJ =
                Date.now() + a.u;
            hqb(a, a.u)
        },
        hqb = function(a, b) {
            if (null != a.Yw) throw Error("WatchDog timer not null");
            a.Yw = z8((0, g.Ta)(a.D_, a), b)
        },
        iqb = function(a) {
            a.Yw && (g.Ja.clearTimeout(a.Yw), a.Yw = null)
        },
        F8 = function(a) {
            a.j.Yg() || a.fu || a.j.HE(a)
        },
        E8 = function(a) {
            iqb(a);
            g.fb(a.EE);
            a.EE = null;
            a.D.stop();
            a.B.Hf();
            if (a.Ti) {
                var b = a.Ti;
                a.Ti = null;
                b.abort();
                b.dispose()
            }
            a.Kn && (a.Kn = null)
        },
        jqb = function(a, b) {
            try {
                a.j.gR(a, b), a.j.xn(4)
            } catch (c) {}
        },
        lqb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                kqb(a, b, function(h) {
                    h ? c(!0) : g.Ja.setTimeout(function() {
                        lqb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        kqb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    H8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    H8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    H8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    H8(d), c(!1)
                } catch (e) {}
            };
            g.Ja.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        H8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        mqb = function(a) {
            this.j = a;
            this.u = new g8
        },
        nqb = function(a) {
            var b = I8(a.j, a.cB, "/mail/images/cleardot.gif");
            P7(b);
            lqb(b.toString(), 5E3, (0, g.Ta)(a.A2, a), 3, 2E3);
            a.xn(1)
        },
        oqb = function(a) {
            var b = a.j.J;
            if (null != b) B8(5), b ? (B8(11), J8(a.j, a, !1)) : (B8(12), J8(a.j, a, !0));
            else if (a.xj = new C8(a), a.xj.ju = a.rJ, b = a.j, b = I8(b, b.HA() ? a.GA : null, a.sJ), B8(5), !g.Ve || g.Lc(10)) Q7(b, "TYPE", "xmlhttp"), bqb(a.xj, b, !1, a.GA, !1);
            else {
                Q7(b, "TYPE", "html");
                var c = a.xj;
                a = !!a.GA;
                c.Xw = 3;
                c.Dr = P7(b.clone());
                gqb(c, a)
            }
        },
        pqb = function(a, b, c) {
            this.j = 1;
            this.u = [];
            this.B = [];
            this.D = new g8;
            this.ea = a || null;
            this.J = null != b ? b : null;
            this.V = c || !1
        },
        qqb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        rqb = function(a, b, c, d) {
            g.pb.call(this, "timingevent", a);
            this.size = b;
            this.Mz = d
        },
        sqb = function(a) {
            g.pb.call(this, "serverreachability", a)
        },
        uqb = function(a) {
            a.F_(1, 0);
            a.IE = I8(a, null, a.tJ);
            tqb(a)
        },
        vqb = function(a) {
            a.Ur && (a.Ur.abort(), a.Ur = null);
            a.Jg && (a.Jg.cancel(), a.Jg = null);
            a.Lp && (g.Ja.clearTimeout(a.Lp), a.Lp = null);
            K8(a);
            a.Gj && (a.Gj.cancel(), a.Gj = null);
            a.Gr && (g.Ja.clearTimeout(a.Gr), a.Gr = null)
        },
        wqb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new qqb(a.G_++, b));
            2 != a.j && 3 != a.j || tqb(a)
        },
        xqb = function(a) {
            var b = 0;
            a.Jg && b++;
            a.Gj && b++;
            return b
        },
        tqb = function(a) {
            a.Gj || a.Gr || (a.Gr = z8((0, g.Ta)(a.kR, a), 0), a.ax = 0)
        },
        Aqb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.JA = Math.floor(1E5 * Math.random());
                    b = a.JA++;
                    var c = new C8(a, "", b);
                    c.ju = a.Qn;
                    var d = yqb(a),
                        e = a.IE.clone();
                    g.cl(e, "RID", b);
                    g.cl(e, "CVER", "1");
                    L8(a, e);
                    aqb(c, e, d);
                    a.Gj = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? zqb(a, b) : 0 == a.u.length || a.Gj || zqb(a))
        },
        zqb = function(a, b) {
            if (b)
                if (6 < a.nu) {
                    a.u = a.B.concat(a.u);
                    a.B.length = 0;
                    var c = a.JA - 1;
                    b = yqb(a)
                } else c = b.K, b = b.mu;
            else c = a.JA++, b = yqb(a);
            var d = a.IE.clone();
            g.cl(d, "SID", a.C);
            g.cl(d, "RID", c);
            g.cl(d, "AID", a.bx);
            L8(a, d);
            c = new C8(a, a.C, c, a.ax + 1);
            c.ju = a.Qn;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Gj = c;
            aqb(c, d, b)
        },
        L8 = function(a, b) {
            a.xi && (a = a.xi.oR()) && g.Uc(a, function(c, d) {
                g.cl(b, d, c)
            })
        },
        yqb = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.nu && 0 < b) {
                var d = a.u[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    Hw: e.Hw
                }, f++) {
                e.Hw = a.u[f].j;
                var h = a.u[f].map;
                e.Hw = 6 >= a.nu ? f : e.Hw - d;
                try {
                    g.Uc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.Hw + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.Hw + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.u.splice(0, b));
            return c.join("&")
        },
        Bqb = function(a) {
            a.Jg || a.Lp || (a.K = 1, a.Lp = z8((0, g.Ta)(a.jR, a), 0), a.Zw = 0)
        },
        Dqb = function(a) {
            if (a.Jg || a.Lp || 3 <= a.Zw) return !1;
            a.K++;
            a.Lp = z8((0, g.Ta)(a.jR, a), Cqb(a, a.Zw));
            a.Zw++;
            return !0
        },
        J8 = function(a, b, c) {
            a.wI = null == a.J ? c : !a.J;
            a.Rn = b.Kp;
            a.V || uqb(a)
        },
        K8 = function(a) {
            null != a.ou && (g.Ja.clearTimeout(a.ou), a.ou = null)
        },
        Cqb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        M8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.xi && (c = null);
                var d = (0, g.Ta)(a.I9, a);
                c || (c = new g.Nk("//www.google.com/images/cleardot.gif"), P7(c));
                kqb(c.toString(), 1E4, d)
            } else B8(2);
            Eqb(a, b)
        },
        Eqb = function(a, b) {
            a.j = 0;
            a.xi && a.xi.lR(b);
            Fqb(a);
            vqb(a)
        },
        Fqb = function(a) {
            a.j = 0;
            a.Rn = -1;
            if (a.xi)
                if (0 == a.B.length && 0 == a.u.length) a.xi.uJ();
                else {
                    var b = g.Db(a.B),
                        c = g.Db(a.u);
                    a.B.length = 0;
                    a.u.length = 0;
                    a.xi.uJ(b, c)
                }
        },
        I8 = function(a, b, c) {
            var d = g.dl(c);
            if ("" != d.j) b && g.Xk(d, b + "." + d.j), g.Yk(d, d.C);
            else {
                var e = window.location;
                d = hob(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.IA && g.Uc(a.IA, function(f, h) {
                g.cl(d, h, f)
            });
            g.cl(d, "VER", a.nu);
            L8(a, d);
            return d
        },
        Gqb = function() {},
        Hqb = function() {
            this.j = [];
            this.u = []
        },
        Iqb = function(a) {
            g.pb.call(this, "channelMessage");
            this.message = a
        },
        Jqb = function(a) {
            g.pb.call(this, "channelError");
            this.error = a
        },
        Kqb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        N8 = function(a, b) {
            g.E.call(this);
            this.j = new g.Np(this.W7, 0, this);
            g.J(this, this.j);
            this.Ji = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.Ta)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.Ta)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        Lqb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Aa = a;
            this.K = b;
            this.B = new g.qq;
            this.u = new N8(this.f9, this);
            this.j = null;
            this.ma = !1;
            this.J = null;
            this.ea = "";
            this.V = this.D = 0;
            this.C = [];
            this.Pa = c;
            this.qa = d;
            this.Ua = e;
            this.Ma = new iob;
            this.Da = new kob;
            this.Ka = new mob;
            this.Ba = new oob;
            this.Za = new qob;
            this.fb = new rob
        },
        Mqb = function(a) {
            if (a.j) {
                var b = a.qa(),
                    c = a.j.Qn || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Qn = c
            }
        },
        O8 = function(a) {
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.Wi(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Xi(a) || "";
            a = g.hc();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.gc(a, "10.0") && (this.u = !1))
        },
        P8 = function(a, b) {
            var c = a.j;
            a.u && (c = "https://" + a.domain + a.port + a.j);
            return g.pj(c + b, {})
        },
        Nqb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Ua(a.C, d, !0),
                onError: g.Ua(a.B, e),
                onTimeout: g.Ua(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.Vy(b, a)
        },
        Oqb = function(a, b) {
            g.Cd.call(this);
            var c = this;
            this.Bd = a();
            this.Bd.subscribe("handlerOpened", this.K_, this);
            this.Bd.subscribe("handlerClosed", this.I_, this);
            this.Bd.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Bd.subscribe("handlerMessage", this.J_, this);
            this.j = b
        },
        Pqb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new Upb : e;
            var f = void 0 === f ? new g.qq : f;
            this.pathPrefix = a;
            this.j = b;
            this.Aa = c;
            this.D = f;
            this.V = null;
            this.ea = this.K = 0;
            this.channel = null;
            this.J = 0;
            this.B = new N8(function() {
                d.B.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : xpb((new Xpb(h, h.j)).j.u)) && d.connect(d.V, d.K)
            });
            this.C = {};
            this.u = {};
            this.ma = !1;
            this.logger = null;
            this.qa = [];
            this.Ng = void 0;
            this.Ma = new iob;
            this.Da = new kob;
            this.Ka = new mob;
            this.Ba = new oob
        },
        Qqb = function(a) {
            g.sd(a.channel, "m", function() {
                a.J = 3;
                a.B.reset();
                a.V = null;
                a.K = 0;
                for (var b = g.w(a.qa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.qa = [];
                a.oa("webChannelOpened");
                job(a.Ma, "WEB_CHANNEL")
            });
            g.sd(a.channel, "n", function() {
                a.J = 0;
                a.B.isActive() || a.oa("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : Ypb(new Xpb(b, b.j));
                c && (a.qa = [].concat(g.la(c)));
                lob(a.Da, "WEB_CHANNEL")
            });
            g.sd(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.oa("webChannelMessage", new Kqb(c[0], c[1]));
                a.Ng = b.statusCode;
                nob(a.Ka, "WEB_CHANNEL")
            });
            g.sd(a.channel, "o", function() {
                401 === a.Ng || a.B.start();
                a.oa("webChannelError");
                pob(a.Ba, "WEB_CHANNEL")
            })
        },
        Rqb = function(a) {
            var b = a.Aa();
            b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
        },
        Sqb = function(a) {
            g.Cd.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.N_, this);
            this.j.subscribe("webChannelClosed", this.L_, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.M_, this)
        },
        Tqb = function(a, b, c, d, e) {
            function f() {
                return new Lqb(P8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.uy("enable_mdx_web_channel_desktop") ? new Sqb(function() {
                return new Pqb(P8(a, "/wc"), b, c)
            }) : new Oqb(f, e)
        },
        Xqb = function() {
            var a = Uqb;
            Vqb();
            Q8.push(a);
            Wqb()
        },
        R8 = function(a, b) {
            Vqb();
            var c = Yqb(a, String(b));
            g.xb(Q8) ? Zqb(c) : (Wqb(), g.Ub(Q8, function(d) {
                d(c)
            }))
        },
        S8 = function(a) {
            R8("CP", a)
        },
        Vqb = function() {
            Q8 || (Q8 = g.La("yt.mdx.remote.debug.handlers_") || [], g.Ka("yt.mdx.remote.debug.handlers_", Q8))
        },
        Zqb = function(a) {
            var b = (T8 + 1) % 50;
            T8 = b;
            U8[b] = a;
            V8 || (V8 = 49 == b)
        },
        Wqb = function() {
            var a = Q8;
            if (U8[0]) {
                var b = V8 ? T8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = U8[b];
                    g.Ub(a, function(d) {
                        d(c)
                    })
                } while (b != T8);
                U8 = Array(50);
                T8 = -1;
                V8 = !1
            }
        },
        Yqb = function(a, b) {
            var c = (Date.now() - $qb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        W8 = function(a) {
            g.uE.call(this);
            this.J = a;
            this.screens = []
        },
        arb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        brb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.bo(a.screens, function(f) {
                return !!Dob(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = arb(a, b[d]) || c;
            return c
        },
        crb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.bo(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        drb = function(a, b, c, d, e) {
            g.uE.call(this);
            this.B = a;
            this.K = b;
            this.C = c;
            this.J = d;
            this.D = e;
            this.u = 0;
            this.j = null;
            this.Jc = NaN
        },
        Y8 = function(a) {
            W8.call(this, "LocalScreenService");
            this.u = a;
            this.j = NaN;
            X8(this);
            this.info("Initializing with " + Aob(this.screens))
        },
        erb = function(a) {
            if (a.screens.length) {
                var b = g.nm(a.screens, function(d) {
                        return d.id
                    }),
                    c = P8(a.u, "/pairing/get_lounge_token_batch");
                Nqb(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.Ta)(a.W3, a), (0, g.Ta)(a.V3, a))
            }
        },
        X8 = function(a) {
            if (g.uy("deprecate_pair_servlet_enabled")) return brb(a, []);
            var b = zob(Kob());
            b = g.bo(b, function(c) {
                return !c.uuid
            });
            return brb(a, b)
        },
        Z8 = function(a, b) {
            Mob(g.nm(a.screens, xob));
            b && Lob()
        },
        grb = function(a, b) {
            g.uE.call(this);
            this.J = b;
            b = (b = g.fA("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.J(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.ub(b, h)
            }
            this.j = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            frb("Initialized with " + g.Pi(this.j))
        },
        hrb = function(a, b, c) {
            var d = P8(a.D, "/pairing/get_screen_availability");
            Nqb(a.D, d, {
                lounge_token: b.token
            }, (0, g.Ta)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.Ta)(function() {
                c(!1)
            }, a))
        },
        jrb = function(a, b) {
            a: if (eob(b) != eob(a.j)) var c = !1;
                else {
                    c = g.ad(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (frb("Updated online screens: " + g.Pi(a.j)), a.j = b, a.oa("screenChange"));irb(a)
        },
        $8 = function(a) {
            isNaN(a.B) || g.Sy(a.B);
            a.B = g.Qy((0, g.Ta)(a.ZO, a), 0 < a.C && a.C < g.Va() ? 2E4 : 1E4)
        },
        frb = function(a) {
            R8("OnlineScreenService", a)
        },
        krb = function(a) {
            var b = {};
            g.Ub(a.J(), function(c) {
                c.token ? b[c.token] = c.id : this.Wf("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        irb = function(a) {
            a = g.ad(g.Vc(a.j, function(b) {
                return b
            }));
            g.Rb(a);
            a.length ? g.eA("yt-remote-online-screen-ids", a.join(","), 60) : g.gA("yt-remote-online-screen-ids")
        },
        a9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            W8.call(this, "ScreenService");
            this.C = a;
            this.K = b;
            this.j = this.u = null;
            this.B = [];
            this.D = {};
            lrb(this)
        },
        nrb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.Bk(),
                l = c ? X7(h, c) : null;
            c && (a.K || l) || (l = X7(h, b));
            if (l) {
                l.uuid = b;
                var m = b9(a, l);
                hrb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? mrb(a, c, (0, g.Ta)(function(n) {
                var p = b9(this, new U7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                hrb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        orb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        prb = function(a, b, c) {
            hrb(a.j, b, c)
        },
        mrb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.Vy(P8(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        qrb = function(a) {
            a.screens = a.u.Bk();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + Aob(a.screens))
        },
        lrb = function(a) {
            rrb(a);
            a.u = new Y8(a.C);
            a.u.subscribe("screenChange", (0, g.Ta)(a.g4, a));
            qrb(a);
            a.K || (a.B = zob(g.fA("yt-remote-automatic-screen-cache") || []));
            rrb(a);
            a.info("Initializing automatic screens: " + Aob(a.B));
            a.j = new grb(a.C, (0, g.Ta)(a.Bk, a, !0));
            a.j.subscribe("screenChange", (0, g.Ta)(function() {
                this.oa("onlineScreenChange")
            }, a))
        },
        b9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = X7(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.K || srb(a));
            rrb(a);
            a.D[b.uuid] = b.id;
            g.eA("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        srb = function(a) {
            a = g.bo(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.eA("yt-remote-automatic-screen-cache", g.nm(a, xob))
        },
        rrb = function(a) {
            a.D = g.fA("yt-remote-device-id-map") || {}
        },
        c9 = function(a, b, c) {
            g.uE.call(this);
            this.Ba = c;
            this.C = a;
            this.u = b;
            this.j = null
        },
        d9 = function(a, b) {
            a.j = b;
            a.oa("sessionScreen", a.j)
        },
        trb = function(a, b) {
            a.j && (a.j.token = b, b9(a.C, a.j));
            a.oa("sessionScreen", a.j)
        },
        e9 = function(a, b) {
            R8(a.Ba, b)
        },
        f9 = function(a, b, c) {
            c9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.B = null;
            this.qa = (0, g.Ta)(this.S_, this);
            this.Da = (0, g.Ta)(this.o8, this);
            this.ma = g.Qy(function() {
                urb(d, null)
            }, 12E4);
            this.K = this.D = this.J = this.V = 0;
            this.Aa = !1;
            this.ea = "unknown"
        },
        wrb = function(a, b) {
            g.Sy(a.K);
            a.K = 0;
            0 == b ? vrb(a) : a.K = g.Qy(function() {
                vrb(a)
            }, b)
        },
        vrb = function(a) {
            xrb(a, "getLoungeToken");
            g.Sy(a.D);
            a.D = g.Qy(function() {
                yrb(a, null)
            }, 3E4)
        },
        xrb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Pi());
            var c = {};
            c.type = b;
            a.B ? a.B.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Ta)(function() {
                e9(this, "Failed to send message: " + b + ".")
            }, a)) : e9(a, "Sending yt message without session: " + g.Pi(c))
        },
        zrb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.rU(b, function(c) {
                d9(a, c)
            }, function() {
                return a.mj()
            }, 5)) : a.mj(Error("Waiting for session status timed out."))
        },
        Brb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new U7(b);
            Arb(a, d, function(e) {
                e ? (a.Aa = !0, b9(a.C, d), d9(a, d), a.ea = "unknown", wrb(a, c)) : (g.Ay(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.mj())
            }, 5)
        },
        urb = function(a, b) {
            g.Sy(a.ma);
            a.ma = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? Brb(a, {
                    name: a.u.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.Ay(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), zrb(a, b.screenId))) : (g.Ay(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), zrb(a, b.screenId)) :
                zrb(a, b.screenId) : a.mj(Error("Waiting for session status timed out."))
        },
        yrb = function(a, b) {
            g.Sy(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.ea = c, wrb(a, 3E4)) : (trb(a, b.loungeToken), a.Aa = !1, a.ea = "unknown", wrb(a, b.loungeTokenRefreshIntervalMs))
        },
        Arb = function(a, b, c, d) {
            g.Sy(a.J);
            a.J = 0;
            prb(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.Qy(function() {
                    Arb(a, b, c, d - 1)
                }, 300)
            })
        },
        Crb = function(a) {
            g.Sy(a.V);
            a.V = 0;
            g.Sy(a.J);
            a.J = 0;
            g.Sy(a.ma);
            a.ma = 0;
            g.Sy(a.D);
            a.D = 0;
            g.Sy(a.K);
            a.K = 0
        },
        g9 = function(a, b, c, d) {
            c9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.B = this.V = null;
            this.Da = "";
            this.Pa = c;
            this.Ma = null;
            this.ma = function() {};
            this.ea = NaN;
            this.Ka = (0, g.Ta)(this.T_, this);
            this.D = function() {};
            this.K = this.J = 0;
            this.qa = !1;
            this.Aa = "unknown"
        },
        h9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.B) ? 0 : b.getDialAppInfo))
        },
        Drb = function(a) {
            a.D = a.C.qR(a.Da, a.u.label, a.u.friendlyName, h9(a), function(b, c) {
                a.D = function() {};
                a.qa = !0;
                d9(a, b);
                "shortLived" == b.idType && 0 < c && i9(a, c)
            }, function(b) {
                a.D = function() {};
                a.mj(b)
            })
        },
        Erb = function(a) {
            var b = {};
            b.pairingCode = a.Da;
            b.theme = a.Pa;
            Oob() && (b.env_useStageMdx = 1);
            return g.bj(b)
        },
        Frb = function(a) {
            return new Promise(function(b) {
                a.Da = Bob();
                if (a.Ma) {
                    var c = new chrome.cast.DialLaunchResponse(!0, Erb(a));
                    b(c);
                    Drb(a)
                } else a.ma = function() {
                    g.Sy(a.ea);
                    a.ma = function() {};
                    a.ea = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, Erb(a));
                    b(d);
                    Drb(a)
                }, a.ea = g.Qy(function() {
                    a.ma()
                }, 100)
            })
        },
        Hrb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new U7(b);
            return (new Promise(function(e) {
                Grb(a, d, function(f) {
                    f ? (a.qa = !0, b9(a.C, d), d9(a, d), i9(a, c)) : g.Ay(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : Frb(a)
            })
        },
        Irb = function(a, b) {
            var c = a.V.receiver.label,
                d = a.u.friendlyName;
            return (new Promise(function(e) {
                nrb(a.C, c, b, d, function(f) {
                    f && f.token && d9(a, f);
                    e(f)
                }, function(f) {
                    e9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : Frb(a)
            })
        },
        Grb = function(a, b, c, d) {
            g.Sy(a.J);
            a.J = 0;
            prb(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.Qy(function() {
                    Grb(a, b, c, d - 1)
                }, 300)
            })
        },
        i9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            h9(a) && (g.Sy(a.K), a.K = 0, 0 == b ? Jrb(a) : a.K = g.Qy(function() {
                Jrb(a)
            }, b))
        },
        Jrb = function(a) {
            h9(a) && a.B.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Aa = c, i9(a, 3E4)) : (a.qa = !1, a.Aa = "unknown", trb(a, b.loungeToken), i9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Aa = "noLoungeTokenResponse";
                i9(a, 3E4)
            })
        },
        Krb = function(a) {
            g.Sy(a.J);
            a.J = 0;
            g.Sy(a.K);
            a.K = 0;
            a.D();
            a.D = function() {};
            g.Sy(a.ea)
        },
        j9 = function(a, b) {
            c9.call(this, a, b, "ManualSession");
            this.B = g.Qy((0, g.Ta)(this.bz, this, null), 150)
        },
        k9 = function(a, b) {
            g.uE.call(this);
            this.config_ = b;
            this.u = a;
            this.V = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.ea = b.disableCastApi || !1;
            this.J = b.forceMirroring || !1;
            this.j = null;
            this.K = !1;
            this.B = [];
            this.D = (0, g.Ta)(this.j7, this)
        },
        Lrb = function(a, b) {
            return b ? g.sb(a.B, function(c) {
                return V7(b, c.label)
            }, a) : null
        },
        l9 = function(a) {
            R8("Controller", a)
        },
        Uqb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        m9 = function(a) {
            return a.K || !!a.B.length || !!a.j
        },
        n9 = function(a, b, c) {
            b != a.j && (g.fb(a.j), (a.j = b) ? (c ? a.oa("yt-remote-cast2-receiver-resumed",
                b.u) : a.oa("yt-remote-cast2-receiver-selected", b.u), b.subscribe("sessionScreen", (0, g.Ta)(a.TW, a, b)), b.subscribe("sessionFailed", function() {
                return Mrb(a, b)
            }), b.j ? a.oa("yt-remote-cast2-session-change", b.j) : c && a.j.bz(null)) : a.oa("yt-remote-cast2-session-change", null))
        },
        Mrb = function(a, b) {
            a.j == b && a.oa("yt-remote-cast2-session-failed")
        },
        Nrb = function(a) {
            var b = a.u.pR(),
                c = a.j && a.j.u;
            a = g.nm(b, function(d) {
                c && V7(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = Lrb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        Urb = function(a, b, c, d) {
            d.disableCastApi ? o9("Cannot initialize because disabled by Mdx config.") : Orb() ? Prb(b, d) && (Qrb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Rrb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? Rrb(a, c) : (p9("Failed to load cast API: " + f), Srb(!1), Qrb(!1), g.gA("yt-remote-cast-available"), g.gA("yt-remote-cast-receiver"),
                    Trb(), c(!1))
            }, d.loadCastApiSetupScript ? g.GC("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= Qob() && Zob() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? Uob() : 89 <= Qob() ? apb() : (Yob(), d8($ob.map(Vob))))) : o9("Cannot initialize because not running Chrome")
        },
        Trb = function() {
            o9("dispose");
            var a = q9();
            a && a.dispose();
            g.Ka("yt.mdx.remote.cloudview.instance_", null);
            Vrb(!1);
            g.EC(Wrb);
            Wrb.length = 0
        },
        r9 = function() {
            return !!g.fA("yt-remote-cast-installed")
        },
        Xrb = function() {
            var a = g.fA("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        Yrb = function() {
            o9("clearCurrentReceiver");
            g.gA("yt-remote-cast-receiver")
        },
        Zrb = function() {
            return r9() ? q9() ? q9().getCastSession() : (p9("getCastSelector: Cast is not initialized."), null) : (p9("getCastSelector: Cast API is not installed!"), null)
        },
        $rb = function() {
            r9() ? q9() ? s9() ? (o9("Requesting cast selector."), q9().requestSession()) : (o9("Wait for cast API to be ready to request the session."), Wrb.push(g.DC("yt-remote-cast2-api-ready", $rb))) : p9("requestCastSelector: Cast is not initialized.") : p9("requestCastSelector: Cast API is not installed!")
        },
        t9 = function(a, b) {
            s9() ? q9().setConnectedScreenStatus(a, b) : p9("setConnectedScreenStatus called before ready.")
        },
        Orb = function() {
            var a = 0 <= g.hc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.kI || a
        },
        asb = function(a, b) {
            q9().init(a, b)
        },
        Prb = function(a, b) {
            var c = !1;
            q9() || (a = new k9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.eA("yt-remote-cast-available", d);
                b8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                o9("onReceiverSelected: " + d.friendlyName);
                g.eA("yt-remote-cast-receiver", d);
                b8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                o9("onReceiverResumed: " + d.friendlyName);
                g.eA("yt-remote-cast-receiver", d);
                b8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                o9("onSessionChange: " + W7(d));
                d || g.gA("yt-remote-cast-receiver");
                b8("yt-remote-cast2-session-change", d)
            }), g.Ka("yt.mdx.remote.cloudview.instance_", a), c = !0);
            o9("cloudview.createSingleton_: " + c);
            return c
        },
        q9 = function() {
            return g.La("yt.mdx.remote.cloudview.instance_")
        },
        Rrb = function(a, b) {
            Srb(!0);
            Qrb(!1);
            asb(a, function(c) {
                c ? (Vrb(!0), g.FC("yt-remote-cast2-api-ready")) : (p9("Failed to initialize cast API."), Srb(!1), g.gA("yt-remote-cast-available"), g.gA("yt-remote-cast-receiver"), Trb());
                b(c)
            })
        },
        o9 = function(a) {
            R8("cloudview", a)
        },
        p9 = function(a) {
            R8("cloudview", a)
        },
        Srb = function(a) {
            o9("setCastInstalled_ " + a);
            g.eA("yt-remote-cast-installed", a)
        },
        s9 = function() {
            return !!g.La("yt.mdx.remote.cloudview.apiReady_")
        },
        Vrb = function(a) {
            o9("setApiReady_ " + a);
            g.Ka("yt.mdx.remote.cloudview.apiReady_", a)
        },
        Qrb = function(a) {
            g.Ka("yt.mdx.remote.cloudview.initializing_", a)
        },
        u9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.J = this.K = 0;
            this.trackData = null;
            this.Fk = this.So = !1;
            this.V = this.D = this.j = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        bsb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.So = !1;
            a.Fk = !1;
            a.K = 0;
            a.J = g.Va();
            a.C = 0;
            a.j = 0;
            a.D = 0;
            a.V = 0;
            a.B = NaN;
            a.u = !1
        },
        v9 = function(a) {
            return a.jd() ? (g.Va() - a.J) / 1E3 : 0
        },
        w9 = function(a, b) {
            a.K = b;
            a.J = g.Va()
        },
        x9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Va() - a.J) / 1E3 + a.K;
                case -1E3:
                    return 0
            }
            return a.K
        },
        y9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && bsb(a)
        },
        csb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.kd(a.trackData);
            b.hasPrevious = a.So;
            b.hasNext = a.Fk;
            b.playerTime = a.K;
            b.playerTimeAt = a.J;
            b.seekableStart = a.C;
            b.seekableEnd = a.j;
            b.duration = a.D;
            b.loadedTime = a.V;
            b.liveIngestionTime = a.B;
            return b
        },
        A9 = function(a, b) {
            g.uE.call(this);
            this.B = 0;
            this.C = a;
            this.J = [];
            this.D = new Hqb;
            this.u = this.j = null;
            this.ea = (0, g.Ta)(this.X5, this);
            this.K = (0, g.Ta)(this.WC, this);
            this.V = (0, g.Ta)(this.W5, this);
            this.ma = (0, g.Ta)(this.c6, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.rP, this), dsb(this))) : c = 3;
            0 != c && (b ? this.rP(c) : g.Qy((0, g.Ta)(function() {
                this.rP(c)
            }, this), 0));
            (a = Zrb()) && z9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.ma)
        },
        B9 = function(a) {
            return new u9(a.C.getPlayerContextData())
        },
        dsb = function(a) {
            g.Ub("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.J.push(this.C.subscribe(b, g.Ua(this.h7, b), this))
            }, a)
        },
        esb = function(a) {
            g.Ub(a.J, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.J.length = 0
        },
        C9 = function(a) {
            return 1 == a.getState()
        },
        D9 = function(a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.u.push(b)
        },
        fsb = function(a, b, c) {
            var d = B9(a);
            w9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            E9(a, d)
        },
        F9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        E9 = function(a, b) {
            esb(a);
            a.C.setPlayerContextData(csb(b));
            dsb(a)
        },
        z9 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.ea), a.u.removeMediaListener(a.K), a.WC(null));
            a.u = b;
            a.u && (S8("Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.ea), a.u.addMediaListener(a.K), a.u.media.length && a.WC(a.u.media[0]))
        },
        gsb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = B9(a);
                b.contentId != d.videoId && S8("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                w9(d, a.j.getEstimatedTime());
                E9(a, d)
            } else S8("No cast media video. Ignoring state update.")
        },
        G9 = function(a, b, c) {
            return (0, g.Ta)(function(d) {
                this.Wf("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Wf("Retrying " + b + " using MDx browser channel."), F9(this, b, c))
            }, a)
        },
        J9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.uE.call(this);
            var e = this;
            this.J = NaN;
            this.Da = !1;
            this.ea = this.V = this.qa = this.Aa = NaN;
            this.ma = [];
            this.D = this.K = this.C = this.j = this.u = null;
            this.Ma = a;
            this.Ka = d;
            this.ma.push(g.Tz(window, "beforeunload", function() {
                e.sy(2)
            }));
            this.B = [];
            this.j = new u9;
            this.Pa = b.id;
            this.Ba = b.idType;
            this.u = Tqb(this.Ma, c, this.uR, "shortLived" == this.Ba, this.Pa);
            this.u.Sa("channelOpened", function() {
                hsb(e)
            });
            this.u.Sa("channelClosed", function() {
                H9("Channel closed");
                isNaN(e.J) ? $7(!0) : $7();
                e.dispose()
            });
            this.u.Sa("channelError", function(f) {
                $7();
                isNaN(e.YB()) ? (1 == f && "shortLived" == e.Ba && e.oa("browserChannelAuthError", f), H9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Da = !0, H9("Channel error: " + f + " with reconnection in " + e.YB() + " ms"), I9(e, 2))
            });
            this.u.Sa("channelMessage", function(f) {
                isb(e, f)
            });
            this.u.Yq(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.hA() && g.eA("yt-remote-session-video-id", f)
            })
        },
        jsb = function(a) {
            return g.sb(a.B, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        H9 = function(a) {
            R8("conn", a)
        },
        I9 = function(a, b) {
            a.oa("proxyStateChange", b)
        },
        ksb = function(a) {
            a.J = g.Qy(function() {
                H9("Connecting timeout");
                a.sy(1)
            }, 2E4)
        },
        lsb = function(a) {
            g.Sy(a.J);
            a.J = NaN
        },
        msb = function(a) {
            g.Sy(a.Aa);
            a.Aa = NaN
        },
        osb = function(a) {
            nsb(a);
            a.qa = g.Qy(function() {
                K9(a, "getNowPlaying")
            }, 2E4)
        },
        nsb = function(a) {
            g.Sy(a.qa);
            a.qa = NaN
        },
        hsb = function(a) {
            H9("Channel opened");
            a.Da && (a.Da = !1, msb(a), a.Aa = g.Qy(function() {
                H9("Timing out waiting for a screen.");
                a.sy(1)
            }, 15E3))
        },
        qsb = function(a, b) {
            var c = null;
            if (b) {
                var d = jsb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ka("yt.mdx.remote.remoteClient_", c);
            b && (lsb(a), msb(a));
            c = a.u.Qy() && isNaN(a.J);
            b == c ? b && (I9(a, 1), K9(a, "getSubtitlesTrack")) : b ? (a.pU() && a.j.reset(), I9(a, 1), K9(a, "getNowPlaying"), psb(a)) : a.sy(1)
        },
        rsb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.fd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.oa("remotePlayerChange"))
        },
        ssb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            y9(a.j, d, e);
            a.oa("remoteQueueChange", c)
        },
        usb = function(a, b) {
            b.params = b.params || {};
            ssb(a, b, "NOW_PLAYING_MAY_CHANGE");
            tsb(a, b);
            a.oa("autoplayDismissed")
        },
        tsb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            w9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.V = isNaN(c) ? 0 : c;
            a.j.Zk(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? osb(a) : nsb(a);
            a.oa("remotePlayerChange")
        },
        vsb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                w9(a.j, isNaN(b) ? 0 : b);
                a.oa("remotePlayerChange")
            }
        },
        wsb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.oa("remotePlayerChange")
        },
        xsb = function(a, b) {
            a.K = b.params.videoId;
            a.oa("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        ysb = function(a, b) {
            a.K = b.params.videoId || null;
            a.oa("autoplayUpNext", a.K)
        },
        zsb = function(a, b) {
            a.D = b.params.autoplayMode;
            a.oa("autoplayModeChange", a.D);
            "DISABLED" == a.D && a.oa("autoplayDismissed")
        },
        Asb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.So = "true" == b.params.hasPrevious;
            a.j.Fk = c;
            a.oa("previousNextChange")
        },
        isb = function(a, b) {
            b = b.message;
            b.params ? H9("Received: action=" + b.action + ", params=" + g.Pi(b.params)) : H9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = R7(b.params.devices);
                    a.B = g.nm(b, function(d) {
                        return new T7(d)
                    });
                    b = !!g.sb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    qsb(a, b);
                    b = a.iV("mlm");
                    a.oa("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Bb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    qsb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new T7(R7(b.params.device));
                    g.sb(a.B, function(d) {
                        return d.equals(c)
                    }) || dob(a.B, c);
                    break;
                case "remoteDisconnected":
                    c = new T7(R7(b.params.device));
                    g.Bb(a.B, function(d) {
                        return d.equals(c)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    ssb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    usb(a, b);
                    break;
                case "onStateChange":
                    tsb(a, b);
                    break;
                case "onAdStateChange":
                    vsb(a, b);
                    break;
                case "onVolumeChanged":
                    wsb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    rsb(a, b);
                    break;
                case "nowAutoplaying":
                    xsb(a, b);
                    break;
                case "autoplayDismissed":
                    a.oa("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    ysb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    zsb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    Asb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.oa("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.oa("loopModeChange", b.params.loopMode);
                    break;
                default:
                    H9("Unrecognized action: " + b.action)
            }
        },
        psb = function(a) {
            g.Sy(a.ea);
            a.ea = g.Qy(function() {
                a.sy(1)
            }, 864E5)
        },
        K9 = function(a, b, c) {
            c ? H9("Sending: action=" + b + ", params=" + g.Pi(c)) : H9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        },
        Bsb = function(a) {
            W8.call(this, "ScreenServiceProxy");
            this.Xg = a;
            this.j = [];
            this.j.push(this.Xg.$_s("screenChange", (0, g.Ta)(this.X_, this)));
            this.j.push(this.Xg.$_s("onlineScreenChange", (0, g.Ta)(this.P6, this)))
        },
        Gsb = function(a, b) {
            Nob();
            if (!a8 || !a8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.ry("MDX_CONFIG") || b;
                Eob();
                Iob();
                L9 || (L9 = new O8(b ? b.loungeApiHost : void 0), Oob() && (L9.j = "/api/loungedev"));
                M9 || (M9 = g.La("yt.mdx.remote.deferredProxies_") || [], g.Ka("yt.mdx.remote.deferredProxies_", M9));
                Csb();
                var c = N9();
                if (!c) {
                    var d = new a9(L9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ka("yt.mdx.remote.screenService_", d);
                    c = N9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ka("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    Urb(a, d, function(f) {
                        f ? O9() && t9(O9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            b8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.La("yt.mdx.remote.initialized_") && (g.Ka("yt.mdx.remote.initialized_", !0), P9("Initializing: " + g.Pi(b)),
                    Q9.push(g.DC("yt-remote-cast2-api-ready", function() {
                        b8("yt-remote-api-ready")
                    })), Q9.push(g.DC("yt-remote-cast2-availability-change", function() {
                        b8("yt-remote-receiver-availability-change")
                    })), Q9.push(g.DC("yt-remote-cast2-receiver-selected", function() {
                        R9(null);
                        b8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), Q9.push(g.DC("yt-remote-cast2-receiver-resumed", function() {
                        b8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), Q9.push(g.DC("yt-remote-cast2-session-change", Dsb)), Q9.push(g.DC("yt-remote-connection-change", function(f) {
                        f ? t9(O9(), "YouTube TV") : S9() || (t9(null, null), Yrb())
                    })), Q9.push(g.DC("yt-remote-cast2-session-failed", function() {
                        b8("yt-remote-connection-failed")
                    })), a = Esb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.uy("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), P9(" -- with channel params: " + g.Pi(a)), a ? (g.eA("yt-remote-session-app", a.app), g.eA("yt-remote-session-name", a.name)) : (g.gA("yt-remote-session-app"), g.gA("yt-remote-session-name")), g.Ka("yt.mdx.remote.channelParams_", a), c.start(), O9() || Fsb())
            }
        },
        Hsb = function() {
            var a = N9().Xg.$_gos();
            var b = T9();
            b && U9() && (Dob(a, b) || a.push(b));
            return Cob(a)
        },
        Jsb = function() {
            var a = Isb();
            !a && r9() && Xrb() && (a = {
                key: "cast-selector-receiver",
                name: Xrb()
            });
            return a
        },
        Isb = function() {
            var a = Hsb(),
                b = T9();
            b || (b = S9());
            return g.sb(a, function(c) {
                return b && V7(b, c.key) ? !0 : !1
            })
        },
        T9 = function() {
            var a = O9();
            if (!a) return null;
            var b = N9().Bk();
            return X7(b, a)
        },
        Dsb = function(a) {
            P9("remote.onCastSessionChange_: " + W7(a));
            if (a) {
                var b = T9();
                if (b && b.id == a.id) {
                    if (t9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) V9 && (V9.token = a), (b = U9()) && b.Yq(a)
                } else b && g$(), i$(a, 1)
            } else U9() && g$()
        },
        g$ = function() {
            s9() ? q9().stopSession() : p9("stopSession called before API ready.");
            var a = U9();
            a && (a.disconnect(1), Ksb(null))
        },
        Lsb = function() {
            var a = U9();
            return !!a && 3 != a.getProxyState()
        },
        P9 = function(a) {
            R8("remote", a)
        },
        N9 = function() {
            if (!Msb) {
                var a = g.La("yt.mdx.remote.screenService_");
                Msb = a ? new Bsb(a) : null
            }
            return Msb
        },
        O9 = function() {
            return g.La("yt.mdx.remote.currentScreenId_")
        },
        Nsb = function(a) {
            g.Ka("yt.mdx.remote.currentScreenId_", a)
        },
        Osb = function() {
            return g.La("yt.mdx.remote.connectData_")
        },
        R9 = function(a) {
            g.Ka("yt.mdx.remote.connectData_", a)
        },
        U9 = function() {
            return g.La("yt.mdx.remote.connection_")
        },
        Ksb = function(a) {
            var b = U9();
            R9(null);
            a || Nsb("");
            g.Ka("yt.mdx.remote.connection_", a);
            M9 && (g.Ub(M9, function(c) {
                c(a)
            }), M9.length = 0);
            b && !a ? b8("yt-remote-connection-change", !1) : !b && a && b8("yt-remote-connection-change", !0)
        },
        S9 = function() {
            var a = g.hA();
            if (!a) return null;
            var b = N9();
            if (!b) return null;
            b = b.Bk();
            return X7(b, a)
        },
        i$ = function(a, b) {
            O9();
            T9() && T9();
            if (j$) V9 = a;
            else {
                Nsb(a.id);
                var c = g.La("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new J9(L9, a, Esb(), c);
                a.connect(b, Osb());
                a.subscribe("beforeDisconnect", function(d) {
                    b8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    U9() && (U9(), Ksb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = T9();
                    d && "shortLived" == d.idType && (s9() ? q9().handleBrowserChannelAuthError() : p9("refreshLoungeToken called before API ready."))
                });
                Ksb(a)
            }
        },
        Fsb = function() {
            var a = S9();
            a ? (P9("Resume connection to: " + W7(a)), i$(a, 0)) : ($7(), Yrb(), P9("Skipping connecting because no session screen found."))
        },
        Csb = function() {
            var a = Esb();
            if (g.fd(a)) {
                a = Z7();
                var b = g.fA("yt-remote-session-name") || "",
                    c = g.fA("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.ry("SESSION_INDEX", "0"));
                (b = g.ry("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Ka("yt.mdx.remote.channelParams_", a)
            }
        },
        Esb = function() {
            return g.La("yt.mdx.remote.channelParams_") || {}
        },
        Rsb = function(a, b, c) {
            g.E.call(this);
            var d = this;
            this.module = a;
            this.I = b;
            this.Dc = c;
            this.events = new g.hI(this);
            this.ea = this.events.T(this.I, "onVolumeChange", function(e) {
                Psb(d, e)
            });
            this.C = !1;
            this.D = new g.iP(64);
            this.j = new g.Np(this.kY, 500, this);
            this.u = new g.Np(this.lY, 1E3, this);
            this.K = new e8(this.c$, 0, this);
            this.B = {};
            this.V = new g.Np(this.bZ, 1E3, this);
            this.J = new f8(this.seekTo, 1E3, this);
            g.J(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.A6);
            this.events.T(b, "captionschanged", this.U5);
            this.events.T(b, "captionssettingschanged", this.uY);
            this.events.T(b, "videoplayerreset", this.hH);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Dc.zT()
            });
            b.N("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                Qsb(d.module) || k$(d) || l$(d, 0)
            });
            a = this.Dc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.QW, this);
            a.subscribe("remotePlayerChange", this.dD, this);
            a.subscribe("remoteQueueChange", this.hH, this);
            a.subscribe("previousNextChange", this.NW, this);
            a.subscribe("nowAutoplaying", this.IW, this);
            a.subscribe("autoplayDismissed", this.lW, this);
            g.J(this, this.j);
            g.J(this, this.u);
            g.J(this, this.K);
            g.J(this, this.V);
            g.J(this, this.J);
            this.uY();
            this.hH();
            this.dD()
        },
        Psb = function(a, b) {
            if (k$(a)) {
                a.Dc.unsubscribe("remotePlayerChange", a.dD, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = B9(a.Dc);
                if (c !== d.volume || b !== d.muted) a.Dc.setVolume(c, b), a.V.start();
                a.Dc.subscribe("remotePlayerChange", a.dD, a)
            }
        },
        Ssb = function(a) {
            a.Bc(0);
            a.j.stop();
            a.xc(new g.iP(64))
        },
        Tsb = function(a, b) {
            if (k$(a) && !a.C) {
                var c = null;
                b && (c = {
                    style: a.I.getSubtitlesUserSettings()
                }, g.ld(c, b));
                a.Dc.tR(a.I.getVideoData(1).videoId, c);
                a.B = B9(a.Dc).trackData
            }
        },
        l$ = function(a, b) {
            var c = a.I.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.I.getVideoData(1);
            a.Dc.playVideo(c.videoId, b, d, e, c.playerParams, c.Aa, cob(c));
            a.xc(new g.iP(1))
        },
        Usb = function(a, b) {
            if (b) {
                var c = a.I.getOption("captions", "tracklist", {
                    YU: 1
                });
                c && c.length ? (a.I.setOption("captions", "track", b), a.C = !1) : (a.I.loadModule("captions"), a.C = !0)
            } else a.I.setOption("captions", "track", {})
        },
        k$ = function(a) {
            return B9(a.Dc).videoId === a.I.getVideoData(1).videoId
        },
        m$ = function() {
            g.V.call(this, {
                G: "div",
                S: "ytp-mdx-popup-dialog",
                Y: {
                    role: "dialog"
                },
                X: [{
                    G: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    X: [{
                        G: "div",
                        S: "ytp-mdx-popup-title",
                        xa: "You're signed out"
                    }, {
                        G: "div",
                        S: "ytp-mdx-popup-description",
                        xa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        G: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        X: [{
                            G: "button",
                            Ja: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            xa: "Cancel"
                        }, {
                            G: "button",
                            Ja: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            xa: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.UQ(this, 250);
            this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm");
            g.J(this, this.j);
            this.T(this.cancelButton, "click", this.u);
            this.T(this.confirmButton, "click", this.B)
        },
        n$ = function(a) {
            g.V.call(this, {
                G: "div",
                S: "ytp-remote",
                X: [{
                    G: "div",
                    S: "ytp-remote-display-status",
                    X: [{
                        G: "div",
                        S: "ytp-remote-display-status-icon",
                        X: [g.tDa()]
                    }, {
                        G: "div",
                        S: "ytp-remote-display-status-text",
                        xa: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.UQ(this, 250);
            g.J(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.zc(a.Db())
        },
        o$ = function(a, b) {
            g.yV.call(this, "Play on", 1, a, b);
            this.I = a;
            this.Et = {};
            this.T(a, "onMdxReceiversChange", this.C);
            this.T(a, "presentingplayerstatechange", this.C);
            this.C()
        },
        Vsb = function(a) {
            g.tT.call(this, a);
            this.gp = {
                key: Bob(),
                name: "This computer"
            };
            this.Fl = null;
            this.subscriptions = [];
            this.BO = this.Dc = null;
            this.Et = [this.gp];
            this.Xr = this.gp;
            this.Ze = new g.iP(64);
            this.vV = 0;
            this.Eh = -1;
            this.sD = !1;
            this.qD = this.Ez = null;
            if (!g.KK(this.player.W()) && !g.LK(this.player.W())) {
                a = this.player;
                var b = g.bS(a);
                b && (b = b.Sm()) && (b = new o$(a, b), g.J(this, b));
                b = new n$(a);
                g.J(this, b);
                g.rS(a, b.element, 4);
                this.Ez = new m$;
                g.J(this, this.Ez);
                g.rS(a, this.Ez.element, 4);
                this.sD = !!S9()
            }
        },
        p$ = function(a) {
            a.qD && (a.player.removeEventListener("presentingplayerstatechange",
                a.qD), a.qD = null)
        },
        Wsb = function(a, b, c) {
            a.Ze = c;
            a.player.oa("presentingplayerstatechange", new g.wO(c, b))
        },
        q$ = function(a, b) {
            if (b.key !== a.Xr.key)
                if (b.key === a.gp.key) g$();
                else if (Qsb(a) && Xsb(a), a.Xr = b, !a.player.W().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.LK(a.player.W())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.W().N("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.qT(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Aa,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = cob(d)) && (a.locationInfo = d);
                    d = a
                }
                P9("Connecting to: " + g.Pi(b));
                "cast-selector-receiver" == b.key ? (R9(d || null), b = d || null, s9() ? q9().setLaunchParams(b) : p9("setLaunchParams called before ready.")) : !d && Lsb() && O9() == b.key ? b8("yt-remote-connection-change", !0) : (g$(), R9(d || null), d = N9().Bk(), (b = X7(d, b.key)) && i$(b, 1))
            }
        },
        Qsb = function(a) {
            var b;
            (b = !a.player.W().N("mdx_enable_privacy_disclosure_ui")) || (b = ((b = g.ry("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser ? !0 : !(!g.ry("SESSION_INDEX") && !g.ry("LOGGED_IN"))) || a.sD || !a.Ez);
            return b ? !1 : g.aL(a.player.W()) || g.dL(a.player.W())
        },
        Xsb = function(a) {
            a.player.Db().jd() ? a.player.pauseVideo() : (a.qD = function(b) {
                !a.sD && g.yO(b, 8) && (a.player.pauseVideo(), p$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.qD));
            a.Ez && a.Ez.pd();
            U9() || (j$ = !0)
        };
    g.at.prototype.As = g.ba(0, function() {
        return g.Rh(this, 6)
    });
    var fqb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        G8 = {
            "'": "\\'"
        },
        vob = {
            Nia: "atp",
            zUa: "ska",
            PRa: "que",
            cKa: "mus",
            yUa: "sus",
            Cwa: "dsp",
            USa: "seq",
            ZIa: "mic",
            gpa: "dpa",
            Nja: "cds",
            SJa: "mlm",
            Uoa: "dsdtr",
            BKa: "ntb",
            N3a: "vsp",
            Xpa: "scn",
            dSa: "rpe"
        },
        wob = {
            I1: "u",
            CLASSIC: "cl",
            g1: "k",
            XZ: "i",
            IZ: "cr",
            o1: "m",
            UZ: "g",
            yS: "up"
        };
    T7.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var a8, Hob = "";
    Pob.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.uy("enable_client_streamz_web")) {
            a = g.w(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Xea(c.value), c = {
                serializedIncrementBatch: g.Zf(c.j())
            }, g.HA("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var c8, Xob = Rob("loadCastFramework") || Rob("loadCastApplicationFramework"),
        $ob = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.Xa(e8, g.E);
    g.k = e8.prototype;
    g.k.w_ = function(a) {
        this.C = arguments;
        this.j = !1;
        this.Jc ? this.B = g.Va() + this.Ji : this.Jc = g.Mf(this.D, this.Ji)
    };
    g.k.stop = function() {
        this.Jc && (g.Ja.clearTimeout(this.Jc), this.Jc = null);
        this.B = null;
        this.j = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.j && (this.j = !1, this.J.apply(null, this.C)))
    };
    g.k.ra = function() {
        this.stop();
        e8.If.ra.call(this)
    };
    g.k.x_ = function() {
        this.Jc && (g.Ja.clearTimeout(this.Jc), this.Jc = null);
        this.B ? (this.Jc = g.Mf(this.D, this.B - g.Va()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.J.apply(null, this.C))
    };
    g.x(f8, g.E);
    g.k = f8.prototype;
    g.k.nJ = function(a) {
        this.B = arguments;
        this.Jc || this.u ? this.j = !0 : bpb(this)
    };
    g.k.stop = function() {
        this.Jc && (g.Ja.clearTimeout(this.Jc), this.Jc = null, this.j = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.j || this.Jc || (this.j = !1, bpb(this))
    };
    g.k.ra = function() {
        g.E.prototype.ra.call(this);
        this.stop()
    };
    g8.prototype.stringify = function(a) {
        return g.Ja.JSON.stringify(a, void 0)
    };
    g8.prototype.parse = function(a) {
        return g.Ja.JSON.parse(a, void 0)
    };
    g.Xa(cpb, g.pb);
    g.Xa(dpb, g.pb);
    var epb = null;
    g.Xa(gpb, g.pb);
    g.Xa(hpb, g.pb);
    g.Xa(ipb, g.pb);
    jpb.prototype.info = function() {};
    jpb.prototype.warning = function() {};
    var qpb = {},
        m8 = {};
    g.k = k8.prototype;
    g.k.setTimeout = function(a) {
        this.Kb = a
    };
    g.k.A_ = function(a) {
        a = a.target;
        var b = this.Za;
        b && 3 == g.wj(a) ? b.nJ() : this.XQ(a)
    };
    g.k.XQ = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.wj(this.j),
                    c = this.j.u,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.eL || this.j && (this.u.u || g.yj(this.j) || g.zj(this.j)))) {
                    this.Ka || 4 != b || 7 == c || (8 == c || 0 >= d ? h8(3) : h8(2));
                    p8(this);
                    var e = this.j.getStatus();
                    this.Lb = e;
                    b: if (opb(this)) {
                        var f = g.zj(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.wj(this.j);
                        if (!this.u.B) {
                            if ("undefined" === typeof TextDecoder) {
                                n8(this);
                                o8(this);
                                var m = "";
                                break b
                            }
                            this.u.B = new g.Ja.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.splice(0, h);
                        this.u.j += a;
                        this.ma = 0;
                        m = this.u.j
                    } else m = g.yj(this.j);
                    if (this.B = 200 == e) {
                        if (this.uc && !this.Ua) {
                            b: {
                                if (this.j) {
                                    var n = g.Aj(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.Zb(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Ua = !0,
                            rpb(this, e);
                            else {
                                this.B = !1;
                                this.J = 3;
                                i8(12);
                                n8(this);
                                o8(this);
                                break a
                            }
                        }
                        this.Ba ? (spb(this, b, m), g.eL && this.B && 3 == b && (this.gb.Sa(this.qb, "tick", this.z_), this.qb.start())) : rpb(this, m);
                        4 == b && n8(this);
                        this.B && !this.Ka && (4 == b ? upb(this.D, this) : (this.B = !1, l8(this)))
                    } else g.Cfa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.J = 3, i8(12)) : (this.J = 0, i8(13)), n8(this), o8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.z_ = function() {
        if (this.j) {
            var a = g.wj(this.j),
                b = g.yj(this.j);
            this.ma < b.length && (p8(this), spb(this, a, b), this.B && 4 != a && l8(this))
        }
    };
    g.k.cancel = function() {
        this.Ka = !0;
        n8(this)
    };
    g.k.y_ = function() {
        this.ea = null;
        var a = Date.now();
        0 <= a - this.Ab ? (2 != this.Pa && (h8(3), i8(17)), n8(this), this.J = 2, o8(this)) : tpb(this, this.Ab - a)
    };
    g.k.getLastError = function() {
        return this.J
    };
    g.k.iM = function() {
        return this.j
    };
    Dpb.prototype.cancel = function() {
        this.B = Fpb(this);
        if (this.u) this.u.cancel(), this.u = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.w(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = Jpb.prototype;
    g.k.YQ = 8;
    g.k.rh = 1;
    g.k.connect = function(a, b, c, d) {
        i8(0);
        this.Lc = a;
        this.Ka = b || {};
        c && void 0 !== d && (this.Ka.OSID = c, this.Ka.OAID = d);
        this.Ua = this.od;
        this.Ma = zpb(this, null, this.Lc);
        t8(this)
    };
    g.k.disconnect = function() {
        Lpb(this);
        if (3 == this.rh) {
            var a = this.fb++,
                b = this.Ma.clone();
            g.cl(b, "SID", this.C);
            g.cl(b, "RID", a);
            g.cl(b, "TYPE", "terminate");
            w8(this, b);
            a = new k8(this, this.C, a);
            a.Pa = 2;
            a.K = P7(b.clone());
            b = !1;
            if (g.Ja.navigator && g.Ja.navigator.sendBeacon) try {
                b = g.Ja.navigator.sendBeacon(a.K.toString(), "")
            } catch (c) {}!b && g.Ja.Image && ((new Image).src = a.K, b = !0);
            b || (a.j = npb(a.D, null), a.j.send(a.K));
            a.Aa = Date.now();
            l8(a)
        }
        Rpb(this)
    };
    g.k.Yg = function() {
        return 0 == this.rh
    };
    g.k.getState = function() {
        return this.rh
    };
    g.k.aR = function(a) {
        if (this.J)
            if (this.J = null, 1 == this.rh) {
                if (!a) {
                    this.fb = Math.floor(1E5 * Math.random());
                    a = this.fb++;
                    var b = new k8(this, "", a),
                        c = this.ea;
                    this.Ab && (c ? (c = g.jd(c), g.ld(c, this.Ab)) : c = this.Ab);
                    null !== this.K || this.ub || (b.Ma = c, c = null);
                    var d;
                    if (this.Kb) a: {
                        for (var e = d = 0; e < this.B.length; e++) {
                            b: {
                                var f = this.B[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.B.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = Opb(this, b, d);
                    e = this.Ma.clone();
                    g.cl(e, "RID", a);
                    g.cl(e, "CVER", 22);
                    this.Ba && g.cl(e, "X-HTTP-Session-Id", this.Ba);
                    w8(this, e);
                    c && (this.ub ? d = "headers=" + g.Ee(g.Hga(c)) + "&" + d : this.K && g.gl(e, this.K, c));
                    ypb(this.u, b);
                    this.cg && g.cl(e, "TYPE", "init");
                    this.Kb ? (g.cl(e, "$req", d), g.cl(e, "SID", "null"), b.uc = !0, mpb(b, e, null)) : mpb(b, e, d);
                    this.rh = 2
                }
            } else 3 == this.rh && (a ? Ppb(this, a) : 0 == this.B.length || Epb(this.u) || Ppb(this))
    };
    g.k.ZQ = function() {
        this.V = null;
        Qpb(this);
        if (this.Rc && !(this.qb || null == this.j || 0 >= this.yd)) {
            var a = 2 * this.yd;
            this.Da = j8((0, g.Ta)(this.T5, this), a)
        }
    };
    g.k.T5 = function() {
        this.Da && (this.Da = null, this.Ua = !1, this.qb = !0, i8(10), r8(this), Qpb(this))
    };
    g.k.PN = function(a) {
        this.j == a && this.Rc && !this.qb && (Kpb(this), this.qb = !0, i8(11))
    };
    g.k.B_ = function() {
        null != this.ma && (this.ma = null, r8(this), wpb(this), i8(19))
    };
    g.k.J9 = function(a) {
        a ? i8(2) : i8(1)
    };
    g.k.isActive = function() {
        return !!this.D && this.D.isActive(this)
    };
    g.k = Tpb.prototype;
    g.k.eR = function() {};
    g.k.dR = function() {};
    g.k.cR = function() {};
    g.k.bR = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.C_ = function() {};
    g.Xa(y8, g.Cd);
    y8.prototype.open = function() {
        this.j.D = this.B;
        this.J && (this.j.Pa = !0);
        this.j.connect(this.D, this.u || void 0)
    };
    y8.prototype.close = function() {
        this.j.disconnect()
    };
    y8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.C && (c = {}, c.__data__ = g.Pi(a), a = c);
        b.B.push(new Cpb(b.Zf++, a));
        3 == b.rh && t8(b)
    };
    y8.prototype.ra = function() {
        this.j.D = null;
        delete this.B;
        this.j.disconnect();
        delete this.j;
        y8.If.ra.call(this)
    };
    g.Xa(Vpb, cpb);
    g.Xa(Wpb, dpb);
    g.Xa(x8, Tpb);
    x8.prototype.eR = function() {
        this.j.dispatchEvent("m")
    };
    x8.prototype.dR = function(a) {
        this.j.dispatchEvent(new Vpb(a))
    };
    x8.prototype.cR = function(a) {
        this.j.dispatchEvent(new Wpb(a))
    };
    x8.prototype.bR = function() {
        this.j.dispatchEvent("n")
    };
    var A8 = new g.Cd;
    g.x(Zpb, g.pb);
    g.k = C8.prototype;
    g.k.ju = null;
    g.k.Jp = !1;
    g.k.Yw = null;
    g.k.pJ = null;
    g.k.Ww = null;
    g.k.Xw = null;
    g.k.Dr = null;
    g.k.Fr = null;
    g.k.mu = null;
    g.k.Ti = null;
    g.k.GE = 0;
    g.k.Kn = null;
    g.k.FE = null;
    g.k.Er = null;
    g.k.FA = -1;
    g.k.TX = !0;
    g.k.fu = !1;
    g.k.oJ = 0;
    g.k.EE = null;
    var dqb = {},
        cqb = {};
    g.k = C8.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.E_ = function(a) {
        a = a.target;
        var b = this.EE;
        b && 3 == g.wj(a) ? b.nJ() : this.fR(a)
    };
    g.k.fR = function(a) {
        try {
            if (a == this.Ti) a: {
                var b = g.wj(this.Ti),
                    c = this.Ti.u,
                    d = this.Ti.getStatus();
                if (g.Ve && !g.Lc(10) || g.Nc && !g.Kc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.yj(this.Ti)) break a;this.fu || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.xn(3) : this.j.xn(2));iqb(this);
                var e = this.Ti.getStatus();this.FA = e;
                var f = g.yj(this.Ti);
                if (this.Jp = 200 == e) {
                    4 == b && E8(this);
                    if (this.Ba) {
                        for (a = !0; !this.fu && this.GE < f.length;) {
                            var h = eqb(this, f);
                            if (h == cqb) {
                                4 == b && (this.Er = 4, B8(15), a = !1);
                                break
                            } else if (h == dqb) {
                                this.Er = 4;
                                B8(16);
                                a = !1;
                                break
                            } else jqb(this, h)
                        }
                        4 == b && 0 == f.length && (this.Er = 1, B8(17), a = !1);
                        this.Jp = this.Jp && a;
                        a || (E8(this), F8(this))
                    } else jqb(this, f);
                    this.Jp && !this.fu && (4 == b ? this.j.HE(this) : (this.Jp = !1, D8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Er = 3, B8(13)) : (this.Er = 0, B8(14)),
                E8(this),
                F8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.e8 = function(a) {
        z8((0, g.Ta)(this.d8, this, a), 0)
    };
    g.k.d8 = function(a) {
        this.fu || (iqb(this), jqb(this, a), D8(this))
    };
    g.k.VW = function(a) {
        z8((0, g.Ta)(this.c8, this, a), 0)
    };
    g.k.c8 = function(a) {
        this.fu || (E8(this), this.Jp = a, this.j.HE(this), this.j.xn(4))
    };
    g.k.cancel = function() {
        this.fu = !0;
        E8(this)
    };
    g.k.D_ = function() {
        this.Yw = null;
        var a = Date.now();
        0 <= a - this.pJ ? (2 != this.Xw && this.j.xn(3), E8(this), this.Er = 2, B8(18), F8(this)) : hqb(this, this.pJ - a)
    };
    g.k.getLastError = function() {
        return this.Er
    };
    g.k = mqb.prototype;
    g.k.rJ = null;
    g.k.xj = null;
    g.k.HH = !1;
    g.k.mY = null;
    g.k.DF = null;
    g.k.cN = null;
    g.k.sJ = null;
    g.k.Dl = null;
    g.k.Kp = -1;
    g.k.GA = null;
    g.k.cB = null;
    g.k.connect = function(a) {
        this.sJ = a;
        a = I8(this.j, null, this.sJ);
        B8(3);
        this.mY = Date.now();
        var b = this.j.ea;
        null != b ? (this.GA = b[0], (this.cB = b[1]) ? (this.Dl = 1, nqb(this)) : (this.Dl = 2, oqb(this))) : (Q7(a, "MODE", "init"), this.xj = new C8(this), this.xj.ju = this.rJ, bqb(this.xj, a, !1, null, !0), this.Dl = 0)
    };
    g.k.A2 = function(a) {
        if (a) this.Dl = 2, oqb(this);
        else {
            B8(4);
            var b = this.j;
            b.Rn = b.Ur.Kp;
            M8(b, 9)
        }
        a && this.xn(2)
    };
    g.k.qJ = function(a) {
        return this.j.qJ(a)
    };
    g.k.abort = function() {
        this.xj && (this.xj.cancel(), this.xj = null);
        this.Kp = -1
    };
    g.k.Yg = function() {
        return !1
    };
    g.k.gR = function(a, b) {
        this.Kp = a.FA;
        if (0 == this.Dl)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Rn = this.Kp;
                    M8(a, 2);
                    return
                }
                this.GA = c[0];
                this.cB = c[1]
            } else a = this.j, a.Rn = this.Kp, M8(a, 2);
        else if (2 == this.Dl)
            if (this.HH) B8(7), this.cN = Date.now();
            else if ("11111" == b) {
            if (B8(6), this.HH = !0, this.DF = Date.now(), a = this.DF - this.mY, !g.Ve || g.Lc(10) || 500 > a) this.Kp = 200, this.xj.cancel(), B8(12), J8(this.j, this, !0)
        } else B8(8), this.DF = this.cN = Date.now(), this.HH = !1
    };
    g.k.HE = function() {
        this.Kp = this.xj.FA;
        if (this.xj.Jp) 0 == this.Dl ? this.cB ? (this.Dl = 1, nqb(this)) : (this.Dl = 2, oqb(this)) : 2 == this.Dl && ((!g.Ve || g.Lc(10) ? !this.HH : 200 > this.cN - this.DF) ? (B8(11), J8(this.j, this, !1)) : (B8(12), J8(this.j, this, !0)));
        else {
            0 == this.Dl ? B8(9) : 2 == this.Dl && B8(10);
            var a = this.j;
            this.xj.getLastError();
            a.Rn = this.Kp;
            M8(a, 2)
        }
    };
    g.k.HA = function() {
        return this.j.HA()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.xn = function(a) {
        this.j.xn(a)
    };
    g.k = pqb.prototype;
    g.k.Qn = null;
    g.k.IA = null;
    g.k.Gj = null;
    g.k.Jg = null;
    g.k.tJ = null;
    g.k.IE = null;
    g.k.hR = null;
    g.k.JE = null;
    g.k.JA = 0;
    g.k.G_ = 0;
    g.k.xi = null;
    g.k.Gr = null;
    g.k.Lp = null;
    g.k.ou = null;
    g.k.Ur = null;
    g.k.wI = null;
    g.k.bx = -1;
    g.k.iR = -1;
    g.k.Rn = -1;
    g.k.ax = 0;
    g.k.Zw = 0;
    g.k.nu = 8;
    g.Xa(rqb, g.pb);
    g.Xa(sqb, g.pb);
    g.k = pqb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        B8(0);
        this.tJ = b;
        this.IA = c || {};
        d && void 0 !== e && (this.IA.OSID = d, this.IA.OAID = e);
        this.V ? (z8((0, g.Ta)(this.pT, this, a), 100), uqb(this)) : this.pT(a)
    };
    g.k.disconnect = function() {
        vqb(this);
        if (3 == this.j) {
            var a = this.JA++,
                b = this.IE.clone();
            g.cl(b, "SID", this.C);
            g.cl(b, "RID", a);
            g.cl(b, "TYPE", "terminate");
            L8(this, b);
            a = new C8(this, this.C, a);
            a.Xw = 2;
            a.Dr = P7(b.clone());
            (new Image).src = a.Dr.toString();
            a.Ww = Date.now();
            D8(a)
        }
        Fqb(this)
    };
    g.k.pT = function(a) {
        this.Ur = new mqb(this);
        this.Ur.rJ = this.Qn;
        this.Ur.u = this.D;
        this.Ur.connect(a)
    };
    g.k.Yg = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.kR = function(a) {
        this.Gr = null;
        Aqb(this, a)
    };
    g.k.jR = function() {
        this.Lp = null;
        this.Jg = new C8(this, this.C, "rpc", this.K);
        this.Jg.ju = this.Qn;
        this.Jg.oJ = 0;
        var a = this.hR.clone();
        g.cl(a, "RID", "rpc");
        g.cl(a, "SID", this.C);
        g.cl(a, "CI", this.wI ? "0" : "1");
        g.cl(a, "AID", this.bx);
        L8(this, a);
        if (!g.Ve || g.Lc(10)) g.cl(a, "TYPE", "xmlhttp"), bqb(this.Jg, a, !0, this.JE, !1);
        else {
            g.cl(a, "TYPE", "html");
            var b = this.Jg,
                c = !!this.JE;
            b.Xw = 3;
            b.Dr = P7(a.clone());
            gqb(b, c)
        }
    };
    g.k.gR = function(a, b) {
        if (0 != this.j && (this.Jg == a || this.Gj == a))
            if (this.Rn = a.FA, this.Gj == a && 3 == this.j)
                if (7 < this.nu) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Lp) {
                                if (this.Jg)
                                    if (this.Jg.Ww + 3E3 < this.Gj.Ww) K8(this), this.Jg.cancel(), this.Jg = null;
                                    else break a;
                                Dqb(this);
                                B8(19)
                            }
                        }
                    else this.iR = a[1], 0 < this.iR - this.bx && 37500 > a[2] && this.wI && 0 == this.Zw && !this.ou && (this.ou = z8((0, g.Ta)(this.H_, this), 6E3));
                    else M8(this, 11)
                } else null != b && M8(this, 11);
        else if (this.Jg ==
            a && K8(this), !g.Zb(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.bx = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.JE = c[2], c = c[3], null != c ? this.nu = c : this.nu = 6, this.j = 3, this.xi && this.xi.nR(), this.hR = I8(this, this.HA() ? this.JE : null, this.tJ), Bqb(this)) : "stop" == c[0] && M8(this, 7) : 3 == this.j && ("stop" == c[0] ? M8(this, 7) : "noop" != c[0] && this.xi && this.xi.mR(c), this.Zw = 0)
    };
    g.k.H_ = function() {
        null != this.ou && (this.ou = null, this.Jg.cancel(), this.Jg = null, Dqb(this), B8(20))
    };
    g.k.HE = function(a) {
        if (this.Jg == a) {
            K8(this);
            this.Jg = null;
            var b = 2
        } else if (this.Gj == a) this.Gj = null, b = 1;
        else return;
        this.Rn = a.FA;
        if (0 != this.j)
            if (a.Jp)
                if (1 == b) {
                    b = Date.now() - a.Ww;
                    var c = A8;
                    c.dispatchEvent(new rqb(c, a.mu ? a.mu.length : 0, b, this.ax));
                    tqb(this);
                    this.B.length = 0
                } else Bqb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Rn)) {
                if (d = 1 == b) this.Gj || this.Gr || 1 == this.j || 2 <= this.ax ? d = !1 : (this.Gr = z8((0, g.Ta)(this.kR, this, a), Cqb(this, this.ax)), this.ax++, d = !0);
                d = !(d || 2 == b && Dqb(this))
            }
            if (d) switch (c) {
                case 1:
                    M8(this,
                        5);
                    break;
                case 4:
                    M8(this, 10);
                    break;
                case 3:
                    M8(this, 6);
                    break;
                case 7:
                    M8(this, 12);
                    break;
                default:
                    M8(this, 2)
            }
        }
    };
    g.k.F_ = function(a) {
        if (!g.ub(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.I9 = function(a) {
        a ? B8(2) : (B8(1), Eqb(this, 8))
    };
    g.k.qJ = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.tj;
        a.J = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.xi && this.xi.isActive(this)
    };
    g.k.xn = function(a) {
        var b = A8;
        b.dispatchEvent(new sqb(b, a))
    };
    g.k.HA = function() {
        return !(!g.Ve || g.Lc(10))
    };
    g.k = Gqb.prototype;
    g.k.nR = function() {};
    g.k.mR = function() {};
    g.k.lR = function() {};
    g.k.uJ = function() {};
    g.k.oR = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = Hqb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.j = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.ub(this.j, a) || g.ub(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.J8a)(b, a);
        0 <= c ? (g.yb(b, c), b = !0) : b = !1;
        return b || g.zb(this.u, a)
    };
    g.k.Ul = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.x(Iqb, g.pb);
    g.x(Jqb, g.pb);
    g.Xa(N8, g.E);
    g.k = N8.prototype;
    g.k.W7 = function() {
        this.Ji = Math.min(3E5, 2 * this.Ji);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.Ji + 15E3 * Math.random();
        g.Op(this.j, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Ji = 5E3
    };
    g.Xa(Lqb, Gqb);
    g.k = Lqb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.Jh = function(a) {
        return this.B.Jh(a)
    };
    g.k.oa = function(a, b) {
        return this.B.oa.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.fb(this.B), this.disconnect(), g.fb(this.u), this.u = null, this.qa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.ea = "";
            this.u.stop();
            this.J = a || null;
            this.D = b || 0;
            a = this.Aa + "/test";
            b = this.Aa + "/bind";
            var d = new pqb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Pa),
                e = this.j;
            e && (e.xi = null);
            d.xi = this;
            this.j = d;
            Mqb(this);
            if (this.j) {
                d = g.ry("ID_TOKEN");
                var f = this.j.Qn || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Qn = f
            }
            e ? (3 != e.getState() && 0 == xqb(e) || e.getState(), this.j.connect(a, b, this.K, e.C, e.bx)) : c ? this.j.connect(a,
                b, this.K, c.sessionId, c.arrayId) : this.j.connect(a, b, this.K)
        }
    };
    g.k.disconnect = function(a) {
        this.V = a || 0;
        this.u.stop();
        Mqb(this);
        this.j && (3 == this.j.getState() && Aqb(this.j), this.j.disconnect());
        this.V = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.ld(a, b);
        this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.Qy() && (Mqb(this), wqb(this.j, a))
    };
    g.k.nR = function() {
        this.u.reset();
        this.J = null;
        this.D = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) wqb(this.j, a[b])
        }
        this.oa("handlerOpened");
        job(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.lR = function(a) {
        var b = 2 == a && 401 == this.j.Rn;
        4 == a || b || this.u.start();
        this.oa("handlerError", a, b);
        pob(this.Ba, "BROWSER_CHANNEL")
    };
    g.k.uJ = function(a, b) {
        if (!this.u.isActive()) this.oa("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.C.push(e)
            }
        lob(this.Da, "BROWSER_CHANNEL");
        a && this.Za.j.xJ("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.fb.j.xJ("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.oR = function() {
        var a = {
            v: 2
        };
        this.ea && (a.gsessionid = this.ea);
        0 != this.D && (a.ui = "" + this.D);
        0 != this.V && (a.ui = "" + this.V);
        this.J && g.ld(a, this.J);
        return a
    };
    g.k.mR = function(a) {
        "S" == a[0] ? this.ea = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.oa("handlerMessage", new Kqb(a[0], a[1]));
        nob(this.Ka, "BROWSER_CHANNEL")
    };
    g.k.Qy = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.Yq = function(a) {
        (this.K.loungeIdToken = a) || this.u.stop();
        if (this.Ua && this.j) {
            var b = this.j.Qn || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Qn = b
        }
    };
    g.k.As = function() {
        return this.K.id
    };
    g.k.Js = function() {
        return this.u.isActive() ? this.u.u - Date.now() : NaN
    };
    g.k.Zv = function() {
        var a = this.u;
        g.Pp(a.j);
        a.start()
    };
    g.k.f9 = function() {
        this.u.isActive();
        0 == xqb(this.j) && this.connect(this.J, this.D)
    };
    O8.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    O8.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    O8.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    g.x(Oqb, g.Cd);
    g.k = Oqb.prototype;
    g.k.connect = function(a, b, c) {
        this.Bd.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Bd.disconnect(a)
    };
    g.k.Zv = function() {
        this.Bd.Zv()
    };
    g.k.As = function() {
        return this.Bd.As()
    };
    g.k.Js = function() {
        return this.Bd.Js()
    };
    g.k.Qy = function() {
        return this.Bd.Qy()
    };
    g.k.K_ = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Bd,
            b = this.j;
        g.eA("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.wI,
            sessionId: a.j.C,
            arrayId: a.j.bx
        });
        g.eA("yt-remote-session-screen-id", b);
        a = Y7();
        b = Z7();
        g.ub(a, b) || a.push(b);
        Gob(a);
        Iob()
    };
    g.k.I_ = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.J_ = function(a) {
        this.dispatchEvent(new Iqb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new Jqb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Bd.sendMessage(a, b)
    };
    g.k.Yq = function(a) {
        this.Bd.Yq(a)
    };
    g.k.dispose = function() {
        this.Bd.dispose()
    };
    g.k = Pqb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.J && (this.B.stop(), this.V = a, this.K = b, Rqb(this), (a = g.ry("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.c5 && (this.u.mdxVersion = "" + this.j.c5), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities), this.j.Q2 && (this.u.cst = this.j.Q2),
            this.j.authuser && (this.u.authuser = this.j.authuser), this.j.pageId && (this.u.pageId = this.j.pageId)), 0 !== this.K ? this.u.ui = "" + this.K : delete this.u.ui, Object.assign(this.u, this.V), this.channel = new y8(this.pathPrefix, {
            x4: "gsessionid",
            g5: this.C,
            h5: this.u
        }), this.channel.open(), this.J = 2, Qqb(this))
    };
    g.k.disconnect = function(a) {
        this.ea = void 0 === a ? 0 : a;
        this.B.stop();
        Rqb(this);
        this.channel && (0 !== this.ea ? this.u.ui = "" + this.ea : delete this.u.ui, this.channel.close());
        this.ea = 0
    };
    g.k.Js = function() {
        return this.B.isActive() ? this.B.u - Date.now() : NaN
    };
    g.k.Zv = function() {
        var a = this.B;
        g.Pp(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (Rqb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Yq = function(a) {
        a || this.B.stop();
        a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"]
    };
    g.k.As = function() {
        return this.j ? this.j.id : ""
    };
    g.k.oa = function(a) {
        return this.D.oa.apply(this.D, [a].concat(g.la(g.Ca.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.D.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.D.unsubscribe(a, b, c)
    };
    g.k.Jh = function(a) {
        return this.D.Jh(a)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.fb(this.D), this.disconnect(), g.fb(this.B), this.Aa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.x(Sqb, g.Cd);
    g.k = Sqb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Zv = function() {
        this.j.Zv()
    };
    g.k.As = function() {
        return this.j.As()
    };
    g.k.Js = function() {
        return this.j.Js()
    };
    g.k.Qy = function() {
        return 3 === this.j.J
    };
    g.k.N_ = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.L_ = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.M_ = function(a) {
        this.dispatchEvent(new Iqb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new Jqb(401 === this.j.Ng ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Yq = function(a) {
        this.j.Yq(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var $qb = Date.now(),
        Q8 = null,
        U8 = Array(50),
        T8 = -1,
        V8 = !1;
    g.Xa(W8, g.uE);
    W8.prototype.Bk = function() {
        return this.screens
    };
    W8.prototype.contains = function(a) {
        return !!Dob(this.screens, a)
    };
    W8.prototype.get = function(a) {
        return a ? X7(this.screens, a) : null
    };
    W8.prototype.info = function(a) {
        R8(this.J, a)
    };
    g.x(drb, g.uE);
    g.k = drb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.Jc) && this.jX()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.Jc) || (g.Sy(this.Jc), this.Jc = NaN)
    };
    g.k.ra = function() {
        this.stop();
        g.uE.prototype.ra.call(this)
    };
    g.k.jX = function() {
        this.Jc = NaN;
        this.j = g.Vy(P8(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.K
            },
            timeout: 5E3,
            onSuccess: (0, g.Ta)(this.P_, this),
            onError: (0, g.Ta)(this.O_, this),
            onTimeout: (0, g.Ta)(this.Q_, this)
        })
    };
    g.k.P_ = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.J;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.oa("pairingComplete", new U7(a), b)
    };
    g.k.O_ = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.u >= Ysb.length ? this.oa("pairingFailed", Error("DIAL polling timed out")) : (a = Ysb[this.u], this.Jc = g.Qy((0, g.Ta)(this.jX, this), a), this.u++) : this.oa("pairingFailed", Error("Server error " + a.status))
    };
    g.k.Q_ = function() {
        this.j = null;
        this.oa("pairingFailed", Error("Server not responding"))
    };
    var Ysb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Xa(Y8, W8);
    g.k = Y8.prototype;
    g.k.start = function() {
        X8(this) && this.oa("screenChange");
        !g.fA("yt-remote-lounge-token-expiration") && erb(this);
        g.Sy(this.j);
        this.j = g.Qy((0, g.Ta)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        X8(this);
        arb(this, a);
        Z8(this, !1);
        this.oa("screenChange");
        b(a);
        a.token || erb(this)
    };
    g.k.remove = function(a, b) {
        var c = X8(this);
        crb(this, a) && (Z8(this, !1), c = !0);
        b(a);
        c && this.oa("screenChange")
    };
    g.k.vI = function(a, b, c, d) {
        var e = X8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, Z8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.oa("screenChange")
    };
    g.k.ra = function() {
        g.Sy(this.j);
        Y8.If.ra.call(this)
    };
    g.k.W3 = function(a) {
        X8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        Z8(this, !b);
        b && R8(this.J, "Missed " + b + " lounge tokens.")
    };
    g.k.V3 = function(a) {
        R8(this.J, "Requesting lounge tokens failed: " + a)
    };
    g.x(grb, g.uE);
    g.k = grb.prototype;
    g.k.start = function() {
        var a = parseInt(g.fA("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Va() - 144E5 < a ? 0 : a) ? $8(this): (this.C = g.Va() + 3E5, g.eA("yt-remote-fast-check-period", this.C), this.ZO())
    };
    g.k.isEmpty = function() {
        return g.fd(this.j)
    };
    g.k.update = function() {
        frb("Updating availability on schedule.");
        var a = this.J(),
            b = g.Vc(this.j, function(c, d) {
                return c && !!X7(a, d)
            }, this);
        jrb(this, b)
    };
    g.k.ra = function() {
        g.Sy(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.uE.prototype.ra.call(this)
    };
    g.k.ZO = function() {
        g.Sy(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = krb(this);
        if (eob(a)) {
            var b = P8(this.D, "/pairing/get_screen_availability");
            this.u = Nqb(this.D, b, {
                lounge_token: g.ad(a).join(",")
            }, (0, g.Ta)(this.C7, this, a), (0, g.Ta)(this.B7, this))
        } else jrb(this, {}), $8(this)
    };
    g.k.C7 = function(a, b) {
        this.u = null;
        var c = g.ad(krb(this));
        if (g.Sb(c, g.ad(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            jrb(this, c);
            $8(this)
        } else this.Wf("Changing Screen set during request."), this.ZO()
    };
    g.k.B7 = function(a) {
        this.Wf("Screen availability failed: " + a);
        this.u = null;
        $8(this)
    };
    g.k.Wf = function(a) {
        R8("OnlineScreenService", a)
    };
    g.Xa(a9, W8);
    g.k = a9.prototype;
    g.k.start = function() {
        this.u.start();
        this.j.start();
        this.screens.length && (this.oa("screenChange"), this.j.isEmpty() || this.oa("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.j.update()
    };
    g.k.vI = function(a, b, c, d) {
        this.u.contains(a) ? this.u.vI(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, R8(this.J, a), d(Error(a)))
    };
    g.k.Bk = function(a) {
        return a ? this.screens : g.Cb(this.screens, g.bo(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.pR = function() {
        return g.bo(this.Bk(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.qR = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new drb(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.fb(l);
            e(b9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.fb(l);
            f(m)
        });
        l.start();
        return (0, g.Ta)(l.stop, l)
    };
    g.k.R_ = function(a, b, c, d) {
        g.Vy(P8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Ta)(function(e, f) {
                e = new U7(f.screen || {});
                if (!e.name || orb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); orb(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(b9(this, e))
            }, this),
            onError: (0, g.Ta)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Ta)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.ra = function() {
        g.fb(this.u);
        g.fb(this.j);
        a9.If.ra.call(this)
    };
    g.k.g4 = function() {
        qrb(this);
        this.oa("screenChange");
        this.j.update()
    };
    a9.prototype.dispose = a9.prototype.dispose;
    g.Xa(c9, g.uE);
    g.k = c9.prototype;
    g.k.mj = function(a) {
        this.isDisposed() || (a && (e9(this, "" + a), this.oa("sessionFailed")), this.j = null, this.oa("sessionScreen", null))
    };
    g.k.info = function(a) {
        R8(this.Ba, a)
    };
    g.k.rR = function() {
        return null
    };
    g.k.oP = function(a) {
        var b = this.u;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Ta)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Ta)(function() {
            e9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.ra = function() {
        this.oP("");
        c9.If.ra.call(this)
    };
    g.x(f9, c9);
    g.k = f9.prototype;
    g.k.nP = function(a) {
        if (this.B) {
            if (this.B == a) return;
            e9(this, "Overriding cast session with new session object");
            Crb(this);
            this.Aa = !1;
            this.ea = "unknown";
            this.B.removeUpdateListener(this.qa);
            this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da)
        }
        this.B = a;
        this.B.addUpdateListener(this.qa);
        this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da);
        xrb(this, "getMdxSessionStatus")
    };
    g.k.bz = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Pi(a))
    };
    g.k.stop = function() {
        this.B ? this.B.stop((0, g.Ta)(function() {
            this.mj()
        }, this), (0, g.Ta)(function() {
            this.mj(Error("Failed to stop receiver app."))
        }, this)) : this.mj(Error("Stopping cast device without session."))
    };
    g.k.oP = function() {};
    g.k.ra = function() {
        this.info("disposeInternal");
        Crb(this);
        this.B && (this.B.removeUpdateListener(this.qa), this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da));
        this.B = null;
        c9.prototype.ra.call(this)
    };
    g.k.o8 = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = R7(b), g.Oa(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Pi(b)), a) {
                    case "mdxSessionStatus":
                        urb(this, b);
                        break;
                    case "loungeToken":
                        yrb(this, b);
                        break;
                    default:
                        e9(this, "Unknown youtube message: " + a)
                } else e9(this, "Unable to parse message.");
                else e9(this, "No data in message.")
    };
    g.k.rU = function(a, b, c, d) {
        g.Sy(this.V);
        this.V = 0;
        nrb(this.C, this.u.label, a, this.u.friendlyName, (0, g.Ta)(function(e) {
            e ? b(e) : 0 <= d ? (e9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.V = g.Qy((0, g.Ta)(this.rU, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.rR = function() {
        return this.B
    };
    g.k.S_ = function(a) {
        this.isDisposed() || a || (e9(this, "Cast session died."), this.mj())
    };
    g.x(g9, c9);
    g.k = g9.prototype;
    g.k.nP = function(a) {
        this.B = a;
        this.B.addUpdateListener(this.Ka)
    };
    g.k.bz = function(a) {
        this.Ma = a;
        this.ma()
    };
    g.k.stop = function() {
        Krb(this);
        this.B ? this.B.stop((0, g.Ta)(this.mj, this, null), (0, g.Ta)(this.mj, this, "Failed to stop DIAL device.")) : this.mj()
    };
    g.k.ra = function() {
        Krb(this);
        this.B && this.B.removeUpdateListener(this.Ka);
        this.B = null;
        c9.prototype.ra.call(this)
    };
    g.k.T_ = function(a) {
        this.isDisposed() || a || (e9(this, "DIAL session died."), this.D(), this.D = function() {}, this.mj())
    };
    g.x(j9, c9);
    j9.prototype.stop = function() {
        this.mj()
    };
    j9.prototype.nP = function() {};
    j9.prototype.bz = function() {
        g.Sy(this.B);
        this.B = NaN;
        var a = X7(this.C.Bk(), this.u.label);
        a ? d9(this, a) : this.mj(Error("No such screen"))
    };
    j9.prototype.ra = function() {
        g.Sy(this.B);
        this.B = NaN;
        c9.prototype.ra.call(this)
    };
    g.x(k9, g.uE);
    g.k = k9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.V, [chrome.cast.Capability.AUDIO_OUT]);
        this.ea || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.J ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Ta)(this.m7, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Ta)(this.RW, this), e, d, a);
        c.customDialLaunchCallback = (0, g.Ta)(this.k6, this);
        chrome.cast.initialize(c, (0, g.Ta)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), Xqb(), this.u.subscribe("onlineScreenChange", (0, g.Ta)(this.sR, this)), this.B = Nrb(this), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ta)(function(f) {
                this.Wf("Failed to set initial custom receivers: " + g.Pi(f))
            }, this)), this.oa("yt-remote-cast2-availability-change", m9(this)), b(!0))
        }, this), (0, g.Ta)(function(f) {
            this.Wf("Failed to initialize API: " + g.Pi(f));
            b(!1)
        }, this))
    };
    g.k.k9 = function(a, b) {
        l9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) l9("Unsetting old screen status: " + this.j.u.friendlyName), n9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = X7(this.u.Bk(), a);
                if (!c) {
                    l9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    l9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = Lrb(this, c);
                a || (l9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ta)(function(d) {
                    this.Wf("Failed to set initial custom receivers: " + g.Pi(d))
                }, this)));
                l9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                n9(this, new j9(this.u, a), !0)
            }
            this.j.oP(b)
        } else l9("setConnectedScreenStatus: no screen.")
    };
    g.k.m9 = function(a) {
        this.isDisposed() ? this.Wf("Setting connection data on disposed cast v2") : this.j ? this.j.bz(a) : this.Wf("Setting connection data without a session")
    };
    g.k.V_ = function() {
        this.isDisposed() ? this.Wf("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), n9(this, null)) : l9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Ta)(this.RW, this), (0, g.Ta)(this.F7, this))
    };
    g.k.ra = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.Ta)(this.sR, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = Uqb,
            b = g.La("yt.mdx.remote.debug.handlers_");
        g.zb(b || [], a);
        g.fb(this.j);
        g.uE.prototype.ra.call(this)
    };
    g.k.Wf = function(a) {
        R8("Controller", a)
    };
    g.k.TW = function(a, b) {
        this.j == a && (b || n9(this, null), this.oa("yt-remote-cast2-session-change", b))
    };
    g.k.j7 = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), l9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.u.label != a.label) l9("onReceiverAction_: Stopping active receiver: " + this.j.u.friendlyName), this.j.stop();
                        else {
                            l9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.oa("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            n9(this,
                                new j9(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            n9(this, new g9(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            n9(this, new f9(this.u, a, this.config_));
                            break;
                        default:
                            this.Wf("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.u.label == a.label ? this.j.stop() : this.Wf("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Wf("onReceiverAction_ called without receiver.")
    };
    g.k.k6 = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Wf("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.u : null;
        if (!c || c.label != b.label) return this.Wf("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return l9("Reselecting dial screen."),
                this.oa("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Wf('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            n9(this, new g9(this.u, b, this.C, this.config_))
        }
        b = this.j;
        b.V = a;
        b.V.appState == chrome.cast.DialAppState.RUNNING ? (a = b.V.extraData || {}, c = a.screenId || null, h9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = Hrb(b, {
                name: b.u.friendlyName,
                screenId: a.screenId,
                loungeToken: a.loungeToken,
                dialId: b.V.receiver.label,
                screenIdType: "shortLived"
            },
            a.loungeTokenRefreshIntervalMs) : (g.Ay(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = Irb(b, c)) : a = Irb(b, c)) : a = Frb(b);
        return a
    };
    g.k.RW = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.J) {
            l9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) l9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), n9(this, new f9(this.u, c, this.config_), !0);
                    else {
                        this.Wf("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.u,
                    e = X7(this.u.Bk(),
                        d.label);
                e && V7(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (l9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.fb(this.j), this.j = new f9(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Ta)(this.TW, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return Mrb(b, b.j)
                }), this.j.bz(null));
                this.j.nP(a)
            }
        }
    };
    g.k.U_ = function() {
        return this.j ? this.j.rR() : null
    };
    g.k.F7 = function(a) {
        this.isDisposed() || (this.Wf("Failed to estabilish a session: " + g.Pi(a)), a.code != chrome.cast.ErrorCode.CANCEL && n9(this, null), this.oa("yt-remote-cast2-session-failed"))
    };
    g.k.m7 = function(a) {
        l9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = m9(this);
            this.K = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            m9(this) != b && this.oa("yt-remote-cast2-availability-change", m9(this))
        }
    };
    g.k.sR = function() {
        this.isDisposed() || (this.B = Nrb(this), l9("Updating custom receivers: " + g.Pi(this.B)), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ta)(function() {
            this.Wf("Failed to set custom receivers.")
        }, this)), this.oa("yt-remote-cast2-availability-change", m9(this)))
    };
    k9.prototype.setLaunchParams = k9.prototype.m9;
    k9.prototype.setConnectedScreenStatus = k9.prototype.k9;
    k9.prototype.stopSession = k9.prototype.V_;
    k9.prototype.getCastSession = k9.prototype.U_;
    k9.prototype.requestSession = k9.prototype.requestSession;
    k9.prototype.init = k9.prototype.init;
    k9.prototype.dispose = k9.prototype.dispose;
    var Wrb = [];
    g.k = u9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        bsb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.So = a.hasPrevious, this.Fk = a.hasNext, this.K = a.playerTime, this.J = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.V = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.jd = function() {
        return 1 == this.playerState
    };
    g.k.Zk = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + v9(this) : this.D
    };
    g.k.clone = function() {
        return new u9(csb(this))
    };
    g.x(A9, g.uE);
    g.k = A9.prototype;
    g.k.getState = function() {
        return this.B
    };
    g.k.Js = function() {
        return this.C.getReconnectTimeout()
    };
    g.k.Zv = function() {
        this.C.reconnect()
    };
    g.k.play = function() {
        C9(this) ? (this.j ? this.j.play(null, g.Hd, G9(this, "play")) : F9(this, "play"), fsb(this, 1, x9(B9(this))), this.oa("remotePlayerChange")) : D9(this, this.play)
    };
    g.k.pause = function() {
        C9(this) ? (this.j ? this.j.pause(null, g.Hd, G9(this, "pause")) : F9(this, "pause"), fsb(this, 2, x9(B9(this))), this.oa("remotePlayerChange")) : D9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (C9(this)) {
            if (this.j) {
                var b = B9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.jd() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Hd, G9(this, "seekTo", {
                    newTime: a
                }))
            } else F9(this, "seekTo", {
                newTime: a
            });
            fsb(this, 3, a);
            this.oa("remotePlayerChange")
        } else D9(this, g.Ua(this.seekTo, a))
    };
    g.k.stop = function() {
        if (C9(this)) {
            this.j ? this.j.stop(null, g.Hd, G9(this, "stopVideo")) : F9(this, "stopVideo");
            var a = B9(this);
            a.index = -1;
            a.videoId = "";
            bsb(a);
            E9(this, a);
            this.oa("remotePlayerChange")
        } else D9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (C9(this)) {
            var c = B9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.Ta)(function() {
                        S8("set receiver volume: " + d)
                    }, this), (0, g.Ta)(function() {
                        this.Wf("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.Ta)(function() {
                    S8("set receiver muted: " + b)
                }, this), (0, g.Ta)(function() {
                    this.Wf("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                F9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            E9(this, c)
        } else D9(this, g.Ua(this.setVolume, a, b))
    };
    g.k.tR = function(a, b) {
        if (C9(this)) {
            var c = B9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Pi(b.style), g.ld(a, c.trackData));
            F9(this, "setSubtitlesTrack", a);
            E9(this, c)
        } else D9(this, g.Ua(this.tR, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        C9(this) ? (b = b.getLanguageInfo().getId(), F9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = B9(this), a.audioTrackId = b, E9(this, a)) : D9(this, g.Ua(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = B9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        y9(l, a, c || 0);
        void 0 !== b && (w9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Pi(h));
        F9(this, "setPlaylist", m);
        d || E9(this, l)
    };
    g.k.zH = function(a, b) {
        if (C9(this)) {
            if (a && b) {
                var c = B9(this);
                y9(c, a, b);
                E9(this, c)
            }
            F9(this, "previous")
        } else D9(this, g.Ua(this.zH, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (C9(this)) {
            if (a && b) {
                var c = B9(this);
                y9(c, a, b);
                E9(this, c)
            }
            F9(this, "next")
        } else D9(this, g.Ua(this.nextVideo, a, b))
    };
    g.k.gF = function() {
        if (C9(this)) {
            F9(this, "clearPlaylist");
            var a = B9(this);
            a.reset();
            E9(this, a);
            this.oa("remotePlayerChange")
        } else D9(this, this.gF)
    };
    g.k.zT = function() {
        C9(this) ? F9(this, "dismissAutoplay") : D9(this, this.zT)
    };
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.oa("proxyStateChange", a, this.B)
        }
        g.uE.prototype.dispose.call(this)
    };
    g.k.ra = function() {
        esb(this);
        this.C = null;
        this.D.clear();
        z9(this, null);
        g.uE.prototype.ra.call(this)
    };
    g.k.rP = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.oa("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.h7 = function(a, b) {
        this.oa(a, b)
    };
    g.k.X5 = function(a) {
        if (!a) this.WC(null), z9(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = B9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) S8("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, E9(this, b)
        }
    };
    g.k.WC = function(a) {
        S8("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.V);
        if (this.j = a) this.j.addUpdateListener(this.V), gsb(this), this.oa("remotePlayerChange")
    };
    g.k.W5 = function(a) {
        a ? (gsb(this), this.oa("remotePlayerChange")) : this.WC(null)
    };
    g.k.QP = function() {
        F9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.c6 = function() {
        var a = Zrb();
        a && z9(this, a)
    };
    g.k.Wf = function(a) {
        R8("CP", a)
    };
    g.x(J9, g.uE);
    g.k = J9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ka && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            w9(this.j,
                n);
            this.D = "UNSUPPORTED";
            c = this.Ka ? "setInitialState" : "setPlaylist";
            H9("Connecting with " + c + " and params: " + g.Pi(m));
            this.u.connect({
                method: c,
                params: g.Pi(m)
            }, a, Job())
        } else H9("Connecting without params"), this.u.connect({}, a, Job());
        ksb(this)
    };
    g.k.Yq = function(a) {
        this.u.Yq(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ka("yt.mdx.remote.remoteClient_", null), this.oa("beforeDispose"), I9(this, 3));
        g.uE.prototype.dispose.call(this)
    };
    g.k.ra = function() {
        lsb(this);
        nsb(this);
        msb(this);
        g.Sy(this.V);
        this.V = NaN;
        g.Sy(this.ea);
        this.ea = NaN;
        this.C = null;
        g.Uz(this.ma);
        this.ma.length = 0;
        this.u.dispose();
        g.uE.prototype.ra.call(this);
        this.D = this.K = this.B = this.j = this.u = null
    };
    g.k.iV = function(a) {
        if (!this.B || 0 === this.B.length) return !1;
        for (var b = g.w(this.B), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.L3 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.YB()) ? this.u.Qy() && isNaN(this.J) && (a = 1) : a = 2);
        return a
    };
    g.k.sy = function(a) {
        H9("Disconnecting with " + a);
        g.Ka("yt.mdx.remote.remoteClient_", null);
        lsb(this);
        this.oa("beforeDisconnect", a);
        1 == a && $7();
        this.u.disconnect(a);
        this.dispose()
    };
    g.k.J3 = function() {
        var a = this.j;
        this.C && (a = this.j.clone(), y9(a, this.C, a.index));
        return csb(a)
    };
    g.k.n9 = function(a) {
        var b = this,
            c = new u9(a);
        c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.Sy(this.V), this.V = g.Qy(function() {
            if (b.C) {
                var e = b.C;
                b.C = null;
                b.j.videoId != e && K9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && x9(this.j) == x9(c) && g.Pi(this.j.trackData) == g.Pi(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.Ub(d, function(e) {
            this.oa(e)
        }, this)
    };
    g.k.pU = function() {
        var a = this.u.As(),
            b = g.sb(this.B, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.YB = function() {
        return this.u.Js()
    };
    g.k.D3 = function() {
        return this.D || "UNSUPPORTED"
    };
    g.k.E3 = function() {
        return this.K || ""
    };
    g.k.W_ = function() {
        !isNaN(this.YB()) && this.u.Zv()
    };
    g.k.j9 = function(a, b) {
        K9(this, a, b);
        psb(this)
    };
    g.k.uR = function() {
        var a = g.fz("SID", "") || "",
            b = g.fz("SAPISID", "") || "",
            c = g.fz("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.Zf(g.Rf(a), 2);
        b = g.Zf(g.Rf(b), 2);
        c = g.Zf(g.Rf(c), 2);
        return g.Zf(g.Rf(a + "," + b + "," + c), 2)
    };
    J9.prototype.subscribe = J9.prototype.subscribe;
    J9.prototype.unsubscribeByKey = J9.prototype.Jh;
    J9.prototype.getProxyState = J9.prototype.L3;
    J9.prototype.disconnect = J9.prototype.sy;
    J9.prototype.getPlayerContextData = J9.prototype.J3;
    J9.prototype.setPlayerContextData = J9.prototype.n9;
    J9.prototype.getOtherConnectedRemoteId = J9.prototype.pU;
    J9.prototype.getReconnectTimeout = J9.prototype.YB;
    J9.prototype.getAutoplayMode = J9.prototype.D3;
    J9.prototype.getAutoplayVideoId = J9.prototype.E3;
    J9.prototype.reconnect = J9.prototype.W_;
    J9.prototype.sendMessage = J9.prototype.j9;
    J9.prototype.getXsrfToken = J9.prototype.uR;
    J9.prototype.isCapabilitySupportedOnConnectedDevices = J9.prototype.iV;
    g.x(Bsb, W8);
    g.k = Bsb.prototype;
    g.k.Bk = function(a) {
        return this.Xg.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Xg.$_c(a)
    };
    g.k.get = function(a) {
        return this.Xg.$_g(a)
    };
    g.k.start = function() {
        this.Xg.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Xg.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Xg.$_r(a, b, c)
    };
    g.k.vI = function(a, b, c, d) {
        this.Xg.$_un(a, b, c, d)
    };
    g.k.ra = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.Xg.$_ubk(this.j[a]);
        this.j.length = 0;
        this.Xg = null;
        W8.prototype.ra.call(this)
    };
    g.k.X_ = function() {
        this.oa("screenChange")
    };
    g.k.P6 = function() {
        this.oa("onlineScreenChange")
    };
    a9.prototype.$_st = a9.prototype.start;
    a9.prototype.$_gspc = a9.prototype.R_;
    a9.prototype.$_gsppc = a9.prototype.qR;
    a9.prototype.$_c = a9.prototype.contains;
    a9.prototype.$_g = a9.prototype.get;
    a9.prototype.$_a = a9.prototype.add;
    a9.prototype.$_un = a9.prototype.vI;
    a9.prototype.$_r = a9.prototype.remove;
    a9.prototype.$_gs = a9.prototype.Bk;
    a9.prototype.$_gos = a9.prototype.pR;
    a9.prototype.$_s = a9.prototype.subscribe;
    a9.prototype.$_ubk = a9.prototype.Jh;
    var V9 = null,
        j$ = !1,
        L9 = null,
        M9 = null,
        Msb = null,
        Q9 = [];
    g.x(Rsb, g.E);
    g.k = Rsb.prototype;
    g.k.ra = function() {
        g.E.prototype.ra.call(this);
        this.j.stop();
        this.u.stop();
        this.K.stop();
        var a = this.Dc;
        a.unsubscribe("proxyStateChange", this.QW, this);
        a.unsubscribe("remotePlayerChange", this.dD, this);
        a.unsubscribe("remoteQueueChange", this.hH, this);
        a.unsubscribe("previousNextChange", this.NW, this);
        a.unsubscribe("nowAutoplaying", this.IW, this);
        a.unsubscribe("autoplayDismissed", this.lW, this);
        this.Dc = this.module = null
    };
    g.k.Ek = function(a) {
        var b = g.Ca.apply(1, arguments);
        if (2 != this.Dc.B)
            if (k$(this)) {
                if (1081 != B9(this.Dc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        B9(this.Dc).jd() ? this.Dc.pause() : this.Dc.play();
                        break;
                    case "control_play":
                        this.Dc.play();
                        break;
                    case "control_pause":
                        this.Dc.pause();
                        break;
                    case "control_seek":
                        this.J.nJ(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        Tsb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.I.getCurrentTime();
                    l$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    l$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    Tsb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.U5 = function(a) {
        this.K.w_(a)
    };
    g.k.c$ = function(a) {
        this.Ek("control_subtitles_set_track", g.fd(a) ? null : a)
    };
    g.k.uY = function() {
        var a = this.I.getOption("captions", "track");
        g.fd(a) || Tsb(this, a)
    };
    g.k.Bc = function(a) {
        this.module.Bc(a, this.I.getVideoData().lengthSeconds)
    };
    g.k.A6 = function() {
        g.fd(this.B) || Usb(this, this.B);
        this.C = !1
    };
    g.k.QW = function(a, b) {
        this.u.stop();
        2 === b && this.lY()
    };
    g.k.dD = function() {
        if (k$(this)) {
            this.j.stop();
            var a = B9(this.Dc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Eh = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Eh = 0;
                    break;
                default:
                    this.module.Eh = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.xc(new g.iP(8));
                    this.kY();
                    break;
                case 1085:
                case 3:
                    this.xc(new g.iP(9));
                    break;
                case 1083:
                case 0:
                    this.xc(new g.iP(2));
                    this.J.stop();
                    this.Bc(this.I.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.xc(new g.iP(4));
                    break;
                case 2:
                    this.xc(new g.iP(4));
                    this.Bc(x9(a));
                    break;
                case -1:
                    this.xc(new g.iP(64));
                    break;
                case -1E3:
                    this.xc(new g.iP(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        zF: 2
                    }))
            }
            a = B9(this.Dc).trackData;
            var b = this.B;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.B = a, Usb(this, a));
            a = B9(this.Dc); - 1 === a.volume || Math.round(this.I.getVolume()) === a.volume && this.I.isMuted() === a.muted || this.V.isActive() || this.bZ()
        } else Ssb(this)
    };
    g.k.NW = function() {
        this.I.oa("mdxpreviousnextchange")
    };
    g.k.hH = function() {
        k$(this) || Ssb(this)
    };
    g.k.IW = function(a) {
        isNaN(a) || this.I.oa("mdxnowautoplaying", a)
    };
    g.k.lW = function() {
        this.I.oa("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        k$(this) && this.Dc.setAudioTrack(this.I.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === B9(this.Dc).playerState ? l$(this, a) : b && this.Dc.seekTo(a)
    };
    g.k.bZ = function() {
        var a = this;
        if (k$(this)) {
            var b = B9(this.Dc);
            this.events.Kc(this.ea);
            b.muted ? this.I.mute() : this.I.unMute();
            this.I.setVolume(b.volume);
            this.ea = this.events.T(this.I, "onVolumeChange", function(c) {
                Psb(a, c)
            })
        }
    };
    g.k.kY = function() {
        this.j.stop();
        if (!this.Dc.isDisposed()) {
            var a = B9(this.Dc);
            a.jd() && this.xc(new g.iP(8));
            this.Bc(x9(a));
            this.j.start()
        }
    };
    g.k.lY = function() {
        this.u.stop();
        this.j.stop();
        var a = this.Dc.Js();
        2 == this.Dc.B && !isNaN(a) && this.u.start()
    };
    g.k.xc = function(a) {
        this.u.stop();
        var b = this.D;
        if (!g.nP(b, a)) {
            var c = g.qO(a, 2);
            c !== g.qO(this.D, 2) && this.I.Vz(c);
            this.D = a;
            Wsb(this.module, b, a)
        }
    };
    g.x(m$, g.V);
    m$.prototype.pd = function() {
        this.j.show()
    };
    m$.prototype.Jb = function() {
        this.j.hide()
    };
    m$.prototype.u = function() {
        b8("mdx-privacy-popup-cancel");
        this.Jb()
    };
    m$.prototype.B = function() {
        b8("mdx-privacy-popup-confirm");
        this.Jb()
    };
    g.x(n$, g.V);
    n$.prototype.onStateChange = function(a) {
        this.zc(a.state)
    };
    n$.prototype.zc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.qO(a, 128) ? g.MO("Error on $RECEIVER_NAME", b) : a.jd() || g.oP(a) ? g.MO("Playing on $RECEIVER_NAME", b) : g.MO("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.x(o$, g.yV);
    o$.prototype.C = function() {
        var a = this.I.getOption("remote", "receivers");
        a && 1 < a.length && !this.I.getOption("remote", "quickCast") ? (this.Et = g.Vb(a, this.j, this), g.zV(this, g.nm(a, this.j)), a = this.I.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.zj(a), this.enable(!0)) : this.enable(!1)
    };
    o$.prototype.j = function(a) {
        return a.key
    };
    o$.prototype.lk = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Et[a].name
    };
    o$.prototype.ih = function(a) {
        g.yV.prototype.ih.call(this, a);
        this.I.setOption("remote", "currentReceiver", this.Et[a]);
        this.Ib.Jb()
    };
    g.x(Vsb, g.tT);
    g.k = Vsb.prototype;
    g.k.create = function() {
        var a = this.player.W(),
            b = g.JK(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
        };
        Gsb(b, a);
        this.subscriptions.push(g.DC("yt-remote-before-disconnect", this.S5, this));
        this.subscriptions.push(g.DC("yt-remote-connection-change", this.n7, this));
        this.subscriptions.push(g.DC("yt-remote-receiver-availability-change", this.PW,
            this));
        this.subscriptions.push(g.DC("yt-remote-auto-connect", this.l7, this));
        this.subscriptions.push(g.DC("yt-remote-receiver-resumed", this.k7, this));
        this.subscriptions.push(g.DC("mdx-privacy-popup-confirm", this.H8, this));
        this.subscriptions.push(g.DC("mdx-privacy-popup-cancel", this.G8, this));
        this.PW()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.tT.prototype.load.call(this);
        this.Fl = new Rsb(this, this.player, this.Dc);
        var a = (a = Osb()) ? a.currentTime : 0;
        var b = Lsb() ? new A9(U9(), void 0) : null;
        0 == a && b && (a = x9(B9(b)));
        0 !== a && this.Bc(a);
        Wsb(this, this.Ze, this.Ze);
        this.player.vp(6)
    };
    g.k.unload = function() {
        this.player.oa("mdxautoplaycanceled");
        this.Xr = this.gp;
        g.ib(this.Fl, this.Dc);
        this.Dc = this.Fl = null;
        g.tT.prototype.unload.call(this);
        this.player.vp(5);
        p$(this)
    };
    g.k.ra = function() {
        g.EC(this.subscriptions);
        g.tT.prototype.ra.call(this)
    };
    g.k.YC = function(a) {
        var b = g.Ca.apply(1, arguments);
        this.loaded && this.Fl.Ek.apply(this.Fl, [a].concat(g.la(b)))
    };
    g.k.getAdState = function() {
        return this.Eh
    };
    g.k.So = function() {
        return this.Dc ? B9(this.Dc).So : !1
    };
    g.k.Fk = function() {
        return this.Dc ? B9(this.Dc).Fk : !1
    };
    g.k.Bc = function(a, b) {
        this.vV = a || 0;
        this.player.oa("progresssync", a, b);
        this.player.Oa("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.vV
    };
    g.k.getProgressState = function() {
        var a = B9(this.Dc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Dh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + v9(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.j + v9(a) : a.j) - this.getCurrentTime(),
            loaded: a.V,
            seekableEnd: a.u ? a.j + v9(a) : a.j,
            seekableStart: 0 < a.C ? a.C + v9(a) : a.C,
            offset: 0,
            viewerLivestreamJoinTime: b.viewerLivestreamJoinTime
        }
    };
    g.k.nextVideo = function() {
        this.Dc && this.Dc.nextVideo()
    };
    g.k.zH = function() {
        this.Dc && this.Dc.zH()
    };
    g.k.S5 = function(a) {
        1 === a && (this.BO = this.Dc ? B9(this.Dc) : null)
    };
    g.k.n7 = function() {
        var a = Lsb() ? new A9(U9(), void 0) : null;
        if (a) {
            var b = this.Xr;
            this.loaded && this.unload();
            this.Dc = a;
            this.BO = null;
            b.key !== this.gp.key && (this.Xr = b, this.load())
        } else g.fb(this.Dc), this.Dc = null, this.loaded && (this.unload(), (a = this.BO) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, x9(a)));
        this.player.oa("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.PW = function() {
        var a = [this.gp],
            b = a.concat,
            c = Hsb();
        r9() && g.fA("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Et = b.call(a, c);
        a = Jsb() || this.gp;
        q$(this, a);
        this.player.Oa("onMdxReceiversChange")
    };
    g.k.l7 = function() {
        var a = Jsb();
        q$(this, a)
    };
    g.k.k7 = function() {
        this.Xr = Jsb()
    };
    g.k.H8 = function() {
        this.sD = !0;
        p$(this);
        j$ = !1;
        V9 && i$(V9, 1);
        V9 = null
    };
    g.k.G8 = function() {
        this.sD = !1;
        p$(this);
        q$(this, this.gp);
        this.Xr = this.gp;
        j$ = !1;
        V9 = null;
        this.player.playVideo()
    };
    g.k.wh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Et;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? $rb() : q$(this, b)), this.loaded ? this.Xr : this.gp;
            case "quickCast":
                return 2 === this.Et.length && "cast-selector-receiver" === this.Et[1].key ? (b && $rb(), !0) : !1
        }
    };
    g.k.QP = function() {
        this.Dc.QP()
    };
    g.k.al = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.sT("remote", Vsb);
})(_yt_player);