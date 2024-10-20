import { Slide } from '@/types';

import axiosInstance from '..';

export const getSlide = async () => {
  const { data } = await axiosInstance.get('/slides?limit=all');
  return data as Slide[];
};
