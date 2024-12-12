import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    import(
      /* webpackIgnore: true */
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@UJET/test-page",
  app: () =>
    import(
      /* webpackIgnore: true */
      "//localhost:8080/UJET-test-page.js"
    ),
  activeWhen: ["/test"],
});

// registerApplication({
//   name: "@UJET/navbar",
//   app: () =>
//     import(
//       /* webpackIgnore: true */
//       "@UJET/navbar"
//     ),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
