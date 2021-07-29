export type TechIcon = {
  title: string;
  icon: {
    alternativeText: string;
    url: string;
  };
};

export type Concepts = {
  title: string;
};

export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
  image: {
    alternativeText: string;
    url: string;
  };
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: {
    url: string;
    alternativeText: string;
  };
};

export type SectionTechProps = {
  title: string;
  techIcons: TechIcon[];
};

export type sectionConceptsProps = {
  title: string;
  concepts: Concepts[];
};
export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: sectionConceptsProps;
};
