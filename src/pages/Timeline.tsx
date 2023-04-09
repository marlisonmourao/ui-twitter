import { FormEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState<string[]>([])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets((prev) => [newTweet, ...prev])
    setNewTweet('')
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/marlisonmourao.png" alt="image user" />
          <textarea
            id="tweet"
            placeholder="What's happening"
            onChange={(e) => setNewTweet(e.target.value)}
            value={newTweet}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  )
}
