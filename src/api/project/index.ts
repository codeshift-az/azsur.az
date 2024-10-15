import { Project } from '@/types';

import axiosInstance from '..';

export const getProjectList = async (filter?: { service?: string }) => {
  const { data } = await axiosInstance.get(
    `/projects?limit=all${filter && filter.service ? `&service=${filter.service}` : ''}`
  );
  return data as Project[];
};

export const getProjectDetails = async (slug: string) => {
  const { data } = await axiosInstance.get(`/projects/${slug}`);
  return data as Project;
};
