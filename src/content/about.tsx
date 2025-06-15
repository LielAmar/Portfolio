const computeAge = (): number => {
  const birthday = new Date(2001, 2, 18);

  // compute exact birthday, including months and days
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate()))
    age--;

  return age;
}

export const present: string[] = [
  `I've been building my own and others' ideas since I was 13, and I'm passionate about *software design & architecture*. My expertise lies in bringing product visions to life, mostly through mobile and web apps.`,

  `Currently, I am pursuing my Master's degree in Computer Science, under the Supervision of [Prof. Yedid Hoshen](https://scholar.google.co.il/citations?user=6y1-qS4AAAAJ). My main focus is Weight Space Learning.`,

  `I am ${computeAge()} years old and I currently live in *Israel*. Offline, you might find me shooting videos, going to the cinema, watching my favorite teams play or traveling the world!`,
];
