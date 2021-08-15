import react, { Component } from 'react';

class Copyright extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright © Your Website 2021</small></div>
            </div>
        )
    }
}

export default Copyright;