import Star from '../images/star.svg';
//<img src={`../images/ + ${props.image}`} alt={props.altText} />
export default function Card(props) {
    return (
        <section className='card'>
            <img src={props.image} className='card--image' alt={props.altText}/>
            <div><h3>{props.status}</h3></div>
            <div className='card--stats'>
                <img src={Star} alt='Star' />
                <span >{props.rating}</span>
                <span className='gray'>({props.reviewCount}) &bull; </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From {props.price}</span> / person</p>
        </section>
    )
}