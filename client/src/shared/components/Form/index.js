import React from "react";
import { Formik, Form as FormikForm, Field as FormikField } from "formik";
import { get, mapValues } from "lodash";
import { is, generateErrors } from "../../utils/validation";
import Field from "./Field";
import PropTypes from "prop-types";

const propTypes = {
  validate: PropTypes.func,
  validations: PropTypes.object,
  validateOnBlur: PropTypes.bool,
};

const defaultProps = {
  validate: undefined,
  validations: undefined,
  validateOnBlur: false,
};

export const Form = ({ validate, validations, ...otherProps }) => (
  <Formik
    {...otherProps}
    validate={(values) => {
      if (validate) {
        return validate(values);
      }
      if (validations) {
        return generateErrors(values, validations);
      }
      return {};
    }}
  />
);

Form.Field = mapValues(
  Field,
  (FieldComponent) =>
    ({ name, validate, ...props }) =>
      (
        <FormikField name={name} validate={validate}>
          {({ field, form: { touched, errors, setFieldValue } }) => (
            <FieldComponent
              {...field}
              {...props}
              name={name}
              error={get(touched, name) && get(errors, name)}
              onChange={(value) => setFieldValue(name, value)}
            />
          )}
        </FormikField>
      )
);

Form.Element = (props) => <FormikForm noValidate {...props} />;

Form.initialValues = (data, getFieldValues) =>
  getFieldValues((key, defaultValue = "") => {
    const value = get(data, key);
    return value === undefined || value === null ? defaultValue : value;
  });

Form.handleAPIError = (error, form) => {
  if (error.data.fields) {
    form.setErrors(error.data.fields);
  } else {
    // toast.error(error);
  }
};

Form.is = is;

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

//   <Formik
//     {...otherProps}
//     validate={(values) => {
//       if (validate) {
//         return validate(values);
//       }
//       if (validations) {
//         return generateErrors(values, validations);
//       }
//       return {};
//     }}
//   />
// );

// Form.Element = (props) => <FormikForm noValidate {...props} />;

// Form.Field = mapValues(
//   Field,
//   (FieldComponent) =>
//     ({ name, validate, ...props }) =>
//       (
//         <FormikField name={name} validate={validate}>
//           {({ field, form: { touched, errors, setFieldValue } }) => (
//             <FieldComponent
//               {...field}
//               {...props}
//               name={name}
//               error={get(touched, name) && get(errors, name)}
//               onChange={(value) => setFieldValue(name, value)}
//             />
//           )}
//         </FormikField>
//       )
// );

// Form.initialValues = (data, getFieldValues) =>
//   getFieldValues((key, defaultValue = "") => {
//     const value = get(data, key);
//     return value === undefined || value === null ? defaultValue : value;
//   });

// Form.handleAPIError = (error, form) => {
//   if (error.data.fields) {
//     form.setErrors(error.data.fields);
//   } else {
//     // toast.error(error);
//   }
// };

// Form.is = is;

// export const Form = () => {
//   return <div>index</div>;
// };
