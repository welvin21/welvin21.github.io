import { IProject } from './';

export interface IBlogPost extends IProject {
  tags: string[];
  image: any;
}
