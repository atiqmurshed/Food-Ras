import imgi from '../../../assets/home/slide5.jpg';
import imi from '../../../assets/home/slide2.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Card = () => {
    return (
        <div className='w-full'>
            <SectionTitle
                subHeading="---Should Try---"
                heading='CHEF RECOMMENDS'>
            </SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4  text-center items-center mx-auto'>
                <div className='w-80'>
                    <div>
                        <img className='h-40 object-cover w-80' src={imgi} alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl p-3'>Vagetible Salad</h1>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast </p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">ADD TO CART</button>
                    </div>
                </div>
                <div className='w-80'>
                    <div>
                        <img className='h-40 object-cover w-80' src={imi} alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl p-3'>Vagetible Salad</h1>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast </p>
                        <button className="btn btn-outline border-0 border-b-4 bg-black mt-4">ADD TO CART</button>
                    </div>
                </div>
                <div className='w-80'>
                    <div>
                        <img className='h-40 object-cover w-80' src={imgi} alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl p-3'>Vagetible Salad</h1>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;