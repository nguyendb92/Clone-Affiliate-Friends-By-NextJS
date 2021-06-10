import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
      }
    render() {
        return (
            <Html>
                <Head>
                    <meta name="robots" content="noindex" />
                    <meta name="googlebot" content="noindex" />
                    <meta charSet="utf-8" />

                    <meta name="keywords" content="" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <body className="dashboard">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
