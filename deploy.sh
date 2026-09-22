#!/usr/bin/env bash
# Build and publish cflabs.ai. Usage: ./deploy.sh [ssh-target]
set -euo pipefail
TARGET="${1:-dt-remote}"
cd "$(dirname "$0")"

npm run build

# --delete keeps the docroot clean, but never touch the ACME challenge dir:
# acme.sh writes there on renewal and losing it breaks certificate renewal.
rsync -az --delete --exclude '.well-known' dist/ "$TARGET:/var/www/cflabs.ai/"

echo "--- smoke test ---"
for p in / /video-ai/ /research/ /heritage/ /company/ /nope/; do
  code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "https://cflabs.ai$p")
  printf '%-16s %s\n' "$p" "$code"
done
