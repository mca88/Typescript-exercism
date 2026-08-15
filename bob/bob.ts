export function hey(message: string): string {

  const endsWithQuestionMark = message.trim().endsWith('?');
  const allCapitals = message === message.toUpperCase() && /[A-Z]/.test(message);
  const emptySentence = message.replace(/\s/g, '').length == 0;

  if (emptySentence) {
    return "Fine. Be that way!";
  }

  if (allCapitals && endsWithQuestionMark) {
    return "Calm down, I know what I'm doing!";
  }

  if (allCapitals) {
    return "Whoa, chill out!";
  }

  if (endsWithQuestionMark) {
    return "Sure.";
  }

  return "Whatever.";


}
