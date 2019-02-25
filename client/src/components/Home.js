import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ActionsCreators from './../redux/actions/index'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.props.getGenres()
    }

    renderGenreLink(genre) {
        return (
            <span key={genre._id}> &nbsp;<Link to={`/series/${genre._id}`}>{genre.name}</Link>&nbsp;</span>
        )
    }

    render() {
        return (
            <div>
                <section id="intro" className="intro-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1><img src="images/logo.png" /></h1>
                                <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    {
                        this.props.isLoading && <span> Aguarde Carregando</span>
                    }
                    {
                        !this.props.isLoading && <div> Ver séries do gênero : {this.props.genres.map(this.renderGenreLink)}</div>
                    }
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        genres: state.genres.data,
        isLoading: state.genres.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGenres: () => dispatch(ActionsCreators.getGenreRequest())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)