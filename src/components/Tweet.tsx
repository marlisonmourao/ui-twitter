import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import './tweet.css'

interface TweetProps {
  content: string
}

export function Tweet({ content }: TweetProps) {
  return (
    <a href="/" className="tweet">
      <img src="https://github.com/marlisonmourao.png" alt="" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Marlison Mourão</strong>
          <span>@marlisonmourao</span>
        </div>
        <p>{content}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  )
}
