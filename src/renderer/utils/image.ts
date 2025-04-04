export default function uint8ArrayToDataUrl(bytes: Uint8Array): string {
  const blob = new Blob([bytes], { type: 'image/png' }); // adjust if image is jpeg etc
  return URL.createObjectURL(blob);
}
