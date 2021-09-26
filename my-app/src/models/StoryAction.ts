export interface StoryAction {
  /**
   * What is the name of the person that the action centers on?
   */
  focalPoint: string;

  actionText: string;

  tags?: Array<string>
}