import prisma from '../../prisma'

export default async function handle(req, res) {
	switch (req.method) {
		case 'GET': {
			const users = await prisma.user.findMany()
			res.json(users)
		}
	}
}
