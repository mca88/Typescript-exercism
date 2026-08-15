export function score(x: number, y: number): number {

  const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  if (radius >= 0 && radius <= 1) {
    return 10;
  }
  else if (radius > 1 && radius <= 5) {
    return 5;
  }
  else if (radius > 5 && radius <= 10) {
    return 1;
  }
  else {
    return 0;
  }
}
