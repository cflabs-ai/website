# cflabs.ai

Static site for CFLabs, built with [Astro](https://astro.build). No database, no CMS,
no server-side rendering — `npm run build` produces a directory of HTML that nginx serves.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Where the content lives

| What | Where |
| --- | --- |
| Video AI research notes | `src/content/notes/*.md` — front matter is schema-checked in `src/content.config.ts`; every note must carry a `falsifier` |
| Legacy ZK papers (11) | `src/data/zk-research.json` — imported from the old WordPress site, images self-hosted under `public/img/research/` |
| Phosor capabilities and prices | `src/data/phosor.ts` — the **only** place prices are written down |
| Brand assets | `public/img/` |

### Updating prices

Re-read the platform's public pricing endpoint and edit `src/data/phosor.ts`:

```bash
curl -s https://phosor.ai/api/v1/pricing/config | python3 -m json.tool
```

Per-second figures are the published per-frame price x 16. Bump `PRICING_AS_OF`
in the same file so the site states when it was last checked.

## Deploy

The site is served from `/var/www/cflabs.ai` on the host behind `cflabs.ai`
(currently 52.15.198.116). `./deploy.sh` builds and rsyncs there.

```bash
./deploy.sh
```

Certificates are issued and renewed by `acme.sh` on that host (daily cron), installed to
`/etc/nginx/certs/cflabs.ai/`, with `sudo systemctl reload nginx` as the reload hook.
The ACME webroot is `/var/www/cflabs.ai/.well-known/acme-challenge`, which `deploy.sh`
excludes from `--delete`.
