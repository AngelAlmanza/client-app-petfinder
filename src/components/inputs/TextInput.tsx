import { useState } from "react";
import { faEnvelope, faLock, faUser, faMagnifyingGlass, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Field, ErrorMessage } from "formik";

type IconName = 'email' | 'password' | 'search' | 'name';

type Props = {
  placeholder: string;
  iconName: IconName;
  className?: string;
  style?: React.CSSProperties;
  onChange: (value: string) => void;
}

const ICONS: Record<IconName, IconDefinition> = {
  'email': faEnvelope,
  'password': faLock,
  'search': faMagnifyingGlass,
  'name': faUser,
}

export const TextInput = ({ placeholder, iconName, className, style, onChange }: Props) => {
  const icon = ICONS[iconName];
  const inputType = iconName === 'password' ? 'password' : 'text';
  
  return (
    <Formik
      initialValues={{ value: '' }}
      validate={(values) => {
        const errors: Record<string, string> = {};
        const value = values.value.trim();

        if (iconName === 'email') {
          if (!isValidEmail(value)) {
            errors.value = 'Ingrese un correo electrónico válido';
          }
        } else if (iconName === 'password') {
          if (!isValidPassword(value)) {
            errors.value = 'Contraseña no valida';
          }
        } else if (iconName === 'name') {
          if (!value) {
            errors.value = 'Por favor, ingrese un nombre';
          }
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        onChange(values.value);
        setSubmitting(false);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="w-full relative">
          <Field
            name="value"
            render={({ field }) => (
              <input
                {...field}
                className={`w-full bg-white px-4 py-3 outline-none rounded-3xl pr-10 text-sm md:text-lg font-medium ${className}`}
                type={inputType}
                placeholder={placeholder}
                style={style}
              />
            )}
          />
          <FontAwesomeIcon color="#A3A3A3" icon={icon} className="absolute right-4 top-[14px]" />
          <ErrorMessage name="value" component="p" className="text-red-500 text-sm mt-0 ml-4 md:text-xl" />
        </form>
      )}
    </Formik>
  );
};

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password: string) => {
  const lengthRequirement = password.length >= 8;
  const uppercaseRequirement = /[A-Z]/.test(password);
  const numberRequirement = /[0-9]/.test(password);
  return lengthRequirement && uppercaseRequirement && numberRequirement;
};
