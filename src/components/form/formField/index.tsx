import { UseFormRegister } from 'react-hook-form';

import styles from '~/components/form/Form.module.scss';
import { IUser } from '~/types';

export type IFormFieldProps = {
  // rules?: RegisterOptions;
  register?: UseFormRegister<IUser>;
  id: 'email' | 'password' | 'firstName' | 'lastName';
  label: string;
  type: string;
};
/**
 * @param register, id, label, type, rest - react-hook-form register, id, label, type, rest of the props
 * @returns React component form field
 */
function FormField({
  register,
  id,
  label,
  type,
  // rules,
  ...rest
}: IFormFieldProps) {
  return (
    <fieldset className={styles.inputWrapper}>
      <label htmlFor={id}>{label}</label>
      {register ? (
        <input type={type} {...register(id)} {...rest} autoComplete="off" />
      ) : (
        <input type={type} id={id} {...rest} />
      )}
    </fieldset>
  );
}

export default FormField;
