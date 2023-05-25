export const SignupSchema = {
  body: {
    type: 'object',
    required: ['email', 'password', 'passwordRepeat'],
    properties: {
      email: {
        type: 'string',
        format: 'email'
      },
      password: {
        type: 'string',
        minLength: 6
      },
      passwordRepeat: {
        type: 'string',
        minLength: 6
      }
    }
  }
}

export const LoginSchema = {
  body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: {
        type: 'string',
        format: 'email'
      },
      password: {
        type: 'string',
        minLength: 6
      }
    }
  }
}
