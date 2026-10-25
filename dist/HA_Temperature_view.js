const j = globalThis, D = j.ShadowRoot && (j.ShadyCSS === void 0 || j.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, B = /* @__PURE__ */ Symbol(), Z = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== B) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (D && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = Z.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && Z.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ft = (n) => new at(typeof n == "string" ? n : n + "", void 0, B), st = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((i, r, o) => i + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + n[o + 1], n[0]);
  return new at(e, n, B);
}, mt = (n, t) => {
  if (D) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), r = j.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = e.cssText, n.appendChild(i);
  }
}, G = D ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return ft(e);
})(n) : n;
const { is: gt, defineProperty: xt, getOwnPropertyDescriptor: vt, getOwnPropertyNames: yt, getOwnPropertySymbols: wt, getPrototypeOf: kt } = Object, N = globalThis, q = N.trustedTypes, bt = q ? q.emptyScript : "", $t = N.reactiveElementPolyfillSupport, A = (n, t) => n, U = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? bt : null;
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
} }, lt = (n, t) => !gt(n, t), J = { attribute: !0, type: String, converter: U, reflect: !1, useDefault: !1, hasChanged: lt };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), N.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let k = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = J) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), r = this.getPropertyDescriptor(t, i, e);
      r !== void 0 && xt(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: r, set: o } = vt(this.prototype, t) ?? { get() {
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
    return this.elementProperties.get(t) ?? J;
  }
  static _$Ei() {
    if (this.hasOwnProperty(A("elementProperties"))) return;
    const t = kt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(A("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(A("properties"))) {
      const e = this.properties, i = [...yt(e), ...wt(e)];
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
      for (const r of i) e.unshift(G(r));
    } else t !== void 0 && e.push(G(t));
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
    return mt(t, this.constructor.elementStyles), t;
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
      const o = (i.converter?.toAttribute !== void 0 ? i.converter : U).toAttribute(e, i.type);
      this._$Em = t, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, r = i._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const o = i.getPropertyOptions(r), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : U;
      this._$Em = r;
      const l = a.fromAttribute(e, o.type);
      this[r] = l ?? this._$Ej?.get(r) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, r = !1, o) {
    if (t !== void 0) {
      const a = this.constructor;
      if (r === !1 && (o = this[t]), i ??= a.getPropertyOptions(t), !((i.hasChanged ?? lt)(o, e) || i.useDefault && i.reflect && o === this._$Ej?.get(t) && !this.hasAttribute(a._$Eu(t, i)))) return;
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
k.elementStyles = [], k.shadowRootOptions = { mode: "open" }, k[A("elementProperties")] = /* @__PURE__ */ new Map(), k[A("finalized")] = /* @__PURE__ */ new Map(), $t?.({ ReactiveElement: k }), (N.reactiveElementVersions ??= []).push("2.1.2");
const W = globalThis, Y = (n) => n, O = W.trustedTypes, X = O ? O.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, dt = "$lit$", g = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + g, _t = `<${ht}>`, y = document, M = () => y.createComment(""), S = (n) => n === null || typeof n != "object" && typeof n != "function", F = Array.isArray, zt = (n) => F(n) || typeof n?.[Symbol.iterator] == "function", I = `[ 	
\f\r]`, _ = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Q = /-->/g, tt = />/g, x = RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, it = /"/g, ct = /^(?:script|style|textarea|title)$/i, pt = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), p = pt(1), z = pt(2), w = /* @__PURE__ */ Symbol.for("lit-noChange"), c = /* @__PURE__ */ Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), v = y.createTreeWalker(y, 129);
function ut(n, t) {
  if (!F(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return X !== void 0 ? X.createHTML(t) : t;
}
const At = (n, t) => {
  const e = n.length - 1, i = [];
  let r, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = _;
  for (let l = 0; l < e; l++) {
    const s = n[l];
    let d, u, h = -1, f = 0;
    for (; f < s.length && (a.lastIndex = f, u = a.exec(s), u !== null); ) f = a.lastIndex, a === _ ? u[1] === "!--" ? a = Q : u[1] !== void 0 ? a = tt : u[2] !== void 0 ? (ct.test(u[2]) && (r = RegExp("</" + u[2], "g")), a = x) : u[3] !== void 0 && (a = x) : a === x ? u[0] === ">" ? (a = r ?? _, h = -1) : u[1] === void 0 ? h = -2 : (h = a.lastIndex - u[2].length, d = u[1], a = u[3] === void 0 ? x : u[3] === '"' ? it : et) : a === it || a === et ? a = x : a === Q || a === tt ? a = _ : (a = x, r = void 0);
    const m = a === x && n[l + 1].startsWith("/>") ? " " : "";
    o += a === _ ? s + _t : h >= 0 ? (i.push(d), s.slice(0, h) + dt + s.slice(h) + g + m) : s + g + (h === -2 ? l : m);
  }
  return [ut(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class C {
  constructor({ strings: t, _$litType$: e }, i) {
    let r;
    this.parts = [];
    let o = 0, a = 0;
    const l = t.length - 1, s = this.parts, [d, u] = At(t, e);
    if (this.el = C.createElement(d, i), v.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (r = v.nextNode()) !== null && s.length < l; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const h of r.getAttributeNames()) if (h.endsWith(dt)) {
          const f = u[a++], m = r.getAttribute(h).split(g), H = /([.?@])?(.*)/.exec(f);
          s.push({ type: 1, index: o, name: H[2], strings: m, ctor: H[1] === "." ? St : H[1] === "?" ? Ct : H[1] === "@" ? Et : T }), r.removeAttribute(h);
        } else h.startsWith(g) && (s.push({ type: 6, index: o }), r.removeAttribute(h));
        if (ct.test(r.tagName)) {
          const h = r.textContent.split(g), f = h.length - 1;
          if (f > 0) {
            r.textContent = O ? O.emptyScript : "";
            for (let m = 0; m < f; m++) r.append(h[m], M()), v.nextNode(), s.push({ type: 2, index: ++o });
            r.append(h[f], M());
          }
        }
      } else if (r.nodeType === 8) if (r.data === ht) s.push({ type: 2, index: o });
      else {
        let h = -1;
        for (; (h = r.data.indexOf(g, h + 1)) !== -1; ) s.push({ type: 7, index: o }), h += g.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const i = y.createElement("template");
    return i.innerHTML = t, i;
  }
}
function $(n, t, e = n, i) {
  if (t === w) return t;
  let r = i !== void 0 ? e._$Co?.[i] : e._$Cl;
  const o = S(t) ? void 0 : t._$litDirective$;
  return r?.constructor !== o && (r?._$AO?.(!1), o === void 0 ? r = void 0 : (r = new o(n), r._$AT(n, e, i)), i !== void 0 ? (e._$Co ??= [])[i] = r : e._$Cl = r), r !== void 0 && (t = $(n, r._$AS(n, t.values), r, i)), t;
}
class Mt {
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
    let o = v.nextNode(), a = 0, l = 0, s = i[0];
    for (; s !== void 0; ) {
      if (a === s.index) {
        let d;
        s.type === 2 ? d = new E(o, o.nextSibling, this, t) : s.type === 1 ? d = new s.ctor(o, s.name, s.strings, this, t) : s.type === 6 && (d = new Ht(o, this, t)), this._$AV.push(d), s = i[++l];
      }
      a !== s?.index && (o = v.nextNode(), a++);
    }
    return v.currentNode = y, r;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class E {
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
    t = $(this, t, e), S(t) ? t === c || t == null || t === "" ? (this._$AH !== c && this._$AR(), this._$AH = c) : t !== this._$AH && t !== w && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : zt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== c && S(this._$AH) ? this._$AA.nextSibling.data = t : this.T(y.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: i } = t, r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = C.createElement(ut(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === r) this._$AH.p(e);
    else {
      const o = new Mt(r, this), a = o.u(this.options);
      o.p(e), this.T(a), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = rt.get(t.strings);
    return e === void 0 && rt.set(t.strings, e = new C(t)), e;
  }
  k(t) {
    F(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, r = 0;
    for (const o of t) r === e.length ? e.push(i = new E(this.O(M()), this.O(M()), this, this.options)) : i = e[r], i._$AI(o), r++;
    r < e.length && (this._$AR(i && i._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const i = Y(t).nextSibling;
      Y(t).remove(), t = i;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class T {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, r, o) {
    this.type = 1, this._$AH = c, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = o, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = c;
  }
  _$AI(t, e = this, i, r) {
    const o = this.strings;
    let a = !1;
    if (o === void 0) t = $(this, t, e, 0), a = !S(t) || t !== this._$AH && t !== w, a && (this._$AH = t);
    else {
      const l = t;
      let s, d;
      for (t = o[0], s = 0; s < o.length - 1; s++) d = $(this, l[i + s], e, s), d === w && (d = this._$AH[s]), a ||= !S(d) || d !== this._$AH[s], d === c ? t = c : t !== c && (t += (d ?? "") + o[s + 1]), this._$AH[s] = d;
    }
    a && !r && this.j(t);
  }
  j(t) {
    t === c ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class St extends T {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === c ? void 0 : t;
  }
}
class Ct extends T {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== c);
  }
}
class Et extends T {
  constructor(t, e, i, r, o) {
    super(t, e, i, r, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = $(this, t, e, 0) ?? c) === w) return;
    const i = this._$AH, r = t === c && i !== c || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, o = t !== c && (i === c || r);
    r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ht {
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
const Pt = W.litHtmlPolyfillSupport;
Pt?.(C, E), (W.litHtmlVersions ??= []).push("3.3.3");
const jt = (n, t, e) => {
  const i = e?.renderBefore ?? t;
  let r = i._$litPart$;
  if (r === void 0) {
    const o = e?.renderBefore ?? null;
    i._$litPart$ = r = new E(t.insertBefore(M(), o), o, void 0, e ?? {});
  }
  return r._$AI(n), r;
};
const K = globalThis;
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = jt(e, this.renderRoot, this.renderOptions);
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
b._$litElement$ = !0, b.finalized = !0, K.litElementHydrateSupport?.({ LitElement: b });
const Ot = K.litElementPolyfillSupport;
Ot?.({ LitElement: b });
(K.litElementVersions ??= []).push("4.2.2");
const Rt = { CHILD: 2 }, Nt = (n) => (...t) => ({ _$litDirective$: n, values: t });
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
class V extends Tt {
  constructor(t) {
    if (super(t), this.it = c, t.type !== Rt.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
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
V.directiveName = "unsafeHTML", V.resultType = 1;
class L extends V {
}
L.directiveName = "unsafeSVG", L.resultType = 2;
const ot = Nt(L), It = '<svg xmlns="http://www.w3.org/2000/svg" width="760" height="600" viewBox="0 0 760 600" role="img" aria-label="rzut-parter" font-family="DejaVu Sans, Arial, sans-serif"><g id="room-parter-biuro"><rect x="20" y="20" width="218" height="240" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="129.0" y="120.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Biuro</text><text id="value-parter-biuro" x="129.0" y="175.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-schody"><rect x="238" y="20" width="180" height="240" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><path d="M252 40H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 60H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 80H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 100H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 120H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 140H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 160H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 180H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 200H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 220H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M252 240H404" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="286.0" y="126.0" width="84" height="28" rx="4" fill="var(--dh-panel, #ffffff)"/><text x="328.0" y="146.0" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Schody</text></g><g id="room-parter-salon"><rect x="418" y="20" width="322" height="420" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="579.0" y="210.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Salon</text><text id="value-parter-salon" x="579.0" y="265.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-hall"><rect x="20" y="260" width="218" height="180" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="129.0" y="330.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Hall</text><text id="value-parter-hall" x="129.0" y="385.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-korytarz-1"><rect x="238" y="260" width="180" height="180" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="328.0" y="330.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Korytarz I</text><text id="value-parter-korytarz-1" x="328.0" y="385.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-parter-kuchnia"><rect x="20" y="440" width="720" height="140" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="380.0" y="490.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Kuchnia</text><text id="value-parter-kuchnia" x="380.0" y="545.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g></svg>', Ut = '<svg xmlns="http://www.w3.org/2000/svg" width="760" height="600" viewBox="0 0 760 600" role="img" aria-label="rzut-pietro" font-family="DejaVu Sans, Arial, sans-serif"><g id="room-pietro-lazienka"><rect x="20" y="20" width="245" height="420" rx="0" fill="var(--dh-warm, #f3e9dc)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="142.5" y="210.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Łazienka</text><text id="value-pietro-lazienka" x="142.5" y="265.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-schody"><rect x="265" y="20" width="170" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><path d="M279 40H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 60H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 80H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 100H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 120H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 140H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 160H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 180H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M279 200H421" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="308.0" y="111.0" width="84" height="28" rx="4" fill="var(--dh-panel, #ffffff)"/><text x="350.0" y="131.0" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Schody</text></g><g id="room-pietro-sypialnia-1"><rect x="435" y="20" width="305" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="587.5" y="105.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Sypialnia I</text><text id="value-pietro-sypialnia-1" x="587.5" y="160.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-korytarz-2"><rect x="265" y="230" width="170" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="350.0" y="315.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Korytarz II</text><text id="value-pietro-korytarz-2" x="350.0" y="370.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-sypialnia-2"><rect x="435" y="230" width="305" height="210" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="587.5" y="315.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Sypialnia II</text><text id="value-pietro-sypialnia-2" x="587.5" y="370.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-sypialnia-3"><rect x="20" y="440" width="490" height="140" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="265.0" y="490.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Sypialnia III</text><text id="value-pietro-sypialnia-3" x="265.0" y="545.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-pietro-garderoba"><rect x="510" y="440" width="230" height="140" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="625.0" y="490.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Garderoba</text><text id="value-pietro-garderoba" x="625.0" y="545.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g></svg>', Vt = '<svg xmlns="http://www.w3.org/2000/svg" width="760" height="600" viewBox="0 0 760 600" role="img" aria-label="rzut-piwnica" font-family="DejaVu Sans, Arial, sans-serif"><g id="room-piwnica-lazienka"><rect x="20" y="20" width="170" height="200" rx="0" fill="var(--dh-warm, #f3e9dc)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="105.0" y="100.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Łazienka</text><text id="value-piwnica-lazienka" x="105.0" y="155.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-pom-gosp-1"><rect x="190" y="20" width="100" height="130" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="240.0" y="65.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Pom.</text><text x="240.0" y="87.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">gosp.*</text><text id="value-piwnica-pom-gosp-1" x="240.0" y="120.0" fill="var(--dh-ink, #163344)" font-size="27" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-schody"><rect x="290" y="20" width="170" height="130" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><path d="M304 40H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 60H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 80H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 100H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M304 120H446" fill="none" stroke="var(--dh-line, #c4d2dc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="333.0" y="71.0" width="84" height="28" rx="4" fill="var(--dh-panel, #ffffff)"/><text x="375.0" y="91.0" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Schody</text></g><g id="room-piwnica-silownia"><rect x="460" y="20" width="280" height="400" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="600.0" y="200.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Siłownia</text><text id="value-piwnica-silownia" x="600.0" y="255.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-magazyn"><rect x="20" y="220" width="100" height="200" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="70.0" y="300.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Magazyn*</text><text id="value-piwnica-magazyn" x="70.0" y="355.0" fill="var(--dh-ink, #163344)" font-size="27" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-pom-gosp-2"><rect x="120" y="220" width="170" height="200" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="205.0" y="300.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Pom. gosp.*</text><text id="value-piwnica-pom-gosp-2" x="205.0" y="355.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-korytarz"><rect x="290" y="150" width="170" height="270" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="375.0" y="265.0" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="middle">Korytarz</text><text id="value-piwnica-korytarz" x="375.0" y="320.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g><g id="room-piwnica-garaz"><rect x="20" y="420" width="720" height="160" rx="0" fill="var(--dh-room, #e8f0f3)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="380.0" y="480.0" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="middle">Garaż</text><text id="value-piwnica-garaz" x="380.0" y="535.0" fill="var(--dh-ink, #163344)" font-size="34" font-weight="400" text-anchor="middle">—°</text></g></svg>', Lt = '<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="660" viewBox="0 0 1300 660" role="img" aria-label="uklad-co-poziomy" font-family="DejaVu Sans, Arial, sans-serif"><path d="M180 210H420" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M420 350H180" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M560 210H1190" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M560 350H1190" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M810 210V246" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M810 315V350" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1000 210V246" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1000 315V350" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1190 210V246" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1190 315V350" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M165 365V425H385V475" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M420 475V450H140V365" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><rect x="60" y="175" width="120" height="190" rx="12" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="69" y="185" width="102" height="170" rx="8" fill="var(--dh-panel, #ffffff)"/><circle cx="120.0" cy="228.2" r="38.4" fill="var(--dh-fan, #365365)"/><circle cx="120.0" cy="228.2" r="32.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="228.2" r="25.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="228.2" r="18.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><path d="M81.6 228.2L158.4 228.2" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M120.0 189.79999999999998L120.0 266.59999999999997" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 201.32L146.88 255.07999999999998" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 255.07999999999998L146.88 201.32" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="120.0" cy="228.2" r="6" fill="var(--dh-metal, #dbe5ec)"/><circle cx="120.0" cy="311.79999999999995" r="38.4" fill="var(--dh-fan, #365365)"/><circle cx="120.0" cy="311.79999999999995" r="32.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="311.79999999999995" r="25.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><circle cx="120.0" cy="311.79999999999995" r="18.4" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" fill="none"/><path d="M81.6 311.79999999999995L158.4 311.79999999999995" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M120.0 273.4L120.0 350.19999999999993" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 284.91999999999996L146.88 338.67999999999995" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.12 338.67999999999995L146.88 284.91999999999996" fill="none" stroke="var(--dh-metal, #dbe5ec)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="120.0" cy="311.79999999999995" r="6" fill="var(--dh-metal, #dbe5ec)"/><text x="120" y="150" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pompa ciepła</text><rect x="420" y="165" width="140" height="230" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="430" y="183" width="120" height="194" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="490.0" y="145" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Bufor 1000 l</text><rect x="345" y="475" width="130" height="110" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="355" y="493" width="110" height="74" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="410.0" y="455" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">CWU</text><text x="290" y="171" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie PC</text><text id="value-pc-supply" x="290" y="203" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text x="290" y="318" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót PC</text><text id="value-pc-return" x="290" y="350" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-top" x="490" y="226" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-middle" x="490" y="291" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-bottom" x="490" y="356" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text id="value-cwu" x="410" y="540" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><rect x="735" y="246" width="150" height="69" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="810" y="285" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pion 1</text><text x="810" y="149" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-riser-1-supply" x="810" y="181" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="810" y="382" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-riser-1-return" x="810" y="414" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><rect x="925" y="246" width="150" height="69" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="1000" y="285" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pion 2</text><text x="1000" y="149" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-riser-2-supply" x="1000" y="181" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="1000" y="382" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-riser-2-return" x="1000" y="414" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><rect x="1115" y="246" width="150" height="69" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="1190" y="285" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Pion 3</text><text x="1190" y="149" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-riser-3-supply" x="1190" y="181" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="1190" y="382" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-riser-3-return" x="1190" y="414" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text x="40" y="45" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="start">INSTALACJA CENTRALNEGO OGRZEWANIA</text><text x="40" y="630" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="start">Schemat funkcjonalny • przebieg gałęzi CWU do potwierdzenia na instalacji</text><path d="M760 560H795" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><text x="810" y="567" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="start">Zasilanie</text><path d="M1010 560H1045" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><text x="1060" y="567" fill="var(--dh-muted, #526c7e)" font-size="18" font-weight="400" text-anchor="start">Powrót</text></svg>', Dt = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="790" viewBox="0 0 500 790" role="img" aria-label="uklad-co-kolumna" font-family="DejaVu Sans, Arial, sans-serif"><text x="30" y="40" fill="var(--dh-muted, #526c7e)" font-size="22" font-weight="400" text-anchor="start">UKŁAD CO</text><rect x="24" y="65" width="452" height="128" rx="18" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="48" y="99" fill="var(--dh-muted, #526c7e)" font-size="20" font-weight="400" text-anchor="start">Pompa ciepła</text><text x="135" y="132" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Zasilanie</text><text id="value-pc-supply" x="135" y="164" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><text x="365" y="132" fill="var(--dh-muted, #526c7e)" font-size="15" font-weight="400" text-anchor="middle">Powrót</text><text id="value-pc-return" x="365" y="164" fill="var(--dh-ink, #163344)" font-size="28" font-weight="400" text-anchor="middle">—°</text><rect x="54" y="252" width="200" height="225" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="64" y="270" width="180" height="189" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="154.0" y="232" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">Bufor 1000 l</text><rect x="306" y="290" width="140" height="150" rx="32" fill="var(--dh-metal, #dbe5ec)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><rect x="316" y="308" width="120" height="114" rx="20" fill="var(--dh-room, #e8f0f3)"/><text x="376.0" y="270" fill="var(--dh-ink, #163344)" font-size="22" font-weight="400" text-anchor="middle">CWU</text><text id="value-buffer-top" x="154" y="307" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-middle" x="154" y="375" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><text id="value-buffer-bottom" x="154" y="440" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><text id="value-cwu" x="376" y="380" fill="var(--dh-ink, #163344)" font-size="32" font-weight="400" text-anchor="middle">—°</text><path d="M254 308H280V520H86H416" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M54 440H32V715H416" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M86 520V552" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M86 686V715" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="23" y="552" width="126" height="134" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="86" y="581" fill="var(--dh-ink, #163344)" font-size="18" font-weight="400" text-anchor="middle">Pion 1</text><text id="value-riser-1-supply" x="86" y="620" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text id="value-riser-1-return" x="86" y="662" fill="var(--dh-ink, #163344)" font-size="26" font-weight="400" text-anchor="middle">—°</text><path d="M251 520V552" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M251 686V715" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="188" y="552" width="126" height="134" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="251" y="581" fill="var(--dh-ink, #163344)" font-size="18" font-weight="400" text-anchor="middle">Pion 2</text><text id="value-riser-2-supply" x="251" y="620" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text id="value-riser-2-return" x="251" y="662" fill="var(--dh-ink, #163344)" font-size="26" font-weight="400" text-anchor="middle">—°</text><path d="M416 520V552" fill="none" stroke="var(--dh-hot, #cf652d)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M416 686V715" fill="none" stroke="var(--dh-cold, #218bad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="353" y="552" width="126" height="134" rx="12" fill="var(--dh-panel, #ffffff)" stroke="var(--dh-line, #c4d2dc)" stroke-width="3"/><text x="416" y="581" fill="var(--dh-ink, #163344)" font-size="18" font-weight="400" text-anchor="middle">Pion 3</text><text id="value-riser-3-supply" x="416" y="620" fill="var(--dh-ink, #163344)" font-size="30" font-weight="400" text-anchor="middle">—°</text><text id="value-riser-3-return" x="416" y="662" fill="var(--dh-ink, #163344)" font-size="26" font-weight="400" text-anchor="middle">—°</text><text x="250" y="760" fill="var(--dh-muted, #526c7e)" font-size="16" font-weight="400" text-anchor="middle">Góra: zasilanie • dół: powrót</text></svg>', Bt = { ground: It, upper: Ut, basement: Vt }, Wt = { horizontal: Lt, column: Dt }, R = {
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
}, Ft = (n) => !n || ["unknown", "unavailable", "none", "null"].includes(n.toLowerCase());
function Kt(n, t, e = 1) {
  const i = t ? n?.states[t] : void 0;
  if (!i || Ft(i.state)) return { text: "—", value: void 0, unit: "", entity: t };
  const r = Number(i.state), o = String(i.attributes.unit_of_measurement ?? "");
  return Number.isFinite(r) ? { text: `${r.toFixed(e)}${o ? ` ${o}` : ""}`, value: r, unit: o, entity: t } : { text: i.state, value: void 0, unit: o, entity: t };
}
const Zt = [["basement", "Piwnica"], ["ground", "Parter"], ["upper", "Piętro"]], P = [{ name: "Pion 1" }, { name: "Pion 2" }, { name: "Pion 3" }];
class Gt extends b {
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
    const o = [...r.entities.risers ?? P].map((a) => ({ ...a }));
    for (; o.length < 3; ) o.push({ ...P[o.length] });
    o[t][e] = i || void 0, r.entities.risers = o, this.emit(r);
  }
  updateRoom(t, e, i, r) {
    const o = this.clone();
    o.rooms ??= {};
    const a = [...o.rooms[t] ?? []].map((s) => ({ ...s }));
    let l = a.find((s) => s.id === e);
    l || (l = { id: e }, a.push(l)), i === "target" || i === "tolerance" ? l[i] = r === "" ? void 0 : Number(r) : l[i] = r || void 0, o.rooms[t] = a, this.emit(o);
  }
  picker(t, e, i = !1) {
    const r = this._config?.entities ?? {};
    return p`<label>${t}${i ? p` <small>opcjonalnie</small>` : c}<ha-entity-picker .hass=${this.hass} .value=${r[e] ?? ""} @value-changed=${(o) => this.updateEntity(e, o.detail.value)} allow-custom-entity></ha-entity-picker></label>`;
  }
  select(t, e, i) {
    return p`<label>${t}<select .value=${e} @change=${(r) => i(r.target.value)}>${Zt.map(([r, o]) => p`<option value=${r}>${o}</option>`)}</select></label>`;
  }
  roomEditor(t) {
    const e = this._config?.rooms?.[t] ?? [];
    return p`<details><summary>${R[t].name} — pokoje i czujniki</summary><div class="rooms">${R[t].rooms.filter((i) => i.sensor !== !1).map((i) => {
      const r = e.find((o) => o.id === i.id) ?? { id: i.id };
      return p`<fieldset><legend>${r.name ?? i.name}</legend><label>Nazwa<input .value=${r.name ?? ""} placeholder=${i.name} @input=${(o) => this.updateRoom(t, i.id, "name", o.target.value)}></label><label>Encja temperatury<ha-entity-picker .hass=${this.hass} .value=${r.entity ?? ""} @value-changed=${(o) => this.updateRoom(t, i.id, "entity", o.detail.value)} allow-custom-entity></ha-entity-picker></label><div class="two"><label>Temperatura zadana<input type="number" step="0.1" .value=${r.target?.toString() ?? ""} @input=${(o) => this.updateRoom(t, i.id, "target", o.target.value)}></label><label>Tolerancja °C<input type="number" step="0.1" min="0" .value=${r.tolerance?.toString() ?? ""} @input=${(o) => this.updateRoom(t, i.id, "tolerance", o.target.value)}></label></div></fieldset>`;
    })}</div></details>`;
  }
  render() {
    const t = this._config ?? {}, i = (t.entities ?? {}).risers ?? P;
    return p`<div class="editor"><h3>Układ i prezentacja</h3><label>Szablon<select .value=${t.layout ?? "central"} @change=${(r) => this.updateRoot("layout", r.target.value)}><option value="central">Centralny rzut i panel CO</option><option value="floors_over_co">Dwa rzuty nad instalacją</option></select></label>${t.layout !== "floors_over_co" ? this.select("Kondygnacja początkowa", t.floor ?? "ground", (r) => this.updateRoot("floor", r)) : p`<div class="two">${this.select("Lewy rzut", t.floors?.[0] ?? "ground", (r) => this.updateFloor(0, r))}${this.select("Prawy rzut", t.floors?.[1] ?? "upper", (r) => this.updateFloor(1, r))}</div>`}<label>Precyzja odczytów<select .value=${String(t.precision ?? 1)} @change=${(r) => this.updateRoot("precision", r.target.value)}><option value="0">0 miejsc po przecinku</option><option value="1">1 miejsce po przecinku</option><option value="2">2 miejsca po przecinku</option><option value="3">3 miejsca po przecinku</option></select></label><h3>Główne czujniki</h3>${this.picker("Temperatura zewnętrzna", "outside")}${this.picker("CWU", "hot_water")}${this.picker("Stan pompy", "pump_status", !0)}${this.picker("Prędkość wentylatorów", "fan_speed", !0)}${this.picker("Stan pompy obiegowej P1", "circulation_status", !0)}<h3>Pompa i bufor</h3>${this.picker("Zasilanie pompy", "pump_supply")}${this.picker("Powrót pompy", "pump_return")}${this.picker("Bufor — góra", "buffer_top")}${this.picker("Bufor — środek", "buffer_middle")}${this.picker("Bufor — dół", "buffer_bottom")}${this.picker("Wspólne zasilanie CO", "central_supply", !0)}${this.picker("Wspólny powrót CO", "central_return", !0)}<h3>Trzy piony ogrzewania</h3><div class="risers">${[0, 1, 2].map((r) => {
      const o = i[r] ?? P[r];
      return p`<fieldset><legend>Pion ${r + 1}</legend><label>Nazwa<input .value=${o.name ?? ""} placeholder=${`Pion ${r + 1}`} @input=${(a) => this.updateRiser(r, "name", a.target.value)}></label><label>Zasilanie<ha-entity-picker .hass=${this.hass} .value=${o.supply ?? ""} @value-changed=${(a) => this.updateRiser(r, "supply", a.detail.value)} allow-custom-entity></ha-entity-picker></label><label>Powrót<ha-entity-picker .hass=${this.hass} .value=${o.return ?? ""} @value-changed=${(a) => this.updateRiser(r, "return", a.detail.value)} allow-custom-entity></ha-entity-picker></label></fieldset>`;
    })}</div><h3>Pomieszczenia</h3>${this.roomEditor("ground")}${this.roomEditor("upper")}${this.roomEditor("basement")}</div>`;
  }
  static styles = st`.editor{display:grid;gap:14px;padding:12px;max-width:680px}h3{font-size:16px;margin:12px 0 0;border-top:1px solid var(--divider-color);padding-top:14px}h3:first-child{border:0;padding-top:0;margin-top:0}label{display:grid;gap:5px;font-size:14px}small{color:var(--secondary-text-color)}select,input{box-sizing:border-box;width:100%;padding:9px;border-radius:6px;border:1px solid var(--divider-color);background:var(--card-background-color);color:var(--primary-text-color);font:inherit}.two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.risers{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}fieldset{border:1px solid var(--divider-color);border-radius:8px;display:grid;gap:9px;padding:10px;min-width:0}legend{padding:0 4px;font-weight:600}details{border:1px solid var(--divider-color);border-radius:8px;padding:10px}summary{cursor:pointer;font-weight:600}.rooms{display:grid;gap:10px;margin-top:12px}@media(max-width:560px){.two,.risers{grid-template-columns:1fr}}`;
}
customElements.define("dom-heat-card-editor", Gt);
const qt = "dom-heat-card", Jt = {
  ground: { biuro: "office", salon: "living", hall: "hall", "korytarz-1": "corridor", kuchnia: "kitchen" },
  upper: { lazienka: "bathroom", "sypialnia-1": "bedroom_1", "korytarz-2": "corridor", "sypialnia-2": "bedroom_2", "sypialnia-3": "bedroom_3", garderoba: "wardrobe" },
  basement: { lazienka: "bathroom", "pom-gosp-1": "utility", silownia: "gym", magazyn: "storage", "pom-gosp-2": "utility_2", korytarz: "corridor", garaz: "garage" }
}, Yt = {
  ground: { biuro: [129, 175], salon: [579, 265], hall: [129, 385], "korytarz-1": [328, 385], kuchnia: [380, 545] },
  upper: { lazienka: [142.5, 265], "sypialnia-1": [587.5, 160], "korytarz-2": [350, 370], "sypialnia-2": [587.5, 370], "sypialnia-3": [265, 545], garderoba: [625, 545] },
  basement: { lazienka: [105, 155], "pom-gosp-1": [240, 120], silownia: [600, 255], magazyn: [70, 355], "pom-gosp-2": [205, 355], korytarz: [375, 320], garaz: [380, 535] }
}, Xt = {
  horizontal: { box: "0 0 1300 660", values: { "pc-supply": [290, 203], "pc-return": [290, 350], "buffer-top": [490, 226], "buffer-middle": [490, 291], "buffer-bottom": [490, 356], cwu: [390, 555], "riser-1-supply": [810, 181], "riser-1-return": [810, 414], "riser-2-supply": [1e3, 181], "riser-2-return": [1e3, 414], "riser-3-supply": [1190, 181], "riser-3-return": [1190, 414] } },
  column: { box: "0 0 500 790", values: { "pc-supply": [135, 164], "pc-return": [365, 164], "buffer-top": [154, 307], "buffer-middle": [154, 375], "buffer-bottom": [154, 440], cwu: [376, 380], "riser-1-supply": [86, 620], "riser-1-return": [86, 662], "riser-2-supply": [251, 620], "riser-2-return": [251, 662], "riser-3-supply": [416, 620], "riser-3-return": [416, 662] } }
}, nt = { layout: "central", floor: "ground", floors: ["ground", "upper"], precision: 1 };
class Qt extends b {
  static properties = { hass: { attribute: !1 }, _config: { state: !0 }, selectedFloor: { state: !0 }, displayMode: { state: !0 } };
  constructor() {
    super(), this.selectedFloor = "ground", this.displayMode = "home";
  }
  setConfig(t) {
    if (!t || t.type !== "custom:dom-heat-card") throw new Error("Wymagany jest typ: custom:dom-heat-card");
    if (t.layout && !["central", "floors_over_co"].includes(t.layout)) throw new Error("layout musi być: central albo floors_over_co");
    if (t.precision !== void 0 && (!Number.isInteger(t.precision) || t.precision < 0 || t.precision > 3)) throw new Error("precision musi być liczbą całkowitą od 0 do 3");
    this._config = { ...nt, ...t }, this.selectedFloor = t.floor ?? "ground";
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
    return this._config ?? { type: "custom:dom-heat-card", ...nt };
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
    const e = R[t], i = Bt[t].replace(/(<text id="value-[^"]+")/g, '$1 opacity="0"');
    return p`<section class="floor asset-floor" aria-label=${e.name}><div class="floor-title">${e.name}</div><div class="asset-canvas">${ot(i)}<svg class="asset-values" viewBox="0 0 760 600" aria-label=${`Temperatury: ${e.name}`}>${Object.entries(Yt[t]).map(([r, o]) => {
      const a = Jt[t][r], l = e.rooms.find((u) => u.id === a), d = (l ? this.roomValue(t, l) : void 0)?.config?.entity;
      return z`<text class=${d ? "asset-value clickable" : "asset-value"} x=${o[0]} y=${o[1]} @click=${() => this.moreInfo(d)}>${this.demo(d, "—")}</text>`;
    })}</svg></div></section>`;
  }
  metric(t, e, i = "") {
    const r = this.val(e);
    return p`<button class=${`metric ${i}`} ?disabled=${!e} @click=${() => this.moreInfo(e)}><span>${t}</span><strong>${this.config.demo && r.value === void 0 ? "—" : r.text}</strong></button>`;
  }
  topBar() {
    const t = this.config.layout === "central";
    return p`<header class="header"><div><div class="eyebrow">${t ? "WIDOK ŁĄCZONY" : "INSPIRACJA PRZYKŁADEM"}</div><h2>${t ? "Centralny rzut i pasek CO" : "Dwa rzuty nad instalacją"}</h2></div><div class="head-metrics">${this.metric("Na zewnątrz", this.e.outside)}${this.e.pump_status ? p`<button class="status" @click=${() => this.moreInfo(this.e.pump_status)}><span>Pompa</span><strong>${this.hass?.states[this.e.pump_status]?.state ?? "Niedostępny"}</strong></button>` : c}</div></header>`;
  }
  schemeArt() {
    return z`<svg class="scheme-art" viewBox="0 0 1000 390" preserveAspectRatio="none" aria-hidden="true">
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
    const t = this.e, e = this.val(t.fan_speed), i = (e.value ?? 0) > 0, r = this.isRunning(t.circulation_status), o = this.isRunning(t.pump_status) || r;
    return z`<svg class=${`motion-overlay ${o ? "flowing" : ""}`} viewBox="0 0 1300 660" aria-label="Pompa obiegowa P1 i przepływ"><g class=${`heat-fans ${t.fan_speed ? "clickable" : ""}`} @click=${() => this.moreInfo(t.fan_speed)}><g transform="translate(120 228)"><g class=${i ? "rotating" : ""}><circle r="30" class="rotor-ring"></circle><path d="M0-25V25M-25 0H25M-18-18L18 18M18-18L-18 18" class="rotor-blades"></path></g></g><g transform="translate(120 312)"><g class=${i ? "rotating" : ""}><circle r="30" class="rotor-ring"></circle><path d="M0-25V25M-25 0H25M-18-18L18 18M18-18L-18 18" class="rotor-blades"></path></g></g><text class="fan-speed" x="120" y="405">${t.fan_speed ? `Wentylatory: ${e.text}` : ""}</text></g><g class=${`p1-pump ${t.circulation_status ? "clickable" : ""}`} @click=${() => this.moreInfo(t.circulation_status)}><g class=${r ? "rotating" : ""}><circle cx="650" cy="210" r="25"></circle><path d="M650 190V230M630 210H670M636 196L664 224M664 196L636 224"></path></g><text x="650" y="252">P1</text></g>${o ? z`<g class="flow-dots"><path class="dot-path hot" d="M180 210H420M560 210H1190"></path><path class="dot-path cold" d="M1190 350H560M420 350H180"></path><path class="dot-path hot branch" d="M165 365V425H385V475"></path><path class="dot-path cold branch" d="M420 475V450H140V365"></path></g>` : c}</svg>`;
  }
  hydronic() {
    const t = this.e, e = t.risers ?? [{ name: "Pion 1" }, { name: "Pion 2" }, { name: "Pion 3" }], i = { "pc-supply": t.pump_supply, "pc-return": t.pump_return, "buffer-top": t.buffer_top, "buffer-middle": t.buffer_middle, "buffer-bottom": t.buffer_bottom, cwu: t.hot_water, "riser-1-supply": e[0]?.supply, "riser-1-return": e[0]?.return, "riser-2-supply": e[1]?.supply, "riser-2-return": e[1]?.return, "riser-3-supply": e[2]?.supply, "riser-3-return": e[2]?.return }, r = this.config.layout === "central" && this.displayMode === "home" ? "column" : "horizontal", o = Xt[r], a = Wt[r].replace(/(<text id="value-[^"]+")/g, '$1 opacity="0"');
    return p`<section class=${`hydronic asset-heating ${r}`} aria-label="Instalacja centralnego ogrzewania"><div class="asset-canvas">${ot(a)}${r === "horizontal" ? this.motionOverlay() : c}<svg class="asset-values" viewBox=${o.box} aria-label="Bieżące temperatury CO">${Object.entries(o.values).map(([l, s]) => {
      const d = i[l];
      return z`<text class=${d ? "asset-value clickable" : "asset-value"} x=${s[0]} y=${s[1]} @click=${() => this.moreInfo(d)}>${this.demo(d, "—")}</text>`;
    })}</svg></div></section>`;
  }
  viewSwitch() {
    return p`<footer><div class="view-switch"><button class=${this.displayMode === "home" ? "active" : ""} @click=${() => this.displayMode = "home"}>Dom + CO</button><button class=${this.displayMode === "heating" ? "active" : ""} @click=${() => this.displayMode = "heating"}>Pełny układ CO</button></div><small>Podgląd temperatur · rzut poglądowy, bez skali</small></footer>`;
  }
  render() {
    if (!this._config) return p``;
    const t = this.config, e = t.layout === "central" ? p`<nav aria-label="Wybór kondygnacji">${["basement", "ground", "upper"].map((i) => p`<button class=${this.selectedFloor === i ? "active" : ""} @click=${() => this.selectedFloor = i}>${R[i].name}</button>`)}</nav><div class="central-content">${this.floorPlan(this.selectedFloor)}${this.hydronic()}</div>` : p`<div class="two-floors">${this.floorPlan(t.floors?.[0] ?? "ground")}${this.floorPlan(t.floors?.[1] ?? "upper")}</div>${this.hydronic()}`;
    return p`<ha-card><main class=${`${t.layout === "floors_over_co" ? "floors-layout" : "central-layout"} ${this.displayMode === "heating" ? "heating-view" : ""}`}>${this.topBar()}${this.displayMode === "home" ? e : p`<section class="heating-panel"><div class="section-title"><b>Układ CO</b><span>Temperatury w °C</span></div>${this.hydronic()}</section>`}${this.viewSwitch()}</main></ha-card>`;
  }
  static styles = st`
    :host{display:block;color:var(--primary-text-color);--line-supply:var(--orange-color,#d85b16);--line-return:var(--info-color,#087faa);--panel:var(--secondary-background-color);--wall:var(--divider-color);--room:var(--card-background-color);font-family:var(--paper-font-body1_-_font-family,Roboto,sans-serif)}ha-card{overflow:hidden;background:var(--ha-card-background,var(--card-background-color));color:inherit}.central-layout,.floors-layout{padding:clamp(18px,2.4vw,30px);display:grid;gap:18px}.header{display:flex;justify-content:space-between;gap:20px;align-items:start}.eyebrow{font-size:11px;letter-spacing:1.25px;color:var(--secondary-text-color)}h2{font-size:clamp(22px,2.1vw,30px);margin:6px 0 0;line-height:1.1}.head-metrics{display:flex;gap:8px;align-items:start}.header .metric{background:transparent;border:0;padding:5px;min-width:auto;display:flex;gap:5px;align-items:baseline}.header .metric span{font-size:14px;color:var(--primary-text-color)}.header .metric strong{font-size:22px}.metric,.status{appearance:none;border:1px solid var(--divider-color);background:var(--panel);color:inherit;border-radius:10px;padding:8px 11px;text-align:left;min-width:104px;display:grid;gap:2px;cursor:pointer}.metric:disabled{cursor:default;opacity:.72}.metric span,.status span{font-size:11px;color:var(--secondary-text-color)}.metric strong,.status strong{font-size:clamp(14px,1.5vw,20px);white-space:nowrap}.supply strong{color:var(--line-supply)}.return strong{color:var(--line-return)}nav{display:flex;gap:8px;margin:3px 0 -2px}nav button,footer button{border:1px solid var(--divider-color);border-radius:9px;background:var(--card-background-color);color:inherit;padding:10px 16px;font:inherit;cursor:pointer}nav button.active,footer button.active{background:var(--primary-color);color:var(--text-primary-color,#fff);border-color:var(--primary-color)}.central-content{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(280px,1fr);gap:16px;align-items:stretch}.floor{background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:16px;padding:16px;min-width:0}.floor-title{font-size:16px;font-weight:650;margin-bottom:10px}.floor svg{width:100%;display:block;aspect-ratio:1.55}.room rect{fill:var(--panel);stroke:var(--wall);stroke-width:1}.room.warm rect{fill:color-mix(in srgb,var(--line-supply) 17%,var(--room))}.room.cool rect{fill:color-mix(in srgb,var(--line-return) 13%,var(--room))}.room text{fill:var(--primary-text-color);text-anchor:middle;pointer-events:none}.room-name{font-size:4px}.room-temp{font-size:5px;font-weight:bold}.room.clickable{cursor:pointer}.room.clickable:focus rect{stroke:var(--primary-color);stroke-width:2}.hydronic{background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:16px;padding:18px;display:grid;grid-template-columns:1fr 22px 1fr;gap:10px;align-content:start;position:relative}.plant{border:1px solid var(--divider-color);border-radius:12px;padding:10px;display:grid;gap:6px;background:var(--card-background-color)}.pump{grid-column:1}.buffer{grid-column:3;border-radius:38%}.device-icon{font-size:34px;line-height:20px;color:var(--primary-color)}.lines{grid-column:2;grid-row:1;position:relative;min-height:150px}.lines i{position:absolute;height:3px;border-radius:8px;left:0;right:0}.supply-line{top:42%;background:var(--line-supply)}.return-line{top:58%;background:var(--line-return)}.hotwater{grid-column:1 / -1}.risers{grid-column:1 / -1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.riser{border-top:3px solid var(--line-supply);padding-top:6px;display:grid;gap:5px;min-width:0}.riser .metric{min-width:0;padding:6px}.common{grid-column:1/-1;display:flex;gap:8px;flex-wrap:wrap}.two-floors{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.floors-layout .hydronic{grid-template-columns:1fr 24px 1fr 1fr}.floors-layout .risers{grid-column:4;grid-row:1 / span 2;grid-template-columns:1fr}.floors-layout .hotwater{grid-column:3;grid-row:1}.floors-layout .common{grid-column:1 / 4}.heating-panel{display:grid;gap:16px;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:18px;padding:20px;min-height:340px}.section-title{display:flex;justify-content:space-between;color:var(--secondary-text-color);font-size:13px}.section-title b{font-size:16px;color:var(--primary-text-color)}.heating-view .hydronic{border:0;padding:16px 0;grid-template-columns:1fr 42px 1fr 1fr;align-items:center}.heating-view .pump{grid-column:1}.heating-view .buffer{grid-column:3}.heating-view .hotwater{grid-column:4;grid-row:1}.heating-view .risers{grid-column:1/-1;grid-row:2;grid-template-columns:repeat(3,minmax(0,1fr));margin-left:28%;}.heating-view .common{grid-row:3}footer{border-top:1px solid var(--divider-color);padding-top:14px;display:grid;justify-items:center;gap:9px}footer small{font-size:11px;color:var(--secondary-text-color)}.view-switch{display:flex;gap:8px}@media(max-width:700px){.header{display:grid;gap:10px}.central-content,.two-floors{grid-template-columns:1fr}.hydronic,.floors-layout .hydronic,.heating-view .hydronic{grid-template-columns:1fr 14px 1fr}.floors-layout .risers,.heating-view .risers{grid-column:1/-1;grid-row:auto;grid-template-columns:repeat(3,minmax(0,1fr));margin-left:0}.floors-layout .hotwater,.floors-layout .common,.heating-view .hotwater{grid-column:1/-1;grid-row:auto}.room-name{font-size:3.6px}.room-temp{font-size:4.5px}}@media(max-width:410px){.risers,.floors-layout .risers,.heating-view .risers{grid-template-columns:1fr}.metric{min-width:0}nav button,footer button{padding:8px 10px}.room-name{font-size:3.3px}.header .metric strong{font-size:18px}}
    .scheme-art{position:absolute;inset:12px;width:calc(100% - 24px);height:calc(100% - 24px);z-index:0;pointer-events:none;opacity:.82}.scheme-art .pipe{fill:none;stroke-width:3}.scheme-art .supply-pipe{stroke:var(--line-supply)}.scheme-art .return-pipe{stroke:var(--line-return)}.scheme-art .flow{fill:none;stroke-width:1.5;opacity:.8}.scheme-art .supply-flow{stroke:var(--line-supply)}.scheme-art .return-flow{stroke:var(--line-return)}.scheme-art .branch{fill:none;stroke-width:2}.scheme-art .fan,.scheme-art .buffer-art,.scheme-art .boiler-art,.scheme-art .riser-art{fill:var(--card-background-color);stroke:var(--divider-color);stroke-width:1.3}.scheme-art .fan path,.scheme-art .buffer-art path,.scheme-art .boiler-art path,.scheme-art .riser-art path{fill:none;stroke:var(--divider-color)}.scheme-art .riser-art circle{fill:var(--line-supply);stroke:none}.hydronic>*:not(.scheme-art){z-index:1}.central-content .scheme-art,.floors-layout:not(.heating-view) .scheme-art{opacity:.32}.heating-view .plant,.heating-view .risers{background:color-mix(in srgb,var(--card-background-color) 94%,transparent)}
    .asset-canvas{position:relative;width:100%;height:100%}.asset-canvas>svg:first-child{display:block;width:100%;height:100%}.asset-values{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.asset-value{font-family:var(--paper-font-body1_-_font-family,Roboto,sans-serif);font-size:34px;fill:var(--primary-text-color);text-anchor:middle;pointer-events:none}.asset-value.clickable{pointer-events:auto;cursor:pointer}.asset-value.clickable:hover{fill:var(--primary-color)}.asset-floor .asset-canvas{aspect-ratio:760 / 600}.asset-floor .asset-canvas>svg:first-child{position:absolute;inset:0}.asset-heating{display:block!important;padding:0!important;overflow:hidden;min-height:0;background:var(--card-background-color)}.asset-heating.column{aspect-ratio:500 / 790}.asset-heating.horizontal{aspect-ratio:1300 / 660}.asset-heating .asset-canvas{position:absolute;inset:0}.asset-heating .asset-canvas>svg:first-child{position:absolute;inset:0}.heating-view .asset-heating{border:0;background:transparent;aspect-ratio:1300 / 660}.heating-view .asset-value{font-size:30px}.central-content .asset-heating{align-self:start}.floors-layout:not(.heating-view) .asset-heating{margin-top:0}.central-content .asset-heating .asset-value{font-size:25px}@media(max-width:700px){.asset-heating.column{aspect-ratio:500 / 690}.asset-value{font-size:28px}.central-content .asset-heating .asset-value{font-size:26px}}
    :host{--dh-bg:var(--ha-card-background,var(--card-background-color));--dh-panel:var(--card-background-color);--dh-room:var(--secondary-background-color);--dh-ink:var(--primary-text-color);--dh-muted:var(--secondary-text-color);--dh-line:var(--divider-color);--dh-metal:var(--secondary-background-color);--dh-fan:var(--primary-color);--dh-hot:var(--line-supply);--dh-cold:var(--line-return)}
    .motion-overlay{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.motion-overlay .rotor-ring{fill:color-mix(in srgb,var(--dh-panel) 72%,transparent);stroke:var(--dh-ink);stroke-width:2}.motion-overlay .rotor-blades,.motion-overlay .p1-pump path{fill:none;stroke:var(--dh-ink);stroke-width:2.5;stroke-linecap:round}.motion-overlay .p1-pump circle{fill:var(--dh-panel);stroke:var(--dh-ink);stroke-width:2.5}.motion-overlay .p1-pump text{fill:var(--dh-ink);font:600 18px var(--paper-font-body1_-_font-family,Roboto,sans-serif);text-anchor:middle}.motion-overlay .p1-pump.clickable{pointer-events:auto;cursor:pointer}.motion-overlay .p1-pump.clickable:hover circle{stroke:var(--primary-color);stroke-width:4}.motion-overlay .dot-path{fill:none;stroke:var(--dh-flow-dot,#101820);stroke-width:7;stroke-linecap:round;stroke-dasharray:1 24;opacity:.9}.motion-overlay .dot-path.hot{stroke-dashoffset:0;animation:flow-hot 1.15s linear infinite}.motion-overlay .dot-path.cold{stroke-dashoffset:0;animation:flow-cold 1.15s linear infinite}.motion-overlay .dot-path.branch{stroke-width:5}.motion-overlay .rotating{transform-box:fill-box;transform-origin:center;animation:rotate-pump 1.1s linear infinite}@keyframes rotate-pump{to{transform:rotate(360deg)}}@keyframes flow-hot{to{stroke-dashoffset:-25}}@keyframes flow-cold{to{stroke-dashoffset:25}}@media(prefers-reduced-motion:reduce){.motion-overlay .rotating,.motion-overlay .dot-path{animation:none}}
    .motion-overlay .heat-fans.clickable{pointer-events:auto;cursor:pointer}.motion-overlay .heat-fans.clickable:hover .rotor-ring{stroke:var(--primary-color);stroke-width:4}.motion-overlay .fan-speed{fill:var(--dh-ink);font:600 17px var(--paper-font-body1_-_font-family,Roboto,sans-serif);text-anchor:middle}
  `;
}
customElements.define(qt, Qt);
window.customCards = window.customCards || [];
window.customCards.push({ type: "dom-heat-card", name: "Dom Heat Card", description: "Temperatury domu i instalacji CO", preview: !0, documentationURL: "https://github.com/Pablos249/HA_Temperature_view" });
export {
  Qt as DomHeatCard
};
