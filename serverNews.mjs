import express from 'express'
const app = express()
import fetch from 'node-fetch'
import cors from 'cors'
import xml2js from 'xml2js'

app.use(cors());
app.get('/', async (req, res) => {
    const response = await fetch('http://feeds.feedburner.com/TheHackersNews')
    const xml = await response.text()

    xml2js.parseString(xml, (err, result) => {
        if (err) {
            return res.status(500).send('Failed to parse XML')
        }

        const items = result.rss.channel[0].item
        const carouselItems = items.map((item, index) => `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="container">
              <h1 class="news_taital" style = "color: red"><a href="${item.link}">${item.title}</a></h1>
              <p>${item.pubDate}</p>
            </div>
          </div>
        `)


        res.send(`
            <div class="news_section">
              <div id="main_slider" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  ${carouselItems.join('')}
                </div>
              </div>
            </div>
        `)
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})
