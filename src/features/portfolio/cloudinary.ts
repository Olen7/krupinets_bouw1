/** Applies Strapi's Cloudinary resize/quality transform used for portfolio grid thumbnails. */
export function transformCloudinaryUrl(url: string): string {
  return url.replace('/upload/', '/upload/w_1920,h_1080,c_limit,q_auto,f_auto/')
}
