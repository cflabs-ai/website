/**
 * Phosor platform capabilities and prices.
 *
 * Source of truth: the platform's own public pricing endpoint,
 *   https://phosor.ai/api/v1/pricing/config   (read 2026-09-22)
 * Frame prices are published per frame; per-second figures below are
 * perFrame x 16, the frame rate at which all six published per-second
 * strings on the platform reconcile exactly.
 *
 * Update procedure: re-read the endpoint and edit this file. Nothing else
 * on the site hard-codes a price.
 */

export const PRICING_AS_OF = '2026-09-22';
export const FPS = 16;

export const usd = (n: number) =>
  n >= 1 ? `$${n.toFixed(2)}` : `$${n.toFixed(n < 0.01 ? 4 : 3)}`;

export type Row = {
  capability: string;
  model: string;
  detail: string;
  res: string;
  price: string;
  unit: string;
};

export const CAPABILITIES: Row[] = [
  {
    capability: 'Text to video',
    model: 'Wan 2.2 turbo',
    detail: 'Few-step distilled. The cheapest way to iterate on an idea.',
    res: '480p · 720p · 1080p',
    price: '$0.005 · $0.010 · $0.018',
    unit: 'per second',
  },
  {
    capability: 'Text to video',
    model: 'Wan 2.2 standard',
    detail: 'Full sampling schedule. Use it once the shot is locked.',
    res: '480p · 720p · 1080p',
    price: '$0.015 · $0.030 · $0.040',
    unit: 'per second',
  },
  {
    capability: 'Image to video',
    model: 'Wan 2.2 (standard / turbo)',
    detail: 'Drive motion from a still. Same price ladder as text to video.',
    res: '480p → 1080p',
    price: '$0.005 – $0.040',
    unit: 'per second',
  },
  {
    capability: 'Speech to video',
    model: 'Wan 2.2 s2v',
    detail: 'Lip-sync a character to an audio track.',
    res: '480p · 512p · 720p',
    price: '$0.015 · $0.021 · $0.030',
    unit: 'per second',
  },
  {
    capability: 'Motion transfer',
    model: 'Wan 2.2 animate',
    detail: 'Move a character with a reference performance.',
    res: '480p · 512p · 720p',
    price: '$0.020 · $0.028 · $0.040',
    unit: 'per second',
  },
  {
    capability: 'Multi-reference',
    model: 'MiniMax H3 ref2va',
    detail:
      'Images, video and audio references in one pass, with sound generated alongside the picture. First 5 reference images free, $0.009 each after.',
    res: '480p · 768p',
    price: '$0.0054 · $0.0144',
    unit: 'per second',
  },
  {
    capability: 'Long-form video',
    model: 'LTX',
    detail: 'An alternative base with different motion characteristics.',
    res: '480p · 512p · 720p',
    price: '$0.013 · $0.014 · $0.019',
    unit: 'per second',
  },
  {
    capability: 'Image generation',
    model: 'Qwen Image · Flux2 · Z-turbo',
    detail: 'Stills for thumbnails, keyframes and product shots.',
    res: '—',
    price: '$0.0025 – $0.015',
    unit: 'per image',
  },
  {
    capability: 'Image editing',
    model: 'Qwen Image Edit (+ turbo)',
    detail: 'Instruction-driven edits on an existing image.',
    res: '—',
    price: '$0.003 · $0.005',
    unit: 'per image',
  },
  {
    capability: 'Speech synthesis',
    model: 'Qwen TTS',
    detail: 'Up to 500 characters per request.',
    res: '—',
    price: '$0.00003',
    unit: 'per character',
  },
  {
    capability: 'Custom LoRA',
    model: 'Train, or bring your own',
    detail:
      'Upload a dataset and train, or import .safetensors from a URL. Several LoRAs per request. Generation with a LoRA is 1.2x the base rate.',
    res: '—',
    price: '$0.003',
    unit: 'per training step',
  },
];

export const STUDIO = [
  { job: 'Product suite, 2K', detail: 'A full set of shots from one product photo', price: '$0.70 – $10.00' },
  { job: 'Product suite, 4K', detail: 'The same, at print resolution', price: '$1.00 – $20.00' },
  { job: 'Clothing suite', detail: 'Garment shot to catalogue set, 2K or 4K', price: '$1.70 – $2.00' },
  { job: 'Flat-lay to model', detail: 'Put the garment on a person', price: '$0.40' },
  { job: 'Mannequin to model', detail: 'Replace the dummy with a model', price: '$0.40 – $0.70' },
  { job: 'Background change', detail: 'Re-place the subject in a new scene', price: '$0.40 – $0.70' },
  { job: 'Pose variation', detail: 'Another pose from the same model', price: '$0.40' },
  { job: 'Image translation', detail: 'Localise the text inside an image', price: '$1.00' },
];

export const PACKAGES = [
  { name: 'Starter', price: '$10', credits: '100', concurrency: '2' },
  { name: 'Standard', price: '$50', credits: '550', concurrency: '4' },
  { name: 'Pro', price: '$200', credits: '2,500', concurrency: '8' },
];
