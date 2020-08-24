import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../../app.js'
import mocha from 'mocha'

chai.use(chaiHttp)
chai.should()

mocha.describe('Test user API', () => {
    mocha.describe('GET /users', () => {
        it('should get all users record', (done) => {
            chai.request(app)
                .get('/')
                .query({ limit: 10 })
                .end((err, res) => {
                    if (err) {
                        console.error(err)
                    }

                    res.should.have.status(404)
                    done()
                })
        })
        it('should get a single user record', (done) => {
            const id = 1
            chai.request(app)
                .get(`/users/${id}`)
                .end((err, res) => {
                    if (err) {
                        console.error(err)
                    }

                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })

        mocha.it('should not get a single student record', (done) => {
            const id = 5
            chai.request(app)
                .get(`/users/${id}`)
                .end((err, res) => {
                    if (err) {
                        console.error(err)
                    }

                    chai.expect(res).to.be.status(404)
                    done()
                })
        })
    })
})
