import React, {useState, useEffect} from 'react'
import axios from "axios";
import './App.css';
import TweetContainer from './Components/TweetContainer'
import backgroundImage from './assets/twitterTest.jpg'

const App = () => {
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('')
    const [tweets, setTweets] = useState([])

    const fetchData = async (path) => {
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
              <h2>Find your Tweets</h2>
              <div>
                  <h3>Enter Username</h3>
                  <input
                    placeholder={'@'}
                    value={input}
                    type={'text'}
                    onChange={(e) => {
                        setInput(e.target.value)
                    }}
                  />
                  <button onClick={fetchData}>OK</button>

              </div>

                      {tweets.map(tweet => {
                          console.log(tweet)
                          return <TweetContainer
                              tweetData={tweet}
                              tweet={tweet.text}
                              screenName={tweet.user.screen_name}
                              name={tweet.user.name}
                              profilePic={tweet.user.profile_image_url}
                              verified={tweet.user.verified}
                              retweets={tweet.retweet_count}
                              likes={tweet.favorite_count}
                          />

                      })
                      }




              {loading && 'loading...'}
          </header>

      </div>
    );
}

export default App;
