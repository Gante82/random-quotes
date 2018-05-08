import React from 'react';
import Quote from './Quote';
import SocialButton from './SocialButton';
import NewQuoteButton from './NewQuoteButton';
import AuthorImage from './AuthorImage';
import SuperAgent from 'superagent';

class QuoteBox extends React.Component {
    imagePlaceHolder = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

    state = {
        quote: "The artist must create a spark before he can make a fire and before art is born," +
                " the artist must be ready to be consumed by the fire of his own creation.",
        author: "Auguste Rodin",
        imageUrl: this.imagePlaceHolder
    };

    sharedText = () => this.state.quote + " - " + this.state.author;

    updateRandomQuote = event => {
        event.preventDefault();
        SuperAgent
            .get('https://talaikis.com/api/quotes/random/')
            .then(res => {
                this.setState(res.body);
                this.updateAuthorImage(res.body.author);
            })
            .catch(err => {
                console.log(err);
            });
    };

    updateAuthorImage = author => {
        SuperAgent.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${author.replace(' ', '+')}&image_type=photo`).then(res => {
            let imageUrl = res.body.totalHits > 0 ? res.body.hits[0].webformatURL : this.imagePlaceHolder;
            this.setState({imageUrl});
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container text-justify">
                <div className="jumbotron bg-light">
                    <div className="row">
                        <div className="col-md-4">
                            <AuthorImage imgUrl={this.state.imageUrl} author={this.state.author}/>
                        </div>
                        <div className="col-md-6">
                            <Quote {...this.state}/>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4 offset-md-2">
                            <SocialButton
                                name="twitter"
                                shareUrl={`https://twitter.com/intent/tweet?text=${this.sharedText()}`}/>
                            <span className="mr-2"/>
                            <SocialButton
                                name="facebook"
                                shareUrl={`https://twitter.com/intent/tweet?text=${this.sharedText()}`}/>
                        </div>
                        <div className="col-md-4 col-8 text-right">
                            <NewQuoteButton onClick={this.updateRandomQuote}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuoteBox;