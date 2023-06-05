import { type FormHTMLAttributes, type ReactElement } from 'react'
import { useForm, SubmitHandler, FieldValues, UseFormProps, FormProvider } from 'react-hook-form'

interface FormProps<T extends FieldValues> extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children: ReactElement | ReactElement[]
  defaultValues?: UseFormProps<T>
  onSubmit: SubmitHandler<T>
}

const SForm = <T extends FieldValues>({ defaultValues, children, onSubmit, className }: FormProps<T>) => {
  const methods = useForm<T>({ ...defaultValues, mode: 'onChange' })
  const { handleSubmit } = methods
  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default SForm
