import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import { media } from '../utils/styles.utils'
import Result from './result'
import axios from 'axios'

const url = 'https://graph.facebook.com/search'
class Views extends Component {
    constructor(props) {
        super(props)
        this.search = this.search.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            formData: {}
        }
    }

    search(ev) {
        ev.preventDefault()
        const { formData } = this.state
        axios.get(`${url}?type=adinterest&limit=10000&locale=pt_BR&access_token=1203971506441286|5NQz040dGDRgaWRIE2dLZz7JpWU&q=[${formData.search}]`).then(res => {
            if (res.data.data) {
                this.setState({
                    items: res.data.data
                })
            } else {
                this.setState({
                    items: []
                })
            }
        })
    }

    handleChange(ev) {
        const { formData } = this.state
        const { target } = ev
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            formData: Object.assign({}, formData, { [target.name]: value })
        })
    }

    render() {
        const { items } = this.state
        return (
        <Fragment>
            <Navbar />
            <Wrapper>
                <Container>
                    <Form onSubmit={this.search}>
                        <input type="text" name="search" placeholder="Preencha um interesse para começar explorar..." onChange={this.handleChange} />
                        <Button type="submit">
                            Explorar
                        </Button>
                    </Form>
                        {items && 
                            <Count>
                                {items.length} interesses encontrados
                            </Count>
                        }
                    <Result items={items} />
                </Container>
            </Wrapper>
        </Fragment>
    )
  }
}

const Count = styled.div`
    display: flex;
    font-size: 22px;
    justify-content: start;
    width: 70%;
    margin-top: 30px;
    color: #a3a3a3;
`

const Wrapper = styled.div`
  height: auto;
  padding-top: 120px;
`

const Container = styled.section`
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  ${media.wide`
    margin: 0 auto;
    padding: 0;
    width: 1180px;
  `}
`

const Form = styled.form`
  width: 70%;
  display: flex;
  input {
    width: 100%;
    background: #fff;
    color: #a3a3a3;
    font: inherit;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border: 0;
    outline: 0;
    padding: 22px 18px;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textfield;
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
  }
`

const Button = styled.button`
    background: #0fcfae;
    font-size: 18px;
    color: #fff;
    box-shadow: 0 6px 14px 0 rgba(0,0,0,0.1);
    border-radius: 2px;
    padding: 12px 36px;
    display: inline-block;
    border: 0;
    outline: 0;
    transition: all 200ms ease-in;
    cursor: pointer;
    -webkit-appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    text-align: center;
    align-items: flex-start;
    box-sizing: border-box;
    margin: 0em;
`

export default Views
