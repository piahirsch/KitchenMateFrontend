export interface Recipe {
  id: number;
  name: string;
  difficultyLevel: string;
  category: string;
  description: string;
  steps: string[];
  link?: string;
}
