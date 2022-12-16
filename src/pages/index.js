import MainPage from './MainPage';
import NotFound  from './NotFound';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
const Index = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );
}
export default Index;