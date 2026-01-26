! function(t) {
    function e(r) {
        if (i[r]) return i[r].exports;
        var s = i[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(s.exports, s, s.exports, e), s.l = !0, s.exports
    }
    var i = {};
    e.m = t, e.c = i, e.d = function(t, i, r) {
        e.o(t, i) || Object.defineProperty(t, i, {
            enumerable: !0,
            get: r
        })
    }, e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.t = function(t, i) {
        if (1 & i && (t = e(t)), 8 & i) return t;
        if (4 & i && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & i && "string" != typeof t)
            for (var s in t) e.d(r, s, function(e) {
                return t[e]
            }.bind(null, s));
        return r
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "https://vavada-mirror.storage.googleapis.com/", e(e.s = 11)
}([function(t, e, i) {
    "use strict";
    i.r(e);
    var r = i(13),
        s = i(14),
        a = {
            image_0: i(2),
            image_1: i(3),
            image_2: i(4),
            image_3: i(5),
            image_4: i(6),
            image_5: i(7),
            image_6: i(8),
            image_7: i(9)
        };
    Object.keys(a).forEach((function(t) {
        var e = a[t],
            i = e.lastIndexOf("/") + 1,
            r = e.substr(0, i),
            n = e.substr(i),
            o = s.assets.findIndex((function(e) {
                return e.id === t
            }));
        s.assets[o].u = r, s.assets[o].p = n
    }));
    var n = document.querySelector("[data-animation=pigs]"),
        o = r.loadAnimation({
            container: n,
            renderer: "svg",
            loop: !0,
            autoplay: !0,
            animationData: s
        });
    e.default = o
}, function(t, e, i) {
    t.exports = i(16)
}, function(t, e, i) {
    t.exports = i.p + "images/pigs/pigs-0.b33dccef7520017b6a3bc98e3a2776b2.png"
}, function(t, e, i) {
    t.exports = i.p + "images/pigs/pigs-1.41736aba39d7e15955ac24b82a9589da.png"
}, function(t, e, i) {
    t.exports = i.p + "images/pigs/pigs-2.055896e66a36d71f4a2bfa2d25108d91.png"
}, function(t, e, i) {
    t.exports = i.p + "images/pigs/pigs-3.2777dd2140ee992a543847ba58a221d8.png"
}, function(t, e, i) {
    t.exports = i.p + "images/pigs/pigs-4.e381e955cac1ad39c51903a889cacf15.png"
}, function(t, e, i) {
    t.exports = i.p + "images/pigs/pigs-5.e295286d3239e9bb93d552f990864822.png"
}, function(t, e, i) {
    t.exports = i.p + "images/pigs/pigs-6.e0d3f662d38ba412930611c75de2c55b.png"
}, function(t, e, i) {
    t.exports = i.p + "images/pigs/pigs-7.a7e6bb2717bac30ffdeb092966819b2a.png"
}, function(t) {
    function e(t, e, i, r, s, a, n) {
        try {
            var o = t[a](n),
                p = o.value
        } catch (t) {
            return void i(t)
        }
        o.done ? e(p) : Promise.resolve(p).then(r, s)
    }
    t.exports = function(t) {
        return function() {
            var i = this,
                r = arguments;
            return new Promise((function(s, a) {
                function n(t) {
                    e(p, s, a, n, o, "next", t)
                }

                function o(t) {
                    e(p, s, a, n, o, "throw", t)
                }
                var p = t.apply(i, r);
                n(void 0)
            }))
        }
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, e, i) {
    i(12), i(17), i(18)
}, function(t, e, i) {
    i(0), i(15)
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    "undefined" != typeof navigator && function(t, e) {
        void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return e(t)
        }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }(window || {}, (function(window) {
        "use strict";

        function ProjectInterface() {
            return {}
        }

        function roundValues(t) {
            bmRnd = t ? _Mathround : function(t) {
                return t
            }
        }

        function styleDiv(t) {
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, i, r) {
            this.type = t, this.currentTime = e, this.totalTime = i, this.direction = 0 > r ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
            this.type = t, this.direction = 0 > e ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, i, r) {
            this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = 0 > r ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, i) {
            this.type = t, this.firstFrame = e, this.totalFrames = i
        }

        function BMDestroyEvent(t, e) {
            this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
            this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
            this.type = t, this.nativeError = e
        }

        function HSVtoRGB(t, e, i) {
            var r, s, a, n, o, p, h, l;
            switch (p = i * (1 - e), h = i * (1 - (o = 6 * t - (n = _Mathfloor(6 * t))) * e), l = i * (1 - (1 - o) * e), n % 6) {
                case 0:
                    r = i, s = l, a = p;
                    break;
                case 1:
                    r = h, s = i, a = p;
                    break;
                case 2:
                    r = p, s = i, a = l;
                    break;
                case 3:
                    r = p, s = h, a = i;
                    break;
                case 4:
                    r = l, s = p, a = i;
                    break;
                case 5:
                    r = i, s = p, a = h
            }
            return [r, s, a]
        }

        function RGBtoHSV(t, e, i) {
            var r, s = _Mathmax(t, e, i),
                a = _Mathmin(t, e, i),
                n = s - a,
                o = 0 === s ? 0 : n / s;
            switch (s) {
                case a:
                    r = 0;
                    break;
                case t:
                    r = e - i + n * (e < i ? 6 : 0), r /= 6 * n;
                    break;
                case e:
                    r = i - t + 2 * n, r /= 6 * n;
                    break;
                case i:
                    r = t - e + 4 * n, r /= 6 * n
            }
            return [r, o, s / 255]
        }

        function addSaturationToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[1] += e, 1 < i[1] ? i[1] = 1 : 0 >= i[1] && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addBrightnessToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[2] += e, 1 < i[2] ? i[2] = 1 : 0 > i[2] && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addHueToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[0] += e / 360, 1 < i[0] ? i[0] -= 1 : 0 > i[0] && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
        }

        function BaseEvent() {}

        function createSizedArray(t) {
            return Array.apply(null, {
                length: t
            })
        }

        function createNS(t) {
            return document.createElementNS(svgNS, t)
        }

        function createTag(t) {
            return document.createElement(t)
        }

        function DynamicPropertyContainer() {}

        function extendPrototype(t, e) {
            var i, r, s = t.length;
            for (i = 0; i < s; i += 1)
                for (var a in r = t[i].prototype) Object.prototype.hasOwnProperty.call(r, a) && (e.prototype[a] = r[a])
        }

        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
            function e() {}
            return e.prototype = t, e
        }

        function bezFunction() {
            function t(t, e, i, r, s, a) {
                var n = t * r + e * s + i * a - s * r - a * t - i * e;
                return -.001 < n && .001 > n
            }

            function e(t) {
                this.segmentLength = 0, this.points = Array(t)
            }

            function i(t, e) {
                this.partialLength = t, this.point = e
            }

            function r(t, e) {
                var i = e.percents,
                    r = e.lengths,
                    s = i.length,
                    a = bmFloor((s - 1) * t),
                    n = t * e.addedLength,
                    o = 0;
                if (a === s - 1 || 0 === a || n === r[a]) return i[a];
                for (var p = r[a] > n ? -1 : 1, h = !0; h;)
                    if (r[a] <= n && r[a + 1] > n ? (o = (n - r[a]) / (r[a + 1] - r[a]), h = !1) : a += p, 0 > a || a >= s - 1) {
                        if (a === s - 1) return i[a];
                        h = !1
                    }
                return i[a] + (i[a + 1] - i[a]) * o
            }
            var s = Math,
                a = function(t, e, i, r) {
                    var s, a, n, o, p, h, l = defaultCurveSegments,
                        f = 0,
                        m = [],
                        c = [],
                        d = bezierLengthPool.newElement();
                    for (n = i.length, s = 0; s < l; s += 1) {
                        for (p = s / (l - 1), h = 0, a = 0; a < n; a += 1) o = bmPow(1 - p, 3) * t[a] + 3 * bmPow(1 - p, 2) * p * i[a] + 3 * (1 - p) * bmPow(p, 2) * r[a] + bmPow(p, 3) * e[a], m[a] = o, null !== c[a] && (h += bmPow(m[a] - c[a], 2)), c[a] = m[a];
                        h && (f += h = bmSqrt(h)), d.percents[s] = p, d.lengths[s] = f
                    }
                    return d.addedLength = f, d
                },
                n = function() {
                    var r = {};
                    return function(s, a, n, o) {
                        var p = (s[0] + "_" + s[1] + "_" + a[0] + "_" + a[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                        if (!r[p]) {
                            var h, l, f, m, c, d, _, u = defaultCurveSegments,
                                y = 0,
                                g = null;
                            2 === s.length && (s[0] !== a[0] || s[1] !== a[1]) && t(s[0], s[1], a[0], a[1], s[0] + n[0], s[1] + n[1]) && t(s[0], s[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) && (u = 2);
                            var x = new e(u);
                            for (f = n.length, h = 0; h < u; h += 1) {
                                for (_ = createSizedArray(f), c = h / (u - 1), d = 0, l = 0; l < f; l += 1) m = bmPow(1 - c, 3) * s[l] + 3 * bmPow(1 - c, 2) * c * (s[l] + n[l]) + 3 * (1 - c) * bmPow(c, 2) * (a[l] + o[l]) + bmPow(c, 3) * a[l], _[l] = m, null !== g && (d += bmPow(_[l] - g[l], 2));
                                y += d = bmSqrt(d), x.points[h] = new i(d, _), g = _
                            }
                            x.segmentLength = y, r[p] = x
                        }
                        return r[p]
                    }
                }(),
                o = createTypedArray("float32", 8);
            return {
                getSegmentsLength: function(t) {
                    var e, i = segmentsLengthPool.newElement(),
                        r = t.c,
                        s = t.v,
                        n = t.o,
                        o = t.i,
                        p = t._length,
                        h = i.lengths,
                        l = 0;
                    for (e = 0; e < p - 1; e += 1) h[e] = a(s[e], s[e + 1], n[e], o[e + 1]), l += h[e].addedLength;
                    return r && p && (h[e] = a(s[e], s[0], n[e], o[0]), l += h[e].addedLength), i.totalLength = l, i
                },
                getNewSegment: function(t, e, i, a, n, p, h) {
                    0 > n ? n = 0 : 1 < n && (n = 1);
                    var l, f = r(n, h),
                        m = r(p = 1 < p ? 1 : p, h),
                        c = t.length,
                        d = 1 - f,
                        _ = 1 - m;
                    for (l = 0; l < c; l += 1) o[4 * l] = s.round(1e3 * (d * d * d * t[l] + f * d * d * 3 * i[l] + f * f * d * 3 * a[l] + f * f * f * e[l])) / 1e3, o[4 * l + 1] = s.round(1e3 * (d * d * _ * t[l] + (f * d * _ + d * f * _ + d * d * m) * i[l] + (f * f * _ + d * f * m + f * d * m) * a[l] + f * f * m * e[l])) / 1e3, o[4 * l + 2] = s.round(1e3 * (d * _ * _ * t[l] + (f * _ * _ + d * m * _ + d * _ * m) * i[l] + (f * m * _ + d * m * m + f * _ * m) * a[l] + f * m * m * e[l])) / 1e3, o[4 * l + 3] = s.round(1e3 * (_ * _ * _ * t[l] + (m * _ * _ + _ * m * _ + _ * _ * m) * i[l] + (m * m * _ + _ * m * m + m * _ * m) * a[l] + m * m * m * e[l])) / 1e3;
                    return o
                },
                getPointInSegment: function(t, e, i, a, n, o) {
                    var p = r(n, o),
                        h = 1 - p;
                    return [s.round(1e3 * (h * h * h * t[0] + (p * h * h + h * p * h + h * h * p) * i[0] + (p * p * h + h * p * p + p * h * p) * a[0] + p * p * p * e[0])) / 1e3, s.round(1e3 * (h * h * h * t[1] + (p * h * h + h * p * h + h * h * p) * i[1] + (p * p * h + h * p * p + p * h * p) * a[1] + p * p * p * e[1])) / 1e3]
                },
                buildBezierData: n,
                pointOnLine2D: t,
                pointOnLine3D: function(e, i, r, a, n, o, p, h, l) {
                    if (0 === r && 0 === o && 0 === l) return t(e, i, a, n, p, h);
                    var f, m = s.sqrt(s.pow(a - e, 2) + s.pow(n - i, 2) + s.pow(o - r, 2)),
                        c = s.sqrt(s.pow(p - e, 2) + s.pow(h - i, 2) + s.pow(l - r, 2)),
                        d = s.sqrt(s.pow(p - a, 2) + s.pow(h - n, 2) + s.pow(l - o, 2));
                    return -1e-4 < (f = m > c ? m > d ? m - c - d : d - c - m : d > c ? d - c - m : c - m - d) && 1e-4 > f
                }
            }
        }

        function dataFunctionManager() {
            function t(s, n, o) {
                var p, h, l, f, m, c, d = s.length;
                for (h = 0; h < d; h += 1)
                    if ("ks" in (p = s[h]) && !p.completed) {
                        if (p.completed = !0, p.tt && (s[h - 1].td = p.tt), p.hasMask) {
                            var _ = p.masksProperties;
                            for (f = _.length, l = 0; l < f; l += 1)
                                if (_[l].pt.k.i) r(_[l].pt.k);
                                else
                                    for (c = _[l].pt.k.length, m = 0; m < c; m += 1) _[l].pt.k[m].s && r(_[l].pt.k[m].s[0]), _[l].pt.k[m].e && r(_[l].pt.k[m].e[0])
                        }
                        0 === p.ty ? (p.layers = e(p.refId, n), t(p.layers, n, o)) : 4 === p.ty ? i(p.shapes) : 5 === p.ty && a(p)
                    }
            }

            function e(t, e) {
                for (var i = 0, r = e.length; i < r;) {
                    if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
                    i += 1
                }
                return null
            }

            function i(t) {
                var e, s, a;
                for (e = t.length - 1; 0 <= e; e -= 1)
                    if ("sh" !== t[e].ty) "gr" === t[e].ty && i(t[e].it);
                    else if (t[e].ks.k.i) r(t[e].ks.k);
                else
                    for (a = t[e].ks.k.length, s = 0; s < a; s += 1) t[e].ks.k[s].s && r(t[e].ks.k[s].s[0]), t[e].ks.k[s].e && r(t[e].ks.k[s].e[0])
            }

            function r(t) {
                var e, i = t.i.length;
                for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
            }

            function s(t, e) {
                var i = e ? e.split(".") : [100, 100, 100];
                return !!(t[0] > i[0]) || !(i[0] > t[0]) && (!!(t[1] > i[1]) || !(i[1] > t[1]) && (!!(t[2] > i[2]) || !(i[2] > t[2]) && null))
            }

            function a(t) {
                0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
            }
            var n = function() {
                    function t(t) {
                        var e = t.t.d;
                        t.t.d = {
                            k: [{
                                s: e,
                                t: 0
                            }]
                        }
                    }

                    function e(e) {
                        var i, r = e.length;
                        for (i = 0; i < r; i += 1) 5 === e[i].ty && t(e[i])
                    }
                    var i = [4, 4, 14];
                    return function(t) {
                        if (s(i, t.v) && (e(t.layers), t.assets)) {
                            var r, a = t.assets.length;
                            for (r = 0; r < a; r += 1) t.assets[r].layers && e(t.assets[r].layers)
                        }
                    }
                }(),
                o = function() {
                    var t = [4, 7, 99];
                    return function(e) {
                        if (e.chars && !s(t, e.v)) {
                            var i, a, n, o, p, h = e.chars.length;
                            for (i = 0; i < h; i += 1)
                                if (e.chars[i].data && e.chars[i].data.shapes)
                                    for (n = (p = e.chars[i].data.shapes[0].it).length, a = 0; a < n; a += 1)(o = p[a].ks.k).__converted || (r(p[a].ks.k), o.__converted = !0)
                        }
                    }
                }(),
                p = function() {
                    function t(e) {
                        var i, r, s, a = e.length;
                        for (i = 0; i < a; i += 1)
                            if ("gr" === e[i].ty) t(e[i].it);
                            else if ("fl" === e[i].ty || "st" === e[i].ty)
                            if (e[i].c.k && e[i].c.k[0].i)
                                for (s = e[i].c.k.length, r = 0; r < s; r += 1) e[i].c.k[r].s && (e[i].c.k[r].s[0] /= 255, e[i].c.k[r].s[1] /= 255, e[i].c.k[r].s[2] /= 255, e[i].c.k[r].s[3] /= 255), e[i].c.k[r].e && (e[i].c.k[r].e[0] /= 255, e[i].c.k[r].e[1] /= 255, e[i].c.k[r].e[2] /= 255, e[i].c.k[r].e[3] /= 255);
                            else e[i].c.k[0] /= 255, e[i].c.k[1] /= 255, e[i].c.k[2] /= 255, e[i].c.k[3] /= 255
                    }

                    function e(e) {
                        var i, r = e.length;
                        for (i = 0; i < r; i += 1) 4 === e[i].ty && t(e[i].shapes)
                    }
                    var i = [4, 1, 9];
                    return function(t) {
                        if (s(i, t.v) && (e(t.layers), t.assets)) {
                            var r, a = t.assets.length;
                            for (r = 0; r < a; r += 1) t.assets[r].layers && e(t.assets[r].layers)
                        }
                    }
                }(),
                h = function() {
                    function t(e) {
                        var i, r, s;
                        for (i = e.length - 1; 0 <= i; i -= 1)
                            if ("sh" !== e[i].ty) "gr" === e[i].ty && t(e[i].it);
                            else if (e[i].ks.k.i) e[i].ks.k.c = e[i].closed;
                        else
                            for (s = e[i].ks.k.length, r = 0; r < s; r += 1) e[i].ks.k[r].s && (e[i].ks.k[r].s[0].c = e[i].closed), e[i].ks.k[r].e && (e[i].ks.k[r].e[0].c = e[i].closed)
                    }

                    function e(e) {
                        var i, r, s, a, n, o, p = e.length;
                        for (r = 0; r < p; r += 1) {
                            if ((i = e[r]).hasMask) {
                                var h = i.masksProperties;
                                for (a = h.length, s = 0; s < a; s += 1)
                                    if (h[s].pt.k.i) h[s].pt.k.c = h[s].cl;
                                    else
                                        for (o = h[s].pt.k.length, n = 0; n < o; n += 1) h[s].pt.k[n].s && (h[s].pt.k[n].s[0].c = h[s].cl), h[s].pt.k[n].e && (h[s].pt.k[n].e[0].c = h[s].cl)
                            }
                            4 === i.ty && t(i.shapes)
                        }
                    }
                    var i = [4, 4, 18];
                    return function(t) {
                        if (s(i, t.v) && (e(t.layers), t.assets)) {
                            var r, a = t.assets.length;
                            for (r = 0; r < a; r += 1) t.assets[r].layers && e(t.assets[r].layers)
                        }
                    }
                }(),
                l = {
                    completeData: function(e, i) {
                        e.__complete || (p(e), n(e), o(e), h(e), t(e.layers, e.assets, i), e.__complete = !0)
                    }
                };
            return l.checkColors = p, l.checkChars = o, l.checkShapes = h, l.completeLayers = t, l
        }

        function getFontProperties(t) {
            for (var e, i = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", s = "normal", a = i.length, n = 0; n < a; n += 1) switch (e = i[n].toLowerCase(), e) {
                case "italic":
                    s = "italic";
                    break;
                case "bold":
                    r = "700";
                    break;
                case "black":
                    r = "900";
                    break;
                case "medium":
                    r = "500";
                    break;
                case "regular":
                case "normal":
                    r = "400";
                    break;
                case "light":
                case "thin":
                    r = "200"
            }
            return {
                style: s,
                weight: t.fWeight || r
            }
        }
    }))
}, function() {}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(1)
}, function(t, e, i) {}]);
