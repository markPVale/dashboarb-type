import React, {FC} from 'react'
import {Container} from './styles'
import {darkTheme, lightTheme} from './theme'
import styled, { ThemeProvider } from 'styled-components'
import {SideBar} from './sideBar'

export const App: FC = () => {
  return (
    <>
    <ThemeProvider theme={lightTheme} >
      <Container>
        <div>

          SideBar
          <SideBar />

        </div>

      </Container>

      <div>
      hellowwwworld!!!!
    </div>
    </ThemeProvider>

    </>
  )
}

