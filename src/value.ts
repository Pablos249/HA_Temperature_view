import type { Hass } from "./types";

export const unavailable = (value?: string) => !value || ["unknown", "unavailable", "none", "null"].includes(value.toLowerCase());
export function entityValue(hass: Hass | undefined, entity: string | undefined, precision = 1) {
  const item = entity ? hass?.states[entity] : undefined;
  if (!item || unavailable(item.state)) return { text: "—", value: undefined as number | undefined, unit: "", entity };
  const value = Number(item.state); const unit = String(item.attributes.unit_of_measurement ?? "");
  return Number.isFinite(value) ? { text: `${value.toFixed(precision)}${unit ? ` ${unit}` : ""}`, value, unit, entity } : { text: item.state, value: undefined, unit, entity };
}
export const validDelta = (a: ReturnType<typeof entityValue>, b: ReturnType<typeof entityValue>) => a.value !== undefined && b.value !== undefined && a.unit === b.unit ? a.value - b.value : undefined;
