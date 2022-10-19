import Header from './Header'
import Navbar from './Navbar'
import Content from './Content'
import TereBenefist from './TereBenefist'
import Footer from './Footer'
import Search from './Search'

export default function Layout({children}){
    return(
        <div>
        <Navbar/>
        <Header/>
        <Search/>
        <Content/>
        <TereBenefist/>
        <Footer/>
        <main>{children}</main>
        </div>
    )
}