export function validate (field) {
  if (field.validation.pattern) {
    regexValidation(field)
  } else if (field.validation.required) {
    hasValue(field)
  }
}

function regexValidation (field) {
  if (field.validation.pattern.test(field.input.value)) {
    field.isValid = true
  } else {
    field.isValid = false
  }
}

function hasValue (field) {
  if (!field.input.value) {
    field.isValid = false
  }
}


