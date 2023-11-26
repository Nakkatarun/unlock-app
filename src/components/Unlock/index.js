import {useState} from 'react'

import {
  MainContainer,
  Image,
  Description,
  UnlockButton,
} from './styledComponents'

const Unlock = () => {
  const [status, setStatus] = useState(false)

  const onClickButton = () => {
    setStatus(prevState => !prevState)
  }

  console.log(status)

  return (
    <MainContainer>
      {status ? (
        <>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Description>Your Device is Unlocked</Description>
          <UnlockButton type="button" onClick={onClickButton}>
            Lock
          </UnlockButton>
        </>
      ) : (
        <>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Description>Your Device is Locked</Description>
          <UnlockButton type="button" onClick={onClickButton}>
            Unlock
          </UnlockButton>
        </>
      )}
    </MainContainer>
  )
}

export default Unlock
