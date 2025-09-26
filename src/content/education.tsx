export type EducationItem = {
  title: string;
  schoolName: string;
  start:
    | {
        month: string;
        year: string;
      }
    | string;
  end:
    | {
        month: string;
        year: string;
      }
    | string;
  logo?: string;
  redirectUrl?: string;
  description?: string;
  additional?: string[];
};

export const educationItems: EducationItem[] = [
  {
    title: "Master's in Computer Science",
    schoolName: "The Hebrew University of Jerusalem",
    start: {
      month: "October",
      year: "2024",
    },
    end: "Present",
    logo: "/images/svg/huji.svg",
    redirectUrl: "https://www.cs.huji.ac.il/",
  },
  {
    title: "Bachelor's in Computer Science",
    schoolName: "The Hebrew University of Jerusalem",
    start: {
      month: "October",
      year: "2021",
    },
    end: {
      month: "June",
      year: "2024",
    },
    logo: "/images/svg/huji.svg",
    redirectUrl: "https://www.cs.huji.ac.il/",
    additional: ["• Finished with honors with a grade of 93.", "• Was on the Dean's list for 2021/22 and 2022/23."],
  },
  {
    title: "Semester Abroad",
    schoolName: "University of Florida",
    start: {
      month: "August",
      year: "2023",
    },
    end: {
      month: "December",
      year: "2023",
    },
    logo: "/images/svg/uf.svg",
    redirectUrl: "https://www.ufl.edu/",
    description: "Participated in the Student Exchange Program.",
  },

  // {
  //   title: "High School",
  //   schoolName: "ORT College, Jerusalem",
  //   start: {
  //     month: "September",
  //     year: "2016",
  //   },
  //   end: {
  //     month: "June",
  //     year: "2019",
  //   },
  //   logo: "/images/svg/ort.svg",
  //   redirectUrl: "https://givatram.ort.org.il/",
  //   additional: ["• Computer Science and Physics electives", "• Finished with honors with a grade of 115.2"],
  // },
];
