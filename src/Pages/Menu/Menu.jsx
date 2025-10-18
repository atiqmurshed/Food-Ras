import useMenu from "../../Hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCatgory/MenuCategory";
// import PopularMenu from "../Home/PopularMenu/PopularMenu";
// import { Helmet } from 'react-helmet-async';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            {/* <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet> */}
            <Cover img={menuImg}></Cover>
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

        </div>
    );
};

export default Menu;