

import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";


const app = new Application()
app.use((context: any, next: any) => {
  context.response.body = "Deno deployment successfull"
})

addEventListener("fetch", app.fetchEventHandler())