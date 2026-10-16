import type { StructuredCloneable } from "type-fest";

export type PinoTransportOptions<T extends StructuredCloneable> = T;
