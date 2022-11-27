import React from 'react';

const AddDeleteModal = ({ product, setDeleteProduct, refetch }) => {
    const productDelete = (id) => {
        fetch(`http://localhost:5000/AddedProducts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data)
                setDeleteProduct(null)
            })
    }

    const CancelHandle = () => {
        setDeleteProduct(null)
    }
    return (
        <div>

            <input type="checkbox" id="add-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Do You want to delete It!</h3>
                    <p className="py-4">If you want to delete it press the confirm button and do you want to cancel it press the cancel button</p>
                    <div className="modal-action">
                        <button onClick={CancelHandle} htmlFor="add-delete-modal" className="btn btn-error ">Cancel</button>
                        <label onClick={() => productDelete(product)} className="btn btn-success">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDeleteModal;