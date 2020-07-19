import { Request, Response } from 'express'

import EmailService from '../services/EmailService'

const users = [
    { name: 'Usuario 1', email: 'user 1@email1.com' },
    { name: 'Usuario 2', email: 'user 2@email2.com' },
    { name: 'Usuario 3', email: 'user 3@email3.com' },
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
            to: { name: 'User', email: 'user@email.com' },
            message: { subject: 'Bem vindo ao sistema', body: '' },
        })

        return res.send()
    },
}
