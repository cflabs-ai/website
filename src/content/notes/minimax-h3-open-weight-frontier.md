---
title: "MiniMax H3 and the open-weight frontier"
date: "2026-08-28"
topic: "Model landscape"
blurb: "Open weights reached the top of the human-preference leaderboard in August 2026. What that changes, and the three constraints that stop it being a clean win."
falsifier: "A reproducible self-hosted H3 deployment generating above 768p without the hosted API would void the deployment-ceiling claim; a licence revision removing the territorial exclusions would void the second."
---

**TL;DR — in August 2026 MiniMax released H3 with open weights and a text-to-video Elo of
1240, above Seedance 2.0 at 1224 and within 4 Elo of the top of the board. The sentence
"open weights are a generation behind" stopped being true.** Three constraints stop it
being a clean win: a 768p self-hosting ceiling, an undisclosed training recipe, and a
licence with territorial and output-use limits.

## What changed

Until H3, the open-weight landscape had a stable shape. The frontier was closed, the best
open weights trailed it by roughly 250 Elo on blind human preference, and the open
community's job was understood to be catching up to last year's flagship.

H3 rearranged that in one release:

| Model | T2V Elo | Open weights |
| --- | --- | --- |
| Gemini Omni Flash | 1244 | No |
| **MiniMax H3** | **1240** | **Yes** |
| Seedance 2.0 720p | 1224 | No |
| LTX-2.3 Fast | 976 | Yes |
| LTX-2.3 Pro | 961 | Yes |

The gap that matters is no longer open-versus-closed. It is H3 versus every other open
model — roughly 260 Elo, a bigger discontinuity than the one it just erased.

## The three constraints

**1 · Self-hosting stops at 768p.** The weights you can download generate at up to 768p.
The higher-resolution path — context-aware regeneration up to 2K — remains available only
through the hosted API. If your product needs 1080p or above from infrastructure you
control, H3 does not currently give you that.

**2 · The recipe is not disclosed.** Unlike Seedance, whose technical report lays out its
reward-model structure in enough detail to reproduce the approach, H3 ships weights without
the method. You can serve it. You cannot learn from it, and you cannot easily continue its
post-training with any confidence about what you are building on.

**3 · The licence is not permissive.** It carries territorial exclusions and restrictions
on how generated output may be used. Anyone planning to build a commercial product on H3
should have a lawyer read it before an engineer starts a deployment. This is not a
theoretical concern — it is the difference between a model you can serve to customers and
one you cannot.

## What we actually do about it

We serve H3 on [Phosor](https://phosor.ai/) through its multi-reference workflow, where
its distinguishing capability is genuinely distinguishing: images, video and audio
references driving a single clip, with sound generated in the same pass. Published rates
are $0.0054 per second at 480p and $0.0144 at 768p, with the first five reference images
free.

We continue to serve Wan 2.2 as the default base. The reason is not quality ranking — it is
that Wan's weights, licence and documented behaviour make it the model we can build LoRA
training and customer-specific fine-tuning around. A model you cannot adapt is a model you
can only resell.

## The broader lesson

The useful generalisation is not "open weights have caught up". It is that **the position
of the frontier is a licensing decision as much as a research one**. Alibaba's own Wan 2.6
and 2.7 passed Seedance 1.5 pro through ordinary iteration, and neither was released. The
open-source community was never blocked by method; it was blocked by which checkpoints got
published.

That makes the strategic question for anyone building on open models less about capability
forecasting and more about watching who publishes, under what licence, and with what
deployment ceiling.

---

### Sources

Elo figures are an Artificial Analysis leaderboard snapshot taken in mid-2026. Leaderboards
move; re-read before relying on the ordering. Model licence terms are the publisher's own
and change without notice — read the current text rather than this page.

Working notes and confidence tags:
[aoraki-labs-ai/Awesome-Video-AI-Research](https://github.com/aoraki-labs-ai/Awesome-Video-AI-Research).
Phosor prices as published on its pricing endpoint, 22 September 2026.
