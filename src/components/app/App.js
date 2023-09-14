import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import HomePage from '../pages/homePage/HomePage';
import CoffeePage from '../pages/coffeePage/CoffeePage';
import ForYourPleasurePage from "../pages/forYourPleasurePage/ForYourPleasurePage";
import ProductPage from "../pages/productPage/ProductPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import './app.scss';


const App = () => {
   
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/coffee' element={<CoffeePage/>}/>
                    <Route path='/coffee/:id' element={<ProductPage/>}/>
                    <Route path='/our-goods' element={<ForYourPleasurePage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </Router>
    )
}


export default App;