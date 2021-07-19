import useSWR, { SWRResponse } from 'swr'

interface SuspenseResponseInterface extends SWRResponse<any, any> {
  data: any
}

export const useDataFetcher = (url: RequestInfo) => {
  return useSWR(
    url as string, // using it here as key
    () => fetch(url).then((res) => res.json()),
    { suspense: true }
  ) as SuspenseResponseInterface
}
