
import React from "react"
import Slider from "~c/Slider/Slider"

class SliderContainer extends React.Component {
	constructor (props) {
		super(props);
	}
    state = {
		activeNum: 0,
		flag: false
    }

	componentDidMount() {
		this.autoplay()
	}

    autoplay = () => setInterval(() => {
		this.next();
	}, 9000);

    next = () => {
		this.setState((prevState) => {
			if (prevState.activeNum < this.props.content.length - 1)
			return {
				activeNum: prevState.activeNum + 1,
				flag: true
				}			
			else return {activeNum: 0}		
		})
	}

    render(){       
        const items = this.props.content.map((item, i) => {
			let element = {};
			let type;
			if (this.state.flag === false && i === 0) {
				type = 'itemFirst'
			}
			else if (i === this.state.activeNum){
				type = 'itemActive'
			} 	
			else {type = 'item'}
			element.content = item;
			element.type = type;
			return element
		})
		

        return(
            <Slider items = {items} />
        )
    }
}

export default SliderContainer





	 


