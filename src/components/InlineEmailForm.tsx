import { useState } from 'react'
import Button from './Button'
import { isMobile } from '../utils'

const InlineEmailForm = (): JSX.Element => {
  const [email, setEmail] = useState('')
  return (
    <form className='inline-form'>
      <input
        type='email'
        value={email}
        onChange={e => {
          setEmail(e.target.value)
        }}
        placeholder='your-email@mail.com'
        autoFocus={!isMobile()}
        autoComplete='on'
      />
      <Button type='submit'>Contact me</Button>
    </form>
  )
}

export default InlineEmailForm
