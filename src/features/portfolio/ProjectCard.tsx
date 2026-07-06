import { Link } from 'react-router-dom'
import type { PortfolioListItem } from './portfolio.types'

export function ProjectCard({ item }: { item: PortfolioListItem }) {
  return (
    <li>
      <Link to={`/portfolio/${item.id}`} className="group block overflow-hidden rounded">
        <img
          src={item.imageUrl}
          alt={item.name}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform group-hover:scale-105"
        />
        <p className="mt-2 font-body text-white">{item.name}</p>
      </Link>
    </li>
  )
}
