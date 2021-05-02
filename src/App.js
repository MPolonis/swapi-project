import React from 'react'
import styled from 'styled-components'
// import { Router, Switch, Route } from "react-router-dom";
// import history from "history";
// import { Paths } from "utils/history";
import { Helmet } from 'react-helmet'

const App = () => {
  return (
    <AppContainer>
      <Helmet>
        <meta charset='utf-8' />
        <title>Swapi Project</title>
      </Helmet>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div``
