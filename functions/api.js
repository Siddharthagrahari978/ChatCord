import ServerlessHttp from "serverless-http";
import { server } from "../app";

const handler = ServerlessHttp(server)

module.exports.handler = async(event, context)=>{
  const result = await handler(event, context);
  return result;
}