import React, {Component} from 'react';
import {CssBaseline, withStyles} from '@material-ui/core';
import MyInfo from "./MyInfo";
import NameCard from "./NameCard";
import Education from "./Education";
import Credits from "./Credits";

const styles = {
    root: {
        padding: 50,
        fontFamily: 'Roboto',
        fontSize: 'calc(14px + 0.3vmax)'
    },
    infoBox: {
        marginBottom: '16px'
    }
};

class App extends Component {
    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={`container ${classes.root}`}>
                    <div className={'row'}>
                        <div className={`col-12 col-lg-3 ${classes.infoBox}`}>
                            <MyInfo/>
                        </div>
                        <div className={'col-12 col-lg-9'}>
                            <NameCard/>
                            <Education />
                        </div>
                    </div>
                    <div>
                      <Credits/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles) (App);
