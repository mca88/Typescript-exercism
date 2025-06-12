type Color = typeof COLORS[number]

export function decodedValue([color1, color2]: Color[]): number {

    return Number(`${COLORS.indexOf(color1)}${COLORS.indexOf(color2)}`)
}

export const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
] as const
