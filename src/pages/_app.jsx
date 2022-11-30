import { GlobalStyle } from "../styles/global"
import {Inter} from '@next/font/google'
import NavBar from "../components/NavBar"
const inter = Inter({
  weight:['400','600','700'],
  subsets:['latin'],
  style:['normal']
})
function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
    <GlobalStyle/>
    <NavBar/>
    <main className="container">
    <Component {...pageProps} />
    </main>
    </div>
  )
}

export default MyApp
