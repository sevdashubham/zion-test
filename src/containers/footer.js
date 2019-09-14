import React from "react";


class Footer extends React.Component {

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
            <div style={styles.footerContainer}>
                footer
            </div>
        );
    }

};

const styles = {
    footerContainer: {
        position: 'fixed',
        bottom: 0
    }
};

export default Footer;
