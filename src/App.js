// import { ThemeProvider, styled } from "styled-components";
// import { lightTheme } from "./utils/Themes";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Authentication from "./pages/Authentication";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import Navbar from "./components/Navbar";
// import Dashboard from "./pages/Dashboard";
// import Workouts from "./pages/Workouts";



// // import "./Contact";
// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   background: ${({ theme }) => theme.bg};
//   color: ${({ theme }) => theme.text_primary};
//   overflow-x: hidden;
//   overflow-y: hidden;
//   transition: all 0.2s ease;
// `;

// function App() {
//   const { currentUser } = useSelector((state) => state.user);
//   return (
//     <ThemeProvider theme={lightTheme}>
//       <BrowserRouter>
//         {currentUser ? (
//           <Container>
//             <Navbar currentUser={currentUser} />
//             <Routes>
//               <Route path="/" exact element={<Dashboard />} />
//               <Route path="/workouts" exact element={<Workouts />} />
//             </Routes>
//           </Container>
//         ) : (
//           <Container>
//             <Authentication />
//           </Container>
//         )}
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;


import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Contact from "./pages/Contact"; // Import the new Contact page
import Blogs from "./pages/Blogs";
// import Blog from "./components/Blog";
import WorkoutDetails from "./pages/WorkoutDetails";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
              <Route path="/workout/:id" element={<WorkoutDetails />} />
              <Route path="/contact" exact element={<Contact />} /> {/* Add Contact Route */}
              <Route path="/blogs" exact element={<Blogs />} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;




