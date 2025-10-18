import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Category from "../Catagory/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featureds/Featured";
import Fitimage from "../Fitimage/Fitimage";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
// import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            {/* <Helmet>
               <title>Bistro Boss | Home </title>
            </Helmet> */}
            <Banner></Banner>
            <Category></Category>
            <Fitimage></Fitimage>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Card></Card>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;