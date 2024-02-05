/* eslint-disable no-undef */
import { useQuery } from '@tanstack/react-query'
import { usePcfContext } from '../services/PcfContext'
import { useMetadata } from './useMetadata'

export const useRecordImage = (entityType:string, id:string) => {
  const pcfcontext = usePcfContext()
  
  const { primaryimage } = useMetadata(entityType)

  const { data, status, error, isFetching } =
    useQuery<string, Error>(
      {
        queryKey: ['recordimage', pcfcontext.instanceid, id],
        queryFn: () => pcfcontext.getRecordImage(entityType, id, primaryimage),     
        enabled: !!primaryimage,
        staleTime: Infinity
      }
    )

  return { imagesrc: data, status, error, isFetching }
}


