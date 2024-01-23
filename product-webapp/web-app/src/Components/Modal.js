import React from 'react';

const Modal = ({onClickModalDelete, onClickModalCancel}) => {
    return (
        <div className="backdropp">
            <div className='modall'>
                        <h3>Delete comment</h3>
                    <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone</p> 
                    <div className="buttons">
                    <button className='btn btn-cancel' onClick={onClickModalCancel}>NO, CANCEL</button>
                    <button className='btn btn-delete' onClick={onClickModalDelete}>YES, DELETE</button>
                    </div>
                    </div>
        </div>
    );
};

export default Modal;