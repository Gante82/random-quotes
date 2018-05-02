import React from 'react';
import Quote from './Quote';
import SocialButton from './SocialButton';
import NewQuoteButton from './NewQuoteButton';
import SuperAgent from 'superagent';

class QuoteBox extends React.Component {
    state = {
        quote: "The artist must create a spark before he can make a fire and before art is born," +
                " the artist must be ready to be consumed by the fire of his own creation.",
        author: "Auguste Rodin"
    };

    sharedText = () => this.state.quote + " - " + this.state.author;

    getRandomQuote = event => {
        event.preventDefault();
        SuperAgent
            .get('https://talaikis.com/api/quotes/random/')
            .then(res => {
                this.setState(res.body);
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="container text-justify">
                <div className="jumbotron bg-light">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <Quote {...this.state}/>
                        </div>
                    </div>
                    <div className="row">
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
                            <NewQuoteButton onClick={this.getRandomQuote}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuoteBox;