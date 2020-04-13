import styled, {createGlobalStyle} from 'styled-components'


export const

GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:300,400&display=swap');

  body {
    box-sizing: border-box;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 300;
  }

  @media print {
  .item {
    -webkit-filter: drop-shadow(4px 4px 1px #ccc);
    text-shadow: 4px 4px 1px #ccc;
  }
}
`,

Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ${'' /* background: linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%); */}
  ${'' /* background-color: linear-gradient(to bottom right, red, orange); */}
  background: linear-gradient(-10deg, #888 0%, #fff 50%, #888 100%);
  height: 100vh;
  width: 100vw;
  max-width: 900px;
  margin: 0 auto;
`,
Section = styled.section`
  margin: 5rem;
`,

Downloads = styled.span`
  font-size: 2rem;
`,
Pre = styled.pre`
  display: inline-block;
  font-size: 3rem;
  margin-top: -.5rem;
`,

Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${'' /* font-size: 16px; */}

  position: absolute;
  top: 56%;
  left: 35%;
  ${'' /* transform: translate(-50%, -50%) rotate(-10deg); */}
  transform: rotate(-6deg);

  height: 20rem;
  width: 40rem;
  /* max-width: 30rem; */
  background-color: #efefef;
  box-shadow:
    -.5rem -.5rem 3rem #333
  ;
  -webkit-filter:blur(0);

  font-size: 1.6rem;

  & a:link {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    text-align: center;
  }

  & a:link:first-child {
    margin-top: 3rem;
  }

  & a:link:last-child {
    margin-bottom: 3rem;
  }
`,

Checkbox = styled.i`
  display: inline-block;
  border: none;

  outline: solid 1.2px #666;
  outline-offset: 1.4px;
  ${'' /* box-shadow: 0 0 3pt 2pt red; */}
  ${'' /* padding: 4px; */}


  ${'' /* background: linear-gradient(to top right, #aaa, blue); */}
  ${'' /* background: radial-gradient(circle, rgba(0,212,255,1) 15%, rgba(17,143,171,1) 100%); */}
  background: radial-gradient(circle, rgba(0,212,255,1) 70%, white 100%);
  ${'' /* background: red; */}

  height: .8rem;
  width: .8rem;
`,

Table = styled.table`
  text-align: center;
  & th {
    color: #444;
    font-size: 2rem;
  }
  & td {
    color: #555;
    font-size: 2rem;
  }
  & tr {
    height: 3rem;
  }
  & td:before {
    content: '';
    display: block; 
    width: 12rem;
  }
`,

Name = styled.span`
  /* color: #ddd; */
  color: #444;
  font-size: 2rem;
  font-weight: 400;
`,

Small = styled.span`
  font-size: 60%;
`,
H1 = styled.h1`
  color: #333;
  font-size: 2.6rem;
  margin-bottom: 2rem;
`,

H2 = styled.h2`
  color: #555;
  font-size: 2.3rem;
  margin-bottom: 2rem;
`