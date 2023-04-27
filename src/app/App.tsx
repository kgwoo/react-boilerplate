import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import * as Service from "app/service";

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Service.Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  return <Main />;
}
