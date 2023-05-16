import { type FieldValues, type UseFormProps, type SubmitHandler, type UseFormReturn, useForm } from 'react-hook-form';

type Props<T extends FieldValues, Context = unknown> = {
  onSubmit?: SubmitHandler<T>;
} & UseFormProps<T, Context>;

export const useHookForm = <T extends FieldValues, Context = unknown>({ onSubmit, ...props }: Props<T, Context>) => {
  const methods = useForm<T, Context>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: false,
    ...props,
  });

  const { handleSubmit } = methods;

  return {
    ...methods,
    ...(onSubmit && {
      handleSubmitWithCallback: handleSubmit(onSubmit),
    }),
  } satisfies UseFormReturn<T, Context>;
};
