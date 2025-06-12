
const DNA: {[key: string] : string} = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U' 
}

export function toRna(dnaString: string) {

    if (!/^[GCTA]+$/.test(dnaString)) {
        throw new Error("Invalid input DNA.")
    }

    return dnaString
        .split("")
        .map((c) => {
            return DNA[c]
        })
        .join("")
}
