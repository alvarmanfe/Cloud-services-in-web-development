export function generateCodename(): string {
  const adjectives: string[] = [
    "Laiha",
    "Peloton",
    "Vihainen",
    "Hurja",
    "Herra"
  ];

  const animals: string[] = [
    "Luuranko",
    "Seikkalija",
    "Herkuttelija",
    "Ministeri",
    "Heppu"
  ];

  const number: number = Math.floor(Math.random() * 3000);

  const adj =
    adjectives[Math.floor(Math.random() * adjectives.length)];

  const animal =
    animals[Math.floor(Math.random() * animals.length)];

  return `${adj}${animal}${number}`;
}