export function normalizaText(text: string): string {
  return text.replace(/\D/g, "");
}