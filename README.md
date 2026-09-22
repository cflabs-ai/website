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

## Server config

`nginx/cflabs.ai.conf` is the live vhost, kept here so it is version-controlled.
To apply a change:

```bash
scp nginx/cflabs.ai.conf dt-remote:/tmp/
ssh dt-remote 'sudo cp /tmp/cflabs.ai.conf /etc/nginx/sites-available/cflabs.ai \
  && sudo nginx -t && sudo systemctl reload nginx'
```

Cache policy is a `map` at the top of that file rather than per-location `add_header`,
because an `add_header` inside a `location` **replaces** every inherited `add_header` —
which would silently drop the security headers on those paths.

HTML is served `Cache-Control: no-cache` deliberately. The old WordPress site sent no
`Cache-Control` at all with a `Last-Modified` a year in the past, so browsers applied
heuristic freshness (commonly 10% of the age = ~5 weeks) and kept serving the old
homepage from disk after the migration. `no-cache` means revalidate every time; with
ETags that is a 304 and costs nothing.
