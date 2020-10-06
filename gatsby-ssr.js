/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { ThemeProvider } from "styled-components"
import Layout from "./src/components/layout"
import { GlobalStyles } from "./src/styles"
import Store from "./src/store"
import { persistStore } from "redux-persist"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

export const wrapRootElement = ({ element }) => {
  const persistor = persistStore(Store)
  return (
    <>
      <GlobalStyles />
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={{ mode: "light" }}>
            <Layout>{element}</Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}
