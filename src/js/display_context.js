/* Display context object works as meta data or source of define what to input
   to render for now works checked to work with type: text, checkbox, email, number */

export let formDescriptor = [
  {
    id: 1,
    isValid: true,
    validation: {
      required: true,
      pattern: '',
      error_message: 'Name is required'
    },
    label: {
      forAttribute: 'firstNameInput',
      text: 'First Name'
    },
    input: {
      type: 'text',
      name: 'fname',
      placeholder: 'Enter your first name',
      value: ''
    }
  },
  {
    id: 2,
    isValid: true,
    validation: {
      required: true,
      pattern: /^[a-zA-Z0-9]{4,12}$/,
      error_message: 'Username must have min 4 and 12 max characters'
    },
    label: {
      forAttribute: 'usernameInput',
      text: 'Username'
    },
    input: {
      type: 'text',
      name: 'username',
      placeholder: 'Enter your username',
      value: ''
    }
  },
  {
    id: 3,
    isValid: true,
    validation: {
      required: true,
      pattern: /([\w.\-_]+)?\w+@[\w-_]+(\.\w+)+/,
      error_message: 'Wrong syntax, example: jondoe@jondoe.com'
    },
    label: {
      forAttribute: 'emailInput',
      text: 'Email'
    },
    input: {
      type: 'email',
      name: 'email',
      placeholder: 'Enter your email',
      value: ''
    }
  },
  {
    id: 4,
    isValid: true,
    validation: {
      required: true,
      pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,12}$/,
      error_message: 'Password: min 6 and max 6 charactes, at least 1 upercase, lowercase, digit, special character'
    },
    label: {
      forAttribute: 'passwordInput',
      text: 'Password'
    },
    input: {
      type: 'password',
      name: 'email',
      placeholder: 'Choose your password',
      value: ''
    }
  },
  {
    id: 5,
    isValid: true,
    validation: {
      required: true,
      pattern: '',
      error_message: 'Must agree with terms and conditions'
    },
    label: {
      forAttribute: 'checkboxInput',
      text: 'By checking this box, I agree to the Terms & Conditions of the site.'
    },
    input: {
      type: 'checkbox',
      name: '',
      placeholder: '',
      value: ''
    }
  }
]

export let formInformationDescriptor = [
  {
    id: 1,
    isValid: true,
    validation: {
      required: true,
      pattern: '',
      error_message: 'Address is reuired'
    },
    label: {
      forAttribute: 'address1Input',
      text: 'Address No.1'
    },
    input: {
      type: 'text',
      name: 'adress',
      placeholder: 'Enter your first address',
      value: ''
    }
  },
  {
    id: 2,
    isValid: true,
    validation: {
      required: false,
      pattern: '',
      error_message: ''
    },
    label: {
      forAttribute: 'address2Input',
      text: 'Address No.2'
    },
    input: {
      type: 'text',
      name: 'address2',
      placeholder: 'Enter your second address',
      value: ''
    }
  },
  {
    id: 3,
    isValid: true,
    validation: {
      required: true,
      pattern: /^[a-zA-Z]{1,}$/,
      error_message: 'City is required. Field must contain only letters'
    },
    label: {
      forAttribute: 'cityInput',
      text: 'City'
    },
    input: {
      type: 'text',
      name: 'city',
      placeholder: 'City',
      value: ''
    }
  },
  {
    id: 4,
    isValid: true,
    validation: {
      required: true,
      pattern: /^[a-zA-Z]{1,}$/,
      error_message: 'Country is required. Field must contain only letters'
    },
    label: {
      forAttribute: 'countryInput',
      text: 'Country'
    },
    input: {
      type: 'text',
      name: 'country',
      placeholder: 'Country',
      value: ''
    }
  },
  {
    id: 5,
    isValid: true,
    validation: {
      required: true,
      pattern: /([0-9])/,
      error_message: 'Postal code is required. Field must contain only digits'
    },
    label: {
      forAttribute: 'pcodeInput',
      text: 'Postal Code'
    },
    input: {
      type: 'text',
      name: 'postal-code',
      placeholder: 'Postal code',
      value: ''
    }
  },
  {
    id: 6,
    isValid: true,
    validation: {
      required: true,
      pattern: /([0-9])/,
      error_message: 'Phone is required. Field must contain only digits'
    },
    label: {
      forAttribute: 'phoneInput',
      text: 'Phone'
    },
    input: {
      type: 'tel',
      name: 'phone',
      placeholder: '+555-555-555',
      value: ''
    }
  }
]
