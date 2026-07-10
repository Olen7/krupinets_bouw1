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
      {/* Shadow behind the title, matches Figma "Rectangle 69"; grows on hover to stay behind the bullets */}
      <div className="absolute inset-x-0 bottom-0 h-[38.6%] bg-gradient-to-b from-transparent to-[76%] to-[#151515] transition-all duration-300 group-hover:h-full" />
      <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4">
        <p className="font-body text-[20px]/[32px] font-semibold tracking-[1px] text-offwhite">
          {title}
        </p>
        <div className="flex max-h-0 flex-col gap-1 overflow-hidden text-sm text-service-text opacity-0 transition-all group-hover:max-h-64 group-hover:opacity-100">
          {bullets.map((bullet) => (
            <p key={bullet}>{bullet}</p>
          ))}
        </div>
      </div>
    </li>
  )
}
