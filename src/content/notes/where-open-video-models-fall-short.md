---
title: "Where open video models actually fall short"
date: "2026-09-16"
topic: "Post-training"
blurb: "The gap between open weights and the closed frontier is mostly post-training and data curation, not architecture. Here is the evidence, and what it costs to close."
falsifier: "An open base model trained with a published RLHF recipe that still loses badly on human preference tests would break the central claim — as would a closed-model technical report showing an architectural advantage that post-training cannot reach."
---

**TL;DR — the quality gap between open-weight video models and the closed frontier is
mostly a post-training and data-curation gap, not an architecture gap.** The open
literature already contains the missing pieces, and the measured gains from applying them
are large. This note lays out the evidence and the parts that remain genuinely hard.

## The claim, stated precisely

When people compare Wan 2.2 or LTX against Seedance or Veo and conclude that open models
are "a generation behind", the implied explanation is usually architectural — that the
closed labs know some structural trick. The published record does not support that.

What the technical reports actually differ on is the stage *after* pre-training:

- **Wan 2.1 and 2.2** describe their post-training as continued training on
  higher-quality data. Neither report discloses a reward model or any reinforcement
  learning from human feedback stage.
- **Seedance 1.0** ([arXiv:2506.09113](https://arxiv.org/abs/2506.09113)) lists supervised
  fine-tuning plus multi-dimensional reward-model RLHF as a core pillar of its quality. It
  uses **three separate reward models** — a foundational one for prompt alignment and
  structural stability, a motion one that suppresses artefacts and rewards motion
  amplitude, and an aesthetic one operating on key frames. Preference labels are collected
  one dimension at a time, with the constraint that the chosen winner must not be worse
  than the loser on any other dimension.

That is a difference in method, not in model shape. And method transfers.

## How much it is worth, measured

The strongest public number comes from **DanceGRPO**
([arXiv:2505.07818](https://arxiv.org/abs/2505.07818)), the first framework to make GRPO
work across both diffusion and rectified-flow models. Applied to HunyuanVideo using the
VideoAlign reward model:

| Dimension | Before | After | Change |
| --- | --- | --- | --- |
| Visual quality | 4.51 | 7.03 | **+56%** |
| Motion quality | 1.37 | 3.85 | **+181%** |

Motion is the axis where open models are most often described as "floaty" or "plasticky",
and it is the axis that moves most.

The second data point is a whole-recipe one. **HunyuanVideo 1.5** — 8.3B parameters, with
a complete post-training stack of SFT, DPO and MixGRPO — was evaluated against Seedance Pro
in side-by-side human preference tests (GSB). At 720p text-to-video it came out **+11.02%
ahead**. On image-to-video it was still **5.77% behind**.

Read those two numbers together, because the pair is the actual finding: a serious
post-training effort on an open base is enough to pass the previous generation of a closed
flagship on text-to-video, and not yet enough on image-to-video.

## What post-training does not fix

Two things stay hard, and it is worth being blunt about them.

**Generational distance in pre-training.** On blind human-preference Elo
(Artificial Analysis, mid-2026 snapshot), Seedance 2.0 sat at 1222 for text-to-video while
the strongest widely-available open weights of that moment, LTX-2.3, sat around 961–976 —
roughly 250 Elo. No reward model closes 250 Elo. What post-training realistically buys is
the distance to the *previous* flagship: Seedance 1.5 pro had by then fallen to 1000, and
LTX-2.3 was within about 50 Elo of it on image-to-video.

**Reward hacking.** Optimising against a learned scorer teaches the model to please the
scorer. DanceGRPO's two stabilising tricks are worth copying directly: share the initial
noise across samples of the same prompt, and train on a best-of-N selection — sample 16
trajectories, keep the top 8 and bottom 8.

## The one that changed the picture

In August 2026 **MiniMax H3** released open weights and posted a text-to-video Elo of
1240 — above Seedance 2.0 (1224), and within 4 Elo of the top of the entire board. The
"open weights are 250 Elo behind" framing stopped being true at that moment.

It comes with real constraints: self-hosted deployment tops out at 768p, the training
recipe is not disclosed, and the licence carries territorial exclusions and limits on how
outputs may be used. We wrote those up separately in
[MiniMax H3 and the open-weight frontier](/research/video/minimax-h3-open-weight-frontier/).

## Why we care

CFLabs serves open-weight video models commercially, through
[Phosor](https://phosor.ai/). Which base model we run, and whether it is worth
post-training one ourselves rather than waiting for the next release, is a question we
have to answer with numbers rather than vibes. Publishing the working is the cheapest way
to find out we are wrong.

---

### Sources

- Seedance 1.0 technical report — [arXiv:2506.09113](https://arxiv.org/abs/2506.09113)
- DanceGRPO — [arXiv:2505.07818](https://arxiv.org/abs/2505.07818)
- Flow-GRPO — [arXiv:2505.05470](https://arxiv.org/abs/2505.05470)
- VideoAlign / VideoReward — [arXiv:2501.13918](https://arxiv.org/abs/2501.13918)
- Working notes, source list and confidence tags:
  [aoraki-labs-ai/Awesome-Video-AI-Research](https://github.com/aoraki-labs-ai/Awesome-Video-AI-Research)

Elo figures are a snapshot of a leaderboard that moves; treat them as of mid-2026 and
re-check before relying on them.
