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
  if (props.readOnly) {
    return (
      <p aria-label={`${props.value} out of 5 stars`} className="flex gap-1 text-orange">
        {STAR_VALUES.map((star) => (
          <span key={star} aria-hidden="true">
            {star <= props.value ? '★' : '☆'}
          </span>
        ))}
      </p>
    )
  }

  const { value, onChange, name } = props

  return (
    <div role="radiogroup" aria-label="Rating" className="flex gap-1">
      {STAR_VALUES.map((star) => (
        <label key={star} className="cursor-pointer text-2xl text-orange">
          <input
            type="radio"
            name={name}
            value={star}
            checked={value === star}
            onChange={() => onChange(star)}
            className="sr-only"
          />
          <span aria-hidden="true">{star <= value ? '★' : '☆'}</span>
        </label>
      ))}
    </div>
  )
}
