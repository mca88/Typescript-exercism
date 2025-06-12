export function decodedResistorValue([color1, color2, color3]: Color[]) {

    let metric = "ohms"
    let value1 = `${COLORS.indexOf(color1)}`
    let value2 = `${COLORS.indexOf(color2)}`
    let zeros  =    COLORS.indexOf(color3)

    if(value2 === '0'){
        zeros++;
        value2 = ''
    }

    let value = Number(`${value1}${value2}`)
    
    if (zeros >= 3 && zeros < 6) {
        metric = "kiloohms"
        zeros -= 3
    }
    else if (zeros >= 6 && zeros < 7) {
        metric = "megaohms"
        zeros -= 6
    }
    else if (zeros >= 7) {
        metric = "gigaohms"
        zeros -= 9
    }
    let finalValue = Number(`${value}${zeros > 0 ? '0'.repeat(zeros) : ''}`)

    return `${finalValue} ${metric}`
}

type Color = typeof COLORS[number]

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