import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link href='https://unpkg.com/basscss@8.0.2/css/basscss.min.css' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Merriweather&display=swap' rel='stylesheet' />
          <style dangerouslySetInnerHTML={{
              __html: `
              :root {
                font-family: Merriweather, serif;
              }

              a {
                text-decoration: none;
                color: inherit;
              }`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
