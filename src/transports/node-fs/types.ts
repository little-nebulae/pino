import type { PinoTransportOptions } from "@/types";

export type PinoNodeFsTransportOptions = PinoTransportOptions<{
  enablePerDayDir?: boolean;
}>;
