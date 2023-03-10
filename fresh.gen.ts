// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/about.tsx";
import * as $2 from "./routes/api/joke.ts";
import * as $3 from "./routes/header.tsx";
import * as $4 from "./routes/hero.tsx";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/search.tsx";
import * as $7 from "./routes/togglePage.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/Ip.tsx";
import * as $$2 from "./islands/Message.tsx";
import * as $$3 from "./islands/Toggle.tsx";
import * as $$4 from "./islands/Video.tsx";
import * as $$5 from "./islands/comment.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/about.tsx": $1,
    "./routes/api/joke.ts": $2,
    "./routes/header.tsx": $3,
    "./routes/hero.tsx": $4,
    "./routes/index.tsx": $5,
    "./routes/search.tsx": $6,
    "./routes/togglePage.tsx": $7,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/Ip.tsx": $$1,
    "./islands/Message.tsx": $$2,
    "./islands/Toggle.tsx": $$3,
    "./islands/Video.tsx": $$4,
    "./islands/comment.tsx": $$5,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
