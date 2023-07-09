import Training from './pages/Training';
import TrainingDetailsPage from './pages/TrainingDetailsPage';
import './App.css';
import TrainingDashboard from './pages/TrainingDashboard';
import EditTrainingPage from './pages/EditTrainingPage';
import AddTrainingPage from './pages/AddTrainingPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  let admin = true;
  if (!admin)
    return (
      <Routes>
        <Route path='/details' element={<TrainingDetailsPage />} />
        <Route path='/' element={<Training />} />
      </Routes>
    );
  else
    return (
      <Routes>
        <Route path='/details' element={<TrainingDetailsPage />} />
        <Route path='/add' element={<AddTrainingPage />} />
        <Route path='/edit' element={<EditTrainingPage />} />
        <Route path='/' element={<TrainingDashboard />} />
      </Routes>
    );
}

export default App;
