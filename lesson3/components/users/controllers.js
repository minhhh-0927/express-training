import httpErros from '../../common/errors/httpErros.js'

export default class UserController {
    // constructor () {
    // }

    async listUser (req, res, next) {
        try {
            if (req.query.limit !== '10') {
                throw new httpErros.NotFoundError('Limit must be 10')
            }
            res.json({
                results: [
                    {
                        id: 1,
                        name: 'minh'
                    },
                    {
                        id: 2,
                        name: 'ha'
                    }
                ]
            })
        } catch (e) {
            next(e)
        }
    }

    async retrieveUser (req, res, next) {
        try {
            if (parseInt(req.params.id) === 5) {
                throw new httpErros.NotFoundError('User id not found')
            }
            res.json({
                id: req.params.id,
                name: 'ha'
            })
        } catch (e) {
            next(e)
        }
    }
}
