import React, {FC} from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
display: flex;
flex-direction: column;
@media (max-width: 620px) {
  margin-top: 40px
}
`

const itemCards = [
  {
    name: 'Dashboard'
  },
  {
    name: 'Link1'
  },
  {
    name: 'Link2'
  },

]

interface IItemProps {
  name: string
  // icon: object | string
  // link: string
}


const items = itemCards.map((item: IItemProps, idx: number): object => {
   return  <li key={idx}> {item.name} </li>
})

export const Menu: FC = () => {
  return (
    <>
      <Wrapper>{items}</Wrapper>
    </>
  )
}