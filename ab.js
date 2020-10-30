/**
 * tab - Get inspired by a beautiful image with every new tab opened. Personalize with time, weather, and recently visited sites.
 * v1.2.7
 * http://shutr.bz/tab
 * 
 * @sblaurock 2017
 */

/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
        : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length
            , n = K.type(e);
        return "function" === n || K.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (K.isFunction(t))
            return K.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return K.grep(e, function (e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (se.test(t))
                return K.filter(t, e, n);
            t = K.filter(t, e)
        }
        return K.grep(e, function (e) {
            return $.call(t, e) >= 0 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
            ;
        return e
    }
    function o(e) {
        var t = pe[e] = {};
        return K.each(e.match(he) || [], function (e, n) {
            t[n] = !0
        }),
            t
    }
    function a() {
        J.removeEventListener("DOMContentLoaded", a, !1),
            e.removeEventListener("load", a, !1),
            K.ready()
    }
    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }),
            this.expando = K.expando + Math.random()
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(be, "-$1").toLowerCase(),
                n = e.getAttribute(r),
                "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : we.test(n) ? K.parseJSON(n) : n
                } catch (i) { }
                ve.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function c() {
        return !0
    }
    function l() {
        return !1
    }
    function f() {
        try {
            return J.activeElement
        } catch (e) { }
    }
    function d(e, t) {
        return K.nodeName(e, "table") && K.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function p(e) {
        var t = He.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }
    function m(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
            ye.set(e[n], "globalEval", !t || ye.get(t[n], "globalEval"))
    }
    function g(e, t) {
        var n, r, i, o, a, s, u, c;
        if (1 === t.nodeType) {
            if (ye.hasData(e) && (o = ye.access(e),
                a = ye.set(t, o),
                c = o.events)) {
                delete a.handle,
                    a.events = {};
                for (i in c)
                    for (n = 0,
                        r = c[i].length; r > n; n++)
                        K.event.add(t, i, c[i][n])
            }
            ve.hasData(e) && (s = ve.access(e),
                u = K.extend({}, s),
                ve.set(t, u))
        }
    }
    function y(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && K.nodeName(e, t) ? K.merge([e], n) : n
    }
    function v(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ke.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function w(t, n) {
        var r, i = K(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : K.css(i[0], "display");
        return i.detach(),
            o
    }
    function b(e) {
        var t = J
            , n = qe[e];
        return n || (n = w(e, t),
            "none" !== n && n || (We = (We || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                t = We[0].contentDocument,
                t.write(),
                t.close(),
                n = w(e, t),
                We.detach()),
            qe[e] = n),
            n
    }
    function _(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ze(e),
            n && (a = n.getPropertyValue(t) || n[t]),
            n && ("" !== a || K.contains(e.ownerDocument, e) || (a = K.style(e, t)),
                Ue.test(a) && Ie.test(t) && (r = s.width,
                    i = s.minWidth,
                    o = s.maxWidth,
                    s.minWidth = s.maxWidth = s.width = a,
                    a = n.width,
                    s.width = r,
                    s.minWidth = i,
                    s.maxWidth = o)),
            void 0 !== a ? a + "" : a
    }
    function x(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function T(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ve.length; i--;)
            if (t = Ve[i] + n,
                t in e)
                return t;
        return r
    }
    function k(e, t, n) {
        var r = Ge.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function D(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += K.css(e, n + xe[o], !0, i)),
                r ? ("content" === n && (a -= K.css(e, "padding" + xe[o], !0, i)),
                    "margin" !== n && (a -= K.css(e, "border" + xe[o] + "Width", !0, i))) : (a += K.css(e, "padding" + xe[o], !0, i),
                        "padding" !== n && (a += K.css(e, "border" + xe[o] + "Width", !0, i)));
        return a
    }
    function C(e, t, n) {
        var r = !0
            , i = "width" === t ? e.offsetWidth : e.offsetHeight
            , o = ze(e)
            , a = "border-box" === K.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = _(e, t, o),
                (0 > i || null == i) && (i = e.style[t]),
                Ue.test(i))
                return i;
            r = a && (Z.boxSizingReliable() || i === e.style[t]),
                i = parseFloat(i) || 0
        }
        return i + D(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function M(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
            r = e[a],
                r.style && (o[a] = ye.get(r, "olddisplay"),
                    n = r.style.display,
                    t ? (o[a] || "none" !== n || (r.style.display = ""),
                        "" === r.style.display && Te(r) && (o[a] = ye.access(r, "olddisplay", b(r.nodeName)))) : (i = Te(r),
                            "none" === n && i || ye.set(r, "olddisplay", i ? n : K.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a],
                r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function S(e, t, n, r, i) {
        return new S.prototype.init(e, t, n, r, i)
    }
    function N() {
        return setTimeout(function () {
            Ze = void 0
        }),
            Ze = K.now()
    }
    function E(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = xe[r],
                i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function Y(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function O(e, t, n) {
        var r, i, o, a, s, u, c, l, f = this, d = {}, h = e.style, p = e.nodeType && Te(e), m = ye.get(e, "fxshow");
        n.queue || (s = K._queueHooks(e, "fx"),
            null == s.unqueued && (s.unqueued = 0,
                u = s.empty.fire,
                s.empty.fire = function () {
                    s.unqueued || u()
                }
            ),
            s.unqueued++,
            f.always(function () {
                f.always(function () {
                    s.unqueued--,
                        K.queue(e, "fx").length || s.empty.fire()
                })
            })),
            1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                c = K.css(e, "display"),
                l = "none" === c ? ye.get(e, "olddisplay") || b(e.nodeName) : c,
                "inline" === l && "none" === K.css(e, "float") && (h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
                f.always(function () {
                    h.overflow = n.overflow[0],
                        h.overflowX = n.overflow[1],
                        h.overflowY = n.overflow[2]
                }));
        for (r in t)
            if (i = t[r],
                Qe.exec(i)) {
                if (delete t[r],
                    o = o || "toggle" === i,
                    i === (p ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r])
                        continue;
                    p = !0
                }
                d[r] = m && m[r] || K.style(e, r)
            } else
                c = void 0;
        if (K.isEmptyObject(d))
            "inline" === ("none" === c ? b(e.nodeName) : c) && (h.display = c);
        else {
            m ? "hidden" in m && (p = m.hidden) : m = ye.access(e, "fxshow", {}),
                o && (m.hidden = !p),
                p ? K(e).show() : f.done(function () {
                    K(e).hide()
                }),
                f.done(function () {
                    var t;
                    ye.remove(e, "fxshow");
                    for (t in d)
                        K.style(e, t, d[t])
                });
            for (r in d)
                a = Y(p ? m[r] : 0, r, f),
                    r in m || (m[r] = a.start,
                        p && (a.end = a.start,
                            a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function j(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = K.camelCase(n),
                i = t[r],
                o = e[n],
                K.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                n !== r && (e[r] = o,
                    delete e[n]),
                a = K.cssHooks[r],
                a && "expand" in a) {
                o = a.expand(o),
                    delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                        t[n] = i)
            } else
                t[r] = i
    }
    function A(e, t, n) {
        var r, i, o = 0, a = tt.length, s = K.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i)
                return !1;
            for (var t = Ze || N(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; u > a; a++)
                c.tweens[a].run(o);
            return s.notifyWith(e, [c, o, n]),
                1 > o && u ? n : (s.resolveWith(e, [c]),
                    !1)
        }, c = s.promise({
            elem: e,
            props: K.extend({}, t),
            opts: K.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ze || N(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = K.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r),
                    r
            },
            stop: function (t) {
                var n = 0
                    , r = t ? c.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    c.tweens[n].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                    this
            }
        }), l = c.props;
        for (j(l, c.opts.specialEasing); a > o; o++)
            if (r = tt[o].call(c, e, l, c.opts))
                return r;
        return K.map(l, Y, c),
            K.isFunction(c.opts.start) && c.opts.start.call(e, c),
            K.fx.timer(K.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function L(e) {
        return function (t, n) {
            "string" != typeof t && (n = t,
                t = "*");
            var r, i = 0, o = t.toLowerCase().match(he) || [];
            if (K.isFunction(n))
                for (; r = o[i++];)
                    "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function H(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
                K.each(e[s] || [], function (e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c),
                        i(c),
                        !1)
                }),
                u
        }
        var o = {}
            , a = e === _t;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function F(e, t) {
        var n, r, i = K.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && K.extend(!0, e, r),
            e
    }
    function P(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)
            u.shift(),
                void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== u[0] && u.unshift(o),
            n[o]) : void 0
    }
    function W(e, t, n, r) {
        var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
        if (l[1])
            for (a in e.converters)
                c[a.toLowerCase()] = e.converters[a];
        for (o = l.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                u = o,
                o = l.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (a = c[u + " " + o] || c["* " + o],
                        !a)
                        for (i in c)
                            if (s = i.split(" "),
                                s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0],
                                    l.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: a ? f : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function q(e, t, n, r) {
        var i;
        if (K.isArray(t))
            K.each(t, function (t, i) {
                n || Dt.test(e) ? r(e, i) : q(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== K.type(t))
            r(e, t);
        else
            for (i in t)
                q(e + "[" + i + "]", t[i], n, r)
    }
    function I(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var U = []
        , z = U.slice
        , R = U.concat
        , G = U.push
        , $ = U.indexOf
        , B = {}
        , X = B.toString
        , V = B.hasOwnProperty
        , Z = {}
        , J = e.document
        , Q = "2.1.1"
        , K = function (e, t) {
            return new K.fn.init(e, t)
        }
        , ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , te = /^-ms-/
        , ne = /-([\da-z])/gi
        , re = function (e, t) {
            return t.toUpperCase()
        };
    K.fn = K.prototype = {
        jquery: Q,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function () {
            return z.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
        },
        pushStack: function (e) {
            var t = K.merge(this.constructor(), e);
            return t.prevObject = this,
                t.context = this.context,
                t
        },
        each: function (e, t) {
            return K.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(K.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(z.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length
                , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: U.sort,
        splice: U.splice
    },
        K.extend = K.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a,
                a = arguments[s] || {},
                s++),
                "object" == typeof a || K.isFunction(a) || (a = {}),
                s === u && (a = this,
                    s--); u > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        n = a[t],
                            r = e[t],
                            a !== r && (c && r && (K.isPlainObject(r) || (i = K.isArray(r))) ? (i ? (i = !1,
                                o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {},
                                a[t] = K.extend(c, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        K.extend({
            expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () { },
            isFunction: function (e) {
                return "function" === K.type(e)
            },
            isArray: Array.isArray,
            isWindow: function (e) {
                return null != e && e === e.window
            },
            isNumeric: function (e) {
                return !K.isArray(e) && e - parseFloat(e) >= 0
            },
            isPlainObject: function (e) {
                return "object" !== K.type(e) || e.nodeType || K.isWindow(e) ? !1 : e.constructor && !V.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? B[X.call(e)] || "object" : typeof e
            },
            globalEval: function (e) {
                var t, n = eval;
                e = K.trim(e),
                    e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"),
                        t.text = e,
                        J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function (e) {
                return e.replace(te, "ms-").replace(ne, re)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t, r) {
                var i, o = 0, a = e.length, s = n(e);
                if (r) {
                    if (s)
                        for (; a > o && (i = t.apply(e[o], r),
                            i !== !1); o++)
                            ;
                    else
                        for (o in e)
                            if (i = t.apply(e[o], r),
                                i === !1)
                                break
                } else if (s)
                    for (; a > o && (i = t.call(e[o], o, e[o]),
                        i !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (i = t.call(e[o], o, e[o]),
                            i === !1)
                            break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(ee, "")
            },
            makeArray: function (e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? K.merge(r, "string" == typeof e ? [e] : e) : G.call(r, e)),
                    r
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : $.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r; r++)
                    e[i++] = t[r];
                return e.length = i,
                    e
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                    r = !t(e[o], o),
                        r !== s && i.push(e[o]);
                return i
            },
            map: function (e, t, r) {
                var i, o = 0, a = e.length, s = n(e), u = [];
                if (s)
                    for (; a > o; o++)
                        i = t(e[o], o, r),
                            null != i && u.push(i);
                else
                    for (o in e)
                        i = t(e[o], o, r),
                            null != i && u.push(i);
                return R.apply([], u)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, r, i;
                return "string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    K.isFunction(e) ? (r = z.call(arguments, 2),
                        i = function () {
                            return e.apply(t || this, r.concat(z.call(arguments)))
                        }
                        ,
                        i.guid = e.guid = e.guid || K.guid++,
                        i) : void 0
            },
            now: Date.now,
            support: Z
        }),
        K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            B["[object " + t + "]"] = t.toLowerCase()
        });
    var ie = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, c, f, h, p, m;
            if ((t ? t.ownerDocument || t : q) !== O && Y(t),
                t = t || O,
                n = n || [],
                !e || "string" != typeof e)
                return n;
            if (1 !== (s = t.nodeType) && 9 !== s)
                return [];
            if (A && !r) {
                if (i = ve.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a),
                                !o || !o.parentNode)
                                return n;
                            if (o.id === a)
                                return n.push(o),
                                    n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && P(t, o) && o.id === a)
                            return n.push(o),
                                n
                    } else {
                        if (i[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                                n;
                        if ((a = i[3]) && _.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(a)),
                                n
                    }
                if (_.qsa && (!L || !L.test(e))) {
                    if (h = f = W,
                        p = t,
                        m = 9 === s && e,
                        1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = D(e),
                            (f = t.getAttribute("id")) ? h = f.replace(be, "\\$&") : t.setAttribute("id", h),
                            h = "[id='" + h + "'] ",
                            u = c.length; u--;)
                            c[u] = h + d(c[u]);
                        p = we.test(e) && l(t.parentNode) || t,
                            m = c.join(",")
                    }
                    if (m)
                        try {
                            return K.apply(n, p.querySelectorAll(m)),
                                n
                        } catch (g) { } finally {
                            f || t.removeAttribute("id")
                        }
                }
            }
            return M(e.replace(ue, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[W] = !0,
                e
        }
        function i(e) {
            var t = O.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;)
                x.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return r(function (t) {
                return t = +t,
                    r(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;)
                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
            })
        }
        function l(e) {
            return e && typeof e.getElementsByTagName !== B && e
        }
        function f() { }
        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function h(e, t, n) {
            var r = t.dir
                , i = n && "parentNode" === r
                , o = U++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
                : function (t, n, a) {
                    var s, u, c = [I, o];
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, a))
                                return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) {
                                if (u = t[W] || (t[W] = {}),
                                    (s = u[r]) && s[0] === I && s[1] === o)
                                    return c[2] = s[2];
                                if (u[r] = c,
                                    c[2] = e(t, n, a))
                                    return !0
                            }
                }
        }
        function p(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
                : e[0]
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, c = null != t; u > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                    c && t.push(s));
            return a
        }
        function y(e, t, n, i, o, a) {
            return i && !i[W] && (i = y(i)),
                o && !o[W] && (o = y(o, a)),
                r(function (r, a, s, u) {
                    var c, l, f, d = [], h = [], p = a.length, y = r || m(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? y : g(y, d, e, s, u), w = n ? o || (r ? e : p || i) ? [] : a : v;
                    if (n && n(v, w, s, u),
                        i)
                        for (c = g(w, h),
                            i(c, [], s, u),
                            l = c.length; l--;)
                            (f = c[l]) && (w[h[l]] = !(v[h[l]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (c = [],
                                    l = w.length; l--;)
                                    (f = w[l]) && c.push(v[l] = f);
                                o(null, w = [], c, u)
                            }
                            for (l = w.length; l--;)
                                (f = w[l]) && (c = o ? te.call(r, f) : d[l]) > -1 && (r[c] = !(a[c] = f))
                        }
                    } else
                        w = g(w === a ? w.splice(p, w.length) : w),
                            o ? o(null, a, w, u) : K.apply(a, w)
                })
        }
        function v(e) {
            for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = h(function (e) {
                return e === t
            }, a, !0), c = h(function (e) {
                return te.call(t, e) > -1
            }, a, !0), l = [function (e, n, r) {
                return !o && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r))
            }
            ]; i > s; s++)
                if (n = x.relative[e[s].type])
                    l = [h(p(l), n)];
                else {
                    if (n = x.filter[e[s].type].apply(null, e[s].matches),
                        n[W]) {
                        for (r = ++s; i > r && !x.relative[e[r].type]; r++)
                            ;
                        return y(s > 1 && p(l), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && d(e))
                    }
                    l.push(n)
                }
            return p(l)
        }
        function w(e, n) {
            var i = n.length > 0
                , o = e.length > 0
                , a = function (r, a, s, u, c) {
                    var l, f, d, h = 0, p = "0", m = r && [], y = [], v = S, w = r || o && x.find.TAG("*", c), b = I += null == v ? 1 : Math.random() || .1, _ = w.length;
                    for (c && (S = a !== O && a); p !== _ && null != (l = w[p]); p++) {
                        if (o && l) {
                            for (f = 0; d = e[f++];)
                                if (d(l, a, s)) {
                                    u.push(l);
                                    break
                                }
                            c && (I = b)
                        }
                        i && ((l = !d && l) && h--,
                            r && m.push(l))
                    }
                    if (h += p,
                        i && p !== h) {
                        for (f = 0; d = n[f++];)
                            d(m, y, a, s);
                        if (r) {
                            if (h > 0)
                                for (; p--;)
                                    m[p] || y[p] || (y[p] = J.call(u));
                            y = g(y)
                        }
                        K.apply(u, y),
                            c && !r && y.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                    }
                    return c && (I = b,
                        S = v),
                        m
                };
            return i ? r(a) : a
        }
        var b, _, x, T, k, D, C, M, S, N, E, Y, O, j, A, L, H, F, P, W = "sizzle" + -new Date, q = e.document, I = 0, U = 0, z = n(), R = n(), G = n(), $ = function (e, t) {
            return e === t && (E = !0),
                0
        }, B = "undefined", X = 1 << 31, V = {}.hasOwnProperty, Z = [], J = Z.pop, Q = Z.push, K = Z.push, ee = Z.slice, te = Z.indexOf || function (e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
            , ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", re = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"), ae = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]", se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"), ce = new RegExp("^" + re + "*," + re + "*"), le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"), fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"), de = new RegExp(se), he = new RegExp("^" + oe + "$"), pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ye = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, we = /[+~]/, be = /'|\\/g, _e = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"), xe = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            K.apply(Z = ee.call(q.childNodes), q.childNodes),
                Z[q.childNodes.length].nodeType
        } catch (Te) {
            K = {
                apply: Z.length ? function (e, t) {
                    Q.apply(e, ee.call(t))
                }
                    : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];)
                            ;
                        e.length = n - 1
                    }
            }
        }
        _ = t.support = {},
            k = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }
            ,
            Y = t.setDocument = function (e) {
                var t, n = e ? e.ownerDocument || e : q, r = n.defaultView;
                return n !== O && 9 === n.nodeType && n.documentElement ? (O = n,
                    j = n.documentElement,
                    A = !k(n),
                    r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
                        Y()
                    }, !1) : r.attachEvent && r.attachEvent("onunload", function () {
                        Y()
                    })),
                    _.attributes = i(function (e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    _.getElementsByTagName = i(function (e) {
                        return e.appendChild(n.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    _.getElementsByClassName = ye.test(n.getElementsByClassName) && i(function (e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                            e.firstChild.className = "i",
                            2 === e.getElementsByClassName("i").length
                    }),
                    _.getById = i(function (e) {
                        return j.appendChild(e).id = W,
                            !n.getElementsByName || !n.getElementsByName(W).length
                    }),
                    _.getById ? (x.find.ID = function (e, t) {
                        if (typeof t.getElementById !== B && A) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }
                        ,
                        x.filter.ID = function (e) {
                            var t = e.replace(_e, xe);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }
                    ) : (delete x.find.ID,
                        x.filter.ID = function (e) {
                            var t = e.replace(_e, xe);
                            return function (e) {
                                var n = typeof e.getAttributeNode !== B && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }
                        ),
                    x.find.TAG = _.getElementsByTagName ? function (e, t) {
                        return typeof t.getElementsByTagName !== B ? t.getElementsByTagName(e) : void 0
                    }
                        : function (e, t) {
                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++];)
                                    1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }
                    ,
                    x.find.CLASS = _.getElementsByClassName && function (e, t) {
                        return typeof t.getElementsByClassName !== B && A ? t.getElementsByClassName(e) : void 0
                    }
                    ,
                    H = [],
                    L = [],
                    (_.qsa = ye.test(n.querySelectorAll)) && (i(function (e) {
                        e.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowclip^='']").length && L.push("[*^$]=" + re + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || L.push("\\[" + re + "*(?:value|" + ne + ")"),
                            e.querySelectorAll(":checked").length || L.push(":checked")
                    }),
                        i(function (e) {
                            var t = n.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && L.push("name" + re + "*[*^$|!~]?="),
                                e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                L.push(",.*:")
                        })),
                    (_.matchesSelector = ye.test(F = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function (e) {
                        _.disconnectedMatch = F.call(e, "div"),
                            F.call(e, "[s!='']:x"),
                            H.push("!=", se)
                    }),
                    L = L.length && new RegExp(L.join("|")),
                    H = H.length && new RegExp(H.join("|")),
                    t = ye.test(j.compareDocumentPosition),
                    P = t || ye.test(j.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                            , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                        : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                    ,
                    $ = t ? function (e, t) {
                        if (e === t)
                            return E = !0,
                                0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                            1 & r || !_.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === q && P(q, e) ? -1 : t === n || t.ownerDocument === q && P(q, t) ? 1 : N ? te.call(N, e) - te.call(N, t) : 0 : 4 & r ? -1 : 1)
                    }
                        : function (e, t) {
                            if (e === t)
                                return E = !0,
                                    0;
                            var r, i = 0, o = e.parentNode, s = t.parentNode, u = [e], c = [t];
                            if (!o || !s)
                                return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : N ? te.call(N, e) - te.call(N, t) : 0;
                            if (o === s)
                                return a(e, t);
                            for (r = e; r = r.parentNode;)
                                u.unshift(r);
                            for (r = t; r = r.parentNode;)
                                c.unshift(r);
                            for (; u[i] === c[i];)
                                i++;
                            return i ? a(u[i], c[i]) : u[i] === q ? -1 : c[i] === q ? 1 : 0
                        }
                    ,
                    n) : O
            }
            ,
            t.matches = function (e, n) {
                return t(e, null, null, n)
            }
            ,
            t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== O && Y(e),
                    n = n.replace(fe, "='$1']"),
                    !(!_.matchesSelector || !A || H && H.test(n) || L && L.test(n)))
                    try {
                        var r = F.call(e, n);
                        if (r || _.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (i) { }
                return t(n, O, null, [e]).length > 0
            }
            ,
            t.contains = function (e, t) {
                return (e.ownerDocument || e) !== O && Y(e),
                    P(e, t)
            }
            ,
            t.attr = function (e, t) {
                (e.ownerDocument || e) !== O && Y(e);
                var n = x.attrHandle[t.toLowerCase()]
                    , r = n && V.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
                return void 0 !== r ? r : _.attributes || !A ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function (e) {
                var t, n = [], r = 0, i = 0;
                if (E = !_.detectDuplicates,
                    N = !_.sortStable && e.slice(0),
                    e.sort($),
                    E) {
                    for (; t = e[i++];)
                        t === e[i] && (r = n.push(i));
                    for (; r--;)
                        e.splice(n[r], 1)
                }
                return N = null,
                    e
            }
            ,
            T = t.getText = function (e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += T(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++];)
                        n += T(t);
                return n
            }
            ,
            x = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(_e, xe),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(_e, xe),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = D(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(_e, xe).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        }
                            : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function (e) {
                        var t = z[e + " "];
                        return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && z(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== B && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, n, r) {
                        return function (i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : n ? (o += "",
                                "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3)
                            , a = "last" !== e.slice(-4)
                            , s = "of-type" === t;
                        return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode
                        }
                            : function (t, n, u) {
                                var c, l, f, d, h, p, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (f = t; f = f[m];)
                                                if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType)
                                                    return !1;
                                            p = m = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [a ? g.firstChild : g.lastChild],
                                        a && v) {
                                        for (l = g[W] || (g[W] = {}),
                                            c = l[e] || [],
                                            h = c[0] === I && c[1],
                                            d = c[0] === I && c[2],
                                            f = h && g.childNodes[h]; f = ++h && f && f[m] || (d = h = 0) || p.pop();)
                                            if (1 === f.nodeType && ++d && f === t) {
                                                l[e] = [I, h, d];
                                                break
                                            }
                                    } else if (v && (c = (t[W] || (t[W] = {}))[e]) && c[0] === I)
                                        d = c[1];
                                    else
                                        for (; (f = ++h && f && f[m] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++d || (v && ((f[W] || (f[W] = {}))[e] = [I, d]),
                                            f !== t));)
                                            ;
                                    return d -= i,
                                        d === r || d % r === 0 && d / r >= 0
                                }
                            }
                    },
                    PSEUDO: function (e, n) {
                        var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                            x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                for (var r, i = o(e, n), a = i.length; a--;)
                                    r = te.call(e, i[a]),
                                        e[r] = !(t[r] = i[a])
                            }) : function (e) {
                                return o(e, 0, i)
                            }
                        ) : o
                    }
                },
                pseudos: {
                    not: r(function (e) {
                        var t = []
                            , n = []
                            , i = C(e.replace(ue, "$1"));
                        return i[W] ? r(function (e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)
                                (o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function (e, r, o) {
                            return t[0] = e,
                                i(t, null, o, n),
                                !n.pop()
                        }
                    }),
                    has: r(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                    }),
                    lang: r(function (e) {
                        return he.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(_e, xe).toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                            n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType); return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === j
                    },
                    focus: function (e) {
                        return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                            e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function (e) {
                        return ge.test(e.nodeName)
                    },
                    input: function (e) {
                        return me.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function () {
                        return [0]
                    }),
                    last: c(function (e, t) {
                        return [t - 1]
                    }),
                    eq: c(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function (e, t) {
                        for (var n = 0; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: c(function (e, t) {
                        for (var n = 1; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: c(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;)
                            e.push(r);
                        return e
                    }),
                    gt: c(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;)
                            e.push(r);
                        return e
                    })
                }
            },
            x.pseudos.nth = x.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[b] = s(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            x.pseudos[b] = u(b);
        return f.prototype = x.filters = x.pseudos,
            x.setFilters = new f,
            D = t.tokenize = function (e, n) {
                var r, i, o, a, s, u, c, l = R[e + " "];
                if (l)
                    return n ? 0 : l.slice(0);
                for (s = e,
                    u = [],
                    c = x.preFilter; s;) {
                    (!r || (i = ce.exec(s))) && (i && (s = s.slice(i[0].length) || s),
                        u.push(o = [])),
                        r = !1,
                        (i = le.exec(s)) && (r = i.shift(),
                            o.push({
                                value: r,
                                type: i[0].replace(ue, " ")
                            }),
                            s = s.slice(r.length));
                    for (a in x.filter)
                        !(i = pe[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(),
                            o.push({
                                value: r,
                                type: a,
                                matches: i
                            }),
                            s = s.slice(r.length));
                    if (!r)
                        break
                }
                return n ? s.length : s ? t.error(e) : R(e, u).slice(0)
            }
            ,
            C = t.compile = function (e, t) {
                var n, r = [], i = [], o = G[e + " "];
                if (!o) {
                    for (t || (t = D(e)),
                        n = t.length; n--;)
                        o = v(t[n]),
                            o[W] ? r.push(o) : i.push(o);
                    o = G(e, w(i, r)),
                        o.selector = e
                }
                return o
            }
            ,
            M = t.select = function (e, t, n, r) {
                var i, o, a, s, u, c = "function" == typeof e && e, f = !r && D(e = c.selector || e);
                if (n = n || [],
                    1 === f.length) {
                    if (o = f[0] = f[0].slice(0),
                        o.length > 2 && "ID" === (a = o[0]).type && _.getById && 9 === t.nodeType && A && x.relative[o[1].type]) {
                        if (t = (x.find.ID(a.matches[0].replace(_e, xe), t) || [])[0],
                            !t)
                            return n;
                        c && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                        !x.relative[s = a.type]);)
                        if ((u = x.find[s]) && (r = u(a.matches[0].replace(_e, xe), we.test(o[0].type) && l(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                e = r.length && d(o),
                                !e)
                                return K.apply(n, r),
                                    n;
                            break
                        }
                }
                return (c || C(e, f))(r, t, !A, n, we.test(e) && l(t.parentNode) || t),
                    n
            }
            ,
            _.sortStable = W.split("").sort($).join("") === W,
            _.detectDuplicates = !!E,
            Y(),
            _.sortDetached = i(function (e) {
                return 1 & e.compareDocumentPosition(O.createElement("div"))
            }),
            i(function (e) {
                return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            _.attributes && i(function (e) {
                return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
            }) || o("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }),
            i(function (e) {
                return null == e.getAttribute("disabled")
            }) || o(ne, function (e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            t
    }(e);
    K.find = ie,
        K.expr = ie.selectors,
        K.expr[":"] = K.expr.pseudos,
        K.unique = ie.uniqueSort,
        K.text = ie.getText,
        K.isXMLDoc = ie.isXML,
        K.contains = ie.contains;
    var oe = K.expr.match.needsContext
        , ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
        , se = /^.[^:#\[\.,]*$/;
    K.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? K.find.matchesSelector(r, e) ? [r] : [] : K.find.matches(e, K.grep(t, function (e) {
                return 1 === e.nodeType
            }))
    }
        ,
        K.fn.extend({
            find: function (e) {
                var t, n = this.length, r = [], i = this;
                if ("string" != typeof e)
                    return this.pushStack(K(e).filter(function () {
                        for (t = 0; n > t; t++)
                            if (K.contains(i[t], this))
                                return !0
                    }));
                for (t = 0; n > t; t++)
                    K.find(e, i[t], r);
                return r = this.pushStack(n > 1 ? K.unique(r) : r),
                    r.selector = this.selector ? this.selector + " " + e : e,
                    r
            },
            filter: function (e) {
                return this.pushStack(r(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(r(this, e || [], !0))
            },
            is: function (e) {
                return !!r(this, "string" == typeof e && oe.test(e) ? K(e) : e || [], !1).length
            }
        });
    var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, le = K.fn.init = function (e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e),
                !n || !n[1] && t)
                return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof K ? t[0] : t,
                    K.merge(this, K.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)),
                    ae.test(n[1]) && K.isPlainObject(t))
                    for (n in t)
                        K.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = J.getElementById(n[2]),
                r && r.parentNode && (this.length = 1,
                    this[0] = r),
                this.context = J,
                this.selector = e,
                this
        }
        return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : K.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(K) : (void 0 !== e.selector && (this.selector = e.selector,
                this.context = e.context),
                K.makeArray(e, this))
    }
        ;
    le.prototype = K.fn,
        ue = K(J);
    var fe = /^(?:parents|prev(?:Until|All))/
        , de = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.extend({
        dir: function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && K(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
        K.fn.extend({
            has: function (e) {
                var t = K(e, this)
                    , n = t.length;
                return this.filter(function () {
                    for (var e = 0; n > e; e++)
                        if (K.contains(this, t[e]))
                            return !0
                })
            },
            closest: function (e, t) {
                for (var n, r = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? K.unique(o) : o)
            },
            index: function (e) {
                return e ? "string" == typeof e ? $.call(K(e), this[0]) : $.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(K.unique(K.merge(this.get(), K(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        K.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return K.dir(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return K.dir(e, "parentNode", n)
            },
            next: function (e) {
                return i(e, "nextSibling")
            },
            prev: function (e) {
                return i(e, "previousSibling")
            },
            nextAll: function (e) {
                return K.dir(e, "nextSibling")
            },
            prevAll: function (e) {
                return K.dir(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return K.dir(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return K.dir(e, "previousSibling", n)
            },
            siblings: function (e) {
                return K.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return K.sibling(e.firstChild)
            },
            contents: function (e) {
                return e.contentDocument || K.merge([], e.childNodes)
            }
        }, function (e, t) {
            K.fn[e] = function (n, r) {
                var i = K.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = K.filter(r, i)),
                    this.length > 1 && (de[e] || K.unique(i),
                        fe.test(e) && i.reverse()),
                    this.pushStack(i)
            }
        });
    var he = /\S+/g
        , pe = {};
    K.Callbacks = function (e) {
        e = "string" == typeof e ? pe[e] || o(e) : K.extend({}, e);
        var t, n, r, i, a, s, u = [], c = !e.once && [], l = function (o) {
            for (t = e.memory && o,
                n = !0,
                s = i || 0,
                i = 0,
                a = u.length,
                r = !0; u && a > s; s++)
                if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                    t = !1;
                    break
                }
            r = !1,
                u && (c ? c.length && l(c.shift()) : t ? u = [] : f.disable())
        }, f = {
            add: function () {
                if (u) {
                    var n = u.length;
                    !function o(t) {
                        K.each(t, function (t, n) {
                            var r = K.type(n);
                            "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments),
                        r ? a = u.length : t && (i = n,
                            l(t))
                }
                return this
            },
            remove: function () {
                return u && K.each(arguments, function (e, t) {
                    for (var n; (n = K.inArray(t, u, n)) > -1;)
                        u.splice(n, 1),
                            r && (a >= n && a--,
                                s >= n && s--)
                }),
                    this
            },
            has: function (e) {
                return e ? K.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function () {
                return u = [],
                    a = 0,
                    this
            },
            disable: function () {
                return u = c = t = void 0,
                    this
            },
            disabled: function () {
                return !u
            },
            lock: function () {
                return c = void 0,
                    t || f.disable(),
                    this
            },
            locked: function () {
                return !c
            },
            fireWith: function (e, t) {
                return !u || n && !c || (t = t || [],
                    t = [e, t.slice ? t.slice() : t],
                    r ? c.push(t) : l(t)),
                    this
            },
            fire: function () {
                return f.fireWith(this, arguments),
                    this
            },
            fired: function () {
                return !!n
            }
        };
        return f
    }
        ,
        K.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]]
                    , n = "pending"
                    , r = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments),
                                this
                        },
                        then: function () {
                            var e = arguments;
                            return K.Deferred(function (n) {
                                K.each(t, function (t, o) {
                                    var a = K.isFunction(e[t]) && e[t];
                                    i[o[1]](function () {
                                        var e = a && a.apply(this, arguments);
                                        e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }),
                                    e = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? K.extend(e, r) : r
                        }
                    }
                    , i = {};
                return r.pipe = r.then,
                    K.each(t, function (e, o) {
                        var a = o[2]
                            , s = o[3];
                        r[o[1]] = a.add,
                            s && a.add(function () {
                                n = s
                            }, t[1 ^ e][2].disable, t[2][2].lock),
                            i[o[0]] = function () {
                                return i[o[0] + "With"](this === i ? r : this, arguments),
                                    this
                            }
                            ,
                            i[o[0] + "With"] = a.fireWith
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
            },
            when: function (e) {
                var t, n, r, i = 0, o = z.call(arguments), a = o.length, s = 1 !== a || e && K.isFunction(e.promise) ? a : 0, u = 1 === s ? e : K.Deferred(), c = function (e, n, r) {
                    return function (i) {
                        n[e] = this,
                            r[e] = arguments.length > 1 ? z.call(arguments) : i,
                            r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
                if (a > 1)
                    for (t = new Array(a),
                        n = new Array(a),
                        r = new Array(a); a > i; i++)
                        o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --s;
                return s || u.resolveWith(r, o),
                    u.promise()
            }
        });
    var me;
    K.fn.ready = function (e) {
        return K.ready.promise().done(e),
            this
    }
        ,
        K.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? K.readyWait++ : K.ready(!0)
            },
            ready: function (e) {
                (e === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0,
                    e !== !0 && --K.readyWait > 0 || (me.resolveWith(J, [K]),
                        K.fn.triggerHandler && (K(J).triggerHandler("ready"),
                            K(J).off("ready"))))
            }
        }),
        K.ready.promise = function (t) {
            return me || (me = K.Deferred(),
                "complete" === J.readyState ? setTimeout(K.ready) : (J.addEventListener("DOMContentLoaded", a, !1),
                    e.addEventListener("load", a, !1))),
                me.promise(t)
        }
        ,
        K.ready.promise();
    var ge = K.access = function (e, t, n, r, i, o, a) {
        var s = 0
            , u = e.length
            , c = null == n;
        if ("object" === K.type(n)) {
            i = !0;
            for (s in n)
                K.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
            K.isFunction(r) || (a = !0),
            c && (a ? (t.call(e, r),
                t = null) : (c = t,
                    t = function (e, t, n) {
                        return c.call(K(e), n)
                    }
                )),
            t))
            for (; u > s; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
    }
        ;
    K.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
        ,
        s.uid = 1,
        s.accepts = K.acceptData,
        s.prototype = {
            key: function (e) {
                if (!s.accepts(e))
                    return 0;
                var t = {}
                    , n = e[this.expando];
                if (!n) {
                    n = s.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        },
                            Object.defineProperties(e, t)
                    } catch (r) {
                        t[this.expando] = n,
                            K.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}),
                    n
            },
            set: function (e, t, n) {
                var r, i = this.key(e), o = this.cache[i];
                if ("string" == typeof t)
                    o[t] = n;
                else if (K.isEmptyObject(o))
                    K.extend(this.cache[i], t);
                else
                    for (r in t)
                        o[r] = t[r];
                return o
            },
            get: function (e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function (e, t, n) {
                var r;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t),
                    void 0 !== r ? r : this.get(e, K.camelCase(t))) : (this.set(e, t, n),
                        void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, r, i, o = this.key(e), a = this.cache[o];
                if (void 0 === t)
                    this.cache[o] = {};
                else {
                    K.isArray(t) ? r = t.concat(t.map(K.camelCase)) : (i = K.camelCase(t),
                        t in a ? r = [t, i] : (r = i,
                            r = r in a ? [r] : r.match(he) || [])),
                        n = r.length;
                    for (; n--;)
                        delete a[r[n]]
                }
            },
            hasData: function (e) {
                return !K.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function (e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
    var ye = new s
        , ve = new s
        , we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , be = /([A-Z])/g;
    K.extend({
        hasData: function (e) {
            return ve.hasData(e) || ye.hasData(e)
        },
        data: function (e, t, n) {
            return ve.access(e, t, n)
        },
        removeData: function (e, t) {
            ve.remove(e, t)
        },
        _data: function (e, t, n) {
            return ye.access(e, t, n)
        },
        _removeData: function (e, t) {
            ye.remove(e, t)
        }
    }),
        K.fn.extend({
            data: function (e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = ve.get(o),
                        1 === o.nodeType && !ye.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;)
                            a[n] && (r = a[n].name,
                                0 === r.indexOf("data-") && (r = K.camelCase(r.slice(5)),
                                    u(o, r, i[r])));
                        ye.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function () {
                    ve.set(this, e)
                }) : ge(this, function (t) {
                    var n, r = K.camelCase(e);
                    if (o && void 0 === t) {
                        if (n = ve.get(o, e),
                            void 0 !== n)
                            return n;
                        if (n = ve.get(o, r),
                            void 0 !== n)
                            return n;
                        if (n = u(o, r, void 0),
                            void 0 !== n)
                            return n
                    } else
                        this.each(function () {
                            var n = ve.get(this, r);
                            ve.set(this, r, t),
                                -1 !== e.indexOf("-") && void 0 !== n && ve.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    ve.remove(this, e)
                })
            }
        }),
        K.extend({
            queue: function (e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue",
                    r = ye.get(e, t),
                    n && (!r || K.isArray(n) ? r = ye.access(e, t, K.makeArray(n)) : r.push(n)),
                    r || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = K.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = K._queueHooks(e, t)
                    , a = function () {
                        K.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(),
                    r--),
                    i && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, a, o)),
                    !r && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return ye.get(e, n) || ye.access(e, n, {
                    empty: K.Callbacks("once memory").add(function () {
                        ye.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        K.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? K.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = K.queue(this, e, t);
                        K._queueHooks(this, e),
                            "fx" === e && "inprogress" !== n[0] && K.dequeue(this, e)
                    })
            },
            dequeue: function (e) {
                return this.each(function () {
                    K.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, r = 1, i = K.Deferred(), o = this, a = this.length, s = function () {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; a--;)
                    n = ye.get(o[a], e + "queueHooks"),
                        n && n.empty && (r++,
                            n.empty.add(s));
                return s(),
                    i.promise(t)
            }
        });
    var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , xe = ["Top", "Right", "Bottom", "Left"]
        , Te = function (e, t) {
            return e = t || e,
                "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
        }
        , ke = /^(?:checkbox|radio)$/i;
    !function () {
        var e = J.createDocumentFragment()
            , t = e.appendChild(J.createElement("div"))
            , n = J.createElement("input");
        n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var De = "undefined";
    Z.focusinBubbles = "onfocusin" in e;
    var Ce = /^key/
        , Me = /^(?:mouse|pointer|contextmenu)|click/
        , Se = /^(?:focusinfocus|focusoutblur)$/
        , Ne = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, c, l, f, d, h, p, m, g = ye.get(e);
            if (g)
                for (n.handler && (o = n,
                    n = o.handler,
                    i = o.selector),
                    n.guid || (n.guid = K.guid++),
                    (u = g.events) || (u = g.events = {}),
                    (a = g.handle) || (a = g.handle = function (t) {
                        return typeof K !== De && K.event.triggered !== t.type ? K.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    t = (t || "").match(he) || [""],
                    c = t.length; c--;)
                    s = Ne.exec(t[c]) || [],
                        h = m = s[1],
                        p = (s[2] || "").split(".").sort(),
                        h && (f = K.event.special[h] || {},
                            h = (i ? f.delegateType : f.bindType) || h,
                            f = K.event.special[h] || {},
                            l = K.extend({
                                type: h,
                                origType: m,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && K.expr.match.needsContext.test(i),
                                namespace: p.join(".")
                            }, o),
                            (d = u[h]) || (d = u[h] = [],
                                d.delegateCount = 0,
                                f.setup && f.setup.call(e, r, p, a) !== !1 || e.addEventListener && e.addEventListener(h, a, !1)),
                            f.add && (f.add.call(e, l),
                                l.handler.guid || (l.handler.guid = n.guid)),
                            i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                            K.event.global[h] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, c, l, f, d, h, p, m, g = ye.hasData(e) && ye.get(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(he) || [""],
                    c = t.length; c--;)
                    if (s = Ne.exec(t[c]) || [],
                        h = m = s[1],
                        p = (s[2] || "").split(".").sort(),
                        h) {
                        for (f = K.event.special[h] || {},
                            h = (r ? f.delegateType : f.bindType) || h,
                            d = u[h] || [],
                            s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = o = d.length; o--;)
                            l = d[o],
                                !i && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1),
                                    l.selector && d.delegateCount--,
                                    f.remove && f.remove.call(e, l));
                        a && !d.length && (f.teardown && f.teardown.call(e, p, g.handle) !== !1 || K.removeEvent(e, h, g.handle),
                            delete u[h])
                    } else
                        for (h in u)
                            K.event.remove(e, h + t[c], n, r, !0);
                K.isEmptyObject(u) && (delete g.handle,
                    ye.remove(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, a, s, u, c, l, f, d = [r || J], h = V.call(t, "type") ? t.type : t, p = V.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || J,
                3 !== r.nodeType && 8 !== r.nodeType && !Se.test(h + K.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."),
                    h = p.shift(),
                    p.sort()),
                    c = h.indexOf(":") < 0 && "on" + h,
                    t = t[K.expando] ? t : new K.Event(h, "object" == typeof t && t),
                    t.isTrigger = i ? 2 : 3,
                    t.namespace = p.join("."),
                    t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    t.result = void 0,
                    t.target || (t.target = r),
                    n = null == n ? [t] : K.makeArray(n, [t]),
                    f = K.event.special[h] || {},
                    i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !K.isWindow(r)) {
                    for (u = f.delegateType || h,
                        Se.test(u + h) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a),
                            s = a;
                    s === (r.ownerDocument || J) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = d[o++]) && !t.isPropagationStopped();)
                    t.type = o > 1 ? u : f.bindType || h,
                        l = (ye.get(a, "events") || {})[t.type] && ye.get(a, "handle"),
                        l && l.apply(a, n),
                        l = c && a[c],
                        l && l.apply && K.acceptData(a) && (t.result = l.apply(a, n),
                            t.result === !1 && t.preventDefault());
                return t.type = h,
                    i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !K.acceptData(r) || c && K.isFunction(r[h]) && !K.isWindow(r) && (s = r[c],
                        s && (r[c] = null),
                        K.event.triggered = h,
                        r[h](),
                        K.event.triggered = void 0,
                        s && (r[c] = s)),
                    t.result
            }
        },
        dispatch: function (e) {
            e = K.event.fix(e);
            var t, n, r, i, o, a = [], s = z.call(arguments), u = (ye.get(this, "events") || {})[e.type] || [], c = K.event.special[e.type] || {};
            if (s[0] = e,
                e.delegateTarget = this,
                !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = K.event.handlers.call(this, e, u),
                    t = 0; (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem,
                        n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)
                        (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o,
                            e.data = o.data,
                            r = ((K.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s),
                            void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                                e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                    e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [],
                            n = 0; s > n; n++)
                            o = t[n],
                                i = o.selector + " ",
                                void 0 === r[i] && (r[i] = o.needsContext ? K(i, this).index(u) >= 0 : K.find(i, this, null, [u]).length),
                                r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
                a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J,
                    r = n.documentElement,
                    i = n.body,
                    e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                    e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                    e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
            }
        },
        fix: function (e) {
            if (e[K.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Me.test(i) ? this.mouseHooks : Ce.test(i) ? this.keyHooks : {}),
                r = a.props ? this.props.concat(a.props) : this.props,
                e = new K.Event(o),
                t = r.length; t--;)
                n = r[t],
                    e[n] = o[n];
            return e.target || (e.target = J),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== f() && this.focus ? (this.focus(),
                        !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(),
                        !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(),
                        !1) : void 0
                },
                _default: function (e) {
                    return K.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = K.extend(new K.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i),
                i.isDefaultPrevented() && n.preventDefault()
        }
    },
        K.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }
        ,
        K.Event = function (e, t) {
            return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : l) : this.type = e,
                t && K.extend(this, t),
                this.timeStamp = e && e.timeStamp || K.now(),
                void (this[K.expando] = !0)) : new K.Event(e, t)
        }
        ,
        K.Event.prototype = {
            isDefaultPrevented: l,
            isPropagationStopped: l,
            isImmediatePropagationStopped: l,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = c,
                    e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = c,
                    e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = c,
                    e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            K.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return (!i || i !== r && !K.contains(r, i)) && (e.type = o.origType,
                        n = o.handler.apply(this, arguments),
                        e.type = t),
                        n
                }
            }
        }),
        Z.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                K.event.simulate(t, e.target, K.event.fix(e), !0)
            };
            K.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this
                        , i = ye.access(r, t);
                    i || r.addEventListener(e, n, !0),
                        ye.access(r, t, (i || 0) + 1)
                },
                teardown: function () {
                    var r = this.ownerDocument || this
                        , i = ye.access(r, t) - 1;
                    i ? ye.access(r, t, i) : (r.removeEventListener(e, n, !0),
                        ye.remove(r, t))
                }
            }
        }),
        K.fn.extend({
            on: function (e, t, n, r, i) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t,
                        t = void 0);
                    for (a in e)
                        this.on(a, t, n, e[a], i);
                    return this
                }
                if (null == n && null == r ? (r = t,
                    n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
                        n = void 0) : (r = n,
                            n = t,
                            t = void 0)),
                    r === !1)
                    r = l;
                else if (!r)
                    return this;
                return 1 === i && (o = r,
                    r = function (e) {
                        return K().off(e),
                            o.apply(this, arguments)
                    }
                    ,
                    r.guid = o.guid || (o.guid = K.guid++)),
                    this.each(function () {
                        K.event.add(this, e, r, n, t)
                    })
            },
            one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        K(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t,
                    t = void 0),
                    n === !1 && (n = l),
                    this.each(function () {
                        K.event.remove(this, e, n, t)
                    })
            },
            trigger: function (e, t) {
                return this.each(function () {
                    K.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? K.event.trigger(e, t, n, !0) : void 0
            }
        });
    var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , Ye = /<([\w:]+)/
        , Oe = /<|&#?\w+;/
        , je = /<(?:script|style|link)/i
        , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Le = /^$|\/(?:java|ecma)script/i
        , He = /^true\/(.*)/
        , Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Pe.optgroup = Pe.option,
        Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead,
        Pe.th = Pe.td,
        K.extend({
            clone: function (e, t, n) {
                var r, i, o, a, s = e.cloneNode(!0), u = K.contains(e.ownerDocument, e);
                if (!(Z.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                    for (a = y(s),
                        o = y(e),
                        r = 0,
                        i = o.length; i > r; r++)
                        v(o[r], a[r]);
                if (t)
                    if (n)
                        for (o = o || y(e),
                            a = a || y(s),
                            r = 0,
                            i = o.length; i > r; r++)
                            g(o[r], a[r]);
                    else
                        g(e, s);
                return a = y(s, "script"),
                    a.length > 0 && m(a, !u && y(e, "script")),
                    s
            },
            buildFragment: function (e, t, n, r) {
                for (var i, o, a, s, u, c, l = t.createDocumentFragment(), f = [], d = 0, h = e.length; h > d; d++)
                    if (i = e[d],
                        i || 0 === i)
                        if ("object" === K.type(i))
                            K.merge(f, i.nodeType ? [i] : i);
                        else if (Oe.test(i)) {
                            for (o = o || l.appendChild(t.createElement("div")),
                                a = (Ye.exec(i) || ["", ""])[1].toLowerCase(),
                                s = Pe[a] || Pe._default,
                                o.innerHTML = s[1] + i.replace(Ee, "<$1></$2>") + s[2],
                                c = s[0]; c--;)
                                o = o.lastChild;
                            K.merge(f, o.childNodes),
                                o = l.firstChild,
                                o.textContent = ""
                        } else
                            f.push(t.createTextNode(i));
                for (l.textContent = "",
                    d = 0; i = f[d++];)
                    if ((!r || -1 === K.inArray(i, r)) && (u = K.contains(i.ownerDocument, i),
                        o = y(l.appendChild(i), "script"),
                        u && m(o),
                        n))
                        for (c = 0; i = o[c++];)
                            Le.test(i.type || "") && n.push(i);
                return l
            },
            cleanData: function (e) {
                for (var t, n, r, i, o = K.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                    if (K.acceptData(n) && (i = n[ye.expando],
                        i && (t = ye.cache[i]))) {
                        if (t.events)
                            for (r in t.events)
                                o[r] ? K.event.remove(n, r) : K.removeEvent(n, r, t.handle);
                        ye.cache[i] && delete ye.cache[i]
                    }
                    delete ve.cache[n[ve.expando]]
                }
            }
        }),
        K.fn.extend({
            text: function (e) {
                return ge(this, function (e) {
                    return void 0 === e ? K.text(this) : this.empty().each(function () {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = d(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = d(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function (e, t) {
                for (var n, r = e ? K.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                    t || 1 !== n.nodeType || K.cleanData(y(n)),
                        n.parentNode && (t && K.contains(n.ownerDocument, n) && m(y(n, "script")),
                            n.parentNode.removeChild(n));
                return this
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (K.cleanData(y(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null == e ? !1 : e,
                    t = null == t ? e : t,
                    this.map(function () {
                        return K.clone(this, e, t)
                    })
            },
            html: function (e) {
                return ge(this, function (e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !je.test(e) && !Pe[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Ee, "<$1></$2>");
                        try {
                            for (; r > n; n++)
                                t = this[n] || {},
                                    1 === t.nodeType && (K.cleanData(y(t, !1)),
                                        t.innerHTML = e);
                            t = 0
                        } catch (i) { }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = arguments[0];
                return this.domManip(arguments, function (t) {
                    e = this.parentNode,
                        K.cleanData(y(this)),
                        e && e.replaceChild(t, this)
                }),
                    e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function (e) {
                return this.remove(e, !0)
            },
            domManip: function (e, t) {
                e = R.apply([], e);
                var n, r, i, o, a, s, u = 0, c = this.length, l = this, f = c - 1, d = e[0], m = K.isFunction(d);
                if (m || c > 1 && "string" == typeof d && !Z.checkClone && Ae.test(d))
                    return this.each(function (n) {
                        var r = l.eq(n);
                        m && (e[0] = d.call(this, n, r.html())),
                            r.domManip(e, t)
                    });
                if (c && (n = K.buildFragment(e, this[0].ownerDocument, !1, this),
                    r = n.firstChild,
                    1 === n.childNodes.length && (n = r),
                    r)) {
                    for (i = K.map(y(n, "script"), h),
                        o = i.length; c > u; u++)
                        a = n,
                            u !== f && (a = K.clone(a, !0, !0),
                                o && K.merge(i, y(a, "script"))),
                            t.call(this[u], a, u);
                    if (o)
                        for (s = i[i.length - 1].ownerDocument,
                            K.map(i, p),
                            u = 0; o > u; u++)
                            a = i[u],
                                Le.test(a.type || "") && !ye.access(a, "globalEval") && K.contains(s, a) && (a.src ? K._evalUrl && K._evalUrl(a.src) : K.globalEval(a.textContent.replace(Fe, "")))
                }
                return this
            }
        }),
        K.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            K.fn[e] = function (e) {
                for (var n, r = [], i = K(e), o = i.length - 1, a = 0; o >= a; a++)
                    n = a === o ? this : this.clone(!0),
                        K(i[a])[t](n),
                        G.apply(r, n.get());
                return this.pushStack(r)
            }
        });
    var We, qe = {}, Ie = /^margin/, Ue = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"), ze = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
    !function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                a.innerHTML = "",
                i.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top,
                r = "4px" === t.width,
                i.removeChild(o)
        }
        var n, r, i = J.documentElement, o = J.createElement("div"), a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
            a.cloneNode(!0).style.backgroundClip = "",
            Z.clearCloneStyle = "content-box" === a.style.backgroundClip,
            o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
            o.appendChild(a),
            e.getComputedStyle && K.extend(Z, {
                pixelPosition: function () {
                    return t(),
                        n
                },
                boxSizingReliable: function () {
                    return null == r && t(),
                        r
                },
                reliableMarginRight: function () {
                    var t, n = a.appendChild(J.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        n.style.marginRight = n.style.width = "0",
                        a.style.width = "1px",
                        i.appendChild(o),
                        t = !parseFloat(e.getComputedStyle(n, null).marginRight),
                        i.removeChild(o),
                        t
                }
            }))
    }(),
        K.swap = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)
                a[o] = e.style[o],
                    e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = a[o];
            return i
        }
        ;
    var Re = /^(none|table(?!-c[ea]).+)/
        , Ge = new RegExp("^(" + _e + ")(.*)$", "i")
        , $e = new RegExp("^([+-])=(" + _e + ")", "i")
        , Be = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
        , Xe = {
            letterSpacing: "0",
            fontWeight: "400"
        }
        , Ve = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = _(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = K.camelCase(t), u = e.style;
                return t = K.cssProps[s] || (K.cssProps[s] = T(u, s)),
                    a = K.cssHooks[t] || K.cssHooks[s],
                    void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n,
                        "string" === o && (i = $e.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(K.css(e, t)),
                            o = "number"),
                        void (null != n && n === n && ("number" !== o || K.cssNumber[s] || (n += "px"),
                            Z.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                            a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = K.camelCase(t);
            return t = K.cssProps[s] || (K.cssProps[s] = T(e.style, s)),
                a = K.cssHooks[t] || K.cssHooks[s],
                a && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = _(e, t, r)),
                "normal" === i && t in Xe && (i = Xe[t]),
                "" === n || n ? (o = parseFloat(i),
                    n === !0 || K.isNumeric(o) ? o || 0 : i) : i
        }
    }),
        K.each(["height", "width"], function (e, t) {
            K.cssHooks[t] = {
                get: function (e, n, r) {
                    return n ? Re.test(K.css(e, "display")) && 0 === e.offsetWidth ? K.swap(e, Be, function () {
                        return C(e, t, r)
                    }) : C(e, t, r) : void 0
                },
                set: function (e, n, r) {
                    var i = r && ze(e);
                    return k(e, n, r ? D(e, t, r, "border-box" === K.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }),
        K.cssHooks.marginRight = x(Z.reliableMarginRight, function (e, t) {
            return t ? K.swap(e, {
                display: "inline-block"
            }, _, [e, "marginRight"]) : void 0
        }),
        K.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            K.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                        i[e + xe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
                Ie.test(e) || (K.cssHooks[e + t].set = k)
        }),
        K.fn.extend({
            css: function (e, t) {
                return ge(this, function (e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (K.isArray(t)) {
                        for (r = ze(e),
                            i = t.length; i > a; a++)
                            o[t[a]] = K.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? K.style(e, t, n) : K.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function () {
                return M(this, !0)
            },
            hide: function () {
                return M(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Te(this) ? K(this).show() : K(this).hide()
                })
            }
        }),
        K.Tween = S,
        S.prototype = {
            constructor: S,
            init: function (e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || "swing",
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (K.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = S.propHooks[this.prop];
                return e && e.get ? e.get(this) : S.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = S.propHooks[this.prop];
                return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : S.propHooks._default.set(this),
                    this
            }
        },
        S.prototype.init.prototype = S.prototype,
        S.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function (e) {
                    K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        },
        S.propHooks.scrollTop = S.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        K.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        },
        K.fx = S.prototype.init,
        K.fx.step = {};
    var Ze, Je, Qe = /^(?:toggle|show|hide)$/, Ke = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"), et = /queueHooks$/, tt = [O], nt = {
        "*": [function (e, t) {
            var n = this.createTween(e, t)
                , r = n.cur()
                , i = Ke.exec(t)
                , o = i && i[3] || (K.cssNumber[e] ? "" : "px")
                , a = (K.cssNumber[e] || "px" !== o && +r) && Ke.exec(K.css(n.elem, e))
                , s = 1
                , u = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                    i = i || [],
                    a = +r || 1;
                do
                    s = s || ".5",
                        a /= s,
                        K.style(n.elem, e, a + o);
                while (s !== (s = n.cur() / r) && 1 !== s && --u)
            }
            return i && (a = n.start = +a || +r || 0,
                n.unit = o,
                n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
                n
        }
        ]
    };
    K.Animation = K.extend(A, {
        tweener: function (e, t) {
            K.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                    nt[n] = nt[n] || [],
                    nt[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }),
        K.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? K.extend({}, e) : {
                complete: n || !n && t || K.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !K.isFunction(t) && t
            };
            return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default,
                (null == r.queue || r.queue === !0) && (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function () {
                    K.isFunction(r.old) && r.old.call(this),
                        r.queue && K.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        K.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Te).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = K.isEmptyObject(e)
                    , o = K.speed(t, n, r)
                    , a = function () {
                        var t = A(this, K.extend({}, e), o);
                        (i || ye.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a,
                    i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop,
                        t(n)
                };
                return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                    t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0
                            , i = null != e && e + "queueHooks"
                            , o = K.timers
                            , a = ye.get(this);
                        if (i)
                            a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a)
                                a[i] && a[i].stop && et.test(i) && r(a[i]);
                        for (i = o.length; i--;)
                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1));
                        (t || !n) && K.dequeue(this, e)
                    })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"),
                    this.each(function () {
                        var t, n = ye.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = K.timers, a = r ? r.length : 0;
                        for (n.finish = !0,
                            K.queue(this, e, []),
                            i && i.stop && i.stop.call(this, !0),
                            t = o.length; t--;)
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                        for (t = 0; a > t; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
            }
        }),
        K.each(["toggle", "show", "hide"], function (e, t) {
            var n = K.fn[t];
            K.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(E(t, !0), e, r, i)
            }
        }),
        K.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            K.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        K.timers = [],
        K.fx.tick = function () {
            var e, t = 0, n = K.timers;
            for (Ze = K.now(); t < n.length; t++)
                e = n[t],
                    e() || n[t] !== e || n.splice(t--, 1);
            n.length || K.fx.stop(),
                Ze = void 0
        }
        ,
        K.fx.timer = function (e) {
            K.timers.push(e),
                e() ? K.fx.start() : K.timers.pop()
        }
        ,
        K.fx.interval = 13,
        K.fx.start = function () {
            Je || (Je = setInterval(K.fx.tick, K.fx.interval))
        }
        ,
        K.fx.stop = function () {
            clearInterval(Je),
                Je = null
        }
        ,
        K.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        K.fn.delay = function (e, t) {
            return e = K.fx ? K.fx.speeds[e] || e : e,
                t = t || "fx",
                this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                })
        }
        ,
        function () {
            var e = J.createElement("input")
                , t = J.createElement("select")
                , n = t.appendChild(J.createElement("option"));
            e.type = "checkbox",
                Z.checkOn = "" !== e.value,
                Z.optSelected = n.selected,
                t.disabled = !0,
                Z.optDisabled = !n.disabled,
                e = J.createElement("input"),
                e.value = "t",
                e.type = "radio",
                Z.radioValue = "t" === e.value
        }();
    var rt, it, ot = K.expr.attrHandle;
    K.fn.extend({
        attr: function (e, t) {
            return ge(this, K.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                K.removeAttr(this, e)
            })
        }
    }),
        K.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === De ? K.prop(e, t, n) : (1 === o && K.isXMLDoc(e) || (t = t.toLowerCase(),
                    r = K.attrHooks[t] || (K.expr.match.bool.test(t) ? it : rt)),
                    void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = K.find.attr(e, t),
                        null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                            n) : void K.removeAttr(e, t)) : void 0
            },
            removeAttr: function (e, t) {
                var n, r, i = 0, o = t && t.match(he);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];)
                        r = K.propFix[n] || n,
                            K.expr.match.bool.test(n) && (e[r] = !1),
                            e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!Z.radioValue && "radio" === t && K.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                        }
                    }
                }
            }
        }),
        it = {
            set: function (e, t, n) {
                return t === !1 ? K.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        K.each(K.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ot[t] || K.find.attr;
            ot[t] = function (e, t, r) {
                var i, o;
                return r || (o = ot[t],
                    ot[t] = i,
                    i = null != n(e, t, r) ? t.toLowerCase() : null,
                    ot[t] = o),
                    i
            }
        });
    var at = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function (e, t) {
            return ge(this, K.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[K.propFix[e] || e]
            })
        }
    }),
        K.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function (e, t, n) {
                var r, i, o, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !K.isXMLDoc(e),
                    o && (t = K.propFix[t] || t,
                        i = K.propHooks[t]),
                    void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }),
        Z.optSelected || (K.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                    null
            }
        }),
        K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            K.propFix[this.toLowerCase()] = this
        });
    var st = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s = "string" == typeof e && e, u = 0, c = this.length;
            if (K.isFunction(e))
                return this.each(function (t) {
                    K(this).addClass(e.call(this, t, this.className))
                });
            if (s)
                for (t = (e || "").match(he) || []; c > u; u++)
                    if (n = this[u],
                        r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                        for (o = 0; i = t[o++];)
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = K.trim(r),
                            n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e, u = 0, c = this.length;
            if (K.isFunction(e))
                return this.each(function (t) {
                    K(this).removeClass(e.call(this, t, this.className))
                });
            if (s)
                for (t = (e || "").match(he) || []; c > u; u++)
                    if (n = this[u],
                        r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;)
                                r = r.replace(" " + i + " ", " ");
                        a = e ? K.trim(r) : "",
                            n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(K.isFunction(e) ? function (n) {
                K(this).toggleClass(e.call(this, n, this.className, t), t)
            }
                : function () {
                    if ("string" === n)
                        for (var t, r = 0, i = K(this), o = e.match(he) || []; t = o[r++];)
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else
                        (n === De || "boolean" === n) && (this.className && ye.set(this, "__className__", this.className),
                            this.className = this.className || e === !1 ? "" : ye.get(this, "__className__") || "")
                }
            )
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var ut = /\r/g;
    K.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = K.isFunction(e),
                this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, K(this).val()) : e,
                        null == i ? i = "" : "number" == typeof i ? i += "" : K.isArray(i) && (i = K.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })),
                        t = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()],
                        t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = K.valHooks[i.type] || K.valHooks[i.nodeName.toLowerCase()],
                    t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                        "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)) : void 0
        }
    }),
        K.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = K.find.attr(e, "value");
                        return null != t ? t : K.trim(K.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                            if (n = r[u],
                                !(!n.selected && u !== i || (Z.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
                                if (t = K(n).val(),
                                    o)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = K.makeArray(t), a = i.length; a--;)
                            r = i[a],
                                (r.selected = K.inArray(r.value, o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        K.each(["radio", "checkbox"], function () {
            K.valHooks[this] = {
                set: function (e, t) {
                    return K.isArray(t) ? e.checked = K.inArray(K(e).val(), t) >= 0 : void 0
                }
            },
                Z.checkOn || (K.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
        }),
        K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            K.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        K.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
    var ct = K.now()
        , lt = /\?/;
    K.parseJSON = function (e) {
        return JSON.parse(e + "")
    }
        ,
        K.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e)
                return null;
            try {
                n = new DOMParser,
                    t = n.parseFromString(e, "text/xml")
            } catch (r) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + e),
                t
        }
        ;
    var ft, dt, ht = /#.*$/, pt = /([?&])_=[^&]*/, mt = /^(.*?):[ \t]*([^\r\n]*)$/gm, gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, yt = /^(?:GET|HEAD)$/, vt = /^\/\//, wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, bt = {}, _t = {}, xt = "*/".concat("*");
    try {
        dt = location.href
    } catch (Tt) {
        dt = J.createElement("a"),
            dt.href = "",
            dt = dt.href
    }
    ft = wt.exec(dt.toLowerCase()) || [],
        K.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: dt,
                type: "GET",
                isLocal: gt.test(ft[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": xt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": K.parseJSON,
                    "text xml": K.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? F(F(e, K.ajaxSettings), t) : F(K.ajaxSettings, e)
            },
            ajaxPrefilter: L(bt),
            ajaxTransport: L(_t),
            ajax: function (e, t) {
                function n(e, t, n, a) {
                    var u, l, y, v, b, x = t;
                    2 !== w && (w = 2,
                        s && clearTimeout(s),
                        r = void 0,
                        o = a || "",
                        _.readyState = e > 0 ? 4 : 0,
                        u = e >= 200 && 300 > e || 304 === e,
                        n && (v = P(f, _, n)),
                        v = W(f, v, _, u),
                        u ? (f.ifModified && (b = _.getResponseHeader("Last-Modified"),
                            b && (K.lastModified[i] = b),
                            b = _.getResponseHeader("etag"),
                            b && (K.etag[i] = b)),
                            204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = v.state,
                                l = v.data,
                                y = v.error,
                                u = !y)) : (y = x,
                                    (e || !x) && (x = "error",
                                        0 > e && (e = 0))),
                        _.status = e,
                        _.statusText = (t || x) + "",
                        u ? p.resolveWith(d, [l, x, _]) : p.rejectWith(d, [_, x, y]),
                        _.statusCode(g),
                        g = void 0,
                        c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [_, f, u ? l : y]),
                        m.fireWith(d, [_, x]),
                        c && (h.trigger("ajaxComplete", [_, f]),
                            --K.active || K.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                var r, i, o, a, s, u, c, l, f = K.ajaxSetup({}, t), d = f.context || f, h = f.context && (d.nodeType || d.jquery) ? K(d) : K.event, p = K.Deferred(), m = K.Callbacks("once memory"), g = f.statusCode || {}, y = {}, v = {}, w = 0, b = "canceled", _ = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!a)
                                for (a = {}; t = mt.exec(o);)
                                    a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = v[n] = v[n] || e,
                            y[e] = t),
                            this
                    },
                    overrideMimeType: function (e) {
                        return w || (f.mimeType = e),
                            this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e)
                                    g[t] = [g[t], e[t]];
                            else
                                _.always(e[_.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || b;
                        return r && r.abort(t),
                            n(0, t),
                            this
                    }
                };
                if (p.promise(_).complete = m.add,
                    _.success = _.done,
                    _.error = _.fail,
                    f.url = ((e || f.url || dt) + "").replace(ht, "").replace(vt, ft[1] + "//"),
                    f.type = t.method || t.type || f.method || f.type,
                    f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(he) || [""],
                    null == f.crossDomain && (u = wt.exec(f.url.toLowerCase()),
                        f.crossDomain = !(!u || u[1] === ft[1] && u[2] === ft[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (ft[3] || ("http:" === ft[1] ? "80" : "443")))),
                    f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)),
                    H(bt, f, t, _),
                    2 === w)
                    return _;
                c = f.global,
                    c && 0 === K.active++ && K.event.trigger("ajaxStart"),
                    f.type = f.type.toUpperCase(),
                    f.hasContent = !yt.test(f.type),
                    i = f.url,
                    f.hasContent || (f.data && (i = f.url += (lt.test(i) ? "&" : "?") + f.data,
                        delete f.data),
                        f.cache === !1 && (f.url = pt.test(i) ? i.replace(pt, "$1_=" + ct++) : i + (lt.test(i) ? "&" : "?") + "_=" + ct++)),
                    f.ifModified && (K.lastModified[i] && _.setRequestHeader("If-Modified-Since", K.lastModified[i]),
                        K.etag[i] && _.setRequestHeader("If-None-Match", K.etag[i])),
                    (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", f.contentType),
                    _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : f.accepts["*"]);
                for (l in f.headers)
                    _.setRequestHeader(l, f.headers[l]);
                if (f.beforeSend && (f.beforeSend.call(d, _, f) === !1 || 2 === w))
                    return _.abort();
                b = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    _[l](f[l]);
                if (r = H(_t, f, t, _)) {
                    _.readyState = 1,
                        c && h.trigger("ajaxSend", [_, f]),
                        f.async && f.timeout > 0 && (s = setTimeout(function () {
                            _.abort("timeout")
                        }, f.timeout));
                    try {
                        w = 1,
                            r.send(y, n)
                    } catch (x) {
                        if (!(2 > w))
                            throw x;
                        n(-1, x)
                    }
                } else
                    n(-1, "No Transport");
                return _
            },
            getJSON: function (e, t, n) {
                return K.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return K.get(e, void 0, t, "script")
            }
        }),
        K.each(["get", "post"], function (e, t) {
            K[t] = function (e, n, r, i) {
                return K.isFunction(n) && (i = i || r,
                    r = n,
                    n = void 0),
                    K.ajax({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    })
            }
        }),
        K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            K.fn[t] = function (e) {
                return this.on(t, e)
            }
        }),
        K._evalUrl = function (e) {
            return K.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        K.fn.extend({
            wrapAll: function (e) {
                var t;
                return K.isFunction(e) ? this.each(function (t) {
                    K(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = K(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function () {
                        for (var e = this; e.firstElementChild;)
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this)
            },
            wrapInner: function (e) {
                return this.each(K.isFunction(e) ? function (t) {
                    K(this).wrapInner(e.call(this, t))
                }
                    : function () {
                        var t = K(this)
                            , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }
                )
            },
            wrap: function (e) {
                var t = K.isFunction(e);
                return this.each(function (n) {
                    K(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        K.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }
        ,
        K.expr.filters.visible = function (e) {
            return !K.expr.filters.hidden(e)
        }
        ;
    var kt = /%20/g
        , Dt = /\[\]$/
        , Ct = /\r?\n/g
        , Mt = /^(?:submit|button|image|reset|file)$/i
        , St = /^(?:input|select|textarea|keygen)/i;
    K.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = K.isFunction(t) ? t() : null == t ? "" : t,
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = K.ajaxSettings && K.ajaxSettings.traditional),
            K.isArray(e) || e.jquery && !K.isPlainObject(e))
            K.each(e, function () {
                i(this.name, this.value)
            });
        else
            for (n in e)
                q(n, e[n], t, i);
        return r.join("&").replace(kt, "+")
    }
        ,
        K.fn.extend({
            serialize: function () {
                return K.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = K.prop(this, "elements");
                    return e ? K.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !K(this).is(":disabled") && St.test(this.nodeName) && !Mt.test(e) && (this.checked || !ke.test(e))
                }).map(function (e, t) {
                    var n = K(this).val();
                    return null == n ? null : K.isArray(n) ? K.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(Ct, "\r\n")
                        }
                    }) : {
                            name: t.name,
                            value: n.replace(Ct, "\r\n")
                        }
                }).get()
            }
        }),
        K.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest
            } catch (e) { }
        }
        ;
    var Nt = 0
        , Et = {}
        , Yt = {
            0: 200,
            1223: 204
        }
        , Ot = K.ajaxSettings.xhr();
    e.ActiveXObject && K(e).on("unload", function () {
        for (var e in Et)
            Et[e]()
    }),
        Z.cors = !!Ot && "withCredentials" in Ot,
        Z.ajax = Ot = !!Ot,
        K.ajaxTransport(function (e) {
            var t;
            return Z.cors || Ot && !e.crossDomain ? {
                send: function (n, r) {
                    var i, o = e.xhr(), a = ++Nt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                        for (i in e.xhrFields)
                            o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                        e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)
                        o.setRequestHeader(i, n[i]);
                    t = function (e) {
                        return function () {
                            t && (delete Et[a],
                                t = o.onload = o.onerror = null,
                                "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Yt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                    text: o.responseText
                                } : void 0, o.getAllResponseHeaders()))
                        }
                    }
                        ,
                        o.onload = t(),
                        o.onerror = t("error"),
                        t = Et[a] = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (s) {
                        if (t)
                            throw s
                    }
                },
                abort: function () {
                    t && t()
                }
            } : void 0
        }),
        K.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (e) {
                    return K.globalEval(e),
                        e
                }
            }
        }),
        K.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
        }),
        K.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (r, i) {
                        t = K("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(),
                                n = null,
                                e && i("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                            J.head.appendChild(t[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            }
        });
    var jt = []
        , At = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = jt.pop() || K.expando + "_" + ct++;
            return this[e] = !0,
                e
        }
    }),
        K.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i, o, a, s = t.jsonp !== !1 && (At.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && At.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = K.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                s ? t[s] = t[s].replace(At, "$1" + i) : t.jsonp !== !1 && (t.url += (lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                t.converters["script json"] = function () {
                    return a || K.error(i + " was not called"),
                        a[0]
                }
                ,
                t.dataTypes[0] = "json",
                o = e[i],
                e[i] = function () {
                    a = arguments
                }
                ,
                r.always(function () {
                    e[i] = o,
                        t[i] && (t.jsonpCallback = n.jsonpCallback,
                            jt.push(i)),
                        a && K.isFunction(o) && o(a[0]),
                        a = o = void 0
                }),
                "script") : void 0
        }),
        K.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t,
                t = !1),
                t = t || J;
            var r = ae.exec(e)
                , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, i),
                i && i.length && K(i).remove(),
                K.merge([], r.childNodes))
        }
        ;
    var Lt = K.fn.load;
    K.fn.load = function (e, t, n) {
        if ("string" != typeof e && Lt)
            return Lt.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (r = K.trim(e.slice(s)),
            e = e.slice(0, s)),
            K.isFunction(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (i = "POST"),
            a.length > 0 && K.ajax({
                url: e,
                type: i,
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments,
                    a.html(r ? K("<div>").append(K.parseHTML(e)).find(r) : e)
            }).complete(n && function (e, t) {
                a.each(n, o || [e.responseText, t, e])
            }
            ),
            this
    }
        ,
        K.expr.filters.animated = function (e) {
            return K.grep(K.timers, function (t) {
                return e === t.elem
            }).length
        }
        ;
    var Ht = e.document.documentElement;
    K.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, c, l = K.css(e, "position"), f = K(e), d = {};
            "static" === l && (e.style.position = "relative"),
                s = f.offset(),
                o = K.css(e, "top"),
                u = K.css(e, "left"),
                c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1,
                c ? (r = f.position(),
                    a = r.top,
                    i = r.left) : (a = parseFloat(o) || 0,
                        i = parseFloat(u) || 0),
                K.isFunction(t) && (t = t.call(e, n, s)),
                null != t.top && (d.top = t.top - s.top + a),
                null != t.left && (d.left = t.left - s.left + i),
                "using" in t ? t.using.call(e, d) : f.css(d)
        }
    },
        K.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function (t) {
                        K.offset.setOffset(this, e, t)
                    });
                var t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                }, o = r && r.ownerDocument;
                return o ? (t = o.documentElement,
                    K.contains(t, r) ? (typeof r.getBoundingClientRect !== De && (i = r.getBoundingClientRect()),
                        n = I(o),
                    {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) : i) : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === K.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                        K.nodeName(e[0], "html") || (r = e.offset()),
                        r.top += K.css(e[0], "borderTopWidth", !0),
                        r.left += K.css(e[0], "borderLeftWidth", !0)),
                    {
                        top: t.top - r.top - K.css(n, "marginTop", !0),
                        left: t.left - r.left - K.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || Ht; e && !K.nodeName(e, "html") && "static" === K.css(e, "position");)
                        e = e.offsetParent;
                    return e || Ht
                })
            }
        }),
        K.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, n) {
            var r = "pageYOffset" === n;
            K.fn[t] = function (i) {
                return ge(this, function (t, i, o) {
                    var a = I(t);
                    return void 0 === o ? a ? a[n] : t[i] : void (a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }),
        K.each(["top", "left"], function (e, t) {
            K.cssHooks[t] = x(Z.pixelPosition, function (e, n) {
                return n ? (n = _(e, t),
                    Ue.test(n) ? K(e).position()[t] + "px" : n) : void 0
            })
        }),
        K.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            K.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, r) {
                K.fn[r] = function (r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r)
                        , a = n || (r === !0 || i === !0 ? "margin" : "border");
                    return ge(this, function (t, n, r) {
                        var i;
                        return K.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                            Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? K.css(t, n, a) : K.style(t, n, r, a)
                    }, t, o ? r : void 0, o, null)
                }
            })
        }),
        K.fn.size = function () {
            return this.length
        }
        ,
        K.fn.andSelf = K.fn.addBack,
        "function" == typeof define && define.amd && define("jquery", [], function () {
            return K
        });
    var Ft = e.jQuery
        , Pt = e.$;
    return K.noConflict = function (t) {
        return e.$ === K && (e.$ = Pt),
            t && e.jQuery === K && (e.jQuery = Ft),
            K
    }
        ,
        typeof t === De && (e.jQuery = e.$ = K),
        K
}),
    //! license : MIT
    //! momentjs.com
    function (e) {
        function t(e, t, n) {
            switch (arguments.length) {
                case 2:
                    return null != e ? e : t;
                case 3:
                    return null != e ? e : null != t ? t : n;
                default:
                    throw new Error("Implement me")
            }
        }
        function n(e, t) {
            return De.call(e, t)
        }
        function r() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }
        function i(e) {
            we.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }
        function o(e, t) {
            var n = !0;
            return d(function () {
                return n && (i(e),
                    n = !1),
                    t.apply(this, arguments)
            }, t)
        }
        function a(e, t) {
            gt[e] || (i(t),
                gt[e] = !0)
        }
        function s(e, t) {
            return function (n) {
                return m(e.call(this, n), t)
            }
        }
        function u(e, t) {
            return function (n) {
                return this.localeData().ordinal(e.call(this, n), t)
            }
        }
        function c() { }
        function l(e, t) {
            t !== !1 && Y(e),
                h(this, e),
                this._d = new Date(+e._d)
        }
        function f(e) {
            var t = k(e)
                , n = t.year || 0
                , r = t.quarter || 0
                , i = t.month || 0
                , o = t.week || 0
                , a = t.day || 0
                , s = t.hour || 0
                , u = t.minute || 0
                , c = t.second || 0
                , l = t.millisecond || 0;
            this._milliseconds = +l + 1e3 * c + 6e4 * u + 36e5 * s,
                this._days = +a + 7 * o,
                this._months = +i + 3 * r + 12 * n,
                this._data = {},
                this._locale = we.localeData(),
                this._bubble()
        }
        function d(e, t) {
            for (var r in t)
                n(t, r) && (e[r] = t[r]);
            return n(t, "toString") && (e.toString = t.toString),
                n(t, "valueOf") && (e.valueOf = t.valueOf),
                e
        }
        function h(e, t) {
            var n, r, i;
            if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject),
                "undefined" != typeof t._i && (e._i = t._i),
                "undefined" != typeof t._f && (e._f = t._f),
                "undefined" != typeof t._l && (e._l = t._l),
                "undefined" != typeof t._strict && (e._strict = t._strict),
                "undefined" != typeof t._tzm && (e._tzm = t._tzm),
                "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC),
                "undefined" != typeof t._offset && (e._offset = t._offset),
                "undefined" != typeof t._pf && (e._pf = t._pf),
                "undefined" != typeof t._locale && (e._locale = t._locale),
                Ae.length > 0)
                for (n in Ae)
                    r = Ae[n],
                        i = t[r],
                        "undefined" != typeof i && (e[r] = i);
            return e
        }
        function p(e) {
            return 0 > e ? Math.ceil(e) : Math.floor(e)
        }
        function m(e, t, n) {
            for (var r = "" + Math.abs(e), i = e >= 0; r.length < t;)
                r = "0" + r;
            return (i ? n ? "+" : "" : "-") + r
        }
        function g(e, t) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
                e.clone().add(n.months, "M").isAfter(t) && --n.months,
                n.milliseconds = +t - +e.clone().add(n.months, "M"),
                n
        }
        function y(e, t) {
            var n;
            return t = H(t, e),
                e.isBefore(t) ? n = g(e, t) : (n = g(t, e),
                    n.milliseconds = -n.milliseconds,
                    n.months = -n.months),
                n
        }
        function v(e, t) {
            return function (n, r) {
                var i, o;
                return null === r || isNaN(+r) || (a(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."),
                    o = n,
                    n = r,
                    r = o),
                    n = "string" == typeof n ? +n : n,
                    i = we.duration(n, r),
                    w(this, i, e),
                    this
            }
        }
        function w(e, t, n, r) {
            var i = t._milliseconds
                , o = t._days
                , a = t._months;
            r = null == r ? !0 : r,
                i && e._d.setTime(+e._d + i * n),
                o && he(e, "Date", de(e, "Date") + o * n),
                a && fe(e, de(e, "Month") + a * n),
                r && we.updateOffset(e, o || a)
        }
        function b(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        function _(e) {
            return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
        }
        function x(e, t, n) {
            var r, i = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), a = 0;
            for (r = 0; i > r; r++)
                (n && e[r] !== t[r] || !n && C(e[r]) !== C(t[r])) && a++;
            return a + o
        }
        function T(e) {
            if (e) {
                var t = e.toLowerCase().replace(/(.)s$/, "$1");
                e = ct[e] || lt[t] || t
            }
            return e
        }
        function k(e) {
            var t, r, i = {};
            for (r in e)
                n(e, r) && (t = T(r),
                    t && (i[t] = e[r]));
            return i
        }
        function D(t) {
            var n, r;
            if (0 === t.indexOf("week"))
                n = 7,
                    r = "day";
            else {
                if (0 !== t.indexOf("month"))
                    return;
                n = 12,
                    r = "month"
            }
            we[t] = function (i, o) {
                var a, s, u = we._locale[t], c = [];
                if ("number" == typeof i && (o = i,
                    i = e),
                    s = function (e) {
                        var t = we().utc().set(r, e);
                        return u.call(we._locale, t, i || "")
                    }
                    ,
                    null != o)
                    return s(o);
                for (a = 0; n > a; a++)
                    c.push(s(a));
                return c
            }
        }
        function C(e) {
            var t = +e
                , n = 0;
            return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)),
                n
        }
        function M(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }
        function S(e, t, n) {
            return se(we([e, 11, 31 + t - n]), t, n).week
        }
        function N(e) {
            return E(e) ? 366 : 365
        }
        function E(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }
        function Y(e) {
            var t;
            e._a && -2 === e._pf.overflow && (t = e._a[Me] < 0 || e._a[Me] > 11 ? Me : e._a[Se] < 1 || e._a[Se] > M(e._a[Ce], e._a[Me]) ? Se : e._a[Ne] < 0 || e._a[Ne] > 24 || 24 === e._a[Ne] && (0 !== e._a[Ee] || 0 !== e._a[Ye] || 0 !== e._a[Oe]) ? Ne : e._a[Ee] < 0 || e._a[Ee] > 59 ? Ee : e._a[Ye] < 0 || e._a[Ye] > 59 ? Ye : e._a[Oe] < 0 || e._a[Oe] > 999 ? Oe : -1,
                e._pf._overflowDayOfYear && (Ce > t || t > Se) && (t = Se),
                e._pf.overflow = t)
        }
        function O(t) {
            return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated,
                t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length && t._pf.bigHour === e)),
                t._isValid
        }
        function j(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }
        function A(e) {
            for (var t, n, r, i, o = 0; o < e.length;) {
                for (i = j(e[o]).split("-"),
                    t = i.length,
                    n = j(e[o + 1]),
                    n = n ? n.split("-") : null; t > 0;) {
                    if (r = L(i.slice(0, t).join("-")))
                        return r;
                    if (n && n.length >= t && x(i, n, !0) >= t - 1)
                        break;
                    t--
                }
                o++
            }
            return null
        }
        function L(e) {
            var t = null;
            if (!je[e] && Le)
                try {
                    t = we.locale(),
                        require("./locale/" + e),
                        we.locale(t)
                } catch (n) { }
            return je[e]
        }
        function H(e, t) {
            var n, r;
            return t._isUTC ? (n = t.clone(),
                r = (we.isMoment(e) || _(e) ? +e : +we(e)) - +n,
                n._d.setTime(+n._d + r),
                we.updateOffset(n, !1),
                n) : we(e).local()
        }
        function F(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }
        function P(e) {
            var t, n, r = e.match(We);
            for (t = 0,
                n = r.length; n > t; t++)
                r[t] = mt[r[t]] ? mt[r[t]] : F(r[t]);
            return function (i) {
                var o = "";
                for (t = 0; n > t; t++)
                    o += r[t] instanceof Function ? r[t].call(i, e) : r[t];
                return o
            }
        }
        function W(e, t) {
            return e.isValid() ? (t = q(t, e.localeData()),
                ft[t] || (ft[t] = P(t)),
                ft[t](e)) : e.localeData().invalidDate()
        }
        function q(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var r = 5;
            for (qe.lastIndex = 0; r >= 0 && qe.test(e);)
                e = e.replace(qe, n),
                    qe.lastIndex = 0,
                    r -= 1;
            return e
        }
        function I(e, t) {
            var n, r = t._strict;
            switch (e) {
                case "Q":
                    return Je;
                case "DDDD":
                    return Ke;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return r ? et : ze;
                case "Y":
                case "G":
                case "g":
                    return nt;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return r ? tt : Re;
                case "S":
                    if (r)
                        return Je;
                case "SS":
                    if (r)
                        return Qe;
                case "SSS":
                    if (r)
                        return Ke;
                case "DDD":
                    return Ue;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return $e;
                case "a":
                case "A":
                    return t._locale._meridiemParse;
                case "x":
                    return Ve;
                case "X":
                    return Ze;
                case "Z":
                case "ZZ":
                    return Be;
                case "T":
                    return Xe;
                case "SSSS":
                    return Ge;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return r ? Qe : Ie;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return Ie;
                case "Do":
                    return r ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
                default:
                    return n = new RegExp(Z(V(e.replace("\\", "")), "i"))
            }
        }
        function U(e) {
            e = e || "";
            var t = e.match(Be) || []
                , n = t[t.length - 1] || []
                , r = (n + "").match(st) || ["-", 0, 0]
                , i = +(60 * r[1]) + C(r[2]);
            return "+" === r[0] ? -i : i
        }
        function z(e, t, n) {
            var r, i = n._a;
            switch (e) {
                case "Q":
                    null != t && (i[Me] = 3 * (C(t) - 1));
                    break;
                case "M":
                case "MM":
                    null != t && (i[Me] = C(t) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    r = n._locale.monthsParse(t, e, n._strict),
                        null != r ? i[Me] = r : n._pf.invalidMonth = t;
                    break;
                case "D":
                case "DD":
                    null != t && (i[Se] = C(t));
                    break;
                case "Do":
                    null != t && (i[Se] = C(parseInt(t.match(/\d{1,2}/)[0], 10)));
                    break;
                case "DDD":
                case "DDDD":
                    null != t && (n._dayOfYear = C(t));
                    break;
                case "YY":
                    i[Ce] = we.parseTwoDigitYear(t);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    i[Ce] = C(t);
                    break;
                case "a":
                case "A":
                    n._isPm = n._locale.isPM(t);
                    break;
                case "h":
                case "hh":
                    n._pf.bigHour = !0;
                case "H":
                case "HH":
                    i[Ne] = C(t);
                    break;
                case "m":
                case "mm":
                    i[Ee] = C(t);
                    break;
                case "s":
                case "ss":
                    i[Ye] = C(t);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    i[Oe] = C(1e3 * ("0." + t));
                    break;
                case "x":
                    n._d = new Date(C(t));
                    break;
                case "X":
                    n._d = new Date(1e3 * parseFloat(t));
                    break;
                case "Z":
                case "ZZ":
                    n._useUTC = !0,
                        n._tzm = U(t);
                    break;
                case "dd":
                case "ddd":
                case "dddd":
                    r = n._locale.weekdaysParse(t),
                        null != r ? (n._w = n._w || {},
                            n._w.d = r) : n._pf.invalidWeekday = t;
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "e":
                case "E":
                    e = e.substr(0, 1);
                case "gggg":
                case "GGGG":
                case "GGGGG":
                    e = e.substr(0, 2),
                        t && (n._w = n._w || {},
                            n._w[e] = C(t));
                    break;
                case "gg":
                case "GG":
                    n._w = n._w || {},
                        n._w[e] = we.parseTwoDigitYear(t)
            }
        }
        function R(e) {
            var n, r, i, o, a, s, u;
            n = e._w,
                null != n.GG || null != n.W || null != n.E ? (a = 1,
                    s = 4,
                    r = t(n.GG, e._a[Ce], se(we(), 1, 4).year),
                    i = t(n.W, 1),
                    o = t(n.E, 1)) : (a = e._locale._week.dow,
                        s = e._locale._week.doy,
                        r = t(n.gg, e._a[Ce], se(we(), a, s).year),
                        i = t(n.w, 1),
                        null != n.d ? (o = n.d,
                            a > o && ++i) : o = null != n.e ? n.e + a : a),
                u = ue(r, i, o, s, a),
                e._a[Ce] = u.year,
                e._dayOfYear = u.dayOfYear
        }
        function G(e) {
            var n, r, i, o, a = [];
            if (!e._d) {
                for (i = B(e),
                    e._w && null == e._a[Se] && null == e._a[Me] && R(e),
                    e._dayOfYear && (o = t(e._a[Ce], i[Ce]),
                        e._dayOfYear > N(o) && (e._pf._overflowDayOfYear = !0),
                        r = re(o, 0, e._dayOfYear),
                        e._a[Me] = r.getUTCMonth(),
                        e._a[Se] = r.getUTCDate()),
                    n = 0; 3 > n && null == e._a[n]; ++n)
                    e._a[n] = a[n] = i[n];
                for (; 7 > n; n++)
                    e._a[n] = a[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
                24 === e._a[Ne] && 0 === e._a[Ee] && 0 === e._a[Ye] && 0 === e._a[Oe] && (e._nextDay = !0,
                    e._a[Ne] = 0),
                    e._d = (e._useUTC ? re : ne).apply(null, a),
                    null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() + e._tzm),
                    e._nextDay && (e._a[Ne] = 24)
            }
        }
        function $(e) {
            var t;
            e._d || (t = k(e._i),
                e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond],
                G(e))
        }
        function B(e) {
            var t = new Date;
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }
        function X(t) {
            if (t._f === we.ISO_8601)
                return void Q(t);
            t._a = [],
                t._pf.empty = !0;
            var n, r, i, o, a, s = "" + t._i, u = s.length, c = 0;
            for (i = q(t._f, t._locale).match(We) || [],
                n = 0; n < i.length; n++)
                o = i[n],
                    r = (s.match(I(o, t)) || [])[0],
                    r && (a = s.substr(0, s.indexOf(r)),
                        a.length > 0 && t._pf.unusedInput.push(a),
                        s = s.slice(s.indexOf(r) + r.length),
                        c += r.length),
                    mt[o] ? (r ? t._pf.empty = !1 : t._pf.unusedTokens.push(o),
                        z(o, r, t)) : t._strict && !r && t._pf.unusedTokens.push(o);
            t._pf.charsLeftOver = u - c,
                s.length > 0 && t._pf.unusedInput.push(s),
                t._pf.bigHour === !0 && t._a[Ne] <= 12 && (t._pf.bigHour = e),
                t._isPm && t._a[Ne] < 12 && (t._a[Ne] += 12),
                t._isPm === !1 && 12 === t._a[Ne] && (t._a[Ne] = 0),
                G(t),
                Y(t)
        }
        function V(e) {
            return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, r, i) {
                return t || n || r || i
            })
        }
        function Z(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        function J(e) {
            var t, n, i, o, a;
            if (0 === e._f.length)
                return e._pf.invalidFormat = !0,
                    void (e._d = new Date(NaN));
            for (o = 0; o < e._f.length; o++)
                a = 0,
                    t = h({}, e),
                    null != e._useUTC && (t._useUTC = e._useUTC),
                    t._pf = r(),
                    t._f = e._f[o],
                    X(t),
                    O(t) && (a += t._pf.charsLeftOver,
                        a += 10 * t._pf.unusedTokens.length,
                        t._pf.score = a,
                        (null == i || i > a) && (i = a,
                            n = t));
            d(e, n || t)
        }
        function Q(e) {
            var t, n, r = e._i, i = rt.exec(r);
            if (i) {
                for (e._pf.iso = !0,
                    t = 0,
                    n = ot.length; n > t; t++)
                    if (ot[t][1].exec(r)) {
                        e._f = ot[t][0] + (i[6] || " ");
                        break
                    }
                for (t = 0,
                    n = at.length; n > t; t++)
                    if (at[t][1].exec(r)) {
                        e._f += at[t][0];
                        break
                    }
                r.match(Be) && (e._f += "Z"),
                    X(e)
            } else
                e._isValid = !1
        }
        function K(e) {
            Q(e),
                e._isValid === !1 && (delete e._isValid,
                    we.createFromInputFallback(e))
        }
        function ee(e, t) {
            var n, r = [];
            for (n = 0; n < e.length; ++n)
                r.push(t(e[n], n));
            return r
        }
        function te(t) {
            var n, r = t._i;
            r === e ? t._d = new Date : _(r) ? t._d = new Date(+r) : null !== (n = He.exec(r)) ? t._d = new Date(+n[1]) : "string" == typeof r ? K(t) : b(r) ? (t._a = ee(r.slice(0), function (e) {
                return parseInt(e, 10)
            }),
                G(t)) : "object" == typeof r ? $(t) : "number" == typeof r ? t._d = new Date(r) : we.createFromInputFallback(t)
        }
        function ne(e, t, n, r, i, o, a) {
            var s = new Date(e, t, n, r, i, o, a);
            return 1970 > e && s.setFullYear(e),
                s
        }
        function re(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return 1970 > e && t.setUTCFullYear(e),
                t
        }
        function ie(e, t) {
            if ("string" == typeof e)
                if (isNaN(e)) {
                    if (e = t.weekdaysParse(e),
                        "number" != typeof e)
                        return null
                } else
                    e = parseInt(e, 10);
            return e
        }
        function oe(e, t, n, r, i) {
            return i.relativeTime(t || 1, !!n, e, r)
        }
        function ae(e, t, n) {
            var r = we.duration(e).abs()
                , i = ke(r.as("s"))
                , o = ke(r.as("m"))
                , a = ke(r.as("h"))
                , s = ke(r.as("d"))
                , u = ke(r.as("M"))
                , c = ke(r.as("y"))
                , l = i < dt.s && ["s", i] || 1 === o && ["m"] || o < dt.m && ["mm", o] || 1 === a && ["h"] || a < dt.h && ["hh", a] || 1 === s && ["d"] || s < dt.d && ["dd", s] || 1 === u && ["M"] || u < dt.M && ["MM", u] || 1 === c && ["y"] || ["yy", c];
            return l[2] = t,
                l[3] = +e > 0,
                l[4] = n,
                oe.apply({}, l)
        }
        function se(e, t, n) {
            var r, i = n - t, o = n - e.day();
            return o > i && (o -= 7),
                i - 7 > o && (o += 7),
                r = we(e).add(o, "d"),
            {
                week: Math.ceil(r.dayOfYear() / 7),
                year: r.year()
            }
        }
        function ue(e, t, n, r, i) {
            var o, a, s = re(e, 0, 1).getUTCDay();
            return s = 0 === s ? 7 : s,
                n = null != n ? n : i,
                o = i - s + (s > r ? 7 : 0) - (i > s ? 7 : 0),
                a = 7 * (t - 1) + (n - i) + o + 1,
            {
                year: a > 0 ? e : e - 1,
                dayOfYear: a > 0 ? a : N(e - 1) + a
            }
        }
        function ce(t) {
            var n, r = t._i, i = t._f;
            return t._locale = t._locale || we.localeData(t._l),
                null === r || i === e && "" === r ? we.invalid({
                    nullInput: !0
                }) : ("string" == typeof r && (t._i = r = t._locale.preparse(r)),
                    we.isMoment(r) ? new l(r, !0) : (i ? b(i) ? J(t) : X(t) : te(t),
                        n = new l(t),
                        n._nextDay && (n.add(1, "d"),
                            n._nextDay = e),
                        n))
        }
        function le(e, t) {
            var n, r;
            if (1 === t.length && b(t[0]) && (t = t[0]),
                !t.length)
                return we();
            for (n = t[0],
                r = 1; r < t.length; ++r)
                t[r][e](n) && (n = t[r]);
            return n
        }
        function fe(e, t) {
            var n;
            return "string" == typeof t && (t = e.localeData().monthsParse(t),
                "number" != typeof t) ? e : (n = Math.min(e.date(), M(e.year(), t)),
                    e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
                    e)
        }
        function de(e, t) {
            return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
        }
        function he(e, t, n) {
            return "Month" === t ? fe(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }
        function pe(e, t) {
            return function (n) {
                return null != n ? (he(this, e, n),
                    we.updateOffset(this, t),
                    this) : de(this, e)
            }
        }
        function me(e) {
            return 400 * e / 146097
        }
        function ge(e) {
            return 146097 * e / 400
        }
        function ye(e) {
            we.duration.fn[e] = function () {
                return this._data[e]
            }
        }
        function ve(e) {
            "undefined" == typeof ender && (be = Te.moment,
                Te.moment = e ? o("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", we) : we)
        }
        for (var we, be, _e, xe = "2.8.4", Te = "undefined" != typeof global ? global : this, ke = Math.round, De = Object.prototype.hasOwnProperty, Ce = 0, Me = 1, Se = 2, Ne = 3, Ee = 4, Ye = 5, Oe = 6, je = {}, Ae = [], Le = "undefined" != typeof module && module && module.exports, He = /^\/?Date\((\-?\d+)/i, Fe = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Pe = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, We = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, qe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ie = /\d\d?/, Ue = /\d{1,3}/, ze = /\d{1,4}/, Re = /[+\-]?\d{1,6}/, Ge = /\d+/, $e = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Be = /Z|[\+\-]\d\d:?\d\d/gi, Xe = /T/i, Ve = /[\+\-]?\d+/, Ze = /[\+\-]?\d+(\.\d{1,3})?/, Je = /\d/, Qe = /\d\d/, Ke = /\d{3}/, et = /\d{4}/, tt = /[+-]?\d{6}/, nt = /[+-]?\d+/, rt = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, it = "YYYY-MM-DDTHH:mm:ssZ", ot = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], at = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], st = /([\+\-]|\d\d)/gi, ut = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
        {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }), ct = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, lt = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, ft = {}, dt = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, ht = "DDD w W M D d".split(" "), pt = "M D H h m s w W".split(" "), mt = {
            M: function () {
                return this.month() + 1
            },
            MMM: function (e) {
                return this.localeData().monthsShort(this, e)
            },
            MMMM: function (e) {
                return this.localeData().months(this, e)
            },
            D: function () {
                return this.date()
            },
            DDD: function () {
                return this.dayOfYear()
            },
            d: function () {
                return this.day()
            },
            dd: function (e) {
                return this.localeData().weekdaysMin(this, e)
            },
            ddd: function (e) {
                return this.localeData().weekdaysShort(this, e)
            },
            dddd: function (e) {
                return this.localeData().weekdays(this, e)
            },
            w: function () {
                return this.week()
            },
            W: function () {
                return this.isoWeek()
            },
            YY: function () {
                return m(this.year() % 100, 2)
            },
            YYYY: function () {
                return m(this.year(), 4)
            },
            YYYYY: function () {
                return m(this.year(), 5)
            },
            YYYYYY: function () {
                var e = this.year()
                    , t = e >= 0 ? "+" : "-";
                return t + m(Math.abs(e), 6)
            },
            gg: function () {
                return m(this.weekYear() % 100, 2)
            },
            gggg: function () {
                return m(this.weekYear(), 4)
            },
            ggggg: function () {
                return m(this.weekYear(), 5)
            },
            GG: function () {
                return m(this.isoWeekYear() % 100, 2)
            },
            GGGG: function () {
                return m(this.isoWeekYear(), 4)
            },
            GGGGG: function () {
                return m(this.isoWeekYear(), 5)
            },
            e: function () {
                return this.weekday()
            },
            E: function () {
                return this.isoWeekday()
            },
            a: function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function () {
                return this.hours()
            },
            h: function () {
                return this.hours() % 12 || 12
            },
            m: function () {
                return this.minutes()
            },
            s: function () {
                return this.seconds()
            },
            S: function () {
                return C(this.milliseconds() / 100)
            },
            SS: function () {
                return m(C(this.milliseconds() / 10), 2)
            },
            SSS: function () {
                return m(this.milliseconds(), 3)
            },
            SSSS: function () {
                return m(this.milliseconds(), 3)
            },
            Z: function () {
                var e = -this.zone()
                    , t = "+";
                return 0 > e && (e = -e,
                    t = "-"),
                    t + m(C(e / 60), 2) + ":" + m(C(e) % 60, 2)
            },
            ZZ: function () {
                var e = -this.zone()
                    , t = "+";
                return 0 > e && (e = -e,
                    t = "-"),
                    t + m(C(e / 60), 2) + m(C(e) % 60, 2)
            },
            z: function () {
                return this.zoneAbbr()
            },
            zz: function () {
                return this.zoneName()
            },
            x: function () {
                return this.valueOf()
            },
            X: function () {
                return this.unix()
            },
            Q: function () {
                return this.quarter()
            }
        }, gt = {}, yt = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; ht.length;)
            _e = ht.pop(),
                mt[_e + "o"] = u(mt[_e], _e);
        for (; pt.length;)
            _e = pt.pop(),
                mt[_e + _e] = s(mt[_e], 2);
        mt.DDDD = s(mt.DDD, 3),
            d(c.prototype, {
                set: function (e) {
                    var t, n;
                    for (n in e)
                        t = e[n],
                            "function" == typeof t ? this[n] = t : this["_" + n] = t;
                    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
                },
                _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                months: function (e) {
                    return this._months[e.month()]
                },
                _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                monthsShort: function (e) {
                    return this._monthsShort[e.month()]
                },
                monthsParse: function (e, t, n) {
                    var r, i, o;
                    for (this._monthsParse || (this._monthsParse = [],
                        this._longMonthsParse = [],
                        this._shortMonthsParse = []),
                        r = 0; 12 > r; r++) {
                        if (i = we.utc([2e3, r]),
                            n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"),
                                this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")),
                            n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""),
                                this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")),
                            n && "MMMM" === t && this._longMonthsParse[r].test(e))
                            return r;
                        if (n && "MMM" === t && this._shortMonthsParse[r].test(e))
                            return r;
                        if (!n && this._monthsParse[r].test(e))
                            return r
                    }
                },
                _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdays: function (e) {
                    return this._weekdays[e.day()]
                },
                _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysShort: function (e) {
                    return this._weekdaysShort[e.day()]
                },
                _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                weekdaysMin: function (e) {
                    return this._weekdaysMin[e.day()]
                },
                weekdaysParse: function (e) {
                    var t, n, r;
                    for (this._weekdaysParse || (this._weekdaysParse = []),
                        t = 0; 7 > t; t++)
                        if (this._weekdaysParse[t] || (n = we([2e3, 1]).day(t),
                            r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""),
                            this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i")),
                            this._weekdaysParse[t].test(e))
                            return t
                },
                _longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY LT",
                    LLLL: "dddd, MMMM D, YYYY LT"
                },
                longDateFormat: function (e) {
                    var t = this._longDateFormat[e];
                    return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (e) {
                        return e.slice(1)
                    }),
                        this._longDateFormat[e] = t),
                        t
                },
                isPM: function (e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                },
                _meridiemParse: /[ap]\.?m?\.?/i,
                meridiem: function (e, t, n) {
                    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                },
                _calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                calendar: function (e, t, n) {
                    var r = this._calendar[e];
                    return "function" == typeof r ? r.apply(t, [n]) : r
                },
                _relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                relativeTime: function (e, t, n, r) {
                    var i = this._relativeTime[n];
                    return "function" == typeof i ? i(e, t, n, r) : i.replace(/%d/i, e)
                },
                pastFuture: function (e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
                },
                ordinal: function (e) {
                    return this._ordinal.replace("%d", e)
                },
                _ordinal: "%d",
                _ordinalParse: /\d{1,2}/,
                preparse: function (e) {
                    return e
                },
                postformat: function (e) {
                    return e
                },
                week: function (e) {
                    return se(e, this._week.dow, this._week.doy).week
                },
                _week: {
                    dow: 0,
                    doy: 6
                },
                _invalidDate: "Invalid date",
                invalidDate: function () {
                    return this._invalidDate
                }
            }),
            we = function (t, n, i, o) {
                var a;
                return "boolean" == typeof i && (o = i,
                    i = e),
                    a = {},
                    a._isAMomentObject = !0,
                    a._i = t,
                    a._f = n,
                    a._l = i,
                    a._strict = o,
                    a._isUTC = !1,
                    a._pf = r(),
                    ce(a)
            }
            ,
            we.suppressDeprecationWarnings = !1,
            we.createFromInputFallback = o("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }),
            we.min = function () {
                var e = [].slice.call(arguments, 0);
                return le("isBefore", e)
            }
            ,
            we.max = function () {
                var e = [].slice.call(arguments, 0);
                return le("isAfter", e)
            }
            ,
            we.utc = function (t, n, i, o) {
                var a;
                return "boolean" == typeof i && (o = i,
                    i = e),
                    a = {},
                    a._isAMomentObject = !0,
                    a._useUTC = !0,
                    a._isUTC = !0,
                    a._l = i,
                    a._i = t,
                    a._f = n,
                    a._strict = o,
                    a._pf = r(),
                    ce(a).utc()
            }
            ,
            we.unix = function (e) {
                return we(1e3 * e)
            }
            ,
            we.duration = function (e, t) {
                var r, i, o, a, s = e, u = null;
                return we.isDuration(e) ? s = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : "number" == typeof e ? (s = {},
                    t ? s[t] = e : s.milliseconds = e) : (u = Fe.exec(e)) ? (r = "-" === u[1] ? -1 : 1,
                        s = {
                            y: 0,
                            d: C(u[Se]) * r,
                            h: C(u[Ne]) * r,
                            m: C(u[Ee]) * r,
                            s: C(u[Ye]) * r,
                            ms: C(u[Oe]) * r
                        }) : (u = Pe.exec(e)) ? (r = "-" === u[1] ? -1 : 1,
                            o = function (e) {
                                var t = e && parseFloat(e.replace(",", "."));
                                return (isNaN(t) ? 0 : t) * r
                            }
                            ,
                            s = {
                                y: o(u[2]),
                                M: o(u[3]),
                                d: o(u[4]),
                                h: o(u[5]),
                                m: o(u[6]),
                                s: o(u[7]),
                                w: o(u[8])
                            }) : "object" == typeof s && ("from" in s || "to" in s) && (a = y(we(s.from), we(s.to)),
                                s = {},
                                s.ms = a.milliseconds,
                                s.M = a.months),
                    i = new f(s),
                    we.isDuration(e) && n(e, "_locale") && (i._locale = e._locale),
                    i
            }
            ,
            we.version = xe,
            we.defaultFormat = it,
            we.ISO_8601 = function () { }
            ,
            we.momentProperties = Ae,
            we.updateOffset = function () { }
            ,
            we.relativeTimeThreshold = function (t, n) {
                return dt[t] === e ? !1 : n === e ? dt[t] : (dt[t] = n,
                    !0)
            }
            ,
            we.lang = o("moment.lang is deprecated. Use moment.locale instead.", function (e, t) {
                return we.locale(e, t)
            }),
            we.locale = function (e, t) {
                var n;
                return e && (n = "undefined" != typeof t ? we.defineLocale(e, t) : we.localeData(e),
                    n && (we.duration._locale = we._locale = n)),
                    we._locale._abbr
            }
            ,
            we.defineLocale = function (e, t) {
                return null !== t ? (t.abbr = e,
                    je[e] || (je[e] = new c),
                    je[e].set(t),
                    we.locale(e),
                    je[e]) : (delete je[e],
                        null)
            }
            ,
            we.langData = o("moment.langData is deprecated. Use moment.localeData instead.", function (e) {
                return we.localeData(e)
            }),
            we.localeData = function (e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
                    !e)
                    return we._locale;
                if (!b(e)) {
                    if (t = L(e))
                        return t;
                    e = [e]
                }
                return A(e)
            }
            ,
            we.isMoment = function (e) {
                return e instanceof l || null != e && n(e, "_isAMomentObject")
            }
            ,
            we.isDuration = function (e) {
                return e instanceof f
            }
            ;
        for (_e = yt.length - 1; _e >= 0; --_e)
            D(yt[_e]);
        we.normalizeUnits = function (e) {
            return T(e)
        }
            ,
            we.invalid = function (e) {
                var t = we.utc(NaN);
                return null != e ? d(t._pf, e) : t._pf.userInvalidated = !0,
                    t
            }
            ,
            we.parseZone = function () {
                return we.apply(null, arguments).parseZone()
            }
            ,
            we.parseTwoDigitYear = function (e) {
                return C(e) + (C(e) > 68 ? 1900 : 2e3)
            }
            ,
            d(we.fn = l.prototype, {
                clone: function () {
                    return we(this)
                },
                valueOf: function () {
                    return +this._d + 6e4 * (this._offset || 0)
                },
                unix: function () {
                    return Math.floor(+this / 1e3)
                },
                toString: function () {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                },
                toDate: function () {
                    return this._offset ? new Date(+this) : this._d
                },
                toISOString: function () {
                    var e = we(this).utc();
                    return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : W(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : W(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                },
                toArray: function () {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
                },
                isValid: function () {
                    return O(this)
                },
                isDSTShifted: function () {
                    return this._a ? this.isValid() && x(this._a, (this._isUTC ? we.utc(this._a) : we(this._a)).toArray()) > 0 : !1
                },
                parsingFlags: function () {
                    return d({}, this._pf)
                },
                invalidAt: function () {
                    return this._pf.overflow
                },
                utc: function (e) {
                    return this.zone(0, e)
                },
                local: function (e) {
                    return this._isUTC && (this.zone(0, e),
                        this._isUTC = !1,
                        e && this.add(this._dateTzOffset(), "m")),
                        this
                },
                format: function (e) {
                    var t = W(this, e || we.defaultFormat);
                    return this.localeData().postformat(t)
                },
                add: v(1, "add"),
                subtract: v(-1, "subtract"),
                diff: function (e, t, n) {
                    var r, i, o, a = H(e, this), s = 6e4 * (this.zone() - a.zone());
                    return t = T(t),
                        "year" === t || "month" === t ? (r = 432e5 * (this.daysInMonth() + a.daysInMonth()),
                            i = 12 * (this.year() - a.year()) + (this.month() - a.month()),
                            o = this - we(this).startOf("month") - (a - we(a).startOf("month")),
                            o -= 6e4 * (this.zone() - we(this).startOf("month").zone() - (a.zone() - we(a).startOf("month").zone())),
                            i += o / r,
                            "year" === t && (i /= 12)) : (r = this - a,
                                i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - s) / 864e5 : "week" === t ? (r - s) / 6048e5 : r),
                        n ? i : p(i)
                },
                from: function (e, t) {
                    return we.duration({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t)
                },
                fromNow: function (e) {
                    return this.from(we(), e)
                },
                calendar: function (e) {
                    var t = e || we()
                        , n = H(t, this).startOf("day")
                        , r = this.diff(n, "days", !0)
                        , i = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
                    return this.format(this.localeData().calendar(i, this, we(t)))
                },
                isLeapYear: function () {
                    return E(this.year())
                },
                isDST: function () {
                    return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
                },
                day: function (e) {
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = ie(e, this.localeData()),
                        this.add(e - t, "d")) : t
                },
                month: pe("Month", !0),
                startOf: function (e) {
                    switch (e = T(e)) {
                        case "year":
                            this.month(0);
                        case "quarter":
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1),
                        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
                        this
                },
                endOf: function (t) {
                    return t = T(t),
                        t === e || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
                },
                isAfter: function (e, t) {
                    var n;
                    return t = T("undefined" != typeof t ? t : "millisecond"),
                        "millisecond" === t ? (e = we.isMoment(e) ? e : we(e),
                            +this > +e) : (n = we.isMoment(e) ? +e : +we(e),
                                n < +this.clone().startOf(t))
                },
                isBefore: function (e, t) {
                    var n;
                    return t = T("undefined" != typeof t ? t : "millisecond"),
                        "millisecond" === t ? (e = we.isMoment(e) ? e : we(e),
                            +e > +this) : (n = we.isMoment(e) ? +e : +we(e),
                                +this.clone().endOf(t) < n)
                },
                isSame: function (e, t) {
                    var n;
                    return t = T(t || "millisecond"),
                        "millisecond" === t ? (e = we.isMoment(e) ? e : we(e),
                            +this === +e) : (n = +we(e),
                                +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
                },
                min: o("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (e) {
                    return e = we.apply(null, arguments),
                        this > e ? this : e
                }),
                max: o("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (e) {
                    return e = we.apply(null, arguments),
                        e > this ? this : e
                }),
                zone: function (e, t) {
                    var n, r = this._offset || 0;
                    return null == e ? this._isUTC ? r : this._dateTzOffset() : ("string" == typeof e && (e = U(e)),
                        Math.abs(e) < 16 && (e = 60 * e),
                        !this._isUTC && t && (n = this._dateTzOffset()),
                        this._offset = e,
                        this._isUTC = !0,
                        null != n && this.subtract(n, "m"),
                        r !== e && (!t || this._changeInProgress ? w(this, we.duration(r - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                            we.updateOffset(this, !0),
                            this._changeInProgress = null)),
                        this)
                },
                zoneAbbr: function () {
                    return this._isUTC ? "UTC" : ""
                },
                zoneName: function () {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                },
                parseZone: function () {
                    return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i),
                        this
                },
                hasAlignedHourOffset: function (e) {
                    return e = e ? we(e).zone() : 0,
                        (this.zone() - e) % 60 === 0
                },
                daysInMonth: function () {
                    return M(this.year(), this.month())
                },
                dayOfYear: function (e) {
                    var t = ke((we(this).startOf("day") - we(this).startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                },
                quarter: function (e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                },
                weekYear: function (e) {
                    var t = se(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                    return null == e ? t : this.add(e - t, "y")
                },
                isoWeekYear: function (e) {
                    var t = se(this, 1, 4).year;
                    return null == e ? t : this.add(e - t, "y")
                },
                week: function (e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add(7 * (e - t), "d")
                },
                isoWeek: function (e) {
                    var t = se(this, 1, 4).week;
                    return null == e ? t : this.add(7 * (e - t), "d")
                },
                weekday: function (e) {
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? t : this.add(e - t, "d")
                },
                isoWeekday: function (e) {
                    return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
                },
                isoWeeksInYear: function () {
                    return S(this.year(), 1, 4)
                },
                weeksInYear: function () {
                    var e = this.localeData()._week;
                    return S(this.year(), e.dow, e.doy)
                },
                get: function (e) {
                    return e = T(e),
                        this[e]()
                },
                set: function (e, t) {
                    return e = T(e),
                        "function" == typeof this[e] && this[e](t),
                        this
                },
                locale: function (t) {
                    var n;
                    return t === e ? this._locale._abbr : (n = we.localeData(t),
                        null != n && (this._locale = n),
                        this)
                },
                lang: o("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
                    return t === e ? this.localeData() : this.locale(t)
                }),
                localeData: function () {
                    return this._locale
                },
                _dateTzOffset: function () {
                    return 15 * Math.round(this._d.getTimezoneOffset() / 15)
                }
            }),
            we.fn.millisecond = we.fn.milliseconds = pe("Milliseconds", !1),
            we.fn.second = we.fn.seconds = pe("Seconds", !1),
            we.fn.minute = we.fn.minutes = pe("Minutes", !1),
            we.fn.hour = we.fn.hours = pe("Hours", !0),
            we.fn.date = pe("Date", !0),
            we.fn.dates = o("dates accessor is deprecated. Use date instead.", pe("Date", !0)),
            we.fn.year = pe("FullYear", !0),
            we.fn.years = o("years accessor is deprecated. Use year instead.", pe("FullYear", !0)),
            we.fn.days = we.fn.day,
            we.fn.months = we.fn.month,
            we.fn.weeks = we.fn.week,
            we.fn.isoWeeks = we.fn.isoWeek,
            we.fn.quarters = we.fn.quarter,
            we.fn.toJSON = we.fn.toISOString,
            d(we.duration.fn = f.prototype, {
                _bubble: function () {
                    var e, t, n, r = this._milliseconds, i = this._days, o = this._months, a = this._data, s = 0;
                    a.milliseconds = r % 1e3,
                        e = p(r / 1e3),
                        a.seconds = e % 60,
                        t = p(e / 60),
                        a.minutes = t % 60,
                        n = p(t / 60),
                        a.hours = n % 24,
                        i += p(n / 24),
                        s = p(me(i)),
                        i -= p(ge(s)),
                        o += p(i / 30),
                        i %= 30,
                        s += p(o / 12),
                        o %= 12,
                        a.days = i,
                        a.months = o,
                        a.years = s
                },
                abs: function () {
                    return this._milliseconds = Math.abs(this._milliseconds),
                        this._days = Math.abs(this._days),
                        this._months = Math.abs(this._months),
                        this._data.milliseconds = Math.abs(this._data.milliseconds),
                        this._data.seconds = Math.abs(this._data.seconds),
                        this._data.minutes = Math.abs(this._data.minutes),
                        this._data.hours = Math.abs(this._data.hours),
                        this._data.months = Math.abs(this._data.months),
                        this._data.years = Math.abs(this._data.years),
                        this
                },
                weeks: function () {
                    return p(this.days() / 7)
                },
                valueOf: function () {
                    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12)
                },
                humanize: function (e) {
                    var t = ae(this, !e, this.localeData());
                    return e && (t = this.localeData().pastFuture(+this, t)),
                        this.localeData().postformat(t)
                },
                add: function (e, t) {
                    var n = we.duration(e, t);
                    return this._milliseconds += n._milliseconds,
                        this._days += n._days,
                        this._months += n._months,
                        this._bubble(),
                        this
                },
                subtract: function (e, t) {
                    var n = we.duration(e, t);
                    return this._milliseconds -= n._milliseconds,
                        this._days -= n._days,
                        this._months -= n._months,
                        this._bubble(),
                        this
                },
                get: function (e) {
                    return e = T(e),
                        this[e.toLowerCase() + "s"]()
                },
                as: function (e) {
                    var t, n;
                    if (e = T(e),
                        "month" === e || "year" === e)
                        return t = this._days + this._milliseconds / 864e5,
                            n = this._months + 12 * me(t),
                            "month" === e ? n : n / 12;
                    switch (t = this._days + Math.round(ge(this._months / 12)),
                    e) {
                        case "week":
                            return t / 7 + this._milliseconds / 6048e5;
                        case "day":
                            return t + this._milliseconds / 864e5;
                        case "hour":
                            return 24 * t + this._milliseconds / 36e5;
                        case "minute":
                            return 24 * t * 60 + this._milliseconds / 6e4;
                        case "second":
                            return 24 * t * 60 * 60 + this._milliseconds / 1e3;
                        case "millisecond":
                            return Math.floor(24 * t * 60 * 60 * 1e3) + this._milliseconds;
                        default:
                            throw new Error("Unknown unit " + e)
                    }
                },
                lang: we.fn.lang,
                locale: we.fn.locale,
                toIsoString: o("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
                    return this.toISOString()
                }),
                toISOString: function () {
                    var e = Math.abs(this.years())
                        , t = Math.abs(this.months())
                        , n = Math.abs(this.days())
                        , r = Math.abs(this.hours())
                        , i = Math.abs(this.minutes())
                        , o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                    return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || o ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (o ? o + "S" : "") : "P0D"
                },
                localeData: function () {
                    return this._locale
                }
            }),
            we.duration.fn.toString = we.duration.fn.toISOString;
        for (_e in ut)
            n(ut, _e) && ye(_e.toLowerCase());
        we.duration.fn.asMilliseconds = function () {
            return this.as("ms")
        }
            ,
            we.duration.fn.asSeconds = function () {
                return this.as("s")
            }
            ,
            we.duration.fn.asMinutes = function () {
                return this.as("m")
            }
            ,
            we.duration.fn.asHours = function () {
                return this.as("h")
            }
            ,
            we.duration.fn.asDays = function () {
                return this.as("d")
            }
            ,
            we.duration.fn.asWeeks = function () {
                return this.as("weeks")
            }
            ,
            we.duration.fn.asMonths = function () {
                return this.as("M")
            }
            ,
            we.duration.fn.asYears = function () {
                return this.as("y")
            }
            ,
            we.locale("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                    var t = e % 10
                        , n = 1 === C(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            }),
            Le ? module.exports = we : "function" == typeof define && define.amd ? (define("moment", function (e, t, n) {
                return n.config && n.config() && n.config().noGlobal === !0 && (Te.moment = be),
                    we
            }),
                ve(!0)) : ve()
    }
        .call(this),
    function (e, t) {
        var n = function () {
            var n = {
                defaultImagesCount: 3,
                renderInterval: 1e4,
                copy: {
                    url: "http://shutr.bz/tab",
                    copyText: "Copy Link",
                    copiedText: "Copied!",
                    text: 'Show off your new tab experience!<br><a href="http://shutr.bz/tab">shutr.bz/tab</a>',
                    revertTime: 2e3
                },
                photo: {
                    endpoint: "http://tab.shutterstock.com/photos",
                    waitTime: 2e3
                },
                country: {
                    waitTime: 2e3
                },
                favicon: {
                    endpoint: "http://www.google.com/s2/favicons?domain_url="
                },
                search: {
                    waitTime: 500
                },
                time: {
                    pollInterval: 100,
                    format: {
                        time12: "h:mm",
                        time24: "HH:mm",
                        timePeriod: "a",
                        date: "dddd, MMMM D"
                    },
                    twelveHourCountries: ["US", "UK", "PH", "CA", "AU", "NZ", "IN", "EG", "SA", "CO", "PK", "MY"]
                },
                weather: {
                    endpoint: "http://tab.shutterstock.com/weather",
                    citation: '<br /><span><a href="http://forecast.io">Powered by Forecast</a></span>',
                    change: '<br /><a href="#" class="location-change">Change</a>',
                    reset: '<span> | </span><a href="#" class="location-reset">Reset</a>',
                    days: 5,
                    cacheTime: 9e5,
                    prefix: {
                        morning: "Good morning! It is ",
                        afternoon: "Good afternoon! It is ",
                        evening: "Good evening! It is ",
                        general: "Hello! It is "
                    },
                    suffix: {
                        morning: ".",
                        afternoon: ".",
                        evening: ".",
                        general: "."
                    },
                    imperialCountries: ["US", "BS", "BZ", "KY", "PW"]
                },
                referrer: {
                    key: "pl",
                    contributor: "sstktab-contributor",
                    picture: "sstktab-picture"
                },
                sites: {
                    count: 10,
                    eventName: "sites.link"
                },
                location: {
                    endpoint: "http://tab.shutterstock.com/location?address="
                },
                social: {
                    copy: "I love #shutterstock-tab for Chrome - brighten up your day with a new image every tab. shutr.bz/tab"
                },
                defaults: {
                    country: "US",
                    date: 1,
                    image: !1,
                    modified: !1,
                    notifications: {},
                    time: {
                        format: 12
                    },
                    sites: !0,
                    weather: {
                        enabled: 1,
                        extended: !0,
                        format: "imperial"
                    },
                    location: {}
                }
            }
                , r = {
                    body: t("body"),
                    background: t(".background"),
                    date: t(".date"),
                    time: {
                        container: t(".time"),
                        value: t(".time-value"),
                        period: t(".time-period")
                    },
                    metadata: {
                        container: t(".metadata"),
                        logo: t(".logo"),
                        name: t(".name"),
                        contributor: t(".contributor"),
                        similar: t(".similar")
                    },
                    weather: {
                        container: t(".weather"),
                        forecast: t(".weather-forecast"),
                        list: t(".weather-forecast ul"),
                        conditions: t(".weather-conditions"),
                        trigger: t(".weather-trigger")
                    },
                    search: {
                        container: t(".search"),
                        trigger: t(".search-icon"),
                        input: t(".search input"),
                        form: t(".search form")
                    },
                    sites: {
                        container: t(".sites"),
                        list: t(".sites ul")
                    },
                    options: {
                        trigger: {
                            icon: t(".options-trigger .animate"),
                            container: t(".options-trigger"),
                            location: t(".options-trigger-location")
                        },
                        panel: t(".options"),
                        tip: t(".options-tip"),
                        time: t(".options-time"),
                        weather: t(".options-weather"),
                        location: {
                            text: t(".options-location"),
                            change: t(".options-location-change"),
                            input: t(".options-location-input"),
                            form: t(".options-location-form")
                        },
                        share: {
                            text: t(".share-text"),
                            copy: t(".copy-url")
                        },
                        triggers: {
                            showTime: t(".options-time"),
                            showDate: t(".options-date"),
                            showWeather: t(".options-weather"),
                            timeFormat: t(".options-time-format"),
                            weatherFormat: t(".options-weather-format")
                        }
                    }
                }
                , i = {
                    init: function () {
                        a.cloud.get(function (e) {
                            var t = function () {
                                i.get(function (e, t) {
                                    a.cloud.get(function (n) {
                                        n.image = e || {},
                                            a.cloud.set(n),
                                            a.local.set({
                                                id: e.id,
                                                base64: t
                                            })
                                    })
                                }, !0)
                            };
                            e.image ? (t(),
                                a.local.get(function (t) {
                                    i.set(t.base64 ? t.base64 : e.image.image_url_proxy),
                                        e.image.id === t.id ? o.set(e.image) : o.set(null),
                                        p.init()
                                }
                                )) : i.get(function (e) {
                                    i.set(e.image_url_proxy),
                                        o.set(e),
                                        p.init(),
                                        t()
                                })
                        })
                    },
                    get: function (e, r) {
                        var i = !1
                            , o = this;
                        if (!r)
                            var a = setTimeout(function () {
                                return i = !0,
                                    e(!1)
                            }, n.photo.waitTime);
                        t.getJSON(n.photo.endpoint, function (t) {
                            if (t && !i) {
                                var n = new Image;
                                n.onload = function () {
                                    return clearTimeout(a),
                                        i ? void 0 : e(t, o.base64(n))
                                }
                                    ,
                                    n.src = t.image_url_proxy
                            }
                        }).fail(function () { })
                    },
                    set: function (e) {
                        e ? r.background.css({
                            backgroundImage: "url(" + e + ")"
                        }) : r.background.css({
                            backgroundImage: "url(/assets/img/default/" + Math.floor(Math.random() * n.defaultImagesCount + 1) + ".jpg)"
                        }),
                            r.body.addClass("loaded")
                    },
                    base64: function (e) {
                        var t = document.createElement("canvas")
                            , n = t.getContext("2d");
                        return t.width = e.width,
                            t.height = e.height,
                            n.drawImage(e, 0, 0),
                            t.toDataURL("image/jpeg")
                    }
                }
                , o = {
                    set: function (e) {
                        return e && e.image_name && e.contributor_name && e.contributor_id && e.image_link && e.image_similar_link ? (r.metadata.name.text(e.image_name),
                            r.metadata.contributor.text(e.contributor_name),
                            r.metadata.contributor.attr("href", "http://www.shutterstock.com/gallery-" + e.contributor_id + ".html?" + n.referrer.key + "=" + n.referrer.contributor),
                            r.metadata.similar.attr("href", e.image_similar_link + "&" + n.referrer.key + "=" + n.referrer.picture),
                            r.metadata.logo.attr("href", e.image_link + "&" + n.referrer.key + "=" + n.referrer.picture),
                            r.metadata.name.attr("href", e.image_link + "&" + n.referrer.key + "=" + n.referrer.picture),
                            r.metadata.container.addClass("opaque"),
                            void r.metadata.container.removeClass("hidden")) : void r.metadata.container.addClass("hidden")
                    }
                }
                , a = {
                    local: {
                        set: function (e, t) {
                            chrome.storage.local.set(e, t)
                        },
                        get: function (e) {
                            chrome.storage.local.get(e)
                        },
                        clear: function () {
                            chrome.storage.local.clear()
                        }
                    },
                    cloud: {
                        set: function (e, t) {
                            e.modified = !0,
                                chrome.storage.sync.set(e, t)
                        },
                        get: function (e) {
                            chrome.storage.sync.get(n.defaults, e)
                        },
                        clear: function () {
                            chrome.storage.sync.clear()
                        },
                        sync: function (e, t) {
                            this.get(function (r) {
                                r.country = e,
                                    -1 === n.time.twelveHourCountries.indexOf(e) && (r.time.format = 24),
                                    -1 === n.weather.imperialCountries.indexOf(e) && (r.weather.format = "metric"),
                                    a.cloud.set(r, function () {
                                        t(r)
                                    })
                            })
                        }
                    }
                }
                , s = {
                    timer: null,
                    set: function (e) {
                        var t = null
                            , i = "12-ampm" === e;
                        e = parseInt(e),
                            e || (e = n.time.twelveHourCountries[n.defaults.country] ? 12 : 24),
                            s.clear(),
                            this.timer = setInterval(function () {
                                t = moment(),
                                    12 === e && i ? r.time.period.removeClass("hidden") : r.time.period.addClass("hidden"),
                                    r.time.value.text(t.format(n.time.format["time" + e])),
                                    r.time.period.text(t.format(n.time.format.timePeriod)),
                                    r.date.text(t.format(n.time.format.date))
                            }, n.time.pollInterval)
                    },
                    clear: function () {
                        clearInterval(this.timer)
                    },
                    hour: function () {
                        return now = moment(),
                            now.format("H")
                    }
                }
                , u = {
                    get: function (e, r) {
                        a.local.get(function (i) {
                            var o = (new Date).getTime()
                                , s = "";
                            i.weather && i.weather.data && i.weather.updated && o - i.weather.updated <= n.weather.cacheTime && !r ? e(i.weather.data) : (i.location && i.location.latitude && i.location.longitude && (s = "?latitude=" + i.location.latitude + "&longitude=" + i.location.longitude),
                                t.getJSON(n.weather.endpoint + s, function (t) {
                                    t && t.forecast && t.current && (i.weather = {},
                                        i.weather.data = t,
                                        i.weather.updated = (new Date).getTime(),
                                        a.local.set(i, function () {
                                            e(t)
                                        }))
                                }).fail(function () { }))
                        })
                    },
                    set: function (t, i) {
                        var o = this;
                        t || (t = n.weather.imperialCountries[n.country] ? "imperial" : "metric"),
                            o.get(function (i) {
                                var c = i.forecast.slice(0, n.weather.days)
                                    , l = "imperial" === t ? Math.round(i.current.temperature) : o.fahrenheitToCelsius(i.current.temperature)
                                    , f = ""
                                    , d = ""
                                    , h = ""
                                    , p = s.hour();
                                u.clear(),
                                    e.Tab && e.Tab.weather && i.current.icon && (f = e.Tab.weather[i.current.icon].copy),
                                    i.location && ("US" == i.location.country_code || "United States" == i.location.country || "US" == i.location.country ? (i.location.city && (h += ", " + i.location.city),
                                        i.location.state && (h += ", " + i.location.state)) : (i.location.city && (h += ", " + i.location.city),
                                            i.location.state && !i.location.city && (h += ", " + i.location.state),
                                            i.location.country && (h += ", " + i.location.country)),
                                        h = h.replace(", ", ""),
                                        r.options.trigger.location.html(h + n.weather.citation),
                                        r.options.location.text.html(h + n.weather.change),
                                        a.local.get(function (e) {
                                            e.location && e.location.latitude && e.location.longitude && r.options.location.text.append(n.weather.reset)
                                        })),
                                    c.forEach(function (n, a) {
                                        var s = ""
                                            , u = moment().add(a, "days").calendar().split(" ")[0]
                                            , c = "imperial" === t ? Math.round(n.min_temp) : o.fahrenheitToCelsius(n.min_temp)
                                            , l = "imperial" === t ? Math.round(n.max_temp) : o.fahrenheitToCelsius(n.max_temp);
                                        e.Tab && e.Tab.weather && e.Tab.weather[n.icon] && (0 === a && e.Tab.weather[i.current.icon].icon ? s = '<img src="assets/img/weather/' + e.Tab.weather[i.current.icon].icon + '.png">' : e.Tab.weather[n.icon] && (s = '<img src="assets/img/weather/' + e.Tab.weather[n.icon].icon + '.png">')),
                                            r.weather.list.append("<li><div>" + u + "</div>" + s + "<br>" + l + "&#176;<span>" + c + "&#176;</span></li>")
                                    }),
                                    p >= 0 && 3 >= p ? (d = n.weather.prefix.general,
                                        suffix = n.weather.suffix.general) : p >= 4 && 11 >= p ? (d = n.weather.prefix.morning,
                                            suffix = n.weather.suffix.morning) : p >= 12 && 16 >= p ? (d = n.weather.prefix.afternoon,
                                                suffix = n.weather.suffix.afternoon) : (d = n.weather.prefix.evening,
                                                    suffix = n.weather.suffix.evening),
                                    r.weather.conditions.html(d + l + "&#176; " + f + suffix),
                                    r.body.addClass("weather"),
                                    r.weather.container.addClass("opaque"),
                                    r.weather.container.on("transitionend", function () {
                                        r.weather.forecast.addClass("animate-bezier-fast"),
                                            r.weather.trigger.addClass("animate")
                                    })
                            }, i)
                    },
                    fahrenheitToCelsius: function (e) {
                        return Math.round((e - 32) * (5 / 9))
                    },
                    clear: function () {
                        r.weather.list.html(""),
                            r.weather.conditions.html("")
                    }
                }
                , c = {
                    get: function (e) {
                        var r = !1
                            , i = setTimeout(function () {
                                r = !0
                            }, n.country.waitTime);
                        t.getJSON(n.weather.endpoint, function (t) {
                            return clearTimeout(i),
                                t.location && t.location.country_code && !r ? void e(t.location.country_code) : e(n.defaults.country)
                        }).fail(function () {
                            return e(n.defaults.country)
                        })
                    }
                }
                , l = function (e) {
                    r.options.panel.find('input[data-key="time-format"][data-value="' + e.time.format + '"]').attr("checked", !0),
                        r.time.container.removeClass("hidden"),
                        r.options.time.removeClass("disabled"),
                        r.date.removeClass("hidden"),
                        s.set(e.time.format),
                        r.options.panel.find('input[data-key="sites"]').attr("checked", !!e.sites),
                        e.sites ? (h.init(),
                            r.sites.container.addClass("opaque")) : r.sites.container.removeClass("opaque"),
                        r.options.panel.find('input[data-key="weather"]').attr("checked", !!e.weather.enabled),
                        r.options.panel.find('input[data-key="weather-format"][data-value="' + e.weather.format + '"]').attr("checked", !0),
                        e.weather.enabled ? (u.set(e.weather.format),
                            r.weather.container.removeClass("hidden"),
                            r.options.weather.removeClass("disabled"),
                            e.weather.extended ? (r.weather.trigger.addClass("on"),
                                r.weather.forecast.addClass("on")) : (r.weather.trigger.removeClass("on"),
                                    r.weather.forecast.removeClass("on"))) : (r.weather.container.addClass("hidden"),
                                        r.options.weather.addClass("disabled"))
                }
                , f = {
                    init: function () {
                        r.options.trigger.icon.click(function (e) {
                            var n = e.target;
                            t(n).is("a") || (r.options.panel.toggleClass("opaque"),
                                r.options.trigger.container.toggleClass("opaque"),
                                d.fire("options.trigger", "" + r.options.trigger.container.hasClass("opaque")))
                        }),
                            r.options.panel.on("click", "input", function (e) {
                                var n = t(this)
                                    , r = n.attr("data-key")
                                    , i = n.attr("data-value");
                                d.fire("options." + r, "" + (i || n.is(":checked"))),
                                    a.cloud.get(function (e) {
                                        "time-format" === r && (e.time.format = i),
                                            "sites" === r && (e.sites = +n.is(":checked")),
                                            "weather" === r && (e.weather.enabled = +n.is(":checked")),
                                            "weather-format" === r && (e.weather.format = i),
                                            a.cloud.set(e, function () {
                                                l(e)
                                            })
                                    })
                            }),
                            r.search.trigger.click(function () {
                                r.search.form.submit()
                            }),
                            r.search.form.submit(function () {
                                var t = r.search.input.val();
                                return 0 === t.trim().length ? (d.fire("search.similar", !0),
                                    e.location = r.metadata.similar.attr("href"),
                                    !1) : void d.fire("search.submit", !0)
                            }),
                            r.options.share.copy.click(function () {
                                d.fire("options.copy", "clicked"),
                                    p.copy(n.copy.url),
                                    r.options.share.copy.text(n.copy.copiedText),
                                    setTimeout(function () {
                                        r.options.share.copy.text(n.copy.copyText)
                                    }, n.copy.revertTime)
                            }),
                            r.weather.trigger.click(function (e) {
                                d.fire("weather.trigger", "clicked"),
                                    e.stopPropagation(),
                                    a.cloud.get(function (e) {
                                        e.weather.extended = !e.weather.extended,
                                            a.cloud.set(e, function () {
                                                l(e)
                                            })
                                    })
                            }),
                            r.body.delegate("a", "click", function () {
                                var e = t(this)
                                    , n = e.data("event-name");
                                d.fire(n, "clicked")
                            }),
                            r.body.delegate(".location-reset", "click", function () {
                                d.fire("options.location.reset", "clicked"),
                                    m.reset()
                            }),
                            r.body.delegate(".location-change", "click", function () {
                                d.fire("options.location.change", "clicked"),
                                    r.options.location.text.addClass("hidden"),
                                    r.options.location.change.removeClass("hidden"),
                                    r.options.location.input.focus()
                            }),
                            r.body.delegate(".location-cancel", "click", function () {
                                d.fire("options.location.cancel", "clicked"),
                                    r.options.location.text.removeClass("hidden"),
                                    r.options.location.change.addClass("hidden")
                            }),
                            function () {
                                var e = function (e) {
                                    e.preventDefault();
                                    var t = r.options.location.input.val();
                                    t && (d.fire("options.location.confirm", "clicked"),
                                        m.update(t, function () {
                                            r.options.location.input.val(""),
                                                r.options.location.text.removeClass("hidden"),
                                                r.options.location.change.addClass("hidden")
                                        }))
                                };
                                r.body.delegate(".location-confirm", "click", e),
                                    r.options.location.form.on("submit", e)
                            }(),
                            r.body.click(function (e) {
                                var n = e.target;
                                r.options.tip.hasClass("hidden") || a.cloud.get(function (e) {
                                    e.notifications.options = !0,
                                        r.options.tip.addClass("hidden"),
                                        a.cloud.set(e)
                                }),
                                    t(n).is(r.options.panel[0]) || t.contains(r.options.panel[0], n) || t.contains(r.options.trigger.container[0], n) || (r.options.panel.removeClass("opaque"),
                                        r.options.trigger.container.removeClass("opaque"))
                            })
                    }
                }
                , d = function () {
                    return {
                        init: function () { },
                        fire: function (e, t) { }
                    }
                }()
                , h = {
                    init: function () {
                        chrome.topSites.get(function (e) {
                            var t;
                            if (e.length) {
                                r.sites.list.html("");
                                for (var i = 0, o = n.sites.count; o > i; i++)
                                    t = e[i],
                                        r.sites.list.append('<li class="transparent fade"><a href="' + t.url + '" data-event-name="' + n.sites.eventName + '"><img src="' + n.favicon.endpoint + t.url + '">' + t.title + "</a></li>")
                            }
                        })
                    }
                }
                , p = {
                    init: function () {
                        r.options.share.text.html(n.copy.text),
                            r.options.share.copy.text(n.copy.copyText)
                    },
                    copy: function (e) {
                        var n = t("<textarea></textarea>");
                        r.body.append(n),
                            n.val(e),
                            n.focus(),
                            n.select(),
                            document.execCommand("Copy"),
                            n.remove()
                    }
                }
                , m = {
                    update: function (e, r) {
                        e && (e = encodeURIComponent(e),
                            t.getJSON(n.location.endpoint + e, function (e) {
                                var t = e && e.results && e.results[0] && e.results[0].geometry && e.results[0].geometry.location;
                                t && t.lat && t.lng && a.cloud.get(function (e) {
                                    a.local.get(function (n) {
                                        n.location = n.location || {},
                                            e.location = e.location || {},
                                            n.location.latitude = e.location.latitude = t.lat,
                                            n.location.longitude = e.location.longitude = t.lng,
                                            a.cloud.set(e),
                                            a.local.set(n, function () {
                                                u.set(e.weather.format, !0),
                                                    r()
                                            })
                                    })
                                })
                            }).fail(function () { }))
                    },
                    reset: function () {
                        a.cloud.get(function (e) {
                            a.local.get(function (t) {
                                t.location = {},
                                    a.local.set(t, function () {
                                        u.set(e.weather.format, !0)
                                    })
                            })
                        })
                    }
                };
            return {
                init: function () {
                    i.init(),
                        f.init(),
                        d.init(),
                        d.fire("page.loaded", !0),
                        a.cloud.get(function (e) {
                            e.notifications.options || r.options.tip.removeClass("hidden"),
                                e.modified ? l(e) : (d.fire("user.new", !0),
                                    c.get(function (e) {
                                        a.cloud.sync(e, function (e) {
                                            l(e)
                                        })
                                    }))
                        }),
                        setTimeout(function () {
                            r.search.trigger.toggle(),
                                r.search.container.toggleClass("on"),
                                r.search.input.focus()
                        }, n.search.waitTime),
                        setInterval(function () {
                            a.cloud.get(function (e) {
                                l(e)
                            })
                        }, n.renderInterval)
                },
                expose: function () {
                    e.tab = {
                        image: i.set,
                        metadata: o.set
                    }
                }
            }
        }();
        n.init(),
            n.expose()
    }(window, jQuery),
    window.Tab = window.Tab || {},
    window.Tab.weather = {
        "clear-day": {
            copy: "with clear skies",
            icon: "clear-day"
        },
        "clear-night": {
            copy: "with clear skies",
            icon: "clear-day"
        },
        rain: {
            copy: "and raining",
            icon: "rain"
        },
        snow: {
            copy: "and snowing",
            icon: "snow"
        },
        sleet: {
            copy: "with sleet",
            icon: "sleet"
        },
        wind: {
            copy: "and windy",
            icon: "wind"
        },
        fog: {
            copy: "and foggy",
            icon: "fog"
        },
        cloudy: {
            copy: "and cloudy",
            icon: "cloudy"
        },
        "partly-cloudy-day": {
            copy: "and partly cloudy",
            icon: "partly-cloudy-day"
        },
        "partly-cloudy-night": {
            copy: "and partly cloudy",
            icon: "partly-cloudy-day"
        },
        hail: {
            copy: "and hailing",
            icon: "hail"
        },
        thunderstorm: {
            copy: "with a thunderstorm",
            icon: "thunderstorm"
        },
        tornado: {
            copy: "with a tornado",
            icon: "tornado"
        }
    };
