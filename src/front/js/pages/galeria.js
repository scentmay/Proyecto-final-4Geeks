import React from 'react'

export const Galeria = () => {
    return (
        <>
            <div className='py-5'>
                <h2> Galeria de imagenes</h2>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />

                    <img
                        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />

                    <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />  
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />

                    <img
                        src="https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>
            </div>
            <hr />
        </>
    )
}
