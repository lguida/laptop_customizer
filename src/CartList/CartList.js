import React from 'react'
import './CartList.css'
import Total from '../Total/Total'
import CartItems from '../CartItems/CartItems'

class CartList extends React.Component{
    render(){
        return(
        <section className="main__summary">
            <CartItems 
                selected={this.props.selected}
                USCurrencyFormat={this.props.USCurrencyFormat} />
            <Total 
                selected={this.props.selected}
                USCurrencyFormat={this.props.USCurrencyFormat} />
        </section>
    )}

}

export default CartList
