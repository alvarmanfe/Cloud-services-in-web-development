export function generateCodename(): string {
  const adjectives: string[] = [
    "Hymyilevä",
    "Villi",
    "Pelottava",
    "Hyppivä",
    "Mystinen"
  ];

  const people: string[] = [
    "Mörkö",
    "Peikko",
    "Poliisi",
    "Roisto",
    "Hermanni"
  ];

  const number: number = Math.floor(Math.random() * 3000);

  const adj =
    adjectives[Math.floor(Math.random() * adjectives.length)];

  const person =
    people[Math.floor(Math.random() * people.length)];

  return `${adj}${person}${number}`;
}