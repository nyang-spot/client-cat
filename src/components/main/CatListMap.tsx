import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@components/main/CatListMap.style';
import { useMarkers } from '@hooks/useMarkers';
import {marker as markerUrl} from '@assets/index';

interface Props {
  onClickMarker: (id: number) => void;
}

const CatListMap = ({ onClickMarker }: Props) => {
  const [myLocation, setMyLocation] = useState({
    latitude: 37.498095,
    longitude: 127.02761,
  });

  const { data: markers } = useMarkers();

  const stringifiedMarkes = JSON.stringify(markers);

  useEffect(() => {
    setMyLocation({ latitude: 37.498095, longitude: 127.02761 });
  }, []);

  const mapRef = useRef<null | HTMLElement | any>(null);

  const markerRef = useRef<any | null>(null);

  useEffect(() => {
    mapRef.current = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
      zoomControl: false,
    });
  }, [mapRef]);

  useEffect(() => {
    if (markers?.length === 0 && !markers) {
      return;
    }

    markers?.forEach(marker => {
      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(marker.latitude, marker.longitude),
        map: mapRef.current,
        icon:{
          url:markerUrl,
          scaledSize: new naver.maps.Size(49, 59)
        }
      });

      naver.maps.Event.addListener(markerRef.current, 'click', () => {
        mapRef.current.panTo(new naver.maps.LatLng(marker.latitude, marker.longitude));
        onClickMarker(marker.id);
      });
    });
  }, [stringifiedMarkes]);

  return <Container id='map'></Container>;
};
export default CatListMap;
