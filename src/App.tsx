import { Sparkle } from 'phosphor-react'
import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/marlisonmourao.png"
                alt="image user"
              />
              <textarea id="tweet" placeholder="What's happening" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator" />

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  )
}
