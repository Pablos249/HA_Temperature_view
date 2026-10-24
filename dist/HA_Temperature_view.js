const O = globalThis, R = O.ShadowRoot && (O.ShadyCSS === void 0 || O.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, I = /* @__PURE__ */ Symbol(), L = /* @__PURE__ */ new WeakMap();
let et = class {
  constructor(t, i, e) {
    if (this._$cssResult$ = !0, e !== I) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = i;
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (R && t === void 0) {
      const e = i !== void 0 && i.length === 1;
      e && (t = L.get(i)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && L.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const dt = (s) => new et(typeof s == "string" ? s : s + "", void 0, I), it = (s, ...t) => {
  const i = s.length === 1 ? s[0] : t.reduce((e, r, o) => e + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + s[o + 1], s[0]);
  return new et(i, s, I);
}, ct = (s, t) => {
  if (R) s.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of t) {
    const e = document.createElement("style"), r = O.litNonce;
    r !== void 0 && e.setAttribute("nonce", r), e.textContent = i.cssText, s.appendChild(e);
  }
}, W = R ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const e of t.cssRules) i += e.cssText;
  return dt(i);
})(s) : s;
const { is: ht, defineProperty: pt, getOwnPropertyDescriptor: ut, getOwnPropertyNames: mt, getOwnPropertySymbols: gt, getPrototypeOf: ft } = Object, M = globalThis, F = M.trustedTypes, $t = F ? F.emptyScript : "", yt = M.reactiveElementPolyfillSupport, E = (s, t) => s, T = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? $t : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let i = s;
  switch (t) {
    case Boolean:
      i = s !== null;
      break;
    case Number:
      i = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(s);
      } catch {
        i = null;
      }
  }
  return i;
} }, rt = (s, t) => !ht(s, t), V = { attribute: !0, type: String, converter: T, reflect: !1, useDefault: !1, hasChanged: rt };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), M.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let _ = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, i = V) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(t, i), !i.noAccessor) {
      const e = /* @__PURE__ */ Symbol(), r = this.getPropertyDescriptor(t, e, i);
      r !== void 0 && pt(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, i, e) {
    const { get: r, set: o } = ut(this.prototype, t) ?? { get() {
      return this[i];
    }, set(n) {
      this[i] = n;
    } };
    return { get: r, set(n) {
      const d = r?.call(this);
      o?.call(this, n), this.requestUpdate(t, d, e);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? V;
  }
  static _$Ei() {
    if (this.hasOwnProperty(E("elementProperties"))) return;
    const t = ft(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(E("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E("properties"))) {
      const i = this.properties, e = [...mt(i), ...gt(i)];
      for (const r of e) this.createProperty(r, i[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const i = litPropertyMetadata.get(t);
      if (i !== void 0) for (const [e, r] of i) this.elementProperties.set(e, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, e] of this.elementProperties) {
      const r = this._$Eu(i, e);
      r !== void 0 && this._$Eh.set(r, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const e = new Set(t.flat(1 / 0).reverse());
      for (const r of e) i.unshift(W(r));
    } else t !== void 0 && i.push(W(t));
    return i;
  }
  static _$Eu(t, i) {
    const e = i.attribute;
    return e === !1 ? void 0 : typeof e == "string" ? e : typeof t == "string" ? t.toLowerCase() : void 0;
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
    const t = /* @__PURE__ */ new Map(), i = this.constructor.elementProperties;
    for (const e of i.keys()) this.hasOwnProperty(e) && (t.set(e, this[e]), delete this[e]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ct(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, i, e) {
    this._$AK(t, e);
  }
  _$ET(t, i) {
    const e = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, e);
    if (r !== void 0 && e.reflect === !0) {
      const o = (e.converter?.toAttribute !== void 0 ? e.converter : T).toAttribute(i, e.type);
      this._$Em = t, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$Em = null;
    }
  }
  _$AK(t, i) {
    const e = this.constructor, r = e._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const o = e.getPropertyOptions(r), n = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : T;
      this._$Em = r;
      const d = n.fromAttribute(i, o.type);
      this[r] = d ?? this._$Ej?.get(r) ?? d, this._$Em = null;
    }
  }
  requestUpdate(t, i, e, r = !1, o) {
    if (t !== void 0) {
      const n = this.constructor;
      if (r === !1 && (o = this[t]), e ??= n.getPropertyOptions(t), !((e.hasChanged ?? rt)(o, i) || e.useDefault && e.reflect && o === this._$Ej?.get(t) && !this.hasAttribute(n._$Eu(t, e)))) return;
      this.C(t, i, e);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, i, { useDefault: e, reflect: r, wrapped: o }, n) {
    e && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, n ?? i ?? this[t]), o !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || e || (i = void 0), this._$AL.set(t, i)), r === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (i) {
      Promise.reject(i);
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
      const e = this.constructor.elementProperties;
      if (e.size > 0) for (const [r, o] of e) {
        const { wrapped: n } = o, d = this[r];
        n !== !0 || this._$AL.has(r) || d === void 0 || this.C(r, void 0, o, d);
      }
    }
    let t = !1;
    const i = this._$AL;
    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(i)) : this._$EM();
    } catch (e) {
      throw t = !1, this._$EM(), e;
    }
    t && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((i) => i.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
    this._$Eq &&= this._$Eq.forEach((i) => this._$ET(i, this[i])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
_.elementStyles = [], _.shadowRootOptions = { mode: "open" }, _[E("elementProperties")] = /* @__PURE__ */ new Map(), _[E("finalized")] = /* @__PURE__ */ new Map(), yt?.({ ReactiveElement: _ }), (M.reactiveElementVersions ??= []).push("2.1.2");
const D = globalThis, K = (s) => s, U = D.trustedTypes, Z = U ? U.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, st = "$lit$", f = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + f, vt = `<${ot}>`, v = document, C = () => v.createComment(""), S = (s) => s === null || typeof s != "object" && typeof s != "function", j = Array.isArray, _t = (s) => j(s) || typeof s?.[Symbol.iterator] == "function", N = `[ 	
\f\r]`, A = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, q = /-->/g, G = />/g, $ = RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), J = /'/g, Y = /"/g, nt = /^(?:script|style|textarea|title)$/i, at = (s) => (t, ...i) => ({ _$litType$: s, strings: t, values: i }), p = at(1), bt = at(2), x = /* @__PURE__ */ Symbol.for("lit-noChange"), c = /* @__PURE__ */ Symbol.for("lit-nothing"), Q = /* @__PURE__ */ new WeakMap(), y = v.createTreeWalker(v, 129);
function lt(s, t) {
  if (!j(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Z !== void 0 ? Z.createHTML(t) : t;
}
const xt = (s, t) => {
  const i = s.length - 1, e = [];
  let r, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = A;
  for (let d = 0; d < i; d++) {
    const a = s[d];
    let h, u, l = -1, m = 0;
    for (; m < a.length && (n.lastIndex = m, u = n.exec(a), u !== null); ) m = n.lastIndex, n === A ? u[1] === "!--" ? n = q : u[1] !== void 0 ? n = G : u[2] !== void 0 ? (nt.test(u[2]) && (r = RegExp("</" + u[2], "g")), n = $) : u[3] !== void 0 && (n = $) : n === $ ? u[0] === ">" ? (n = r ?? A, l = -1) : u[1] === void 0 ? l = -2 : (l = n.lastIndex - u[2].length, h = u[1], n = u[3] === void 0 ? $ : u[3] === '"' ? Y : J) : n === Y || n === J ? n = $ : n === q || n === G ? n = A : (n = $, r = void 0);
    const g = n === $ && s[d + 1].startsWith("/>") ? " " : "";
    o += n === A ? a + vt : l >= 0 ? (e.push(h), a.slice(0, l) + st + a.slice(l) + f + g) : a + f + (l === -2 ? d : g);
  }
  return [lt(s, o + (s[i] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), e];
};
class P {
  constructor({ strings: t, _$litType$: i }, e) {
    let r;
    this.parts = [];
    let o = 0, n = 0;
    const d = t.length - 1, a = this.parts, [h, u] = xt(t, i);
    if (this.el = P.createElement(h, e), y.currentNode = this.el.content, i === 2 || i === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (r = y.nextNode()) !== null && a.length < d; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const l of r.getAttributeNames()) if (l.endsWith(st)) {
          const m = u[n++], g = r.getAttribute(l).split(f), z = /([.?@])?(.*)/.exec(m);
          a.push({ type: 1, index: o, name: z[2], strings: g, ctor: z[1] === "." ? At : z[1] === "?" ? Et : z[1] === "@" ? Ct : H }), r.removeAttribute(l);
        } else l.startsWith(f) && (a.push({ type: 6, index: o }), r.removeAttribute(l));
        if (nt.test(r.tagName)) {
          const l = r.textContent.split(f), m = l.length - 1;
          if (m > 0) {
            r.textContent = U ? U.emptyScript : "";
            for (let g = 0; g < m; g++) r.append(l[g], C()), y.nextNode(), a.push({ type: 2, index: ++o });
            r.append(l[m], C());
          }
        }
      } else if (r.nodeType === 8) if (r.data === ot) a.push({ type: 2, index: o });
      else {
        let l = -1;
        for (; (l = r.data.indexOf(f, l + 1)) !== -1; ) a.push({ type: 7, index: o }), l += f.length - 1;
      }
      o++;
    }
  }
  static createElement(t, i) {
    const e = v.createElement("template");
    return e.innerHTML = t, e;
  }
}
function w(s, t, i = s, e) {
  if (t === x) return t;
  let r = e !== void 0 ? i._$Co?.[e] : i._$Cl;
  const o = S(t) ? void 0 : t._$litDirective$;
  return r?.constructor !== o && (r?._$AO?.(!1), o === void 0 ? r = void 0 : (r = new o(s), r._$AT(s, i, e)), e !== void 0 ? (i._$Co ??= [])[e] = r : i._$Cl = r), r !== void 0 && (t = w(s, r._$AS(s, t.values), r, e)), t;
}
class wt {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: i }, parts: e } = this._$AD, r = (t?.creationScope ?? v).importNode(i, !0);
    y.currentNode = r;
    let o = y.nextNode(), n = 0, d = 0, a = e[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let h;
        a.type === 2 ? h = new k(o, o.nextSibling, this, t) : a.type === 1 ? h = new a.ctor(o, a.name, a.strings, this, t) : a.type === 6 && (h = new St(o, this, t)), this._$AV.push(h), a = e[++d];
      }
      n !== a?.index && (o = y.nextNode(), n++);
    }
    return y.currentNode = v, r;
  }
  p(t) {
    let i = 0;
    for (const e of this._$AV) e !== void 0 && (e.strings !== void 0 ? (e._$AI(t, e, i), i += e.strings.length - 2) : e._$AI(t[i])), i++;
  }
}
class k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, i, e, r) {
    this.type = 2, this._$AH = c, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = e, this.options = r, this._$Cv = r?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && t?.nodeType === 11 && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = w(this, t, i), S(t) ? t === c || t == null || t === "" ? (this._$AH !== c && this._$AR(), this._$AH = c) : t !== this._$AH && t !== x && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : _t(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== c && S(this._$AH) ? this._$AA.nextSibling.data = t : this.T(v.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: i, _$litType$: e } = t, r = typeof e == "number" ? this._$AC(t) : (e.el === void 0 && (e.el = P.createElement(lt(e.h, e.h[0]), this.options)), e);
    if (this._$AH?._$AD === r) this._$AH.p(i);
    else {
      const o = new wt(r, this), n = o.u(this.options);
      o.p(i), this.T(n), this._$AH = o;
    }
  }
  _$AC(t) {
    let i = Q.get(t.strings);
    return i === void 0 && Q.set(t.strings, i = new P(t)), i;
  }
  k(t) {
    j(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let e, r = 0;
    for (const o of t) r === i.length ? i.push(e = new k(this.O(C()), this.O(C()), this, this.options)) : e = i[r], e._$AI(o), r++;
    r < i.length && (this._$AR(e && e._$AB.nextSibling, r), i.length = r);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    for (this._$AP?.(!1, !0, i); t !== this._$AB; ) {
      const e = K(t).nextSibling;
      K(t).remove(), t = e;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class H {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, e, r, o) {
    this.type = 1, this._$AH = c, this._$AN = void 0, this.element = t, this.name = i, this._$AM = r, this.options = o, e.length > 2 || e[0] !== "" || e[1] !== "" ? (this._$AH = Array(e.length - 1).fill(new String()), this.strings = e) : this._$AH = c;
  }
  _$AI(t, i = this, e, r) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = w(this, t, i, 0), n = !S(t) || t !== this._$AH && t !== x, n && (this._$AH = t);
    else {
      const d = t;
      let a, h;
      for (t = o[0], a = 0; a < o.length - 1; a++) h = w(this, d[e + a], i, a), h === x && (h = this._$AH[a]), n ||= !S(h) || h !== this._$AH[a], h === c ? t = c : t !== c && (t += (h ?? "") + o[a + 1]), this._$AH[a] = h;
    }
    n && !r && this.j(t);
  }
  j(t) {
    t === c ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class At extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === c ? void 0 : t;
  }
}
class Et extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== c);
  }
}
class Ct extends H {
  constructor(t, i, e, r, o) {
    super(t, i, e, r, o), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = w(this, t, i, 0) ?? c) === x) return;
    const e = this._$AH, r = t === c && e !== c || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, o = t !== c && (e === c || r);
    r && this.element.removeEventListener(this.name, this, e), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class St {
  constructor(t, i, e) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = e;
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
const kt = (s, t, i) => {
  const e = i?.renderBefore ?? t;
  let r = e._$litPart$;
  if (r === void 0) {
    const o = i?.renderBefore ?? null;
    e._$litPart$ = r = new k(t.insertBefore(C(), o), o, void 0, i ?? {});
  }
  return r._$AI(s), r;
};
const B = globalThis;
class b extends _ {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = kt(i, this.renderRoot, this.renderOptions);
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
b._$litElement$ = !0, b.finalized = !0, B.litElementHydrateSupport?.({ LitElement: b });
const zt = B.litElementPolyfillSupport;
zt?.({ LitElement: b });
(B.litElementVersions ??= []).push("4.2.2");
const X = {
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
}, Ot = (s) => !s || ["unknown", "unavailable", "none", "null"].includes(s.toLowerCase());
function Ut(s, t, i = 1) {
  const e = t ? s?.states[t] : void 0;
  if (!e || Ot(e.state)) return { text: "—", value: void 0, unit: "", entity: t };
  const r = Number(e.state), o = String(e.attributes.unit_of_measurement ?? "");
  return Number.isFinite(r) ? { text: `${r.toFixed(i)}${o ? ` ${o}` : ""}`, value: r, unit: o, entity: t } : { text: e.state, value: void 0, unit: o, entity: t };
}
const Mt = (s, t) => s.value !== void 0 && t.value !== void 0 && s.unit === t.unit ? s.value - t.value : void 0;
class Ht extends b {
  static properties = { hass: { attribute: !1 }, _config: { state: !0 } };
  setConfig(t) {
    this._config = structuredClone(t);
  }
  emitConfig(t, i) {
    const e = structuredClone(this._config ?? { type: "custom:dom-heat-card" }), [r, o] = t.split(".");
    o ? (e.entities ??= {}, e.entities[o] = i || void 0) : e[r] = i, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: e }, bubbles: !0, composed: !0 }));
  }
  render() {
    const t = this._config ?? {}, i = t.entities ?? {}, e = (r, o) => p`<label>${r}<ha-entity-picker .hass=${this.hass} .value=${i[o] ?? ""} @value-changed=${(n) => this.emitConfig(`entities.${o}`, n.detail.value)} allow-custom-entity></ha-entity-picker></label>`;
    return p`<div class="editor"><label>Układ<select .value=${t.layout ?? "central"} @change=${(r) => this.emitConfig("layout", r.target.value)}><option value="central">Centralny rzut i pasek CO</option><option value="floors_over_co">Dwa rzuty nad instalacją</option></select></label><label>Kondygnacja (układ centralny)<select .value=${t.floor ?? "ground"} @change=${(r) => this.emitConfig("floor", r.target.value)}><option value="basement">Piwnica</option><option value="ground">Parter</option><option value="upper">Piętro</option></select></label>${e("Temperatura zewnętrzna", "outside")}${e("CWU", "hot_water")}${e("Zasilanie pompy", "pump_supply")}${e("Powrót pompy", "pump_return")}${e("Bufor — góra", "buffer_top")}${e("Bufor — środek", "buffer_middle")}${e("Bufor — dół", "buffer_bottom")}</div>`;
  }
  static styles = it`.editor{display:grid;gap:12px;padding:12px}label{display:grid;gap:5px;font-size:14px}select{padding:8px;border-radius:6px;border:1px solid var(--divider-color)}`;
}
customElements.define("dom-heat-card-editor", Ht);
const Nt = "dom-heat-card", tt = { layout: "central", floor: "ground", floors: ["ground", "upper"], precision: 1 };
class Tt extends b {
  static properties = { hass: { attribute: !1 }, _config: { state: !0 }, selectedFloor: { state: !0 }, displayMode: { state: !0 } };
  constructor() {
    super(), this.selectedFloor = "ground", this.displayMode = "home";
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
    return Ut(this.hass, t, this.config.precision ?? 1);
  }
  demo(t, i = "—") {
    const e = this.val(t);
    return this.config.demo && e.value === void 0 ? i : e.text;
  }
  moreInfo(t) {
    t && this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: t }, bubbles: !0, composed: !0 }));
  }
  roomConfig(t, i) {
    return this.config.rooms?.[t]?.find((e) => e.id === i);
  }
  roomValue(t, i) {
    const e = this.roomConfig(t, i.id);
    return { config: e, value: this.val(e?.entity), name: e?.name ?? i.name };
  }
  tone(t) {
    if (t.value.value === void 0 || t.config?.target === void 0) return "neutral";
    const i = t.config.tolerance ?? 0.5;
    return t.value.value > t.config.target + i ? "warm" : t.value.value < t.config.target - i ? "cool" : "neutral";
  }
  floorPlan(t) {
    const i = X[t];
    return p`<section class="floor" aria-label=${i.name}><div class="floor-title">${i.name}</div><svg viewBox="0 0 100 100" role="img" aria-label=${`Rzut: ${i.name}`}>${i.rooms.map((e) => {
      const r = this.roomValue(t, e), o = !!r.config?.entity;
      return bt`<g class=${`room ${this.tone(r)} ${o ? "clickable" : ""}`} @click=${() => this.moreInfo(r.config?.entity)} tabindex=${o ? 0 : -1} @keydown=${(n) => n.key === "Enter" && this.moreInfo(r.config?.entity)}><rect x=${e.x} y=${e.y} width=${e.width} height=${e.height} rx="2"></rect><text x=${e.x + e.width / 2} y=${e.y + e.height / 2 - 3} class="room-name">${r.name}</text><text x=${e.x + e.width / 2} y=${e.y + e.height / 2 + 7} class="room-temp">${e.sensor === !1 ? "" : this.demo(r.config?.entity, "—")}</text></g>`;
    })}</svg></section>`;
  }
  metric(t, i, e = "") {
    const r = this.val(i);
    return p`<button class=${`metric ${e}`} ?disabled=${!i} @click=${() => this.moreInfo(i)}><span>${t}</span><strong>${this.config.demo && r.value === void 0 ? "—" : r.text}</strong></button>`;
  }
  topBar() {
    const t = this.config.layout === "central";
    return p`<header class="header"><div><div class="eyebrow">${t ? "WIDOK ŁĄCZONY" : "INSPIRACJA PRZYKŁADEM"}</div><h2>${t ? "Centralny rzut i pasek CO" : "Dwa rzuty nad instalacją"}</h2></div><div class="head-metrics">${this.metric("Na zewnątrz", this.e.outside)}${this.e.pump_status ? p`<button class="status" @click=${() => this.moreInfo(this.e.pump_status)}><span>Pompa</span><strong>${this.hass?.states[this.e.pump_status]?.state ?? "Niedostępny"}</strong></button>` : c}</div></header>`;
  }
  hydronic() {
    const t = this.e, i = this.val(t.pump_supply), e = this.val(t.pump_return), r = Mt(i, e), o = t.risers ?? [{ name: "Pion 1" }, { name: "Pion 2" }, { name: "Pion 3" }];
    return p`<section class="hydronic" aria-label="Instalacja centralnego ogrzewania"><div class="plant pump"><span class="device-icon">◌</span><b>Pompa ciepła</b>${this.metric("Zasilanie", t.pump_supply, "supply")}${this.metric("Powrót", t.pump_return, "return")}${r !== void 0 ? p`<small>ΔT ${r.toFixed(this.config.precision)} ${i.unit}</small>` : c}</div><div class="lines" aria-hidden="true"><i class="supply-line"></i><i class="return-line"></i></div><div class="plant buffer"><b>Bufor</b>${this.metric("Góra", t.buffer_top)}${this.metric("Środek", t.buffer_middle)}${this.metric("Dół", t.buffer_bottom)}</div><div class="plant hotwater"><b>Bojler CWU</b>${this.metric("Temperatura", t.hot_water)}</div><div class="risers">${o.slice(0, 3).map((n, d) => p`<div class="riser"><b>${n.name ?? `Pion ${d + 1}`}</b>${this.metric("Zasilanie", n.supply, "supply")}${this.metric("Powrót", n.return, "return")}</div>`)}</div>${t.central_supply || t.central_return ? p`<div class="common">${this.metric("CO — zasilanie", t.central_supply, "supply")}${this.metric("CO — powrót", t.central_return, "return")}</div>` : c}</section>`;
  }
  viewSwitch() {
    return p`<footer><div class="view-switch"><button class=${this.displayMode === "home" ? "active" : ""} @click=${() => this.displayMode = "home"}>Dom + CO</button><button class=${this.displayMode === "heating" ? "active" : ""} @click=${() => this.displayMode = "heating"}>Pełny układ CO</button></div><small>Podgląd temperatur · rzut poglądowy, bez skali</small></footer>`;
  }
  render() {
    if (!this._config) return p``;
    const t = this.config, i = t.layout === "central" ? p`<nav aria-label="Wybór kondygnacji">${["basement", "ground", "upper"].map((e) => p`<button class=${this.selectedFloor === e ? "active" : ""} @click=${() => this.selectedFloor = e}>${X[e].name}</button>`)}</nav><div class="central-content">${this.floorPlan(this.selectedFloor)}${this.hydronic()}</div>` : p`<div class="two-floors">${this.floorPlan(t.floors?.[0] ?? "ground")}${this.floorPlan(t.floors?.[1] ?? "upper")}</div>${this.hydronic()}`;
    return p`<ha-card><main class=${`${t.layout === "floors_over_co" ? "floors-layout" : "central-layout"} ${this.displayMode === "heating" ? "heating-view" : ""}`}>${this.topBar()}${this.displayMode === "home" ? i : p`<section class="heating-panel"><div class="section-title"><b>Układ CO</b><span>Temperatury w °C</span></div>${this.hydronic()}</section>`}${this.viewSwitch()}</main></ha-card>`;
  }
  static styles = it`
    :host{display:block;color:var(--primary-text-color);--line-supply:var(--orange-color,#d85b16);--line-return:var(--info-color,#087faa);--panel:var(--secondary-background-color);--wall:var(--divider-color);--room:var(--card-background-color);font-family:var(--paper-font-body1_-_font-family,Roboto,sans-serif)}ha-card{overflow:hidden;background:var(--ha-card-background,var(--card-background-color));color:inherit}.central-layout,.floors-layout{padding:clamp(18px,2.4vw,30px);display:grid;gap:18px}.header{display:flex;justify-content:space-between;gap:20px;align-items:start}.eyebrow{font-size:11px;letter-spacing:1.25px;color:var(--secondary-text-color)}h2{font-size:clamp(22px,2.1vw,30px);margin:6px 0 0;line-height:1.1}.head-metrics{display:flex;gap:8px;align-items:start}.header .metric{background:transparent;border:0;padding:5px;min-width:auto;display:flex;gap:5px;align-items:baseline}.header .metric span{font-size:14px;color:var(--primary-text-color)}.header .metric strong{font-size:22px}.metric,.status{appearance:none;border:1px solid var(--divider-color);background:var(--panel);color:inherit;border-radius:10px;padding:8px 11px;text-align:left;min-width:104px;display:grid;gap:2px;cursor:pointer}.metric:disabled{cursor:default;opacity:.72}.metric span,.status span{font-size:11px;color:var(--secondary-text-color)}.metric strong,.status strong{font-size:clamp(14px,1.5vw,20px);white-space:nowrap}.supply strong{color:var(--line-supply)}.return strong{color:var(--line-return)}nav{display:flex;gap:8px;margin:3px 0 -2px}nav button,footer button{border:1px solid var(--divider-color);border-radius:9px;background:var(--card-background-color);color:inherit;padding:10px 16px;font:inherit;cursor:pointer}nav button.active,footer button.active{background:var(--primary-color);color:var(--text-primary-color,#fff);border-color:var(--primary-color)}.central-content{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(280px,1fr);gap:16px;align-items:stretch}.floor{background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:16px;padding:16px;min-width:0}.floor-title{font-size:16px;font-weight:650;margin-bottom:10px}.floor svg{width:100%;display:block;aspect-ratio:1.55}.room rect{fill:var(--panel);stroke:var(--wall);stroke-width:1}.room.warm rect{fill:color-mix(in srgb,var(--line-supply) 17%,var(--room))}.room.cool rect{fill:color-mix(in srgb,var(--line-return) 13%,var(--room))}.room text{fill:var(--primary-text-color);text-anchor:middle;pointer-events:none}.room-name{font-size:4px}.room-temp{font-size:5px;font-weight:bold}.room.clickable{cursor:pointer}.room.clickable:focus rect{stroke:var(--primary-color);stroke-width:2}.hydronic{background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:16px;padding:18px;display:grid;grid-template-columns:1fr 22px 1fr;gap:10px;align-content:start;position:relative}.plant{border:1px solid var(--divider-color);border-radius:12px;padding:10px;display:grid;gap:6px;background:var(--card-background-color)}.pump{grid-column:1}.buffer{grid-column:3;border-radius:38%}.device-icon{font-size:34px;line-height:20px;color:var(--primary-color)}.lines{grid-column:2;grid-row:1;position:relative;min-height:150px}.lines i{position:absolute;height:3px;border-radius:8px;left:0;right:0}.supply-line{top:42%;background:var(--line-supply)}.return-line{top:58%;background:var(--line-return)}.hotwater{grid-column:1 / -1}.risers{grid-column:1 / -1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.riser{border-top:3px solid var(--line-supply);padding-top:6px;display:grid;gap:5px;min-width:0}.riser .metric{min-width:0;padding:6px}.common{grid-column:1/-1;display:flex;gap:8px;flex-wrap:wrap}.two-floors{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.floors-layout .hydronic{grid-template-columns:1fr 24px 1fr 1fr}.floors-layout .risers{grid-column:4;grid-row:1 / span 2;grid-template-columns:1fr}.floors-layout .hotwater{grid-column:3;grid-row:1}.floors-layout .common{grid-column:1 / 4}.heating-panel{display:grid;gap:16px;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:18px;padding:20px;min-height:340px}.section-title{display:flex;justify-content:space-between;color:var(--secondary-text-color);font-size:13px}.section-title b{font-size:16px;color:var(--primary-text-color)}.heating-view .hydronic{border:0;padding:16px 0;grid-template-columns:1fr 42px 1fr 1fr;align-items:center}.heating-view .pump{grid-column:1}.heating-view .buffer{grid-column:3}.heating-view .hotwater{grid-column:4;grid-row:1}.heating-view .risers{grid-column:1/-1;grid-row:2;grid-template-columns:repeat(3,minmax(0,1fr));margin-left:28%;}.heating-view .common{grid-row:3}footer{border-top:1px solid var(--divider-color);padding-top:14px;display:grid;justify-items:center;gap:9px}footer small{font-size:11px;color:var(--secondary-text-color)}.view-switch{display:flex;gap:8px}@media(max-width:700px){.header{display:grid;gap:10px}.central-content,.two-floors{grid-template-columns:1fr}.hydronic,.floors-layout .hydronic,.heating-view .hydronic{grid-template-columns:1fr 14px 1fr}.floors-layout .risers,.heating-view .risers{grid-column:1/-1;grid-row:auto;grid-template-columns:repeat(3,minmax(0,1fr));margin-left:0}.floors-layout .hotwater,.floors-layout .common,.heating-view .hotwater{grid-column:1/-1;grid-row:auto}.room-name{font-size:3.6px}.room-temp{font-size:4.5px}}@media(max-width:410px){.risers,.floors-layout .risers,.heating-view .risers{grid-template-columns:1fr}.metric{min-width:0}nav button,footer button{padding:8px 10px}.room-name{font-size:3.3px}.header .metric strong{font-size:18px}}
  `;
}
customElements.define(Nt, Tt);
window.customCards = window.customCards || [];
window.customCards.push({ type: "dom-heat-card", name: "Dom Heat Card", description: "Temperatury domu i instalacji CO", preview: !0, documentationURL: "https://github.com/Pablos249/HA_Temperature_view" });
export {
  Tt as DomHeatCard
};
