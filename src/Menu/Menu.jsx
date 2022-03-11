import React, { useState } from 'react'
import Category from './Category'
import menu from './menuData'
import MenuItems from './MenuItems'

const allCategories = ['all',...new Set(menu.map((menus)=>menus.category))]
console.log(allCategories)

const Menu = () => {
    const [data,setData] = useState(menu)
    const [Categorys,setCategorys] = useState(allCategories)

    const filterItems = (category) => {
        if(category === 'all'){
            setData(menu)
            return
        }
        const newItems = menu.filter((items)=> items.category === category)
        setData(newItems)
    }
    return (
        <section className="container text-center">
            <h3 className="display-4">Menu</h3>
            <Category filterItems={filterItems} Categorys={Categorys} />
            <MenuItems data={data} />
        </section>
    )
}

export default Menu
