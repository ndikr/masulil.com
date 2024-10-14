import Page from '../../components/layout/Page';
import Hero from './Hero';
import PreviousPartners from './RecentClients';
import AboutMe from './AboutMe';
import AboutMe1 from './AboutMe1';
import FeaturedProjects from './FeaturedProjects';

const Home = () => {
    return (
        <Page>
            <Hero />
            <PreviousPartners />
            <AboutMe />
            <AboutMe1 />
            <FeaturedProjects />
        </Page >
    )
}

export default Home;