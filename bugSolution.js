```javascript
import { BrowserRouter, Routes, Route, useParams, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutLayout/>} >
          <Route index element={<About />} />
          <Route path="nested" element={<Nested />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Nested() {
  return <h1>Nested</h1>;
}

function AboutLayout() {
  let params = useParams();
  return (
    <div>
      <h2>About</h2>
      <Outlet />
    </div>
  );
}
export default App; 
```