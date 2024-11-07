const axios = require('axios')
const cron = require('node-cron') 

async function fetchArticles() {
  try {
    const response = await axios.get('https://dev.to/api/articles') 
    const articles = response.data 

    console.log('Derniers articles sur Dev.to :')

    articles.forEach(article => {
      if (article.tags.includes('frontend') || article.tags.includes('vue') || article.tags.includes('cesium')) {
        console.log(`- ${article.title} (${article.url})`) 
      }
    }) 
  } catch (error) {
    console.error('Erreur lors de la récupération des articles :', error) 
  }
}

//9h
cron.schedule('0 9 * * *', fetchArticles)
fetchArticles()
