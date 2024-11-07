// import { useStore, useTask$, $, QRL } from '@builder.io/qwik';

// type ValidationRule = (string | ((value: any) => boolean));

// interface FormConfig {
//   initialForm: Record<string, any>;
//   validations: Record<string, ValidationRule[]>;
// }

// export function useForm({ initialForm, validations }: FormConfig) {
//   const formState = useStore({ ...initialForm });
//   const formValidation = useStore<Record<string, string | null>>({});
//   const formSubmitted = useStore({ value: false });

//   const isFormValid = $(() => {
//     for (const key in formValidation) {
//       if (formValidation[key] !== null) return false;
//     }
//     return true;
//   });

//   const onInputChange = $((name: string, value: string, uppercase = false, onlynumber = false) => {
//     if (onlynumber && !/^[0-9]*$/.test(value)) {
//       return;
//     }
//     formState[name] = uppercase ? value.toUpperCase() : value;
//   });

//   const createValidators = $(() => {
//     for (const field in validations) {
//       const rules = validations[field];
      
//       // Revisar que cada regla sea un arreglo en formato [función, mensaje]
//       for (const rule of rules) {
//         if (Array.isArray(rule) && rule.length === 2) {
//           const [validateFn, errorMessage] = rule as [((value: any) => boolean), string];
//           if (!validateFn(formState[field])) {
//             formValidation[field] = errorMessage;
//             break; // Detenemos en el primer error encontrado
//           } else {
//             formValidation[field] = null;
//           }
//         }
//       }
//     }
//   });
  
  

//   useTask$(() => {
//     createValidators();
//   });

//   return {
//     formState,
//     formValidation,
//     formSubmitted,
//     onInputChange,
//     isFormValid,
//     setFormSubmitted: $((submitted: boolean) => (formSubmitted.value = submitted)),
//   };
// }
