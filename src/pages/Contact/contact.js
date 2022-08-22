import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { srConfig, email } from '../../utils/config'
import sr from '../../utils/sr'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import AnimatedLetters from '../../components/animations/AnimatedLetters'
import { FaHandPeace } from 'react-icons/fa'

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
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
`

const Contact = () => {
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealContainer.current, srConfig())
  }, [])

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>
      <h2 className="title">
        <AnimatedLetters strArray={'Get In Touch'.split('')} idx={15} />
      </h2>

      <p>
        Want to work together or have any questions? Whether you have a question
        or just want to say hi, I’ll try my best to get back to you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
        <FaHandPeace
          style={{ width: '26px', height: '26px', marginLeft: '12px' }}
        />
      </a>
    </StyledContactSection>
  )
}

export default Contact

// import React, { useState } from 'react'
// import AnimatedLetters from '../../components/animations/AnimatedLetters'
// import {
//   FormColumn,
//   FormWrapper,
//   FormInput,
//   FormSection,
//   FormRow,
//   FormInputRow,
//   FormMessage,
//   FormButton,
//   FormTitle,
//   Container,
//   InputWrapper,
// } from './ContactStyles'

// import validateForm from './ValidateForm'

// const Contact = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPass, setConfirmPass] = useState('')
//   const [error, setError] = useState(null)
//   const [success, setSuccess] = useState(null)
//   // let history = useHistory()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const resultError = validateForm({ name, email, password, confirmPass })

//     if (resultError !== null) {
//       setError(resultError)
//       return
//     }
//     setName('')
//     setEmail('')
//     setPassword('')
//     setConfirmPass('')
//     setError(null)
//     setSuccess('Application was submitted!')

//     setTimeout(() => {
//       // history.push('/21')
//     })
//   }

//   const messageVariants = {
//     hidden: { y: 30, opacity: 0 },
//     animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
//   }

//   const formData = [
//     {
//       label: 'Name',
//       value: name,
//       onChange: (e) => setName(e.target.value),
//       type: 'text',
//     },
//     {
//       label: 'Email',
//       value: email,
//       onChange: (e) => setEmail(e.target.value),
//       type: 'email',
//     },
//   ]
//   return (
//     <FormSection>
//       <Container>
//         <FormRow>
//           <FormColumn small>
//             <FormTitle>
//               <AnimatedLetters
//                 strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
//                 idx={15}
//               />
//             </FormTitle>
//             <FormWrapper onSubmit={handleSubmit}>
//               {formData.map((el, index) => (
//                 <FormInputRow key={index}>
//                   <FormInput
//                     type={el.type}
//                     placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
//                     value={el.value}
//                     onChange={el.onChange}
//                   />
//                 </FormInputRow>
//               ))}
//               <FormButton type="submit">Signup</FormButton>
//             </FormWrapper>
//             {error && (
//               <FormMessage
//                 variants={messageVariants}
//                 initial="hidden"
//                 animate="animate"
//                 error
//               >
//                 {error}
//               </FormMessage>
//             )}
//             {success && (
//               <FormMessage
//                 variants={messageVariants}
//                 initial="hidden"
//                 animate="animate"
//               >
//                 {success}
//               </FormMessage>
//             )}
//           </FormColumn>
//         </FormRow>
//       </Container>
//     </FormSection>
//   )
// }

// export default Contact
