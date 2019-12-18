import React from 'react'
import {StyleSheetManager} from 'styled-components'
import * as R from 'ramda'

import hook from './app-hook'
// import * as s from './style.sc'
import {
  GlobalStyle, Main, Section, Aside, H1, H2, Downloads, Pre, Table, Checkbox, Name, Small
} from './style.sc'

const round = R.cond ([
  [R.lte (1000000), i => `${Math.round (i / 1000000)}M`],
  [R.lte (1000), i => `${Math.round (i / 1000)}k`],
  [R.T, R.identity]
])

const renderNpmPackages = R.map (p => (
  <tr key={p}>
    <td><Downloads>{round (p.downloads)}</Downloads></td>
    <td><Pre>{p.package}</Pre></td>
    <td>{R.lte (1) (p.level) && <Checkbox/>}</td>
    <td>{R.lte (2) (p.level) && <Checkbox/>}</td>
    <td>{R.lte (3) (p.level) && <Checkbox/>}</td>
  </tr>
))

const renderOther = R.map (p => (
  <tr key={p}>
    <td><Name>{p.name}</Name></td>
    <td>{R.lte (1) (p.level) && <Checkbox/>}</td>
    <td>{R.lte (2) (p.level) && <Checkbox/>}</td>
    <td>{R.lte (3) (p.level) && <Checkbox/>}</td>
  </tr>
))
  
const App = () => {
  const {proficiencies} = hook ()
  return (
    <StyleSheetManager stylisOptions={{ semicolon: true }}>
    <>
      <GlobalStyle/>
      {/* <a href="https://github.com/you"><img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"/></a> */}
      <Main>
        <Section>
          <H1>
            Technologies I <Small>would</Small> like to work with:
          </H1>
          <Table>
            <tr>
              <th>Weekly<br/>downloads</th>
              <th>Package</th>
              <th>Read <br/>docs</th>
              <th>Used in<br/>development</th>
              <th>Used in<br/>production</th>
            </tr>
            {renderNpmPackages (proficiencies.npmPackages)}
          </Table>
        </Section>
        <Section>
          <H2>Other</H2>
          <Table>
            <tr>
              <th>Tech</th>
              <th>Beginner</th>
              <th>Intermediate</th>
              <th>Advanced</th>
            </tr>
            {renderOther (proficiencies.other)}
          </Table>
        </Section>
      </Main>
      <Aside>
        <a href='https://github.com/hacker-dom'>Dominik Teiml</a>
        <a href='mailto:dteiml@gmail.com'>dteiml@gmail.com</a>
      </Aside>
    </>
    </StyleSheetManager>
  )
}

export default App
