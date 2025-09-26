export type PublicationAuthor = {
  name: string;
  href: string;
};

export type PublicationItem = {
  name: string;
  description: string;
  image: string;
  href: string;

  authors: PublicationAuthor[];

  paper: string;
  code: string;
  venue: string;
};

export const publicationsItems: PublicationItem[] = [
  {
    name: "We Should Chart an Atlas of All the World's Models",
    description:
      "We propose the Model Atlas, an interactive visualization and analysis tool for exploring large-scale AI model repositories. To explore the hidden potential of model repositories, we chart a preliminary atlas representing the documented fraction of Hugging Face. It provides stunning visualizations of the model landscape and evolution. We demonstrate several applications of this atlas including predicting model attributes (e.g., accuracy), and analyzing trends in computer vision models. However, as the current atlas remains incomplete, we propose a method for charting undocumented regions.",
    image: "/images/png/model_atlas_thumbnail.png",
    href: "https://horwitz.ai/model-atlas",

    authors: [
      {
        name: "Eliahu Horwitz",
        href: "https://horwitz.ai",
      },
      {
        name: "Nitzan Kurer",
        href: "https://www.linkedin.com/in/nitzan-kurer-knoll/",
      },
      {
        name: "Jonathan Kahana",
        href: "https://pages.cs.huji.ac.il/jonkahana/",
      },
      {
        name: "Liel Amar",
        href: "https://www.lielamar.com",
      },
      {
        name: "Yedid Hoshen",
        href: "https://www.cs.huji.ac.il/w~ydidh/",
      },
    ],

    paper: "https://arxiv.org/pdf/2503.10633",
    code: "https://github.com/eliahuhorwitz/Model-Atlas",
    venue: "NeurIPS 2025 - Position Paper",
  },
];
