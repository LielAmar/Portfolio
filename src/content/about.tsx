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
  `I am a ${computeAge()} years old from *Israel* who loves technology, math, coding, photography, video editing, football and bingeing movies and TV shows!`,

  "I mainly have experience in Algorithms & Machine Learning development, but I have also done full-stack development, including web and mobile applications.",

  "Currently, I am pursuing my Master's degree in Computer Science, under the Supervision of [Prof. Yedid Hoshen](https://scholar.google.co.il/citations?user=6y1-qS4AAAAJ). My main focus is Weight Space Learning.",
];
