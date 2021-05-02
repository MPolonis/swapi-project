import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ReduxProvider from './providers/reduxProvider'
import GlobalStyles from 'theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from 'theme/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
