import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="mx-auto max-w-3xl px-6 py-16 pt-8 lg:px-8 lg:py-20 lg:pt-8">
      <div class="prose-md prose-headings:font-heading prose-headings:leading-tighter prose prose-lg mx-auto mt-8 max-w-4xl dark:prose-invert prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-blue-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-headings:text-slate-300 dark:prose-a:text-blue-400">
        <Slot />
      </div>
    </section>
  );
});
