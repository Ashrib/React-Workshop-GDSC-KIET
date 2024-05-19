import { Link, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";



import Kitchen from './components/Kitchen';
import Bathroom from './components/Bathroom';
import Navbar from './components/Navbar';
import LivingRoom from './components/LivingRoom';
import FirstFloor from './components/FirstFloor';
import BenRoom from './components/BenRoom';
import HarryRoom from './components/HarryRoom';
import Rooms from './components/Rooms';
import Room from './components/Room';
import Home from "./components/Home";



const routes = createBrowserRouter(
  [


    { 
      path: '/', 
      element:<Home/>,
    },
    { 
      path: '/kitchen', element:<Kitchen/>,
    },
    { 
      path: '/bathroom', element:<Bathroom/>,
    },
    { 
      path: '/livingroom', element:<LivingRoom/>,
      
    },

    // {
    //   path:'/firstfloor', element:<FirstFloor/>,
    //   children:[
    //     { index:true ,element:<Rooms/>},

    //     {path:'ben',element:<BenRoom/>},
    //     {path:'harry',element:<HarryRoom/>}
    //   ] 

    // },



    { 
      path: 'firstfloor', 
      element:<FirstFloor/>,
      children:[
        {index:true ,element:<Rooms/>},
        {path:':name', element:<Room/>}
      ]
    },
    
    {
      path:'*', element:<>404</>
    }
  ]
); 



function App() {

return (



  <RouterProvider router={routes}></RouterProvider>
);

}
export default App;










// {
//   path:'/post', element:<>
//   posts <br></br>
//   <Outlet/>
//   </>,
//   children:[

//     {index:true, element:<>
//             <h1><Link to='/post/post1'>post1</Link></h1>
//             <h1><Link to='/post/post2'>post2</Link></h1>
//     </>},
//     {path:'post1', element:<>post1</>},
//     {path:'post2', element:<>post2</>}
//   ]
// },
