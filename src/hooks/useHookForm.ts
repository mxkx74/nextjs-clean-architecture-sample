import { type FieldValues, type UseFormProps, useForm } from 'react-hook-form';

export const useHookForm = <T extends FieldValues, Context = unknown>(props: UseFormProps<T, Context>) => {
  return useForm<T, Context>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: false,
    ...props,
  });
};
