# 尉缭子分析法 Skill

An English-described strategic analysis skill for business, military, economic, and political judgment.

Version: 1.3.0

License: MIT

这不是一个“多想一点”的 Skill。
这是一个“按顺序想”的 Skill。

It is designed for high-stakes decisions where leaders need clearer structure, sharper tradeoff analysis, and a better read on opponents, institutions, and timing.

很多决策问题，错不在信息太少，而在顺序错了:

- 还没看清本质，就急着下结论
- 还没检查条件，就开始谈方案
- 还没算清得失，就先投入资源
- 还没排好先后，就想一步到位
- 还没模拟对手，就假设对方不会动

`尉缭子分析法 Skill` 的目标，就是把这些错误前置拦住。

## What It Does

`尉缭子分析法 Skill` 是一个用于战略分析、决策判断和博弈推演的 Agent Skill。

It helps turn complex questions into structured judgment across:

- Business strategy and competitive positioning
- Military planning and adversary assessment
- Economic analysis and resource allocation
- Political strategy, policy shifts, and power dynamics

它把问题拆成五个固定视角：

- 本质
- 条件
- 得失
- 先后
- 对手

核心原则只有一句：

> 先看结构，再看约束，再算利弊，最后定顺序与对抗策略。

English:

> See the structure first, then constraints, then gains and losses, then sequence and opposition strategy.

## Language Behavior

- The skill answers in the same language as the user's question.
- If the user asks in Chinese, it answers in Chinese.
- If the user asks in English, it answers in English.
- If the user mixes languages, it follows the dominant language of the request.

## Answer Quality Standard

This skill is designed to produce analysis that is not only structured, but also disciplined and auditable.

- Analysis first, conclusion second
- Facts first, judgment second
- Conditions first, recommendations second
- Scope, actor, and timeframe should be defined before reasoning
- Uncertainty, missing data, and assumptions should be made explicit
- Final judgment should be traceable to the five-lens analysis

In practice, this means the skill should avoid rhetorical confidence, unsupported certainty, and conclusions that do not clearly follow from the analysis.

## Accuracy Rules

To improve accuracy and reduce analytical drift, the skill follows these rules:

- Prioritize facts provided by the user
- If information is incomplete, state the information gap before giving a conditional judgment
- Distinguish `Known`, `Inference`, `Assumption`, and `Uncertain` when useful
- Do not present stale information as if it were current fact
- Do not reduce business, military, economic, or political outcomes to a single cause
- Do not turn probabilities into certainties
- Do not present strategic preference as objective fact

This is especially important in high-stakes questions involving markets, policy, conflict, negotiation, institutional behavior, or adversarial reactions.

## 适合什么场景

这个 Skill 适合：

- 商业决策
- 商业战略与行业竞争分析
- 军事态势判断与对手推演
- 经济形势、资源配置与风险取舍
- 政治博弈、政策变化与权力结构分析
- 创业判断
- 项目立项或砍项
- 竞争分析
- 谈判准备
- 组织治理问题
- 政策与市场变化下的策略选择
- 任何“值不值得做、能不能做、先做什么”的问题

它尤其适合下面这种情况：

- 信息很多，但不知道该先看什么
- 方案很多，但不知道哪条路更稳
- 想避免一上来就拍脑袋决策
- 需要把复杂问题压缩成一个可执行判断

## 五个分析视角

### 1. 本质

先看问题的底层结构，不被表象带偏。

重点是：

- 真实驱动是什么
- 核心变量是什么
- 哪些只是表面现象

例如：

打仗不是“谁更猛”，而是“资源、组织、信息、地形”的综合结果。

### 2. 条件

再看现在有没有做这件事的基础。

重点是：

- 自身条件：资金、人力、技术、时间
- 外部条件：政策、市场、环境
- 硬约束：哪些限制无法直接突破

例如：

粮草不够，再强的军队也打不了持久战。

### 3. 得失

再算这件事值不值得做。

重点是：

- 收益：短期 vs 长期
- 成本：显性 vs 隐性
- 风险：最坏情况能不能承受

例如：

打一城可能赢，但损失太大，整体反而亏。

### 4. 先后

再定顺序、节奏和路径。

重点是：

- 优先级：先解决生存和瓶颈问题
- 节奏：快慢结合，不盲动
- 路径：分阶段推进，而不是一步到位

例如：

先稳住后方，再出兵，而不是反过来。

### 5. 对手

最后看博弈，对方不会静止不动。

重点是：

- 对手能力：强弱、资源、风格
- 对手动机：防守、进攻、拖延、联合
- 博弈路径：你动一步，对方会怎么反应

例如：

你进攻，对方可能撤退、反击或联合他人。

## 和现代分析框架的对应

- 本质 ≈ 第一性原理
- 条件 ≈ SWOT 中的资源与约束
- 得失 ≈ 成本收益分析
- 先后 ≈ 项目管理里的优先级与路径
- 对手 ≈ 博弈论

