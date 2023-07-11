import Star from '../images/star.svg';
//<img src={`../images/ + ${props.image}`} alt={props.altText} />
export default function Card(props) {
    let badgeText
    if (props.openSlots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === 'Online') {
        badgeText = "ONLINE"
    }
    return (
        <section className='card'>
            <img src={`../images/${props.coverImage}`} className='card--image' alt={props.altText}/>
            { badgeText && <div className='card--badge'><h5>{badgeText}</h5></div>}
            <div className='card--stats'>
                <img src={Star} alt='Star' />
                <span >{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) &bull; </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From $ {props.price}</span> / person</p>
        </section>
    )
}