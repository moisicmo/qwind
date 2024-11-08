import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({ valor: "" });

  return (
    <section class="not-prose relative md:-mt-[76px]">
      <div
        class="pointer-events-none absolute inset-0"
        aria-hidden="true"
      ></div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div class="pointer-events-none pt-0 md:pt-[76px]"></div>
        <div class="py-12 md:py-20 lg:flex lg:h-screen lg:items-center lg:gap-8 lg:py-0">
          <div class="mx-auto pb-10 text-center md:pb-16">
            {/* <h1 class="text-5xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Que buscas
            </h1> */}
            {/* <input
              class="input"
              type="text"
              value={state.valor}
              max={50}
              onInput$={(ev) => {
                state.valor = (ev.target as HTMLInputElement).value;
              }}
            /> */}

            <form>
              <div class="flex">
                {/* <label for="search-dropdown" class="mb-2 text-sm font-medium text-red-900 sr-only dark:text-red">Your Email</label> */}
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  class="z-10 inline-flex flex-shrink-0 items-center rounded-s-lg border border-e-0 border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  type="button"
                >
                  Todas las categorías{" "}
                  <svg
                    class="ms-2.5 h-2.5 w-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Shopping
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Images
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Finance
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    class="rounded-s-gray-100 rounded-s-2 z-20 block w-full rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                    placeholder="Buscar"
                    required
                  />
                  <button
                    type="submit"
                    class="absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      class="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});
