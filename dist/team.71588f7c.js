/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/ var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", [
        "core.Animation",
        "core.SimpleTimeline",
        "TweenLite"
    ], function(a1, b1, c1) {
        var d1 = function(a) {
            var b, c = [], d = a.length;
            for(b = 0; b !== d; c.push(a[b++]));
            return c;
        }, e1 = function(a, b, c) {
            var d, e, f = a.cycle;
            for(d in f)e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
            delete a.cycle;
        }, f1 = function(a2) {
            if ("function" == typeof a2) return a2;
            var b = "object" == typeof a2 ? a2 : {
                each: a2
            }, c = b.ease, d = b.from || 0, e = b.base || 0, f = {}, g = isNaN(d), h = b.axis, i = {
                center: .5,
                end: 1
            }[d] || 0;
            return function(a, j, k) {
                var l, m, n, o, p, q, r, s, t, u = (k || b).length, v = f[u];
                if (!v) {
                    if (t = "auto" === b.grid ? 0 : (b.grid || [
                        1 / 0
                    ])[0], !t) {
                        for(r = -1 / 0; r < (r = k[t++].getBoundingClientRect().left) && u > t;);
                        t--;
                    }
                    for(v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, r = 0, s = 1 / 0, q = 0; u > q; q++)n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), p > r && (r = p), s > p && (s = p);
                    v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (t > u ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e - u : e;
                }
                return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v;
            };
        }, g1 = function(a, b, d) {
            c1.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = g1.prototype.render;
        }, h1 = 1e-8, i1 = c1._internals, j1 = i1.isSelector, k1 = i1.isArray, l1 = g1.prototype = c1.to({}, .1, {}), m1 = [];
        g1.version = "2.1.3", l1.constructor = g1, l1.kill()._gc = !1, g1.killTweensOf = g1.killDelayedCallsTo = c1.killTweensOf, g1.getTweensOf = c1.getTweensOf, g1.lagSmoothing = c1.lagSmoothing, g1.ticker = c1.ticker, g1.render = c1.render, g1.distribute = f1, l1.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c1.prototype.invalidate.call(this);
        }, l1.updateTo = function(a, b) {
            var d, e = this, f = e.ratio, g = e.vars.immediateRender || a.immediateRender;
            b && e._startTime < e._timeline._time && (e._startTime = e._timeline._time, e._uncache(!1), e._gc ? e._enabled(!0, !1) : e._timeline.insert(e, e._startTime - e._delay));
            for(d in a)e.vars[d] = a[d];
            if (e._initted || g) {
                if (b) e._initted = !1, g && e.render(0, !0, !0);
                else if (e._gc && e._enabled(!0, !1), e._notifyPluginsOfEnabled && e._firstPT && c1._onPluginEvent("_onDisable", e), e._time / e._duration > .998) {
                    var h = e._totalTime;
                    e.render(0, !0, !1), e._initted = !1, e.render(h, !0, !1);
                } else if (e._initted = !1, e._init(), e._time > 0 || g) for(var i, j = 1 / (1 - f), k = e._firstPT; k;)i = k.s + k.c, k.c *= j, k.s = i - k.c, k = k._next;
            }
            return e;
        }, l1.render = function(a, b, d) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var e, f, g, j, k, l, m, n, o, p = this, q = p._dirty ? p.totalDuration() : p._totalDuration, r = p._time, s = p._totalTime, t = p._cycle, u = p._duration, v = p._rawPrevTime;
            if (a >= q - h1 && a >= 0 ? (p._totalTime = q, p._cycle = p._repeat, p._yoyo && 0 !== (1 & p._cycle) ? (p._time = 0, p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0) : (p._time = u, p.ratio = p._ease._calcEnd ? p._ease.getRatio(1) : 1), p._reversed || (e = !0, f = "onComplete", d = d || p._timeline.autoRemoveChildren), 0 === u && (p._initted || !p.vars.lazy || d) && (p._startTime === p._timeline._duration && (a = 0), (0 > v || 0 >= a && a >= -h1 || v === h1 && "isPause" !== p.data) && v !== a && (d = !0, v > h1 && (f = "onReverseComplete")), p._rawPrevTime = n = !b || a || v === a ? a : h1)) : h1 > a ? (p._totalTime = p._time = p._cycle = 0, p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0, (0 !== s || 0 === u && v > 0) && (f = "onReverseComplete", e = p._reversed), a > -h1 ? a = 0 : 0 > a && (p._active = !1, 0 === u && (p._initted || !p.vars.lazy || d) && (v >= 0 && (d = !0), p._rawPrevTime = n = !b || a || v === a ? a : h1)), p._initted || (d = !0)) : (p._totalTime = p._time = a, 0 !== p._repeat && (j = u + p._repeatDelay, p._cycle = p._totalTime / j >> 0, 0 !== p._cycle && p._cycle === p._totalTime / j && a >= s && p._cycle--, p._time = p._totalTime - p._cycle * j, p._yoyo && 0 !== (1 & p._cycle) && (p._time = u - p._time, o = p._yoyoEase || p.vars.yoyoEase, o && (p._yoyoEase || (o !== !0 || p._initted ? p._yoyoEase = o = o === !0 ? p._ease : o instanceof Ease ? o : Ease.map[o] : (o = p.vars.ease, p._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, p.vars.easeParams) : Ease.map[o] || c1.defaultEase : c1.defaultEase)), p.ratio = o ? 1 - o.getRatio((u - p._time) / u) : 0)), p._time > u ? p._time = u : p._time < 0 && (p._time = 0)), p._easeType && !o ? (k = p._time / u, l = p._easeType, m = p._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), p.ratio = 1 === l ? 1 - k : 2 === l ? k : p._time / u < .5 ? k / 2 : 1 - k / 2) : o || (p.ratio = p._ease.getRatio(p._time / u))), r === p._time && !d && t === p._cycle) return void (s !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));
            if (!p._initted) {
                if (p._init(), !p._initted || p._gc) return;
                if (!d && p._firstPT && (p.vars.lazy !== !1 && p._duration || p.vars.lazy && !p._duration)) return p._time = r, p._totalTime = s, p._rawPrevTime = v, p._cycle = t, i1.lazyTweens.push(p), void (p._lazy = [
                    a,
                    b
                ]);
                !p._time || e || o ? e && this._ease._calcEnd && !o && (p.ratio = p._ease.getRatio(0 === p._time ? 0 : 1)) : p.ratio = p._ease.getRatio(p._time / u);
            }
            for(p._lazy !== !1 && (p._lazy = !1), p._active || !p._paused && p._time !== r && a >= 0 && (p._active = !0), 0 === s && (2 === p._initted && a > 0 && p._init(), p._startAt && (a >= 0 ? p._startAt.render(a, !0, d) : f || (f = "_dummyGS")), p.vars.onStart && (0 !== p._totalTime || 0 === u) && (b || p._callback("onStart"))), g = p._firstPT; g;)g.f ? g.t[g.p](g.c * p.ratio + g.s) : g.t[g.p] = g.c * p.ratio + g.s, g = g._next;
            p._onUpdate && (0 > a && p._startAt && p._startTime && p._startAt.render(a, !0, d), b || (p._totalTime !== s || f) && p._callback("onUpdate")), p._cycle !== t && (b || p._gc || p.vars.onRepeat && p._callback("onRepeat")), f && (!p._gc || d) && (0 > a && p._startAt && !p._onUpdate && p._startTime && p._startAt.render(a, !0, d), e && (p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[f] && p._callback(f), 0 === u && p._rawPrevTime === h1 && n !== h1 && (p._rawPrevTime = 0));
        }, g1.to = function(a, b, c) {
            return new g1(a, b, c);
        }, g1.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new g1(a, b, c);
        }, g1.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new g1(a, b, d);
        }, g1.staggerTo = g1.allTo = function(a, b, h, i, l, n, o) {
            var p, q, r, s, t = [], u = f1(h.stagger || i), v = h.cycle, w = (h.startAt || m1).cycle;
            for(k1(a) || ("string" == typeof a && (a = c1.selector(a) || a), j1(a) && (a = d1(a))), a = a || [], p = a.length - 1, r = 0; p >= r; r++){
                q = {};
                for(s in h)q[s] = h[s];
                if (v && (e1(q, a, r), null != q.duration && (b = q.duration, delete q.duration)), w) {
                    w = q.startAt = {};
                    for(s in h.startAt)w[s] = h.startAt[s];
                    e1(q.startAt, a, r);
                }
                q.delay = u(r, a[r], a) + (q.delay || 0), r === p && l && (q.onComplete = function() {
                    h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments), l.apply(o || h.callbackScope || this, n || m1);
                }), t[r] = new g1(a[r], b, q);
            }
            return t;
        }, g1.staggerFrom = g1.allFrom = function(a, b, c, d, e, f, h) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, g1.staggerTo(a, b, c, d, e, f, h);
        }, g1.staggerFromTo = g1.allFromTo = function(a, b, c, d, e, f, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, g1.staggerTo(a, b, d, e, f, h, i);
        }, g1.delayedCall = function(a, b, c, d, e) {
            return new g1(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            });
        }, g1.set = function(a, b) {
            return new g1(a, 0, b);
        }, g1.isTweening = function(a) {
            return c1.getTweensOf(a, !0).length > 0;
        };
        var n1 = function(a, b) {
            for(var d = [], e = 0, f = a._first; f;)f instanceof c1 ? d[e++] = f : (b && (d[e++] = f), d = d.concat(n1(f, b)), e = d.length), f = f._next;
            return d;
        }, o1 = g1.getAllTweens = function(b) {
            return n1(a1._rootTimeline, b).concat(n1(a1._rootFramesTimeline, b));
        };
        g1.killAll = function(a, c, d, e) {
            null == c && (c = !0), null == d && (d = !0);
            var f, g, h, i = o1(0 != e), j = i.length, k = c && d && e;
            for(h = 0; j > h; h++)g = i[h], (k || g instanceof b1 || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1));
        }, g1.killChildTweensOf = function(a, b) {
            if (null != a) {
                var e, f, h, l, m, n = i1.tweenLookup;
                if ("string" == typeof a && (a = c1.selector(a) || a), j1(a) && (a = d1(a)), k1(a)) for(l = a.length; --l > -1;)g1.killChildTweensOf(a[l], b);
                else {
                    e = [];
                    for(h in n)for(f = n[h].target.parentNode; f;)f === a && (e = e.concat(n[h].tweens)), f = f.parentNode;
                    for(m = e.length, l = 0; m > l; l++)b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1);
                }
            }
        };
        var p1 = function(a, c, d, e) {
            c = c !== !1, d = d !== !1, e = e !== !1;
            for(var f, g, h = o1(e), i = c && d && e, j = h.length; --j > -1;)g = h[j], (i || g instanceof b1 || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a);
        };
        return g1.pauseAll = function(a, b, c) {
            p1(!0, a, b, c);
        }, g1.resumeAll = function(a, b, c) {
            p1(!1, a, b, c);
        }, g1.globalTimeScale = function(b) {
            var d = a1._rootTimeline, e = c1.ticker.time;
            return arguments.length ? (b = b || h1, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a1._rootFramesTimeline, e = c1.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a1._rootTimeline._timeScale = b, b) : d._timeScale;
        }, l1.progress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this.duration() ? this._time / this._duration : this.ratio;
        }, l1.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration();
        }, l1.time = function(a, b) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var c = this._duration, d = this._cycle, e = d * (c + this._repeatDelay);
            return a > c && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b);
        }, l1.duration = function(b) {
            return arguments.length ? a1.prototype.duration.call(this, b) : this._duration;
        }, l1.totalDuration = function(a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
        }, l1.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, l1.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, l1.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, g1;
    }, !0), _gsScope._gsDefine("TimelineLite", [
        "core.Animation",
        "core.SimpleTimeline",
        "TweenLite"
    ], function(a3, b2, c2) {
        var d2 = function(a) {
            b2.call(this, a);
            var c, d, e = this, f = e.vars;
            e._labels = {}, e.autoRemoveChildren = !!f.autoRemoveChildren, e.smoothChildTiming = !!f.smoothChildTiming, e._sortChildren = !0, e._onUpdate = f.onUpdate;
            for(d in f)c = f[d], i2(c) && -1 !== c.join("").indexOf("{self}") && (f[d] = e._swapSelfInParams(c));
            i2(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger);
        }, e2 = 1e-8, f2 = c2._internals, g2 = d2._internals = {}, h2 = f2.isSelector, i2 = f2.isArray, j2 = f2.lazyTweens, k2 = f2.lazyRender, l2 = _gsScope._gsDefine.globals, m2 = function(a) {
            var b, c = {};
            for(b in a)c[b] = a[b];
            return c;
        }, n2 = function(a, b, c) {
            var d, e, f = a.cycle;
            for(d in f)e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
            delete a.cycle;
        }, o2 = g2.pauseCallback = function() {}, p2 = function(a) {
            var b, c = [], d = a.length;
            for(b = 0; b !== d; c.push(a[b++]));
            return c;
        }, q1 = function(a, b, c, d) {
            var e = "immediateRender";
            return e in b || (b[e] = !(c && c[e] === !1 || d)), b;
        }, r1 = function(a4) {
            if ("function" == typeof a4) return a4;
            var b = "object" == typeof a4 ? a4 : {
                each: a4
            }, c = b.ease, d = b.from || 0, e = b.base || 0, f = {}, g = isNaN(d), h = b.axis, i = {
                center: .5,
                end: 1
            }[d] || 0;
            return function(a, j, k) {
                var l, m, n, o, p, q, r, s, t, u = (k || b).length, v = f[u];
                if (!v) {
                    if (t = "auto" === b.grid ? 0 : (b.grid || [
                        1 / 0
                    ])[0], !t) {
                        for(r = -1 / 0; r < (r = k[t++].getBoundingClientRect().left) && u > t;);
                        t--;
                    }
                    for(v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, r = 0, s = 1 / 0, q = 0; u > q; q++)n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), p > r && (r = p), s > p && (s = p);
                    v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (t > u ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e - u : e;
                }
                return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v;
            };
        }, s1 = d2.prototype = new b2;
        return d2.version = "2.1.3", d2.distribute = r1, s1.constructor = d2, s1.kill()._gc = s1._forcingPlayhead = s1._hasPause = !1, s1.to = function(a, b, d, e) {
            var f = d.repeat && l2.TweenMax || c2;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
        }, s1.from = function(a, b, d, e) {
            return this.add((d.repeat && l2.TweenMax || c2).from(a, b, q1(this, d)), e);
        }, s1.fromTo = function(a, b, d, e, f) {
            var g = e.repeat && l2.TweenMax || c2;
            return e = q1(this, e, d), b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
        }, s1.staggerTo = function(a, b, e, f, g, i, j, k) {
            var l, o, q = new d2({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming
            }), s = r1(e.stagger || f), t = e.startAt, u = e.cycle;
            for("string" == typeof a && (a = c2.selector(a) || a), a = a || [], h2(a) && (a = p2(a)), o = 0; o < a.length; o++)l = m2(e), t && (l.startAt = m2(t), t.cycle && n2(l.startAt, a, o)), u && (n2(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, s(o, a[o], a));
            return this.add(q, g);
        }, s1.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.runBackwards = !0, this.staggerTo(a, b, q1(this, c), d, e, f, g, h);
        }, s1.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, this.staggerTo(a, b, q1(this, d, c), e, f, g, h, i);
        }, s1.call = function(a, b, d, e) {
            return this.add(c2.delayedCall(0, a, b, d), e);
        }, s1.set = function(a, b, d) {
            return this.add(new c2(a, 0, q1(this, b, null, !0)), d);
        }, d2.exportRoot = function(a, b) {
            a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g, h, i = new d2(a), j = i._timeline;
            for(null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;)h = g._next, b && g instanceof c2 && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h;
            return j.add(i, 0), e && i.totalDuration(), i;
        }, s1.add = function(e, f, g, h) {
            var j, k, l, m, n, o, p = this;
            if ("number" != typeof f && (f = p._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a3)) {
                if (e instanceof Array || e && e.push && i2(e)) {
                    for(g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++)i2(m = e[l]) && (m = new d2({
                        tweens: m
                    })), p.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                    return p._uncache(!0);
                }
                if ("string" == typeof e) return p.addLabel(e, f);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = c2.delayedCall(0, e);
            }
            if (b2.prototype.add.call(p, e, f), (e._time || !e._duration && e._initted) && (j = (p.rawTime() - e._startTime) * e._timeScale, (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) - e._totalTime > 1e-5) && e.render(j, !1, !1)), (p._gc || p._time === p._duration) && !p._paused && p._duration < p.duration()) for(n = p, o = n.rawTime() > e._startTime; n._timeline;)o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
            return p;
        }, s1.remove = function(b) {
            if (b instanceof a3) {
                this._remove(b, !1);
                var c = b._timeline = b.vars.useFrames ? a3._rootFramesTimeline : a3._rootTimeline;
                return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this;
            }
            if (b instanceof Array || b && b.push && i2(b)) {
                for(var d = b.length; --d > -1;)this.remove(b[d]);
                return this;
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
        }, s1._remove = function(a, c) {
            b2.prototype._remove.call(this, a, c);
            var d = this._last;
            return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
        }, s1.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
        }, s1.insert = s1.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d);
        }, s1.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
        }, s1.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this;
        }, s1.addPause = function(a, b, d, e) {
            var f = c2.delayedCall(0, o2, d, e || this);
            return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a);
        }, s1.removeLabel = function(a) {
            return delete this._labels[a], this;
        }, s1.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1;
        }, s1._parseTimeOrLabel = function(b, c, d, e) {
            var f, g;
            if (e instanceof a3 && e.timeline === this) this.remove(e);
            else if (e && (e instanceof Array || e.push && i2(e))) for(g = e.length; --g > -1;)e[g] instanceof a3 && e[g].timeline === this && this.remove(e[g]);
            if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);
            else {
                if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f;
            }
            return Number(b) + c;
        }, s1.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
        }, s1.stop = function() {
            return this.paused(!0);
        }, s1.gotoAndPlay = function(a, b) {
            return this.play(a, b);
        }, s1.gotoAndStop = function(a, b) {
            return this.pause(a, b);
        }, s1.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, g, h, i, l, m, n, o = this, p = o._time, q = o._dirty ? o.totalDuration() : o._totalDuration, r = o._startTime, s = o._timeScale, t = o._paused;
            if (p !== o._time && (a += o._time - p), o._hasPause && !o._forcingPlayhead && !b) {
                if (a > p) for(d = o._first; d && d._startTime <= a && !l;)d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === o._rawPrevTime || (l = d), d = d._next;
                else for(d = o._last; d && d._startTime >= a && !l;)d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
                l && (o._time = o._totalTime = a = l._startTime, n = o._startTime + (o._reversed ? o._duration - a : a) / o._timeScale);
            }
            if (a >= q - e2 && a >= 0) o._totalTime = o._time = q, o._reversed || o._hasPausedChild() || (f = !0, h = "onComplete", i = !!o._timeline.autoRemoveChildren, 0 === o._duration && (0 >= a && a >= -e2 || o._rawPrevTime < 0 || o._rawPrevTime === e2) && o._rawPrevTime !== a && o._first && (i = !0, o._rawPrevTime > e2 && (h = "onReverseComplete"))), o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e2, a = q + 1e-4;
            else if (e2 > a) {
                if (o._totalTime = o._time = 0, a > -e2 && (a = 0), (0 !== p || 0 === o._duration && o._rawPrevTime !== e2 && (o._rawPrevTime > 0 || 0 > a && o._rawPrevTime >= 0)) && (h = "onReverseComplete", f = o._reversed), 0 > a) o._active = !1, o._timeline.autoRemoveChildren && o._reversed ? (i = f = !0, h = "onReverseComplete") : o._rawPrevTime >= 0 && o._first && (i = !0), o._rawPrevTime = a;
                else {
                    if (o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e2, 0 === a && f) for(d = o._first; d && 0 === d._startTime;)d._duration || (f = !1), d = d._next;
                    a = 0, o._initted || (i = !0);
                }
            } else o._totalTime = o._time = o._rawPrevTime = a;
            if (o._time !== p && o._first || c || i || l) {
                if (o._initted || (o._initted = !0), o._active || !o._paused && o._time !== p && a > 0 && (o._active = !0), 0 === p && o.vars.onStart && (0 === o._time && o._duration || b || o._callback("onStart")), m = o._time, m >= p) for(d = o._first; d && (g = d._next, m === o._time && (!o._paused || t));)(d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && (o.pause(), o._pauseTime = n), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                else for(d = o._last; d && (g = d._prev, m === o._time && (!o._paused || t));){
                    if (d._active || d._startTime <= p && !d._paused && !d._gc) {
                        if (l === d) {
                            for(l = d._prev; l && l.endTime() > o._time;)l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                            l = null, o.pause(), o._pauseTime = n;
                        }
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                    }
                    d = g;
                }
                o._onUpdate && (b || (j2.length && k2(), o._callback("onUpdate"))), h && (o._gc || (r === o._startTime || s !== o._timeScale) && (0 === o._time || q >= o.totalDuration()) && (f && (j2.length && k2(), o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !b && o.vars[h] && o._callback(h)));
            }
        }, s1._hasPausedChild = function() {
            for(var a = this._first; a;){
                if (a._paused || a instanceof d2 && a._hasPausedChild()) return !0;
                a = a._next;
            }
            return !1;
        }, s1.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for(var f = [], g = this._first, h = 0; g;)g._startTime < e || (g instanceof c2 ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
            return f;
        }, s1.getTweensOf = function(a, b) {
            var d, e, f = this._gc, g = [], h = 0;
            for(f && this._enabled(!0, !0), d = c2.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g;
        }, s1.recent = function() {
            return this._recent;
        }, s1._contains = function(a) {
            for(var b = a.timeline; b;){
                if (b === this) return !0;
                b = b.timeline;
            }
            return !1;
        }, s1.shiftChildren = function(a, b, c) {
            c = c || 0;
            for(var d, e = this._first, f = this._labels; e;)e._startTime >= c && (e._startTime += a), e = e._next;
            if (b) for(d in f)f[d] >= c && (f[d] += a);
            return this._uncache(!0);
        }, s1._kill = function(a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for(var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;)c[d]._kill(a, b) && (e = !0);
            return e;
        }, s1.clear = function(a) {
            var b = this.getChildren(!1, !0, !0), c = b.length;
            for(this._time = this._totalTime = 0; --c > -1;)b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0);
        }, s1.invalidate = function() {
            for(var b = this._first; b;)b.invalidate(), b = b._next;
            return a3.prototype.invalidate.call(this);
        }, s1._enabled = function(a, c) {
            if (a === this._gc) for(var d = this._first; d;)d._enabled(a, !0), d = d._next;
            return b2.prototype._enabled.call(this, a, c);
        }, s1.totalTime = function(b, c, d) {
            this._forcingPlayhead = !0;
            var e = a3.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e;
        }, s1.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration);
        }, s1.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for(var b, c, d = 0, e = this, f = e._last, g = 999999999999; f;)b = f._prev, f._dirty && f.totalDuration(), f._startTime > g && e._sortChildren && !f._paused && !e._calculatingDuration ? (e._calculatingDuration = 1, e.add(f, f._startTime - f._delay), e._calculatingDuration = 0) : g = f._startTime, f._startTime < 0 && !f._paused && (d -= f._startTime, e._timeline.smoothChildTiming && (e._startTime += f._startTime / e._timeScale, e._time -= f._startTime, e._totalTime -= f._startTime, e._rawPrevTime -= f._startTime), e.shiftChildren(-f._startTime, !1, -9999999999), g = 0), c = f._startTime + f._totalDuration / f._timeScale, c > d && (d = c), f = b;
                    e._duration = e._totalDuration = d, e._dirty = !1;
                }
                return this._totalDuration;
            }
            return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
        }, s1.paused = function(b) {
            if (b === !1 && this._paused) for(var c = this._first; c;)c._startTime === this._time && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
            return a3.prototype.paused.apply(this, arguments);
        }, s1.usesFrames = function() {
            for(var b = this._timeline; b._timeline;)b = b._timeline;
            return b === a3._rootFramesTimeline;
        }, s1.rawTime = function(a) {
            return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
        }, d2;
    }, !0), _gsScope._gsDefine("TimelineMax", [
        "TimelineLite",
        "TweenLite",
        "easing.Ease"
    ], function(a5, b3, c3) {
        var d3 = function(b) {
            a5.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0;
        }, e3 = 1e-8, f3 = b3._internals, g3 = f3.lazyTweens, h3 = f3.lazyRender, i3 = _gsScope._gsDefine.globals, j3 = new c3(null, null, 1, 0), k3 = d3.prototype = new a5;
        return k3.constructor = d3, k3.kill()._gc = !1, d3.version = "2.1.3", k3.invalidate = function() {
            return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a5.prototype.invalidate.call(this);
        }, k3.addCallback = function(a, c, d, e) {
            return this.add(b3.delayedCall(0, a, d, e), c);
        }, k3.removeCallback = function(a, b) {
            if (a) {
                if (null == b) this._kill(null, a);
                else for(var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;)c[d]._startTime === e && c[d]._enabled(!1, !1);
            }
            return this;
        }, k3.removePause = function(b) {
            return this.removeCallback(a5._internals.pauseCallback, b);
        }, k3.tweenTo = function(a, c) {
            c = c || {};
            var d, e, f, g = {
                ease: j3,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1
            }, h = c.repeat && i3.TweenMax || b3;
            for(e in c)g[e] = c[e];
            return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function() {
                f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []);
            }, f;
        }, k3.tweenFromTo = function(a, b, c) {
            c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [
                    a
                ],
                callbackScope: this
            }, c.immediateRender = c.immediateRender !== !1;
            var d = this.tweenTo(b, c);
            return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
        }, k3.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, i, j, k, l, m, n, o, p = this, q = p._time, r = p._dirty ? p.totalDuration() : p._totalDuration, s = p._duration, t = p._totalTime, u = p._startTime, v = p._timeScale, w = p._rawPrevTime, x = p._paused, y = p._cycle;
            if (q !== p._time && (a += p._time - q), a >= r - e3 && a >= 0) p._locked || (p._totalTime = r, p._cycle = p._repeat), p._reversed || p._hasPausedChild() || (f = !0, j = "onComplete", k = !!p._timeline.autoRemoveChildren, 0 === p._duration && (0 >= a && a >= -e3 || 0 > w || w === e3) && w !== a && p._first && (k = !0, w > e3 && (j = "onReverseComplete"))), p._rawPrevTime = p._duration || !b || a || p._rawPrevTime === a ? a : e3, p._yoyo && 1 & p._cycle ? p._time = a = 0 : (p._time = s, a = s + 1e-4);
            else if (e3 > a) {
                if (p._locked || (p._totalTime = p._cycle = 0), p._time = 0, a > -e3 && (a = 0), (0 !== q || 0 === s && w !== e3 && (w > 0 || 0 > a && w >= 0) && !p._locked) && (j = "onReverseComplete", f = p._reversed), 0 > a) p._active = !1, p._timeline.autoRemoveChildren && p._reversed ? (k = f = !0, j = "onReverseComplete") : w >= 0 && p._first && (k = !0), p._rawPrevTime = a;
                else {
                    if (p._rawPrevTime = s || !b || a || p._rawPrevTime === a ? a : e3, 0 === a && f) for(d = p._first; d && 0 === d._startTime;)d._duration || (f = !1), d = d._next;
                    a = 0, p._initted || (k = !0);
                }
            } else 0 === s && 0 > w && (k = !0), p._time = p._rawPrevTime = a, p._locked || (p._totalTime = a, 0 !== p._repeat && (l = s + p._repeatDelay, p._cycle = p._totalTime / l >> 0, p._cycle && p._cycle === p._totalTime / l && a >= t && p._cycle--, p._time = p._totalTime - p._cycle * l, p._yoyo && 1 & p._cycle && (p._time = s - p._time), p._time > s ? (p._time = s, a = s + 1e-4) : p._time < 0 ? p._time = a = 0 : a = p._time));
            if (p._hasPause && !p._forcingPlayhead && !b) {
                if (a = p._time, a > q || p._repeat && y !== p._cycle) for(d = p._first; d && d._startTime <= a && !m;)d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === p._rawPrevTime || (m = d), d = d._next;
                else for(d = p._last; d && d._startTime >= a && !m;)d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
                m && (o = p._startTime + (p._reversed ? p._duration - m._startTime : m._startTime) / p._timeScale, m._startTime < s && (p._time = p._rawPrevTime = a = m._startTime, p._totalTime = a + p._cycle * (p._totalDuration + p._repeatDelay)));
            }
            if (p._cycle !== y && !p._locked) {
                var z = p._yoyo && 0 !== (1 & y), A = z === (p._yoyo && 0 !== (1 & p._cycle)), B = p._totalTime, C = p._cycle, D = p._rawPrevTime, E = p._time;
                if (p._totalTime = y * s, p._cycle < y ? z = !z : p._totalTime += s, p._time = q, p._rawPrevTime = 0 === s ? w - 1e-4 : w, p._cycle = y, p._locked = !0, q = z ? 0 : s, p.render(q, b, 0 === s), b || p._gc || p.vars.onRepeat && (p._cycle = C, p._locked = !1, p._callback("onRepeat")), q !== p._time) return;
                if (A && (p._cycle = y, p._locked = !0, q = z ? s + 1e-4 : -0.0001, p.render(q, !0, !1)), p._locked = !1, p._paused && !x) return;
                p._time = E, p._totalTime = B, p._cycle = C, p._rawPrevTime = D;
            }
            if (!(p._time !== q && p._first || c || k || m)) return void (t !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));
            if (p._initted || (p._initted = !0), p._active || !p._paused && p._totalTime !== t && a > 0 && (p._active = !0), 0 === t && p.vars.onStart && (0 === p._totalTime && p._totalDuration || b || p._callback("onStart")), n = p._time, n >= q) for(d = p._first; d && (i = d._next, n === p._time && (!p._paused || x));)(d._active || d._startTime <= p._time && !d._paused && !d._gc) && (m === d && (p.pause(), p._pauseTime = o), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
            else for(d = p._last; d && (i = d._prev, n === p._time && (!p._paused || x));){
                if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                    if (m === d) {
                        for(m = d._prev; m && m.endTime() > p._time;)m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
                        m = null, p.pause(), p._pauseTime = o;
                    }
                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                }
                d = i;
            }
            p._onUpdate && (b || (g3.length && h3(), p._callback("onUpdate"))), j && (p._locked || p._gc || (u === p._startTime || v !== p._timeScale) && (0 === p._time || r >= p.totalDuration()) && (f && (g3.length && h3(), p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[j] && p._callback(j)));
        }, k3.getActive = function(a, b, c) {
            var d, e, f = [], g = this.getChildren(a || null == a, b || null == a, !!c), h = 0, i = g.length;
            for(d = 0; i > d; d++)e = g[d], e.isActive() && (f[h++] = e);
            return f;
        }, k3.getLabelAfter = function(a) {
            a || 0 !== a && (a = this._time);
            var b, c = this.getLabelsArray(), d = c.length;
            for(b = 0; d > b; b++)if (c[b].time > a) return c[b].name;
            return null;
        }, k3.getLabelBefore = function(a) {
            null == a && (a = this._time);
            for(var b = this.getLabelsArray(), c = b.length; --c > -1;)if (b[c].time < a) return b[c].name;
            return null;
        }, k3.getLabelsArray = function() {
            var a6, b4 = [], c = 0;
            for(a6 in this._labels)b4[c++] = {
                time: this._labels[a6],
                name: a6
            };
            return b4.sort(function(a, b) {
                return a.time - b.time;
            }), b4;
        }, k3.invalidate = function() {
            return this._locked = !1, a5.prototype.invalidate.call(this);
        }, k3.progress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0;
        }, k3.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0;
        }, k3.totalDuration = function(b) {
            return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a5.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
        }, k3.time = function(a, b) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var c = this._duration, d = this._cycle, e = d * (c + this._repeatDelay);
            return a > c && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b);
        }, k3.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, k3.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, k3.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, k3.currentLabel = function(a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + e3);
        }, d3;
    }, !0), function() {
        var a7 = 180 / Math.PI, b5 = [], c4 = [], d4 = [], e4 = {}, f4 = _gsScope._gsDefine.globals, g4 = function(a, b, c, d) {
            c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a;
        }, h4 = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", i4 = function(a, b, c, d) {
            var e = {
                a: a
            }, f = {}, g = {}, h = {
                c: d
            }, i = (a + b) / 2, j = (b + c) / 2, k = (c + d) / 2, l = (i + j) / 2, m = (j + k) / 2, n = (m - l) / 8;
            return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [
                e,
                f,
                g,
                h
            ];
        }, j4 = function(a, e, f, g, h) {
            var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1, x = 0, y = a[0].a;
            for(j = 0; w > j; j++)n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b5[j], u = c4[j], v = (u + t) * e * .25 / (g ? .5 : d4[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i4(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
            n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i4(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]));
        }, k4 = function(a, d, e, f) {
            var h, i, j, k, l, m, n = [];
            if (f) for(a = [
                f
            ].concat(a), i = a.length; --i > -1;)"string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
            if (h = a.length - 2, 0 > h) return n[0] = new g4(a[0][d], 0, 0, a[0][d]), n;
            for(i = 0; h > i; i++)j = a[i][d], k = a[i + 1][d], n[i] = new g4(j, 0, 0, k), e && (l = a[i + 2][d], b5[i] = (b5[i] || 0) + (k - j) * (k - j), c4[i] = (c4[i] || 0) + (l - k) * (l - k));
            return n[i] = new g4(a[i][d], 0, 0, a[i + 1][d]), n;
        }, l3 = function(a, f, g, i, l, m) {
            var n, o, p, q, r, s, t, u, v = {}, w = [], x = m || a[0];
            l = "string" == typeof l ? "," + l + "," : h4, null == f && (f = 1);
            for(o in a[0])w.push(o);
            if (a.length > 1) {
                for(u = a[a.length - 1], t = !0, n = w.length; --n > -1;)if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                    t = !1;
                    break;
                }
                t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3]);
            }
            for(b5.length = c4.length = d4.length = 0, n = w.length; --n > -1;)o = w[n], e4[o] = -1 !== l.indexOf("," + o + ","), v[o] = k4(a, o, e4[o], m);
            for(n = b5.length; --n > -1;)b5[n] = Math.sqrt(b5[n]), c4[n] = Math.sqrt(c4[n]);
            if (!i) {
                for(n = w.length; --n > -1;)if (e4[o]) for(p = v[w[n]], s = p.length - 1, q = 0; s > q; q++)r = p[q + 1].da / c4[q] + p[q].da / b5[q] || 0, d4[q] = (d4[q] || 0) + r * r;
                for(n = d4.length; --n > -1;)d4[n] = Math.sqrt(d4[n]);
            }
            for(n = w.length, q = g ? 4 : 1; --n > -1;)o = w[n], p = v[o], j4(p, f, g, i, e4[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
            return v;
        }, m3 = function(a, b, c) {
            b = b || "soft";
            var d, e, f, h, i, j, k, l, m, n, o, p = {}, q = "cubic" === b ? 3 : 2, r = "soft" === b, s = [];
            if (r && c && (a = [
                c
            ].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
            for(m in a[0])s.push(m);
            for(j = s.length; --j > -1;){
                for(m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++)d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                for(l = n - q + 1, n = 0, k = 0; l > k; k += q)d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g4(d, e, f, h) : new g4(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                i.length = n;
            }
            return p;
        }, n3 = function(a, b, c) {
            for(var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)for(m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++)j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d;
        }, o3 = function(a, b) {
            b = b >> 0 || 6;
            var c, d, e, f, g = [], h = [], i = 0, j = 0, k = b - 1, l = [], m = [];
            for(c in a)n3(a[c], g, b);
            for(e = g.length, d = 0; e > d; d++)i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
            return {
                length: j,
                lengths: h,
                segments: l
            };
        }, p3 = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.9",
            API: 2,
            global: !0,
            init: function(a, b, c) {
                this._target = a, b instanceof Array && (b = {
                    values: b
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                var d, e, f, g, h, i = b.values || [], j = {}, k = i[0], n = b.autoRotate || c.vars.orientToBezier;
                this._autoRotate = n ? n instanceof Array ? n : [
                    [
                        "x",
                        "y",
                        "rotation",
                        n === !0 ? 0 : Number(n) || 0
                    ]
                ] : null;
                for(d in k)this._props.push(d);
                for(f = this._props.length; --f > -1;)d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l3(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m3(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                    var p = o3(this._beziers, this._timeRes);
                    this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
                }
                if (n = this._autoRotate) for(this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [
                    n
                ]), f = n.length; --f > -1;){
                    for(g = 0; 3 > g; g++)d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                    d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d);
                }
                return this._startRatio = c.vars.runBackwards ? 1 : 0, !0;
            },
            set: function(b) {
                var c, d, e, f, g, h, i, j, k, l, m, n = this._segCount, o = this._func, p = this._target, q = b !== this._startRatio;
                if (this._timeRes) {
                    if (k = this._lengths, l = this._curSeg, m = b * this._length, e = this._li, m > this._l2 && n - 1 > e) {
                        for(j = n - 1; j > e && (this._l2 = k[++e]) <= m;);
                        this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0];
                    } else if (m < this._l1 && e > 0) {
                        for(; e > 0 && (this._l1 = k[--e]) >= m;);
                        0 === e && m < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si];
                    }
                    if (c = e, m -= this._l1, e = this._si, m > this._s2 && e < l.length - 1) {
                        for(j = l.length - 1; j > e && (this._s2 = l[++e]) <= m;);
                        this._s1 = l[e - 1], this._si = e;
                    } else if (m < this._s1 && e > 0) {
                        for(; e > 0 && (this._s1 = l[--e]) >= m;);
                        0 === e && m < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e;
                    }
                    h = 1 === b ? 1 : (e + (m - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
                } else c = 0 > b ? 0 : b >= 1 ? n - 1 : n * b >> 0, h = (b - c * (1 / n)) * n;
                for(d = 1 - h, e = this._props.length; --e > -1;)f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, p)), o[f] ? p[f](i) : p[f] = i;
                if (this._autoRotate) {
                    var r, s, t, u, v, w, x, y = this._autoRotate;
                    for(e = y.length; --e > -1;)f = y[e][2], w = y[e][3] || 0, x = y[e][4] === !0 ? 1 : a7, g = this._beziers[y[e][0]], r = this._beziers[y[e][1]], g && r && (g = g[c], r = r[c], s = g.a + (g.b - g.a) * h, u = g.b + (g.c - g.b) * h, s += (u - s) * h, u += (g.c + (g.d - g.c) * h - u) * h, t = r.a + (r.b - r.a) * h, v = r.b + (r.c - r.b) * h, t += (v - t) * h, v += (r.c + (r.d - r.c) * h - v) * h, i = q ? Math.atan2(v - t, u - s) * x + w : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, p)), o[f] ? p[f](i) : p[f] = i);
                }
            }
        }), q2 = p3.prototype;
        p3.bezierThrough = l3, p3.cubicToQuadratic = i4, p3._autoCSS = !0, p3.quadraticToCubic = function(a, b, c) {
            return new g4(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        }, p3._cssRegister = function() {
            var a8 = f4.CSSPlugin;
            if (a8) {
                var b6 = a8._internals, c = b6._parseToProxy, d = b6._setPluginRatio, e = b6.CSSPropTween;
                b6._registerComplexSpecialProp("bezier", {
                    parser: function(a, b, f, g, h, i) {
                        b instanceof Array && (b = {
                            values: b
                        }), i = new p3;
                        var j, k, l, m = b.values, n = m.length - 1, o = [], q = {};
                        if (0 > n) return h;
                        for(j = 0; n >= j; j++)l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                        for(k in b)q[k] = b[k];
                        return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                            [
                                "left",
                                "top",
                                "rotation",
                                j,
                                !1
                            ]
                        ] : null != l.end.x ? [
                            [
                                "x",
                                "y",
                                "rotation",
                                j,
                                !1
                            ]
                        ] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h;
                    }
                });
            }
        }, q2._mod = function(a) {
            for(var b, c = this._overwriteProps, d = c.length; --d > -1;)b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b);
        }, q2._kill = function(a) {
            var b, c, d = this._props;
            for(b in this._beziers)if (b in a) for(delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;)d[c] === b && d.splice(c, 1);
            if (d = this._autoRotate) for(c = d.length; --c > -1;)a[d[c][2]] && d.splice(c, 1);
            return this._super._kill.call(this, a);
        };
    }(), _gsScope._gsDefine("plugins.CSSPlugin", [
        "plugins.TweenPlugin",
        "TweenLite"
    ], function(a9, b8) {
        var c5, d5, e5, f5, g5 = function() {
            a9.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g5.prototype.setRatio;
        }, h5 = _gsScope._gsDefine.globals, i5 = {}, j5 = g5.prototype = new a9("css");
        j5.constructor = g5, g5.version = "2.1.3", g5.API = 2, g5.defaultTransformPerspective = 0, g5.defaultSkewType = "compensated", g5.defaultSmoothOrigin = !0, j5 = "px", g5.suffixMap = {
            top: j5,
            right: j5,
            bottom: j5,
            left: j5,
            width: j5,
            height: j5,
            fontSize: j5,
            padding: j5,
            margin: j5,
            perspective: j5,
            lineHeight: ""
        };
        var k5, l4, m4, n4, o4, p4, q3, r2, s2 = /(?:\-|\.|\b)(\d|\.|e\-)+/g, t1 = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, u1 = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v1 = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, w1 = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, x1 = /(?:\d|\-|\+|=|#|\.)*/g, y1 = /opacity *= *([^)]*)/i, z1 = /opacity:([^;]*)/i, A1 = /alpha\(opacity *=.+?\)/i, B1 = /^(rgb|hsl)/, C1 = /([A-Z])/g, D1 = /-([a-z])/gi, E1 = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, F1 = function(a, b) {
            return b.toUpperCase();
        }, G1 = /(?:Left|Right|Width)/i, H1 = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, I1 = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, J1 = /,(?=[^\)]*(?:\(|$))/gi, K1 = /[\s,\(]/i, L1 = Math.PI / 180, M1 = 180 / Math.PI, N1 = {}, O1 = {
            style: {}
        }, P1 = _gsScope.document || {
            createElement: function() {
                return O1;
            }
        }, Q1 = function(a, b) {
            var c = P1.createElementNS ? P1.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : P1.createElement(a);
            return c.style ? c : P1.createElement(a);
        }, R1 = Q1("div"), S1 = Q1("img"), T = g5._internals = {
            _specialProps: i5
        }, U = (_gsScope.navigator || {}).userAgent || "", V = function() {
            var a = U.indexOf("Android"), b = Q1("a");
            return m4 = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === a || parseFloat(U.substr(a + 8, 2)) > 3), o4 = m4 && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6, n4 = -1 !== U.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (p4 = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1;
        }(), W = function(a) {
            return y1.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
        }, X = function(a) {
            _gsScope.console && console.log(a);
        }, Y = "", Z = "", $ = function(a, b) {
            b = b || R1;
            var c, d, e = b.style;
            if (void 0 !== e[a]) return a;
            for(a = a.charAt(0).toUpperCase() + a.substr(1), c = [
                "O",
                "Moz",
                "ms",
                "Ms",
                "Webkit"
            ], d = 5; --d > -1 && void 0 === e[c[d] + a];);
            return d >= 0 ? (Z = 3 === d ? "ms" : c[d], Y = "-" + Z.toLowerCase() + "-", Z + a) : null;
        }, _ = "undefined" != typeof window ? window : P1.defaultView || {
            getComputedStyle: function() {}
        }, aa = function(a) {
            return _.getComputedStyle(a);
        }, ba = g5.getStyle = function(a, b, c, d, e) {
            var f;
            return V || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || aa(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(C1, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : W(a);
        }, ca = T.convertToPixels = function(a, c, d, e, f) {
            if ("px" === e || !e && "lineHeight" !== c) return d;
            if ("auto" === e || !d) return 0;
            var h, i, j, k = G1.test(c), l = a, m = R1.style, n = 0 > d, o = 1 === d;
            if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e) {
                if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                else {
                    if (m.cssText = "border:0 solid red;position:" + ba(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                    else {
                        if (l = a.parentNode || P1.body, -1 !== ba(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b8.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                        m[k ? "width" : "height"] = d + e;
                    }
                    l.appendChild(R1), h = parseFloat(R1[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(R1), k && "%" === e && g5.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = ca(a, c, d, e, !0));
                }
            } else i = aa(a).lineHeight, a.style.lineHeight = d, h = parseFloat(aa(a).lineHeight), a.style.lineHeight = i;
            return o && (h /= 100), n ? -h : h;
        }, da = T.calculateOffset = function(a, b, c) {
            if ("absolute" !== ba(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top", e = ba(a, "margin" + d, c);
            return a["offset" + d] - (ca(a, b, parseFloat(e), e.replace(x1, "")) || 0);
        }, ea = function(a, b) {
            var c, d, e, f = {};
            if (b = b || aa(a, null)) {
                if (c = b.length) for(; --c > -1;)e = b[c], (-1 === e.indexOf("-transform") || Fa === e) && (f[e.replace(D1, F1)] = b.getPropertyValue(e));
                else for(c in b)(-1 === c.indexOf("Transform") || Ea === c) && (f[c] = b[c]);
            } else if (b = a.currentStyle || a.style) for(c in b)"string" == typeof c && void 0 === f[c] && (f[c.replace(D1, F1)] = b[c]);
            return V || (f.opacity = W(a)), d = Ta(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ha && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f;
        }, fa = function(a, b, c, d, e) {
            var f, g, h, i = {}, j = a.style;
            for(g in c)"cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(w1, "") ? f : 0 : da(a, g), void 0 !== j[g] && (h = new ua(j, g, j[g], h)));
            if (d) for(g in d)"className" !== g && (i[g] = d[g]);
            return {
                difs: i,
                firstMPT: h
            };
        }, ga = {
            width: [
                "Left",
                "Right"
            ],
            height: [
                "Top",
                "Bottom"
            ]
        }, ha = [
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom"
        ], ia = function(a, b, c) {
            if ("svg" === (a.nodeName + "").toLowerCase()) return (c || aa(a))[b] || 0;
            if (a.getCTM && Qa(a)) return a.getBBox()[b] || 0;
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight), e = ga[b], f = e.length;
            for(c = c || aa(a, null); --f > -1;)d -= parseFloat(ba(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(ba(a, "border" + e[f] + "Width", c, !0)) || 0;
            return d;
        }, ja = function(a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
            (null == a || "" === a) && (a = "0 0");
            var c, d = a.split(" "), e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0], f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
            if (d.length > 3 && !b) {
                for(d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++)a.push(ja(d[c]));
                return a.join(",");
            }
            return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(w1, "")), b.oy = parseFloat(f.replace(w1, "")), b.v = a), b || a;
        }, ka = function(a, b) {
            return "function" == typeof a && (a = a(r2, q3)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
        }, la = function(a, b) {
            "function" == typeof a && (a = a(r2, q3));
            var c = "string" == typeof a && "=" === a.charAt(1);
            return "string" == typeof a && "v" === a.charAt(a.length - 2) && (a = (c ? a.substr(0, 2) : 0) + window["inner" + ("vh" === a.substr(-2) ? "Height" : "Width")] * (parseFloat(c ? a.substr(2) : a) / 100)), null == a ? b : c ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0;
        }, ma = function(a, b, c, d) {
            var e, f, g, h, i, j = 1e-6;
            return "function" == typeof a && (a = a(r2, q3)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : M1) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h;
        }, na = {
            aqua: [
                0,
                255,
                255
            ],
            lime: [
                0,
                255,
                0
            ],
            silver: [
                192,
                192,
                192
            ],
            black: [
                0,
                0,
                0
            ],
            maroon: [
                128,
                0,
                0
            ],
            teal: [
                0,
                128,
                128
            ],
            blue: [
                0,
                0,
                255
            ],
            navy: [
                0,
                0,
                128
            ],
            white: [
                255,
                255,
                255
            ],
            fuchsia: [
                255,
                0,
                255
            ],
            olive: [
                128,
                128,
                0
            ],
            yellow: [
                255,
                255,
                0
            ],
            orange: [
                255,
                165,
                0
            ],
            gray: [
                128,
                128,
                128
            ],
            purple: [
                128,
                0,
                128
            ],
            green: [
                0,
                128,
                0
            ],
            red: [
                255,
                0,
                0
            ],
            pink: [
                255,
                192,
                203
            ],
            cyan: [
                0,
                255,
                255
            ],
            transparent: [
                255,
                255,
                255,
                0
            ]
        }, oa = function(a, b, c) {
            return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0;
        }, pa = g5.parseColor = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a) {
                if ("number" == typeof a) c = [
                    a >> 16,
                    a >> 8 & 255,
                    255 & a
                ];
                else {
                    if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), na[a]) c = na[a];
                    else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [
                        a >> 16,
                        a >> 8 & 255,
                        255 & a
                    ];
                    else if ("hsl" === a.substr(0, 3)) {
                        if (c = m = a.match(s2), b) {
                            if (-1 !== a.indexOf("=")) return a.match(t1);
                        } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = oa(g + 1 / 3, d, e), c[1] = oa(g, d, e), c[2] = oa(g - 1 / 3, d, e);
                    } else c = a.match(s2) || na.transparent;
                    c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]));
                }
            } else c = na.black;
            return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c;
        }, qa = function(a, b) {
            var c, d, e, f = a.match(ra) || [], g = 0, h = "";
            if (!f.length) return a;
            for(c = 0; c < f.length; c++)d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = pa(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
            return h + a.substr(g);
        }, ra = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for(j5 in na)ra += "|" + j5 + "\\b";
        ra = new RegExp(ra + ")", "gi"), g5.colorStringFilter = function(a) {
            var b, c = a[0] + " " + a[1];
            ra.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = qa(a[0], b), a[1] = qa(a[1], b)), ra.lastIndex = 0;
        }, b8.defaultStringFilter || (b8.defaultStringFilter = g5.colorStringFilter);
        var sa = function(a10, b9, c, d) {
            if (null == a10) return function(a) {
                return a;
            };
            var e, f6 = b9 ? (a10.match(ra) || [
                ""
            ])[0] : "", g = a10.split(f6).join("").match(u1) || [], h = a10.substr(0, a10.indexOf(g[0])), i = ")" === a10.charAt(a10.length - 1) ? ")" : "", j = -1 !== a10.indexOf(" ") ? " " : ",", k = g.length, l = k > 0 ? g[0].replace(s2, "") : "";
            return k ? e = b9 ? function(a) {
                var b, m, n, o;
                if ("number" == typeof a) a += l;
                else if (d && J1.test(a)) {
                    for(o = a.replace(J1, "|").split("|"), n = 0; n < o.length; n++)o[n] = e(o[n]);
                    return o.join(",");
                }
                if (b = (a.match(ra) || [
                    f6
                ])[0], m = a.split(b).join("").match(u1) || [], n = m.length, k > n--) for(; ++n < k;)m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
            } : function(a) {
                var b, f, m;
                if ("number" == typeof a) a += l;
                else if (d && J1.test(a)) {
                    for(f = a.replace(J1, "|").split("|"), m = 0; m < f.length; m++)f[m] = e(f[m]);
                    return f.join(",");
                }
                if (b = a.match("," === j ? u1 : v1) || [], m = b.length, k > m--) for(; ++m < k;)b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                return (h && "none" !== a ? a.substr(0, a.indexOf(b[0])) || h : h) + b.join(j) + i;
            } : function(a) {
                return a;
            };
        }, ta = function(a) {
            return a = a.split(","), function(b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for(h = {}, i = 0; 4 > i; i++)h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g);
            };
        }, ua = (T._setPluginRatio = function(a) {
            this.plugin.setRatio(a);
            for(var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;)b = h[i.v], i.r ? b = i.r(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
            if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 1 === a || 0 === a) for(i = g.firstMPT, f = 1 === a ? "e" : "b"; i;){
                if (c = i.t, c.type) {
                    if (1 === c.type) {
                        for(e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++)e += c["xn" + d] + c["xs" + (d + 1)];
                        c[f] = e;
                    }
                } else c[f] = c.s + c.xs0;
                i = i._next;
            }
        }, function(a, b, c, d, e) {
            this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d);
        }), va = (T._parseToProxy = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = N1;
            for(c._transform = null, N1 = b, d = k = c.parse(a, b, d, e), N1 = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;){
                if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new ua(d, "s", h, j, d.r), d.c = 0), 1 === d.type)) for(g = d.l; --g > 0;)i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new ua(d, i, h, j, d.rxp[i]));
                d = d._next;
            }
            return {
                proxy: m,
                end: n,
                firstMPT: j,
                pt: k
            };
        }, T.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof va || f5.push(this.n), this.r = j ? "function" == typeof j ? j : Math.round : j, this.type = h || 0, k && (this.pr = k, c5 = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this);
        }), wa = function(a, b, c, d, e, f) {
            var g = new va(a, b, c, d - c, e, -1, f);
            return g.b = c, g.e = g.xs0 = d, g;
        }, xa = g5.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
            c = c || f || "", "function" == typeof d && (d = d(r2, q3)), h = new va(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && ra.test(d + c) && (d = [
                c,
                d
            ], g5.colorStringFilter(d), c = d[0], d = d[1]);
            var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "), E = d.split(", ").join(",").split(" "), F = D.length, G = k5 !== !1;
            for((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(J1, ", ").split(" "), E = E.join(" ").replace(J1, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, ra.lastIndex = 0, m = 0; F > m; m++)if (p = D[m], u = E[m] + "", x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ka(u, x), u.replace(t1, ""), G && -1 !== u.indexOf("px") ? Math.round : !1, !0);
            else if (e && ra.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && V, z = u, p = pa(p, C), u = pa(u, C), y = p.length + u.length > 6, y && !V && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (V || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ka(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ka(u[1], p[1]), "%,", !1).appendXtra("", p[2], ka(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), ra.lastIndex = 0;
            else if (v = p.match(s2)) {
                if (w = u.match(t1), !w || w.length !== v.length) return h;
                for(o = 0, n = 0; n < v.length; n++)A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ka(w[n], A), "", G && "px" === p.substr(z + A.length, 2) ? Math.round : !1, 0 === n), o = z + A.length;
                h["xs" + h.l] += p.substr(o);
            } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
            if (-1 !== d.indexOf("=") && h.data) {
                for(B = h.xs0 + h.data.s, m = 1; m < h.l; m++)B += h["xs" + m] + h.data["xn" + m];
                h.e = B + h["xs" + m];
            }
            return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h;
        }, ya = 9;
        for(j5 = va.prototype, j5.l = j5.pr = 0; --ya > 0;)j5["xn" + ya] = 0, j5["xs" + ya] = "";
        j5.xs0 = "", j5._next = j5._prev = j5.xfirst = j5.data = j5.plugin = j5.setRatio = j5.rxp = null, j5.appendXtra = function(a, b, c, d, e, f) {
            var g = this, h = g.l;
            return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new va(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                s: b + c
            }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g);
        };
        var za = function(a, b) {
            b = b || {}, this.p = b.prefix ? $(a) || a : a, i5[a] = i5[this.p] = this, this.format = b.formatter || sa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.allowFunc = b.allowFunc, this.pr = b.priority || 0;
        }, Aa = T._registerComplexSpecialProp = function(a, b, c) {
            "object" != typeof b && (b = {
                parser: c
            });
            var d, e, f = a.split(","), g = b.defaultValue;
            for(c = c || [
                g
            ], d = 0; d < f.length; d++)b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new za(f[d], b);
        }, Ba = T._registerPluginProp = function(a11) {
            if (!i5[a11]) {
                var b = a11.charAt(0).toUpperCase() + a11.substr(1) + "Plugin";
                Aa(a11, {
                    parser: function(a, c, d, e, f, g, j) {
                        var k = h5.com.greensock.plugins[b];
                        return k ? (k._cssRegister(), i5[d].parse(a, c, d, e, f, g, j)) : (X("Error: " + b + " js file not loaded."), f);
                    }
                });
            }
        };
        j5 = za.prototype, j5.parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (J1.test(c) || J1.test(b) ? (h = b.replace(J1, "|").split("|"), i = c.replace(J1, "|").split("|")) : m && (h = [
                b
            ], i = [
                c
            ])), i) {
                for(j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++)b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                b = h.join(", "), c = i.join(", ");
            }
            return xa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
        }, j5.parse = function(a, b, c, d, f, g, h) {
            return this.parseComplex(a.style, this.format(ba(a, this.p, e5, !1, this.dflt)), this.format(b), f, g);
        }, g5.registerSpecialProp = function(a12, b, c) {
            Aa(a12, {
                parser: function(a, d, e, f, g, h, i) {
                    var j = new va(a, e, 0, 0, g, 2, e, !1, c);
                    return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j;
                },
                priority: c
            });
        }, g5.useSVGTransformAttr = !0;
        var Ca, Da = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ea = $("transform"), Fa = Y + "transform", Ga = $("transformOrigin"), Ha = null !== $("perspective"), Ia = T.Transform = function() {
            this.perspective = parseFloat(g5.defaultTransformPerspective) || 0, this.force3D = g5.defaultForce3D !== !1 && Ha ? g5.defaultForce3D || "auto" : !1;
        }, Ja = _gsScope.SVGElement, Ka = function(a, b, c) {
            var d, e = P1.createElementNS("http://www.w3.org/2000/svg", a), f = /([a-z])([A-Z])/g;
            for(d in c)e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e), e;
        }, La = P1.documentElement || {}, Ma = function() {
            var a, b, c, d = p4 || /Android/i.test(U) && !_gsScope.chrome;
            return P1.createElementNS && La.appendChild && !d && (a = Ka("svg", La), b = Ka("rect", a, {
                width: 100,
                height: 50,
                x: 100
            }), c = b.getBoundingClientRect().width, b.style[Ga] = "50% 50%", b.style[Ea] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n4 && Ha), La.removeChild(a)), d;
        }(), Na = function(a, b, c, d, e, f) {
            var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform, w = Sa(a, !0);
            v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
                x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }), b = ja(b).split(" "), h = [
                (-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x,
                (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y
            ]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Ra && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g5.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "));
        }, Oa = function(a) {
            var b, c = Q1("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), d = this.parentNode, e = this.nextSibling, f = this.style.cssText;
            if (La.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
                b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Oa;
            } catch (g) {}
            else this._originalGetBBox && (b = this._originalGetBBox());
            return e ? d.insertBefore(this, e) : d.appendChild(this), La.removeChild(c), this.style.cssText = f, b;
        }, Pa = function(a) {
            try {
                return a.getBBox();
            } catch (b) {
                return Oa.call(a, !0);
            }
        }, Qa = function(a) {
            return !(!Ja || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Pa(a));
        }, Ra = [
            1,
            0,
            0,
            1,
            0,
            0
        ], Sa = function(a, b) {
            var c, d, e, f, g, h, i, j = a._gsTransform || new Ia, k = 1e5, l = a.style;
            if (Ea ? d = ba(a, Fa, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(H1), d = d && 4 === d.length ? [
                d[0].substr(4),
                Number(d[2].substr(4)),
                Number(d[1].substr(4)),
                d[3].substr(4),
                j.x || 0,
                j.y || 0
            ].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, Ea && c && !a.offsetParent && a !== La && (f = l.display, l.display = "block", i = a.parentNode, i && a.offsetParent || (g = 1, h = a.nextSibling, La.appendChild(a)), d = ba(a, Fa, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? l.display = f : Xa(l, "display"), g && (h ? i.insertBefore(a, h) : i ? i.appendChild(a) : La.removeChild(a))), (j.svg || a.getCTM && Qa(a)) && (c && -1 !== (l[Ea] + "").indexOf("matrix") && (d = l[Ea], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Ra;
            for(e = (d || "").match(s2) || [], ya = e.length; --ya > -1;)f = Number(e[ya]), e[ya] = (g = f - (f |= 0)) ? (g * k + (0 > g ? -0.5 : .5) | 0) / k + f : f;
            return b && e.length > 6 ? [
                e[0],
                e[1],
                e[4],
                e[5],
                e[12],
                e[13]
            ] : e;
        }, Ta = T.getTransform = function(a, c, d, e) {
            if (a._gsTransform && d && !e) return a._gsTransform;
            var f, h, i, j, k, l, m = d ? a._gsTransform || new Ia : new Ia, n = m.scaleX < 0, o = 2e-5, p = 1e5, q = Ha ? parseFloat(ba(a, Ga, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0, r = parseFloat(g5.defaultTransformPerspective) || 0;
            if (m.svg = !(!a.getCTM || !Qa(a)), m.svg && (Na(a, ba(a, Ga, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Ca = g5.useSVGTransformAttr || Ma), f = Sa(a), f !== Ra) {
                if (16 === f.length) {
                    var s, t, u, v, w, x = f[0], y = f[1], z = f[2], A = f[3], B = f[4], C = f[5], D = f[6], E = f[7], F = f[8], G = f[9], H = f[10], I = f[12], J = f[13], K = f[14], L = f[11], N = Math.atan2(D, H);
                    m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * M1, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, L = E * -w + L * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * M1, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, L = A * w + L * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * M1, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * M1, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = L ? 1 / (0 > L ? -L : L) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C));
                } else if (!Ha || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                    var O = f.length >= 6, P = O ? f[0] : 1, Q = f[1] || 0, R = f[2] || 0, S = O ? f[3] : 1;
                    m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * M1 : m.rotation || 0, l = R || S ? Math.atan2(R, S) * M1 + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Ha && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S));
                }
                Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;
                for(h in m)m[h] < o && m[h] > -o && (m[h] = 0);
            }
            return d && (a._gsTransform = m, m.svg && (Ca && a.style[Ea] ? b8.delayedCall(.001, function() {
                Xa(a.style, Ea);
            }) : !Ca && a.getAttribute("transform") && b8.delayedCall(.001, function() {
                a.removeAttribute("transform");
            }))), m;
        }, Ua = function(a) {
            var b, c, d = this.data, e = -d.rotation * L1, f = e + d.skewX * L1, g = 1e5, h = (Math.cos(e) * d.scaleX * g | 0) / g, i = (Math.sin(e) * d.scaleX * g | 0) / g, j = (Math.sin(f) * -d.scaleY * g | 0) / g, k = (Math.cos(f) * d.scaleY * g | 0) / g, l = this.t.style, m = this.t.currentStyle;
            if (m) {
                c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                var n, o, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position, t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, u = d.x + q * d.xPercent / 100, v = d.y + r * d.yPercent / 100;
                if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(I1, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || y1.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                    var w, z, A, B = 8 > p4 ? 1 : -1;
                    for(n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), ya = 0; 4 > ya; ya++)z = ha[ya], w = m[z], c = -1 !== w.indexOf("px") ? parseFloat(w) : ca(this.t, z, parseFloat(w), w.replace(x1, "")) || 0, A = c !== d[z] ? 2 > ya ? -d.ieOffsetX : -d.ieOffsetY : 2 > ya ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === ya || 2 === ya ? 1 : B))) + "px";
                }
            }
        }, Va = T.set3DTransformRatio = T.setTransformRatio = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data, A = this.t.style, B = z.rotation, C = z.rotationX, D = z.rotationY, E = z.scaleX, F = z.scaleY, G = z.scaleZ, H = z.x, I = z.y, J = z.z, K = z.svg, M = z.perspective, N = z.force3D, O = z.skewY, P = z.skewX;
            if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Ca && K || !Ha) return void (B || P || K ? (B *= L1, x = P * L1, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * L1), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * L1), b = Math.sqrt(1 + b * b), c *= b, f *= b)), K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Ca && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", K && Ca ? this.t.setAttribute("transform", "matrix(" + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
            if (n4 && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= L1, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * L1, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * L1), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * L1), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
            else {
                if (!(D || C || 1 !== G || M || K)) return void (A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                c = g = 1, d = f = 0;
            }
            k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * L1, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * L1, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || K) && (p && (H += e * -p, I += h * -p, J += k * -p + p), K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ea] = u;
        };
        j5 = Ia.prototype, j5.x = j5.y = j5.z = j5.skewX = j5.skewY = j5.rotation = j5.rotationX = j5.rotationY = j5.zOrigin = j5.xPercent = j5.yPercent = j5.xOffset = j5.yOffset = 0, j5.scaleX = j5.scaleY = j5.scaleZ = 1, Aa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                d._lastParsedTransform = i;
                var j = i.scale && "function" == typeof i.scale ? i.scale : 0;
                j && (i.scale = j(r2, a));
                var k, l, m, n, o, p, s, t, u, v = a._gsTransform, w = a.style, x = 1e-6, y = Da.length, z = i, A = {}, B = "transformOrigin", C = Ta(a, e5, !0, z.parseTransform), D = z.transform && ("function" == typeof z.transform ? z.transform(r2, q3) : z.transform);
                if (C.skewType = z.skewType || C.skewType || g5.defaultSkewType, d._transform = C, "rotationZ" in z && (z.rotation = z.rotationZ), D && "string" == typeof D && Ea) l = R1.style, l[Ea] = D, l.display = "block", l.position = "absolute", -1 !== D.indexOf("%") && (l.width = ba(a, "width"), l.height = ba(a, "height")), P1.body.appendChild(R1), k = Ta(R1, null, !1), "simple" === C.skewType && (k.scaleY *= Math.cos(k.skewX * L1)), C.svg && (p = C.xOrigin, s = C.yOrigin, k.x -= C.xOffset, k.y -= C.yOffset, (z.transformOrigin || z.svgOrigin) && (D = {}, Na(a, ja(z.transformOrigin), D, z.svgOrigin, z.smoothOrigin, !0), p = D.xOrigin, s = D.yOrigin, k.x -= D.xOffset - C.xOffset, k.y -= D.yOffset - C.yOffset), (p || s) && (t = Sa(R1, !0), k.x -= p - (p * t[0] + s * t[2]), k.y -= s - (p * t[1] + s * t[3]))), P1.body.removeChild(R1), k.perspective || (k.perspective = C.perspective), null != z.xPercent && (k.xPercent = la(z.xPercent, C.xPercent)), null != z.yPercent && (k.yPercent = la(z.yPercent, C.yPercent));
                else if ("object" == typeof z) {
                    if (k = {
                        scaleX: la(null != z.scaleX ? z.scaleX : z.scale, C.scaleX),
                        scaleY: la(null != z.scaleY ? z.scaleY : z.scale, C.scaleY),
                        scaleZ: la(z.scaleZ, C.scaleZ),
                        x: la(z.x, C.x),
                        y: la(z.y, C.y),
                        z: la(z.z, C.z),
                        xPercent: la(z.xPercent, C.xPercent),
                        yPercent: la(z.yPercent, C.yPercent),
                        perspective: la(z.transformPerspective, C.perspective)
                    }, o = z.directionalRotation, null != o) {
                        if ("object" == typeof o) for(l in o)z[l] = o[l];
                        else z.rotation = o;
                    }
                    "string" == typeof z.x && -1 !== z.x.indexOf("%") && (k.x = 0, k.xPercent = la(z.x, C.xPercent)), "string" == typeof z.y && -1 !== z.y.indexOf("%") && (k.y = 0, k.yPercent = la(z.y, C.yPercent)), k.rotation = ma("rotation" in z ? z.rotation : "shortRotation" in z ? z.shortRotation + "_short" : C.rotation, C.rotation, "rotation", A), Ha && (k.rotationX = ma("rotationX" in z ? z.rotationX : "shortRotationX" in z ? z.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", A), k.rotationY = ma("rotationY" in z ? z.rotationY : "shortRotationY" in z ? z.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", A)), k.skewX = ma(z.skewX, C.skewX), k.skewY = ma(z.skewY, C.skewY);
                }
                for(Ha && null != z.force3D && (C.force3D = z.force3D, n = !0), m = C.force3D || C.z || C.rotationX || C.rotationY || k.z || k.rotationX || k.rotationY || k.perspective, m || null == z.scale || (k.scaleZ = 1); --y > -1;)u = Da[y], D = k[u] - C[u], (D > x || -x > D || null != z[u] || null != N1[u]) && (n = !0, f = new va(C, u, C[u], D, f), u in A && (f.e = A[u]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                return D = "function" == typeof z.transformOrigin ? z.transformOrigin(r2, q3) : z.transformOrigin, C.svg && (D || z.svgOrigin) && (p = C.xOffset, s = C.yOffset, Na(a, ja(D), k, z.svgOrigin, z.smoothOrigin), f = wa(C, "xOrigin", (v ? C : k).xOrigin, k.xOrigin, f, B), f = wa(C, "yOrigin", (v ? C : k).yOrigin, k.yOrigin, f, B), (p !== C.xOffset || s !== C.yOffset) && (f = wa(C, "xOffset", v ? p : C.xOffset, C.xOffset, f, B), f = wa(C, "yOffset", v ? s : C.yOffset, C.yOffset, f, B)), D = "0px 0px"), (D || Ha && m && C.zOrigin) && (Ea ? (n = !0, u = Ga, D || (D = (ba(a, u, e5, !1, "50% 50%") + "").split(" "), D = D[0] + " " + D[1] + " " + C.zOrigin + "px"), D += "", f = new va(w, u, 0, 0, f, -1, B), f.b = w[u], f.plugin = h, Ha ? (l = C.zOrigin, D = D.split(" "), C.zOrigin = (D.length > 2 ? parseFloat(D[2]) : l) || 0, f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px", f = new va(C, "zOrigin", 0, 0, f, -1, f.n), f.b = l, f.xs0 = f.e = C.zOrigin) : f.xs0 = f.e = D) : ja(D + "", C)), n && (d._transformType = C.svg && Ca || !m && 3 !== this._transformType ? 2 : 3), j && (i.scale = j), f;
            },
            allowFunc: !0,
            prefix: !0
        }), Aa("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), Aa("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: sa("inset(0% 0% 0% 0%)", !1, !0)
        }), Aa("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g, h) {
                b = this.format(b);
                var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = [
                    "borderTopLeftRadius",
                    "borderTopRightRadius",
                    "borderBottomRightRadius",
                    "borderBottomLeftRadius"
                ], z = a.style;
                for(q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++)this.p.indexOf("border") && (y[j] = $(y[j])), m = l = ba(a, y[j], e5, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d5[c] || t), s !== t && (v = ca(a, "borderLeft", o, t), w = ca(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = ca(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = xa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                return g;
            },
            prefix: !0,
            formatter: sa("0px 0px 0px 0px", !1, !0)
        }), Aa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, d, f, g) {
                return xa(a.style, c, this.format(ba(a, c, e5, !1, "0px 0px")), this.format(b), !1, "0px", f);
            },
            prefix: !0,
            formatter: sa("0px 0px", !1, !0)
        }), Aa("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position", o = e5 || aa(a, null), q = this.format((o ? p4 ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = ba(a, "backgroundImage").replace(E1, ""), m && "none" !== m)) {
                    for(h = q.split(" "), i = r.split(" "), S1.setAttribute("src", m), j = 2; --j > -1;)q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - S1.width : a.offsetHeight - S1.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                    q = h.join(" ");
                }
                return this.parseComplex(a.style, q, r, f, g);
            },
            formatter: ja
        }), Aa("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(a) {
                return a += "", "co" === a.substr(0, 2) ? a : ja(-1 === a.indexOf(" ") ? a + " " + a : a);
            }
        }), Aa("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), Aa("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), Aa("transformStyle", {
            prefix: !0
        }), Aa("backfaceVisibility", {
            prefix: !0
        }), Aa("userSelect", {
            prefix: !0
        }), Aa("margin", {
            parser: ta("marginTop,marginRight,marginBottom,marginLeft")
        }), Aa("padding", {
            parser: ta("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), Aa("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return 9 > p4 ? (i = a.currentStyle, j = 8 > p4 ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(ba(a, this.p, e5, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g);
            }
        }), Aa("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), Aa("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e;
            }
        }), Aa("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                var h = ba(a, "borderTopWidth", e5, !1, "0px"), i = this.format(b).split(" "), j = i[0].replace(x1, "");
                return "px" !== j && (h = parseFloat(h) / ca(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + ba(a, "borderTopStyle", e5, !1, "solid") + " " + ba(a, "borderTopColor", e5, !1, "#000")), i.join(" "), f, g);
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ra) || [
                    "#000"
                ])[0];
            }
        }), Aa("borderWidth", {
            parser: ta("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), Aa("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e, f) {
                var g = a.style, h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                return new va(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
            }
        });
        var Wa = function(a) {
            var b, c = this.t, d = c.filter || ba(this.data, "filter") || "", e = this.s + this.c * a | 0;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !ba(this.data, "filter")) : (c.filter = d.replace(A1, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(y1, "opacity=" + e));
        };
        Aa("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h = parseFloat(ba(a, "opacity", e5, !1, "1")), i = a.style, j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === ba(a, "visibility", e5) && 0 !== b && (h = 0), V ? f = new va(i, "opacity", h, b - h, f) : (f = new va(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Wa), j && (f = new va(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f;
            }
        });
        var Xa = function(a, b) {
            b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(C1, "-$1").toLowerCase())) : a.removeAttribute(b));
        }, Ya = function(a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                for(var b = this.data, c = this.t.style; b;)b.v ? c[b.p] = b.v : Xa(c, b.p), b = b._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
        };
        Aa("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.getAttribute("class") || "", p = a.style.cssText;
                if (g = f._classNamePT = new va(a, d, 0, 0, g, 2), g.setRatio = Ya, g.pr = -11, c5 = !0, g.b = o, k = ea(a, e5), l = a._gsClassPT) {
                    for(m = {}, n = l.data; n;)m[n.p] = 1, n = n._next;
                    l.setRatio(1);
                }
                return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = fa(a, k, ea(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText !== p && (a.style.cssText = p), g = g.xfirst = f.parse(a, j.difs, g, h);
            }
        });
        var Za = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f, g = this.t.style, h = i5.transform.parse;
                if ("all" === this.e) g.cssText = "", e = !0;
                else for(b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;)c = b[d], i5[c] && (i5[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ga : i5[c].p), Xa(g, c);
                e && (Xa(g, Ea), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
            }
        };
        for(Aa("clearProps", {
            parser: function(a, b, d, e, f) {
                return f = new va(a, d, 0, 0, f, 2), f.setRatio = Za, f.e = b, f.pr = -10, f.data = e._tween, c5 = !0, f;
            }
        }), j5 = "bezier,throwProps,physicsProps,physics2D".split(","), ya = j5.length; ya--;)Ba(j5[ya]);
        j5 = g5.prototype, j5._firstPT = j5._lastParsedTransform = j5._transform = null, j5._onInitTween = function(a, b, h, j) {
            if (!a.nodeType) return !1;
            this._target = q3 = a, this._tween = h, this._vars = b, r2 = j, k5 = b.autoRound, c5 = !1, d5 = b.suffixMap || g5.suffixMap, e5 = aa(a, ""), f5 = this._overwriteProps;
            var n, p, s, t, u, v, w, x, y, A = a.style;
            if (l4 && "" === A.zIndex && (n = ba(a, "zIndex", e5), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ea(a, e5), A.cssText = t + ";" + b, n = fa(a, n, ea(a)).difs, !V && z1.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i5.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
                for(y = 3 === this._transformType, Ea ? m4 && (l4 = !0, "" === A.zIndex && (w = ba(a, "zIndex", e5), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o4 && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (y ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;)s = s._next;
                x = new va(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ea ? Va : Ua, x.data = this._transform || Ta(a, e5, !0), x.tween = h, x.pr = -1, f5.pop();
            }
            if (c5) {
                for(; p;){
                    for(v = p._next, s = t; s && s.pr > p.pr;)s = s._next;
                    (p._prev = s ? s._prev : u) ? p._prev._next = p : t = p, (p._next = s) ? s._prev = p : u = p, p = v;
                }
                this._firstPT = t;
            }
            return !0;
        }, j5.parse = function(a, b, c, f) {
            var g, h, j, l, m, n, o, p, s, t, u = a.style;
            for(g in b){
                if (n = b[g], h = i5[g], "function" != typeof n || h && h.allowFunc || (n = n(r2, q3)), h) c = h.parse(a, n, g, this, c, f, b);
                else {
                    if ("--" === g.substr(0, 2)) {
                        this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", aa(a).getPropertyValue(g) + "", n + "", g, !1, g);
                        continue;
                    }
                    m = ba(a, g, e5) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && B1.test(n) ? (s || (n = pa(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = xa(u, g, m, n, !0, "transparent", c, 0, f)) : s && K1.test(n) ? c = xa(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ia(a, g, e5), o = "px") : "left" === g || "top" === g ? (j = da(a, g, e5), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(x1, "")) : (l = parseFloat(n), p = s ? n.replace(x1, "") : ""), "" === p && (p = g in d5 ? d5[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = ca(a, g, j, o), "%" === p ? (j /= ca(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= ca(a, g, 1, p) : "px" !== p && (l = ca(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new va(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : X("invalid " + g + " tween value: " + b[g]) : (c = new va(u, g, j, l - j, c, 0, g, k5 !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p));
                }
                f && c && !c.plugin && (c.plugin = f);
            }
            return c;
        }, j5.setRatio = function(a) {
            var b, c, d, e = this._firstPT, f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -0.000001) for(; e;){
                    if (b = e.c * a + e.s, e.r ? b = e.r(b) : f > b && b > -f && (b = 0), e.type) {
                        if (1 === e.type) {
                            if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                            else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                            else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                            else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                            else {
                                for(c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)c += e["xn" + d] + e["xs" + (d + 1)];
                                e.t[e.p] = c;
                            }
                        } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                    } else e.t[e.p] = b + e.xs0;
                    e = e._next;
                }
                else for(; e;)2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
            } else for(; e;){
                if (2 !== e.type) {
                    if (e.r && -1 !== e.type) {
                        if (b = e.r(e.s + e.c), e.type) {
                            if (1 === e.type) {
                                for(d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)c += e["xn" + d] + e["xs" + (d + 1)];
                                e.t[e.p] = c;
                            }
                        } else e.t[e.p] = b + e.xs0;
                    } else e.t[e.p] = e.e;
                } else e.setRatio(a);
                e = e._next;
            }
        }, j5._enableTransforms = function(a) {
            this._transform = this._transform || Ta(this._target, e5, !0), this._transformType = this._transform.svg && Ca || !a && 3 !== this._transformType ? 2 : 3;
        };
        var $a = function(a) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
        };
        j5._addLazySet = function(a, b, c) {
            var d = this._firstPT = new va(a, b, 0, 0, this._firstPT, 2);
            d.e = c, d.setRatio = $a, d.data = this;
        }, j5._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a;
        }, j5._mod = function(a) {
            for(var b = this._firstPT; b;)"function" == typeof a[b.p] && (b.r = a[b.p]), b = b._next;
        }, j5._kill = function(b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                f = {};
                for(d in b)f[d] = b[d];
                f.opacity = 1, f.autoAlpha && (f.visibility = 1);
            }
            for(b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;)c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
            return a9.prototype._kill.call(this, f);
        };
        var _a = function(a, b, c) {
            var d, e, f, g;
            if (a.slice) for(e = a.length; --e > -1;)_a(a[e], b, c);
            else for(d = a.childNodes, e = d.length; --e > -1;)f = d[e], g = f.type, f.style && (b.push(ea(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || _a(f, b, c);
        };
        return g5.cascadeTo = function(a, c, d) {
            var e, f, g, h, i = b8.to(a, c, d), j = [
                i
            ], k = [], l = [], m = [], n = b8._internals.reservedProps;
            for(a = i._targets || i.target, _a(a, k, m), i.render(c, !0, !0), _a(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)if (f = fa(m[e], k[e], l[e]), f.firstMPT) {
                f = f.difs;
                for(g in d)n[g] && (f[g] = d[g]);
                h = {};
                for(g in f)h[g] = k[e][g];
                j.push(b8.fromTo(m[e], c, h, f));
            }
            return j;
        }, a9.activate([
            g5
        ]), g5;
    }, !0), function() {
        var a13 = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function(a, b, c) {
                return this._tween = c, !0;
            }
        }), b10 = function(a) {
            var b = 1 > a ? Math.pow(10, (a + "").length - 2) : 1;
            return function(c) {
                return (Math.round(c / a) * a * b | 0) / b;
            };
        }, c6 = function(a, b) {
            for(; a;)a.f || a.blob || (a.m = b || Math.round), a = a._next;
        }, d6 = a13.prototype;
        d6._onInitAllProps = function() {
            var a, d, e, f, g = this._tween, h = g.vars.roundProps, i = {}, j = g._propLookup.roundProps;
            if ("object" != typeof h || h.push) for("string" == typeof h && (h = h.split(",")), e = h.length; --e > -1;)i[h[e]] = Math.round;
            else for(f in h)i[f] = b10(h[f]);
            for(f in i)for(a = g._firstPT; a;)d = a._next, a.pg ? a.t._mod(i) : a.n === f && (2 === a.f && a.t ? c6(a.t._firstPT, i[f]) : (this._add(a.t, f, a.s, a.c, i[f]), d && (d._prev = a._prev), a._prev ? a._prev._next = d : g._firstPT === a && (g._firstPT = d), a._next = a._prev = null, g._propLookup[f] = j)), a = d;
            return !1;
        }, d6._add = function(a, b, c, d, e) {
            this._addTween(a, b, c, c + d, b, e || Math.round), this._overwriteProps.push(b);
        };
    }(), function() {
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function(a, b, c, d) {
                var e, f;
                if ("function" != typeof a.setAttribute) return !1;
                for(e in b)f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
                return !0;
            }
        });
    }(), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(a, b, c, d) {
            "object" != typeof b && (b = {
                rotation: b
            }), this.finals = {};
            var e, f, g, h, i, j, k = b.useRadians === !0 ? 2 * Math.PI : 360, l = 1e-6;
            for(e in b)"useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
            return !0;
        },
        set: function(a) {
            var b;
            if (1 !== a) this._super.setRatio.call(this, a);
            else for(b = this._firstPT; b;)b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next;
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", [
        "easing.Ease"
    ], function(a14) {
        var b11, c7, d7, e6, f7 = _gsScope.GreenSockGlobals || _gsScope, g6 = f7.com.greensock, h6 = 2 * Math.PI, i6 = Math.PI / 2, j6 = g6._class, k6 = function(b, c) {
            var d = j6("easing." + b, function() {}, !0), e = d.prototype = new a14;
            return e.constructor = d, e.getRatio = c, d;
        }, l5 = a14.register || function() {}, m5 = function(a, b, c, d, e) {
            var f = j6("easing." + a, {
                easeOut: new b,
                easeIn: new c,
                easeInOut: new d
            }, !0);
            return l5(f, a), f;
        }, n = function(a, b, c) {
            this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a);
        }, o5 = function(b, c) {
            var d = j6("easing." + b, function(a) {
                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1;
            }, !0), e = d.prototype = new a14;
            return e.constructor = d, e.getRatio = c, e.config = function(a) {
                return new d(a);
            }, d;
        }, p5 = m5("Back", o5("BackOut", function(a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
        }), o5("BackIn", function(a) {
            return a * a * ((this._p1 + 1) * a - this._p1);
        }), o5("BackInOut", function(a) {
            return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
        })), q4 = j6("easing.SlowMo", function(a, b, c) {
            b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0;
        }, !0), r3 = q4.prototype = new a14;
        return r3.constructor = q4, r3.getRatio = function(a) {
            var b = a + (.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b;
        }, q4.ease = new q4(.7, .7), r3.config = q4.config = function(a, b, c) {
            return new q4(a, b, c);
        }, b11 = j6("easing.SteppedEase", function(a, b) {
            a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0;
        }, !0), r3 = b11.prototype = new a14, r3.constructor = b11, r3.getRatio = function(a) {
            return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1;
        }, r3.config = b11.config = function(a, c) {
            return new b11(a, c);
        }, c7 = j6("easing.ExpoScaleEase", function(a, b, c) {
            this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c;
        }, !0), r3 = c7.prototype = new a14, r3.constructor = c7, r3.getRatio = function(a) {
            return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2;
        }, r3.config = c7.config = function(a, b, d) {
            return new c7(a, b, d);
        }, d7 = j6("easing.RoughEase", function(b12) {
            b12 = b12 || {};
            for(var c, d, e, f, g, h, i = b12.taper || "none", j = [], k = 0, l = 0 | (b12.points || 20), m = l, o = b12.randomize !== !1, p = b12.clamp === !0, q = b12.template instanceof a14 ? b12.template : null, r = "number" == typeof b12.strength ? .4 * b12.strength : .4; --m > -1;)c = o ? Math.random() : 1 / l * m, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                x: c,
                y: d
            };
            for(j.sort(function(a, b) {
                return a.x - b.x;
            }), h = new n(1, 1, null), m = l; --m > -1;)g = j[m], h = new n(g.x, g.y, h);
            this._prev = new n(0, 0, 0 !== h.t ? h : h.next);
        }, !0), r3 = d7.prototype = new a14, r3.constructor = d7, r3.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for(; b.next && a >= b.t;)b = b.next;
                b = b.prev;
            } else for(; b.prev && a <= b.t;)b = b.prev;
            return this._prev = b, b.v + (a - b.t) / b.gap * b.c;
        }, r3.config = function(a) {
            return new d7(a);
        }, d7.ease = new d7, m5("Bounce", k6("BounceOut", function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
        }), k6("BounceIn", function(a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);
        }), k6("BounceInOut", function(a) {
            var b = .5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5;
        })), m5("Circ", k6("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a);
        }), k6("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1);
        }), k6("CircInOut", function(a) {
            return (a *= 2) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
        })), e6 = function(b13, c, d) {
            var e = j6("easing." + b13, function(a, b) {
                this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / h6 * (Math.asin(1 / this._p1) || 0), this._p2 = h6 / this._p2;
            }, !0), f = e.prototype = new a14;
            return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                return new e(a, b);
            }, e;
        }, m5("Elastic", e6("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
        }, .3), e6("ElasticIn", function(a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2));
        }, .3), e6("ElasticInOut", function(a) {
            return (a *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1;
        }, .45)), m5("Expo", k6("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a);
        }), k6("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - .001;
        }), k6("ExpoInOut", function(a) {
            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)));
        })), m5("Sine", k6("SineOut", function(a) {
            return Math.sin(a * i6);
        }), k6("SineIn", function(a) {
            return -Math.cos(a * i6) + 1;
        }), k6("SineInOut", function(a) {
            return -0.5 * (Math.cos(Math.PI * a) - 1);
        })), j6("easing.EaseLookup", {
            find: function(b) {
                return a14.map[b];
            }
        }, !0), l5(f7.SlowMo, "SlowMo", "ease,"), l5(d7, "RoughEase", "ease,"), l5(b11, "SteppedEase", "ease,"), p5;
    }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(a15, b14) {
    "use strict";
    var c8 = {}, d8 = a15.document, e7 = a15.GreenSockGlobals = a15.GreenSockGlobals || a15, f8 = e7[b14];
    if (f8) return "undefined" != typeof module && module.exports && (module.exports = f8), f8;
    var g7, h7, i7, j7, k7, l6 = function(a) {
        var b, c = a.split("."), d = e7;
        for(b = 0; b < c.length; b++)d[c[b]] = d = d[c[b]] || {};
        return d;
    }, m6 = l6("com.greensock"), n5 = 1e-8, o6 = function(a) {
        var b, c = [], d = a.length;
        for(b = 0; b !== d; c.push(a[b++]));
        return c;
    }, p6 = function() {}, q5 = function() {
        var a = Object.prototype.toString, b = a.call([]);
        return function(c) {
            return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b);
        };
    }(), r4 = {}, s3 = function(d, f, g, h) {
        this.sc = r4[d] ? r4[d].sc : [], r4[d] = this, this.gsClass = null, this.func = g;
        var i = [];
        this.check = function(j) {
            for(var k, m, n, o, p = f.length, q = p; --p > -1;)(k = r4[f[p]] || new s3(f[p], [])).gsClass ? (i[p] = k.gsClass, q--) : j && k.sc.push(this);
            if (0 === q && g) {
                if (m = ("com.greensock." + d).split("."), n = m.pop(), o = l6(m.join("."))[n] = this.gsClass = g.apply(g, i), h) {
                    if (e7[n] = c8[n] = o, "undefined" != typeof module && module.exports) {
                        if (d === b14) {
                            module.exports = c8[b14] = o;
                            for(p in c8)o[p] = c8[p];
                        } else c8[b14] && (c8[b14][n] = o);
                    } else "function" == typeof define && define.amd && define((a15.GreenSockAMDPath ? a15.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                        return o;
                    });
                }
                for(p = 0; p < this.sc.length; p++)this.sc[p].check();
            }
        }, this.check(!0);
    }, t = a15._gsDefine = function(a, b, c, d) {
        return new s3(a, b, c, d);
    }, u = m6._class = function(a, b, c) {
        return b = b || function() {}, t(a, [], function() {
            return b;
        }, c), b;
    };
    t.globals = e7;
    var v = [
        0,
        0,
        1,
        1
    ], w = u("easing.Ease", function(a, b, c, d) {
        this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? v.concat(b) : v;
    }, !0), x = w.map = {}, y = w.register = function(a, b, c, d) {
        for(var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)for(f = i[j], e = d ? u("easing." + f, null, !0) : m6.easing[f] || {}, g = k.length; --g > -1;)h = k[g], x[f + "." + h] = x[h + f] = e[h] = a.getRatio ? a : a[h] || new a;
    };
    for(i7 = w.prototype, i7._calcEnd = !1, i7.getRatio = function(a) {
        if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
        var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
        return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2;
    }, g7 = [
        "Linear",
        "Quad",
        "Cubic",
        "Quart",
        "Quint,Strong"
    ], h7 = g7.length; --h7 > -1;)i7 = g7[h7] + ",Power" + h7, y(new w(null, null, 1, h7), i7, "easeOut", !0), y(new w(null, null, 2, h7), i7, "easeIn" + (0 === h7 ? ",easeNone" : "")), y(new w(null, null, 3, h7), i7, "easeInOut");
    x.linear = m6.easing.Linear.easeIn, x.swing = m6.easing.Quad.easeInOut;
    var z = u("events.EventDispatcher", function(a) {
        this._listeners = {}, this._eventTarget = a || this;
    });
    i7 = z.prototype, i7.addEventListener = function(a, b, c, d, e) {
        e = e || 0;
        var f, g, h = this._listeners[a], i = 0;
        for(this !== j7 || k7 || j7.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;)f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
        h.splice(i, 0, {
            c: b,
            s: c,
            up: d,
            pr: e
        });
    }, i7.removeEventListener = function(a, b) {
        var c, d = this._listeners[a];
        if (d) {
            for(c = d.length; --c > -1;)if (d[c].c === b) return void d.splice(c, 1);
        }
    }, i7.dispatchEvent = function(a) {
        var b, c, d, e = this._listeners[a];
        if (e) for(b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;)d = e[b], d && (d.up ? d.c.call(d.s || c, {
            type: a,
            target: c
        }) : d.c.call(d.s || c));
    };
    var A = a15.requestAnimationFrame, B = a15.cancelAnimationFrame, C = Date.now || function() {
        return (new Date).getTime();
    }, D = C();
    for(g7 = [
        "ms",
        "moz",
        "webkit",
        "o"
    ], h7 = g7.length; --h7 > -1 && !A;)A = a15[g7[h7] + "RequestAnimationFrame"], B = a15[g7[h7] + "CancelAnimationFrame"] || a15[g7[h7] + "CancelRequestAnimationFrame"];
    u("Ticker", function(a16, b15) {
        var c, e, f, g, h, i = this, l = C(), m = b15 !== !1 && A ? "auto" : !1, o = 500, q = 33, r = "tick", s = function(a) {
            var b, d, j = C() - D;
            j > o && (l += j - q), D += j, i.time = (D - l) / 1e3, b = i.time - h, (!c || b > 0 || a === !0) && (i.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && i.dispatchEvent(r);
        };
        z.call(i), i.time = i.frame = 0, i.tick = function() {
            s(!0);
        }, i.lagSmoothing = function(a, b) {
            return arguments.length ? (o = a || 1 / n5, void (q = Math.min(b, o, 0))) : 1 / n5 > o;
        }, i.sleep = function() {
            null != f && (m && B ? B(f) : clearTimeout(f), e = p6, f = null, i === j7 && (k7 = !1));
        }, i.wake = function(a17) {
            null !== f ? i.sleep() : a17 ? l += -D + (D = C()) : i.frame > 10 && (D = C() - o + 5), e = 0 === c ? p6 : m && A ? A : function(a) {
                return setTimeout(a, 1e3 * (h - i.time) + 1 | 0);
            }, i === j7 && (k7 = !0), s(2);
        }, i.fps = function(a) {
            return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void i.wake()) : c;
        }, i.useRAF = function(a) {
            return arguments.length ? (i.sleep(), m = a, void i.fps(c)) : m;
        }, i.fps(a16), setTimeout(function() {
            "auto" === m && i.frame < 5 && "hidden" !== (d8 || {}).visibilityState && i.useRAF(!1);
        }, 1500);
    }), i7 = m6.Ticker.prototype = new m6.events.EventDispatcher, i7.constructor = m6.Ticker;
    var E = u("core.Animation", function(a, b) {
        if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !!b.immediateRender, this.data = b.data, this._reversed = !!b.reversed, Z) {
            k7 || j7.wake();
            var c = this.vars.useFrames ? Y : Z;
            c.add(this, c._time), this.vars.paused && this.paused(!0);
        }
    });
    j7 = E.ticker = new m6.Ticker, i7 = E.prototype, i7._dirty = i7._gc = i7._initted = i7._paused = !1, i7._totalTime = i7._time = 0, i7._rawPrevTime = -1, i7._next = i7._last = i7._onUpdate = i7._timeline = i7.timeline = null, i7._paused = !1;
    var F = function() {
        k7 && C() - D > 2e3 && ("hidden" !== (d8 || {}).visibilityState || !j7.lagSmoothing()) && j7.wake();
        var a = setTimeout(F, 2e3);
        a.unref && a.unref();
    };
    F(), i7.play = function(a, b) {
        return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
    }, i7.pause = function(a, b) {
        return null != a && this.seek(a, b), this.paused(!0);
    }, i7.resume = function(a, b) {
        return null != a && this.seek(a, b), this.paused(!1);
    }, i7.seek = function(a, b) {
        return this.totalTime(Number(a), b !== !1);
    }, i7.restart = function(a, b) {
        return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0);
    }, i7.reverse = function(a, b) {
        return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
    }, i7.render = function(a, b, c) {}, i7.invalidate = function() {
        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
    }, i7.isActive = function() {
        var a, b = this._timeline, c = this._startTime;
        return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - n5;
    }, i7._enabled = function(a, b) {
        return k7 || j7.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1;
    }, i7._kill = function(a, b) {
        return this._enabled(!1, !1);
    }, i7.kill = function(a, b) {
        return this._kill(a, b), this;
    }, i7._uncache = function(a) {
        for(var b = a ? this : this.timeline; b;)b._dirty = !0, b = b.timeline;
        return this;
    }, i7._swapSelfInParams = function(a) {
        for(var b = a.length, c = a.concat(); --b > -1;)"{self}" === a[b] && (c[b] = this);
        return c;
    }, i7._callback = function(a) {
        var b = this.vars, c = b[a], d = b[a + "Params"], e = b[a + "Scope"] || b.callbackScope || this, f = d ? d.length : 0;
        switch(f){
            case 0:
                c.call(e);
                break;
            case 1:
                c.call(e, d[0]);
                break;
            case 2:
                c.call(e, d[0], d[1]);
                break;
            default:
                c.apply(e, d);
        }
    }, i7.eventCallback = function(a, b, c, d) {
        if ("on" === (a || "").substr(0, 2)) {
            var e = this.vars;
            if (1 === arguments.length) return e[a];
            null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = q5(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b);
        }
        return this;
    }, i7.delay = function(a) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay;
    }, i7.duration = function(a) {
        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration);
    }, i7.totalDuration = function(a) {
        return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration;
    }, i7.time = function(a, b) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
    }, i7.totalTime = function(a, b, c) {
        if (k7 || j7.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var d = this._totalDuration, e = this._timeline;
                if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for(; e._timeline;)e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline;
            }
            this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (K.length && _(), this.render(a, b, !1), K.length && _());
        }
        return this;
    }, i7.progress = i7.totalProgress = function(a, b) {
        var c = this.duration();
        return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
    }, i7.startTime = function(a) {
        return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
    }, i7.endTime = function(a) {
        return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
    }, i7.timeScale = function(a) {
        if (!arguments.length) return this._timeScale;
        var b, c;
        for(a = a || n5, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;)c._dirty = !0, c.totalDuration(), c = c.timeline;
        return this;
    }, i7.reversed = function(a) {
        return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
    }, i7.paused = function(a) {
        if (!arguments.length) return this._paused;
        var b, c, d = this._timeline;
        return a != this._paused && d && (k7 || a || j7.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this;
    };
    var G = u("core.SimpleTimeline", function(a) {
        E.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0;
    });
    i7 = G.prototype = new E, i7.constructor = G, i7.kill()._gc = !1, i7._first = i7._last = i7._recent = null, i7._sortChildren = !1, i7.add = i7.insert = function(a, b, c, d) {
        var e, f;
        if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren) for(f = a._startTime; e && e._startTime > f;)e = e._prev;
        return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this;
    }, i7._remove = function(a, b) {
        return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
    }, i7.render = function(a, b, c) {
        var d, e = this._first;
        for(this._totalTime = this._time = this._rawPrevTime = a; e;)d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d;
    }, i7.rawTime = function() {
        return k7 || j7.wake(), this._totalTime;
    };
    var H = u("TweenLite", function(b, c, d) {
        if (E.call(this, c, d), this.render = H.prototype.render, null == b) throw "Cannot tween a null target.";
        this.target = b = "string" != typeof b ? b : H.selector(b) || b;
        var e, f, g, h = b.jquery || b.length && b !== a15 && b[0] && (b[0] === a15 || b[0].nodeType && b[0].style && !b.nodeType), i = this.vars.overwrite;
        if (this._overwrite = i = null == i ? X[H.defaultOverwrite] : "number" == typeof i ? i >> 0 : X[i], (h || b instanceof Array || b.push && q5(b)) && "number" != typeof b[0]) for(this._targets = g = o6(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++)f = g[e], f ? "string" != typeof f ? f.length && f !== a15 && f[0] && (f[0] === a15 || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(o6(f))) : (this._siblings[e] = aa(f, this, !1), 1 === i && this._siblings[e].length > 1 && ca(f, this, null, 1, this._siblings[e])) : (f = g[e--] = H.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
        else this._propLookup = {}, this._siblings = aa(b, this, !1), 1 === i && this._siblings.length > 1 && ca(b, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -n5, this.render(Math.min(0, -this._delay)));
    }, !0), I = function(b) {
        return b && b.length && b !== a15 && b[0] && (b[0] === a15 || b[0].nodeType && b[0].style && !b.nodeType);
    }, J = function(a, b) {
        var c, d = {};
        for(c in a)W[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!T[c] || T[c] && T[c]._autoCSS) || (d[c] = a[c], delete a[c]);
        a.css = d;
    };
    i7 = H.prototype = new E, i7.constructor = H, i7.kill()._gc = !1, i7.ratio = 0, i7._firstPT = i7._targets = i7._overwrittenProps = i7._startAt = null, i7._notifyPluginsOfEnabled = i7._lazy = !1, H.version = "2.1.3", H.defaultEase = i7._ease = new w(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = j7, H.autoSleep = 120, H.lagSmoothing = function(a, b) {
        j7.lagSmoothing(a, b);
    }, H.selector = a15.$ || a15.jQuery || function(b) {
        var c = a15.$ || a15.jQuery;
        return c ? (H.selector = c, c(b)) : (d8 || (d8 = a15.document), d8 ? d8.querySelectorAll ? d8.querySelectorAll(b) : d8.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b);
    };
    var K = [], L = {}, M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, N = /[\+-]=-?[\.\d]/, O = function(a) {
        for(var b, c = this._firstPT, d = 1e-6; c;)b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next;
    }, P = function(a) {
        return (1e3 * a | 0) / 1e3 + "";
    }, Q = function(a, b, c, d) {
        var e, f, g, h, i, j, k, l = [], m = 0, n = "", o = 0;
        for(l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(M) || [], f = b.match(M) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++)k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
            _next: l._firstPT,
            t: l,
            p: l.length - 1,
            s: g,
            c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
            f: 0,
            m: o && 4 > o ? Math.round : P
        }), m += k.length;
        return n += b.substr(m), n && l.push(n), l.setRatio = O, N.test(b) && (l.end = null), l;
    }, R = function(a, b, c, d, e, f, g, h, i) {
        "function" == typeof d && (d = d(i || 0, a));
        var j, k = typeof a[b], l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b], n = "string" == typeof d && "=" === d.charAt(1), o = {
            t: a,
            p: b,
            s: m,
            f: "function" === k,
            pg: 0,
            n: e || b,
            m: f ? "function" == typeof f ? f : Math.round : 0,
            pr: 0,
            c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
        };
        return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = Q(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || H.defaultStringFilter, o), o = {
            t: j,
            p: "setRatio",
            s: 0,
            c: 1,
            f: 2,
            pg: 0,
            n: e || b,
            pr: 0,
            m: 0
        }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0;
    }, S = H._internals = {
        isArray: q5,
        isSelector: I,
        lazyTweens: K,
        blobDif: Q
    }, T = H._plugins = {}, U = S.tweenLookup = {}, V = 0, W = S.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
        stagger: 1
    }, X = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        "true": 1,
        "false": 0
    }, Y = E._rootFramesTimeline = new G, Z = E._rootTimeline = new G, $ = 30, _ = S.lazyRender = function() {
        var a, b, c = K.length;
        for(L = {}, a = 0; c > a; a++)b = K[a], b && b._lazy !== !1 && (b.render(b._lazy[0], b._lazy[1], !0), b._lazy = !1);
        K.length = 0;
    };
    Z._startTime = j7.time, Y._startTime = j7.frame, Z._active = Y._active = !0, setTimeout(_, 1), E._updateRoot = H.render = function() {
        var a, b, c;
        if (K.length && _(), Z.render((j7.time - Z._startTime) * Z._timeScale, !1, !1), Y.render((j7.frame - Y._startTime) * Y._timeScale, !1, !1), K.length && _(), j7.frame >= $) {
            $ = j7.frame + (parseInt(H.autoSleep, 10) || 120);
            for(c in U){
                for(b = U[c].tweens, a = b.length; --a > -1;)b[a]._gc && b.splice(a, 1);
                0 === b.length && delete U[c];
            }
            if (c = Z._first, (!c || c._paused) && H.autoSleep && !Y._first && 1 === j7._listeners.tick.length) {
                for(; c && c._paused;)c = c._next;
                c || j7.sleep();
            }
        }
    }, j7.addEventListener("tick", E._updateRoot);
    var aa = function(a, b, c) {
        var d, e, f = a._gsTweenID;
        if (U[f || (a._gsTweenID = f = "t" + V++)] || (U[f] = {
            target: a,
            tweens: []
        }), b && (d = U[f].tweens, d[e = d.length] = b, c)) for(; --e > -1;)d[e] === b && d.splice(e, 1);
        return U[f].tweens;
    }, ba = function(a, b, c, d) {
        var e, f, g = a.vars.onOverwrite;
        return g && (e = g(a, b, c, d)), g = H.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1;
    }, ca = function(a, b, c, d, e) {
        var f, g, h, i;
        if (1 === d || d >= 4) {
            for(i = e.length, f = 0; i > f; f++)if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
            else if (5 === d) break;
            return g;
        }
        var j, k = b._startTime + n5, l = [], m = 0, o = 0 === b._duration;
        for(f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || da(b, 0, o), 0 === da(h, j, o) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2 * n5 || (l[m++] = h)));
        for(f = m; --f > -1;)if (h = l[f], i = h._firstPT, 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted && i) {
            if (2 !== d && !ba(h, b)) continue;
            h._enabled(!1, !1) && (g = !0);
        }
        return g;
    }, da = function(a, b, c) {
        for(var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;){
            if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
            d = d._timeline;
        }
        return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * n5 > f - b ? n5 : (f += a.totalDuration() / a._timeScale / e) > b + n5 ? 0 : f - b - n5;
    };
    i7._init = function() {
        var a, b, c, d, e, f, g = this.vars, h = this._overwrittenProps, i = this._duration, j = !!g.immediateRender, k = g.ease, l = this._startAt;
        if (g.startAt) {
            l && (l.render(-1, !0), l.kill()), e = {};
            for(d in g.startAt)e[d] = g.startAt[d];
            if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = H.to(this.target || {}, 0, e), j) {
                if (this._time > 0) this._startAt = null;
                else if (0 !== i) return;
            }
        } else if (g.runBackwards && 0 !== i) {
            if (l) l.render(-1, !0), l.kill(), this._startAt = null;
            else {
                0 !== this._time && (j = !1), c = {};
                for(d in g)W[d] && "autoCSS" !== d || (c[d] = g[d]);
                if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = H.to(this.target, 0, c), j) {
                    if (0 === this._time) return;
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
            }
        }
        if (this._ease = k = k ? k instanceof w ? k : "function" == typeof k ? new w(k, g.easeParams) : x[k] || H.defaultEase : H.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for(f = this._targets.length, a = 0; f > a; a++)this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
        else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
        if (b && H._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards) for(c = this._firstPT; c;)c.s += c.c, c.c = -c.c, c = c._next;
        this._onUpdate = g.onUpdate, this._initted = !0;
    }, i7._initProps = function(b, c, d, e, f) {
        var g, h, i, j, k, l;
        if (null == b) return !1;
        L[b._gsTweenID] && _(), this.vars.css || b.style && b !== a15 && b.nodeType && T.css && this.vars.autoCSS !== !1 && J(this.vars, b);
        for(g in this.vars)if (l = this.vars[g], W[g]) l && (l instanceof Array || l.push && q5(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
        else if (T[g] && (j = new T[g])._onInitTween(b, this.vars[g], this, f)) {
            for(this._firstPT = k = {
                _next: this._firstPT,
                t: j,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 1,
                n: g,
                pg: 1,
                pr: j._priority,
                m: 0
            }, h = j._overwriteProps.length; --h > -1;)c[j._overwriteProps[h]] = this._firstPT;
            (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k);
        } else c[g] = R.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
        return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && ca(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[b._gsTweenID] = !0), i);
    }, i7.render = function(a, b, c) {
        var d, e, f, g, h = this, i = h._time, j = h._duration, k = h._rawPrevTime;
        if (a >= j - n5 && a >= 0) h._totalTime = h._time = j, h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1, h._reversed || (d = !0, e = "onComplete", c = c || h._timeline.autoRemoveChildren), 0 === j && (h._initted || !h.vars.lazy || c) && (h._startTime === h._timeline._duration && (a = 0), (0 > k || 0 >= a && a >= -n5 || k === n5 && "isPause" !== h.data) && k !== a && (c = !0, k > n5 && (e = "onReverseComplete")), h._rawPrevTime = g = !b || a || k === a ? a : n5);
        else if (n5 > a) h._totalTime = h._time = 0, h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0, (0 !== i || 0 === j && k > 0) && (e = "onReverseComplete", d = h._reversed), a > -n5 ? a = 0 : 0 > a && (h._active = !1, 0 === j && (h._initted || !h.vars.lazy || c) && (k >= 0 && (k !== n5 || "isPause" !== h.data) && (c = !0), h._rawPrevTime = g = !b || a || k === a ? a : n5)), (!h._initted || h._startAt && h._startAt.progress()) && (c = !0);
        else if (h._totalTime = h._time = a, h._easeType) {
            var l = a / j, m = h._easeType, o = h._easePower;
            (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === o ? l *= l : 2 === o ? l *= l * l : 3 === o ? l *= l * l * l : 4 === o && (l *= l * l * l * l), h.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / j ? l / 2 : 1 - l / 2;
        } else h.ratio = h._ease.getRatio(a / j);
        if (h._time !== i || c) {
            if (!h._initted) {
                if (h._init(), !h._initted || h._gc) return;
                if (!c && h._firstPT && (h.vars.lazy !== !1 && h._duration || h.vars.lazy && !h._duration)) return h._time = h._totalTime = i, h._rawPrevTime = k, K.push(h), void (h._lazy = [
                    a,
                    b
                ]);
                h._time && !d ? h.ratio = h._ease.getRatio(h._time / j) : d && h._ease._calcEnd && (h.ratio = h._ease.getRatio(0 === h._time ? 0 : 1));
            }
            for(h._lazy !== !1 && (h._lazy = !1), h._active || !h._paused && h._time !== i && a >= 0 && (h._active = !0), 0 === i && (h._startAt && (a >= 0 ? h._startAt.render(a, !0, c) : e || (e = "_dummyGS")), h.vars.onStart && (0 !== h._time || 0 === j) && (b || h._callback("onStart"))), f = h._firstPT; f;)f.f ? f.t[f.p](f.c * h.ratio + f.s) : f.t[f.p] = f.c * h.ratio + f.s, f = f._next;
            h._onUpdate && (0 > a && h._startAt && a !== -0.0001 && h._startAt.render(a, !0, c), b || (h._time !== i || d || c) && h._callback("onUpdate")), e && (!h._gc || c) && (0 > a && h._startAt && !h._onUpdate && a !== -0.0001 && h._startAt.render(a, !0, c), d && (h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !b && h.vars[e] && h._callback(e), 0 === j && h._rawPrevTime === n5 && g !== n5 && (h._rawPrevTime = 0));
        }
    }, i7._kill = function(a, b, c) {
        if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
        b = "string" != typeof b ? b || this._targets || this.target : H.selector(b) || b;
        var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline, n = this._firstPT;
        if ((q5(b) || I(b)) && "number" != typeof b[0]) for(d = b.length; --d > -1;)this._kill(a, b[d], c) && (i = !0);
        else {
            if (this._targets) {
                for(d = this._targets.length; --d > -1;)if (b === this._targets[d]) {
                    h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                    break;
                }
            } else {
                if (b !== this.target) return !1;
                h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
            }
            if (h) {
                if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (H.onOverwrite || this.vars.onOverwrite)) {
                    for(f in j)h[f] && (l || (l = []), l.push(f));
                    if ((l || !a) && !ba(this, c, b, l)) return !1;
                }
                for(f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                !this._firstPT && this._initted && n && this._enabled(!1, !1);
            }
        }
        return i;
    }, i7.invalidate = function() {
        this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this);
        var a = this._time;
        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n5, this.render(a, !1, this.vars.lazy !== !1)), this;
    }, i7._enabled = function(a, b) {
        if (k7 || j7.wake(), a && this._gc) {
            var c, d = this._targets;
            if (d) for(c = d.length; --c > -1;)this._siblings[c] = aa(d[c], this, !0);
            else this._siblings = aa(this.target, this, !0);
        }
        return E.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
    }, H.to = function(a, b, c) {
        return new H(a, b, c);
    }, H.from = function(a, b, c) {
        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new H(a, b, c);
    }, H.fromTo = function(a, b, c, d) {
        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new H(a, b, d);
    }, H.delayedCall = function(a, b, c, d, e) {
        return new H(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            lazy: !1,
            useFrames: e,
            overwrite: 0
        });
    }, H.set = function(a, b) {
        return new H(a, 0, b);
    }, H.getTweensOf = function(a, b) {
        if (null == a) return [];
        a = "string" != typeof a ? a : H.selector(a) || a;
        var c, d, e, f;
        if ((q5(a) || I(a)) && "number" != typeof a[0]) {
            for(c = a.length, d = []; --c > -1;)d = d.concat(H.getTweensOf(a[c], b));
            for(c = d.length; --c > -1;)for(f = d[c], e = c; --e > -1;)f === d[e] && d.splice(c, 1);
        } else if (a._gsTweenID) for(d = aa(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
        return d || [];
    }, H.killTweensOf = H.killDelayedCallsTo = function(a, b, c) {
        "object" == typeof b && (c = b, b = !1);
        for(var d = H.getTweensOf(a, b), e = d.length; --e > -1;)d[e]._kill(c, a);
    };
    var ea = u("plugins.TweenPlugin", function(a, b) {
        this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ea.prototype;
    }, !0);
    if (i7 = ea.prototype, ea.version = "1.19.0", ea.API = 2, i7._firstPT = null, i7._addTween = R, i7.setRatio = O, i7._kill = function(a) {
        var b, c = this._overwriteProps, d = this._firstPT;
        if (null != a[this._propName]) this._overwriteProps = [];
        else for(b = c.length; --b > -1;)null != a[c[b]] && c.splice(b, 1);
        for(; d;)null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
        return !1;
    }, i7._mod = i7._roundProps = function(a) {
        for(var b, c = this._firstPT; c;)b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next;
    }, H._onPluginEvent = function(a, b) {
        var c, d, e, f, g, h = b._firstPT;
        if ("_onInitAllProps" === a) {
            for(; h;){
                for(g = h._next, d = e; d && d.pr > h.pr;)d = d._next;
                (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g;
            }
            h = b._firstPT = e;
        }
        for(; h;)h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
        return c;
    }, ea.activate = function(a) {
        for(var b = a.length; --b > -1;)a[b].API === ea.API && (T[(new a[b])._propName] = a[b]);
        return !0;
    }, t.plugin = function(a) {
        if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
        var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps"
        }, g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
            ea.call(this, c, d), this._overwriteProps = e || [];
        }, a.global === !0), h = g.prototype = new ea(c);
        h.constructor = g, g.API = a.API;
        for(b in f)"function" == typeof a[b] && (h[f[b]] = a[b]);
        return g.version = a.version, ea.activate([
            g
        ]), g;
    }, g7 = a15._gsQueue) {
        for(h7 = 0; h7 < g7.length; h7++)g7[h7]();
        for(i7 in r4)r4[i7].func || a15.console.log("GSAP encountered missing dependency: " + i7);
    }
    k7 = !1;
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

//# sourceMappingURL=team.71588f7c.js.map
