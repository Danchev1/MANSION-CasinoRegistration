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
      forArtibute: 'firstNameInput',
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
      pattern: /^[a-zA-Z]{4,12}$/,
      error_message: 'Username must have min 4 and 12 max characters'
    },
    label: {
      forArtibute: 'usernameInput',
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
      forArtibute: 'emailInput',
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
      forArtibute: 'passwordInput',
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
      forArtibute: 'checkboxInput',
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
      required: false,
      pattern: '',
      error_message: ''
    },
    label: {
      forArtibute: 'address2Input',
      text: 'Address No.2'
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
      forArtibute: 'address2Input',
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
      required: false,
      pattern: '',
      error_message: ''
    },
    label: {
      forArtibute: 'cityInput',
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
      required: false,
      pattern: '',
      error_message: ''
    },
    label: {
      forArtibute: 'countryInput',
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
      required: false,
      pattern: '',
      error_message: ''
    },
    label: {
      forArtibute: 'pcodeInput',
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
      required: false,
      pattern: '',
      error_message: ''
    },
    label: {
      forArtibute: 'phoneInput',
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
