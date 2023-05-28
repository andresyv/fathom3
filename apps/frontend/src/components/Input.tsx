import type { FC, InputHTMLAttributes } from 'react'
import { useFormContext, FieldValues, Path } from 'react-hook-form'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'className'> {
  name: Path<FieldValues>
}
const Input: FC<InputProps> = ({ name, ...rest }) => {
  const { register } = useFormContext()
  return (
    <fieldset className="flex flex-col w-full">
      <input
        className="border rounded-lg outline-none border-2 border-gray-300 text-md py-3.5 px-4 placeholder-gray-500 transition-all focus:ring focus:ring-indigo-300"
        {...register(name)}
        {...rest}
      />
    </fieldset>
  )
}

export default Input
