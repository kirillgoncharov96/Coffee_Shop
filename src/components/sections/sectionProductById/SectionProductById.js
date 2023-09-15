import { useParams, useNavigate } from 'react-router-dom';
import { useEffect,useState, useCallback } from 'react';
import Data from '../../data/Data';
import LogoDivider from '../../dividers/Divider';
import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';
import NotFoundPage from '../../pages/notFoundPage/NotFoundPage';


import imageAromistico from '../../../assets/img/imageCoffee/Aromistico.png';
import imageSolimo from '../../../assets/img/imageCoffee/solimo-big.png';
import imagePresto from '../../../assets/img/imageCoffee/presto-big.png';
import './sectionProductById.scss';

const SectionProductById = () => {
    const {id} =useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const clearError = useCallback(() => setError(null), []);
    
    useEffect(() => {
        updateData();
        // eslint-disable-next-line
    }, [id])

    const updateData = () => {
        onDataLoaded(); 
    }

    const onDataLoaded = () => {
        clearError();
        setLoading(true);
        try {
            const item = Data.filter(item => item.id === +id);
            setData(item);
            setLoading(false);
        }catch(e){
            console.log( `Error: ${e.name}: ${e.message}`);
            setError(e.message);
            setLoading(false);
        }
        
    }

    const onPreviousPage = () => {
		navigate(-1);
	}
    
    const errorMessage = error ? <NotFoundPage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !data) ? <View data={data}/> : null;
    
    return (
        <div className="container product__container">
            {
                ((data === null || data.length !== 0) && !error) ? 
                <button className="back-button" onClick={onPreviousPage}>
                    back
                </button> 
                : null
            }            
                {errorMessage}
                {spinner}
                {content}
        </div>    
        
    )
    
}

const View = ({data}) => {

    if (data.length === 0) {
        return <ErrorMessage/>
    }

    const {title, country, price} = data[0]

    
    
    const filterImg = () => {
        switch(title) {
            case 'AROMISTICO Coffee 1 kg':
                return imageAromistico;
            case 'Solimo Coffee Beans 2 kg':
                return imageSolimo;
            case 'Presto Coffee Beans 1 kg':
                return imagePresto;
            default:
                return imageAromistico;
        }
    }
    
    return (
        <>
            
            <div className="product__image">
                <img src={filterImg()} alt={title}/>
            </div>
            <div className="product__about">
                <h2 className="subtitle product__about-subtitle">About it</h2>
                    <LogoDivider color='black'/>
                <p className="description product__description">
                    <span>{title}</span>
                </p>
                <p className="description product__description">
                    <span>Country: </span>
                    {country} 
                </p>
                <p className="description product__description">
                    <span>Description: </span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="product__price">
                    <span>Price: </span>
                    {price}$
                </p>
            </div>
        </>
    ) 

}

export default SectionProductById;