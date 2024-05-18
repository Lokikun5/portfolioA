import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import '../src/style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '*',
    element: <NotFound/>
  }

],
    {
      basename: '/portfolioA'
    });
function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
