import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html data-theme="dracula">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://kit.fontawesome.com/5333104c3b.js" strategy="beforeInteractive"></Script>
        <Script src="/js/main.js" strategy="beforeInteractive"></Script>
        <Script src="/js/cutealert.min.js" strategy="beforeInteractive"></Script>
      </body>
    </Html>
  )
}