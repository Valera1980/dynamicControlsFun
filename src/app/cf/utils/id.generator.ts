export function generateId(min = 20, max = 999): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
