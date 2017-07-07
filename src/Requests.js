import React from 'react'

import './Requests.css'

const Requests = () => {
    return (
        <div className="requests">
            <div className="">
                <input type="text" name="" placeHolder="Have a request?" />
                <button
                type="button"
                name="button"
                className="success button"
                >
                    Submit
                </button>
            </div>
            <ul>

            </ul>
        </div>
    )
}

export default Requests
