import './globals.css'

export const metadata = {
  title: 'The Script Club',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
