export function assertNever(value: never): never {
  throw new Error(`Unexpected value received: ${value}.`);
}
