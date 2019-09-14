import React from "react";

class PhotoGrid extends React.Component {

    state = {
        text: 'Amazing Looks',
        step: 1,
        isRender: true
    };

    handleChange = this.handleChange.bind(this);

    handleChange(step) {
        setTimeout(() => {
            this.setState({isRender: false});
            switch (step) {
                case 0:
                    console.log(step);
                    this.setState({text: 'Amazing Looks', step: 1, isRender: true});
                    break;
                case 1:
                    console.log(step);
                    this.setState({text: 'Designer Clothes', step: 2, isRender: true});
                    break;
                case 2:
                    this.setState({text: 'Top Boutiques', step: 0, isRender: true});
                    break;
            }
        }, 3000);

    }

    render() {
        const {step, text, isRender} = this.state;

        return (
            <div>
                photogrid
            </div>
        );
    }

};

const styles = {
    imageContainer: {
        position: "relative",
        width: "100%"
    }, text: {
        zIndex: 2,
        position: 'absolute',
        width: '50%',
        top: window.innerWidth < 600 ? '5%' : '20%',
        height: '100%',
        right: 0,
        textAlign: "center",
        color: "white"
    },
};
export default PhotoGrid;
