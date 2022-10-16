import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@components/main/CatListMap.style';

interface Props {
  onClickMarker: (id: number) => void;
}

const CatListMap = ({ onClickMarker }: Props) => {
  const [myLocation, setMyLocation] = useState({
    latitude: 37.498095,
    longitude: 127.02761,
  });

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
    FAKE_MAKERS.map(marker => {
      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(marker.position.latitude, marker.position.longitude),
        map: mapRef.current,
      });

      naver.maps.Event.addListener(markerRef.current, 'click', () => {
        mapRef.current.panTo(new naver.maps.LatLng(marker.position.latitude, marker.position.longitude));
        onClickMarker(marker.id);
      });
    });
  }, []);

  return <Container id='map'></Container>;
};
export default CatListMap;

const FAKE_MAKERS = [
  {
    id: 1,
    position: {
      latitude: 37.498095,
      longitude: 127.02801,
    },
  },
  {
    id: 2,
    position: {
      latitude: 37.488095,
      longitude: 127.02801,
    },
  },
  {
    id: 3,
    position: {
      latitude: 37.498095,
      longitude: 127.02761,
    },
  },
];
