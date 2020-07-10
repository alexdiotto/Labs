import React, { PureComponent, Fragment } from 'react'
import {
    TopSpace,
    Wrapper,
    Container
} from './navbar.styles'
import Logo from '../logo'

class Navbar extends PureComponent {
    updateWindowDimensions = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    render() {
        return (
            <Fragment>
                <TopSpace />
                <Wrapper>
                    <Container>
                        <Logo />
                    </Container>
                </Wrapper>
            </Fragment>
        )
    }
}

export default Navbar
