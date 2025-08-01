/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react"
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form"

type TFormConfig = {
  defaultValues?: Record<string, any>
  resolver?: any
}

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>
  children: ReactNode
  className?: string
} & TFormConfig

const SWDForm = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
  className,
}: TFormProps) => {
  const formConfig: TFormConfig = {}

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues
  }

  if (resolver) {
    formConfig["resolver"] = resolver
  }

  const form = useForm(formConfig)
  const submitData: SubmitErrorHandler<FieldValues> = (data) => {
    onSubmit(data)
    form.reset()
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(submitData)}
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export default SWDForm
