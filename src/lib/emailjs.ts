import emailjs from '@emailjs/browser'
import { env } from './env'

let initialized = false

function ensureInitialized() {
  if (!initialized) {
    emailjs.init({ publicKey: env.emailjsPublicKey })
    initialized = true
  }
}

export interface ConsultationParams {
  name: string
  phone: string
  email: string
}

export interface ContactParams extends ConsultationParams {
  question: string
}

export function sendConsultation(params: ConsultationParams) {
  ensureInitialized()
  return emailjs.send(env.emailjsServiceId, env.emailjsConsultationTemplateId, { ...params })
}

export function sendContact(params: ContactParams) {
  ensureInitialized()
  return emailjs.send(env.emailjsServiceId, env.emailjsContactTemplateId, { ...params })
}
