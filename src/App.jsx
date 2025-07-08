 import Layout from"./components/Layout"
 import Grid from "./components/Grid"
import Hero from "./components/Hero"

function App(){
  return(
      <Layout>
        <main>
          <Hero></Hero>
          <Grid/>
        </main>
      </Layout>
  )
}

export default App
