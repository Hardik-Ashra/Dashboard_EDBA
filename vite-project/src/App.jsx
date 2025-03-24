import { useState, useMemo, useCallback, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Calendar, X, Menu } from "lucide-react";

// Lazy load pages for performance optimization with prefetching
const AdmissionDashboard = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/AdmissionDashboard")
);
const FeeDashboard = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/FeeDashboard")
);

// Optimized Spinner Loader Component
const Spinner = () => (
  <div className="flex justify-center py-10">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600"></div>
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Memoized navigation items to prevent unnecessary re-renders
  const navItems = useMemo(() => [
    "Admission",
    "Fee",
    "Attendance",
    "Assignment",
    "Exam",
    "Result",
    "AT/KT"
  ], []);

  // Memoized pathname to avoid unnecessary re-renders
  const currentPath = useMemo(() => location.pathname, [location]);

  return (
    <nav className="w-full mt-3">
      <div className="w-full px-4 flex rounded-lg items-center justify-between border border-gray-300 py-4">
        <h1 className="text-lg font-semibold text-gray-900">
          Vishnu Waman Thakur Charitable Trust's
        </h1>

        {/* Desktop Dropdowns */}
        <div className="hidden md:flex space-x-2 md:space-x-4">
          <Dropdown label="All Institute" />
          <Dropdown label="Course" />
          <Dropdown label="2024 - 2025" icon={<Calendar size={16} />} />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 py-2 border-b border-gray-300">
          {navItems.map((item) => {
            const isActive =
              (currentPath === "/" && item.toLowerCase() === "admission") ||
              currentPath === `/${item.toLowerCase()}`;

            return (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`block py-2 text-gray-600 hover:text-black transition ${
                  isActive ? "font-bold text-black" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </NavLink>
            );
          })}
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-start space-x-4 md:space-x-8 mt-4 pb-2 border-b-gray-300 px-4">
        {navItems.map((item) => {
          const isActive =
            (currentPath === "/" && item.toLowerCase() === "admission") ||
            currentPath === `/${item.toLowerCase()}`;

          return (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`relative pb-2 text-sm md:text-base border-b-gray-300 text-gray-600 hover:text-black transition ${
                isActive
                  ? "font-bold text-black after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-black"
                  : ""
              }`}
            >
              {item}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

// Optimized Dropdown component
const Dropdown = ({ label, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-2 py-1 border-gray-300 border rounded-md text-sm text-gray-500"
        onClick={toggleDropdown}
      >
        <span>{label}</span>
        {icon || <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 shadow-md rounded-md mt-1 p-2">
          <p className="text-gray-700">Option 1</p>
          <p className="text-gray-700">Option 2</p>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/admission" element={<AdmissionDashboard />} />
          <Route path="/fee" element={<FeeDashboard />} />
          <Route path="*" element={<AdmissionDashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
