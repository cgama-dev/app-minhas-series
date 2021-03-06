import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ActionsCreators from './../redux/actions'
import { Image, Loader, Segment } from 'semantic-ui-react'

import { uploadPhotoSerie } from './../services/api'

class NewSeries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            photo: '',
            name: '',
            status: '',
            genre: '',
            comments: '',
            loading: null,
            redirect: false
        }

    }

    componentDidMount() {
        this.props.getGenres()
    }

    renderGenreLink(genre) {
        return (
            <span>&nbsp;<a href="">{genre}</a>&nbsp;</span>
        )
    }

    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }

    handleSaveSeries = () => {
        const { photo, name, status, genre, comments } = this.state
        this.props.saveSeries({
            photo,
            name,
            status,
            genre,
            comments
        })
    }

    onSelectFile = async e => {
        if (e.target.files && e.target.files.length > 0) {
            e.preventDefault();
            const file = e.target.files[0]

            this.setState({ loading: true })

            const url = await uploadPhotoSerie(file)

            this.setState({ photo: url, loading: false })

        }
    }

    render() {
        const statuses = {
            'watched': 'Assistido',
            'watching': 'Assistindo',
            'towatch': 'Assistir'
        }

        return (
            <div>
                {this.props.saved &&
                    <Redirect to={`/series/${this.props.serie.genre}`} />
                }
                <section id="intro" className="intro-section">
                    <div className="container">
                        <div className="row">
                            <div className="bootstrap-iso">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <form method="post">
                                                <div className="form-group ">
                                                    <label className="control-label">Foto

                                                    </label>

                                                    <input type="file" name='file' onChange={this.onSelectFile} />
                                                    {
                                                        this.state.loading &&
                                                        <Segment>
                                                            <Loader size='medium' active >Enviado imagem ...</Loader>
                                                        </Segment>

                                                    }
                                                    <br />
                                                    {this.state.photo &&
                                                        <Image src={this.state.photo} size='medium' disabled />
                                                    }

                                                </div>
                                                <div className="form-group ">
                                                    <label className="control-label" >
                                                        Nome
                                                    </label>
                                                    <input className="form-control" id="name" type="text" value={this.state.name} onChange={this.handleChange('name')} />
                                                </div>
                                                <div className="form-group ">
                                                    <label className="control-label " >
                                                        Status
                                        </label>
                                                    <select className="form-control" value={this.state.status} onChange={this.handleChange('status')}>
                                                        {Object.keys(statuses).map(key => <option key={key} value={key}>{statuses[key]}</option>)}
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label " >
                                                        Género
                                        </label>

                                                    <select className="form-control" value={this.state.genre} onChange={this.handleChange('genre')}>
                                                        {this.props.genres.map(key => <option key={key._id} value={key._id}>{key.name}</option>)}
                                                    </select>
                                                </div>

                                                <div className="form-group ">
                                                    <label className="control-label" >
                                                        Comentarios
                                        </label>
                                                    <textarea className="form-control" cols="40" id="message" rows="10" value={this.state.comments} onChange={this.handleChange('comments')}></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <div>
                                                        <button className="btn btn-primary " type="button" onClick={() => this.handleSaveSeries()}>
                                                            Salvar
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

const mapStateToProps = state => ({
    genres: state.genres.data,
    saved: state.series.saved,
    serie: state.series.data[0]
});

const mapDispatchToProps = dispatch => {
    return {
        getGenres: () => dispatch(ActionsCreators.getGenreRequest()),
        saveSeries: (serie) => dispatch(ActionsCreators.createSerieRequest(serie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSeries)