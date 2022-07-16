import { AppConfig, UserSession, showConnect } from "@stacks/connect";

const appConfig = new AppConfig(['store_write', 'publish_data']);

export const userSession = new UserSession({ appConfig });

export function authenticate() {
    showConnect({
      appDetails: {
        name: "Auth test",
        icon: window.location.origin + "/my-app-logo.svg",
      },
      redirectTo: "/",
      onFinish: () => {
        let userData = userSession.loadUserData();
        // Save or otherwise utilize userData post-authentication
      },
      userSession: userSession,
    });
  }