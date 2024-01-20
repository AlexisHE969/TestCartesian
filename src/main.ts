export function isValidWalk(walk: string[]): boolean {
  if (walk.length !== 10) {
    return false;
  }

  const countOccurrences = (route: string): number => walk.filter(d=>d===route).length;

  const countNorth = countOccurrences("n");
  const countSouth = countOccurrences("s");
  const countEast = countOccurrences("e");
  const countWest = countOccurrences("w");

  return countNorth === countSouth && countEast === countWest;
}

// Ejemplo de uso
const paseo1: string[] = ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'];
const paseo2: string[] = ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 'e']; // No válido

console.log(isValidWalk(paseo1)); //true
console.log(isValidWalk(paseo2)); // false