import admin, { ServiceAccount, initializeApp } from "firebase-admin";

import serviceAccount from "./secrets/serviceAccount.json";

export const app = initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});
