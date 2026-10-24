import { beforeAll, describe, expect, it } from "vitest";
import type { DomHeatCard } from "../src/dom-heat-card";

beforeAll(async () => { await import("../src/dom-heat-card"); });
const config = { type: "custom:dom-heat-card" as const, layout: "central" as const, entities: { outside: "sensor.outside" }, rooms: { ground: [{ id: "office", entity: "sensor.office" }] } };
const hass = (outside: string) => ({ states: { "sensor.outside": { entity_id: "sensor.outside", state: outside, attributes: { unit_of_measurement: "°C" } }, "sensor.office": { entity_id: "sensor.office", state: "21", attributes: { unit_of_measurement: "°C" } } } });

describe("Dom Heat Card", () => {
  it("renders values from hass and refreshes after a hass update", async () => {
    const card = document.createElement("dom-heat-card") as DomHeatCard;
    card.setConfig(config); card.hass = hass("5"); document.body.append(card); await card.updateComplete;
    expect(card.shadowRoot?.textContent).toContain("5.0 °C");
    card.hass = hass("6"); await card.updateComplete;
    expect(card.shadowRoot?.textContent).toContain("6.0 °C"); card.remove();
  });
  it("opens more-info for a configured entity and switches floors locally", async () => {
    const card = document.createElement("dom-heat-card") as DomHeatCard; card.setConfig(config); card.hass = hass("5");
    let selected = ""; card.addEventListener("hass-more-info", (event: Event) => selected = (event as CustomEvent).detail.entityId); document.body.append(card); await card.updateComplete;
    (card.shadowRoot?.querySelector(".topbar .metric") as HTMLButtonElement).click(); expect(selected).toBe("sensor.outside");
    (card.shadowRoot?.querySelector("nav button") as HTMLButtonElement).click(); await card.updateComplete; expect(card.shadowRoot?.textContent).toContain("Piwnica"); card.remove();
  });
});
