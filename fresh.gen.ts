// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_middleware.ts";
import * as $1 from "./routes/api/sign-out.ts";
import * as $2 from "./routes/api/sign-up.ts";
import * as $3 from "./routes/api/update-boolean.ts";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/login.tsx";
import * as $6 from "./routes/secret.tsx";
import * as $7 from "./routes/servicios/[id]/index.tsx";
import * as $8 from "./routes/servicios/index.tsx";
import * as $9 from "./routes/sign-up.tsx";
import * as $$0 from "./islands/AuthForm.tsx";
import * as $$1 from "./islands/CheckBoolean.tsx";
import * as $$2 from "./islands/Nav.tsx";

const manifest = {
  routes: {
    "./routes/_middleware.ts": $0,
    "./routes/api/sign-out.ts": $1,
    "./routes/api/sign-up.ts": $2,
    "./routes/api/update-boolean.ts": $3,
    "./routes/index.tsx": $4,
    "./routes/login.tsx": $5,
    "./routes/secret.tsx": $6,
    "./routes/servicios/[id]/index.tsx": $7,
    "./routes/servicios/index.tsx": $8,
    "./routes/sign-up.tsx": $9,
  },
  islands: {
    "./islands/AuthForm.tsx": $$0,
    "./islands/CheckBoolean.tsx": $$1,
    "./islands/Nav.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
