import React, { useState } from 'react';
import AddDeleteModal from './AddDeleteModal';

const ProductDetails = ({ product, refetch }) => {
    const { image, name, details, brand, Price, soled, } = product;
    const [deleteProduct, setDeleteProduct] = useState(null)


    return (
        <div>
            <div className="card  glass">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h1 className='text-2xl font-bold'>{brand}</h1>
                    <h2 className="card-title text-xl font-bold text-orange-500">{name}</h2>
                    <p className='text-md font-medium text-slate-500'>{details}</p>
                    <p className='text-xl font-bold'> Price : <span className='text-orange-500 text-xl font-bold'>$ </span>{Price}</p>
                    <p className='text-xl font-bold'> Product : <span className='text-orange-500 text-xl font-bold'>{
                        soled ? 'soled' : 'unsold'
                    } </span></p>
                    <div className="card-actions justify-end">
                        <label htmlFor="add-delete-modal" onClick={() => setDeleteProduct(product)} className="btn btn-error btn-xs font-bold">Delete</label>

                    </div>
                </div>
            </div>
            <div>
                {deleteProduct && <AddDeleteModal
                    product={product._id}
                    setDeleteProduct={setDeleteProduct}
                    refetch={refetch}
                >
                </AddDeleteModal>}
            </div>
        </div>
    );
};

export default ProductDetails;