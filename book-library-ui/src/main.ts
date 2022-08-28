import { ViteSSG } from "vite-ssg";
import { QueryClient, hydrate, dehydrate, VUE_QUERY_CLIENT } from "vue-query";
import { setupLayouts } from "virtual:generated-layouts";
import App from "./App.vue";
import type { UserModule } from "./types";
import generatedRoutes from "~pages";

import "./styles/main.css";

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(App, { routes, base: import.meta.env.BASE_URL }, (ctx) => {
  Object.values(import.meta.glob<{ install: UserModule }>("./modules/*.ts", { eager: true })).forEach((i) =>
    i.install?.(ctx)
  );
  const client = new QueryClient();
  const { app, initialState } = ctx;
  if (import.meta.env.SSR) {
    initialState.vueQueryState = { toJSON: () => dehydrate(client) };
  } else {
    hydrate(client, initialState.vueQueryState);
  }

  client.mount();
  app.provide(VUE_QUERY_CLIENT, client);
});
