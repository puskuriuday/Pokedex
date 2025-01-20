import './Pokemon.css'

export default function Pokemon({ Name , image }){
    return(
        <div className='Pokemon'>
            <div className='Name'>{Name}</div>
            <div><img className='Image' src={image} alt={`${Name} img is loading`} /></div>
        </div>
    );
}