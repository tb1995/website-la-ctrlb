// threejs.org/license
(function(k, Ba) {
    "object" === typeof exports && "undefined" !== typeof module ? Ba(exports) : "function" === typeof define && define.amd ? define([
        "exports"
    ], Ba) : (k = k || self, Ba(k.THREE = {}));
})(this, function(k1) {
    function Ba1() {}
    function w1(a, b) {
        this.x = a || 0;
        this.y = b || 0;
    }
    function ua1(a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._w = void 0 !== d ? d : 1;
    }
    function n1(a, b, c) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0;
    }
    function Y1() {
        this.elements = [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
        ];
        0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
    }
    function W1(a, b, c, d, e, f, g, h, l, m) {
        Object.defineProperty(this, "id", {
            value: Ri++
        });
        this.uuid = L1.generateUUID();
        this.name = "";
        this.image = void 0 !== a ? a : W1.DEFAULT_IMAGE;
        this.mipmaps = [];
        this.mapping = void 0 !== b ? b : W1.DEFAULT_MAPPING;
        this.wrapS = void 0 !== c ? c : 1001;
        this.wrapT = void 0 !== d ? d : 1001;
        this.magFilter = void 0 !== e ? e : 1006;
        this.minFilter = void 0 !== f ? f : 1008;
        this.anisotropy = void 0 !== l ? l : 1;
        this.format = void 0 !== g ? g : 1023;
        this.type = void 0 !== h ? h : 1009;
        this.offset = new w1(0, 0);
        this.repeat = new w1(1, 1);
        this.center = new w1(0, 0);
        this.rotation = 0;
        this.matrixAutoUpdate = !0;
        this.matrix = new Y1;
        this.generateMipmaps = !0;
        this.premultiplyAlpha = !1;
        this.flipY = !0;
        this.unpackAlignment = 4;
        this.encoding = void 0 !== m ? m : 3E3;
        this.version = 0;
        this.onUpdate = null;
    }
    function aa1(a, b, c, d) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0;
        this.w = void 0 !== d ? d : 1;
    }
    function la1(a, b, c) {
        this.width = a;
        this.height = b;
        this.scissor = new aa1(0, 0, a, b);
        this.scissorTest = !1;
        this.viewport = new aa1(0, 0, a, b);
        c = c || {};
        this.texture = new W1(void 0, void 0, c.wrapS, c.wrapT, c.magFilter, c.minFilter, c.format, c.type, c.anisotropy, c.encoding);
        this.texture.image = {};
        this.texture.image.width = a;
        this.texture.image.height = b;
        this.texture.generateMipmaps = void 0 !== c.generateMipmaps ? c.generateMipmaps : !1;
        this.texture.minFilter = void 0 !== c.minFilter ? c.minFilter : 1006;
        this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
        this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
        this.depthTexture = void 0 !== c.depthTexture ? c.depthTexture : null;
    }
    function Of(a, b, c) {
        la1.call(this, a, b, c);
        this.samples = 4;
    }
    function U1() {
        this.elements = [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ];
        0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
    }
    function Qb(a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._order = d || Qb.DefaultOrder;
    }
    function Pf() {
        this.mask = 1;
    }
    function B1() {
        Object.defineProperty(this, "id", {
            value: Si++
        });
        this.uuid = L1.generateUUID();
        this.name = "";
        this.type = "Object3D";
        this.parent = null;
        this.children = [];
        this.up = B1.DefaultUp.clone();
        var a = new n1, b = new Qb, c = new ua1, d = new n1(1, 1, 1);
        b._onChange(function() {
            c.setFromEuler(b, !1);
        });
        c._onChange(function() {
            b.setFromQuaternion(c, void 0, !1);
        });
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: a
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: b
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: c
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: d
            },
            modelViewMatrix: {
                value: new U1
            },
            normalMatrix: {
                value: new Y1
            }
        });
        this.matrix = new U1;
        this.matrixWorld = new U1;
        this.matrixAutoUpdate = B1.DefaultMatrixAutoUpdate;
        this.matrixWorldNeedsUpdate = !1;
        this.layers = new Pf;
        this.visible = !0;
        this.receiveShadow = this.castShadow = !1;
        this.frustumCulled = !0;
        this.renderOrder = 0;
        this.userData = {};
    }
    function wd() {
        B1.call(this);
        this.type = "Scene";
        this.overrideMaterial = this.fog = this.background = null;
        this.autoUpdate = !0;
        "undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }));
    }
    function ab(a, b) {
        this.min = void 0 !== a ? a : new n1(Infinity, Infinity, Infinity);
        this.max = void 0 !== b ? b : new n1(-Infinity, -Infinity, -Infinity);
    }
    function Qf(a, b, c, d, e) {
        var f;
        var g = 0;
        for(f = a.length - 3; g <= f; g += 3){
            Rb.fromArray(a, g);
            var h = e.x * Math.abs(Rb.x) + e.y * Math.abs(Rb.y) + e.z * Math.abs(Rb.z), l = b.dot(Rb), m = c.dot(Rb), q = d.dot(Rb);
            if (Math.max(-Math.max(l, m, q), Math.min(l, m, q)) > h) return !1;
        }
        return !0;
    }
    function nb(a, b) {
        this.center = void 0 !== a ? a : new n1;
        this.radius = void 0 !== b ? b : 0;
    }
    function Sb(a, b) {
        this.origin = void 0 !== a ? a : new n1;
        this.direction = void 0 !== b ? b : new n1;
    }
    function R1(a, b, c) {
        this.a = void 0 !== a ? a : new n1;
        this.b = void 0 !== b ? b : new n1;
        this.c = void 0 !== c ? c : new n1;
    }
    function H1(a, b, c) {
        return void 0 === b && void 0 === c ? this.set(a) : this.setRGB(a, b, c);
    }
    function Rf(a, b, c) {
        0 > c && (c += 1);
        1 < c && --c;
        return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a;
    }
    function Sf(a) {
        return .04045 > a ? .0773993808 * a : Math.pow(.9478672986 * a + .0521327014, 2.4);
    }
    function Tf(a) {
        return .0031308 > a ? 12.92 * a : 1.055 * Math.pow(a, .41666) - .055;
    }
    function zc(a, b, c, d, e, f) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.normal = d && d.isVector3 ? d : new n1;
        this.vertexNormals = Array.isArray(d) ? d : [];
        this.color = e && e.isColor ? e : new H1;
        this.vertexColors = Array.isArray(e) ? e : [];
        this.materialIndex = void 0 !== f ? f : 0;
    }
    function M1() {
        Object.defineProperty(this, "id", {
            value: Ti++
        });
        this.uuid = L1.generateUUID();
        this.name = "";
        this.type = "Material";
        this.fog = !0;
        this.blending = 1;
        this.side = 0;
        this.vertexTangents = this.flatShading = !1;
        this.vertexColors = 0;
        this.opacity = 1;
        this.transparent = !1;
        this.blendSrc = 204;
        this.blendDst = 205;
        this.blendEquation = 100;
        this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null;
        this.depthFunc = 3;
        this.depthWrite = this.depthTest = !0;
        this.stencilWriteMask = 255;
        this.stencilFunc = 519;
        this.stencilRef = 0;
        this.stencilFuncMask = 255;
        this.stencilZPass = this.stencilZFail = this.stencilFail = 7680;
        this.stencilWrite = !1;
        this.clippingPlanes = null;
        this.clipShadows = this.clipIntersection = !1;
        this.shadowSide = null;
        this.colorWrite = !0;
        this.precision = null;
        this.polygonOffset = !1;
        this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
        this.dithering = !1;
        this.alphaTest = 0;
        this.premultipliedAlpha = !1;
        this.toneMapped = this.visible = !0;
        this.userData = {};
        this.needsUpdate = !0;
    }
    function Ga(a) {
        M1.call(this);
        this.type = "MeshBasicMaterial";
        this.color = new H1(16777215);
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.envMap = this.alphaMap = this.specularMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphTargets = this.skinning = !1;
        this.setValues(a);
    }
    function O1(a, b, c) {
        if (Array.isArray(a)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "";
        this.array = a;
        this.itemSize = b;
        this.count = void 0 !== a ? a.length / b : 0;
        this.normalized = !0 === c;
        this.dynamic = !1;
        this.updateRange = {
            offset: 0,
            count: -1
        };
        this.version = 0;
    }
    function xd(a, b, c) {
        O1.call(this, new Int8Array(a), b, c);
    }
    function yd(a, b, c) {
        O1.call(this, new Uint8Array(a), b, c);
    }
    function zd(a, b, c) {
        O1.call(this, new Uint8ClampedArray(a), b, c);
    }
    function Ad(a, b, c) {
        O1.call(this, new Int16Array(a), b, c);
    }
    function Tb(a, b, c) {
        O1.call(this, new Uint16Array(a), b, c);
    }
    function Bd(a, b, c) {
        O1.call(this, new Int32Array(a), b, c);
    }
    function Ub(a, b, c) {
        O1.call(this, new Uint32Array(a), b, c);
    }
    function A1(a, b, c) {
        O1.call(this, new Float32Array(a), b, c);
    }
    function Cd(a, b, c) {
        O1.call(this, new Float64Array(a), b, c);
    }
    function jh() {
        this.vertices = [];
        this.normals = [];
        this.colors = [];
        this.uvs = [];
        this.uvs2 = [];
        this.groups = [];
        this.morphTargets = {};
        this.skinWeights = [];
        this.skinIndices = [];
        this.boundingSphere = this.boundingBox = null;
        this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1;
    }
    function kh(a) {
        if (0 === a.length) return -Infinity;
        for(var b = a[0], c = 1, d = a.length; c < d; ++c)a[c] > b && (b = a[c]);
        return b;
    }
    function E1() {
        Object.defineProperty(this, "id", {
            value: Ui += 2
        });
        this.uuid = L1.generateUUID();
        this.name = "";
        this.type = "BufferGeometry";
        this.index = null;
        this.attributes = {};
        this.morphAttributes = {};
        this.groups = [];
        this.boundingSphere = this.boundingBox = null;
        this.drawRange = {
            start: 0,
            count: Infinity
        };
        this.userData = {};
    }
    function ja1(a, b) {
        B1.call(this);
        this.type = "Mesh";
        this.geometry = void 0 !== a ? a : new E1;
        this.material = void 0 !== b ? b : new Ga({
            color: 16777215 * Math.random()
        });
        this.drawMode = 0;
        this.updateMorphTargets();
    }
    function lh(a, b, c, d, e, f, g, h) {
        if (null === (1 === b.side ? d.intersectTriangle(g, f, e, !0, h) : d.intersectTriangle(e, f, g, 2 !== b.side, h))) return null;
        Ee.copy(h);
        Ee.applyMatrix4(a.matrixWorld);
        b = c.ray.origin.distanceTo(Ee);
        return b < c.near || b > c.far ? null : {
            distance: b,
            point: Ee.clone(),
            object: a
        };
    }
    function Fe(a, b, c, d, e, f, g, h, l, m, q) {
        Vb.fromBufferAttribute(e, l);
        Wb.fromBufferAttribute(e, m);
        Xb.fromBufferAttribute(e, q);
        e = a.morphTargetInfluences;
        if (b.morphTargets && f && e) {
            Uf.set(0, 0, 0);
            Vf.set(0, 0, 0);
            Wf.set(0, 0, 0);
            for(var u = 0, t = f.length; u < t; u++){
                var k = e[u], p = f[u];
                0 !== k && (mh.fromBufferAttribute(p, l), nh.fromBufferAttribute(p, m), oh.fromBufferAttribute(p, q), Uf.addScaledVector(mh.sub(Vb), k), Vf.addScaledVector(nh.sub(Wb), k), Wf.addScaledVector(oh.sub(Xb), k));
            }
            Vb.add(Uf);
            Wb.add(Vf);
            Xb.add(Wf);
        }
        if (a = lh(a, b, c, d, Vb, Wb, Xb, Dd)) g && (Ac.fromBufferAttribute(g, l), Bc.fromBufferAttribute(g, m), Cc.fromBufferAttribute(g, q), a.uv = R1.getUV(Dd, Vb, Wb, Xb, Ac, Bc, Cc, new w1)), h && (Ac.fromBufferAttribute(h, l), Bc.fromBufferAttribute(h, m), Cc.fromBufferAttribute(h, q), a.uv2 = R1.getUV(Dd, Vb, Wb, Xb, Ac, Bc, Cc, new w1)), g = new zc(l, m, q), R1.getNormal(Vb, Wb, Xb, g.normal), a.face = g;
        return a;
    }
    function F1() {
        Object.defineProperty(this, "id", {
            value: Vi += 2
        });
        this.uuid = L1.generateUUID();
        this.name = "";
        this.type = "Geometry";
        this.vertices = [];
        this.colors = [];
        this.faces = [];
        this.faceVertexUvs = [
            []
        ];
        this.morphTargets = [];
        this.morphNormals = [];
        this.skinWeights = [];
        this.skinIndices = [];
        this.lineDistances = [];
        this.boundingSphere = this.boundingBox = null;
        this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1;
    }
    function Yb(a) {
        var b = {}, c;
        for(c in a){
            b[c] = {};
            for(var d in a[c]){
                var e = a[c][d];
                e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture) ? b[c][d] = e.clone() : Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e;
            }
        }
        return b;
    }
    function Da1(a) {
        for(var b = {}, c = 0; c < a.length; c++){
            var d = Yb(a[c]), e;
            for(e in d)b[e] = d[e];
        }
        return b;
    }
    function ma1(a) {
        M1.call(this);
        this.type = "ShaderMaterial";
        this.defines = {};
        this.uniforms = {};
        this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
        this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
        this.linewidth = 1;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1;
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        };
        this.defaultAttributeValues = {
            color: [
                1,
                1,
                1
            ],
            uv: [
                0,
                0
            ],
            uv2: [
                0,
                0
            ]
        };
        this.index0AttributeName = void 0;
        this.uniformsNeedUpdate = !1;
        void 0 !== a && (void 0 !== a.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(a));
    }
    function bb() {
        B1.call(this);
        this.type = "Camera";
        this.matrixWorldInverse = new U1;
        this.projectionMatrix = new U1;
        this.projectionMatrixInverse = new U1;
    }
    function na1(a, b, c, d) {
        bb.call(this);
        this.type = "PerspectiveCamera";
        this.fov = void 0 !== a ? a : 50;
        this.zoom = 1;
        this.near = void 0 !== c ? c : .1;
        this.far = void 0 !== d ? d : 2E3;
        this.focus = 10;
        this.aspect = void 0 !== b ? b : 1;
        this.view = null;
        this.filmGauge = 35;
        this.filmOffset = 0;
        this.updateProjectionMatrix();
    }
    function Dc(a1, b1, c1, d1) {
        B1.call(this);
        this.type = "CubeCamera";
        var e1 = new na1(90, 1, a1, b1);
        e1.up.set(0, -1, 0);
        e1.lookAt(new n1(1, 0, 0));
        this.add(e1);
        var f1 = new na1(90, 1, a1, b1);
        f1.up.set(0, -1, 0);
        f1.lookAt(new n1(-1, 0, 0));
        this.add(f1);
        var g1 = new na1(90, 1, a1, b1);
        g1.up.set(0, 0, 1);
        g1.lookAt(new n1(0, 1, 0));
        this.add(g1);
        var h = new na1(90, 1, a1, b1);
        h.up.set(0, 0, -1);
        h.lookAt(new n1(0, -1, 0));
        this.add(h);
        var l = new na1(90, 1, a1, b1);
        l.up.set(0, -1, 0);
        l.lookAt(new n1(0, 0, 1));
        this.add(l);
        var m = new na1(90, 1, a1, b1);
        m.up.set(0, -1, 0);
        m.lookAt(new n1(0, 0, -1));
        this.add(m);
        d1 = d1 || {
            format: 1022,
            magFilter: 1006,
            minFilter: 1006
        };
        this.renderTarget = new Ab(c1, c1, d1);
        this.renderTarget.texture.name = "CubeCamera";
        this.update = function(a, b) {
            null === this.parent && this.updateMatrixWorld();
            var c = a.getRenderTarget(), d = this.renderTarget, q = d.texture.generateMipmaps;
            d.texture.generateMipmaps = !1;
            a.setRenderTarget(d, 0);
            a.render(b, e1);
            a.setRenderTarget(d, 1);
            a.render(b, f1);
            a.setRenderTarget(d, 2);
            a.render(b, g1);
            a.setRenderTarget(d, 3);
            a.render(b, h);
            a.setRenderTarget(d, 4);
            a.render(b, l);
            d.texture.generateMipmaps = q;
            a.setRenderTarget(d, 5);
            a.render(b, m);
            a.setRenderTarget(c);
        };
        this.clear = function(a, b, c, d) {
            for(var e = a.getRenderTarget(), f = this.renderTarget, g = 0; 6 > g; g++)a.setRenderTarget(f, g), a.clear(b, c, d);
            a.setRenderTarget(e);
        };
    }
    function Ab(a, b, c) {
        la1.call(this, a, b, c);
    }
    function Zb(a, b, c, d, e, f, g, h, l, m, q, u) {
        W1.call(this, null, f, g, h, l, m, d, e, q, u);
        this.image = {
            data: a || null,
            width: b || 1,
            height: c || 1
        };
        this.magFilter = void 0 !== l ? l : 1003;
        this.minFilter = void 0 !== m ? m : 1003;
        this.flipY = this.generateMipmaps = !1;
        this.unpackAlignment = 1;
        this.needsUpdate = !0;
    }
    function cb(a, b) {
        this.normal = void 0 !== a ? a : new n1(1, 0, 0);
        this.constant = void 0 !== b ? b : 0;
    }
    function Ed(a, b, c, d, e, f) {
        this.planes = [
            void 0 !== a ? a : new cb,
            void 0 !== b ? b : new cb,
            void 0 !== c ? c : new cb,
            void 0 !== d ? d : new cb,
            void 0 !== e ? e : new cb,
            void 0 !== f ? f : new cb
        ];
    }
    function Xf() {
        function a2(e, f) {
            !1 !== c && (d(e, f), b.requestAnimationFrame(a2));
        }
        var b = null, c = !1, d = null;
        return {
            start: function() {
                !0 !== c && null !== d && (b.requestAnimationFrame(a2), c = !0);
            },
            stop: function() {
                c = !1;
            },
            setAnimationLoop: function(a) {
                d = a;
            },
            setContext: function(a) {
                b = a;
            }
        };
    }
    function Wi(a3) {
        function b2(b, c) {
            var d = b.array, e = b.dynamic ? 35048 : 35044, h = a3.createBuffer();
            a3.bindBuffer(c, h);
            a3.bufferData(c, d, e);
            b.onUploadCallback();
            c = 5126;
            d instanceof Float32Array ? c = 5126 : d instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : d instanceof Uint16Array ? c = 5123 : d instanceof Int16Array ? c = 5122 : d instanceof Uint32Array ? c = 5125 : d instanceof Int32Array ? c = 5124 : d instanceof Int8Array ? c = 5120 : d instanceof Uint8Array && (c = 5121);
            return {
                buffer: h,
                type: c,
                bytesPerElement: d.BYTES_PER_ELEMENT,
                version: b.version
            };
        }
        var c2 = new WeakMap;
        return {
            get: function(a) {
                a.isInterleavedBufferAttribute && (a = a.data);
                return c2.get(a);
            },
            remove: function(b) {
                b.isInterleavedBufferAttribute && (b = b.data);
                var d = c2.get(b);
                d && (a3.deleteBuffer(d.buffer), c2.delete(b));
            },
            update: function(d, e) {
                d.isInterleavedBufferAttribute && (d = d.data);
                var f = c2.get(d);
                if (void 0 === f) c2.set(d, b2(d, e));
                else if (f.version < d.version) {
                    var g = d, h = g.array, l = g.updateRange;
                    a3.bindBuffer(e, f.buffer);
                    !1 === g.dynamic ? a3.bufferData(e, h, 35044) : -1 === l.count ? a3.bufferSubData(e, 0, h) : 0 === l.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (a3.bufferSubData(e, l.offset * h.BYTES_PER_ELEMENT, h.subarray(l.offset, l.offset + l.count)), l.count = -1);
                    f.version = d.version;
                }
            }
        };
    }
    function Fd(a, b, c, d) {
        F1.call(this);
        this.type = "PlaneGeometry";
        this.parameters = {
            width: a,
            height: b,
            widthSegments: c,
            heightSegments: d
        };
        this.fromBufferGeometry(new $b(a, b, c, d));
        this.mergeVertices();
    }
    function $b(a, b, c, d) {
        E1.call(this);
        this.type = "PlaneBufferGeometry";
        this.parameters = {
            width: a,
            height: b,
            widthSegments: c,
            heightSegments: d
        };
        a = a || 1;
        b = b || 1;
        var e = a / 2, f = b / 2;
        c = Math.floor(c) || 1;
        d = Math.floor(d) || 1;
        var g = c + 1, h = d + 1, l = a / c, m = b / d, q = [], u = [], t = [], k = [];
        for(a = 0; a < h; a++){
            var p = a * m - f;
            for(b = 0; b < g; b++)u.push(b * l - e, -p, 0), t.push(0, 0, 1), k.push(b / c), k.push(1 - a / d);
        }
        for(a = 0; a < d; a++)for(b = 0; b < c; b++)e = b + g * (a + 1), f = b + 1 + g * (a + 1), h = b + 1 + g * a, q.push(b + g * a, e, h), q.push(e, f, h);
        this.setIndex(q);
        this.addAttribute("position", new A1(u, 3));
        this.addAttribute("normal", new A1(t, 3));
        this.addAttribute("uv", new A1(k, 2));
    }
    function Xi(a4, b3, c3, d2) {
        function e(a, c) {
            b3.buffers.color.setClear(a.r, a.g, a.b, c, d2);
        }
        var f = new H1(0), g = 0, h, l, m = null, q = 0;
        return {
            getClearColor: function() {
                return f;
            },
            setClearColor: function(a, b) {
                f.set(a);
                g = void 0 !== b ? b : 1;
                e(f, g);
            },
            getClearAlpha: function() {
                return g;
            },
            setClearAlpha: function(a) {
                g = a;
                e(f, g);
            },
            render: function(b, d, k, p) {
                d = d.background;
                k = a4.vr;
                (k = k.getSession && k.getSession()) && "additive" === k.environmentBlendMode && (d = null);
                null === d ? (e(f, g), m = null, q = 0) : d && d.isColor && (e(d, 1), p = !0, m = null, q = 0);
                (a4.autoClear || p) && a4.clear(a4.autoClearColor, a4.autoClearDepth, a4.autoClearStencil);
                if (d && (d.isCubeTexture || d.isWebGLRenderTargetCube)) {
                    void 0 === l && (l = new ja1(new Gd(1, 1, 1), new ma1({
                        type: "BackgroundCubeMaterial",
                        uniforms: Yb(db.cube.uniforms),
                        vertexShader: db.cube.vertexShader,
                        fragmentShader: db.cube.fragmentShader,
                        side: 1,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    })), l.geometry.removeAttribute("normal"), l.geometry.removeAttribute("uv"), l.onBeforeRender = function(a, b, c) {
                        this.matrixWorld.copyPosition(c.matrixWorld);
                    }, Object.defineProperty(l.material, "map", {
                        get: function() {
                            return this.uniforms.tCube.value;
                        }
                    }), c3.update(l));
                    p = d.isWebGLRenderTargetCube ? d.texture : d;
                    l.material.uniforms.tCube.value = p;
                    l.material.uniforms.tFlip.value = d.isWebGLRenderTargetCube ? 1 : -1;
                    if (m !== d || q !== p.version) l.material.needsUpdate = !0, m = d, q = p.version;
                    b.unshift(l, l.geometry, l.material, 0, 0, null);
                } else if (d && d.isTexture) {
                    void 0 === h && (h = new ja1(new $b(2, 2), new ma1({
                        type: "BackgroundMaterial",
                        uniforms: Yb(db.background.uniforms),
                        vertexShader: db.background.vertexShader,
                        fragmentShader: db.background.fragmentShader,
                        side: 0,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    })), h.geometry.removeAttribute("normal"), Object.defineProperty(h.material, "map", {
                        get: function() {
                            return this.uniforms.t2D.value;
                        }
                    }), c3.update(h));
                    h.material.uniforms.t2D.value = d;
                    !0 === d.matrixAutoUpdate && d.updateMatrix();
                    h.material.uniforms.uvTransform.value.copy(d.matrix);
                    if (m !== d || q !== d.version) h.material.needsUpdate = !0, m = d, q = d.version;
                    b.unshift(h, h.geometry, h.material, 0, 0, null);
                }
            }
        };
    }
    function Yi(a5, b4, c, d3) {
        var e;
        this.setMode = function(a) {
            e = a;
        };
        this.render = function(b, d) {
            a5.drawArrays(e, b, d);
            c.update(d, e);
        };
        this.renderInstances = function(f, g, h, l) {
            if (0 !== l) {
                if (d3.isWebGL2) {
                    f = a5;
                    var m = "drawArraysInstanced";
                } else if (f = b4.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", null === f) {
                    console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                    return;
                }
                f[m](e, g, h, l);
                c.update(h, e, l);
            }
        };
    }
    function Zi(a, b5, c4) {
        function d(b) {
            if ("highp" === b) {
                if (0 < a.getShaderPrecisionFormat(35633, 36338).precision && 0 < a.getShaderPrecisionFormat(35632, 36338).precision) return "highp";
                b = "mediump";
            }
            return "mediump" === b && 0 < a.getShaderPrecisionFormat(35633, 36337).precision && 0 < a.getShaderPrecisionFormat(35632, 36337).precision ? "mediump" : "lowp";
        }
        var e, f = "undefined" !== typeof WebGL2RenderingContext && a instanceof WebGL2RenderingContext, g = void 0 !== c4.precision ? c4.precision : "highp", h = d(g);
        h !== g && (console.warn("THREE.WebGLRenderer:", g, "not supported, using", h, "instead."), g = h);
        c4 = !0 === c4.logarithmicDepthBuffer;
        h = a.getParameter(34930);
        var l = a.getParameter(35660), m = a.getParameter(3379), q = a.getParameter(34076), u = a.getParameter(34921), t = a.getParameter(36347), k = a.getParameter(36348), p = a.getParameter(36349), v = 0 < l, x = f || !!b5.get("OES_texture_float"), n = v && x, y = f ? a.getParameter(36183) : 0;
        return {
            isWebGL2: f,
            getMaxAnisotropy: function() {
                if (void 0 !== e) return e;
                var c = b5.get("EXT_texture_filter_anisotropic");
                return e = null !== c ? a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
            },
            getMaxPrecision: d,
            precision: g,
            logarithmicDepthBuffer: c4,
            maxTextures: h,
            maxVertexTextures: l,
            maxTextureSize: m,
            maxCubemapSize: q,
            maxAttributes: u,
            maxVertexUniforms: t,
            maxVaryings: k,
            maxFragmentUniforms: p,
            vertexTextures: v,
            floatFragmentTextures: x,
            floatVertexTextures: n,
            maxSamples: y
        };
    }
    function $i() {
        function a6() {
            m.value !== d4 && (m.value = d4, m.needsUpdate = 0 < e2);
            c5.numPlanes = e2;
            c5.numIntersection = 0;
        }
        function b6(a, b, d, e) {
            var f = null !== a ? a.length : 0, g = null;
            if (0 !== f) {
                g = m.value;
                if (!0 !== e || null === g) {
                    e = d + 4 * f;
                    b = b.matrixWorldInverse;
                    l1.getNormalMatrix(b);
                    if (null === g || g.length < e) g = new Float32Array(e);
                    for(e = 0; e !== f; ++e, d += 4)h1.copy(a[e]).applyMatrix4(b, l1), h1.normal.toArray(g, d), g[d + 3] = h1.constant;
                }
                m.value = g;
                m.needsUpdate = !0;
            }
            c5.numPlanes = f;
            return g;
        }
        var c5 = this, d4 = null, e2 = 0, f2 = !1, g2 = !1, h1 = new cb, l1 = new Y1, m = {
            value: null,
            needsUpdate: !1
        };
        this.uniform = m;
        this.numIntersection = this.numPlanes = 0;
        this.init = function(a, c, g) {
            var h = 0 !== a.length || c || 0 !== e2 || f2;
            f2 = c;
            d4 = b6(a, g, 0);
            e2 = a.length;
            return h;
        };
        this.beginShadows = function() {
            g2 = !0;
            b6(null);
        };
        this.endShadows = function() {
            g2 = !1;
            a6();
        };
        this.setState = function(c, h, l, k, p, v) {
            if (!f2 || null === c || 0 === c.length || g2 && !l) g2 ? b6(null) : a6();
            else {
                l = g2 ? 0 : e2;
                var q = 4 * l, u = p.clippingState || null;
                m.value = u;
                u = b6(c, k, q, v);
                for(c = 0; c !== q; ++c)u[c] = d4[c];
                p.clippingState = u;
                this.numIntersection = h ? this.numPlanes : 0;
                this.numPlanes += l;
            }
        };
    }
    function aj(a) {
        var b = {};
        return {
            get: function(c) {
                if (void 0 !== b[c]) return b[c];
                switch(c){
                    case "WEBGL_depth_texture":
                        var d = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    default:
                        d = a.getExtension(c);
                }
                null === d && console.warn("THREE.WebGLRenderer: " + c + " extension not supported.");
                return b[c] = d;
            }
        };
    }
    function bj(a7, b7, c6) {
        function d5(a) {
            var e = a.target;
            a = f3.get(e);
            null !== a.index && b7.remove(a.index);
            for(var h in a.attributes)b7.remove(a.attributes[h]);
            e.removeEventListener("dispose", d5);
            f3.delete(e);
            if (h = g.get(a)) b7.remove(h), g.delete(a);
            c6.memory.geometries--;
        }
        function e3(a) {
            var c = [], d = a.index, e = a.attributes.position;
            if (null !== d) {
                var f = d.array;
                d = d.version;
                e = 0;
                for(var h = f.length; e < h; e += 3){
                    var k = f[e + 0], p = f[e + 1], v = f[e + 2];
                    c.push(k, p, p, v, v, k);
                }
            } else for(f = e.array, d = e.version, e = 0, h = f.length / 3 - 1; e < h; e += 3)k = e + 0, p = e + 1, v = e + 2, c.push(k, p, p, v, v, k);
            c = new (65535 < kh(c) ? Ub : Tb)(c, 1);
            c.version = d;
            b7.update(c, 34963);
            (f = g.get(a)) && b7.remove(f);
            g.set(a, c);
        }
        var f3 = new WeakMap, g = new WeakMap;
        return {
            get: function(a, b) {
                var e = f3.get(b);
                if (e) return e;
                b.addEventListener("dispose", d5);
                b.isBufferGeometry ? e = b : b.isGeometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = (new E1).setFromObject(a)), e = b._bufferGeometry);
                f3.set(b, e);
                c6.memory.geometries++;
                return e;
            },
            update: function(a) {
                var c = a.index, d = a.attributes;
                null !== c && b7.update(c, 34963);
                for(var e in d)b7.update(d[e], 34962);
                a = a.morphAttributes;
                for(e in a){
                    c = a[e];
                    d = 0;
                    for(var f = c.length; d < f; d++)b7.update(c[d], 34962);
                }
            },
            getWireframeAttribute: function(a) {
                var b = g.get(a);
                if (b) {
                    var c = a.index;
                    null !== c && b.version < c.version && e3(a);
                } else e3(a);
                return g.get(a);
            }
        };
    }
    function cj(a8, b8, c, d6) {
        var e, f, g;
        this.setMode = function(a) {
            e = a;
        };
        this.setIndex = function(a) {
            f = a.type;
            g = a.bytesPerElement;
        };
        this.render = function(b, d) {
            a8.drawElements(e, d, f, b * g);
            c.update(d, e);
        };
        this.renderInstances = function(h, l, m, q) {
            if (0 !== q) {
                if (d6.isWebGL2) {
                    h = a8;
                    var u = "drawElementsInstanced";
                } else if (h = b8.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) {
                    console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                    return;
                }
                h[u](e, m, f, l * g, q);
                c.update(m, e, q);
            }
        };
    }
    function dj(a9) {
        var b = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: b,
            programs: null,
            autoReset: !0,
            reset: function() {
                b.frame++;
                b.calls = 0;
                b.triangles = 0;
                b.points = 0;
                b.lines = 0;
            },
            update: function(a, d, e) {
                e = e || 1;
                b.calls++;
                switch(d){
                    case 4:
                        b.triangles += a / 3 * e;
                        break;
                    case 5:
                    case 6:
                        b.triangles += e * (a - 2);
                        break;
                    case 1:
                        b.lines += a / 2 * e;
                        break;
                    case 3:
                        b.lines += e * (a - 1);
                        break;
                    case 2:
                        b.lines += e * a;
                        break;
                    case 0:
                        b.points += e * a;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", d);
                }
            }
        };
    }
    function ej(a, b) {
        return Math.abs(b[1]) - Math.abs(a[1]);
    }
    function fj(a) {
        var b = {}, c = new Float32Array(8);
        return {
            update: function(d, e, f, g) {
                var h = d.morphTargetInfluences, l = h.length;
                d = b[e.id];
                if (void 0 === d) {
                    d = [];
                    for(var m = 0; m < l; m++)d[m] = [
                        m,
                        0
                    ];
                    b[e.id] = d;
                }
                var q = f.morphTargets && e.morphAttributes.position;
                f = f.morphNormals && e.morphAttributes.normal;
                for(m = 0; m < l; m++){
                    var u = d[m];
                    0 !== u[1] && (q && e.removeAttribute("morphTarget" + m), f && e.removeAttribute("morphNormal" + m));
                }
                for(m = 0; m < l; m++)u = d[m], u[0] = m, u[1] = h[m];
                d.sort(ej);
                for(m = 0; 8 > m; m++){
                    if (u = d[m]) {
                        if (h = u[0], l = u[1]) {
                            q && e.addAttribute("morphTarget" + m, q[h]);
                            f && e.addAttribute("morphNormal" + m, f[h]);
                            c[m] = l;
                            continue;
                        }
                    }
                    c[m] = 0;
                }
                g.getUniforms().setValue(a, "morphTargetInfluences", c);
            }
        };
    }
    function gj(a10, b, c, d) {
        var e = {};
        return {
            update: function(a) {
                var f = d.render.frame, h = a.geometry, l = b.get(a, h);
                e[l.id] !== f && (h.isGeometry && l.updateFromObject(a), b.update(l), e[l.id] = f);
                a.isInstancedMesh && c.update(a.instanceMatrix, 34962);
                return l;
            },
            dispose: function() {
                e = {};
            }
        };
    }
    function ob(a, b, c, d, e, f, g, h, l, m) {
        a = void 0 !== a ? a : [];
        W1.call(this, a, void 0 !== b ? b : 301, c, d, e, f, void 0 !== g ? g : 1022, h, l, m);
        this.flipY = !1;
    }
    function Ec(a, b, c, d) {
        W1.call(this, null);
        this.image = {
            data: a || null,
            width: b || 1,
            height: c || 1,
            depth: d || 1
        };
        this.minFilter = this.magFilter = 1003;
        this.wrapR = 1001;
        this.flipY = this.generateMipmaps = !1;
        this.needsUpdate = !0;
    }
    function Fc(a, b, c, d) {
        W1.call(this, null);
        this.image = {
            data: a || null,
            width: b || 1,
            height: c || 1,
            depth: d || 1
        };
        this.minFilter = this.magFilter = 1003;
        this.wrapR = 1001;
        this.flipY = this.generateMipmaps = !1;
        this.needsUpdate = !0;
    }
    function Gc(a, b, c) {
        var d = a[0];
        if (0 >= d || 0 < d) return a;
        var e = b * c, f = ph[e];
        void 0 === f && (f = new Float32Array(e), ph[e] = f);
        if (0 !== b) for(d.toArray(f, 0), d = 1, e = 0; d !== b; ++d)e += c, a[d].toArray(f, e);
        return f;
    }
    function La(a, b) {
        if (a.length !== b.length) return !1;
        for(var c = 0, d = a.length; c < d; c++)if (a[c] !== b[c]) return !1;
        return !0;
    }
    function Ha(a, b) {
        for(var c = 0, d = b.length; c < d; c++)a[c] = b[c];
    }
    function qh(a, b) {
        var c = rh[b];
        void 0 === c && (c = new Int32Array(b), rh[b] = c);
        for(var d = 0; d !== b; ++d)c[d] = a.allocateTextureUnit();
        return c;
    }
    function hj(a, b) {
        var c = this.cache;
        c[0] !== b && (a.uniform1f(this.addr, b), c[0] = b);
    }
    function ij(a, b) {
        var c = this.cache;
        if (void 0 !== b.x) {
            if (c[0] !== b.x || c[1] !== b.y) a.uniform2f(this.addr, b.x, b.y), c[0] = b.x, c[1] = b.y;
        } else La(c, b) || (a.uniform2fv(this.addr, b), Ha(c, b));
    }
    function jj(a, b) {
        var c = this.cache;
        if (void 0 !== b.x) {
            if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z) a.uniform3f(this.addr, b.x, b.y, b.z), c[0] = b.x, c[1] = b.y, c[2] = b.z;
        } else if (void 0 !== b.r) {
            if (c[0] !== b.r || c[1] !== b.g || c[2] !== b.b) a.uniform3f(this.addr, b.r, b.g, b.b), c[0] = b.r, c[1] = b.g, c[2] = b.b;
        } else La(c, b) || (a.uniform3fv(this.addr, b), Ha(c, b));
    }
    function kj(a, b) {
        var c = this.cache;
        if (void 0 !== b.x) {
            if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z || c[3] !== b.w) a.uniform4f(this.addr, b.x, b.y, b.z, b.w), c[0] = b.x, c[1] = b.y, c[2] = b.z, c[3] = b.w;
        } else La(c, b) || (a.uniform4fv(this.addr, b), Ha(c, b));
    }
    function lj(a, b) {
        var c = this.cache, d = b.elements;
        void 0 === d ? La(c, b) || (a.uniformMatrix2fv(this.addr, !1, b), Ha(c, b)) : La(c, d) || (sh.set(d), a.uniformMatrix2fv(this.addr, !1, sh), Ha(c, d));
    }
    function mj(a, b) {
        var c = this.cache, d = b.elements;
        void 0 === d ? La(c, b) || (a.uniformMatrix3fv(this.addr, !1, b), Ha(c, b)) : La(c, d) || (th.set(d), a.uniformMatrix3fv(this.addr, !1, th), Ha(c, d));
    }
    function nj(a, b) {
        var c = this.cache, d = b.elements;
        void 0 === d ? La(c, b) || (a.uniformMatrix4fv(this.addr, !1, b), Ha(c, b)) : La(c, d) || (uh.set(d), a.uniformMatrix4fv(this.addr, !1, uh), Ha(c, d));
    }
    function oj(a, b, c) {
        var d = this.cache, e = c.allocateTextureUnit();
        d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e);
        c.safeSetTexture2D(b || vh, e);
    }
    function pj(a, b, c) {
        var d = this.cache, e = c.allocateTextureUnit();
        d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e);
        c.setTexture2DArray(b || qj, e);
    }
    function rj(a, b, c) {
        var d = this.cache, e = c.allocateTextureUnit();
        d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e);
        c.setTexture3D(b || sj, e);
    }
    function tj(a, b, c) {
        var d = this.cache, e = c.allocateTextureUnit();
        d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e);
        c.safeSetTextureCube(b || wh, e);
    }
    function uj(a, b) {
        var c = this.cache;
        c[0] !== b && (a.uniform1i(this.addr, b), c[0] = b);
    }
    function vj(a, b) {
        var c = this.cache;
        La(c, b) || (a.uniform2iv(this.addr, b), Ha(c, b));
    }
    function wj(a, b) {
        var c = this.cache;
        La(c, b) || (a.uniform3iv(this.addr, b), Ha(c, b));
    }
    function xj(a, b) {
        var c = this.cache;
        La(c, b) || (a.uniform4iv(this.addr, b), Ha(c, b));
    }
    function yj(a) {
        switch(a){
            case 5126:
                return hj;
            case 35664:
                return ij;
            case 35665:
                return jj;
            case 35666:
                return kj;
            case 35674:
                return lj;
            case 35675:
                return mj;
            case 35676:
                return nj;
            case 35678:
            case 36198:
                return oj;
            case 35679:
                return rj;
            case 35680:
                return tj;
            case 36289:
                return pj;
            case 5124:
            case 35670:
                return uj;
            case 35667:
            case 35671:
                return vj;
            case 35668:
            case 35672:
                return wj;
            case 35669:
            case 35673:
                return xj;
        }
    }
    function zj(a, b) {
        a.uniform1fv(this.addr, b);
    }
    function Aj(a, b) {
        a.uniform1iv(this.addr, b);
    }
    function Bj(a, b) {
        a.uniform2iv(this.addr, b);
    }
    function Cj(a, b) {
        a.uniform3iv(this.addr, b);
    }
    function Dj(a, b) {
        a.uniform4iv(this.addr, b);
    }
    function Ej(a, b) {
        b = Gc(b, this.size, 2);
        a.uniform2fv(this.addr, b);
    }
    function Fj(a, b) {
        b = Gc(b, this.size, 3);
        a.uniform3fv(this.addr, b);
    }
    function Gj(a, b) {
        b = Gc(b, this.size, 4);
        a.uniform4fv(this.addr, b);
    }
    function Hj(a, b) {
        b = Gc(b, this.size, 4);
        a.uniformMatrix2fv(this.addr, !1, b);
    }
    function Ij(a, b) {
        b = Gc(b, this.size, 9);
        a.uniformMatrix3fv(this.addr, !1, b);
    }
    function Jj(a, b) {
        b = Gc(b, this.size, 16);
        a.uniformMatrix4fv(this.addr, !1, b);
    }
    function Kj(a, b, c) {
        var d = b.length, e = qh(c, d);
        a.uniform1iv(this.addr, e);
        for(a = 0; a !== d; ++a)c.safeSetTexture2D(b[a] || vh, e[a]);
    }
    function Lj(a, b, c) {
        var d = b.length, e = qh(c, d);
        a.uniform1iv(this.addr, e);
        for(a = 0; a !== d; ++a)c.safeSetTextureCube(b[a] || wh, e[a]);
    }
    function Mj(a) {
        switch(a){
            case 5126:
                return zj;
            case 35664:
                return Ej;
            case 35665:
                return Fj;
            case 35666:
                return Gj;
            case 35674:
                return Hj;
            case 35675:
                return Ij;
            case 35676:
                return Jj;
            case 35678:
                return Kj;
            case 35680:
                return Lj;
            case 5124:
            case 35670:
                return Aj;
            case 35667:
            case 35671:
                return Bj;
            case 35668:
            case 35672:
                return Cj;
            case 35669:
            case 35673:
                return Dj;
        }
    }
    function Nj(a, b, c) {
        this.id = a;
        this.addr = c;
        this.cache = [];
        this.setValue = yj(b.type);
    }
    function xh(a, b, c) {
        this.id = a;
        this.addr = c;
        this.cache = [];
        this.size = b.size;
        this.setValue = Mj(b.type);
    }
    function yh(a) {
        this.id = a;
        this.seq = [];
        this.map = {};
    }
    function Bb(a, b) {
        this.seq = [];
        this.map = {};
        for(var c = a.getProgramParameter(b, 35718), d = 0; d < c; ++d){
            var e = a.getActiveUniform(b, d), f = a.getUniformLocation(b, e.name), g = this, h = e.name, l = h.length;
            for(Yf.lastIndex = 0;;){
                var m = Yf.exec(h), q = Yf.lastIndex, u = m[1], k = m[3];
                "]" === m[2] && (u |= 0);
                if (void 0 === k || "[" === k && q + 2 === l) {
                    h = g;
                    e = void 0 === k ? new Nj(u, e, f) : new xh(u, e, f);
                    h.seq.push(e);
                    h.map[e.id] = e;
                    break;
                } else k = g.map[u], void 0 === k && (k = new yh(u), u = g, g = k, u.seq.push(g), u.map[g.id] = g), g = k;
            }
        }
    }
    function zh(a, b, c) {
        b = a.createShader(b);
        a.shaderSource(b, c);
        a.compileShader(b);
        return b;
    }
    function Ah(a) {
        switch(a){
            case 3E3:
                return [
                    "Linear",
                    "( value )"
                ];
            case 3001:
                return [
                    "sRGB",
                    "( value )"
                ];
            case 3002:
                return [
                    "RGBE",
                    "( value )"
                ];
            case 3004:
                return [
                    "RGBM",
                    "( value, 7.0 )"
                ];
            case 3005:
                return [
                    "RGBM",
                    "( value, 16.0 )"
                ];
            case 3006:
                return [
                    "RGBD",
                    "( value, 256.0 )"
                ];
            case 3007:
                return [
                    "Gamma",
                    "( value, float( GAMMA_FACTOR ) )"
                ];
            case 3003:
                return [
                    "LogLuv",
                    "( value )"
                ];
            default:
                throw Error("unsupported encoding: " + a);
        }
    }
    function Bh(a, b, c) {
        var d = a.getShaderParameter(b, 35713), e = a.getShaderInfoLog(b).trim();
        if (d && "" === e) return "";
        a = a.getShaderSource(b).split("\n");
        for(b = 0; b < a.length; b++)a[b] = b + 1 + ": " + a[b];
        a = a.join("\n");
        return "THREE.WebGLShader: gl.getShaderInfoLog() " + c + "\n" + e + a;
    }
    function Ge(a, b) {
        b = Ah(b);
        return "vec4 " + a + "( vec4 value ) { return " + b[0] + "ToLinear" + b[1] + "; }";
    }
    function Oj(a, b) {
        b = Ah(b);
        return "vec4 " + a + "( vec4 value ) { return LinearTo" + b[0] + b[1] + "; }";
    }
    function Pj(a, b) {
        switch(b){
            case 1:
                b = "Linear";
                break;
            case 2:
                b = "Reinhard";
                break;
            case 3:
                b = "Uncharted2";
                break;
            case 4:
                b = "OptimizedCineon";
                break;
            case 5:
                b = "ACESFilmic";
                break;
            default:
                throw Error("unsupported toneMapping: " + b);
        }
        return "vec3 " + a + "( vec3 color ) { return " + b + "ToneMapping( color ); }";
    }
    function Qj(a, b, c) {
        a = a || {};
        return [
            a.derivatives || b.envMapCubeUV || b.bumpMap || b.tangentSpaceNormalMap || b.clearcoatNormalMap || b.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "",
            (a.fragDepth || b.logarithmicDepthBuffer) && c.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "",
            a.drawBuffers && c.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "",
            (a.shaderTextureLOD || b.envMap) && c.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""
        ].filter(Hd).join("\n");
    }
    function Rj(a) {
        var b = [], c;
        for(c in a){
            var d = a[c];
            !1 !== d && b.push("#define " + c + " " + d);
        }
        return b.join("\n");
    }
    function Hd(a) {
        return "" !== a;
    }
    function Ch(a, b) {
        return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, b.numPointLights).replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, b.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, b.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, b.numPointLightShadows);
    }
    function Dh(a, b) {
        return a.replace(/NUM_CLIPPING_PLANES/g, b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, b.numClippingPlanes - b.numClipIntersection);
    }
    function Zf(a, b) {
        a = N1[b];
        if (void 0 === a) throw Error("Can not resolve #include <" + b + ">");
        return a.replace($f, Zf);
    }
    function Eh(a, b, c, d) {
        a = "";
        for(b = parseInt(b); b < parseInt(c); b++)a += d.replace(/\[ i \]/g, "[ " + b + " ]").replace(/UNROLLED_LOOP_INDEX/g, b);
        return a;
    }
    function Fh(a) {
        var b = "precision " + a.precision + " float;\nprecision " + a.precision + " int;";
        "highp" === a.precision ? b += "\n#define HIGH_PRECISION" : "mediump" === a.precision ? b += "\n#define MEDIUM_PRECISION" : "lowp" === a.precision && (b += "\n#define LOW_PRECISION");
        return b;
    }
    function Sj(a) {
        var b = "SHADOWMAP_TYPE_BASIC";
        1 === a.shadowMapType ? b = "SHADOWMAP_TYPE_PCF" : 2 === a.shadowMapType ? b = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === a.shadowMapType && (b = "SHADOWMAP_TYPE_VSM");
        return b;
    }
    function Tj(a, b) {
        var c = "ENVMAP_TYPE_CUBE";
        if (a.envMap) switch(b.envMap.mapping){
            case 301:
            case 302:
                c = "ENVMAP_TYPE_CUBE";
                break;
            case 306:
            case 307:
                c = "ENVMAP_TYPE_CUBE_UV";
                break;
            case 303:
            case 304:
                c = "ENVMAP_TYPE_EQUIREC";
                break;
            case 305:
                c = "ENVMAP_TYPE_SPHERE";
        }
        return c;
    }
    function Uj(a, b) {
        var c = "ENVMAP_MODE_REFLECTION";
        if (a.envMap) switch(b.envMap.mapping){
            case 302:
            case 304:
                c = "ENVMAP_MODE_REFRACTION";
        }
        return c;
    }
    function Vj(a, b) {
        var c = "ENVMAP_BLENDING_MULTIPLY";
        if (a.envMap) switch(b.combine){
            case 0:
                c = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case 1:
                c = "ENVMAP_BLENDING_MIX";
                break;
            case 2:
                c = "ENVMAP_BLENDING_ADD";
        }
        return c;
    }
    function Wj(a11, b9, c7, d7, e, f) {
        var g = a11.getContext(), h = d7.defines, l = e.vertexShader, m = e.fragmentShader, q = Sj(f), u = Tj(f, d7), k = Uj(f, d7), r = Vj(f, d7), p = 0 < a11.gammaFactor ? a11.gammaFactor : 1, v = f.isWebGL2 ? "" : Qj(d7.extensions, f, b9), x = Rj(h), n = g.createProgram(), y = (h = a11.getRenderTarget()) && h.isWebGLMultiviewRenderTarget ? h.numViews : 0;
        d7.isRawShaderMaterial ? (h = [
            x
        ].filter(Hd).join("\n"), 0 < h.length && (h += "\n"), b9 = [
            v,
            x
        ].filter(Hd).join("\n"), 0 < b9.length && (b9 += "\n")) : (h = [
            Fh(f),
            "#define SHADER_NAME " + e.name,
            x,
            f.instancing ? "#define USE_INSTANCING" : "",
            f.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
            "#define GAMMA_FACTOR " + p,
            "#define MAX_BONES " + f.maxBones,
            f.useFog && f.fog ? "#define USE_FOG" : "",
            f.useFog && f.fogExp2 ? "#define FOG_EXP2" : "",
            f.map ? "#define USE_MAP" : "",
            f.envMap ? "#define USE_ENVMAP" : "",
            f.envMap ? "#define " + k : "",
            f.lightMap ? "#define USE_LIGHTMAP" : "",
            f.aoMap ? "#define USE_AOMAP" : "",
            f.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            f.bumpMap ? "#define USE_BUMPMAP" : "",
            f.normalMap ? "#define USE_NORMALMAP" : "",
            f.normalMap && f.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            f.normalMap && f.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            f.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            f.displacementMap && f.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
            f.specularMap ? "#define USE_SPECULARMAP" : "",
            f.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            f.metalnessMap ? "#define USE_METALNESSMAP" : "",
            f.alphaMap ? "#define USE_ALPHAMAP" : "",
            f.vertexTangents ? "#define USE_TANGENT" : "",
            f.vertexColors ? "#define USE_COLOR" : "",
            f.vertexUvs ? "#define USE_UV" : "",
            f.flatShading ? "#define FLAT_SHADED" : "",
            f.skinning ? "#define USE_SKINNING" : "",
            f.useVertexTexture ? "#define BONE_TEXTURE" : "",
            f.morphTargets ? "#define USE_MORPHTARGETS" : "",
            f.morphNormals && !1 === f.flatShading ? "#define USE_MORPHNORMALS" : "",
            f.doubleSided ? "#define DOUBLE_SIDED" : "",
            f.flipSided ? "#define FLIP_SIDED" : "",
            f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            f.shadowMapEnabled ? "#define " + q : "",
            f.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
            f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            f.logarithmicDepthBuffer && (f.isWebGL2 || b9.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 modelMatrix;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "#ifdef USE_INSTANCING",
            " attribute mat4 instanceMatrix;",
            "#endif",
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_TANGENT",
            "	attribute vec4 tangent;",
            "#endif",
            "#ifdef USE_COLOR",
            "	attribute vec3 color;",
            "#endif",
            "#ifdef USE_MORPHTARGETS",
            "	attribute vec3 morphTarget0;",
            "	attribute vec3 morphTarget1;",
            "	attribute vec3 morphTarget2;",
            "	attribute vec3 morphTarget3;",
            "	#ifdef USE_MORPHNORMALS",
            "		attribute vec3 morphNormal0;",
            "		attribute vec3 morphNormal1;",
            "		attribute vec3 morphNormal2;",
            "		attribute vec3 morphNormal3;",
            "	#else",
            "		attribute vec3 morphTarget4;",
            "		attribute vec3 morphTarget5;",
            "		attribute vec3 morphTarget6;",
            "		attribute vec3 morphTarget7;",
            "	#endif",
            "#endif",
            "#ifdef USE_SKINNING",
            "	attribute vec4 skinIndex;",
            "	attribute vec4 skinWeight;",
            "#endif",
            "\n"
        ].filter(Hd).join("\n"), b9 = [
            v,
            Fh(f),
            "#define SHADER_NAME " + e.name,
            x,
            f.alphaTest ? "#define ALPHATEST " + f.alphaTest + (f.alphaTest % 1 ? "" : ".0") : "",
            "#define GAMMA_FACTOR " + p,
            f.useFog && f.fog ? "#define USE_FOG" : "",
            f.useFog && f.fogExp2 ? "#define FOG_EXP2" : "",
            f.map ? "#define USE_MAP" : "",
            f.matcap ? "#define USE_MATCAP" : "",
            f.envMap ? "#define USE_ENVMAP" : "",
            f.envMap ? "#define " + u : "",
            f.envMap ? "#define " + k : "",
            f.envMap ? "#define " + r : "",
            f.lightMap ? "#define USE_LIGHTMAP" : "",
            f.aoMap ? "#define USE_AOMAP" : "",
            f.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            f.bumpMap ? "#define USE_BUMPMAP" : "",
            f.normalMap ? "#define USE_NORMALMAP" : "",
            f.normalMap && f.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            f.normalMap && f.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            f.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            f.specularMap ? "#define USE_SPECULARMAP" : "",
            f.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            f.metalnessMap ? "#define USE_METALNESSMAP" : "",
            f.alphaMap ? "#define USE_ALPHAMAP" : "",
            f.sheen ? "#define USE_SHEEN" : "",
            f.vertexTangents ? "#define USE_TANGENT" : "",
            f.vertexColors ? "#define USE_COLOR" : "",
            f.vertexUvs ? "#define USE_UV" : "",
            f.gradientMap ? "#define USE_GRADIENTMAP" : "",
            f.flatShading ? "#define FLAT_SHADED" : "",
            f.doubleSided ? "#define DOUBLE_SIDED" : "",
            f.flipSided ? "#define FLIP_SIDED" : "",
            f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            f.shadowMapEnabled ? "#define " + q : "",
            f.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
            f.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
            f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            f.logarithmicDepthBuffer && (f.isWebGL2 || b9.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "",
            (d7.extensions && d7.extensions.shaderTextureLOD || f.envMap) && (f.isWebGL2 || b9.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            0 !== f.toneMapping ? "#define TONE_MAPPING" : "",
            0 !== f.toneMapping ? N1.tonemapping_pars_fragment : "",
            0 !== f.toneMapping ? Pj("toneMapping", f.toneMapping) : "",
            f.dithering ? "#define DITHERING" : "",
            f.outputEncoding || f.mapEncoding || f.matcapEncoding || f.envMapEncoding || f.emissiveMapEncoding ? N1.encodings_pars_fragment : "",
            f.mapEncoding ? Ge("mapTexelToLinear", f.mapEncoding) : "",
            f.matcapEncoding ? Ge("matcapTexelToLinear", f.matcapEncoding) : "",
            f.envMapEncoding ? Ge("envMapTexelToLinear", f.envMapEncoding) : "",
            f.emissiveMapEncoding ? Ge("emissiveMapTexelToLinear", f.emissiveMapEncoding) : "",
            f.outputEncoding ? Oj("linearToOutputTexel", f.outputEncoding) : "",
            f.depthPacking ? "#define DEPTH_PACKING " + d7.depthPacking : "",
            "\n"
        ].filter(Hd).join("\n"));
        l = l.replace($f, Zf);
        l = Ch(l, f);
        l = Dh(l, f);
        m = m.replace($f, Zf);
        m = Ch(m, f);
        m = Dh(m, f);
        l = l.replace(Gh, Eh);
        m = m.replace(Gh, Eh);
        f.isWebGL2 && !d7.isRawShaderMaterial && (q = !1, u = /^\s*#version\s+300\s+es\s*\n/, d7.isShaderMaterial && null !== l.match(u) && null !== m.match(u) && (q = !0, l = l.replace(u, ""), m = m.replace(u, "")), h = "#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n" + h, b9 = [
            "#version 300 es\n\n#define varying in",
            q ? "" : "out highp vec4 pc_fragColor;",
            q ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"
        ].join("\n") + "\n" + b9, 0 < y && (h = h.replace("#version 300 es\n", [
            "#version 300 es\n\n#extension GL_OVR_multiview2 : require",
            "layout(num_views = " + y + ") in;",
            "#define VIEW_ID gl_ViewID_OVR"
        ].join("\n")), h = h.replace("uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;", [
            "uniform mat4 modelViewMatrices[" + y + "];",
            "uniform mat4 projectionMatrices[" + y + "];",
            "uniform mat4 viewMatrices[" + y + "];",
            "uniform mat3 normalMatrices[" + y + "];",
            "#define modelViewMatrix modelViewMatrices[VIEW_ID]\n#define projectionMatrix projectionMatrices[VIEW_ID]\n#define viewMatrix viewMatrices[VIEW_ID]\n#define normalMatrix normalMatrices[VIEW_ID]"
        ].join("\n")), b9 = b9.replace("#version 300 es\n", "#version 300 es\n\n#extension GL_OVR_multiview2 : require\n#define VIEW_ID gl_ViewID_OVR"), b9 = b9.replace("uniform mat4 viewMatrix;", [
            "uniform mat4 viewMatrices[" + y + "];",
            "#define viewMatrix viewMatrices[VIEW_ID]"
        ].join("\n"))));
        m = b9 + m;
        l = zh(g, 35633, h + l);
        m = zh(g, 35632, m);
        g.attachShader(n, l);
        g.attachShader(n, m);
        void 0 !== d7.index0AttributeName ? g.bindAttribLocation(n, 0, d7.index0AttributeName) : !0 === f.morphTargets && g.bindAttribLocation(n, 0, "position");
        g.linkProgram(n);
        if (a11.debug.checkShaderErrors) {
            a11 = g.getProgramInfoLog(n).trim();
            f = g.getShaderInfoLog(l).trim();
            q = g.getShaderInfoLog(m).trim();
            k = u = !0;
            if (!1 === g.getProgramParameter(n, 35714)) u = !1, r = Bh(g, l, "vertex"), p = Bh(g, m, "fragment"), console.error("THREE.WebGLProgram: shader error: ", g.getError(), "35715", g.getProgramParameter(n, 35715), "gl.getProgramInfoLog", a11, r, p);
            else if ("" !== a11) console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", a11);
            else if ("" === f || "" === q) k = !1;
            k && (this.diagnostics = {
                runnable: u,
                material: d7,
                programLog: a11,
                vertexShader: {
                    log: f,
                    prefix: h
                },
                fragmentShader: {
                    log: q,
                    prefix: b9
                }
            });
        }
        g.deleteShader(l);
        g.deleteShader(m);
        var V;
        this.getUniforms = function() {
            void 0 === V && (V = new Bb(g, n));
            return V;
        };
        var P;
        this.getAttributes = function() {
            if (void 0 === P) {
                for(var a = {}, b = g.getProgramParameter(n, 35721), c = 0; c < b; c++){
                    var d = g.getActiveAttrib(n, c).name;
                    a[d] = g.getAttribLocation(n, d);
                }
                P = a;
            }
            return P;
        };
        this.destroy = function() {
            g.deleteProgram(n);
            this.program = void 0;
        };
        this.name = e.name;
        this.id = Xj++;
        this.code = c7;
        this.usedTimes = 1;
        this.program = n;
        this.vertexShader = l;
        this.fragmentShader = m;
        this.numMultiviewViews = y;
        return this;
    }
    function Yj(a12, b10, c8) {
        function d8(a, b) {
            if (a) a.isTexture ? c = a.encoding : a.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), c = a.texture.encoding);
            else var c = 3E3;
            3E3 === c && b && (c = 3007);
            return c;
        }
        var e4 = [], f4 = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        }, g3 = "precision supportsVertexTextures instancing map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen".split(" ");
        this.getParameters = function(b, e, g, q, u, k, r) {
            var h = f4[b.type];
            if (r.isSkinnedMesh) {
                var l = r.skeleton.bones;
                if (c8.floatVertexTextures) l = 1024;
                else {
                    var m = Math.min(Math.floor((c8.maxVertexUniforms - 20) / 4), l.length);
                    m < l.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + l.length + " bones. This GPU supports " + m + "."), l = 0) : l = m;
                }
            } else l = 0;
            m = c8.precision;
            null !== b.precision && (m = c8.getMaxPrecision(b.precision), m !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", m, "instead."));
            var t = a12.getRenderTarget();
            return {
                isWebGL2: c8.isWebGL2,
                shaderID: h,
                precision: m,
                instancing: !0 === r.isInstancedMesh,
                supportsVertexTextures: c8.vertexTextures,
                outputEncoding: d8(t ? t.texture : null, a12.gammaOutput),
                map: !!b.map,
                mapEncoding: d8(b.map, a12.gammaInput),
                matcap: !!b.matcap,
                matcapEncoding: d8(b.matcap, a12.gammaInput),
                envMap: !!b.envMap,
                envMapMode: b.envMap && b.envMap.mapping,
                envMapEncoding: d8(b.envMap, a12.gammaInput),
                envMapCubeUV: !!b.envMap && (306 === b.envMap.mapping || 307 === b.envMap.mapping),
                lightMap: !!b.lightMap,
                aoMap: !!b.aoMap,
                emissiveMap: !!b.emissiveMap,
                emissiveMapEncoding: d8(b.emissiveMap, a12.gammaInput),
                bumpMap: !!b.bumpMap,
                normalMap: !!b.normalMap,
                objectSpaceNormalMap: 1 === b.normalMapType,
                tangentSpaceNormalMap: 0 === b.normalMapType,
                clearcoatNormalMap: !!b.clearcoatNormalMap,
                displacementMap: !!b.displacementMap,
                roughnessMap: !!b.roughnessMap,
                metalnessMap: !!b.metalnessMap,
                specularMap: !!b.specularMap,
                alphaMap: !!b.alphaMap,
                gradientMap: !!b.gradientMap,
                sheen: !!b.sheen,
                combine: b.combine,
                vertexTangents: b.normalMap && b.vertexTangents,
                vertexColors: b.vertexColors,
                vertexUvs: !!b.map || !!b.bumpMap || !!b.normalMap || !!b.specularMap || !!b.alphaMap || !!b.emissiveMap || !!b.roughnessMap || !!b.metalnessMap || !!b.clearcoatNormalMap,
                fog: !!q,
                useFog: b.fog,
                fogExp2: q && q.isFogExp2,
                flatShading: b.flatShading,
                sizeAttenuation: b.sizeAttenuation,
                logarithmicDepthBuffer: c8.logarithmicDepthBuffer,
                skinning: b.skinning && 0 < l,
                maxBones: l,
                useVertexTexture: c8.floatVertexTextures,
                morphTargets: b.morphTargets,
                morphNormals: b.morphNormals,
                maxMorphTargets: a12.maxMorphTargets,
                maxMorphNormals: a12.maxMorphNormals,
                numDirLights: e.directional.length,
                numPointLights: e.point.length,
                numSpotLights: e.spot.length,
                numRectAreaLights: e.rectArea.length,
                numHemiLights: e.hemi.length,
                numDirLightShadows: e.directionalShadowMap.length,
                numPointLightShadows: e.pointShadowMap.length,
                numSpotLightShadows: e.spotShadowMap.length,
                numClippingPlanes: u,
                numClipIntersection: k,
                dithering: b.dithering,
                shadowMapEnabled: a12.shadowMap.enabled && 0 < g.length,
                shadowMapType: a12.shadowMap.type,
                toneMapping: b.toneMapped ? a12.toneMapping : 0,
                physicallyCorrectLights: a12.physicallyCorrectLights,
                premultipliedAlpha: b.premultipliedAlpha,
                alphaTest: b.alphaTest,
                doubleSided: 2 === b.side,
                flipSided: 1 === b.side,
                depthPacking: void 0 !== b.depthPacking ? b.depthPacking : !1
            };
        };
        this.getProgramCode = function(b, c) {
            var d = [];
            c.shaderID ? d.push(c.shaderID) : (d.push(b.fragmentShader), d.push(b.vertexShader));
            if (void 0 !== b.defines) for(var e in b.defines)d.push(e), d.push(b.defines[e]);
            for(e = 0; e < g3.length; e++)d.push(c[g3[e]]);
            d.push(b.onBeforeCompile.toString());
            d.push(a12.gammaOutput);
            d.push(a12.gammaFactor);
            return d.join();
        };
        this.acquireProgram = function(c, d, f, g) {
            for(var h, l = 0, m = e4.length; l < m; l++){
                var q = e4[l];
                if (q.code === g) {
                    h = q;
                    ++h.usedTimes;
                    break;
                }
            }
            void 0 === h && (h = new Wj(a12, b10, g, c, d, f), e4.push(h));
            return h;
        };
        this.releaseProgram = function(a) {
            if (0 === --a.usedTimes) {
                var b = e4.indexOf(a);
                e4[b] = e4[e4.length - 1];
                e4.pop();
                a.destroy();
            }
        };
        this.programs = e4;
    }
    function Zj() {
        var a = new WeakMap;
        return {
            get: function(b) {
                var c = a.get(b);
                void 0 === c && (c = {}, a.set(b, c));
                return c;
            },
            remove: function(b) {
                a.delete(b);
            },
            update: function(b, c, d) {
                a.get(b)[c] = d;
            },
            dispose: function() {
                a = new WeakMap;
            }
        };
    }
    function ak(a, b) {
        return a.groupOrder !== b.groupOrder ? a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program !== b.program ? a.program.id - b.program.id : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id;
    }
    function bk(a, b) {
        return a.groupOrder !== b.groupOrder ? a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id;
    }
    function Hh() {
        function a13(a, d, e, m, q, u) {
            var g = b11[c9];
            void 0 === g ? (g = {
                id: a.id,
                object: a,
                geometry: d,
                material: e,
                program: e.program || f5,
                groupOrder: m,
                renderOrder: a.renderOrder,
                z: q,
                group: u
            }, b11[c9] = g) : (g.id = a.id, g.object = a, g.geometry = d, g.material = e, g.program = e.program || f5, g.groupOrder = m, g.renderOrder = a.renderOrder, g.z = q, g.group = u);
            c9++;
            return g;
        }
        var b11 = [], c9 = 0, d9 = [], e5 = [], f5 = {
            id: -1
        };
        return {
            opaque: d9,
            transparent: e5,
            init: function() {
                c9 = 0;
                d9.length = 0;
                e5.length = 0;
            },
            push: function(b, c, f, m, q, u) {
                b = a13(b, c, f, m, q, u);
                (!0 === f.transparent ? e5 : d9).push(b);
            },
            unshift: function(b, c, f, m, q, u) {
                b = a13(b, c, f, m, q, u);
                (!0 === f.transparent ? e5 : d9).unshift(b);
            },
            sort: function() {
                1 < d9.length && d9.sort(ak);
                1 < e5.length && e5.sort(bk);
            }
        };
    }
    function ck() {
        function a(c) {
            c = c.target;
            c.removeEventListener("dispose", a);
            b.delete(c);
        }
        var b = new WeakMap;
        return {
            get: function(c, d) {
                var e = b.get(c);
                if (void 0 === e) {
                    var f = new Hh;
                    b.set(c, new WeakMap);
                    b.get(c).set(d, f);
                    c.addEventListener("dispose", a);
                } else f = e.get(d), void 0 === f && (f = new Hh, e.set(d, f));
                return f;
            },
            dispose: function() {
                b = new WeakMap;
            }
        };
    }
    function dk() {
        var a = {};
        return {
            get: function(b) {
                if (void 0 !== a[b.id]) return a[b.id];
                switch(b.type){
                    case "DirectionalLight":
                        var c = {
                            direction: new n1,
                            color: new H1,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new w1
                        };
                        break;
                    case "SpotLight":
                        c = {
                            position: new n1,
                            direction: new n1,
                            color: new H1,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new w1
                        };
                        break;
                    case "PointLight":
                        c = {
                            position: new n1,
                            color: new H1,
                            distance: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new w1,
                            shadowCameraNear: 1,
                            shadowCameraFar: 1E3
                        };
                        break;
                    case "HemisphereLight":
                        c = {
                            direction: new n1,
                            skyColor: new H1,
                            groundColor: new H1
                        };
                        break;
                    case "RectAreaLight":
                        c = {
                            color: new H1,
                            position: new n1,
                            halfWidth: new n1,
                            halfHeight: new n1
                        };
                }
                return a[b.id] = c;
            }
        };
    }
    function ek(a, b) {
        return (b.castShadow ? 1 : 0) - (a.castShadow ? 1 : 0);
    }
    function fk() {
        for(var a = new dk, b = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [
                0,
                0,
                0
            ],
            probe: [],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1
        }, c10 = 0; 9 > c10; c10++)b.probe.push(new n1);
        var d = new n1, e = new U1, f = new U1;
        return {
            setup: function(c, h, l) {
                for(var g = 0, q = 0, u = 0, k = 0; 9 > k; k++)b.probe[k].set(0, 0, 0);
                var r = h = 0, p = 0, v = 0, n = 0, z = 0, y = 0, V = 0;
                l = l.matrixWorldInverse;
                c.sort(ek);
                k = 0;
                for(var P = c.length; k < P; k++){
                    var C = c[k], Cb = C.color, w = C.intensity, A = C.distance, wa = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
                    if (C.isAmbientLight) g += Cb.r * w, q += Cb.g * w, u += Cb.b * w;
                    else if (C.isLightProbe) for(wa = 0; 9 > wa; wa++)b.probe[wa].addScaledVector(C.sh.coefficients[wa], w);
                    else if (C.isDirectionalLight) {
                        var G = a.get(C);
                        G.color.copy(C.color).multiplyScalar(C.intensity);
                        G.direction.setFromMatrixPosition(C.matrixWorld);
                        d.setFromMatrixPosition(C.target.matrixWorld);
                        G.direction.sub(d);
                        G.direction.transformDirection(l);
                        if (G.shadow = C.castShadow) w = C.shadow, G.shadowBias = w.bias, G.shadowRadius = w.radius, G.shadowMapSize = w.mapSize, b.directionalShadowMap[h] = wa, b.directionalShadowMatrix[h] = C.shadow.matrix, z++;
                        b.directional[h] = G;
                        h++;
                    } else if (C.isSpotLight) {
                        G = a.get(C);
                        G.position.setFromMatrixPosition(C.matrixWorld);
                        G.position.applyMatrix4(l);
                        G.color.copy(Cb).multiplyScalar(w);
                        G.distance = A;
                        G.direction.setFromMatrixPosition(C.matrixWorld);
                        d.setFromMatrixPosition(C.target.matrixWorld);
                        G.direction.sub(d);
                        G.direction.transformDirection(l);
                        G.coneCos = Math.cos(C.angle);
                        G.penumbraCos = Math.cos(C.angle * (1 - C.penumbra));
                        G.decay = C.decay;
                        if (G.shadow = C.castShadow) w = C.shadow, G.shadowBias = w.bias, G.shadowRadius = w.radius, G.shadowMapSize = w.mapSize, b.spotShadowMap[p] = wa, b.spotShadowMatrix[p] = C.shadow.matrix, V++;
                        b.spot[p] = G;
                        p++;
                    } else if (C.isRectAreaLight) G = a.get(C), G.color.copy(Cb).multiplyScalar(w), G.position.setFromMatrixPosition(C.matrixWorld), G.position.applyMatrix4(l), f.identity(), e.copy(C.matrixWorld), e.premultiply(l), f.extractRotation(e), G.halfWidth.set(.5 * C.width, 0, 0), G.halfHeight.set(0, .5 * C.height, 0), G.halfWidth.applyMatrix4(f), G.halfHeight.applyMatrix4(f), b.rectArea[v] = G, v++;
                    else if (C.isPointLight) {
                        G = a.get(C);
                        G.position.setFromMatrixPosition(C.matrixWorld);
                        G.position.applyMatrix4(l);
                        G.color.copy(C.color).multiplyScalar(C.intensity);
                        G.distance = C.distance;
                        G.decay = C.decay;
                        if (G.shadow = C.castShadow) w = C.shadow, G.shadowBias = w.bias, G.shadowRadius = w.radius, G.shadowMapSize = w.mapSize, G.shadowCameraNear = w.camera.near, G.shadowCameraFar = w.camera.far, b.pointShadowMap[r] = wa, b.pointShadowMatrix[r] = C.shadow.matrix, y++;
                        b.point[r] = G;
                        r++;
                    } else C.isHemisphereLight && (G = a.get(C), G.direction.setFromMatrixPosition(C.matrixWorld), G.direction.transformDirection(l), G.direction.normalize(), G.skyColor.copy(C.color).multiplyScalar(w), G.groundColor.copy(C.groundColor).multiplyScalar(w), b.hemi[n] = G, n++);
                }
                b.ambient[0] = g;
                b.ambient[1] = q;
                b.ambient[2] = u;
                c = b.hash;
                if (c.directionalLength !== h || c.pointLength !== r || c.spotLength !== p || c.rectAreaLength !== v || c.hemiLength !== n || c.numDirectionalShadows !== z || c.numPointShadows !== y || c.numSpotShadows !== V) b.directional.length = h, b.spot.length = p, b.rectArea.length = v, b.point.length = r, b.hemi.length = n, b.directionalShadowMap.length = z, b.pointShadowMap.length = y, b.spotShadowMap.length = V, b.directionalShadowMatrix.length = z, b.pointShadowMatrix.length = y, b.spotShadowMatrix.length = V, c.directionalLength = h, c.pointLength = r, c.spotLength = p, c.rectAreaLength = v, c.hemiLength = n, c.numDirectionalShadows = z, c.numPointShadows = y, c.numSpotShadows = V, b.version = gk++;
            },
            state: b
        };
    }
    function Ih() {
        var a14 = new fk, b = [], c = [];
        return {
            init: function() {
                b.length = 0;
                c.length = 0;
            },
            state: {
                lightsArray: b,
                shadowsArray: c,
                lights: a14
            },
            setupLights: function(d) {
                a14.setup(b, c, d);
            },
            pushLight: function(a) {
                b.push(a);
            },
            pushShadow: function(a) {
                c.push(a);
            }
        };
    }
    function hk() {
        function a(c) {
            c = c.target;
            c.removeEventListener("dispose", a);
            b.delete(c);
        }
        var b = new WeakMap;
        return {
            get: function(c, d) {
                if (!1 === b.has(c)) {
                    var e = new Ih;
                    b.set(c, new WeakMap);
                    b.get(c).set(d, e);
                    c.addEventListener("dispose", a);
                } else !1 === b.get(c).has(d) ? (e = new Ih, b.get(c).set(d, e)) : e = b.get(c).get(d);
                return e;
            },
            dispose: function() {
                b = new WeakMap;
            }
        };
    }
    function Db(a) {
        M1.call(this);
        this.type = "MeshDepthMaterial";
        this.depthPacking = 3200;
        this.morphTargets = this.skinning = !1;
        this.displacementMap = this.alphaMap = this.map = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.fog = !1;
        this.setValues(a);
    }
    function Eb(a) {
        M1.call(this);
        this.type = "MeshDistanceMaterial";
        this.referencePosition = new n1;
        this.nearDistance = 1;
        this.farDistance = 1E3;
        this.morphTargets = this.skinning = !1;
        this.displacementMap = this.alphaMap = this.map = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.fog = !1;
        this.setValues(a);
    }
    function Jh(a, b12, c11) {
        function d10(b, c, d, e, f, g) {
            var h = b.geometry;
            var l = m1;
            var p = b.customDepthMaterial;
            d.isPointLight && (l = q1, p = b.customDistanceMaterial);
            p ? l = p : (p = !1, c.morphTargets && (h && h.isBufferGeometry ? p = h.morphAttributes && h.morphAttributes.position && 0 < h.morphAttributes.position.length : h && h.isGeometry && (p = h.morphTargets && 0 < h.morphTargets.length)), b.isSkinnedMesh && !1 === c.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", b), b = b.isSkinnedMesh && c.skinning, h = 0, p && (h |= 1), b && (h |= 2), l = l[h]);
            a.localClippingEnabled && !0 === c.clipShadows && 0 !== c.clippingPlanes.length && (h = l.uuid, p = c.uuid, b = u1[h], void 0 === b && (b = {}, u1[h] = b), h = b[p], void 0 === h && (h = l.clone(), b[p] = h), l = h);
            l.visible = c.visible;
            l.wireframe = c.wireframe;
            l.side = 3 === g ? null != c.shadowSide ? c.shadowSide : c.side : null != c.shadowSide ? c.shadowSide : k2[c.side];
            l.clipShadows = c.clipShadows;
            l.clippingPlanes = c.clippingPlanes;
            l.clipIntersection = c.clipIntersection;
            l.wireframeLinewidth = c.wireframeLinewidth;
            l.linewidth = c.linewidth;
            d.isPointLight && l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(d.matrixWorld), l.nearDistance = e, l.farDistance = f);
            return l;
        }
        function e6(c, g, h, l, m) {
            if (!1 !== c.visible) {
                if (c.layers.test(g.layers) && (c.isMesh || c.isLine || c.isPoints) && (c.castShadow || c.receiveShadow && 3 === m) && (!c.frustumCulled || f6.intersectsObject(c))) {
                    c.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse, c.matrixWorld);
                    var q = b12.update(c), u = c.material;
                    if (Array.isArray(u)) for(var k = q.groups, p = 0, t = k.length; p < t; p++){
                        var r = k[p], v = u[r.materialIndex];
                        v && v.visible && (v = d10(c, v, l, h.near, h.far, m), a.renderBufferDirect(h, null, q, v, c, r));
                    }
                    else u.visible && (v = d10(c, u, l, h.near, h.far, m), a.renderBufferDirect(h, null, q, v, c, null));
                }
                c = c.children;
                q = 0;
                for(u = c.length; q < u; q++)e6(c[q], g, h, l, m);
            }
        }
        var f6 = new Ed, g4 = new w1, h2 = new w1, l2 = new aa1, m1 = Array(4), q1 = Array(4), u1 = {}, k2 = {
            0: 1,
            1: 0,
            2: 2
        }, r1 = new ma1({
            defines: {
                SAMPLE_RATE: .25,
                HALF_SAMPLE_RATE: .125
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new w1
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n  \n	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = decodeHalfRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = pow( squared_mean - mean * mean, 0.5 );\n  gl_FragColor = encodeHalfRGBA( vec2( mean, std_dev ) );\n}"
        }), p1 = r1.clone();
        p1.defines.HORIZONAL_PASS = 1;
        var v1 = new E1;
        v1.addAttribute("position", new O1(new Float32Array([
            -1,
            -1,
            .5,
            3,
            -1,
            .5,
            -1,
            3,
            .5
        ]), 3));
        var n = new ja1(v1, r1);
        for(v1 = 0; 4 !== v1; ++v1){
            var z = 0 !== (v1 & 1), y = 0 !== (v1 & 2), V = new Db({
                depthPacking: 3201,
                morphTargets: z,
                skinning: y
            });
            m1[v1] = V;
            z = new Eb({
                morphTargets: z,
                skinning: y
            });
            q1[v1] = z;
        }
        var P = this;
        this.enabled = !1;
        this.autoUpdate = !0;
        this.needsUpdate = !1;
        this.type = 1;
        this.render = function(d, m, q) {
            if (!1 !== P.enabled && (!1 !== P.autoUpdate || !1 !== P.needsUpdate) && 0 !== d.length) {
                var u = a.getRenderTarget(), k = a.getActiveCubeFace(), t = a.getActiveMipmapLevel(), v = a.state;
                v.setBlending(0);
                v.buffers.color.setClear(1, 1, 1, 1);
                v.buffers.depth.setTest(!0);
                v.setScissorTest(!1);
                for(var x = 0, y = d.length; x < y; x++){
                    var z = d[x], T = z.shadow;
                    if (void 0 === T) console.warn("THREE.WebGLShadowMap:", z, "has no shadow.");
                    else {
                        g4.copy(T.mapSize);
                        var X = T.getFrameExtents();
                        g4.multiply(X);
                        h2.copy(T.mapSize);
                        if (g4.x > c11 || g4.y > c11) console.warn("THREE.WebGLShadowMap:", z, "has shadow exceeding max texture size, reducing"), g4.x > c11 && (h2.x = Math.floor(c11 / X.x), g4.x = h2.x * X.x, T.mapSize.x = h2.x), g4.y > c11 && (h2.y = Math.floor(c11 / X.y), g4.y = h2.y * X.y, T.mapSize.y = h2.y);
                        null !== T.map || T.isPointLightShadow || 3 !== this.type || (X = {
                            minFilter: 1006,
                            magFilter: 1006,
                            format: 1023
                        }, T.map = new la1(g4.x, g4.y, X), T.map.texture.name = z.name + ".shadowMap", T.mapPass = new la1(g4.x, g4.y, X), T.camera.updateProjectionMatrix());
                        null === T.map && (X = {
                            minFilter: 1003,
                            magFilter: 1003,
                            format: 1023
                        }, T.map = new la1(g4.x, g4.y, X), T.map.texture.name = z.name + ".shadowMap", T.camera.updateProjectionMatrix());
                        a.setRenderTarget(T.map);
                        a.clear();
                        X = T.getViewportCount();
                        for(var V = 0; V < X; V++){
                            var C = T.getViewport(V);
                            l2.set(h2.x * C.x, h2.y * C.y, h2.x * C.z, h2.y * C.w);
                            v.viewport(l2);
                            T.updateMatrices(z, q, V);
                            f6 = T.getFrustum();
                            e6(m, q, T.camera, z, this.type);
                        }
                        T.isPointLightShadow || 3 !== this.type || (z = T, T = q, X = b12.update(n), r1.uniforms.shadow_pass.value = z.map.texture, r1.uniforms.resolution.value = z.mapSize, r1.uniforms.radius.value = z.radius, a.setRenderTarget(z.mapPass), a.clear(), a.renderBufferDirect(T, null, X, r1, n, null), p1.uniforms.shadow_pass.value = z.mapPass.texture, p1.uniforms.resolution.value = z.mapSize, p1.uniforms.radius.value = z.radius, a.setRenderTarget(z.map), a.clear(), a.renderBufferDirect(T, null, X, p1, n, null));
                    }
                }
                P.needsUpdate = !1;
                a.setRenderTarget(u, k, t);
            }
        };
    }
    function ik(a15, b13, c12, d11) {
        function e7(b, c, d) {
            var e = new Uint8Array(4), f = a15.createTexture();
            a15.bindTexture(b, f);
            a15.texParameteri(b, 10241, 9728);
            a15.texParameteri(b, 10240, 9728);
            for(b = 0; b < d; b++)a15.texImage2D(c + b, 0, 6408, 1, 1, 0, 6408, 5121, e);
            return f;
        }
        function f7(c, e) {
            z[c] = 1;
            0 === y[c] && (a15.enableVertexAttribArray(c), y[c] = 1);
            V[c] !== e && ((d11.isWebGL2 ? a15 : b13.get("ANGLE_instanced_arrays"))[d11.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](c, e), V[c] = e);
        }
        function g5(b) {
            !0 !== P[b] && (a15.enable(b), P[b] = !0);
        }
        function h3(b) {
            !1 !== P[b] && (a15.disable(b), P[b] = !1);
        }
        function l3(b, d, e, f, l, m, q, u) {
            if (0 === b) A && (h3(3042), A = !1);
            else if (A || (g5(3042), A = !0), 5 !== b) {
                if (b !== B || u !== T) {
                    if (100 !== wa || 100 !== E) a15.blendEquation(32774), E = wa = 100;
                    if (u) switch(b){
                        case 1:
                            a15.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            a15.blendFunc(1, 1);
                            break;
                        case 3:
                            a15.blendFuncSeparate(0, 0, 769, 771);
                            break;
                        case 4:
                            a15.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", b);
                    }
                    else switch(b){
                        case 1:
                            a15.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            a15.blendFunc(770, 1);
                            break;
                        case 3:
                            a15.blendFunc(0, 769);
                            break;
                        case 4:
                            a15.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", b);
                    }
                    H = I = ag = G = null;
                    B = b;
                    T = u;
                }
            } else {
                l = l || d;
                m = m || e;
                q = q || f;
                if (d !== wa || l !== E) a15.blendEquationSeparate(c12.convert(d), c12.convert(l)), wa = d, E = l;
                if (e !== G || f !== ag || m !== I || q !== H) a15.blendFuncSeparate(c12.convert(e), c12.convert(f), c12.convert(m), c12.convert(q)), G = e, ag = f, I = m, H = q;
                B = b;
                T = null;
            }
        }
        function m2(b) {
            X !== b && (b ? a15.frontFace(2304) : a15.frontFace(2305), X = b);
        }
        function q2(b) {
            0 !== b ? (g5(2884), b !== bg && (1 === b ? a15.cullFace(1029) : 2 === b ? a15.cullFace(1028) : a15.cullFace(1032))) : h3(2884);
            bg = b;
        }
        function u2(b, c, d) {
            if (b) {
                if (g5(32823), ha !== c || bc !== d) a15.polygonOffset(c, d), ha = c, bc = d;
            } else h3(32823);
        }
        function k(b) {
            void 0 === b && (b = 33984 + D - 1);
            Pa !== b && (a15.activeTexture(b), Pa = b);
        }
        var r = new function() {
            var b14 = !1, c13 = new aa1, d12 = null, e = new aa1(0, 0, 0, 0);
            return {
                setMask: function(c) {
                    d12 === c || b14 || (a15.colorMask(c, c, c, c), d12 = c);
                },
                setLocked: function(a) {
                    b14 = a;
                },
                setClear: function(b, d, f, g, h) {
                    !0 === h && (b *= g, d *= g, f *= g);
                    c13.set(b, d, f, g);
                    !1 === e.equals(c13) && (a15.clearColor(b, d, f, g), e.copy(c13));
                },
                reset: function() {
                    b14 = !1;
                    d12 = null;
                    e.set(-1, 0, 0, 0);
                }
            };
        }, p = new function() {
            var b15 = !1, c = null, d13 = null, e = null;
            return {
                setTest: function(a) {
                    a ? g5(2929) : h3(2929);
                },
                setMask: function(d) {
                    c === d || b15 || (a15.depthMask(d), c = d);
                },
                setFunc: function(b) {
                    if (d13 !== b) {
                        if (b) switch(b){
                            case 0:
                                a15.depthFunc(512);
                                break;
                            case 1:
                                a15.depthFunc(519);
                                break;
                            case 2:
                                a15.depthFunc(513);
                                break;
                            case 3:
                                a15.depthFunc(515);
                                break;
                            case 4:
                                a15.depthFunc(514);
                                break;
                            case 5:
                                a15.depthFunc(518);
                                break;
                            case 6:
                                a15.depthFunc(516);
                                break;
                            case 7:
                                a15.depthFunc(517);
                                break;
                            default:
                                a15.depthFunc(515);
                        }
                        else a15.depthFunc(515);
                        d13 = b;
                    }
                },
                setLocked: function(a) {
                    b15 = a;
                },
                setClear: function(b) {
                    e !== b && (a15.clearDepth(b), e = b);
                },
                reset: function() {
                    b15 = !1;
                    e = d13 = c = null;
                }
            };
        }, v = new function() {
            var b16 = !1, c14 = null, d14 = null, e = null, f = null, l = null, m = null, q = null, u = null;
            return {
                setTest: function(a) {
                    b16 || (a ? g5(2960) : h3(2960));
                },
                setMask: function(d) {
                    c14 === d || b16 || (a15.stencilMask(d), c14 = d);
                },
                setFunc: function(b, c, g) {
                    if (d14 !== b || e !== c || f !== g) a15.stencilFunc(b, c, g), d14 = b, e = c, f = g;
                },
                setOp: function(b, c, d) {
                    if (l !== b || m !== c || q !== d) a15.stencilOp(b, c, d), l = b, m = c, q = d;
                },
                setLocked: function(a) {
                    b16 = a;
                },
                setClear: function(b) {
                    u !== b && (a15.clearStencil(b), u = b);
                },
                reset: function() {
                    b16 = !1;
                    u = q = m = l = f = e = d14 = c14 = null;
                }
            };
        }, n = a15.getParameter(34921), z = new Uint8Array(n), y = new Uint8Array(n), V = new Uint8Array(n), P = {}, C = null, w = null, A = null, B = null, wa = null, G = null, ag = null, E = null, I = null, H = null, T = !1, X = null, bg = null, ac = null, ha = null, bc = null, D = a15.getParameter(35661), dg = !1;
        n = 0;
        n = a15.getParameter(7938);
        -1 !== n.indexOf("WebGL") ? (n = parseFloat(/^WebGL ([0-9])/.exec(n)[1]), dg = 1 <= n) : -1 !== n.indexOf("OpenGL ES") && (n = parseFloat(/^OpenGL ES ([0-9])/.exec(n)[1]), dg = 2 <= n);
        var Pa = null, eg = {}, F = new aa1, O = new aa1, K = {};
        K[3553] = e7(3553, 3553, 1);
        K[34067] = e7(34067, 34069, 6);
        r.setClear(0, 0, 0, 1);
        p.setClear(1);
        v.setClear(0);
        g5(2929);
        p.setFunc(3);
        m2(!1);
        q2(1);
        g5(2884);
        l3(0);
        return {
            buffers: {
                color: r,
                depth: p,
                stencil: v
            },
            initAttributes: function() {
                for(var a = 0, b = z.length; a < b; a++)z[a] = 0;
            },
            enableAttribute: function(a) {
                f7(a, 0);
            },
            enableAttributeAndDivisor: f7,
            disableUnusedAttributes: function() {
                for(var b = 0, c = y.length; b !== c; ++b)y[b] !== z[b] && (a15.disableVertexAttribArray(b), y[b] = 0);
            },
            enable: g5,
            disable: h3,
            getCompressedTextureFormats: function() {
                if (null === C && (C = [], b13.get("WEBGL_compressed_texture_pvrtc") || b13.get("WEBGL_compressed_texture_s3tc") || b13.get("WEBGL_compressed_texture_etc1") || b13.get("WEBGL_compressed_texture_astc"))) for(var c = a15.getParameter(34467), d = 0; d < c.length; d++)C.push(c[d]);
                return C;
            },
            useProgram: function(b) {
                return w !== b ? (a15.useProgram(b), w = b, !0) : !1;
            },
            setBlending: l3,
            setMaterial: function(a, b) {
                2 === a.side ? h3(2884) : g5(2884);
                var c = 1 === a.side;
                b && (c = !c);
                m2(c);
                1 === a.blending && !1 === a.transparent ? l3(0) : l3(a.blending, a.blendEquation, a.blendSrc, a.blendDst, a.blendEquationAlpha, a.blendSrcAlpha, a.blendDstAlpha, a.premultipliedAlpha);
                p.setFunc(a.depthFunc);
                p.setTest(a.depthTest);
                p.setMask(a.depthWrite);
                r.setMask(a.colorWrite);
                b = a.stencilWrite;
                v.setTest(b);
                b && (v.setMask(a.stencilWriteMask), v.setFunc(a.stencilFunc, a.stencilRef, a.stencilFuncMask), v.setOp(a.stencilFail, a.stencilZFail, a.stencilZPass));
                u2(a.polygonOffset, a.polygonOffsetFactor, a.polygonOffsetUnits);
            },
            setFlipSided: m2,
            setCullFace: q2,
            setLineWidth: function(b) {
                b !== ac && (dg && a15.lineWidth(b), ac = b);
            },
            setPolygonOffset: u2,
            setScissorTest: function(a) {
                a ? g5(3089) : h3(3089);
            },
            activeTexture: k,
            bindTexture: function(b, c) {
                null === Pa && k();
                var d = eg[Pa];
                void 0 === d && (d = {
                    type: void 0,
                    texture: void 0
                }, eg[Pa] = d);
                if (d.type !== b || d.texture !== c) a15.bindTexture(b, c || K[b]), d.type = b, d.texture = c;
            },
            compressedTexImage2D: function() {
                try {
                    a15.compressedTexImage2D.apply(a15, arguments);
                } catch (Z) {
                    console.error("THREE.WebGLState:", Z);
                }
            },
            texImage2D: function() {
                try {
                    a15.texImage2D.apply(a15, arguments);
                } catch (Z) {
                    console.error("THREE.WebGLState:", Z);
                }
            },
            texImage3D: function() {
                try {
                    a15.texImage3D.apply(a15, arguments);
                } catch (Z) {
                    console.error("THREE.WebGLState:", Z);
                }
            },
            scissor: function(b) {
                !1 === F.equals(b) && (a15.scissor(b.x, b.y, b.z, b.w), F.copy(b));
            },
            viewport: function(b) {
                !1 === O.equals(b) && (a15.viewport(b.x, b.y, b.z, b.w), O.copy(b));
            },
            reset: function() {
                for(var b = 0; b < y.length; b++)1 === y[b] && (a15.disableVertexAttribArray(b), y[b] = 0);
                P = {};
                Pa = C = null;
                eg = {};
                bg = X = B = w = null;
                r.reset();
                p.reset();
                v.reset();
            }
        };
    }
    function jk(a16, b17, c15, d15, e8, f8, g6) {
        function h4(a, b) {
            return E ? new OffscreenCanvas(a, b) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        }
        function l4(a, b, c, d) {
            var e = 1;
            if (a.width > d || a.height > d) e = d / Math.max(a.width, a.height);
            if (1 > e || !0 === b) {
                if ("undefined" !== typeof HTMLImageElement && a instanceof HTMLImageElement || "undefined" !== typeof HTMLCanvasElement && a instanceof HTMLCanvasElement || "undefined" !== typeof ImageBitmap && a instanceof ImageBitmap) return d = b ? L1.floorPowerOfTwo : Math.floor, b = d(e * a.width), e = d(e * a.height), void 0 === G1 && (G1 = h4(b, e)), c = c ? h4(b, e) : G1, c.width = b, c.height = e, c.getContext("2d").drawImage(a, 0, 0, b, e), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + a.width + "x" + a.height + ") to (" + b + "x" + e + ")."), c;
                "data" in a && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + a.width + "x" + a.height + ").");
            }
            return a;
        }
        function m3(a) {
            return L1.isPowerOfTwo(a.width) && L1.isPowerOfTwo(a.height);
        }
        function q3(a, b) {
            return a.generateMipmaps && b && 1003 !== a.minFilter && 1006 !== a.minFilter;
        }
        function u(b, c, e, f) {
            a16.generateMipmap(b);
            d15.get(c).__maxMipLevel = Math.log(Math.max(e, f)) * Math.LOG2E;
        }
        function k(a, c) {
            if (!e8.isWebGL2) return a;
            var d = a;
            6403 === a && (5126 === c && (d = 33326), 5131 === c && (d = 33325), 5121 === c && (d = 33321));
            6407 === a && (5126 === c && (d = 34837), 5131 === c && (d = 34843), 5121 === c && (d = 32849));
            6408 === a && (5126 === c && (d = 34836), 5131 === c && (d = 34842), 5121 === c && (d = 32856));
            33325 === d || 33326 === d || 34842 === d || 34836 === d ? b17.get("EXT_color_buffer_float") : (34843 === d || 34837 === d) && console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.");
            return d;
        }
        function r2(a) {
            return 1003 === a || 1004 === a || 1005 === a ? 9728 : 9729;
        }
        function p2(b) {
            b = b.target;
            b.removeEventListener("dispose", p2);
            var c = d15.get(b);
            void 0 !== c.__webglInit && (a16.deleteTexture(c.__webglTexture), d15.remove(b));
            b.isVideoTexture && wa1.delete(b);
            g6.memory.textures--;
        }
        function v2(b) {
            b = b.target;
            b.removeEventListener("dispose", v2);
            var c = d15.get(b), e = d15.get(b.texture);
            if (b) {
                void 0 !== e.__webglTexture && a16.deleteTexture(e.__webglTexture);
                b.depthTexture && b.depthTexture.dispose();
                if (b.isWebGLRenderTargetCube) for(e = 0; 6 > e; e++)a16.deleteFramebuffer(c.__webglFramebuffer[e]), c.__webglDepthbuffer && a16.deleteRenderbuffer(c.__webglDepthbuffer[e]);
                else a16.deleteFramebuffer(c.__webglFramebuffer), c.__webglDepthbuffer && a16.deleteRenderbuffer(c.__webglDepthbuffer);
                if (b.isWebGLMultiviewRenderTarget) {
                    a16.deleteTexture(c.__webglColorTexture);
                    a16.deleteTexture(c.__webglDepthStencilTexture);
                    g6.memory.textures -= 2;
                    e = 0;
                    for(var f = c.__webglViewFramebuffers.length; e < f; e++)a16.deleteFramebuffer(c.__webglViewFramebuffers[e]);
                }
                d15.remove(b.texture);
                d15.remove(b);
            }
            g6.memory.textures--;
        }
        function n2(a, b) {
            var e = d15.get(a);
            if (a.isVideoTexture) {
                var f = g6.render.frame;
                wa1.get(a) !== f && (wa1.set(a, f), a.update());
            }
            if (0 < a.version && e.__version !== a.version) {
                if (f = a.image, void 0 === f) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else if (!1 === f.complete) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                else {
                    C1(e, a, b);
                    return;
                }
            }
            c15.activeTexture(33984 + b);
            c15.bindTexture(3553, e.__webglTexture);
        }
        function z1(b, g) {
            if (6 === b.image.length) {
                var h = d15.get(b);
                if (0 < b.version && h.__version !== b.version) {
                    P1(h, b);
                    c15.activeTexture(33984 + g);
                    c15.bindTexture(34067, h.__webglTexture);
                    a16.pixelStorei(37440, b.flipY);
                    var p = b && b.isCompressedTexture;
                    g = b.image[0] && b.image[0].isDataTexture;
                    for(var t = [], r = 0; 6 > r; r++)t[r] = p || g ? g ? b.image[r].image : b.image[r] : l4(b.image[r], !1, !0, e8.maxCubemapSize);
                    var v = t[0], n = m3(v) || e8.isWebGL2, x = f8.convert(b.format), y = f8.convert(b.type), z = k(x, y);
                    V(34067, b, n);
                    if (p) {
                        for(r = 0; 6 > r; r++){
                            var T = t[r].mipmaps;
                            for(p = 0; p < T.length; p++){
                                var X = T[p];
                                1023 !== b.format && 1022 !== b.format ? -1 < c15.getCompressedTextureFormats().indexOf(x) ? c15.compressedTexImage2D(34069 + r, p, z, X.width, X.height, 0, X.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : c15.texImage2D(34069 + r, p, z, X.width, X.height, 0, x, y, X.data);
                            }
                        }
                        h.__maxMipLevel = T.length - 1;
                    } else {
                        T = b.mipmaps;
                        for(r = 0; 6 > r; r++)if (g) for(c15.texImage2D(34069 + r, 0, z, t[r].width, t[r].height, 0, x, y, t[r].data), p = 0; p < T.length; p++)X = T[p], X = X.image[r].image, c15.texImage2D(34069 + r, p + 1, z, X.width, X.height, 0, x, y, X.data);
                        else for(c15.texImage2D(34069 + r, 0, z, x, y, t[r]), p = 0; p < T.length; p++)X = T[p], c15.texImage2D(34069 + r, p + 1, z, x, y, X.image[r]);
                        h.__maxMipLevel = T.length;
                    }
                    q3(b, n) && u(34067, b, v.width, v.height);
                    h.__version = b.version;
                    if (b.onUpdate) b.onUpdate(b);
                } else c15.activeTexture(33984 + g), c15.bindTexture(34067, h.__webglTexture);
            }
        }
        function y1(a, b) {
            c15.activeTexture(33984 + b);
            c15.bindTexture(34067, d15.get(a).__webglTexture);
        }
        function V(c, g, h) {
            h ? (a16.texParameteri(c, 10242, f8.convert(g.wrapS)), a16.texParameteri(c, 10243, f8.convert(g.wrapT)), 32879 !== c && 35866 !== c || a16.texParameteri(c, 32882, f8.convert(g.wrapR)), a16.texParameteri(c, 10240, f8.convert(g.magFilter)), a16.texParameteri(c, 10241, f8.convert(g.minFilter))) : (a16.texParameteri(c, 10242, 33071), a16.texParameteri(c, 10243, 33071), 32879 !== c && 35866 !== c || a16.texParameteri(c, 32882, 33071), 1001 === g.wrapS && 1001 === g.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), a16.texParameteri(c, 10240, r2(g.magFilter)), a16.texParameteri(c, 10241, r2(g.minFilter)), 1003 !== g.minFilter && 1006 !== g.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
            !(h = b17.get("EXT_texture_filter_anisotropic")) || 1015 === g.type && null === b17.get("OES_texture_float_linear") || 1016 === g.type && null === (e8.isWebGL2 || b17.get("OES_texture_half_float_linear")) || !(1 < g.anisotropy || d15.get(g).__currentAnisotropy) || (a16.texParameterf(c, h.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, e8.getMaxAnisotropy())), d15.get(g).__currentAnisotropy = g.anisotropy);
        }
        function P1(b, c) {
            void 0 === b.__webglInit && (b.__webglInit = !0, c.addEventListener("dispose", p2), b.__webglTexture = a16.createTexture(), g6.memory.textures++);
        }
        function C1(b, d, g) {
            var h = 3553;
            d.isDataTexture2DArray && (h = 35866);
            d.isDataTexture3D && (h = 32879);
            P1(b, d);
            c15.activeTexture(33984 + g);
            c15.bindTexture(h, b.__webglTexture);
            a16.pixelStorei(37440, d.flipY);
            a16.pixelStorei(37441, d.premultiplyAlpha);
            a16.pixelStorei(3317, d.unpackAlignment);
            g = e8.isWebGL2 ? !1 : 1001 !== d.wrapS || 1001 !== d.wrapT || 1003 !== d.minFilter && 1006 !== d.minFilter;
            g = g && !1 === m3(d.image);
            g = l4(d.image, g, !1, e8.maxTextureSize);
            var p = m3(g) || e8.isWebGL2, t = f8.convert(d.format), r = f8.convert(d.type), v = k(t, r);
            V(h, d, p);
            var n = d.mipmaps;
            if (d.isDepthTexture) {
                v = 6402;
                if (1015 === d.type) {
                    if (!e8.isWebGL2) throw Error("Float Depth Texture only supported in WebGL2.0");
                    v = 36012;
                } else e8.isWebGL2 && (v = 33189);
                1026 === d.format && 6402 === v && 1012 !== d.type && 1014 !== d.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), d.type = 1012, r = f8.convert(d.type));
                1027 === d.format && (v = 34041, 1020 !== d.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), d.type = 1020, r = f8.convert(d.type)));
                c15.texImage2D(3553, 0, v, g.width, g.height, 0, t, r, null);
            } else if (d.isDataTexture) {
                if (0 < n.length && p) {
                    for(var x = 0, y = n.length; x < y; x++)h = n[x], c15.texImage2D(3553, x, v, h.width, h.height, 0, t, r, h.data);
                    d.generateMipmaps = !1;
                    b.__maxMipLevel = n.length - 1;
                } else c15.texImage2D(3553, 0, v, g.width, g.height, 0, t, r, g.data), b.__maxMipLevel = 0;
            } else if (d.isCompressedTexture) {
                x = 0;
                for(y = n.length; x < y; x++)h = n[x], 1023 !== d.format && 1022 !== d.format ? -1 < c15.getCompressedTextureFormats().indexOf(t) ? c15.compressedTexImage2D(3553, x, v, h.width, h.height, 0, h.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : c15.texImage2D(3553, x, v, h.width, h.height, 0, t, r, h.data);
                b.__maxMipLevel = n.length - 1;
            } else if (d.isDataTexture2DArray) c15.texImage3D(35866, 0, v, g.width, g.height, g.depth, 0, t, r, g.data), b.__maxMipLevel = 0;
            else if (d.isDataTexture3D) c15.texImage3D(32879, 0, v, g.width, g.height, g.depth, 0, t, r, g.data), b.__maxMipLevel = 0;
            else if (0 < n.length && p) {
                x = 0;
                for(y = n.length; x < y; x++)h = n[x], c15.texImage2D(3553, x, v, t, r, h);
                d.generateMipmaps = !1;
                b.__maxMipLevel = n.length - 1;
            } else c15.texImage2D(3553, 0, v, t, r, g), b.__maxMipLevel = 0;
            q3(d, p) && u(3553, d, g.width, g.height);
            b.__version = d.version;
            if (d.onUpdate) d.onUpdate(d);
        }
        function w(b, e, g, h) {
            var l = f8.convert(e.texture.format), m = f8.convert(e.texture.type), q = k(l, m);
            c15.texImage2D(h, 0, q, e.width, e.height, 0, l, m, null);
            a16.bindFramebuffer(36160, b);
            a16.framebufferTexture2D(36160, g, h, d15.get(e.texture).__webglTexture, 0);
            a16.bindFramebuffer(36160, null);
        }
        function A(b, c, d) {
            a16.bindRenderbuffer(36161, b);
            if (c.depthBuffer && !c.stencilBuffer) d ? (d = B(c), a16.renderbufferStorageMultisample(36161, d, 33189, c.width, c.height)) : a16.renderbufferStorage(36161, 33189, c.width, c.height), a16.framebufferRenderbuffer(36160, 36096, 36161, b);
            else if (c.depthBuffer && c.stencilBuffer) d ? (d = B(c), a16.renderbufferStorageMultisample(36161, d, 35056, c.width, c.height)) : a16.renderbufferStorage(36161, 34041, c.width, c.height), a16.framebufferRenderbuffer(36160, 33306, 36161, b);
            else {
                b = f8.convert(c.texture.format);
                var e = f8.convert(c.texture.type);
                b = k(b, e);
                d ? (d = B(c), a16.renderbufferStorageMultisample(36161, d, b, c.width, c.height)) : a16.renderbufferStorage(36161, b, c.width, c.height);
            }
            a16.bindRenderbuffer(36161, null);
        }
        function B(a) {
            return e8.isWebGL2 && a.isWebGLMultisampleRenderTarget ? Math.min(e8.maxSamples, a.samples) : 0;
        }
        var wa1 = new WeakMap, G1, E = "undefined" !== typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d"), I = 0, H = !1, D = !1;
        this.allocateTextureUnit = function() {
            var a = I;
            a >= e8.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + a + " texture units while this GPU supports only " + e8.maxTextures);
            I += 1;
            return a;
        };
        this.resetTextureUnits = function() {
            I = 0;
        };
        this.setTexture2D = n2;
        this.setTexture2DArray = function(a, b) {
            var e = d15.get(a);
            0 < a.version && e.__version !== a.version ? C1(e, a, b) : (c15.activeTexture(33984 + b), c15.bindTexture(35866, e.__webglTexture));
        };
        this.setTexture3D = function(a, b) {
            var e = d15.get(a);
            0 < a.version && e.__version !== a.version ? C1(e, a, b) : (c15.activeTexture(33984 + b), c15.bindTexture(32879, e.__webglTexture));
        };
        this.setTextureCube = z1;
        this.setTextureCubeDynamic = y1;
        this.setupRenderTarget = function(h) {
            var l = d15.get(h), p = d15.get(h.texture);
            h.addEventListener("dispose", v2);
            p.__webglTexture = a16.createTexture();
            g6.memory.textures++;
            var t = !0 === h.isWebGLRenderTargetCube, r = !0 === h.isWebGLMultisampleRenderTarget, x = !0 === h.isWebGLMultiviewRenderTarget, y = m3(h) || e8.isWebGL2;
            if (t) {
                l.__webglFramebuffer = [];
                for(var z = 0; 6 > z; z++)l.__webglFramebuffer[z] = a16.createFramebuffer();
            } else if (l.__webglFramebuffer = a16.createFramebuffer(), r) {
                if (e8.isWebGL2) {
                    l.__webglMultisampledFramebuffer = a16.createFramebuffer();
                    l.__webglColorRenderbuffer = a16.createRenderbuffer();
                    a16.bindRenderbuffer(36161, l.__webglColorRenderbuffer);
                    r = f8.convert(h.texture.format);
                    var C = f8.convert(h.texture.type);
                    r = k(r, C);
                    C = B(h);
                    a16.renderbufferStorageMultisample(36161, C, r, h.width, h.height);
                    a16.bindFramebuffer(36160, l.__webglMultisampledFramebuffer);
                    a16.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer);
                    a16.bindRenderbuffer(36161, null);
                    h.depthBuffer && (l.__webglDepthRenderbuffer = a16.createRenderbuffer(), A(l.__webglDepthRenderbuffer, h, !0));
                    a16.bindFramebuffer(36160, null);
                } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            } else if (x) {
                z = h.width;
                var P = h.height;
                r = h.numViews;
                a16.bindFramebuffer(36160, l.__webglFramebuffer);
                var G = b17.get("OVR_multiview2");
                g6.memory.textures += 2;
                C = a16.createTexture();
                a16.bindTexture(35866, C);
                a16.texParameteri(35866, 10240, 9728);
                a16.texParameteri(35866, 10241, 9728);
                a16.texImage3D(35866, 0, 32856, z, P, r, 0, 6408, 5121, null);
                G.framebufferTextureMultiviewOVR(36160, 36064, C, 0, 0, r);
                var wa = a16.createTexture();
                a16.bindTexture(35866, wa);
                a16.texParameteri(35866, 10240, 9728);
                a16.texParameteri(35866, 10241, 9728);
                a16.texImage3D(35866, 0, 35056, z, P, r, 0, 34041, 34042, null);
                G.framebufferTextureMultiviewOVR(36160, 33306, wa, 0, 0, r);
                P = Array(r);
                for(z = 0; z < r; ++z)P[z] = a16.createFramebuffer(), a16.bindFramebuffer(36160, P[z]), a16.framebufferTextureLayer(36160, 36064, C, 0, z);
                l.__webglColorTexture = C;
                l.__webglDepthStencilTexture = wa;
                l.__webglViewFramebuffers = P;
                a16.bindFramebuffer(36160, null);
                a16.bindTexture(35866, null);
            }
            if (t) {
                c15.bindTexture(34067, p.__webglTexture);
                V(34067, h.texture, y);
                for(z = 0; 6 > z; z++)w(l.__webglFramebuffer[z], h, 36064, 34069 + z);
                q3(h.texture, y) && u(34067, h.texture, h.width, h.height);
                c15.bindTexture(34067, null);
            } else x || (c15.bindTexture(3553, p.__webglTexture), V(3553, h.texture, y), w(l.__webglFramebuffer, h, 36064, 3553), q3(h.texture, y) && u(3553, h.texture, h.width, h.height), c15.bindTexture(3553, null));
            if (h.depthBuffer) {
                l = d15.get(h);
                p = !0 === h.isWebGLRenderTargetCube;
                if (h.depthTexture) {
                    if (p) throw Error("target.depthTexture not supported in Cube render targets");
                    if (h && h.isWebGLRenderTargetCube) throw Error("Depth Texture with cube render targets is not supported");
                    a16.bindFramebuffer(36160, l.__webglFramebuffer);
                    if (!h.depthTexture || !h.depthTexture.isDepthTexture) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    d15.get(h.depthTexture).__webglTexture && h.depthTexture.image.width === h.width && h.depthTexture.image.height === h.height || (h.depthTexture.image.width = h.width, h.depthTexture.image.height = h.height, h.depthTexture.needsUpdate = !0);
                    n2(h.depthTexture, 0);
                    l = d15.get(h.depthTexture).__webglTexture;
                    if (1026 === h.depthTexture.format) a16.framebufferTexture2D(36160, 36096, 3553, l, 0);
                    else if (1027 === h.depthTexture.format) a16.framebufferTexture2D(36160, 33306, 3553, l, 0);
                    else throw Error("Unknown depthTexture format");
                } else if (p) for(l.__webglDepthbuffer = [], p = 0; 6 > p; p++)a16.bindFramebuffer(36160, l.__webglFramebuffer[p]), l.__webglDepthbuffer[p] = a16.createRenderbuffer(), A(l.__webglDepthbuffer[p], h);
                else a16.bindFramebuffer(36160, l.__webglFramebuffer), l.__webglDepthbuffer = a16.createRenderbuffer(), A(l.__webglDepthbuffer, h);
                a16.bindFramebuffer(36160, null);
            }
        };
        this.updateRenderTargetMipmap = function(a) {
            var b = a.texture, f = m3(a) || e8.isWebGL2;
            if (q3(b, f)) {
                f = a.isWebGLRenderTargetCube ? 34067 : 3553;
                var g = d15.get(b).__webglTexture;
                c15.bindTexture(f, g);
                u(f, b, a.width, a.height);
                c15.bindTexture(f, null);
            }
        };
        this.updateMultisampleRenderTarget = function(b) {
            if (b.isWebGLMultisampleRenderTarget) {
                if (e8.isWebGL2) {
                    var c = d15.get(b);
                    a16.bindFramebuffer(36008, c.__webglMultisampledFramebuffer);
                    a16.bindFramebuffer(36009, c.__webglFramebuffer);
                    c = b.width;
                    var f = b.height, g = 16384;
                    b.depthBuffer && (g |= 256);
                    b.stencilBuffer && (g |= 1024);
                    a16.blitFramebuffer(0, 0, c, f, 0, 0, c, f, g, 9728);
                } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            }
        };
        this.safeSetTexture2D = function(a, b) {
            a && a.isWebGLRenderTarget && (!1 === H && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), H = !0), a = a.texture);
            n2(a, b);
        };
        this.safeSetTextureCube = function(a, b) {
            a && a.isWebGLRenderTargetCube && (!1 === D && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), D = !0), a = a.texture);
            a && a.isCubeTexture || Array.isArray(a.image) && 6 === a.image.length ? z1(a, b) : y1(a, b);
        };
    }
    function Kh(a17, b, c) {
        return {
            convert: function(a) {
                if (1E3 === a) return 10497;
                if (1001 === a) return 33071;
                if (1002 === a) return 33648;
                if (1003 === a) return 9728;
                if (1004 === a) return 9984;
                if (1005 === a) return 9986;
                if (1006 === a) return 9729;
                if (1007 === a) return 9985;
                if (1008 === a) return 9987;
                if (1009 === a) return 5121;
                if (1017 === a) return 32819;
                if (1018 === a) return 32820;
                if (1019 === a) return 33635;
                if (1010 === a) return 5120;
                if (1011 === a) return 5122;
                if (1012 === a) return 5123;
                if (1013 === a) return 5124;
                if (1014 === a) return 5125;
                if (1015 === a) return 5126;
                if (1016 === a) {
                    if (c.isWebGL2) return 5131;
                    var d = b.get("OES_texture_half_float");
                    if (null !== d) return d.HALF_FLOAT_OES;
                }
                if (1021 === a) return 6406;
                if (1022 === a) return 6407;
                if (1023 === a) return 6408;
                if (1024 === a) return 6409;
                if (1025 === a) return 6410;
                if (1026 === a) return 6402;
                if (1027 === a) return 34041;
                if (1028 === a) return 6403;
                if (100 === a) return 32774;
                if (101 === a) return 32778;
                if (102 === a) return 32779;
                if (200 === a) return 0;
                if (201 === a) return 1;
                if (202 === a) return 768;
                if (203 === a) return 769;
                if (204 === a) return 770;
                if (205 === a) return 771;
                if (206 === a) return 772;
                if (207 === a) return 773;
                if (208 === a) return 774;
                if (209 === a) return 775;
                if (210 === a) return 776;
                if (33776 === a || 33777 === a || 33778 === a || 33779 === a) {
                    if (d = b.get("WEBGL_compressed_texture_s3tc"), null !== d) {
                        if (33776 === a) return d.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (33777 === a) return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (33778 === a) return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (33779 === a) return d.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                    }
                }
                if (35840 === a || 35841 === a || 35842 === a || 35843 === a) {
                    if (d = b.get("WEBGL_compressed_texture_pvrtc"), null !== d) {
                        if (35840 === a) return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        if (35841 === a) return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        if (35842 === a) return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        if (35843 === a) return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                    }
                }
                if (36196 === a && (d = b.get("WEBGL_compressed_texture_etc1"), null !== d)) return d.COMPRESSED_RGB_ETC1_WEBGL;
                if (37808 === a || 37809 === a || 37810 === a || 37811 === a || 37812 === a || 37813 === a || 37814 === a || 37815 === a || 37816 === a || 37817 === a || 37818 === a || 37819 === a || 37820 === a || 37821 === a) {
                    if (d = b.get("WEBGL_compressed_texture_astc"), null !== d) return a;
                }
                if (103 === a || 104 === a) {
                    if (c.isWebGL2) {
                        if (103 === a) return 32775;
                        if (104 === a) return 32776;
                    }
                    d = b.get("EXT_blend_minmax");
                    if (null !== d) {
                        if (103 === a) return d.MIN_EXT;
                        if (104 === a) return d.MAX_EXT;
                    }
                }
                if (1020 === a) {
                    if (c.isWebGL2) return 34042;
                    d = b.get("WEBGL_depth_texture");
                    if (null !== d) return d.UNSIGNED_INT_24_8_WEBGL;
                }
                return 0;
            }
        };
    }
    function fg(a, b, c, d) {
        la1.call(this, a, b, d);
        this.stencilBuffer = this.depthBuffer = !1;
        this.numViews = c;
    }
    function kk(a18, b18) {
        function c16(a) {
            if (a.isArrayCamera) return a.cameras;
            q4[0] = a;
            return q4;
        }
        function d16(a) {
            if (void 0 === a.isArrayCamera) return !0;
            a = a.cameras;
            if (a.length > r3) return !1;
            for(var b = 1, c = a.length; b < c; b++)if (a[0].viewport.z !== a[b].viewport.z || a[0].viewport.w !== a[b].viewport.w) return !1;
            return !0;
        }
        var e9 = a18.extensions, f9 = a18.properties, g, h, l5, m4, q4, u, k3, r3 = 0;
        this.isAvailable = function() {
            if (void 0 === k3) {
                var a = e9.get("OVR_multiview2");
                if (k3 = null !== a && !1 === b18.getContextAttributes().antialias) for(r3 = b18.getParameter(a.MAX_VIEWS_OVR), g = new fg(0, 0, 2), u = new w1, m4 = [], l5 = [], q4 = [], a = 0; a < r3; a++)m4[a] = new U1, l5[a] = new Y1;
            }
            return k3;
        };
        this.attachCamera = function(b) {
            if (!1 !== d16(b)) {
                (h = a18.getRenderTarget()) ? u.set(h.width, h.height) : a18.getDrawingBufferSize(u);
                if (b.isArrayCamera) {
                    var c = b.cameras[0].viewport;
                    g.setSize(c.z, c.w);
                    g.setNumViews(b.cameras.length);
                } else g.setSize(u.x, u.y), g.setNumViews(2);
                a18.setRenderTarget(g);
            }
        };
        this.detachCamera = function(c) {
            if (g === a18.getRenderTarget()) {
                a18.setRenderTarget(h);
                var d = g, e = d.numViews, l = f9.get(d).__webglViewFramebuffers, m = d.width;
                d = d.height;
                if (c.isArrayCamera) for(var q = 0; q < e; q++){
                    var k = c.cameras[q].viewport, p = k.x, r = k.y, t = p + k.z;
                    k = r + k.w;
                    b18.bindFramebuffer(36008, l[q]);
                    b18.blitFramebuffer(0, 0, m, d, p, r, t, k, 16384, 9728);
                }
                else b18.bindFramebuffer(36008, l[0]), b18.blitFramebuffer(0, 0, m, d, 0, 0, u.x, u.y, 16384, 9728);
            }
        };
        this.updateCameraProjectionMatricesUniform = function(a, d) {
            a = c16(a);
            for(var e = 0; e < a.length; e++)m4[e].copy(a[e].projectionMatrix);
            d.setValue(b18, "projectionMatrices", m4);
        };
        this.updateCameraViewMatricesUniform = function(a, d) {
            a = c16(a);
            for(var e = 0; e < a.length; e++)m4[e].copy(a[e].matrixWorldInverse);
            d.setValue(b18, "viewMatrices", m4);
        };
        this.updateObjectMatricesUniforms = function(a, d, e) {
            d = c16(d);
            for(var f = 0; f < d.length; f++)m4[f].multiplyMatrices(d[f].matrixWorldInverse, a.matrixWorld), l5[f].getNormalMatrix(m4[f]);
            e.setValue(b18, "modelViewMatrices", m4);
            e.setValue(b18, "normalMatrices", l5);
        };
    }
    function Hc() {
        B1.call(this);
        this.type = "Group";
    }
    function Jd(a) {
        na1.call(this);
        this.cameras = a || [];
    }
    function Lh(a, b, c) {
        Mh.setFromMatrixPosition(b.matrixWorld);
        Nh.setFromMatrixPosition(c.matrixWorld);
        var d = Mh.distanceTo(Nh), e = b.projectionMatrix.elements, f = c.projectionMatrix.elements, g = e[14] / (e[10] - 1);
        c = e[14] / (e[10] + 1);
        var h = (e[9] + 1) / e[5], l = (e[9] - 1) / e[5], m = (e[8] - 1) / e[0], q = (f[8] + 1) / f[0];
        e = g * m;
        f = g * q;
        q = d / (-m + q);
        m = q * -m;
        b.matrixWorld.decompose(a.position, a.quaternion, a.scale);
        a.translateX(m);
        a.translateZ(q);
        a.matrixWorld.compose(a.position, a.quaternion, a.scale);
        a.matrixWorldInverse.getInverse(a.matrixWorld);
        b = g + q;
        g = c + q;
        a.projectionMatrix.makePerspective(e - m, f + (d - m), h * c / g * b, l * c / g * b, b, g);
    }
    function gg(a19) {
        function b19() {
            return null !== h && !0 === h.isPresenting;
        }
        function c17() {
            if (b19()) {
                var c = h.getEyeParameters("left");
                e10 = 2 * c.renderWidth * r4;
                f10 = c.renderHeight * r4;
                Cb = a19.getPixelRatio();
                a19.getSize(C);
                a19.setDrawingBufferSize(e10, f10, 1);
                y.viewport.set(0, 0, e10 / 2, f10);
                V.viewport.set(e10 / 2, 0, e10 / 2, f10);
                B.start();
                g7.dispatchEvent({
                    type: "sessionstart"
                });
            } else g7.enabled && a19.setDrawingBufferSize(C.width, C.height, Cb), B.stop(), g7.dispatchEvent({
                type: "sessionend"
            });
        }
        function d(a, b) {
            null !== b && 4 === b.length && a.set(b[0] * e10, b[1] * f10, b[2] * e10, b[3] * f10);
        }
        var e10, f10, g7 = this, h = null, l = null, m = null, q = [], u = new U1, k = new U1, r4 = 1, p = "local-floor";
        "undefined" !== typeof window && "VRFrameData" in window && (l = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", c17, !1));
        var v = new U1, x = new ua1, z = new n1, y = new na1;
        y.viewport = new aa1;
        y.layers.enable(1);
        var V = new na1;
        V.viewport = new aa1;
        V.layers.enable(2);
        var P = new Jd([
            y,
            V
        ]);
        P.layers.enable(1);
        P.layers.enable(2);
        var C = new w1, Cb, A = [];
        this.enabled = !1;
        this.getController = function(a) {
            var b = q[a];
            void 0 === b && (b = new Hc, b.matrixAutoUpdate = !1, b.visible = !1, q[a] = b);
            return b;
        };
        this.getDevice = function() {
            return h;
        };
        this.setDevice = function(a) {
            void 0 !== a && (h = a);
            B.setContext(a);
        };
        this.setFramebufferScaleFactor = function(a) {
            r4 = a;
        };
        this.setReferenceSpaceType = function(a) {
            p = a;
        };
        this.setPoseTarget = function(a) {
            void 0 !== a && (m = a);
        };
        this.getCamera = function(a) {
            var c = "local-floor" === p ? 1.6 : 0;
            if (!1 === b19()) return a.position.set(0, c, 0), a.rotation.set(0, 0, 0), a;
            h.depthNear = a.near;
            h.depthFar = a.far;
            h.getFrameData(l);
            if ("local-floor" === p) {
                var e = h.stageParameters;
                e ? u.fromArray(e.sittingToStandingTransform) : u.makeTranslation(0, c, 0);
            }
            c = l.pose;
            e = null !== m ? m : a;
            e.matrix.copy(u);
            e.matrix.decompose(e.position, e.quaternion, e.scale);
            null !== c.orientation && (x.fromArray(c.orientation), e.quaternion.multiply(x));
            null !== c.position && (x.setFromRotationMatrix(u), z.fromArray(c.position), z.applyQuaternion(x), e.position.add(z));
            e.updateMatrixWorld();
            y.near = a.near;
            V.near = a.near;
            y.far = a.far;
            V.far = a.far;
            y.matrixWorldInverse.fromArray(l.leftViewMatrix);
            V.matrixWorldInverse.fromArray(l.rightViewMatrix);
            k.getInverse(u);
            "local-floor" === p && (y.matrixWorldInverse.multiply(k), V.matrixWorldInverse.multiply(k));
            a = e.parent;
            null !== a && (v.getInverse(a.matrixWorld), y.matrixWorldInverse.multiply(v), V.matrixWorldInverse.multiply(v));
            y.matrixWorld.getInverse(y.matrixWorldInverse);
            V.matrixWorld.getInverse(V.matrixWorldInverse);
            y.projectionMatrix.fromArray(l.leftProjectionMatrix);
            V.projectionMatrix.fromArray(l.rightProjectionMatrix);
            Lh(P, y, V);
            a = h.getLayers();
            a.length && (a = a[0], d(y.viewport, a.leftBounds), d(V.viewport, a.rightBounds));
            a: for(a = 0; a < q.length; a++){
                c = q[a];
                b: {
                    e = a;
                    for(var f = navigator.getGamepads && navigator.getGamepads(), g = 0, r = 0, t = f.length; g < t; g++){
                        var n = f[g];
                        if (n && ("Daydream Controller" === n.id || "Gear VR Controller" === n.id || "Oculus Go Controller" === n.id || "OpenVR Gamepad" === n.id || n.id.startsWith("Oculus Touch") || n.id.startsWith("HTC Vive Focus") || n.id.startsWith("Spatial Controller"))) {
                            if (r === e) {
                                e = n;
                                break b;
                            }
                            r++;
                        }
                    }
                    e = void 0;
                }
                if (void 0 !== e && void 0 !== e.pose) {
                    if (null === e.pose) break a;
                    f = e.pose;
                    !1 === f.hasPosition && c.position.set(.2, -0.6, -0.05);
                    null !== f.position && c.position.fromArray(f.position);
                    null !== f.orientation && c.quaternion.fromArray(f.orientation);
                    c.matrix.compose(c.position, c.quaternion, c.scale);
                    c.matrix.premultiply(u);
                    c.matrix.decompose(c.position, c.quaternion, c.scale);
                    c.matrixWorldNeedsUpdate = !0;
                    c.visible = !0;
                    f = "Daydream Controller" === e.id ? 0 : 1;
                    void 0 === A[a] && (A[a] = !1);
                    A[a] !== e.buttons[f].pressed && (A[a] = e.buttons[f].pressed, !0 === A[a] ? c.dispatchEvent({
                        type: "selectstart"
                    }) : (c.dispatchEvent({
                        type: "selectend"
                    }), c.dispatchEvent({
                        type: "select"
                    })));
                } else c.visible = !1;
            }
            return P;
        };
        this.getStandingMatrix = function() {
            return u;
        };
        this.isPresenting = b19;
        var B = new Xf;
        this.setAnimationLoop = function(a) {
            B.setAnimationLoop(a);
            b19() && B.start();
        };
        this.submitFrame = function() {
            b19() && h.submitFrame();
        };
        this.dispose = function() {
            "undefined" !== typeof window && window.removeEventListener("vrdisplaypresentchange", c17);
        };
        this.setFrameOfReferenceType = function() {
            console.warn("THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.");
        };
    }
    function Oh(a20, b20) {
        function c18() {
            return null !== l && null !== m;
        }
        function d17(a) {
            for(var b = 0; b < k.length; b++)r[b] === a.inputSource && k[b].dispatchEvent({
                type: a.type
            });
        }
        function e11() {
            a20.setFramebuffer(null);
            a20.setRenderTarget(a20.getRenderTarget());
            y.stop();
            h5.dispatchEvent({
                type: "sessionend"
            });
        }
        function f11(a) {
            m = a;
            y.setContext(l);
            y.start();
            h5.dispatchEvent({
                type: "sessionstart"
            });
        }
        function g8(a, b) {
            null === b ? a.matrixWorld.copy(a.matrix) : a.matrixWorld.multiplyMatrices(b.matrixWorld, a.matrix);
            a.matrixWorldInverse.getInverse(a.matrixWorld);
        }
        var h5 = this, l = null, m = null, q5 = "local-floor", u = null, k = [], r = [], p = new na1;
        p.layers.enable(1);
        p.viewport = new aa1;
        var n = new na1;
        n.layers.enable(2);
        n.viewport = new aa1;
        var x = new Jd([
            p,
            n
        ]);
        x.layers.enable(1);
        x.layers.enable(2);
        this.enabled = !1;
        this.getController = function(a) {
            var b = k[a];
            void 0 === b && (b = new Hc, b.matrixAutoUpdate = !1, b.visible = !1, k[a] = b);
            return b;
        };
        this.setFramebufferScaleFactor = function() {};
        this.setReferenceSpaceType = function(a) {
            q5 = a;
        };
        this.getSession = function() {
            return l;
        };
        this.setSession = function(a21) {
            l = a21;
            null !== l && (l.addEventListener("select", d17), l.addEventListener("selectstart", d17), l.addEventListener("selectend", d17), l.addEventListener("end", e11), l.updateRenderState({
                baseLayer: new XRWebGLLayer(l, b20)
            }), l.requestReferenceSpace(q5).then(f11), r = l.inputSources, l.addEventListener("inputsourceschange", function() {
                r = l.inputSources;
                console.log(r);
                for(var a = 0; a < k.length; a++)k[a].userData.inputSource = r[a];
            }));
        };
        this.getCamera = function(a) {
            if (c18()) {
                var b = a.parent, d = x.cameras;
                g8(x, b);
                for(var e = 0; e < d.length; e++)g8(d[e], b);
                a.matrixWorld.copy(x.matrixWorld);
                a = a.children;
                e = 0;
                for(b = a.length; e < b; e++)a[e].updateMatrixWorld(!0);
                Lh(x, p, n);
                return x;
            }
            return a;
        };
        this.isPresenting = c18;
        var z = null, y = new Xf;
        y.setAnimationLoop(function(b, c) {
            u = c.getViewerPose(m);
            if (null !== u) {
                var d = u.views, e = l.renderState.baseLayer;
                a20.setFramebuffer(e.framebuffer);
                for(var f = 0; f < d.length; f++){
                    var g = d[f], h = e.getViewport(g), q = x.cameras[f];
                    q.matrix.fromArray(g.transform.inverse.matrix).getInverse(q.matrix);
                    q.projectionMatrix.fromArray(g.projectionMatrix);
                    q.viewport.set(h.x, h.y, h.width, h.height);
                    0 === f && x.matrix.copy(q.matrix);
                }
            }
            for(f = 0; f < k.length; f++){
                d = k[f];
                if (e = r[f]) {
                    if (e = c.getPose(e.targetRaySpace, m), null !== e) {
                        d.matrix.fromArray(e.transform.matrix);
                        d.matrix.decompose(d.position, d.rotation, d.scale);
                        d.visible = !0;
                        continue;
                    }
                }
                d.visible = !1;
            }
            z && z(b);
        });
        this.setAnimationLoop = function(a) {
            z = a;
        };
        this.dispose = function() {};
        this.getStandingMatrix = function() {
            console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed.");
            return new U1;
        };
        this.getDevice = function() {
            console.warn("THREE.WebXRManager: getDevice() has been deprecated.");
        };
        this.setDevice = function() {
            console.warn("THREE.WebXRManager: setDevice() has been deprecated.");
        };
        this.setFrameOfReferenceType = function() {
            console.warn("THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.");
        };
        this.submitFrame = function() {};
    }
    function hg(a22) {
        var b21;
        function c19() {
            ra = new aj(J);
            Ea = new Zi(J, ra, a22);
            !1 === Ea.isWebGL2 && (ra.get("WEBGL_depth_texture"), ra.get("OES_texture_float"), ra.get("OES_texture_half_float"), ra.get("OES_texture_half_float_linear"), ra.get("OES_standard_derivatives"), ra.get("OES_element_index_uint"), ra.get("ANGLE_instanced_arrays"));
            ra.get("OES_texture_float_linear");
            la = new Kh(J, ra, Ea);
            ba = new ik(J, ra, la, Ea);
            ba.scissor(ca.copy(ja).multiplyScalar(fa).floor());
            ba.viewport(W.copy(ia).multiplyScalar(fa).floor());
            ea = new dj(J);
            Y = new Zj;
            R = new jk(J, ra, ba, Y, Ea, la, ea);
            pa = new Wi(J);
            xa = new bj(J, pa, ea);
            sa = new gj(J, xa, pa, ea);
            ya = new fj(J);
            oa = new Yj(F, ra, Ea);
            va = new ck;
            ua = new hk;
            ma = new Xi(F, ba, sa, A);
            Aa = new Yi(J, ra, ea, Ea);
            Ba = new cj(J, ra, ea, Ea);
            ea.programs = oa.programs;
            F.capabilities = Ea;
            F.extensions = ra;
            F.properties = Y;
            F.renderLists = va;
            F.state = ba;
            F.info = ea;
        }
        function d18(a) {
            a.preventDefault();
            console.log("THREE.WebGLRenderer: Context Lost.");
            O = !0;
        }
        function e12() {
            console.log("THREE.WebGLRenderer: Context Restored.");
            O = !1;
            c19();
        }
        function f12(a) {
            a = a.target;
            a.removeEventListener("dispose", f12);
            g9(a);
            Y.remove(a);
        }
        function g9(a) {
            var b = Y.get(a).program;
            a.program = void 0;
            void 0 !== b && oa.releaseProgram(b);
        }
        function h6(a23, b) {
            a23.render(function(a) {
                F.renderBufferImmediate(a, b);
            });
        }
        function l6(a, b, c, d) {
            if (!1 !== a.visible) {
                if (a.layers.test(b.layers)) {
                    if (a.isGroup) c = a.renderOrder;
                    else if (a.isLOD) !0 === a.autoUpdate && a.update(b);
                    else if (a.isLight) D.pushLight(a), a.castShadow && D.pushShadow(a);
                    else if (a.isSprite) {
                        if (!a.frustumCulled || cg.intersectsSprite(a)) {
                            d && Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id);
                            var e = sa.update(a), f = a.material;
                            f.visible && G.push(a, e, f, c, Fb.z, null);
                        }
                    } else if (a.isImmediateRenderObject) d && Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id), G.push(a, null, a.material, c, Fb.z, null);
                    else if (a.isMesh || a.isLine || a.isPoints) {
                        if (a.isSkinnedMesh && a.skeleton.frame !== ea.render.frame && (a.skeleton.update(), a.skeleton.frame = ea.render.frame), !a.frustumCulled || cg.intersectsObject(a)) {
                            if (d && Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id), e = sa.update(a), f = a.material, Array.isArray(f)) for(var g = e.groups, h = 0, m = g.length; h < m; h++){
                                var q = g[h], k = f[q.materialIndex];
                                k && k.visible && G.push(a, e, k, c, Fb.z, q);
                            }
                            else f.visible && G.push(a, e, f, c, Fb.z, null);
                        }
                    }
                }
                a = a.children;
                h = 0;
                for(m = a.length; h < m; h++)l6(a[h], b, c, d);
            }
        }
        function m5(a, b, c, d) {
            for(var e = 0, f = a.length; e < f; e++){
                var g = a[e], h = g.object, l = g.geometry, m = void 0 === d ? g.material : d;
                g = g.group;
                if (c.isArrayCamera) {
                    if (Pa = c, ka.enabled && ta.isAvailable()) q6(h, b, c, l, m, g);
                    else for(var k = c.cameras, u = 0, p = k.length; u < p; u++){
                        var r = k[u];
                        h.layers.test(r.layers) && (ba.viewport(W.copy(r.viewport)), D.setupLights(r), q6(h, b, r, l, m, g));
                    }
                } else Pa = null, q6(h, b, c, l, m, g);
            }
        }
        function q6(a, c, d, e, f, g) {
            a.onBeforeRender(F, c, d, e, f, g);
            D = ua.get(c, Pa || d);
            a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, a.matrixWorld);
            a.normalMatrix.getNormalMatrix(a.modelViewMatrix);
            if (a.isImmediateRenderObject) {
                ba.setMaterial(f);
                var l = k4(d, c.fog, f, a);
                bc = b21 = null;
                S = !1;
                h6(a, l);
            } else F.renderBufferDirect(d, c.fog, e, f, a, g);
            a.onAfterRender(F, c, d, e, f, g);
            D = ua.get(c, Pa || d);
        }
        function u3(a, b, c) {
            var d = Y.get(a), e = D.state.lights, h = e.state.version;
            c = oa.getParameters(a, e.state, D.state.shadowsArray, b, Oa.numPlanes, Oa.numIntersection, c);
            var l = oa.getProgramCode(a, c), m = d.program, q = !0;
            if (void 0 === m) a.addEventListener("dispose", f12);
            else if (m.code !== l) g9(a);
            else {
                if (d.lightsStateVersion !== h) d.lightsStateVersion = h;
                else if (void 0 !== c.shaderID) return;
                q = !1;
            }
            q && (c.shaderID ? (l = db[c.shaderID], d.shader = {
                name: a.type,
                uniforms: Yb(l.uniforms),
                vertexShader: l.vertexShader,
                fragmentShader: l.fragmentShader
            }) : d.shader = {
                name: a.type,
                uniforms: a.uniforms,
                vertexShader: a.vertexShader,
                fragmentShader: a.fragmentShader
            }, a.onBeforeCompile(d.shader, F), l = oa.getProgramCode(a, c), m = oa.acquireProgram(a, d.shader, c, l), d.program = m, a.program = m);
            c = m.getAttributes();
            if (a.morphTargets) for(l = a.numSupportedMorphTargets = 0; l < F.maxMorphTargets; l++)0 <= c["morphTarget" + l] && a.numSupportedMorphTargets++;
            if (a.morphNormals) for(l = a.numSupportedMorphNormals = 0; l < F.maxMorphNormals; l++)0 <= c["morphNormal" + l] && a.numSupportedMorphNormals++;
            c = d.shader.uniforms;
            if (!a.isShaderMaterial && !a.isRawShaderMaterial || !0 === a.clipping) d.numClippingPlanes = Oa.numPlanes, d.numIntersection = Oa.numIntersection, c.clippingPlanes = Oa.uniform;
            d.fog = b;
            d.needsLights = a.isMeshLambertMaterial || a.isMeshPhongMaterial || a.isMeshStandardMaterial || a.isShadowMaterial || a.isShaderMaterial && !0 === a.lights;
            d.lightsStateVersion = h;
            d.needsLights && (c.ambientLightColor.value = e.state.ambient, c.lightProbe.value = e.state.probe, c.directionalLights.value = e.state.directional, c.spotLights.value = e.state.spot, c.rectAreaLights.value = e.state.rectArea, c.pointLights.value = e.state.point, c.hemisphereLights.value = e.state.hemi, c.directionalShadowMap.value = e.state.directionalShadowMap, c.directionalShadowMatrix.value = e.state.directionalShadowMatrix, c.spotShadowMap.value = e.state.spotShadowMap, c.spotShadowMatrix.value = e.state.spotShadowMatrix, c.pointShadowMap.value = e.state.pointShadowMap, c.pointShadowMatrix.value = e.state.pointShadowMatrix);
            a = d.program.getUniforms();
            a = Bb.seqWithValue(a.seq, c);
            d.uniformsList = a;
        }
        function k4(a, b, c, d) {
            R.resetTextureUnits();
            var e = Y.get(c), f = D.state.lights;
            He && (qa || a !== Q) && Oa.setState(c.clippingPlanes, c.clipIntersection, c.clipShadows, a, e, a === Q && c.id === ha);
            !1 === c.needsUpdate && (void 0 === e.program ? c.needsUpdate = !0 : c.fog && e.fog !== b ? c.needsUpdate = !0 : e.needsLights && e.lightsStateVersion !== f.state.version ? c.needsUpdate = !0 : void 0 === e.numClippingPlanes || e.numClippingPlanes === Oa.numPlanes && e.numIntersection === Oa.numIntersection || (c.needsUpdate = !0));
            c.needsUpdate && (u3(c, b, d), c.needsUpdate = !1);
            var g = !1, h = !1, l = !1;
            f = e.program;
            var m = f.getUniforms(), q = e.shader.uniforms;
            ba.useProgram(f.program) && (l = h = g = !0);
            c.id !== ha && (ha = c.id, h = !0);
            if (g || Q !== a) {
                0 < f.numMultiviewViews ? ta.updateCameraProjectionMatricesUniform(a, m) : m.setValue(J, "projectionMatrix", a.projectionMatrix);
                Ea.logarithmicDepthBuffer && m.setValue(J, "logDepthBufFC", 2 / (Math.log(a.far + 1) / Math.LN2));
                Q !== a && (Q = a, l = h = !0);
                if (c.isShaderMaterial || c.isMeshPhongMaterial || c.isMeshStandardMaterial || c.envMap) g = m.map.cameraPosition, void 0 !== g && g.setValue(J, Fb.setFromMatrixPosition(a.matrixWorld));
                if (c.isMeshPhongMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial || c.skinning) 0 < f.numMultiviewViews ? ta.updateCameraViewMatricesUniform(a, m) : m.setValue(J, "viewMatrix", a.matrixWorldInverse);
            }
            if (c.skinning && (m.setOptional(J, d, "bindMatrix"), m.setOptional(J, d, "bindMatrixInverse"), g = d.skeleton)) {
                var k = g.bones;
                if (Ea.floatVertexTextures) {
                    if (void 0 === g.boneTexture) {
                        k = Math.sqrt(4 * k.length);
                        k = L1.ceilPowerOfTwo(k);
                        k = Math.max(k, 4);
                        var t = new Float32Array(k * k * 4);
                        t.set(g.boneMatrices);
                        var n = new Zb(t, k, k, 1023, 1015);
                        g.boneMatrices = t;
                        g.boneTexture = n;
                        g.boneTextureSize = k;
                    }
                    m.setValue(J, "boneTexture", g.boneTexture, R);
                    m.setValue(J, "boneTextureSize", g.boneTextureSize);
                } else m.setOptional(J, g, "boneMatrices");
            }
            if (h || e.receiveShadow !== d.receiveShadow) e.receiveShadow = d.receiveShadow, m.setValue(J, "receiveShadow", d.receiveShadow);
            h && (m.setValue(J, "toneMappingExposure", F.toneMappingExposure), m.setValue(J, "toneMappingWhitePoint", F.toneMappingWhitePoint), e.needsLights && (h = l, q.ambientLightColor.needsUpdate = h, q.lightProbe.needsUpdate = h, q.directionalLights.needsUpdate = h, q.pointLights.needsUpdate = h, q.spotLights.needsUpdate = h, q.rectAreaLights.needsUpdate = h, q.hemisphereLights.needsUpdate = h), b && c.fog && (q.fogColor.value.copy(b.color), b.isFog ? (q.fogNear.value = b.near, q.fogFar.value = b.far) : b.isFogExp2 && (q.fogDensity.value = b.density)), c.isMeshBasicMaterial ? r5(q, c) : c.isMeshLambertMaterial ? (r5(q, c), c.emissiveMap && (q.emissiveMap.value = c.emissiveMap)) : c.isMeshPhongMaterial ? (r5(q, c), c.isMeshToonMaterial ? (p3(q, c), c.gradientMap && (q.gradientMap.value = c.gradientMap)) : p3(q, c)) : c.isMeshStandardMaterial ? (r5(q, c), c.isMeshPhysicalMaterial ? (v3(q, c), q.reflectivity.value = c.reflectivity, q.clearcoat.value = c.clearcoat, q.clearcoatRoughness.value = c.clearcoatRoughness, c.sheen && q.sheen.value.copy(c.sheen), c.clearcoatNormalMap && (q.clearcoatNormalScale.value.copy(c.clearcoatNormalScale), q.clearcoatNormalMap.value = c.clearcoatNormalMap, 1 === c.side && q.clearcoatNormalScale.value.negate()), q.transparency.value = c.transparency) : v3(q, c)) : c.isMeshMatcapMaterial ? (r5(q, c), c.matcap && (q.matcap.value = c.matcap), c.bumpMap && (q.bumpMap.value = c.bumpMap, q.bumpScale.value = c.bumpScale, 1 === c.side && (q.bumpScale.value *= -1)), c.normalMap && (q.normalMap.value = c.normalMap, q.normalScale.value.copy(c.normalScale), 1 === c.side && q.normalScale.value.negate()), c.displacementMap && (q.displacementMap.value = c.displacementMap, q.displacementScale.value = c.displacementScale, q.displacementBias.value = c.displacementBias)) : c.isMeshDepthMaterial ? (r5(q, c), c.displacementMap && (q.displacementMap.value = c.displacementMap, q.displacementScale.value = c.displacementScale, q.displacementBias.value = c.displacementBias)) : c.isMeshDistanceMaterial ? (r5(q, c), c.displacementMap && (q.displacementMap.value = c.displacementMap, q.displacementScale.value = c.displacementScale, q.displacementBias.value = c.displacementBias), q.referencePosition.value.copy(c.referencePosition), q.nearDistance.value = c.nearDistance, q.farDistance.value = c.farDistance) : c.isMeshNormalMaterial ? (r5(q, c), c.bumpMap && (q.bumpMap.value = c.bumpMap, q.bumpScale.value = c.bumpScale, 1 === c.side && (q.bumpScale.value *= -1)), c.normalMap && (q.normalMap.value = c.normalMap, q.normalScale.value.copy(c.normalScale), 1 === c.side && q.normalScale.value.negate()), c.displacementMap && (q.displacementMap.value = c.displacementMap, q.displacementScale.value = c.displacementScale, q.displacementBias.value = c.displacementBias)) : c.isLineBasicMaterial ? (q.diffuse.value.copy(c.color), q.opacity.value = c.opacity, c.isLineDashedMaterial && (q.dashSize.value = c.dashSize, q.totalSize.value = c.dashSize + c.gapSize, q.scale.value = c.scale)) : c.isPointsMaterial ? (q.diffuse.value.copy(c.color), q.opacity.value = c.opacity, q.size.value = c.size * fa, q.scale.value = .5 * Z, q.map.value = c.map, null !== c.map && (!0 === c.map.matrixAutoUpdate && c.map.updateMatrix(), q.uvTransform.value.copy(c.map.matrix))) : c.isSpriteMaterial ? (q.diffuse.value.copy(c.color), q.opacity.value = c.opacity, q.rotation.value = c.rotation, q.map.value = c.map, null !== c.map && (!0 === c.map.matrixAutoUpdate && c.map.updateMatrix(), q.uvTransform.value.copy(c.map.matrix))) : c.isShadowMaterial && (q.color.value.copy(c.color), q.opacity.value = c.opacity), void 0 !== q.ltc_1 && (q.ltc_1.value = I1.LTC_1), void 0 !== q.ltc_2 && (q.ltc_2.value = I1.LTC_2), Bb.upload(J, e.uniformsList, q, R));
            c.isShaderMaterial && !0 === c.uniformsNeedUpdate && (Bb.upload(J, e.uniformsList, q, R), c.uniformsNeedUpdate = !1);
            c.isSpriteMaterial && m.setValue(J, "center", d.center);
            0 < f.numMultiviewViews ? ta.updateObjectMatricesUniforms(d, a, m) : (m.setValue(J, "modelViewMatrix", d.modelViewMatrix), m.setValue(J, "normalMatrix", d.normalMatrix));
            m.setValue(J, "modelMatrix", d.matrixWorld);
            return f;
        }
        function r5(a, b) {
            a.opacity.value = b.opacity;
            b.color && a.diffuse.value.copy(b.color);
            b.emissive && a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);
            b.map && (a.map.value = b.map);
            b.alphaMap && (a.alphaMap.value = b.alphaMap);
            b.specularMap && (a.specularMap.value = b.specularMap);
            b.envMap && (a.envMap.value = b.envMap, a.flipEnvMap.value = b.envMap.isCubeTexture ? -1 : 1, a.reflectivity.value = b.reflectivity, a.refractionRatio.value = b.refractionRatio, a.maxMipLevel.value = Y.get(b.envMap).__maxMipLevel);
            b.lightMap && (a.lightMap.value = b.lightMap, a.lightMapIntensity.value = b.lightMapIntensity);
            b.aoMap && (a.aoMap.value = b.aoMap, a.aoMapIntensity.value = b.aoMapIntensity);
            if (b.map) var c = b.map;
            else b.specularMap ? c = b.specularMap : b.displacementMap ? c = b.displacementMap : b.normalMap ? c = b.normalMap : b.bumpMap ? c = b.bumpMap : b.roughnessMap ? c = b.roughnessMap : b.metalnessMap ? c = b.metalnessMap : b.alphaMap ? c = b.alphaMap : b.emissiveMap && (c = b.emissiveMap);
            void 0 !== c && (c.isWebGLRenderTarget && (c = c.texture), !0 === c.matrixAutoUpdate && c.updateMatrix(), a.uvTransform.value.copy(c.matrix));
        }
        function p3(a, b) {
            a.specular.value.copy(b.specular);
            a.shininess.value = Math.max(b.shininess, 1E-4);
            b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
            b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale, 1 === b.side && (a.bumpScale.value *= -1));
            b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale), 1 === b.side && a.normalScale.value.negate());
            b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
        }
        function v3(a, b) {
            a.roughness.value = b.roughness;
            a.metalness.value = b.metalness;
            b.roughnessMap && (a.roughnessMap.value = b.roughnessMap);
            b.metalnessMap && (a.metalnessMap.value = b.metalnessMap);
            b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
            b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale, 1 === b.side && (a.bumpScale.value *= -1));
            b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale), 1 === b.side && a.normalScale.value.negate());
            b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
            b.envMap && (a.envMapIntensity.value = b.envMapIntensity);
        }
        a22 = a22 || {};
        var x1 = void 0 !== a22.canvas ? a22.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), z2 = void 0 !== a22.context ? a22.context : null, y2 = void 0 !== a22.alpha ? a22.alpha : !1, V1 = void 0 !== a22.depth ? a22.depth : !0, P = void 0 !== a22.stencil ? a22.stencil : !0, C2 = void 0 !== a22.antialias ? a22.antialias : !1, A = void 0 !== a22.premultipliedAlpha ? a22.premultipliedAlpha : !0, B = void 0 !== a22.preserveDrawingBuffer ? a22.preserveDrawingBuffer : !1, E = void 0 !== a22.powerPreference ? a22.powerPreference : "default", H = void 0 !== a22.failIfMajorPerformanceCaveat ? a22.failIfMajorPerformanceCaveat : !1, G = null, D = null;
        this.domElement = x1;
        this.debug = {
            checkShaderErrors: !0
        };
        this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
        this.clippingPlanes = [];
        this.localClippingEnabled = !1;
        this.gammaFactor = 2;
        this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1;
        this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1;
        this.maxMorphTargets = 8;
        this.maxMorphNormals = 4;
        var F = this, O = !1, M = null, T = 0, X = 0, N = null, ac = null, ha = -1;
        var bc = b21 = null;
        var S = !1;
        var Q = null, Pa = null, W = new aa1, ca = new aa1, da = null, K = x1.width, Z = x1.height, fa = 1, ia = new aa1(0, 0, K, Z), ja = new aa1(0, 0, K, Z), na = !1, cg = new Ed, Oa = new $i, He = !1, qa = !1, Id = new U1, Fb = new n1;
        try {
            y2 = {
                alpha: y2,
                depth: V1,
                stencil: P,
                antialias: C2,
                premultipliedAlpha: A,
                preserveDrawingBuffer: B,
                powerPreference: E,
                failIfMajorPerformanceCaveat: H,
                xrCompatible: !0
            };
            x1.addEventListener("webglcontextlost", d18, !1);
            x1.addEventListener("webglcontextrestored", e12, !1);
            var J = z2 || x1.getContext("webgl", y2) || x1.getContext("experimental-webgl", y2);
            if (null === J) {
                if (null !== x1.getContext("webgl")) throw Error("Error creating WebGL context with your selected attributes.");
                throw Error("Error creating WebGL context.");
            }
            void 0 === J.getShaderPrecisionFormat && (J.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                };
            });
        } catch (Ph) {
            throw console.error("THREE.WebGLRenderer: " + Ph.message), Ph;
        }
        var ra, Ea, ba, ea, Y, R, pa, xa, sa, oa, va, ua, ma, ya, Aa, Ba, la;
        c19();
        var ka = "undefined" !== typeof navigator && "xr" in navigator && "supportsSession" in navigator.xr ? new Oh(F, J) : new gg(F);
        this.vr = ka;
        var ta = new kk(F, J), Da = new Jh(F, sa, Ea.maxTextureSize);
        this.shadowMap = Da;
        this.getContext = function() {
            return J;
        };
        this.getContextAttributes = function() {
            return J.getContextAttributes();
        };
        this.forceContextLoss = function() {
            var a = ra.get("WEBGL_lose_context");
            a && a.loseContext();
        };
        this.forceContextRestore = function() {
            var a = ra.get("WEBGL_lose_context");
            a && a.restoreContext();
        };
        this.getPixelRatio = function() {
            return fa;
        };
        this.setPixelRatio = function(a) {
            void 0 !== a && (fa = a, this.setSize(K, Z, !1));
        };
        this.getSize = function(a) {
            void 0 === a && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), a = new w1);
            return a.set(K, Z);
        };
        this.setSize = function(a, b, c) {
            ka.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (K = a, Z = b, x1.width = Math.floor(a * fa), x1.height = Math.floor(b * fa), !1 !== c && (x1.style.width = a + "px", x1.style.height = b + "px"), this.setViewport(0, 0, a, b));
        };
        this.getDrawingBufferSize = function(a) {
            void 0 === a && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), a = new w1);
            return a.set(K * fa, Z * fa).floor();
        };
        this.setDrawingBufferSize = function(a, b, c) {
            K = a;
            Z = b;
            fa = c;
            x1.width = Math.floor(a * c);
            x1.height = Math.floor(b * c);
            this.setViewport(0, 0, a, b);
        };
        this.getCurrentViewport = function(a) {
            void 0 === a && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), a = new aa1);
            return a.copy(W);
        };
        this.getViewport = function(a) {
            return a.copy(ia);
        };
        this.setViewport = function(a, b, c, d) {
            a.isVector4 ? ia.set(a.x, a.y, a.z, a.w) : ia.set(a, b, c, d);
            ba.viewport(W.copy(ia).multiplyScalar(fa).floor());
        };
        this.getScissor = function(a) {
            return a.copy(ja);
        };
        this.setScissor = function(a, b, c, d) {
            a.isVector4 ? ja.set(a.x, a.y, a.z, a.w) : ja.set(a, b, c, d);
            ba.scissor(ca.copy(ja).multiplyScalar(fa).floor());
        };
        this.getScissorTest = function() {
            return na;
        };
        this.setScissorTest = function(a) {
            ba.setScissorTest(na = a);
        };
        this.getClearColor = function() {
            return ma.getClearColor();
        };
        this.setClearColor = function() {
            ma.setClearColor.apply(ma, arguments);
        };
        this.getClearAlpha = function() {
            return ma.getClearAlpha();
        };
        this.setClearAlpha = function() {
            ma.setClearAlpha.apply(ma, arguments);
        };
        this.clear = function(a, b, c) {
            var d = 0;
            if (void 0 === a || a) d |= 16384;
            if (void 0 === b || b) d |= 256;
            if (void 0 === c || c) d |= 1024;
            J.clear(d);
        };
        this.clearColor = function() {
            this.clear(!0, !1, !1);
        };
        this.clearDepth = function() {
            this.clear(!1, !0, !1);
        };
        this.clearStencil = function() {
            this.clear(!1, !1, !0);
        };
        this.dispose = function() {
            x1.removeEventListener("webglcontextlost", d18, !1);
            x1.removeEventListener("webglcontextrestored", e12, !1);
            va.dispose();
            ua.dispose();
            Y.dispose();
            sa.dispose();
            ka.dispose();
            za.stop();
        };
        this.renderBufferImmediate = function(a, b) {
            ba.initAttributes();
            var c = Y.get(a);
            a.hasPositions && !c.position && (c.position = J.createBuffer());
            a.hasNormals && !c.normal && (c.normal = J.createBuffer());
            a.hasUvs && !c.uv && (c.uv = J.createBuffer());
            a.hasColors && !c.color && (c.color = J.createBuffer());
            b = b.getAttributes();
            a.hasPositions && (J.bindBuffer(34962, c.position), J.bufferData(34962, a.positionArray, 35048), ba.enableAttribute(b.position), J.vertexAttribPointer(b.position, 3, 5126, !1, 0, 0));
            a.hasNormals && (J.bindBuffer(34962, c.normal), J.bufferData(34962, a.normalArray, 35048), ba.enableAttribute(b.normal), J.vertexAttribPointer(b.normal, 3, 5126, !1, 0, 0));
            a.hasUvs && (J.bindBuffer(34962, c.uv), J.bufferData(34962, a.uvArray, 35048), ba.enableAttribute(b.uv), J.vertexAttribPointer(b.uv, 2, 5126, !1, 0, 0));
            a.hasColors && (J.bindBuffer(34962, c.color), J.bufferData(34962, a.colorArray, 35048), ba.enableAttribute(b.color), J.vertexAttribPointer(b.color, 3, 5126, !1, 0, 0));
            ba.disableUnusedAttributes();
            J.drawArrays(4, 0, a.count);
            a.count = 0;
        };
        this.renderBufferDirect = function(a, c, d, e, f, g) {
            var h = f.isMesh && 0 > f.matrixWorld.determinant();
            ba.setMaterial(e, h);
            var l = k4(a, c, e, f), m = !1;
            if (b21 !== d.id || bc !== l.id || S !== (!0 === e.wireframe)) b21 = d.id, bc = l.id, S = !0 === e.wireframe, m = !0;
            f.morphTargetInfluences && (ya.update(f, d, e, l), m = !0);
            h = d.index;
            var q = d.attributes.position;
            c = 1;
            !0 === e.wireframe && (h = xa.getWireframeAttribute(d), c = 2);
            a = Aa;
            if (null !== h) {
                var u = pa.get(h);
                a = Ba;
                a.setIndex(u);
            }
            if (m) {
                if (!1 !== Ea.isWebGL2 || !f.isInstancedMesh && !d.isInstancedBufferGeometry || null !== ra.get("ANGLE_instanced_arrays")) {
                    ba.initAttributes();
                    m = d.attributes;
                    l = l.getAttributes();
                    var r = e.defaultAttributeValues;
                    for(w in l){
                        var p = l[w];
                        if (0 <= p) {
                            var t = m[w];
                            if (void 0 !== t) {
                                var n = t.normalized, v = t.itemSize, x = pa.get(t);
                                if (void 0 !== x) {
                                    var y = x.buffer, z = x.type;
                                    x = x.bytesPerElement;
                                    if (t.isInterleavedBufferAttribute) {
                                        var C = t.data, V = C.stride;
                                        t = t.offset;
                                        C && C.isInstancedInterleavedBuffer ? (ba.enableAttributeAndDivisor(p, C.meshPerAttribute), void 0 === d.maxInstancedCount && (d.maxInstancedCount = C.meshPerAttribute * C.count)) : ba.enableAttribute(p);
                                        J.bindBuffer(34962, y);
                                        J.vertexAttribPointer(p, v, z, n, V * x, t * x);
                                    } else t.isInstancedBufferAttribute ? (ba.enableAttributeAndDivisor(p, t.meshPerAttribute), void 0 === d.maxInstancedCount && (d.maxInstancedCount = t.meshPerAttribute * t.count)) : ba.enableAttribute(p), J.bindBuffer(34962, y), J.vertexAttribPointer(p, v, z, n, 0, 0);
                                }
                            } else if ("instanceMatrix" === w) x = pa.get(f.instanceMatrix), void 0 !== x && (y = x.buffer, z = x.type, ba.enableAttributeAndDivisor(p + 0, 1), ba.enableAttributeAndDivisor(p + 1, 1), ba.enableAttributeAndDivisor(p + 2, 1), ba.enableAttributeAndDivisor(p + 3, 1), J.bindBuffer(34962, y), J.vertexAttribPointer(p + 0, 4, z, !1, 64, 0), J.vertexAttribPointer(p + 1, 4, z, !1, 64, 16), J.vertexAttribPointer(p + 2, 4, z, !1, 64, 32), J.vertexAttribPointer(p + 3, 4, z, !1, 64, 48));
                            else if (void 0 !== r && (n = r[w], void 0 !== n)) switch(n.length){
                                case 2:
                                    J.vertexAttrib2fv(p, n);
                                    break;
                                case 3:
                                    J.vertexAttrib3fv(p, n);
                                    break;
                                case 4:
                                    J.vertexAttrib4fv(p, n);
                                    break;
                                default:
                                    J.vertexAttrib1fv(p, n);
                            }
                        }
                    }
                    ba.disableUnusedAttributes();
                }
                null !== h && J.bindBuffer(34963, u.buffer);
            }
            u = Infinity;
            null !== h ? u = h.count : void 0 !== q && (u = q.count);
            h = d.drawRange.start * c;
            q = null !== g ? g.start * c : 0;
            var w = Math.max(h, q);
            g = Math.max(0, Math.min(u, h + d.drawRange.count * c, q + (null !== g ? g.count * c : Infinity)) - 1 - w + 1);
            if (0 !== g) {
                if (f.isMesh) {
                    if (!0 === e.wireframe) ba.setLineWidth(e.wireframeLinewidth * (null === N ? fa : 1)), a.setMode(1);
                    else switch(f.drawMode){
                        case 0:
                            a.setMode(4);
                            break;
                        case 1:
                            a.setMode(5);
                            break;
                        case 2:
                            a.setMode(6);
                    }
                } else f.isLine ? (e = e.linewidth, void 0 === e && (e = 1), ba.setLineWidth(e * (null === N ? fa : 1)), f.isLineSegments ? a.setMode(1) : f.isLineLoop ? a.setMode(2) : a.setMode(3)) : f.isPoints ? a.setMode(0) : f.isSprite && a.setMode(4);
                f.isInstancedMesh ? a.renderInstances(d, w, g, f.count) : d.isInstancedBufferGeometry ? a.renderInstances(d, w, g, d.maxInstancedCount) : a.render(w, g);
            }
        };
        this.compile = function(a24, b22) {
            D = ua.get(a24, b22);
            D.init();
            a24.traverse(function(a) {
                a.isLight && (D.pushLight(a), a.castShadow && D.pushShadow(a));
            });
            D.setupLights(b22);
            a24.traverse(function(b) {
                if (b.material) {
                    if (Array.isArray(b.material)) for(var c = 0; c < b.material.length; c++)u3(b.material[c], a24.fog, b);
                    else u3(b.material, a24.fog, b);
                }
            });
        };
        var Ca = null, za = new Xf;
        za.setAnimationLoop(function(a) {
            ka.isPresenting() || Ca && Ca(a);
        });
        "undefined" !== typeof window && za.setContext(window);
        this.setAnimationLoop = function(a) {
            Ca = a;
            ka.setAnimationLoop(a);
            za.start();
        };
        this.render = function(a, c, d, e) {
            if (void 0 !== d) {
                console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");
                var f = d;
            }
            if (void 0 !== e) {
                console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");
                var g = e;
            }
            c && c.isCamera ? O || (bc = b21 = null, S = !1, ha = -1, Q = null, !0 === a.autoUpdate && a.updateMatrixWorld(), null === c.parent && c.updateMatrixWorld(), ka.enabled && (c = ka.getCamera(c)), D = ua.get(a, c), D.init(), a.onBeforeRender(F, a, c, f || N), Id.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse), cg.setFromMatrix(Id), qa = this.localClippingEnabled, He = Oa.init(this.clippingPlanes, qa, c), G = va.get(a, c), G.init(), l6(a, c, 0, F.sortObjects), !0 === F.sortObjects && G.sort(), He && Oa.beginShadows(), Da.render(D.state.shadowsArray, a, c), D.setupLights(c), He && Oa.endShadows(), this.info.autoReset && this.info.reset(), void 0 !== f && this.setRenderTarget(f), ka.enabled && ta.isAvailable() && ta.attachCamera(c), ma.render(G, a, c, g), d = G.opaque, e = G.transparent, a.overrideMaterial ? (f = a.overrideMaterial, d.length && m5(d, a, c, f), e.length && m5(e, a, c, f)) : (d.length && m5(d, a, c), e.length && m5(e, a, c)), a.onAfterRender(F, a, c), null !== N && (R.updateRenderTargetMipmap(N), R.updateMultisampleRenderTarget(N)), ba.buffers.depth.setTest(!0), ba.buffers.depth.setMask(!0), ba.buffers.color.setMask(!0), ba.setPolygonOffset(!1), ka.enabled && (ta.isAvailable() && ta.detachCamera(c), ka.submitFrame()), D = G = null) : console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        };
        this.setFramebuffer = function(a) {
            M !== a && J.bindFramebuffer(36160, a);
            M = a;
        };
        this.getActiveCubeFace = function() {
            return T;
        };
        this.getActiveMipmapLevel = function() {
            return X;
        };
        this.getRenderTarget = function() {
            return N;
        };
        this.setRenderTarget = function(a, b, c) {
            N = a;
            T = b;
            X = c;
            a && void 0 === Y.get(a).__webglFramebuffer && R.setupRenderTarget(a);
            var d = M, e = !1;
            a ? (d = Y.get(a).__webglFramebuffer, a.isWebGLRenderTargetCube ? (d = d[b || 0], e = !0) : d = a.isWebGLMultisampleRenderTarget ? Y.get(a).__webglMultisampledFramebuffer : d, W.copy(a.viewport), ca.copy(a.scissor), da = a.scissorTest) : (W.copy(ia).multiplyScalar(fa).floor(), ca.copy(ja).multiplyScalar(fa).floor(), da = na);
            ac !== d && (J.bindFramebuffer(36160, d), ac = d);
            ba.viewport(W);
            ba.scissor(ca);
            ba.setScissorTest(da);
            e && (a = Y.get(a.texture), J.framebufferTexture2D(36160, 36064, 34069 + (b || 0), a.__webglTexture, c || 0));
        };
        this.readRenderTargetPixels = function(a, b, c, d, e, f, g) {
            if (a && a.isWebGLRenderTarget) {
                var h = Y.get(a).__webglFramebuffer;
                a.isWebGLRenderTargetCube && void 0 !== g && (h = h[g]);
                if (h) {
                    g = !1;
                    h !== ac && (J.bindFramebuffer(36160, h), g = !0);
                    try {
                        var l = a.texture, m = l.format, q = l.type;
                        1023 !== m && la.convert(m) !== J.getParameter(35739) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : 1009 === q || la.convert(q) === J.getParameter(35738) || 1015 === q && (Ea.isWebGL2 || ra.get("OES_texture_float") || ra.get("WEBGL_color_buffer_float")) || 1016 === q && (Ea.isWebGL2 ? ra.get("EXT_color_buffer_float") : ra.get("EXT_color_buffer_half_float")) ? 36053 === J.checkFramebufferStatus(36160) ? 0 <= b && b <= a.width - d && 0 <= c && c <= a.height - e && J.readPixels(b, c, d, e, la.convert(m), la.convert(q), f) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    } finally{
                        g && J.bindFramebuffer(36160, ac);
                    }
                }
            } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        };
        this.copyFramebufferToTexture = function(a, b, c) {
            var d = b.image.width, e = b.image.height, f = la.convert(b.format);
            R.setTexture2D(b, 0);
            J.copyTexImage2D(3553, c || 0, f, a.x, a.y, d, e, 0);
        };
        this.copyTextureToTexture = function(a, b, c, d) {
            var e = b.image.width, f = b.image.height, g = la.convert(c.format), h = la.convert(c.type);
            R.setTexture2D(c, 0);
            b.isDataTexture ? J.texSubImage2D(3553, d || 0, a.x, a.y, e, f, g, h, b.image.data) : J.texSubImage2D(3553, d || 0, a.x, a.y, g, h, b.image);
        };
        "undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }));
    }
    function Ie(a, b) {
        this.name = "";
        this.color = new H1(a);
        this.density = void 0 !== b ? b : 2.5E-4;
    }
    function Je(a, b, c) {
        this.name = "";
        this.color = new H1(a);
        this.near = void 0 !== b ? b : 1;
        this.far = void 0 !== c ? c : 1E3;
    }
    function Gb(a, b) {
        this.array = a;
        this.stride = b;
        this.count = void 0 !== a ? a.length / b : 0;
        this.dynamic = !1;
        this.updateRange = {
            offset: 0,
            count: -1
        };
        this.version = 0;
    }
    function Kd(a, b, c, d) {
        this.data = a;
        this.itemSize = b;
        this.offset = c;
        this.normalized = !0 === d;
    }
    function Hb(a) {
        M1.call(this);
        this.type = "SpriteMaterial";
        this.color = new H1(16777215);
        this.map = null;
        this.rotation = 0;
        this.transparent = this.sizeAttenuation = !0;
        this.setValues(a);
    }
    function Ld(a) {
        B1.call(this);
        this.type = "Sprite";
        if (void 0 === Ic) {
            Ic = new E1;
            var b = new Float32Array([
                -0.5,
                -0.5,
                0,
                0,
                0,
                .5,
                -0.5,
                0,
                1,
                0,
                .5,
                .5,
                0,
                1,
                1,
                -0.5,
                .5,
                0,
                0,
                1
            ]);
            b = new Gb(b, 5);
            Ic.setIndex([
                0,
                1,
                2,
                0,
                2,
                3
            ]);
            Ic.addAttribute("position", new Kd(b, 3, 0, !1));
            Ic.addAttribute("uv", new Kd(b, 2, 3, !1));
        }
        this.geometry = Ic;
        this.material = void 0 !== a ? a : new Hb;
        this.center = new w1(.5, .5);
    }
    function Ke(a, b, c, d, e, f) {
        Jc.subVectors(a, c).addScalar(.5).multiply(d);
        void 0 !== e ? (Md.x = f * Jc.x - e * Jc.y, Md.y = e * Jc.x + f * Jc.y) : Md.copy(Jc);
        a.copy(b);
        a.x += Md.x;
        a.y += Md.y;
        a.applyMatrix4(Qh);
    }
    function Nd() {
        B1.call(this);
        this.type = "LOD";
        Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        });
        this.autoUpdate = !0;
    }
    function Od(a, b) {
        a && a.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        ja1.call(this, a, b);
        this.type = "SkinnedMesh";
        this.bindMode = "attached";
        this.bindMatrix = new U1;
        this.bindMatrixInverse = new U1;
    }
    function Le(a, b) {
        a = a || [];
        this.bones = a.slice(0);
        this.boneMatrices = new Float32Array(16 * this.bones.length);
        this.frame = -1;
        if (void 0 === b) this.calculateInverses();
        else if (this.bones.length === b.length) this.boneInverses = b.slice(0);
        else for(console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [], a = 0, b = this.bones.length; a < b; a++)this.boneInverses.push(new U1);
    }
    function ig() {
        B1.call(this);
        this.type = "Bone";
    }
    function jg(a, b, c) {
        ja1.call(this, a, b);
        this.instanceMatrix = new O1(new Float32Array(16 * c), 16);
        this.count = c;
    }
    function Q1(a) {
        M1.call(this);
        this.type = "LineBasicMaterial";
        this.color = new H1(16777215);
        this.linewidth = 1;
        this.linejoin = this.linecap = "round";
        this.setValues(a);
    }
    function xa1(a, b, c) {
        1 === c && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");
        B1.call(this);
        this.type = "Line";
        this.geometry = void 0 !== a ? a : new E1;
        this.material = void 0 !== b ? b : new Q1({
            color: 16777215 * Math.random()
        });
    }
    function ca1(a, b) {
        xa1.call(this, a, b);
        this.type = "LineSegments";
    }
    function Me(a, b) {
        xa1.call(this, a, b);
        this.type = "LineLoop";
    }
    function Qa(a) {
        M1.call(this);
        this.type = "PointsMaterial";
        this.color = new H1(16777215);
        this.map = null;
        this.size = 1;
        this.sizeAttenuation = !0;
        this.morphTargets = !1;
        this.setValues(a);
    }
    function Kc(a, b) {
        B1.call(this);
        this.type = "Points";
        this.geometry = void 0 !== a ? a : new E1;
        this.material = void 0 !== b ? b : new Qa({
            color: 16777215 * Math.random()
        });
        this.updateMorphTargets();
    }
    function kg(a, b, c, d, e, f, g) {
        var h = lg.distanceSqToPoint(a);
        h < c && (c = new n1, lg.closestPointToPoint(a, c), c.applyMatrix4(d), a = e.ray.origin.distanceTo(c), a < e.near || a > e.far || f.push({
            distance: a,
            distanceToRay: Math.sqrt(h),
            point: c,
            index: b,
            face: null,
            object: g
        }));
    }
    function mg(a, b, c, d, e, f, g, h, l) {
        W1.call(this, a, b, c, d, e, f, g, h, l);
        this.format = void 0 !== g ? g : 1022;
        this.minFilter = void 0 !== f ? f : 1006;
        this.magFilter = void 0 !== e ? e : 1006;
        this.generateMipmaps = !1;
    }
    function Lc(a, b, c, d, e, f, g, h, l, m, q, k) {
        W1.call(this, null, f, g, h, l, m, d, e, q, k);
        this.image = {
            width: b,
            height: c
        };
        this.mipmaps = a;
        this.generateMipmaps = this.flipY = !1;
    }
    function Pd(a, b, c, d, e, f, g, h, l) {
        W1.call(this, a, b, c, d, e, f, g, h, l);
        this.needsUpdate = !0;
    }
    function Qd(a, b, c, d, e, f, g, h, l, m) {
        m = void 0 !== m ? m : 1026;
        if (1026 !== m && 1027 !== m) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === c && 1026 === m && (c = 1012);
        void 0 === c && 1027 === m && (c = 1020);
        W1.call(this, null, d, e, f, g, h, m, c, l);
        this.image = {
            width: a,
            height: b
        };
        this.magFilter = void 0 !== g ? g : 1003;
        this.minFilter = void 0 !== h ? h : 1003;
        this.generateMipmaps = this.flipY = !1;
    }
    function Mc(a) {
        E1.call(this);
        this.type = "WireframeGeometry";
        var b = [], c, d, e, f = [
            0,
            0
        ], g = {}, h = [
            "a",
            "b",
            "c"
        ];
        if (a && a.isGeometry) {
            var l = a.faces;
            var m = 0;
            for(d = l.length; m < d; m++){
                var q = l[m];
                for(c = 0; 3 > c; c++){
                    var k = q[h[c]];
                    var t = q[h[(c + 1) % 3]];
                    f[0] = Math.min(k, t);
                    f[1] = Math.max(k, t);
                    k = f[0] + "," + f[1];
                    void 0 === g[k] && (g[k] = {
                        index1: f[0],
                        index2: f[1]
                    });
                }
            }
            for(k in g)m = g[k], h = a.vertices[m.index1], b.push(h.x, h.y, h.z), h = a.vertices[m.index2], b.push(h.x, h.y, h.z);
        } else if (a && a.isBufferGeometry) {
            if (h = new n1, null !== a.index) {
                l = a.attributes.position;
                q = a.index;
                var r = a.groups;
                0 === r.length && (r = [
                    {
                        start: 0,
                        count: q.count,
                        materialIndex: 0
                    }
                ]);
                a = 0;
                for(e = r.length; a < e; ++a)for(m = r[a], c = m.start, d = m.count, m = c, d = c + d; m < d; m += 3)for(c = 0; 3 > c; c++)k = q.getX(m + c), t = q.getX(m + (c + 1) % 3), f[0] = Math.min(k, t), f[1] = Math.max(k, t), k = f[0] + "," + f[1], void 0 === g[k] && (g[k] = {
                    index1: f[0],
                    index2: f[1]
                });
                for(k in g)m = g[k], h.fromBufferAttribute(l, m.index1), b.push(h.x, h.y, h.z), h.fromBufferAttribute(l, m.index2), b.push(h.x, h.y, h.z);
            } else for(l = a.attributes.position, m = 0, d = l.count / 3; m < d; m++)for(c = 0; 3 > c; c++)g = 3 * m + c, h.fromBufferAttribute(l, g), b.push(h.x, h.y, h.z), g = 3 * m + (c + 1) % 3, h.fromBufferAttribute(l, g), b.push(h.x, h.y, h.z);
        }
        this.addAttribute("position", new A1(b, 3));
    }
    function Rd(a, b, c) {
        F1.call(this);
        this.type = "ParametricGeometry";
        this.parameters = {
            func: a,
            slices: b,
            stacks: c
        };
        this.fromBufferGeometry(new Nc(a, b, c));
        this.mergeVertices();
    }
    function Nc(a, b, c) {
        E1.call(this);
        this.type = "ParametricBufferGeometry";
        this.parameters = {
            func: a,
            slices: b,
            stacks: c
        };
        var d = [], e = [], f = [], g = [], h = new n1, l = new n1, m = new n1, q = new n1, k = new n1, t, r;
        3 > a.length && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        var p = b + 1;
        for(t = 0; t <= c; t++){
            var v = t / c;
            for(r = 0; r <= b; r++){
                var x = r / b;
                a(x, v, l);
                e.push(l.x, l.y, l.z);
                0 <= x - 1E-5 ? (a(x - 1E-5, v, m), q.subVectors(l, m)) : (a(x + 1E-5, v, m), q.subVectors(m, l));
                0 <= v - 1E-5 ? (a(x, v - 1E-5, m), k.subVectors(l, m)) : (a(x, v + 1E-5, m), k.subVectors(m, l));
                h.crossVectors(q, k).normalize();
                f.push(h.x, h.y, h.z);
                g.push(x, v);
            }
        }
        for(t = 0; t < c; t++)for(r = 0; r < b; r++)a = t * p + r + 1, h = (t + 1) * p + r + 1, l = (t + 1) * p + r, d.push(t * p + r, a, l), d.push(a, h, l);
        this.setIndex(d);
        this.addAttribute("position", new A1(e, 3));
        this.addAttribute("normal", new A1(f, 3));
        this.addAttribute("uv", new A1(g, 2));
    }
    function Sd(a, b, c, d) {
        F1.call(this);
        this.type = "PolyhedronGeometry";
        this.parameters = {
            vertices: a,
            indices: b,
            radius: c,
            detail: d
        };
        this.fromBufferGeometry(new Ca1(a, b, c, d));
        this.mergeVertices();
    }
    function Ca1(a25, b23, c20, d19) {
        function e13(a) {
            h7.push(a.x, a.y, a.z);
        }
        function f13(b, c) {
            b *= 3;
            c.x = a25[b + 0];
            c.y = a25[b + 1];
            c.z = a25[b + 2];
        }
        function g10(a, b, c, d) {
            0 > d && 1 === a.x && (l7[b] = a.x - 1);
            0 === c.x && 0 === c.z && (l7[b] = d / 2 / Math.PI + .5);
        }
        E1.call(this);
        this.type = "PolyhedronBufferGeometry";
        this.parameters = {
            vertices: a25,
            indices: b23,
            radius: c20,
            detail: d19
        };
        c20 = c20 || 1;
        d19 = d19 || 0;
        var h7 = [], l7 = [];
        (function(a) {
            for(var c = new n1, d = new n1, g = new n1, h = 0; h < b23.length; h += 3){
                f13(b23[h + 0], c);
                f13(b23[h + 1], d);
                f13(b23[h + 2], g);
                var l, m, k = c, z = d, y = g, w = Math.pow(2, a), P = [];
                for(m = 0; m <= w; m++){
                    P[m] = [];
                    var C = k.clone().lerp(y, m / w), A = z.clone().lerp(y, m / w), B = w - m;
                    for(l = 0; l <= B; l++)P[m][l] = 0 === l && m === w ? C : C.clone().lerp(A, l / B);
                }
                for(m = 0; m < w; m++)for(l = 0; l < 2 * (w - m) - 1; l++)k = Math.floor(l / 2), 0 === l % 2 ? (e13(P[m][k + 1]), e13(P[m + 1][k]), e13(P[m][k])) : (e13(P[m][k + 1]), e13(P[m + 1][k + 1]), e13(P[m + 1][k]));
            }
        })(d19);
        (function(a) {
            for(var b = new n1, c = 0; c < h7.length; c += 3)b.x = h7[c + 0], b.y = h7[c + 1], b.z = h7[c + 2], b.normalize().multiplyScalar(a), h7[c + 0] = b.x, h7[c + 1] = b.y, h7[c + 2] = b.z;
        })(c20);
        (function() {
            for(var a = new n1, b = 0; b < h7.length; b += 3)a.x = h7[b + 0], a.y = h7[b + 1], a.z = h7[b + 2], l7.push(Math.atan2(a.z, -a.x) / 2 / Math.PI + .5, 1 - (Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5));
            a = new n1;
            b = new n1;
            for(var c = new n1, d = new n1, e = new w1, f = new w1, k = new w1, x = 0, z = 0; x < h7.length; x += 9, z += 6){
                a.set(h7[x + 0], h7[x + 1], h7[x + 2]);
                b.set(h7[x + 3], h7[x + 4], h7[x + 5]);
                c.set(h7[x + 6], h7[x + 7], h7[x + 8]);
                e.set(l7[z + 0], l7[z + 1]);
                f.set(l7[z + 2], l7[z + 3]);
                k.set(l7[z + 4], l7[z + 5]);
                d.copy(a).add(b).add(c).divideScalar(3);
                var y = Math.atan2(d.z, -d.x);
                g10(e, z + 0, a, y);
                g10(f, z + 2, b, y);
                g10(k, z + 4, c, y);
            }
            for(a = 0; a < l7.length; a += 6)b = l7[a + 0], c = l7[a + 2], d = l7[a + 4], e = Math.min(b, c, d), .9 < Math.max(b, c, d) && .1 > e && (.2 > b && (l7[a + 0] += 1), .2 > c && (l7[a + 2] += 1), .2 > d && (l7[a + 4] += 1));
        })();
        this.addAttribute("position", new A1(h7, 3));
        this.addAttribute("normal", new A1(h7.slice(), 3));
        this.addAttribute("uv", new A1(l7, 2));
        0 === d19 ? this.computeVertexNormals() : this.normalizeNormals();
    }
    function Td(a, b) {
        F1.call(this);
        this.type = "TetrahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Oc(a, b));
        this.mergeVertices();
    }
    function Oc(a, b) {
        Ca1.call(this, [
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            -1,
            1,
            -1,
            -1
        ], [
            2,
            1,
            0,
            0,
            3,
            2,
            1,
            3,
            0,
            2,
            3,
            1
        ], a, b);
        this.type = "TetrahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
    }
    function Ud(a, b) {
        F1.call(this);
        this.type = "OctahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new cc(a, b));
        this.mergeVertices();
    }
    function cc(a, b) {
        Ca1.call(this, [
            1,
            0,
            0,
            -1,
            0,
            0,
            0,
            1,
            0,
            0,
            -1,
            0,
            0,
            0,
            1,
            0,
            0,
            -1
        ], [
            0,
            2,
            4,
            0,
            4,
            3,
            0,
            3,
            5,
            0,
            5,
            2,
            1,
            2,
            5,
            1,
            5,
            3,
            1,
            3,
            4,
            1,
            4,
            2
        ], a, b);
        this.type = "OctahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
    }
    function Vd(a, b) {
        F1.call(this);
        this.type = "IcosahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Pc(a, b));
        this.mergeVertices();
    }
    function Pc(a, b) {
        var c = (1 + Math.sqrt(5)) / 2;
        Ca1.call(this, [
            -1,
            c,
            0,
            1,
            c,
            0,
            -1,
            -c,
            0,
            1,
            -c,
            0,
            0,
            -1,
            c,
            0,
            1,
            c,
            0,
            -1,
            -c,
            0,
            1,
            -c,
            c,
            0,
            -1,
            c,
            0,
            1,
            -c,
            0,
            -1,
            -c,
            0,
            1
        ], [
            0,
            11,
            5,
            0,
            5,
            1,
            0,
            1,
            7,
            0,
            7,
            10,
            0,
            10,
            11,
            1,
            5,
            9,
            5,
            11,
            4,
            11,
            10,
            2,
            10,
            7,
            6,
            7,
            1,
            8,
            3,
            9,
            4,
            3,
            4,
            2,
            3,
            2,
            6,
            3,
            6,
            8,
            3,
            8,
            9,
            4,
            9,
            5,
            2,
            4,
            11,
            6,
            2,
            10,
            8,
            6,
            7,
            9,
            8,
            1
        ], a, b);
        this.type = "IcosahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
    }
    function Wd(a, b) {
        F1.call(this);
        this.type = "DodecahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Qc(a, b));
        this.mergeVertices();
    }
    function Qc(a, b) {
        var c = (1 + Math.sqrt(5)) / 2, d = 1 / c;
        Ca1.call(this, [
            -1,
            -1,
            -1,
            -1,
            -1,
            1,
            -1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            1,
            1,
            -1,
            1,
            1,
            1,
            0,
            -d,
            -c,
            0,
            -d,
            c,
            0,
            d,
            -c,
            0,
            d,
            c,
            -d,
            -c,
            0,
            -d,
            c,
            0,
            d,
            -c,
            0,
            d,
            c,
            0,
            -c,
            0,
            -d,
            c,
            0,
            -d,
            -c,
            0,
            d,
            c,
            0,
            d
        ], [
            3,
            11,
            7,
            3,
            7,
            15,
            3,
            15,
            13,
            7,
            19,
            17,
            7,
            17,
            6,
            7,
            6,
            15,
            17,
            4,
            8,
            17,
            8,
            10,
            17,
            10,
            6,
            8,
            0,
            16,
            8,
            16,
            2,
            8,
            2,
            10,
            0,
            12,
            1,
            0,
            1,
            18,
            0,
            18,
            16,
            6,
            10,
            2,
            6,
            2,
            13,
            6,
            13,
            15,
            2,
            16,
            18,
            2,
            18,
            3,
            2,
            3,
            13,
            18,
            1,
            9,
            18,
            9,
            11,
            18,
            11,
            3,
            4,
            14,
            12,
            4,
            12,
            0,
            4,
            0,
            8,
            11,
            9,
            5,
            11,
            5,
            19,
            11,
            19,
            7,
            19,
            5,
            14,
            19,
            14,
            4,
            19,
            4,
            17,
            1,
            12,
            14,
            1,
            14,
            5,
            1,
            5,
            9
        ], a, b);
        this.type = "DodecahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
    }
    function Xd(a, b, c, d, e, f) {
        F1.call(this);
        this.type = "TubeGeometry";
        this.parameters = {
            path: a,
            tubularSegments: b,
            radius: c,
            radialSegments: d,
            closed: e
        };
        void 0 !== f && console.warn("THREE.TubeGeometry: taper has been removed.");
        a = new dc(a, b, c, d, e);
        this.tangents = a.tangents;
        this.normals = a.normals;
        this.binormals = a.binormals;
        this.fromBufferGeometry(a);
        this.mergeVertices();
    }
    function dc(a26, b, c21, d, e14) {
        function f14(e) {
            q = a26.getPointAt(e / b, q);
            var f = g.normals[e];
            e = g.binormals[e];
            for(t = 0; t <= d; t++){
                var m = t / d * Math.PI * 2, k = Math.sin(m);
                m = -Math.cos(m);
                l.x = m * f.x + k * e.x;
                l.y = m * f.y + k * e.y;
                l.z = m * f.z + k * e.z;
                l.normalize();
                p.push(l.x, l.y, l.z);
                h.x = q.x + c21 * l.x;
                h.y = q.y + c21 * l.y;
                h.z = q.z + c21 * l.z;
                r.push(h.x, h.y, h.z);
            }
        }
        E1.call(this);
        this.type = "TubeBufferGeometry";
        this.parameters = {
            path: a26,
            tubularSegments: b,
            radius: c21,
            radialSegments: d,
            closed: e14
        };
        b = b || 64;
        c21 = c21 || 1;
        d = d || 8;
        e14 = e14 || !1;
        var g = a26.computeFrenetFrames(b, e14);
        this.tangents = g.tangents;
        this.normals = g.normals;
        this.binormals = g.binormals;
        var h = new n1, l = new n1, m6 = new w1, q = new n1, k5, t, r = [], p = [], v = [], x = [];
        for(k5 = 0; k5 < b; k5++)f14(k5);
        f14(!1 === e14 ? b : 0);
        for(k5 = 0; k5 <= b; k5++)for(t = 0; t <= d; t++)m6.x = k5 / b, m6.y = t / d, v.push(m6.x, m6.y);
        (function() {
            for(t = 1; t <= b; t++)for(k5 = 1; k5 <= d; k5++){
                var a = (d + 1) * t + (k5 - 1), c = (d + 1) * t + k5, e = (d + 1) * (t - 1) + k5;
                x.push((d + 1) * (t - 1) + (k5 - 1), a, e);
                x.push(a, c, e);
            }
        })();
        this.setIndex(x);
        this.addAttribute("position", new A1(r, 3));
        this.addAttribute("normal", new A1(p, 3));
        this.addAttribute("uv", new A1(v, 2));
    }
    function Yd(a, b, c, d, e, f, g) {
        F1.call(this);
        this.type = "TorusKnotGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            tubularSegments: c,
            radialSegments: d,
            p: e,
            q: f
        };
        void 0 !== g && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
        this.fromBufferGeometry(new Rc(a, b, c, d, e, f));
        this.mergeVertices();
    }
    function Rc(a27, b24, c22, d20, e15, f15) {
        function g(a, b, c, d, e) {
            var f = Math.sin(a);
            b = c / b * a;
            c = Math.cos(b);
            e.x = d * (2 + c) * .5 * Math.cos(a);
            e.y = d * (2 + c) * f * .5;
            e.z = d * Math.sin(b) * .5;
        }
        E1.call(this);
        this.type = "TorusKnotBufferGeometry";
        this.parameters = {
            radius: a27,
            tube: b24,
            tubularSegments: c22,
            radialSegments: d20,
            p: e15,
            q: f15
        };
        a27 = a27 || 1;
        b24 = b24 || .4;
        c22 = Math.floor(c22) || 64;
        d20 = Math.floor(d20) || 8;
        e15 = e15 || 2;
        f15 = f15 || 3;
        var h = [], l = [], m = [], q = [], k, t = new n1, r = new n1, p = new n1, v = new n1, x = new n1, z = new n1, y = new n1;
        for(k = 0; k <= c22; ++k){
            var w = k / c22 * e15 * Math.PI * 2;
            g(w, e15, f15, a27, p);
            g(w + .01, e15, f15, a27, v);
            z.subVectors(v, p);
            y.addVectors(v, p);
            x.crossVectors(z, y);
            y.crossVectors(x, z);
            x.normalize();
            y.normalize();
            for(w = 0; w <= d20; ++w){
                var P = w / d20 * Math.PI * 2, C = -b24 * Math.cos(P);
                P = b24 * Math.sin(P);
                t.x = p.x + (C * y.x + P * x.x);
                t.y = p.y + (C * y.y + P * x.y);
                t.z = p.z + (C * y.z + P * x.z);
                l.push(t.x, t.y, t.z);
                r.subVectors(t, p).normalize();
                m.push(r.x, r.y, r.z);
                q.push(k / c22);
                q.push(w / d20);
            }
        }
        for(w = 1; w <= c22; w++)for(k = 1; k <= d20; k++)a27 = (d20 + 1) * w + (k - 1), b24 = (d20 + 1) * w + k, e15 = (d20 + 1) * (w - 1) + k, h.push((d20 + 1) * (w - 1) + (k - 1), a27, e15), h.push(a27, b24, e15);
        this.setIndex(h);
        this.addAttribute("position", new A1(l, 3));
        this.addAttribute("normal", new A1(m, 3));
        this.addAttribute("uv", new A1(q, 2));
    }
    function Zd(a, b, c, d, e) {
        F1.call(this);
        this.type = "TorusGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            radialSegments: c,
            tubularSegments: d,
            arc: e
        };
        this.fromBufferGeometry(new Sc(a, b, c, d, e));
        this.mergeVertices();
    }
    function Sc(a, b, c, d, e) {
        E1.call(this);
        this.type = "TorusBufferGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            radialSegments: c,
            tubularSegments: d,
            arc: e
        };
        a = a || 1;
        b = b || .4;
        c = Math.floor(c) || 8;
        d = Math.floor(d) || 6;
        e = e || 2 * Math.PI;
        var f = [], g = [], h = [], l = [], m = new n1, q = new n1, k = new n1, t, r;
        for(t = 0; t <= c; t++)for(r = 0; r <= d; r++){
            var p = r / d * e, v = t / c * Math.PI * 2;
            q.x = (a + b * Math.cos(v)) * Math.cos(p);
            q.y = (a + b * Math.cos(v)) * Math.sin(p);
            q.z = b * Math.sin(v);
            g.push(q.x, q.y, q.z);
            m.x = a * Math.cos(p);
            m.y = a * Math.sin(p);
            k.subVectors(q, m).normalize();
            h.push(k.x, k.y, k.z);
            l.push(r / d);
            l.push(t / c);
        }
        for(t = 1; t <= c; t++)for(r = 1; r <= d; r++)a = (d + 1) * (t - 1) + r - 1, b = (d + 1) * (t - 1) + r, e = (d + 1) * t + r, f.push((d + 1) * t + r - 1, a, e), f.push(a, b, e);
        this.setIndex(f);
        this.addAttribute("position", new A1(g, 3));
        this.addAttribute("normal", new A1(h, 3));
        this.addAttribute("uv", new A1(l, 2));
    }
    function Rh(a, b, c, d, e) {
        for(var f, g = 0, h = b, l = c - d; h < c; h += d)g += (a[l] - a[h]) * (a[h + 1] + a[l + 1]), l = h;
        if (e === 0 < g) for(e = b; e < c; e += d)f = Sh(e, a[e], a[e + 1], f);
        else for(e = c - d; e >= b; e -= d)f = Sh(e, a[e], a[e + 1], f);
        f && ec(f, f.next) && ($d(f), f = f.next);
        return f;
    }
    function ae(a, b) {
        if (!a) return a;
        b || (b = a);
        do {
            var c = !1;
            if (a.steiner || !ec(a, a.next) && 0 !== sa1(a.prev, a, a.next)) a = a.next;
            else {
                $d(a);
                a = b = a.prev;
                if (a === a.next) break;
                c = !0;
            }
        }while (c || a !== b);
        return b;
    }
    function be(a, b, c, d, e, f, g) {
        if (a) {
            if (!g && f) {
                var h = a, l = h;
                do null === l.z && (l.z = ng(l.x, l.y, d, e, f)), l.prevZ = l.prev, l = l.nextZ = l.next;
                while (l !== h);
                l.prevZ.nextZ = null;
                l.prevZ = null;
                h = l;
                var m, q, k, t, r = 1;
                do {
                    l = h;
                    var p = h = null;
                    for(q = 0; l;){
                        q++;
                        var n = l;
                        for(m = k = 0; m < r && (k++, n = n.nextZ, n); m++);
                        for(t = r; 0 < k || 0 < t && n;)0 !== k && (0 === t || !n || l.z <= n.z) ? (m = l, l = l.nextZ, k--) : (m = n, n = n.nextZ, t--), p ? p.nextZ = m : h = m, m.prevZ = p, p = m;
                        l = n;
                    }
                    p.nextZ = null;
                    r *= 2;
                }while (1 < q);
            }
            for(h = a; a.prev !== a.next;){
                l = a.prev;
                n = a.next;
                if (f) p = lk(a, d, e, f);
                else a: if (p = a, q = p.prev, k = p, r = p.next, 0 <= sa1(q, k, r)) p = !1;
                else {
                    for(m = p.next.next; m !== p.prev;){
                        if (Tc(q.x, q.y, k.x, k.y, r.x, r.y, m.x, m.y) && 0 <= sa1(m.prev, m, m.next)) {
                            p = !1;
                            break a;
                        }
                        m = m.next;
                    }
                    p = !0;
                }
                if (p) b.push(l.i / c), b.push(a.i / c), b.push(n.i / c), $d(a), h = a = n.next;
                else if (a = n, a === h) {
                    if (!g) be(ae(a), b, c, d, e, f, 1);
                    else if (1 === g) {
                        g = b;
                        h = c;
                        l = a;
                        do n = l.prev, p = l.next.next, !ec(n, p) && Th(n, l, l.next, p) && ce(n, p) && ce(p, n) && (g.push(n.i / h), g.push(l.i / h), g.push(p.i / h), $d(l), $d(l.next), l = a = p), l = l.next;
                        while (l !== a);
                        a = l;
                        be(a, b, c, d, e, f, 2);
                    } else if (2 === g) a: {
                        g = a;
                        do {
                            for(h = g.next.next; h !== g.prev;){
                                if (l = g.i !== h.i) {
                                    l = g;
                                    n = h;
                                    if (p = l.next.i !== n.i && l.prev.i !== n.i) {
                                        b: {
                                            p = l;
                                            do {
                                                if (p.i !== l.i && p.next.i !== l.i && p.i !== n.i && p.next.i !== n.i && Th(p, p.next, l, n)) {
                                                    p = !0;
                                                    break b;
                                                }
                                                p = p.next;
                                            }while (p !== l);
                                            p = !1;
                                        }
                                        p = !p;
                                    }
                                    if (p = p && ce(l, n) && ce(n, l)) {
                                        p = l;
                                        q = !1;
                                        k = (l.x + n.x) / 2;
                                        n = (l.y + n.y) / 2;
                                        do p.y > n !== p.next.y > n && p.next.y !== p.y && k < (p.next.x - p.x) * (n - p.y) / (p.next.y - p.y) + p.x && (q = !q), p = p.next;
                                        while (p !== l);
                                        p = q;
                                    }
                                    l = p;
                                }
                                if (l) {
                                    a = Uh(g, h);
                                    g = ae(g, g.next);
                                    a = ae(a, a.next);
                                    be(g, b, c, d, e, f);
                                    be(a, b, c, d, e, f);
                                    break a;
                                }
                                h = h.next;
                            }
                            g = g.next;
                        }while (g !== a);
                    }
                    break;
                }
            }
        }
    }
    function lk(a, b, c, d) {
        var e = a.prev, f = a.next;
        if (0 <= sa1(e, a, f)) return !1;
        var g = e.x > a.x ? e.x > f.x ? e.x : f.x : a.x > f.x ? a.x : f.x, h = e.y > a.y ? e.y > f.y ? e.y : f.y : a.y > f.y ? a.y : f.y, l = ng(e.x < a.x ? e.x < f.x ? e.x : f.x : a.x < f.x ? a.x : f.x, e.y < a.y ? e.y < f.y ? e.y : f.y : a.y < f.y ? a.y : f.y, b, c, d);
        b = ng(g, h, b, c, d);
        c = a.prevZ;
        for(d = a.nextZ; c && c.z >= l && d && d.z <= b;){
            if (c !== a.prev && c !== a.next && Tc(e.x, e.y, a.x, a.y, f.x, f.y, c.x, c.y) && 0 <= sa1(c.prev, c, c.next)) return !1;
            c = c.prevZ;
            if (d !== a.prev && d !== a.next && Tc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && 0 <= sa1(d.prev, d, d.next)) return !1;
            d = d.nextZ;
        }
        for(; c && c.z >= l;){
            if (c !== a.prev && c !== a.next && Tc(e.x, e.y, a.x, a.y, f.x, f.y, c.x, c.y) && 0 <= sa1(c.prev, c, c.next)) return !1;
            c = c.prevZ;
        }
        for(; d && d.z <= b;){
            if (d !== a.prev && d !== a.next && Tc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && 0 <= sa1(d.prev, d, d.next)) return !1;
            d = d.nextZ;
        }
        return !0;
    }
    function mk(a, b) {
        return a.x - b.x;
    }
    function nk(a, b) {
        var c = b, d = a.x, e = a.y, f = -Infinity;
        do {
            if (e <= c.y && e >= c.next.y && c.next.y !== c.y) {
                var g = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
                if (g <= d && g > f) {
                    f = g;
                    if (g === d) {
                        if (e === c.y) return c;
                        if (e === c.next.y) return c.next;
                    }
                    var h = c.x < c.next.x ? c : c.next;
                }
            }
            c = c.next;
        }while (c !== b);
        if (!h) return null;
        if (d === f) return h.prev;
        b = h;
        g = h.x;
        var l = h.y, m = Infinity;
        for(c = h.next; c !== b;){
            if (d >= c.x && c.x >= g && d !== c.x && Tc(e < l ? d : f, e, g, l, e < l ? f : d, e, c.x, c.y)) {
                var q = Math.abs(e - c.y) / (d - c.x);
                (q < m || q === m && c.x > h.x) && ce(c, a) && (h = c, m = q);
            }
            c = c.next;
        }
        return h;
    }
    function ng(a, b, c, d, e) {
        a = 32767 * (a - c) * e;
        b = 32767 * (b - d) * e;
        a = (a | a << 8) & 16711935;
        a = (a | a << 4) & 252645135;
        a = (a | a << 2) & 858993459;
        b = (b | b << 8) & 16711935;
        b = (b | b << 4) & 252645135;
        b = (b | b << 2) & 858993459;
        return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1;
    }
    function ok(a) {
        var b = a, c = a;
        do {
            if (b.x < c.x || b.x === c.x && b.y < c.y) c = b;
            b = b.next;
        }while (b !== a);
        return c;
    }
    function Tc(a, b, c, d, e, f, g, h) {
        return 0 <= (e - g) * (b - h) - (a - g) * (f - h) && 0 <= (a - g) * (d - h) - (c - g) * (b - h) && 0 <= (c - g) * (f - h) - (e - g) * (d - h);
    }
    function sa1(a, b, c) {
        return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y);
    }
    function ec(a, b) {
        return a.x === b.x && a.y === b.y;
    }
    function Th(a, b, c, d) {
        return ec(a, c) && ec(b, d) || ec(a, d) && ec(c, b) ? !0 : 0 < sa1(a, b, c) !== 0 < sa1(a, b, d) && 0 < sa1(c, d, a) !== 0 < sa1(c, d, b);
    }
    function ce(a, b) {
        return 0 > sa1(a.prev, a, a.next) ? 0 <= sa1(a, b, a.next) && 0 <= sa1(a, a.prev, b) : 0 > sa1(a, b, a.prev) || 0 > sa1(a, a.next, b);
    }
    function Uh(a, b) {
        var c = new og(a.i, a.x, a.y), d = new og(b.i, b.x, b.y), e = a.next, f = b.prev;
        a.next = b;
        b.prev = a;
        c.next = e;
        e.prev = c;
        d.next = c;
        c.prev = d;
        f.next = d;
        d.prev = f;
        return d;
    }
    function Sh(a, b, c, d) {
        a = new og(a, b, c);
        d ? (a.next = d.next, a.prev = d, d.next.prev = a, d.next = a) : (a.prev = a, a.next = a);
        return a;
    }
    function $d(a) {
        a.next.prev = a.prev;
        a.prev.next = a.next;
        a.prevZ && (a.prevZ.nextZ = a.nextZ);
        a.nextZ && (a.nextZ.prevZ = a.prevZ);
    }
    function og(a, b, c) {
        this.i = a;
        this.x = b;
        this.y = c;
        this.nextZ = this.prevZ = this.z = this.next = this.prev = null;
        this.steiner = !1;
    }
    function Vh(a) {
        var b = a.length;
        2 < b && a[b - 1].equals(a[0]) && a.pop();
    }
    function Wh(a, b) {
        for(var c = 0; c < b.length; c++)a.push(b[c].x), a.push(b[c].y);
    }
    function fc(a, b) {
        F1.call(this);
        this.type = "ExtrudeGeometry";
        this.parameters = {
            shapes: a,
            options: b
        };
        this.fromBufferGeometry(new eb(a, b));
        this.mergeVertices();
    }
    function eb(a28, b25) {
        function c23(a29) {
            function c24(a, b, c) {
                b || console.error("THREE.ExtrudeGeometry: vec does not exist");
                return b.clone().multiplyScalar(c).add(a);
            }
            function g12(a, b, c) {
                var d = a.x - b.x;
                var e = a.y - b.y;
                var f = c.x - a.x;
                var g = c.y - a.y, h = d * d + e * e;
                if (Math.abs(d * g - e * f) > Number.EPSILON) {
                    var l = Math.sqrt(h), m = Math.sqrt(f * f + g * g);
                    h = b.x - e / l;
                    b = b.y + d / l;
                    g = ((c.x - g / m - h) * g - (c.y + f / m - b) * f) / (d * g - e * f);
                    f = h + d * g - a.x;
                    d = b + e * g - a.y;
                    e = f * f + d * d;
                    if (2 >= e) return new w1(f, d);
                    e = Math.sqrt(e / 2);
                } else a = !1, d > Number.EPSILON ? f > Number.EPSILON && (a = !0) : d < -Number.EPSILON ? f < -Number.EPSILON && (a = !0) : Math.sign(e) === Math.sign(g) && (a = !0), a ? (f = -e, e = Math.sqrt(h)) : (f = d, d = e, e = Math.sqrt(h / 2));
                return new w1(f / e, d / e);
            }
            function h9(a, b) {
                for(K = a.length; 0 <= --K;){
                    var c = K;
                    var f = K - 1;
                    0 > f && (f = a.length - 1);
                    var g, h = y + 2 * E;
                    for(g = 0; g < h; g++){
                        var l = Y * g, m = Y * (g + 1), q = b + f + l, k = b + f + m;
                        m = b + c + m;
                        p(b + c + l);
                        p(q);
                        p(m);
                        p(q);
                        p(k);
                        p(m);
                        l = e16.length / 3;
                        l = G.generateSideWallUV(d21, e16, l - 6, l - 3, l - 2, l - 1);
                        v(l[0]);
                        v(l[1]);
                        v(l[3]);
                        v(l[1]);
                        v(l[2]);
                        v(l[3]);
                    }
                }
            }
            function l8(a, b, c) {
                x.push(a);
                x.push(b);
                x.push(c);
            }
            function k6(a, b, c) {
                p(a);
                p(b);
                p(c);
                a = e16.length / 3;
                a = G.generateTopUV(d21, e16, a - 3, a - 2, a - 1);
                v(a[0]);
                v(a[1]);
                v(a[2]);
            }
            function p(a) {
                e16.push(x[3 * a]);
                e16.push(x[3 * a + 1]);
                e16.push(x[3 * a + 2]);
            }
            function v(a) {
                f16.push(a.x);
                f16.push(a.y);
            }
            var x = [], z = void 0 !== b25.curveSegments ? b25.curveSegments : 12, y = void 0 !== b25.steps ? b25.steps : 1, V = void 0 !== b25.depth ? b25.depth : 100, P = void 0 !== b25.bevelEnabled ? b25.bevelEnabled : !0, C = void 0 !== b25.bevelThickness ? b25.bevelThickness : 6, A = void 0 !== b25.bevelSize ? b25.bevelSize : C - 2, B = void 0 !== b25.bevelOffset ? b25.bevelOffset : 0, E = void 0 !== b25.bevelSegments ? b25.bevelSegments : 3, D = b25.extrudePath, G = void 0 !== b25.UVGenerator ? b25.UVGenerator : pk;
            void 0 !== b25.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), V = b25.amount);
            var F = !1;
            if (D) {
                var H = D.getSpacedPoints(y);
                F = !0;
                P = !1;
                var I = D.computeFrenetFrames(y, !1);
                var O = new n1;
                var T = new n1;
                var X = new n1;
            }
            P || (B = A = C = E = 0);
            var M;
            z = a29.extractPoints(z);
            a29 = z.shape;
            var N = z.holes;
            if (!pb.isClockWise(a29)) {
                a29 = a29.reverse();
                var ha = 0;
                for(M = N.length; ha < M; ha++){
                    var L = N[ha];
                    pb.isClockWise(L) && (N[ha] = L.reverse());
                }
            }
            var U = pb.triangulateShape(a29, N), W = a29;
            ha = 0;
            for(M = N.length; ha < M; ha++)L = N[ha], a29 = a29.concat(L);
            var Q, Y = a29.length, S, ca = U.length;
            z = [];
            var K = 0;
            var Z = W.length;
            var fa = Z - 1;
            for(Q = K + 1; K < Z; K++, fa++, Q++)fa === Z && (fa = 0), Q === Z && (Q = 0), z[K] = g12(W[K], W[fa], W[Q]);
            D = [];
            var ea = z.concat();
            ha = 0;
            for(M = N.length; ha < M; ha++){
                L = N[ha];
                var aa = [];
                K = 0;
                Z = L.length;
                fa = Z - 1;
                for(Q = K + 1; K < Z; K++, fa++, Q++)fa === Z && (fa = 0), Q === Z && (Q = 0), aa[K] = g12(L[K], L[fa], L[Q]);
                D.push(aa);
                ea = ea.concat(aa);
            }
            for(fa = 0; fa < E; fa++){
                Z = fa / E;
                var da = C * Math.cos(Z * Math.PI / 2);
                Q = A * Math.sin(Z * Math.PI / 2) + B;
                K = 0;
                for(Z = W.length; K < Z; K++){
                    var R = c24(W[K], z[K], Q);
                    l8(R.x, R.y, -da);
                }
                ha = 0;
                for(M = N.length; ha < M; ha++)for(L = N[ha], aa = D[ha], K = 0, Z = L.length; K < Z; K++)R = c24(L[K], aa[K], Q), l8(R.x, R.y, -da);
            }
            Q = A + B;
            for(K = 0; K < Y; K++)R = P ? c24(a29[K], ea[K], Q) : a29[K], F ? (T.copy(I.normals[0]).multiplyScalar(R.x), O.copy(I.binormals[0]).multiplyScalar(R.y), X.copy(H[0]).add(T).add(O), l8(X.x, X.y, X.z)) : l8(R.x, R.y, 0);
            for(Z = 1; Z <= y; Z++)for(K = 0; K < Y; K++)R = P ? c24(a29[K], ea[K], Q) : a29[K], F ? (T.copy(I.normals[Z]).multiplyScalar(R.x), O.copy(I.binormals[Z]).multiplyScalar(R.y), X.copy(H[Z]).add(T).add(O), l8(X.x, X.y, X.z)) : l8(R.x, R.y, V / y * Z);
            for(fa = E - 1; 0 <= fa; fa--){
                Z = fa / E;
                da = C * Math.cos(Z * Math.PI / 2);
                Q = A * Math.sin(Z * Math.PI / 2) + B;
                K = 0;
                for(Z = W.length; K < Z; K++)R = c24(W[K], z[K], Q), l8(R.x, R.y, V + da);
                ha = 0;
                for(M = N.length; ha < M; ha++)for(L = N[ha], aa = D[ha], K = 0, Z = L.length; K < Z; K++)R = c24(L[K], aa[K], Q), F ? l8(R.x, R.y + H[y - 1].y, H[y - 1].x + da) : l8(R.x, R.y, V + da);
            }
            (function() {
                var a = e16.length / 3;
                if (P) {
                    var b = 0 * Y;
                    for(K = 0; K < ca; K++)S = U[K], k6(S[2] + b, S[1] + b, S[0] + b);
                    b = Y * (y + 2 * E);
                    for(K = 0; K < ca; K++)S = U[K], k6(S[0] + b, S[1] + b, S[2] + b);
                } else {
                    for(K = 0; K < ca; K++)S = U[K], k6(S[2], S[1], S[0]);
                    for(K = 0; K < ca; K++)S = U[K], k6(S[0] + Y * y, S[1] + Y * y, S[2] + Y * y);
                }
                d21.addGroup(a, e16.length / 3 - a, 0);
            })();
            (function() {
                var a = e16.length / 3, b = 0;
                h9(W, b);
                b += W.length;
                ha = 0;
                for(M = N.length; ha < M; ha++)L = N[ha], h9(L, b), b += L.length;
                d21.addGroup(a, e16.length / 3 - a, 1);
            })();
        }
        E1.call(this);
        this.type = "ExtrudeBufferGeometry";
        this.parameters = {
            shapes: a28,
            options: b25
        };
        a28 = Array.isArray(a28) ? a28 : [
            a28
        ];
        for(var d21 = this, e16 = [], f16 = [], g11 = 0, h8 = a28.length; g11 < h8; g11++)c23(a28[g11]);
        this.addAttribute("position", new A1(e16, 3));
        this.addAttribute("uv", new A1(f16, 2));
        this.computeVertexNormals();
    }
    function Xh(a, b, c) {
        c.shapes = [];
        if (Array.isArray(a)) for(var d = 0, e = a.length; d < e; d++)c.shapes.push(a[d].uuid);
        else c.shapes.push(a.uuid);
        void 0 !== b.extrudePath && (c.options.extrudePath = b.extrudePath.toJSON());
        return c;
    }
    function de(a, b) {
        F1.call(this);
        this.type = "TextGeometry";
        this.parameters = {
            text: a,
            parameters: b
        };
        this.fromBufferGeometry(new Uc(a, b));
        this.mergeVertices();
    }
    function Uc(a, b) {
        b = b || {};
        var c = b.font;
        if (!c || !c.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new F1;
        a = c.generateShapes(a, b.size);
        b.depth = void 0 !== b.height ? b.height : 50;
        void 0 === b.bevelThickness && (b.bevelThickness = 10);
        void 0 === b.bevelSize && (b.bevelSize = 8);
        void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
        eb.call(this, a, b);
        this.type = "TextBufferGeometry";
    }
    function ee(a, b, c, d, e, f, g) {
        F1.call(this);
        this.type = "SphereGeometry";
        this.parameters = {
            radius: a,
            widthSegments: b,
            heightSegments: c,
            phiStart: d,
            phiLength: e,
            thetaStart: f,
            thetaLength: g
        };
        this.fromBufferGeometry(new Ib(a, b, c, d, e, f, g));
        this.mergeVertices();
    }
    function Ib(a, b, c, d, e, f, g) {
        E1.call(this);
        this.type = "SphereBufferGeometry";
        this.parameters = {
            radius: a,
            widthSegments: b,
            heightSegments: c,
            phiStart: d,
            phiLength: e,
            thetaStart: f,
            thetaLength: g
        };
        a = a || 1;
        b = Math.max(3, Math.floor(b) || 8);
        c = Math.max(2, Math.floor(c) || 6);
        d = void 0 !== d ? d : 0;
        e = void 0 !== e ? e : 2 * Math.PI;
        f = void 0 !== f ? f : 0;
        g = void 0 !== g ? g : Math.PI;
        var h = Math.min(f + g, Math.PI), l, m, q = 0, k = [], t = new n1, r = new n1, p = [], v = [], x = [], z = [];
        for(m = 0; m <= c; m++){
            var y = [], w = m / c, P = 0;
            0 == m && 0 == f ? P = .5 / b : m == c && h == Math.PI && (P = -0.5 / b);
            for(l = 0; l <= b; l++){
                var C = l / b;
                t.x = -a * Math.cos(d + C * e) * Math.sin(f + w * g);
                t.y = a * Math.cos(f + w * g);
                t.z = a * Math.sin(d + C * e) * Math.sin(f + w * g);
                v.push(t.x, t.y, t.z);
                r.copy(t).normalize();
                x.push(r.x, r.y, r.z);
                z.push(C + P, 1 - w);
                y.push(q++);
            }
            k.push(y);
        }
        for(m = 0; m < c; m++)for(l = 0; l < b; l++)a = k[m][l + 1], d = k[m][l], e = k[m + 1][l], g = k[m + 1][l + 1], (0 !== m || 0 < f) && p.push(a, d, g), (m !== c - 1 || h < Math.PI) && p.push(d, e, g);
        this.setIndex(p);
        this.addAttribute("position", new A1(v, 3));
        this.addAttribute("normal", new A1(x, 3));
        this.addAttribute("uv", new A1(z, 2));
    }
    function fe(a, b, c, d, e, f) {
        F1.call(this);
        this.type = "RingGeometry";
        this.parameters = {
            innerRadius: a,
            outerRadius: b,
            thetaSegments: c,
            phiSegments: d,
            thetaStart: e,
            thetaLength: f
        };
        this.fromBufferGeometry(new Vc(a, b, c, d, e, f));
        this.mergeVertices();
    }
    function Vc(a, b, c, d, e, f) {
        E1.call(this);
        this.type = "RingBufferGeometry";
        this.parameters = {
            innerRadius: a,
            outerRadius: b,
            thetaSegments: c,
            phiSegments: d,
            thetaStart: e,
            thetaLength: f
        };
        a = a || .5;
        b = b || 1;
        e = void 0 !== e ? e : 0;
        f = void 0 !== f ? f : 2 * Math.PI;
        c = void 0 !== c ? Math.max(3, c) : 8;
        d = void 0 !== d ? Math.max(1, d) : 1;
        var g = [], h = [], l = [], m = [], q = a, k = (b - a) / d, t = new n1, r = new w1, p, v;
        for(p = 0; p <= d; p++){
            for(v = 0; v <= c; v++)a = e + v / c * f, t.x = q * Math.cos(a), t.y = q * Math.sin(a), h.push(t.x, t.y, t.z), l.push(0, 0, 1), r.x = (t.x / b + 1) / 2, r.y = (t.y / b + 1) / 2, m.push(r.x, r.y);
            q += k;
        }
        for(p = 0; p < d; p++)for(b = p * (c + 1), v = 0; v < c; v++)a = v + b, e = a + c + 1, f = a + c + 2, q = a + 1, g.push(a, e, q), g.push(e, f, q);
        this.setIndex(g);
        this.addAttribute("position", new A1(h, 3));
        this.addAttribute("normal", new A1(l, 3));
        this.addAttribute("uv", new A1(m, 2));
    }
    function ge(a, b, c, d) {
        F1.call(this);
        this.type = "LatheGeometry";
        this.parameters = {
            points: a,
            segments: b,
            phiStart: c,
            phiLength: d
        };
        this.fromBufferGeometry(new Wc(a, b, c, d));
        this.mergeVertices();
    }
    function Wc(a, b, c, d) {
        E1.call(this);
        this.type = "LatheBufferGeometry";
        this.parameters = {
            points: a,
            segments: b,
            phiStart: c,
            phiLength: d
        };
        b = Math.floor(b) || 12;
        c = c || 0;
        d = d || 2 * Math.PI;
        d = L1.clamp(d, 0, 2 * Math.PI);
        var e = [], f = [], g = [], h = 1 / b, l = new n1, m = new w1, q;
        for(q = 0; q <= b; q++){
            var k = c + q * h * d;
            var t = Math.sin(k), r = Math.cos(k);
            for(k = 0; k <= a.length - 1; k++)l.x = a[k].x * t, l.y = a[k].y, l.z = a[k].x * r, f.push(l.x, l.y, l.z), m.x = q / b, m.y = k / (a.length - 1), g.push(m.x, m.y);
        }
        for(q = 0; q < b; q++)for(k = 0; k < a.length - 1; k++)c = k + q * a.length, h = c + a.length, l = c + a.length + 1, m = c + 1, e.push(c, h, m), e.push(h, l, m);
        this.setIndex(e);
        this.addAttribute("position", new A1(f, 3));
        this.addAttribute("uv", new A1(g, 2));
        this.computeVertexNormals();
        if (d === 2 * Math.PI) for(d = this.attributes.normal.array, e = new n1, f = new n1, g = new n1, c = b * a.length * 3, k = q = 0; q < a.length; q++, k += 3)e.x = d[k + 0], e.y = d[k + 1], e.z = d[k + 2], f.x = d[c + k + 0], f.y = d[c + k + 1], f.z = d[c + k + 2], g.addVectors(e, f).normalize(), d[k + 0] = d[c + k + 0] = g.x, d[k + 1] = d[c + k + 1] = g.y, d[k + 2] = d[c + k + 2] = g.z;
    }
    function gc(a, b) {
        F1.call(this);
        this.type = "ShapeGeometry";
        "object" === typeof b && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), b = b.curveSegments);
        this.parameters = {
            shapes: a,
            curveSegments: b
        };
        this.fromBufferGeometry(new hc(a, b));
        this.mergeVertices();
    }
    function hc(a30, b) {
        function c25(a) {
            var c, h = e.length / 3;
            a = a.extractPoints(b);
            var m = a.shape, k = a.holes;
            !1 === pb.isClockWise(m) && (m = m.reverse());
            a = 0;
            for(c = k.length; a < c; a++){
                var q = k[a];
                !0 === pb.isClockWise(q) && (k[a] = q.reverse());
            }
            var n = pb.triangulateShape(m, k);
            a = 0;
            for(c = k.length; a < c; a++)q = k[a], m = m.concat(q);
            a = 0;
            for(c = m.length; a < c; a++)q = m[a], e.push(q.x, q.y, 0), f.push(0, 0, 1), g.push(q.x, q.y);
            a = 0;
            for(c = n.length; a < c; a++)m = n[a], d.push(m[0] + h, m[1] + h, m[2] + h), l += 3;
        }
        E1.call(this);
        this.type = "ShapeBufferGeometry";
        this.parameters = {
            shapes: a30,
            curveSegments: b
        };
        b = b || 12;
        var d = [], e = [], f = [], g = [], h10 = 0, l = 0;
        if (!1 === Array.isArray(a30)) c25(a30);
        else for(var m7 = 0; m7 < a30.length; m7++)c25(a30[m7]), this.addGroup(h10, l, m7), h10 += l, l = 0;
        this.setIndex(d);
        this.addAttribute("position", new A1(e, 3));
        this.addAttribute("normal", new A1(f, 3));
        this.addAttribute("uv", new A1(g, 2));
    }
    function Yh(a, b) {
        b.shapes = [];
        if (Array.isArray(a)) for(var c = 0, d = a.length; c < d; c++)b.shapes.push(a[c].uuid);
        else b.shapes.push(a.uuid);
        return b;
    }
    function Xc(a, b) {
        E1.call(this);
        this.type = "EdgesGeometry";
        this.parameters = {
            thresholdAngle: b
        };
        var c = [];
        b = Math.cos(L1.DEG2RAD * (void 0 !== b ? b : 1));
        var d = [
            0,
            0
        ], e = {}, f = [
            "a",
            "b",
            "c"
        ];
        if (a.isBufferGeometry) {
            var g = new F1;
            g.fromBufferGeometry(a);
        } else g = a.clone();
        g.mergeVertices();
        g.computeFaceNormals();
        a = g.vertices;
        g = g.faces;
        for(var h = 0, l = g.length; h < l; h++)for(var m = g[h], k = 0; 3 > k; k++){
            var u = m[f[k]];
            var n = m[f[(k + 1) % 3]];
            d[0] = Math.min(u, n);
            d[1] = Math.max(u, n);
            u = d[0] + "," + d[1];
            void 0 === e[u] ? e[u] = {
                index1: d[0],
                index2: d[1],
                face1: h,
                face2: void 0
            } : e[u].face2 = h;
        }
        for(u in e)if (d = e[u], void 0 === d.face2 || g[d.face1].normal.dot(g[d.face2].normal) <= b) f = a[d.index1], c.push(f.x, f.y, f.z), f = a[d.index2], c.push(f.x, f.y, f.z);
        this.addAttribute("position", new A1(c, 3));
    }
    function ic(a, b, c, d, e, f, g, h) {
        F1.call(this);
        this.type = "CylinderGeometry";
        this.parameters = {
            radiusTop: a,
            radiusBottom: b,
            height: c,
            radialSegments: d,
            heightSegments: e,
            openEnded: f,
            thetaStart: g,
            thetaLength: h
        };
        this.fromBufferGeometry(new qb(a, b, c, d, e, f, g, h));
        this.mergeVertices();
    }
    function qb(a, b, c26, d, e17, f17, g, h) {
        function l9(c) {
            var e, f = new w1, l = new n1, q = 0, v = !0 === c ? a : b, y = !0 === c ? 1 : -1;
            var A = p;
            for(e = 1; e <= d; e++)u.push(0, x * y, 0), t.push(0, y, 0), r.push(.5, .5), p++;
            var B = p;
            for(e = 0; e <= d; e++){
                var E = e / d * h + g, D = Math.cos(E);
                E = Math.sin(E);
                l.x = v * E;
                l.y = x * y;
                l.z = v * D;
                u.push(l.x, l.y, l.z);
                t.push(0, y, 0);
                f.x = .5 * D + .5;
                f.y = .5 * E * y + .5;
                r.push(f.x, f.y);
                p++;
            }
            for(e = 0; e < d; e++)f = A + e, l = B + e, !0 === c ? k.push(l, l + 1, f) : k.push(l + 1, l, f), q += 3;
            m.addGroup(z, q, !0 === c ? 1 : 2);
            z += q;
        }
        E1.call(this);
        this.type = "CylinderBufferGeometry";
        this.parameters = {
            radiusTop: a,
            radiusBottom: b,
            height: c26,
            radialSegments: d,
            heightSegments: e17,
            openEnded: f17,
            thetaStart: g,
            thetaLength: h
        };
        var m = this;
        a = void 0 !== a ? a : 1;
        b = void 0 !== b ? b : 1;
        c26 = c26 || 1;
        d = Math.floor(d) || 8;
        e17 = Math.floor(e17) || 1;
        f17 = void 0 !== f17 ? f17 : !1;
        g = void 0 !== g ? g : 0;
        h = void 0 !== h ? h : 2 * Math.PI;
        var k = [], u = [], t = [], r = [], p = 0, v4 = [], x = c26 / 2, z = 0;
        (function() {
            var f, l, q = new n1, w = new n1, A = 0, B = (b - a) / c26;
            for(l = 0; l <= e17; l++){
                var E = [], D = l / e17, G = D * (b - a) + a;
                for(f = 0; f <= d; f++){
                    var F = f / d, H = F * h + g, I = Math.sin(H);
                    H = Math.cos(H);
                    w.x = G * I;
                    w.y = -D * c26 + x;
                    w.z = G * H;
                    u.push(w.x, w.y, w.z);
                    q.set(I, B, H).normalize();
                    t.push(q.x, q.y, q.z);
                    r.push(F, 1 - D);
                    E.push(p++);
                }
                v4.push(E);
            }
            for(f = 0; f < d; f++)for(l = 0; l < e17; l++)q = v4[l + 1][f], w = v4[l + 1][f + 1], B = v4[l][f + 1], k.push(v4[l][f], q, B), k.push(q, w, B), A += 6;
            m.addGroup(z, A, 0);
            z += A;
        })();
        !1 === f17 && (0 < a && l9(!0), 0 < b && l9(!1));
        this.setIndex(k);
        this.addAttribute("position", new A1(u, 3));
        this.addAttribute("normal", new A1(t, 3));
        this.addAttribute("uv", new A1(r, 2));
    }
    function he(a, b, c, d, e, f, g) {
        ic.call(this, 0, a, b, c, d, e, f, g);
        this.type = "ConeGeometry";
        this.parameters = {
            radius: a,
            height: b,
            radialSegments: c,
            heightSegments: d,
            openEnded: e,
            thetaStart: f,
            thetaLength: g
        };
    }
    function ie(a, b, c, d, e, f, g) {
        qb.call(this, 0, a, b, c, d, e, f, g);
        this.type = "ConeBufferGeometry";
        this.parameters = {
            radius: a,
            height: b,
            radialSegments: c,
            heightSegments: d,
            openEnded: e,
            thetaStart: f,
            thetaLength: g
        };
    }
    function je(a, b, c, d) {
        F1.call(this);
        this.type = "CircleGeometry";
        this.parameters = {
            radius: a,
            segments: b,
            thetaStart: c,
            thetaLength: d
        };
        this.fromBufferGeometry(new Yc(a, b, c, d));
        this.mergeVertices();
    }
    function Yc(a, b, c, d) {
        E1.call(this);
        this.type = "CircleBufferGeometry";
        this.parameters = {
            radius: a,
            segments: b,
            thetaStart: c,
            thetaLength: d
        };
        a = a || 1;
        b = void 0 !== b ? Math.max(3, b) : 8;
        c = void 0 !== c ? c : 0;
        d = void 0 !== d ? d : 2 * Math.PI;
        var e = [], f = [], g = [], h = [], l, m = new n1, k = new w1;
        f.push(0, 0, 0);
        g.push(0, 0, 1);
        h.push(.5, .5);
        var u = 0;
        for(l = 3; u <= b; u++, l += 3){
            var t = c + u / b * d;
            m.x = a * Math.cos(t);
            m.y = a * Math.sin(t);
            f.push(m.x, m.y, m.z);
            g.push(0, 0, 1);
            k.x = (f[l] / a + 1) / 2;
            k.y = (f[l + 1] / a + 1) / 2;
            h.push(k.x, k.y);
        }
        for(l = 1; l <= b; l++)e.push(l, l + 1, 0);
        this.setIndex(e);
        this.addAttribute("position", new A1(f, 3));
        this.addAttribute("normal", new A1(g, 3));
        this.addAttribute("uv", new A1(h, 2));
    }
    function jc(a) {
        M1.call(this);
        this.type = "ShadowMaterial";
        this.color = new H1(0);
        this.transparent = !0;
        this.setValues(a);
    }
    function Zc(a) {
        ma1.call(this, a);
        this.type = "RawShaderMaterial";
    }
    function fb(a) {
        M1.call(this);
        this.defines = {
            STANDARD: ""
        };
        this.type = "MeshStandardMaterial";
        this.color = new H1(16777215);
        this.metalness = this.roughness = .5;
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new H1(0);
        this.emissiveIntensity = 1;
        this.bumpMap = this.emissiveMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new w1(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null;
        this.envMapIntensity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a);
    }
    function kc(a) {
        fb.call(this);
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        };
        this.type = "MeshPhysicalMaterial";
        this.reflectivity = .5;
        this.clearcoatRoughness = this.clearcoat = 0;
        this.sheen = null;
        this.clearcoatNormalScale = new w1(1, 1);
        this.clearcoatNormalMap = null;
        this.transparency = 0;
        this.setValues(a);
    }
    function Ra(a) {
        M1.call(this);
        this.type = "MeshPhongMaterial";
        this.color = new H1(16777215);
        this.specular = new H1(1118481);
        this.shininess = 30;
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new H1(0);
        this.emissiveIntensity = 1;
        this.bumpMap = this.emissiveMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new w1(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.envMap = this.alphaMap = this.specularMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a);
    }
    function lc(a) {
        Ra.call(this);
        this.defines = {
            TOON: ""
        };
        this.type = "MeshToonMaterial";
        this.gradientMap = null;
        this.setValues(a);
    }
    function mc(a) {
        M1.call(this);
        this.type = "MeshNormalMaterial";
        this.bumpMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new w1(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.morphNormals = this.morphTargets = this.skinning = this.fog = !1;
        this.setValues(a);
    }
    function nc(a) {
        M1.call(this);
        this.type = "MeshLambertMaterial";
        this.color = new H1(16777215);
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new H1(0);
        this.emissiveIntensity = 1;
        this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a);
    }
    function oc(a) {
        M1.call(this);
        this.defines = {
            MATCAP: ""
        };
        this.type = "MeshMatcapMaterial";
        this.color = new H1(16777215);
        this.bumpMap = this.map = this.matcap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new w1(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.alphaMap = null;
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a);
    }
    function pc(a) {
        Q1.call(this);
        this.type = "LineDashedMaterial";
        this.scale = 1;
        this.dashSize = 3;
        this.gapSize = 1;
        this.setValues(a);
    }
    function Ia(a, b, c, d) {
        this.parameterPositions = a;
        this._cachedIndex = 0;
        this.resultBuffer = void 0 !== d ? d : new b.constructor(c);
        this.sampleValues = b;
        this.valueSize = c;
    }
    function Ne(a, b, c, d) {
        Ia.call(this, a, b, c, d);
        this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0;
    }
    function ke(a, b, c, d) {
        Ia.call(this, a, b, c, d);
    }
    function Oe(a, b, c, d) {
        Ia.call(this, a, b, c, d);
    }
    function oa1(a, b, c, d) {
        if (void 0 === a) throw Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === b || 0 === b.length) throw Error("THREE.KeyframeTrack: no keyframes in track named " + a);
        this.name = a;
        this.times = pa1.convertArray(b, this.TimeBufferType);
        this.values = pa1.convertArray(c, this.ValueBufferType);
        this.setInterpolation(d || this.DefaultInterpolation);
    }
    function Pe(a, b, c) {
        oa1.call(this, a, b, c);
    }
    function Qe(a, b, c, d) {
        oa1.call(this, a, b, c, d);
    }
    function $c(a, b, c, d) {
        oa1.call(this, a, b, c, d);
    }
    function Re(a, b, c, d) {
        Ia.call(this, a, b, c, d);
    }
    function le(a, b, c, d) {
        oa1.call(this, a, b, c, d);
    }
    function Se(a, b, c, d) {
        oa1.call(this, a, b, c, d);
    }
    function ad(a, b, c, d) {
        oa1.call(this, a, b, c, d);
    }
    function Ma(a, b, c) {
        this.name = a;
        this.tracks = c;
        this.duration = void 0 !== b ? b : -1;
        this.uuid = L1.generateUUID();
        0 > this.duration && this.resetDuration();
    }
    function qk(a) {
        switch(a.toLowerCase()){
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return $c;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return ad;
            case "color":
                return Qe;
            case "quaternion":
                return le;
            case "bool":
            case "boolean":
                return Pe;
            case "string":
                return Se;
        }
        throw Error("THREE.KeyframeTrack: Unsupported typeName: " + a);
    }
    function rk(a) {
        if (void 0 === a.type) throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
        var b = qk(a.type);
        if (void 0 === a.times) {
            var c = [], d = [];
            pa1.flattenJSON(a.keys, c, d, "value");
            a.times = c;
            a.values = d;
        }
        return void 0 !== b.parse ? b.parse(a) : new b(a.name, a.times, a.values, a.interpolation);
    }
    function pg(a31, b26, c27) {
        var d22 = this, e = !1, f = 0, g = 0, h = void 0, l = [];
        this.onStart = void 0;
        this.onLoad = a31;
        this.onProgress = b26;
        this.onError = c27;
        this.itemStart = function(a) {
            g++;
            if (!1 === e && void 0 !== d22.onStart) d22.onStart(a, f, g);
            e = !0;
        };
        this.itemEnd = function(a) {
            f++;
            if (void 0 !== d22.onProgress) d22.onProgress(a, f, g);
            if (f === g && (e = !1, void 0 !== d22.onLoad)) d22.onLoad();
        };
        this.itemError = function(a) {
            if (void 0 !== d22.onError) d22.onError(a);
        };
        this.resolveURL = function(a) {
            return h ? h(a) : a;
        };
        this.setURLModifier = function(a) {
            h = a;
            return this;
        };
        this.addHandler = function(a, b) {
            l.push(a, b);
            return this;
        };
        this.removeHandler = function(a) {
            a = l.indexOf(a);
            -1 !== a && l.splice(a, 2);
            return this;
        };
        this.getHandler = function(a) {
            for(var b = 0, c = l.length; b < c; b += 2){
                var d = l[b + 1];
                if (l[b].test(a)) return d;
            }
            return null;
        };
    }
    function S1(a) {
        this.manager = void 0 !== a ? a : Zh;
        this.crossOrigin = "anonymous";
        this.resourcePath = this.path = "";
    }
    function Na(a) {
        S1.call(this, a);
    }
    function qg(a) {
        S1.call(this, a);
    }
    function rg(a) {
        S1.call(this, a);
    }
    function Te(a) {
        S1.call(this, a);
    }
    function bd(a) {
        S1.call(this, a);
    }
    function Ue(a) {
        S1.call(this, a);
    }
    function Ve(a) {
        S1.call(this, a);
    }
    function D1() {
        this.type = "Curve";
        this.arcLengthDivisions = 200;
    }
    function Ja(a, b, c, d, e, f, g, h) {
        D1.call(this);
        this.type = "EllipseCurve";
        this.aX = a || 0;
        this.aY = b || 0;
        this.xRadius = c || 1;
        this.yRadius = d || 1;
        this.aStartAngle = e || 0;
        this.aEndAngle = f || 2 * Math.PI;
        this.aClockwise = g || !1;
        this.aRotation = h || 0;
    }
    function cd(a, b, c, d, e, f) {
        Ja.call(this, a, b, c, c, d, e, f);
        this.type = "ArcCurve";
    }
    function sg() {
        var a = 0, b = 0, c = 0, d = 0;
        return {
            initCatmullRom: function(e, f, g, h, l) {
                e = l * (g - e);
                h = l * (h - f);
                a = f;
                b = e;
                c = -3 * f + 3 * g - 2 * e - h;
                d = 2 * f - 2 * g + e + h;
            },
            initNonuniformCatmullRom: function(e, f, g, h, l, m, k) {
                e = ((f - e) / l - (g - e) / (l + m) + (g - f) / m) * m;
                h = ((g - f) / m - (h - f) / (m + k) + (h - g) / k) * m;
                a = f;
                b = e;
                c = -3 * f + 3 * g - 2 * e - h;
                d = 2 * f - 2 * g + e + h;
            },
            calc: function(e) {
                var f = e * e;
                return a + b * e + c * f + d * f * e;
            }
        };
    }
    function ya1(a, b, c, d) {
        D1.call(this);
        this.type = "CatmullRomCurve3";
        this.points = a || [];
        this.closed = b || !1;
        this.curveType = c || "centripetal";
        this.tension = d || .5;
    }
    function $h(a, b, c, d, e) {
        b = .5 * (d - b);
        e = .5 * (e - c);
        var f = a * a;
        return (2 * c - 2 * d + b + e) * a * f + (-3 * c + 3 * d - 2 * b - e) * f + b * a + c;
    }
    function me(a, b, c, d) {
        var e = 1 - a;
        return e * e * b + 2 * (1 - a) * a * c + a * a * d;
    }
    function ne(a, b, c, d, e) {
        var f = 1 - a, g = 1 - a;
        return f * f * f * b + 3 * g * g * a * c + 3 * (1 - a) * a * a * d + a * a * a * e;
    }
    function Sa(a, b, c, d) {
        D1.call(this);
        this.type = "CubicBezierCurve";
        this.v0 = a || new w1;
        this.v1 = b || new w1;
        this.v2 = c || new w1;
        this.v3 = d || new w1;
    }
    function gb(a, b, c, d) {
        D1.call(this);
        this.type = "CubicBezierCurve3";
        this.v0 = a || new n1;
        this.v1 = b || new n1;
        this.v2 = c || new n1;
        this.v3 = d || new n1;
    }
    function za1(a, b) {
        D1.call(this);
        this.type = "LineCurve";
        this.v1 = a || new w1;
        this.v2 = b || new w1;
    }
    function Ta(a, b) {
        D1.call(this);
        this.type = "LineCurve3";
        this.v1 = a || new n1;
        this.v2 = b || new n1;
    }
    function Ua(a, b, c) {
        D1.call(this);
        this.type = "QuadraticBezierCurve";
        this.v0 = a || new w1;
        this.v1 = b || new w1;
        this.v2 = c || new w1;
    }
    function hb(a, b, c) {
        D1.call(this);
        this.type = "QuadraticBezierCurve3";
        this.v0 = a || new n1;
        this.v1 = b || new n1;
        this.v2 = c || new n1;
    }
    function Va(a) {
        D1.call(this);
        this.type = "SplineCurve";
        this.points = a || [];
    }
    function rb() {
        D1.call(this);
        this.type = "CurvePath";
        this.curves = [];
        this.autoClose = !1;
    }
    function Wa(a) {
        rb.call(this);
        this.type = "Path";
        this.currentPoint = new w1;
        a && this.setFromPoints(a);
    }
    function Jb(a) {
        Wa.call(this, a);
        this.uuid = L1.generateUUID();
        this.type = "Shape";
        this.holes = [];
    }
    function da1(a, b) {
        B1.call(this);
        this.type = "Light";
        this.color = new H1(a);
        this.intensity = void 0 !== b ? b : 1;
        this.receiveShadow = void 0;
    }
    function We(a, b, c) {
        da1.call(this, a, c);
        this.type = "HemisphereLight";
        this.castShadow = void 0;
        this.position.copy(B1.DefaultUp);
        this.updateMatrix();
        this.groundColor = new H1(b);
    }
    function ib(a) {
        this.camera = a;
        this.bias = 0;
        this.radius = 1;
        this.mapSize = new w1(512, 512);
        this.mapPass = this.map = null;
        this.matrix = new U1;
        this._frustum = new Ed;
        this._frameExtents = new w1(1, 1);
        this._viewportCount = 1;
        this._viewports = [
            new aa1(0, 0, 1, 1)
        ];
    }
    function Xe() {
        ib.call(this, new na1(50, 1, .5, 500));
    }
    function Ye(a32, b, c, d, e, f) {
        da1.call(this, a32, b);
        this.type = "SpotLight";
        this.position.copy(B1.DefaultUp);
        this.updateMatrix();
        this.target = new B1;
        Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI;
            },
            set: function(a) {
                this.intensity = a / Math.PI;
            }
        });
        this.distance = void 0 !== c ? c : 0;
        this.angle = void 0 !== d ? d : Math.PI / 3;
        this.penumbra = void 0 !== e ? e : 0;
        this.decay = void 0 !== f ? f : 1;
        this.shadow = new Xe;
    }
    function tg() {
        ib.call(this, new na1(90, 1, .5, 500));
        this._frameExtents = new w1(4, 2);
        this._viewportCount = 6;
        this._viewports = [
            new aa1(2, 1, 1, 1),
            new aa1(0, 1, 1, 1),
            new aa1(3, 1, 1, 1),
            new aa1(1, 1, 1, 1),
            new aa1(3, 0, 1, 1),
            new aa1(1, 0, 1, 1)
        ];
        this._cubeDirections = [
            new n1(1, 0, 0),
            new n1(-1, 0, 0),
            new n1(0, 0, 1),
            new n1(0, 0, -1),
            new n1(0, 1, 0),
            new n1(0, -1, 0)
        ];
        this._cubeUps = [
            new n1(0, 1, 0),
            new n1(0, 1, 0),
            new n1(0, 1, 0),
            new n1(0, 1, 0),
            new n1(0, 0, 1),
            new n1(0, 0, -1)
        ];
    }
    function Ze(a33, b, c, d) {
        da1.call(this, a33, b);
        this.type = "PointLight";
        Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI;
            },
            set: function(a) {
                this.intensity = a / (4 * Math.PI);
            }
        });
        this.distance = void 0 !== c ? c : 0;
        this.decay = void 0 !== d ? d : 1;
        this.shadow = new tg;
    }
    function oe(a, b, c, d, e, f) {
        bb.call(this);
        this.type = "OrthographicCamera";
        this.zoom = 1;
        this.view = null;
        this.left = void 0 !== a ? a : -1;
        this.right = void 0 !== b ? b : 1;
        this.top = void 0 !== c ? c : 1;
        this.bottom = void 0 !== d ? d : -1;
        this.near = void 0 !== e ? e : .1;
        this.far = void 0 !== f ? f : 2E3;
        this.updateProjectionMatrix();
    }
    function $e() {
        ib.call(this, new oe(-5, 5, 5, -5, .5, 500));
    }
    function af(a, b) {
        da1.call(this, a, b);
        this.type = "DirectionalLight";
        this.position.copy(B1.DefaultUp);
        this.updateMatrix();
        this.target = new B1;
        this.shadow = new $e;
    }
    function bf(a, b) {
        da1.call(this, a, b);
        this.type = "AmbientLight";
        this.castShadow = void 0;
    }
    function cf(a, b, c, d) {
        da1.call(this, a, b);
        this.type = "RectAreaLight";
        this.width = void 0 !== c ? c : 10;
        this.height = void 0 !== d ? d : 10;
    }
    function df(a) {
        S1.call(this, a);
        this.textures = {};
    }
    function ef() {
        E1.call(this);
        this.type = "InstancedBufferGeometry";
        this.maxInstancedCount = void 0;
    }
    function ff(a, b, c, d) {
        "number" === typeof c && (d = c, c = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));
        O1.call(this, a, b, c);
        this.meshPerAttribute = d || 1;
    }
    function gf(a) {
        S1.call(this, a);
    }
    function hf(a) {
        S1.call(this, a);
    }
    function ug(a) {
        "undefined" === typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
        "undefined" === typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
        S1.call(this, a);
        this.options = void 0;
    }
    function vg() {
        this.type = "ShapePath";
        this.color = new H1;
        this.subPaths = [];
        this.currentPath = null;
    }
    function wg(a) {
        this.type = "Font";
        this.data = a;
    }
    function xg(a) {
        S1.call(this, a);
    }
    function jf(a) {
        S1.call(this, a);
    }
    function kf() {
        this.coefficients = [];
        for(var a = 0; 9 > a; a++)this.coefficients.push(new n1);
    }
    function Xa(a, b) {
        da1.call(this, void 0, b);
        this.sh = void 0 !== a ? a : new kf;
    }
    function yg(a, b, c) {
        Xa.call(this, void 0, c);
        a = (new H1).set(a);
        c = (new H1).set(b);
        b = new n1(a.r, a.g, a.b);
        a = new n1(c.r, c.g, c.b);
        c = Math.sqrt(Math.PI);
        var d = c * Math.sqrt(.75);
        this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c);
        this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d);
    }
    function zg(a, b) {
        Xa.call(this, void 0, b);
        a = (new H1).set(a);
        this.sh.coefficients[0].set(a.r, a.g, a.b).multiplyScalar(2 * Math.sqrt(Math.PI));
    }
    function ai() {
        this.type = "StereoCamera";
        this.aspect = 1;
        this.eyeSep = .064;
        this.cameraL = new na1;
        this.cameraL.layers.enable(1);
        this.cameraL.matrixAutoUpdate = !1;
        this.cameraR = new na1;
        this.cameraR.layers.enable(2);
        this.cameraR.matrixAutoUpdate = !1;
        this._cache = {
            focus: null,
            fov: null,
            aspect: null,
            near: null,
            far: null,
            zoom: null,
            eyeSep: null
        };
    }
    function Ag(a) {
        this.autoStart = void 0 !== a ? a : !0;
        this.elapsedTime = this.oldTime = this.startTime = 0;
        this.running = !1;
    }
    function Bg() {
        B1.call(this);
        this.type = "AudioListener";
        this.context = Cg.getContext();
        this.gain = this.context.createGain();
        this.gain.connect(this.context.destination);
        this.filter = null;
        this.timeDelta = 0;
        this._clock = new Ag;
    }
    function dd(a) {
        B1.call(this);
        this.type = "Audio";
        this.listener = a;
        this.context = a.context;
        this.gain = this.context.createGain();
        this.gain.connect(a.getInput());
        this.autoplay = !1;
        this.buffer = null;
        this.detune = 0;
        this.loop = !1;
        this.offset = this.startTime = 0;
        this.duration = void 0;
        this.playbackRate = 1;
        this.isPlaying = !1;
        this.hasPlaybackControl = !0;
        this.sourceType = "empty";
        this.filters = [];
    }
    function Dg(a) {
        dd.call(this, a);
        this.panner = this.context.createPanner();
        this.panner.panningModel = "HRTF";
        this.panner.connect(this.gain);
    }
    function Eg(a, b) {
        this.analyser = a.context.createAnalyser();
        this.analyser.fftSize = void 0 !== b ? b : 2048;
        this.data = new Uint8Array(this.analyser.frequencyBinCount);
        a.getOutput().connect(this.analyser);
    }
    function Fg(a, b, c) {
        this.binding = a;
        this.valueSize = c;
        a = Float64Array;
        switch(b){
            case "quaternion":
                b = this._slerp;
                break;
            case "string":
            case "bool":
                a = Array;
                b = this._select;
                break;
            default:
                b = this._lerp;
        }
        this.buffer = new a(4 * c);
        this._mixBufferRegion = b;
        this.referenceCount = this.useCount = this.cumulativeWeight = 0;
    }
    function bi(a, b, c) {
        c = c || Aa1.parseTrackName(b);
        this._targetGroup = a;
        this._bindings = a.subscribe_(b, c);
    }
    function Aa1(a, b, c) {
        this.path = b;
        this.parsedPath = c || Aa1.parseTrackName(b);
        this.node = Aa1.findNode(a, this.parsedPath.nodeName) || a;
        this.rootNode = a;
    }
    function ci() {
        this.uuid = L1.generateUUID();
        this._objects = Array.prototype.slice.call(arguments);
        this.nCachedObjects_ = 0;
        var a = {};
        this._indicesByUUID = a;
        for(var b = 0, c = arguments.length; b !== c; ++b)a[arguments[b].uuid] = b;
        this._paths = [];
        this._parsedPaths = [];
        this._bindings = [];
        this._bindingsIndicesByPath = {};
        var d = this;
        this.stats = {
            objects: {
                get total () {
                    return d._objects.length;
                },
                get inUse () {
                    return this.total - d.nCachedObjects_;
                }
            },
            get bindingsPerObject () {
                return d._bindings.length;
            }
        };
    }
    function di(a, b, c) {
        this._mixer = a;
        this._clip = b;
        this._localRoot = c || null;
        a = b.tracks;
        b = a.length;
        c = Array(b);
        for(var d = {
            endingStart: 2400,
            endingEnd: 2400
        }, e = 0; e !== b; ++e){
            var f = a[e].createInterpolant(null);
            c[e] = f;
            f.settings = d;
        }
        this._interpolantSettings = d;
        this._interpolants = c;
        this._propertyBindings = Array(b);
        this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null;
        this.loop = 2201;
        this._loopCount = -1;
        this._startTime = null;
        this.time = 0;
        this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1;
        this.repetitions = Infinity;
        this.paused = !1;
        this.enabled = !0;
        this.clampWhenFinished = !1;
        this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0;
    }
    function Gg(a) {
        this._root = a;
        this._initMemoryManager();
        this.time = this._accuIndex = 0;
        this.timeScale = 1;
    }
    function lf(a, b) {
        "string" === typeof a && (console.warn("THREE.Uniform: Type parameter is no longer needed."), a = b);
        this.value = a;
    }
    function Hg(a, b, c) {
        Gb.call(this, a, b);
        this.meshPerAttribute = c || 1;
    }
    function ei(a, b, c, d) {
        this.ray = new Sb(a, b);
        this.near = c || 0;
        this.far = d || Infinity;
        this.camera = null;
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        };
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
                    return this.Points;
                }
            }
        });
    }
    function fi(a, b) {
        return a.distance - b.distance;
    }
    function Ig(a, b, c, d) {
        if (!1 !== a.visible && (a.raycast(b, c), !0 === d)) {
            a = a.children;
            d = 0;
            for(var e = a.length; d < e; d++)Ig(a[d], b, c, !0);
        }
    }
    function gi(a, b, c) {
        this.radius = void 0 !== a ? a : 1;
        this.phi = void 0 !== b ? b : 0;
        this.theta = void 0 !== c ? c : 0;
        return this;
    }
    function hi(a, b, c) {
        this.radius = void 0 !== a ? a : 1;
        this.theta = void 0 !== b ? b : 0;
        this.y = void 0 !== c ? c : 0;
        return this;
    }
    function Jg(a, b) {
        this.min = void 0 !== a ? a : new w1(Infinity, Infinity);
        this.max = void 0 !== b ? b : new w1(-Infinity, -Infinity);
    }
    function Kg(a, b) {
        this.start = void 0 !== a ? a : new n1;
        this.end = void 0 !== b ? b : new n1;
    }
    function pe(a) {
        B1.call(this);
        this.material = a;
        this.render = function() {};
    }
    function qe(a, b, c, d) {
        this.object = a;
        this.size = void 0 !== b ? b : 1;
        a = void 0 !== c ? c : 16711680;
        d = void 0 !== d ? d : 1;
        b = 0;
        (c = this.object.geometry) && c.isGeometry ? b = 3 * c.faces.length : c && c.isBufferGeometry && (b = c.attributes.normal.count);
        c = new E1;
        b = new A1(6 * b, 3);
        c.addAttribute("position", b);
        ca1.call(this, c, new Q1({
            color: a,
            linewidth: d
        }));
        this.matrixAutoUpdate = !1;
        this.update();
    }
    function ed(a, b) {
        B1.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.color = b;
        a = new E1;
        b = [
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            -1,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            1,
            0,
            0,
            0,
            0,
            -1,
            1
        ];
        for(var c = 0, d = 1; 32 > c; c++, d++){
            var e = c / 32 * Math.PI * 2, f = d / 32 * Math.PI * 2;
            b.push(Math.cos(e), Math.sin(e), 1, Math.cos(f), Math.sin(f), 1);
        }
        a.addAttribute("position", new A1(b, 3));
        b = new Q1({
            fog: !1
        });
        this.cone = new ca1(a, b);
        this.add(this.cone);
        this.update();
    }
    function ii(a) {
        var b = [];
        a && a.isBone && b.push(a);
        for(var c = 0; c < a.children.length; c++)b.push.apply(b, ii(a.children[c]));
        return b;
    }
    function fd(a) {
        for(var b = ii(a), c = new E1, d = [], e = [], f = new H1(0, 0, 1), g = new H1(0, 1, 0), h = 0; h < b.length; h++){
            var l = b[h];
            l.parent && l.parent.isBone && (d.push(0, 0, 0), d.push(0, 0, 0), e.push(f.r, f.g, f.b), e.push(g.r, g.g, g.b));
        }
        c.addAttribute("position", new A1(d, 3));
        c.addAttribute("color", new A1(e, 3));
        d = new Q1({
            vertexColors: 2,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        ca1.call(this, c, d);
        this.root = a;
        this.bones = b;
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
    }
    function gd(a, b, c) {
        this.light = a;
        this.light.updateMatrixWorld();
        this.color = c;
        a = new Ib(b, 4, 2);
        b = new Ga({
            wireframe: !0,
            fog: !1
        });
        ja1.call(this, a, b);
        this.matrix = this.light.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.update();
    }
    function hd(a, b) {
        this.type = "RectAreaLightHelper";
        this.light = a;
        this.color = b;
        a = new E1;
        a.addAttribute("position", new A1([
            1,
            1,
            0,
            -1,
            1,
            0,
            -1,
            -1,
            0,
            1,
            -1,
            0,
            1,
            1,
            0
        ], 3));
        a.computeBoundingSphere();
        b = new Q1({
            fog: !1
        });
        xa1.call(this, a, b);
        a = new E1;
        a.addAttribute("position", new A1([
            1,
            1,
            0,
            -1,
            1,
            0,
            -1,
            -1,
            0,
            1,
            1,
            0,
            -1,
            -1,
            0,
            1,
            -1,
            0
        ], 3));
        a.computeBoundingSphere();
        this.add(new ja1(a, new Ga({
            side: 1,
            fog: !1
        })));
        this.update();
    }
    function id(a, b, c) {
        B1.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.color = c;
        a = new cc(b);
        a.rotateY(.5 * Math.PI);
        this.material = new Ga({
            wireframe: !0,
            fog: !1
        });
        void 0 === this.color && (this.material.vertexColors = 2);
        b = a.getAttribute("position");
        b = new Float32Array(3 * b.count);
        a.addAttribute("color", new O1(b, 3));
        this.add(new ja1(a, this.material));
        this.update();
    }
    function jd(a, b) {
        this.lightProbe = a;
        this.size = b;
        a = new ma1({
            defines: {
                GAMMA_OUTPUT: ""
            },
            uniforms: {
                sh: {
                    value: this.lightProbe.sh.coefficients
                },
                intensity: {
                    value: this.lightProbe.intensity
                }
            },
            vertexShader: "varying vec3 vNormal;\nvoid main() {\n	vNormal = normalize( normalMatrix * normal );\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            fragmentShader: "#define RECIPROCAL_PI 0.318309886\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n	// matrix is assumed to be orthogonal\n	return normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 linearToOutput( in vec3 a ) {\n	#ifdef GAMMA_OUTPUT\n		return pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n	#else\n		return a;\n	#endif\n}\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	// normal is assumed to have unit length\n	float x = normal.x, y = normal.y, z = normal.z;\n	// band 0\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	// band 1\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	// band 2\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nuniform vec3 sh[ 9 ]; // sh coefficients\nuniform float intensity; // light probe intensity\nvarying vec3 vNormal;\nvoid main() {\n	vec3 normal = normalize( vNormal );\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, sh );\n	vec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;\n	outgoingLight = linearToOutput( outgoingLight );\n	gl_FragColor = vec4( outgoingLight, 1.0 );\n}"
        });
        b = new Ib(1, 32, 16);
        ja1.call(this, b, a);
        this.onBeforeRender();
    }
    function mf(a, b, c, d) {
        a = a || 10;
        b = b || 10;
        c = new H1(void 0 !== c ? c : 4473924);
        d = new H1(void 0 !== d ? d : 8947848);
        var e = b / 2, f = a / b, g = a / 2;
        a = [];
        for(var h = [], l = 0, m = 0, k = -g; l <= b; l++, k += f){
            a.push(-g, 0, k, g, 0, k);
            a.push(k, 0, -g, k, 0, g);
            var n = l === e ? c : d;
            n.toArray(h, m);
            m += 3;
            n.toArray(h, m);
            m += 3;
            n.toArray(h, m);
            m += 3;
            n.toArray(h, m);
            m += 3;
        }
        b = new E1;
        b.addAttribute("position", new A1(a, 3));
        b.addAttribute("color", new A1(h, 3));
        c = new Q1({
            vertexColors: 2
        });
        ca1.call(this, b, c);
    }
    function nf(a, b, c, d, e, f) {
        a = a || 10;
        b = b || 16;
        c = c || 8;
        d = d || 64;
        e = new H1(void 0 !== e ? e : 4473924);
        f = new H1(void 0 !== f ? f : 8947848);
        var g = [], h = [], l;
        for(l = 0; l <= b; l++){
            var m = l / b * 2 * Math.PI;
            var k = Math.sin(m) * a;
            m = Math.cos(m) * a;
            g.push(0, 0, 0);
            g.push(k, 0, m);
            var n = l & 1 ? e : f;
            h.push(n.r, n.g, n.b);
            h.push(n.r, n.g, n.b);
        }
        for(l = 0; l <= c; l++){
            n = l & 1 ? e : f;
            var t = a - a / c * l;
            for(b = 0; b < d; b++)m = b / d * 2 * Math.PI, k = Math.sin(m) * t, m = Math.cos(m) * t, g.push(k, 0, m), h.push(n.r, n.g, n.b), m = (b + 1) / d * 2 * Math.PI, k = Math.sin(m) * t, m = Math.cos(m) * t, g.push(k, 0, m), h.push(n.r, n.g, n.b);
        }
        a = new E1;
        a.addAttribute("position", new A1(g, 3));
        a.addAttribute("color", new A1(h, 3));
        g = new Q1({
            vertexColors: 2
        });
        ca1.call(this, a, g);
    }
    function kd(a, b, c, d) {
        this.audio = a;
        this.range = b || 1;
        this.divisionsInnerAngle = c || 16;
        this.divisionsOuterAngle = d || 2;
        a = new E1;
        b = new Float32Array(3 * (3 * (this.divisionsInnerAngle + 2 * this.divisionsOuterAngle) + 3));
        a.addAttribute("position", new O1(b, 3));
        b = new Q1({
            color: 65280
        });
        c = new Q1({
            color: 16776960
        });
        xa1.call(this, a, [
            c,
            b
        ]);
        this.update();
    }
    function re(a, b, c, d) {
        this.object = a;
        this.size = void 0 !== b ? b : 1;
        a = void 0 !== c ? c : 16776960;
        d = void 0 !== d ? d : 1;
        b = 0;
        (c = this.object.geometry) && c.isGeometry ? b = c.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        c = new E1;
        b = new A1(6 * b, 3);
        c.addAttribute("position", b);
        ca1.call(this, c, new Q1({
            color: a,
            linewidth: d
        }));
        this.matrixAutoUpdate = !1;
        this.update();
    }
    function ld(a, b, c) {
        B1.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.color = c;
        void 0 === b && (b = 1);
        a = new E1;
        a.addAttribute("position", new A1([
            -b,
            b,
            0,
            b,
            b,
            0,
            b,
            -b,
            0,
            -b,
            -b,
            0,
            -b,
            b,
            0
        ], 3));
        b = new Q1({
            fog: !1
        });
        this.lightPlane = new xa1(a, b);
        this.add(this.lightPlane);
        a = new E1;
        a.addAttribute("position", new A1([
            0,
            0,
            0,
            0,
            0,
            1
        ], 3));
        this.targetLine = new xa1(a, b);
        this.add(this.targetLine);
        this.update();
    }
    function se(a34) {
        function b27(a, b, d) {
            c(a, d);
            c(b, d);
        }
        function c(a, b) {
            f.push(0, 0, 0);
            g.push(b.r, b.g, b.b);
            void 0 === h[a] && (h[a] = []);
            h[a].push(f.length / 3 - 1);
        }
        var d23 = new E1, e = new Q1({
            color: 16777215,
            vertexColors: 1
        }), f = [], g = [], h = {}, l = new H1(16755200), m = new H1(16711680), k = new H1(43775), n = new H1(16777215), t = new H1(3355443);
        b27("n1", "n2", l);
        b27("n2", "n4", l);
        b27("n4", "n3", l);
        b27("n3", "n1", l);
        b27("f1", "f2", l);
        b27("f2", "f4", l);
        b27("f4", "f3", l);
        b27("f3", "f1", l);
        b27("n1", "f1", l);
        b27("n2", "f2", l);
        b27("n3", "f3", l);
        b27("n4", "f4", l);
        b27("p", "n1", m);
        b27("p", "n2", m);
        b27("p", "n3", m);
        b27("p", "n4", m);
        b27("u1", "u2", k);
        b27("u2", "u3", k);
        b27("u3", "u1", k);
        b27("c", "t", n);
        b27("p", "c", t);
        b27("cn1", "cn2", t);
        b27("cn3", "cn4", t);
        b27("cf1", "cf2", t);
        b27("cf3", "cf4", t);
        d23.addAttribute("position", new A1(f, 3));
        d23.addAttribute("color", new A1(g, 3));
        ca1.call(this, d23, e);
        this.camera = a34;
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix();
        this.matrix = a34.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.pointMap = h;
        this.update();
    }
    function qa1(a, b, c, d, e, f, g) {
        of.set(e, f, g).unproject(d);
        a = b[a];
        if (void 0 !== a) for(c = c.getAttribute("position"), b = 0, d = a.length; b < d; b++)c.setXYZ(a[b], of.x, of.y, of.z);
    }
    function sb(a, b) {
        this.object = a;
        void 0 === b && (b = 16776960);
        a = new Uint16Array([
            0,
            1,
            1,
            2,
            2,
            3,
            3,
            0,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            4,
            0,
            4,
            1,
            5,
            2,
            6,
            3,
            7
        ]);
        var c = new Float32Array(24), d = new E1;
        d.setIndex(new O1(a, 1));
        d.addAttribute("position", new O1(c, 3));
        ca1.call(this, d, new Q1({
            color: b
        }));
        this.matrixAutoUpdate = !1;
        this.update();
    }
    function te(a, b) {
        this.type = "Box3Helper";
        this.box = a;
        b = b || 16776960;
        a = new Uint16Array([
            0,
            1,
            1,
            2,
            2,
            3,
            3,
            0,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            4,
            0,
            4,
            1,
            5,
            2,
            6,
            3,
            7
        ]);
        var c = new E1;
        c.setIndex(new O1(a, 1));
        c.addAttribute("position", new A1([
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            -1,
            -1,
            -1,
            1,
            -1,
            -1
        ], 3));
        ca1.call(this, c, new Q1({
            color: b
        }));
        this.geometry.computeBoundingSphere();
    }
    function ue(a, b, c) {
        this.type = "PlaneHelper";
        this.plane = a;
        this.size = void 0 === b ? 1 : b;
        a = void 0 !== c ? c : 16776960;
        b = new E1;
        b.addAttribute("position", new A1([
            1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            1,
            1,
            1,
            1,
            0,
            0,
            1,
            0,
            0,
            0
        ], 3));
        b.computeBoundingSphere();
        xa1.call(this, b, new Q1({
            color: a
        }));
        b = new E1;
        b.addAttribute("position", new A1([
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            1
        ], 3));
        b.computeBoundingSphere();
        this.add(new ja1(b, new Ga({
            color: a,
            opacity: .2,
            transparent: !0,
            depthWrite: !1
        })));
    }
    function tb(a, b, c, d, e, f) {
        B1.call(this);
        void 0 === a && (a = new n1(0, 0, 1));
        void 0 === b && (b = new n1(0, 0, 0));
        void 0 === c && (c = 1);
        void 0 === d && (d = 16776960);
        void 0 === e && (e = .2 * c);
        void 0 === f && (f = .2 * e);
        void 0 === pf && (pf = new E1, pf.addAttribute("position", new A1([
            0,
            0,
            0,
            0,
            1,
            0
        ], 3)), Lg = new qb(0, .5, 1, 5, 1), Lg.translate(0, -0.5, 0));
        this.position.copy(b);
        this.line = new xa1(pf, new Q1({
            color: d
        }));
        this.line.matrixAutoUpdate = !1;
        this.add(this.line);
        this.cone = new ja1(Lg, new Ga({
            color: d
        }));
        this.cone.matrixAutoUpdate = !1;
        this.add(this.cone);
        this.setDirection(a);
        this.setLength(c, e, f);
    }
    function ve(a) {
        a = a || 1;
        var b = [
            0,
            0,
            0,
            a,
            0,
            0,
            0,
            0,
            0,
            0,
            a,
            0,
            0,
            0,
            0,
            0,
            0,
            a
        ];
        a = new E1;
        a.addAttribute("position", new A1(b, 3));
        a.addAttribute("color", new A1([
            1,
            0,
            0,
            1,
            .6,
            0,
            0,
            1,
            0,
            .6,
            1,
            0,
            0,
            0,
            1,
            0,
            .6,
            1
        ], 3));
        b = new Q1({
            vertexColors: 2
        });
        ca1.call(this, a, b);
    }
    function ji(a) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
        ya1.call(this, a);
        this.type = "catmullrom";
        this.closed = !0;
    }
    function ki(a) {
        console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
        ya1.call(this, a);
        this.type = "catmullrom";
    }
    function Mg(a) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
        ya1.call(this, a);
        this.type = "catmullrom";
    }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52));
    void 0 === Number.isInteger && (Number.isInteger = function(a) {
        return "number" === typeof a && isFinite(a) && Math.floor(a) === a;
    });
    void 0 === Math.sign && (Math.sign = function(a) {
        return 0 > a ? -1 : 0 < a ? 1 : +a;
    });
    !1 === "name" in Function.prototype && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
        }
    });
    void 0 === Object.assign && (Object.assign = function(a) {
        if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object");
        for(var b = Object(a), c = 1; c < arguments.length; c++){
            var d = arguments[c];
            if (void 0 !== d && null !== d) for(var e in d)Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e]);
        }
        return b;
    });
    Object.assign(Ba1.prototype, {
        addEventListener: function(a, b) {
            void 0 === this._listeners && (this._listeners = {});
            var c = this._listeners;
            void 0 === c[a] && (c[a] = []);
            -1 === c[a].indexOf(b) && c[a].push(b);
        },
        hasEventListener: function(a, b) {
            if (void 0 === this._listeners) return !1;
            var c = this._listeners;
            return void 0 !== c[a] && -1 !== c[a].indexOf(b);
        },
        removeEventListener: function(a, b) {
            void 0 !== this._listeners && (a = this._listeners[a], void 0 !== a && (b = a.indexOf(b), -1 !== b && a.splice(b, 1)));
        },
        dispatchEvent: function(a) {
            if (void 0 !== this._listeners) {
                var b = this._listeners[a.type];
                if (void 0 !== b) {
                    a.target = this;
                    b = b.slice(0);
                    for(var c = 0, d = b.length; c < d; c++)b[c].call(this, a);
                }
            }
        }
    });
    for(var va1 = [], we = 0; 256 > we; we++)va1[we] = (16 > we ? "0" : "") + we.toString(16);
    var L1 = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            var a = 4294967295 * Math.random() | 0, b = 4294967295 * Math.random() | 0, c = 4294967295 * Math.random() | 0, d = 4294967295 * Math.random() | 0;
            return (va1[a & 255] + va1[a >> 8 & 255] + va1[a >> 16 & 255] + va1[a >> 24 & 255] + "-" + va1[b & 255] + va1[b >> 8 & 255] + "-" + va1[b >> 16 & 15 | 64] + va1[b >> 24 & 255] + "-" + va1[c & 63 | 128] + va1[c >> 8 & 255] + "-" + va1[c >> 16 & 255] + va1[c >> 24 & 255] + va1[d & 255] + va1[d >> 8 & 255] + va1[d >> 16 & 255] + va1[d >> 24 & 255]).toUpperCase();
        },
        clamp: function(a, b, c) {
            return Math.max(b, Math.min(c, a));
        },
        euclideanModulo: function(a, b) {
            return (a % b + b) % b;
        },
        mapLinear: function(a, b, c, d, e) {
            return d + (a - b) * (e - d) / (c - b);
        },
        lerp: function(a, b, c) {
            return (1 - c) * a + c * b;
        },
        smoothstep: function(a, b, c) {
            if (a <= b) return 0;
            if (a >= c) return 1;
            a = (a - b) / (c - b);
            return a * a * (3 - 2 * a);
        },
        smootherstep: function(a, b, c) {
            if (a <= b) return 0;
            if (a >= c) return 1;
            a = (a - b) / (c - b);
            return a * a * a * (a * (6 * a - 15) + 10);
        },
        randInt: function(a, b) {
            return a + Math.floor(Math.random() * (b - a + 1));
        },
        randFloat: function(a, b) {
            return a + Math.random() * (b - a);
        },
        randFloatSpread: function(a) {
            return a * (.5 - Math.random());
        },
        degToRad: function(a) {
            return a * L1.DEG2RAD;
        },
        radToDeg: function(a) {
            return a * L1.RAD2DEG;
        },
        isPowerOfTwo: function(a) {
            return 0 === (a & a - 1) && 0 !== a;
        },
        ceilPowerOfTwo: function(a) {
            return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2));
        },
        floorPowerOfTwo: function(a) {
            return Math.pow(2, Math.floor(Math.log(a) / Math.LN2));
        }
    };
    Object.defineProperties(w1.prototype, {
        width: {
            get: function() {
                return this.x;
            },
            set: function(a) {
                this.x = a;
            }
        },
        height: {
            get: function() {
                return this.y;
            },
            set: function(a) {
                this.y = a;
            }
        }
    });
    Object.assign(w1.prototype, {
        isVector2: !0,
        set: function(a, b) {
            this.x = a;
            this.y = b;
            return this;
        },
        setScalar: function(a) {
            this.y = this.x = a;
            return this;
        },
        setX: function(a) {
            this.x = a;
            return this;
        },
        setY: function(a) {
            this.y = a;
            return this;
        },
        setComponent: function(a, b) {
            switch(a){
                case 0:
                    this.x = b;
                    break;
                case 1:
                    this.y = b;
                    break;
                default:
                    throw Error("index is out of range: " + a);
            }
            return this;
        },
        getComponent: function(a) {
            switch(a){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y);
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            return this;
        },
        add: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            return this;
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            return this;
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            return this;
        },
        addScaledVector: function(a, b) {
            this.x += a.x * b;
            this.y += a.y * b;
            return this;
        },
        sub: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            return this;
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            return this;
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            return this;
        },
        multiply: function(a) {
            this.x *= a.x;
            this.y *= a.y;
            return this;
        },
        multiplyScalar: function(a) {
            this.x *= a;
            this.y *= a;
            return this;
        },
        divide: function(a) {
            this.x /= a.x;
            this.y /= a.y;
            return this;
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a);
        },
        applyMatrix3: function(a) {
            var b = this.x, c = this.y;
            a = a.elements;
            this.x = a[0] * b + a[3] * c + a[6];
            this.y = a[1] * b + a[4] * c + a[7];
            return this;
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            return this;
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            return this;
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            return this;
        },
        clampScalar: function(a, b) {
            this.x = Math.max(a, Math.min(b, this.x));
            this.y = Math.max(a, Math.min(b, this.y));
            return this;
        },
        clampLength: function(a, b) {
            var c = this.length();
            return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)));
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this;
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this;
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            return this;
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            return this;
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y;
        },
        cross: function(a) {
            return this.x * a.y - this.y * a.x;
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y;
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y);
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1);
        },
        angle: function() {
            var a = Math.atan2(this.y, this.x);
            0 > a && (a += 2 * Math.PI);
            return a;
        },
        distanceTo: function(a) {
            return Math.sqrt(this.distanceToSquared(a));
        },
        distanceToSquared: function(a) {
            var b = this.x - a.x;
            a = this.y - a.y;
            return b * b + a * a;
        },
        manhattanDistanceTo: function(a) {
            return Math.abs(this.x - a.x) + Math.abs(this.y - a.y);
        },
        setLength: function(a) {
            return this.normalize().multiplyScalar(a);
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            return this;
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b, a).multiplyScalar(c).add(a);
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y;
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            return this;
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.x;
            a[b + 1] = this.y;
            return a;
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            return this;
        },
        rotateAround: function(a, b) {
            var c = Math.cos(b);
            b = Math.sin(b);
            var d = this.x - a.x, e = this.y - a.y;
            this.x = d * c - e * b + a.x;
            this.y = d * b + e * c + a.y;
            return this;
        }
    });
    Object.assign(ua1, {
        slerp: function(a, b, c, d) {
            return c.copy(a).slerp(b, d);
        },
        slerpFlat: function(a, b, c, d, e, f, g) {
            var h = c[d + 0], l = c[d + 1], m = c[d + 2];
            c = c[d + 3];
            d = e[f + 0];
            var k = e[f + 1], n = e[f + 2];
            e = e[f + 3];
            if (c !== e || h !== d || l !== k || m !== n) {
                f = 1 - g;
                var t = h * d + l * k + m * n + c * e, r = 0 <= t ? 1 : -1, p = 1 - t * t;
                p > Number.EPSILON && (p = Math.sqrt(p), t = Math.atan2(p, t * r), f = Math.sin(f * t) / p, g = Math.sin(g * t) / p);
                r *= g;
                h = h * f + d * r;
                l = l * f + k * r;
                m = m * f + n * r;
                c = c * f + e * r;
                f === 1 - g && (g = 1 / Math.sqrt(h * h + l * l + m * m + c * c), h *= g, l *= g, m *= g, c *= g);
            }
            a[b] = h;
            a[b + 1] = l;
            a[b + 2] = m;
            a[b + 3] = c;
        }
    });
    Object.defineProperties(ua1.prototype, {
        x: {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._onChangeCallback();
            }
        },
        y: {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._onChangeCallback();
            }
        },
        z: {
            get: function() {
                return this._z;
            },
            set: function(a) {
                this._z = a;
                this._onChangeCallback();
            }
        },
        w: {
            get: function() {
                return this._w;
            },
            set: function(a) {
                this._w = a;
                this._onChangeCallback();
            }
        }
    });
    Object.assign(ua1.prototype, {
        isQuaternion: !0,
        set: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            this._z = c;
            this._w = d;
            this._onChangeCallback();
            return this;
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        },
        copy: function(a) {
            this._x = a.x;
            this._y = a.y;
            this._z = a.z;
            this._w = a.w;
            this._onChangeCallback();
            return this;
        },
        setFromEuler: function(a, b) {
            if (!a || !a.isEuler) throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var c = a._x, d = a._y, e = a._z;
            a = a.order;
            var f = Math.cos, g = Math.sin, h = f(c / 2), l = f(d / 2);
            f = f(e / 2);
            c = g(c / 2);
            d = g(d / 2);
            e = g(e / 2);
            "XYZ" === a ? (this._x = c * l * f + h * d * e, this._y = h * d * f - c * l * e, this._z = h * l * e + c * d * f, this._w = h * l * f - c * d * e) : "YXZ" === a ? (this._x = c * l * f + h * d * e, this._y = h * d * f - c * l * e, this._z = h * l * e - c * d * f, this._w = h * l * f + c * d * e) : "ZXY" === a ? (this._x = c * l * f - h * d * e, this._y = h * d * f + c * l * e, this._z = h * l * e + c * d * f, this._w = h * l * f - c * d * e) : "ZYX" === a ? (this._x = c * l * f - h * d * e, this._y = h * d * f + c * l * e, this._z = h * l * e - c * d * f, this._w = h * l * f + c * d * e) : "YZX" === a ? (this._x = c * l * f + h * d * e, this._y = h * d * f + c * l * e, this._z = h * l * e - c * d * f, this._w = h * l * f - c * d * e) : "XZY" === a && (this._x = c * l * f - h * d * e, this._y = h * d * f - c * l * e, this._z = h * l * e + c * d * f, this._w = h * l * f + c * d * e);
            !1 !== b && this._onChangeCallback();
            return this;
        },
        setFromAxisAngle: function(a, b) {
            b /= 2;
            var c = Math.sin(b);
            this._x = a.x * c;
            this._y = a.y * c;
            this._z = a.z * c;
            this._w = Math.cos(b);
            this._onChangeCallback();
            return this;
        },
        setFromRotationMatrix: function(a) {
            var b = a.elements, c = b[0];
            a = b[4];
            var d = b[8], e = b[1], f = b[5], g = b[9], h = b[2], l = b[6];
            b = b[10];
            var m = c + f + b;
            0 < m ? (c = .5 / Math.sqrt(m + 1), this._w = .25 / c, this._x = (l - g) * c, this._y = (d - h) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (l - g) / c, this._x = .25 * c, this._y = (a + e) / c, this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - h) / c, this._x = (a + e) / c, this._y = .25 * c, this._z = (g + l) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + h) / c, this._y = (g + l) / c, this._z = .25 * c);
            this._onChangeCallback();
            return this;
        },
        setFromUnitVectors: function(a, b) {
            var c = a.dot(b) + 1;
            1E-6 > c ? (c = 0, Math.abs(a.x) > Math.abs(a.z) ? (this._x = -a.y, this._y = a.x, this._z = 0) : (this._x = 0, this._y = -a.z, this._z = a.y)) : (this._x = a.y * b.z - a.z * b.y, this._y = a.z * b.x - a.x * b.z, this._z = a.x * b.y - a.y * b.x);
            this._w = c;
            return this.normalize();
        },
        angleTo: function(a) {
            return 2 * Math.acos(Math.abs(L1.clamp(this.dot(a), -1, 1)));
        },
        rotateTowards: function(a, b) {
            var c = this.angleTo(a);
            if (0 === c) return this;
            this.slerp(a, Math.min(1, b / c));
            return this;
        },
        inverse: function() {
            return this.conjugate();
        },
        conjugate: function() {
            this._x *= -1;
            this._y *= -1;
            this._z *= -1;
            this._onChangeCallback();
            return this;
        },
        dot: function(a) {
            return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w;
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        },
        normalize: function() {
            var a = this.length();
            0 === a ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a);
            this._onChangeCallback();
            return this;
        },
        multiply: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a);
        },
        premultiply: function(a) {
            return this.multiplyQuaternions(a, this);
        },
        multiplyQuaternions: function(a, b) {
            var c = a._x, d = a._y, e = a._z;
            a = a._w;
            var f = b._x, g = b._y, h = b._z;
            b = b._w;
            this._x = c * b + a * f + d * h - e * g;
            this._y = d * b + a * g + e * f - c * h;
            this._z = e * b + a * h + c * g - d * f;
            this._w = a * b - c * f - d * g - e * h;
            this._onChangeCallback();
            return this;
        },
        slerp: function(a, b) {
            if (0 === b) return this;
            if (1 === b) return this.copy(a);
            var c = this._x, d = this._y, e = this._z, f = this._w, g = f * a._w + c * a._x + d * a._y + e * a._z;
            0 > g ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a);
            if (1 <= g) return this._w = f, this._x = c, this._y = d, this._z = e, this;
            a = 1 - g * g;
            if (a <= Number.EPSILON) return g = 1 - b, this._w = g * f + b * this._w, this._x = g * c + b * this._x, this._y = g * d + b * this._y, this._z = g * e + b * this._z, this.normalize(), this._onChangeCallback(), this;
            a = Math.sqrt(a);
            var h = Math.atan2(a, g);
            g = Math.sin((1 - b) * h) / a;
            b = Math.sin(b * h) / a;
            this._w = f * g + this._w * b;
            this._x = c * g + this._x * b;
            this._y = d * g + this._y * b;
            this._z = e * g + this._z * b;
            this._onChangeCallback();
            return this;
        },
        equals: function(a) {
            return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w;
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this._x = a[b];
            this._y = a[b + 1];
            this._z = a[b + 2];
            this._w = a[b + 3];
            this._onChangeCallback();
            return this;
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this._x;
            a[b + 1] = this._y;
            a[b + 2] = this._z;
            a[b + 3] = this._w;
            return a;
        },
        _onChange: function(a) {
            this._onChangeCallback = a;
            return this;
        },
        _onChangeCallback: function() {}
    });
    var Ng = new n1, li = new ua1;
    Object.assign(n1.prototype, {
        isVector3: !0,
        set: function(a, b, c) {
            this.x = a;
            this.y = b;
            this.z = c;
            return this;
        },
        setScalar: function(a) {
            this.z = this.y = this.x = a;
            return this;
        },
        setX: function(a) {
            this.x = a;
            return this;
        },
        setY: function(a) {
            this.y = a;
            return this;
        },
        setZ: function(a) {
            this.z = a;
            return this;
        },
        setComponent: function(a, b) {
            switch(a){
                case 0:
                    this.x = b;
                    break;
                case 1:
                    this.y = b;
                    break;
                case 2:
                    this.z = b;
                    break;
                default:
                    throw Error("index is out of range: " + a);
            }
            return this;
        },
        getComponent: function(a) {
            switch(a){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z);
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            return this;
        },
        add: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            return this;
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            this.z += a;
            return this;
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            return this;
        },
        addScaledVector: function(a, b) {
            this.x += a.x * b;
            this.y += a.y * b;
            this.z += a.z * b;
            return this;
        },
        sub: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            return this;
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            this.z -= a;
            return this;
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            return this;
        },
        multiply: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b);
            this.x *= a.x;
            this.y *= a.y;
            this.z *= a.z;
            return this;
        },
        multiplyScalar: function(a) {
            this.x *= a;
            this.y *= a;
            this.z *= a;
            return this;
        },
        multiplyVectors: function(a, b) {
            this.x = a.x * b.x;
            this.y = a.y * b.y;
            this.z = a.z * b.z;
            return this;
        },
        applyEuler: function(a) {
            a && a.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
            return this.applyQuaternion(li.setFromEuler(a));
        },
        applyAxisAngle: function(a, b) {
            return this.applyQuaternion(li.setFromAxisAngle(a, b));
        },
        applyMatrix3: function(a) {
            var b = this.x, c = this.y, d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[3] * c + a[6] * d;
            this.y = a[1] * b + a[4] * c + a[7] * d;
            this.z = a[2] * b + a[5] * c + a[8] * d;
            return this;
        },
        applyMatrix4: function(a) {
            var b = this.x, c = this.y, d = this.z;
            a = a.elements;
            var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
            this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
            this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
            this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
            return this;
        },
        applyQuaternion: function(a) {
            var b = this.x, c = this.y, d = this.z, e = a.x, f = a.y, g = a.z;
            a = a.w;
            var h = a * b + f * d - g * c, l = a * c + g * b - e * d, m = a * d + e * c - f * b;
            b = -e * b - f * c - g * d;
            this.x = h * a + b * -e + l * -g - m * -f;
            this.y = l * a + b * -f + m * -e - h * -g;
            this.z = m * a + b * -g + h * -f - l * -e;
            return this;
        },
        project: function(a) {
            return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix);
        },
        unproject: function(a) {
            return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld);
        },
        transformDirection: function(a) {
            var b = this.x, c = this.y, d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[4] * c + a[8] * d;
            this.y = a[1] * b + a[5] * c + a[9] * d;
            this.z = a[2] * b + a[6] * c + a[10] * d;
            return this.normalize();
        },
        divide: function(a) {
            this.x /= a.x;
            this.y /= a.y;
            this.z /= a.z;
            return this;
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a);
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            this.z = Math.min(this.z, a.z);
            return this;
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            this.z = Math.max(this.z, a.z);
            return this;
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            this.z = Math.max(a.z, Math.min(b.z, this.z));
            return this;
        },
        clampScalar: function(a, b) {
            this.x = Math.max(a, Math.min(b, this.x));
            this.y = Math.max(a, Math.min(b, this.y));
            this.z = Math.max(a, Math.min(b, this.z));
            return this;
        },
        clampLength: function(a, b) {
            var c = this.length();
            return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)));
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            this.z = Math.floor(this.z);
            return this;
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            this.z = Math.ceil(this.z);
            return this;
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.z = Math.round(this.z);
            return this;
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
            return this;
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            return this;
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y + this.z * a.z;
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1);
        },
        setLength: function(a) {
            return this.normalize().multiplyScalar(a);
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            this.z += (a.z - this.z) * b;
            return this;
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b, a).multiplyScalar(c).add(a);
        },
        cross: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b)) : this.crossVectors(this, a);
        },
        crossVectors: function(a, b) {
            var c = a.x, d = a.y;
            a = a.z;
            var e = b.x, f = b.y;
            b = b.z;
            this.x = d * b - a * f;
            this.y = a * e - c * b;
            this.z = c * f - d * e;
            return this;
        },
        projectOnVector: function(a) {
            var b = a.dot(this) / a.lengthSq();
            return this.copy(a).multiplyScalar(b);
        },
        projectOnPlane: function(a) {
            Ng.copy(this).projectOnVector(a);
            return this.sub(Ng);
        },
        reflect: function(a) {
            return this.sub(Ng.copy(a).multiplyScalar(2 * this.dot(a)));
        },
        angleTo: function(a) {
            var b = Math.sqrt(this.lengthSq() * a.lengthSq());
            0 === b && console.error("THREE.Vector3: angleTo() can't handle zero length vectors.");
            a = this.dot(a) / b;
            return Math.acos(L1.clamp(a, -1, 1));
        },
        distanceTo: function(a) {
            return Math.sqrt(this.distanceToSquared(a));
        },
        distanceToSquared: function(a) {
            var b = this.x - a.x, c = this.y - a.y;
            a = this.z - a.z;
            return b * b + c * c + a * a;
        },
        manhattanDistanceTo: function(a) {
            return Math.abs(this.x - a.x) + Math.abs(this.y - a.y) + Math.abs(this.z - a.z);
        },
        setFromSpherical: function(a) {
            return this.setFromSphericalCoords(a.radius, a.phi, a.theta);
        },
        setFromSphericalCoords: function(a, b, c) {
            var d = Math.sin(b) * a;
            this.x = d * Math.sin(c);
            this.y = Math.cos(b) * a;
            this.z = d * Math.cos(c);
            return this;
        },
        setFromCylindrical: function(a) {
            return this.setFromCylindricalCoords(a.radius, a.theta, a.y);
        },
        setFromCylindricalCoords: function(a, b, c) {
            this.x = a * Math.sin(b);
            this.y = c;
            this.z = a * Math.cos(b);
            return this;
        },
        setFromMatrixPosition: function(a) {
            a = a.elements;
            this.x = a[12];
            this.y = a[13];
            this.z = a[14];
            return this;
        },
        setFromMatrixScale: function(a) {
            var b = this.setFromMatrixColumn(a, 0).length(), c = this.setFromMatrixColumn(a, 1).length();
            a = this.setFromMatrixColumn(a, 2).length();
            this.x = b;
            this.y = c;
            this.z = a;
            return this;
        },
        setFromMatrixColumn: function(a, b) {
            return this.fromArray(a.elements, 4 * b);
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y && a.z === this.z;
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            this.z = a[b + 2];
            return this;
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.x;
            a[b + 1] = this.y;
            a[b + 2] = this.z;
            return a;
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            this.z = a.getZ(b);
            return this;
        }
    });
    var qc = new n1;
    Object.assign(Y1.prototype, {
        isMatrix3: !0,
        set: function(a, b, c, d, e, f, g, h, l) {
            var m = this.elements;
            m[0] = a;
            m[1] = d;
            m[2] = g;
            m[3] = b;
            m[4] = e;
            m[5] = h;
            m[6] = c;
            m[7] = f;
            m[8] = l;
            return this;
        },
        identity: function() {
            this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
            return this;
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements);
        },
        copy: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            b[4] = a[4];
            b[5] = a[5];
            b[6] = a[6];
            b[7] = a[7];
            b[8] = a[8];
            return this;
        },
        setFromMatrix4: function(a) {
            a = a.elements;
            this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]);
            return this;
        },
        applyToBufferAttribute: function(a) {
            for(var b = 0, c = a.count; b < c; b++)qc.x = a.getX(b), qc.y = a.getY(b), qc.z = a.getZ(b), qc.applyMatrix3(this), a.setXYZ(b, qc.x, qc.y, qc.z);
            return a;
        },
        multiply: function(a) {
            return this.multiplyMatrices(this, a);
        },
        premultiply: function(a) {
            return this.multiplyMatrices(a, this);
        },
        multiplyMatrices: function(a, b) {
            var c = a.elements, d = b.elements;
            b = this.elements;
            a = c[0];
            var e = c[3], f = c[6], g = c[1], h = c[4], l = c[7], m = c[2], k = c[5];
            c = c[8];
            var n = d[0], t = d[3], r = d[6], p = d[1], v = d[4], x = d[7], z = d[2], y = d[5];
            d = d[8];
            b[0] = a * n + e * p + f * z;
            b[3] = a * t + e * v + f * y;
            b[6] = a * r + e * x + f * d;
            b[1] = g * n + h * p + l * z;
            b[4] = g * t + h * v + l * y;
            b[7] = g * r + h * x + l * d;
            b[2] = m * n + k * p + c * z;
            b[5] = m * t + k * v + c * y;
            b[8] = m * r + k * x + c * d;
            return this;
        },
        multiplyScalar: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[3] *= a;
            b[6] *= a;
            b[1] *= a;
            b[4] *= a;
            b[7] *= a;
            b[2] *= a;
            b[5] *= a;
            b[8] *= a;
            return this;
        },
        determinant: function() {
            var a = this.elements, b = a[0], c = a[1], d = a[2], e = a[3], f = a[4], g = a[5], h = a[6], l = a[7];
            a = a[8];
            return b * f * a - b * g * l - c * e * a + c * g * h + d * e * l - d * f * h;
        },
        getInverse: function(a, b) {
            a && a.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
            var c = a.elements;
            a = this.elements;
            var d = c[0], e = c[1], f = c[2], g = c[3], h = c[4], l = c[5], m = c[6], k = c[7];
            c = c[8];
            var n = c * h - l * k, t = l * m - c * g, r = k * g - h * m, p = d * n + e * t + f * r;
            if (0 === p) {
                if (!0 === b) throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
                console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
                return this.identity();
            }
            b = 1 / p;
            a[0] = n * b;
            a[1] = (f * k - c * e) * b;
            a[2] = (l * e - f * h) * b;
            a[3] = t * b;
            a[4] = (c * d - f * m) * b;
            a[5] = (f * g - l * d) * b;
            a[6] = r * b;
            a[7] = (e * m - k * d) * b;
            a[8] = (h * d - e * g) * b;
            return this;
        },
        transpose: function() {
            var a = this.elements;
            var b = a[1];
            a[1] = a[3];
            a[3] = b;
            b = a[2];
            a[2] = a[6];
            a[6] = b;
            b = a[5];
            a[5] = a[7];
            a[7] = b;
            return this;
        },
        getNormalMatrix: function(a) {
            return this.setFromMatrix4(a).getInverse(this).transpose();
        },
        transposeIntoArray: function(a) {
            var b = this.elements;
            a[0] = b[0];
            a[1] = b[3];
            a[2] = b[6];
            a[3] = b[1];
            a[4] = b[4];
            a[5] = b[7];
            a[6] = b[2];
            a[7] = b[5];
            a[8] = b[8];
            return this;
        },
        setUvTransform: function(a, b, c, d, e, f, g) {
            var h = Math.cos(e);
            e = Math.sin(e);
            this.set(c * h, c * e, -c * (h * f + e * g) + f + a, -d * e, d * h, -d * (-e * f + h * g) + g + b, 0, 0, 1);
        },
        scale: function(a, b) {
            var c = this.elements;
            c[0] *= a;
            c[3] *= a;
            c[6] *= a;
            c[1] *= b;
            c[4] *= b;
            c[7] *= b;
            return this;
        },
        rotate: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            var c = this.elements, d = c[0], e = c[3], f = c[6], g = c[1], h = c[4], l = c[7];
            c[0] = b * d + a * g;
            c[3] = b * e + a * h;
            c[6] = b * f + a * l;
            c[1] = -a * d + b * g;
            c[4] = -a * e + b * h;
            c[7] = -a * f + b * l;
            return this;
        },
        translate: function(a, b) {
            var c = this.elements;
            c[0] += a * c[2];
            c[3] += a * c[5];
            c[6] += a * c[8];
            c[1] += b * c[2];
            c[4] += b * c[5];
            c[7] += b * c[8];
            return this;
        },
        equals: function(a) {
            var b = this.elements;
            a = a.elements;
            for(var c = 0; 9 > c; c++)if (b[c] !== a[c]) return !1;
            return !0;
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            for(var c = 0; 9 > c; c++)this.elements[c] = a[c + b];
            return this;
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            var c = this.elements;
            a[b] = c[0];
            a[b + 1] = c[1];
            a[b + 2] = c[2];
            a[b + 3] = c[3];
            a[b + 4] = c[4];
            a[b + 5] = c[5];
            a[b + 6] = c[6];
            a[b + 7] = c[7];
            a[b + 8] = c[8];
            return a;
        }
    });
    var md, Kb = {
        getDataURL: function(a) {
            if ("undefined" == typeof HTMLCanvasElement) return a.src;
            if (!(a instanceof HTMLCanvasElement)) {
                void 0 === md && (md = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"));
                md.width = a.width;
                md.height = a.height;
                var b = md.getContext("2d");
                a instanceof ImageData ? b.putImageData(a, 0, 0) : b.drawImage(a, 0, 0, a.width, a.height);
                a = md;
            }
            return 2048 < a.width || 2048 < a.height ? a.toDataURL("image/jpeg", .6) : a.toDataURL("image/png");
        }
    }, Ri = 0;
    W1.DEFAULT_IMAGE = void 0;
    W1.DEFAULT_MAPPING = 300;
    W1.prototype = Object.assign(Object.create(Ba1.prototype), {
        constructor: W1,
        isTexture: !0,
        updateMatrix: function() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.name = a.name;
            this.image = a.image;
            this.mipmaps = a.mipmaps.slice(0);
            this.mapping = a.mapping;
            this.wrapS = a.wrapS;
            this.wrapT = a.wrapT;
            this.magFilter = a.magFilter;
            this.minFilter = a.minFilter;
            this.anisotropy = a.anisotropy;
            this.format = a.format;
            this.type = a.type;
            this.offset.copy(a.offset);
            this.repeat.copy(a.repeat);
            this.center.copy(a.center);
            this.rotation = a.rotation;
            this.matrixAutoUpdate = a.matrixAutoUpdate;
            this.matrix.copy(a.matrix);
            this.generateMipmaps = a.generateMipmaps;
            this.premultiplyAlpha = a.premultiplyAlpha;
            this.flipY = a.flipY;
            this.unpackAlignment = a.unpackAlignment;
            this.encoding = a.encoding;
            return this;
        },
        toJSON: function(a) {
            var b = void 0 === a || "string" === typeof a;
            if (!b && void 0 !== a.textures[this.uuid]) return a.textures[this.uuid];
            var c = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [
                    this.repeat.x,
                    this.repeat.y
                ],
                offset: [
                    this.offset.x,
                    this.offset.y
                ],
                center: [
                    this.center.x,
                    this.center.y
                ],
                rotation: this.rotation,
                wrap: [
                    this.wrapS,
                    this.wrapT
                ],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            if (void 0 !== this.image) {
                var d = this.image;
                void 0 === d.uuid && (d.uuid = L1.generateUUID());
                if (!b && void 0 === a.images[d.uuid]) {
                    if (Array.isArray(d)) {
                        var e = [];
                        for(var f = 0, g = d.length; f < g; f++)e.push(Kb.getDataURL(d[f]));
                    } else e = Kb.getDataURL(d);
                    a.images[d.uuid] = {
                        uuid: d.uuid,
                        url: e
                    };
                }
                c.image = d.uuid;
            }
            b || (a.textures[this.uuid] = c);
            return c;
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            });
        },
        transformUv: function(a) {
            if (300 !== this.mapping) return a;
            a.applyMatrix3(this.matrix);
            if (0 > a.x || 1 < a.x) switch(this.wrapS){
                case 1E3:
                    a.x -= Math.floor(a.x);
                    break;
                case 1001:
                    a.x = 0 > a.x ? 0 : 1;
                    break;
                case 1002:
                    a.x = 1 === Math.abs(Math.floor(a.x) % 2) ? Math.ceil(a.x) - a.x : a.x - Math.floor(a.x);
            }
            if (0 > a.y || 1 < a.y) switch(this.wrapT){
                case 1E3:
                    a.y -= Math.floor(a.y);
                    break;
                case 1001:
                    a.y = 0 > a.y ? 0 : 1;
                    break;
                case 1002:
                    a.y = 1 === Math.abs(Math.floor(a.y) % 2) ? Math.ceil(a.y) - a.y : a.y - Math.floor(a.y);
            }
            this.flipY && (a.y = 1 - a.y);
            return a;
        }
    });
    Object.defineProperty(W1.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++;
        }
    });
    Object.defineProperties(aa1.prototype, {
        width: {
            get: function() {
                return this.z;
            },
            set: function(a) {
                this.z = a;
            }
        },
        height: {
            get: function() {
                return this.w;
            },
            set: function(a) {
                this.w = a;
            }
        }
    });
    Object.assign(aa1.prototype, {
        isVector4: !0,
        set: function(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.z = c;
            this.w = d;
            return this;
        },
        setScalar: function(a) {
            this.w = this.z = this.y = this.x = a;
            return this;
        },
        setX: function(a) {
            this.x = a;
            return this;
        },
        setY: function(a) {
            this.y = a;
            return this;
        },
        setZ: function(a) {
            this.z = a;
            return this;
        },
        setW: function(a) {
            this.w = a;
            return this;
        },
        setComponent: function(a, b) {
            switch(a){
                case 0:
                    this.x = b;
                    break;
                case 1:
                    this.y = b;
                    break;
                case 2:
                    this.z = b;
                    break;
                case 3:
                    this.w = b;
                    break;
                default:
                    throw Error("index is out of range: " + a);
            }
            return this;
        },
        getComponent: function(a) {
            switch(a){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z, this.w);
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.w = void 0 !== a.w ? a.w : 1;
            return this;
        },
        add: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            this.w += a.w;
            return this;
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            this.z += a;
            this.w += a;
            return this;
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            this.w = a.w + b.w;
            return this;
        },
        addScaledVector: function(a, b) {
            this.x += a.x * b;
            this.y += a.y * b;
            this.z += a.z * b;
            this.w += a.w * b;
            return this;
        },
        sub: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            this.w -= a.w;
            return this;
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            this.z -= a;
            this.w -= a;
            return this;
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            this.w = a.w - b.w;
            return this;
        },
        multiplyScalar: function(a) {
            this.x *= a;
            this.y *= a;
            this.z *= a;
            this.w *= a;
            return this;
        },
        applyMatrix4: function(a) {
            var b = this.x, c = this.y, d = this.z, e = this.w;
            a = a.elements;
            this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
            this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
            this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
            this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
            return this;
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a);
        },
        setAxisAngleFromQuaternion: function(a) {
            this.w = 2 * Math.acos(a.w);
            var b = Math.sqrt(1 - a.w * a.w);
            1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b);
            return this;
        },
        setAxisAngleFromRotationMatrix: function(a) {
            a = a.elements;
            var b = a[0];
            var c = a[4];
            var d = a[8], e = a[1], f = a[5], g = a[9];
            var h = a[2];
            var l = a[6];
            var m = a[10];
            if (.01 > Math.abs(c - e) && .01 > Math.abs(d - h) && .01 > Math.abs(g - l)) {
                if (.1 > Math.abs(c + e) && .1 > Math.abs(d + h) && .1 > Math.abs(g + l) && .1 > Math.abs(b + f + m - 3)) return this.set(1, 0, 0, 0), this;
                a = Math.PI;
                b = (b + 1) / 2;
                f = (f + 1) / 2;
                m = (m + 1) / 2;
                c = (c + e) / 4;
                d = (d + h) / 4;
                g = (g + l) / 4;
                b > f && b > m ? .01 > b ? (l = 0, c = h = .707106781) : (l = Math.sqrt(b), h = c / l, c = d / l) : f > m ? .01 > f ? (l = .707106781, h = 0, c = .707106781) : (h = Math.sqrt(f), l = c / h, c = g / h) : .01 > m ? (h = l = .707106781, c = 0) : (c = Math.sqrt(m), l = d / c, h = g / c);
                this.set(l, h, c, a);
                return this;
            }
            a = Math.sqrt((l - g) * (l - g) + (d - h) * (d - h) + (e - c) * (e - c));
            .001 > Math.abs(a) && (a = 1);
            this.x = (l - g) / a;
            this.y = (d - h) / a;
            this.z = (e - c) / a;
            this.w = Math.acos((b + f + m - 1) / 2);
            return this;
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            this.z = Math.min(this.z, a.z);
            this.w = Math.min(this.w, a.w);
            return this;
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            this.z = Math.max(this.z, a.z);
            this.w = Math.max(this.w, a.w);
            return this;
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            this.z = Math.max(a.z, Math.min(b.z, this.z));
            this.w = Math.max(a.w, Math.min(b.w, this.w));
            return this;
        },
        clampScalar: function(a, b) {
            this.x = Math.max(a, Math.min(b, this.x));
            this.y = Math.max(a, Math.min(b, this.y));
            this.z = Math.max(a, Math.min(b, this.z));
            this.w = Math.max(a, Math.min(b, this.w));
            return this;
        },
        clampLength: function(a, b) {
            var c = this.length();
            return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)));
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            this.z = Math.floor(this.z);
            this.w = Math.floor(this.w);
            return this;
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            this.z = Math.ceil(this.z);
            this.w = Math.ceil(this.w);
            return this;
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.z = Math.round(this.z);
            this.w = Math.round(this.w);
            return this;
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
            this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
            return this;
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            this.w = -this.w;
            return this;
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w;
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1);
        },
        setLength: function(a) {
            return this.normalize().multiplyScalar(a);
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            this.z += (a.z - this.z) * b;
            this.w += (a.w - this.w) * b;
            return this;
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b, a).multiplyScalar(c).add(a);
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w;
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            this.z = a[b + 2];
            this.w = a[b + 3];
            return this;
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.x;
            a[b + 1] = this.y;
            a[b + 2] = this.z;
            a[b + 3] = this.w;
            return a;
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            this.z = a.getZ(b);
            this.w = a.getW(b);
            return this;
        }
    });
    la1.prototype = Object.assign(Object.create(Ba1.prototype), {
        constructor: la1,
        isWebGLRenderTarget: !0,
        setSize: function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.texture.image.width = a, this.texture.image.height = b, this.dispose();
            this.viewport.set(0, 0, a, b);
            this.scissor.set(0, 0, a, b);
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.width = a.width;
            this.height = a.height;
            this.viewport.copy(a.viewport);
            this.texture = a.texture.clone();
            this.depthBuffer = a.depthBuffer;
            this.stencilBuffer = a.stencilBuffer;
            this.depthTexture = a.depthTexture;
            return this;
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    });
    Of.prototype = Object.assign(Object.create(la1.prototype), {
        constructor: Of,
        isWebGLMultisampleRenderTarget: !0,
        copy: function(a) {
            la1.prototype.copy.call(this, a);
            this.samples = a.samples;
            return this;
        }
    });
    var Ka = new n1, ea1 = new U1, sk = new n1(0, 0, 0), tk = new n1(1, 1, 1), Lb = new n1, qf = new n1, ka1 = new n1;
    Object.assign(U1.prototype, {
        isMatrix4: !0,
        set: function(a, b, c, d, e, f, g, h, l, m, k, n, t, r, p, v) {
            var q = this.elements;
            q[0] = a;
            q[4] = b;
            q[8] = c;
            q[12] = d;
            q[1] = e;
            q[5] = f;
            q[9] = g;
            q[13] = h;
            q[2] = l;
            q[6] = m;
            q[10] = k;
            q[14] = n;
            q[3] = t;
            q[7] = r;
            q[11] = p;
            q[15] = v;
            return this;
        },
        identity: function() {
            this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this;
        },
        clone: function() {
            return (new U1).fromArray(this.elements);
        },
        copy: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            b[4] = a[4];
            b[5] = a[5];
            b[6] = a[6];
            b[7] = a[7];
            b[8] = a[8];
            b[9] = a[9];
            b[10] = a[10];
            b[11] = a[11];
            b[12] = a[12];
            b[13] = a[13];
            b[14] = a[14];
            b[15] = a[15];
            return this;
        },
        copyPosition: function(a) {
            var b = this.elements;
            a = a.elements;
            b[12] = a[12];
            b[13] = a[13];
            b[14] = a[14];
            return this;
        },
        extractBasis: function(a, b, c) {
            a.setFromMatrixColumn(this, 0);
            b.setFromMatrixColumn(this, 1);
            c.setFromMatrixColumn(this, 2);
            return this;
        },
        makeBasis: function(a, b, c) {
            this.set(a.x, b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1);
            return this;
        },
        extractRotation: function(a) {
            var b = this.elements, c = a.elements, d = 1 / Ka.setFromMatrixColumn(a, 0).length(), e = 1 / Ka.setFromMatrixColumn(a, 1).length();
            a = 1 / Ka.setFromMatrixColumn(a, 2).length();
            b[0] = c[0] * d;
            b[1] = c[1] * d;
            b[2] = c[2] * d;
            b[3] = 0;
            b[4] = c[4] * e;
            b[5] = c[5] * e;
            b[6] = c[6] * e;
            b[7] = 0;
            b[8] = c[8] * a;
            b[9] = c[9] * a;
            b[10] = c[10] * a;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this;
        },
        makeRotationFromEuler: function(a) {
            a && a.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var b = this.elements, c = a.x, d = a.y, e = a.z, f = Math.cos(c);
            c = Math.sin(c);
            var g = Math.cos(d);
            d = Math.sin(d);
            var h = Math.cos(e);
            e = Math.sin(e);
            if ("XYZ" === a.order) {
                a = f * h;
                var l = f * e, m = c * h, k = c * e;
                b[0] = g * h;
                b[4] = -g * e;
                b[8] = d;
                b[1] = l + m * d;
                b[5] = a - k * d;
                b[9] = -c * g;
                b[2] = k - a * d;
                b[6] = m + l * d;
                b[10] = f * g;
            } else "YXZ" === a.order ? (a = g * h, l = g * e, m = d * h, k = d * e, b[0] = a + k * c, b[4] = m * c - l, b[8] = f * d, b[1] = f * e, b[5] = f * h, b[9] = -c, b[2] = l * c - m, b[6] = k + a * c, b[10] = f * g) : "ZXY" === a.order ? (a = g * h, l = g * e, m = d * h, k = d * e, b[0] = a - k * c, b[4] = -f * e, b[8] = m + l * c, b[1] = l + m * c, b[5] = f * h, b[9] = k - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : "ZYX" === a.order ? (a = f * h, l = f * e, m = c * h, k = c * e, b[0] = g * h, b[4] = m * d - l, b[8] = a * d + k, b[1] = g * e, b[5] = k * d + a, b[9] = l * d - m, b[2] = -d, b[6] = c * g, b[10] = f * g) : "YZX" === a.order ? (a = f * g, l = f * d, m = c * g, k = c * d, b[0] = g * h, b[4] = k - a * e, b[8] = m * e + l, b[1] = e, b[5] = f * h, b[9] = -c * h, b[2] = -d * h, b[6] = l * e + m, b[10] = a - k * e) : "XZY" === a.order && (a = f * g, l = f * d, m = c * g, k = c * d, b[0] = g * h, b[4] = -e, b[8] = d * h, b[1] = a * e + k, b[5] = f * h, b[9] = l * e - m, b[2] = m * e - l, b[6] = c * h, b[10] = k * e + a);
            b[3] = 0;
            b[7] = 0;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this;
        },
        makeRotationFromQuaternion: function(a) {
            return this.compose(sk, a, tk);
        },
        lookAt: function(a, b, c) {
            var d = this.elements;
            ka1.subVectors(a, b);
            0 === ka1.lengthSq() && (ka1.z = 1);
            ka1.normalize();
            Lb.crossVectors(c, ka1);
            0 === Lb.lengthSq() && (1 === Math.abs(c.z) ? ka1.x += 1E-4 : ka1.z += 1E-4, ka1.normalize(), Lb.crossVectors(c, ka1));
            Lb.normalize();
            qf.crossVectors(ka1, Lb);
            d[0] = Lb.x;
            d[4] = qf.x;
            d[8] = ka1.x;
            d[1] = Lb.y;
            d[5] = qf.y;
            d[9] = ka1.y;
            d[2] = Lb.z;
            d[6] = qf.z;
            d[10] = ka1.z;
            return this;
        },
        multiply: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a);
        },
        premultiply: function(a) {
            return this.multiplyMatrices(a, this);
        },
        multiplyMatrices: function(a, b) {
            var c = a.elements, d = b.elements;
            b = this.elements;
            a = c[0];
            var e = c[4], f = c[8], g = c[12], h = c[1], l = c[5], m = c[9], k = c[13], n = c[2], t = c[6], r = c[10], p = c[14], v = c[3], x = c[7], z = c[11];
            c = c[15];
            var y = d[0], w = d[4], A = d[8], C = d[12], B = d[1], E = d[5], D = d[9], F = d[13], G = d[2], H = d[6], I = d[10], L = d[14], M = d[3], N = d[7], O = d[11];
            d = d[15];
            b[0] = a * y + e * B + f * G + g * M;
            b[4] = a * w + e * E + f * H + g * N;
            b[8] = a * A + e * D + f * I + g * O;
            b[12] = a * C + e * F + f * L + g * d;
            b[1] = h * y + l * B + m * G + k * M;
            b[5] = h * w + l * E + m * H + k * N;
            b[9] = h * A + l * D + m * I + k * O;
            b[13] = h * C + l * F + m * L + k * d;
            b[2] = n * y + t * B + r * G + p * M;
            b[6] = n * w + t * E + r * H + p * N;
            b[10] = n * A + t * D + r * I + p * O;
            b[14] = n * C + t * F + r * L + p * d;
            b[3] = v * y + x * B + z * G + c * M;
            b[7] = v * w + x * E + z * H + c * N;
            b[11] = v * A + x * D + z * I + c * O;
            b[15] = v * C + x * F + z * L + c * d;
            return this;
        },
        multiplyScalar: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[4] *= a;
            b[8] *= a;
            b[12] *= a;
            b[1] *= a;
            b[5] *= a;
            b[9] *= a;
            b[13] *= a;
            b[2] *= a;
            b[6] *= a;
            b[10] *= a;
            b[14] *= a;
            b[3] *= a;
            b[7] *= a;
            b[11] *= a;
            b[15] *= a;
            return this;
        },
        applyToBufferAttribute: function(a) {
            for(var b = 0, c = a.count; b < c; b++)Ka.x = a.getX(b), Ka.y = a.getY(b), Ka.z = a.getZ(b), Ka.applyMatrix4(this), a.setXYZ(b, Ka.x, Ka.y, Ka.z);
            return a;
        },
        determinant: function() {
            var a = this.elements, b = a[0], c = a[4], d = a[8], e = a[12], f = a[1], g = a[5], h = a[9], l = a[13], m = a[2], k = a[6], n = a[10], t = a[14];
            return a[3] * (+e * h * k - d * l * k - e * g * n + c * l * n + d * g * t - c * h * t) + a[7] * (+b * h * t - b * l * n + e * f * n - d * f * t + d * l * m - e * h * m) + a[11] * (+b * l * k - b * g * t - e * f * k + c * f * t + e * g * m - c * l * m) + a[15] * (-d * g * m - b * h * k + b * g * n + d * f * k - c * f * n + c * h * m);
        },
        transpose: function() {
            var a = this.elements;
            var b = a[1];
            a[1] = a[4];
            a[4] = b;
            b = a[2];
            a[2] = a[8];
            a[8] = b;
            b = a[6];
            a[6] = a[9];
            a[9] = b;
            b = a[3];
            a[3] = a[12];
            a[12] = b;
            b = a[7];
            a[7] = a[13];
            a[13] = b;
            b = a[11];
            a[11] = a[14];
            a[14] = b;
            return this;
        },
        setPosition: function(a, b, c) {
            var d = this.elements;
            a.isVector3 ? (d[12] = a.x, d[13] = a.y, d[14] = a.z) : (d[12] = a, d[13] = b, d[14] = c);
            return this;
        },
        getInverse: function(a, b) {
            var c = this.elements, d = a.elements;
            a = d[0];
            var e = d[1], f = d[2], g = d[3], h = d[4], l = d[5], m = d[6], k = d[7], n = d[8], t = d[9], r = d[10], p = d[11], v = d[12], x = d[13], z = d[14];
            d = d[15];
            var y = t * z * k - x * r * k + x * m * p - l * z * p - t * m * d + l * r * d, w = v * r * k - n * z * k - v * m * p + h * z * p + n * m * d - h * r * d, A = n * x * k - v * t * k + v * l * p - h * x * p - n * l * d + h * t * d, C = v * t * m - n * x * m - v * l * r + h * x * r + n * l * z - h * t * z, B = a * y + e * w + f * A + g * C;
            if (0 === B) {
                if (!0 === b) throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");
                console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");
                return this.identity();
            }
            b = 1 / B;
            c[0] = y * b;
            c[1] = (x * r * g - t * z * g - x * f * p + e * z * p + t * f * d - e * r * d) * b;
            c[2] = (l * z * g - x * m * g + x * f * k - e * z * k - l * f * d + e * m * d) * b;
            c[3] = (t * m * g - l * r * g - t * f * k + e * r * k + l * f * p - e * m * p) * b;
            c[4] = w * b;
            c[5] = (n * z * g - v * r * g + v * f * p - a * z * p - n * f * d + a * r * d) * b;
            c[6] = (v * m * g - h * z * g - v * f * k + a * z * k + h * f * d - a * m * d) * b;
            c[7] = (h * r * g - n * m * g + n * f * k - a * r * k - h * f * p + a * m * p) * b;
            c[8] = A * b;
            c[9] = (v * t * g - n * x * g - v * e * p + a * x * p + n * e * d - a * t * d) * b;
            c[10] = (h * x * g - v * l * g + v * e * k - a * x * k - h * e * d + a * l * d) * b;
            c[11] = (n * l * g - h * t * g - n * e * k + a * t * k + h * e * p - a * l * p) * b;
            c[12] = C * b;
            c[13] = (n * x * f - v * t * f + v * e * r - a * x * r - n * e * z + a * t * z) * b;
            c[14] = (v * l * f - h * x * f - v * e * m + a * x * m + h * e * z - a * l * z) * b;
            c[15] = (h * t * f - n * l * f + n * e * m - a * t * m - h * e * r + a * l * r) * b;
            return this;
        },
        scale: function(a) {
            var b = this.elements, c = a.x, d = a.y;
            a = a.z;
            b[0] *= c;
            b[4] *= d;
            b[8] *= a;
            b[1] *= c;
            b[5] *= d;
            b[9] *= a;
            b[2] *= c;
            b[6] *= d;
            b[10] *= a;
            b[3] *= c;
            b[7] *= d;
            b[11] *= a;
            return this;
        },
        getMaxScaleOnAxis: function() {
            var a = this.elements;
            return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10]));
        },
        makeTranslation: function(a, b, c) {
            this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
            return this;
        },
        makeRotationX: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
            return this;
        },
        makeRotationY: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
            return this;
        },
        makeRotationZ: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this;
        },
        makeRotationAxis: function(a, b) {
            var c = Math.cos(b);
            b = Math.sin(b);
            var d = 1 - c, e = a.x, f = a.y;
            a = a.z;
            var g = d * e, h = d * f;
            this.set(g * e + c, g * f - b * a, g * a + b * f, 0, g * f + b * a, h * f + c, h * a - b * e, 0, g * a - b * f, h * a + b * e, d * a * a + c, 0, 0, 0, 0, 1);
            return this;
        },
        makeScale: function(a, b, c) {
            this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
            return this;
        },
        makeShear: function(a, b, c) {
            this.set(1, b, c, 0, a, 1, c, 0, a, b, 1, 0, 0, 0, 0, 1);
            return this;
        },
        compose: function(a, b, c) {
            var d = this.elements, e = b._x, f = b._y, g = b._z, h = b._w, l = e + e, m = f + f, k = g + g;
            b = e * l;
            var n = e * m;
            e *= k;
            var t = f * m;
            f *= k;
            g *= k;
            l *= h;
            m *= h;
            h *= k;
            k = c.x;
            var r = c.y;
            c = c.z;
            d[0] = (1 - (t + g)) * k;
            d[1] = (n + h) * k;
            d[2] = (e - m) * k;
            d[3] = 0;
            d[4] = (n - h) * r;
            d[5] = (1 - (b + g)) * r;
            d[6] = (f + l) * r;
            d[7] = 0;
            d[8] = (e + m) * c;
            d[9] = (f - l) * c;
            d[10] = (1 - (b + t)) * c;
            d[11] = 0;
            d[12] = a.x;
            d[13] = a.y;
            d[14] = a.z;
            d[15] = 1;
            return this;
        },
        decompose: function(a, b, c) {
            var d = this.elements, e = Ka.set(d[0], d[1], d[2]).length(), f = Ka.set(d[4], d[5], d[6]).length(), g = Ka.set(d[8], d[9], d[10]).length();
            0 > this.determinant() && (e = -e);
            a.x = d[12];
            a.y = d[13];
            a.z = d[14];
            ea1.copy(this);
            a = 1 / e;
            d = 1 / f;
            var h = 1 / g;
            ea1.elements[0] *= a;
            ea1.elements[1] *= a;
            ea1.elements[2] *= a;
            ea1.elements[4] *= d;
            ea1.elements[5] *= d;
            ea1.elements[6] *= d;
            ea1.elements[8] *= h;
            ea1.elements[9] *= h;
            ea1.elements[10] *= h;
            b.setFromRotationMatrix(ea1);
            c.x = e;
            c.y = f;
            c.z = g;
            return this;
        },
        makePerspective: function(a, b, c, d, e, f) {
            void 0 === f && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var g = this.elements;
            g[0] = 2 * e / (b - a);
            g[4] = 0;
            g[8] = (b + a) / (b - a);
            g[12] = 0;
            g[1] = 0;
            g[5] = 2 * e / (c - d);
            g[9] = (c + d) / (c - d);
            g[13] = 0;
            g[2] = 0;
            g[6] = 0;
            g[10] = -(f + e) / (f - e);
            g[14] = -2 * f * e / (f - e);
            g[3] = 0;
            g[7] = 0;
            g[11] = -1;
            g[15] = 0;
            return this;
        },
        makeOrthographic: function(a, b, c, d, e, f) {
            var g = this.elements, h = 1 / (b - a), l = 1 / (c - d), m = 1 / (f - e);
            g[0] = 2 * h;
            g[4] = 0;
            g[8] = 0;
            g[12] = -((b + a) * h);
            g[1] = 0;
            g[5] = 2 * l;
            g[9] = 0;
            g[13] = -((c + d) * l);
            g[2] = 0;
            g[6] = 0;
            g[10] = -2 * m;
            g[14] = -((f + e) * m);
            g[3] = 0;
            g[7] = 0;
            g[11] = 0;
            g[15] = 1;
            return this;
        },
        equals: function(a) {
            var b = this.elements;
            a = a.elements;
            for(var c = 0; 16 > c; c++)if (b[c] !== a[c]) return !1;
            return !0;
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            for(var c = 0; 16 > c; c++)this.elements[c] = a[c + b];
            return this;
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            var c = this.elements;
            a[b] = c[0];
            a[b + 1] = c[1];
            a[b + 2] = c[2];
            a[b + 3] = c[3];
            a[b + 4] = c[4];
            a[b + 5] = c[5];
            a[b + 6] = c[6];
            a[b + 7] = c[7];
            a[b + 8] = c[8];
            a[b + 9] = c[9];
            a[b + 10] = c[10];
            a[b + 11] = c[11];
            a[b + 12] = c[12];
            a[b + 13] = c[13];
            a[b + 14] = c[14];
            a[b + 15] = c[15];
            return a;
        }
    });
    var mi = new U1, ni = new ua1;
    Qb.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
    Qb.DefaultOrder = "XYZ";
    Object.defineProperties(Qb.prototype, {
        x: {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._onChangeCallback();
            }
        },
        y: {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._onChangeCallback();
            }
        },
        z: {
            get: function() {
                return this._z;
            },
            set: function(a) {
                this._z = a;
                this._onChangeCallback();
            }
        },
        order: {
            get: function() {
                return this._order;
            },
            set: function(a) {
                this._order = a;
                this._onChangeCallback();
            }
        }
    });
    Object.assign(Qb.prototype, {
        isEuler: !0,
        set: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            this._z = c;
            this._order = d || this._order;
            this._onChangeCallback();
            return this;
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        },
        copy: function(a) {
            this._x = a._x;
            this._y = a._y;
            this._z = a._z;
            this._order = a._order;
            this._onChangeCallback();
            return this;
        },
        setFromRotationMatrix: function(a, b, c) {
            var d = L1.clamp, e = a.elements;
            a = e[0];
            var f = e[4], g = e[8], h = e[1], l = e[5], m = e[9], k = e[2], n = e[6];
            e = e[10];
            b = b || this._order;
            "XYZ" === b ? (this._y = Math.asin(d(g, -1, 1)), .9999999 > Math.abs(g) ? (this._x = Math.atan2(-m, e), this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(n, l), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-d(m, -1, 1)), .9999999 > Math.abs(m) ? (this._y = Math.atan2(g, e), this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-k, a), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(d(n, -1, 1)), .9999999 > Math.abs(n) ? (this._y = Math.atan2(-k, e), this._z = Math.atan2(-f, l)) : (this._y = 0, this._z = Math.atan2(h, a))) : "ZYX" === b ? (this._y = Math.asin(-d(k, -1, 1)), .9999999 > Math.abs(k) ? (this._x = Math.atan2(n, e), this._z = Math.atan2(h, a)) : (this._x = 0, this._z = Math.atan2(-f, l))) : "YZX" === b ? (this._z = Math.asin(d(h, -1, 1)), .9999999 > Math.abs(h) ? (this._x = Math.atan2(-m, l), this._y = Math.atan2(-k, a)) : (this._x = 0, this._y = Math.atan2(g, e))) : "XZY" === b ? (this._z = Math.asin(-d(f, -1, 1)), .9999999 > Math.abs(f) ? (this._x = Math.atan2(n, l), this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-m, e), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b);
            this._order = b;
            !1 !== c && this._onChangeCallback();
            return this;
        },
        setFromQuaternion: function(a, b, c) {
            mi.makeRotationFromQuaternion(a);
            return this.setFromRotationMatrix(mi, b, c);
        },
        setFromVector3: function(a, b) {
            return this.set(a.x, a.y, a.z, b || this._order);
        },
        reorder: function(a) {
            ni.setFromEuler(this);
            return this.setFromQuaternion(ni, a);
        },
        equals: function(a) {
            return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order;
        },
        fromArray: function(a) {
            this._x = a[0];
            this._y = a[1];
            this._z = a[2];
            void 0 !== a[3] && (this._order = a[3]);
            this._onChangeCallback();
            return this;
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this._x;
            a[b + 1] = this._y;
            a[b + 2] = this._z;
            a[b + 3] = this._order;
            return a;
        },
        toVector3: function(a) {
            return a ? a.set(this._x, this._y, this._z) : new n1(this._x, this._y, this._z);
        },
        _onChange: function(a) {
            this._onChangeCallback = a;
            return this;
        },
        _onChangeCallback: function() {}
    });
    Object.assign(Pf.prototype, {
        set: function(a) {
            this.mask = 1 << a | 0;
        },
        enable: function(a) {
            this.mask = this.mask | 1 << a | 0;
        },
        enableAll: function() {
            this.mask = -1;
        },
        toggle: function(a) {
            this.mask ^= 1 << a | 0;
        },
        disable: function(a) {
            this.mask &= ~(1 << a | 0);
        },
        disableAll: function() {
            this.mask = 0;
        },
        test: function(a) {
            return 0 !== (this.mask & a.mask);
        }
    });
    var Si = 0, oi = new n1, nd = new ua1, ub = new U1, rf = new n1, xe = new n1, uk = new n1, vk = new ua1, pi = new n1(1, 0, 0), qi = new n1(0, 1, 0), ri = new n1(0, 0, 1), wk = {
        type: "added"
    }, xk = {
        type: "removed"
    };
    B1.DefaultUp = new n1(0, 1, 0);
    B1.DefaultMatrixAutoUpdate = !0;
    B1.prototype = Object.assign(Object.create(Ba1.prototype), {
        constructor: B1,
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix: function(a) {
            this.matrixAutoUpdate && this.updateMatrix();
            this.matrix.premultiply(a);
            this.matrix.decompose(this.position, this.quaternion, this.scale);
        },
        applyQuaternion: function(a) {
            this.quaternion.premultiply(a);
            return this;
        },
        setRotationFromAxisAngle: function(a, b) {
            this.quaternion.setFromAxisAngle(a, b);
        },
        setRotationFromEuler: function(a) {
            this.quaternion.setFromEuler(a, !0);
        },
        setRotationFromMatrix: function(a) {
            this.quaternion.setFromRotationMatrix(a);
        },
        setRotationFromQuaternion: function(a) {
            this.quaternion.copy(a);
        },
        rotateOnAxis: function(a, b) {
            nd.setFromAxisAngle(a, b);
            this.quaternion.multiply(nd);
            return this;
        },
        rotateOnWorldAxis: function(a, b) {
            nd.setFromAxisAngle(a, b);
            this.quaternion.premultiply(nd);
            return this;
        },
        rotateX: function(a) {
            return this.rotateOnAxis(pi, a);
        },
        rotateY: function(a) {
            return this.rotateOnAxis(qi, a);
        },
        rotateZ: function(a) {
            return this.rotateOnAxis(ri, a);
        },
        translateOnAxis: function(a, b) {
            oi.copy(a).applyQuaternion(this.quaternion);
            this.position.add(oi.multiplyScalar(b));
            return this;
        },
        translateX: function(a) {
            return this.translateOnAxis(pi, a);
        },
        translateY: function(a) {
            return this.translateOnAxis(qi, a);
        },
        translateZ: function(a) {
            return this.translateOnAxis(ri, a);
        },
        localToWorld: function(a) {
            return a.applyMatrix4(this.matrixWorld);
        },
        worldToLocal: function(a) {
            return a.applyMatrix4(ub.getInverse(this.matrixWorld));
        },
        lookAt: function(a, b, c) {
            a.isVector3 ? rf.copy(a) : rf.set(a, b, c);
            a = this.parent;
            this.updateWorldMatrix(!0, !1);
            xe.setFromMatrixPosition(this.matrixWorld);
            this.isCamera || this.isLight ? ub.lookAt(xe, rf, this.up) : ub.lookAt(rf, xe, this.up);
            this.quaternion.setFromRotationMatrix(ub);
            a && (ub.extractRotation(a.matrixWorld), nd.setFromRotationMatrix(ub), this.quaternion.premultiply(nd.inverse()));
        },
        add: function(a) {
            if (1 < arguments.length) {
                for(var b = 0; b < arguments.length; b++)this.add(arguments[b]);
                return this;
            }
            if (a === this) return console.error("THREE.Object3D.add: object can't be added as a child of itself.", a), this;
            a && a.isObject3D ? (null !== a.parent && a.parent.remove(a), a.parent = this, this.children.push(a), a.dispatchEvent(wk)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", a);
            return this;
        },
        remove: function(a) {
            if (1 < arguments.length) {
                for(var b = 0; b < arguments.length; b++)this.remove(arguments[b]);
                return this;
            }
            b = this.children.indexOf(a);
            -1 !== b && (a.parent = null, this.children.splice(b, 1), a.dispatchEvent(xk));
            return this;
        },
        attach: function(a) {
            this.updateWorldMatrix(!0, !1);
            ub.getInverse(this.matrixWorld);
            null !== a.parent && (a.parent.updateWorldMatrix(!0, !1), ub.multiply(a.parent.matrixWorld));
            a.applyMatrix(ub);
            a.updateWorldMatrix(!1, !1);
            this.add(a);
            return this;
        },
        getObjectById: function(a) {
            return this.getObjectByProperty("id", a);
        },
        getObjectByName: function(a) {
            return this.getObjectByProperty("name", a);
        },
        getObjectByProperty: function(a, b) {
            if (this[a] === b) return this;
            for(var c = 0, d = this.children.length; c < d; c++){
                var e = this.children[c].getObjectByProperty(a, b);
                if (void 0 !== e) return e;
            }
        },
        getWorldPosition: function(a) {
            void 0 === a && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), a = new n1);
            this.updateMatrixWorld(!0);
            return a.setFromMatrixPosition(this.matrixWorld);
        },
        getWorldQuaternion: function(a) {
            void 0 === a && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), a = new ua1);
            this.updateMatrixWorld(!0);
            this.matrixWorld.decompose(xe, a, uk);
            return a;
        },
        getWorldScale: function(a) {
            void 0 === a && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), a = new n1);
            this.updateMatrixWorld(!0);
            this.matrixWorld.decompose(xe, vk, a);
            return a;
        },
        getWorldDirection: function(a) {
            void 0 === a && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), a = new n1);
            this.updateMatrixWorld(!0);
            var b = this.matrixWorld.elements;
            return a.set(b[8], b[9], b[10]).normalize();
        },
        raycast: function() {},
        traverse: function(a) {
            a(this);
            for(var b = this.children, c = 0, d = b.length; c < d; c++)b[c].traverse(a);
        },
        traverseVisible: function(a) {
            if (!1 !== this.visible) {
                a(this);
                for(var b = this.children, c = 0, d = b.length; c < d; c++)b[c].traverseVisible(a);
            }
        },
        traverseAncestors: function(a) {
            var b = this.parent;
            null !== b && (a(b), b.traverseAncestors(a));
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale);
            this.matrixWorldNeedsUpdate = !0;
        },
        updateMatrixWorld: function(a) {
            this.matrixAutoUpdate && this.updateMatrix();
            if (this.matrixWorldNeedsUpdate || a) null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;
            for(var b = this.children, c = 0, d = b.length; c < d; c++)b[c].updateMatrixWorld(a);
        },
        updateWorldMatrix: function(a, b) {
            var c = this.parent;
            !0 === a && null !== c && c.updateWorldMatrix(!0, !1);
            this.matrixAutoUpdate && this.updateMatrix();
            null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
            if (!0 === b) for(a = this.children, b = 0, c = a.length; b < c; b++)a[b].updateWorldMatrix(!1, !0);
        },
        toJSON: function(a35) {
            function b28(b, c) {
                void 0 === b[c.uuid] && (b[c.uuid] = c.toJSON(a35));
                return c.uuid;
            }
            function c28(a) {
                var b = [], c;
                for(c in a){
                    var d = a[c];
                    delete d.metadata;
                    b.push(d);
                }
                return b;
            }
            var d24 = void 0 === a35 || "string" === typeof a35, e = {};
            d24 && (a35 = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {}
            }, e.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var f = {};
            f.uuid = this.uuid;
            f.type = this.type;
            "" !== this.name && (f.name = this.name);
            !0 === this.castShadow && (f.castShadow = !0);
            !0 === this.receiveShadow && (f.receiveShadow = !0);
            !1 === this.visible && (f.visible = !1);
            !1 === this.frustumCulled && (f.frustumCulled = !1);
            0 !== this.renderOrder && (f.renderOrder = this.renderOrder);
            "{}" !== JSON.stringify(this.userData) && (f.userData = this.userData);
            f.layers = this.layers.mask;
            f.matrix = this.matrix.toArray();
            !1 === this.matrixAutoUpdate && (f.matrixAutoUpdate = !1);
            this.isMesh && 0 !== this.drawMode && (f.drawMode = this.drawMode);
            if (this.isMesh || this.isLine || this.isPoints) {
                f.geometry = b28(a35.geometries, this.geometry);
                var g = this.geometry.parameters;
                if (void 0 !== g && void 0 !== g.shapes) {
                    if (g = g.shapes, Array.isArray(g)) for(var h = 0, l = g.length; h < l; h++)b28(a35.shapes, g[h]);
                    else b28(a35.shapes, g);
                }
            }
            if (void 0 !== this.material) {
                if (Array.isArray(this.material)) {
                    g = [];
                    h = 0;
                    for(l = this.material.length; h < l; h++)g.push(b28(a35.materials, this.material[h]));
                    f.material = g;
                } else f.material = b28(a35.materials, this.material);
            }
            if (0 < this.children.length) for(f.children = [], h = 0; h < this.children.length; h++)f.children.push(this.children[h].toJSON(a35).object);
            if (d24) {
                d24 = c28(a35.geometries);
                h = c28(a35.materials);
                l = c28(a35.textures);
                var m = c28(a35.images);
                g = c28(a35.shapes);
                0 < d24.length && (e.geometries = d24);
                0 < h.length && (e.materials = h);
                0 < l.length && (e.textures = l);
                0 < m.length && (e.images = m);
                0 < g.length && (e.shapes = g);
            }
            e.object = f;
            return e;
        },
        clone: function(a) {
            return (new this.constructor).copy(this, a);
        },
        copy: function(a, b) {
            void 0 === b && (b = !0);
            this.name = a.name;
            this.up.copy(a.up);
            this.position.copy(a.position);
            this.quaternion.copy(a.quaternion);
            this.scale.copy(a.scale);
            this.matrix.copy(a.matrix);
            this.matrixWorld.copy(a.matrixWorld);
            this.matrixAutoUpdate = a.matrixAutoUpdate;
            this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate;
            this.layers.mask = a.layers.mask;
            this.visible = a.visible;
            this.castShadow = a.castShadow;
            this.receiveShadow = a.receiveShadow;
            this.frustumCulled = a.frustumCulled;
            this.renderOrder = a.renderOrder;
            this.userData = JSON.parse(JSON.stringify(a.userData));
            if (!0 === b) for(b = 0; b < a.children.length; b++)this.add(a.children[b].clone());
            return this;
        }
    });
    wd.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: wd,
        isScene: !0,
        copy: function(a, b) {
            B1.prototype.copy.call(this, a, b);
            null !== a.background && (this.background = a.background.clone());
            null !== a.fog && (this.fog = a.fog.clone());
            null !== a.overrideMaterial && (this.overrideMaterial = a.overrideMaterial.clone());
            this.autoUpdate = a.autoUpdate;
            this.matrixAutoUpdate = a.matrixAutoUpdate;
            return this;
        },
        toJSON: function(a) {
            var b = B1.prototype.toJSON.call(this, a);
            null !== this.background && (b.object.background = this.background.toJSON(a));
            null !== this.fog && (b.object.fog = this.fog.toJSON());
            return b;
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    });
    var vb = [
        new n1,
        new n1,
        new n1,
        new n1,
        new n1,
        new n1,
        new n1,
        new n1
    ], jb = new n1, od = new n1, pd = new n1, qd = new n1, Mb = new n1, Nb = new n1, rc = new n1, ye = new n1, sf = new n1, tf = new n1, Rb = new n1;
    Object.assign(ab.prototype, {
        isBox3: !0,
        set: function(a, b) {
            this.min.copy(a);
            this.max.copy(b);
            return this;
        },
        setFromArray: function(a) {
            for(var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, l = a.length; h < l; h += 3){
                var m = a[h], k = a[h + 1], n = a[h + 2];
                m < b && (b = m);
                k < c && (c = k);
                n < d && (d = n);
                m > e && (e = m);
                k > f && (f = k);
                n > g && (g = n);
            }
            this.min.set(b, c, d);
            this.max.set(e, f, g);
            return this;
        },
        setFromBufferAttribute: function(a) {
            for(var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, l = a.count; h < l; h++){
                var m = a.getX(h), k = a.getY(h), n = a.getZ(h);
                m < b && (b = m);
                k < c && (c = k);
                n < d && (d = n);
                m > e && (e = m);
                k > f && (f = k);
                n > g && (g = n);
            }
            this.min.set(b, c, d);
            this.max.set(e, f, g);
            return this;
        },
        setFromPoints: function(a) {
            this.makeEmpty();
            for(var b = 0, c = a.length; b < c; b++)this.expandByPoint(a[b]);
            return this;
        },
        setFromCenterAndSize: function(a, b) {
            b = jb.copy(b).multiplyScalar(.5);
            this.min.copy(a).sub(b);
            this.max.copy(a).add(b);
            return this;
        },
        setFromObject: function(a) {
            this.makeEmpty();
            return this.expandByObject(a);
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.min.copy(a.min);
            this.max.copy(a.max);
            return this;
        },
        makeEmpty: function() {
            this.min.x = this.min.y = this.min.z = Infinity;
            this.max.x = this.max.y = this.max.z = -Infinity;
            return this;
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
        },
        getCenter: function(a) {
            void 0 === a && (console.warn("THREE.Box3: .getCenter() target is now required"), a = new n1);
            return this.isEmpty() ? a.set(0, 0, 0) : a.addVectors(this.min, this.max).multiplyScalar(.5);
        },
        getSize: function(a) {
            void 0 === a && (console.warn("THREE.Box3: .getSize() target is now required"), a = new n1);
            return this.isEmpty() ? a.set(0, 0, 0) : a.subVectors(this.max, this.min);
        },
        expandByPoint: function(a) {
            this.min.min(a);
            this.max.max(a);
            return this;
        },
        expandByVector: function(a) {
            this.min.sub(a);
            this.max.add(a);
            return this;
        },
        expandByScalar: function(a) {
            this.min.addScalar(-a);
            this.max.addScalar(a);
            return this;
        },
        expandByObject: function(a) {
            var b;
            a.updateWorldMatrix(!1, !1);
            var c = a.geometry;
            if (void 0 !== c) {
                if (c.isGeometry) {
                    var d = c.vertices;
                    c = 0;
                    for(b = d.length; c < b; c++)jb.copy(d[c]), jb.applyMatrix4(a.matrixWorld), this.expandByPoint(jb);
                } else if (c.isBufferGeometry && (d = c.attributes.position, void 0 !== d)) for(c = 0, b = d.count; c < b; c++)jb.fromBufferAttribute(d, c).applyMatrix4(a.matrixWorld), this.expandByPoint(jb);
            }
            a = a.children;
            c = 0;
            for(b = a.length; c < b; c++)this.expandByObject(a[c]);
            return this;
        },
        containsPoint: function(a) {
            return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0;
        },
        containsBox: function(a) {
            return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z;
        },
        getParameter: function(a, b) {
            void 0 === b && (console.warn("THREE.Box3: .getParameter() target is now required"), b = new n1);
            return b.set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z));
        },
        intersectsBox: function(a) {
            return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0;
        },
        intersectsSphere: function(a) {
            this.clampPoint(a.center, jb);
            return jb.distanceToSquared(a.center) <= a.radius * a.radius;
        },
        intersectsPlane: function(a) {
            if (0 < a.normal.x) {
                var b = a.normal.x * this.min.x;
                var c = a.normal.x * this.max.x;
            } else b = a.normal.x * this.max.x, c = a.normal.x * this.min.x;
            0 < a.normal.y ? (b += a.normal.y * this.min.y, c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y, c += a.normal.y * this.min.y);
            0 < a.normal.z ? (b += a.normal.z * this.min.z, c += a.normal.z * this.max.z) : (b += a.normal.z * this.max.z, c += a.normal.z * this.min.z);
            return b <= -a.constant && c >= -a.constant;
        },
        intersectsTriangle: function(a) {
            if (this.isEmpty()) return !1;
            this.getCenter(ye);
            sf.subVectors(this.max, ye);
            od.subVectors(a.a, ye);
            pd.subVectors(a.b, ye);
            qd.subVectors(a.c, ye);
            Mb.subVectors(pd, od);
            Nb.subVectors(qd, pd);
            rc.subVectors(od, qd);
            a = [
                0,
                -Mb.z,
                Mb.y,
                0,
                -Nb.z,
                Nb.y,
                0,
                -rc.z,
                rc.y,
                Mb.z,
                0,
                -Mb.x,
                Nb.z,
                0,
                -Nb.x,
                rc.z,
                0,
                -rc.x,
                -Mb.y,
                Mb.x,
                0,
                -Nb.y,
                Nb.x,
                0,
                -rc.y,
                rc.x,
                0
            ];
            if (!Qf(a, od, pd, qd, sf)) return !1;
            a = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ];
            if (!Qf(a, od, pd, qd, sf)) return !1;
            tf.crossVectors(Mb, Nb);
            a = [
                tf.x,
                tf.y,
                tf.z
            ];
            return Qf(a, od, pd, qd, sf);
        },
        clampPoint: function(a, b) {
            void 0 === b && (console.warn("THREE.Box3: .clampPoint() target is now required"), b = new n1);
            return b.copy(a).clamp(this.min, this.max);
        },
        distanceToPoint: function(a) {
            return jb.copy(a).clamp(this.min, this.max).sub(a).length();
        },
        getBoundingSphere: function(a) {
            void 0 === a && console.error("THREE.Box3: .getBoundingSphere() target is now required");
            this.getCenter(a.center);
            a.radius = .5 * this.getSize(jb).length();
            return a;
        },
        intersect: function(a) {
            this.min.max(a.min);
            this.max.min(a.max);
            this.isEmpty() && this.makeEmpty();
            return this;
        },
        union: function(a) {
            this.min.min(a.min);
            this.max.max(a.max);
            return this;
        },
        applyMatrix4: function(a) {
            if (this.isEmpty()) return this;
            vb[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(a);
            vb[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(a);
            vb[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(a);
            vb[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(a);
            vb[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(a);
            vb[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(a);
            vb[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(a);
            vb[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(a);
            this.setFromPoints(vb);
            return this;
        },
        translate: function(a) {
            this.min.add(a);
            this.max.add(a);
            return this;
        },
        equals: function(a) {
            return a.min.equals(this.min) && a.max.equals(this.max);
        }
    });
    var yk = new ab;
    Object.assign(nb.prototype, {
        set: function(a, b) {
            this.center.copy(a);
            this.radius = b;
            return this;
        },
        setFromPoints: function(a, b) {
            var c = this.center;
            void 0 !== b ? c.copy(b) : yk.setFromPoints(a).getCenter(c);
            for(var d = b = 0, e = a.length; d < e; d++)b = Math.max(b, c.distanceToSquared(a[d]));
            this.radius = Math.sqrt(b);
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.center.copy(a.center);
            this.radius = a.radius;
            return this;
        },
        empty: function() {
            return 0 >= this.radius;
        },
        containsPoint: function(a) {
            return a.distanceToSquared(this.center) <= this.radius * this.radius;
        },
        distanceToPoint: function(a) {
            return a.distanceTo(this.center) - this.radius;
        },
        intersectsSphere: function(a) {
            var b = this.radius + a.radius;
            return a.center.distanceToSquared(this.center) <= b * b;
        },
        intersectsBox: function(a) {
            return a.intersectsSphere(this);
        },
        intersectsPlane: function(a) {
            return Math.abs(a.distanceToPoint(this.center)) <= this.radius;
        },
        clampPoint: function(a, b) {
            var c = this.center.distanceToSquared(a);
            void 0 === b && (console.warn("THREE.Sphere: .clampPoint() target is now required"), b = new n1);
            b.copy(a);
            c > this.radius * this.radius && (b.sub(this.center).normalize(), b.multiplyScalar(this.radius).add(this.center));
            return b;
        },
        getBoundingBox: function(a) {
            void 0 === a && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), a = new ab);
            a.set(this.center, this.center);
            a.expandByScalar(this.radius);
            return a;
        },
        applyMatrix4: function(a) {
            this.center.applyMatrix4(a);
            this.radius *= a.getMaxScaleOnAxis();
            return this;
        },
        translate: function(a) {
            this.center.add(a);
            return this;
        },
        equals: function(a) {
            return a.center.equals(this.center) && a.radius === this.radius;
        }
    });
    var wb = new n1, Og = new n1, uf = new n1, Ob = new n1, Pg = new n1, vf = new n1, Qg = new n1;
    Object.assign(Sb.prototype, {
        set: function(a, b) {
            this.origin.copy(a);
            this.direction.copy(b);
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.origin.copy(a.origin);
            this.direction.copy(a.direction);
            return this;
        },
        at: function(a, b) {
            void 0 === b && (console.warn("THREE.Ray: .at() target is now required"), b = new n1);
            return b.copy(this.direction).multiplyScalar(a).add(this.origin);
        },
        lookAt: function(a) {
            this.direction.copy(a).sub(this.origin).normalize();
            return this;
        },
        recast: function(a) {
            this.origin.copy(this.at(a, wb));
            return this;
        },
        closestPointToPoint: function(a, b) {
            void 0 === b && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), b = new n1);
            b.subVectors(a, this.origin);
            a = b.dot(this.direction);
            return 0 > a ? b.copy(this.origin) : b.copy(this.direction).multiplyScalar(a).add(this.origin);
        },
        distanceToPoint: function(a) {
            return Math.sqrt(this.distanceSqToPoint(a));
        },
        distanceSqToPoint: function(a) {
            var b = wb.subVectors(a, this.origin).dot(this.direction);
            if (0 > b) return this.origin.distanceToSquared(a);
            wb.copy(this.direction).multiplyScalar(b).add(this.origin);
            return wb.distanceToSquared(a);
        },
        distanceSqToSegment: function(a, b, c, d) {
            Og.copy(a).add(b).multiplyScalar(.5);
            uf.copy(b).sub(a).normalize();
            Ob.copy(this.origin).sub(Og);
            var e = .5 * a.distanceTo(b), f = -this.direction.dot(uf), g = Ob.dot(this.direction), h = -Ob.dot(uf), l = Ob.lengthSq(), m = Math.abs(1 - f * f);
            if (0 < m) {
                a = f * h - g;
                b = f * g - h;
                var k = e * m;
                0 <= a ? b >= -k ? b <= k ? (e = 1 / m, a *= e, b *= e, f = a * (a + f * b + 2 * g) + b * (f * a + b + 2 * h) + l) : (b = e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l) : (b = -e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l) : b <= -k ? (a = Math.max(0, -(-f * e + g)), b = 0 < a ? -e : Math.min(Math.max(-e, -h), e), f = -a * a + b * (b + 2 * h) + l) : b <= k ? (a = 0, b = Math.min(Math.max(-e, -h), e), f = b * (b + 2 * h) + l) : (a = Math.max(0, -(f * e + g)), b = 0 < a ? e : Math.min(Math.max(-e, -h), e), f = -a * a + b * (b + 2 * h) + l);
            } else b = 0 < f ? -e : e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l;
            c && c.copy(this.direction).multiplyScalar(a).add(this.origin);
            d && d.copy(uf).multiplyScalar(b).add(Og);
            return f;
        },
        intersectSphere: function(a, b) {
            wb.subVectors(a.center, this.origin);
            var c = wb.dot(this.direction), d = wb.dot(wb) - c * c;
            a = a.radius * a.radius;
            if (d > a) return null;
            a = Math.sqrt(a - d);
            d = c - a;
            c += a;
            return 0 > d && 0 > c ? null : 0 > d ? this.at(c, b) : this.at(d, b);
        },
        intersectsSphere: function(a) {
            return this.distanceSqToPoint(a.center) <= a.radius * a.radius;
        },
        distanceToPlane: function(a) {
            var b = a.normal.dot(this.direction);
            if (0 === b) return 0 === a.distanceToPoint(this.origin) ? 0 : null;
            a = -(this.origin.dot(a.normal) + a.constant) / b;
            return 0 <= a ? a : null;
        },
        intersectPlane: function(a, b) {
            a = this.distanceToPlane(a);
            return null === a ? null : this.at(a, b);
        },
        intersectsPlane: function(a) {
            var b = a.distanceToPoint(this.origin);
            return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1;
        },
        intersectBox: function(a, b) {
            var c = 1 / this.direction.x;
            var d = 1 / this.direction.y;
            var e = 1 / this.direction.z, f = this.origin;
            if (0 <= c) {
                var g = (a.min.x - f.x) * c;
                c *= a.max.x - f.x;
            } else g = (a.max.x - f.x) * c, c *= a.min.x - f.x;
            if (0 <= d) {
                var h = (a.min.y - f.y) * d;
                d *= a.max.y - f.y;
            } else h = (a.max.y - f.y) * d, d *= a.min.y - f.y;
            if (g > d || h > c) return null;
            if (h > g || g !== g) g = h;
            if (d < c || c !== c) c = d;
            0 <= e ? (h = (a.min.z - f.z) * e, a = (a.max.z - f.z) * e) : (h = (a.max.z - f.z) * e, a = (a.min.z - f.z) * e);
            if (g > a || h > c) return null;
            if (h > g || g !== g) g = h;
            if (a < c || c !== c) c = a;
            return 0 > c ? null : this.at(0 <= g ? g : c, b);
        },
        intersectsBox: function(a) {
            return null !== this.intersectBox(a, wb);
        },
        intersectTriangle: function(a, b, c, d, e) {
            Pg.subVectors(b, a);
            vf.subVectors(c, a);
            Qg.crossVectors(Pg, vf);
            b = this.direction.dot(Qg);
            if (0 < b) {
                if (d) return null;
                d = 1;
            } else if (0 > b) d = -1, b = -b;
            else return null;
            Ob.subVectors(this.origin, a);
            a = d * this.direction.dot(vf.crossVectors(Ob, vf));
            if (0 > a) return null;
            c = d * this.direction.dot(Pg.cross(Ob));
            if (0 > c || a + c > b) return null;
            a = -d * Ob.dot(Qg);
            return 0 > a ? null : this.at(a / b, e);
        },
        applyMatrix4: function(a) {
            this.origin.applyMatrix4(a);
            this.direction.transformDirection(a);
            return this;
        },
        equals: function(a) {
            return a.origin.equals(this.origin) && a.direction.equals(this.direction);
        }
    });
    var Ya = new n1, xb = new n1, Rg = new n1, yb = new n1, rd = new n1, sd = new n1, si = new n1, Sg = new n1, Tg = new n1, Ug = new n1;
    Object.assign(R1, {
        getNormal: function(a, b, c, d) {
            void 0 === d && (console.warn("THREE.Triangle: .getNormal() target is now required"), d = new n1);
            d.subVectors(c, b);
            Ya.subVectors(a, b);
            d.cross(Ya);
            a = d.lengthSq();
            return 0 < a ? d.multiplyScalar(1 / Math.sqrt(a)) : d.set(0, 0, 0);
        },
        getBarycoord: function(a, b, c, d, e) {
            Ya.subVectors(d, b);
            xb.subVectors(c, b);
            Rg.subVectors(a, b);
            a = Ya.dot(Ya);
            b = Ya.dot(xb);
            c = Ya.dot(Rg);
            var f = xb.dot(xb);
            d = xb.dot(Rg);
            var g = a * f - b * b;
            void 0 === e && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), e = new n1);
            if (0 === g) return e.set(-2, -1, -1);
            g = 1 / g;
            f = (f * c - b * d) * g;
            a = (a * d - b * c) * g;
            return e.set(1 - f - a, a, f);
        },
        containsPoint: function(a, b, c, d) {
            R1.getBarycoord(a, b, c, d, yb);
            return 0 <= yb.x && 0 <= yb.y && 1 >= yb.x + yb.y;
        },
        getUV: function(a, b, c, d, e, f, g, h) {
            this.getBarycoord(a, b, c, d, yb);
            h.set(0, 0);
            h.addScaledVector(e, yb.x);
            h.addScaledVector(f, yb.y);
            h.addScaledVector(g, yb.z);
            return h;
        },
        isFrontFacing: function(a, b, c, d) {
            Ya.subVectors(c, b);
            xb.subVectors(a, b);
            return 0 > Ya.cross(xb).dot(d) ? !0 : !1;
        }
    });
    Object.assign(R1.prototype, {
        set: function(a, b, c) {
            this.a.copy(a);
            this.b.copy(b);
            this.c.copy(c);
            return this;
        },
        setFromPointsAndIndices: function(a, b, c, d) {
            this.a.copy(a[b]);
            this.b.copy(a[c]);
            this.c.copy(a[d]);
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.a.copy(a.a);
            this.b.copy(a.b);
            this.c.copy(a.c);
            return this;
        },
        getArea: function() {
            Ya.subVectors(this.c, this.b);
            xb.subVectors(this.a, this.b);
            return .5 * Ya.cross(xb).length();
        },
        getMidpoint: function(a) {
            void 0 === a && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), a = new n1);
            return a.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
        },
        getNormal: function(a) {
            return R1.getNormal(this.a, this.b, this.c, a);
        },
        getPlane: function(a) {
            void 0 === a && (console.warn("THREE.Triangle: .getPlane() target is now required"), a = new n1);
            return a.setFromCoplanarPoints(this.a, this.b, this.c);
        },
        getBarycoord: function(a, b) {
            return R1.getBarycoord(a, this.a, this.b, this.c, b);
        },
        getUV: function(a, b, c, d, e) {
            return R1.getUV(a, this.a, this.b, this.c, b, c, d, e);
        },
        containsPoint: function(a) {
            return R1.containsPoint(a, this.a, this.b, this.c);
        },
        isFrontFacing: function(a) {
            return R1.isFrontFacing(this.a, this.b, this.c, a);
        },
        intersectsBox: function(a) {
            return a.intersectsTriangle(this);
        },
        closestPointToPoint: function(a, b) {
            void 0 === b && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), b = new n1);
            var c = this.a, d = this.b, e = this.c;
            rd.subVectors(d, c);
            sd.subVectors(e, c);
            Sg.subVectors(a, c);
            var f = rd.dot(Sg), g = sd.dot(Sg);
            if (0 >= f && 0 >= g) return b.copy(c);
            Tg.subVectors(a, d);
            var h = rd.dot(Tg), l = sd.dot(Tg);
            if (0 <= h && l <= h) return b.copy(d);
            var m = f * l - h * g;
            if (0 >= m && 0 <= f && 0 >= h) return d = f / (f - h), b.copy(c).addScaledVector(rd, d);
            Ug.subVectors(a, e);
            a = rd.dot(Ug);
            var k = sd.dot(Ug);
            if (0 <= k && a <= k) return b.copy(e);
            f = a * g - f * k;
            if (0 >= f && 0 <= g && 0 >= k) return m = g / (g - k), b.copy(c).addScaledVector(sd, m);
            g = h * k - a * l;
            if (0 >= g && 0 <= l - h && 0 <= a - k) return si.subVectors(e, d), m = (l - h) / (l - h + (a - k)), b.copy(d).addScaledVector(si, m);
            e = 1 / (g + f + m);
            d = f * e;
            m *= e;
            return b.copy(c).addScaledVector(rd, d).addScaledVector(sd, m);
        },
        equals: function(a) {
            return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c);
        }
    });
    var zk = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, Fa = {
        h: 0,
        s: 0,
        l: 0
    }, wf = {
        h: 0,
        s: 0,
        l: 0
    };
    Object.assign(H1.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(a) {
            a && a.isColor ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" === typeof a && this.setStyle(a);
            return this;
        },
        setScalar: function(a) {
            this.b = this.g = this.r = a;
            return this;
        },
        setHex: function(a) {
            a = Math.floor(a);
            this.r = (a >> 16 & 255) / 255;
            this.g = (a >> 8 & 255) / 255;
            this.b = (a & 255) / 255;
            return this;
        },
        setRGB: function(a, b, c) {
            this.r = a;
            this.g = b;
            this.b = c;
            return this;
        },
        setHSL: function(a, b, c) {
            a = L1.euclideanModulo(a, 1);
            b = L1.clamp(b, 0, 1);
            c = L1.clamp(c, 0, 1);
            0 === b ? this.r = this.g = this.b = c : (b = .5 >= c ? c * (1 + b) : c + b - c * b, c = 2 * c - b, this.r = Rf(c, b, a + 1 / 3), this.g = Rf(c, b, a), this.b = Rf(c, b, a - 1 / 3));
            return this;
        },
        setStyle: function(a) {
            function b29(b) {
                void 0 !== b && 1 > parseFloat(b) && console.warn("THREE.Color: Alpha component of " + a + " will be ignored.");
            }
            var c;
            if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
                var d = c[2];
                switch(c[1]){
                    case "rgb":
                    case "rgba":
                        if (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r = Math.min(255, parseInt(c[1], 10)) / 255, this.g = Math.min(255, parseInt(c[2], 10)) / 255, this.b = Math.min(255, parseInt(c[3], 10)) / 255, b29(c[5]), this;
                        if (c = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r = Math.min(100, parseInt(c[1], 10)) / 100, this.g = Math.min(100, parseInt(c[2], 10)) / 100, this.b = Math.min(100, parseInt(c[3], 10)) / 100, b29(c[5]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
                            d = parseFloat(c[1]) / 360;
                            var e = parseInt(c[2], 10) / 100, f = parseInt(c[3], 10) / 100;
                            b29(c[5]);
                            return this.setHSL(d, e, f);
                        }
                }
            } else if (c = /^#([A-Fa-f0-9]+)$/.exec(a)) {
                c = c[1];
                d = c.length;
                if (3 === d) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
                if (6 === d) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this;
            }
            a && 0 < a.length && (c = zk[a], void 0 !== c ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + a));
            return this;
        },
        clone: function() {
            return new this.constructor(this.r, this.g, this.b);
        },
        copy: function(a) {
            this.r = a.r;
            this.g = a.g;
            this.b = a.b;
            return this;
        },
        copyGammaToLinear: function(a, b) {
            void 0 === b && (b = 2);
            this.r = Math.pow(a.r, b);
            this.g = Math.pow(a.g, b);
            this.b = Math.pow(a.b, b);
            return this;
        },
        copyLinearToGamma: function(a, b) {
            void 0 === b && (b = 2);
            b = 0 < b ? 1 / b : 1;
            this.r = Math.pow(a.r, b);
            this.g = Math.pow(a.g, b);
            this.b = Math.pow(a.b, b);
            return this;
        },
        convertGammaToLinear: function(a) {
            this.copyGammaToLinear(this, a);
            return this;
        },
        convertLinearToGamma: function(a) {
            this.copyLinearToGamma(this, a);
            return this;
        },
        copySRGBToLinear: function(a) {
            this.r = Sf(a.r);
            this.g = Sf(a.g);
            this.b = Sf(a.b);
            return this;
        },
        copyLinearToSRGB: function(a) {
            this.r = Tf(a.r);
            this.g = Tf(a.g);
            this.b = Tf(a.b);
            return this;
        },
        convertSRGBToLinear: function() {
            this.copySRGBToLinear(this);
            return this;
        },
        convertLinearToSRGB: function() {
            this.copyLinearToSRGB(this);
            return this;
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6);
        },
        getHSL: function(a) {
            void 0 === a && (console.warn("THREE.Color: .getHSL() target is now required"), a = {
                h: 0,
                s: 0,
                l: 0
            });
            var b = this.r, c = this.g, d = this.b, e = Math.max(b, c, d), f = Math.min(b, c, d), g, h = (f + e) / 2;
            if (f === e) f = g = 0;
            else {
                var l = e - f;
                f = .5 >= h ? l / (e + f) : l / (2 - e - f);
                switch(e){
                    case b:
                        g = (c - d) / l + (c < d ? 6 : 0);
                        break;
                    case c:
                        g = (d - b) / l + 2;
                        break;
                    case d:
                        g = (b - c) / l + 4;
                }
                g /= 6;
            }
            a.h = g;
            a.s = f;
            a.l = h;
            return a;
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
        },
        offsetHSL: function(a, b, c) {
            this.getHSL(Fa);
            Fa.h += a;
            Fa.s += b;
            Fa.l += c;
            this.setHSL(Fa.h, Fa.s, Fa.l);
            return this;
        },
        add: function(a) {
            this.r += a.r;
            this.g += a.g;
            this.b += a.b;
            return this;
        },
        addColors: function(a, b) {
            this.r = a.r + b.r;
            this.g = a.g + b.g;
            this.b = a.b + b.b;
            return this;
        },
        addScalar: function(a) {
            this.r += a;
            this.g += a;
            this.b += a;
            return this;
        },
        sub: function(a) {
            this.r = Math.max(0, this.r - a.r);
            this.g = Math.max(0, this.g - a.g);
            this.b = Math.max(0, this.b - a.b);
            return this;
        },
        multiply: function(a) {
            this.r *= a.r;
            this.g *= a.g;
            this.b *= a.b;
            return this;
        },
        multiplyScalar: function(a) {
            this.r *= a;
            this.g *= a;
            this.b *= a;
            return this;
        },
        lerp: function(a, b) {
            this.r += (a.r - this.r) * b;
            this.g += (a.g - this.g) * b;
            this.b += (a.b - this.b) * b;
            return this;
        },
        lerpHSL: function(a, b) {
            this.getHSL(Fa);
            a.getHSL(wf);
            a = L1.lerp(Fa.h, wf.h, b);
            var c = L1.lerp(Fa.s, wf.s, b);
            b = L1.lerp(Fa.l, wf.l, b);
            this.setHSL(a, c, b);
            return this;
        },
        equals: function(a) {
            return a.r === this.r && a.g === this.g && a.b === this.b;
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.r = a[b];
            this.g = a[b + 1];
            this.b = a[b + 2];
            return this;
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.r;
            a[b + 1] = this.g;
            a[b + 2] = this.b;
            return a;
        },
        toJSON: function() {
            return this.getHex();
        }
    });
    Object.assign(zc.prototype, {
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.normal.copy(a.normal);
            this.color.copy(a.color);
            this.materialIndex = a.materialIndex;
            for(var b = 0, c = a.vertexNormals.length; b < c; b++)this.vertexNormals[b] = a.vertexNormals[b].clone();
            b = 0;
            for(c = a.vertexColors.length; b < c; b++)this.vertexColors[b] = a.vertexColors[b].clone();
            return this;
        }
    });
    var Ti = 0;
    M1.prototype = Object.assign(Object.create(Ba1.prototype), {
        constructor: M1,
        isMaterial: !0,
        onBeforeCompile: function() {},
        setValues: function(a) {
            if (void 0 !== a) for(var b in a){
                var c = a[b];
                if (void 0 === c) console.warn("THREE.Material: '" + b + "' parameter is undefined.");
                else if ("shading" === b) console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === c ? !0 : !1;
                else {
                    var d = this[b];
                    void 0 === d ? console.warn("THREE." + this.type + ": '" + b + "' is not a property of this material.") : d && d.isColor ? d.set(c) : d && d.isVector3 && c && c.isVector3 ? d.copy(c) : this[b] = c;
                }
            }
        },
        toJSON: function(a36) {
            function b30(a) {
                var b = [], c;
                for(c in a){
                    var d = a[c];
                    delete d.metadata;
                    b.push(d);
                }
                return b;
            }
            var c29 = void 0 === a36 || "string" === typeof a36;
            c29 && (a36 = {
                textures: {},
                images: {}
            });
            var d25 = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            d25.uuid = this.uuid;
            d25.type = this.type;
            "" !== this.name && (d25.name = this.name);
            this.color && this.color.isColor && (d25.color = this.color.getHex());
            void 0 !== this.roughness && (d25.roughness = this.roughness);
            void 0 !== this.metalness && (d25.metalness = this.metalness);
            this.sheen && this.sheen.isColor && (d25.sheen = this.sheen.getHex());
            this.emissive && this.emissive.isColor && (d25.emissive = this.emissive.getHex());
            this.emissiveIntensity && 1 !== this.emissiveIntensity && (d25.emissiveIntensity = this.emissiveIntensity);
            this.specular && this.specular.isColor && (d25.specular = this.specular.getHex());
            void 0 !== this.shininess && (d25.shininess = this.shininess);
            void 0 !== this.clearcoat && (d25.clearcoat = this.clearcoat);
            void 0 !== this.clearcoatRoughness && (d25.clearcoatRoughness = this.clearcoatRoughness);
            this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (d25.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(a36).uuid, d25.clearcoatNormalScale = this.clearcoatNormalScale.toArray());
            this.map && this.map.isTexture && (d25.map = this.map.toJSON(a36).uuid);
            this.matcap && this.matcap.isTexture && (d25.matcap = this.matcap.toJSON(a36).uuid);
            this.alphaMap && this.alphaMap.isTexture && (d25.alphaMap = this.alphaMap.toJSON(a36).uuid);
            this.lightMap && this.lightMap.isTexture && (d25.lightMap = this.lightMap.toJSON(a36).uuid);
            this.aoMap && this.aoMap.isTexture && (d25.aoMap = this.aoMap.toJSON(a36).uuid, d25.aoMapIntensity = this.aoMapIntensity);
            this.bumpMap && this.bumpMap.isTexture && (d25.bumpMap = this.bumpMap.toJSON(a36).uuid, d25.bumpScale = this.bumpScale);
            this.normalMap && this.normalMap.isTexture && (d25.normalMap = this.normalMap.toJSON(a36).uuid, d25.normalMapType = this.normalMapType, d25.normalScale = this.normalScale.toArray());
            this.displacementMap && this.displacementMap.isTexture && (d25.displacementMap = this.displacementMap.toJSON(a36).uuid, d25.displacementScale = this.displacementScale, d25.displacementBias = this.displacementBias);
            this.roughnessMap && this.roughnessMap.isTexture && (d25.roughnessMap = this.roughnessMap.toJSON(a36).uuid);
            this.metalnessMap && this.metalnessMap.isTexture && (d25.metalnessMap = this.metalnessMap.toJSON(a36).uuid);
            this.emissiveMap && this.emissiveMap.isTexture && (d25.emissiveMap = this.emissiveMap.toJSON(a36).uuid);
            this.specularMap && this.specularMap.isTexture && (d25.specularMap = this.specularMap.toJSON(a36).uuid);
            this.envMap && this.envMap.isTexture && (d25.envMap = this.envMap.toJSON(a36).uuid, d25.reflectivity = this.reflectivity, d25.refractionRatio = this.refractionRatio, void 0 !== this.combine && (d25.combine = this.combine), void 0 !== this.envMapIntensity && (d25.envMapIntensity = this.envMapIntensity));
            this.gradientMap && this.gradientMap.isTexture && (d25.gradientMap = this.gradientMap.toJSON(a36).uuid);
            void 0 !== this.size && (d25.size = this.size);
            void 0 !== this.sizeAttenuation && (d25.sizeAttenuation = this.sizeAttenuation);
            1 !== this.blending && (d25.blending = this.blending);
            !0 === this.flatShading && (d25.flatShading = this.flatShading);
            0 !== this.side && (d25.side = this.side);
            0 !== this.vertexColors && (d25.vertexColors = this.vertexColors);
            1 > this.opacity && (d25.opacity = this.opacity);
            !0 === this.transparent && (d25.transparent = this.transparent);
            d25.depthFunc = this.depthFunc;
            d25.depthTest = this.depthTest;
            d25.depthWrite = this.depthWrite;
            d25.stencilWrite = this.stencilWrite;
            d25.stencilWriteMask = this.stencilWriteMask;
            d25.stencilFunc = this.stencilFunc;
            d25.stencilRef = this.stencilRef;
            d25.stencilFuncMask = this.stencilFuncMask;
            d25.stencilFail = this.stencilFail;
            d25.stencilZFail = this.stencilZFail;
            d25.stencilZPass = this.stencilZPass;
            this.rotation && 0 !== this.rotation && (d25.rotation = this.rotation);
            !0 === this.polygonOffset && (d25.polygonOffset = !0);
            0 !== this.polygonOffsetFactor && (d25.polygonOffsetFactor = this.polygonOffsetFactor);
            0 !== this.polygonOffsetUnits && (d25.polygonOffsetUnits = this.polygonOffsetUnits);
            this.linewidth && 1 !== this.linewidth && (d25.linewidth = this.linewidth);
            void 0 !== this.dashSize && (d25.dashSize = this.dashSize);
            void 0 !== this.gapSize && (d25.gapSize = this.gapSize);
            void 0 !== this.scale && (d25.scale = this.scale);
            !0 === this.dithering && (d25.dithering = !0);
            0 < this.alphaTest && (d25.alphaTest = this.alphaTest);
            !0 === this.premultipliedAlpha && (d25.premultipliedAlpha = this.premultipliedAlpha);
            !0 === this.wireframe && (d25.wireframe = this.wireframe);
            1 < this.wireframeLinewidth && (d25.wireframeLinewidth = this.wireframeLinewidth);
            "round" !== this.wireframeLinecap && (d25.wireframeLinecap = this.wireframeLinecap);
            "round" !== this.wireframeLinejoin && (d25.wireframeLinejoin = this.wireframeLinejoin);
            !0 === this.morphTargets && (d25.morphTargets = !0);
            !0 === this.morphNormals && (d25.morphNormals = !0);
            !0 === this.skinning && (d25.skinning = !0);
            !1 === this.visible && (d25.visible = !1);
            !1 === this.toneMapped && (d25.toneMapped = !1);
            "{}" !== JSON.stringify(this.userData) && (d25.userData = this.userData);
            c29 && (c29 = b30(a36.textures), a36 = b30(a36.images), 0 < c29.length && (d25.textures = c29), 0 < a36.length && (d25.images = a36));
            return d25;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.name = a.name;
            this.fog = a.fog;
            this.blending = a.blending;
            this.side = a.side;
            this.flatShading = a.flatShading;
            this.vertexColors = a.vertexColors;
            this.opacity = a.opacity;
            this.transparent = a.transparent;
            this.blendSrc = a.blendSrc;
            this.blendDst = a.blendDst;
            this.blendEquation = a.blendEquation;
            this.blendSrcAlpha = a.blendSrcAlpha;
            this.blendDstAlpha = a.blendDstAlpha;
            this.blendEquationAlpha = a.blendEquationAlpha;
            this.depthFunc = a.depthFunc;
            this.depthTest = a.depthTest;
            this.depthWrite = a.depthWrite;
            this.stencilWrite = a.stencilWrite;
            this.stencilWriteMask = a.stencilWriteMask;
            this.stencilFunc = a.stencilFunc;
            this.stencilRef = a.stencilRef;
            this.stencilFuncMask = a.stencilFuncMask;
            this.stencilFail = a.stencilFail;
            this.stencilZFail = a.stencilZFail;
            this.stencilZPass = a.stencilZPass;
            this.colorWrite = a.colorWrite;
            this.precision = a.precision;
            this.polygonOffset = a.polygonOffset;
            this.polygonOffsetFactor = a.polygonOffsetFactor;
            this.polygonOffsetUnits = a.polygonOffsetUnits;
            this.dithering = a.dithering;
            this.alphaTest = a.alphaTest;
            this.premultipliedAlpha = a.premultipliedAlpha;
            this.visible = a.visible;
            this.toneMapped = a.toneMapped;
            this.userData = JSON.parse(JSON.stringify(a.userData));
            this.clipShadows = a.clipShadows;
            this.clipIntersection = a.clipIntersection;
            var b = a.clippingPlanes, c = null;
            if (null !== b) {
                var d = b.length;
                c = Array(d);
                for(var e = 0; e !== d; ++e)c[e] = b[e].clone();
            }
            this.clippingPlanes = c;
            this.shadowSide = a.shadowSide;
            return this;
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    });
    Ga.prototype = Object.create(M1.prototype);
    Ga.prototype.constructor = Ga;
    Ga.prototype.isMeshBasicMaterial = !0;
    Ga.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        return this;
    };
    Object.defineProperty(O1.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++;
        }
    });
    Object.assign(O1.prototype, {
        isBufferAttribute: !0,
        onUploadCallback: function() {},
        setDynamic: function(a) {
            this.dynamic = a;
            return this;
        },
        copy: function(a) {
            this.name = a.name;
            this.array = new a.array.constructor(a.array);
            this.itemSize = a.itemSize;
            this.count = a.count;
            this.normalized = a.normalized;
            this.dynamic = a.dynamic;
            return this;
        },
        copyAt: function(a, b, c) {
            a *= this.itemSize;
            c *= b.itemSize;
            for(var d = 0, e = this.itemSize; d < e; d++)this.array[a + d] = b.array[c + d];
            return this;
        },
        copyArray: function(a) {
            this.array.set(a);
            return this;
        },
        copyColorsArray: function(a) {
            for(var b = this.array, c = 0, d = 0, e = a.length; d < e; d++){
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", d), f = new H1);
                b[c++] = f.r;
                b[c++] = f.g;
                b[c++] = f.b;
            }
            return this;
        },
        copyVector2sArray: function(a) {
            for(var b = this.array, c = 0, d = 0, e = a.length; d < e; d++){
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", d), f = new w1);
                b[c++] = f.x;
                b[c++] = f.y;
            }
            return this;
        },
        copyVector3sArray: function(a) {
            for(var b = this.array, c = 0, d = 0, e = a.length; d < e; d++){
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", d), f = new n1);
                b[c++] = f.x;
                b[c++] = f.y;
                b[c++] = f.z;
            }
            return this;
        },
        copyVector4sArray: function(a) {
            for(var b = this.array, c = 0, d = 0, e = a.length; d < e; d++){
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", d), f = new aa1);
                b[c++] = f.x;
                b[c++] = f.y;
                b[c++] = f.z;
                b[c++] = f.w;
            }
            return this;
        },
        set: function(a, b) {
            void 0 === b && (b = 0);
            this.array.set(a, b);
            return this;
        },
        getX: function(a) {
            return this.array[a * this.itemSize];
        },
        setX: function(a, b) {
            this.array[a * this.itemSize] = b;
            return this;
        },
        getY: function(a) {
            return this.array[a * this.itemSize + 1];
        },
        setY: function(a, b) {
            this.array[a * this.itemSize + 1] = b;
            return this;
        },
        getZ: function(a) {
            return this.array[a * this.itemSize + 2];
        },
        setZ: function(a, b) {
            this.array[a * this.itemSize + 2] = b;
            return this;
        },
        getW: function(a) {
            return this.array[a * this.itemSize + 3];
        },
        setW: function(a, b) {
            this.array[a * this.itemSize + 3] = b;
            return this;
        },
        setXY: function(a, b, c) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a + 1] = c;
            return this;
        },
        setXYZ: function(a, b, c, d) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a + 1] = c;
            this.array[a + 2] = d;
            return this;
        },
        setXYZW: function(a, b, c, d, e) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a + 1] = c;
            this.array[a + 2] = d;
            this.array[a + 3] = e;
            return this;
        },
        onUpload: function(a) {
            this.onUploadCallback = a;
            return this;
        },
        clone: function() {
            return new this.constructor(this.array, this.itemSize).copy(this);
        },
        toJSON: function() {
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.prototype.slice.call(this.array),
                normalized: this.normalized
            };
        }
    });
    xd.prototype = Object.create(O1.prototype);
    xd.prototype.constructor = xd;
    yd.prototype = Object.create(O1.prototype);
    yd.prototype.constructor = yd;
    zd.prototype = Object.create(O1.prototype);
    zd.prototype.constructor = zd;
    Ad.prototype = Object.create(O1.prototype);
    Ad.prototype.constructor = Ad;
    Tb.prototype = Object.create(O1.prototype);
    Tb.prototype.constructor = Tb;
    Bd.prototype = Object.create(O1.prototype);
    Bd.prototype.constructor = Bd;
    Ub.prototype = Object.create(O1.prototype);
    Ub.prototype.constructor = Ub;
    A1.prototype = Object.create(O1.prototype);
    A1.prototype.constructor = A1;
    Cd.prototype = Object.create(O1.prototype);
    Cd.prototype.constructor = Cd;
    Object.assign(jh.prototype, {
        computeGroups: function(a) {
            var b = [], c = void 0;
            a = a.faces;
            for(var d = 0; d < a.length; d++){
                var e = a[d];
                if (e.materialIndex !== c) {
                    c = e.materialIndex;
                    void 0 !== f && (f.count = 3 * d - f.start, b.push(f));
                    var f = {
                        start: 3 * d,
                        materialIndex: c
                    };
                }
            }
            void 0 !== f && (f.count = 3 * d - f.start, b.push(f));
            this.groups = b;
        },
        fromGeometry: function(a) {
            var b = a.faces, c = a.vertices, d = a.faceVertexUvs, e = d[0] && 0 < d[0].length, f = d[1] && 0 < d[1].length, g = a.morphTargets, h = g.length;
            if (0 < h) {
                var l = [];
                for(var m = 0; m < h; m++)l[m] = {
                    name: g[m].name,
                    data: []
                };
                this.morphTargets.position = l;
            }
            var k = a.morphNormals, n = k.length;
            if (0 < n) {
                var t = [];
                for(m = 0; m < n; m++)t[m] = {
                    name: k[m].name,
                    data: []
                };
                this.morphTargets.normal = t;
            }
            var r = a.skinIndices, p = a.skinWeights, v = r.length === c.length, x = p.length === c.length;
            0 < c.length && 0 === b.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
            for(m = 0; m < b.length; m++){
                var z = b[m];
                this.vertices.push(c[z.a], c[z.b], c[z.c]);
                var y = z.vertexNormals;
                3 === y.length ? this.normals.push(y[0], y[1], y[2]) : (y = z.normal, this.normals.push(y, y, y));
                y = z.vertexColors;
                3 === y.length ? this.colors.push(y[0], y[1], y[2]) : (y = z.color, this.colors.push(y, y, y));
                !0 === e && (y = d[0][m], void 0 !== y ? this.uvs.push(y[0], y[1], y[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", m), this.uvs.push(new w1, new w1, new w1)));
                !0 === f && (y = d[1][m], void 0 !== y ? this.uvs2.push(y[0], y[1], y[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", m), this.uvs2.push(new w1, new w1, new w1)));
                for(y = 0; y < h; y++){
                    var A = g[y].vertices;
                    l[y].data.push(A[z.a], A[z.b], A[z.c]);
                }
                for(y = 0; y < n; y++)A = k[y].vertexNormals[m], t[y].data.push(A.a, A.b, A.c);
                v && this.skinIndices.push(r[z.a], r[z.b], r[z.c]);
                x && this.skinWeights.push(p[z.a], p[z.b], p[z.c]);
            }
            this.computeGroups(a);
            this.verticesNeedUpdate = a.verticesNeedUpdate;
            this.normalsNeedUpdate = a.normalsNeedUpdate;
            this.colorsNeedUpdate = a.colorsNeedUpdate;
            this.uvsNeedUpdate = a.uvsNeedUpdate;
            this.groupsNeedUpdate = a.groupsNeedUpdate;
            null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
            null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
            return this;
        }
    });
    var Ui = 1, kb = new U1, Vg = new B1, xf = new n1, sc = new ab, Wg = new ab, Za = new n1;
    E1.prototype = Object.assign(Object.create(Ba1.prototype), {
        constructor: E1,
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index;
        },
        setIndex: function(a) {
            Array.isArray(a) ? this.index = new (65535 < kh(a) ? Ub : Tb)(a, 1) : this.index = a;
        },
        addAttribute: function(a, b, c) {
            return b && b.isBufferAttribute || b && b.isInterleavedBufferAttribute ? "index" === a ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(b), this) : this.setAttribute(a, b) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(a, new O1(b, c)));
        },
        getAttribute: function(a) {
            return this.attributes[a];
        },
        setAttribute: function(a, b) {
            this.attributes[a] = b;
            return this;
        },
        removeAttribute: function(a) {
            delete this.attributes[a];
            return this;
        },
        addGroup: function(a, b, c) {
            this.groups.push({
                start: a,
                count: b,
                materialIndex: void 0 !== c ? c : 0
            });
        },
        clearGroups: function() {
            this.groups = [];
        },
        setDrawRange: function(a, b) {
            this.drawRange.start = a;
            this.drawRange.count = b;
        },
        applyMatrix: function(a) {
            var b = this.attributes.position;
            void 0 !== b && (a.applyToBufferAttribute(b), b.needsUpdate = !0);
            var c = this.attributes.normal;
            void 0 !== c && (b = (new Y1).getNormalMatrix(a), b.applyToBufferAttribute(c), c.needsUpdate = !0);
            c = this.attributes.tangent;
            void 0 !== c && (b = (new Y1).getNormalMatrix(a), b.applyToBufferAttribute(c), c.needsUpdate = !0);
            null !== this.boundingBox && this.computeBoundingBox();
            null !== this.boundingSphere && this.computeBoundingSphere();
            return this;
        },
        rotateX: function(a) {
            kb.makeRotationX(a);
            this.applyMatrix(kb);
            return this;
        },
        rotateY: function(a) {
            kb.makeRotationY(a);
            this.applyMatrix(kb);
            return this;
        },
        rotateZ: function(a) {
            kb.makeRotationZ(a);
            this.applyMatrix(kb);
            return this;
        },
        translate: function(a, b, c) {
            kb.makeTranslation(a, b, c);
            this.applyMatrix(kb);
            return this;
        },
        scale: function(a, b, c) {
            kb.makeScale(a, b, c);
            this.applyMatrix(kb);
            return this;
        },
        lookAt: function(a) {
            Vg.lookAt(a);
            Vg.updateMatrix();
            this.applyMatrix(Vg.matrix);
            return this;
        },
        center: function() {
            this.computeBoundingBox();
            this.boundingBox.getCenter(xf).negate();
            this.translate(xf.x, xf.y, xf.z);
            return this;
        },
        setFromObject: function(a) {
            var b = a.geometry;
            if (a.isPoints || a.isLine) {
                a = new A1(3 * b.vertices.length, 3);
                var c = new A1(3 * b.colors.length, 3);
                this.addAttribute("position", a.copyVector3sArray(b.vertices));
                this.addAttribute("color", c.copyColorsArray(b.colors));
                b.lineDistances && b.lineDistances.length === b.vertices.length && (a = new A1(b.lineDistances.length, 1), this.addAttribute("lineDistance", a.copyArray(b.lineDistances)));
                null !== b.boundingSphere && (this.boundingSphere = b.boundingSphere.clone());
                null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone());
            } else a.isMesh && b && b.isGeometry && this.fromGeometry(b);
            return this;
        },
        setFromPoints: function(a) {
            for(var b = [], c = 0, d = a.length; c < d; c++){
                var e = a[c];
                b.push(e.x, e.y, e.z || 0);
            }
            this.addAttribute("position", new A1(b, 3));
            return this;
        },
        updateFromObject: function(a) {
            var b = a.geometry;
            if (a.isMesh) {
                var c = b.__directGeometry;
                !0 === b.elementsNeedUpdate && (c = void 0, b.elementsNeedUpdate = !1);
                if (void 0 === c) return this.fromGeometry(b);
                c.verticesNeedUpdate = b.verticesNeedUpdate;
                c.normalsNeedUpdate = b.normalsNeedUpdate;
                c.colorsNeedUpdate = b.colorsNeedUpdate;
                c.uvsNeedUpdate = b.uvsNeedUpdate;
                c.groupsNeedUpdate = b.groupsNeedUpdate;
                b.verticesNeedUpdate = !1;
                b.normalsNeedUpdate = !1;
                b.colorsNeedUpdate = !1;
                b.uvsNeedUpdate = !1;
                b.groupsNeedUpdate = !1;
                b = c;
            }
            !0 === b.verticesNeedUpdate && (c = this.attributes.position, void 0 !== c && (c.copyVector3sArray(b.vertices), c.needsUpdate = !0), b.verticesNeedUpdate = !1);
            !0 === b.normalsNeedUpdate && (c = this.attributes.normal, void 0 !== c && (c.copyVector3sArray(b.normals), c.needsUpdate = !0), b.normalsNeedUpdate = !1);
            !0 === b.colorsNeedUpdate && (c = this.attributes.color, void 0 !== c && (c.copyColorsArray(b.colors), c.needsUpdate = !0), b.colorsNeedUpdate = !1);
            b.uvsNeedUpdate && (c = this.attributes.uv, void 0 !== c && (c.copyVector2sArray(b.uvs), c.needsUpdate = !0), b.uvsNeedUpdate = !1);
            b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance, void 0 !== c && (c.copyArray(b.lineDistances), c.needsUpdate = !0), b.lineDistancesNeedUpdate = !1);
            b.groupsNeedUpdate && (b.computeGroups(a.geometry), this.groups = b.groups, b.groupsNeedUpdate = !1);
            return this;
        },
        fromGeometry: function(a) {
            a.__directGeometry = (new jh).fromGeometry(a);
            return this.fromDirectGeometry(a.__directGeometry);
        },
        fromDirectGeometry: function(a) {
            var b = new Float32Array(3 * a.vertices.length);
            this.addAttribute("position", new O1(b, 3).copyVector3sArray(a.vertices));
            0 < a.normals.length && (b = new Float32Array(3 * a.normals.length), this.addAttribute("normal", new O1(b, 3).copyVector3sArray(a.normals)));
            0 < a.colors.length && (b = new Float32Array(3 * a.colors.length), this.addAttribute("color", new O1(b, 3).copyColorsArray(a.colors)));
            0 < a.uvs.length && (b = new Float32Array(2 * a.uvs.length), this.addAttribute("uv", new O1(b, 2).copyVector2sArray(a.uvs)));
            0 < a.uvs2.length && (b = new Float32Array(2 * a.uvs2.length), this.addAttribute("uv2", new O1(b, 2).copyVector2sArray(a.uvs2)));
            this.groups = a.groups;
            for(var c in a.morphTargets){
                b = [];
                for(var d = a.morphTargets[c], e = 0, f = d.length; e < f; e++){
                    var g = d[e], h = new A1(3 * g.data.length, 3);
                    h.name = g.name;
                    b.push(h.copyVector3sArray(g.data));
                }
                this.morphAttributes[c] = b;
            }
            0 < a.skinIndices.length && (c = new A1(4 * a.skinIndices.length, 4), this.addAttribute("skinIndex", c.copyVector4sArray(a.skinIndices)));
            0 < a.skinWeights.length && (c = new A1(4 * a.skinWeights.length, 4), this.addAttribute("skinWeight", c.copyVector4sArray(a.skinWeights)));
            null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
            null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
            return this;
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new ab);
            var a = this.attributes.position, b = this.morphAttributes.position;
            if (void 0 !== a) {
                if (this.boundingBox.setFromBufferAttribute(a), b) {
                    a = 0;
                    for(var c = b.length; a < c; a++)sc.setFromBufferAttribute(b[a]), this.boundingBox.expandByPoint(sc.min), this.boundingBox.expandByPoint(sc.max);
                }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new nb);
            var a = this.attributes.position, b = this.morphAttributes.position;
            if (a) {
                var c = this.boundingSphere.center;
                sc.setFromBufferAttribute(a);
                if (b) for(var d = 0, e = b.length; d < e; d++){
                    var f = b[d];
                    Wg.setFromBufferAttribute(f);
                    sc.expandByPoint(Wg.min);
                    sc.expandByPoint(Wg.max);
                }
                sc.getCenter(c);
                var g = 0;
                d = 0;
                for(e = a.count; d < e; d++)Za.fromBufferAttribute(a, d), g = Math.max(g, c.distanceToSquared(Za));
                if (b) for(d = 0, e = b.length; d < e; d++){
                    f = b[d];
                    a = 0;
                    for(var h = f.count; a < h; a++)Za.fromBufferAttribute(f, a), g = Math.max(g, c.distanceToSquared(Za));
                }
                this.boundingSphere.radius = Math.sqrt(g);
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
        },
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var a = this.index, b = this.attributes;
            if (b.position) {
                var c = b.position.array;
                if (void 0 === b.normal) this.addAttribute("normal", new O1(new Float32Array(c.length), 3));
                else for(var d = b.normal.array, e = 0, f = d.length; e < f; e++)d[e] = 0;
                d = b.normal.array;
                var g = new n1, h = new n1, l = new n1, m = new n1, k = new n1;
                if (a) {
                    var u = a.array;
                    e = 0;
                    for(f = a.count; e < f; e += 3){
                        a = 3 * u[e + 0];
                        var t = 3 * u[e + 1];
                        var r = 3 * u[e + 2];
                        g.fromArray(c, a);
                        h.fromArray(c, t);
                        l.fromArray(c, r);
                        m.subVectors(l, h);
                        k.subVectors(g, h);
                        m.cross(k);
                        d[a] += m.x;
                        d[a + 1] += m.y;
                        d[a + 2] += m.z;
                        d[t] += m.x;
                        d[t + 1] += m.y;
                        d[t + 2] += m.z;
                        d[r] += m.x;
                        d[r + 1] += m.y;
                        d[r + 2] += m.z;
                    }
                } else for(e = 0, f = c.length; e < f; e += 9)g.fromArray(c, e), h.fromArray(c, e + 3), l.fromArray(c, e + 6), m.subVectors(l, h), k.subVectors(g, h), m.cross(k), d[e] = m.x, d[e + 1] = m.y, d[e + 2] = m.z, d[e + 3] = m.x, d[e + 4] = m.y, d[e + 5] = m.z, d[e + 6] = m.x, d[e + 7] = m.y, d[e + 8] = m.z;
                this.normalizeNormals();
                b.normal.needsUpdate = !0;
            }
        },
        merge: function(a, b) {
            if (a && a.isBufferGeometry) {
                void 0 === b && (b = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                var c = this.attributes, d;
                for(d in c)if (void 0 !== a.attributes[d]) {
                    var e = c[d].array, f = a.attributes[d], g = f.array, h = f.itemSize * b;
                    f = Math.min(g.length, e.length - h);
                    for(var l = 0; l < f; l++, h++)e[h] = g[l];
                }
                return this;
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", a);
        },
        normalizeNormals: function() {
            for(var a = this.attributes.normal, b = 0, c = a.count; b < c; b++)Za.x = a.getX(b), Za.y = a.getY(b), Za.z = a.getZ(b), Za.normalize(), a.setXYZ(b, Za.x, Za.y, Za.z);
        },
        toNonIndexed: function() {
            function a37(a, b) {
                var c = a.array;
                a = a.itemSize;
                for(var d = new c.constructor(b.length * a), e, f = 0, g = 0, h = b.length; g < h; g++){
                    e = b[g] * a;
                    for(var l = 0; l < a; l++)d[f++] = c[e++];
                }
                return new O1(d, a);
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var b31 = new E1, c30 = this.index.array, d26 = this.attributes, e18;
            for(e18 in d26){
                var f18 = d26[e18];
                f18 = a37(f18, c30);
                b31.addAttribute(e18, f18);
            }
            var g13 = this.morphAttributes;
            for(e18 in g13){
                var h11 = [], l10 = g13[e18];
                d26 = 0;
                for(var m = l10.length; d26 < m; d26++)f18 = l10[d26], f18 = a37(f18, c30), h11.push(f18);
                b31.morphAttributes[e18] = h11;
            }
            c30 = this.groups;
            d26 = 0;
            for(e18 = c30.length; d26 < e18; d26++)f18 = c30[d26], b31.addGroup(f18.start, f18.count, f18.materialIndex);
            return b31;
        },
        toJSON: function() {
            var a = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            a.uuid = this.uuid;
            a.type = this.type;
            "" !== this.name && (a.name = this.name);
            0 < Object.keys(this.userData).length && (a.userData = this.userData);
            if (void 0 !== this.parameters) {
                var b = this.parameters;
                for(m in b)void 0 !== b[m] && (a[m] = b[m]);
                return a;
            }
            a.data = {
                attributes: {}
            };
            b = this.index;
            null !== b && (a.data.index = {
                type: b.array.constructor.name,
                array: Array.prototype.slice.call(b.array)
            });
            var c = this.attributes;
            for(m in c){
                b = c[m];
                var d = b.toJSON();
                "" !== b.name && (d.name = b.name);
                a.data.attributes[m] = d;
            }
            c = {};
            var e = !1;
            for(m in this.morphAttributes){
                for(var f = this.morphAttributes[m], g = [], h = 0, l = f.length; h < l; h++)b = f[h], d = b.toJSON(), "" !== b.name && (d.name = b.name), g.push(d);
                0 < g.length && (c[m] = g, e = !0);
            }
            e && (a.data.morphAttributes = c);
            var m = this.groups;
            0 < m.length && (a.data.groups = JSON.parse(JSON.stringify(m)));
            m = this.boundingSphere;
            null !== m && (a.data.boundingSphere = {
                center: m.center.toArray(),
                radius: m.radius
            });
            return a;
        },
        clone: function() {
            return (new E1).copy(this);
        },
        copy: function(a) {
            var b;
            this.index = null;
            this.attributes = {};
            this.morphAttributes = {};
            this.groups = [];
            this.boundingSphere = this.boundingBox = null;
            this.name = a.name;
            var c = a.index;
            null !== c && this.setIndex(c.clone());
            c = a.attributes;
            for(g in c)this.addAttribute(g, c[g].clone());
            var d = a.morphAttributes;
            for(g in d){
                var e = [], f = d[g];
                c = 0;
                for(b = f.length; c < b; c++)e.push(f[c].clone());
                this.morphAttributes[g] = e;
            }
            var g = a.groups;
            c = 0;
            for(b = g.length; c < b; c++)d = g[c], this.addGroup(d.start, d.count, d.materialIndex);
            g = a.boundingBox;
            null !== g && (this.boundingBox = g.clone());
            g = a.boundingSphere;
            null !== g && (this.boundingSphere = g.clone());
            this.drawRange.start = a.drawRange.start;
            this.drawRange.count = a.drawRange.count;
            this.userData = a.userData;
            return this;
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    });
    var ti = new U1, tc = new Sb, Xg = new nb, Vb = new n1, Wb = new n1, Xb = new n1, mh = new n1, nh = new n1, oh = new n1, Uf = new n1, Vf = new n1, Wf = new n1, Ac = new w1, Bc = new w1, Cc = new w1, Dd = new n1, Ee = new n1;
    ja1.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: ja1,
        isMesh: !0,
        setDrawMode: function(a) {
            this.drawMode = a;
        },
        copy: function(a) {
            B1.prototype.copy.call(this, a);
            this.drawMode = a.drawMode;
            void 0 !== a.morphTargetInfluences && (this.morphTargetInfluences = a.morphTargetInfluences.slice());
            void 0 !== a.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, a.morphTargetDictionary));
            return this;
        },
        updateMorphTargets: function() {
            var a = this.geometry;
            if (a.isBufferGeometry) {
                a = a.morphAttributes;
                var b = Object.keys(a);
                if (0 < b.length) {
                    var c = a[b[0]];
                    if (void 0 !== c) for(this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = c.length; a < b; a++){
                        var d = c[a].name || String(a);
                        this.morphTargetInfluences.push(0);
                        this.morphTargetDictionary[d] = a;
                    }
                }
            } else a = a.morphTargets, void 0 !== a && 0 < a.length && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        },
        raycast: function(a, b) {
            var c = this.geometry, d = this.material, e = this.matrixWorld;
            if (void 0 !== d && (null === c.boundingSphere && c.computeBoundingSphere(), Xg.copy(c.boundingSphere), Xg.applyMatrix4(e), !1 !== a.ray.intersectsSphere(Xg) && (ti.getInverse(e), tc.copy(a.ray).applyMatrix4(ti), null === c.boundingBox || !1 !== tc.intersectsBox(c.boundingBox)))) {
                if (c.isBufferGeometry) {
                    var f = c.index;
                    e = c.attributes.position;
                    var g = c.morphAttributes.position, h = c.attributes.uv, l = c.attributes.uv2, m = c.groups, k = c.drawRange, n, t;
                    if (null !== f) {
                        if (Array.isArray(d)) {
                            var r = 0;
                            for(n = m.length; r < n; r++){
                                var p = m[r];
                                var v = d[p.materialIndex];
                                var x = Math.max(p.start, k.start);
                                for(t = c = Math.min(p.start + p.count, k.start + k.count); x < t; x += 3){
                                    c = f.getX(x);
                                    var z = f.getX(x + 1);
                                    var y = f.getX(x + 2);
                                    if (c = Fe(this, v, a, tc, e, g, h, l, c, z, y)) c.faceIndex = Math.floor(x / 3), c.face.materialIndex = p.materialIndex, b.push(c);
                                }
                            }
                        } else for(x = Math.max(0, k.start), c = Math.min(f.count, k.start + k.count), r = x, n = c; r < n; r += 3)if (c = f.getX(r), z = f.getX(r + 1), y = f.getX(r + 2), c = Fe(this, d, a, tc, e, g, h, l, c, z, y)) c.faceIndex = Math.floor(r / 3), b.push(c);
                    } else if (void 0 !== e) {
                        if (Array.isArray(d)) {
                            for(r = 0, n = m.length; r < n; r++)for(p = m[r], v = d[p.materialIndex], x = Math.max(p.start, k.start), t = c = Math.min(p.start + p.count, k.start + k.count); x < t; x += 3)if (c = x, z = x + 1, y = x + 2, c = Fe(this, v, a, tc, e, g, h, l, c, z, y)) c.faceIndex = Math.floor(x / 3), c.face.materialIndex = p.materialIndex, b.push(c);
                        } else for(x = Math.max(0, k.start), c = Math.min(e.count, k.start + k.count), r = x, n = c; r < n; r += 3)if (c = r, z = r + 1, y = r + 2, c = Fe(this, d, a, tc, e, g, h, l, c, z, y)) c.faceIndex = Math.floor(r / 3), b.push(c);
                    }
                } else if (c.isGeometry) {
                    for(e = Array.isArray(d), g = c.vertices, h = c.faces, c = c.faceVertexUvs[0], 0 < c.length && (f = c), r = 0, n = h.length; r < n; r++)if (p = h[r], c = e ? d[p.materialIndex] : d, void 0 !== c && (l = g[p.a], m = g[p.b], k = g[p.c], c = lh(this, c, a, tc, l, m, k, Dd))) f && f[r] && (v = f[r], Ac.copy(v[0]), Bc.copy(v[1]), Cc.copy(v[2]), c.uv = R1.getUV(Dd, l, m, k, Ac, Bc, Cc, new w1)), c.face = p, c.faceIndex = r, b.push(c);
                }
            }
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this);
        }
    });
    var Vi = 0, lb = new U1, Yg = new B1, yf = new n1;
    F1.prototype = Object.assign(Object.create(Ba1.prototype), {
        constructor: F1,
        isGeometry: !0,
        applyMatrix: function(a) {
            for(var b = (new Y1).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++)this.vertices[c].applyMatrix4(a);
            c = 0;
            for(d = this.faces.length; c < d; c++){
                a = this.faces[c];
                a.normal.applyMatrix3(b).normalize();
                for(var e = 0, f = a.vertexNormals.length; e < f; e++)a.vertexNormals[e].applyMatrix3(b).normalize();
            }
            null !== this.boundingBox && this.computeBoundingBox();
            null !== this.boundingSphere && this.computeBoundingSphere();
            this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
            return this;
        },
        rotateX: function(a) {
            lb.makeRotationX(a);
            this.applyMatrix(lb);
            return this;
        },
        rotateY: function(a) {
            lb.makeRotationY(a);
            this.applyMatrix(lb);
            return this;
        },
        rotateZ: function(a) {
            lb.makeRotationZ(a);
            this.applyMatrix(lb);
            return this;
        },
        translate: function(a, b, c) {
            lb.makeTranslation(a, b, c);
            this.applyMatrix(lb);
            return this;
        },
        scale: function(a, b, c) {
            lb.makeScale(a, b, c);
            this.applyMatrix(lb);
            return this;
        },
        lookAt: function(a) {
            Yg.lookAt(a);
            Yg.updateMatrix();
            this.applyMatrix(Yg.matrix);
            return this;
        },
        fromBufferGeometry: function(a38) {
            function b32(a, b, d, e) {
                var f = void 0 === h ? [] : [
                    c.colors[a].clone(),
                    c.colors[b].clone(),
                    c.colors[d].clone()
                ], k = void 0 === g ? [] : [
                    (new n1).fromArray(g, 3 * a),
                    (new n1).fromArray(g, 3 * b),
                    (new n1).fromArray(g, 3 * d)
                ];
                e = new zc(a, b, d, k, f, e);
                c.faces.push(e);
                void 0 !== l && c.faceVertexUvs[0].push([
                    (new w1).fromArray(l, 2 * a),
                    (new w1).fromArray(l, 2 * b),
                    (new w1).fromArray(l, 2 * d)
                ]);
                void 0 !== m && c.faceVertexUvs[1].push([
                    (new w1).fromArray(m, 2 * a),
                    (new w1).fromArray(m, 2 * b),
                    (new w1).fromArray(m, 2 * d)
                ]);
            }
            var c = this, d27 = null !== a38.index ? a38.index.array : void 0, e19 = a38.attributes;
            if (void 0 === e19.position) return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
            var f19 = e19.position.array, g = void 0 !== e19.normal ? e19.normal.array : void 0, h = void 0 !== e19.color ? e19.color.array : void 0, l = void 0 !== e19.uv ? e19.uv.array : void 0, m = void 0 !== e19.uv2 ? e19.uv2.array : void 0;
            void 0 !== m && (this.faceVertexUvs[1] = []);
            for(e19 = 0; e19 < f19.length; e19 += 3)c.vertices.push((new n1).fromArray(f19, e19)), void 0 !== h && c.colors.push((new H1).fromArray(h, e19));
            var k7 = a38.groups;
            if (0 < k7.length) for(e19 = 0; e19 < k7.length; e19++){
                f19 = k7[e19];
                var u = f19.start, t = u;
                for(u += f19.count; t < u; t += 3)void 0 !== d27 ? b32(d27[t], d27[t + 1], d27[t + 2], f19.materialIndex) : b32(t, t + 1, t + 2, f19.materialIndex);
            }
            else if (void 0 !== d27) for(e19 = 0; e19 < d27.length; e19 += 3)b32(d27[e19], d27[e19 + 1], d27[e19 + 2]);
            else for(e19 = 0; e19 < f19.length / 3; e19 += 3)b32(e19, e19 + 1, e19 + 2);
            this.computeFaceNormals();
            null !== a38.boundingBox && (this.boundingBox = a38.boundingBox.clone());
            null !== a38.boundingSphere && (this.boundingSphere = a38.boundingSphere.clone());
            return this;
        },
        center: function() {
            this.computeBoundingBox();
            this.boundingBox.getCenter(yf).negate();
            this.translate(yf.x, yf.y, yf.z);
            return this;
        },
        normalize: function() {
            this.computeBoundingSphere();
            var a = this.boundingSphere.center, b = this.boundingSphere.radius;
            b = 0 === b ? 1 : 1 / b;
            var c = new U1;
            c.set(b, 0, 0, -b * a.x, 0, b, 0, -b * a.y, 0, 0, b, -b * a.z, 0, 0, 0, 1);
            this.applyMatrix(c);
            return this;
        },
        computeFaceNormals: function() {
            for(var a = new n1, b = new n1, c = 0, d = this.faces.length; c < d; c++){
                var e = this.faces[c], f = this.vertices[e.a], g = this.vertices[e.b];
                a.subVectors(this.vertices[e.c], g);
                b.subVectors(f, g);
                a.cross(b);
                a.normalize();
                e.normal.copy(a);
            }
        },
        computeVertexNormals: function(a) {
            void 0 === a && (a = !0);
            var b;
            var c = Array(this.vertices.length);
            var d = 0;
            for(b = this.vertices.length; d < b; d++)c[d] = new n1;
            if (a) {
                var e = new n1, f = new n1;
                a = 0;
                for(d = this.faces.length; a < d; a++){
                    b = this.faces[a];
                    var g = this.vertices[b.a];
                    var h = this.vertices[b.b];
                    var l = this.vertices[b.c];
                    e.subVectors(l, h);
                    f.subVectors(g, h);
                    e.cross(f);
                    c[b.a].add(e);
                    c[b.b].add(e);
                    c[b.c].add(e);
                }
            } else for(this.computeFaceNormals(), a = 0, d = this.faces.length; a < d; a++)b = this.faces[a], c[b.a].add(b.normal), c[b.b].add(b.normal), c[b.c].add(b.normal);
            d = 0;
            for(b = this.vertices.length; d < b; d++)c[d].normalize();
            a = 0;
            for(d = this.faces.length; a < d; a++)b = this.faces[a], g = b.vertexNormals, 3 === g.length ? (g[0].copy(c[b.a]), g[1].copy(c[b.b]), g[2].copy(c[b.c])) : (g[0] = c[b.a].clone(), g[1] = c[b.b].clone(), g[2] = c[b.c].clone());
            0 < this.faces.length && (this.normalsNeedUpdate = !0);
        },
        computeFlatVertexNormals: function() {
            var a;
            this.computeFaceNormals();
            var b = 0;
            for(a = this.faces.length; b < a; b++){
                var c = this.faces[b];
                var d = c.vertexNormals;
                3 === d.length ? (d[0].copy(c.normal), d[1].copy(c.normal), d[2].copy(c.normal)) : (d[0] = c.normal.clone(), d[1] = c.normal.clone(), d[2] = c.normal.clone());
            }
            0 < this.faces.length && (this.normalsNeedUpdate = !0);
        },
        computeMorphNormals: function() {
            var a, b;
            var c = 0;
            for(b = this.faces.length; c < b; c++){
                var d = this.faces[c];
                d.__originalFaceNormal ? d.__originalFaceNormal.copy(d.normal) : d.__originalFaceNormal = d.normal.clone();
                d.__originalVertexNormals || (d.__originalVertexNormals = []);
                var e = 0;
                for(a = d.vertexNormals.length; e < a; e++)d.__originalVertexNormals[e] ? d.__originalVertexNormals[e].copy(d.vertexNormals[e]) : d.__originalVertexNormals[e] = d.vertexNormals[e].clone();
            }
            var f = new F1;
            f.faces = this.faces;
            e = 0;
            for(a = this.morphTargets.length; e < a; e++){
                if (!this.morphNormals[e]) {
                    this.morphNormals[e] = {};
                    this.morphNormals[e].faceNormals = [];
                    this.morphNormals[e].vertexNormals = [];
                    d = this.morphNormals[e].faceNormals;
                    var g = this.morphNormals[e].vertexNormals;
                    c = 0;
                    for(b = this.faces.length; c < b; c++){
                        var h = new n1;
                        var l = {
                            a: new n1,
                            b: new n1,
                            c: new n1
                        };
                        d.push(h);
                        g.push(l);
                    }
                }
                g = this.morphNormals[e];
                f.vertices = this.morphTargets[e].vertices;
                f.computeFaceNormals();
                f.computeVertexNormals();
                c = 0;
                for(b = this.faces.length; c < b; c++)d = this.faces[c], h = g.faceNormals[c], l = g.vertexNormals[c], h.copy(d.normal), l.a.copy(d.vertexNormals[0]), l.b.copy(d.vertexNormals[1]), l.c.copy(d.vertexNormals[2]);
            }
            c = 0;
            for(b = this.faces.length; c < b; c++)d = this.faces[c], d.normal = d.__originalFaceNormal, d.vertexNormals = d.__originalVertexNormals;
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new ab);
            this.boundingBox.setFromPoints(this.vertices);
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new nb);
            this.boundingSphere.setFromPoints(this.vertices);
        },
        merge: function(a, b, c) {
            if (a && a.isGeometry) {
                var d, e = this.vertices.length, f = this.vertices, g = a.vertices, h = this.faces, l = a.faces, m = this.colors, k = a.colors;
                void 0 === c && (c = 0);
                void 0 !== b && (d = (new Y1).getNormalMatrix(b));
                for(var n = 0, t = g.length; n < t; n++){
                    var r = g[n].clone();
                    void 0 !== b && r.applyMatrix4(b);
                    f.push(r);
                }
                n = 0;
                for(t = k.length; n < t; n++)m.push(k[n].clone());
                n = 0;
                for(t = l.length; n < t; n++){
                    g = l[n];
                    var p = g.vertexNormals;
                    k = g.vertexColors;
                    m = new zc(g.a + e, g.b + e, g.c + e);
                    m.normal.copy(g.normal);
                    void 0 !== d && m.normal.applyMatrix3(d).normalize();
                    b = 0;
                    for(f = p.length; b < f; b++)r = p[b].clone(), void 0 !== d && r.applyMatrix3(d).normalize(), m.vertexNormals.push(r);
                    m.color.copy(g.color);
                    b = 0;
                    for(f = k.length; b < f; b++)r = k[b], m.vertexColors.push(r.clone());
                    m.materialIndex = g.materialIndex + c;
                    h.push(m);
                }
                n = 0;
                for(t = a.faceVertexUvs.length; n < t; n++)for(c = a.faceVertexUvs[n], void 0 === this.faceVertexUvs[n] && (this.faceVertexUvs[n] = []), b = 0, f = c.length; b < f; b++){
                    d = c[b];
                    e = [];
                    h = 0;
                    for(l = d.length; h < l; h++)e.push(d[h].clone());
                    this.faceVertexUvs[n].push(e);
                }
            } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a);
        },
        mergeMesh: function(a) {
            a && a.isMesh ? (a.matrixAutoUpdate && a.updateMatrix(), this.merge(a.geometry, a.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", a);
        },
        mergeVertices: function() {
            var a = {}, b = [], c = [], d = Math.pow(10, 4), e;
            var f = 0;
            for(e = this.vertices.length; f < e; f++){
                var g = this.vertices[f];
                g = Math.round(g.x * d) + "_" + Math.round(g.y * d) + "_" + Math.round(g.z * d);
                void 0 === a[g] ? (a[g] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[g]];
            }
            a = [];
            f = 0;
            for(e = this.faces.length; f < e; f++)for(d = this.faces[f], d.a = c[d.a], d.b = c[d.b], d.c = c[d.c], d = [
                d.a,
                d.b,
                d.c
            ], g = 0; 3 > g; g++)if (d[g] === d[(g + 1) % 3]) {
                a.push(f);
                break;
            }
            for(f = a.length - 1; 0 <= f; f--)for(d = a[f], this.faces.splice(d, 1), c = 0, e = this.faceVertexUvs.length; c < e; c++)this.faceVertexUvs[c].splice(d, 1);
            f = this.vertices.length - b.length;
            this.vertices = b;
            return f;
        },
        setFromPoints: function(a) {
            this.vertices = [];
            for(var b = 0, c = a.length; b < c; b++){
                var d = a[b];
                this.vertices.push(new n1(d.x, d.y, d.z || 0));
            }
            return this;
        },
        sortFacesByMaterialIndex: function() {
            for(var a39 = this.faces, b33 = a39.length, c = 0; c < b33; c++)a39[c]._id = c;
            a39.sort(function(a, b) {
                return a.materialIndex - b.materialIndex;
            });
            var d = this.faceVertexUvs[0], e = this.faceVertexUvs[1], f, g;
            d && d.length === b33 && (f = []);
            e && e.length === b33 && (g = []);
            for(c = 0; c < b33; c++){
                var h = a39[c]._id;
                f && f.push(d[h]);
                g && g.push(e[h]);
            }
            f && (this.faceVertexUvs[0] = f);
            g && (this.faceVertexUvs[1] = g);
        },
        toJSON: function() {
            function a40(a, b, c) {
                return c ? a | 1 << b : a & ~(1 << b);
            }
            function b34(a) {
                var b = a.x.toString() + a.y.toString() + a.z.toString();
                if (void 0 !== k[b]) return k[b];
                k[b] = l.length / 3;
                l.push(a.x, a.y, a.z);
                return k[b];
            }
            function c31(a) {
                var b = a.r.toString() + a.g.toString() + a.b.toString();
                if (void 0 !== u[b]) return u[b];
                u[b] = n.length;
                n.push(a.getHex());
                return u[b];
            }
            function d(a) {
                var b = a.x.toString() + a.y.toString();
                if (void 0 !== r[b]) return r[b];
                r[b] = t.length / 2;
                t.push(a.x, a.y);
                return r[b];
            }
            var e = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            e.uuid = this.uuid;
            e.type = this.type;
            "" !== this.name && (e.name = this.name);
            if (void 0 !== this.parameters) {
                var f = this.parameters, g;
                for(g in f)void 0 !== f[g] && (e[g] = f[g]);
                return e;
            }
            f = [];
            for(g = 0; g < this.vertices.length; g++){
                var h = this.vertices[g];
                f.push(h.x, h.y, h.z);
            }
            h = [];
            var l = [], k = {}, n = [], u = {}, t = [], r = {};
            for(g = 0; g < this.faces.length; g++){
                var p = this.faces[g], v = void 0 !== this.faceVertexUvs[0][g], x = 0 < p.normal.length(), z = 0 < p.vertexNormals.length, y = 1 !== p.color.r || 1 !== p.color.g || 1 !== p.color.b, w = 0 < p.vertexColors.length, A = 0;
                A = a40(A, 0, 0);
                A = a40(A, 1, !0);
                A = a40(A, 2, !1);
                A = a40(A, 3, v);
                A = a40(A, 4, x);
                A = a40(A, 5, z);
                A = a40(A, 6, y);
                A = a40(A, 7, w);
                h.push(A);
                h.push(p.a, p.b, p.c);
                h.push(p.materialIndex);
                v && (v = this.faceVertexUvs[0][g], h.push(d(v[0]), d(v[1]), d(v[2])));
                x && h.push(b34(p.normal));
                z && (x = p.vertexNormals, h.push(b34(x[0]), b34(x[1]), b34(x[2])));
                y && h.push(c31(p.color));
                w && (p = p.vertexColors, h.push(c31(p[0]), c31(p[1]), c31(p[2])));
            }
            e.data = {};
            e.data.vertices = f;
            e.data.normals = l;
            0 < n.length && (e.data.colors = n);
            0 < t.length && (e.data.uvs = [
                t
            ]);
            e.data.faces = h;
            return e;
        },
        clone: function() {
            return (new F1).copy(this);
        },
        copy: function(a) {
            var b, c, d;
            this.vertices = [];
            this.colors = [];
            this.faces = [];
            this.faceVertexUvs = [
                []
            ];
            this.morphTargets = [];
            this.morphNormals = [];
            this.skinWeights = [];
            this.skinIndices = [];
            this.lineDistances = [];
            this.boundingSphere = this.boundingBox = null;
            this.name = a.name;
            var e = a.vertices;
            var f = 0;
            for(b = e.length; f < b; f++)this.vertices.push(e[f].clone());
            e = a.colors;
            f = 0;
            for(b = e.length; f < b; f++)this.colors.push(e[f].clone());
            e = a.faces;
            f = 0;
            for(b = e.length; f < b; f++)this.faces.push(e[f].clone());
            f = 0;
            for(b = a.faceVertexUvs.length; f < b; f++){
                var g = a.faceVertexUvs[f];
                void 0 === this.faceVertexUvs[f] && (this.faceVertexUvs[f] = []);
                e = 0;
                for(c = g.length; e < c; e++){
                    var h = g[e], l = [];
                    var k = 0;
                    for(d = h.length; k < d; k++)l.push(h[k].clone());
                    this.faceVertexUvs[f].push(l);
                }
            }
            k = a.morphTargets;
            f = 0;
            for(b = k.length; f < b; f++){
                d = {};
                d.name = k[f].name;
                if (void 0 !== k[f].vertices) for(d.vertices = [], e = 0, c = k[f].vertices.length; e < c; e++)d.vertices.push(k[f].vertices[e].clone());
                if (void 0 !== k[f].normals) for(d.normals = [], e = 0, c = k[f].normals.length; e < c; e++)d.normals.push(k[f].normals[e].clone());
                this.morphTargets.push(d);
            }
            k = a.morphNormals;
            f = 0;
            for(b = k.length; f < b; f++){
                d = {};
                if (void 0 !== k[f].vertexNormals) for(d.vertexNormals = [], e = 0, c = k[f].vertexNormals.length; e < c; e++)g = k[f].vertexNormals[e], h = {}, h.a = g.a.clone(), h.b = g.b.clone(), h.c = g.c.clone(), d.vertexNormals.push(h);
                if (void 0 !== k[f].faceNormals) for(d.faceNormals = [], e = 0, c = k[f].faceNormals.length; e < c; e++)d.faceNormals.push(k[f].faceNormals[e].clone());
                this.morphNormals.push(d);
            }
            e = a.skinWeights;
            f = 0;
            for(b = e.length; f < b; f++)this.skinWeights.push(e[f].clone());
            e = a.skinIndices;
            f = 0;
            for(b = e.length; f < b; f++)this.skinIndices.push(e[f].clone());
            e = a.lineDistances;
            f = 0;
            for(b = e.length; f < b; f++)this.lineDistances.push(e[f]);
            f = a.boundingBox;
            null !== f && (this.boundingBox = f.clone());
            f = a.boundingSphere;
            null !== f && (this.boundingSphere = f.clone());
            this.elementsNeedUpdate = a.elementsNeedUpdate;
            this.verticesNeedUpdate = a.verticesNeedUpdate;
            this.uvsNeedUpdate = a.uvsNeedUpdate;
            this.normalsNeedUpdate = a.normalsNeedUpdate;
            this.colorsNeedUpdate = a.colorsNeedUpdate;
            this.lineDistancesNeedUpdate = a.lineDistancesNeedUpdate;
            this.groupsNeedUpdate = a.groupsNeedUpdate;
            return this;
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    });
    var Zg = function(a) {
        function b35(b, d, e, f, g, h) {
            a.call(this);
            this.type = "BoxGeometry";
            this.parameters = {
                width: b,
                height: d,
                depth: e,
                widthSegments: f,
                heightSegments: g,
                depthSegments: h
            };
            this.fromBufferGeometry(new Gd(b, d, e, f, g, h));
            this.mergeVertices();
        }
        a && (b35.__proto__ = a);
        b35.prototype = Object.create(a && a.prototype);
        return b35.prototype.constructor = b35;
    }(F1), Gd = function(a41) {
        function b36(b37, d28, e20, f20, g14, h12) {
            function c32(a, b, c, d, e, f, g, h, l, m, w) {
                var x = f / l, z = g / m, y = f / 2, A = g / 2, C = h / 2;
                g = l + 1;
                var B = m + 1, E = f = 0, D, F, G = new n1;
                for(F = 0; F < B; F++){
                    var H = F * z - A;
                    for(D = 0; D < g; D++)G[a] = (D * x - y) * d, G[b] = H * e, G[c] = C, u.push(G.x, G.y, G.z), G[a] = 0, G[b] = 0, G[c] = 0 < h ? 1 : -1, t.push(G.x, G.y, G.z), r.push(D / l), r.push(1 - F / m), f += 1;
                }
                for(F = 0; F < m; F++)for(D = 0; D < l; D++)a = p + D + g * (F + 1), b = p + (D + 1) + g * (F + 1), c = p + (D + 1) + g * F, q.push(p + D + g * F, a, c), q.push(a, b, c), E += 6;
                k.addGroup(v, E, w);
                v += E;
                p += f;
            }
            a41.call(this);
            this.type = "BoxBufferGeometry";
            this.parameters = {
                width: b37,
                height: d28,
                depth: e20,
                widthSegments: f20,
                heightSegments: g14,
                depthSegments: h12
            };
            var k = this;
            b37 = b37 || 1;
            d28 = d28 || 1;
            e20 = e20 || 1;
            f20 = Math.floor(f20) || 1;
            g14 = Math.floor(g14) || 1;
            h12 = Math.floor(h12) || 1;
            var q = [], u = [], t = [], r = [], p = 0, v = 0;
            c32("z", "y", "x", -1, -1, e20, d28, b37, h12, g14, 0);
            c32("z", "y", "x", 1, -1, e20, d28, -b37, h12, g14, 1);
            c32("x", "z", "y", 1, 1, b37, e20, d28, f20, h12, 2);
            c32("x", "z", "y", 1, -1, b37, e20, -d28, f20, h12, 3);
            c32("x", "y", "z", 1, -1, b37, d28, e20, f20, g14, 4);
            c32("x", "y", "z", -1, -1, b37, d28, -e20, f20, g14, 5);
            this.setIndex(q);
            this.addAttribute("position", new A1(u, 3));
            this.addAttribute("normal", new A1(t, 3));
            this.addAttribute("uv", new A1(r, 2));
        }
        a41 && (b36.__proto__ = a41);
        b36.prototype = Object.create(a41 && a41.prototype);
        return b36.prototype.constructor = b36;
    }(E1), Ak = {
        clone: Yb,
        merge: Da1
    };
    ma1.prototype = Object.create(M1.prototype);
    ma1.prototype.constructor = ma1;
    ma1.prototype.isShaderMaterial = !0;
    ma1.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.fragmentShader = a.fragmentShader;
        this.vertexShader = a.vertexShader;
        this.uniforms = Yb(a.uniforms);
        this.defines = Object.assign({}, a.defines);
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.lights = a.lights;
        this.clipping = a.clipping;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        this.extensions = a.extensions;
        return this;
    };
    ma1.prototype.toJSON = function(a) {
        var b = M1.prototype.toJSON.call(this, a);
        b.uniforms = {};
        for(var c in this.uniforms){
            var d = this.uniforms[c].value;
            b.uniforms[c] = d && d.isTexture ? {
                type: "t",
                value: d.toJSON(a).uuid
            } : d && d.isColor ? {
                type: "c",
                value: d.getHex()
            } : d && d.isVector2 ? {
                type: "v2",
                value: d.toArray()
            } : d && d.isVector3 ? {
                type: "v3",
                value: d.toArray()
            } : d && d.isVector4 ? {
                type: "v4",
                value: d.toArray()
            } : d && d.isMatrix3 ? {
                type: "m3",
                value: d.toArray()
            } : d && d.isMatrix4 ? {
                type: "m4",
                value: d.toArray()
            } : {
                value: d
            };
        }
        0 < Object.keys(this.defines).length && (b.defines = this.defines);
        b.vertexShader = this.vertexShader;
        b.fragmentShader = this.fragmentShader;
        a = {};
        for(var e in this.extensions)!0 === this.extensions[e] && (a[e] = !0);
        0 < Object.keys(a).length && (b.extensions = a);
        return b;
    };
    bb.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: bb,
        isCamera: !0,
        copy: function(a, b) {
            B1.prototype.copy.call(this, a, b);
            this.matrixWorldInverse.copy(a.matrixWorldInverse);
            this.projectionMatrix.copy(a.projectionMatrix);
            this.projectionMatrixInverse.copy(a.projectionMatrixInverse);
            return this;
        },
        getWorldDirection: function(a) {
            void 0 === a && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), a = new n1);
            this.updateMatrixWorld(!0);
            var b = this.matrixWorld.elements;
            return a.set(-b[8], -b[9], -b[10]).normalize();
        },
        updateMatrixWorld: function(a) {
            B1.prototype.updateMatrixWorld.call(this, a);
            this.matrixWorldInverse.getInverse(this.matrixWorld);
        },
        clone: function() {
            return (new this.constructor).copy(this);
        }
    });
    na1.prototype = Object.assign(Object.create(bb.prototype), {
        constructor: na1,
        isPerspectiveCamera: !0,
        copy: function(a, b) {
            bb.prototype.copy.call(this, a, b);
            this.fov = a.fov;
            this.zoom = a.zoom;
            this.near = a.near;
            this.far = a.far;
            this.focus = a.focus;
            this.aspect = a.aspect;
            this.view = null === a.view ? null : Object.assign({}, a.view);
            this.filmGauge = a.filmGauge;
            this.filmOffset = a.filmOffset;
            return this;
        },
        setFocalLength: function(a) {
            a = .5 * this.getFilmHeight() / a;
            this.fov = 2 * L1.RAD2DEG * Math.atan(a);
            this.updateProjectionMatrix();
        },
        getFocalLength: function() {
            var a = Math.tan(.5 * L1.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / a;
        },
        getEffectiveFOV: function() {
            return 2 * L1.RAD2DEG * Math.atan(Math.tan(.5 * L1.DEG2RAD * this.fov) / this.zoom);
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1);
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1);
        },
        setViewOffset: function(a, b, c, d, e, f) {
            this.aspect = a / b;
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            });
            this.view.enabled = !0;
            this.view.fullWidth = a;
            this.view.fullHeight = b;
            this.view.offsetX = c;
            this.view.offsetY = d;
            this.view.width = e;
            this.view.height = f;
            this.updateProjectionMatrix();
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1);
            this.updateProjectionMatrix();
        },
        updateProjectionMatrix: function() {
            var a = this.near, b = a * Math.tan(.5 * L1.DEG2RAD * this.fov) / this.zoom, c = 2 * b, d = this.aspect * c, e = -0.5 * d, f = this.view;
            if (null !== this.view && this.view.enabled) {
                var g = f.fullWidth, h = f.fullHeight;
                e += f.offsetX * d / g;
                b -= f.offsetY * c / h;
                d *= f.width / g;
                c *= f.height / h;
            }
            f = this.filmOffset;
            0 !== f && (e += a * f / this.getFilmWidth());
            this.projectionMatrix.makePerspective(e, e + d, b, b - c, a, this.far);
            this.projectionMatrixInverse.getInverse(this.projectionMatrix);
        },
        toJSON: function(a) {
            a = B1.prototype.toJSON.call(this, a);
            a.object.fov = this.fov;
            a.object.zoom = this.zoom;
            a.object.near = this.near;
            a.object.far = this.far;
            a.object.focus = this.focus;
            a.object.aspect = this.aspect;
            null !== this.view && (a.object.view = Object.assign({}, this.view));
            a.object.filmGauge = this.filmGauge;
            a.object.filmOffset = this.filmOffset;
            return a;
        }
    });
    Dc.prototype = Object.create(B1.prototype);
    Dc.prototype.constructor = Dc;
    Ab.prototype = Object.create(la1.prototype);
    Ab.prototype.constructor = Ab;
    Ab.prototype.isWebGLRenderTargetCube = !0;
    Ab.prototype.fromEquirectangularTexture = function(a, b) {
        this.texture.type = b.type;
        this.texture.format = b.format;
        this.texture.encoding = b.encoding;
        var c = new wd, d = new ma1({
            type: "CubemapFromEquirect",
            uniforms: Yb({
                tEquirect: {
                    value: null
                }
            }),
            vertexShader: "varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
            fragmentShader: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV;\n	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n}",
            side: 1,
            blending: 0
        });
        d.uniforms.tEquirect.value = b;
        b = new ja1(new Gd(5, 5, 5), d);
        c.add(b);
        d = new Dc(1, 10, 1);
        d.renderTarget = this;
        d.renderTarget.texture.name = "CubeCameraTexture";
        d.update(a, c);
        b.geometry.dispose();
        b.material.dispose();
        return this;
    };
    Zb.prototype = Object.create(W1.prototype);
    Zb.prototype.constructor = Zb;
    Zb.prototype.isDataTexture = !0;
    var $g = new n1, Bk = new n1, Ck = new Y1;
    Object.assign(cb.prototype, {
        isPlane: !0,
        set: function(a, b) {
            this.normal.copy(a);
            this.constant = b;
            return this;
        },
        setComponents: function(a, b, c, d) {
            this.normal.set(a, b, c);
            this.constant = d;
            return this;
        },
        setFromNormalAndCoplanarPoint: function(a, b) {
            this.normal.copy(a);
            this.constant = -b.dot(this.normal);
            return this;
        },
        setFromCoplanarPoints: function(a, b, c) {
            b = $g.subVectors(c, b).cross(Bk.subVectors(a, b)).normalize();
            this.setFromNormalAndCoplanarPoint(b, a);
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.normal.copy(a.normal);
            this.constant = a.constant;
            return this;
        },
        normalize: function() {
            var a = 1 / this.normal.length();
            this.normal.multiplyScalar(a);
            this.constant *= a;
            return this;
        },
        negate: function() {
            this.constant *= -1;
            this.normal.negate();
            return this;
        },
        distanceToPoint: function(a) {
            return this.normal.dot(a) + this.constant;
        },
        distanceToSphere: function(a) {
            return this.distanceToPoint(a.center) - a.radius;
        },
        projectPoint: function(a, b) {
            void 0 === b && (console.warn("THREE.Plane: .projectPoint() target is now required"), b = new n1);
            return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a);
        },
        intersectLine: function(a, b) {
            void 0 === b && (console.warn("THREE.Plane: .intersectLine() target is now required"), b = new n1);
            var c = a.delta($g), d = this.normal.dot(c);
            if (0 === d) {
                if (0 === this.distanceToPoint(a.start)) return b.copy(a.start);
            } else if (d = -(a.start.dot(this.normal) + this.constant) / d, !(0 > d || 1 < d)) return b.copy(c).multiplyScalar(d).add(a.start);
        },
        intersectsLine: function(a) {
            var b = this.distanceToPoint(a.start);
            a = this.distanceToPoint(a.end);
            return 0 > b && 0 < a || 0 > a && 0 < b;
        },
        intersectsBox: function(a) {
            return a.intersectsPlane(this);
        },
        intersectsSphere: function(a) {
            return a.intersectsPlane(this);
        },
        coplanarPoint: function(a) {
            void 0 === a && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), a = new n1);
            return a.copy(this.normal).multiplyScalar(-this.constant);
        },
        applyMatrix4: function(a, b) {
            b = b || Ck.getNormalMatrix(a);
            a = this.coplanarPoint($g).applyMatrix4(a);
            b = this.normal.applyMatrix3(b).normalize();
            this.constant = -a.dot(b);
            return this;
        },
        translate: function(a) {
            this.constant -= a.dot(this.normal);
            return this;
        },
        equals: function(a) {
            return a.normal.equals(this.normal) && a.constant === this.constant;
        }
    });
    var td = new nb, zf = new n1;
    Object.assign(Ed.prototype, {
        set: function(a, b, c, d, e, f) {
            var g = this.planes;
            g[0].copy(a);
            g[1].copy(b);
            g[2].copy(c);
            g[3].copy(d);
            g[4].copy(e);
            g[5].copy(f);
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            for(var b = this.planes, c = 0; 6 > c; c++)b[c].copy(a.planes[c]);
            return this;
        },
        setFromMatrix: function(a) {
            var b = this.planes, c = a.elements;
            a = c[0];
            var d = c[1], e = c[2], f = c[3], g = c[4], h = c[5], l = c[6], k = c[7], n = c[8], u = c[9], t = c[10], r = c[11], p = c[12], v = c[13], x = c[14];
            c = c[15];
            b[0].setComponents(f - a, k - g, r - n, c - p).normalize();
            b[1].setComponents(f + a, k + g, r + n, c + p).normalize();
            b[2].setComponents(f + d, k + h, r + u, c + v).normalize();
            b[3].setComponents(f - d, k - h, r - u, c - v).normalize();
            b[4].setComponents(f - e, k - l, r - t, c - x).normalize();
            b[5].setComponents(f + e, k + l, r + t, c + x).normalize();
            return this;
        },
        intersectsObject: function(a) {
            var b = a.geometry;
            null === b.boundingSphere && b.computeBoundingSphere();
            td.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);
            return this.intersectsSphere(td);
        },
        intersectsSprite: function(a) {
            td.center.set(0, 0, 0);
            td.radius = .7071067811865476;
            td.applyMatrix4(a.matrixWorld);
            return this.intersectsSphere(td);
        },
        intersectsSphere: function(a) {
            var b = this.planes, c = a.center;
            a = -a.radius;
            for(var d = 0; 6 > d; d++)if (b[d].distanceToPoint(c) < a) return !1;
            return !0;
        },
        intersectsBox: function(a) {
            for(var b = this.planes, c = 0; 6 > c; c++){
                var d = b[c];
                zf.x = 0 < d.normal.x ? a.max.x : a.min.x;
                zf.y = 0 < d.normal.y ? a.max.y : a.min.y;
                zf.z = 0 < d.normal.z ? a.max.z : a.min.z;
                if (0 > d.distanceToPoint(zf)) return !1;
            }
            return !0;
        },
        containsPoint: function(a) {
            for(var b = this.planes, c = 0; 6 > c; c++)if (0 > b[c].distanceToPoint(a)) return !1;
            return !0;
        }
    });
    var N1 = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n	#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	return vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n#else\n	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n	}\n	return 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n	return Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + viewDir );\n	float dotNL = saturate( dot( normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE  = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS  = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n	return specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n	vec3 FssEss = F * brdf.x + brdf.y;\n	float Ess = brdf.x + brdf.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n	float invAlpha  = 1.0 / roughness;\n	float cos2h = NoH * NoH;\n	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n	vec3 N = geometry.normal;\n	vec3 V = geometry.viewDir;\n	vec3 H = normalize( V + L );\n	float dotNH = saturate( dot( N, H ) );\n	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 );\n		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		if ( clipped ) discard;\n	#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n		varying vec3 vViewPosition;\n	#endif\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n	varying vec3 vViewPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n	vViewPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#ifdef USE_COLOR\n	diffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif",
        color_pars_vertex: "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n	vColor.xyz = color.xyz;\n#endif",
        common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n	return dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n	vec3 absDirection = abs(direction);\n	int face = -1;\n	if( absDirection.x > absDirection.z ) {\n		if(absDirection.x > absDirection.y )\n			face = direction.x > 0.0 ? 0 : 3;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	else {\n		if(absDirection.z > absDirection.y )\n			face = direction.z > 0.0 ? 2 : 5;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	return face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n	float dxRoughness = dFdx(roughness);\n	float dyRoughness = dFdy(roughness);\n	vec3 dx = dFdx( vec * scale * dxRoughness );\n	vec3 dy = dFdy( vec * scale * dyRoughness );\n	float d = max( dot( dx, dx ), dot( dy, dy ) );\n	d = clamp(d, 1.0, cubeUV_rangeClamp);\n	float mipLevel = 0.5 * log2(d);\n	return vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n	float a = 16.0 * cubeUV_rcpTextureSize;\n	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n	float powScale = exp2_packed.x * exp2_packed.y;\n	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n	bool bRes = mipLevel == 0.0;\n	scale =  bRes && (scale < a) ? a : scale;\n	vec3 r;\n	vec2 offset;\n	int face = getFaceFromDirection(direction);\n	float rcpPowScale = 1.0 / powScale;\n	if( face == 0) {\n		r = vec3(direction.x, -direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n	}\n	else if( face == 1) {\n		r = vec3(direction.y, direction.x, direction.z);\n		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n	}\n	else if( face == 2) {\n		r = vec3(direction.z, direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n	}\n	else if( face == 3) {\n		r = vec3(direction.x, direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n	}\n	else if( face == 4) {\n		r = vec3(direction.y, direction.x, -direction.z);\n		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n	}\n	else {\n		r = vec3(direction.z, -direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n	}\n	r = normalize(r);\n	float texelOffset = 0.5 * cubeUV_rcpTextureSize;\n	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n	vec2 base = offset + vec2( texelOffset );\n	return base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n	float roughnessVal = roughness* cubeUV_maxLods3;\n	float r1 = floor(roughnessVal);\n	float r2 = r1 + 1.0;\n	float t = fract(roughnessVal);\n	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n	float s = mipInfo.y;\n	float level0 = mipInfo.x;\n	float level1 = level0 + 1.0;\n	level1 = level1 > 5.0 ? 5.0 : level1;\n	level0 += min( floor( s + 0.5 ), 5.0 );\n	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n	vec4 result = mix(color10, color20, t);\n	return vec4(result.rgb, 1.0);\n}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	transformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = normalMatrix * objectTangent;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n	float maxComponent = max( max( value.r, value.g ), value.b );\n	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.r, max( value.g, value.b ) );\n	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n	M = ceil( M * 255.0 ) / 255.0;\n	return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.r, max( value.g, value.b ) );\n	float D = max( maxRange / maxRGB, 1.0 );\n	D = min( floor( D ) / 255.0, 1.0 );\n	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n	vec4 vResult;\n	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n	vResult.w = fract( Le );\n	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n	return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n	float Le = value.z * 255.0 + value.w;\n	vec3 Xp_Y_XYZp;\n	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n	return vec4( max( vRGB, 0.0 ), 1.0 );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		reflectVec = normalize( reflectVec );\n		sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n		sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		reflectVec = normalize( reflectVec );\n		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	envColor = envMapTexelToLinear( envColor );\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
        envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform int maxMipLevel;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n	#ifdef ENVMAP_MODE_REFRACTION\n		uniform float refractionRatio;\n	#endif\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			vec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n		#else\n			vec4 envMapColor = vec4( 0.0 );\n		#endif\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float sigma = PI * roughness * roughness / ( 1.0 + roughness );\n		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n		  vec3 reflectVec = reflect( -viewDir, normal );\n		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n		#else\n		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n		#endif\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			vec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n		#elif defined( ENVMAP_TYPE_EQUIREC )\n			vec2 sampleUV;\n			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_SPHERE )\n			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#endif\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n	fogDepth = -mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n	varying float fogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float fogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef TOON\n	uniform sampler2D gradientMap;\n	vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n		float dotNL = dot( normal, lightDirection );\n		vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n		#ifdef USE_GRADIENTMAP\n			return texture2D( gradientMap, coord ).rgb;\n		#else\n			return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n		#endif\n	}\n#endif",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n	vIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n#endif",
        lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n		float shadowCameraNear;\n		float shadowCameraFar;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		directLight.color = pointLight.color;\n		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n		directLight.visible = ( directLight.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n		if ( angleCos > spotLight.coneCos ) {\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			irradiance *= PI;\n		#endif\n		return irradiance;\n	}\n#endif",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	#ifdef TOON\n		vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	#else\n		float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n		vec3 irradiance = dotNL * directLight.color;\n	#endif\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef REFLECTIVITY\n	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n	material.clearcoat = saturate( clearcoat );	material.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheen;\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3	diffuseColor;\n	float	specularRoughness;\n	vec3	specularColor;\n#ifdef CLEARCOAT\n	float clearcoat;\n	float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	vec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.specularRoughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	#ifdef CLEARCOAT\n		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = ccDotNL * directLight.color;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			ccIrradiance *= PI;\n		#endif\n		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n	#else\n		float clearcoatDHR = 0.0;\n	#endif\n	#ifdef USE_SHEEN\n		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n			material.specularRoughness,\n			directLight.direction,\n			geometry,\n			material.sheenColor\n		);\n	#else\n		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n	#endif\n	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef CLEARCOAT\n		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n		float ccDotNL = ccDotNV;\n		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n	#else\n		float clearcoatDHR = 0.0;\n	#endif\n	float clearcoatInv = 1.0 - clearcoatDHR;\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\n#ifdef CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		directLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		directLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n	#ifdef CLEARCOAT\n		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n	#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 1.0 ? log2( vFragDepth ) * logDepthBufFC * 0.5 : gl_FragCoord.z;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
        map_particle_fragment: "#ifdef USE_MAP\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	vec4 mapTexel = texture2D( map, uv );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n#endif",
        map_particle_pars_fragment: "#ifdef USE_MAP\n	uniform mat3 uvTransform;\n	uniform sampler2D map;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_MORPHNORMALS\n	uniform float morphTargetInfluences[ 8 ];\n	#else\n	uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n	#endif\n#endif",
        normal_fragment_begin: "#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;",
        normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	#ifdef USE_TANGENT\n		mat3 vTBN = mat3( tangent, bitangent, normal );\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( -vViewPosition, normal, normalScale, normalMap );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 normalScale, in sampler2D normalMap ) {\n		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		float scale = sign( st1.t * st0.s - st0.t * st1.s );\n		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n		vec3 N = normalize( surf_norm );\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy *= normalScale;\n		#ifdef DOUBLE_SIDED\n			bool frontFacing = dot( cross( S, T ), N ) > 0.0;\n			mapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );\n		#else\n			mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n		#endif\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n	}\n#endif",
        clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
        clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = clearcoatNormalScale * mapN.xy;\n		clearcoatNormal = normalize( vTBN * mapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatNormalScale, clearcoatNormalMap );\n	#endif\n#endif",
        clearcoat_normalmap_pars_fragment: "#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec4 encodeHalfRGBA ( vec2 v ) {\n	vec4 encoded = vec4( 0.0 );\n	const vec2 offset = vec2( 1.0 / 255.0, 0.0 );\n	encoded.xy = vec2( v.x, fract( v.x * 255.0 ) );\n	encoded.xy = encoded.xy - ( encoded.yy * offset );\n	encoded.zw = vec2( v.y, fract( v.y * 255.0 ) );\n	encoded.zw = encoded.zw - ( encoded.ww * offset );\n	return encoded;\n}\nvec2 decodeHalfRGBA( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return decodeHalfRGBA( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n		const vec2 offset = vec2( 0.0, 1.0 );\n		vec2 texelSize = vec2( 1.0 ) / size;\n		vec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n		vec2 f = fract( uv * size + 0.5 );\n		float a = mix( lb, lt, f.y );\n		float b = mix( rb, rt, f.y );\n		float c = mix( a, b, f.x );\n		return c;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			shadow = (\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLight directionalLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		shadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLight spotLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLights[ i ];\n		shadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLight pointLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLights[ i ];\n		shadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#endif\n	#endif\n	return shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform highp sampler2D boneTexture;\n		uniform int boneTextureSize;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureSize ) );\n			float y = floor( j / float( boneTextureSize ) );\n			float dx = 1.0 / float( boneTextureSize );\n			float dy = 1.0 / float( boneTextureSize );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
        uv_pars_fragment: "#ifdef USE_UV\n	varying vec2 vUv;\n#endif",
        uv_pars_vertex: "#ifdef USE_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif",
        uv_vertex: "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = uv2;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	gl_FragColor = mapTexelToLinear( texColor );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = mapTexelToLinear( texColor );\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n	#endif\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV;\n	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	vec4 texColor = texture2D( tEquirect, sampleUV );\n	gl_FragColor = mapTexelToLinear( texColor );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_ENVMAP\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n	#else\n		reflectedLight.indirectDiffuse += vIndirectFront;\n	#endif\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n		matcapColor = matcapTexelToLinear( matcapColor );\n	#else\n		vec4 matcapColor = vec4( 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#ifndef FLAT_SHADED\n		vNormal = normalize( transformedNormal );\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define REFLECTIVITY\n	#define CLEARCOAT\n	#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n	uniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n	uniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#ifdef TRANSPARENCY\n		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n	#endif\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
        normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <fog_fragment>\n}",
        shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}"
    }, I1 = {
        common: {
            diffuse: {
                value: new H1(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Y1
            },
            alphaMap: {
                value: null
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            },
            maxMipLevel: {
                value: 0
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new w1(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 2.5E-4
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2E3
            },
            fogColor: {
                value: new H1(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            }
        },
        points: {
            diffuse: {
                value: new H1(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Y1
            }
        },
        sprite: {
            diffuse: {
                value: new H1(15658734)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new w1(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Y1
            }
        }
    }, db = {
        basic: {
            uniforms: Da1([
                I1.common,
                I1.specularmap,
                I1.envmap,
                I1.aomap,
                I1.lightmap,
                I1.fog
            ]),
            vertexShader: N1.meshbasic_vert,
            fragmentShader: N1.meshbasic_frag
        },
        lambert: {
            uniforms: Da1([
                I1.common,
                I1.specularmap,
                I1.envmap,
                I1.aomap,
                I1.lightmap,
                I1.emissivemap,
                I1.fog,
                I1.lights,
                {
                    emissive: {
                        value: new H1(0)
                    }
                }
            ]),
            vertexShader: N1.meshlambert_vert,
            fragmentShader: N1.meshlambert_frag
        },
        phong: {
            uniforms: Da1([
                I1.common,
                I1.specularmap,
                I1.envmap,
                I1.aomap,
                I1.lightmap,
                I1.emissivemap,
                I1.bumpmap,
                I1.normalmap,
                I1.displacementmap,
                I1.gradientmap,
                I1.fog,
                I1.lights,
                {
                    emissive: {
                        value: new H1(0)
                    },
                    specular: {
                        value: new H1(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }
            ]),
            vertexShader: N1.meshphong_vert,
            fragmentShader: N1.meshphong_frag
        },
        standard: {
            uniforms: Da1([
                I1.common,
                I1.envmap,
                I1.aomap,
                I1.lightmap,
                I1.emissivemap,
                I1.bumpmap,
                I1.normalmap,
                I1.displacementmap,
                I1.roughnessmap,
                I1.metalnessmap,
                I1.fog,
                I1.lights,
                {
                    emissive: {
                        value: new H1(0)
                    },
                    roughness: {
                        value: .5
                    },
                    metalness: {
                        value: .5
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: N1.meshphysical_vert,
            fragmentShader: N1.meshphysical_frag
        },
        matcap: {
            uniforms: Da1([
                I1.common,
                I1.bumpmap,
                I1.normalmap,
                I1.displacementmap,
                I1.fog,
                {
                    matcap: {
                        value: null
                    }
                }
            ]),
            vertexShader: N1.meshmatcap_vert,
            fragmentShader: N1.meshmatcap_frag
        },
        points: {
            uniforms: Da1([
                I1.points,
                I1.fog
            ]),
            vertexShader: N1.points_vert,
            fragmentShader: N1.points_frag
        },
        dashed: {
            uniforms: Da1([
                I1.common,
                I1.fog,
                {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }
            ]),
            vertexShader: N1.linedashed_vert,
            fragmentShader: N1.linedashed_frag
        },
        depth: {
            uniforms: Da1([
                I1.common,
                I1.displacementmap
            ]),
            vertexShader: N1.depth_vert,
            fragmentShader: N1.depth_frag
        },
        normal: {
            uniforms: Da1([
                I1.common,
                I1.bumpmap,
                I1.normalmap,
                I1.displacementmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: N1.normal_vert,
            fragmentShader: N1.normal_frag
        },
        sprite: {
            uniforms: Da1([
                I1.sprite,
                I1.fog
            ]),
            vertexShader: N1.sprite_vert,
            fragmentShader: N1.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new Y1
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: N1.background_vert,
            fragmentShader: N1.background_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: N1.cube_vert,
            fragmentShader: N1.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: N1.equirect_vert,
            fragmentShader: N1.equirect_frag
        },
        distanceRGBA: {
            uniforms: Da1([
                I1.common,
                I1.displacementmap,
                {
                    referencePosition: {
                        value: new n1
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1E3
                    }
                }
            ]),
            vertexShader: N1.distanceRGBA_vert,
            fragmentShader: N1.distanceRGBA_frag
        },
        shadow: {
            uniforms: Da1([
                I1.lights,
                I1.fog,
                {
                    color: {
                        value: new H1(0)
                    },
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: N1.shadow_vert,
            fragmentShader: N1.shadow_frag
        }
    };
    db.physical = {
        uniforms: Da1([
            db.standard.uniforms,
            {
                transparency: {
                    value: 0
                },
                clearcoat: {
                    value: 0
                },
                clearcoatRoughness: {
                    value: 0
                },
                sheen: {
                    value: new H1(0)
                },
                clearcoatNormalScale: {
                    value: new w1(1, 1)
                },
                clearcoatNormalMap: {
                    value: null
                }
            }
        ]),
        vertexShader: N1.meshphysical_vert,
        fragmentShader: N1.meshphysical_frag
    };
    Fd.prototype = Object.create(F1.prototype);
    Fd.prototype.constructor = Fd;
    $b.prototype = Object.create(E1.prototype);
    $b.prototype.constructor = $b;
    ob.prototype = Object.create(W1.prototype);
    ob.prototype.constructor = ob;
    ob.prototype.isCubeTexture = !0;
    Object.defineProperty(ob.prototype, "images", {
        get: function() {
            return this.image;
        },
        set: function(a) {
            this.image = a;
        }
    });
    Ec.prototype = Object.create(W1.prototype);
    Ec.prototype.constructor = Ec;
    Ec.prototype.isDataTexture2DArray = !0;
    Fc.prototype = Object.create(W1.prototype);
    Fc.prototype.constructor = Fc;
    Fc.prototype.isDataTexture3D = !0;
    var vh = new W1, qj = new Ec, sj = new Fc, wh = new ob, ph = [], rh = [], uh = new Float32Array(16), th = new Float32Array(9), sh = new Float32Array(4);
    xh.prototype.updateCache = function(a) {
        var b = this.cache;
        a instanceof Float32Array && b.length !== a.length && (this.cache = new Float32Array(a.length));
        Ha(b, a);
    };
    yh.prototype.setValue = function(a, b, c) {
        for(var d = this.seq, e = 0, f = d.length; e !== f; ++e){
            var g = d[e];
            g.setValue(a, b[g.id], c);
        }
    };
    var Yf = /([\w\d_]+)(\])?(\[|\.)?/g;
    Bb.prototype.setValue = function(a, b, c, d) {
        b = this.map[b];
        void 0 !== b && b.setValue(a, c, d);
    };
    Bb.prototype.setOptional = function(a, b, c) {
        b = b[c];
        void 0 !== b && this.setValue(a, c, b);
    };
    Bb.upload = function(a, b, c, d) {
        for(var e = 0, f = b.length; e !== f; ++e){
            var g = b[e], h = c[g.id];
            !1 !== h.needsUpdate && g.setValue(a, h.value, d);
        }
    };
    Bb.seqWithValue = function(a, b) {
        for(var c = [], d = 0, e = a.length; d !== e; ++d){
            var f = a[d];
            f.id in b && c.push(f);
        }
        return c;
    };
    var Xj = 0, $f = /^[ \t]*#include +<([\w\d./]+)>/gm, Gh = /#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g, gk = 0;
    Db.prototype = Object.create(M1.prototype);
    Db.prototype.constructor = Db;
    Db.prototype.isMeshDepthMaterial = !0;
    Db.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.depthPacking = a.depthPacking;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.map = a.map;
        this.alphaMap = a.alphaMap;
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        return this;
    };
    Eb.prototype = Object.create(M1.prototype);
    Eb.prototype.constructor = Eb;
    Eb.prototype.isMeshDistanceMaterial = !0;
    Eb.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.referencePosition.copy(a.referencePosition);
        this.nearDistance = a.nearDistance;
        this.farDistance = a.farDistance;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.map = a.map;
        this.alphaMap = a.alphaMap;
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        return this;
    };
    fg.prototype = Object.assign(Object.create(la1.prototype), {
        constructor: fg,
        isWebGLMultiviewRenderTarget: !0,
        copy: function(a) {
            la1.prototype.copy.call(this, a);
            this.numViews = a.numViews;
            return this;
        },
        setNumViews: function(a) {
            this.numViews !== a && (this.numViews = a, this.dispose());
            return this;
        }
    });
    Hc.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: Hc,
        isGroup: !0
    });
    Jd.prototype = Object.assign(Object.create(na1.prototype), {
        constructor: Jd,
        isArrayCamera: !0
    });
    var Mh = new n1, Nh = new n1;
    Object.assign(gg.prototype, Ba1.prototype);
    Object.assign(Oh.prototype, Ba1.prototype);
    Object.assign(Ie.prototype, {
        isFogExp2: !0,
        clone: function() {
            return new Ie(this.color, this.density);
        },
        toJSON: function() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            };
        }
    });
    Object.assign(Je.prototype, {
        isFog: !0,
        clone: function() {
            return new Je(this.color, this.near, this.far);
        },
        toJSON: function() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            };
        }
    });
    Object.defineProperty(Gb.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++;
        }
    });
    Object.assign(Gb.prototype, {
        isInterleavedBuffer: !0,
        onUploadCallback: function() {},
        setDynamic: function(a) {
            this.dynamic = a;
            return this;
        },
        copy: function(a) {
            this.array = new a.array.constructor(a.array);
            this.count = a.count;
            this.stride = a.stride;
            this.dynamic = a.dynamic;
            return this;
        },
        copyAt: function(a, b, c) {
            a *= this.stride;
            c *= b.stride;
            for(var d = 0, e = this.stride; d < e; d++)this.array[a + d] = b.array[c + d];
            return this;
        },
        set: function(a, b) {
            void 0 === b && (b = 0);
            this.array.set(a, b);
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        onUpload: function(a) {
            this.onUploadCallback = a;
            return this;
        }
    });
    Object.defineProperties(Kd.prototype, {
        count: {
            get: function() {
                return this.data.count;
            }
        },
        array: {
            get: function() {
                return this.data.array;
            }
        }
    });
    Object.assign(Kd.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function(a, b) {
            this.data.array[a * this.data.stride + this.offset] = b;
            return this;
        },
        setY: function(a, b) {
            this.data.array[a * this.data.stride + this.offset + 1] = b;
            return this;
        },
        setZ: function(a, b) {
            this.data.array[a * this.data.stride + this.offset + 2] = b;
            return this;
        },
        setW: function(a, b) {
            this.data.array[a * this.data.stride + this.offset + 3] = b;
            return this;
        },
        getX: function(a) {
            return this.data.array[a * this.data.stride + this.offset];
        },
        getY: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 1];
        },
        getZ: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 2];
        },
        getW: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 3];
        },
        setXY: function(a, b, c) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a + 1] = c;
            return this;
        },
        setXYZ: function(a, b, c, d) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a + 1] = c;
            this.data.array[a + 2] = d;
            return this;
        },
        setXYZW: function(a, b, c, d, e) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a + 1] = c;
            this.data.array[a + 2] = d;
            this.data.array[a + 3] = e;
            return this;
        }
    });
    Hb.prototype = Object.create(M1.prototype);
    Hb.prototype.constructor = Hb;
    Hb.prototype.isSpriteMaterial = !0;
    Hb.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.rotation = a.rotation;
        this.sizeAttenuation = a.sizeAttenuation;
        return this;
    };
    var Ic, ze = new n1, ud = new n1, vd = new n1, Jc = new w1, Md = new w1, Qh = new U1, Af = new n1, Ae = new n1, Bf = new n1, ui = new w1, ah = new w1, vi = new w1;
    Ld.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: Ld,
        isSprite: !0,
        raycast: function(a, b) {
            null === a.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');
            ud.setFromMatrixScale(this.matrixWorld);
            Qh.copy(a.camera.matrixWorld);
            this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse, this.matrixWorld);
            vd.setFromMatrixPosition(this.modelViewMatrix);
            a.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && ud.multiplyScalar(-vd.z);
            var c = this.material.rotation;
            if (0 !== c) {
                var d = Math.cos(c);
                var e = Math.sin(c);
            }
            c = this.center;
            Ke(Af.set(-0.5, -0.5, 0), vd, c, ud, e, d);
            Ke(Ae.set(.5, -0.5, 0), vd, c, ud, e, d);
            Ke(Bf.set(.5, .5, 0), vd, c, ud, e, d);
            ui.set(0, 0);
            ah.set(1, 0);
            vi.set(1, 1);
            var f = a.ray.intersectTriangle(Af, Ae, Bf, !1, ze);
            if (null === f && (Ke(Ae.set(-0.5, .5, 0), vd, c, ud, e, d), ah.set(0, 1), f = a.ray.intersectTriangle(Af, Bf, Ae, !1, ze), null === f)) return;
            e = a.ray.origin.distanceTo(ze);
            e < a.near || e > a.far || b.push({
                distance: e,
                point: ze.clone(),
                uv: R1.getUV(ze, Af, Ae, Bf, ui, ah, vi, new w1),
                face: null,
                object: this
            });
        },
        clone: function() {
            return new this.constructor(this.material).copy(this);
        },
        copy: function(a) {
            B1.prototype.copy.call(this, a);
            void 0 !== a.center && this.center.copy(a.center);
            return this;
        }
    });
    var Cf = new n1, wi = new n1;
    Nd.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: Nd,
        isLOD: !0,
        copy: function(a) {
            B1.prototype.copy.call(this, a, !1);
            a = a.levels;
            for(var b = 0, c = a.length; b < c; b++){
                var d = a[b];
                this.addLevel(d.object.clone(), d.distance);
            }
            return this;
        },
        addLevel: function(a, b) {
            void 0 === b && (b = 0);
            b = Math.abs(b);
            for(var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++);
            c.splice(d, 0, {
                distance: b,
                object: a
            });
            this.add(a);
            return this;
        },
        getObjectForDistance: function(a) {
            for(var b = this.levels, c = 1, d = b.length; c < d && !(a < b[c].distance); c++);
            return b[c - 1].object;
        },
        raycast: function(a, b) {
            Cf.setFromMatrixPosition(this.matrixWorld);
            var c = a.ray.origin.distanceTo(Cf);
            this.getObjectForDistance(c).raycast(a, b);
        },
        update: function(a) {
            var b = this.levels;
            if (1 < b.length) {
                Cf.setFromMatrixPosition(a.matrixWorld);
                wi.setFromMatrixPosition(this.matrixWorld);
                a = Cf.distanceTo(wi);
                b[0].object.visible = !0;
                for(var c = 1, d = b.length; c < d; c++)if (a >= b[c].distance) b[c - 1].object.visible = !1, b[c].object.visible = !0;
                else break;
                for(; c < d; c++)b[c].object.visible = !1;
            }
        },
        toJSON: function(a) {
            a = B1.prototype.toJSON.call(this, a);
            a.object.levels = [];
            for(var b = this.levels, c = 0, d = b.length; c < d; c++){
                var e = b[c];
                a.object.levels.push({
                    object: e.object.uuid,
                    distance: e.distance
                });
            }
            return a;
        }
    });
    Od.prototype = Object.assign(Object.create(ja1.prototype), {
        constructor: Od,
        isSkinnedMesh: !0,
        bind: function(a, b) {
            this.skeleton = a;
            void 0 === b && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), b = this.matrixWorld);
            this.bindMatrix.copy(b);
            this.bindMatrixInverse.getInverse(b);
        },
        pose: function() {
            this.skeleton.pose();
        },
        normalizeSkinWeights: function() {
            for(var a = new aa1, b = this.geometry.attributes.skinWeight, c = 0, d = b.count; c < d; c++){
                a.x = b.getX(c);
                a.y = b.getY(c);
                a.z = b.getZ(c);
                a.w = b.getW(c);
                var e = 1 / a.manhattanLength();
                Infinity !== e ? a.multiplyScalar(e) : a.set(1, 0, 0, 0);
                b.setXYZW(c, a.x, a.y, a.z, a.w);
            }
        },
        updateMatrixWorld: function(a) {
            ja1.prototype.updateMatrixWorld.call(this, a);
            "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this);
        }
    });
    var xi = new U1, Dk = new U1;
    Object.assign(Le.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for(var a = 0, b = this.bones.length; a < b; a++){
                var c = new U1;
                this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
                this.boneInverses.push(c);
            }
        },
        pose: function() {
            var a, b;
            var c = 0;
            for(b = this.bones.length; c < b; c++)(a = this.bones[c]) && a.matrixWorld.getInverse(this.boneInverses[c]);
            c = 0;
            for(b = this.bones.length; c < b; c++)if (a = this.bones[c]) a.parent && a.parent.isBone ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale);
        },
        update: function() {
            for(var a = this.bones, b = this.boneInverses, c = this.boneMatrices, d = this.boneTexture, e = 0, f = a.length; e < f; e++)xi.multiplyMatrices(a[e] ? a[e].matrixWorld : Dk, b[e]), xi.toArray(c, 16 * e);
            void 0 !== d && (d.needsUpdate = !0);
        },
        clone: function() {
            return new Le(this.bones, this.boneInverses);
        },
        getBoneByName: function(a) {
            for(var b = 0, c = this.bones.length; b < c; b++){
                var d = this.bones[b];
                if (d.name === a) return d;
            }
        }
    });
    ig.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: ig,
        isBone: !0
    });
    jg.prototype = Object.assign(Object.create(ja1.prototype), {
        constructor: jg,
        isInstancedMesh: !0,
        raycast: function() {},
        setMatrixAt: function(a, b) {
            b.toArray(this.instanceMatrix.array, 16 * a);
        },
        updateMorphTargets: function() {}
    });
    Q1.prototype = Object.create(M1.prototype);
    Q1.prototype.constructor = Q1;
    Q1.prototype.isLineBasicMaterial = !0;
    Q1.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.linewidth = a.linewidth;
        this.linecap = a.linecap;
        this.linejoin = a.linejoin;
        return this;
    };
    var yi = new n1, zi = new n1, Ai = new U1, Df = new Sb, Be = new nb;
    xa1.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: xa1,
        isLine: !0,
        computeLineDistances: function() {
            var a = this.geometry;
            if (a.isBufferGeometry) {
                if (null === a.index) {
                    for(var b = a.attributes.position, c = [
                        0
                    ], d = 1, e = b.count; d < e; d++)yi.fromBufferAttribute(b, d - 1), zi.fromBufferAttribute(b, d), c[d] = c[d - 1], c[d] += yi.distanceTo(zi);
                    a.addAttribute("lineDistance", new A1(c, 1));
                } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            } else if (a.isGeometry) for(b = a.vertices, c = a.lineDistances, c[0] = 0, d = 1, e = b.length; d < e; d++)c[d] = c[d - 1], c[d] += b[d - 1].distanceTo(b[d]);
            return this;
        },
        raycast: function(a, b) {
            var c = a.linePrecision, d = this.geometry, e = this.matrixWorld;
            null === d.boundingSphere && d.computeBoundingSphere();
            Be.copy(d.boundingSphere);
            Be.applyMatrix4(e);
            Be.radius += c;
            if (!1 !== a.ray.intersectsSphere(Be)) {
                Ai.getInverse(e);
                Df.copy(a.ray).applyMatrix4(Ai);
                c /= (this.scale.x + this.scale.y + this.scale.z) / 3;
                c *= c;
                var f = new n1, g = new n1;
                e = new n1;
                var h = new n1, l = this && this.isLineSegments ? 2 : 1;
                if (d.isBufferGeometry) {
                    var k = d.index, q = d.attributes.position.array;
                    if (null !== k) {
                        k = k.array;
                        d = 0;
                        for(var u = k.length - 1; d < u; d += l){
                            var t = k[d + 1];
                            f.fromArray(q, 3 * k[d]);
                            g.fromArray(q, 3 * t);
                            t = Df.distanceSqToSegment(f, g, h, e);
                            t > c || (h.applyMatrix4(this.matrixWorld), t = a.ray.origin.distanceTo(h), t < a.near || t > a.far || b.push({
                                distance: t,
                                point: e.clone().applyMatrix4(this.matrixWorld),
                                index: d,
                                face: null,
                                faceIndex: null,
                                object: this
                            }));
                        }
                    } else for(d = 0, u = q.length / 3 - 1; d < u; d += l)f.fromArray(q, 3 * d), g.fromArray(q, 3 * d + 3), t = Df.distanceSqToSegment(f, g, h, e), t > c || (h.applyMatrix4(this.matrixWorld), t = a.ray.origin.distanceTo(h), t < a.near || t > a.far || b.push({
                        distance: t,
                        point: e.clone().applyMatrix4(this.matrixWorld),
                        index: d,
                        face: null,
                        faceIndex: null,
                        object: this
                    }));
                } else if (d.isGeometry) for(f = d.vertices, g = f.length, d = 0; d < g - 1; d += l)t = Df.distanceSqToSegment(f[d], f[d + 1], h, e), t > c || (h.applyMatrix4(this.matrixWorld), t = a.ray.origin.distanceTo(h), t < a.near || t > a.far || b.push({
                    distance: t,
                    point: e.clone().applyMatrix4(this.matrixWorld),
                    index: d,
                    face: null,
                    faceIndex: null,
                    object: this
                }));
            }
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this);
        }
    });
    var Ef = new n1, Ff = new n1;
    ca1.prototype = Object.assign(Object.create(xa1.prototype), {
        constructor: ca1,
        isLineSegments: !0,
        computeLineDistances: function() {
            var a = this.geometry;
            if (a.isBufferGeometry) {
                if (null === a.index) {
                    for(var b = a.attributes.position, c = [], d = 0, e = b.count; d < e; d += 2)Ef.fromBufferAttribute(b, d), Ff.fromBufferAttribute(b, d + 1), c[d] = 0 === d ? 0 : c[d - 1], c[d + 1] = c[d] + Ef.distanceTo(Ff);
                    a.addAttribute("lineDistance", new A1(c, 1));
                } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            } else if (a.isGeometry) for(b = a.vertices, c = a.lineDistances, d = 0, e = b.length; d < e; d += 2)Ef.copy(b[d]), Ff.copy(b[d + 1]), c[d] = 0 === d ? 0 : c[d - 1], c[d + 1] = c[d] + Ef.distanceTo(Ff);
            return this;
        }
    });
    Me.prototype = Object.assign(Object.create(xa1.prototype), {
        constructor: Me,
        isLineLoop: !0
    });
    Qa.prototype = Object.create(M1.prototype);
    Qa.prototype.constructor = Qa;
    Qa.prototype.isPointsMaterial = !0;
    Qa.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.size = a.size;
        this.sizeAttenuation = a.sizeAttenuation;
        this.morphTargets = a.morphTargets;
        return this;
    };
    var Bi = new U1, lg = new Sb, Ce = new nb, Gf = new n1;
    Kc.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: Kc,
        isPoints: !0,
        raycast: function(a, b) {
            var c = this.geometry, d = this.matrixWorld, e = a.params.Points.threshold;
            null === c.boundingSphere && c.computeBoundingSphere();
            Ce.copy(c.boundingSphere);
            Ce.applyMatrix4(d);
            Ce.radius += e;
            if (!1 !== a.ray.intersectsSphere(Ce)) {
                if (Bi.getInverse(d), lg.copy(a.ray).applyMatrix4(Bi), e /= (this.scale.x + this.scale.y + this.scale.z) / 3, e *= e, c.isBufferGeometry) {
                    var f = c.index;
                    c = c.attributes.position.array;
                    if (null !== f) {
                        var g = f.array;
                        f = 0;
                        for(var h = g.length; f < h; f++){
                            var l = g[f];
                            Gf.fromArray(c, 3 * l);
                            kg(Gf, l, e, d, a, b, this);
                        }
                    } else for(f = 0, g = c.length / 3; f < g; f++)Gf.fromArray(c, 3 * f), kg(Gf, f, e, d, a, b, this);
                } else for(c = c.vertices, f = 0, g = c.length; f < g; f++)kg(c[f], f, e, d, a, b, this);
            }
        },
        updateMorphTargets: function() {
            var a = this.geometry;
            if (a.isBufferGeometry) {
                a = a.morphAttributes;
                var b = Object.keys(a);
                if (0 < b.length) {
                    var c = a[b[0]];
                    if (void 0 !== c) for(this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = c.length; a < b; a++){
                        var d = c[a].name || String(a);
                        this.morphTargetInfluences.push(0);
                        this.morphTargetDictionary[d] = a;
                    }
                }
            } else a = a.morphTargets, void 0 !== a && 0 < a.length && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this);
        }
    });
    mg.prototype = Object.assign(Object.create(W1.prototype), {
        constructor: mg,
        isVideoTexture: !0,
        update: function() {
            var a = this.image;
            a.readyState >= a.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
        }
    });
    Lc.prototype = Object.create(W1.prototype);
    Lc.prototype.constructor = Lc;
    Lc.prototype.isCompressedTexture = !0;
    Pd.prototype = Object.create(W1.prototype);
    Pd.prototype.constructor = Pd;
    Pd.prototype.isCanvasTexture = !0;
    Qd.prototype = Object.create(W1.prototype);
    Qd.prototype.constructor = Qd;
    Qd.prototype.isDepthTexture = !0;
    Mc.prototype = Object.create(E1.prototype);
    Mc.prototype.constructor = Mc;
    Rd.prototype = Object.create(F1.prototype);
    Rd.prototype.constructor = Rd;
    Nc.prototype = Object.create(E1.prototype);
    Nc.prototype.constructor = Nc;
    Sd.prototype = Object.create(F1.prototype);
    Sd.prototype.constructor = Sd;
    Ca1.prototype = Object.create(E1.prototype);
    Ca1.prototype.constructor = Ca1;
    Td.prototype = Object.create(F1.prototype);
    Td.prototype.constructor = Td;
    Oc.prototype = Object.create(Ca1.prototype);
    Oc.prototype.constructor = Oc;
    Ud.prototype = Object.create(F1.prototype);
    Ud.prototype.constructor = Ud;
    cc.prototype = Object.create(Ca1.prototype);
    cc.prototype.constructor = cc;
    Vd.prototype = Object.create(F1.prototype);
    Vd.prototype.constructor = Vd;
    Pc.prototype = Object.create(Ca1.prototype);
    Pc.prototype.constructor = Pc;
    Wd.prototype = Object.create(F1.prototype);
    Wd.prototype.constructor = Wd;
    Qc.prototype = Object.create(Ca1.prototype);
    Qc.prototype.constructor = Qc;
    Xd.prototype = Object.create(F1.prototype);
    Xd.prototype.constructor = Xd;
    dc.prototype = Object.create(E1.prototype);
    dc.prototype.constructor = dc;
    dc.prototype.toJSON = function() {
        var a = E1.prototype.toJSON.call(this);
        a.path = this.parameters.path.toJSON();
        return a;
    };
    Yd.prototype = Object.create(F1.prototype);
    Yd.prototype.constructor = Yd;
    Rc.prototype = Object.create(E1.prototype);
    Rc.prototype.constructor = Rc;
    Zd.prototype = Object.create(F1.prototype);
    Zd.prototype.constructor = Zd;
    Sc.prototype = Object.create(E1.prototype);
    Sc.prototype.constructor = Sc;
    var Ek = {
        triangulate: function(a, b, c) {
            c = c || 2;
            var d = b && b.length, e = d ? b[0] * c : a.length, f = Rh(a, 0, e, c, !0), g = [];
            if (!f || f.next === f.prev) return g;
            var h;
            if (d) {
                var l = c;
                d = [];
                var k;
                var n = 0;
                for(k = b.length; n < k; n++){
                    var u = b[n] * l;
                    var t = n < k - 1 ? b[n + 1] * l : a.length;
                    u = Rh(a, u, t, l, !1);
                    u === u.next && (u.steiner = !0);
                    d.push(ok(u));
                }
                d.sort(mk);
                for(n = 0; n < d.length; n++){
                    b = d[n];
                    l = f;
                    if (l = nk(b, l)) b = Uh(l, b), ae(b, b.next);
                    f = ae(f, f.next);
                }
            }
            if (a.length > 80 * c) {
                var r = h = a[0];
                var p = d = a[1];
                for(l = c; l < e; l += c)n = a[l], b = a[l + 1], n < r && (r = n), b < p && (p = b), n > h && (h = n), b > d && (d = b);
                h = Math.max(h - r, d - p);
                h = 0 !== h ? 1 / h : 0;
            }
            be(f, g, c, r, p, h);
            return g;
        }
    }, pb = {
        area: function(a) {
            for(var b = a.length, c = 0, d = b - 1, e = 0; e < b; d = e++)c += a[d].x * a[e].y - a[e].x * a[d].y;
            return .5 * c;
        },
        isClockWise: function(a) {
            return 0 > pb.area(a);
        },
        triangulateShape: function(a, b) {
            var c = [], d = [], e = [];
            Vh(a);
            Wh(c, a);
            var f = a.length;
            b.forEach(Vh);
            for(a = 0; a < b.length; a++)d.push(f), f += b[a].length, Wh(c, b[a]);
            b = Ek.triangulate(c, d);
            for(a = 0; a < b.length; a += 3)e.push(b.slice(a, a + 3));
            return e;
        }
    };
    fc.prototype = Object.create(F1.prototype);
    fc.prototype.constructor = fc;
    fc.prototype.toJSON = function() {
        var a = F1.prototype.toJSON.call(this);
        return Xh(this.parameters.shapes, this.parameters.options, a);
    };
    eb.prototype = Object.create(E1.prototype);
    eb.prototype.constructor = eb;
    eb.prototype.toJSON = function() {
        var a = E1.prototype.toJSON.call(this);
        return Xh(this.parameters.shapes, this.parameters.options, a);
    };
    var pk = {
        generateTopUV: function(a, b, c, d, e) {
            a = b[3 * d];
            d = b[3 * d + 1];
            var f = b[3 * e];
            e = b[3 * e + 1];
            return [
                new w1(b[3 * c], b[3 * c + 1]),
                new w1(a, d),
                new w1(f, e)
            ];
        },
        generateSideWallUV: function(a, b, c, d, e, f) {
            a = b[3 * c];
            var g = b[3 * c + 1];
            c = b[3 * c + 2];
            var h = b[3 * d], l = b[3 * d + 1];
            d = b[3 * d + 2];
            var k = b[3 * e], n = b[3 * e + 1];
            e = b[3 * e + 2];
            var u = b[3 * f], t = b[3 * f + 1];
            b = b[3 * f + 2];
            return .01 > Math.abs(g - l) ? [
                new w1(a, 1 - c),
                new w1(h, 1 - d),
                new w1(k, 1 - e),
                new w1(u, 1 - b)
            ] : [
                new w1(g, 1 - c),
                new w1(l, 1 - d),
                new w1(n, 1 - e),
                new w1(t, 1 - b)
            ];
        }
    };
    de.prototype = Object.create(F1.prototype);
    de.prototype.constructor = de;
    Uc.prototype = Object.create(eb.prototype);
    Uc.prototype.constructor = Uc;
    ee.prototype = Object.create(F1.prototype);
    ee.prototype.constructor = ee;
    Ib.prototype = Object.create(E1.prototype);
    Ib.prototype.constructor = Ib;
    fe.prototype = Object.create(F1.prototype);
    fe.prototype.constructor = fe;
    Vc.prototype = Object.create(E1.prototype);
    Vc.prototype.constructor = Vc;
    ge.prototype = Object.create(F1.prototype);
    ge.prototype.constructor = ge;
    Wc.prototype = Object.create(E1.prototype);
    Wc.prototype.constructor = Wc;
    gc.prototype = Object.create(F1.prototype);
    gc.prototype.constructor = gc;
    gc.prototype.toJSON = function() {
        var a = F1.prototype.toJSON.call(this);
        return Yh(this.parameters.shapes, a);
    };
    hc.prototype = Object.create(E1.prototype);
    hc.prototype.constructor = hc;
    hc.prototype.toJSON = function() {
        var a = E1.prototype.toJSON.call(this);
        return Yh(this.parameters.shapes, a);
    };
    Xc.prototype = Object.create(E1.prototype);
    Xc.prototype.constructor = Xc;
    ic.prototype = Object.create(F1.prototype);
    ic.prototype.constructor = ic;
    qb.prototype = Object.create(E1.prototype);
    qb.prototype.constructor = qb;
    he.prototype = Object.create(ic.prototype);
    he.prototype.constructor = he;
    ie.prototype = Object.create(qb.prototype);
    ie.prototype.constructor = ie;
    je.prototype = Object.create(F1.prototype);
    je.prototype.constructor = je;
    Yc.prototype = Object.create(E1.prototype);
    Yc.prototype.constructor = Yc;
    var ta1 = Object.freeze({
        WireframeGeometry: Mc,
        ParametricGeometry: Rd,
        ParametricBufferGeometry: Nc,
        TetrahedronGeometry: Td,
        TetrahedronBufferGeometry: Oc,
        OctahedronGeometry: Ud,
        OctahedronBufferGeometry: cc,
        IcosahedronGeometry: Vd,
        IcosahedronBufferGeometry: Pc,
        DodecahedronGeometry: Wd,
        DodecahedronBufferGeometry: Qc,
        PolyhedronGeometry: Sd,
        PolyhedronBufferGeometry: Ca1,
        TubeGeometry: Xd,
        TubeBufferGeometry: dc,
        TorusKnotGeometry: Yd,
        TorusKnotBufferGeometry: Rc,
        TorusGeometry: Zd,
        TorusBufferGeometry: Sc,
        TextGeometry: de,
        TextBufferGeometry: Uc,
        SphereGeometry: ee,
        SphereBufferGeometry: Ib,
        RingGeometry: fe,
        RingBufferGeometry: Vc,
        PlaneGeometry: Fd,
        PlaneBufferGeometry: $b,
        LatheGeometry: ge,
        LatheBufferGeometry: Wc,
        ShapeGeometry: gc,
        ShapeBufferGeometry: hc,
        ExtrudeGeometry: fc,
        ExtrudeBufferGeometry: eb,
        EdgesGeometry: Xc,
        ConeGeometry: he,
        ConeBufferGeometry: ie,
        CylinderGeometry: ic,
        CylinderBufferGeometry: qb,
        CircleGeometry: je,
        CircleBufferGeometry: Yc,
        BoxGeometry: Zg,
        BoxBufferGeometry: Gd
    });
    jc.prototype = Object.create(M1.prototype);
    jc.prototype.constructor = jc;
    jc.prototype.isShadowMaterial = !0;
    jc.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.color.copy(a.color);
        return this;
    };
    Zc.prototype = Object.create(ma1.prototype);
    Zc.prototype.constructor = Zc;
    Zc.prototype.isRawShaderMaterial = !0;
    fb.prototype = Object.create(M1.prototype);
    fb.prototype.constructor = fb;
    fb.prototype.isMeshStandardMaterial = !0;
    fb.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.defines = {
            STANDARD: ""
        };
        this.color.copy(a.color);
        this.roughness = a.roughness;
        this.metalness = a.metalness;
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalMapType = a.normalMapType;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.roughnessMap = a.roughnessMap;
        this.metalnessMap = a.metalnessMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.envMapIntensity = a.envMapIntensity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this;
    };
    kc.prototype = Object.create(fb.prototype);
    kc.prototype.constructor = kc;
    kc.prototype.isMeshPhysicalMaterial = !0;
    kc.prototype.copy = function(a) {
        fb.prototype.copy.call(this, a);
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        };
        this.reflectivity = a.reflectivity;
        this.clearcoat = a.clearcoat;
        this.clearcoatRoughness = a.clearcoatRoughness;
        this.sheen = a.sheen ? (this.sheen || new H1).copy(a.sheen) : null;
        this.clearcoatNormalMap = a.clearcoatNormalMap;
        this.clearcoatNormalScale.copy(a.clearcoatNormalScale);
        this.transparency = a.transparency;
        return this;
    };
    Ra.prototype = Object.create(M1.prototype);
    Ra.prototype.constructor = Ra;
    Ra.prototype.isMeshPhongMaterial = !0;
    Ra.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.specular.copy(a.specular);
        this.shininess = a.shininess;
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalMapType = a.normalMapType;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this;
    };
    lc.prototype = Object.create(Ra.prototype);
    lc.prototype.constructor = lc;
    lc.prototype.isMeshToonMaterial = !0;
    lc.prototype.copy = function(a) {
        Ra.prototype.copy.call(this, a);
        this.gradientMap = a.gradientMap;
        return this;
    };
    mc.prototype = Object.create(M1.prototype);
    mc.prototype.constructor = mc;
    mc.prototype.isMeshNormalMaterial = !0;
    mc.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalMapType = a.normalMapType;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this;
    };
    nc.prototype = Object.create(M1.prototype);
    nc.prototype.constructor = nc;
    nc.prototype.isMeshLambertMaterial = !0;
    nc.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this;
    };
    oc.prototype = Object.create(M1.prototype);
    oc.prototype.constructor = oc;
    oc.prototype.isMeshMatcapMaterial = !0;
    oc.prototype.copy = function(a) {
        M1.prototype.copy.call(this, a);
        this.defines = {
            MATCAP: ""
        };
        this.color.copy(a.color);
        this.matcap = a.matcap;
        this.map = a.map;
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalMapType = a.normalMapType;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.alphaMap = a.alphaMap;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this;
    };
    pc.prototype = Object.create(Q1.prototype);
    pc.prototype.constructor = pc;
    pc.prototype.isLineDashedMaterial = !0;
    pc.prototype.copy = function(a) {
        Q1.prototype.copy.call(this, a);
        this.scale = a.scale;
        this.dashSize = a.dashSize;
        this.gapSize = a.gapSize;
        return this;
    };
    var Fk = Object.freeze({
        ShadowMaterial: jc,
        SpriteMaterial: Hb,
        RawShaderMaterial: Zc,
        ShaderMaterial: ma1,
        PointsMaterial: Qa,
        MeshPhysicalMaterial: kc,
        MeshStandardMaterial: fb,
        MeshPhongMaterial: Ra,
        MeshToonMaterial: lc,
        MeshNormalMaterial: mc,
        MeshLambertMaterial: nc,
        MeshDepthMaterial: Db,
        MeshDistanceMaterial: Eb,
        MeshBasicMaterial: Ga,
        MeshMatcapMaterial: oc,
        LineDashedMaterial: pc,
        LineBasicMaterial: Q1,
        Material: M1
    }), pa1 = {
        arraySlice: function(a, b, c) {
            return pa1.isTypedArray(a) ? new a.constructor(a.subarray(b, void 0 !== c ? c : a.length)) : a.slice(b, c);
        },
        convertArray: function(a, b, c) {
            return !a || !c && a.constructor === b ? a : "number" === typeof b.BYTES_PER_ELEMENT ? new b(a) : Array.prototype.slice.call(a);
        },
        isTypedArray: function(a) {
            return ArrayBuffer.isView(a) && !(a instanceof DataView);
        },
        getKeyframeOrder: function(a) {
            for(var b38 = a.length, c33 = Array(b38), d = 0; d !== b38; ++d)c33[d] = d;
            c33.sort(function(b, c) {
                return a[b] - a[c];
            });
            return c33;
        },
        sortedArray: function(a, b, c) {
            for(var d = a.length, e = new a.constructor(d), f = 0, g = 0; g !== d; ++f)for(var h = c[f] * b, l = 0; l !== b; ++l)e[g++] = a[h + l];
            return e;
        },
        flattenJSON: function(a, b, c, d) {
            for(var e = 1, f = a[0]; void 0 !== f && void 0 === f[d];)f = a[e++];
            if (void 0 !== f) {
                var g = f[d];
                if (void 0 !== g) {
                    if (Array.isArray(g)) do g = f[d], void 0 !== g && (b.push(f.time), c.push.apply(c, g)), f = a[e++];
                    while (void 0 !== f);
                    else if (void 0 !== g.toArray) do g = f[d], void 0 !== g && (b.push(f.time), g.toArray(c, c.length)), f = a[e++];
                    while (void 0 !== f);
                    else do g = f[d], void 0 !== g && (b.push(f.time), c.push(g)), f = a[e++];
                    while (void 0 !== f);
                }
            }
        }
    };
    Object.assign(Ia.prototype, {
        evaluate: function(a) {
            var b = this.parameterPositions, c = this._cachedIndex, d = b[c], e = b[c - 1];
            a: {
                b: {
                    c: {
                        d: if (!(a < d)) {
                            for(var f = c + 2;;){
                                if (void 0 === d) {
                                    if (a < e) break d;
                                    this._cachedIndex = c = b.length;
                                    return this.afterEnd_(c - 1, a, e);
                                }
                                if (c === f) break;
                                e = d;
                                d = b[++c];
                                if (a < d) break b;
                            }
                            d = b.length;
                            break c;
                        }
                        if (a >= e) break a;
                        else {
                            f = b[1];
                            a < f && (c = 2, e = f);
                            for(f = c - 2;;){
                                if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d);
                                if (c === f) break;
                                d = e;
                                e = b[--c - 1];
                                if (a >= e) break b;
                            }
                            d = c;
                            c = 0;
                        }
                    }
                    for(; c < d;)e = c + d >>> 1, a < b[e] ? d = e : c = e + 1;
                    d = b[c];
                    e = b[c - 1];
                    if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d);
                    if (void 0 === d) return this._cachedIndex = c = b.length, this.afterEnd_(c - 1, e, a);
                }
                this._cachedIndex = c;
                this.intervalChanged_(c, e, d);
            }
            return this.interpolate_(c, e, a, d);
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_;
        },
        copySampleValue_: function(a) {
            var b = this.resultBuffer, c = this.sampleValues, d = this.valueSize;
            a *= d;
            for(var e = 0; e !== d; ++e)b[e] = c[a + e];
            return b;
        },
        interpolate_: function() {
            throw Error("call to abstract method");
        },
        intervalChanged_: function() {}
    });
    Object.assign(Ia.prototype, {
        beforeStart_: Ia.prototype.copySampleValue_,
        afterEnd_: Ia.prototype.copySampleValue_
    });
    Ne.prototype = Object.assign(Object.create(Ia.prototype), {
        constructor: Ne,
        DefaultSettings_: {
            endingStart: 2400,
            endingEnd: 2400
        },
        intervalChanged_: function(a, b, c) {
            var d = this.parameterPositions, e = a - 2, f = a + 1, g = d[e], h = d[f];
            if (void 0 === g) switch(this.getSettings_().endingStart){
                case 2401:
                    e = a;
                    g = 2 * b - c;
                    break;
                case 2402:
                    e = d.length - 2;
                    g = b + d[e] - d[e + 1];
                    break;
                default:
                    e = a, g = c;
            }
            if (void 0 === h) switch(this.getSettings_().endingEnd){
                case 2401:
                    f = a;
                    h = 2 * c - b;
                    break;
                case 2402:
                    f = 1;
                    h = c + d[1] - d[0];
                    break;
                default:
                    f = a - 1, h = b;
            }
            a = .5 * (c - b);
            d = this.valueSize;
            this._weightPrev = a / (b - g);
            this._weightNext = a / (h - c);
            this._offsetPrev = e * d;
            this._offsetNext = f * d;
        },
        interpolate_: function(a, b, c, d) {
            var e = this.resultBuffer, f = this.sampleValues, g = this.valueSize;
            a *= g;
            var h = a - g, l = this._offsetPrev, k = this._offsetNext, n = this._weightPrev, u = this._weightNext, t = (c - b) / (d - b);
            c = t * t;
            d = c * t;
            b = -n * d + 2 * n * c - n * t;
            n = (1 + n) * d + (-1.5 - 2 * n) * c + (-0.5 + n) * t + 1;
            t = (-1 - u) * d + (1.5 + u) * c + .5 * t;
            u = u * d - u * c;
            for(c = 0; c !== g; ++c)e[c] = b * f[l + c] + n * f[h + c] + t * f[a + c] + u * f[k + c];
            return e;
        }
    });
    ke.prototype = Object.assign(Object.create(Ia.prototype), {
        constructor: ke,
        interpolate_: function(a, b, c, d) {
            var e = this.resultBuffer, f = this.sampleValues, g = this.valueSize;
            a *= g;
            var h = a - g;
            b = (c - b) / (d - b);
            c = 1 - b;
            for(d = 0; d !== g; ++d)e[d] = f[h + d] * c + f[a + d] * b;
            return e;
        }
    });
    Oe.prototype = Object.assign(Object.create(Ia.prototype), {
        constructor: Oe,
        interpolate_: function(a) {
            return this.copySampleValue_(a - 1);
        }
    });
    Object.assign(oa1, {
        toJSON: function(a) {
            var b = a.constructor;
            if (void 0 !== b.toJSON) b = b.toJSON(a);
            else {
                b = {
                    name: a.name,
                    times: pa1.convertArray(a.times, Array),
                    values: pa1.convertArray(a.values, Array)
                };
                var c = a.getInterpolation();
                c !== a.DefaultInterpolation && (b.interpolation = c);
            }
            b.type = a.ValueTypeName;
            return b;
        }
    });
    Object.assign(oa1.prototype, {
        constructor: oa1,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function(a) {
            return new Oe(this.times, this.values, this.getValueSize(), a);
        },
        InterpolantFactoryMethodLinear: function(a) {
            return new ke(this.times, this.values, this.getValueSize(), a);
        },
        InterpolantFactoryMethodSmooth: function(a) {
            return new Ne(this.times, this.values, this.getValueSize(), a);
        },
        setInterpolation: function(a) {
            switch(a){
                case 2300:
                    var b = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    b = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    b = this.InterpolantFactoryMethodSmooth;
            }
            if (void 0 === b) {
                b = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (a !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
                    else throw Error(b);
                }
                console.warn("THREE.KeyframeTrack:", b);
                return this;
            }
            this.createInterpolant = b;
            return this;
        },
        getInterpolation: function() {
            switch(this.createInterpolant){
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302;
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length;
        },
        shift: function(a) {
            if (0 !== a) for(var b = this.times, c = 0, d = b.length; c !== d; ++c)b[c] += a;
            return this;
        },
        scale: function(a) {
            if (1 !== a) for(var b = this.times, c = 0, d = b.length; c !== d; ++c)b[c] *= a;
            return this;
        },
        trim: function(a, b) {
            for(var c = this.times, d = c.length, e = 0, f = d - 1; e !== d && c[e] < a;)++e;
            for(; -1 !== f && c[f] > b;)--f;
            ++f;
            if (0 !== e || f !== d) e >= f && (f = Math.max(f, 1), e = f - 1), a = this.getValueSize(), this.times = pa1.arraySlice(c, e, f), this.values = pa1.arraySlice(this.values, e * a, f * a);
            return this;
        },
        validate: function() {
            var a = !0, b = this.getValueSize();
            0 !== b - Math.floor(b) && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), a = !1);
            var c = this.times;
            b = this.values;
            var d = c.length;
            0 === d && (console.error("THREE.KeyframeTrack: Track is empty.", this), a = !1);
            for(var e = null, f = 0; f !== d; f++){
                var g = c[f];
                if ("number" === typeof g && isNaN(g)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, f, g);
                    a = !1;
                    break;
                }
                if (null !== e && e > g) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, f, g, e);
                    a = !1;
                    break;
                }
                e = g;
            }
            if (void 0 !== b && pa1.isTypedArray(b)) {
                for(f = 0, c = b.length; f !== c; ++f)if (d = b[f], isNaN(d)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, f, d);
                    a = !1;
                    break;
                }
            }
            return a;
        },
        optimize: function() {
            for(var a = this.times, b = this.values, c = this.getValueSize(), d = 2302 === this.getInterpolation(), e = 1, f = a.length - 1, g = 1; g < f; ++g){
                var h = !1, l = a[g];
                if (l !== a[g + 1] && (1 !== g || l !== l[0])) {
                    if (d) h = !0;
                    else {
                        var k = g * c, n = k - c, u = k + c;
                        for(l = 0; l !== c; ++l){
                            var t = b[k + l];
                            if (t !== b[n + l] || t !== b[u + l]) {
                                h = !0;
                                break;
                            }
                        }
                    }
                }
                if (h) {
                    if (g !== e) for(a[e] = a[g], h = g * c, k = e * c, l = 0; l !== c; ++l)b[k + l] = b[h + l];
                    ++e;
                }
            }
            if (0 < f) {
                a[e] = a[f];
                h = f * c;
                k = e * c;
                for(l = 0; l !== c; ++l)b[k + l] = b[h + l];
                ++e;
            }
            e !== a.length && (this.times = pa1.arraySlice(a, 0, e), this.values = pa1.arraySlice(b, 0, e * c));
            return this;
        },
        clone: function() {
            var a = pa1.arraySlice(this.times, 0), b = pa1.arraySlice(this.values, 0);
            a = new this.constructor(this.name, a, b);
            a.createInterpolant = this.createInterpolant;
            return a;
        }
    });
    Pe.prototype = Object.assign(Object.create(oa1.prototype), {
        constructor: Pe,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    });
    Qe.prototype = Object.assign(Object.create(oa1.prototype), {
        constructor: Qe,
        ValueTypeName: "color"
    });
    $c.prototype = Object.assign(Object.create(oa1.prototype), {
        constructor: $c,
        ValueTypeName: "number"
    });
    Re.prototype = Object.assign(Object.create(Ia.prototype), {
        constructor: Re,
        interpolate_: function(a, b, c, d) {
            var e = this.resultBuffer, f = this.sampleValues, g = this.valueSize;
            a *= g;
            b = (c - b) / (d - b);
            for(c = a + g; a !== c; a += 4)ua1.slerpFlat(e, 0, f, a - g, f, a, b);
            return e;
        }
    });
    le.prototype = Object.assign(Object.create(oa1.prototype), {
        constructor: le,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function(a) {
            return new Re(this.times, this.values, this.getValueSize(), a);
        },
        InterpolantFactoryMethodSmooth: void 0
    });
    Se.prototype = Object.assign(Object.create(oa1.prototype), {
        constructor: Se,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    });
    ad.prototype = Object.assign(Object.create(oa1.prototype), {
        constructor: ad,
        ValueTypeName: "vector"
    });
    Object.assign(Ma, {
        parse: function(a) {
            for(var b = [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length; e !== f; ++e)b.push(rk(c[e]).scale(d));
            return new Ma(a.name, a.duration, b);
        },
        toJSON: function(a) {
            var b = [], c = a.tracks;
            a = {
                name: a.name,
                duration: a.duration,
                tracks: b,
                uuid: a.uuid
            };
            for(var d = 0, e = c.length; d !== e; ++d)b.push(oa1.toJSON(c[d]));
            return a;
        },
        CreateFromMorphTargetSequence: function(a, b, c, d) {
            for(var e = b.length, f = [], g = 0; g < e; g++){
                var h = [], l = [];
                h.push((g + e - 1) % e, g, (g + 1) % e);
                l.push(0, 1, 0);
                var k = pa1.getKeyframeOrder(h);
                h = pa1.sortedArray(h, 1, k);
                l = pa1.sortedArray(l, 1, k);
                d || 0 !== h[0] || (h.push(e), l.push(l[0]));
                f.push(new $c(".morphTargetInfluences[" + b[g].name + "]", h, l).scale(1 / c));
            }
            return new Ma(a, -1, f);
        },
        findByName: function(a, b) {
            var c = a;
            Array.isArray(a) || (c = a.geometry && a.geometry.animations || a.animations);
            for(a = 0; a < c.length; a++)if (c[a].name === b) return c[a];
            return null;
        },
        CreateClipsFromMorphTargetSequences: function(a, b, c) {
            for(var d = {}, e = /^([\w-]*?)([\d]+)$/, f = 0, g = a.length; f < g; f++){
                var h = a[f], l = h.name.match(e);
                if (l && 1 < l.length) {
                    var k = l[1];
                    (l = d[k]) || (d[k] = l = []);
                    l.push(h);
                }
            }
            a = [];
            for(k in d)a.push(Ma.CreateFromMorphTargetSequence(k, d[k], b, c));
            return a;
        },
        parseAnimation: function(a42, b39) {
            if (!a42) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            var c34 = function(a, b, c, d, e) {
                if (0 !== c.length) {
                    var f = [], g = [];
                    pa1.flattenJSON(c, f, g, d);
                    0 !== f.length && e.push(new a(b, f, g));
                }
            }, d29 = [], e21 = a42.name || "default", f21 = a42.length || -1, g15 = a42.fps || 30;
            a42 = a42.hierarchy || [];
            for(var h = 0; h < a42.length; h++){
                var l = a42[h].keys;
                if (l && 0 !== l.length) {
                    if (l[0].morphTargets) {
                        f21 = {};
                        for(var k = 0; k < l.length; k++)if (l[k].morphTargets) for(var n = 0; n < l[k].morphTargets.length; n++)f21[l[k].morphTargets[n]] = -1;
                        for(var u in f21){
                            var t = [], r = [];
                            for(n = 0; n !== l[k].morphTargets.length; ++n){
                                var p = l[k];
                                t.push(p.time);
                                r.push(p.morphTarget === u ? 1 : 0);
                            }
                            d29.push(new $c(".morphTargetInfluence[" + u + "]", t, r));
                        }
                        f21 = f21.length * (g15 || 1);
                    } else k = ".bones[" + b39[h].name + "]", c34(ad, k + ".position", l, "pos", d29), c34(le, k + ".quaternion", l, "rot", d29), c34(ad, k + ".scale", l, "scl", d29);
                }
            }
            return 0 === d29.length ? null : new Ma(e21, f21, d29);
        }
    });
    Object.assign(Ma.prototype, {
        resetDuration: function() {
            for(var a = 0, b = 0, c = this.tracks.length; b !== c; ++b){
                var d = this.tracks[b];
                a = Math.max(a, d.times[d.times.length - 1]);
            }
            this.duration = a;
            return this;
        },
        trim: function() {
            for(var a = 0; a < this.tracks.length; a++)this.tracks[a].trim(0, this.duration);
            return this;
        },
        validate: function() {
            for(var a = !0, b = 0; b < this.tracks.length; b++)a = a && this.tracks[b].validate();
            return a;
        },
        optimize: function() {
            for(var a = 0; a < this.tracks.length; a++)this.tracks[a].optimize();
            return this;
        },
        clone: function() {
            for(var a = [], b = 0; b < this.tracks.length; b++)a.push(this.tracks[b].clone());
            return new Ma(this.name, this.duration, a);
        }
    });
    var uc = {
        enabled: !1,
        files: {},
        add: function(a, b) {
            !1 !== this.enabled && (this.files[a] = b);
        },
        get: function(a) {
            if (!1 !== this.enabled) return this.files[a];
        },
        remove: function(a) {
            delete this.files[a];
        },
        clear: function() {
            this.files = {};
        }
    }, Zh = new pg;
    Object.assign(S1.prototype, {
        load: function() {},
        parse: function() {},
        setCrossOrigin: function(a) {
            this.crossOrigin = a;
            return this;
        },
        setPath: function(a) {
            this.path = a;
            return this;
        },
        setResourcePath: function(a) {
            this.resourcePath = a;
            return this;
        }
    });
    var $a = {};
    Na.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: Na,
        load: function(a, b40, c35, d30) {
            void 0 === a && (a = "");
            void 0 !== this.path && (a = this.path + a);
            a = this.manager.resolveURL(a);
            var e22 = this, f22 = uc.get(a);
            if (void 0 !== f22) return e22.manager.itemStart(a), setTimeout(function() {
                b40 && b40(f22);
                e22.manager.itemEnd(a);
            }, 0), f22;
            if (void 0 !== $a[a]) $a[a].push({
                onLoad: b40,
                onProgress: c35,
                onError: d30
            });
            else {
                var g16 = a.match(/^data:(.*?)(;base64)?,(.*)$/);
                if (g16) {
                    c35 = g16[1];
                    var h = !!g16[2];
                    g16 = g16[3];
                    g16 = decodeURIComponent(g16);
                    h && (g16 = atob(g16));
                    try {
                        var l = (this.responseType || "").toLowerCase();
                        switch(l){
                            case "arraybuffer":
                            case "blob":
                                var k = new Uint8Array(g16.length);
                                for(h = 0; h < g16.length; h++)k[h] = g16.charCodeAt(h);
                                var n = "blob" === l ? new Blob([
                                    k.buffer
                                ], {
                                    type: c35
                                }) : k.buffer;
                                break;
                            case "document":
                                n = (new DOMParser).parseFromString(g16, c35);
                                break;
                            case "json":
                                n = JSON.parse(g16);
                                break;
                            default:
                                n = g16;
                        }
                        setTimeout(function() {
                            b40 && b40(n);
                            e22.manager.itemEnd(a);
                        }, 0);
                    } catch (t) {
                        setTimeout(function() {
                            d30 && d30(t);
                            e22.manager.itemError(a);
                            e22.manager.itemEnd(a);
                        }, 0);
                    }
                } else {
                    $a[a] = [];
                    $a[a].push({
                        onLoad: b40,
                        onProgress: c35,
                        onError: d30
                    });
                    var u = new XMLHttpRequest;
                    u.open("GET", a, !0);
                    u.addEventListener("load", function(b) {
                        var c = this.response;
                        uc.add(a, c);
                        var d = $a[a];
                        delete $a[a];
                        if (200 === this.status || 0 === this.status) {
                            0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                            for(var f = 0, g = d.length; f < g; f++){
                                var h = d[f];
                                if (h.onLoad) h.onLoad(c);
                            }
                        } else {
                            f = 0;
                            for(g = d.length; f < g; f++)if (h = d[f], h.onError) h.onError(b);
                            e22.manager.itemError(a);
                        }
                        e22.manager.itemEnd(a);
                    }, !1);
                    u.addEventListener("progress", function(b) {
                        for(var c = $a[a], d = 0, e = c.length; d < e; d++){
                            var f = c[d];
                            if (f.onProgress) f.onProgress(b);
                        }
                    }, !1);
                    u.addEventListener("error", function(b) {
                        var c = $a[a];
                        delete $a[a];
                        for(var d = 0, f = c.length; d < f; d++){
                            var g = c[d];
                            if (g.onError) g.onError(b);
                        }
                        e22.manager.itemError(a);
                        e22.manager.itemEnd(a);
                    }, !1);
                    u.addEventListener("abort", function(b) {
                        var c = $a[a];
                        delete $a[a];
                        for(var d = 0, f = c.length; d < f; d++){
                            var g = c[d];
                            if (g.onError) g.onError(b);
                        }
                        e22.manager.itemError(a);
                        e22.manager.itemEnd(a);
                    }, !1);
                    void 0 !== this.responseType && (u.responseType = this.responseType);
                    void 0 !== this.withCredentials && (u.withCredentials = this.withCredentials);
                    u.overrideMimeType && u.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                    for(h in this.requestHeader)u.setRequestHeader(h, this.requestHeader[h]);
                    u.send(null);
                }
                e22.manager.itemStart(a);
                return u;
            }
        },
        setResponseType: function(a) {
            this.responseType = a;
            return this;
        },
        setWithCredentials: function(a) {
            this.withCredentials = a;
            return this;
        },
        setMimeType: function(a) {
            this.mimeType = a;
            return this;
        },
        setRequestHeader: function(a) {
            this.requestHeader = a;
            return this;
        }
    });
    qg.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: qg,
        load: function(a43, b, c, d) {
            var e = this, f = new Na(e.manager);
            f.setPath(e.path);
            f.load(a43, function(a) {
                b(e.parse(JSON.parse(a)));
            }, c, d);
        },
        parse: function(a) {
            for(var b = [], c = 0; c < a.length; c++){
                var d = Ma.parse(a[c]);
                b.push(d);
            }
            return b;
        }
    });
    rg.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: rg,
        load: function(a44, b, c36, d31) {
            function e23(e) {
                l.load(a44[e], function(a) {
                    a = f.parse(a, !0);
                    g[e] = {
                        width: a.width,
                        height: a.height,
                        format: a.format,
                        mipmaps: a.mipmaps
                    };
                    k += 1;
                    6 === k && (1 === a.mipmapCount && (h.minFilter = 1006), h.format = a.format, h.needsUpdate = !0, b && b(h));
                }, c36, d31);
            }
            var f = this, g = [], h = new Lc;
            h.image = g;
            var l = new Na(this.manager);
            l.setPath(this.path);
            l.setResponseType("arraybuffer");
            if (Array.isArray(a44)) for(var k = 0, n = 0, u = a44.length; n < u; ++n)e23(n);
            else l.load(a44, function(a) {
                a = f.parse(a, !0);
                if (a.isCubemap) for(var c = a.mipmaps.length / a.mipmapCount, d = 0; d < c; d++){
                    g[d] = {
                        mipmaps: []
                    };
                    for(var e = 0; e < a.mipmapCount; e++)g[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + e]), g[d].format = a.format, g[d].width = a.width, g[d].height = a.height;
                }
                else h.image.width = a.width, h.image.height = a.height, h.mipmaps = a.mipmaps;
                1 === a.mipmapCount && (h.minFilter = 1006);
                h.format = a.format;
                h.needsUpdate = !0;
                b && b(h);
            }, c36, d31);
            return h;
        }
    });
    Te.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: Te,
        load: function(a45, b, c, d) {
            var e = this, f = new Zb, g = new Na(this.manager);
            g.setResponseType("arraybuffer");
            g.setPath(this.path);
            g.load(a45, function(a) {
                if (a = e.parse(a)) void 0 !== a.image ? f.image = a.image : void 0 !== a.data && (f.image.width = a.width, f.image.height = a.height, f.image.data = a.data), f.wrapS = void 0 !== a.wrapS ? a.wrapS : 1001, f.wrapT = void 0 !== a.wrapT ? a.wrapT : 1001, f.magFilter = void 0 !== a.magFilter ? a.magFilter : 1006, f.minFilter = void 0 !== a.minFilter ? a.minFilter : 1008, f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1, void 0 !== a.format && (f.format = a.format), void 0 !== a.type && (f.type = a.type), void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps), 1 === a.mipmapCount && (f.minFilter = 1006), f.needsUpdate = !0, b && b(f, a);
            }, c, d);
            return f;
        }
    });
    bd.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: bd,
        load: function(a, b41, c, d) {
            function e() {
                l.removeEventListener("load", e, !1);
                l.removeEventListener("error", f, !1);
                uc.add(a, this);
                b41 && b41(this);
                g.manager.itemEnd(a);
            }
            function f(b) {
                l.removeEventListener("load", e, !1);
                l.removeEventListener("error", f, !1);
                d && d(b);
                g.manager.itemError(a);
                g.manager.itemEnd(a);
            }
            void 0 !== this.path && (a = this.path + a);
            a = this.manager.resolveURL(a);
            var g = this, h = uc.get(a);
            if (void 0 !== h) return g.manager.itemStart(a), setTimeout(function() {
                b41 && b41(h);
                g.manager.itemEnd(a);
            }, 0), h;
            var l = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            l.addEventListener("load", e, !1);
            l.addEventListener("error", f, !1);
            "data:" !== a.substr(0, 5) && void 0 !== this.crossOrigin && (l.crossOrigin = this.crossOrigin);
            g.manager.itemStart(a);
            l.src = a;
            return l;
        }
    });
    Ue.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: Ue,
        load: function(a46, b, c37, d) {
            function e(c) {
                g.load(a46[c], function(a) {
                    f.images[c] = a;
                    h++;
                    6 === h && (f.needsUpdate = !0, b && b(f));
                }, void 0, d);
            }
            var f = new ob, g = new bd(this.manager);
            g.setCrossOrigin(this.crossOrigin);
            g.setPath(this.path);
            var h = 0;
            for(c37 = 0; c37 < a46.length; ++c37)e(c37);
            return f;
        }
    });
    Ve.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: Ve,
        load: function(a, b, c38, d) {
            var e = new W1, f = new bd(this.manager);
            f.setCrossOrigin(this.crossOrigin);
            f.setPath(this.path);
            f.load(a, function(c) {
                e.image = c;
                c = 0 < a.search(/\.jpe?g($|\?)/i) || 0 === a.search(/^data:image\/jpeg/);
                e.format = c ? 1022 : 1023;
                e.needsUpdate = !0;
                void 0 !== b && b(e);
            }, c38, d);
            return e;
        }
    });
    Object.assign(D1.prototype, {
        getPoint: function() {
            console.warn("THREE.Curve: .getPoint() not implemented.");
            return null;
        },
        getPointAt: function(a, b) {
            a = this.getUtoTmapping(a);
            return this.getPoint(a, b);
        },
        getPoints: function(a) {
            void 0 === a && (a = 5);
            for(var b = [], c = 0; c <= a; c++)b.push(this.getPoint(c / a));
            return b;
        },
        getSpacedPoints: function(a) {
            void 0 === a && (a = 5);
            for(var b = [], c = 0; c <= a; c++)b.push(this.getPointAt(c / a));
            return b;
        },
        getLength: function() {
            var a = this.getLengths();
            return a[a.length - 1];
        },
        getLengths: function(a) {
            void 0 === a && (a = this.arcLengthDivisions);
            if (this.cacheArcLengths && this.cacheArcLengths.length === a + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var b = [], c = this.getPoint(0), d, e = 0;
            b.push(0);
            for(d = 1; d <= a; d++){
                var f = this.getPoint(d / a);
                e += f.distanceTo(c);
                b.push(e);
                c = f;
            }
            return this.cacheArcLengths = b;
        },
        updateArcLengths: function() {
            this.needsUpdate = !0;
            this.getLengths();
        },
        getUtoTmapping: function(a, b) {
            var c = this.getLengths(), d = c.length;
            b = b ? b : a * c[d - 1];
            for(var e = 0, f = d - 1, g; e <= f;)if (a = Math.floor(e + (f - e) / 2), g = c[a] - b, 0 > g) e = a + 1;
            else if (0 < g) f = a - 1;
            else {
                f = a;
                break;
            }
            a = f;
            if (c[a] === b) return a / (d - 1);
            e = c[a];
            return (a + (b - e) / (c[a + 1] - e)) / (d - 1);
        },
        getTangent: function(a) {
            var b = a - 1E-4;
            a += 1E-4;
            0 > b && (b = 0);
            1 < a && (a = 1);
            b = this.getPoint(b);
            return this.getPoint(a).clone().sub(b).normalize();
        },
        getTangentAt: function(a) {
            a = this.getUtoTmapping(a);
            return this.getTangent(a);
        },
        computeFrenetFrames: function(a, b) {
            var c = new n1, d = [], e = [], f = [], g = new n1, h = new U1, l;
            for(l = 0; l <= a; l++){
                var k = l / a;
                d[l] = this.getTangentAt(k);
                d[l].normalize();
            }
            e[0] = new n1;
            f[0] = new n1;
            l = Number.MAX_VALUE;
            k = Math.abs(d[0].x);
            var q = Math.abs(d[0].y), u = Math.abs(d[0].z);
            k <= l && (l = k, c.set(1, 0, 0));
            q <= l && (l = q, c.set(0, 1, 0));
            u <= l && c.set(0, 0, 1);
            g.crossVectors(d[0], c).normalize();
            e[0].crossVectors(d[0], g);
            f[0].crossVectors(d[0], e[0]);
            for(l = 1; l <= a; l++)e[l] = e[l - 1].clone(), f[l] = f[l - 1].clone(), g.crossVectors(d[l - 1], d[l]), g.length() > Number.EPSILON && (g.normalize(), c = Math.acos(L1.clamp(d[l - 1].dot(d[l]), -1, 1)), e[l].applyMatrix4(h.makeRotationAxis(g, c))), f[l].crossVectors(d[l], e[l]);
            if (!0 === b) for(c = Math.acos(L1.clamp(e[0].dot(e[a]), -1, 1)), c /= a, 0 < d[0].dot(g.crossVectors(e[0], e[a])) && (c = -c), l = 1; l <= a; l++)e[l].applyMatrix4(h.makeRotationAxis(d[l], c * l)), f[l].crossVectors(d[l], e[l]);
            return {
                tangents: d,
                normals: e,
                binormals: f
            };
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.arcLengthDivisions = a.arcLengthDivisions;
            return this;
        },
        toJSON: function() {
            var a = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            a.arcLengthDivisions = this.arcLengthDivisions;
            a.type = this.type;
            return a;
        },
        fromJSON: function(a) {
            this.arcLengthDivisions = a.arcLengthDivisions;
            return this;
        }
    });
    Ja.prototype = Object.create(D1.prototype);
    Ja.prototype.constructor = Ja;
    Ja.prototype.isEllipseCurve = !0;
    Ja.prototype.getPoint = function(a, b) {
        b = b || new w1;
        for(var c = 2 * Math.PI, d = this.aEndAngle - this.aStartAngle, e = Math.abs(d) < Number.EPSILON; 0 > d;)d += c;
        for(; d > c;)d -= c;
        d < Number.EPSILON && (d = e ? 0 : c);
        !0 !== this.aClockwise || e || (d = d === c ? -c : d - c);
        c = this.aStartAngle + a * d;
        a = this.aX + this.xRadius * Math.cos(c);
        var f = this.aY + this.yRadius * Math.sin(c);
        0 !== this.aRotation && (c = Math.cos(this.aRotation), d = Math.sin(this.aRotation), e = a - this.aX, f -= this.aY, a = e * c - f * d + this.aX, f = e * d + f * c + this.aY);
        return b.set(a, f);
    };
    Ja.prototype.copy = function(a) {
        D1.prototype.copy.call(this, a);
        this.aX = a.aX;
        this.aY = a.aY;
        this.xRadius = a.xRadius;
        this.yRadius = a.yRadius;
        this.aStartAngle = a.aStartAngle;
        this.aEndAngle = a.aEndAngle;
        this.aClockwise = a.aClockwise;
        this.aRotation = a.aRotation;
        return this;
    };
    Ja.prototype.toJSON = function() {
        var a = D1.prototype.toJSON.call(this);
        a.aX = this.aX;
        a.aY = this.aY;
        a.xRadius = this.xRadius;
        a.yRadius = this.yRadius;
        a.aStartAngle = this.aStartAngle;
        a.aEndAngle = this.aEndAngle;
        a.aClockwise = this.aClockwise;
        a.aRotation = this.aRotation;
        return a;
    };
    Ja.prototype.fromJSON = function(a) {
        D1.prototype.fromJSON.call(this, a);
        this.aX = a.aX;
        this.aY = a.aY;
        this.xRadius = a.xRadius;
        this.yRadius = a.yRadius;
        this.aStartAngle = a.aStartAngle;
        this.aEndAngle = a.aEndAngle;
        this.aClockwise = a.aClockwise;
        this.aRotation = a.aRotation;
        return this;
    };
    cd.prototype = Object.create(Ja.prototype);
    cd.prototype.constructor = cd;
    cd.prototype.isArcCurve = !0;
    var Hf = new n1, bh = new sg, ch = new sg, dh = new sg;
    ya1.prototype = Object.create(D1.prototype);
    ya1.prototype.constructor = ya1;
    ya1.prototype.isCatmullRomCurve3 = !0;
    ya1.prototype.getPoint = function(a, b) {
        b = b || new n1;
        var c = this.points, d = c.length;
        a *= d - (this.closed ? 0 : 1);
        var e = Math.floor(a);
        a -= e;
        this.closed ? e += 0 < e ? 0 : (Math.floor(Math.abs(e) / d) + 1) * d : 0 === a && e === d - 1 && (e = d - 2, a = 1);
        if (this.closed || 0 < e) var f = c[(e - 1) % d];
        else Hf.subVectors(c[0], c[1]).add(c[0]), f = Hf;
        var g = c[e % d];
        var h = c[(e + 1) % d];
        this.closed || e + 2 < d ? c = c[(e + 2) % d] : (Hf.subVectors(c[d - 1], c[d - 2]).add(c[d - 1]), c = Hf);
        if ("centripetal" === this.curveType || "chordal" === this.curveType) {
            var l = "chordal" === this.curveType ? .5 : .25;
            d = Math.pow(f.distanceToSquared(g), l);
            e = Math.pow(g.distanceToSquared(h), l);
            l = Math.pow(h.distanceToSquared(c), l);
            1E-4 > e && (e = 1);
            1E-4 > d && (d = e);
            1E-4 > l && (l = e);
            bh.initNonuniformCatmullRom(f.x, g.x, h.x, c.x, d, e, l);
            ch.initNonuniformCatmullRom(f.y, g.y, h.y, c.y, d, e, l);
            dh.initNonuniformCatmullRom(f.z, g.z, h.z, c.z, d, e, l);
        } else "catmullrom" === this.curveType && (bh.initCatmullRom(f.x, g.x, h.x, c.x, this.tension), ch.initCatmullRom(f.y, g.y, h.y, c.y, this.tension), dh.initCatmullRom(f.z, g.z, h.z, c.z, this.tension));
        b.set(bh.calc(a), ch.calc(a), dh.calc(a));
        return b;
    };
    ya1.prototype.copy = function(a) {
        D1.prototype.copy.call(this, a);
        this.points = [];
        for(var b = 0, c = a.points.length; b < c; b++)this.points.push(a.points[b].clone());
        this.closed = a.closed;
        this.curveType = a.curveType;
        this.tension = a.tension;
        return this;
    };
    ya1.prototype.toJSON = function() {
        var a = D1.prototype.toJSON.call(this);
        a.points = [];
        for(var b = 0, c = this.points.length; b < c; b++)a.points.push(this.points[b].toArray());
        a.closed = this.closed;
        a.curveType = this.curveType;
        a.tension = this.tension;
        return a;
    };
    ya1.prototype.fromJSON = function(a) {
        D1.prototype.fromJSON.call(this, a);
        this.points = [];
        for(var b = 0, c = a.points.length; b < c; b++){
            var d = a.points[b];
            this.points.push((new n1).fromArray(d));
        }
        this.closed = a.closed;
        this.curveType = a.curveType;
        this.tension = a.tension;
        return this;
    };
    Sa.prototype = Object.create(D1.prototype);
    Sa.prototype.constructor = Sa;
    Sa.prototype.isCubicBezierCurve = !0;
    Sa.prototype.getPoint = function(a, b) {
        b = b || new w1;
        var c = this.v0, d = this.v1, e = this.v2, f = this.v3;
        b.set(ne(a, c.x, d.x, e.x, f.x), ne(a, c.y, d.y, e.y, f.y));
        return b;
    };
    Sa.prototype.copy = function(a) {
        D1.prototype.copy.call(this, a);
        this.v0.copy(a.v0);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        this.v3.copy(a.v3);
        return this;
    };
    Sa.prototype.toJSON = function() {
        var a = D1.prototype.toJSON.call(this);
        a.v0 = this.v0.toArray();
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        a.v3 = this.v3.toArray();
        return a;
    };
    Sa.prototype.fromJSON = function(a) {
        D1.prototype.fromJSON.call(this, a);
        this.v0.fromArray(a.v0);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        this.v3.fromArray(a.v3);
        return this;
    };
    gb.prototype = Object.create(D1.prototype);
    gb.prototype.constructor = gb;
    gb.prototype.isCubicBezierCurve3 = !0;
    gb.prototype.getPoint = function(a, b) {
        b = b || new n1;
        var c = this.v0, d = this.v1, e = this.v2, f = this.v3;
        b.set(ne(a, c.x, d.x, e.x, f.x), ne(a, c.y, d.y, e.y, f.y), ne(a, c.z, d.z, e.z, f.z));
        return b;
    };
    gb.prototype.copy = function(a) {
        D1.prototype.copy.call(this, a);
        this.v0.copy(a.v0);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        this.v3.copy(a.v3);
        return this;
    };
    gb.prototype.toJSON = function() {
        var a = D1.prototype.toJSON.call(this);
        a.v0 = this.v0.toArray();
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        a.v3 = this.v3.toArray();
        return a;
    };
    gb.prototype.fromJSON = function(a) {
        D1.prototype.fromJSON.call(this, a);
        this.v0.fromArray(a.v0);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        this.v3.fromArray(a.v3);
        return this;
    };
    za1.prototype = Object.create(D1.prototype);
    za1.prototype.constructor = za1;
    za1.prototype.isLineCurve = !0;
    za1.prototype.getPoint = function(a, b) {
        b = b || new w1;
        1 === a ? b.copy(this.v2) : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1));
        return b;
    };
    za1.prototype.getPointAt = function(a, b) {
        return this.getPoint(a, b);
    };
    za1.prototype.getTangent = function() {
        return this.v2.clone().sub(this.v1).normalize();
    };
    za1.prototype.copy = function(a) {
        D1.prototype.copy.call(this, a);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        return this;
    };
    za1.prototype.toJSON = function() {
        var a = D1.prototype.toJSON.call(this);
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        return a;
    };
    za1.prototype.fromJSON = function(a) {
        D1.prototype.fromJSON.call(this, a);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        return this;
    };
    Ta.prototype = Object.create(D1.prototype);
    Ta.prototype.constructor = Ta;
    Ta.prototype.isLineCurve3 = !0;
    Ta.prototype.getPoint = function(a, b) {
        b = b || new n1;
        1 === a ? b.copy(this.v2) : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1));
        return b;
    };
    Ta.prototype.getPointAt = function(a, b) {
        return this.getPoint(a, b);
    };
    Ta.prototype.copy = function(a) {
        D1.prototype.copy.call(this, a);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        return this;
    };
    Ta.prototype.toJSON = function() {
        var a = D1.prototype.toJSON.call(this);
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        return a;
    };
    Ta.prototype.fromJSON = function(a) {
        D1.prototype.fromJSON.call(this, a);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        return this;
    };
    Ua.prototype = Object.create(D1.prototype);
    Ua.prototype.constructor = Ua;
    Ua.prototype.isQuadraticBezierCurve = !0;
    Ua.prototype.getPoint = function(a, b) {
        b = b || new w1;
        var c = this.v0, d = this.v1, e = this.v2;
        b.set(me(a, c.x, d.x, e.x), me(a, c.y, d.y, e.y));
        return b;
    };
    Ua.prototype.copy = function(a) {
        D1.prototype.copy.call(this, a);
        this.v0.copy(a.v0);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        return this;
    };
    Ua.prototype.toJSON = function() {
        var a = D1.prototype.toJSON.call(this);
        a.v0 = this.v0.toArray();
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        return a;
    };
    Ua.prototype.fromJSON = function(a) {
        D1.prototype.fromJSON.call(this, a);
        this.v0.fromArray(a.v0);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        return this;
    };
    hb.prototype = Object.create(D1.prototype);
    hb.prototype.constructor = hb;
    hb.prototype.isQuadraticBezierCurve3 = !0;
    hb.prototype.getPoint = function(a, b) {
        b = b || new n1;
        var c = this.v0, d = this.v1, e = this.v2;
        b.set(me(a, c.x, d.x, e.x), me(a, c.y, d.y, e.y), me(a, c.z, d.z, e.z));
        return b;
    };
    hb.prototype.copy = function(a) {
        D1.prototype.copy.call(this, a);
        this.v0.copy(a.v0);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        return this;
    };
    hb.prototype.toJSON = function() {
        var a = D1.prototype.toJSON.call(this);
        a.v0 = this.v0.toArray();
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        return a;
    };
    hb.prototype.fromJSON = function(a) {
        D1.prototype.fromJSON.call(this, a);
        this.v0.fromArray(a.v0);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        return this;
    };
    Va.prototype = Object.create(D1.prototype);
    Va.prototype.constructor = Va;
    Va.prototype.isSplineCurve = !0;
    Va.prototype.getPoint = function(a, b) {
        b = b || new w1;
        var c = this.points, d = (c.length - 1) * a;
        a = Math.floor(d);
        d -= a;
        var e = c[0 === a ? a : a - 1], f = c[a], g = c[a > c.length - 2 ? c.length - 1 : a + 1];
        c = c[a > c.length - 3 ? c.length - 1 : a + 2];
        b.set($h(d, e.x, f.x, g.x, c.x), $h(d, e.y, f.y, g.y, c.y));
        return b;
    };
    Va.prototype.copy = function(a) {
        D1.prototype.copy.call(this, a);
        this.points = [];
        for(var b = 0, c = a.points.length; b < c; b++)this.points.push(a.points[b].clone());
        return this;
    };
    Va.prototype.toJSON = function() {
        var a = D1.prototype.toJSON.call(this);
        a.points = [];
        for(var b = 0, c = this.points.length; b < c; b++)a.points.push(this.points[b].toArray());
        return a;
    };
    Va.prototype.fromJSON = function(a) {
        D1.prototype.fromJSON.call(this, a);
        this.points = [];
        for(var b = 0, c = a.points.length; b < c; b++){
            var d = a.points[b];
            this.points.push((new w1).fromArray(d));
        }
        return this;
    };
    var eh = Object.freeze({
        ArcCurve: cd,
        CatmullRomCurve3: ya1,
        CubicBezierCurve: Sa,
        CubicBezierCurve3: gb,
        EllipseCurve: Ja,
        LineCurve: za1,
        LineCurve3: Ta,
        QuadraticBezierCurve: Ua,
        QuadraticBezierCurve3: hb,
        SplineCurve: Va
    });
    rb.prototype = Object.assign(Object.create(D1.prototype), {
        constructor: rb,
        add: function(a) {
            this.curves.push(a);
        },
        closePath: function() {
            var a = this.curves[0].getPoint(0), b = this.curves[this.curves.length - 1].getPoint(1);
            a.equals(b) || this.curves.push(new za1(b, a));
        },
        getPoint: function(a) {
            var b = a * this.getLength(), c = this.getCurveLengths();
            for(a = 0; a < c.length;){
                if (c[a] >= b) return b = c[a] - b, a = this.curves[a], c = a.getLength(), a.getPointAt(0 === c ? 0 : 1 - b / c);
                a++;
            }
            return null;
        },
        getLength: function() {
            var a = this.getCurveLengths();
            return a[a.length - 1];
        },
        updateArcLengths: function() {
            this.needsUpdate = !0;
            this.cacheLengths = null;
            this.getCurveLengths();
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for(var a = [], b = 0, c = 0, d = this.curves.length; c < d; c++)b += this.curves[c].getLength(), a.push(b);
            return this.cacheLengths = a;
        },
        getSpacedPoints: function(a) {
            void 0 === a && (a = 40);
            for(var b = [], c = 0; c <= a; c++)b.push(this.getPoint(c / a));
            this.autoClose && b.push(b[0]);
            return b;
        },
        getPoints: function(a) {
            a = a || 12;
            for(var b = [], c, d = 0, e = this.curves; d < e.length; d++){
                var f = e[d];
                f = f.getPoints(f && f.isEllipseCurve ? 2 * a : f && (f.isLineCurve || f.isLineCurve3) ? 1 : f && f.isSplineCurve ? a * f.points.length : a);
                for(var g = 0; g < f.length; g++){
                    var h = f[g];
                    c && c.equals(h) || (b.push(h), c = h);
                }
            }
            this.autoClose && 1 < b.length && !b[b.length - 1].equals(b[0]) && b.push(b[0]);
            return b;
        },
        copy: function(a) {
            D1.prototype.copy.call(this, a);
            this.curves = [];
            for(var b = 0, c = a.curves.length; b < c; b++)this.curves.push(a.curves[b].clone());
            this.autoClose = a.autoClose;
            return this;
        },
        toJSON: function() {
            var a = D1.prototype.toJSON.call(this);
            a.autoClose = this.autoClose;
            a.curves = [];
            for(var b = 0, c = this.curves.length; b < c; b++)a.curves.push(this.curves[b].toJSON());
            return a;
        },
        fromJSON: function(a) {
            D1.prototype.fromJSON.call(this, a);
            this.autoClose = a.autoClose;
            this.curves = [];
            for(var b = 0, c = a.curves.length; b < c; b++){
                var d = a.curves[b];
                this.curves.push((new eh[d.type]).fromJSON(d));
            }
            return this;
        }
    });
    Wa.prototype = Object.assign(Object.create(rb.prototype), {
        constructor: Wa,
        setFromPoints: function(a) {
            this.moveTo(a[0].x, a[0].y);
            for(var b = 1, c = a.length; b < c; b++)this.lineTo(a[b].x, a[b].y);
        },
        moveTo: function(a, b) {
            this.currentPoint.set(a, b);
        },
        lineTo: function(a, b) {
            var c = new za1(this.currentPoint.clone(), new w1(a, b));
            this.curves.push(c);
            this.currentPoint.set(a, b);
        },
        quadraticCurveTo: function(a, b, c, d) {
            a = new Ua(this.currentPoint.clone(), new w1(a, b), new w1(c, d));
            this.curves.push(a);
            this.currentPoint.set(c, d);
        },
        bezierCurveTo: function(a, b, c, d, e, f) {
            a = new Sa(this.currentPoint.clone(), new w1(a, b), new w1(c, d), new w1(e, f));
            this.curves.push(a);
            this.currentPoint.set(e, f);
        },
        splineThru: function(a) {
            var b = [
                this.currentPoint.clone()
            ].concat(a);
            b = new Va(b);
            this.curves.push(b);
            this.currentPoint.copy(a[a.length - 1]);
        },
        arc: function(a, b, c, d, e, f) {
            this.absarc(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f);
        },
        absarc: function(a, b, c, d, e, f) {
            this.absellipse(a, b, c, c, d, e, f);
        },
        ellipse: function(a, b, c, d, e, f, g, h) {
            this.absellipse(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f, g, h);
        },
        absellipse: function(a, b, c, d, e, f, g, h) {
            a = new Ja(a, b, c, d, e, f, g, h);
            0 < this.curves.length && (b = a.getPoint(0), b.equals(this.currentPoint) || this.lineTo(b.x, b.y));
            this.curves.push(a);
            a = a.getPoint(1);
            this.currentPoint.copy(a);
        },
        copy: function(a) {
            rb.prototype.copy.call(this, a);
            this.currentPoint.copy(a.currentPoint);
            return this;
        },
        toJSON: function() {
            var a = rb.prototype.toJSON.call(this);
            a.currentPoint = this.currentPoint.toArray();
            return a;
        },
        fromJSON: function(a) {
            rb.prototype.fromJSON.call(this, a);
            this.currentPoint.fromArray(a.currentPoint);
            return this;
        }
    });
    Jb.prototype = Object.assign(Object.create(Wa.prototype), {
        constructor: Jb,
        getPointsHoles: function(a) {
            for(var b = [], c = 0, d = this.holes.length; c < d; c++)b[c] = this.holes[c].getPoints(a);
            return b;
        },
        extractPoints: function(a) {
            return {
                shape: this.getPoints(a),
                holes: this.getPointsHoles(a)
            };
        },
        copy: function(a) {
            Wa.prototype.copy.call(this, a);
            this.holes = [];
            for(var b = 0, c = a.holes.length; b < c; b++)this.holes.push(a.holes[b].clone());
            return this;
        },
        toJSON: function() {
            var a = Wa.prototype.toJSON.call(this);
            a.uuid = this.uuid;
            a.holes = [];
            for(var b = 0, c = this.holes.length; b < c; b++)a.holes.push(this.holes[b].toJSON());
            return a;
        },
        fromJSON: function(a) {
            Wa.prototype.fromJSON.call(this, a);
            this.uuid = a.uuid;
            this.holes = [];
            for(var b = 0, c = a.holes.length; b < c; b++){
                var d = a.holes[b];
                this.holes.push((new Wa).fromJSON(d));
            }
            return this;
        }
    });
    da1.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: da1,
        isLight: !0,
        copy: function(a) {
            B1.prototype.copy.call(this, a);
            this.color.copy(a.color);
            this.intensity = a.intensity;
            return this;
        },
        toJSON: function(a) {
            a = B1.prototype.toJSON.call(this, a);
            a.object.color = this.color.getHex();
            a.object.intensity = this.intensity;
            void 0 !== this.groundColor && (a.object.groundColor = this.groundColor.getHex());
            void 0 !== this.distance && (a.object.distance = this.distance);
            void 0 !== this.angle && (a.object.angle = this.angle);
            void 0 !== this.decay && (a.object.decay = this.decay);
            void 0 !== this.penumbra && (a.object.penumbra = this.penumbra);
            void 0 !== this.shadow && (a.object.shadow = this.shadow.toJSON());
            return a;
        }
    });
    We.prototype = Object.assign(Object.create(da1.prototype), {
        constructor: We,
        isHemisphereLight: !0,
        copy: function(a) {
            da1.prototype.copy.call(this, a);
            this.groundColor.copy(a.groundColor);
            return this;
        }
    });
    Object.assign(ib.prototype, {
        _projScreenMatrix: new U1,
        _lightPositionWorld: new n1,
        _lookTarget: new n1,
        getViewportCount: function() {
            return this._viewportCount;
        },
        getFrustum: function() {
            return this._frustum;
        },
        updateMatrices: function(a) {
            var b = this.camera, c = this.matrix, d = this._projScreenMatrix, e = this._lookTarget, f = this._lightPositionWorld;
            f.setFromMatrixPosition(a.matrixWorld);
            b.position.copy(f);
            e.setFromMatrixPosition(a.target.matrixWorld);
            b.lookAt(e);
            b.updateMatrixWorld();
            d.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
            this._frustum.setFromMatrix(d);
            c.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
            c.multiply(b.projectionMatrix);
            c.multiply(b.matrixWorldInverse);
        },
        getViewport: function(a) {
            return this._viewports[a];
        },
        getFrameExtents: function() {
            return this._frameExtents;
        },
        copy: function(a) {
            this.camera = a.camera.clone();
            this.bias = a.bias;
            this.radius = a.radius;
            this.mapSize.copy(a.mapSize);
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        toJSON: function() {
            var a = {};
            0 !== this.bias && (a.bias = this.bias);
            1 !== this.radius && (a.radius = this.radius);
            if (512 !== this.mapSize.x || 512 !== this.mapSize.y) a.mapSize = this.mapSize.toArray();
            a.camera = this.camera.toJSON(!1).object;
            delete a.camera.matrix;
            return a;
        }
    });
    Xe.prototype = Object.assign(Object.create(ib.prototype), {
        constructor: Xe,
        isSpotLightShadow: !0,
        updateMatrices: function(a, b, c) {
            var d = this.camera, e = 2 * L1.RAD2DEG * a.angle, f = this.mapSize.width / this.mapSize.height, g = a.distance || d.far;
            if (e !== d.fov || f !== d.aspect || g !== d.far) d.fov = e, d.aspect = f, d.far = g, d.updateProjectionMatrix();
            ib.prototype.updateMatrices.call(this, a, b, c);
        }
    });
    Ye.prototype = Object.assign(Object.create(da1.prototype), {
        constructor: Ye,
        isSpotLight: !0,
        copy: function(a) {
            da1.prototype.copy.call(this, a);
            this.distance = a.distance;
            this.angle = a.angle;
            this.penumbra = a.penumbra;
            this.decay = a.decay;
            this.target = a.target.clone();
            this.shadow = a.shadow.clone();
            return this;
        }
    });
    tg.prototype = Object.assign(Object.create(ib.prototype), {
        constructor: tg,
        isPointLightShadow: !0,
        updateMatrices: function(a, b, c) {
            b = this.camera;
            var d = this.matrix, e = this._lightPositionWorld, f = this._lookTarget, g = this._projScreenMatrix;
            e.setFromMatrixPosition(a.matrixWorld);
            b.position.copy(e);
            f.copy(b.position);
            f.add(this._cubeDirections[c]);
            b.up.copy(this._cubeUps[c]);
            b.lookAt(f);
            b.updateMatrixWorld();
            d.makeTranslation(-e.x, -e.y, -e.z);
            g.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
            this._frustum.setFromMatrix(g);
        }
    });
    Ze.prototype = Object.assign(Object.create(da1.prototype), {
        constructor: Ze,
        isPointLight: !0,
        copy: function(a) {
            da1.prototype.copy.call(this, a);
            this.distance = a.distance;
            this.decay = a.decay;
            this.shadow = a.shadow.clone();
            return this;
        }
    });
    oe.prototype = Object.assign(Object.create(bb.prototype), {
        constructor: oe,
        isOrthographicCamera: !0,
        copy: function(a, b) {
            bb.prototype.copy.call(this, a, b);
            this.left = a.left;
            this.right = a.right;
            this.top = a.top;
            this.bottom = a.bottom;
            this.near = a.near;
            this.far = a.far;
            this.zoom = a.zoom;
            this.view = null === a.view ? null : Object.assign({}, a.view);
            return this;
        },
        setViewOffset: function(a, b, c, d, e, f) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            });
            this.view.enabled = !0;
            this.view.fullWidth = a;
            this.view.fullHeight = b;
            this.view.offsetX = c;
            this.view.offsetY = d;
            this.view.width = e;
            this.view.height = f;
            this.updateProjectionMatrix();
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1);
            this.updateProjectionMatrix();
        },
        updateProjectionMatrix: function() {
            var a = (this.right - this.left) / (2 * this.zoom), b = (this.top - this.bottom) / (2 * this.zoom), c = (this.right + this.left) / 2, d = (this.top + this.bottom) / 2, e = c - a;
            c += a;
            a = d + b;
            b = d - b;
            if (null !== this.view && this.view.enabled) {
                c = this.zoom / (this.view.width / this.view.fullWidth);
                b = this.zoom / (this.view.height / this.view.fullHeight);
                var f = (this.right - this.left) / this.view.width;
                d = (this.top - this.bottom) / this.view.height;
                e += this.view.offsetX / c * f;
                c = e + this.view.width / c * f;
                a -= this.view.offsetY / b * d;
                b = a - this.view.height / b * d;
            }
            this.projectionMatrix.makeOrthographic(e, c, a, b, this.near, this.far);
            this.projectionMatrixInverse.getInverse(this.projectionMatrix);
        },
        toJSON: function(a) {
            a = B1.prototype.toJSON.call(this, a);
            a.object.zoom = this.zoom;
            a.object.left = this.left;
            a.object.right = this.right;
            a.object.top = this.top;
            a.object.bottom = this.bottom;
            a.object.near = this.near;
            a.object.far = this.far;
            null !== this.view && (a.object.view = Object.assign({}, this.view));
            return a;
        }
    });
    $e.prototype = Object.assign(Object.create(ib.prototype), {
        constructor: $e,
        isDirectionalLightShadow: !0,
        updateMatrices: function(a, b, c) {
            ib.prototype.updateMatrices.call(this, a, b, c);
        }
    });
    af.prototype = Object.assign(Object.create(da1.prototype), {
        constructor: af,
        isDirectionalLight: !0,
        copy: function(a) {
            da1.prototype.copy.call(this, a);
            this.target = a.target.clone();
            this.shadow = a.shadow.clone();
            return this;
        }
    });
    bf.prototype = Object.assign(Object.create(da1.prototype), {
        constructor: bf,
        isAmbientLight: !0
    });
    cf.prototype = Object.assign(Object.create(da1.prototype), {
        constructor: cf,
        isRectAreaLight: !0,
        copy: function(a) {
            da1.prototype.copy.call(this, a);
            this.width = a.width;
            this.height = a.height;
            return this;
        },
        toJSON: function(a) {
            a = da1.prototype.toJSON.call(this, a);
            a.object.width = this.width;
            a.object.height = this.height;
            return a;
        }
    });
    df.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: df,
        load: function(a47, b, c, d) {
            var e = this, f = new Na(e.manager);
            f.setPath(e.path);
            f.load(a47, function(a) {
                b(e.parse(JSON.parse(a)));
            }, c, d);
        },
        parse: function(a48) {
            function b(a) {
                void 0 === c[a] && console.warn("THREE.MaterialLoader: Undefined texture", a);
                return c[a];
            }
            var c = this.textures, d = new Fk[a48.type];
            void 0 !== a48.uuid && (d.uuid = a48.uuid);
            void 0 !== a48.name && (d.name = a48.name);
            void 0 !== a48.color && d.color.setHex(a48.color);
            void 0 !== a48.roughness && (d.roughness = a48.roughness);
            void 0 !== a48.metalness && (d.metalness = a48.metalness);
            void 0 !== a48.sheen && (d.sheen = (new H1).setHex(a48.sheen));
            void 0 !== a48.emissive && d.emissive.setHex(a48.emissive);
            void 0 !== a48.specular && d.specular.setHex(a48.specular);
            void 0 !== a48.shininess && (d.shininess = a48.shininess);
            void 0 !== a48.clearcoat && (d.clearcoat = a48.clearcoat);
            void 0 !== a48.clearcoatRoughness && (d.clearcoatRoughness = a48.clearcoatRoughness);
            void 0 !== a48.vertexColors && (d.vertexColors = a48.vertexColors);
            void 0 !== a48.fog && (d.fog = a48.fog);
            void 0 !== a48.flatShading && (d.flatShading = a48.flatShading);
            void 0 !== a48.blending && (d.blending = a48.blending);
            void 0 !== a48.combine && (d.combine = a48.combine);
            void 0 !== a48.side && (d.side = a48.side);
            void 0 !== a48.opacity && (d.opacity = a48.opacity);
            void 0 !== a48.transparent && (d.transparent = a48.transparent);
            void 0 !== a48.alphaTest && (d.alphaTest = a48.alphaTest);
            void 0 !== a48.depthTest && (d.depthTest = a48.depthTest);
            void 0 !== a48.depthWrite && (d.depthWrite = a48.depthWrite);
            void 0 !== a48.colorWrite && (d.colorWrite = a48.colorWrite);
            void 0 !== a48.stencilWrite && (d.stencilWrite = a48.stencilWrite);
            void 0 !== a48.stencilWriteMask && (d.stencilWriteMask = a48.stencilWriteMask);
            void 0 !== a48.stencilFunc && (d.stencilFunc = a48.stencilFunc);
            void 0 !== a48.stencilRef && (d.stencilRef = a48.stencilRef);
            void 0 !== a48.stencilFuncMask && (d.stencilFuncMask = a48.stencilFuncMask);
            void 0 !== a48.stencilFail && (d.stencilFail = a48.stencilFail);
            void 0 !== a48.stencilZFail && (d.stencilZFail = a48.stencilZFail);
            void 0 !== a48.stencilZPass && (d.stencilZPass = a48.stencilZPass);
            void 0 !== a48.wireframe && (d.wireframe = a48.wireframe);
            void 0 !== a48.wireframeLinewidth && (d.wireframeLinewidth = a48.wireframeLinewidth);
            void 0 !== a48.wireframeLinecap && (d.wireframeLinecap = a48.wireframeLinecap);
            void 0 !== a48.wireframeLinejoin && (d.wireframeLinejoin = a48.wireframeLinejoin);
            void 0 !== a48.rotation && (d.rotation = a48.rotation);
            1 !== a48.linewidth && (d.linewidth = a48.linewidth);
            void 0 !== a48.dashSize && (d.dashSize = a48.dashSize);
            void 0 !== a48.gapSize && (d.gapSize = a48.gapSize);
            void 0 !== a48.scale && (d.scale = a48.scale);
            void 0 !== a48.polygonOffset && (d.polygonOffset = a48.polygonOffset);
            void 0 !== a48.polygonOffsetFactor && (d.polygonOffsetFactor = a48.polygonOffsetFactor);
            void 0 !== a48.polygonOffsetUnits && (d.polygonOffsetUnits = a48.polygonOffsetUnits);
            void 0 !== a48.skinning && (d.skinning = a48.skinning);
            void 0 !== a48.morphTargets && (d.morphTargets = a48.morphTargets);
            void 0 !== a48.morphNormals && (d.morphNormals = a48.morphNormals);
            void 0 !== a48.dithering && (d.dithering = a48.dithering);
            void 0 !== a48.visible && (d.visible = a48.visible);
            void 0 !== a48.toneMapped && (d.toneMapped = a48.toneMapped);
            void 0 !== a48.userData && (d.userData = a48.userData);
            if (void 0 !== a48.uniforms) for(var e in a48.uniforms){
                var f = a48.uniforms[e];
                d.uniforms[e] = {};
                switch(f.type){
                    case "t":
                        d.uniforms[e].value = b(f.value);
                        break;
                    case "c":
                        d.uniforms[e].value = (new H1).setHex(f.value);
                        break;
                    case "v2":
                        d.uniforms[e].value = (new w1).fromArray(f.value);
                        break;
                    case "v3":
                        d.uniforms[e].value = (new n1).fromArray(f.value);
                        break;
                    case "v4":
                        d.uniforms[e].value = (new aa1).fromArray(f.value);
                        break;
                    case "m3":
                        d.uniforms[e].value = (new Y1).fromArray(f.value);
                    case "m4":
                        d.uniforms[e].value = (new U1).fromArray(f.value);
                        break;
                    default:
                        d.uniforms[e].value = f.value;
                }
            }
            void 0 !== a48.defines && (d.defines = a48.defines);
            void 0 !== a48.vertexShader && (d.vertexShader = a48.vertexShader);
            void 0 !== a48.fragmentShader && (d.fragmentShader = a48.fragmentShader);
            if (void 0 !== a48.extensions) for(var g in a48.extensions)d.extensions[g] = a48.extensions[g];
            void 0 !== a48.shading && (d.flatShading = 1 === a48.shading);
            void 0 !== a48.size && (d.size = a48.size);
            void 0 !== a48.sizeAttenuation && (d.sizeAttenuation = a48.sizeAttenuation);
            void 0 !== a48.map && (d.map = b(a48.map));
            void 0 !== a48.matcap && (d.matcap = b(a48.matcap));
            void 0 !== a48.alphaMap && (d.alphaMap = b(a48.alphaMap), d.transparent = !0);
            void 0 !== a48.bumpMap && (d.bumpMap = b(a48.bumpMap));
            void 0 !== a48.bumpScale && (d.bumpScale = a48.bumpScale);
            void 0 !== a48.normalMap && (d.normalMap = b(a48.normalMap));
            void 0 !== a48.normalMapType && (d.normalMapType = a48.normalMapType);
            void 0 !== a48.normalScale && (e = a48.normalScale, !1 === Array.isArray(e) && (e = [
                e,
                e
            ]), d.normalScale = (new w1).fromArray(e));
            void 0 !== a48.displacementMap && (d.displacementMap = b(a48.displacementMap));
            void 0 !== a48.displacementScale && (d.displacementScale = a48.displacementScale);
            void 0 !== a48.displacementBias && (d.displacementBias = a48.displacementBias);
            void 0 !== a48.roughnessMap && (d.roughnessMap = b(a48.roughnessMap));
            void 0 !== a48.metalnessMap && (d.metalnessMap = b(a48.metalnessMap));
            void 0 !== a48.emissiveMap && (d.emissiveMap = b(a48.emissiveMap));
            void 0 !== a48.emissiveIntensity && (d.emissiveIntensity = a48.emissiveIntensity);
            void 0 !== a48.specularMap && (d.specularMap = b(a48.specularMap));
            void 0 !== a48.envMap && (d.envMap = b(a48.envMap));
            void 0 !== a48.envMapIntensity && (d.envMapIntensity = a48.envMapIntensity);
            void 0 !== a48.reflectivity && (d.reflectivity = a48.reflectivity);
            void 0 !== a48.refractionRatio && (d.refractionRatio = a48.refractionRatio);
            void 0 !== a48.lightMap && (d.lightMap = b(a48.lightMap));
            void 0 !== a48.lightMapIntensity && (d.lightMapIntensity = a48.lightMapIntensity);
            void 0 !== a48.aoMap && (d.aoMap = b(a48.aoMap));
            void 0 !== a48.aoMapIntensity && (d.aoMapIntensity = a48.aoMapIntensity);
            void 0 !== a48.gradientMap && (d.gradientMap = b(a48.gradientMap));
            void 0 !== a48.clearcoatNormalMap && (d.clearcoatNormalMap = b(a48.clearcoatNormalMap));
            void 0 !== a48.clearcoatNormalScale && (d.clearcoatNormalScale = (new w1).fromArray(a48.clearcoatNormalScale));
            return d;
        },
        setTextures: function(a) {
            this.textures = a;
            return this;
        }
    });
    var fh = {
        decodeText: function(a) {
            if ("undefined" !== typeof TextDecoder) return (new TextDecoder).decode(a);
            for(var b = "", c = 0, d = a.length; c < d; c++)b += String.fromCharCode(a[c]);
            try {
                return decodeURIComponent(escape(b));
            } catch (e) {
                return b;
            }
        },
        extractUrlBase: function(a) {
            var b = a.lastIndexOf("/");
            return -1 === b ? "./" : a.substr(0, b + 1);
        }
    };
    ef.prototype = Object.assign(Object.create(E1.prototype), {
        constructor: ef,
        isInstancedBufferGeometry: !0,
        copy: function(a) {
            E1.prototype.copy.call(this, a);
            this.maxInstancedCount = a.maxInstancedCount;
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        toJSON: function() {
            var a = E1.prototype.toJSON.call(this);
            a.maxInstancedCount = this.maxInstancedCount;
            a.isInstancedBufferGeometry = !0;
            return a;
        }
    });
    ff.prototype = Object.assign(Object.create(O1.prototype), {
        constructor: ff,
        isInstancedBufferAttribute: !0,
        copy: function(a) {
            O1.prototype.copy.call(this, a);
            this.meshPerAttribute = a.meshPerAttribute;
            return this;
        },
        toJSON: function() {
            var a = O1.prototype.toJSON.call(this);
            a.meshPerAttribute = this.meshPerAttribute;
            a.isInstancedBufferAttribute = !0;
            return a;
        }
    });
    gf.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: gf,
        load: function(a49, b, c, d) {
            var e = this, f = new Na(e.manager);
            f.setPath(e.path);
            f.load(a49, function(a) {
                b(e.parse(JSON.parse(a)));
            }, c, d);
        },
        parse: function(a) {
            var b = a.isInstancedBufferGeometry ? new ef : new E1, c = a.data.index;
            if (void 0 !== c) {
                var d = new gh[c.type](c.array);
                b.setIndex(new O1(d, 1));
            }
            c = a.data.attributes;
            for(var e in c){
                var f = c[e];
                d = new gh[f.type](f.array);
                d = new (f.isInstancedBufferAttribute ? ff : O1)(d, f.itemSize, f.normalized);
                void 0 !== f.name && (d.name = f.name);
                b.addAttribute(e, d);
            }
            var g = a.data.morphAttributes;
            if (g) for(e in g){
                var h = g[e], l = [];
                c = 0;
                for(var k = h.length; c < k; c++)f = h[c], d = new gh[f.type](f.array), d = new O1(d, f.itemSize, f.normalized), void 0 !== f.name && (d.name = f.name), l.push(d);
                b.morphAttributes[e] = l;
            }
            e = a.data.groups || a.data.drawcalls || a.data.offsets;
            if (void 0 !== e) for(c = 0, f = e.length; c !== f; ++c)d = e[c], b.addGroup(d.start, d.count, d.materialIndex);
            c = a.data.boundingSphere;
            void 0 !== c && (e = new n1, void 0 !== c.center && e.fromArray(c.center), b.boundingSphere = new nb(e, c.radius));
            a.name && (b.name = a.name);
            a.userData && (b.userData = a.userData);
            return b;
        }
    });
    var gh = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" !== typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    hf.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: hf,
        load: function(a, b, c39, d) {
            var e = this, f23 = "" === this.path ? fh.extractUrlBase(a) : this.path;
            this.resourcePath = this.resourcePath || f23;
            f23 = new Na(e.manager);
            f23.setPath(this.path);
            f23.load(a, function(c) {
                var f = null;
                try {
                    f = JSON.parse(c);
                } catch (l) {
                    void 0 !== d && d(l);
                    console.error("THREE:ObjectLoader: Can't parse " + a + ".", l.message);
                    return;
                }
                c = f.metadata;
                void 0 === c || void 0 === c.type || "geometry" === c.type.toLowerCase() ? console.error("THREE.ObjectLoader: Can't load " + a) : e.parse(f, b);
            }, c39, d);
        },
        parse: function(a, b) {
            var c = this.parseShape(a.shapes);
            c = this.parseGeometries(a.geometries, c);
            var d = this.parseImages(a.images, function() {
                void 0 !== b && b(e);
            });
            d = this.parseTextures(a.textures, d);
            d = this.parseMaterials(a.materials, d);
            var e = this.parseObject(a.object, c, d);
            a.animations && (e.animations = this.parseAnimations(a.animations));
            void 0 !== a.images && 0 !== a.images.length || void 0 === b || b(e);
            return e;
        },
        parseShape: function(a) {
            var b = {};
            if (void 0 !== a) for(var c = 0, d = a.length; c < d; c++){
                var e = (new Jb).fromJSON(a[c]);
                b[e.uuid] = e;
            }
            return b;
        },
        parseGeometries: function(a, b) {
            var c = {};
            if (void 0 !== a) for(var d = new gf, e = 0, f = a.length; e < f; e++){
                var g = a[e];
                switch(g.type){
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        var h = new ta1[g.type](g.width, g.height, g.widthSegments, g.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                    case "CubeGeometry":
                        h = new ta1[g.type](g.width, g.height, g.depth, g.widthSegments, g.heightSegments, g.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        h = new ta1[g.type](g.radius, g.segments, g.thetaStart, g.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        h = new ta1[g.type](g.radiusTop, g.radiusBottom, g.height, g.radialSegments, g.heightSegments, g.openEnded, g.thetaStart, g.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        h = new ta1[g.type](g.radius, g.height, g.radialSegments, g.heightSegments, g.openEnded, g.thetaStart, g.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        h = new ta1[g.type](g.radius, g.widthSegments, g.heightSegments, g.phiStart, g.phiLength, g.thetaStart, g.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "DodecahedronBufferGeometry":
                    case "IcosahedronGeometry":
                    case "IcosahedronBufferGeometry":
                    case "OctahedronGeometry":
                    case "OctahedronBufferGeometry":
                    case "TetrahedronGeometry":
                    case "TetrahedronBufferGeometry":
                        h = new ta1[g.type](g.radius, g.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        h = new ta1[g.type](g.innerRadius, g.outerRadius, g.thetaSegments, g.phiSegments, g.thetaStart, g.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        h = new ta1[g.type](g.radius, g.tube, g.radialSegments, g.tubularSegments, g.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        h = new ta1[g.type](g.radius, g.tube, g.tubularSegments, g.radialSegments, g.p, g.q);
                        break;
                    case "TubeGeometry":
                    case "TubeBufferGeometry":
                        h = new ta1[g.type]((new eh[g.path.type]).fromJSON(g.path), g.tubularSegments, g.radius, g.radialSegments, g.closed);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        h = new ta1[g.type](g.points, g.segments, g.phiStart, g.phiLength);
                        break;
                    case "PolyhedronGeometry":
                    case "PolyhedronBufferGeometry":
                        h = new ta1[g.type](g.vertices, g.indices, g.radius, g.details);
                        break;
                    case "ShapeGeometry":
                    case "ShapeBufferGeometry":
                        h = [];
                        for(var l = 0, k = g.shapes.length; l < k; l++){
                            var n = b[g.shapes[l]];
                            h.push(n);
                        }
                        h = new ta1[g.type](h, g.curveSegments);
                        break;
                    case "ExtrudeGeometry":
                    case "ExtrudeBufferGeometry":
                        h = [];
                        l = 0;
                        for(k = g.shapes.length; l < k; l++)n = b[g.shapes[l]], h.push(n);
                        l = g.options.extrudePath;
                        void 0 !== l && (g.options.extrudePath = (new eh[l.type]).fromJSON(l));
                        h = new ta1[g.type](h, g.options);
                        break;
                    case "BufferGeometry":
                    case "InstancedBufferGeometry":
                        h = d.parse(g);
                        break;
                    case "Geometry":
                        "THREE" in window && "LegacyJSONLoader" in THREE ? h = (new THREE.LegacyJSONLoader).parse(g, this.resourcePath).geometry : console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + g.type + '"');
                        continue;
                }
                h.uuid = g.uuid;
                void 0 !== g.name && (h.name = g.name);
                !0 === h.isBufferGeometry && void 0 !== g.userData && (h.userData = g.userData);
                c[g.uuid] = h;
            }
            return c;
        },
        parseMaterials: function(a, b) {
            var c = {}, d = {};
            if (void 0 !== a) {
                var e = new df;
                e.setTextures(b);
                b = 0;
                for(var f = a.length; b < f; b++){
                    var g = a[b];
                    if ("MultiMaterial" === g.type) {
                        for(var h = [], l = 0; l < g.materials.length; l++){
                            var k = g.materials[l];
                            void 0 === c[k.uuid] && (c[k.uuid] = e.parse(k));
                            h.push(c[k.uuid]);
                        }
                        d[g.uuid] = h;
                    } else void 0 === c[g.uuid] && (c[g.uuid] = e.parse(g)), d[g.uuid] = c[g.uuid];
                }
            }
            return d;
        },
        parseAnimations: function(a) {
            for(var b = [], c = 0; c < a.length; c++){
                var d = a[c], e = Ma.parse(d);
                void 0 !== d.uuid && (e.uuid = d.uuid);
                b.push(e);
            }
            return b;
        },
        parseImages: function(a50, b) {
            function c(a) {
                d.manager.itemStart(a);
                return f.load(a, function() {
                    d.manager.itemEnd(a);
                }, void 0, function() {
                    d.manager.itemError(a);
                    d.manager.itemEnd(a);
                });
            }
            var d = this, e = {};
            if (void 0 !== a50 && 0 < a50.length) {
                b = new pg(b);
                var f = new bd(b);
                f.setCrossOrigin(this.crossOrigin);
                b = 0;
                for(var g = a50.length; b < g; b++){
                    var h = a50[b], l = h.url;
                    if (Array.isArray(l)) {
                        e[h.uuid] = [];
                        for(var k = 0, n = l.length; k < n; k++){
                            var u = l[k];
                            u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(u) ? u : d.resourcePath + u;
                            e[h.uuid].push(c(u));
                        }
                    } else u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : d.resourcePath + h.url, e[h.uuid] = c(u);
                }
            }
            return e;
        },
        parseTextures: function(a51, b42) {
            function c(a, b) {
                if ("number" === typeof a) return a;
                console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", a);
                return b[a];
            }
            var d = {};
            if (void 0 !== a51) for(var e = 0, f = a51.length; e < f; e++){
                var g = a51[e];
                void 0 === g.image && console.warn('THREE.ObjectLoader: No "image" specified for', g.uuid);
                void 0 === b42[g.image] && console.warn("THREE.ObjectLoader: Undefined image", g.image);
                var h = Array.isArray(b42[g.image]) ? new ob(b42[g.image]) : new W1(b42[g.image]);
                h.needsUpdate = !0;
                h.uuid = g.uuid;
                void 0 !== g.name && (h.name = g.name);
                void 0 !== g.mapping && (h.mapping = c(g.mapping, Gk));
                void 0 !== g.offset && h.offset.fromArray(g.offset);
                void 0 !== g.repeat && h.repeat.fromArray(g.repeat);
                void 0 !== g.center && h.center.fromArray(g.center);
                void 0 !== g.rotation && (h.rotation = g.rotation);
                void 0 !== g.wrap && (h.wrapS = c(g.wrap[0], Ci), h.wrapT = c(g.wrap[1], Ci));
                void 0 !== g.format && (h.format = g.format);
                void 0 !== g.type && (h.type = g.type);
                void 0 !== g.encoding && (h.encoding = g.encoding);
                void 0 !== g.minFilter && (h.minFilter = c(g.minFilter, Di));
                void 0 !== g.magFilter && (h.magFilter = c(g.magFilter, Di));
                void 0 !== g.anisotropy && (h.anisotropy = g.anisotropy);
                void 0 !== g.flipY && (h.flipY = g.flipY);
                void 0 !== g.premultiplyAlpha && (h.premultiplyAlpha = g.premultiplyAlpha);
                void 0 !== g.unpackAlignment && (h.unpackAlignment = g.unpackAlignment);
                d[g.uuid] = h;
            }
            return d;
        },
        parseObject: function(a52, b43, c) {
            function d32(a) {
                void 0 === b43[a] && console.warn("THREE.ObjectLoader: Undefined geometry", a);
                return b43[a];
            }
            function e24(a) {
                if (void 0 !== a) {
                    if (Array.isArray(a)) {
                        for(var b = [], d = 0, e = a.length; d < e; d++){
                            var f = a[d];
                            void 0 === c[f] && console.warn("THREE.ObjectLoader: Undefined material", f);
                            b.push(c[f]);
                        }
                        return b;
                    }
                    void 0 === c[a] && console.warn("THREE.ObjectLoader: Undefined material", a);
                    return c[a];
                }
            }
            switch(a52.type){
                case "Scene":
                    var f24 = new wd;
                    void 0 !== a52.background && Number.isInteger(a52.background) && (f24.background = new H1(a52.background));
                    void 0 !== a52.fog && ("Fog" === a52.fog.type ? f24.fog = new Je(a52.fog.color, a52.fog.near, a52.fog.far) : "FogExp2" === a52.fog.type && (f24.fog = new Ie(a52.fog.color, a52.fog.density)));
                    break;
                case "PerspectiveCamera":
                    f24 = new na1(a52.fov, a52.aspect, a52.near, a52.far);
                    void 0 !== a52.focus && (f24.focus = a52.focus);
                    void 0 !== a52.zoom && (f24.zoom = a52.zoom);
                    void 0 !== a52.filmGauge && (f24.filmGauge = a52.filmGauge);
                    void 0 !== a52.filmOffset && (f24.filmOffset = a52.filmOffset);
                    void 0 !== a52.view && (f24.view = Object.assign({}, a52.view));
                    break;
                case "OrthographicCamera":
                    f24 = new oe(a52.left, a52.right, a52.top, a52.bottom, a52.near, a52.far);
                    void 0 !== a52.zoom && (f24.zoom = a52.zoom);
                    void 0 !== a52.view && (f24.view = Object.assign({}, a52.view));
                    break;
                case "AmbientLight":
                    f24 = new bf(a52.color, a52.intensity);
                    break;
                case "DirectionalLight":
                    f24 = new af(a52.color, a52.intensity);
                    break;
                case "PointLight":
                    f24 = new Ze(a52.color, a52.intensity, a52.distance, a52.decay);
                    break;
                case "RectAreaLight":
                    f24 = new cf(a52.color, a52.intensity, a52.width, a52.height);
                    break;
                case "SpotLight":
                    f24 = new Ye(a52.color, a52.intensity, a52.distance, a52.angle, a52.penumbra, a52.decay);
                    break;
                case "HemisphereLight":
                    f24 = new We(a52.color, a52.groundColor, a52.intensity);
                    break;
                case "SkinnedMesh":
                    console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                case "Mesh":
                    f24 = d32(a52.geometry);
                    var g = e24(a52.material);
                    f24 = f24.bones && 0 < f24.bones.length ? new Od(f24, g) : new ja1(f24, g);
                    void 0 !== a52.drawMode && f24.setDrawMode(a52.drawMode);
                    break;
                case "LOD":
                    f24 = new Nd;
                    break;
                case "Line":
                    f24 = new xa1(d32(a52.geometry), e24(a52.material), a52.mode);
                    break;
                case "LineLoop":
                    f24 = new Me(d32(a52.geometry), e24(a52.material));
                    break;
                case "LineSegments":
                    f24 = new ca1(d32(a52.geometry), e24(a52.material));
                    break;
                case "PointCloud":
                case "Points":
                    f24 = new Kc(d32(a52.geometry), e24(a52.material));
                    break;
                case "Sprite":
                    f24 = new Ld(e24(a52.material));
                    break;
                case "Group":
                    f24 = new Hc;
                    break;
                default:
                    f24 = new B1;
            }
            f24.uuid = a52.uuid;
            void 0 !== a52.name && (f24.name = a52.name);
            void 0 !== a52.matrix ? (f24.matrix.fromArray(a52.matrix), void 0 !== a52.matrixAutoUpdate && (f24.matrixAutoUpdate = a52.matrixAutoUpdate), f24.matrixAutoUpdate && f24.matrix.decompose(f24.position, f24.quaternion, f24.scale)) : (void 0 !== a52.position && f24.position.fromArray(a52.position), void 0 !== a52.rotation && f24.rotation.fromArray(a52.rotation), void 0 !== a52.quaternion && f24.quaternion.fromArray(a52.quaternion), void 0 !== a52.scale && f24.scale.fromArray(a52.scale));
            void 0 !== a52.castShadow && (f24.castShadow = a52.castShadow);
            void 0 !== a52.receiveShadow && (f24.receiveShadow = a52.receiveShadow);
            a52.shadow && (void 0 !== a52.shadow.bias && (f24.shadow.bias = a52.shadow.bias), void 0 !== a52.shadow.radius && (f24.shadow.radius = a52.shadow.radius), void 0 !== a52.shadow.mapSize && f24.shadow.mapSize.fromArray(a52.shadow.mapSize), void 0 !== a52.shadow.camera && (f24.shadow.camera = this.parseObject(a52.shadow.camera)));
            void 0 !== a52.visible && (f24.visible = a52.visible);
            void 0 !== a52.frustumCulled && (f24.frustumCulled = a52.frustumCulled);
            void 0 !== a52.renderOrder && (f24.renderOrder = a52.renderOrder);
            void 0 !== a52.userData && (f24.userData = a52.userData);
            void 0 !== a52.layers && (f24.layers.mask = a52.layers);
            if (void 0 !== a52.children) {
                g = a52.children;
                for(var h = 0; h < g.length; h++)f24.add(this.parseObject(g[h], b43, c));
            }
            if ("LOD" === a52.type) for(a52 = a52.levels, g = 0; g < a52.length; g++){
                h = a52[g];
                var l = f24.getObjectByProperty("uuid", h.object);
                void 0 !== l && f24.addLevel(l, h.distance);
            }
            return f24;
        }
    });
    var Gk = {
        UVMapping: 300,
        CubeReflectionMapping: 301,
        CubeRefractionMapping: 302,
        EquirectangularReflectionMapping: 303,
        EquirectangularRefractionMapping: 304,
        SphericalReflectionMapping: 305,
        CubeUVReflectionMapping: 306,
        CubeUVRefractionMapping: 307
    }, Ci = {
        RepeatWrapping: 1E3,
        ClampToEdgeWrapping: 1001,
        MirroredRepeatWrapping: 1002
    }, Di = {
        NearestFilter: 1003,
        NearestMipmapNearestFilter: 1004,
        NearestMipmapLinearFilter: 1005,
        LinearFilter: 1006,
        LinearMipmapNearestFilter: 1007,
        LinearMipmapLinearFilter: 1008
    };
    ug.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: ug,
        setOptions: function(a) {
            this.options = a;
            return this;
        },
        load: function(a53, b44, c40, d) {
            void 0 === a53 && (a53 = "");
            void 0 !== this.path && (a53 = this.path + a53);
            a53 = this.manager.resolveURL(a53);
            var e = this, f = uc.get(a53);
            if (void 0 !== f) return e.manager.itemStart(a53), setTimeout(function() {
                b44 && b44(f);
                e.manager.itemEnd(a53);
            }, 0), f;
            fetch(a53).then(function(a) {
                return a.blob();
            }).then(function(a) {
                return void 0 === e.options ? createImageBitmap(a) : createImageBitmap(a, e.options);
            }).then(function(c) {
                uc.add(a53, c);
                b44 && b44(c);
                e.manager.itemEnd(a53);
            }).catch(function(b) {
                d && d(b);
                e.manager.itemError(a53);
                e.manager.itemEnd(a53);
            });
            e.manager.itemStart(a53);
        }
    });
    Object.assign(vg.prototype, {
        moveTo: function(a, b) {
            this.currentPath = new Wa;
            this.subPaths.push(this.currentPath);
            this.currentPath.moveTo(a, b);
        },
        lineTo: function(a, b) {
            this.currentPath.lineTo(a, b);
        },
        quadraticCurveTo: function(a, b, c, d) {
            this.currentPath.quadraticCurveTo(a, b, c, d);
        },
        bezierCurveTo: function(a, b, c, d, e, f) {
            this.currentPath.bezierCurveTo(a, b, c, d, e, f);
        },
        splineThru: function(a) {
            this.currentPath.splineThru(a);
        },
        toShapes: function(a54, b45) {
            function c41(a) {
                for(var b = [], c = 0, d = a.length; c < d; c++){
                    var e = a[c], f = new Jb;
                    f.curves = e.curves;
                    b.push(f);
                }
                return b;
            }
            function d33(a, b) {
                for(var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++){
                    var g = b[e], h = b[f], l = h.x - g.x, k = h.y - g.y;
                    if (Math.abs(k) > Number.EPSILON) {
                        if (0 > k && (g = b[f], l = -l, h = b[e], k = -k), !(a.y < g.y || a.y > h.y)) {
                            if (a.y === g.y) {
                                if (a.x === g.x) return !0;
                            } else {
                                e = k * (a.x - g.x) - l * (a.y - g.y);
                                if (0 === e) return !0;
                                0 > e || (d = !d);
                            }
                        }
                    } else if (a.y === g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x)) return !0;
                }
                return d;
            }
            var e25 = pb.isClockWise, f25 = this.subPaths;
            if (0 === f25.length) return [];
            if (!0 === b45) return c41(f25);
            b45 = [];
            if (1 === f25.length) {
                var g18 = f25[0];
                var h13 = new Jb;
                h13.curves = g18.curves;
                b45.push(h13);
                return b45;
            }
            var l11 = !e25(f25[0].getPoints());
            l11 = a54 ? !l11 : l11;
            h13 = [];
            var k8 = [], n = [], u = 0;
            k8[u] = void 0;
            n[u] = [];
            for(var t = 0, r = f25.length; t < r; t++){
                g18 = f25[t];
                var p = g18.getPoints();
                var v = e25(p);
                (v = a54 ? !v : v) ? (!l11 && k8[u] && u++, k8[u] = {
                    s: new Jb,
                    p: p
                }, k8[u].s.curves = g18.curves, l11 && u++, n[u] = []) : n[u].push({
                    h: g18,
                    p: p[0]
                });
            }
            if (!k8[0]) return c41(f25);
            if (1 < k8.length) {
                t = !1;
                a54 = [];
                e25 = 0;
                for(f25 = k8.length; e25 < f25; e25++)h13[e25] = [];
                e25 = 0;
                for(f25 = k8.length; e25 < f25; e25++)for(g18 = n[e25], v = 0; v < g18.length; v++){
                    l11 = g18[v];
                    u = !0;
                    for(p = 0; p < k8.length; p++)d33(l11.p, k8[p].p) && (e25 !== p && a54.push({
                        froms: e25,
                        tos: p,
                        hole: v
                    }), u ? (u = !1, h13[p].push(l11)) : t = !0);
                    u && h13[e25].push(l11);
                }
                0 < a54.length && (t || (n = h13));
            }
            t = 0;
            for(e25 = k8.length; t < e25; t++)for(h13 = k8[t].s, b45.push(h13), a54 = n[t], f25 = 0, g18 = a54.length; f25 < g18; f25++)h13.holes.push(a54[f25].h);
            return b45;
        }
    });
    Object.assign(wg.prototype, {
        isFont: !0,
        generateShapes: function(a, b) {
            void 0 === b && (b = 100);
            var c = [], d = b;
            b = this.data;
            var e = Array.from ? Array.from(a) : String(a).split("");
            d /= b.resolution;
            var f = (b.boundingBox.yMax - b.boundingBox.yMin + b.underlineThickness) * d;
            a = [];
            for(var g = 0, h = 0, l = 0; l < e.length; l++){
                var k = e[l];
                if ("\n" === k) g = 0, h -= f;
                else {
                    var n = k;
                    k = d;
                    var u = g, t = h, r = b, p = r.glyphs[n] || r.glyphs["?"];
                    if (p) {
                        n = new vg;
                        if (p.o) {
                            r = p._cachedOutline || (p._cachedOutline = p.o.split(" "));
                            for(var v = 0, x = r.length; v < x;)switch(r[v++]){
                                case "m":
                                    var w = r[v++] * k + u;
                                    var y = r[v++] * k + t;
                                    n.moveTo(w, y);
                                    break;
                                case "l":
                                    w = r[v++] * k + u;
                                    y = r[v++] * k + t;
                                    n.lineTo(w, y);
                                    break;
                                case "q":
                                    var A = r[v++] * k + u;
                                    var B = r[v++] * k + t;
                                    var C = r[v++] * k + u;
                                    var D = r[v++] * k + t;
                                    n.quadraticCurveTo(C, D, A, B);
                                    break;
                                case "b":
                                    A = r[v++] * k + u, B = r[v++] * k + t, C = r[v++] * k + u, D = r[v++] * k + t, w = r[v++] * k + u, y = r[v++] * k + t, n.bezierCurveTo(C, D, w, y, A, B);
                            }
                        }
                        k = {
                            offsetX: p.ha * k,
                            path: n
                        };
                    } else console.error('THREE.Font: character "' + n + '" does not exists in font family ' + r.familyName + "."), k = void 0;
                    g += k.offsetX;
                    a.push(k.path);
                }
            }
            b = 0;
            for(e = a.length; b < e; b++)Array.prototype.push.apply(c, a[b].toShapes());
            return c;
        }
    });
    xg.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: xg,
        load: function(a55, b, c42, d) {
            var e = this, f = new Na(this.manager);
            f.setPath(this.path);
            f.load(a55, function(a) {
                try {
                    var c = JSON.parse(a);
                } catch (l) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), c = JSON.parse(a.substring(65, a.length - 2));
                }
                a = e.parse(c);
                b && b(a);
            }, c42, d);
        },
        parse: function(a) {
            return new wg(a);
        }
    });
    var If, Cg = {
        getContext: function() {
            void 0 === If && (If = new (window.AudioContext || window.webkitAudioContext));
            return If;
        },
        setContext: function(a) {
            If = a;
        }
    };
    jf.prototype = Object.assign(Object.create(S1.prototype), {
        constructor: jf,
        load: function(a56, b, c, d) {
            var e = new Na(this.manager);
            e.setResponseType("arraybuffer");
            e.setPath(this.path);
            e.load(a56, function(a57) {
                a57 = a57.slice(0);
                Cg.getContext().decodeAudioData(a57, function(a) {
                    b(a);
                });
            }, c, d);
        }
    });
    Object.assign(kf.prototype, {
        isSphericalHarmonics3: !0,
        set: function(a) {
            for(var b = 0; 9 > b; b++)this.coefficients[b].copy(a[b]);
            return this;
        },
        zero: function() {
            for(var a = 0; 9 > a; a++)this.coefficients[a].set(0, 0, 0);
            return this;
        },
        getAt: function(a, b) {
            var c = a.x, d = a.y;
            a = a.z;
            var e = this.coefficients;
            b.copy(e[0]).multiplyScalar(.282095);
            b.addScale(e[1], .488603 * d);
            b.addScale(e[2], .488603 * a);
            b.addScale(e[3], .488603 * c);
            b.addScale(e[4], 1.092548 * c * d);
            b.addScale(e[5], 1.092548 * d * a);
            b.addScale(e[6], .315392 * (3 * a * a - 1));
            b.addScale(e[7], 1.092548 * c * a);
            b.addScale(e[8], .546274 * (c * c - d * d));
            return b;
        },
        getIrradianceAt: function(a, b) {
            var c = a.x, d = a.y;
            a = a.z;
            var e = this.coefficients;
            b.copy(e[0]).multiplyScalar(.886227);
            b.addScale(e[1], 1.023328 * d);
            b.addScale(e[2], 1.023328 * a);
            b.addScale(e[3], 1.023328 * c);
            b.addScale(e[4], .858086 * c * d);
            b.addScale(e[5], .858086 * d * a);
            b.addScale(e[6], .743125 * a * a - .247708);
            b.addScale(e[7], .858086 * c * a);
            b.addScale(e[8], .429043 * (c * c - d * d));
            return b;
        },
        add: function(a) {
            for(var b = 0; 9 > b; b++)this.coefficients[b].add(a.coefficients[b]);
            return this;
        },
        scale: function(a) {
            for(var b = 0; 9 > b; b++)this.coefficients[b].multiplyScalar(a);
            return this;
        },
        lerp: function(a, b) {
            for(var c = 0; 9 > c; c++)this.coefficients[c].lerp(a.coefficients[c], b);
            return this;
        },
        equals: function(a) {
            for(var b = 0; 9 > b; b++)if (!this.coefficients[b].equals(a.coefficients[b])) return !1;
            return !0;
        },
        copy: function(a) {
            return this.set(a.coefficients);
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            for(var c = this.coefficients, d = 0; 9 > d; d++)c[d].fromArray(a, b + 3 * d);
            return this;
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            for(var c = this.coefficients, d = 0; 9 > d; d++)c[d].toArray(a, b + 3 * d);
            return a;
        }
    });
    Object.assign(kf, {
        getBasisAt: function(a, b) {
            var c = a.x, d = a.y;
            a = a.z;
            b[0] = .282095;
            b[1] = .488603 * d;
            b[2] = .488603 * a;
            b[3] = .488603 * c;
            b[4] = 1.092548 * c * d;
            b[5] = 1.092548 * d * a;
            b[6] = .315392 * (3 * a * a - 1);
            b[7] = 1.092548 * c * a;
            b[8] = .546274 * (c * c - d * d);
        }
    });
    Xa.prototype = Object.assign(Object.create(da1.prototype), {
        constructor: Xa,
        isLightProbe: !0,
        copy: function(a) {
            da1.prototype.copy.call(this, a);
            this.sh.copy(a.sh);
            this.intensity = a.intensity;
            return this;
        },
        toJSON: function(a) {
            return da1.prototype.toJSON.call(this, a);
        }
    });
    yg.prototype = Object.assign(Object.create(Xa.prototype), {
        constructor: yg,
        isHemisphereLightProbe: !0,
        copy: function(a) {
            Xa.prototype.copy.call(this, a);
            return this;
        },
        toJSON: function(a) {
            return Xa.prototype.toJSON.call(this, a);
        }
    });
    zg.prototype = Object.assign(Object.create(Xa.prototype), {
        constructor: zg,
        isAmbientLightProbe: !0,
        copy: function(a) {
            Xa.prototype.copy.call(this, a);
            return this;
        },
        toJSON: function(a) {
            return Xa.prototype.toJSON.call(this, a);
        }
    });
    var Ei = new U1, Fi = new U1;
    Object.assign(ai.prototype, {
        update: function(a) {
            var b = this._cache;
            if (b.focus !== a.focus || b.fov !== a.fov || b.aspect !== a.aspect * this.aspect || b.near !== a.near || b.far !== a.far || b.zoom !== a.zoom || b.eyeSep !== this.eyeSep) {
                b.focus = a.focus;
                b.fov = a.fov;
                b.aspect = a.aspect * this.aspect;
                b.near = a.near;
                b.far = a.far;
                b.zoom = a.zoom;
                b.eyeSep = this.eyeSep;
                var c = a.projectionMatrix.clone(), d = b.eyeSep / 2, e = d * b.near / b.focus, f = b.near * Math.tan(L1.DEG2RAD * b.fov * .5) / b.zoom;
                Fi.elements[12] = -d;
                Ei.elements[12] = d;
                d = -f * b.aspect + e;
                var g = f * b.aspect + e;
                c.elements[0] = 2 * b.near / (g - d);
                c.elements[8] = (g + d) / (g - d);
                this.cameraL.projectionMatrix.copy(c);
                d = -f * b.aspect - e;
                g = f * b.aspect - e;
                c.elements[0] = 2 * b.near / (g - d);
                c.elements[8] = (g + d) / (g - d);
                this.cameraR.projectionMatrix.copy(c);
            }
            this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(Fi);
            this.cameraR.matrixWorld.copy(a.matrixWorld).multiply(Ei);
        }
    });
    Object.assign(Ag.prototype, {
        start: function() {
            this.oldTime = this.startTime = ("undefined" === typeof performance ? Date : performance).now();
            this.elapsedTime = 0;
            this.running = !0;
        },
        stop: function() {
            this.getElapsedTime();
            this.autoStart = this.running = !1;
        },
        getElapsedTime: function() {
            this.getDelta();
            return this.elapsedTime;
        },
        getDelta: function() {
            var a = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                var b = ("undefined" === typeof performance ? Date : performance).now();
                a = (b - this.oldTime) / 1E3;
                this.oldTime = b;
                this.elapsedTime += a;
            }
            return a;
        }
    });
    var vc = new n1, Gi = new ua1, Hk = new n1, wc = new n1;
    Bg.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: Bg,
        getInput: function() {
            return this.gain;
        },
        removeFilter: function() {
            null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null);
            return this;
        },
        getFilter: function() {
            return this.filter;
        },
        setFilter: function(a) {
            null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination);
            this.filter = a;
            this.gain.connect(this.filter);
            this.filter.connect(this.context.destination);
            return this;
        },
        getMasterVolume: function() {
            return this.gain.gain.value;
        },
        setMasterVolume: function(a) {
            this.gain.gain.setTargetAtTime(a, this.context.currentTime, .01);
            return this;
        },
        updateMatrixWorld: function(a) {
            B1.prototype.updateMatrixWorld.call(this, a);
            a = this.context.listener;
            var b = this.up;
            this.timeDelta = this._clock.getDelta();
            this.matrixWorld.decompose(vc, Gi, Hk);
            wc.set(0, 0, -1).applyQuaternion(Gi);
            if (a.positionX) {
                var c = this.context.currentTime + this.timeDelta;
                a.positionX.linearRampToValueAtTime(vc.x, c);
                a.positionY.linearRampToValueAtTime(vc.y, c);
                a.positionZ.linearRampToValueAtTime(vc.z, c);
                a.forwardX.linearRampToValueAtTime(wc.x, c);
                a.forwardY.linearRampToValueAtTime(wc.y, c);
                a.forwardZ.linearRampToValueAtTime(wc.z, c);
                a.upX.linearRampToValueAtTime(b.x, c);
                a.upY.linearRampToValueAtTime(b.y, c);
                a.upZ.linearRampToValueAtTime(b.z, c);
            } else a.setPosition(vc.x, vc.y, vc.z), a.setOrientation(wc.x, wc.y, wc.z, b.x, b.y, b.z);
        }
    });
    dd.prototype = Object.assign(Object.create(B1.prototype), {
        constructor: dd,
        getOutput: function() {
            return this.gain;
        },
        setNodeSource: function(a) {
            this.hasPlaybackControl = !1;
            this.sourceType = "audioNode";
            this.source = a;
            this.connect();
            return this;
        },
        setMediaElementSource: function(a) {
            this.hasPlaybackControl = !1;
            this.sourceType = "mediaNode";
            this.source = this.context.createMediaElementSource(a);
            this.connect();
            return this;
        },
        setMediaStreamSource: function(a) {
            this.hasPlaybackControl = !1;
            this.sourceType = "mediaStreamNode";
            this.source = this.context.createMediaStreamSource(a);
            this.connect();
            return this;
        },
        setBuffer: function(a) {
            this.buffer = a;
            this.sourceType = "buffer";
            this.autoplay && this.play();
            return this;
        },
        play: function() {
            if (!0 === this.isPlaying) console.warn("THREE.Audio: Audio is already playing.");
            else if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
            else {
                var a = this.context.createBufferSource();
                a.buffer = this.buffer;
                a.loop = this.loop;
                a.onended = this.onEnded.bind(this);
                this.startTime = this.context.currentTime;
                a.start(this.startTime, this.offset, this.duration);
                this.isPlaying = !0;
                this.source = a;
                this.setDetune(this.detune);
                this.setPlaybackRate(this.playbackRate);
                return this.connect();
            }
        },
        pause: function() {
            if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
            else return !0 === this.isPlaying && (this.source.stop(), this.source.onended = null, this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this;
        },
        stop: function() {
            if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
            else return this.source.stop(), this.source.onended = null, this.offset = 0, this.isPlaying = !1, this;
        },
        connect: function() {
            if (0 < this.filters.length) {
                this.source.connect(this.filters[0]);
                for(var a = 1, b = this.filters.length; a < b; a++)this.filters[a - 1].connect(this.filters[a]);
                this.filters[this.filters.length - 1].connect(this.getOutput());
            } else this.source.connect(this.getOutput());
            return this;
        },
        disconnect: function() {
            if (0 < this.filters.length) {
                this.source.disconnect(this.filters[0]);
                for(var a = 1, b = this.filters.length; a < b; a++)this.filters[a - 1].disconnect(this.filters[a]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput());
            } else this.source.disconnect(this.getOutput());
            return this;
        },
        getFilters: function() {
            return this.filters;
        },
        setFilters: function(a) {
            a || (a = []);
            !0 === this.isPlaying ? (this.disconnect(), this.filters = a, this.connect()) : this.filters = a;
            return this;
        },
        setDetune: function(a) {
            this.detune = a;
            if (void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
        },
        getDetune: function() {
            return this.detune;
        },
        getFilter: function() {
            return this.getFilters()[0];
        },
        setFilter: function(a) {
            return this.setFilters(a ? [
                a
            ] : []);
        },
        setPlaybackRate: function(a) {
            if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
            else return this.playbackRate = a, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
        },
        getPlaybackRate: function() {
            return this.playbackRate;
        },
        onEnded: function() {
            this.isPlaying = !1;
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
        },
        setLoop: function(a) {
            if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
            else return this.loop = a, !0 === this.isPlaying && (this.source.loop = this.loop), this;
        },
        getVolume: function() {
            return this.gain.gain.value;
        },
        setVolume: function(a) {
            this.gain.gain.setTargetAtTime(a, this.context.currentTime, .01);
            return this;
        }
    });
    var xc = new n1, Hi = new ua1, Ik = new n1, yc = new n1;
    Dg.prototype = Object.assign(Object.create(dd.prototype), {
        constructor: Dg,
        getOutput: function() {
            return this.panner;
        },
        getRefDistance: function() {
            return this.panner.refDistance;
        },
        setRefDistance: function(a) {
            this.panner.refDistance = a;
            return this;
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor;
        },
        setRolloffFactor: function(a) {
            this.panner.rolloffFactor = a;
            return this;
        },
        getDistanceModel: function() {
            return this.panner.distanceModel;
        },
        setDistanceModel: function(a) {
            this.panner.distanceModel = a;
            return this;
        },
        getMaxDistance: function() {
            return this.panner.maxDistance;
        },
        setMaxDistance: function(a) {
            this.panner.maxDistance = a;
            return this;
        },
        setDirectionalCone: function(a, b, c) {
            this.panner.coneInnerAngle = a;
            this.panner.coneOuterAngle = b;
            this.panner.coneOuterGain = c;
            return this;
        },
        updateMatrixWorld: function(a) {
            B1.prototype.updateMatrixWorld.call(this, a);
            if (!0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
                if (this.matrixWorld.decompose(xc, Hi, Ik), yc.set(0, 0, 1).applyQuaternion(Hi), a = this.panner, a.positionX) {
                    var b = this.context.currentTime + this.listener.timeDelta;
                    a.positionX.linearRampToValueAtTime(xc.x, b);
                    a.positionY.linearRampToValueAtTime(xc.y, b);
                    a.positionZ.linearRampToValueAtTime(xc.z, b);
                    a.orientationX.linearRampToValueAtTime(yc.x, b);
                    a.orientationY.linearRampToValueAtTime(yc.y, b);
                    a.orientationZ.linearRampToValueAtTime(yc.z, b);
                } else a.setPosition(xc.x, xc.y, xc.z), a.setOrientation(yc.x, yc.y, yc.z);
            }
        }
    });
    Object.assign(Eg.prototype, {
        getFrequencyData: function() {
            this.analyser.getByteFrequencyData(this.data);
            return this.data;
        },
        getAverageFrequency: function() {
            for(var a = 0, b = this.getFrequencyData(), c = 0; c < b.length; c++)a += b[c];
            return a / b.length;
        }
    });
    Object.assign(Fg.prototype, {
        accumulate: function(a, b) {
            var c = this.buffer, d = this.valueSize;
            a = a * d + d;
            var e = this.cumulativeWeight;
            if (0 === e) {
                for(e = 0; e !== d; ++e)c[a + e] = c[e];
                e = b;
            } else e += b, this._mixBufferRegion(c, a, 0, b / e, d);
            this.cumulativeWeight = e;
        },
        apply: function(a) {
            var b = this.valueSize, c = this.buffer;
            a = a * b + b;
            var d = this.cumulativeWeight, e = this.binding;
            this.cumulativeWeight = 0;
            1 > d && this._mixBufferRegion(c, a, 3 * b, 1 - d, b);
            d = b;
            for(var f = b + b; d !== f; ++d)if (c[d] !== c[d + b]) {
                e.setValue(c, a);
                break;
            }
        },
        saveOriginalState: function() {
            var a = this.buffer, b = this.valueSize, c = 3 * b;
            this.binding.getValue(a, c);
            for(var d = b; d !== c; ++d)a[d] = a[c + d % b];
            this.cumulativeWeight = 0;
        },
        restoreOriginalState: function() {
            this.binding.setValue(this.buffer, 3 * this.valueSize);
        },
        _select: function(a, b, c, d, e) {
            if (.5 <= d) for(d = 0; d !== e; ++d)a[b + d] = a[c + d];
        },
        _slerp: function(a, b, c, d) {
            ua1.slerpFlat(a, b, a, b, a, c, d);
        },
        _lerp: function(a, b, c, d, e) {
            for(var f = 1 - d, g = 0; g !== e; ++g){
                var h = b + g;
                a[h] = a[h] * f + a[c + g] * d;
            }
        }
    });
    var Jk = /[\[\]\.:\/]/g, Kk = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", Lk = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"), Mk = /(WCOD+)?/.source.replace("WCOD", Kk), Nk = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"), Ok = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"), Pk = new RegExp("^" + Lk + Mk + Nk + Ok + "$"), Qk = [
        "material",
        "materials",
        "bones"
    ];
    Object.assign(bi.prototype, {
        getValue: function(a, b) {
            this.bind();
            var c = this._bindings[this._targetGroup.nCachedObjects_];
            void 0 !== c && c.getValue(a, b);
        },
        setValue: function(a, b) {
            for(var c = this._bindings, d = this._targetGroup.nCachedObjects_, e = c.length; d !== e; ++d)c[d].setValue(a, b);
        },
        bind: function() {
            for(var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)a[b].bind();
        },
        unbind: function() {
            for(var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)a[b].unbind();
        }
    });
    Object.assign(Aa1, {
        Composite: bi,
        create: function(a, b, c) {
            return a && a.isAnimationObjectGroup ? new Aa1.Composite(a, b, c) : new Aa1(a, b, c);
        },
        sanitizeNodeName: function(a) {
            return a.replace(/\s/g, "_").replace(Jk, "");
        },
        parseTrackName: function(a) {
            var b = Pk.exec(a);
            if (!b) throw Error("PropertyBinding: Cannot parse trackName: " + a);
            b = {
                nodeName: b[2],
                objectName: b[3],
                objectIndex: b[4],
                propertyName: b[5],
                propertyIndex: b[6]
            };
            var c = b.nodeName && b.nodeName.lastIndexOf(".");
            if (void 0 !== c && -1 !== c) {
                var d = b.nodeName.substring(c + 1);
                -1 !== Qk.indexOf(d) && (b.nodeName = b.nodeName.substring(0, c), b.objectName = d);
            }
            if (null === b.propertyName || 0 === b.propertyName.length) throw Error("PropertyBinding: can not parse propertyName from trackName: " + a);
            return b;
        },
        findNode: function(a58, b) {
            if (!b || "" === b || "root" === b || "." === b || -1 === b || b === a58.name || b === a58.uuid) return a58;
            if (a58.skeleton) {
                var c = a58.skeleton.getBoneByName(b);
                if (void 0 !== c) return c;
            }
            if (a58.children) {
                var d = function(a) {
                    for(var c = 0; c < a.length; c++){
                        var e = a[c];
                        if (e.name === b || e.uuid === b || (e = d(e.children))) return e;
                    }
                    return null;
                };
                if (a58 = d(a58.children)) return a58;
            }
            return null;
        }
    });
    Object.assign(Aa1.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [
            function(a, b) {
                a[b] = this.node[this.propertyName];
            },
            function(a, b) {
                for(var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)a[b++] = c[d];
            },
            function(a, b) {
                a[b] = this.resolvedProperty[this.propertyIndex];
            },
            function(a, b) {
                this.resolvedProperty.toArray(a, b);
            }
        ],
        SetterByBindingTypeAndVersioning: [
            [
                function(a, b) {
                    this.targetObject[this.propertyName] = a[b];
                },
                function(a, b) {
                    this.targetObject[this.propertyName] = a[b];
                    this.targetObject.needsUpdate = !0;
                },
                function(a, b) {
                    this.targetObject[this.propertyName] = a[b];
                    this.targetObject.matrixWorldNeedsUpdate = !0;
                }
            ],
            [
                function(a, b) {
                    for(var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)c[d] = a[b++];
                },
                function(a, b) {
                    for(var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)c[d] = a[b++];
                    this.targetObject.needsUpdate = !0;
                },
                function(a, b) {
                    for(var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)c[d] = a[b++];
                    this.targetObject.matrixWorldNeedsUpdate = !0;
                }
            ],
            [
                function(a, b) {
                    this.resolvedProperty[this.propertyIndex] = a[b];
                },
                function(a, b) {
                    this.resolvedProperty[this.propertyIndex] = a[b];
                    this.targetObject.needsUpdate = !0;
                },
                function(a, b) {
                    this.resolvedProperty[this.propertyIndex] = a[b];
                    this.targetObject.matrixWorldNeedsUpdate = !0;
                }
            ],
            [
                function(a, b) {
                    this.resolvedProperty.fromArray(a, b);
                },
                function(a, b) {
                    this.resolvedProperty.fromArray(a, b);
                    this.targetObject.needsUpdate = !0;
                },
                function(a, b) {
                    this.resolvedProperty.fromArray(a, b);
                    this.targetObject.matrixWorldNeedsUpdate = !0;
                }
            ]
        ],
        getValue: function(a, b) {
            this.bind();
            this.getValue(a, b);
        },
        setValue: function(a, b) {
            this.bind();
            this.setValue(a, b);
        },
        bind: function() {
            var a = this.node, b = this.parsedPath, c = b.objectName, d = b.propertyName, e = b.propertyIndex;
            a || (this.node = a = Aa1.findNode(this.rootNode, b.nodeName) || this.rootNode);
            this.getValue = this._getValue_unavailable;
            this.setValue = this._setValue_unavailable;
            if (a) {
                if (c) {
                    var f = b.objectIndex;
                    switch(c){
                        case "materials":
                            if (!a.material) {
                                console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                                return;
                            }
                            if (!a.material.materials) {
                                console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                                return;
                            }
                            a = a.material.materials;
                            break;
                        case "bones":
                            if (!a.skeleton) {
                                console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                                return;
                            }
                            a = a.skeleton.bones;
                            for(c = 0; c < a.length; c++)if (a[c].name === f) {
                                f = c;
                                break;
                            }
                            break;
                        default:
                            if (void 0 === a[c]) {
                                console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                                return;
                            }
                            a = a[c];
                    }
                    if (void 0 !== f) {
                        if (void 0 === a[f]) {
                            console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, a);
                            return;
                        }
                        a = a[f];
                    }
                }
                f = a[d];
                if (void 0 === f) console.error("THREE.PropertyBinding: Trying to update property for track: " + b.nodeName + "." + d + " but it wasn't found.", a);
                else {
                    b = this.Versioning.None;
                    this.targetObject = a;
                    void 0 !== a.needsUpdate ? b = this.Versioning.NeedsUpdate : void 0 !== a.matrixWorldNeedsUpdate && (b = this.Versioning.MatrixWorldNeedsUpdate);
                    c = this.BindingType.Direct;
                    if (void 0 !== e) {
                        if ("morphTargetInfluences" === d) {
                            if (!a.geometry) {
                                console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                                return;
                            }
                            if (a.geometry.isBufferGeometry) {
                                if (!a.geometry.morphAttributes) {
                                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                    return;
                                }
                                for(c = 0; c < this.node.geometry.morphAttributes.position.length; c++)if (a.geometry.morphAttributes.position[c].name === e) {
                                    e = c;
                                    break;
                                }
                            } else {
                                if (!a.geometry.morphTargets) {
                                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                    return;
                                }
                                for(c = 0; c < this.node.geometry.morphTargets.length; c++)if (a.geometry.morphTargets[c].name === e) {
                                    e = c;
                                    break;
                                }
                            }
                        }
                        c = this.BindingType.ArrayElement;
                        this.resolvedProperty = f;
                        this.propertyIndex = e;
                    } else void 0 !== f.fromArray && void 0 !== f.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = f) : Array.isArray(f) ? (c = this.BindingType.EntireArray, this.resolvedProperty = f) : this.propertyName = d;
                    this.getValue = this.GetterByBindingType[c];
                    this.setValue = this.SetterByBindingTypeAndVersioning[c][b];
                }
            } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
        },
        unbind: function() {
            this.node = null;
            this.getValue = this._getValue_unbound;
            this.setValue = this._setValue_unbound;
        }
    });
    Object.assign(Aa1.prototype, {
        _getValue_unbound: Aa1.prototype.getValue,
        _setValue_unbound: Aa1.prototype.setValue
    });
    Object.assign(ci.prototype, {
        isAnimationObjectGroup: !0,
        add: function() {
            for(var a = this._objects, b = a.length, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._paths, f = this._parsedPaths, g = this._bindings, h = g.length, l = void 0, k = 0, n = arguments.length; k !== n; ++k){
                var u = arguments[k], t = u.uuid, r = d[t];
                if (void 0 === r) {
                    r = b++;
                    d[t] = r;
                    a.push(u);
                    t = 0;
                    for(var p = h; t !== p; ++t)g[t].push(new Aa1(u, e[t], f[t]));
                } else if (r < c) {
                    l = a[r];
                    var v = --c;
                    p = a[v];
                    d[p.uuid] = r;
                    a[r] = p;
                    d[t] = v;
                    a[v] = u;
                    t = 0;
                    for(p = h; t !== p; ++t){
                        var w = g[t], z = w[r];
                        w[r] = w[v];
                        void 0 === z && (z = new Aa1(u, e[t], f[t]));
                        w[v] = z;
                    }
                } else a[r] !== l && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
            }
            this.nCachedObjects_ = c;
        },
        remove: function() {
            for(var a = this._objects, b = this.nCachedObjects_, c = this._indicesByUUID, d = this._bindings, e = d.length, f = 0, g = arguments.length; f !== g; ++f){
                var h = arguments[f], l = h.uuid, k = c[l];
                if (void 0 !== k && k >= b) {
                    var n = b++, u = a[n];
                    c[u.uuid] = k;
                    a[k] = u;
                    c[l] = n;
                    a[n] = h;
                    h = 0;
                    for(l = e; h !== l; ++h){
                        u = d[h];
                        var t = u[k];
                        u[k] = u[n];
                        u[n] = t;
                    }
                }
            }
            this.nCachedObjects_ = b;
        },
        uncache: function() {
            for(var a = this._objects, b = a.length, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._bindings, f = e.length, g = 0, h = arguments.length; g !== h; ++g){
                var l = arguments[g].uuid, k = d[l];
                if (void 0 !== k) {
                    if (delete d[l], k < c) {
                        l = --c;
                        var n = a[l], u = --b, t = a[u];
                        d[n.uuid] = k;
                        a[k] = n;
                        d[t.uuid] = l;
                        a[l] = t;
                        a.pop();
                        n = 0;
                        for(t = f; n !== t; ++n){
                            var r = e[n], p = r[u];
                            r[k] = r[l];
                            r[l] = p;
                            r.pop();
                        }
                    } else for(u = --b, t = a[u], d[t.uuid] = k, a[k] = t, a.pop(), n = 0, t = f; n !== t; ++n)r = e[n], r[k] = r[u], r.pop();
                }
            }
            this.nCachedObjects_ = c;
        },
        subscribe_: function(a, b) {
            var c = this._bindingsIndicesByPath, d = c[a], e = this._bindings;
            if (void 0 !== d) return e[d];
            var f = this._paths, g = this._parsedPaths, h = this._objects, l = this.nCachedObjects_, k = Array(h.length);
            d = e.length;
            c[a] = d;
            f.push(a);
            g.push(b);
            e.push(k);
            c = l;
            for(d = h.length; c !== d; ++c)k[c] = new Aa1(h[c], a, b);
            return k;
        },
        unsubscribe_: function(a) {
            var b = this._bindingsIndicesByPath, c = b[a];
            if (void 0 !== c) {
                var d = this._paths, e = this._parsedPaths, f = this._bindings, g = f.length - 1, h = f[g];
                b[a[g]] = c;
                f[c] = h;
                f.pop();
                e[c] = e[g];
                e.pop();
                d[c] = d[g];
                d.pop();
            }
        }
    });
    Object.assign(di.prototype, {
        play: function() {
            this._mixer._activateAction(this);
            return this;
        },
        stop: function() {
            this._mixer._deactivateAction(this);
            return this.reset();
        },
        reset: function() {
            this.paused = !1;
            this.enabled = !0;
            this.time = 0;
            this._loopCount = -1;
            this._startTime = null;
            return this.stopFading().stopWarping();
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this);
        },
        startAt: function(a) {
            this._startTime = a;
            return this;
        },
        setLoop: function(a, b) {
            this.loop = a;
            this.repetitions = b;
            return this;
        },
        setEffectiveWeight: function(a) {
            this.weight = a;
            this._effectiveWeight = this.enabled ? a : 0;
            return this.stopFading();
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight;
        },
        fadeIn: function(a) {
            return this._scheduleFading(a, 0, 1);
        },
        fadeOut: function(a) {
            return this._scheduleFading(a, 1, 0);
        },
        crossFadeFrom: function(a, b, c) {
            a.fadeOut(b);
            this.fadeIn(b);
            if (c) {
                c = this._clip.duration;
                var d = a._clip.duration, e = c / d;
                a.warp(1, d / c, b);
                this.warp(e, 1, b);
            }
            return this;
        },
        crossFadeTo: function(a, b, c) {
            return a.crossFadeFrom(this, b, c);
        },
        stopFading: function() {
            var a = this._weightInterpolant;
            null !== a && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(a));
            return this;
        },
        setEffectiveTimeScale: function(a) {
            this.timeScale = a;
            this._effectiveTimeScale = this.paused ? 0 : a;
            return this.stopWarping();
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale;
        },
        setDuration: function(a) {
            this.timeScale = this._clip.duration / a;
            return this.stopWarping();
        },
        syncWith: function(a) {
            this.time = a.time;
            this.timeScale = a.timeScale;
            return this.stopWarping();
        },
        halt: function(a) {
            return this.warp(this._effectiveTimeScale, 0, a);
        },
        warp: function(a, b, c) {
            var d = this._mixer, e = d.time, f = this._timeScaleInterpolant, g = this.timeScale;
            null === f && (this._timeScaleInterpolant = f = d._lendControlInterpolant());
            d = f.parameterPositions;
            f = f.sampleValues;
            d[0] = e;
            d[1] = e + c;
            f[0] = a / g;
            f[1] = b / g;
            return this;
        },
        stopWarping: function() {
            var a = this._timeScaleInterpolant;
            null !== a && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(a));
            return this;
        },
        getMixer: function() {
            return this._mixer;
        },
        getClip: function() {
            return this._clip;
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root;
        },
        _update: function(a, b, c, d) {
            if (this.enabled) {
                var e = this._startTime;
                if (null !== e) {
                    b = (a - e) * c;
                    if (0 > b || 0 === c) return;
                    this._startTime = null;
                    b *= c;
                }
                b *= this._updateTimeScale(a);
                c = this._updateTime(b);
                a = this._updateWeight(a);
                if (0 < a) {
                    b = this._interpolants;
                    e = this._propertyBindings;
                    for(var f = 0, g = b.length; f !== g; ++f)b[f].evaluate(c), e[f].accumulate(d, a);
                }
            } else this._updateWeight(a);
        },
        _updateWeight: function(a) {
            var b = 0;
            if (this.enabled) {
                b = this.weight;
                var c = this._weightInterpolant;
                if (null !== c) {
                    var d = c.evaluate(a)[0];
                    b *= d;
                    a > c.parameterPositions[1] && (this.stopFading(), 0 === d && (this.enabled = !1));
                }
            }
            return this._effectiveWeight = b;
        },
        _updateTimeScale: function(a) {
            var b = 0;
            if (!this.paused) {
                b = this.timeScale;
                var c = this._timeScaleInterpolant;
                if (null !== c) {
                    var d = c.evaluate(a)[0];
                    b *= d;
                    a > c.parameterPositions[1] && (this.stopWarping(), 0 === b ? this.paused = !0 : this.timeScale = b);
                }
            }
            return this._effectiveTimeScale = b;
        },
        _updateTime: function(a) {
            var b = this.time + a, c = this._clip.duration, d = this.loop, e = this._loopCount, f = 2202 === d;
            if (0 === a) return -1 === e ? b : f && 1 === (e & 1) ? c - b : b;
            if (2200 === d) a: {
                if (-1 === e && (this._loopCount = 0, this._setEndings(!0, !0, !1)), b >= c) b = c;
                else if (0 > b) b = 0;
                else {
                    this.time = b;
                    break a;
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1;
                this.time = b;
                this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: 0 > a ? -1 : 1
                });
            }
            else {
                -1 === e && (0 <= a ? (e = 0, this._setEndings(!0, 0 === this.repetitions, f)) : this._setEndings(0 === this.repetitions, !0, f));
                if (b >= c || 0 > b) {
                    d = Math.floor(b / c);
                    b -= c * d;
                    e += Math.abs(d);
                    var g = this.repetitions - e;
                    0 >= g ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = b = 0 < a ? c : 0, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: 0 < a ? 1 : -1
                    })) : (1 === g ? (a = 0 > a, this._setEndings(a, !a, f)) : this._setEndings(!1, !1, f), this._loopCount = e, this.time = b, this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: d
                    }));
                } else this.time = b;
                if (f && 1 === (e & 1)) return c - b;
            }
            return b;
        },
        _setEndings: function(a, b, c) {
            var d = this._interpolantSettings;
            c ? (d.endingStart = 2401, d.endingEnd = 2401) : (d.endingStart = a ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, d.endingEnd = b ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402);
        },
        _scheduleFading: function(a, b, c) {
            var d = this._mixer, e = d.time, f = this._weightInterpolant;
            null === f && (this._weightInterpolant = f = d._lendControlInterpolant());
            d = f.parameterPositions;
            f = f.sampleValues;
            d[0] = e;
            f[0] = b;
            d[1] = e + a;
            f[1] = c;
            return this;
        }
    });
    Gg.prototype = Object.assign(Object.create(Ba1.prototype), {
        constructor: Gg,
        _bindAction: function(a, b) {
            var c = a._localRoot || this._root, d = a._clip.tracks, e = d.length, f = a._propertyBindings;
            a = a._interpolants;
            var g = c.uuid, h = this._bindingsByRootAndName, k = h[g];
            void 0 === k && (k = {}, h[g] = k);
            for(h = 0; h !== e; ++h){
                var m = d[h], n = m.name, u = k[n];
                if (void 0 === u) {
                    u = f[h];
                    if (void 0 !== u) {
                        null === u._cacheIndex && (++u.referenceCount, this._addInactiveBinding(u, g, n));
                        continue;
                    }
                    u = new Fg(Aa1.create(c, n, b && b._propertyBindings[h].binding.parsedPath), m.ValueTypeName, m.getValueSize());
                    ++u.referenceCount;
                    this._addInactiveBinding(u, g, n);
                }
                f[h] = u;
                a[h].resultBuffer = u.buffer;
            }
        },
        _activateAction: function(a) {
            if (!this._isActiveAction(a)) {
                if (null === a._cacheIndex) {
                    var b = (a._localRoot || this._root).uuid, c = a._clip.uuid, d = this._actionsByClip[c];
                    this._bindAction(a, d && d.knownActions[0]);
                    this._addInactiveAction(a, c, b);
                }
                b = a._propertyBindings;
                c = 0;
                for(d = b.length; c !== d; ++c){
                    var e = b[c];
                    0 === e.useCount++ && (this._lendBinding(e), e.saveOriginalState());
                }
                this._lendAction(a);
            }
        },
        _deactivateAction: function(a) {
            if (this._isActiveAction(a)) {
                for(var b = a._propertyBindings, c = 0, d = b.length; c !== d; ++c){
                    var e = b[c];
                    0 === --e.useCount && (e.restoreOriginalState(), this._takeBackBinding(e));
                }
                this._takeBackAction(a);
            }
        },
        _initMemoryManager: function() {
            this._actions = [];
            this._nActiveActions = 0;
            this._actionsByClip = {};
            this._bindings = [];
            this._nActiveBindings = 0;
            this._bindingsByRootAndName = {};
            this._controlInterpolants = [];
            this._nActiveControlInterpolants = 0;
            var a = this;
            this.stats = {
                actions: {
                    get total () {
                        return a._actions.length;
                    },
                    get inUse () {
                        return a._nActiveActions;
                    }
                },
                bindings: {
                    get total () {
                        return a._bindings.length;
                    },
                    get inUse () {
                        return a._nActiveBindings;
                    }
                },
                controlInterpolants: {
                    get total () {
                        return a._controlInterpolants.length;
                    },
                    get inUse () {
                        return a._nActiveControlInterpolants;
                    }
                }
            };
        },
        _isActiveAction: function(a) {
            a = a._cacheIndex;
            return null !== a && a < this._nActiveActions;
        },
        _addInactiveAction: function(a, b, c) {
            var d = this._actions, e = this._actionsByClip, f = e[b];
            void 0 === f ? (f = {
                knownActions: [
                    a
                ],
                actionByRoot: {}
            }, a._byClipCacheIndex = 0, e[b] = f) : (b = f.knownActions, a._byClipCacheIndex = b.length, b.push(a));
            a._cacheIndex = d.length;
            d.push(a);
            f.actionByRoot[c] = a;
        },
        _removeInactiveAction: function(a) {
            var b = this._actions, c = b[b.length - 1], d = a._cacheIndex;
            c._cacheIndex = d;
            b[d] = c;
            b.pop();
            a._cacheIndex = null;
            b = a._clip.uuid;
            c = this._actionsByClip;
            d = c[b];
            var e = d.knownActions, f = e[e.length - 1], g = a._byClipCacheIndex;
            f._byClipCacheIndex = g;
            e[g] = f;
            e.pop();
            a._byClipCacheIndex = null;
            delete d.actionByRoot[(a._localRoot || this._root).uuid];
            0 === e.length && delete c[b];
            this._removeInactiveBindingsForAction(a);
        },
        _removeInactiveBindingsForAction: function(a) {
            a = a._propertyBindings;
            for(var b = 0, c = a.length; b !== c; ++b){
                var d = a[b];
                0 === --d.referenceCount && this._removeInactiveBinding(d);
            }
        },
        _lendAction: function(a) {
            var b = this._actions, c = a._cacheIndex, d = this._nActiveActions++, e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e;
        },
        _takeBackAction: function(a) {
            var b = this._actions, c = a._cacheIndex, d = --this._nActiveActions, e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e;
        },
        _addInactiveBinding: function(a, b, c) {
            var d = this._bindingsByRootAndName, e = d[b], f = this._bindings;
            void 0 === e && (e = {}, d[b] = e);
            e[c] = a;
            a._cacheIndex = f.length;
            f.push(a);
        },
        _removeInactiveBinding: function(a) {
            var b = this._bindings, c = a.binding, d = c.rootNode.uuid;
            c = c.path;
            var e = this._bindingsByRootAndName, f = e[d], g = b[b.length - 1];
            a = a._cacheIndex;
            g._cacheIndex = a;
            b[a] = g;
            b.pop();
            delete f[c];
            0 === Object.keys(f).length && delete e[d];
        },
        _lendBinding: function(a) {
            var b = this._bindings, c = a._cacheIndex, d = this._nActiveBindings++, e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e;
        },
        _takeBackBinding: function(a) {
            var b = this._bindings, c = a._cacheIndex, d = --this._nActiveBindings, e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e;
        },
        _lendControlInterpolant: function() {
            var a = this._controlInterpolants, b = this._nActiveControlInterpolants++, c = a[b];
            void 0 === c && (c = new ke(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), c.__cacheIndex = b, a[b] = c);
            return c;
        },
        _takeBackControlInterpolant: function(a) {
            var b = this._controlInterpolants, c = a.__cacheIndex, d = --this._nActiveControlInterpolants, e = b[d];
            a.__cacheIndex = d;
            b[d] = a;
            e.__cacheIndex = c;
            b[c] = e;
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(a, b) {
            var c = b || this._root, d = c.uuid;
            c = "string" === typeof a ? Ma.findByName(c, a) : a;
            a = null !== c ? c.uuid : a;
            var e = this._actionsByClip[a], f = null;
            if (void 0 !== e) {
                f = e.actionByRoot[d];
                if (void 0 !== f) return f;
                f = e.knownActions[0];
                null === c && (c = f._clip);
            }
            if (null === c) return null;
            b = new di(this, c, b);
            this._bindAction(b, f);
            this._addInactiveAction(b, a, d);
            return b;
        },
        existingAction: function(a, b) {
            var c = b || this._root;
            b = c.uuid;
            c = "string" === typeof a ? Ma.findByName(c, a) : a;
            a = this._actionsByClip[c ? c.uuid : a];
            return void 0 !== a ? a.actionByRoot[b] || null : null;
        },
        stopAllAction: function() {
            for(var a = this._actions, b = this._nActiveActions, c = this._bindings, d = this._nActiveBindings, e = this._nActiveBindings = this._nActiveActions = 0; e !== b; ++e)a[e].reset();
            for(e = 0; e !== d; ++e)c[e].useCount = 0;
            return this;
        },
        update: function(a) {
            a *= this.timeScale;
            for(var b = this._actions, c = this._nActiveActions, d = this.time += a, e = Math.sign(a), f = this._accuIndex ^= 1, g = 0; g !== c; ++g)b[g]._update(d, a, e, f);
            a = this._bindings;
            b = this._nActiveBindings;
            for(g = 0; g !== b; ++g)a[g].apply(f);
            return this;
        },
        setTime: function(a) {
            for(var b = this.time = 0; b < this._actions.length; b++)this._actions[b].time = 0;
            return this.update(a);
        },
        getRoot: function() {
            return this._root;
        },
        uncacheClip: function(a) {
            var b = this._actions;
            a = a.uuid;
            var c = this._actionsByClip, d = c[a];
            if (void 0 !== d) {
                d = d.knownActions;
                for(var e = 0, f = d.length; e !== f; ++e){
                    var g = d[e];
                    this._deactivateAction(g);
                    var h = g._cacheIndex, k = b[b.length - 1];
                    g._cacheIndex = null;
                    g._byClipCacheIndex = null;
                    k._cacheIndex = h;
                    b[h] = k;
                    b.pop();
                    this._removeInactiveBindingsForAction(g);
                }
                delete c[a];
            }
        },
        uncacheRoot: function(a) {
            a = a.uuid;
            var b = this._actionsByClip;
            for(d in b){
                var c = b[d].actionByRoot[a];
                void 0 !== c && (this._deactivateAction(c), this._removeInactiveAction(c));
            }
            var d = this._bindingsByRootAndName[a];
            if (void 0 !== d) for(var e in d)a = d[e], a.restoreOriginalState(), this._removeInactiveBinding(a);
        },
        uncacheAction: function(a, b) {
            a = this.existingAction(a, b);
            null !== a && (this._deactivateAction(a), this._removeInactiveAction(a));
        }
    });
    lf.prototype.clone = function() {
        return new lf(void 0 === this.value.clone ? this.value : this.value.clone());
    };
    Hg.prototype = Object.assign(Object.create(Gb.prototype), {
        constructor: Hg,
        isInstancedInterleavedBuffer: !0,
        copy: function(a) {
            Gb.prototype.copy.call(this, a);
            this.meshPerAttribute = a.meshPerAttribute;
            return this;
        }
    });
    Object.assign(ei.prototype, {
        linePrecision: 1,
        set: function(a, b) {
            this.ray.set(a, b);
        },
        setFromCamera: function(a, b) {
            b && b.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(b.matrixWorld), this.ray.direction.set(a.x, a.y, .5).unproject(b).sub(this.ray.origin).normalize(), this.camera = b) : b && b.isOrthographicCamera ? (this.ray.origin.set(a.x, a.y, (b.near + b.far) / (b.near - b.far)).unproject(b), this.ray.direction.set(0, 0, -1).transformDirection(b.matrixWorld), this.camera = b) : console.error("THREE.Raycaster: Unsupported camera type.");
        },
        intersectObject: function(a, b, c) {
            c = c || [];
            Ig(a, this, c, b);
            c.sort(fi);
            return c;
        },
        intersectObjects: function(a, b, c) {
            c = c || [];
            if (!1 === Array.isArray(a)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), c;
            for(var d = 0, e = a.length; d < e; d++)Ig(a[d], this, c, b);
            c.sort(fi);
            return c;
        }
    });
    Object.assign(gi.prototype, {
        set: function(a, b, c) {
            this.radius = a;
            this.phi = b;
            this.theta = c;
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.radius = a.radius;
            this.phi = a.phi;
            this.theta = a.theta;
            return this;
        },
        makeSafe: function() {
            this.phi = Math.max(1E-6, Math.min(Math.PI - 1E-6, this.phi));
            return this;
        },
        setFromVector3: function(a) {
            return this.setFromCartesianCoords(a.x, a.y, a.z);
        },
        setFromCartesianCoords: function(a, b, c) {
            this.radius = Math.sqrt(a * a + b * b + c * c);
            0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(a, c), this.phi = Math.acos(L1.clamp(b / this.radius, -1, 1)));
            return this;
        }
    });
    Object.assign(hi.prototype, {
        set: function(a, b, c) {
            this.radius = a;
            this.theta = b;
            this.y = c;
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.radius = a.radius;
            this.theta = a.theta;
            this.y = a.y;
            return this;
        },
        setFromVector3: function(a) {
            return this.setFromCartesianCoords(a.x, a.y, a.z);
        },
        setFromCartesianCoords: function(a, b, c) {
            this.radius = Math.sqrt(a * a + c * c);
            this.theta = Math.atan2(a, c);
            this.y = b;
            return this;
        }
    });
    var Ii = new w1;
    Object.assign(Jg.prototype, {
        set: function(a, b) {
            this.min.copy(a);
            this.max.copy(b);
            return this;
        },
        setFromPoints: function(a) {
            this.makeEmpty();
            for(var b = 0, c = a.length; b < c; b++)this.expandByPoint(a[b]);
            return this;
        },
        setFromCenterAndSize: function(a, b) {
            b = Ii.copy(b).multiplyScalar(.5);
            this.min.copy(a).sub(b);
            this.max.copy(a).add(b);
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.min.copy(a.min);
            this.max.copy(a.max);
            return this;
        },
        makeEmpty: function() {
            this.min.x = this.min.y = Infinity;
            this.max.x = this.max.y = -Infinity;
            return this;
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y;
        },
        getCenter: function(a) {
            void 0 === a && (console.warn("THREE.Box2: .getCenter() target is now required"), a = new w1);
            return this.isEmpty() ? a.set(0, 0) : a.addVectors(this.min, this.max).multiplyScalar(.5);
        },
        getSize: function(a) {
            void 0 === a && (console.warn("THREE.Box2: .getSize() target is now required"), a = new w1);
            return this.isEmpty() ? a.set(0, 0) : a.subVectors(this.max, this.min);
        },
        expandByPoint: function(a) {
            this.min.min(a);
            this.max.max(a);
            return this;
        },
        expandByVector: function(a) {
            this.min.sub(a);
            this.max.add(a);
            return this;
        },
        expandByScalar: function(a) {
            this.min.addScalar(-a);
            this.max.addScalar(a);
            return this;
        },
        containsPoint: function(a) {
            return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0;
        },
        containsBox: function(a) {
            return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y;
        },
        getParameter: function(a, b) {
            void 0 === b && (console.warn("THREE.Box2: .getParameter() target is now required"), b = new w1);
            return b.set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y));
        },
        intersectsBox: function(a) {
            return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0;
        },
        clampPoint: function(a, b) {
            void 0 === b && (console.warn("THREE.Box2: .clampPoint() target is now required"), b = new w1);
            return b.copy(a).clamp(this.min, this.max);
        },
        distanceToPoint: function(a) {
            return Ii.copy(a).clamp(this.min, this.max).sub(a).length();
        },
        intersect: function(a) {
            this.min.max(a.min);
            this.max.min(a.max);
            return this;
        },
        union: function(a) {
            this.min.min(a.min);
            this.max.max(a.max);
            return this;
        },
        translate: function(a) {
            this.min.add(a);
            this.max.add(a);
            return this;
        },
        equals: function(a) {
            return a.min.equals(this.min) && a.max.equals(this.max);
        }
    });
    var Ji = new n1, Jf = new n1;
    Object.assign(Kg.prototype, {
        set: function(a, b) {
            this.start.copy(a);
            this.end.copy(b);
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(a) {
            this.start.copy(a.start);
            this.end.copy(a.end);
            return this;
        },
        getCenter: function(a) {
            void 0 === a && (console.warn("THREE.Line3: .getCenter() target is now required"), a = new n1);
            return a.addVectors(this.start, this.end).multiplyScalar(.5);
        },
        delta: function(a) {
            void 0 === a && (console.warn("THREE.Line3: .delta() target is now required"), a = new n1);
            return a.subVectors(this.end, this.start);
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end);
        },
        distance: function() {
            return this.start.distanceTo(this.end);
        },
        at: function(a, b) {
            void 0 === b && (console.warn("THREE.Line3: .at() target is now required"), b = new n1);
            return this.delta(b).multiplyScalar(a).add(this.start);
        },
        closestPointToPointParameter: function(a, b) {
            Ji.subVectors(a, this.start);
            Jf.subVectors(this.end, this.start);
            a = Jf.dot(Jf);
            a = Jf.dot(Ji) / a;
            b && (a = L1.clamp(a, 0, 1));
            return a;
        },
        closestPointToPoint: function(a, b, c) {
            a = this.closestPointToPointParameter(a, b);
            void 0 === c && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), c = new n1);
            return this.delta(c).multiplyScalar(a).add(this.start);
        },
        applyMatrix4: function(a) {
            this.start.applyMatrix4(a);
            this.end.applyMatrix4(a);
            return this;
        },
        equals: function(a) {
            return a.start.equals(this.start) && a.end.equals(this.end);
        }
    });
    pe.prototype = Object.create(B1.prototype);
    pe.prototype.constructor = pe;
    pe.prototype.isImmediateRenderObject = !0;
    var mb = new n1, zb = new n1, hh = new Y1, Rk = [
        "a",
        "b",
        "c"
    ];
    qe.prototype = Object.create(ca1.prototype);
    qe.prototype.constructor = qe;
    qe.prototype.update = function() {
        this.object.updateMatrixWorld(!0);
        hh.getNormalMatrix(this.object.matrixWorld);
        var a = this.object.matrixWorld, b = this.geometry.attributes.position, c = this.object.geometry;
        if (c && c.isGeometry) for(var d = c.vertices, e = c.faces, f = c = 0, g = e.length; f < g; f++)for(var h = e[f], k = 0, m = h.vertexNormals.length; k < m; k++){
            var n = h.vertexNormals[k];
            mb.copy(d[h[Rk[k]]]).applyMatrix4(a);
            zb.copy(n).applyMatrix3(hh).normalize().multiplyScalar(this.size).add(mb);
            b.setXYZ(c, mb.x, mb.y, mb.z);
            c += 1;
            b.setXYZ(c, zb.x, zb.y, zb.z);
            c += 1;
        }
        else if (c && c.isBufferGeometry) for(d = c.attributes.position, e = c.attributes.normal, k = c = 0, m = d.count; k < m; k++)mb.set(d.getX(k), d.getY(k), d.getZ(k)).applyMatrix4(a), zb.set(e.getX(k), e.getY(k), e.getZ(k)), zb.applyMatrix3(hh).normalize().multiplyScalar(this.size).add(mb), b.setXYZ(c, mb.x, mb.y, mb.z), c += 1, b.setXYZ(c, zb.x, zb.y, zb.z), c += 1;
        b.needsUpdate = !0;
    };
    var Ki = new n1;
    ed.prototype = Object.create(B1.prototype);
    ed.prototype.constructor = ed;
    ed.prototype.dispose = function() {
        this.cone.geometry.dispose();
        this.cone.material.dispose();
    };
    ed.prototype.update = function() {
        this.light.updateMatrixWorld();
        var a = this.light.distance ? this.light.distance : 1E3, b = a * Math.tan(this.light.angle);
        this.cone.scale.set(b, b, a);
        Ki.setFromMatrixPosition(this.light.target.matrixWorld);
        this.cone.lookAt(Ki);
        void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
    };
    var Pb = new n1, Kf = new U1, ih = new U1;
    fd.prototype = Object.create(ca1.prototype);
    fd.prototype.constructor = fd;
    fd.prototype.updateMatrixWorld = function(a) {
        var b = this.bones, c = this.geometry, d = c.getAttribute("position");
        ih.getInverse(this.root.matrixWorld);
        for(var e = 0, f = 0; e < b.length; e++){
            var g = b[e];
            g.parent && g.parent.isBone && (Kf.multiplyMatrices(ih, g.matrixWorld), Pb.setFromMatrixPosition(Kf), d.setXYZ(f, Pb.x, Pb.y, Pb.z), Kf.multiplyMatrices(ih, g.parent.matrixWorld), Pb.setFromMatrixPosition(Kf), d.setXYZ(f + 1, Pb.x, Pb.y, Pb.z), f += 2);
        }
        c.getAttribute("position").needsUpdate = !0;
        B1.prototype.updateMatrixWorld.call(this, a);
    };
    gd.prototype = Object.create(ja1.prototype);
    gd.prototype.constructor = gd;
    gd.prototype.dispose = function() {
        this.geometry.dispose();
        this.material.dispose();
    };
    gd.prototype.update = function() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
    };
    hd.prototype = Object.create(xa1.prototype);
    hd.prototype.constructor = hd;
    hd.prototype.update = function() {
        this.scale.set(.5 * this.light.width, .5 * this.light.height, 1);
        if (void 0 !== this.color) this.material.color.set(this.color), this.children[0].material.color.set(this.color);
        else {
            this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
            var a = this.material.color, b = Math.max(a.r, a.g, a.b);
            1 < b && a.multiplyScalar(1 / b);
            this.children[0].material.color.copy(this.material.color);
        }
    };
    hd.prototype.dispose = function() {
        this.geometry.dispose();
        this.material.dispose();
        this.children[0].geometry.dispose();
        this.children[0].material.dispose();
    };
    var Sk = new n1, Li = new H1, Mi = new H1;
    id.prototype = Object.create(B1.prototype);
    id.prototype.constructor = id;
    id.prototype.dispose = function() {
        this.children[0].geometry.dispose();
        this.children[0].material.dispose();
    };
    id.prototype.update = function() {
        var a = this.children[0];
        if (void 0 !== this.color) this.material.color.set(this.color);
        else {
            var b = a.geometry.getAttribute("color");
            Li.copy(this.light.color);
            Mi.copy(this.light.groundColor);
            for(var c = 0, d = b.count; c < d; c++){
                var e = c < d / 2 ? Li : Mi;
                b.setXYZ(c, e.r, e.g, e.b);
            }
            b.needsUpdate = !0;
        }
        a.lookAt(Sk.setFromMatrixPosition(this.light.matrixWorld).negate());
    };
    jd.prototype = Object.create(ja1.prototype);
    jd.prototype.constructor = jd;
    jd.prototype.dispose = function() {
        this.geometry.dispose();
        this.material.dispose();
    };
    jd.prototype.onBeforeRender = function() {
        this.position.copy(this.lightProbe.position);
        this.scale.set(1, 1, 1).multiplyScalar(this.size);
        this.material.uniforms.intensity.value = this.lightProbe.intensity;
    };
    mf.prototype = Object.assign(Object.create(ca1.prototype), {
        constructor: mf,
        copy: function(a) {
            ca1.prototype.copy.call(this, a);
            this.geometry.copy(a.geometry);
            this.material.copy(a.material);
            return this;
        },
        clone: function() {
            return (new this.constructor).copy(this);
        }
    });
    nf.prototype = Object.create(ca1.prototype);
    nf.prototype.constructor = nf;
    kd.prototype = Object.create(xa1.prototype);
    kd.prototype.constructor = kd;
    kd.prototype.update = function() {
        function a59(a, b, d, e) {
            d = (b - a) / d;
            r.setXYZ(k, 0, 0, 0);
            m++;
            for(n = a; n < b; n += d)u = k + m, r.setXYZ(u, Math.sin(n) * c, 0, Math.cos(n) * c), r.setXYZ(u + 1, Math.sin(Math.min(n + d, b)) * c, 0, Math.cos(Math.min(n + d, b)) * c), r.setXYZ(u + 2, 0, 0, 0), m += 3;
            t.addGroup(k, m, e);
            k += m;
            m = 0;
        }
        var b46 = this.audio, c = this.range, d34 = this.divisionsInnerAngle, e26 = this.divisionsOuterAngle, f = L1.degToRad(b46.panner.coneInnerAngle);
        b46 = L1.degToRad(b46.panner.coneOuterAngle);
        var g = f / 2, h = b46 / 2, k = 0, m = 0, n, u, t = this.geometry, r = t.attributes.position;
        t.clearGroups();
        a59(-h, -g, e26, 0);
        a59(-g, g, d34, 1);
        a59(g, h, e26, 0);
        r.needsUpdate = !0;
        f === b46 && (this.material[0].visible = !1);
    };
    kd.prototype.dispose = function() {
        this.geometry.dispose();
        this.material[0].dispose();
        this.material[1].dispose();
    };
    var De = new n1, Lf = new n1, Ni = new Y1;
    re.prototype = Object.create(ca1.prototype);
    re.prototype.constructor = re;
    re.prototype.update = function() {
        this.object.updateMatrixWorld(!0);
        Ni.getNormalMatrix(this.object.matrixWorld);
        var a = this.object.matrixWorld, b = this.geometry.attributes.position, c = this.object.geometry, d = c.vertices;
        c = c.faces;
        for(var e = 0, f = 0, g = c.length; f < g; f++){
            var h = c[f], k = h.normal;
            De.copy(d[h.a]).add(d[h.b]).add(d[h.c]).divideScalar(3).applyMatrix4(a);
            Lf.copy(k).applyMatrix3(Ni).normalize().multiplyScalar(this.size).add(De);
            b.setXYZ(e, De.x, De.y, De.z);
            e += 1;
            b.setXYZ(e, Lf.x, Lf.y, Lf.z);
            e += 1;
        }
        b.needsUpdate = !0;
    };
    var Oi = new n1, Mf = new n1, Pi = new n1;
    ld.prototype = Object.create(B1.prototype);
    ld.prototype.constructor = ld;
    ld.prototype.dispose = function() {
        this.lightPlane.geometry.dispose();
        this.lightPlane.material.dispose();
        this.targetLine.geometry.dispose();
        this.targetLine.material.dispose();
    };
    ld.prototype.update = function() {
        Oi.setFromMatrixPosition(this.light.matrixWorld);
        Mf.setFromMatrixPosition(this.light.target.matrixWorld);
        Pi.subVectors(Mf, Oi);
        this.lightPlane.lookAt(Mf);
        void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color));
        this.targetLine.lookAt(Mf);
        this.targetLine.scale.z = Pi.length();
    };
    var of = new n1, ia1 = new bb;
    se.prototype = Object.create(ca1.prototype);
    se.prototype.constructor = se;
    se.prototype.update = function() {
        var a = this.geometry, b = this.pointMap;
        ia1.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
        qa1("c", b, a, ia1, 0, 0, -1);
        qa1("t", b, a, ia1, 0, 0, 1);
        qa1("n1", b, a, ia1, -1, -1, -1);
        qa1("n2", b, a, ia1, 1, -1, -1);
        qa1("n3", b, a, ia1, -1, 1, -1);
        qa1("n4", b, a, ia1, 1, 1, -1);
        qa1("f1", b, a, ia1, -1, -1, 1);
        qa1("f2", b, a, ia1, 1, -1, 1);
        qa1("f3", b, a, ia1, -1, 1, 1);
        qa1("f4", b, a, ia1, 1, 1, 1);
        qa1("u1", b, a, ia1, .7, 1.1, -1);
        qa1("u2", b, a, ia1, -0.7, 1.1, -1);
        qa1("u3", b, a, ia1, 0, 2, -1);
        qa1("cf1", b, a, ia1, -1, 0, 1);
        qa1("cf2", b, a, ia1, 1, 0, 1);
        qa1("cf3", b, a, ia1, 0, -1, 1);
        qa1("cf4", b, a, ia1, 0, 1, 1);
        qa1("cn1", b, a, ia1, -1, 0, -1);
        qa1("cn2", b, a, ia1, 1, 0, -1);
        qa1("cn3", b, a, ia1, 0, -1, -1);
        qa1("cn4", b, a, ia1, 0, 1, -1);
        a.getAttribute("position").needsUpdate = !0;
    };
    var Nf = new ab;
    sb.prototype = Object.create(ca1.prototype);
    sb.prototype.constructor = sb;
    sb.prototype.update = function(a) {
        void 0 !== a && console.warn("THREE.BoxHelper: .update() has no longer arguments.");
        void 0 !== this.object && Nf.setFromObject(this.object);
        if (!Nf.isEmpty()) {
            a = Nf.min;
            var b = Nf.max, c = this.geometry.attributes.position, d = c.array;
            d[0] = b.x;
            d[1] = b.y;
            d[2] = b.z;
            d[3] = a.x;
            d[4] = b.y;
            d[5] = b.z;
            d[6] = a.x;
            d[7] = a.y;
            d[8] = b.z;
            d[9] = b.x;
            d[10] = a.y;
            d[11] = b.z;
            d[12] = b.x;
            d[13] = b.y;
            d[14] = a.z;
            d[15] = a.x;
            d[16] = b.y;
            d[17] = a.z;
            d[18] = a.x;
            d[19] = a.y;
            d[20] = a.z;
            d[21] = b.x;
            d[22] = a.y;
            d[23] = a.z;
            c.needsUpdate = !0;
            this.geometry.computeBoundingSphere();
        }
    };
    sb.prototype.setFromObject = function(a) {
        this.object = a;
        this.update();
        return this;
    };
    sb.prototype.copy = function(a) {
        ca1.prototype.copy.call(this, a);
        this.object = a.object;
        return this;
    };
    sb.prototype.clone = function() {
        return (new this.constructor).copy(this);
    };
    te.prototype = Object.create(ca1.prototype);
    te.prototype.constructor = te;
    te.prototype.updateMatrixWorld = function(a) {
        var b = this.box;
        b.isEmpty() || (b.getCenter(this.position), b.getSize(this.scale), this.scale.multiplyScalar(.5), B1.prototype.updateMatrixWorld.call(this, a));
    };
    ue.prototype = Object.create(xa1.prototype);
    ue.prototype.constructor = ue;
    ue.prototype.updateMatrixWorld = function(a) {
        var b = -this.plane.constant;
        1E-8 > Math.abs(b) && (b = 1E-8);
        this.scale.set(.5 * this.size, .5 * this.size, b);
        this.children[0].material.side = 0 > b ? 1 : 0;
        this.lookAt(this.plane.normal);
        B1.prototype.updateMatrixWorld.call(this, a);
    };
    var Qi = new n1, pf, Lg;
    tb.prototype = Object.create(B1.prototype);
    tb.prototype.constructor = tb;
    tb.prototype.setDirection = function(a) {
        .99999 < a.y ? this.quaternion.set(0, 0, 0, 1) : -0.99999 > a.y ? this.quaternion.set(1, 0, 0, 0) : (Qi.set(a.z, 0, -a.x).normalize(), this.quaternion.setFromAxisAngle(Qi, Math.acos(a.y)));
    };
    tb.prototype.setLength = function(a, b, c) {
        void 0 === b && (b = .2 * a);
        void 0 === c && (c = .2 * b);
        this.line.scale.set(1, Math.max(1E-4, a - b), 1);
        this.line.updateMatrix();
        this.cone.scale.set(c, b, c);
        this.cone.position.y = a;
        this.cone.updateMatrix();
    };
    tb.prototype.setColor = function(a) {
        this.line.material.color.set(a);
        this.cone.material.color.set(a);
    };
    tb.prototype.copy = function(a) {
        B1.prototype.copy.call(this, a, !1);
        this.line.copy(a.line);
        this.cone.copy(a.cone);
        return this;
    };
    tb.prototype.clone = function() {
        return (new this.constructor).copy(this);
    };
    ve.prototype = Object.create(ca1.prototype);
    ve.prototype.constructor = ve;
    D1.create = function(a, b) {
        console.log("THREE.Curve.create() has been deprecated");
        a.prototype = Object.create(D1.prototype);
        a.prototype.constructor = a;
        a.prototype.getPoint = b;
        return a;
    };
    Object.assign(rb.prototype, {
        createPointsGeometry: function(a) {
            console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            a = this.getPoints(a);
            return this.createGeometry(a);
        },
        createSpacedPointsGeometry: function(a) {
            console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            a = this.getSpacedPoints(a);
            return this.createGeometry(a);
        },
        createGeometry: function(a) {
            console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            for(var b = new F1, c = 0, d = a.length; c < d; c++){
                var e = a[c];
                b.vertices.push(new n1(e.x, e.y, e.z || 0));
            }
            return b;
        }
    });
    Object.assign(Wa.prototype, {
        fromPoints: function(a) {
            console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");
            this.setFromPoints(a);
        }
    });
    ji.prototype = Object.create(ya1.prototype);
    ki.prototype = Object.create(ya1.prototype);
    Mg.prototype = Object.create(ya1.prototype);
    Object.assign(Mg.prototype, {
        initFromArray: function() {
            console.error("THREE.Spline: .initFromArray() has been removed.");
        },
        getControlPointsArray: function() {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.");
        },
        reparametrizeByArcLength: function() {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");
        }
    });
    mf.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
    };
    fd.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
    };
    Object.assign(S1.prototype, {
        extractUrlBase: function(a) {
            console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
            return fh.extractUrlBase(a);
        }
    });
    S1.Handlers = {
        add: function() {
            console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
        },
        get: function() {
            console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
        }
    };
    Object.assign(hf.prototype, {
        setTexturePath: function(a) {
            console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");
            return this.setResourcePath(a);
        }
    });
    Object.assign(Jg.prototype, {
        center: function(a) {
            console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
            return this.getCenter(a);
        },
        empty: function() {
            console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
            return this.isEmpty();
        },
        isIntersectionBox: function(a) {
            console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a);
        },
        size: function(a) {
            console.warn("THREE.Box2: .size() has been renamed to .getSize().");
            return this.getSize(a);
        }
    });
    Object.assign(ab.prototype, {
        center: function(a) {
            console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
            return this.getCenter(a);
        },
        empty: function() {
            console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
            return this.isEmpty();
        },
        isIntersectionBox: function(a) {
            console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a);
        },
        isIntersectionSphere: function(a) {
            console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
            return this.intersectsSphere(a);
        },
        size: function(a) {
            console.warn("THREE.Box3: .size() has been renamed to .getSize().");
            return this.getSize(a);
        }
    });
    Kg.prototype.center = function(a) {
        console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
        return this.getCenter(a);
    };
    Object.assign(L1, {
        random16: function() {
            console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");
            return Math.random();
        },
        nearestPowerOfTwo: function(a) {
            console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");
            return L1.floorPowerOfTwo(a);
        },
        nextPowerOfTwo: function(a) {
            console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");
            return L1.ceilPowerOfTwo(a);
        }
    });
    Object.assign(Y1.prototype, {
        flattenToArrayOffset: function(a, b) {
            console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
            return this.toArray(a, b);
        },
        multiplyVector3: function(a) {
            console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
            return a.applyMatrix3(this);
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
        },
        applyToBuffer: function(a) {
            console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
            return this.applyToBufferAttribute(a);
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
        }
    });
    Object.assign(U1.prototype, {
        extractPosition: function(a) {
            console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
            return this.copyPosition(a);
        },
        flattenToArrayOffset: function(a, b) {
            console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
            return this.toArray(a, b);
        },
        getPosition: function() {
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
            return (new n1).setFromMatrixColumn(this, 3);
        },
        setRotationFromQuaternion: function(a) {
            console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
            return this.makeRotationFromQuaternion(a);
        },
        multiplyToArray: function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
        },
        multiplyVector3: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this);
        },
        multiplyVector4: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this);
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
        },
        rotateAxis: function(a) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
            a.transformDirection(this);
        },
        crossVector: function(a) {
            console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this);
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.");
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.");
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.");
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.");
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
        },
        applyToBuffer: function(a) {
            console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
            return this.applyToBufferAttribute(a);
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
        },
        makeFrustum: function(a, b, c, d, e, f) {
            console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
            return this.makePerspective(a, b, d, c, e, f);
        }
    });
    cb.prototype.isIntersectionLine = function(a) {
        console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
        return this.intersectsLine(a);
    };
    ua1.prototype.multiplyVector3 = function(a) {
        console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
        return a.applyQuaternion(this);
    };
    Object.assign(Sb.prototype, {
        isIntersectionBox: function(a) {
            console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a);
        },
        isIntersectionPlane: function(a) {
            console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
            return this.intersectsPlane(a);
        },
        isIntersectionSphere: function(a) {
            console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
            return this.intersectsSphere(a);
        }
    });
    Object.assign(R1.prototype, {
        area: function() {
            console.warn("THREE.Triangle: .area() has been renamed to .getArea().");
            return this.getArea();
        },
        barycoordFromPoint: function(a, b) {
            console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
            return this.getBarycoord(a, b);
        },
        midpoint: function(a) {
            console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");
            return this.getMidpoint(a);
        },
        normal: function(a) {
            console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
            return this.getNormal(a);
        },
        plane: function(a) {
            console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");
            return this.getPlane(a);
        }
    });
    Object.assign(R1, {
        barycoordFromPoint: function(a, b, c, d, e) {
            console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
            return R1.getBarycoord(a, b, c, d, e);
        },
        normal: function(a, b, c, d) {
            console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
            return R1.getNormal(a, b, c, d);
        }
    });
    Object.assign(Jb.prototype, {
        extractAllPoints: function(a) {
            console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");
            return this.extractPoints(a);
        },
        extrude: function(a) {
            console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
            return new fc(this, a);
        },
        makeGeometry: function(a) {
            console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");
            return new gc(this, a);
        }
    });
    Object.assign(w1.prototype, {
        fromAttribute: function(a, b, c) {
            console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a, b, c);
        },
        distanceToManhattan: function(a) {
            console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
            return this.manhattanDistanceTo(a);
        },
        lengthManhattan: function() {
            console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");
            return this.manhattanLength();
        }
    });
    Object.assign(n1.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
        },
        getPositionFromMatrix: function(a) {
            console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
            return this.setFromMatrixPosition(a);
        },
        getScaleFromMatrix: function(a) {
            console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
            return this.setFromMatrixScale(a);
        },
        getColumnFromMatrix: function(a, b) {
            console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
            return this.setFromMatrixColumn(b, a);
        },
        applyProjection: function(a) {
            console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");
            return this.applyMatrix4(a);
        },
        fromAttribute: function(a, b, c) {
            console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a, b, c);
        },
        distanceToManhattan: function(a) {
            console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
            return this.manhattanDistanceTo(a);
        },
        lengthManhattan: function() {
            console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
            return this.manhattanLength();
        }
    });
    Object.assign(aa1.prototype, {
        fromAttribute: function(a, b, c) {
            console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a, b, c);
        },
        lengthManhattan: function() {
            console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");
            return this.manhattanLength();
        }
    });
    Object.assign(F1.prototype, {
        computeTangents: function() {
            console.error("THREE.Geometry: .computeTangents() has been removed.");
        },
        computeLineDistances: function() {
            console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");
        }
    });
    Object.assign(B1.prototype, {
        getChildByName: function(a) {
            console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
            return this.getObjectByName(a);
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
        },
        translate: function(a, b) {
            console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
            return this.translateOnAxis(b, a);
        },
        getWorldRotation: function() {
            console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
        }
    });
    Object.defineProperties(B1.prototype, {
        eulerOrder: {
            get: function() {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
                return this.rotation.order;
            },
            set: function(a) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
                this.rotation.order = a;
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
            }
        }
    });
    Object.defineProperties(Nd.prototype, {
        objects: {
            get: function() {
                console.warn("THREE.LOD: .objects has been renamed to .levels.");
                return this.levels;
            }
        }
    });
    Object.defineProperty(Le.prototype, "useVertexTexture", {
        get: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.");
        },
        set: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.");
        }
    });
    Od.prototype.initBones = function() {
        console.error("THREE.SkinnedMesh: initBones() has been removed.");
    };
    Object.defineProperty(D1.prototype, "__arcLengthDivisions", {
        get: function() {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
            return this.arcLengthDivisions;
        },
        set: function(a) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
            this.arcLengthDivisions = a;
        }
    });
    na1.prototype.setLens = function(a, b) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
        void 0 !== b && (this.filmGauge = b);
        this.setFocalLength(a);
    };
    Object.defineProperties(da1.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.");
            }
        },
        shadowCameraFov: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
                this.shadow.camera.fov = a;
            }
        },
        shadowCameraLeft: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
                this.shadow.camera.left = a;
            }
        },
        shadowCameraRight: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
                this.shadow.camera.right = a;
            }
        },
        shadowCameraTop: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
                this.shadow.camera.top = a;
            }
        },
        shadowCameraBottom: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
                this.shadow.camera.bottom = a;
            }
        },
        shadowCameraNear: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
                this.shadow.camera.near = a;
            }
        },
        shadowCameraFar: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
                this.shadow.camera.far = a;
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
            }
        },
        shadowBias: {
            set: function(a) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
                this.shadow.bias = a;
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.");
            }
        },
        shadowMapWidth: {
            set: function(a) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
                this.shadow.mapSize.width = a;
            }
        },
        shadowMapHeight: {
            set: function(a) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
                this.shadow.mapSize.height = a;
            }
        }
    });
    Object.defineProperties(O1.prototype, {
        length: {
            get: function() {
                console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
                return this.array.length;
            }
        }
    });
    Object.assign(O1.prototype, {
        copyIndicesArray: function() {
            console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
        },
        setArray: function(a) {
            console.warn("THREE.BufferAttribute: .setArray has been deprecated. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
            this.count = void 0 !== a ? a.length / this.itemSize : 0;
            this.array = a;
            return this;
        }
    });
    Object.assign(E1.prototype, {
        addIndex: function(a) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
            this.setIndex(a);
        },
        addDrawCall: function(a, b, c) {
            void 0 !== c && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
            this.addGroup(a, b);
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
            this.clearGroups();
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
        }
    });
    Object.defineProperties(E1.prototype, {
        drawcalls: {
            get: function() {
                console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
                return this.groups;
            }
        },
        offsets: {
            get: function() {
                console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
                return this.groups;
            }
        }
    });
    Object.assign(Gb.prototype, {
        setArray: function(a) {
            console.warn("THREE.InterleavedBuffer: .setArray has been deprecated. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
            this.count = void 0 !== a ? a.length / this.stride : 0;
            this.array = a;
            return this;
        }
    });
    Object.assign(eb.prototype, {
        getArrays: function() {
            console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");
        },
        addShapeList: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");
        },
        addShape: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");
        }
    });
    Object.defineProperties(lf.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");
            }
        },
        onUpdate: {
            value: function() {
                console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
                return this;
            }
        }
    });
    Object.defineProperties(M1.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.");
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.");
            }
        },
        overdraw: {
            get: function() {
                console.warn("THREE.Material: .overdraw has been removed.");
            },
            set: function() {
                console.warn("THREE.Material: .overdraw has been removed.");
            }
        },
        wrapRGB: {
            get: function() {
                console.warn("THREE.Material: .wrapRGB has been removed.");
                return new H1;
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
            },
            set: function(a) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
                this.flatShading = 1 === a;
            }
        },
        stencilMask: {
            get: function() {
                console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
                return this.stencilFuncMask;
            },
            set: function(a) {
                console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
                this.stencilFuncMask = a;
            }
        }
    });
    Object.defineProperties(Ra.prototype, {
        metal: {
            get: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
                return !1;
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");
            }
        }
    });
    Object.defineProperties(ma1.prototype, {
        derivatives: {
            get: function() {
                console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
                return this.extensions.derivatives;
            },
            set: function(a) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
                this.extensions.derivatives = a;
            }
        }
    });
    Object.assign(hg.prototype, {
        clearTarget: function(a, b, c, d) {
            console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");
            this.setRenderTarget(a);
            this.clear(b, c, d);
        },
        animate: function(a) {
            console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");
            this.setAnimationLoop(a);
        },
        getCurrentRenderTarget: function() {
            console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
            return this.getRenderTarget();
        },
        getMaxAnisotropy: function() {
            console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");
            return this.capabilities.getMaxAnisotropy();
        },
        getPrecision: function() {
            console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");
            return this.capabilities.precision;
        },
        resetGLState: function() {
            console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");
            return this.state.reset();
        },
        supportsFloatTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
            return this.extensions.get("OES_texture_float");
        },
        supportsHalfFloatTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
            return this.extensions.get("OES_texture_half_float");
        },
        supportsStandardDerivatives: function() {
            console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
            return this.extensions.get("OES_standard_derivatives");
        },
        supportsCompressedTextureS3TC: function() {
            console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
            return this.extensions.get("WEBGL_compressed_texture_s3tc");
        },
        supportsCompressedTexturePVRTC: function() {
            console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
            return this.extensions.get("WEBGL_compressed_texture_pvrtc");
        },
        supportsBlendMinMax: function() {
            console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
            return this.extensions.get("EXT_blend_minmax");
        },
        supportsVertexTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
            return this.capabilities.vertexTextures;
        },
        supportsInstancedArrays: function() {
            console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
            return this.extensions.get("ANGLE_instanced_arrays");
        },
        enableScissorTest: function(a) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
            this.setScissorTest(a);
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
        },
        setFaceCulling: function() {
            console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
        },
        allocTextureUnit: function() {
            console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
        },
        setTexture: function() {
            console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
        },
        setTexture2D: function() {
            console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
        },
        setTextureCube: function() {
            console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
        },
        getActiveMipMapLevel: function() {
            console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");
            return this.getActiveMipmapLevel();
        }
    });
    Object.defineProperties(hg.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
                this.shadowMap.enabled = a;
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
                this.shadowMap.type = a;
            }
        },
        shadowMapCullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
            }
        },
        context: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");
                return this.getContext();
            }
        }
    });
    Object.defineProperties(Jh.prototype, {
        cullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
            }
        },
        renderReverseSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
            }
        },
        renderSingleSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
            }
        }
    });
    Object.defineProperties(Ab.prototype, {
        activeCubeFace: {
            set: function() {
                console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().");
            }
        },
        activeMipMapLevel: {
            set: function() {
                console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().");
            }
        }
    });
    Object.defineProperties(la1.prototype, {
        wrapS: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
                return this.texture.wrapS;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
                this.texture.wrapS = a;
            }
        },
        wrapT: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
                return this.texture.wrapT;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
                this.texture.wrapT = a;
            }
        },
        magFilter: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
                return this.texture.magFilter;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
                this.texture.magFilter = a;
            }
        },
        minFilter: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
                return this.texture.minFilter;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
                this.texture.minFilter = a;
            }
        },
        anisotropy: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
                return this.texture.anisotropy;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
                this.texture.anisotropy = a;
            }
        },
        offset: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
                return this.texture.offset;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
                this.texture.offset = a;
            }
        },
        repeat: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
                return this.texture.repeat;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
                this.texture.repeat = a;
            }
        },
        format: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
                return this.texture.format;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
                this.texture.format = a;
            }
        },
        type: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
                return this.texture.type;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
                this.texture.type = a;
            }
        },
        generateMipmaps: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
                return this.texture.generateMipmaps;
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
                this.texture.generateMipmaps = a;
            }
        }
    });
    Object.defineProperties(gg.prototype, {
        standing: {
            set: function() {
                console.warn("THREE.WebVRManager: .standing has been removed.");
            }
        },
        userHeight: {
            set: function() {
                console.warn("THREE.WebVRManager: .userHeight has been removed.");
            }
        }
    });
    dd.prototype.load = function(a60) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var b = this;
        (new jf).load(a60, function(a) {
            b.setBuffer(a);
        });
        return this;
    };
    Eg.prototype.getData = function() {
        console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
        return this.getFrequencyData();
    };
    Dc.prototype.updateCubeMap = function(a, b) {
        console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");
        return this.update(a, b);
    };
    Kb.crossOrigin = void 0;
    Kb.loadTexture = function(a, b, c, d) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var e = new Ve;
        e.setCrossOrigin(this.crossOrigin);
        a = e.load(a, c, void 0, d);
        b && (a.mapping = b);
        return a;
    };
    Kb.loadTextureCube = function(a, b, c, d) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var e = new Ue;
        e.setCrossOrigin(this.crossOrigin);
        a = e.load(a, c, void 0, d);
        b && (a.mapping = b);
        return a;
    };
    Kb.loadCompressedTexture = function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
    };
    Kb.loadCompressedTextureCube = function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
    };
    "undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: "109"
        }
    }));
    k1.ACESFilmicToneMapping = 5;
    k1.AddEquation = 100;
    k1.AddOperation = 2;
    k1.AdditiveBlending = 2;
    k1.AlphaFormat = 1021;
    k1.AlwaysDepth = 1;
    k1.AlwaysStencilFunc = 519;
    k1.AmbientLight = bf;
    k1.AmbientLightProbe = zg;
    k1.AnimationClip = Ma;
    k1.AnimationLoader = qg;
    k1.AnimationMixer = Gg;
    k1.AnimationObjectGroup = ci;
    k1.AnimationUtils = pa1;
    k1.ArcCurve = cd;
    k1.ArrayCamera = Jd;
    k1.ArrowHelper = tb;
    k1.Audio = dd;
    k1.AudioAnalyser = Eg;
    k1.AudioContext = Cg;
    k1.AudioListener = Bg;
    k1.AudioLoader = jf;
    k1.AxesHelper = ve;
    k1.AxisHelper = function(a) {
        console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");
        return new ve(a);
    };
    k1.BackSide = 1;
    k1.BasicDepthPacking = 3200;
    k1.BasicShadowMap = 0;
    k1.BinaryTextureLoader = function(a) {
        console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");
        return new Te(a);
    };
    k1.Bone = ig;
    k1.BooleanKeyframeTrack = Pe;
    k1.BoundingBoxHelper = function(a, b) {
        console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
        return new sb(a, b);
    };
    k1.Box2 = Jg;
    k1.Box3 = ab;
    k1.Box3Helper = te;
    k1.BoxBufferGeometry = Gd;
    k1.BoxGeometry = Zg;
    k1.BoxHelper = sb;
    k1.BufferAttribute = O1;
    k1.BufferGeometry = E1;
    k1.BufferGeometryLoader = gf;
    k1.ByteType = 1010;
    k1.Cache = uc;
    k1.Camera = bb;
    k1.CameraHelper = se;
    k1.CanvasRenderer = function() {
        console.error("THREE.CanvasRenderer has been removed");
    };
    k1.CanvasTexture = Pd;
    k1.CatmullRomCurve3 = ya1;
    k1.CineonToneMapping = 4;
    k1.CircleBufferGeometry = Yc;
    k1.CircleGeometry = je;
    k1.ClampToEdgeWrapping = 1001;
    k1.Clock = Ag;
    k1.ClosedSplineCurve3 = ji;
    k1.Color = H1;
    k1.ColorKeyframeTrack = Qe;
    k1.CompressedTexture = Lc;
    k1.CompressedTextureLoader = rg;
    k1.ConeBufferGeometry = ie;
    k1.ConeGeometry = he;
    k1.CubeCamera = Dc;
    k1.CubeGeometry = Zg;
    k1.CubeReflectionMapping = 301;
    k1.CubeRefractionMapping = 302;
    k1.CubeTexture = ob;
    k1.CubeTextureLoader = Ue;
    k1.CubeUVReflectionMapping = 306;
    k1.CubeUVRefractionMapping = 307;
    k1.CubicBezierCurve = Sa;
    k1.CubicBezierCurve3 = gb;
    k1.CubicInterpolant = Ne;
    k1.CullFaceBack = 1;
    k1.CullFaceFront = 2;
    k1.CullFaceFrontBack = 3;
    k1.CullFaceNone = 0;
    k1.Curve = D1;
    k1.CurvePath = rb;
    k1.CustomBlending = 5;
    k1.CylinderBufferGeometry = qb;
    k1.CylinderGeometry = ic;
    k1.Cylindrical = hi;
    k1.DataTexture = Zb;
    k1.DataTexture2DArray = Ec;
    k1.DataTexture3D = Fc;
    k1.DataTextureLoader = Te;
    k1.DecrementStencilOp = 7683;
    k1.DecrementWrapStencilOp = 34056;
    k1.DefaultLoadingManager = Zh;
    k1.DepthFormat = 1026;
    k1.DepthStencilFormat = 1027;
    k1.DepthTexture = Qd;
    k1.DirectionalLight = af;
    k1.DirectionalLightHelper = ld;
    k1.DirectionalLightShadow = $e;
    k1.DiscreteInterpolant = Oe;
    k1.DodecahedronBufferGeometry = Qc;
    k1.DodecahedronGeometry = Wd;
    k1.DoubleSide = 2;
    k1.DstAlphaFactor = 206;
    k1.DstColorFactor = 208;
    k1.DynamicBufferAttribute = function(a, b) {
        console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
        return new O1(a, b).setDynamic(!0);
    };
    k1.EdgesGeometry = Xc;
    k1.EdgesHelper = function(a, b) {
        console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");
        return new ca1(new Xc(a.geometry), new Q1({
            color: void 0 !== b ? b : 16777215
        }));
    };
    k1.EllipseCurve = Ja;
    k1.EqualDepth = 4;
    k1.EqualStencilFunc = 514;
    k1.EquirectangularReflectionMapping = 303;
    k1.EquirectangularRefractionMapping = 304;
    k1.Euler = Qb;
    k1.EventDispatcher = Ba1;
    k1.ExtrudeBufferGeometry = eb;
    k1.ExtrudeGeometry = fc;
    k1.Face3 = zc;
    k1.Face4 = function(a, b, c, d, e, f, g) {
        console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
        return new zc(a, b, c, e, f, g);
    };
    k1.FaceColors = 1;
    k1.FaceNormalsHelper = re;
    k1.FileLoader = Na;
    k1.FlatShading = 1;
    k1.Float32Attribute = function(a, b) {
        console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
        return new A1(a, b);
    };
    k1.Float32BufferAttribute = A1;
    k1.Float64Attribute = function(a, b) {
        console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
        return new Cd(a, b);
    };
    k1.Float64BufferAttribute = Cd;
    k1.FloatType = 1015;
    k1.Fog = Je;
    k1.FogExp2 = Ie;
    k1.Font = wg;
    k1.FontLoader = xg;
    k1.FrontFaceDirectionCCW = 1;
    k1.FrontFaceDirectionCW = 0;
    k1.FrontSide = 0;
    k1.Frustum = Ed;
    k1.GammaEncoding = 3007;
    k1.Geometry = F1;
    k1.GeometryUtils = {
        merge: function(a, b, c) {
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            if (b.isMesh) {
                b.matrixAutoUpdate && b.updateMatrix();
                var d = b.matrix;
                b = b.geometry;
            }
            a.merge(b, d, c);
        },
        center: function(a) {
            console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
            return a.center();
        }
    };
    k1.GreaterDepth = 6;
    k1.GreaterEqualDepth = 5;
    k1.GreaterEqualStencilFunc = 518;
    k1.GreaterStencilFunc = 516;
    k1.GridHelper = mf;
    k1.Group = Hc;
    k1.HalfFloatType = 1016;
    k1.HemisphereLight = We;
    k1.HemisphereLightHelper = id;
    k1.HemisphereLightProbe = yg;
    k1.IcosahedronBufferGeometry = Pc;
    k1.IcosahedronGeometry = Vd;
    k1.ImageBitmapLoader = ug;
    k1.ImageLoader = bd;
    k1.ImageUtils = Kb;
    k1.ImmediateRenderObject = pe;
    k1.IncrementStencilOp = 7682;
    k1.IncrementWrapStencilOp = 34055;
    k1.InstancedBufferAttribute = ff;
    k1.InstancedBufferGeometry = ef;
    k1.InstancedInterleavedBuffer = Hg;
    k1.InstancedMesh = jg;
    k1.Int16Attribute = function(a, b) {
        console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");
        return new Ad(a, b);
    };
    k1.Int16BufferAttribute = Ad;
    k1.Int32Attribute = function(a, b) {
        console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");
        return new Bd(a, b);
    };
    k1.Int32BufferAttribute = Bd;
    k1.Int8Attribute = function(a, b) {
        console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");
        return new xd(a, b);
    };
    k1.Int8BufferAttribute = xd;
    k1.IntType = 1013;
    k1.InterleavedBuffer = Gb;
    k1.InterleavedBufferAttribute = Kd;
    k1.Interpolant = Ia;
    k1.InterpolateDiscrete = 2300;
    k1.InterpolateLinear = 2301;
    k1.InterpolateSmooth = 2302;
    k1.InvertStencilOp = 5386;
    k1.JSONLoader = function() {
        console.error("THREE.JSONLoader has been removed.");
    };
    k1.KeepStencilOp = 7680;
    k1.KeyframeTrack = oa1;
    k1.LOD = Nd;
    k1.LatheBufferGeometry = Wc;
    k1.LatheGeometry = ge;
    k1.Layers = Pf;
    k1.LensFlare = function() {
        console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js");
    };
    k1.LessDepth = 2;
    k1.LessEqualDepth = 3;
    k1.LessEqualStencilFunc = 515;
    k1.LessStencilFunc = 513;
    k1.Light = da1;
    k1.LightProbe = Xa;
    k1.LightProbeHelper = jd;
    k1.LightShadow = ib;
    k1.Line = xa1;
    k1.Line3 = Kg;
    k1.LineBasicMaterial = Q1;
    k1.LineCurve = za1;
    k1.LineCurve3 = Ta;
    k1.LineDashedMaterial = pc;
    k1.LineLoop = Me;
    k1.LinePieces = 1;
    k1.LineSegments = ca1;
    k1.LineStrip = 0;
    k1.LinearEncoding = 3E3;
    k1.LinearFilter = 1006;
    k1.LinearInterpolant = ke;
    k1.LinearMipMapLinearFilter = 1008;
    k1.LinearMipMapNearestFilter = 1007;
    k1.LinearMipmapLinearFilter = 1008;
    k1.LinearMipmapNearestFilter = 1007;
    k1.LinearToneMapping = 1;
    k1.Loader = S1;
    k1.LoaderUtils = fh;
    k1.LoadingManager = pg;
    k1.LogLuvEncoding = 3003;
    k1.LoopOnce = 2200;
    k1.LoopPingPong = 2202;
    k1.LoopRepeat = 2201;
    k1.LuminanceAlphaFormat = 1025;
    k1.LuminanceFormat = 1024;
    k1.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    };
    k1.Material = M1;
    k1.MaterialLoader = df;
    k1.Math = L1;
    k1.Matrix3 = Y1;
    k1.Matrix4 = U1;
    k1.MaxEquation = 104;
    k1.Mesh = ja1;
    k1.MeshBasicMaterial = Ga;
    k1.MeshDepthMaterial = Db;
    k1.MeshDistanceMaterial = Eb;
    k1.MeshFaceMaterial = function(a) {
        console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");
        return a;
    };
    k1.MeshLambertMaterial = nc;
    k1.MeshMatcapMaterial = oc;
    k1.MeshNormalMaterial = mc;
    k1.MeshPhongMaterial = Ra;
    k1.MeshPhysicalMaterial = kc;
    k1.MeshStandardMaterial = fb;
    k1.MeshToonMaterial = lc;
    k1.MinEquation = 103;
    k1.MirroredRepeatWrapping = 1002;
    k1.MixOperation = 1;
    k1.MultiMaterial = function(a) {
        void 0 === a && (a = []);
        console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
        a.isMultiMaterial = !0;
        a.materials = a;
        a.clone = function() {
            return a.slice();
        };
        return a;
    };
    k1.MultiplyBlending = 4;
    k1.MultiplyOperation = 0;
    k1.NearestFilter = 1003;
    k1.NearestMipMapLinearFilter = 1005;
    k1.NearestMipMapNearestFilter = 1004;
    k1.NearestMipmapLinearFilter = 1005;
    k1.NearestMipmapNearestFilter = 1004;
    k1.NeverDepth = 0;
    k1.NeverStencilFunc = 512;
    k1.NoBlending = 0;
    k1.NoColors = 0;
    k1.NoToneMapping = 0;
    k1.NormalBlending = 1;
    k1.NotEqualDepth = 7;
    k1.NotEqualStencilFunc = 517;
    k1.NumberKeyframeTrack = $c;
    k1.Object3D = B1;
    k1.ObjectLoader = hf;
    k1.ObjectSpaceNormalMap = 1;
    k1.OctahedronBufferGeometry = cc;
    k1.OctahedronGeometry = Ud;
    k1.OneFactor = 201;
    k1.OneMinusDstAlphaFactor = 207;
    k1.OneMinusDstColorFactor = 209;
    k1.OneMinusSrcAlphaFactor = 205;
    k1.OneMinusSrcColorFactor = 203;
    k1.OrthographicCamera = oe;
    k1.PCFShadowMap = 1;
    k1.PCFSoftShadowMap = 2;
    k1.ParametricBufferGeometry = Nc;
    k1.ParametricGeometry = Rd;
    k1.Particle = function(a) {
        console.warn("THREE.Particle has been renamed to THREE.Sprite.");
        return new Ld(a);
    };
    k1.ParticleBasicMaterial = function(a) {
        console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
        return new Qa(a);
    };
    k1.ParticleSystem = function(a, b) {
        console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
        return new Kc(a, b);
    };
    k1.ParticleSystemMaterial = function(a) {
        console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
        return new Qa(a);
    };
    k1.Path = Wa;
    k1.PerspectiveCamera = na1;
    k1.Plane = cb;
    k1.PlaneBufferGeometry = $b;
    k1.PlaneGeometry = Fd;
    k1.PlaneHelper = ue;
    k1.PointCloud = function(a, b) {
        console.warn("THREE.PointCloud has been renamed to THREE.Points.");
        return new Kc(a, b);
    };
    k1.PointCloudMaterial = function(a) {
        console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
        return new Qa(a);
    };
    k1.PointLight = Ze;
    k1.PointLightHelper = gd;
    k1.Points = Kc;
    k1.PointsMaterial = Qa;
    k1.PolarGridHelper = nf;
    k1.PolyhedronBufferGeometry = Ca1;
    k1.PolyhedronGeometry = Sd;
    k1.PositionalAudio = Dg;
    k1.PositionalAudioHelper = kd;
    k1.PropertyBinding = Aa1;
    k1.PropertyMixer = Fg;
    k1.QuadraticBezierCurve = Ua;
    k1.QuadraticBezierCurve3 = hb;
    k1.Quaternion = ua1;
    k1.QuaternionKeyframeTrack = le;
    k1.QuaternionLinearInterpolant = Re;
    k1.REVISION = "109";
    k1.RGBADepthPacking = 3201;
    k1.RGBAFormat = 1023;
    k1.RGBA_ASTC_10x10_Format = 37819;
    k1.RGBA_ASTC_10x5_Format = 37816;
    k1.RGBA_ASTC_10x6_Format = 37817;
    k1.RGBA_ASTC_10x8_Format = 37818;
    k1.RGBA_ASTC_12x10_Format = 37820;
    k1.RGBA_ASTC_12x12_Format = 37821;
    k1.RGBA_ASTC_4x4_Format = 37808;
    k1.RGBA_ASTC_5x4_Format = 37809;
    k1.RGBA_ASTC_5x5_Format = 37810;
    k1.RGBA_ASTC_6x5_Format = 37811;
    k1.RGBA_ASTC_6x6_Format = 37812;
    k1.RGBA_ASTC_8x5_Format = 37813;
    k1.RGBA_ASTC_8x6_Format = 37814;
    k1.RGBA_ASTC_8x8_Format = 37815;
    k1.RGBA_PVRTC_2BPPV1_Format = 35843;
    k1.RGBA_PVRTC_4BPPV1_Format = 35842;
    k1.RGBA_S3TC_DXT1_Format = 33777;
    k1.RGBA_S3TC_DXT3_Format = 33778;
    k1.RGBA_S3TC_DXT5_Format = 33779;
    k1.RGBDEncoding = 3006;
    k1.RGBEEncoding = 3002;
    k1.RGBEFormat = 1023;
    k1.RGBFormat = 1022;
    k1.RGBM16Encoding = 3005;
    k1.RGBM7Encoding = 3004;
    k1.RGB_ETC1_Format = 36196;
    k1.RGB_PVRTC_2BPPV1_Format = 35841;
    k1.RGB_PVRTC_4BPPV1_Format = 35840;
    k1.RGB_S3TC_DXT1_Format = 33776;
    k1.RawShaderMaterial = Zc;
    k1.Ray = Sb;
    k1.Raycaster = ei;
    k1.RectAreaLight = cf;
    k1.RectAreaLightHelper = hd;
    k1.RedFormat = 1028;
    k1.ReinhardToneMapping = 2;
    k1.RepeatWrapping = 1E3;
    k1.ReplaceStencilOp = 7681;
    k1.ReverseSubtractEquation = 102;
    k1.RingBufferGeometry = Vc;
    k1.RingGeometry = fe;
    k1.Scene = wd;
    k1.SceneUtils = {
        createMultiMaterialObject: function() {
            console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");
        },
        detach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");
        },
        attach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");
        }
    };
    k1.ShaderChunk = N1;
    k1.ShaderLib = db;
    k1.ShaderMaterial = ma1;
    k1.ShadowMaterial = jc;
    k1.Shape = Jb;
    k1.ShapeBufferGeometry = hc;
    k1.ShapeGeometry = gc;
    k1.ShapePath = vg;
    k1.ShapeUtils = pb;
    k1.ShortType = 1011;
    k1.Skeleton = Le;
    k1.SkeletonHelper = fd;
    k1.SkinnedMesh = Od;
    k1.SmoothShading = 2;
    k1.Sphere = nb;
    k1.SphereBufferGeometry = Ib;
    k1.SphereGeometry = ee;
    k1.Spherical = gi;
    k1.SphericalHarmonics3 = kf;
    k1.SphericalReflectionMapping = 305;
    k1.Spline = Mg;
    k1.SplineCurve = Va;
    k1.SplineCurve3 = ki;
    k1.SpotLight = Ye;
    k1.SpotLightHelper = ed;
    k1.SpotLightShadow = Xe;
    k1.Sprite = Ld;
    k1.SpriteMaterial = Hb;
    k1.SrcAlphaFactor = 204;
    k1.SrcAlphaSaturateFactor = 210;
    k1.SrcColorFactor = 202;
    k1.StereoCamera = ai;
    k1.StringKeyframeTrack = Se;
    k1.SubtractEquation = 101;
    k1.SubtractiveBlending = 3;
    k1.TOUCH = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    };
    k1.TangentSpaceNormalMap = 0;
    k1.TetrahedronBufferGeometry = Oc;
    k1.TetrahedronGeometry = Td;
    k1.TextBufferGeometry = Uc;
    k1.TextGeometry = de;
    k1.Texture = W1;
    k1.TextureLoader = Ve;
    k1.TorusBufferGeometry = Sc;
    k1.TorusGeometry = Zd;
    k1.TorusKnotBufferGeometry = Rc;
    k1.TorusKnotGeometry = Yd;
    k1.Triangle = R1;
    k1.TriangleFanDrawMode = 2;
    k1.TriangleStripDrawMode = 1;
    k1.TrianglesDrawMode = 0;
    k1.TubeBufferGeometry = dc;
    k1.TubeGeometry = Xd;
    k1.UVMapping = 300;
    k1.Uint16Attribute = function(a, b) {
        console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");
        return new Tb(a, b);
    };
    k1.Uint16BufferAttribute = Tb;
    k1.Uint32Attribute = function(a, b) {
        console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
        return new Ub(a, b);
    };
    k1.Uint32BufferAttribute = Ub;
    k1.Uint8Attribute = function(a, b) {
        console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");
        return new yd(a, b);
    };
    k1.Uint8BufferAttribute = yd;
    k1.Uint8ClampedAttribute = function(a, b) {
        console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");
        return new zd(a, b);
    };
    k1.Uint8ClampedBufferAttribute = zd;
    k1.Uncharted2ToneMapping = 3;
    k1.Uniform = lf;
    k1.UniformsLib = I1;
    k1.UniformsUtils = Ak;
    k1.UnsignedByteType = 1009;
    k1.UnsignedInt248Type = 1020;
    k1.UnsignedIntType = 1014;
    k1.UnsignedShort4444Type = 1017;
    k1.UnsignedShort5551Type = 1018;
    k1.UnsignedShort565Type = 1019;
    k1.UnsignedShortType = 1012;
    k1.VSMShadowMap = 3;
    k1.Vector2 = w1;
    k1.Vector3 = n1;
    k1.Vector4 = aa1;
    k1.VectorKeyframeTrack = ad;
    k1.Vertex = function(a, b, c) {
        console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
        return new n1(a, b, c);
    };
    k1.VertexColors = 2;
    k1.VertexNormalsHelper = qe;
    k1.VideoTexture = mg;
    k1.WebGLMultisampleRenderTarget = Of;
    k1.WebGLRenderTarget = la1;
    k1.WebGLRenderTargetCube = Ab;
    k1.WebGLRenderer = hg;
    k1.WebGLUtils = Kh;
    k1.WireframeGeometry = Mc;
    k1.WireframeHelper = function(a, b) {
        console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");
        return new ca1(new Mc(a.geometry), new Q1({
            color: void 0 !== b ? b : 16777215
        }));
    };
    k1.WrapAroundEnding = 2402;
    k1.XHRLoader = function(a) {
        console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
        return new Na(a);
    };
    k1.ZeroCurvatureEnding = 2400;
    k1.ZeroFactor = 200;
    k1.ZeroSlopeEnding = 2401;
    k1.ZeroStencilOp = 0;
    k1.sRGBEncoding = 3001;
    Object.defineProperty(k1, "__esModule", {
        value: !0
    });
});

//# sourceMappingURL=team.2f189589.js.map
