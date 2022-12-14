import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'
import AnimatedLetters from '../animations/AnimatedLetters'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import sr from '../../utils/sr'
import { srConfig } from '../../utils/config'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import Button from '../animations/Button'


const MainContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  padding: 0 20px;
  background: transparent;
  position: relative;
  margin: 0 auto 100px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 auto 50px;
    padding: 0;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme?.mixins?.bigButton};
    margin-top: 50px;
  }

}
`

const Container = styled.div`
  position: relative;
  min-width: 1000px;
  min-height: 550px;
  display: flex;
  align-items: center;
  z-index: 100;

  @media (max-width: 1200px) {
    width: 90%;
    min-width: auto;
    margin: 20px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;
  }
  @media (max-width: 991px) {
    width: 100%;
    margin: 0;
  }
`

const ContactInfo = styled.div`
  position: absolute;
  top: 40px;
  width: 350px;
  height: calc(100% - 80px);
  background: var(--light-navy);
  z-index: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);


  h2 {
    font-size: 24px;
    font-weight: 500;
    color: var(--lightest-slate);
  }

  .info {
    position: relative;
    margin: 20px 0;

    li {
      position: relative;
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 30px 0;
      cursor: pointer;
      color: var(--lightest-slate);

      span:nth-child(1) {
        width: 30px;
        min-width: 30px;
      }

      span:nth-child(1) img {
        max-width: 100%;
        filter: invert(1);
      }

      span:nth-child(2) {
        color: var(--lightest-slate);
        margin-left: 10px;
        font-weight: 300;
      }
    }
  }

  .sci {
    position: relative;
    display: flex;

    li {
      list-style: none;
      margin-right: 60px;

      a {
        text-decoration: none;

        img {
          filter: invert(1);
        }
      }
    }

    @media (max-width: 991px) {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 600px) {
      margin-top: 40px;
    }
  }

  @media (max-width: 1200px) {
    top: 0;
    height: 100%;
    position: relative;
    box-shadow: none;
  }
  @media (max-width: 991px) {
    width: 100%;
    height: 100%;
    flex-direction: row;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Title = styled.div`
  @media (min-width: 1200px) {
    margin-bottom: 76px;
  }
`
const ContactForm = styled.div`
  position: absolute;
  padding: 70px 50px 70px 220px;
  margin-left: 220px;
  width: calc(100% - 220px);
  min-height: 100%;
  background: var(--lightest-slate);
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.25);
  color: var(--lightest-navy);
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--lightest-navy);
    font-size: 24px;
    font-weight: 500;
  }

  .formBox {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
  }

  .inputBox {
    position: relative;
    margin-bottom: 35px;

    input {
      width: 100%;
      resize: none;
      font-size: 18px;
      padding: 6px 0;
      outline: none;
      border: none;
      color: var(--lightest-navy);
      background: var(--lightest-slate);
      border-bottom: solid 1px;

      &:focus ~ span {
        transform: translateY(-20px);
        letter-spacing: 1px;
        color: var(--lightest-navy);
        font-weight: 500;
        font-size: 12px;
      }

      &:valid ~ span {
        transform: translateY(-20px);
        letter-spacing: 1px;
        color: var(--lightest-navy);
        font-weight: 500;
        font-size: 12px;
      }
    }

    textarea {
      background: var(--lightest-slate);
      width: 100%;
      height: 120px;
      resize: none;
      font-size: 18px;
      padding: 6px 0;
      color: var(--lightest-navy);
      outline: none;
      border: none;
      border-bottom: solid 1px;

      &:focus ~ span {
        transform: translateY(-20px);
        letter-spacing: 1px;
        color: var(--lightest-navy);
        font-weight: 500;
        font-size: 12px;
      }

      &:valid ~ span {
        transform: translateY(-20px);
        letter-spacing: 1px;
        color: var(--lightest-navy);
        font-weight: 500;
        font-size: 12px;
      }
    }

    span {
      position: absolute;
      left: 0;
      padding: 6px 0;
      font-size: 18px;
      font-weight: 300;
      transition: 0.3s;
    }
  }

  input[type='submit'] {
    position: relative;
    cursor: pointer;
    background: var(--lightest-navy);
    border: none;
    max-width: 150px;
    padding: 12px;
    color: var(--peach);
    font-weight: 800;
    border-radius: var(--border-radius);

    &:hover {
      background: var(--peach);
      color: var(--lightest-navy);
    }
  }

  .w50 {
    width: 47%;
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .w100 {
    width: 100%;
  }

  .email-link {
    ${({ theme }) => theme?.mixins?.bigButton};
    margin-top: 50px;
  }

  @media (max-width: 1200px) {
    position: relative;
    width: calc(100% - 350px);
    margin-left: 0;
    padding: 40px;
    height: 100%;
    box-shadow: none;

  }

  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  @media (max-width: 600px) {
    padding: 25px;
  }
`

function FormSignup() {
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      number: '',
      message: '',
    },
  })
  const onSubmit = (data) => {
    setIsLoading(true)
    emailjs.send('contact_service', 'contact_form', data, '1U58TxmFctiLN9p7O')
      .then(response => {
        setStatus(response?.text)
        reset({
          name: '',
          email: '',
          number: '',
          message: '',
        })
        setIsLoading(false)
        setSuccess(true)
      }, error => {
        setStatus(error)
      })
  }

  const [status, setStatus] = useState('')

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        // TODO: do something fancy
        setStatus('')
      }, 3000)
    }
  }, [status])


  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealContainer.current, srConfig())
  }, [])

  return (
    <MainContainer id='contact' ref={revealContainer}>
      <Title>
        <h2 className='numbered-heading overline'>What???s Next?</h2>
        <h2 className='title'>
          <AnimatedLetters strArray={'Get In Touch'.split('')} idx={15} />
        </h2>
      </Title>
      <Container>
        <ContactInfo className={'contactInfo'}>
          <div>
            <h2>Contact Info</h2>
            <ul className={'info'}>
              <li>
                <FaMapMarkedAlt style={{ color: `var(--lightest-slate)`, width: '30px', height: '30px' }} />
                <span>Folkparksv??gen 54, Stockholm</span>
              </li>
              <li>
                <FaPhoneAlt style={{ color: `var(--lightest-slate)`, width: '30px', height: '30px' }} />
                <a href='tel:+46707801413'>+46707801413</a>
              </li>
            </ul>
          </div>
        </ContactInfo>
        <ContactForm>
          <h2>Send a Message</h2>
          <p>
            Want to work together or have any questions? Whether you have a question
            or just want to say hi, I???ll try my best to get back to you!
          </p>
          <form className={'formBox'} onSubmit={handleSubmit(onSubmit)}>
            <div className={'inputBox w50'}>
              <input disabled={success} {...register('name', { required: true })} name='name' />
              <span>Name</span>
              <p style={{ color: 'red', marginTop: '6px' }}>{errors.name?.type === 'required' && 'Name is required'}</p>
            </div>

            <div className={'inputBox w50'}>
              <input disabled={success} {...register('email', { required: true })} name='email' />
              <span>Email address</span>
              <p style={{
                color: 'red',
                marginTop: '6px',
              }}>{errors.email?.type === 'required' && 'Email is required'}</p>
            </div>

            <div className={'inputBox w50'}>
              <input disabled={success} {...register('number', { required: true })} name='number' type='number' />
              <span>Mobile number</span>
              <p style={{
                color: 'red',
                marginTop: '6px',
              }}>{errors.number?.type === 'required' && 'Number is required'}</p>
            </div>
            <div className={'inputBox w100'}>
              <textarea disabled={success} {...register('message', { required: true })} name='message' />
              <span>Write your message here...</span>
              <p style={{
                color: 'red',
                marginTop: '6px',
              }}>{errors.message?.type === 'required' && 'Message is required'}</p>
            </div>
            <div className={'w100'}>
              <Button disabled={success} success={success} isLoading={isLoading} type={'submit'} />
            </div>
          </form>
        </ContactForm>
      </Container>
    </MainContainer>
  )
}


export default FormSignup
