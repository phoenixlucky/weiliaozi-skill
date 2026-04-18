"use strict";

const { prepareClawHubRequest } = require("../src");

const request = prepareClawHubRequest({
  userInput: "你怎么看秦为什么二世而亡？"
});

console.log(JSON.stringify(request.route, null, 2));
console.log("-----");
console.log(request.systemPrompt.slice(0, 500));
