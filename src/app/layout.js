import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NEXT HERO',
  description: 'NEXT HERO',
}

 const RootLayout =({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href="/">Home</a>
        </nav>
        {children}
        <footer>
          Bye
        </footer>
        </body>
    </html>
  )
}

export default RootLayout;
