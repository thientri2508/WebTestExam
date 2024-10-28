
import { useQuery } from '@tanstack/react-query'
import { fetchProvinces, fetchProvincesByName, Province } from '../services/provinceService';

export const useProvinces = () => {
  return useQuery<Province[], Error>({ queryKey: ['provinces'], queryFn: fetchProvinces });
};

export const useProvincesByName = (name: string, enabled: boolean) => {
  return useQuery<Province[], Error>({
    queryKey: ['provinces', 'q', name],
    queryFn: () => fetchProvincesByName(name),
    enabled: enabled && !!name,
  });
};
