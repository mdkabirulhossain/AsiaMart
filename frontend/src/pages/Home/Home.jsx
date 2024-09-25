import BestSeller from '../../components/BestSeller/BestSeller';
import Hero from '../../components/Hero/Hero';
import LatestCollection from '../../components/LatestCollection/LatestCollection';
import OurPolicy from '../../components/OurPolicy/OurPolicy';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollection></LatestCollection>
            <BestSeller></BestSeller>
            <OurPolicy></OurPolicy>
        </div>
    );
};

export default Home;