import Todo from "./pages/todo";
import AnotherPage from "./pages/anotherPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Todo/>} />
          <Route path="/test" element={<AnotherPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
