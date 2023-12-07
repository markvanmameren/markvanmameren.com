import { IImage } from '../../../shared/interfaces/image.interface';

export interface IProject {
  title: string;
  image: IImage;
  urlInternal?: string;
  urlExternal?: string;
}
