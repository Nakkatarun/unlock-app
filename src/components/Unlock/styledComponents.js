// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#161617, #3c2940);
  height: 100vh;
  width: 100vw;
`

export const Image = styled.img`
  height: 300px;
  width: 300px;
  margin-bottom: 0px;
`

export const Description = styled.p`
  font-size: 30px;
  color: #e2e8f0;
  margin-bottom: 30px;
  font-family: 'Roboto';
`
export const UnlockButton = styled.button`
  background-color: #06b6d4;
  border: none;
  padding: 15px;
  cursor: pointer;
  font-size: 18px;
  color: #e2e8f0;
  margin-top: 50px;
  border-radius: 10px;
  width: 150px;
`
