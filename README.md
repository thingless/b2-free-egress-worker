Take full advantage of the Bandwidth Alliance. Backblaze offers free egress to Cloudflare, and Cloudflare offers free egress to the internet. Cloudflare free plan workers allow up to 100k requests per day, consuming less than 50ms of CPU time each, not counting network latency or egress bandwidth. This worker will allow you to fetch files from your B2 bucket totally free.
 
https://www.cloudflare.com/bandwidth-alliance/backblaze/  
https://www.backblaze.com/b2/cloud-storage-pricing.html  

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
10. Access your files at `https://b2-free-egress-worker.YOUR_SUBDOMAIN.workers.dev/BUCKET_NAME/FILE_PATH`