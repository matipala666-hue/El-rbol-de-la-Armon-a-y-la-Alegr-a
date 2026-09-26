export interface TreeNodeData {
  id: number;
  title: string;
  subtitle: string;
  body: string;
  quote: string;
  icon: string;
  cx: number;
  cy: number;
  color: string;
  philosophicalBranch: string;
}

export interface EssaySection {
  id: string;
  number: string;
  title: string;
  content: string[];
  highlightQuote?: string;
  sourceNote?: string;
}

export interface SchoolCase {
  id: string;
  title: string;
  category: string;
  iconName: string;
  problem: string;
  schoolContext: string;
  ethicalSolution: string;
  philosophicalLesson: string;
  scenarioQuestion: string;
  options: {
    text: string;
    isEthical: boolean;
    feedback: string;
  }[];
}

export interface Citation {
  id: string;
  authorYear: string;
  source: string;
  title: string;
  url: string;
  annotation: string;
}

export interface PeaceCommitment {
  id: string;
  author: string;
  grade?: string;
  text: string;
  date: string;
  tag: string;
}
