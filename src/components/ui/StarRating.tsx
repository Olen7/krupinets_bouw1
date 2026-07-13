import { useState } from 'react'

const STAR_VALUES = [1, 2, 3, 4, 5]

interface ReadOnlyStarRatingProps {
  value: number
  readOnly: true
}

interface InteractiveStarRatingProps {
  readOnly?: false
  value: number
  onChange: (value: number) => void
  name: string
}

export type StarRatingProps = ReadOnlyStarRatingProps | InteractiveStarRatingProps

export function StarRating(props: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  if (props.readOnly) {
    return (
      <p
        aria-label={`${props.value} out of 5 stars`}
        className="flex gap-1 text-xl leading-none tablet:text-2xl desktop:text-[30px]"
      >
        {STAR_VALUES.map((star) => (
          <span
            key={star}
            aria-hidden="true"
            className={star <= props.value ? 'text-orange' : 'text-placeholder'}
          >
            ★
          </span>
        ))}
      </p>
    )
  }

  const { value, onChange, name } = props
  const displayValue = hoverValue ?? value

  return (
    <div
      role="radiogroup"
      aria-label="Rating"
      tabIndex={0}
      className="flex gap-1 text-[30px] leading-none"
      onMouseLeave={() => setHoverValue(null)}
    >
      {STAR_VALUES.map((star) => (
        <label
          key={star}
          onMouseEnter={() => setHoverValue(star)}
          className={`cursor-pointer transition-colors ${
            star <= displayValue ? 'text-orange' : 'text-placeholder'
          }`}
        >
          <input
            type="radio"
            name={name}
            value={star}
            checked={value === star}
            onChange={() => onChange(star)}
            className="sr-only"
          />
          <span aria-hidden="true">★</span>
        </label>
      ))}
    </div>
  )
}