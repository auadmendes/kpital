import { Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Customer } from "./pages/Customer";
import { Exercise } from "./pages/Exercise";

import { Home } from "./pages/Home";
import { Plan } from "./pages/Plan";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Plan" element={<Plan />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/Exercises" element={<Exercise />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/customer/:slug" element={<Customer />} />
    </Routes>
  )
}