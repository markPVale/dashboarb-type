import React, {FC} from 'react'
import styled from 'styled-components'
import {Menu} from './Menu'

const Wrapper = styled.section`
  flex-direction: column;
  max-width: 250px;
  height: 92vh;
  min-height: 640px;
`

export const SideBar: FC = () => {
  return (
    <Wrapper>
      <div>
      <Menu />

        yo yo yo
      </div>
    </Wrapper>
  )
}

// src/components/sideBar/index.tsx
// src/components/sideBar/index.tsx
// src/components/sideBar/Menu/index.tsx