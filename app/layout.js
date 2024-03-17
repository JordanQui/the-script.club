import './globals.css'

export const metadata = {
  title: 'The Script Club',
  description: '',
}

export default function RootLayout({ children }) {
  return (
       <html lang="en">
            <Head>
                 <link rel="script club favicon" href="/favicon.ico" />
            </Head>
            <body>{children}</body>
       </html>
  );
}
