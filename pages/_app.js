import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background: hsl(217, 54%, 11%);
        }
      `}</style>
    </div>
  )
}

export default MyApp
