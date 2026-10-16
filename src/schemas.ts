import { LogSchema } from "@little-nebulae/log";
import {
  NonEmptyStringSchema,
  PositiveIntegerSchema,
} from "@little-nebulae/zod";
import { z } from "zod";

export const PinoLogSchema = z.object({
  level: z.number(),
  time: PositiveIntegerSchema,
  pid: PositiveIntegerSchema,
  hostname: NonEmptyStringSchema,
  log: LogSchema,
});
export type PinoLog = z.infer<typeof PinoLogSchema>;
