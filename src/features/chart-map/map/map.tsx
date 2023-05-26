// react
import React, { useState } from "react";
// leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
// react-icon
import { FaSpinner } from 'react-icons/fa';
// react-query
import { useQuery } from "@tanstack/react-query";
// asset/image
import covidIconUrl from '../../../assets/images/covid19.svg';

const covidIcon = new Icon({
  iconUrl: covidIconUrl,
  iconSize: [15, 15]
});

const Map = () => {

  const [countryData, setCountryData] = useState(null);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['covidData'],
    queryFn: async () =>
      await (
        await fetch('https://disease.sh/v3/covid-19/countries')
      ).json()
  });

  if (isLoading) {
    setTimeout(() => {
      return <div>
        <FaSpinner className="w-10 h-10 animate-spin mx-auto" />
        <p className="text-center">Loading World Map...</p>
      </div>
    }, 1000);
  }
  if (isError)
    return <span className='text-red'>{(error as any).message ? (error as any).message : error}</span>

  return (
    <div className="mb-4">
      <MapContainer center={[0, 0]}
        zoom={2}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=7aacc31b-8337-4e60-a0b2-cfab7207ffcf'
        />
        {
          countryData && (
            <Popup
              position={[(countryData as any).countryInfo.lat, (countryData as any).countryInfo.long]}
            >
              <div>
                <h1 className="flex flex-col gap-1 font-bold">
                  {(countryData as any).country}
                  <img src={`${(countryData as any).countryInfo.flag}`} style={{ height: '30px', width: '35px', objectFit: 'contain' }} alt='flag' /></h1>
                <p>Total cases:  {(countryData as any).cases}</p>
                <p>Active:  {(countryData as any).active}</p>
                <p>Recovered:  {(countryData as any).recovered}</p>
                <p>Deaths:  {(countryData as any).deaths}</p>
              </div>

            </Popup>
          )
        }
        {
          data && data.length > 0 && data.map((countryData: any) => (
            <Marker
              key={countryData.country}
              position={[countryData.countryInfo.lat, countryData.countryInfo.long]}
              eventHandlers={{
                click: () => {
                  setCountryData(countryData)
                }
              }}
              icon={covidIcon}
            />
          ))
        }
      </MapContainer>
    </div>
  );
}

export default Map;