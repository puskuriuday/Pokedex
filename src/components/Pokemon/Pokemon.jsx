import { Link } from 'react-router-dom';
import './Pokemon.css'

export default function Pokemon({ Name , image , id }){
    return(
        <div className='Pokemon'>
            <Link to={`/Pokemon/${id}`}>
                <div className='Name'>{Name}</div>
                <div><img className='Image' src={image} alt={`${Name} img is loading`} /></div>
            </Link>
        </div>
    );
}