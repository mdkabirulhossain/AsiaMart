import Hero from '../../components/Hero/Hero';
import LatestCollection from '../../components/LatestCollection/LatestCollection';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollection></LatestCollection>
        </div>
    );
};

export default Home;