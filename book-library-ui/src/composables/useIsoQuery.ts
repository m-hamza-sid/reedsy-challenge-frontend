import { onServerPrefetch } from "vue";
import { useQuery, UseQueryOptions } from "vue-query";

export function useIsoQuery<T = any>(key: string, fetcher: () => Promise<T>, options?: UseQueryOptions) {
  const result = useQuery(key, fetcher, options as any);

  if (import.meta.env.SSR) {
    onServerPrefetch(result.suspense);
  }

  return result;
}

export default useIsoQuery;
