import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import './styles/styles.css';
import Image1 from './images/image12.png';
import Image2 from './images/wedding-photography.png';
import Image3 from './images/mountain-bike.png';
export default function App() {
    return (
        <div>
            <Header />
            <Hero />
            <div>
                <Card 
                    image={Image1}
                    altText='Image1'
                    status='SOLD OUT'
                    rating={5.0}
                    reviewCount={6}
                    country='USA'
                    title='Life lessons with Katie Zaferes'
                    price='$136'
                />

                <Card 
                    image={Image2}
                    altText='Image2'
                    status='ONLINE'
                    rating={5.0}
                    ratingNumber={30}
                    country='USA'
                    text='Learn wedding photography'
                    price='$125'
                />

                <Card 
                    image={Image3}
                    altText='Image3'
                    rating={4.8}
                    ratingNumber={2}
                    country='USA'
                    text='Group Mountain Biking'
                    price='$50'
                />

            </div>

        </div>
        
    )
}