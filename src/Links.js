import React from "react"
import styled from "styled-components"

const Link = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const OldLink = styled(Link)`
  padding-left: 1em;
`
const ItemLink = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: bold;
  color: #333;
`

const List = ({href, children, oldHref}) => <li>{[
  <ItemLink href={href}>{children}</ItemLink>,
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