import React from 'react';
import './index.css'
import verifiedImage from '../../assets/Twitter_Verified_Badge.svg'

const TweetContainer = ({
                            tweet,
                            screenName,
                            profilePic,
                            verified,
                            name,
                            retweets,
                            tweetData,
                            likes
                        }) => {

    console.log(tweetData)

    if(!tweetData){
        return (<div> 'Please enter another user</div>)
    }


    return (

        <div className={'div-tweet'}>
            <div className={'tweet-header'}>
                <img src={profilePic} alt={'profile_pic'}/>
                <div className={'screen-name'}>
                    <div className={'names'}>
                        <h4>{name}</h4>
                    </div>
                    <div>
                        <h6>{screenName}</h6>
                    </div>
                </div>
                <div className={'verified'}>
                    {verified === true ? <img src={verifiedImage} alt={'verified'}/> : null}
                </div>
            </div>
            <div>
                <p>{tweet}</p>
            </div>
            <hr/>
            <div className={'tweet-info'}>

              <p>{retweets} Retweets</p>
                <p>{likes} Likes</p>
            </div>


        </div>


    )

}

export default TweetContainer