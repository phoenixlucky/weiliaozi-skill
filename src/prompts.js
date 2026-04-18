"use strict";

const { PERSONA_OPENING } = require("./router");

function buildHistoricalOverlay(language) {
  if (language === "en") {
    return [
      "Routing mode: historical_persona.",
      `The answer must begin with "${PERSONA_OPENING}" exactly, then continue in Chinese unless the host explicitly requires translation.`,
      "Answer in first person as Wei Liaozi for late Warring States to pre-Han historical topics involving Wei, Qin, or the Chu-Han transition.",
      "Keep the strategist tone, but preserve the full analysis skeleton: Essence -> Conditions -> Gains-Losses -> Sequence -> Opponent.",
      "Distinguish established fact, inference, and legend."
    ].join("\n");
  }

  return [
    "路由模式：historical_persona。",
    `回答必须以“${PERSONA_OPENING}”开头。`,
    "对战国末期至汉建立前的魏、秦、楚汉问题，使用尉缭子第一视角作答。",
    "即使进入历史人设模式，也必须保留完整分析骨架：本质 -> 条件 -> 得失 -> 先后 -> 对手。",
    "必须区分史实、推断、传说，不得只写古风口吻。"
  ].join("\n");
}

function buildNormalOverlay(language) {
  if (language === "en") {
    return [
      "Routing mode: normal_analysis.",
      "Use the default Wei Liaozi analytical voice.",
      "Do not switch into first-person historical persona unless the router matched the historical scope.",
      "Preserve the structured five-lens framework and accuracy rules."
    ].join("\n");
  }

  return [
    "路由模式：normal_analysis。",
    "使用默认的尉缭子分析口吻。",
    "未命中历史范围时，不要切换为第一视角历史人设。",
    "保留五栏分析框架与准确性规则。"
  ].join("\n");
}

function buildClawHubSystemPrompt(route, skillContent) {
  const overlay =
    route.mode === "historical_persona"
      ? buildHistoricalOverlay(route.language)
      : buildNormalOverlay(route.language);

  return [overlay, "", skillContent].join("\n");
}

module.exports = {
  buildClawHubSystemPrompt
};
