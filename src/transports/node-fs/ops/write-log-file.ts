import type { UnexpectedError } from "@little-nebulae/error";
import type { JsonStringifyError } from "@little-nebulae/json";
import type { AsyncResult } from "@little-nebulae/result";
import type { $ZodIssue } from "zod/v4/core";

import { jsonStringify } from "@little-nebulae/json";
import { writeTextFile } from "@little-nebulae/node-fs";
import { succeed } from "@little-nebulae/result";

import type { PinoLog } from "@/schemas";

export async function writeLogFile({
  log,
  path,
}: {
  log: PinoLog;
  path: string;
}): AsyncResult<
  | {
      lossless: true;
    }
  | {
      lossless: false;
      issues: $ZodIssue[];
    },
  JsonStringifyError | UnexpectedError
> {
  const stringifyResult = jsonStringify(log);
  if (!stringifyResult.success) {
    return stringifyResult;
  }
  const text = stringifyResult.data.value;

  const writeResult = await writeTextFile({ path, text });
  if (!writeResult.success) {
    return writeResult;
  }

  return succeed(stringifyResult.data.meta);
}
