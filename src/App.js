import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <div className="container mx-auto">
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
