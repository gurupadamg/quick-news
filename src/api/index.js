import axios from 'axios'

const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=6f824eaa93c3443e918562266bddee8a'

export const fetchLatestNews = async () => {
    try{
        const {data} = await axios.get(url)
        return data.articles
    }catch(err){
        console.log(err.message)
    }
    
}