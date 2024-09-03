import { useQuery } from '@tanstack/react-query';
import { api } from '~/api/client';

export function useAngkatanList() {
  const { data } = useQuery({
    queryKey: ['angkatan'],
    queryFn: () => api.category.getListAngkatan(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  return data;
}
