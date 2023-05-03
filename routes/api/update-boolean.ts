import { Handlers } from "$fresh/server.ts";
import sql from "../../db/db.js";

export const handler: Handlers = { 
  async POST(req: Request) {
    try {
      const body = await req.json();

       await sql` update ${sql(body.tabla)} set ${sql(body.columToChange)}=${body.newVaue} where id=${body.id}`;

      return Response.json({
        resultado : true
      });
    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  }
};