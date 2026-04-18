"use strict";

const fs = require("fs");
const path = require("path");
const { routeWeiliaoziMode } = require("./router");
const { buildClawHubSystemPrompt } = require("./prompts");

function loadSkillMarkdown(skillPath) {
  const resolvedPath =
    skillPath || path.join(__dirname, "..", "SKILL.md");

  return fs.readFileSync(resolvedPath, "utf8");
}

function prepareClawHubRequest(options) {
  const userInput = String(options?.userInput || "");
  const route = routeWeiliaoziMode(userInput);
  const skillContent = options?.skillContent || loadSkillMarkdown(options?.skillPath);
  const systemPrompt = buildClawHubSystemPrompt(route, skillContent);

  return {
    route,
    systemPrompt,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userInput }
    ]
  };
}

module.exports = {
  loadSkillMarkdown,
  prepareClawHubRequest,
  routeWeiliaoziMode
};
