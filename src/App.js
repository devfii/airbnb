import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import './styles/styles.css';
import Data from './data'
export default function App() {
    const Items = Data.map( 
        x => <Card 
                key={x.id}
                image={`../images/${x.coverImage}`}
                altText='Image1'
                rating={x.stats.rating}
                reviewCount={x.stats.reviewCount}
                country={x.location}
                title={x.title}
                price={"$" + x.price}   
                openSlots={x.openSlots}     
        
        />)
    return (
        <div>
            <Header />
            <Hero />
            <section className="card--list">
                {Items}
            </section>

        </div>
        
    )
}