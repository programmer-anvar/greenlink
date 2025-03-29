import Footer from "./footer/footer"
import Header from "./header/Header"

const Layout = ({ children }) => {
  return (
    <div>
       <div className="">
        <div >
          <Header/>
        </div>
						{children}
			</div>
      <div className="mt-8">
      <Footer/>
      </div>
    </div>
  )
}

export default Layout
