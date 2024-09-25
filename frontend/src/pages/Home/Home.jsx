import BestSeller from '../../components/BestSeller/BestSeller';
import Hero from '../../components/Hero/Hero';
import LatestCollection from '../../components/LatestCollection/LatestCollection';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollection></LatestCollection>
            <BestSeller></BestSeller>
        </div>
    );
};

export default Home;