---
name: weiliaozi-analysis
version: 1.0.0
description: apply the Wei Liaozi decision framework to analyze a problem in five ordered lenses: essence, conditions, gains-losses, sequencing, and opponent response. use when the user needs strategic analysis, wants to avoid jumping to conclusions, or asks for a structured decision memo, judgment, or plan.
---

# 尉缭子分析法 Skill

## Overview

Use this skill when the user needs a strategic judgment framework rather than scattered advice. The core method is to think in order, not to think more. Start from the underlying structure of the problem, then test whether the conditions exist, then calculate gains and losses, then decide sequencing, and finally simulate how the opposing side will respond.

This skill is suitable for business choices, project tradeoffs, negotiation, competition, organizational problems, policy interpretation, and other situations with constraints, priorities, and adversarial dynamics.

The five lenses are:
- 本质: what actually drives the situation
- 条件: what makes action feasible or infeasible
- 得失: whether the move is worth it
- 先后: what should happen first and in what path
- 对手: how other actors may react

## Core workflow

Follow this sequence:

1. Define the decision question in one sentence.
2. Identify the structural drivers behind the surface symptoms.
3. Test the current conditions and hard constraints.
4. Compare gains, costs, and downside risk.
5. Set the action order and phase path.
6. Simulate at least two plausible opponent responses.
7. End with a direct judgment and recommended next move.

Do not skip ahead to recommendations before finishing the earlier steps.

## Analysis principle

This method is centered on war logic, but its modern use is general strategic analysis.

The operating rule is:
- 先看结构
- 再看约束
- 再算利弊
- 最后定顺序与对抗策略

If information is incomplete, reason conservatively and separate facts from inference.

## Five-lens method

### 1. 本质

Goal: identify the bottom structure of the issue without being misled by appearances.

Focus on:
- the real driver: resources, institutions, incentives, information, coordination
- the difference between symptoms and core variables
- whether the issue is short-term noise or structural contradiction

Ask:
- 这件事真正由什么驱动
- 哪些现象只是表层结果
- 改变哪个变量，结果会明显改变

### 2. 条件

Goal: determine whether action is currently possible.

Focus on:
- internal conditions: capital, people, technology, time, organization
- external conditions: policy, market, environment, partners
- hard constraints that cannot be wished away

Ask:
- 现在有没有启动这件事的基础
- 最关键的短板是什么
- 哪些约束是硬限制，不能靠意志突破

### 3. 得失

Goal: decide whether the action is worth doing.

Focus on:
- short-term versus long-term returns
- visible versus hidden costs
- worst-case risk and whether it is bearable

Ask:
- 赢了能得到什么，多久兑现
- 代价除了钱还有什么
- 如果判断错了，最坏损失能不能承受

### 4. 先后

Goal: set order, pace, and path.

Focus on:
- priority: solve survival and bottleneck problems first
- rhythm: combine fast action with controlled pacing
- path: phase the move instead of forcing one-shot completion

Ask:
- 什么必须先做，不做就无法推进
- 哪一步是杠杆点
- 能否拆成三步以内推进

### 5. 对手

Goal: understand the game, not just your own plan.

Focus on:
- opponent capability: strength, resources, style, endurance
- opponent motive: defend, attack, delay, ally, bargain
- response tree after your move

Ask:
- 对方最可能的两种反应是什么
- 对方的最优应对会不会改变你的收益
- 你如何提前布置应对反制

## Output format

Default to a five-part structured answer:

- 本质
- 条件
- 得失
- 先后
- 对手

For each section, write only 3 to 5 key points. Keep the answer selective and decision-oriented.

Then add:
- 判断一句: the overall conclusion in one sentence
- 建议动作: the next 1 to 3 steps

## Fast-path mode

When the user mainly wants to know whether something is worth doing, prioritize:

1. 条件
2. 得失
3. 先后

Then fill in 本质 and 对手 to strengthen the judgment.

## Style rules

Write in clear Chinese unless the user asks otherwise.

Default style:
- direct
- strategic
- compressed
- structured
- focused on judgment, not decoration

Prefer:
- separating fact from inference
- naming hard constraints explicitly
- making tradeoffs visible
- giving sequence, not vague encouragement

Avoid:
- empty abstractions
- motivational filler
- long historical detours unless requested
- treating all factors as equally important
- giving recommendations before checking conditions and gains-losses

## Modern mapping

When useful, relate the framework to modern methods:

- 本质 ≈ 第一性原理
- 条件 ≈ SWOT 中的资源与约束
- 得失 ≈ 成本收益分析
- 先后 ≈ 优先级与路径设计
- 对手 ≈ 博弈论

Do this only if it helps the user understand the method.

## Limits

State these limits when relevant:

- the method is strong at strategy, weaker at execution detail
- low-quality data can make judgment overly subjective
- adversarial simulation is useful, but it is still probabilistic

## Final checklist

Before finalizing, check:

- have you separated appearance from structure
- have you named hard constraints
- have you explicitly compared gains and losses
- have you given a sequence instead of a pile of actions
- have you modeled the other side's response
- have you ended with a clear judgment

If any answer is no, revise.

## Examples

Read [references/examples.md](references/examples.md) for worked examples.

For concise phrasing and output style, also read [references/tone-guide.md](references/tone-guide.md).
