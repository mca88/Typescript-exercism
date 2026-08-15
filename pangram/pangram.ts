export function isPangram(sentence: string) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  sentence = sentence.toLowerCase();


  return [...alphabet].every(letter => {
    return sentence.includes(letter);
  });

}
