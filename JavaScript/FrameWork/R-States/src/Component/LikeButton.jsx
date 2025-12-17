import React from 'react'
import { useState } from 'react'
const LikeButton = () => {
    const [isLike, setisLike] = useState(false)
    const [Click, setClick] = useState(0)
    function toggleLike() {
        setisLike(!isLike);
        setClick(Click+1)
    }
    let styles = {color : "red"}
    return (
        <div>
            <p>Clicked = {Click}</p>
            <p onClick={toggleLike}>
                {
                    !isLike ? <i className="fa-regular fa-heart"></i>
                        : <i className="fa-solid fa-heart"  style={styles}></i>
                }
            </p>
        </div>
    )
}

export default LikeButton