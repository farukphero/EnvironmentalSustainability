import { NavbarDefault, StickyNavbar } from '@/Components/Shared/NavBar/NavBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
   <StickyNavbar></StickyNavbar>
   <Component {...pageProps} />
  </>
}
