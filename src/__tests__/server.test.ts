import request from 'supertest'
import server from '../server'

describe('GET /api', () => {
    it('should send back a json response', async () => {
        const res = await request(server).get('/api')
        expect(res.status).toBe(200)
        expect(res.headers['content-type']).toMatch(/json/)
        expect(res.body.msg).toBe('Desde Api')

        expect(res.status).not.toBe(404)
        expect(res.body.msg).not.toBe('desde api')
    })
})

/*describe('Nuestro primer test', () => {
    test('Debe revisar que 1 + 1 sean 2', () => {
        expect(1 + 1).toBe(2)
    })
})*/