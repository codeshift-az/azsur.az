import { Image } from '../common';
import { Service } from '../service';

export type Project = {
  slug: string;
  title: string;
  images: Image[];
  service: Service;
  description: string;
};
