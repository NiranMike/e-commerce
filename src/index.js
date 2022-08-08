import { createRoot } from 'react-dom/client';
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from 'react-router-dom'
import App from './App';
import Login from './Pages/Login';
import Explore from './Pages/Explore';
import About from './Pages/About';
import './index.css';
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='About' element={<About />} />
            <Route path='Login' element={<Login />}/>
            <Route path='Explore' element={<Explore />} />
        </Routes>
    </BrowserRouter>
)
