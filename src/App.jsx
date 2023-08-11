import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InitialPage from './Pages/InitialPage/InitialPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/kanban-task-management" element={<InitialPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
