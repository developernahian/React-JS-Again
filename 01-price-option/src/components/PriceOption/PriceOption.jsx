import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {

    const {name, price, features} = option;
    return (
        <div className='bg-blue-600 rounded-2xl font-extrabold p-4 text-white flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl' >{price}</span>
                <span className='text-3xl' >/mon</span>
            </h2>
            <h4 className='text-2xl text-center my-6'>{name}</h4>

            <div className='pl-7 flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature} />)
            }

            </div>
            <button className='mt-12 w-full py-2 bg-green-600 font-bold rounded-xl'>Buy Now</button>
            
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}


export default PriceOption;