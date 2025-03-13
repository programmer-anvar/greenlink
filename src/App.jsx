import './App.css'
import { protectedRouter } from './routes/router';
import { RouterProvider } from 'react-router-dom';
const ProtectedRoutes = () => {
		return <RouterProvider router={protectedRouter} />;

};


function App() {

  return (
   <div>
      <ProtectedRoutes/>
   </div>
  )
}

export default App
