// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isSubmitted: false,
  }

  submitAnotherResponse = () => {
    this.setState({isSubmitted: false})
  }

  submittedSuccessfully = () => (
    <div className="registration-submit-container">
      <img
        className="logo"
        alt="success"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
      />
      <p className="submit-text">Submitted Successfully</p>
      <button
        className="submit-button"
        type="button"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  onBlurFirstName = () => {
    const firstNameCheck = this.validateFirstName()

    this.setState({firstNameError: !firstNameCheck})
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onBlurLastName = () => {
    const lastNameCheck = this.validateLastName()

    this.setState({lastNameError: !lastNameCheck})
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  firstName = event => {
    this.setState({firstName: event.target.value})
  }

  lastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const checkFirstName = this.validateFirstName()
    const checkLastName = this.validateLastName()
    if (checkFirstName && checkLastName) {
      this.setState({
        isSubmitted: true,
      })
    } else {
      this.setState({
        isSubmitted: false,
        firstNameError: !checkFirstName,
        lastNameError: !checkLastName,
      })
    }
  }

  registrationForm = () => {
    const {firstNameError, lastNameError} = this.state
    const inputErrorColor = firstNameError ? 'input-color' : ''
    const lastErrorColor = lastNameError ? 'input-color' : ''
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label className="label-name-heading" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          className={`input-field ${inputErrorColor}`}
          id="firstName"
          type="text"
          placeholder="First name"
          onChange={this.firstName}
          onBlur={this.onBlurFirstName}
        />
        {firstNameError && <p className="req-color">*Required</p>}
        <label className="label-name-heading" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          className={`input-field ${lastErrorColor}`}
          id="lastName"
          type="text"
          placeholder="Last name"
          onChange={this.lastName}
          onBlur={this.onBlurLastName}
        />
        {lastNameError && <p className="req-color">*Required</p>}
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {isSubmitted ? this.submittedSuccessfully() : this.registrationForm()}
      </div>
    )
  }
}
export default RegistrationForm
