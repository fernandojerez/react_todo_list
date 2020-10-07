import React from "react"
import Layout from "./src/components/layout"
import { GlobalStyles } from "./src/styles"
import Store from "./src/store"
import { persistStore } from "redux-persist"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

export const RootElement = ({ element }) => {
  const persistor = persistStore(Store)
  return (
    <>
      <GlobalStyles />
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>{element}</Layout>
        </PersistGate>
      </Provider>
    </>
  )
}
