import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spineer from './Spineer';
import PropTypes from 'prop-types'
export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "science"

  }

  static propTypes = {
    String: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalisefirstletter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    // console.log("i am news item there you are ");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalisefirstletter(this.props.category)} -NewsMonkey `;
  }


  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    console.log(url);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
  })
  }


  async componentDidMount() {
    this.updateNews();
  }

  handleprevClick = async () => {

    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  handlenextClick = async () => {
    this.setState({page: this.state.page +1});
    this.updateNews();
  }



  render() {
    return (
      <div className="container my-3" >

        <h1 className='text-center my-5 ' >NewsToday - Top Headlines on {this.capitalisefirstletter(this.props.category)} </h1>
        {this.state.loading && <Spineer />}

        <div className='row' >
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url} >
                <NewsItems title={element.title} description={element.title} imageurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
              </div>)
          })}

        </div>
        <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevClick} > &larr; Previous</button>
          <button disabled={this.props.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextClick} >Next &rarr;</button>

        </div>

      </div>
    )
  }
}

