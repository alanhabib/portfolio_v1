import React from 'react'

const Form = () => {
  return (
    <div class="wrapper">
      <form class="signup">
        <fieldset class="signup__field signup__field--name">
          <legend class="signup__field__header">Name</legend>
          <input
            type="text"
            class="signup__field__input signup__field__input--firstname"
            placeholder="First"
            aria-label="First Name"
          />
          <input
            type="text"
            class="signup__field__input signup__field__input--firstname"
            placeholder="Last"
            aria-label="Last Name"
          />
        </fieldset>
        <fieldset class="signup__field signup__field--username">
          <legend class="signup__field__header">Choose your username</legend>
          <input
            type="text"
            class="signup__field__input signup__field__input--username"
            aria-label="Username"
          />
        </fieldset>
        <fieldset class="signup__field signup__field--password">
          <legend class="signup__field__header">Create a password</legend>
          <input
            type="password"
            class="signup__field__input signup__field__input--password"
            aria-label="Password"
          />
        </fieldset>
        <fieldset class="signup__field signup__field--confirm-password">
          <legend class="signup__field__header">Confirm your password</legend>
          <input
            type="password"
            class="signup__field__input signup__field__input--confirm-password"
            aria-label="Confirm Password"
          />
        </fieldset>
        <fieldset class="signup__field signup__field--birthday">
          <legend class="signup__field__header">Birthday</legend>
          <div class="signup__field__selection">Month</div>
          <input
            type="hidden"
            class="signup__field__input signup__field__input--birth-month"
            aria-label="Month"
          />
          <input
            type="text"
            class="signup__field__input signup__field__input--birth-day"
            placeholder="Day"
            aria-label="Day"
          />
          <input
            type="text"
            class="signup__field__input signup__field__input--birth-year"
            placeholder="Year"
            aria-label="Year"
          />
        </fieldset>
        <fieldset class="signup__field signup__field--phone">
          <legend class="signup__field__header">Mobile phone</legend>
          <input
            type="text"
            class="signup__field__input signup__field__input--phone"
            aria-label="Phone"
          />
        </fieldset>
        <fieldset class="signup__field signup__field--current-email">
          <legend class="signup__field__header">
            Your current email address
          </legend>
          <input
            type="text"
            class="signup__field__input signup__field__input--current-email"
            aria-label="Email"
          />
        </fieldset>
      </form>
    </div>
  )
}

export default Form
