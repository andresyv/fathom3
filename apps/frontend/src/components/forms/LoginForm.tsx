import { FC } from 'react'
import Form from '../Form'
import { LoginFormFields } from '../../types'
import Input from '../Input'
import Button from '../Button'

const LoginForm: FC = () => {
  const onSubmit = (form: LoginFormFields) => {
    console.log(form)
  }

  return (
    <>
      <Form<LoginFormFields>
        className="bg-white rounded-lg flex flex-col shadow-md w-full p-6 gap-12 md:max-w-lg"
        onSubmit={onSubmit}
      >
        <div className="flex justify-center">
          <h3 className="font-bold text-3xl text-indigo-500">Welcome back</h3>
        </div>
        <div className="flex flex-col gap-4">
          <Input name="email" placeholder="email@example.com" autoComplete="email" />
          <Input name="password" placeholder="Your password" autoComplete="current-password" type="password" />
          <Button block type="submit">
            Login
          </Button>
        </div>
      </Form>
    </>
  )
}

export default LoginForm
