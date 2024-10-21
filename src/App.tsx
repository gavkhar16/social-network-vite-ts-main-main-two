import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WrongPassword } from "./pages/WrongPassword/WrongPassword";
import { CodeEnter } from "./pages/CodeEnter/CodeEnter";
import { PasswordPage } from "./pages/PasswordPage/PasswordPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<LoginPage/>
    },
    {
      path: "/registration-page",
      element: <RegistrationPage />,
    },
    {
      path: "/wrong-password",
      element: <WrongPassword />,
    },
    {
      path: "/code-enter",
      element: <CodeEnter />,
    },
    {
      path: "/password-page",
      element: <PasswordPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
    },
    {
      path: "/profile-page",
      element: <ProfilePage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
