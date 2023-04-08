import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from 'phosphor-react'

import LogoImg from './assets/Logo.svg'

export function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={LogoImg} alt="Logo" />

        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill" /> Home
          </a>
          <a href="">
            <Hash />
            Explorer
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>
      <div className="content">content</div>
    </div>
  )
}
