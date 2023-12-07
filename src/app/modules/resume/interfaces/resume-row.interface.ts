import { IImage } from '../../../shared/interfaces/image.interface';

export interface IResumeRow {
  logo: IImage;
  startDate: Date;
  endDate?: Date;
  title: string;
  institution: string;
  description?: string;
}
