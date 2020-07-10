import styled from 'styled-components'
import { media } from '../../utils/styles.utils'

export const TopSpace = styled.div`
  height: 60px;
`

export const Wrapper = styled.div`
  background-color: #0b272b;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.16);
  height: 100px;
  width: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  position:fixed;
`

export const Container = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  color: white;
  justify-content: center;
  padding: 0 1em;
  position: relative; 
  ${media.wide`
    margin: 0 auto;
    padding: 0;
    width: 1180px;
  `}
`
