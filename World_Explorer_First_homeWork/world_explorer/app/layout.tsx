import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>

        <div>
          <header>
            <Navbar />
          </header>

          <main>
            {children}
          </main>

          <footer>
            <Footer />
          </footer>
        </div>

      </body>
    </html>

  )
}