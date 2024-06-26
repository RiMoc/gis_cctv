const express = require("express")

const app = express()
const port = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NSW01</title>
        <style>
        html, body { 
          margin: 0;
          padding: 0;
        }
        </style>
    </head>
    <body>
    <script src="https://bradmax.com/client/files/player-js/73a9716fd26717763cd2d46fb9e41463645853de_14815/bradmax_player.js" ></script>
    
    <div style="width: 100dvw; height: 100dvh; background: black" id="PLAYER_DOM_ID"></div>
    
    <script type="text/javascript">

            var config = {
              autoplay: true,
              mute: true,
              fullscreenEnabled: true,
              dataProvider: {
                  source: [ 
                      { url: 'https://streaming.noc.nakhoncity.org/live/NSW01.m3u8' }
                  ]
              }
          };
    
          var element = document.getElementById("PLAYER_DOM_ID");
          var player = window.bradmax.player.create(element, config);
        
    </script>
    </body>
    </html>
    `)

})
app.get('/:code', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${req.params.code}</title>
        <style>
        html, body { 
          margin: 0;
          padding: 0;
        }
        </style>
    </head>
    <body>
    <script src="https://bradmax.com/client/files/player-js/73a9716fd26717763cd2d46fb9e41463645853de_14815/bradmax_player.js" ></script>
    
    <div style="width: 100dvw; height: 100dvh; background: black" id="PLAYER_DOM_ID"></div>
    
    <script type="text/javascript">

            var config = {
              autoplay: true,
              mute: true,
              fullscreenEnabled: true,
              dataProvider: {
                  source: [ 
                      { url: 'https://streaming.noc.nakhoncity.org/live/${req.params.code}.m3u8' }
                  ]
              }
          };
    
          var element = document.getElementById("PLAYER_DOM_ID");
          var player = window.bradmax.player.create(element, config);
        
    </script>
    </body>
    </html>
    `)
})

app.listen(port, () => console.log(`\x1b[36m[ INFO ]\x1b[0m Server is Running !`))
module.exports = app