import { useState } from "react";

export const useForm = <T>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const onChange = <K extends keyof T>(field: K, value: T[K]) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  return {
    ...values,
    form: values,
    onChange,
  };
}

// import { useState } from 'react';

// export const useForm = <T extends Object>(initState: T) => {

//     const [state, setState] = useState(initState);

//     const onChange = <K extends Object>(value: K/*as any / string|boolean */, field: keyof T) => {
//         setState({
//             ...state,
//             [field]: value,
//         });
//     };

//     return {
//         ...state,
//         form: state,
//         onChange,
//     };

// };
