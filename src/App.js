import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// SETTINGS GEAR ICON
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// COMPONENTS
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";

// PAGES
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import "./App.css";

// CONTEXT PROVIDER
import { useStateContext } from "./context/ContextProvider";

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">

        {/**** SETTINGS ICON ****/}
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent 
          content="Settings" 
          position="Top"
          >
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white "
              style={{ background: currentColor, borderRadius: "50%" }}
              onClick={() => setThemeSettings(true)}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {/**** SIDEBAR ****/}
        {activeMenu ? (
          <div className="w-72 fixed sidebar bg-white dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        {/**** BODY WRAPPER ****/}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-50 ${
            activeMenu 
            ? "md:ml-72" 
            : "flex-1"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
      

        <div>

         {themeSettings &&  <ThemeSettings />}
          {/****  ROUTES ****/}
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/* Pages */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />

            {/* Apps */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />
            <Route path="/customers" element={<Customers />} />

            {/* Charts */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
            <Route />
          </Routes>
        </div>
      </div>
      </div>
    </BrowserRouter>
    </div>
  );
};

export default App;
