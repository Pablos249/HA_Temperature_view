const O = globalThis, M = O.ShadowRoot && (O.ShadyCSS === void 0 || O.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, I = /* @__PURE__ */ Symbol(), L = /* @__PURE__ */ new WeakMap();
let et = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== I) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (M && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = L.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && L.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ct = (r) => new et(typeof r == "string" ? r : r + "", void 0, I), it = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((i, s, o) => i + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[o + 1], r[0]);
  return new et(e, r, I);
}, ht = (r, t) => {
  if (M) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), s = O.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, r.appendChild(i);
  }
}, W = M ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return ct(e);
})(r) : r;
const { is: dt, defineProperty: pt, getOwnPropertyDescriptor: ut, getOwnPropertyNames: mt, getOwnPropertySymbols: ft, getPrototypeOf: gt } = Object, H = globalThis, F = H.trustedTypes, $t = F ? F.emptyScript : "", yt = H.reactiveElementPolyfillSupport, E = (r, t) => r, R = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? $t : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, st = (r, t) => !dt(r, t), V = { attribute: !0, type: String, converter: R, reflect: !1, useDefault: !1, hasChanged: st };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), H.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let _ = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = V) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && pt(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: s, set: o } = ut(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: s, set(n) {
      const c = s?.call(this);
      o?.call(this, n), this.requestUpdate(t, c, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? V;
  }
  static _$Ei() {
    if (this.hasOwnProperty(E("elementProperties"))) return;
    const t = gt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(E("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E("properties"))) {
      const e = this.properties, i = [...mt(e), ...ft(e)];
      for (const s of i) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, s] of e) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const s = this._$Eu(e, i);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i) e.unshift(W(s));
    } else t !== void 0 && e.push(W(t));
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
    return ht(t, this.constructor.elementStyles), t;
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
    const i = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const o = (i.converter?.toAttribute !== void 0 ? i.converter : R).toAttribute(e, i.type);
      this._$Em = t, o == null ? this.removeAttribute(s) : this.setAttribute(s, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, s = i._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const o = i.getPropertyOptions(s), n = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : R;
      this._$Em = s;
      const c = n.fromAttribute(e, o.type);
      this[s] = c ?? this._$Ej?.get(s) ?? c, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, s = !1, o) {
    if (t !== void 0) {
      const n = this.constructor;
      if (s === !1 && (o = this[t]), i ??= n.getPropertyOptions(t), !((i.hasChanged ?? st)(o, e) || i.useDefault && i.reflect && o === this._$Ej?.get(t) && !this.hasAttribute(n._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: s, wrapped: o }, n) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), o !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
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
        for (const [s, o] of this._$Ep) this[s] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [s, o] of i) {
        const { wrapped: n } = o, c = this[s];
        n !== !0 || this._$AL.has(s) || c === void 0 || this.C(s, void 0, o, c);
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
_.elementStyles = [], _.shadowRootOptions = { mode: "open" }, _[E("elementProperties")] = /* @__PURE__ */ new Map(), _[E("finalized")] = /* @__PURE__ */ new Map(), yt?.({ ReactiveElement: _ }), (H.reactiveElementVersions ??= []).push("2.1.2");
const D = globalThis, K = (r) => r, z = D.trustedTypes, q = z ? z.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, rt = "$lit$", g = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + g, vt = `<${ot}>`, v = document, S = () => v.createComment(""), C = (r) => r === null || typeof r != "object" && typeof r != "function", B = Array.isArray, _t = (r) => B(r) || typeof r?.[Symbol.iterator] == "function", T = `[ 	
\f\r]`, A = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Z = /-->/g, G = />/g, $ = RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), J = /'/g, Q = /"/g, nt = /^(?:script|style|textarea|title)$/i, at = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), u = at(1), bt = at(2), x = /* @__PURE__ */ Symbol.for("lit-noChange"), h = /* @__PURE__ */ Symbol.for("lit-nothing"), X = /* @__PURE__ */ new WeakMap(), y = v.createTreeWalker(v, 129);
function lt(r, t) {
  if (!B(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return q !== void 0 ? q.createHTML(t) : t;
}
const xt = (r, t) => {
  const e = r.length - 1, i = [];
  let s, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = A;
  for (let c = 0; c < e; c++) {
    const a = r[c];
    let d, p, l = -1, m = 0;
    for (; m < a.length && (n.lastIndex = m, p = n.exec(a), p !== null); ) m = n.lastIndex, n === A ? p[1] === "!--" ? n = Z : p[1] !== void 0 ? n = G : p[2] !== void 0 ? (nt.test(p[2]) && (s = RegExp("</" + p[2], "g")), n = $) : p[3] !== void 0 && (n = $) : n === $ ? p[0] === ">" ? (n = s ?? A, l = -1) : p[1] === void 0 ? l = -2 : (l = n.lastIndex - p[2].length, d = p[1], n = p[3] === void 0 ? $ : p[3] === '"' ? Q : J) : n === Q || n === J ? n = $ : n === Z || n === G ? n = A : (n = $, s = void 0);
    const f = n === $ && r[c + 1].startsWith("/>") ? " " : "";
    o += n === A ? a + vt : l >= 0 ? (i.push(d), a.slice(0, l) + rt + a.slice(l) + g + f) : a + g + (l === -2 ? c : f);
  }
  return [lt(r, o + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class P {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let o = 0, n = 0;
    const c = t.length - 1, a = this.parts, [d, p] = xt(t, e);
    if (this.el = P.createElement(d, i), y.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (s = y.nextNode()) !== null && a.length < c; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const l of s.getAttributeNames()) if (l.endsWith(rt)) {
          const m = p[n++], f = s.getAttribute(l).split(g), U = /([.?@])?(.*)/.exec(m);
          a.push({ type: 1, index: o, name: U[2], strings: f, ctor: U[1] === "." ? At : U[1] === "?" ? Et : U[1] === "@" ? St : N }), s.removeAttribute(l);
        } else l.startsWith(g) && (a.push({ type: 6, index: o }), s.removeAttribute(l));
        if (nt.test(s.tagName)) {
          const l = s.textContent.split(g), m = l.length - 1;
          if (m > 0) {
            s.textContent = z ? z.emptyScript : "";
            for (let f = 0; f < m; f++) s.append(l[f], S()), y.nextNode(), a.push({ type: 2, index: ++o });
            s.append(l[m], S());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ot) a.push({ type: 2, index: o });
      else {
        let l = -1;
        for (; (l = s.data.indexOf(g, l + 1)) !== -1; ) a.push({ type: 7, index: o }), l += g.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const i = v.createElement("template");
    return i.innerHTML = t, i;
  }
}
function w(r, t, e = r, i) {
  if (t === x) return t;
  let s = i !== void 0 ? e._$Co?.[i] : e._$Cl;
  const o = C(t) ? void 0 : t._$litDirective$;
  return s?.constructor !== o && (s?._$AO?.(!1), o === void 0 ? s = void 0 : (s = new o(r), s._$AT(r, e, i)), i !== void 0 ? (e._$Co ??= [])[i] = s : e._$Cl = s), s !== void 0 && (t = w(r, s._$AS(r, t.values), s, i)), t;
}
class wt {
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
    const { el: { content: e }, parts: i } = this._$AD, s = (t?.creationScope ?? v).importNode(e, !0);
    y.currentNode = s;
    let o = y.nextNode(), n = 0, c = 0, a = i[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let d;
        a.type === 2 ? d = new k(o, o.nextSibling, this, t) : a.type === 1 ? d = new a.ctor(o, a.name, a.strings, this, t) : a.type === 6 && (d = new Ct(o, this, t)), this._$AV.push(d), a = i[++c];
      }
      n !== a?.index && (o = y.nextNode(), n++);
    }
    return y.currentNode = v, s;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, i, s) {
    this.type = 2, this._$AH = h, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = s?.isConnected ?? !0;
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
    t = w(this, t, e), C(t) ? t === h || t == null || t === "" ? (this._$AH !== h && this._$AR(), this._$AH = h) : t !== this._$AH && t !== x && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : _t(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== h && C(this._$AH) ? this._$AA.nextSibling.data = t : this.T(v.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: i } = t, s = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = P.createElement(lt(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === s) this._$AH.p(e);
    else {
      const o = new wt(s, this), n = o.u(this.options);
      o.p(e), this.T(n), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = X.get(t.strings);
    return e === void 0 && X.set(t.strings, e = new P(t)), e;
  }
  k(t) {
    B(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const o of t) s === e.length ? e.push(i = new k(this.O(S()), this.O(S()), this, this.options)) : i = e[s], i._$AI(o), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const i = K(t).nextSibling;
      K(t).remove(), t = i;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class N {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, s, o) {
    this.type = 1, this._$AH = h, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = o, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = h;
  }
  _$AI(t, e = this, i, s) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = w(this, t, e, 0), n = !C(t) || t !== this._$AH && t !== x, n && (this._$AH = t);
    else {
      const c = t;
      let a, d;
      for (t = o[0], a = 0; a < o.length - 1; a++) d = w(this, c[i + a], e, a), d === x && (d = this._$AH[a]), n ||= !C(d) || d !== this._$AH[a], d === h ? t = h : t !== h && (t += (d ?? "") + o[a + 1]), this._$AH[a] = d;
    }
    n && !s && this.j(t);
  }
  j(t) {
    t === h ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class At extends N {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === h ? void 0 : t;
  }
}
class Et extends N {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== h);
  }
}
class St extends N {
  constructor(t, e, i, s, o) {
    super(t, e, i, s, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = w(this, t, e, 0) ?? h) === x) return;
    const i = this._$AH, s = t === h && i !== h || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, o = t !== h && (i === h || s);
    s && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ct {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    w(this, t);
  }
}
const Pt = D.litHtmlPolyfillSupport;
Pt?.(P, k), (D.litHtmlVersions ??= []).push("3.3.3");
const kt = (r, t, e) => {
  const i = e?.renderBefore ?? t;
  let s = i._$litPart$;
  if (s === void 0) {
    const o = e?.renderBefore ?? null;
    i._$litPart$ = s = new k(t.insertBefore(S(), o), o, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
const j = globalThis;
class b extends _ {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = kt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return x;
  }
}
b._$litElement$ = !0, b.finalized = !0, j.litElementHydrateSupport?.({ LitElement: b });
const Ut = j.litElementPolyfillSupport;
Ut?.({ LitElement: b });
(j.litElementVersions ??= []).push("4.2.2");
const Y = {
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
}, Ot = (r) => !r || ["unknown", "unavailable", "none", "null"].includes(r.toLowerCase());
function zt(r, t, e = 1) {
  const i = t ? r?.states[t] : void 0;
  if (!i || Ot(i.state)) return { text: "—", value: void 0, unit: "", entity: t };
  const s = Number(i.state), o = String(i.attributes.unit_of_measurement ?? "");
  return Number.isFinite(s) ? { text: `${s.toFixed(e)}${o ? ` ${o}` : ""}`, value: s, unit: o, entity: t } : { text: i.state, value: void 0, unit: o, entity: t };
}
const Ht = (r, t) => r.value !== void 0 && t.value !== void 0 && r.unit === t.unit ? r.value - t.value : void 0;
class Nt extends b {
  static properties = { hass: { attribute: !1 }, _config: { state: !0 } };
  setConfig(t) {
    this._config = structuredClone(t);
  }
  emitConfig(t, e) {
    const i = structuredClone(this._config ?? { type: "custom:dom-heat-card" }), [s, o] = t.split(".");
    o ? (i.entities ??= {}, i.entities[o] = e || void 0) : i[s] = e, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: i }, bubbles: !0, composed: !0 }));
  }
  render() {
    const t = this._config ?? {}, e = t.entities ?? {}, i = (s, o) => u`<label>${s}<ha-entity-picker .hass=${this.hass} .value=${e[o] ?? ""} @value-changed=${(n) => this.emitConfig(`entities.${o}`, n.detail.value)} allow-custom-entity></ha-entity-picker></label>`;
    return u`<div class="editor"><label>Układ<select .value=${t.layout ?? "central"} @change=${(s) => this.emitConfig("layout", s.target.value)}><option value="central">Centralny rzut i pasek CO</option><option value="floors_over_co">Dwa rzuty nad instalacją</option></select></label><label>Kondygnacja (układ centralny)<select .value=${t.floor ?? "ground"} @change=${(s) => this.emitConfig("floor", s.target.value)}><option value="basement">Piwnica</option><option value="ground">Parter</option><option value="upper">Piętro</option></select></label>${i("Temperatura zewnętrzna", "outside")}${i("CWU", "hot_water")}${i("Zasilanie pompy", "pump_supply")}${i("Powrót pompy", "pump_return")}${i("Bufor — góra", "buffer_top")}${i("Bufor — środek", "buffer_middle")}${i("Bufor — dół", "buffer_bottom")}</div>`;
  }
  static styles = it`.editor{display:grid;gap:12px;padding:12px}label{display:grid;gap:5px;font-size:14px}select{padding:8px;border-radius:6px;border:1px solid var(--divider-color)}`;
}
customElements.define("dom-heat-card-editor", Nt);
const Tt = "dom-heat-card", tt = { layout: "central", floor: "ground", floors: ["ground", "upper"], precision: 1 };
class Rt extends b {
  static properties = { hass: { attribute: !1 }, _config: { state: !0 }, selectedFloor: { state: !0 } };
  constructor() {
    super(), this.selectedFloor = "ground";
  }
  setConfig(t) {
    if (!t || t.type !== "custom:dom-heat-card") throw new Error("Wymagany jest typ: custom:dom-heat-card");
    if (t.layout && !["central", "floors_over_co"].includes(t.layout)) throw new Error("layout musi być: central albo floors_over_co");
    if (t.precision !== void 0 && (!Number.isInteger(t.precision) || t.precision < 0 || t.precision > 3)) throw new Error("precision musi być liczbą całkowitą od 0 do 3");
    this._config = { ...tt, ...t }, this.selectedFloor = t.floor ?? "ground";
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
    return this._config ?? { type: "custom:dom-heat-card", ...tt };
  }
  get e() {
    return this.config.entities ?? {};
  }
  val(t) {
    return zt(this.hass, t, this.config.precision ?? 1);
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
    const e = Y[t];
    return u`<section class="floor" aria-label=${e.name}><div class="floor-title">${e.name}</div><svg viewBox="0 0 100 100" role="img" aria-label=${`Rzut: ${e.name}`}>${e.rooms.map((i) => {
      const s = this.roomValue(t, i), o = !!s.config?.entity;
      return bt`<g class=${`room ${this.tone(s)} ${o ? "clickable" : ""}`} @click=${() => this.moreInfo(s.config?.entity)} tabindex=${o ? 0 : -1} @keydown=${(n) => n.key === "Enter" && this.moreInfo(s.config?.entity)}><rect x=${i.x} y=${i.y} width=${i.width} height=${i.height} rx="2"></rect><text x=${i.x + i.width / 2} y=${i.y + i.height / 2 - 3} class="room-name">${s.name}</text><text x=${i.x + i.width / 2} y=${i.y + i.height / 2 + 7} class="room-temp">${i.sensor === !1 ? "" : this.demo(s.config?.entity, "—")}</text></g>`;
    })}</svg></section>`;
  }
  metric(t, e, i = "") {
    const s = this.val(e);
    return u`<button class=${`metric ${i}`} ?disabled=${!e} @click=${() => this.moreInfo(e)}><span>${t}</span><strong>${this.config.demo && s.value === void 0 ? "—" : s.text}</strong></button>`;
  }
  topBar() {
    return u`<header class="topbar">${this.metric("Na zewnątrz", this.e.outside)}${this.metric("CWU", this.e.hot_water)}${this.e.pump_status ? u`<button class="status" @click=${() => this.moreInfo(this.e.pump_status)}><span>Pompa</span><strong>${this.hass?.states[this.e.pump_status]?.state ?? "Niedostępny"}</strong></button>` : h}</header>`;
  }
  hydronic() {
    const t = this.e, e = this.val(t.pump_supply), i = this.val(t.pump_return), s = Ht(e, i), o = t.risers ?? [{ name: "Pion 1" }, { name: "Pion 2" }, { name: "Pion 3" }];
    return u`<section class="hydronic" aria-label="Instalacja centralnego ogrzewania"><div class="plant pump"><span class="device-icon">◌</span><b>Pompa ciepła</b>${this.metric("Zasilanie", t.pump_supply, "supply")}${this.metric("Powrót", t.pump_return, "return")}${s !== void 0 ? u`<small>ΔT ${s.toFixed(this.config.precision)} ${e.unit}</small>` : h}</div><div class="lines" aria-hidden="true"><i class="supply-line"></i><i class="return-line"></i></div><div class="plant buffer"><b>Bufor</b>${this.metric("Góra", t.buffer_top)}${this.metric("Środek", t.buffer_middle)}${this.metric("Dół", t.buffer_bottom)}</div><div class="plant hotwater"><b>Bojler CWU</b>${this.metric("Temperatura", t.hot_water)}</div><div class="risers">${o.slice(0, 3).map((n, c) => u`<div class="riser"><b>${n.name ?? `Pion ${c + 1}`}</b>${this.metric("Zasilanie", n.supply, "supply")}${this.metric("Powrót", n.return, "return")}</div>`)}</div>${t.central_supply || t.central_return ? u`<div class="common">${this.metric("CO — zasilanie", t.central_supply, "supply")}${this.metric("CO — powrót", t.central_return, "return")}</div>` : h}</section>`;
  }
  render() {
    if (!this._config) return u``;
    const t = this.config;
    return u`<ha-card><main class=${t.layout === "floors_over_co" ? "floors-layout" : "central-layout"}>${this.topBar()}${t.layout === "central" ? u`<nav aria-label="Wybór kondygnacji">${["basement", "ground", "upper"].map((e) => u`<button class=${this.selectedFloor === e ? "active" : ""} @click=${() => this.selectedFloor = e}>${Y[e].name}</button>`)}</nav><div class="central-content">${this.floorPlan(this.selectedFloor)}${this.hydronic()}</div>` : u`<div class="two-floors">${this.floorPlan(t.floors?.[0] ?? "ground")}${this.floorPlan(t.floors?.[1] ?? "upper")}</div>${this.hydronic()}`}</main></ha-card>`;
  }
  static styles = it`
    :host{display:block;color:var(--primary-text-color);--line-supply:var(--orange-color,#e8791b);--line-return:var(--info-color,#1688c9);--panel:var(--secondary-background-color);--wall:var(--divider-color);--room:var(--card-background-color);font-family:var(--paper-font-body1_-_font-family,Roboto,sans-serif)}ha-card{overflow:hidden;background:var(--ha-card-background,var(--card-background-color));color:inherit}.central-layout,.floors-layout{padding:clamp(12px,2vw,24px);display:grid;gap:14px}.topbar{display:flex;gap:10px;flex-wrap:wrap}.metric,.status{appearance:none;border:1px solid var(--divider-color);background:var(--panel);color:inherit;border-radius:10px;padding:8px 11px;text-align:left;min-width:104px;display:grid;gap:2px;cursor:pointer}.metric:disabled{cursor:default;opacity:.72}.metric span,.status span{font-size:11px;color:var(--secondary-text-color)}.metric strong,.status strong{font-size:clamp(14px,1.5vw,20px);white-space:nowrap}.supply strong{color:var(--line-supply)}.return strong{color:var(--line-return)}nav{display:flex;gap:8px}nav button{border:1px solid var(--divider-color);border-radius:9px;background:transparent;color:inherit;padding:8px 16px;font:inherit;cursor:pointer}nav button.active{background:var(--primary-color);color:var(--text-primary-color,#fff);border-color:var(--primary-color)}.central-content{display:grid;grid-template-columns:minmax(0,1.8fr) minmax(280px,.9fr);gap:16px;align-items:stretch}.floor{background:var(--panel);border-radius:14px;padding:12px;min-width:0}.floor-title{font-size:14px;font-weight:600;margin-bottom:7px}.floor svg{width:100%;display:block;aspect-ratio:1.55}.room rect{fill:var(--room);stroke:var(--wall);stroke-width:1}.room.warm rect{fill:color-mix(in srgb,var(--line-supply) 20%,var(--room))}.room.cool rect{fill:color-mix(in srgb,var(--line-return) 17%,var(--room))}.room text{fill:var(--primary-text-color);text-anchor:middle;pointer-events:none}.room-name{font-size:4px}.room-temp{font-size:5px;font-weight:bold}.room.clickable{cursor:pointer}.room.clickable:focus rect{stroke:var(--primary-color);stroke-width:2}.hydronic{background:var(--panel);border-radius:14px;padding:12px;display:grid;grid-template-columns:1fr 18px 1fr;gap:10px;align-content:start;position:relative}.plant{border:1px solid var(--divider-color);border-radius:12px;padding:10px;display:grid;gap:6px;background:var(--card-background-color)}.pump{grid-column:1}.buffer{grid-column:3}.device-icon{font-size:34px;line-height:20px;color:var(--primary-color)}.lines{grid-column:2;grid-row:1;position:relative;min-height:150px}.lines i{position:absolute;height:4px;border-radius:8px;left:0;right:0}.supply-line{top:42%;background:var(--line-supply)}.return-line{top:58%;background:var(--line-return)}.hotwater{grid-column:1 / -1}.risers{grid-column:1 / -1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.riser{border-top:3px solid var(--line-supply);padding-top:6px;display:grid;gap:5px;min-width:0}.riser .metric{min-width:0;padding:6px}.common{grid-column:1/-1;display:flex;gap:8px;flex-wrap:wrap}.two-floors{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.floors-layout .hydronic{grid-template-columns:1fr 24px 1fr 1fr}.floors-layout .risers{grid-column:4;grid-row:1 / span 2;grid-template-columns:1fr}.floors-layout .hotwater{grid-column:3;grid-row:1}.floors-layout .common{grid-column:1 / 4}@media(max-width:700px){.central-content,.two-floors{grid-template-columns:1fr}.hydronic,.floors-layout .hydronic{grid-template-columns:1fr 14px 1fr}.floors-layout .risers{grid-column:1/-1;grid-row:auto;grid-template-columns:repeat(3,minmax(0,1fr))}.floors-layout .hotwater,.floors-layout .common{grid-column:1/-1}.topbar .metric{flex:1}.room-name{font-size:3.6px}.room-temp{font-size:4.5px}}@media(max-width:410px){.risers,.floors-layout .risers{grid-template-columns:1fr}.metric{min-width:0}nav button{padding:7px 10px}.room-name{font-size:3.3px}}
  `;
}
customElements.define(Tt, Rt);
window.customCards = window.customCards || [];
window.customCards.push({ type: "dom-heat-card", name: "Dom Heat Card", description: "Temperatury domu i instalacji CO", preview: !0, documentationURL: "https://github.com/Pablos249/HA_Temperature_view" });
export {
  Rt as DomHeatCard
};
