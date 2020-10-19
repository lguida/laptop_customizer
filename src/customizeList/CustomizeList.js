import React from 'react'
import './CustomizeList.css'
import ListOptions from '../ListOptions/ListOptions'

class CustomizeLists extends React.Component{
    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return (
                <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                <ListOptions 
                    features={this.props.features}
                    feature={feature} 
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    updateFeature={this.props.updateFeature}/>
                </fieldset>
            );
            
        });
      
        return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )}

}

export default CustomizeLists