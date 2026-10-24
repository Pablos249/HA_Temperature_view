import { LitElement, html, css } from "lit";
import type { DomHeatConfig, Hass, Layout } from "./types";

export class DomHeatCardEditor extends LitElement {
  static properties = { hass: { attribute: false }, _config: { state: true } };
  declare hass?: Hass; declare _config?: DomHeatConfig;
  setConfig(config: DomHeatConfig) { this._config = structuredClone(config); }
  private emitConfig(path: string, value: string) { const c: DomHeatConfig = structuredClone(this._config ?? { type: "custom:dom-heat-card" }); const [group, key] = path.split("."); if (key) { c.entities ??= {}; (c.entities as Record<string, string | undefined>)[key] = value || undefined; } else (c as unknown as Record<string, unknown>)[group] = value; this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: c }, bubbles: true, composed: true })); }
  render() { const c: DomHeatConfig = this._config ?? { type: "custom:dom-heat-card" }; const e = c.entities ?? {}; const entity = (label: string, key: keyof typeof e) => html`<label>${label}<ha-entity-picker .hass=${this.hass} .value=${e[key] ?? ""} @value-changed=${(x: CustomEvent) => this.emitConfig(`entities.${key}`, x.detail.value)} allow-custom-entity></ha-entity-picker></label>`;
    return html`<div class="editor"><label>Układ<select .value=${c.layout ?? "central"} @change=${(x: Event) => this.emitConfig("layout", (x.target as HTMLSelectElement).value)}><option value="central">Centralny rzut i pasek CO</option><option value="floors_over_co">Dwa rzuty nad instalacją</option></select></label><label>Kondygnacja (układ centralny)<select .value=${c.floor ?? "ground"} @change=${(x: Event) => this.emitConfig("floor", (x.target as HTMLSelectElement).value)}><option value="basement">Piwnica</option><option value="ground">Parter</option><option value="upper">Piętro</option></select></label>${entity("Temperatura zewnętrzna", "outside")}${entity("CWU", "hot_water")}${entity("Zasilanie pompy", "pump_supply")}${entity("Powrót pompy", "pump_return")}${entity("Bufor — góra", "buffer_top")}${entity("Bufor — środek", "buffer_middle")}${entity("Bufor — dół", "buffer_bottom")}</div>`; }
  static styles = css`.editor{display:grid;gap:12px;padding:12px}label{display:grid;gap:5px;font-size:14px}select{padding:8px;border-radius:6px;border:1px solid var(--divider-color)}`;
}
customElements.define("dom-heat-card-editor", DomHeatCardEditor);
