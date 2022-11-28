import React from 'react';

const DeleteModal = ({ stateDelete, setSateDelete, refetch }) => {
    console.log(stateDelete)
    const deleteHandle = (id) => {
        fetch(`https://resale-market-server-side.vercel.app/orderProducts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSateDelete(null);
                    refetch();
                }
            })
    }

    const CancelHandle = () => {
        setSateDelete(null)
    }
    return (
        <div>

            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Do You want to delete It!</h3>
                    <p className="py-4">If you want to delete it press the confirm button and do you want to cancel it press the cancel button</p>
                    <div className="modal-action">
                        <button onClick={CancelHandle} htmlFor="delete-modal" className="btn btn-error ">Cancel</button>
                        <label onClick={() => deleteHandle(stateDelete._id)} className="btn btn-success">Confirm</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;