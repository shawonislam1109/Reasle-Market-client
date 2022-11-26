import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DetailsHP = ({ product, setProduct }) => {
    const { image, name, details, Price, location, _id, previous_price, date, used, soled } = product;
    // const soldHandleSubmit = (id) => {
    //     fetch(`http://localhost:5000/allProducts/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }
    return (
        <div className="card card-compact py-5 bg-white shadow-xl">
            <figure className='relative'>
                <img src={image} alt="Shoes" />
                <p className='text-xl font-bold absolute bottom-12 bg-violet-800 py-3 px-5 left-0 rounded-sm '><span className='text-orange-500 '>Price : $</span> <span className='text-white'>{Price}</span></p>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-orange-500">{name}</h2>
                <p className='text-xl'>{details ? details.slice(0, 100) + "...see more" : details}</p>
                <p className='text-xl'>Previous Price : <span className='text-orange-500 text-xl font-bold'>$</span>{previous_price && previous_price}</p>
                <p className='text-xl'>Release date : <span className='font-bold'>{date && date}</span>  </p>
                <p className='text-xl'>Used : <span className='font-bold'>{used}</span></p>
                <p className='text-xl flex'> <FaLocationArrow></FaLocationArrow> <span className='text-slate-700'>{location}</span></p>

                {
                    soled ?
                        <>
                            <p className='text-xl text-end font-bold text-orange-500'>SOLD</p>
                        </>
                        :
                        <>
                            <div className='text-end rounded-md'>
                                <Link to={`/product/allProduct/${_id}`} className='px-5 py-3 text-white font-bold rounded-md  bg-violet-600 hover:bg-violet-900'>Buy</Link>
                            </div>
                        </>
                }

            </div>

        </div>
    );
};

export default DetailsHP;