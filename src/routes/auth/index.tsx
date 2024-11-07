// src/routes/auth/index.tsx

import { routeLoader$ } from '@builder.io/qwik-city';
import { InitialValues } from '@modular-forms/qwik';
import * as v from 'valibot';

// import type { LoginForm } from '../../path-to-your-schema'; // Ajusta la ruta a tu archivo
export const LoginSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your email.'),
    v.email('The email address is badly formatted.'),
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your password.'),
    v.minLength(8, 'Your password must have 8 characters or more.'),
  ),
});
export type LoginForm = v.InferInput<typeof LoginSchema>;
export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  email: '',
  password: '',
}));
