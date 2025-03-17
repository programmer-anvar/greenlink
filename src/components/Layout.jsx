import Footer from "./footer/footer"
import Header from "./header/Header"

const Layout = ({ children }) => {
  return (
    <div>
       <div className="">
        <div className="pb-[90px]">
          <Header/>
        </div>
						{children}
			</div>
      <Footer/>
    </div>
  )
}

export default Layout
