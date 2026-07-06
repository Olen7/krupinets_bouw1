import { ResponsiveImage, type ResponsiveImageProps } from '@/components/ui/ResponsiveImage'

export interface ServiceCardProps {
  title: string
  bullets: string[]
  sources: ResponsiveImageProps['sources']
}

export function ServiceCard({ title, bullets, sources }: ServiceCardProps) {
  return (
    <li className="group relative overflow-hidden rounded">
      <ResponsiveImage alt={title} sources={sources} className="h-64 w-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="font-heading text-lg text-white">{title}</p>
        <div className="flex max-h-0 flex-col gap-1 overflow-hidden text-sm text-service-text opacity-0 transition-all group-hover:max-h-64 group-hover:opacity-100">
          {bullets.map((bullet) => (
            <p key={bullet}>{bullet}</p>
          ))}
        </div>
      </div>
    </li>
  )
}