这个对应只是帮助理解，不是替代原方法。

## 局限

这个 Skill 也有边界：

- 偏战略层，对细节执行指导较弱
- 依赖判断力，数据不足时容易主观
- 对手推演本质上是概率判断，不是确定答案

## 输出形式

默认输出一个五栏结构：

- 本质
- 条件
- 得失
- 先后
- 对手

每一栏只写 3 到 5 个关键点，避免信息过载。

最后补两项：

- 判断一句
- 建议动作

复杂问题下，建议再补充：

- 关键信息缺口
- 核心假设

每一栏应尽量先写决定性因素，而不是堆砌次要信息。

## 使用方式

在支持 Skill 的环境中调用当前 Skill，并提供一个明确问题或场景。

### 方式一：判断值不值得做

```text
我们要不要在今年进入日本市场？请用尉缭子分析法判断。
```

### 方式二：分析项目优先级

```text
团队资源有限，只能做一个方向：
1. 做新功能
2. 提升转化率
3. 做海外渠道
请用尉缭子分析法分析先后顺序。
```

### 方式三：分析竞争博弈

```text
如果我们降价抢市场，竞争对手最可能怎么反应？
请用尉缭子分析法分析。
```

### 方式四：把复杂问题压缩成决策表

```text
把“是否自研 AI Agent 平台”这个问题，用五栏表输出：
本质 / 条件 / 得失 / 先后 / 对手
```

## 运行逻辑

这个 Skill 的工作顺序是固定的：

1. 先定义决策问题
2. 再识别底层结构
3. 再检查条件和约束
4. 再计算收益、成本和风险
5. 再安排顺序和路径
6. 最后模拟对手反应
7. 输出判断与建议动作

重点不在于写得多，而在于顺序不能乱。

## Recommended Response Discipline

For a strong answer, the skill should usually follow this sequence:

1. Restate the decision question in one sentence
2. Define the actor, timeframe, and comparison baseline
3. Analyze in the order of Essence -> Conditions -> Gains-Losses -> Sequence -> Opponent
4. Mark the key uncertainty or missing variable
5. Give a conditional conclusion rather than a slogan
6. End with 1-3 recommended actions linked to the analysis above

This keeps the answer normative, accurate, and decision-useful rather than merely opinionated.

## 项目结构

```text
weiliaozi-skill/
├── SKILL.md
├── README.md
├── agents/
│   └── openai.yaml
└── references/
    ├── examples.md
    └── tone-guide.md
```

文件说明：

- `SKILL.md`: Skill 主定义与工作规范
- `agents/openai.yaml`: 展示名称与简短说明
- `references/examples.md`: 分析示例
- `references/tone-guide.md`: 输出风格与压缩规则

## 行动方案

这个 Skill 的推荐用法很简单：

1. 先写一个五栏表：本质 / 条件 / 得失 / 先后 / 对手
2. 每一栏只写 3 到 5 个关键点
3. 先填“条件”和“得失”，快速判断值不值得做
4. 再设计“先后”，拆成 3 步以内路径
5. 最后模拟“对手”，至少写出 2 种对方反应

## 更新与推送

如果你只是更新文案、示例或配置，推荐按下面的流程处理。

### 1. 查看当前变更

```bash
git status
```

### 2. 提交本次更新

```bash
git add README.md SKILL.md agents references package.json
git commit -m "docs: convert skill to weiliaozi analysis"
```

### 3. 推送到远端

如果仓库已经绑定远端：

```bash
git push origin main
```

### 4. 首次推送时

如果当前仓库还没有配置远端，先执行：

```bash
git remote add origin https://github.com/phoenixlucky/weiliaozi-skill.git
git branch -M main
git push -u origin main
```

如果当前远端还指向旧仓库，可以改成新库：

```bash
git remote set-url origin https://github.com/phoenixlucky/weiliaozi-skill.git
git push -u origin main
```

## 参考文件

- [SKILL.md](./SKILL.md)
- [CHANGELOG.md](./CHANGELOG.md)
- [references/examples.md](./references/examples.md)
- [references/tone-guide.md](./references/tone-guide.md)

## 变更日志

最新版本：`1.3.0`（2026-04-17）

- 新增“系统瓦解”视角，明确《尉缭子》的核心不是先打正面战，而是先用“钱 + 势 + 人心”削弱对手系统。
- 在“条件”中补入三项底线：稳定财力、情报体系、内部纪律。
- 在“先后”中固化低成本削弱顺序：`乱其谋 -> 削其力 -> 后再战`。
- 增加五步可执行抽象模型：识别关键节点、资源渗透、制造内耗、切断协同、低成本收尾。
- 增加安全约束，明确该技能用于分析与判断，不用于生成违法或有害的操作方案。

完整历史见 [CHANGELOG.md](./CHANGELOG.md)。

## 最后

这套方法的核心不是“多想”，而是“按顺序想”。

先别急着决策。
先把结构、约束、利弊、顺序和对手看清。
