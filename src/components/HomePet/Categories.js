import React from "react"
import "./Home.css"
const Categories = () => {
  const data = [
    {
      cateName: "Chó Alaska",
    },
    {
        cateName: "Chó Alaska",
    },
    {
        cateName: "Chó Alaska",
    },
    {
        cateName: "Chó Alaska",
    },
    {
        cateName: "Chó Alaska",
    },
    {
        cateName: "Chó Alaska",
    },
    {
        cateName: "Chó Alaska",
    },
    {
        cateName: "Chó Alaska",
    },
    {
        cateName: "Chó Alaska",
    },
    {
        cateName: "Chó Alaska",
    },
    {
        cateName: "Chó Alaska",
    },
    
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
