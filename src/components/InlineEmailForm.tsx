import { FormEvent, useState } from 'react'
import Button from './Button'
import { isMobile } from '../utils'
import emailjs from '@emailjs/browser'
import {
  EMAIL_JS_CONTACT_FORM_SERVICE_ID,
  EMAIL_JS_EMAIL_FORM_TEMPLATE_ID,
  EMAIL_JS_PUBLIC_KEY,
} from '../env'

const InlineEmailForm = (): JSX.Element => {
  const [email, setEmail] = useState('')

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (email.length && expression.test(email)) {
      emailjs
        .send(
          EMAIL_JS_CONTACT_FORM_SERVICE_ID,
          EMAIL_JS_EMAIL_FORM_TEMPLATE_ID,
          {
            email: email,
          },
          EMAIL_JS_PUBLIC_KEY,
        )
        .then(() => {
          alert("Thankyou for your interest. We'll get back to you soon!")
        })
        .catch(() => alert('Could not submit form. Please try after some time'))
        .finally(() => setEmail(''))
    } else {
      alert('Please enter a valid email ID')
    }
  }
  return (
    <form className='inline-form' onSubmit={onFormSubmit}>
      <input
        type='email'
        value={email}
        onChange={e => {
          setEmail(e.target.value)
        }}
        placeholder='your-email@email.com'
        autoFocus={!isMobile()}
        autoComplete='on'
      />
      <Button type='submit'>Contact me</Button>
    </form>
  )
}

export default InlineEmailForm
