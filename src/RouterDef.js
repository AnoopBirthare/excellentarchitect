import { Routes, Route, Link } from "react-router-dom";
import App from "./App";

const RouterDef = () => {
  return (
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      {/* <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route> */}
    </Routes>
  );
};

export default RouterDef;
