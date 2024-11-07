import { component$, $, QRL, useSignal } from "@builder.io/qwik";
import Register from "./Register";
import Login from "./login";

interface Props {
  onClose$: QRL<() => void>;
  isDrawerOpen: boolean;
}

export default component$((props: Props) => {
  const { onClose$, isDrawerOpen } = props;
  const activeTab = useSignal("login");

  const selectTab = $((tab: string) => {
    activeTab.value = tab;
  });

  return (
    <div
      id="drawer-example"
      class={`fixed right-0 top-0 z-40 h-screen w-80 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      tabIndex={-1}
      aria-labelledby="drawer-label"
    >
      <h5
        id="drawer-label"
        class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        Autenticación
      </h5>
      <button
        type="button"
        aria-controls="drawer-example"
        class="absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick$={() => onClose$()}
      >
        <svg
          class="h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div id="default-styled-tab-content">
        <div class={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab.value === "login" ? "" : "hidden"}`} id="styled-login" role="tabpanel">
          <Login />
        </div>
        <div class={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab.value === "register" ? "" : "hidden"}`} id="styled-register" role="tabpanel">
          <Register tabLogin$={() => selectTab("login")} />
        </div>
      </div>
    </div>
  );

});