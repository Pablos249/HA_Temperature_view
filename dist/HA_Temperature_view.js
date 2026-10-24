const H = globalThis, V = H.ShadowRoot && (H.ShadyCSS === void 0 || H.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, L = /* @__PURE__ */ Symbol(), K = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== L) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (V && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = K.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && K.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ft = (o) => new nt(typeof o == "string" ? o : o + "", void 0, L), st = (o, ...t) => {
  const e = o.length === 1 ? o[0] : t.reduce((i, r, n) => i + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + o[n + 1], o[0]);
  return new nt(e, o, L);
}, ut = (o, t) => {
  if (V) o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), r = H.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = e.cssText, o.appendChild(i);
  }
}, Z = V ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return ft(e);
})(o) : o;
const { is: mt, defineProperty: xt, getOwnPropertyDescriptor: gt, getOwnPropertyNames: vt, getOwnPropertySymbols: yt, getPrototypeOf: wt } = Object, j = globalThis, F = j.trustedTypes, kt = F ? F.emptyScript : "", bt = j.reactiveElementPolyfillSupport, z = (o, t) => o, U = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? kt : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, at = (o, t) => !mt(o, t), G = { attribute: !0, type: String, converter: U, reflect: !1, useDefault: !1, hasChanged: at };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), j.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let k = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = G) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), r = this.getPropertyDescriptor(t, i, e);
      r !== void 0 && xt(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: r, set: n } = gt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(s) {
      this[e] = s;
    } };
    return { get: r, set(s) {
      const d = r?.call(this);
      n?.call(this, s), this.requestUpdate(t, d, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? G;
  }
  static _$Ei() {
    if (this.hasOwnProperty(z("elementProperties"))) return;
    const t = wt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(z("properties"))) {
      const e = this.properties, i = [...vt(e), ...yt(e)];
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
      for (const r of i) e.unshift(Z(r));
    } else t !== void 0 && e.push(Z(t));
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
    return ut(t, this.constructor.elementStyles), t;
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
      const n = (i.converter?.toAttribute !== void 0 ? i.converter : U).toAttribute(e, i.type);
      this._$Em = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, r = i._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const n = i.getPropertyOptions(r), s = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : U;
      this._$Em = r;
      const d = s.fromAttribute(e, n.type);
      this[r] = d ?? this._$Ej?.get(r) ?? d, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, r = !1, n) {
    if (t !== void 0) {
      const s = this.constructor;
      if (r === !1 && (n = this[t]), i ??= s.getPropertyOptions(t), !((i.hasChanged ?? at)(n, e) || i.useDefault && i.reflect && n === this._$Ej?.get(t) && !this.hasAttribute(s._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: r, wrapped: n }, s) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, s ?? e ?? this[t]), n !== !0 || s !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), r === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
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
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [r, n] of i) {
        const { wrapped: s } = n, d = this[r];
        s !== !0 || this._$AL.has(r) || d === void 0 || this.C(r, void 0, n, d);
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
k.elementStyles = [], k.shadowRootOptions = { mode: "open" }, k[z("elementProperties")] = /* @__PURE__ */ new Map(), k[z("finalized")] = /* @__PURE__ */ new Map(), bt?.({ ReactiveElement: k }), (j.reactiveElementVersions ??= []).push("2.1.2");
const D = globalThis, q = (o) => o, P = D.trustedTypes, J = P ? P.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, lt = "$lit$", x = `lit$${Math.random().toFixed(9).slice(2)}$`, dt = "?" + x, $t = `<${dt}>`, y = document, A = () => y.createComment(""), M = (o) => o === null || typeof o != "object" && typeof o != "function", B = Array.isArray, _t = (o) => B(o) || typeof o?.[Symbol.iterator] == "function", N = `[ 	
\f\r]`, _ = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Y = /-->/g, X = />/g, g = RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Q = /'/g, tt = /"/g, ht = /^(?:script|style|textarea|title)$/i, ct = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), f = ct(1), T = ct(2), w = /* @__PURE__ */ Symbol.for("lit-noChange"), c = /* @__PURE__ */ Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), v = y.createTreeWalker(y, 129);
function pt(o, t) {
  if (!B(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return J !== void 0 ? J.createHTML(t) : t;
}
const zt = (o, t) => {
  const e = o.length - 1, i = [];
  let r, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", s = _;
  for (let d = 0; d < e; d++) {
    const a = o[d];
    let l, p, h = -1, u = 0;
    for (; u < a.length && (s.lastIndex = u, p = s.exec(a), p !== null); ) u = s.lastIndex, s === _ ? p[1] === "!--" ? s = Y : p[1] !== void 0 ? s = X : p[2] !== void 0 ? (ht.test(p[2]) && (r = RegExp("</" + p[2], "g")), s = g) : p[3] !== void 0 && (s = g) : s === g ? p[0] === ">" ? (s = r ?? _, h = -1) : p[1] === void 0 ? h = -2 : (h = s.lastIndex - p[2].length, l = p[1], s = p[3] === void 0 ? g : p[3] === '"' ? tt : Q) : s === tt || s === Q ? s = g : s === Y || s === X ? s = _ : (s = g, r = void 0);
    const m = s === g && o[d + 1].startsWith("/>") ? " " : "";
    n += s === _ ? a + $t : h >= 0 ? (i.push(l), a.slice(0, h) + lt + a.slice(h) + x + m) : a + x + (h === -2 ? d : m);
  }
  return [pt(o, n + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class S {
  constructor({ strings: t, _$litType$: e }, i) {
    let r;
    this.parts = [];
    let n = 0, s = 0;
    const d = t.length - 1, a = this.parts, [l, p] = zt(t, e);
    if (this.el = S.createElement(l, i), v.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (r = v.nextNode()) !== null && a.length < d; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const h of r.getAttributeNames()) if (h.endsWith(lt)) {
          const u = p[s++], m = r.getAttribute(h).split(x), E = /([.?@])?(.*)/.exec(u);
          a.push({ type: 1, index: n, name: E[2], strings: m, ctor: E[1] === "." ? Mt : E[1] === "?" ? St : E[1] === "@" ? Ct : O }), r.removeAttribute(h);
        } else h.startsWith(x) && (a.push({ type: 6, index: n }), r.removeAttribute(h));
        if (ht.test(r.tagName)) {
          const h = r.textContent.split(x), u = h.length - 1;
          if (u > 0) {
            r.textContent = P ? P.emptyScript : "";
            for (let m = 0; m < u; m++) r.append(h[m], A()), v.nextNode(), a.push({ type: 2, index: ++n });
            r.append(h[u], A());
          }
        }
      } else if (r.nodeType === 8) if (r.data === dt) a.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = r.data.indexOf(x, h + 1)) !== -1; ) a.push({ type: 7, index: n }), h += x.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const i = y.createElement("template");
    return i.innerHTML = t, i;
  }
}
function $(o, t, e = o, i) {
  if (t === w) return t;
  let r = i !== void 0 ? e._$Co?.[i] : e._$Cl;
  const n = M(t) ? void 0 : t._$litDirective$;
  return r?.constructor !== n && (r?._$AO?.(!1), n === void 0 ? r = void 0 : (r = new n(o), r._$AT(o, e, i)), i !== void 0 ? (e._$Co ??= [])[i] = r : e._$Cl = r), r !== void 0 && (t = $(o, r._$AS(o, t.values), r, i)), t;
}
class At {
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
    const { el: { content: e }, parts: i } = this._$AD, r = (t?.creationScope ?? y).importNode(e, !0);
    v.currentNode = r;
    let n = v.nextNode(), s = 0, d = 0, a = i[0];
    for (; a !== void 0; ) {
      if (s === a.index) {
        let l;
        a.type === 2 ? l = new C(n, n.nextSibling, this, t) : a.type === 1 ? l = new a.ctor(n, a.name, a.strings, this, t) : a.type === 6 && (l = new Et(n, this, t)), this._$AV.push(l), a = i[++d];
      }
      s !== a?.index && (n = v.nextNode(), s++);
    }
    return v.currentNode = y, r;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class C {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, i, r) {
    this.type = 2, this._$AH = c, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
    t = $(this, t, e), M(t) ? t === c || t == null || t === "" ? (this._$AH !== c && this._$AR(), this._$AH = c) : t !== this._$AH && t !== w && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : _t(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== c && M(this._$AH) ? this._$AA.nextSibling.data = t : this.T(y.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: i } = t, r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = S.createElement(pt(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === r) this._$AH.p(e);
    else {
      const n = new At(r, this), s = n.u(this.options);
      n.p(e), this.T(s), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = et.get(t.strings);
    return e === void 0 && et.set(t.strings, e = new S(t)), e;
  }
  k(t) {
    B(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, r = 0;
    for (const n of t) r === e.length ? e.push(i = new C(this.O(A()), this.O(A()), this, this.options)) : i = e[r], i._$AI(n), r++;
    r < e.length && (this._$AR(i && i._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const i = q(t).nextSibling;
      q(t).remove(), t = i;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class O {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, r, n) {
    this.type = 1, this._$AH = c, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = n, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = c;
  }
  _$AI(t, e = this, i, r) {
    const n = this.strings;
    let s = !1;
    if (n === void 0) t = $(this, t, e, 0), s = !M(t) || t !== this._$AH && t !== w, s && (this._$AH = t);
    else {
      const d = t;
      let a, l;
      for (t = n[0], a = 0; a < n.length - 1; a++) l = $(this, d[i + a], e, a), l === w && (l = this._$AH[a]), s ||= !M(l) || l !== this._$AH[a], l === c ? t = c : t !== c && (t += (l ?? "") + n[a + 1]), this._$AH[a] = l;
    }
    s && !r && this.j(t);
  }
  j(t) {
    t === c ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Mt extends O {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === c ? void 0 : t;
  }
}
class St extends O {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== c);
  }
}
class Ct extends O {
  constructor(t, e, i, r, n) {
    super(t, e, i, r, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = $(this, t, e, 0) ?? c) === w) return;
    const i = this._$AH, r = t === c && i !== c || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, n = t !== c && (i === c || r);
    r && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Et {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    $(this, t);
  }
}
const Ht = D.litHtmlPolyfillSupport;
Ht?.(S, C), (D.litHtmlVersions ??= []).push("3.3.3");
const Pt = (o, t, e) => {
  const i = e?.renderBefore ?? t;
  let r = i._$litPart$;
  if (r === void 0) {
    const n = e?.renderBefore ?? null;
    i._$litPart$ = r = new C(t.insertBefore(A(), n), n, void 0, e ?? {});
  }
  return r._$AI(o), r;
};
const W = globalThis;
let b = class extends k {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Pt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return w;
  }
};
b._$litElement$ = !0, b.finalized = !0, W.litElementHydrateSupport?.({ LitElement: b });
const jt = W.litElementPolyfillSupport;
jt?.({ LitElement: b });
(W.litElementVersions ??= []).push("4.2.2");
const Ot = { CHILD: 2 }, Nt = (o) => (...t) => ({ _$litDirective$: o, values: t });
class Tt {
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
class I extends Tt {
  constructor(t) {
    if (super(t), this.it = c, t.type !== Ot.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === c || t == null) return this._t = void 0, this.it = t;
    if (t === w) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const e = [t];
    return e.raw = e, this._t = { _$litType$: this.constructor.resultType, strings: e, values: [] };
  }
}
I.directiveName = "unsafeHTML", I.resultType = 1;
class R extends I {
}
R.directiveName = "unsafeSVG", R.resultType = 2;
const it = Nt(R), Ut = '<svg xmlns="http://www.w3.org/2000/svg" width="760" height="600" viewBox="0 0 760 600" role="img" aria-label="rzut-parter" font-family="DejaVu Sans, Arial, sans-serif"><g id="room-parter-biuro"><rect x="20" y="20" width="218" height="240" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="129.0" y="120.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Biuro</text><text id="value-parter-biuro" x="129.0" y="175.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-schody"><rect x="238" y="20" width="180" height="240" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><path d="M252 40H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 60H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 80H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 100H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 120H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 140H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 160H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 180H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 200H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 220H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 240H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="286.0" y="126.0" width="84" height="28" rx="4" fill="var(--dh-panel, #ffffff)"/><text x="328.0" y="146.0" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Schody</text></g><g id="room-parter-salon"><rect x="418" y="20" width="322" height="420" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="579.0" y="210.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Salon</text><text id="value-parter-salon" x="579.0" y="265.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-hall"><rect x="20" y="260" width="218" height="180" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="129.0" y="330.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Hall</text><text id="value-parter-hall" x="129.0" y="385.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-korytarz-1"><rect x="238" y="260" width="180" height="180" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="328.0" y="330.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Korytarz I</text><text id="value-parter-korytarz-1" x="328.0" y="385.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-kuchnia"><rect x="20" y="440" width="720" height="140" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="380.0" y="490.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Kuchnia</text><text id="value-parter-kuchnia" x="380.0" y="545.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g></svg>', It = '<svg xmlns="http://www.w3.org/2000/svg" width="760" height="600" viewBox="0 0 760 600" role="img" aria-label="rzut-pietro" font-family="DejaVu Sans, Arial, sans-serif"><g id="room-pietro-lazienka"><rect x="20" y="20" width="245" height="420" rx="0" fill="var(--dh-warm, #f3e9dc)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="142.5" y="210.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Łazienka</text><text id="value-pietro-lazienka" x="142.5" y="265.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-schody"><rect x="265" y="20" width="170" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><path d="M279 40H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 60H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 80H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 100H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 120H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 140H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 160H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 180H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 200H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="308.0" y="111.0" width="84" height="28" rx="4" fill="var(--dh-panel, #ffffff)"/><text x="350.0" y="131.0" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Schody</text></g><g id="room-pietro-sypialnia-1"><rect x="435" y="20" width="305" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="587.5" y="105.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Sypialnia I</text><text id="value-pietro-sypialnia-1" x="587.5" y="160.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-korytarz-2"><rect x="265" y="230" width="170" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="350.0" y="315.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Korytarz II</text><text id="value-pietro-korytarz-2" x="350.0" y="370.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-sypialnia-2"><rect x="435" y="230" width="305" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="587.5" y="315.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Sypialnia II</text><text id="value-pietro-sypialnia-2" x="587.5" y="370.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-sypialnia-3"><rect x="20" y="440" width="490" height="140" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="265.0" y="490.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Sypialnia III</text><text id="value-pietro-sypialnia-3" x="265.0" y="545.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-garderoba"><rect x="510" y="440" width="230" height="140" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="625.0" y="490.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Garderoba</text><text id="value-pietro-garderoba" x="625.0" y="545.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g></svg>', Rt = '<svg xmlns="http://www.w3.org/2000/svg" width="760" height="600" viewBox="0 0 760 600" role="img" aria-label="rzut-piwnica" font-family="DejaVu Sans, Arial, sans-serif"><g id="room-piwnica-lazienka"><rect x="20" y="20" width="170" height="200" rx="0" fill="var(--dh-warm, #f3e9dc)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="105.0" y="100.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Łazienka</text><text id="value-piwnica-lazienka" x="105.0" y="155.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-pom-gosp-1"><rect x="190" y="20" width="100" height="130" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="240.0" y="65.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Pom.</text><text x="240.0" y="87.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">gosp.*</text><text id="value-piwnica-pom-gosp-1" x="240.0" y="120.0" fill="var(--dh-ink, #163344)" font-size="27" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-schody"><rect x="290" y="20" width="170" height="130" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><path d="M304 40H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 60H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 80H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 100H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 120H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="333.0" y="71.0" width="84" height="28" rx="4" fill="var(--dh-panel, #ffffff)"/><text x="375.0" y="91.0" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Schody</text></g><g id="room-piwnica-silownia"><rect x="460" y="20" width="280" height="400" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="600.0" y="200.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Siłownia</text><text id="value-piwnica-silownia" x="600.0" y="255.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-magazyn"><rect x="20" y="220" width="100" height="200" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="70.0" y="300.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Magazyn*</text><text id="value-piwnica-magazyn" x="70.0" y="355.0" fill="var(--dh-ink, #163344)" font-size="27" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-pom-gosp-2"><rect x="120" y="220" width="170" height="200" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="205.0" y="300.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Pom. gosp.*</text><text id="value-piwnica-pom-gosp-2" x="205.0" y="355.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-korytarz"><rect x="290" y="150" width="170" height="270" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="375.0" y="265.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Korytarz</text><text id="value-piwnica-korytarz" x="375.0" y="320.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-garaz"><rect x="20" y="420" width="720" height="160" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="380.0" y="480.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Garaż</text><text id="value-piwnica-garaz" x="380.0" y="535.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g></svg>', Vt = '<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="660" viewBox="0 0 1300 660" role="img" aria-label="uklad-co-poziomy" font-family="DejaVu Sans, Arial, sans-serif"><path d="M180 210H420" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M420 350H180" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M560 210H1190" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M560 350H1190" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M810 210V246" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M810 315V350" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1000 210V246" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1000 315V350" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1190 210V246" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1190 315V350" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M165 365V425H385V475" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M420 475V450H140V365" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><rect x="60" y="175" width="120" height="190" rx="12" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="69" y="185" width="102" height="170" rx="8" fill="var(--dh-panel, #ffffff)"/><circle cx="120.0" cy="228.2" r="38.4" fill="var(--dh-fan, #365365)"/><circle cx="120.0" cy="228.2" r="32.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="228.2" r="25.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="228.2" r="18.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><path d="M81.6 228.2L158.4 228.2" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M120.0 189.79999999999998L120.0 266.59999999999997" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 201.32L146.88 255.07999999999998" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 255.07999999999998L146.88 201.32" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="120.0" cy="228.2" r="6" fill="var(--dh-metal, #dbe5ec)"/><circle cx="120.0" cy="311.79999999999995" r="38.4" fill="var(--dh-fan, #365365)"/><circle cx="120.0" cy="311.79999999999995" r="32.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="311.79999999999995" r="25.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="311.79999999999995" r="18.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><path d="M81.6 311.79999999999995L158.4 311.79999999999995" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M120.0 273.4L120.0 350.19999999999993" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 284.91999999999996L146.88 338.67999999999995" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 338.67999999999995L146.88 284.91999999999996" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="120.0" cy="311.79999999999995" r="6" fill="var(--dh-metal, #dbe5ec)"/><text x="120" y="150" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pompa ciepła</text><rect x="420" y="165" width="140" height="230" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="430" y="183" width="120" height="194" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="490.0" y="145" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Bufor 1000 l</text><rect x="345" y="475" width="130" height="110" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="355" y="493" width="110" height="74" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="410.0" y="455" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">CWU</text><text x="290" y="171" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie PC</text><text id="value-pc-supply" x="290" y="203" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text x="290" y="318" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót PC</text><text id="value-pc-return" x="290" y="350" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-top" x="490" y="226" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-middle" x="490" y="291" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-bottom" x="490" y="356" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-cwu" x="410" y="540" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><rect x="735" y="246" width="150" height="69" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="810" y="285" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pion 1</text><text x="810" y="149" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-riser-1-supply" x="810" y="181" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="810" y="382" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-riser-1-return" x="810" y="414" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><rect x="925" y="246" width="150" height="69" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="1000" y="285" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pion 2</text><text x="1000" y="149" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-riser-2-supply" x="1000" y="181" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="1000" y="382" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-riser-2-return" x="1000" y="414" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><rect x="1115" y="246" width="150" height="69" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="1190" y="285" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pion 3</text><text x="1190" y="149" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-riser-3-supply" x="1190" y="181" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="1190" y="382" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-riser-3-return" x="1190" y="414" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="40" y="45" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="start">INSTALACJA CENTRALNEGO OGRZEWANIA</text><text x="40" y="630" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="start">Schemat funkcjonalny • przebieg gałęzi CWU do potwierdzenia na instalacji</text><path d="M760 560H795" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><text x="810" y="567" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="start">Zasilanie</text><path d="M1010 560H1045" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><text x="1060" y="567" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="start">Powrót</text></svg>', Lt = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="790" viewBox="0 0 500 790" role="img" aria-label="uklad-co-kolumna" font-family="DejaVu Sans, Arial, sans-serif"><text x="30" y="40" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="start">UKŁAD CO</text><rect x="24" y="65" width="452" height="128" rx="18" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="48" y="99" fill="var(--dh-muted, #526c7e)" font-size="20" font-weight="400" text-anchor="start">Pompa ciepła</text><text x="135" y="132" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-pc-supply" x="135" y="164" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text x="365" y="132" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-pc-return" x="365" y="164" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><rect x="54" y="252" width="200" height="225" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="64" y="270" width="180" height="189" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="154.0" y="232" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Bufor 1000 l</text><rect x="306" y="290" width="140" height="150" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="316" y="308" width="120" height="114" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="376.0" y="270" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">CWU</text><text id="value-buffer-top" x="154" y="307" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-middle" x="154" y="375" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-bottom" x="154" y="440" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><text id="value-cwu" x="376" y="380" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><path d="M254 308H280V520H86H416" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M54 440H32V715H416" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M86 520V552" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M86 686V715" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="23" y="552" width="126" height="134" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="86" y="581" fill="var(--dh-ink, #163344)" font-size="18" font-weight="400" text-anchor="middle">Pion 1</text><text id="value-riser-1-supply" x="86" y="620" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text id="value-riser-1-return" x="86" y="662" fill="var(--dh-ink, #163344)" font-size="26" font-weight="400" text-anchor="middle">—°</text><path d="M251 520V552" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M251 686V715" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="188" y="552" width="126" height="134" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="251" y="581" fill="var(--dh-ink, #163344)" font-size="18" font-weight="400" text-anchor="middle">Pion 2</text><text id="value-riser-2-supply" x="251" y="620" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text id="value-riser-2-return" x="251" y="662" fill="var(--dh-ink, #163344)" font-size="26" font-weight="400" text-anchor="middle">—°</text><path d="M416 520V552" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M416 686V715" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="353" y="552" width="126" height="134" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="416" y="581" fill="var(--dh-ink, #163344)" font-size="18" font-weight="400" text-anchor="middle">Pion 3</text><text id="value-riser-3-supply" x="416" y="620" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text id="value-riser-3-return" x="416" y="662" fill="var(--dh-ink, #163344)" font-size="26" font-weight="400" text-anchor="middle">—°</text><text x="250" y="760" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Góra: zasilanie • dół: powrót</text></svg>', Dt = { ground: Ut, upper: It, basement: Rt }, Bt = { horizontal: Vt, column: Lt }, rt = {
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
}, Wt = (o) => !o || ["unknown", "unavailable", "none", "null"].includes(o.toLowerCase());
function Kt(o, t, e = 1) {
  const i = t ? o?.states[t] : void 0;
  if (!i || Wt(i.state)) return { text: "—", value: void 0, unit: "", entity: t };
  const r = Number(i.state), n = String(i.attributes.unit_of_measurement ?? "");
  return Number.isFinite(r) ? { text: `${r.toFixed(e)}${n ? ` ${n}` : ""}`, value: r, unit: n, entity: t } : { text: i.state, value: void 0, unit: n, entity: t };
}
class Zt extends b {
  static properties = { hass: { attribute: !1 }, _config: { state: !0 } };
  setConfig(t) {
    this._config = structuredClone(t);
  }
  emitConfig(t, e) {
    const i = structuredClone(this._config ?? { type: "custom:dom-heat-card" }), [r, n] = t.split(".");
    n ? (i.entities ??= {}, i.entities[n] = e || void 0) : i[r] = e, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: i }, bubbles: !0, composed: !0 }));
  }
  render() {
    const t = this._config ?? {}, e = t.entities ?? {}, i = (r, n) => f`<label>${r}<ha-entity-picker .hass=${this.hass} .value=${e[n] ?? ""} @value-changed=${(s) => this.emitConfig(`entities.${n}`, s.detail.value)} allow-custom-entity></ha-entity-picker></label>`;
    return f`<div class="editor"><label>Układ<select .value=${t.layout ?? "central"} @change=${(r) => this.emitConfig("layout", r.target.value)}><option value="central">Centralny rzut i pasek CO</option><option value="floors_over_co">Dwa rzuty nad instalacją</option></select></label><label>Kondygnacja (układ centralny)<select .value=${t.floor ?? "ground"} @change=${(r) => this.emitConfig("floor", r.target.value)}><option value="basement">Piwnica</option><option value="ground">Parter</option><option value="upper">Piętro</option></select></label>${i("Temperatura zewnętrzna", "outside")}${i("CWU", "hot_water")}${i("Zasilanie pompy", "pump_supply")}${i("Powrót pompy", "pump_return")}${i("Bufor — góra", "buffer_top")}${i("Bufor — środek", "buffer_middle")}${i("Bufor — dół", "buffer_bottom")}</div>`;
  }
  static styles = st`.editor{display:grid;gap:12px;padding:12px}label{display:grid;gap:5px;font-size:14px}select{padding:8px;border-radius:6px;border:1px solid var(--divider-color)}`;
}
customElements.define("dom-heat-card-editor", Zt);
const Ft = "dom-heat-card", Gt = {
  ground: { biuro: "office", salon: "living", hall: "hall", "korytarz-1": "corridor", kuchnia: "kitchen" },
  upper: { lazienka: "bathroom", "sypialnia-1": "bedroom_1", "korytarz-2": "corridor", "sypialnia-2": "bedroom_2", "sypialnia-3": "bedroom_3", garderoba: "wardrobe" },
  basement: { lazienka: "bathroom", "pom-gosp-1": "utility", silownia: "gym", magazyn: "storage", "pom-gosp-2": "utility_2", korytarz: "corridor", garaz: "garage" }
}, qt = {
  ground: { biuro: [129, 175], salon: [579, 265], hall: [129, 385], "korytarz-1": [328, 385], kuchnia: [380, 545] },
  upper: { lazienka: [142.5, 265], "sypialnia-1": [587.5, 160], "korytarz-2": [350, 370], "sypialnia-2": [587.5, 370], "sypialnia-3": [265, 545], garderoba: [625, 545] },
  basement: { lazienka: [105, 155], "pom-gosp-1": [240, 120], silownia: [600, 255], magazyn: [70, 355], "pom-gosp-2": [205, 355], korytarz: [375, 320], garaz: [380, 535] }
}, Jt = {
  horizontal: { box: "0 0 1300 660", values: { "pc-supply": [290, 203], "pc-return": [290, 350], "buffer-top": [490, 226], "buffer-middle": [490, 291], "buffer-bottom": [490, 356], cwu: [410, 540], "riser-1-supply": [810, 181], "riser-1-return": [810, 414], "riser-2-supply": [1e3, 181], "riser-2-return": [1e3, 414], "riser-3-supply": [1190, 181], "riser-3-return": [1190, 414] } },
  column: { box: "0 0 500 790", values: { "pc-supply": [135, 164], "pc-return": [365, 164], "buffer-top": [154, 307], "buffer-middle": [154, 375], "buffer-bottom": [154, 440], cwu: [376, 380], "riser-1-supply": [86, 620], "riser-1-return": [86, 662], "riser-2-supply": [251, 620], "riser-2-return": [251, 662], "riser-3-supply": [416, 620], "riser-3-return": [416, 662] } }
}, ot = { layout: "central", floor: "ground", floors: ["ground", "upper"], precision: 1 };
class Yt extends b {
  static properties = { hass: { attribute: !1 }, _config: { state: !0 }, selectedFloor: { state: !0 }, displayMode: { state: !0 } };
  constructor() {
    super(), this.selectedFloor = "ground", this.displayMode = "home";
  }
  setConfig(t) {
    if (!t || t.type !== "custom:dom-heat-card") throw new Error("Wymagany jest typ: custom:dom-heat-card");
    if (t.layout && !["central", "floors_over_co"].includes(t.layout)) throw new Error("layout musi być: central albo floors_over_co");
    if (t.precision !== void 0 && (!Number.isInteger(t.precision) || t.precision < 0 || t.precision > 3)) throw new Error("precision musi być liczbą całkowitą od 0 do 3");
    this._config = { ...ot, ...t }, this.selectedFloor = t.floor ?? "ground";
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
    return this._config ?? { type: "custom:dom-heat-card", ...ot };
  }
  get e() {
    return this.config.entities ?? {};
  }
  val(t) {
    return Kt(this.hass, t, this.config.precision ?? 1);
  }
  demo(t, e = "—") {
    const i = this.val(t);
    return this.config.demo && i.value === void 0 ? e : i.text;
  }
  moreInfo(t) {
    t && this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: t }, bubbles: !0, composed: !0 }));
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
    const e = rt[t], i = Dt[t].replace(/(<text id="value-[^"]+")/g, '$1 opacity="0"');
    return f`<section class="floor asset-floor" aria-label=${e.name}><div class="floor-title">${e.name}</div><div class="asset-canvas">${it(i)}<svg class="asset-values" viewBox="0 0 760 600" aria-label=${`Temperatury: ${e.name}`}>${Object.entries(qt[t]).map(([r, n]) => {
      const s = Gt[t][r], d = e.rooms.find((p) => p.id === s), l = (d ? this.roomValue(t, d) : void 0)?.config?.entity;
      return T`<text class=${l ? "asset-value clickable" : "asset-value"} x=${n[0]} y=${n[1]} @click=${() => this.moreInfo(l)}>${this.demo(l, "—")}</text>`;
    })}</svg></div></section>`;
  }
  metric(t, e, i = "") {
    const r = this.val(e);
    return f`<button class=${`metric ${i}`} ?disabled=${!e} @click=${() => this.moreInfo(e)}><span>${t}</span><strong>${this.config.demo && r.value === void 0 ? "—" : r.text}</strong></button>`;
  }
  topBar() {
    const t = this.config.layout === "central";
    return f`<header class="header"><div><div class="eyebrow">${t ? "WIDOK ŁĄCZONY" : "INSPIRACJA PRZYKŁADEM"}</div><h2>${t ? "Centralny rzut i pasek CO" : "Dwa rzuty nad instalacją"}</h2></div><div class="head-metrics">${this.metric("Na zewnątrz", this.e.outside)}${this.e.pump_status ? f`<button class="status" @click=${() => this.moreInfo(this.e.pump_status)}><span>Pompa</span><strong>${this.hass?.states[this.e.pump_status]?.state ?? "Niedostępny"}</strong></button>` : c}</div></header>`;
  }
  schemeArt() {
    return T`<svg class="scheme-art" viewBox="0 0 1000 390" preserveAspectRatio="none" aria-hidden="true">
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
  hydronic() {
    const t = this.e, e = t.risers ?? [{ name: "Pion 1" }, { name: "Pion 2" }, { name: "Pion 3" }], i = { "pc-supply": t.pump_supply, "pc-return": t.pump_return, "buffer-top": t.buffer_top, "buffer-middle": t.buffer_middle, "buffer-bottom": t.buffer_bottom, cwu: t.hot_water, "riser-1-supply": e[0]?.supply, "riser-1-return": e[0]?.return, "riser-2-supply": e[1]?.supply, "riser-2-return": e[1]?.return, "riser-3-supply": e[2]?.supply, "riser-3-return": e[2]?.return }, r = this.config.layout === "central" && this.displayMode === "home" ? "column" : "horizontal", n = Jt[r], s = Bt[r].replace(/(<text id="value-[^"]+")/g, '$1 opacity="0"');
    return f`<section class=${`hydronic asset-heating ${r}`} aria-label="Instalacja centralnego ogrzewania"><div class="asset-canvas">${it(s)}<svg class="asset-values" viewBox=${n.box} aria-label="Bieżące temperatury CO">${Object.entries(n.values).map(([d, a]) => {
      const l = i[d];
      return T`<text class=${l ? "asset-value clickable" : "asset-value"} x=${a[0]} y=${a[1]} @click=${() => this.moreInfo(l)}>${this.demo(l, "—")}</text>`;
    })}</svg></div></section>`;
  }
  viewSwitch() {
    return f`<footer><div class="view-switch"><button class=${this.displayMode === "home" ? "active" : ""} @click=${() => this.displayMode = "home"}>Dom + CO</button><button class=${this.displayMode === "heating" ? "active" : ""} @click=${() => this.displayMode = "heating"}>Pełny układ CO</button></div><small>Podgląd temperatur · rzut poglądowy, bez skali</small></footer>`;
  }
  render() {
    if (!this._config) return f``;
    const t = this.config, e = t.layout === "central" ? f`<nav aria-label="Wybór kondygnacji">${["basement", "ground", "upper"].map((i) => f`<button class=${this.selectedFloor === i ? "active" : ""} @click=${() => this.selectedFloor = i}>${rt[i].name}</button>`)}</nav><div class="central-content">${this.floorPlan(this.selectedFloor)}${this.hydronic()}</div>` : f`<div class="two-floors">${this.floorPlan(t.floors?.[0] ?? "ground")}${this.floorPlan(t.floors?.[1] ?? "upper")}</div>${this.hydronic()}`;
    return f`<ha-card><main class=${`${t.layout === "floors_over_co" ? "floors-layout" : "central-layout"} ${this.displayMode === "heating" ? "heating-view" : ""}`}>${this.topBar()}${this.displayMode === "home" ? e : f`<section class="heating-panel"><div class="section-title"><b>Układ CO</b><span>Temperatury w °C</span></div>${this.hydronic()}</section>`}${this.viewSwitch()}</main></ha-card>`;
  }
  static styles = st`
    :host{display:block;color:var(--primary-text-color);--line-supply:var(--orange-color,#d85b16);--line-return:var(--info-color,#087faa);--panel:var(--secondary-background-color);--wall:var(--divider-color);--room:var(--card-background-color);font-family:var(--paper-font-body1_-_font-family,Roboto,sans-serif)}ha-card{overflow:hidden;background:var(--ha-card-background,var(--card-background-color));color:inherit}.central-layout,.floors-layout{padding:clamp(18px,2.4vw,30px);display:grid;gap:18px}.header{display:flex;justify-content:space-between;gap:20px;align-items:start}.eyebrow{font-size:11px;letter-spacing:1.25px;color:var(--secondary-text-color)}h2{font-size:clamp(22px,2.1vw,30px);margin:6px 0 0;line-height:1.1}.head-metrics{display:flex;gap:8px;align-items:start}.header .metric{background:transparent;border:0;padding:5px;min-width:auto;display:flex;gap:5px;align-items:baseline}.header .metric span{font-size:14px;color:var(--primary-text-color)}.header .metric strong{font-size:22px}.metric,.status{appearance:none;border:1px solid var(--divider-color);background:var(--panel);color:inherit;border-radius:10px;padding:8px 11px;text-align:left;min-width:104px;display:grid;gap:2px;cursor:pointer}.metric:disabled{cursor:default;opacity:.72}.metric span,.status span{font-size:11px;color:var(--secondary-text-color)}.metric strong,.status strong{font-size:clamp(14px,1.5vw,20px);white-space:nowrap}.supply strong{color:var(--line-supply)}.return strong{color:var(--line-return)}nav{display:flex;gap:8px;margin:3px 0 -2px}nav button,footer button{border:1px solid var(--divider-color);border-radius:9px;background:var(--card-background-color);color:inherit;padding:10px 16px;font:inherit;cursor:pointer}nav button.active,footer button.active{background:var(--primary-color);color:var(--text-primary-color,#fff);border-color:var(--primary-color)}.central-content{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(280px,1fr);gap:16px;align-items:stretch}.floor{background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:16px;padding:16px;min-width:0}.floor-title{font-size:16px;font-weight:650;margin-bottom:10px}.floor svg{width:100%;display:block;aspect-ratio:1.55}.room rect{fill:var(--panel);stroke:var(--wall);stroke-width:1}.room.warm rect{fill:color-mix(in srgb,var(--line-supply) 17%,var(--room))}.room.cool rect{fill:color-mix(in srgb,var(--line-return) 13%,var(--room))}.room text{fill:var(--primary-text-color);text-anchor:middle;pointer-events:none}.room-name{font-size:4px}.room-temp{font-size:5px;font-weight:bold}.room.clickable{cursor:pointer}.room.clickable:focus rect{stroke:var(--primary-color);stroke-width:2}.hydronic{background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:16px;padding:18px;display:grid;grid-template-columns:1fr 22px 1fr;gap:10px;align-content:start;position:relative}.plant{border:1px solid var(--divider-color);border-radius:12px;padding:10px;display:grid;gap:6px;background:var(--card-background-color)}.pump{grid-column:1}.buffer{grid-column:3;border-radius:38%}.device-icon{font-size:34px;line-height:20px;color:var(--primary-color)}.lines{grid-column:2;grid-row:1;position:relative;min-height:150px}.lines i{position:absolute;height:3px;border-radius:8px;left:0;right:0}.supply-line{top:42%;background:var(--line-supply)}.return-line{top:58%;background:var(--line-return)}.hotwater{grid-column:1 / -1}.risers{grid-column:1 / -1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.riser{border-top:3px solid var(--line-supply);padding-top:6px;display:grid;gap:5px;min-width:0}.riser .metric{min-width:0;padding:6px}.common{grid-column:1/-1;display:flex;gap:8px;flex-wrap:wrap}.two-floors{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.floors-layout .hydronic{grid-template-columns:1fr 24px 1fr 1fr}.floors-layout .risers{grid-column:4;grid-row:1 / span 2;grid-template-columns:1fr}.floors-layout .hotwater{grid-column:3;grid-row:1}.floors-layout .common{grid-column:1 / 4}.heating-panel{display:grid;gap:16px;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:18px;padding:20px;min-height:340px}.section-title{display:flex;justify-content:space-between;color:var(--secondary-text-color);font-size:13px}.section-title b{font-size:16px;color:var(--primary-text-color)}.heating-view .hydronic{border:0;padding:16px 0;grid-template-columns:1fr 42px 1fr 1fr;align-items:center}.heating-view .pump{grid-column:1}.heating-view .buffer{grid-column:3}.heating-view .hotwater{grid-column:4;grid-row:1}.heating-view .risers{grid-column:1/-1;grid-row:2;grid-template-columns:repeat(3,minmax(0,1fr));margin-left:28%;}.heating-view .common{grid-row:3}footer{border-top:1px solid var(--divider-color);padding-top:14px;display:grid;justify-items:center;gap:9px}footer small{font-size:11px;color:var(--secondary-text-color)}.view-switch{display:flex;gap:8px}@media(max-width:700px){.header{display:grid;gap:10px}.central-content,.two-floors{grid-template-columns:1fr}.hydronic,.floors-layout .hydronic,.heating-view .hydronic{grid-template-columns:1fr 14px 1fr}.floors-layout .risers,.heating-view .risers{grid-column:1/-1;grid-row:auto;grid-template-columns:repeat(3,minmax(0,1fr));margin-left:0}.floors-layout .hotwater,.floors-layout .common,.heating-view .hotwater{grid-column:1/-1;grid-row:auto}.room-name{font-size:3.6px}.room-temp{font-size:4.5px}}@media(max-width:410px){.risers,.floors-layout .risers,.heating-view .risers{grid-template-columns:1fr}.metric{min-width:0}nav button,footer button{padding:8px 10px}.room-name{font-size:3.3px}.header .metric strong{font-size:18px}}
    .scheme-art{position:absolute;inset:12px;width:calc(100% - 24px);height:calc(100% - 24px);z-index:0;pointer-events:none;opacity:.82}.scheme-art .pipe{fill:none;stroke-width:3}.scheme-art .supply-pipe{stroke:var(--line-supply)}.scheme-art .return-pipe{stroke:var(--line-return)}.scheme-art .flow{fill:none;stroke-width:1.5;opacity:.8}.scheme-art .supply-flow{stroke:var(--line-supply)}.scheme-art .return-flow{stroke:var(--line-return)}.scheme-art .branch{fill:none;stroke-width:2}.scheme-art .fan,.scheme-art .buffer-art,.scheme-art .boiler-art,.scheme-art .riser-art{fill:var(--card-background-color);stroke:var(--divider-color);stroke-width:1.3}.scheme-art .fan path,.scheme-art .buffer-art path,.scheme-art .boiler-art path,.scheme-art .riser-art path{fill:none;stroke:var(--divider-color)}.scheme-art .riser-art circle{fill:var(--line-supply);stroke:none}.hydronic>*:not(.scheme-art){z-index:1}.central-content .scheme-art,.floors-layout:not(.heating-view) .scheme-art{opacity:.32}.heating-view .plant,.heating-view .risers{background:color-mix(in srgb,var(--card-background-color) 94%,transparent)}
    .asset-canvas{position:relative;width:100%;height:100%}.asset-canvas>svg:first-child{display:block;width:100%;height:100%}.asset-values{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.asset-value{font-family:var(--paper-font-body1_-_font-family,Roboto,sans-serif);font-size:34px;fill:var(--primary-text-color);text-anchor:middle;pointer-events:none}.asset-value.clickable{pointer-events:auto;cursor:pointer}.asset-value.clickable:hover{fill:var(--primary-color)}.asset-floor .asset-canvas{aspect-ratio:760 / 600}.asset-floor .asset-canvas>svg:first-child{position:absolute;inset:0}.asset-heating{display:block!important;padding:0!important;overflow:hidden;min-height:0;background:var(--card-background-color)}.asset-heating.column{aspect-ratio:500 / 790}.asset-heating.horizontal{aspect-ratio:1300 / 660}.asset-heating .asset-canvas{position:absolute;inset:0}.asset-heating .asset-canvas>svg:first-child{position:absolute;inset:0}.heating-view .asset-heating{border:0;background:transparent;aspect-ratio:1300 / 660}.heating-view .asset-value{font-size:30px}.central-content .asset-heating{align-self:start}.floors-layout:not(.heating-view) .asset-heating{margin-top:0}.central-content .asset-heating .asset-value{font-size:25px}@media(max-width:700px){.asset-heating.column{aspect-ratio:500 / 690}.asset-value{font-size:28px}.central-content .asset-heating .asset-value{font-size:26px}}
  `;
}
customElements.define(Ft, Yt);
window.customCards = window.customCards || [];
window.customCards.push({ type: "dom-heat-card", name: "Dom Heat Card", description: "Temperatury domu i instalacji CO", preview: !0, documentationURL: "https://github.com/Pablos249/HA_Temperature_view" });
export {
  Yt as DomHeatCard
};
