import React from 'react'
export default Map

function Map() {
    return (
        <div>
            <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13938.580799278632!2d75.72550784999997!3d29.145653699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1717820700421!5m2!1sen!2sin" width="600"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}