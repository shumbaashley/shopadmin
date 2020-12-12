import React, {Fragment} from 'react'

const Loader = () => {
    return (
        <Fragment>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Loader
