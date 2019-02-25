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
            comments: ''
        }

    }

    componentDidMount() {
        this.props.getSeriesById(this.props.match.params.id)
    }

    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <section id="intro" className="intro-section">
                    <div className="container">
                        <div className="row">
                            <div className="bootstrap-iso">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <form method="post">
                                                <div className="form-group ">
                                                    <label className="control-label" >
                                                        Nome
                                                    </label>
                                                       <input type="text" className="form-control" id="name" name="name" value={(this.props.series.name) ? this.props.series.name : '' } onChange={this.handleChange('name')} />                                                    
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
        series: state.series.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSeriesById: (id) => dispatch(ActionsCreators.getSerieByIdRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSeries);
