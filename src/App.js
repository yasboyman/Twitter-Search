import React, {useState, useEffect} from 'react'
import axios from "axios";
import './App.css';
import TweetContainer from './Components/TweetContainer'
import twitterLogo from './assets/Twitter-Logo.png'

const App = () => {
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('')
    const [tweets, setTweets] = useState([])


    console.log('asdasdasdad', tweets.length === 0)

    const fetchData = async (path) => {
        path.preventDefault()
        try {
            setLoading(true)
            const response = await axios.get(`http://localhost:8000/tweets?user=${input}`)
            setLoading(false)
            setTweets(response.data)
        } catch (e) {
            setLoading(false)
            console.log('error: ', e)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <nav className={'nav'}>
                    <p>Twitter API<img src={twitterLogo} alt={'twitter'}/>
                    </p>
                    <hr/>
                </nav>
                <h2>Find the last 10 Tweets</h2>
                <div className={'input'}>
                    <form>
                        <input
                            placeholder={'@'}
                            value={input}
                            type={'text'}
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
                            onSubmit={() => fetchData}
                        />
                        <button onClick={fetchData}>OK</button>
                    </form>
                </div>
                <div className={'tweet-parent'}>
                    {tweets.length === 0 ? 'User not found, Please try another' :
                        tweets.map((tweet, index) => {
                            if (index <= 9) {
                                return <TweetContainer
                                    tweetData={tweet}
                                    tweet={tweet.text}
                                    screenName={tweet.user.screen_name}
                                    name={tweet.user.name}
                                    profilePic={tweet.user.profile_image_url}
                                    verified={tweet.user.verified}
                                    retweets={tweet.favorite_count}
                                    likes={tweet.favorite_count}
                                />
                            }
                        })
                    }

                </div>
                {loading && 'loading...'}
            </header>
        </div>
    );
}

export default App;
