import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

type FormProps<T> = {
  id: string;
  onSubmit: (data: T) => void;
  schema: yup.ObjectSchema<FieldValues>;
  children: React.ReactNode;
};

const Form = <T,>({ id, onSubmit, schema, children }: FormProps<T>) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  return (
    <FormProvider {...methods}>
      <form id={id} onSubmit={methods.handleSubmit((data) => onSubmit(data as T))}>
        {children}
      </form>
    </FormProvider>
  );
};

export { Form };

