import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import './styles/styles.css';
import Data from './data'
export default function App() {
    const Items = Data.map( 
        x => <Card 
                key={x.id}
                {...x}
        
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