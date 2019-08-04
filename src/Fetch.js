import axios from 'axios';
export function fetchFirst(subreddit){
       // Remove the 'www.' to cause a CORS error (and see the error state)
    return  axios.get('http://www.reddit.com/r/' + subreddit + '.json');   
}
    