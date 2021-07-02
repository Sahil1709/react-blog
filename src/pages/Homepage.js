import React from 'react'
import MyCard from '../components/MyCard'

export default function Homepage() {
    return (
        <div className="container">
            <h1 className="text-center">Blogs</h1>
            <div className="row" style={
                {
                display:'flex',
                justifyContent:'space-between'
                }
            }>
            <MyCard/>
            <MyCard/>
            <MyCard/>
            <MyCard/>
            <MyCard/>
            <MyCard/>
            </div> 
        </div>
    )
}
