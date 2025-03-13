import Header from "./header/Header"

const Layout = ({ children }) => {
  return (
    <div>
       <div className="bg-[#000000] h-[100vh]">
        <div>
          <Header/>
        </div>
						{children}
			</div>
    </div>
  )
}

export default Layout
