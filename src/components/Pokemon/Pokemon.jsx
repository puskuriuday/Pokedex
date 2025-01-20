export default function Pokemon({ Name , image }){
    return(
        <div>
            <div>{Name}</div>
            <div><img src={image} alt={`${Name} img is loading`} /></div>
        </div>
    );
}