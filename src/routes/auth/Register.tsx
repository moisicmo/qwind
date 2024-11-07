import { component$, QRL } from '@builder.io/qwik';

interface Props {
  tabLogin$: QRL<() => void>;
}

export default component$((props: Props) => {
  const { tabLogin$ } = props;

  return (
    <>
      <form class="mb-6">
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cuenta</label>
          <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Apple Keynote" required />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
          <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="you@example.com" required />
        </div>
        <button type="submit" class="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Registrarme
        </button>
        <div class="flex justify-end">

          <h5
            id="register-label"
            class="text-blue-600 hover:text-blue-800 cursor-pointer font-semibold text-base mt-4 inline-flex items-center"
            onClick$={() => tabLogin$()}
          >
            Tengo mi cuenta
          </h5>
        </div>
      </form>
    </>
  );
});
