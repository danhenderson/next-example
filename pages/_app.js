import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

const App = ({ Component, pageProps }) => (
  <React.Fragment>
    <Head>
      <title>NextJS Example</title>
    </Head>
    <Header />
    <div
      className='main py5 px1 max-width-2 mx-auto center'
      style={{ minHeight: 'calc(100vh - 22rem)' }}>
      <Component {...pageProps} />
    </div>
    <Footer />
  </React.Fragment>
)

export default App
