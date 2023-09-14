

import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './coffeeList.scss';



const CoffeeList = (props) => {
    const {best, input, country} = props
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const clearError = useCallback(() => setError(null), []);

    useEffect(() =>{
        // try {
        //     setData(Data)
        // }catch(e) {
        //     console.log( `Error: ${e.name}: ${e.message}`);
        // }
        updateData()
        // eslint-disable-next-line
    }, [Data])

    const onDataLoaded = () => {
        clearError();
        setLoading(true);
        try {
            console.log(loading)
            setData(Data);
            console.log(data)
            setLoading(false);
        }catch(e){
            console.log( `Error: ${e.name}: ${e.message}`);
            setError(e.message);
            setLoading(false);
        }
        
    }

    const updateData = () => {
        onDataLoaded(); 
    }
    
    const searchTitle = () =>  {
        if (input === undefined) {
            return data
        }

        if (data.length === 0) {
            return data
        }
        
        return data.filter(item => item.title.toUpperCase().indexOf(input.toUpperCase()) > -1)
        
    }

    const searchCountry = (items) => {
        switch (country) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items;
        }
    }
    

    const visibleData = searchCountry(searchTitle());
    const errorMessage = error ? <errorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const items = !(error || loading || !best) ? <ItemsHome data={data}/> : <ItemsSearch visibleData={visibleData}/>;  // еще добавить потом ошибку если нет лучших вкусов
    
    return (
        <ul className='coffee__list'>
            <li className='coffee__items'>
                {errorMessage}
                {items}
                {spinner}
            </li>   
        </ul>
    )


}

const ItemsHome = ({data}) => {
    console.log(data)
    if(data.length === 0) {
        return <p className="error">Product not found</p>
    }

    return data.filter(item => item.best === true).map((item, i) => {
        return (
            <Link to={`/coffee/${item.id}`} className='coffee__item-link' key={i}>
                <img src={item.img} alt={item.title} className='coffee__item-img'/>
                <p className='coffee__item-title'>{item.title}</p>
                <p className='coffee__item-price'>{item.price}$</p>
            </Link>      
        ) 
    })
    
}

const ItemsSearch = ({visibleData}) => {
    console.log(visibleData)
    if(visibleData.length === 0) {
        return <p className="error">Product not found</p>
    }

    return visibleData.map((item, i) => {
        return (
            <Link to={`/coffee/${item.id}`} className='coffee__item-link' key={i}>
                <img src={item.img} alt={item.title} className='coffee__item-img'/>
                <p className='coffee__item-title'>{item.title}</p>
                <p className='coffee__item-country'>{item.country}</p>
                <p className='coffee__item-price'>{item.price}$</p>
            </Link>
        )
    })

}

export default CoffeeList;