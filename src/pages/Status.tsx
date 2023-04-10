import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import './Status.css'
import { PaperPlaneRight } from 'phosphor-react'

export function Status() {
  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState<string[]>([
    'Concordo ...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.',
  ])

  function createNewAnswers(event: FormEvent) {
    event.preventDefault()

    setAnswers((prev) => [newAnswers, ...prev])
    setNewAnswers('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if ((event.key === 'Enter' && event.ctrlKey) || event.metaKey) {
      setAnswers((prev) => [newAnswers, ...prev])
      setNewAnswers('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nostrum, temporibus ipsum voluptates facere explicabo necessitatibus eligendi cupiditate blanditiis rem eum voluptatibus porro cum, qui praesentium velit minus nam fugiat!" />

      <Separator />

      <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/marlisonmourao.png" alt="image user" />
          <textarea
            onChange={(e) => setNewAnswers(e.target.value)}
            onKeyDown={handleHotKeySubmit}
            value={newAnswers}
            id="tweet"
            placeholder="Tweet your answer"
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  )
}
