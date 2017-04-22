import React from "react"
import styled from "styled-components"

const List = ({href, children, oldHref}) => <li>
  <a href={href}>{children}</a>{
    (oldHref) ? <a href={href}>(old)</a> : ""
  }
</li>

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
    <List href="https://github.com/inuscript/inuscript.github.io/issues">
      Issue
    </List>
  </ul>
}