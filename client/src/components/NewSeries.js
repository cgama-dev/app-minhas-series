import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'towatch': 'Assistir'
}

class NewSeries extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          genres :[],
          isLoading: false,
          redirect: false
        }

        this.saveSeries = this.saveSeries.bind(this)
    }

    componentDidMount(){
        this.setState({isLoading:true});
        // api.loadGenres().then((res) => {
        //     this.setState({
        //       isLoading:false,
        //       genres:res.data
        //     })
        // })
      }
    
    renderGenreLink(genre){
        return(
            <span>&nbsp;<a href="">{genre}</a>&nbsp;</span>
        )
    }

    saveSeries(){
        const NewSeries = {
            name: this.refs.name.value,
            status: this.refs.status.value,
            genre: this.refs.genre.value,
            comments: this.refs.comments.value

        }

        // api.saveSeries(NewSeries).then((res)=> {
        //     this.setState({
        //         redirect: '/series/'+this.refs.genre.value
        //     })
        // })
    }

    render(){
        return(
            <div>
                { this.state.redirect &&
                    <Redirect to={this.state.redirect} />
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
                                        <label className="control-label " for="name">
                                        Nome
                                        </label>
                                        <input className="form-control" ref="name" id="name" name="name" type="text"/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="control-label "  for="name">
                                        Status
                                        </label>
                                        <select className="form-control" ref="status">
                                            {Object.keys(statuses).map(key => <option  key={key} value={key}>{statuses[key]}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label " for="name">
                                        Género
                                        </label>
                                        
                                        <select  className="form-control" ref="genre">
                                            {this.state.genres.map(key => <option key={key} value={key}>{key}</option>)}
                                        </select>
                                    </div>

                                    <div className="form-group ">
                                        <label className="control-label " for="message">
                                        Comentarios
                                        </label>
                                        <textarea className="form-control" ref="comments" cols="40" id="message" name="message" rows="10"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <div>
                                            <button className="btn btn-primary "type="button" onClick={this.saveSeries}>
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



export default NewSeries;