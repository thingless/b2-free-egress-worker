async function handleRequest(request) {
  // passed in magically by CloudFlare - https://developers.cloudflare.com/workers/platform/environment-variables
  if (!B2_ACCOUNT_ID || !B2_ACCOUNT_KEY)
    return new Response("This worker is misconfigured. Supply B2_ACCOUNT_ID and B2_ACCOUNT_KEY using wrangler secret put.", {status:500});

  const reqUrl = new URL(request.url);
  const path = reqUrl.pathname.replace('/', '');
  if (path.split('/').length < 2)
    return new Response("Must supply /bucket/path", {status:400});

  // Authorize
  const resp = await fetch("https://api.backblazeb2.com/b2api/v2/b2_authorize_account", {
    headers: { "Authorization": "Basic " + btoa(B2_ACCOUNT_ID + ":" + B2_ACCOUNT_KEY) }
  });
  const js = await resp.json();

  // Download
  const url = `${js.downloadUrl}/file/${path}?Authorization=${encodeURIComponent(js.authorizationToken)}`;
  return await fetch(url);
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
