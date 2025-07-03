import React, { useRef } from 'react'
import './FrontPageCard.css'

type FrontPageCardProps = {
  cardText?: string;
  cardDescription?: string;
  // imgCard?: string;
  linkCard?: string;
}

export const FrontPageCard = ( {cardText, cardDescription, linkCard} : FrontPageCardProps ) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * 10
    const rotateY = ((x - centerX) / centerX) * -10

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const resetTransform = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }
  }

  return (
    <div className="card-container">
      <div
        className="card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
      >
        <h2 className="card-title">
          {cardText}
        </h2>
        <p className="card-description">
          {cardDescription}
        </p>
        <div className="card-image">
          <img
            src={"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"}
            alt="thumbnail"
          />
        </div>
        <div className="card-footer">
          <a
            href={linkCard || "https://twitter.com/mannupaaji"}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Comprar ahora
          </a>
          <button className="card-button">Ver similares</button>
        </div>
      </div>
    </div>
  )
}
