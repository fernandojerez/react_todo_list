import React from "react"
import { PageTransition } from "../components/page_transition"
import Map from "../components/map"
import SEO from "../components/seo"

const MapPage = () => (
  <PageTransition>
    <SEO title="Mapa" />
    <Map />
  </PageTransition>
)

export default MapPage
