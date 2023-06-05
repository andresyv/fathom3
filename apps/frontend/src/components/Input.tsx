import type { FC, InputHTMLAttributes } from 'react'
import { useFormContext, FieldValues, Path } from 'react-hook-form'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'className'> {
  name: Path<FieldValues>
  required?: boolean
  validation?: { value: RegExp; message: string }
  minLength?: number
  maxLength?: number
}
const Input: FC<InputProps> = ({ name, required = false, validation, minLength, maxLength, ...rest }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  return (
    <fieldset className="flex flex-col w-full gap-1">
      <input
        className="border rounded-lg outline-none border-2 border-gray-300 text-md py-3.5 px-4 placeholder-gray-500 transition-all focus:ring focus:ring-indigo-300"
        {...register(name, {
          required: required ? `${name} field is required` : undefined,
          pattern: validation,
          minLength: minLength
            ? { value: minLength, message: `${name} field must be at least ${minLength} characters long` }
            : undefined,
          maxLength: maxLength ? { value: maxLength, message: `${name} field must too long` } : undefined
        })}
        {...rest}
      />
      {errors[name] && (
        <p className="font-medium mt-2 text-xs text-red-500" role="alert">{`${errors[name]?.message}`}</p>
      )}
    </fieldset>
  )
}

export default Input
