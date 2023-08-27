import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import "./App.css";
import List from "./List";
import data from "./cars.json";
import SlideShow from "./SlideShow";
import Header from "./Header";

const App = () => {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="list" element={<List data={data}/>} />
        <Route path="" element={<Navigate to="/home" />} />
          <Route path="slide" element={<SlideShow />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
