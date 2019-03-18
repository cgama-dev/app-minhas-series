import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Divider, Image, Label, Item, List, Container, Segment, Icon, Header } from 'semantic-ui-react'
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
            <List.Item key={genre._id}>
                <Item.Group >
                    <Item>
                    </Item>
                    <List.Content>
                        <Item.Image src={`images/${genre.name}.jpg`}size={'medium   '} />
                        <Header as='a' textAlign='center'>
                            <Link to={`/series/${genre._id}`}>{genre.name}</Link>
                        </Header>
                    </List.Content>
                </Item.Group>
            </List.Item>
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
                        !this.props.isLoading &&



                        <Container>
                            <Header as='h2'>
                                <Icon name='film' />
                                <Header.Content>Genêros: </Header.Content>
                            </Header>
                            <List horizontal size={'massive'} >
                                {this.props.genres.map(this.renderGenreLink)}
                            </List>
                        </Container>


                    }
                </section>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
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