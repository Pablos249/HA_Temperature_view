export type Layout = "central" | "floors_over_co";
export type FloorId = "basement" | "ground" | "upper";
export interface Room { id: string; name?: string; entity?: string; target?: number; tolerance?: number; }
export interface HeatEntities {
  outside?: string; hot_water?: string; pump_status?: string; pump_supply?: string; pump_return?: string;
  fan_speed?: string; fan1_speed?: string; fan2_speed?: string;
  buffer_top?: string; buffer_middle?: string; buffer_bottom?: string; central_supply?: string; central_return?: string;
  circulation_status?: string; circulation2_status?: string; risers?: Array<{ name?: string; supply?: string; return?: string }>;
}
export interface HeatingCurvePoint { outside: number; entity?: string; supply?: number; }
export interface HeatingCurve { points?: HeatingCurvePoint[]; }
export interface DomHeatConfig {
  type: "custom:dom-heat-card"; layout?: Layout; floor?: FloorId; floors?: [FloorId, FloorId];
  precision?: number; demo?: boolean; entities?: HeatEntities; rooms?: Partial<Record<FloorId, Room[]>>; heating_curve?: HeatingCurve;
}
export interface HassEntity { entity_id: string; state: string; attributes: Record<string, unknown>; }
export interface Hass { states: Record<string, HassEntity>; formatEntityState?: (entity: HassEntity) => string; }
