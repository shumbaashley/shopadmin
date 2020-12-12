import React, {Fragment} from 'react'

const Loader = () => {
    return (
        <Fragment>
            <div class="spinner-border text-primary" style={{"width": "3rem", "height": "3rem;"}} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </Fragment>
    )
}

export default Loader
