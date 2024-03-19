import './globals.css'

export const metadata = {
  title: 'The Script Club',
  description: '',
}

export default function RootLayout({ children }) {
  return (
       <html lang="en">
            <head>
                 <link rel="script club favicon" href="/favicon.ico" />
            </head>
            <body>{children}</body>
       </html>
  );
}
