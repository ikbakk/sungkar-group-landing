/**
 * Vehicle constants and configurations
 */
export const VEHICLE_TYPES = {
  AVANZA: "avanza" as const,
  INNOVA_REBORN: "innova-reborn" as const,
  INNOVA_ZENIX: "innova-zenix" as const,
  FORTUNER_GR: "fortuner-gr" as const,
  PAJERO_SPORTS: "pajero-sport" as const,
  ALPHARD: "alphard" as const,
  HIACE_COMMUTER: "hiace-commuter" as const,
  HIACE_PREMIO: "hiace-premio" as const,
  MEDIUM_BUS: "medium-bus" as const,
  BIG_BUS: "big-bus" as const,
};

export type VehicleSlug = typeof VEHICLE_TYPES[keyof typeof VEHICLE_TYPES];

/**
 * Vehicle seating capacity
 */
export const VEHICLE_SEATS: Record<VehicleSlug, number> = {
  [VEHICLE_TYPES.AVANZA]: 7,
  [VEHICLE_TYPES.INNOVA_REBORN]: 7,
  [VEHICLE_TYPES.INNOVA_ZENIX]: 7,
  [VEHICLE_TYPES.FORTUNER_GR]: 7,
  [VEHICLE_TYPES.PAJERO_SPORTS]: 7,
  [VEHICLE_TYPES.ALPHARD]: 7,
  [VEHICLE_TYPES.HIACE_COMMUTER]: 12,
  [VEHICLE_TYPES.HIACE_PREMIO]: 12,
  [VEHICLE_TYPES.MEDIUM_BUS]: 25,
  [VEHICLE_TYPES.BIG_BUS]: 45,
};

/**
 * Vehicle transmission types
 */
export const TRANSMISSION_TYPES = {
  MANUAL: "Manual" as const,
  AUTOMATIC: "Automatic" as const,
};

export type TransmissionType = typeof TRANSMISSION_TYPES[keyof typeof TRANSMISSION_TYPES];
