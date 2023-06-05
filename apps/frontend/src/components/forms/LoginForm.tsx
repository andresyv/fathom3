import { FC } from 'react'
import Form from '../Form'
import { LoginFormFields } from '../../types'
import Input from '../Input'
import Button from '../Button'
import { useAuthStore } from '../../stores/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '../../hooks/useToast'

const LoginForm: FC = () => {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)
  const { showToast } = useToast()

  const onSubmit = async (form: LoginFormFields) => {
    try {
      const user = await login(form)
      if (user) {
        navigate('/')
      }
    } catch (e: any) {
      showToast({
        message: e.message,
        type: 'error'
      })
    }
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
          <Input
            name="email"
            placeholder="email@example.com"
            validation={{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address'
            }}
            autoComplete="email"
            required
          />
          <Input
            name="password"
            placeholder="Your password"
            maxLength={60}
            minLength={6}
            autoComplete="current-password"
            type="password"
            required
          />
          <Button block type="submit">
            Login
          </Button>
        </div>
        <span className="font-semibold">
          Don't have an account?{' '}
          <Link className="text-indigo-500 hover:underline" to="/auth/signup">
            Sign up!
          </Link>
        </span>
      </Form>
    </>
  )
}

export default LoginForm
