import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
// Components
import Image from '../../components/image/image'
// Static
import styles from './gallery.module.css'

class Gallery extends Component {
    render() {
        return <div className={styles.container}>
            <button className={styles.goBack} onClick={() => this.props.history.goBack()}>&lt; Go back</button>
            <h1>Photos we share</h1>
            <div className={styles.photos}>
                {this.props.sisters[this.props.match.params.name].gallery.map(img => <Image path={img.path} description={img.description} />)}
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        sisters: state.sisters.sisters,
    }
}

export default connect(mapStateToProps, null)(Gallery)