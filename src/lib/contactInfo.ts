export interface SocialLink {
  name: 'facebook' | 'instagram' | 'linkedin' | 'tiktok'
  href: string
}

export const contactInfo = {
  phone: '+31625351815',
  email: 'krupinecbouw@gmail.com',
  address: 'Ericastraat 7 1214 EJ Hilversum, Netherlands',
  mapsUrl: 'https://maps.app.goo.gl/yW653rWedA1cQ6HC8',
  // The legacy site never wired these up (all icons pointed to href="#").
  // Replace with real profile URLs once available.
  socialLinks: [
    { name: 'facebook', href: '#' },
    { name: 'instagram', href: '#' },
    { name: 'tiktok', href: '#' },
    { name: 'linkedin', href: '#' },
  ] satisfies SocialLink[],
} as const
