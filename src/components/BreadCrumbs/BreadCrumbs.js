import React from 'react'

const Breadcrumbs = ({ categories }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-custom">
                <li key={'category-product'} className="breadcrumb-item">Productos</li>
                {
                    (categories.length) 
                    ?  categories.map((category, index) => <li key={index} className="breadcrumb-item">{category}</li>)
                    :  ''
                }
            </ol>
        </nav>
    )
}

export default Breadcrumbs;