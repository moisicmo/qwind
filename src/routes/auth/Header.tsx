import { $, component$, useStore } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";

import Logo from "~/components/common/Logo";
import ToggleTheme from "~/components/common/ToggleTheme";
import ToggleMenu from "~/components/common/ToggleMenu";
import IconChevronDown from "../../components/icons/IconChevronDown";
import DrawerAuth from "./DrawerAuth";

export default component$(() => {

  const { menu } = useContent();
  const store = useStore({
    isScrolling: false,
    isDrawerOpen: false,
  });
  const goodbye$ = $(() => alert('Good Bye!'));
  return (
    <>
      <header
        id="header"
        class={`sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-50/0 transition-[opacity] ease-in-out ${store.isScrolling
          ? "bg-white dark:bg-slate-900 md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90"
          : ""
          }`}
        window:onScroll$={() => {
          if (!store.isScrolling && window.scrollY >= 10) {
            store.isScrolling = true;
          } else if (store.isScrolling && window.scrollY < 10) {
            store.isScrolling = false;
          }
        }}
      >
        <div class="absolute inset-0"></div>
        <div class="text-default relative mx-auto w-full max-w-7xl px-3 py-3 md:flex md:justify-between md:px-6">
          <div class="mr-auto flex justify-between rtl:ml-auto rtl:mr-0">
            <a class="flex items-center" href={"/"}>
              <Logo />
            </a>
            <div class="flex items-center md:hidden">
              <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
              <ToggleMenu />
              <button
                class="ml-4 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick$={() => (store.isDrawerOpen = true)}
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
          <nav
            class="text-default hidden w-full items-center overflow-y-auto overflow-x-hidden md:mx-5 md:flex md:w-auto md:overflow-x-auto md:overflow-y-visible"
            aria-label="Main navigation"
          >
            {menu && menu.items ? (
              <ul class="flex w-full flex-col text-xl font-medium tracking-[0.01rem] md:w-auto md:flex-row md:self-center md:text-[0.9375rem]">
                {menu.items.map(({ text, href, items }, key) => (
                  <li key={key} class={items?.length ? "dropdown" : ""}>
                    {items?.length ? (
                      <>
                        <button class="hover:text-link flex items-center px-4 py-3 dark:hover:text-white">
                          {text}{" "}
                          <IconChevronDown class="ml-0.5 hidden h-3.5 w-3.5 md:inline rtl:ml-0 rtl:mr-0.5" />
                        </button>
                        <ul class="dropdown-menu rounded pl-4 font-medium drop-shadow-xl md:absolute md:hidden md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-800">
                          {items.map(({ text: text2, href: href2 }, key2) => (
                            <li key={key2}>
                              <a
                                class="hover:text-link whitespace-no-wrap block px-5 py-2 first:rounded-t last:rounded-b dark:hover:bg-gray-700 dark:hover:text-white md:hover:bg-gray-100"
                                href={href2}
                              >
                                {text2}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <a
                        class="hover:text-link items-centers flex px-4 py-3 dark:hover:text-white"
                        href={href}
                      >
                        {text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </nav>
          <div class="fixed bottom-0 left-0 hidden w-full items-center justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0 rtl:left-auto rtl:right-0">
            <div class="flex w-full items-center justify-between md:w-auto">
              <div class="flex">
                <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
              </div>
              <button
                class="ml-4 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick$={() => (store.isDrawerOpen = true)}
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>
      {store.isDrawerOpen && (
        <div
          class="fixed inset-0 z-30 bg-black opacity-50"
          onClick$={() => (store.isDrawerOpen = false)}
          
        ></div>
      )}
      {/* Drawer */}
      <DrawerAuth
        onClose$={() => store.isDrawerOpen = false}
        isDrawerOpen={store.isDrawerOpen}
        // isDrawerOpen$={$(true)}

        />
    </>
  );
});
