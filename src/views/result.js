import React, { Component } from 'react'
import styled from 'styled-components'

class Result extends Component {
    render() {
        const { items } = this.props
        if (Array.isArray(items) && items.length) {
            return (
                <TableWrapper>
                    <Head>
                        <Item>INTERESSE</Item>
                        <Size>PÚBLICO</Size>
                        <Item>CATEGORIA</Item>
                    </Head>
                    {items.map((item, i) => (
                        <Body key={i}>
                            <Item>{item.name}</Item>
                            <Size>
                                {new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(item.audience_size)}
                            </Size>
                            <Item>
                                {item.path.join(', ')}
                                <Hide>
                                    {item.topic}
                                </Hide>
                            </Item>
                        </Body>
                    ))}
                </TableWrapper>
            )
        } else {
            return null;
        }
    }
}

const TableWrapper = styled.div`
    width: 70%;
    margin: 40px 0 80px 0;
    background: #fff;
    color: #a3a3a3;
    box-shadow: 0 6px 14px 0 rgba(0,0,0,0.1);
    cursor: text;
`

const Head = styled.div`
    background: #f9fbfd;
    color: #8b949d;
    padding: 6px 10px;
    border-bottom: 1px solid #f1f2f4;
    display: flex;
`

const Item = styled.div`
    width: 40%;
    padding:10px;
    &:last-child{
        width: 40%;
    }
`

const Size = styled.div`
    width: 20%;
    padding:10px;
`

const Body = styled.div`
    width: 100%;
    display: flex;
    background: #fff;
    color: #a3a3a3;
    border: 1px solid #f1f2f4;
    padding: 5px 8px;
    cursor: text;
`

const Hide = styled.div`
    display: none;
`

export default Result
