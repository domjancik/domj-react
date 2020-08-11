import React, { PureComponent } from 'react'
import Footer from '../../components/Layout/Footer/Footer'

class Layout extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout