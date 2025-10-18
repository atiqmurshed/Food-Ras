import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feturimg from '../../../assets/home/featured.jpg';
import './Feturend.css';

const Featured = () => {

    return (
        
        <div className="featured-item pt-4 my-16 bg-fixed">
            <SectionTitle
                subHeading="check it out"
                heading="Featured Item"
            ></SectionTitle>

            <div className="flex bg-opacity-40 justify-center items-center py-8 px-16">
                <div>
                    <img src={feturimg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where Can I get some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam consequuntur excepturi possimus at, quae a repellat deserunt animi atque?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
                </div>
            </div>
        </div>
    );
}

export default Featured;