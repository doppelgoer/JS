export function toArray<T>(input?: T | T[]) {
  if (input === undefined) return [];
  else if (Array.isArray(input)) return input;
  else return [input];
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function zerofill(input: number, length: number, reverse = false): string {
  const inputText = String(input);
  const diff = length - inputText.length;
  if (diff > 0) {
    return reverse ? `${inputText}${'0'.repeat(diff)}` : `${'0'.repeat(diff)}${inputText}`;
  } else {
    return inputText;
  }
}
