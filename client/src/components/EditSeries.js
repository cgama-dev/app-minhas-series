import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ActionsCreators from './../redux/actions'
import { connect } from 'react-redux'

class EditSeries extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            status: '',
            genre: '',
            comments: '',
            genres: [],
            redirect: null
        }

    }

    componentDidMount() {
        this.props.getSeriesById(this.props.match.params.id)
        this.props.getGenres()

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.series !== this.props.series) {
            const { name, status, genre, comments } = this.props.series
            this.setState({ name, status, genre: genre._id, comments})
        }

        if (prevProps.genres !== this.props.genres) {
            const genres = this.props.genres
            this.setState({ genres })
        }
    }

    handleUpdateSerie = () => {
        const { name, status, genre, comments } = this.state
        console.log(this.state.genre)
        this.props.updateSeries(this.props.match.params.id, {
            name, status, genre, comments
        })

    }

    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }

    render() {
        const statuses = {
            'watched': 'Assistido',
            'watching': 'Assistindo',
            'towatch': 'Assistir'
        }
        if (this.state.redirect) {
            console.log(this.state.genre)
            return <Redirect to={`/series/${this.state.genre}`} />
        }
        return (
            <div>
                <section id="intro" className="intro-section">
                    <div className="container">
                        <div className="row">
                            {
                                this.props.isSaving &&
                                <div className="alert alert-info">  Salvando, série </div>
                            }
                            {
                                this.props.saved &&
                                <div className="alert alert-success ">  Série salva com sucesso </div>
                            }
                            <div className="bootstrap-iso">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <form method="post">
                                                <div className="form-group ">
                                                    <label className="control-label" >
                                                        Nome
                                                    </label>
                                                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange('name')} />
                                                </div>

                                                <div className="form-group ">
                                                    <label className="control-label ">
                                                        Status
                                                    </label>
                                                    <select className="form-control" value={this.state.status} onChange={this.handleChange('status')}>
                                                        {Object.keys(statuses).map(key => <option key={key} value={key}>{statuses[key]}</option>)}
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label className="control-label ">
                                                        Género
                                                    </label>
                                                    <select className="form-control" value={this.state.genre} onChange={this.handleChange('genre')}>
                                                        {this.state.genres.map(key => <option key={key._id} value={key._id} >{key.name}</option>)}
                                                    </select>
                                                </div>
                                                <div className="form-group ">
                                                    <label className="control-label " >
                                                        Comentarios
                                                    </label>
                                                    <textarea className="form-control" value={this.state.comments} cols="40" id="comments" name="comments" rows="10" onChange={this.handleChange('comments')}></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <div>
                                                        <button className="btn btn-primary " type="button" onClick={() => this.handleUpdateSerie()}>
                                                            Atualizar
                                                    </button>
                                                        <button className="btn btn-danger " type="button" onClick={() => this.setState({ redirect: true })}>
                                                            Voltar
                                                    </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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
        series: state.series.data[0],
        isSaving: state.series.isSaving,
        saved: state.series.saved,
        genres: state.genres.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSeriesById: (id) => dispatch(ActionsCreators.getSerieByIdRequest(id)),
        getGenres: () => dispatch(ActionsCreators.getGenreRequest()),
        updateSeries: (id, data) => dispatch(ActionsCreators.updateSerieRequest(id, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSeries);
