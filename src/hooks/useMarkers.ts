import { Marker } from '@modles/marker';
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { getMarkers } from '@apis/main';



export const useMarkers = () => {
  const { data } = useQuery<AxiosResponse<Marker[]>>(['postMarkers'], getMarkers);

  return { data: data?.data };
};
