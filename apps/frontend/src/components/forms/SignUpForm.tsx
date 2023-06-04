import { FC } from 'react'
import Form from '../Form'
import { SignUpFields } from '../../types'
import Input from '../Input'
import Button from '../Button'
import { useAuthStore } from '../../stores/auth'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm: FC = () => {
  const navigate = useNavigate()
  const signup = useAuthStore((state) => state.signUp)

  const onSubmit = async (form: SignUpFields) => {
    try {
      const user = await signup(form)
      if (user) {
        navigate('/')
      }
    } catch (e) {}
  }

  return (
    <>
      <Form<SignUpFields>
        className="bg-white rounded-lg flex flex-col shadow-md w-full p-6 gap-12 md:max-w-lg"
        onSubmit={onSubmit}
      >
        <div className="flex justify-center">
          <h3 className="font-bold text-3xl text-indigo-500">Create account</h3>
        </div>
        <div className="flex flex-col gap-4">
          <Input name="email" placeholder="email@example.com" autoComplete="email" />
          <Input name="password" placeholder="Your password" autoComplete="current-password" type="password" />
          <Input name="passwordRepeat" placeholder="Repeat password" autoComplete="current-password" type="password" />
          <Button block type="submit">
            Sign up
          </Button>
        </div>
        <span className="font-semibold">
          Already have an account?
          <Link className="text-indigo-500 hover:underline" to="/auth/login">
            Sign in!
          </Link>
        </span>
      </Form>
    </>
  )
}

export default LoginForm
