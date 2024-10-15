import { Service } from '@/types';

import axiosInstance from '..';

export const getServiceList = async () => {
  const { data } = await axiosInstance.get('/services?limit=all');
  return data;
};

export const getServiceDetails = async (slug: string) => {
  const { data } = await axiosInstance.get(`/services/${slug}`);
  return data as Service;
};
