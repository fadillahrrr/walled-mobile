import { registerRootComponent } from "expo";

import App from "./App";
// import login from "./login";
// import register from "./register";
// import TransferPage from "./transfer";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(login);
registerRootComponent(App);
