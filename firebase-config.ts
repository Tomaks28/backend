import admin, { ServiceAccount, initializeApp } from "firebase-admin";

import serviceAccount from "./backoffice-cdb4e-firebase-adminsdk-ch78t-17511cbc9d.json";

export const app = initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});
