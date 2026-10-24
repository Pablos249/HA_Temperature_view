import { describe, expect, it } from "vitest";
import { entityValue, validDelta } from "../src/value";

const hass = { states: { "sensor.good": { entity_id: "sensor.good", state: "21.25", attributes: { unit_of_measurement: "°C" } }, "sensor.bad": { entity_id: "sensor.bad", state: "unavailable", attributes: {} } } };
describe("entityValue", () => {
  it("formats valid temperatures and never converts unavailable into zero", () => { expect(entityValue(hass, "sensor.good", 1).text).toBe("21.3 °C"); expect(entityValue(hass, "sensor.bad").text).toBe("—"); });
  it("only calculates delta for compatible numeric units", () => { expect(validDelta(entityValue(hass, "sensor.good"), { text: "19 °C", value: 19, unit: "°C", entity: "x" })).toBeCloseTo(2.25); });
});
