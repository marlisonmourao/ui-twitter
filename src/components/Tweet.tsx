interface TweetProps {
  user: string
  children: string
}

export function Tweet(props: TweetProps) {
  console.log(props)
  return (
    <div className="tweet">
      <strong>{props.user}</strong>
      <p>{props.children}</p>
      <button>Like</button>

      <img src="https://github.com/marlisonmourao.png" width={100} alt="" />
    </div>
  )
}
