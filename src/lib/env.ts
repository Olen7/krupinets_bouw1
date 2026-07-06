interface AppEnv {
  emailjsPublicKey: string
  emailjsServiceId: string
  emailjsConsultationTemplateId: string
  emailjsContactTemplateId: string
  strapiBaseUrl: string
  strapiToken: string
}

function required(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const env: AppEnv = {
  emailjsPublicKey: required(import.meta.env.VITE_EMAILJS_PUBLIC_KEY, 'VITE_EMAILJS_PUBLIC_KEY'),
  emailjsServiceId: required(import.meta.env.VITE_EMAILJS_SERVICE_ID, 'VITE_EMAILJS_SERVICE_ID'),
  emailjsConsultationTemplateId: required(
    import.meta.env.VITE_EMAILJS_CONSULTATION_TEMPLATE_ID,
    'VITE_EMAILJS_CONSULTATION_TEMPLATE_ID',
  ),
  emailjsContactTemplateId: required(
    import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
    'VITE_EMAILJS_CONTACT_TEMPLATE_ID',
  ),
  strapiBaseUrl: required(import.meta.env.VITE_STRAPI_BASE_URL, 'VITE_STRAPI_BASE_URL'),
  strapiToken: required(import.meta.env.VITE_STRAPI_TOKEN, 'VITE_STRAPI_TOKEN'),
}
