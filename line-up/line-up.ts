export function format(name: string, number: number): string {

  return `${name}, you are the ${number + getSuffix(number)} customer we serve today. Thank you!`

}

function getSuffix(number: number): string {

  const lastTwoDiggits = number % 100;

  if (lastTwoDiggits >= 11 && lastTwoDiggits <= 13) {
    return "th";
  }

  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
