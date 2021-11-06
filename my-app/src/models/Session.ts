import { StoryAction } from "./StoryAction";

export interface Session {
  title: string;

  description?: string;

  date?: string;

  actions?: Array<StoryAction>
}