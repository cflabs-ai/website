---
title: "The open post-training toolbox for video"
date: "2026-09-10"
topic: "Post-training"
blurb: "Every published reward model and preference-optimisation method for video generation, ordered by what it costs and what it has been measured to buy."
falsifier: "If a team runs VideoDPO on a modern flow-matching base at the stated budget and sees no VBench movement, the cost ladder below is wrong at its first rung."
---

**TL;DR — you do not need to invent a post-training method for video. You need to pick one
from a short list, and the list is ordered by cost.** This is the working inventory we keep:
what exists, what it costs to run, and what it has been measured to buy.

## 1 · Reward models — the thing that does the judging

A reward model is a scorer: it takes a generated video and returns a number saying how
good it is. Everything downstream depends on it, so it is the piece worth getting right
first.

### VideoAlign / VideoReward

[arXiv:2501.13918](https://arxiv.org/abs/2501.13918) · NeurIPS 2025 ·
[code and weights](https://github.com/KwaiVGI/VideoAlign)

The most practical starting point, because it ships. Built from 16k curated prompts across
8 meta-categories, run through 12 different text-to-video models to give 108k videos, and
labelled by professional annotators into **182k pairwise preference triples**. Crucially
the three quality axes — visual quality, motion quality, text alignment — are labelled
*separately* rather than collapsed into one "which is better" vote.

That 182k figure is the number to hold on to if you are considering building your own
reward model: it is the data scale a credible one takes.

It also ships a family of flow-native alignment algorithms: Flow-DPO (offline preference
optimisation), Flow-RWR (reward-weighted regression), and Flow-NRG, which guides the noisy
video at inference time and therefore costs **no training at all** — the right first
experiment.

### VisionReward

[arXiv:2412.21059](https://arxiv.org/abs/2412.21059) · THUDM

A different philosophy: instead of a black-box score, a **checklist**. Nine dimensions, 20
sub-dimensions, 64 binary yes/no questions, linearly weighted. You can read why it scored
what it scored. Trained on roughly 48k images (3M QA pairs) and 33k videos (2M QA pairs).
It beats VideoScore on preference prediction by 17.2%, and models optimised against it win
31.6% more pairwise comparisons than models optimised against VideoScore.

Its multi-objective preference optimisation only trains on pairs that dominate on *every*
dimension — the same discipline Seedance applies to its own labelling, arrived at
independently.

### The cheap third option

Fine-tune an existing vision-language model to score four dimensions, and anchor it with a
few thousand human side-by-side judgements. This is the HunyuanVideo 1.5 approach, and it
is the least engineering for a team that already runs a VLM.

## 2 · Preference optimisation — in ascending order of cost

| Method | What it needs | Measured gain |
| --- | --- | --- |
| **Flow-NRG** (inference guidance) | A reward model. No training. | Not separately benchmarked; free to try |
| **VideoDPO** ([2412.14167](https://arxiv.org/abs/2412.14167)) | 10k prompts, 3,000 steps, 4×A100, no human labels | VBench +0.5–1.5 points |
| **Flow-DPO / Flow-RWR** | Same order as DPO, flow-native | Not separately published |
| **Flow-GRPO** ([2505.05470](https://arxiv.org/abs/2505.05470)) | Online RL; converts the ODE sampler to an SDE for exploration | Enabling component, cited by Seedance 1.5 pro |
| **DanceGRPO** ([2505.07818](https://arxiv.org/abs/2505.07818)) | Online RL at scale | **+56% visual, +181% motion** on HunyuanVideo |
| **Direct reward maximisation** | Multiple reward models, back-propagated through a predicted x₀ | Seedance's own choice; their report claims it beats DPO, PPO and GRPO |

VideoDPO is the honest first rung: fully automatic preference pairs (sample 4 videos per
prompt, rank by a composite score, take best and worst), no annotation budget, and a gain
small enough that nobody will mistake it for the finish line. Its value is that it proves
your pipeline works.

The ceiling is the GRPO family. The two stabilising tricks that make it hold together are
worth writing on the wall: **share the initial noise across samples of a prompt**, and
**select best-of-N trajectories** — 16 sampled, top 8 and bottom 8 kept. Earlier
reinforcement-learning approaches such as DDPO and DPOK became unstable past a hundred
prompts and did not compose with modern ODE samplers; the GRPO line is what currently
scales.

## 3 · Speed is the cheapest win of all

None of the above touches inference cost, and inference cost is what a customer feels.

Seedance's roughly 10x speed advantage decomposes into step-distillation (about 4x), a
slimmed VAE decoder (about 2x), and systems work. On the open side, **Self-Forcing**
distilled Wan 2.1-1.3B in around **4 H100-days** and reached 17 FPS on a single GPU with no
VBench regression.

Four GPU-days is a rounding error against the cost of a pre-training run. If you only do
one thing from this page, do that one.

## 4 · The part nobody writes down

A post-training loop is only as good as the thing measuring it, and automatic metrics
drift away from human judgement precisely in the regime where you are optimising against
them. The evaluation stack we keep is three layers: objective detectors for things that
are actually checkable, a calibrated VLM judge with per-dimension true/false-positive rates
measured against held-out human labels, and a small human anchor set that never enters
training. A judge whose calibration you have not measured is a random number generator with
good manners.

---

### Sources

All primary sources are linked inline. The full working index, with confidence tags and
the observations that would overturn each claim, is public:
[aoraki-labs-ai/Awesome-Video-AI-Research](https://github.com/aoraki-labs-ai/Awesome-Video-AI-Research).

Costs quoted are the figures stated in each paper, not our own measurements.
