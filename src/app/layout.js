import Navbar from '../components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../components/footer/Footer'
import { ThemeProvider } from '../../context/ThemeContext'
import { Toaster } from 'react-hot-toast'
import { UserProvider } from '../../context/UserContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Omokefe Ovie - fullstack developer',
  description: 'FullStack portfolio  website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Toaster />
          <UserProvider>
            <Toaster />
            <Navbar />
            {children}
            <Footer />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
