// Artifacts can't serve .gz files, so the English model ships as base64 text.
// Hand it to Tesseract's worker whenever it asks for eng.traineddata.gz.
const realFetch = self.fetch.bind(self);
self.fetch = async (url, opts) => {
  if (String(url).endsWith("eng.traineddata.gz")) {
    const b64 = await (await realFetch(new URL("eng-traineddata.txt", self.location.href))).text();
    const bin = atob(b64.trim());
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new Response(bytes);
  }
  return realFetch(url, opts);
};
importScripts("worker.min.js");
