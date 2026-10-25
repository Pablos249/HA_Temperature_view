const N = globalThis, K = N.ShadowRoot && (N.ShadyCSS === void 0 || N.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Z = /* @__PURE__ */ Symbol(), Y = /* @__PURE__ */ new WeakMap();
let ct = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== Z) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (K && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = Y.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && Y.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const yt = (n) => new ct(typeof n == "string" ? n : n + "", void 0, Z), ht = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((i, r, o) => i + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + n[o + 1], n[0]);
  return new ct(e, n, Z);
}, kt = (n, t) => {
  if (K) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), r = N.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = e.cssText, n.appendChild(i);
  }
}, X = K ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return yt(e);
})(n) : n;
const { is: wt, defineProperty: $t, getOwnPropertyDescriptor: bt, getOwnPropertyNames: _t, getOwnPropertySymbols: zt, getPrototypeOf: At } = Object, U = globalThis, Q = U.trustedTypes, Mt = Q ? Q.emptyScript : "", Ct = U.reactiveElementPolyfillSupport, P = (n, t) => n, B = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? Mt : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, pt = (n, t) => !wt(n, t), tt = { attribute: !0, type: String, converter: B, reflect: !1, useDefault: !1, hasChanged: pt };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), U.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let A = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = tt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), r = this.getPropertyDescriptor(t, i, e);
      r !== void 0 && $t(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: r, set: o } = bt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(a) {
      this[e] = a;
    } };
    return { get: r, set(a) {
      const l = r?.call(this);
      o?.call(this, a), this.requestUpdate(t, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? tt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(P("elementProperties"))) return;
    const t = At(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(P("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(P("properties"))) {
      const e = this.properties, i = [..._t(e), ...zt(e)];
      for (const r of i) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, r] of e) this.elementProperties.set(i, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const r = this._$Eu(e, i);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const r of i) e.unshift(X(r));
    } else t !== void 0 && e.push(X(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return kt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ET(t, e) {
    const i = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, i);
    if (r !== void 0 && i.reflect === !0) {
      const o = (i.converter?.toAttribute !== void 0 ? i.converter : B).toAttribute(e, i.type);
      this._$Em = t, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, r = i._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const o = i.getPropertyOptions(r), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : B;
      this._$Em = r;
      const l = a.fromAttribute(e, o.type);
      this[r] = l ?? this._$Ej?.get(r) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, r = !1, o) {
    if (t !== void 0) {
      const a = this.constructor;
      if (r === !1 && (o = this[t]), i ??= a.getPropertyOptions(t), !((i.hasChanged ?? pt)(o, e) || i.useDefault && i.reflect && o === this._$Ej?.get(t) && !this.hasAttribute(a._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: r, wrapped: o }, a) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, a ?? e ?? this[t]), o !== !0 || a !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), r === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [r, o] of this._$Ep) this[r] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [r, o] of i) {
        const { wrapped: a } = o, l = this[r];
        a !== !0 || this._$AL.has(r) || l === void 0 || this.C(r, void 0, o, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((i) => i.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (i) {
      throw t = !1, this._$EM(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
A.elementStyles = [], A.shadowRootOptions = { mode: "open" }, A[P("elementProperties")] = /* @__PURE__ */ new Map(), A[P("finalized")] = /* @__PURE__ */ new Map(), Ct?.({ ReactiveElement: A }), (U.reactiveElementVersions ??= []).push("2.1.2");
const G = globalThis, et = (n) => n, T = G.trustedTypes, it = T ? T.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ut = "$lit$", y = `lit$${Math.random().toFixed(9).slice(2)}$`, ft = "?" + y, St = `<${ft}>`, _ = document, j = () => _.createComment(""), E = (n) => n === null || typeof n != "object" && typeof n != "function", q = Array.isArray, Pt = (n) => q(n) || typeof n?.[Symbol.iterator] == "function", D = `[ 	
\f\r]`, S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rt = /-->/g, ot = />/g, $ = RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), at = /'/g, nt = /"/g, mt = /^(?:script|style|textarea|title)$/i, vt = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), h = vt(1), x = vt(2), z = /* @__PURE__ */ Symbol.for("lit-noChange"), u = /* @__PURE__ */ Symbol.for("lit-nothing"), st = /* @__PURE__ */ new WeakMap(), b = _.createTreeWalker(_, 129);
function gt(n, t) {
  if (!q(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return it !== void 0 ? it.createHTML(t) : t;
}
const jt = (n, t) => {
  const e = n.length - 1, i = [];
  let r, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = S;
  for (let l = 0; l < e; l++) {
    const s = n[l];
    let c, f, p = -1, m = 0;
    for (; m < s.length && (a.lastIndex = m, f = a.exec(s), f !== null); ) m = a.lastIndex, a === S ? f[1] === "!--" ? a = rt : f[1] !== void 0 ? a = ot : f[2] !== void 0 ? (mt.test(f[2]) && (r = RegExp("</" + f[2], "g")), a = $) : f[3] !== void 0 && (a = $) : a === $ ? f[0] === ">" ? (a = r ?? S, p = -1) : f[1] === void 0 ? p = -2 : (p = a.lastIndex - f[2].length, c = f[1], a = f[3] === void 0 ? $ : f[3] === '"' ? nt : at) : a === nt || a === at ? a = $ : a === rt || a === ot ? a = S : (a = $, r = void 0);
    const v = a === $ && n[l + 1].startsWith("/>") ? " " : "";
    o += a === S ? s + St : p >= 0 ? (i.push(c), s.slice(0, p) + ut + s.slice(p) + y + v) : s + y + (p === -2 ? l : v);
  }
  return [gt(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class H {
  constructor({ strings: t, _$litType$: e }, i) {
    let r;
    this.parts = [];
    let o = 0, a = 0;
    const l = t.length - 1, s = this.parts, [c, f] = jt(t, e);
    if (this.el = H.createElement(c, i), b.currentNode = this.el.content, e === 2 || e === 3) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (r = b.nextNode()) !== null && s.length < l; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const p of r.getAttributeNames()) if (p.endsWith(ut)) {
          const m = f[a++], v = r.getAttribute(p).split(y), g = /([.?@])?(.*)/.exec(m);
          s.push({ type: 1, index: o, name: g[2], strings: v, ctor: g[1] === "." ? Ht : g[1] === "?" ? Rt : g[1] === "@" ? Ot : V }), r.removeAttribute(p);
        } else p.startsWith(y) && (s.push({ type: 6, index: o }), r.removeAttribute(p));
        if (mt.test(r.tagName)) {
          const p = r.textContent.split(y), m = p.length - 1;
          if (m > 0) {
            r.textContent = T ? T.emptyScript : "";
            for (let v = 0; v < m; v++) r.append(p[v], j()), b.nextNode(), s.push({ type: 2, index: ++o });
            r.append(p[m], j());
          }
        }
      } else if (r.nodeType === 8) if (r.data === ft) s.push({ type: 2, index: o });
      else {
        let p = -1;
        for (; (p = r.data.indexOf(y, p + 1)) !== -1; ) s.push({ type: 7, index: o }), p += y.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const i = _.createElement("template");
    return i.innerHTML = t, i;
  }
}
function C(n, t, e = n, i) {
  if (t === z) return t;
  let r = i !== void 0 ? e._$Co?.[i] : e._$Cl;
  const o = E(t) ? void 0 : t._$litDirective$;
  return r?.constructor !== o && (r?._$AO?.(!1), o === void 0 ? r = void 0 : (r = new o(n), r._$AT(n, e, i)), i !== void 0 ? (e._$Co ??= [])[i] = r : e._$Cl = r), r !== void 0 && (t = C(n, r._$AS(n, t.values), r, i)), t;
}
class Et {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: i } = this._$AD, r = (t?.creationScope ?? _).importNode(e, !0);
    b.currentNode = r;
    let o = b.nextNode(), a = 0, l = 0, s = i[0];
    for (; s !== void 0; ) {
      if (a === s.index) {
        let c;
        s.type === 2 ? c = new R(o, o.nextSibling, this, t) : s.type === 1 ? c = new s.ctor(o, s.name, s.strings, this, t) : s.type === 6 && (c = new Nt(o, this, t)), this._$AV.push(c), s = i[++l];
      }
      a !== s?.index && (o = b.nextNode(), a++);
    }
    return b.currentNode = _, r;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class R {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, i, r) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = r, this._$Cv = r?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = C(this, t, e), E(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Pt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== u && E(this._$AH) ? this._$AA.nextSibling.data = t : this.T(_.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: i } = t, r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = H.createElement(gt(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === r) this._$AH.p(e);
    else {
      const o = new Et(r, this), a = o.u(this.options);
      o.p(e), this.T(a), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = st.get(t.strings);
    return e === void 0 && st.set(t.strings, e = new H(t)), e;
  }
  k(t) {
    q(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, r = 0;
    for (const o of t) r === e.length ? e.push(i = new R(this.O(j()), this.O(j()), this, this.options)) : i = e[r], i._$AI(o), r++;
    r < e.length && (this._$AR(i && i._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const i = et(t).nextSibling;
      et(t).remove(), t = i;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class V {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, r, o) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = o, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = u;
  }
  _$AI(t, e = this, i, r) {
    const o = this.strings;
    let a = !1;
    if (o === void 0) t = C(this, t, e, 0), a = !E(t) || t !== this._$AH && t !== z, a && (this._$AH = t);
    else {
      const l = t;
      let s, c;
      for (t = o[0], s = 0; s < o.length - 1; s++) c = C(this, l[i + s], e, s), c === z && (c = this._$AH[s]), a ||= !E(c) || c !== this._$AH[s], c === u ? t = u : t !== u && (t += (c ?? "") + o[s + 1]), this._$AH[s] = c;
    }
    a && !r && this.j(t);
  }
  j(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ht extends V {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
class Rt extends V {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== u);
  }
}
class Ot extends V {
  constructor(t, e, i, r, o) {
    super(t, e, i, r, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = C(this, t, e, 0) ?? u) === z) return;
    const i = this._$AH, r = t === u && i !== u || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, o = t !== u && (i === u || r);
    r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Nt {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    C(this, t);
  }
}
const Tt = G.litHtmlPolyfillSupport;
Tt?.(H, R), (G.litHtmlVersions ??= []).push("3.3.3");
const It = (n, t, e) => {
  const i = e?.renderBefore ?? t;
  let r = i._$litPart$;
  if (r === void 0) {
    const o = e?.renderBefore ?? null;
    i._$litPart$ = r = new R(t.insertBefore(j(), o), o, void 0, e ?? {});
  }
  return r._$AI(n), r;
};
const J = globalThis;
let M = class extends A {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = It(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return z;
  }
};
M._$litElement$ = !0, M.finalized = !0, J.litElementHydrateSupport?.({ LitElement: M });
const Ut = J.litElementPolyfillSupport;
Ut?.({ LitElement: M });
(J.litElementVersions ??= []).push("4.2.2");
const Vt = { CHILD: 2 }, Lt = (n) => (...t) => ({ _$litDirective$: n, values: t });
class Dt {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
class W extends Dt {
  constructor(t) {
    if (super(t), this.it = u, t.type !== Vt.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === u || t == null) return this._t = void 0, this.it = t;
    if (t === z) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const e = [t];
    return e.raw = e, this._t = { _$litType$: this.constructor.resultType, strings: e, values: [] };
  }
}
W.directiveName = "unsafeHTML", W.resultType = 1;
class F extends W {
}
F.directiveName = "unsafeSVG", F.resultType = 2;
const lt = Lt(F), Bt = '<svg xmlns="http://www.w3.org/2000/svg" width="760" height="600" viewBox="0 0 760 600" role="img" aria-label="rzut-parter" font-family="DejaVu Sans, Arial, sans-serif"><g id="room-parter-biuro"><rect x="20" y="20" width="218" height="240" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="129.0" y="120.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Biuro</text><text id="value-parter-biuro" x="129.0" y="175.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-schody"><rect x="238" y="20" width="180" height="240" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><path d="M252 40H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 60H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 80H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 100H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 120H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 140H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 160H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 180H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 200H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 220H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 240H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="286.0" y="126.0" width="84" height="28" rx="4" fill="var(--dh-panel, #ffffff)"/><text x="328.0" y="146.0" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Schody</text></g><g id="room-parter-salon"><rect x="418" y="20" width="322" height="420" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="579.0" y="210.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Salon</text><text id="value-parter-salon" x="579.0" y="265.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-hall"><rect x="20" y="260" width="218" height="180" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="129.0" y="330.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Hall</text><text id="value-parter-hall" x="129.0" y="385.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-korytarz-1"><rect x="238" y="260" width="180" height="180" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="328.0" y="330.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Korytarz I</text><text id="value-parter-korytarz-1" x="328.0" y="385.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-kuchnia"><rect x="20" y="440" width="720" height="140" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="380.0" y="490.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Kuchnia</text><text id="value-parter-kuchnia" x="380.0" y="545.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g></svg>', Wt = '<svg xmlns="http://www.w3.org/2000/svg" width="760" height="600" viewBox="0 0 760 600" role="img" aria-label="rzut-pietro" font-family="DejaVu Sans, Arial, sans-serif"><g id="room-pietro-lazienka"><rect x="20" y="20" width="245" height="420" rx="0" fill="var(--dh-warm, #f3e9dc)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="142.5" y="210.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Łazienka</text><text id="value-pietro-lazienka" x="142.5" y="265.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-schody"><rect x="265" y="20" width="170" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><path d="M279 40H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 60H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 80H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 100H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 120H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 140H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 160H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 180H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 200H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="308.0" y="111.0" width="84" height="28" rx="4" fill="var(--dh-panel, #ffffff)"/><text x="350.0" y="131.0" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Schody</text></g><g id="room-pietro-sypialnia-1"><rect x="435" y="20" width="305" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="587.5" y="105.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Sypialnia I</text><text id="value-pietro-sypialnia-1" x="587.5" y="160.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-korytarz-2"><rect x="265" y="230" width="170" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="350.0" y="315.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Korytarz II</text><text id="value-pietro-korytarz-2" x="350.0" y="370.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-sypialnia-2"><rect x="435" y="230" width="305" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="587.5" y="315.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Sypialnia II</text><text id="value-pietro-sypialnia-2" x="587.5" y="370.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-sypialnia-3"><rect x="20" y="440" width="490" height="140" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="265.0" y="490.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Sypialnia III</text><text id="value-pietro-sypialnia-3" x="265.0" y="545.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-garderoba"><rect x="510" y="440" width="230" height="140" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="625.0" y="490.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Garderoba</text><text id="value-pietro-garderoba" x="625.0" y="545.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g></svg>', Ft = '<svg xmlns="http://www.w3.org/2000/svg" width="760" height="600" viewBox="0 0 760 600" role="img" aria-label="rzut-piwnica" font-family="DejaVu Sans, Arial, sans-serif"><g id="room-piwnica-lazienka"><rect x="20" y="20" width="170" height="200" rx="0" fill="var(--dh-warm, #f3e9dc)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="105.0" y="100.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Łazienka</text><text id="value-piwnica-lazienka" x="105.0" y="155.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-pom-gosp-1"><rect x="190" y="20" width="100" height="130" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="240.0" y="65.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Pom.</text><text x="240.0" y="87.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">gosp.*</text><text id="value-piwnica-pom-gosp-1" x="240.0" y="120.0" fill="var(--dh-ink, #163344)" font-size="27" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-schody"><rect x="290" y="20" width="170" height="130" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><path d="M304 40H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 60H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 80H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 100H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 120H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="333.0" y="71.0" width="84" height="28" rx="4" fill="var(--dh-panel, #ffffff)"/><text x="375.0" y="91.0" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Schody</text></g><g id="room-piwnica-silownia"><rect x="460" y="20" width="280" height="400" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="600.0" y="200.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Siłownia</text><text id="value-piwnica-silownia" x="600.0" y="255.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-magazyn"><rect x="20" y="220" width="100" height="200" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="70.0" y="300.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Magazyn*</text><text id="value-piwnica-magazyn" x="70.0" y="355.0" fill="var(--dh-ink, #163344)" font-size="27" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-pom-gosp-2"><rect x="120" y="220" width="170" height="200" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="205.0" y="300.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Pom. gosp.*</text><text id="value-piwnica-pom-gosp-2" x="205.0" y="355.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-korytarz"><rect x="290" y="150" width="170" height="270" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="375.0" y="265.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Korytarz</text><text id="value-piwnica-korytarz" x="375.0" y="320.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-garaz"><rect x="20" y="420" width="720" height="160" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="380.0" y="480.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Garaż</text><text id="value-piwnica-garaz" x="380.0" y="535.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g></svg>', Kt = '<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="660" viewBox="0 0 1300 660" role="img" aria-label="uklad-co-poziomy" font-family="DejaVu Sans, Arial, sans-serif"><path d="M180 210H420" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M420 350H180" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M560 210H1190" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M560 350H1190" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M810 210V246" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M810 315V350" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1000 210V246" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1000 315V350" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1190 210V246" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1190 315V350" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M165 365V425H385V475" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M420 475V450H140V365" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><rect x="60" y="175" width="120" height="190" rx="12" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="69" y="185" width="102" height="170" rx="8" fill="var(--dh-panel, #ffffff)"/><circle cx="120.0" cy="228.2" r="38.4" fill="var(--dh-fan, #365365)"/><circle cx="120.0" cy="228.2" r="32.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="228.2" r="25.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="228.2" r="18.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><path d="M81.6 228.2L158.4 228.2" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M120.0 189.79999999999998L120.0 266.59999999999997" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 201.32L146.88 255.07999999999998" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 255.07999999999998L146.88 201.32" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="120.0" cy="228.2" r="6" fill="var(--dh-metal, #dbe5ec)"/><circle cx="120.0" cy="311.79999999999995" r="38.4" fill="var(--dh-fan, #365365)"/><circle cx="120.0" cy="311.79999999999995" r="32.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="311.79999999999995" r="25.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="311.79999999999995" r="18.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><path d="M81.6 311.79999999999995L158.4 311.79999999999995" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M120.0 273.4L120.0 350.19999999999993" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 284.91999999999996L146.88 338.67999999999995" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 338.67999999999995L146.88 284.91999999999996" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="120.0" cy="311.79999999999995" r="6" fill="var(--dh-metal, #dbe5ec)"/><text x="120" y="150" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pompa ciepła</text><rect x="420" y="165" width="140" height="230" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="430" y="183" width="120" height="194" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="490.0" y="145" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Bufor 1000 l</text><rect x="345" y="475" width="130" height="110" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="355" y="493" width="110" height="74" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="410.0" y="455" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">CWU</text><text x="290" y="171" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie PC</text><text id="value-pc-supply" x="290" y="203" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text x="290" y="318" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót PC</text><text id="value-pc-return" x="290" y="350" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-top" x="490" y="226" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-middle" x="490" y="291" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-bottom" x="490" y="356" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-cwu" x="410" y="540" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><rect x="735" y="246" width="150" height="69" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="810" y="285" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pion 1</text><text x="810" y="149" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-riser-1-supply" x="810" y="181" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="810" y="382" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-riser-1-return" x="810" y="414" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><rect x="925" y="246" width="150" height="69" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="1000" y="285" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pion 2</text><text x="1000" y="149" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-riser-2-supply" x="1000" y="181" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="1000" y="382" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-riser-2-return" x="1000" y="414" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><rect x="1115" y="246" width="150" height="69" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="1190" y="285" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pion 3</text><text x="1190" y="149" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-riser-3-supply" x="1190" y="181" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="1190" y="382" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-riser-3-return" x="1190" y="414" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="40" y="45" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="start">INSTALACJA CENTRALNEGO OGRZEWANIA</text><text x="40" y="630" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="start">Schemat funkcjonalny • przebieg gałęzi CWU do potwierdzenia na instalacji</text><path d="M760 560H795" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><text x="810" y="567" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="start">Zasilanie</text><path d="M1010 560H1045" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><text x="1060" y="567" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="start">Powrót</text></svg>', Zt = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="790" viewBox="0 0 500 790" role="img" aria-label="uklad-co-kolumna" font-family="DejaVu Sans, Arial, sans-serif"><text x="30" y="40" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="start">UKŁAD CO</text><rect x="24" y="65" width="452" height="128" rx="18" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="48" y="99" fill="var(--dh-muted, #526c7e)" font-size="20" font-weight="400" text-anchor="start">Pompa ciepła</text><text x="135" y="132" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-pc-supply" x="135" y="164" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text x="365" y="132" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-pc-return" x="365" y="164" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><rect x="54" y="252" width="200" height="225" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="64" y="270" width="180" height="189" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="154.0" y="232" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Bufor 1000 l</text><rect x="306" y="290" width="140" height="150" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="316" y="308" width="120" height="114" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="376.0" y="270" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">CWU</text><text id="value-buffer-top" x="154" y="307" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-middle" x="154" y="375" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-bottom" x="154" y="440" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><text id="value-cwu" x="376" y="380" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><path d="M254 308H280V520H86H416" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M54 440H32V715H416" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M86 520V552" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M86 686V715" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="23" y="552" width="126" height="134" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="86" y="581" fill="var(--dh-ink, #163344)" font-size="18" font-weight="400" text-anchor="middle">Pion 1</text><text id="value-riser-1-supply" x="86" y="620" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text id="value-riser-1-return" x="86" y="662" fill="var(--dh-ink, #163344)" font-size="26" font-weight="400" text-anchor="middle">—°</text><path d="M251 520V552" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M251 686V715" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="188" y="552" width="126" height="134" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="251" y="581" fill="var(--dh-ink, #163344)" font-size="18" font-weight="400" text-anchor="middle">Pion 2</text><text id="value-riser-2-supply" x="251" y="620" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text id="value-riser-2-return" x="251" y="662" fill="var(--dh-ink, #163344)" font-size="26" font-weight="400" text-anchor="middle">—°</text><path d="M416 520V552" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M416 686V715" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="353" y="552" width="126" height="134" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="416" y="581" fill="var(--dh-ink, #163344)" font-size="18" font-weight="400" text-anchor="middle">Pion 3</text><text id="value-riser-3-supply" x="416" y="620" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text id="value-riser-3-return" x="416" y="662" fill="var(--dh-ink, #163344)" font-size="26" font-weight="400" text-anchor="middle">—°</text><text x="250" y="760" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Góra: zasilanie • dół: powrót</text></svg>', Gt = { ground: Bt, upper: Wt, basement: Ft }, qt = { horizontal: Kt, column: Zt }, I = {
  ground: { id: "ground", name: "Parter", rooms: [
    { id: "office", name: "Biuro", x: 2, y: 2, width: 30, height: 31 },
    { id: "hall", name: "Hall", x: 2, y: 34, width: 30, height: 25 },
    { id: "stairs", name: "Schody", x: 33, y: 2, width: 22, height: 28, sensor: !1 },
    { id: "corridor", name: "Korytarz I", x: 33, y: 31, width: 22, height: 28 },
    { id: "living", name: "Salon", x: 56, y: 2, width: 42, height: 57 },
    { id: "kitchen", name: "Kuchnia", x: 2, y: 60, width: 96, height: 38 }
  ] },
  upper: { id: "upper", name: "Piętro", rooms: [
    { id: "bathroom", name: "Łazienka", x: 2, y: 2, width: 30, height: 37 },
    { id: "stairs", name: "Schody", x: 33, y: 2, width: 22, height: 27, sensor: !1 },
    { id: "corridor", name: "Korytarz II", x: 33, y: 30, width: 22, height: 28, sensor: !1 },
    { id: "bedroom_1", name: "Sypialnia I", x: 56, y: 2, width: 42, height: 33 },
    { id: "bedroom_2", name: "Sypialnia II", x: 56, y: 36, width: 42, height: 31 },
    { id: "bedroom_3", name: "Sypialnia III", x: 2, y: 59, width: 52, height: 39 },
    { id: "wardrobe", name: "Garderoba", x: 55, y: 68, width: 43, height: 30 }
  ] },
  basement: { id: "basement", name: "Piwnica", rooms: [
    { id: "utility", name: "Pom. gospodarcze", x: 2, y: 2, width: 28, height: 30 },
    { id: "bathroom", name: "Łazienka", x: 2, y: 33, width: 28, height: 26 },
    { id: "stairs", name: "Schody", x: 31, y: 2, width: 25, height: 27, sensor: !1 },
    { id: "corridor", name: "Korytarz", x: 31, y: 30, width: 25, height: 29, sensor: !1 },
    { id: "gym", name: "Siłownia", x: 57, y: 2, width: 41, height: 57 },
    { id: "garage", name: "Garaż", x: 2, y: 60, width: 96, height: 38 }
  ] }
}, Jt = (n) => !n || ["unknown", "unavailable", "none", "null"].includes(n.toLowerCase());
function Yt(n, t, e = 1) {
  const i = t ? n?.states[t] : void 0;
  if (!i || Jt(i.state)) return { text: "—", value: void 0, unit: "", entity: t };
  const r = Number(i.state), o = String(i.attributes.unit_of_measurement ?? "");
  return Number.isFinite(r) ? { text: `${r.toFixed(e)}${o ? ` ${o}` : ""}`, value: r, unit: o, entity: t } : { text: i.state, value: void 0, unit: o, entity: t };
}
const Xt = [["basement", "Piwnica"], ["ground", "Parter"], ["upper", "Piętro"]], O = [{ name: "Pion 1" }, { name: "Pion 2" }, { name: "Pion 3" }];
class Qt extends M {
  static properties = { hass: { attribute: !1 }, _config: { state: !0 } };
  setConfig(t) {
    this._config = structuredClone(t);
  }
  emit(t) {
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: t }, bubbles: !0, composed: !0 }));
  }
  clone() {
    return structuredClone(this._config ?? { type: "custom:dom-heat-card" });
  }
  toggleSections(t) {
    this.shadowRoot?.querySelectorAll("details").forEach((e) => {
      e.open = t;
    });
  }
  updateRoot(t, e) {
    const i = this.clone();
    t === "precision" ? i.precision = e === "" ? void 0 : Number(e) : i[t] = e, this.emit(i);
  }
  updateFloor(t, e) {
    const i = this.clone(), r = [...i.floors ?? ["ground", "upper"]];
    r[t] = e, i.floors = r, this.emit(i);
  }
  updateEntity(t, e) {
    const i = this.clone();
    i.entities ??= {}, i.entities[t] = e || void 0, this.emit(i);
  }
  updateRiser(t, e, i) {
    const r = this.clone();
    r.entities ??= {};
    const o = [...r.entities.risers ?? O].map((a) => ({ ...a }));
    for (; o.length < 3; ) o.push({ ...O[o.length] });
    o[t][e] = i || void 0, r.entities.risers = o, this.emit(r);
  }
  updateRoom(t, e, i, r) {
    const o = this.clone();
    o.rooms ??= {};
    const a = [...o.rooms[t] ?? []].map((s) => ({ ...s }));
    let l = a.find((s) => s.id === e);
    l || (l = { id: e }, a.push(l)), i === "target" || i === "tolerance" ? l[i] = r === "" ? void 0 : Number(r) : l[i] = r || void 0, o.rooms[t] = a, this.emit(o);
  }
  updateCurvePoint(t, e, i) {
    const r = this.clone(), o = [...r.heating_curve?.points ?? [{}, {}, {}, {}]].map((a) => ({ ...a }));
    o[t][e] = i || void 0, r.heating_curve = { points: o }, this.emit(r);
  }
  updateCurveGuide(t, e) {
    const i = this.clone();
    i.heating_curve = { ...i.heating_curve ?? {}, [t]: e || void 0 }, this.emit(i);
  }
  updateCurveEntity(t, e) {
    const i = this.clone(), r = [...i.heating_curve?.points ?? [{ outside: -15 }, { outside: -5 }, { outside: 5 }, { outside: 15 }]].map((o) => ({ ...o }));
    r[t].entity = e || void 0, i.heating_curve = { points: r }, this.emit(i);
  }
  addCurvePoint() {
    const t = this.clone(), e = [...t.heating_curve?.points ?? []];
    e.push({}), t.heating_curve = { points: e }, this.emit(t);
  }
  removeCurvePoint(t) {
    const e = this.clone(), i = [...e.heating_curve?.points ?? []];
    i.length <= 2 || (i.splice(t, 1), e.heating_curve = { points: i }, this.emit(e));
  }
  curveEditor() {
    const t = this._config?.heating_curve?.points ?? [{}, {}, {}, {}];
    return h`<details class="curve-editor"><summary>Krzywa grzewcza</summary><p>Wybierz encję temperatury zewnętrznej i encję zasilania CO z integracji Neoheat dla każdego punktu.</p><div class="curve-guides"><label>Aktualna temperatura zewnętrzna — linia pionowa<ha-entity-picker .hass=${this.hass} .value=${this._config?.heating_curve?.current_outside_entity ?? ""} @value-changed=${(e) => this.updateCurveGuide("current_outside_entity", e.detail.value)} allow-custom-entity></ha-entity-picker></label><label>Aktualna temperatura zadana CO — linia pozioma<ha-entity-picker .hass=${this.hass} .value=${this._config?.heating_curve?.current_supply_entity ?? ""} @value-changed=${(e) => this.updateCurveGuide("current_supply_entity", e.detail.value)} allow-custom-entity></ha-entity-picker></label></div><div class="curve-points">${t.map((e, i) => h`<fieldset><legend>Punkt ${i + 1}</legend><label>Temperatura zewnętrzna — encja<ha-entity-picker .hass=${this.hass} .value=${e.outside_entity ?? ""} @value-changed=${(r) => this.updateCurvePoint(i, "outside_entity", r.detail.value)} allow-custom-entity></ha-entity-picker></label><label>Zasilanie CO — encja<ha-entity-picker .hass=${this.hass} .value=${e.entity ?? ""} @value-changed=${(r) => this.updateCurveEntity(i, r.detail.value)} allow-custom-entity></ha-entity-picker></label><button type="button" ?disabled=${t.length <= 2} @click=${() => this.removeCurvePoint(i)}>Usuń punkt</button></fieldset>`)}</div><button type="button" @click=${() => this.addCurvePoint()}>＋ Dodaj punkt krzywej</button></details>`;
  }
  picker(t, e, i = !1) {
    const r = this._config?.entities ?? {}, o = h`<label>${t}${i ? h` <small>opcjonalnie</small>` : u}<ha-entity-picker .hass=${this.hass} .value=${r[e] ?? ""} @value-changed=${(a) => this.updateEntity(e, a.detail.value)} allow-custom-entity></ha-entity-picker></label>`;
    return e === "fan_speed" ? h`${this.picker("Wentylator 1 — RPM", "fan1_speed", !0)}${this.picker("Wentylator 2 — RPM", "fan2_speed", !0)}` : e === "circulation_status" ? h`${o}${this.picker("Stan pompy obiegowej P2", "circulation2_status", !0)}` : o;
  }
  select(t, e, i) {
    return h`<label>${t}<select .value=${e} @change=${(r) => i(r.target.value)}>${Xt.map(([r, o]) => h`<option value=${r}>${o}</option>`)}</select></label>`;
  }
  roomEditor(t) {
    const e = this._config?.rooms?.[t] ?? [];
    return h`${t === "ground" ? this.curveEditor() : u}<details><summary>${I[t].name} — pokoje i czujniki</summary><div class="rooms">${I[t].rooms.filter((i) => i.sensor !== !1).map((i) => {
      const r = e.find((o) => o.id === i.id) ?? { id: i.id };
      return h`<fieldset><legend>${r.name ?? i.name}</legend><label>Nazwa<input .value=${r.name ?? ""} placeholder=${i.name} @input=${(o) => this.updateRoom(t, i.id, "name", o.target.value)}></label><label>Encja temperatury<ha-entity-picker .hass=${this.hass} .value=${r.entity ?? ""} @value-changed=${(o) => this.updateRoom(t, i.id, "entity", o.detail.value)} allow-custom-entity></ha-entity-picker></label><div class="two"><label>Temperatura zadana<input type="number" step="0.1" .value=${r.target?.toString() ?? ""} @input=${(o) => this.updateRoom(t, i.id, "target", o.target.value)}></label><label>Tolerancja °C<input type="number" step="0.1" min="0" .value=${r.tolerance?.toString() ?? ""} @input=${(o) => this.updateRoom(t, i.id, "tolerance", o.target.value)}></label></div></fieldset>`;
    })}</div></details>`;
  }
  render() {
    const t = this._config ?? {}, i = (t.entities ?? {}).risers ?? O;
    return h`<div class="editor"><details open><summary>Układ i prezentacja</summary><div class="section-body"><label>Szablon<select .value=${t.layout ?? "central"} @change=${(r) => this.updateRoot("layout", r.target.value)}><option value="central">Centralny rzut i panel CO</option><option value="floors_over_co">Dwa rzuty nad instalacją</option></select></label>${t.layout !== "floors_over_co" ? this.select("Kondygnacja początkowa", t.floor ?? "ground", (r) => this.updateRoot("floor", r)) : h`<div class="two">${this.select("Lewy rzut", t.floors?.[0] ?? "ground", (r) => this.updateFloor(0, r))}${this.select("Prawy rzut", t.floors?.[1] ?? "upper", (r) => this.updateFloor(1, r))}</div>`}<label>Precyzja odczytów<select .value=${String(t.precision ?? 1)} @change=${(r) => this.updateRoot("precision", r.target.value)}><option value="0">0 miejsc po przecinku</option><option value="1">1 miejsce po przecinku</option><option value="2">2 miejsca po przecinku</option><option value="3">3 miejsca po przecinku</option></select></label></div></details><details open><summary>Główne czujniki</summary><div class="section-body">${this.picker("Temperatura zewnętrzna", "outside")}${this.picker("CWU", "hot_water")}${this.picker("Stan pompy", "pump_status", !0)}${this.picker("Prędkość wentylatorów", "fan_speed", !0)}${this.picker("Stan pompy obiegowej P1", "circulation_status", !0)}</div></details><details open><summary>Pompa i bufor</summary><div class="section-body">${this.picker("Zasilanie pompy", "pump_supply")}${this.picker("Powrót pompy", "pump_return")}${this.picker("Bufor — góra", "buffer_top")}${this.picker("Bufor — środek", "buffer_middle")}${this.picker("Bufor — dół", "buffer_bottom")}${this.picker("Wspólne zasilanie CO", "central_supply", !0)}${this.picker("Wspólny powrót CO", "central_return", !0)}</div></details><details open><summary>Trzy piony ogrzewania</summary><div class="section-body"><div class="risers">${[0, 1, 2].map((r) => {
      const o = i[r] ?? O[r];
      return h`<fieldset><legend>Pion ${r + 1}</legend><label>Nazwa<input .value=${o.name ?? ""} placeholder=${`Pion ${r + 1}`} @input=${(a) => this.updateRiser(r, "name", a.target.value)}></label><label>Zasilanie<ha-entity-picker .hass=${this.hass} .value=${o.supply ?? ""} @value-changed=${(a) => this.updateRiser(r, "supply", a.detail.value)} allow-custom-entity></ha-entity-picker></label><label>Powrót<ha-entity-picker .hass=${this.hass} .value=${o.return ?? ""} @value-changed=${(a) => this.updateRiser(r, "return", a.detail.value)} allow-custom-entity></ha-entity-picker></label></fieldset>`;
    })}</div></div></details><details><summary>Pomieszczenia</summary><div class="section-body">${this.roomEditor("ground")}${this.roomEditor("upper")}${this.roomEditor("basement")}</div></details>`;
  }
  static styles = ht`.editor{display:grid;gap:14px;padding:12px;max-width:680px}label{display:grid;gap:5px;font-size:14px}small,p{color:var(--secondary-text-color)}p{font-size:13px;margin:10px 0}select,input{box-sizing:border-box;width:100%;padding:9px;border-radius:6px;border:1px solid var(--divider-color);background:var(--card-background-color);color:var(--primary-text-color);font:inherit}button{padding:9px 12px;border:1px solid var(--divider-color);border-radius:6px;background:var(--card-background-color);color:var(--primary-text-color);cursor:pointer}button:disabled{opacity:.5;cursor:not-allowed}.section-body{display:grid;gap:14px;margin-top:12px}.curve-guides{display:grid;grid-template-columns:1fr;gap:10px}.two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.risers{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}fieldset{border:1px solid var(--divider-color);border-radius:8px;display:grid;gap:9px;padding:10px;min-width:0}legend{padding:0 4px;font-weight:600}details{border:1px solid var(--divider-color);border-radius:8px;padding:10px}summary{cursor:pointer;font-weight:600}.rooms,.curve-points{display:grid;gap:10px;margin-top:12px}.curve-editor{display:grid;gap:8px}@media(max-width:560px){.two,.risers{grid-template-columns:1fr}}`;
}
customElements.define("dom-heat-card-editor", Qt);
const te = "dom-heat-card", ee = {
  ground: { biuro: "office", salon: "living", hall: "hall", "korytarz-1": "corridor", kuchnia: "kitchen" },
  upper: { lazienka: "bathroom", "sypialnia-1": "bedroom_1", "korytarz-2": "corridor", "sypialnia-2": "bedroom_2", "sypialnia-3": "bedroom_3", garderoba: "wardrobe" },
  basement: { lazienka: "bathroom", "pom-gosp-1": "utility", silownia: "gym", magazyn: "storage", "pom-gosp-2": "utility_2", korytarz: "corridor", garaz: "garage" }
}, ie = {
  ground: { biuro: [129, 175], salon: [579, 265], hall: [129, 385], "korytarz-1": [328, 385], kuchnia: [380, 545] },
  upper: { lazienka: [142.5, 265], "sypialnia-1": [587.5, 160], "korytarz-2": [350, 370], "sypialnia-2": [587.5, 370], "sypialnia-3": [265, 545], garderoba: [625, 545] },
  basement: { lazienka: [105, 155], "pom-gosp-1": [240, 120], silownia: [600, 255], magazyn: [70, 355], "pom-gosp-2": [205, 355], korytarz: [375, 320], garaz: [380, 535] }
}, re = {
  horizontal: { box: "0 0 1300 660", values: { "pc-supply": [290, 190], "pc-return": [290, 335], "buffer-top": [490, 226], "buffer-middle": [490, 291], "buffer-bottom": [490, 356], cwu: [410, 552], "riser-1-supply": [810, 181], "riser-1-return": [810, 414], "riser-2-supply": [1e3, 181], "riser-2-return": [1e3, 414], "riser-3-supply": [1190, 181], "riser-3-return": [1190, 414] } },
  column: { box: "0 0 500 790", values: { "pc-supply": [135, 164], "pc-return": [365, 164], "buffer-top": [154, 307], "buffer-middle": [154, 375], "buffer-bottom": [154, 440], cwu: [376, 380], "riser-1-supply": [86, 620], "riser-1-return": [86, 662], "riser-2-supply": [251, 620], "riser-2-return": [251, 662], "riser-3-supply": [416, 620], "riser-3-return": [416, 662] } }
}, dt = { layout: "central", floor: "ground", floors: ["ground", "upper"], precision: 1 };
class oe extends M {
  static properties = { hass: { attribute: !1 }, _config: { state: !0 }, selectedFloor: { state: !0 }, displayMode: { state: !0 } };
  constructor() {
    super(), this.selectedFloor = "ground", this.displayMode = "home", this.statsPeriod = "day";
  }
  setConfig(t) {
    if (!t || t.type !== "custom:dom-heat-card") throw new Error("Wymagany jest typ: custom:dom-heat-card");
    if (t.layout && !["central", "floors_over_co"].includes(t.layout)) throw new Error("layout musi być: central albo floors_over_co");
    if (t.precision !== void 0 && (!Number.isInteger(t.precision) || t.precision < 0 || t.precision > 3)) throw new Error("precision musi być liczbą całkowitą od 0 do 3");
    this._config = { ...dt, ...t }, this.selectedFloor = t.floor ?? "ground";
  }
  static getConfigElement() {
    return document.createElement("dom-heat-card-editor");
  }
  static getStubConfig() {
    return { type: "custom:dom-heat-card", layout: "central", demo: !0 };
  }
  getCardSize() {
    return 9;
  }
  getGridOptions() {
    return { columns: "full", min_columns: 6, min_rows: 7, rows: "auto" };
  }
  get config() {
    return this._config ?? { type: "custom:dom-heat-card", ...dt };
  }
  get e() {
    return this.config.entities ?? {};
  }
  val(t) {
    return Yt(this.hass, t, this.config.precision ?? 1);
  }
  demo(t, e = "—") {
    const i = this.val(t);
    return this.config.demo && i.value === void 0 ? e : i.text;
  }
  moreInfo(t) {
    t && this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: t }, bubbles: !0, composed: !0 }));
  }
  isRunning(t) {
    const e = t ? this.hass?.states[t]?.state.toLowerCase() : void 0;
    return !!(e && ["on", "running", "heating", "heat", "true", "1"].includes(e));
  }
  roomConfig(t, e) {
    return this.config.rooms?.[t]?.find((i) => i.id === e);
  }
  roomValue(t, e) {
    const i = this.roomConfig(t, e.id);
    return { config: i, value: this.val(i?.entity), name: i?.name ?? e.name };
  }
  tone(t) {
    if (t.value.value === void 0 || t.config?.target === void 0) return "neutral";
    const e = t.config.tolerance ?? 0.5;
    return t.value.value > t.config.target + e ? "warm" : t.value.value < t.config.target - e ? "cool" : "neutral";
  }
  floorPlan(t) {
    const e = I[t], i = Gt[t].replace(/(<text id="value-[^"]+")/g, '$1 opacity="0"');
    return h`<section class="floor asset-floor" aria-label=${e.name}><div class="floor-title">${e.name}</div><div class="asset-canvas">${lt(i)}<svg class="asset-values" viewBox="0 0 760 600" aria-label=${`Temperatury: ${e.name}`}>${Object.entries(ie[t]).map(([r, o]) => {
      const a = ee[t][r], l = e.rooms.find((f) => f.id === a), c = (l ? this.roomValue(t, l) : void 0)?.config?.entity;
      return x`<text class=${c ? "asset-value clickable" : "asset-value"} x=${o[0]} y=${o[1]} @click=${() => this.moreInfo(c)}>${this.demo(c, "—")}</text>`;
    })}</svg></div></section>`;
  }
  metric(t, e, i = "") {
    const r = this.val(e);
    return h`<button class=${`metric ${i}`} ?disabled=${!e} @click=${() => this.moreInfo(e)}><span>${t}</span><strong>${this.config.demo && r.value === void 0 ? "—" : r.text}</strong></button>`;
  }
  topBar() {
    const t = this.config.layout === "central";
    return h`<header class="header"><div><div class="eyebrow">${t ? "WIDOK ŁĄCZONY" : "INSPIRACJA PRZYKŁADEM"}</div><h2>${t ? "Centralny rzut i pasek CO" : "Dwa rzuty nad instalacją"}</h2></div><div class="head-metrics">${this.metric("Na zewnątrz", this.e.outside)}${this.e.pump_status ? h`<button class="status" @click=${() => this.moreInfo(this.e.pump_status)}><span>Pompa</span><strong>${this.hass?.states[this.e.pump_status]?.state ?? "Niedostępny"}</strong></button>` : u}</div></header>`;
  }
  schemeArt() {
    return x`<svg class="scheme-art" viewBox="0 0 1000 390" preserveAspectRatio="none" aria-hidden="true">
    <defs><marker id="heat-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="var(--line-supply)"></path></marker><marker id="return-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="var(--line-return)"></path></marker></defs>
    <path class="pipe supply-pipe" d="M125 160 H325 C350 160 350 160 375 160 H865"></path><path class="pipe return-pipe" d="M865 276 H375 C350 276 350 276 325 276 H125"></path>
    <path class="flow supply-flow" d="M175 160 H300 M420 160 H510 M640 160 H800" marker-end="url(#heat-arrow)"></path><path class="flow return-flow" d="M800 276 H650 M510 276 H420 M300 276 H175" marker-end="url(#return-arrow)"></path>
    <path class="branch supply-pipe" d="M535 160 V98 H625"></path><path class="branch return-pipe" d="M625 306 H535 V276"></path>
    <g class="fan"><circle cx="80" cy="168" r="28"></circle><path d="M80 140 C100 153 99 178 80 181 C61 178 60 153 80 140 M52 184 C72 171 97 181 94 201 C79 211 59 202 52 184 M108 184 C101 202 81 211 66 201 C63 181 88 171 108 184"></path></g>
    <g class="buffer-art"><ellipse cx="350" cy="113" rx="61" ry="17"></ellipse><path d="M289 113 V295 C289 318 411 318 411 295 V113"></path><ellipse cx="350" cy="295" rx="61" ry="17"></ellipse><path d="M302 175 H398 M302 230 H398"></path></g>
    <g class="boiler-art"><ellipse cx="580" cy="128" rx="43" ry="13"></ellipse><path d="M537 128 V260 C537 276 623 276 623 260 V128"></path><ellipse cx="580" cy="260" rx="43" ry="13"></ellipse></g>
    <g class="riser-art"><path d="M720 160 V278 M790 160 V278 M860 160 V278"></path><circle cx="720" cy="160" r="7"></circle><circle cx="790" cy="160" r="7"></circle><circle cx="860" cy="160" r="7"></circle></g>
  </svg>`;
  }
  motionOverlay() {
    const t = this.e, e = this.val(t.fan1_speed ?? t.fan_speed), i = this.val(t.fan2_speed), r = (e.value ?? 0) > 0, o = (i.value ?? 0) > 0, a = this.isRunning(t.circulation_status), l = this.isRunning(t.circulation2_status), s = this.isRunning(t.pump_status) || a;
    return x`<svg class="motion-overlay" viewBox="0 0 1300 660" aria-label="Pompy obiegowe i przepływ"><text class="diagram-label" x="290" y="150">Zasilanie PC</text><text class="diagram-label" x="290" y="295">Powrót PC</text><text class="diagram-label" x="445" y="465">CWU</text><g class=${`heat-fan ${t.fan1_speed ?? t.fan_speed ? "clickable" : ""}`} @click=${() => this.moreInfo(t.fan1_speed ?? t.fan_speed)}><g transform="translate(120 228)"><g class=${r ? "rotating" : ""}><circle r="30" class="rotor-ring"></circle><path d="M0-25V25M-25 0H25M-18-18L18 18M18-18L-18 18" class="rotor-blades"></path></g></g><text class="fan-speed" x="48" y="235">${t.fan1_speed ?? t.fan_speed ? e.text : ""}</text></g><g class=${`heat-fan ${t.fan2_speed ? "clickable" : ""}`} @click=${() => this.moreInfo(t.fan2_speed)}><g transform="translate(120 312)"><g class=${o ? "rotating" : ""}><circle r="30" class="rotor-ring"></circle><path d="M0-25V25M-25 0H25M-18-18L18 18M18-18L-18 18" class="rotor-blades"></path></g></g><text class="fan-speed" x="48" y="319">${t.fan2_speed ? i.text : ""}</text></g><g class=${`p2-pump ${t.circulation2_status ? "clickable" : ""}`} @click=${() => this.moreInfo(t.circulation2_status)}><g class=${l ? "rotating" : ""}><circle cx="390" cy="210" r="25"></circle><path d="M390 190V230M370 210H410M376 196L404 224M404 196L376 224"></path></g><text x="390" y="252">P2</text></g><g class=${`p1-pump ${t.circulation_status ? "clickable" : ""}`} @click=${() => this.moreInfo(t.circulation_status)}><g class=${a ? "rotating" : ""}><circle cx="650" cy="210" r="25"></circle><path d="M650 190V230M630 210H670M636 196L664 224M664 196L636 224"></path></g><text x="650" y="252">P1</text></g>${l ? x`<g class="flow-dots"><path class="dot-path hot" d="M180 210H420"></path><path class="dot-path cold" d="M420 350H180"></path></g>` : u}${s ? x`<g class="flow-dots"><path class="dot-path hot" d="M560 210H1190M810 210V246M1000 210V246M1190 210V246"></path><path class="dot-path cold" d="M1190 350H560M810 315V350M1000 315V350M1190 315V350"></path></g>` : u}</svg>`;
  }
  hydronic() {
    const t = this.e, e = t.risers ?? [{ name: "Pion 1" }, { name: "Pion 2" }, { name: "Pion 3" }], i = { "pc-supply": t.pump_supply, "pc-return": t.pump_return, "buffer-top": t.buffer_top, "buffer-middle": t.buffer_middle, "buffer-bottom": t.buffer_bottom, cwu: t.hot_water, "riser-1-supply": e[0]?.supply, "riser-1-return": e[0]?.return, "riser-2-supply": e[1]?.supply, "riser-2-return": e[1]?.return, "riser-3-supply": e[2]?.supply, "riser-3-return": e[2]?.return }, r = this.config.layout === "central" && this.displayMode === "home" ? "column" : "horizontal", o = re[r];
    let a = qt[r].replace(/(<text id="value-[^"]+")/g, '$1 opacity="0"');
    return r === "horizontal" && (a = a.replace(/<text x="290" y="171"[^>]*>[^<]*<\/text>/, "").replace(/<text x="290" y="318"[^>]*>[^<]*<\/text>/, "").replace(/<text x="410\.0" y="455"[^>]*>CWU<\/text>/, "")), h`<section class=${`hydronic asset-heating ${r}`} aria-label="Instalacja centralnego ogrzewania"><div class="asset-canvas">${lt(a)}${r === "horizontal" ? this.motionOverlay() : u}<svg class="asset-values" viewBox=${o.box} aria-label="Bieżące temperatury CO">${Object.entries(o.values).map(([l, s]) => {
      const c = i[l];
      return x`<text class=${c ? "asset-value clickable" : "asset-value"} x=${s[0]} y=${s[1]} @click=${() => this.moreInfo(c)}>${this.demo(c, "—")}</text>`;
    })}</svg></div></section>`;
  }
  curvePanel() {
    const t = [...this.config.heating_curve?.points ?? []].map((d) => ({ ...d, outside: d.outside_entity ? this.val(d.outside_entity).value : d.outside, supply: d.entity ? this.val(d.entity).value : void 0 })).filter((d) => Number.isFinite(d.outside) && Number.isFinite(d.supply)).sort((d, w) => d.outside - w.outside), e = this.val(this.e.outside), i = this.val(this.e.pump_supply), r = 920, o = 420, a = 76, l = 32, s = 38, c = 62, f = Math.min(-20, ...t.map((d) => d.outside), e.value ?? 20), p = Math.max(20, ...t.map((d) => d.outside), e.value ?? -20), m = Math.min(15, ...t.map((d) => d.supply), i.value ?? 55), v = Math.max(55, ...t.map((d) => d.supply), i.value ?? 15), g = (d) => a + (d - f) / (p - f || 1) * (r - a - l), k = (d) => o - c - (d - m) / (v - m || 1) * (o - s - c), xt = t.map((d) => `${g(d.outside)},${k(d.supply)}`).join(" ");
    return h`<section class="curve-panel"><div class="section-title"><div><b>Krzywa grzewcza</b><span>Punkty odczytane z encji Neoheat</span></div><span>Aktualnie: ${e.text} / ${i.text}</span></div>${t.length >= 2 ? x`<svg class="curve-chart" viewBox="0 0 ${r} ${o}" aria-label="Wykres krzywej grzewczej"><line class="axis" x1=${a} y1=${o - c} x2=${r - l} y2=${o - c}></line><line class="axis" x1=${a} y1=${s} x2=${a} y2=${o - c}></line>${[0, 0.25, 0.5, 0.75, 1].map((d) => {
      const w = s + d * (o - s - c), L = v - d * (v - m);
      return x`<g><line class="grid" x1=${a} y1=${w} x2=${r - l} y2=${w}></line><text class="axis-label" x=${a - 12} y=${w + 5}>${L.toFixed(0)}°</text></g>`;
    })}${[0, 0.25, 0.5, 0.75, 1].map((d) => {
      const w = a + d * (r - a - l), L = f + d * (p - f);
      return x`<text class="axis-label" x=${w} y=${o - 28}>${L.toFixed(0)}°</text>`;
    })}<polyline class="curve-line" points=${xt}></polyline>${t.map((d) => x`<g><circle class="curve-point" cx=${g(d.outside)} cy=${k(d.supply)} r="7" @click=${() => this.moreInfo(d.entity)}></circle><text class="point-label" x=${g(d.outside)} y=${k(d.supply) - 14}>${d.supply}°</text></g>`)}${e.value !== void 0 && i.value !== void 0 ? x`<g class="current-guides"><line class="current-guide" x1=${g(e.value)} y1=${s} x2=${g(e.value)} y2=${o - c}></line><line class="current-guide" x1=${a} y1=${k(i.value)} x2=${r - l} y2=${k(i.value)}></line><text class="current-guide-label" x=${g(e.value)} y=${s - 10}>${e.text}</text><text class="current-guide-label" x=${r - l - 4} y=${k(i.value) - 8}>${i.text}</text><circle class="current-point" cx=${g(e.value)} cy=${k(i.value)} r="8" @click=${() => this.moreInfo(this.e.pump_supply)}></circle></g>` : u}<text class="axis-title" x=${r / 2} y=${o - 4}>Na zewnątrz</text><text class="axis-title" transform="translate(18 ${o / 2}) rotate(-90)">Zasilanie CO</text></svg>` : h`<div class="curve-empty">Przypisz co najmniej dwie encje Neoheat do punktów krzywej w edytorze karty.</div>`}</section>`;
  }
  viewSwitch() {
    return h`<footer><div class="view-switch"><button class=${this.displayMode === "home" ? "active" : ""} @click=${() => this.displayMode = "home"}>Dom + CO</button><button class=${this.displayMode === "heating" ? "active" : ""} @click=${() => this.displayMode = "heating"}>Pełny układ CO</button><button class=${this.displayMode === "curve" ? "active" : ""} @click=${() => this.displayMode = "curve"}>Krzywa grzewcza</button><button class=${this.displayMode === "stats" ? "active" : ""} @click=${() => this.displayMode = "stats"}>Statystyki</button></div><small>Podgląd temperatur · rzut poglądowy, bez skali</small></footer>`;
  }
  statisticsPanel() {
    const t = { day: "Dziennie", week: "Tygodniowo", month: "Miesi�cznie", year: "Rocznie" };
    return h`<section class="stats-panel"><div class="section-title"><div><b>Statystyki pracy</b><span>Home Assistant recorder</span></div><select .value=${this.statsPeriod} @change=${(e) => {
      this.statsPeriod = e.target.value;
    }}>${Object.entries(t).map(([e, i]) => h`<option value=${e}>${i}</option>`)}</select></div><div class="stats-grid">${["Czas grzania CWU", "Czas grzania CO", "Czas pracy spr�arki", "Liczba za��cze� spr�arki", "Pr�dko�� 1 � czas pracy", "Pr�dko�� 2 � czas pracy", "Pr�dko�� 3 � czas pracy"].map((e) => h`<article><span>${e}</span><b>�</b><small>Brak danych historycznych</small></article>`)}</div><p class="stats-note">Statystyki wymagaj� encji diagnostycznych spr�arki i historii z integracji Neoheat.</p></section>`;
  }
  render() {
    if (!this._config) return h``;
    const t = this.config, e = t.layout === "central" ? h`<nav aria-label="Wybór kondygnacji">${["basement", "ground", "upper"].map((r) => h`<button class=${this.selectedFloor === r ? "active" : ""} @click=${() => this.selectedFloor = r}>${I[r].name}</button>`)}</nav><div class="central-content">${this.floorPlan(this.selectedFloor)}${this.hydronic()}</div>` : h`<div class="two-floors">${this.floorPlan(t.floors?.[0] ?? "ground")}${this.floorPlan(t.floors?.[1] ?? "upper")}</div>${this.hydronic()}`, i = this.displayMode === "home" ? e : this.displayMode === "curve" ? this.curvePanel() : this.displayMode === "stats" ? this.statisticsPanel() : h`<section class="heating-panel"><div class="section-title"><b>Układ CO</b><span>Temperatury w °C</span></div>${this.hydronic()}</section>`;
    return h`<ha-card><main class=${`${t.layout === "floors_over_co" ? "floors-layout" : "central-layout"} ${this.displayMode === "heating" ? "heating-view" : ""}`}>${this.topBar()}${i}${this.viewSwitch()}</main></ha-card>`;
  }
  static styles = ht`
    :host{display:block;color:var(--primary-text-color);--line-supply:var(--orange-color,#d85b16);--line-return:var(--info-color,#087faa);--panel:var(--secondary-background-color);--wall:var(--divider-color);--room:var(--card-background-color);font-family:var(--paper-font-body1_-_font-family,Roboto,sans-serif)}ha-card{overflow:hidden;background:var(--ha-card-background,var(--card-background-color));color:inherit}.central-layout,.floors-layout{padding:clamp(18px,2.4vw,30px);display:grid;gap:18px}.header{display:flex;justify-content:space-between;gap:20px;align-items:start}.eyebrow{font-size:11px;letter-spacing:1.25px;color:var(--secondary-text-color)}h2{font-size:clamp(22px,2.1vw,30px);margin:6px 0 0;line-height:1.1}.head-metrics{display:flex;gap:8px;align-items:start}.header .metric{background:transparent;border:0;padding:5px;min-width:auto;display:flex;gap:5px;align-items:baseline}.header .metric span{font-size:14px;color:var(--primary-text-color)}.header .metric strong{font-size:22px}.metric,.status{appearance:none;border:1px solid var(--divider-color);background:var(--panel);color:inherit;border-radius:10px;padding:8px 11px;text-align:left;min-width:104px;display:grid;gap:2px;cursor:pointer}.metric:disabled{cursor:default;opacity:.72}.metric span,.status span{font-size:11px;color:var(--secondary-text-color)}.metric strong,.status strong{font-size:clamp(14px,1.5vw,20px);white-space:nowrap}.supply strong{color:var(--line-supply)}.return strong{color:var(--line-return)}nav{display:flex;gap:8px;margin:3px 0 -2px}nav button,footer button{border:1px solid var(--divider-color);border-radius:9px;background:var(--card-background-color);color:inherit;padding:10px 16px;font:inherit;cursor:pointer}nav button.active,footer button.active{background:var(--primary-color);color:var(--text-primary-color,#fff);border-color:var(--primary-color)}.central-content{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(280px,1fr);gap:16px;align-items:stretch}.floor{background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:16px;padding:16px;min-width:0}.floor-title{font-size:16px;font-weight:650;margin-bottom:10px}.floor svg{width:100%;display:block;aspect-ratio:1.55}.room rect{fill:var(--panel);stroke:var(--wall);stroke-width:1}.room.warm rect{fill:color-mix(in srgb,var(--line-supply) 17%,var(--room))}.room.cool rect{fill:color-mix(in srgb,var(--line-return) 13%,var(--room))}.room text{fill:var(--primary-text-color);text-anchor:middle;pointer-events:none}.room-name{font-size:4px}.room-temp{font-size:5px;font-weight:bold}.room.clickable{cursor:pointer}.room.clickable:focus rect{stroke:var(--primary-color);stroke-width:2}.hydronic{background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:16px;padding:18px;display:grid;grid-template-columns:1fr 22px 1fr;gap:10px;align-content:start;position:relative}.plant{border:1px solid var(--divider-color);border-radius:12px;padding:10px;display:grid;gap:6px;background:var(--card-background-color)}.pump{grid-column:1}.buffer{grid-column:3;border-radius:38%}.device-icon{font-size:34px;line-height:20px;color:var(--primary-color)}.lines{grid-column:2;grid-row:1;position:relative;min-height:150px}.lines i{position:absolute;height:3px;border-radius:8px;left:0;right:0}.supply-line{top:42%;background:var(--line-supply)}.return-line{top:58%;background:var(--line-return)}.hotwater{grid-column:1 / -1}.risers{grid-column:1 / -1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.riser{border-top:3px solid var(--line-supply);padding-top:6px;display:grid;gap:5px;min-width:0}.riser .metric{min-width:0;padding:6px}.common{grid-column:1/-1;display:flex;gap:8px;flex-wrap:wrap}.two-floors{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.floors-layout .hydronic{grid-template-columns:1fr 24px 1fr 1fr}.floors-layout .risers{grid-column:4;grid-row:1 / span 2;grid-template-columns:1fr}.floors-layout .hotwater{grid-column:3;grid-row:1}.floors-layout .common{grid-column:1 / 4}.heating-panel{display:grid;gap:16px;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:18px;padding:20px;min-height:340px}.section-title{display:flex;justify-content:space-between;color:var(--secondary-text-color);font-size:13px}.section-title b{font-size:16px;color:var(--primary-text-color)}.heating-view .hydronic{border:0;padding:16px 0;grid-template-columns:1fr 42px 1fr 1fr;align-items:center}.heating-view .pump{grid-column:1}.heating-view .buffer{grid-column:3}.heating-view .hotwater{grid-column:4;grid-row:1}.heating-view .risers{grid-column:1/-1;grid-row:2;grid-template-columns:repeat(3,minmax(0,1fr));margin-left:28%;}.heating-view .common{grid-row:3}footer{border-top:1px solid var(--divider-color);padding-top:14px;display:grid;justify-items:center;gap:9px}footer small{font-size:11px;color:var(--secondary-text-color)}.view-switch{display:flex;gap:8px}@media(max-width:700px){.header{display:grid;gap:10px}.central-content,.two-floors{grid-template-columns:1fr}.hydronic,.floors-layout .hydronic,.heating-view .hydronic{grid-template-columns:1fr 14px 1fr}.floors-layout .risers,.heating-view .risers{grid-column:1/-1;grid-row:auto;grid-template-columns:repeat(3,minmax(0,1fr));margin-left:0}.floors-layout .hotwater,.floors-layout .common,.heating-view .hotwater{grid-column:1/-1;grid-row:auto}.room-name{font-size:3.6px}.room-temp{font-size:4.5px}}@media(max-width:410px){.risers,.floors-layout .risers,.heating-view .risers{grid-template-columns:1fr}.metric{min-width:0}nav button,footer button{padding:8px 10px}.room-name{font-size:3.3px}.header .metric strong{font-size:18px}}
    .scheme-art{position:absolute;inset:12px;width:calc(100% - 24px);height:calc(100% - 24px);z-index:0;pointer-events:none;opacity:.82}.scheme-art .pipe{fill:none;stroke-width:3}.scheme-art .supply-pipe{stroke:var(--line-supply)}.scheme-art .return-pipe{stroke:var(--line-return)}.scheme-art .flow{fill:none;stroke-width:1.5;opacity:.8}.scheme-art .supply-flow{stroke:var(--line-supply)}.scheme-art .return-flow{stroke:var(--line-return)}.scheme-art .branch{fill:none;stroke-width:2}.scheme-art .fan,.scheme-art .buffer-art,.scheme-art .boiler-art,.scheme-art .riser-art{fill:var(--card-background-color);stroke:var(--divider-color);stroke-width:1.3}.scheme-art .fan path,.scheme-art .buffer-art path,.scheme-art .boiler-art path,.scheme-art .riser-art path{fill:none;stroke:var(--divider-color)}.scheme-art .riser-art circle{fill:var(--line-supply);stroke:none}.hydronic>*:not(.scheme-art){z-index:1}.central-content .scheme-art,.floors-layout:not(.heating-view) .scheme-art{opacity:.32}.heating-view .plant,.heating-view .risers{background:color-mix(in srgb,var(--card-background-color) 94%,transparent)}
    .asset-canvas{position:relative;width:100%;height:100%}.asset-canvas>svg:first-child{display:block;width:100%;height:100%}.asset-values{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.asset-value{font-family:var(--paper-font-body1_-_font-family,Roboto,sans-serif);font-size:34px;fill:var(--primary-text-color);text-anchor:middle;pointer-events:none}.asset-value.clickable{pointer-events:auto;cursor:pointer}.asset-value.clickable:hover{fill:var(--primary-color)}.asset-floor .asset-canvas{aspect-ratio:760 / 600}.asset-floor .asset-canvas>svg:first-child{position:absolute;inset:0}.asset-heating{display:block!important;padding:0!important;overflow:hidden;min-height:0;background:var(--card-background-color)}.asset-heating.column{aspect-ratio:500 / 790}.asset-heating.horizontal{aspect-ratio:1300 / 660}.asset-heating .asset-canvas{position:absolute;inset:0}.asset-heating .asset-canvas>svg:first-child{position:absolute;inset:0}.heating-view .asset-heating{border:0;background:transparent;aspect-ratio:1300 / 660}.heating-view .asset-value{font-size:30px}.central-content .asset-heating{align-self:start}.floors-layout:not(.heating-view) .asset-heating{margin-top:0}.central-content .asset-heating .asset-value{font-size:25px}@media(max-width:700px){.asset-heating.column{aspect-ratio:500 / 690}.asset-value{font-size:28px}.central-content .asset-heating .asset-value{font-size:26px}}
    :host{--dh-bg:var(--ha-card-background,var(--card-background-color));--dh-panel:var(--card-background-color);--dh-room:var(--secondary-background-color);--dh-ink:var(--primary-text-color);--dh-muted:var(--secondary-text-color);--dh-line:var(--divider-color);--dh-metal:var(--secondary-background-color);--dh-fan:var(--primary-color);--dh-hot:var(--line-supply);--dh-cold:var(--line-return)}
    .motion-overlay{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.motion-overlay .rotor-ring{fill:color-mix(in srgb,var(--dh-panel) 72%,transparent);stroke:var(--dh-ink);stroke-width:2}.motion-overlay .rotor-blades,.motion-overlay .p1-pump path{fill:none;stroke:var(--dh-ink);stroke-width:2.5;stroke-linecap:round}.motion-overlay .p1-pump circle{fill:var(--dh-panel);stroke:var(--dh-ink);stroke-width:2.5}.motion-overlay .p1-pump text{fill:var(--dh-ink);font:600 18px var(--paper-font-body1_-_font-family,Roboto,sans-serif);text-anchor:middle}.motion-overlay .p1-pump.clickable{pointer-events:auto;cursor:pointer}.motion-overlay .p1-pump.clickable:hover circle{stroke:var(--primary-color);stroke-width:4}.motion-overlay .dot-path{fill:none;stroke:var(--dh-flow-dot,#101820);stroke-width:7;stroke-linecap:round;stroke-dasharray:1 24;opacity:.9}.motion-overlay .dot-path.hot{stroke-dashoffset:0;animation:flow-hot 1.15s linear infinite}.motion-overlay .dot-path.cold{stroke-dashoffset:0;animation:flow-cold 1.15s linear infinite}.motion-overlay .dot-path.branch{stroke-width:5}.motion-overlay .rotating{transform-box:fill-box;transform-origin:center;animation:rotate-pump 1.1s linear infinite}@keyframes rotate-pump{to{transform:rotate(360deg)}}@keyframes flow-hot{to{stroke-dashoffset:-25}}@keyframes flow-cold{to{stroke-dashoffset:25}}@media(prefers-reduced-motion:reduce){.motion-overlay .rotating,.motion-overlay .dot-path{animation:none}}
    .motion-overlay .heat-fans.clickable{pointer-events:auto;cursor:pointer}.motion-overlay .heat-fans.clickable:hover .rotor-ring{stroke:var(--primary-color);stroke-width:4}.motion-overlay .fan-speed{fill:var(--dh-ink);font:600 17px var(--paper-font-body1_-_font-family,Roboto,sans-serif);text-anchor:middle}
    .motion-overlay .dot-path.cold{animation-name:flow-hot}
    .motion-overlay .p2-pump circle{fill:var(--dh-panel);stroke:var(--dh-ink);stroke-width:2.5}.motion-overlay .p2-pump path{fill:none;stroke:var(--dh-ink);stroke-width:2.5;stroke-linecap:round}.motion-overlay .p2-pump text{fill:var(--dh-ink);font:600 18px var(--paper-font-body1_-_font-family,Roboto,sans-serif);text-anchor:middle}.motion-overlay .p2-pump.clickable{pointer-events:auto;cursor:pointer}.motion-overlay .p2-pump.clickable:hover circle{stroke:var(--primary-color);stroke-width:4}
    .motion-overlay .heat-fan.clickable{pointer-events:auto;cursor:pointer}.motion-overlay .heat-fan.clickable:hover .rotor-ring{stroke:var(--primary-color);stroke-width:4}.motion-overlay .fan-speed{text-anchor:end}
    .motion-overlay .diagram-label{fill:var(--dh-muted);font:400 18px var(--paper-font-body1_-_font-family,Roboto,sans-serif);text-anchor:middle}.asset-heating.horizontal .asset-canvas{left:110px;right:0;width:auto}
    .curve-panel{background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:18px;padding:20px}.curve-panel .section-title{align-items:start}.curve-panel .section-title>div{display:grid;gap:4px}.curve-chart{display:block;width:100%;margin-top:12px}.curve-chart .axis{stroke:var(--primary-text-color);stroke-width:2}.curve-chart .grid{stroke:var(--divider-color);stroke-width:1}.curve-chart .axis-label,.curve-chart .axis-title{fill:var(--secondary-text-color);font:14px var(--paper-font-body1_-_font-family,Roboto,sans-serif);text-anchor:middle}.curve-chart .curve-line{fill:none;stroke:var(--primary-color);stroke-width:4;stroke-linejoin:round;stroke-linecap:round}.curve-chart .curve-point{fill:var(--card-background-color);stroke:var(--primary-color);stroke-width:4}.curve-chart .point-label{fill:var(--primary-text-color);font:14px var(--paper-font-body1_-_font-family,Roboto,sans-serif);text-anchor:middle}.curve-chart .current-guide{stroke:var(--primary-color);stroke-width:2;stroke-dasharray:8 7;opacity:.8}.curve-chart .current-guide-label{fill:var(--primary-color);font:600 13px var(--paper-font-body1_-_font-family,Roboto,sans-serif);text-anchor:middle}.curve-chart .current-point{fill:var(--line-supply);stroke:var(--card-background-color);stroke-width:4;cursor:pointer}.curve-empty{min-height:260px;display:grid;place-items:center;color:var(--secondary-text-color);text-align:center}
  `;
}
customElements.define(te, oe);
window.customCards = window.customCards || [];
window.customCards.push({ type: "dom-heat-card", name: "Dom Heat Card", description: "Temperatury domu i instalacji CO", preview: !0, documentationURL: "https://github.com/Pablos249/HA_Temperature_view" });
export {
  oe as DomHeatCard
};
