

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './coffeeList.scss';



const CoffeeList = (props) => {
    const {best, input, country} = props
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() =>{
        updateData()
        // eslint-disable-next-line
    }, [Data])

    const onDataLoaded = () => {
        setLoading(true);
        try {
            setData(Data);
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
            setError(true)
        }

        try {
            return data.filter(item => item.title.toUpperCase().indexOf(input.toUpperCase()) > -1)
        } catch(e) {
            setError(e.message)
        }
        
        
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


    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const itemsBest = !(loading || error || !best || !data) ? <ItemsHome data={data}/> : null;
    const items = !(loading || error || !data || best) ? <ItemsSearch  visibleData={searchCountry(searchTitle())}/> : null;  
    
    return (
        <ul className='coffee__list'>
            {
                data ? <li className='coffee__items'>
                    {itemsBest}
                    {items}
                    {spinner}
                    {errorMessage}
                </li> :
                <>
                    {spinner}
                    {errorMessage}
                </>
            }   
        </ul>
    )
}

const ItemsHome = ({data}) => {

    if (data.filter(item => item.best === true).length === 0) {
        return <ErrorMessage/>
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