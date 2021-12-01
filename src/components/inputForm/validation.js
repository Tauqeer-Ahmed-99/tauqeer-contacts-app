import * as yup from "yup";
import { setIn } from "final-form";

const validationSchema = yup.object({
  name: yup.string().required("Name Required!"),
  email: yup.string().email("Email is invalid!").required("Email Required!"),
  number: yup
    .string()
    .min(10, "Must have 10 digits!")
    .max(10, "Must have 10 digits!")
    .required("Phone no. Required!"),
  city: yup.string().required("City Name Required!"),
});

const validateFormValues = (schema) => async (values) => {
  try {
    await schema.validate(values, { abortEarly: false });
  } catch (err) {
    const errors = err.inner.reduce((formError, innerError) => {
      return setIn(formError, innerError.path, innerError.message);
    }, {});

    return errors;
  }
};

const validation = validateFormValues(validationSchema);

export default validation;
