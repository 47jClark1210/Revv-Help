import { createBrowserRouter } from "react-router-dom";

// App Root, Layouts
import App from "./app"
import MainLayout from "./main-layout";
import IndexPage from "./index-page";

export default function createRouter()
{
    return createBrowserRouter([
        {      
          element: <App  />,          
          children: [
            // {
            //   element: <EmptyLayout />,
            //   children: [
      
            //     /* SignIn, MSAL_Callback, SignOut, Unauthorized */
            //     // {
            //     //   path: "/",
            //     //   element: <SignIn />
            //     // },
            //     // {
            //     //   path: "/msal-callback",
            //     //   element: <MSAL_Callback />
            //     // },
            //     // {
            //     //   path: "/sign-out",
            //     //   element: <SignOut />
            //     // },
            //     // {
            //     //   path: "/unauthorized",
            //     //   element: <Unauthorized />
            //     // }
            //   ]
            // },
            {
              element: <MainLayout />,
              children: [
                {
                  path: "/",
                  element: <IndexPage />
                }                
              ]
            }
          ]
        },
      ],
      { }
    );
}
