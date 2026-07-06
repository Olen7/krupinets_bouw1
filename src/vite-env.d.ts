/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_CONSULTATION_TEMPLATE_ID: string
  readonly VITE_EMAILJS_CONTACT_TEMPLATE_ID: string
  readonly VITE_STRAPI_BASE_URL: string
  readonly VITE_STRAPI_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
