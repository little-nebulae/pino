import { DEFAULT_LOG_DIR_NAME } from "@little-nebulae/log";

import type { PinoNodeFsTransportOptions } from "@/transports/node-fs/types";

export function resolveLogFilePath({
  date,
  cwd = process.cwd(),
  rootDir = DEFAULT_LOG_DIR_NAME.ROOT,
  mainDir = DEFAULT_LOG_DIR_NAME.MAIN,
  enablePerDayDir = true,
}: { date: Date; cwd?: string; rootDir?: string; mainDir?: string } & Pick<
  PinoNodeFsTransportOptions,
  "enablePerDayDir"
>) {
  if (enablePerDayDir) {
  }
}
