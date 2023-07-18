import { Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { _blank } from "./actions/_blnak";

import _Blank from "./pages/_blank";
import Navbar from "./components/Navbar";

function App() {
  const _default = useSelector((state) => state._default);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "DEFAULT", payload: "eheh" });
    dispatch(_blank());
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<_Blank />} />
      </Routes>
    </div>
  );
}

export default App;
