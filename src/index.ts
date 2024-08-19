import colors from 'colors'
import server from './server'

const port = process.env.PORT || 4001
server.listen(4001, () => {
    console.log(colors.cyan.bold(`REST API en el puerto ${port}`))
})