import React from "react"
import styled from "styled-components"

const OldLink = styled.a`
  color: #555;
  padding-left: 1em;
`
const Link = styled.a`
  font-weight: bold;
  color: #333;
`
const List = ({href, children, oldHref}) => <li>{[
  <Link href={href}>{children}</Link>,
  (oldHref) ? <OldLink href={href}>(old)</OldLink> : null
]}</li>

export const Links = () => {
  return <ul>
    <List href="https://github.com/inuscript" oldHref="https://github.com/suisho">
      GitHub
    </List>
    <List href="https://www.npmjs.com/~inuscript" oldHref="https://www.npmjs.com/~suisho">
      npm
    </List>
    <List href="https://twitter.com/inuscript">
      Twitter
    </List>
    <List href="https://qiita.com/inuscript">
      Qiita
    </List>
    <List href="http://sui.hateblo.jp/">
      Blog
    </List>
  </ul>
}