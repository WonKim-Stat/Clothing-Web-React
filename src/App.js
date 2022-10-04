// import Directory from "./components/directory/directory.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";

const ShopTest = () => {
  return <h1>This is the ShopTest Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* instead of path, use index--> as long as parent's / match, it will be rendered in the outlet position */}

        {/* <Route path="home" element={<Home />} /> */}
        <Route path="shop" element={<ShopTest />} />
      </Route>
    </Routes>
  );
};

export default App;
