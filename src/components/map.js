import React, { useState } from "react"
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react"
import map_data from "../utils/map_data"
import { padding } from "../styles/theme"

const MapContainer = ({ google }) => {
  const [detail, setDetail] = useState({
    visible: false,
    marker: null,
    payload: {},
  })

  const onMarkerClick = ({ payload }, marker, e) =>
    setDetail({
      payload: payload,
      marker,
      visible: true,
    })

  const onMapClicked = cla => {
    if (detail.visible) {
      setDetail({
        visible: false,
        marker: null,
        payload: {},
      })
    }
  }

  return (
    <Map
      google={google}
      zoom={4}
      onClick={onMapClicked}
      style={{ marginLeft: `-${padding}`, marginTop: `-${padding}` }}
      initialCenter={{ lat: 2.421525, lng: -75.226288 }}
    >
      {map_data.map(itm => {
        const point = { lat: itm.latitude, lng: itm.longitude }
        return (
          <Marker
            key={itm.id}
            position={point}
            title={itm.name}
            payload={itm}
            onClick={onMarkerClick}
          ></Marker>
        )
      })}
      <InfoWindow marker={detail.marker} visible={detail.visible}>
        <>
          <h2>{detail.payload.name}</h2>
          <p>{detail.payload.genre}</p>
        </>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAP_KEY,
})(MapContainer)
