import { useState } from "react"
import "./EmojiRating.css"

const ratingData = [
  { emoji: "😔", label: "Terrible" },
  { emoji: "😕", label: "Poor" },
  { emoji: "😐", label: "Okay" },
  { emoji: "🙂", label: "Good" },
  { emoji: "😍", label: "Amazing" },
]

export default function EmojiRating({ onChange, className = "" }) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const handleClick = (value) => {
    setRating(value)
    onChange?.(value)
  }

  const displayRating = hoverRating || rating

  return (
    <div className={`emoji-rating ${className}`}>
      <p className="emoji-rating-prompt">How was your experience?</p>

      {/* Emoji buttons */}
      <div className="emoji-rating-buttons">
        {ratingData.map((item, i) => {
          const value = i + 1
          const isActive = value <= displayRating

          return (
            <button
              key={value}
              onClick={() => handleClick(value)}
              onMouseEnter={() => setHoverRating(value)}
              onMouseLeave={() => setHoverRating(0)}
              className={`emoji-btn ${isActive ? "emoji-btn--active" : ""}`}
              aria-label={`Rate ${value}: ${item.label}`}
              type="button"
            >
              <span className="emoji-icon">{item.emoji}</span>
            </button>
          )
        })}
      </div>

      {/* Label display */}
      <div className="emoji-rating-label-container">
        <span
          className={`emoji-rating-label emoji-rating-default ${displayRating > 0 ? "emoji-label--hidden" : ""}`}
        >
          Rate us
        </span>
        {ratingData.map((item, i) => (
          <span
            key={i}
            className={`emoji-rating-label ${displayRating === i + 1 ? "emoji-label--visible" : "emoji-label--hidden"}`}
          >
            {item.label}
          </span>
        ))}
      </div>

      {/* Decorative divider */}
      <div className="emoji-rating-divider"></div>
    </div>
  )
}
