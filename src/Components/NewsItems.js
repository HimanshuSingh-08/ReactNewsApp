import React, { Component } from 'react'


export default class NewsItems extends Component {


    render() {
        let { title, description, imageurl, url ,author , date } = this.props;
        let d = new Date(date).toUTCString();

       // console.log(title , description , imageurl , url);
        return (
            <div>

                <div className="card my-3" style={{ width: "18rem" }}>

                    <img height="200px" width="100px" src={this.props.imageurl} className="card-img-top" alt="..." />


                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p className="card-text"><small className="text-muted"> By {!author?"Unknown":author } Last updated at {d}</small></p>
                        <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-dark"> Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}




