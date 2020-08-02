import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux';
// Statics
import styles from './heySisters.module.css'

class HeySisters extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedSis: null
        }
    }

    onSisterSelect = e => {
        this.setState({ selectedSis: e.target.value })
    }

    onButtonClick = () => {
        if (!!this.state.selectedSis) window.location.replace(window.location.href + this.state.selectedSis)
        else alert('Behena, select your name na first!')
    }

    render() {
        return <div className={styles.container}>
            <h1>Hey sisters!</h1>
            <hr />
            <div className={styles.whoAmI}>
                <p>Hey! This is</p>
                <select onChange={this.onSisterSelect}>
                    <option disabled selected>Whats you name?</option>
                    {Object.keys(this.props.sisters).map(sis => <option value={sis}>{sis}</option>)}
                </select>
            </div>
            <hr />
            <button onClick={this.onButtonClick}>Oh! Noice.</button>
            <img className={styles.bigRakhi} alt='Big rakhi' src='https://5ar59w.dm.files.1drv.com/y4mBQjlr6QRFmzCFlWEFEeISne5PI4EJgKb9VFqDN-N5tMgMlO5kknH0fvjRaa7XUwEE4uZDu-HsjgtQmgdX5-Xiz1rFYIXL3U4yEdNkBlzhgrtIBpgGZYWy0fbYrYBTppV32ye5xnfusYZWCeTUluPrto8nNtVTgObNE4C7TwMm6u0yRgI51qh09P-ZgKwrGzIMrYJiN0gYspnO_5vUXhIdg' />
        </div>
    }
}

const mapStateToProps = state => {
    return {
        sisters: state.sisters.sisters
    }
}

export default connect(mapStateToProps, null)(HeySisters)