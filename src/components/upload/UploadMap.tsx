import React, { useRef, useEffect, useState } from 'react'
import { Container } from './UploadMap.style'
import { logo, cat3, locationImg } from '../../assets'


interface CatData {
  imageUrl: File | null;
  description: string;
  position: {
    latitude: number;
    longitude: number;
  };
  address: string;
}

interface Props {
  setForm: React.Dispatch<React.SetStateAction<CatData>>;
  addressValid: boolean;
  address: string;
}

const UploadMap = ({ 
  setForm,
  addressValid,
  address
}: Props) => {
  const defaultLocation = {
    latitude: 37.498095,
    longitude: 127.02761,
  }

  const [clickedMap, setClickedMap] = useState<boolean>(false)
  const [locationLoading, setLocationLoading] = useState<boolean>(false);

  const mapRef = useRef<HTMLElement | null | any>(null);
  const ref = useRef<HTMLDivElement>(null)

  const handleMap = () => {
    const { y, x } = mapRef.current.center;
    let address = '';
    naver.maps.Service.reverseGeocode(
      {
        coords: new naver.maps.LatLng(y, x),
        orders: [
          naver.maps.Service.OrderType.ADDR,
          naver.maps.Service.OrderType.ROAD_ADDR
        ].join(',')
      }, 
      function(status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert('Something wrong!');
        }
        address = response.v2.address.jibunAddress;

        setForm((pre)=> {return {
          ...pre,
          address,
          position: {
            latitude: y,
            longitude: x
          }
        }});
      }
    );
  }

  const handleMapClicked = () => {
    setClickedMap(true)
  }

  useEffect(()=>{
    const handleMapLeave = (e:MouseEvent) => {
      if(ref.current && !ref.current.contains(e.target as Node)) {
        handleMap()
      }
    }
    clickedMap && document.addEventListener('mouseup', handleMapLeave);
    return () => document.removeEventListener('mouseup', handleMapLeave);
  })

  const handleLocationButton = () => {
    setLocationLoading(true);
    
    const map = mapRef.current;
    
    function onSuccessGeolocation(position: GeolocationPosition) {
      const location = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.setCenter(location);
      setLocationLoading(false);
      handleMap();
    }
  
    function onErrorGeolocation() {
      setLocationLoading(false);
    }
  
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
    }
  }

  useEffect(() => {
    mapRef.current =  new naver.maps.Map('map', {
      center: new naver.maps.LatLng(defaultLocation.latitude, defaultLocation.longitude),
      zoomControl: false,
    });

  }, [mapRef]);

  return (
    <Container>
        <div id='map' ref={ref} onMouseUp={handleMap} onTouchEnd={handleMap}  onMouseDown={handleMapClicked} onTouchStart={handleMapClicked}>
          <div className='marker'>
            <img  src={logo}/>
          </div>
        </div>
        <div className='address-area'>
          <div>{address}</div>
          <img src={locationLoading ? cat3 : locationImg} onClick={handleLocationButton}/>
        </div>
        {addressValid ? '' : <div className='warning'>&#8251; 내 지역의 고양이만 등록할 수 있어요</div>}
    </Container>
  )
}

export default UploadMap