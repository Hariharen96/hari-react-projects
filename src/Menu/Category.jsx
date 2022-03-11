import React from 'react'

const Category = ({filterItems,Categorys}) => {
    return (
        <div className="btn-group">
            {Categorys.map((categories,index)=>{
                return(
                    <button type="button" key={index} className="bnt btn-primary" onClick={()=>filterItems(categories)}>
                        {categories}
                    </button>
                )
            })}
        </div>
    )
}

export default Category
