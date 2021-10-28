Deploy:
-------
1. Sign up for cloudflare workers free plan
2. Sign up for B2, create a bucket, and an app key
3. `cargo install wrangler` to install "wrangler" from cloudflare
4. `export PATH=$PATH:$HOME/.cargo/bin` to put wrangler in your path
5. `export CF_ACCOUNT_ID=your-cloudflare-account-id`
6. `wrangler login` to login to cloudflare
7. `wrangler secret put B2_ACCOUNT_ID` and enter B2 keyID at CLI
8. `wrangler secret put B2_ACCOUNT_KEY` and enter B2 applicationKey at CLI
9. `wrangler publish` to deploy
