import React from 'react'

// build breadcrumbs. Home will be always displayed as 'Productos'
const Breadcrumbs = ({ categories }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumb-custom">
                <li key={'category-product'} className="breadcrumb-item">Productos</li>
                {
                    (categories && categories.length > 0) 
                    ?  categories.map((category, index) => <li key={index} className="breadcrumb-item">{category}</li>)
                    :  ''
                }
            </ol>
        </nav>
    )
}

export default Breadcrumbs;