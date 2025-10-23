import useMenu from "../../Hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import SaladImg from "../../assets/menu/salad-bg.jpg";
import SoupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
// import PopularMenu from "../Home/PopularMenu/PopularMenu";
// import { Helmet } from 'react-helmet-async';

const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");

    return (
        <div>
            {/* <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet> */}
            <Cover img={menuImg} title='our menu'></Cover>
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory
                items={dessert}
                title='Dessert'
                img={dessertImg}
            ></MenuCategory>
            <MenuCategory items={pizza} title="PIZZA'S" img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title="SALAD" img={SaladImg}></MenuCategory>
            <MenuCategory items={soup} title="Soup" img={SoupImg}></MenuCategory>

        </div>
    );
};

export default Menu;