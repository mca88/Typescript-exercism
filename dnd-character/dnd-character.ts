export class DnDCharacter {

  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;


  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {

    let rolls = [
      roll6Dice(),
      roll6Dice(),
      roll6Dice(),
      roll6Dice(),
    ]

    rolls.sort((a, b) => b - a);

    return rolls[0] + rolls[1] + rolls[2];
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}

function roll6Dice(): number {
  return Math.floor(Math.random() * 6 + 1);
}