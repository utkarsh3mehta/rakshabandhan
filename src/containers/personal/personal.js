import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
// Styles
import styles from './personal.module.css'
// Static

class Personal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: null,
            yob: 0,
            money: 500,
            personalMessage: null,
            havePhotos: false,
            rWorn: 0,
        }
    }

    componentDidMount() {
        this.setState(prevState => {
            return {
                name: this.props.match.params.name,
                yob: this.props.sisters[this.props.match.params.name].yob,
                money: prevState.money + (1996 - this.props.sisters[this.props.match.params.name].yob),
                giftPhoto: this.props.sisters[this.props.match.params.name].giftPhoto,
                personalMessage: this.props.sisters[this.props.match.params.name].personalMessage,
                havePhotos: !!this.props.sisters[this.props.match.params.name].gallery.length
            }
        })
    }

    onRakhiClick = () => {
        this.setState({ rWorn: 1 })
        setTimeout(() => this.setState({ rWorn: 2 }), 1000)
    }

    render() {
        if (!(this.props.match.params.name in this.props.sisters)) {
            window.location.replace((window.location.href).toString().split('#')[0])
        } else {
            return <div className={styles.container}>
                <button className={styles.goBack} onClick={() => this.props.history.goBack()}>Wrong sister?</button>
                {this.state.havePhotos
                    ? <a className={styles.gallery} href={window.location.href + '/gallery'}>Photo Gallery</a>
                    : null}
                <h1 className={styles.name}>Hey {this.state.name} {this.state.yob < 1994 ? 'di,' : ','}</h1>
                <div className={styles.rakhiContainer}>
                    {this.state.rWorn === 0
                        ? <div className={styles.rakhiImage}>
                            <img onClick={this.onRakhiClick} src="https://5ar59w.dm.files.1drv.com/y4mBQjlr6QRFmzCFlWEFEeISne5PI4EJgKb9VFqDN-N5tMgMlO5kknH0fvjRaa7XUwEE4uZDu-HsjgtQmgdX5-Xiz1rFYIXL3U4yEdNkBlzhgrtIBpgGZYWy0fbYrYBTppV32ye5xnfusYZWCeTUluPrto8nNtVTgObNE4C7TwMm6u0yRgI51qh09P-ZgKwrGzIMrYJiN0gYspnO_5vUXhIdg" alt="rakhi" />
                            <sub>Click on the rakhi to tie it to me</sub>
                        </div>
                        : this.state.rWorn === 1
                            ? <p className={styles.thanksForTieing}>Thanks!</p>
                            : <div style={{ display: "flex", flexDirection: "column" }}>
                                <img src="https://szzrvq.dm.files.1drv.com/y4m4m2fkE1s92UHuYZ9S8pNM77HNNMda_f9-6Hqjks6xmh1wqJfDuq7HrkTbWNVOPFPrR8Uj49ihEEErRJNjdxGNRxxG6Zrz6zGbF-GEE6u1FYY2JVcTZV61gQKpJfAjS8-2bUCIojPv2NraVsh51o2AcC0TqN5y04gR3BYVMg6AulMowL3AdHesgVB2adYrROoDyIvCxWjEnaIa2oUKkFUaQ" alt="rakhi hand" />
                                <sub>Thanks!</sub>
                            </div>}
                </div>
                <h2>{this.state.personalMessage}</h2>
                <sub>-- Your gift this year -- </sub>
                <img src={this.state.giftPhoto} alt="my personal gift to you.jpg" />
                <q>And because we can't meet because of this lockdown, I owe you Rs. {this.state.money} now!</q>
                <h1>Cheers!</h1>
            </div>
        }
    }
}

const mapStateToProps = state => {
    return {
        sisters: state.sisters.sisters,
    }
}

export default connect(mapStateToProps, null)(Personal)