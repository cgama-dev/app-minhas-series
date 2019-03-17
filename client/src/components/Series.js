import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ActionsCreators from './../redux/actions'

const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'towatch': 'Assistir'
}

class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            series: []
        }
    }

    componentDidMount() {
        this.props.getSeriesByGenre(this.props.match.params.genre)
    }

    deleteSeries = (id) => {
        // api.deleteSeries(id).then((resp) => {
        //     this.loadData()
        // })
    }
    renderSeries = (serie) => {
     
        return (
            <div key={serie._id} className="item  col-xs-4 col-lg-4">
                <div className="thumbnail">
                    <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                    <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                            {serie.name}</h4>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <p className="lead">{serie.genre.name} / {statuses[serie.status]}</p>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <Link className="btn btn-success" to={'/series-edit/' + serie._id}>Editar</Link>
                                <button type="button" className="btn btn-danger" onClick={() => this.deleteSeries(serie._id)}>Exluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                <section id="intro" className="intro-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <section> <h3> Séries </h3></section>
                                {this.props.isLoading &&
                                    <div className="alert alert-info">  Carregando, aguarde ... </div> 
                                }
                                {
                                    !this.props.isLoading && this.props.series.length === 0 &&
                                    <div className="alert alert-danger"> Nenhuma Série Cadastrada </div>
                                }
                                <div id="series" className="row list-group">
                                    {!this.props.isLoading &&
                                        this.props.series.map(this.renderSeries)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        series: state.series.data,
        isLoading: state.series.isLoading
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        getSeriesByGenre: (genre) => dispatch(ActionsCreators.getSerieByGenreRequest(genre))
    }
}


export default connect(mapStateToProps, mapDispacthToProps)(Series)