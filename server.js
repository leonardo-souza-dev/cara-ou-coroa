const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const options = {
  definition: {
    info: {
      title: "cara ou coroa api",
      description: "cara ou coroa api"
    }
  }
}

app.get('/api', (req, res) => {
    let resultado = between(0,2);
    res.json(resultado == 1 ? { resultado: 'cara' } : { resultado: 'coroa' })
})

app.listen(port, () => {
    console.log(`app escutando na porta ${port}`);
})

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
