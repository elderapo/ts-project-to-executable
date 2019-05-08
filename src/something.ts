import { sleep } from "./utils";
// import * as zeromq from "zeromq";

export const startSomething = async () => {
  console.log("Starting...");

  while (true) {
    console.log("Hello world!");
    // console.log(typeof zeromq);
    await sleep(500);
  }
};
