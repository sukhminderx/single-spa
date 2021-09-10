import { registerApplication, start } from "single-spa";

//registerApplication({
//  name: "@single-spa/welcome",
//  app: () =>
//    System.import(
//      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//    ),
//  activeWhen: ["/"],
//});

registerApplication({
  name: "@spa/home",
  app: () => System.import("@spa/home"),
  activeWhen: ["/home"]
});
registerApplication({
  name: "@spa/header",
  app: () => System.import("@spa/header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@spa/test",
  app: () => System.import("@spa/test"),
  activeWhen: ["/test"]
});

start({
  urlRerouteOnly: true,
});
