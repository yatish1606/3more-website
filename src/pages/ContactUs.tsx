import { useRef, useState, FormEvent, ChangeEvent } from 'react'
import Select from 'react-select'
import { helpList } from '../data/contact'
import icons from '../ui/icons'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const ContactUs = (): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const [selectedOption, setSelectedOption] = useState<string>('')
  const options = helpList.map(item => {
    return {
      label: item,
      value: item,
    }
  })

  const [validations, setValidations] = useState<{ [key: string]: boolean }>({
    name: false,
    email: false,
  })

  const validateName = () => {
    setValidations({
      ...validations,
      name: (nameRef && nameRef.current && nameRef.current?.value.trim().length < 1) || false,
    })
  }

  const validateEmail = () => {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    setValidations({
      ...validations,
      email:
        (emailRef &&
          emailRef.current &&
          (emailRef.current?.value.trim().length < 1 ||
            !expression.test(emailRef.current.value))) ||
        false,
    })
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <div className='contact-us-container'>
      <div className='contact-us-info'>
        <h2>
          Got a question ? <span className='highlight'>Get in touch.</span>
        </h2>
        <br />
      </div>
      <section className='contact-us-main'>
        <form className='contact-us-form' onSubmit={onFormSubmit}>
          <div className='form-field'>
            <label htmlFor='name'>Your Name</label>
            <input
              autoFocus
              ref={nameRef}
              type='text'
              placeholder='Enter your name'
              id='name'
              name='name'
              required
              onBlur={validateName}
            />
            <small className={`${validations.name && 'show'} error-message`}>
              Please enter a valid name
            </small>
          </div>
          <div className='form-field'>
            <label htmlFor='email'>Email Address</label>
            <input
              ref={emailRef}
              type='email'
              placeholder='Enter your email'
              id='email'
              name='email'
              required
              onBlur={validateEmail}
            />
            <small className={`${validations.email && 'show'} error-message`}>
              Please enter a valid email address
            </small>
          </div>
          <div className='form-field'>
            <label htmlFor='help'>What can we help you with?</label>
            <select name='help' id='help' defaultValue='Select ...' onChange={handleSelectChange}>
              {helpList.map((item, index) => (
                <option key={index} id='item'>
                  {item}
                </option>
              ))}
              <div className='select-arrow'>{icons.chevronDown}</div>
            </select>
          </div>
          <div className='form-field'>
            <label htmlFor='message'>
              Your Message <span className='subtext'>(optional)</span>
            </label>
            <textarea
              ref={messageRef}
              placeholder='What can we help you with ?'
              id='message'
              name='message'
            ></textarea>
          </div>
          <br />
          <Button type='submit'>Submit</Button>
          <small>We usually respond within 3 - 4 business days</small>
        </form>
        <div className='contact-us-links'>
          <h6>Useful Links</h6>

          <Link to='/about'>About Us {icons.arrowUpRight}</Link>
          <Link to='/about#faq'>FAQs {icons.arrowUpRight}</Link>
          <Link to='/about'>About Us {icons.arrowUpRight}</Link>

          <br />
          <h6>Reach out</h6>
          <Link to='mailto:info@3more-tech.com'>info@3more-tech.com</Link>

          <Link to='tel:+91 9881404657'> +91 9881404657</Link>
          <small></small>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
