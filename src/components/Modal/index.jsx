import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";


function Modal({children,setOpenModal,openModal}){
    return ReactDom.createPortal(        

            <div className="ModalBackground" onClick={()=>setOpenModal(!openModal)}>
              {children}
            </div>,

        document.getElementById('modal')
    );

}

export {Modal}