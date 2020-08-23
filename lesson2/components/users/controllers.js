import httpErros from '../../common/errors/httpErros.js'

export default class UserController {
    // constructor () {
    // }

    async listUser (req, res, next) {
        try {
            throw new httpErros.NotFoundError('Error')
            // res.json({
            //     results: [
            //         {
            //             id: 1,
            //             name: 'minh'
            //         },
            //         {
            //             id: 2,
            //             name: 'ha'
            //         }
            //     ]
            // });
        } catch (e) {
            next(e)
        }
    }

    async retrieveUser (req, res, next) {
        try {
            res.json(
                {
                    id: req.params.id,
                    name: 'ha'
                }
            )
        } catch (e) {
            next(e)
        }
    }
}
