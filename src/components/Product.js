// Code Product Component Here
import React, { PropTypes } from 'react'

class Product extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: checkWeight
}

function checkColor(props, propName, componentName){
  let colorsArr = ['white', 'eggshell-white', 'salmon']
  if (!props.color){
    return new Error("must have a color")
  }
  if (!colorsArr.includes(props.color)){
    return new Error("color must be on of 'white', 'eggshell-white', or 'salmon'")
  }
}

function checkWeight(props, propName, componentName){
  if (!props.weight){
    return new Error("must have weight")
  }
  if (typeof(props.weight) != "number"){
    return new Error("weight must be a number")
  }
  if (props.weight < 80 || props.weight > 300){
    return new Error("weight must be between 80 and 300")
  }
}

export default Product;
