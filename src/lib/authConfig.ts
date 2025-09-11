export const msalConfig = {
  auth: {
    clientId: "a1ed932c-0192-41a4-b0a9-aec2e881e6d0", // Azure App Registration (Frontend)
    authority:
      "https://login.microsoftonline.com/2725e1ce-3acc-4dd7-b7ad-4ee2441de24f",
    redirectUri: "http://localhost:3000", // must match Azure App Registration
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["api://c92a5959-e4e4-438d-8b88-11954bc469e0/access_as_user"],
};
