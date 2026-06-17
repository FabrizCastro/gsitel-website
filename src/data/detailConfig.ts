export type SolutionItem = {
  name: string;
  provider: string;
  link: string;
  summary: string;
};

export type RoadmapStep = {
  step: string;
  title: string;
  desc: string;
  iconKey: string;
};

export type DetailConfig = {
  solutions: SolutionItem[];
  roadmap: RoadmapStep[];
};
