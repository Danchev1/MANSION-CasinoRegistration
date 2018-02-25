export let formDescriptor = [
  {
    id: 1,
    layout: {
      columns: ''
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
    layout: {
      columns: 2
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
