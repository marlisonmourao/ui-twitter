import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import './Status.css'

const answers = [
  'Concordo ...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso.',
]

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nostrum, temporibus ipsum voluptates facere explicabo necessitatibus eligendi cupiditate blanditiis rem eum voluptatibus porro cum, qui praesentium velit minus nam fugiat!" />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/marlisonmourao.png" alt="image user" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type="submit">Tweet</button>
      </form>

      {answers.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  )
}
