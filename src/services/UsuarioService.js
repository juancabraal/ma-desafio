export function getAll() {
	return new Promise(resolve =>
		setTimeout(
			() =>
				resolve([
					{
						id: 6,
						usuario: 'ANPINA',
						email: 'antonio.pina@g.globo',
						created_at: '2019-05-28',
						updated_at: '2019-05-30',
						rule: '01',
						status: 1
					},
					{
						id: 5,
						usuario: 'CCHANG',
						email: 'ciro.chang@g.globo',
						created_at: '2019-05-28',
						updated_at: '2019-05-30',
						rule: '01',
						status: 1
					},
					{
						id: 4,
						usuario: 'TMARCAL',
						email: 'thiago.marcal@g.globo',
						created_at: '2019-05-28',
						updated_at: '2019-05-30',
						rule: '01',
						status: 1
					},
					{
						id: 3,
						usuario: 'ECGIANN',
						email: 'ecgianotto@g.globo',
						created_at: '2019-05-28',
						updated_at: '2019-05-30',
						rule: '01',
						status: 1
					},
					{
						id: 2,
						usuario: 'YFERNAND',
						email: 'yuri.vasquez@g.globo',
						created_at: '2019-05-28',
						updated_at: '2019-05-30',
						rule: '02',
						status: 1
					},
					{
						id: 1,
						usuario: 'PLACERDA',
						email: 'pedro.soares.lacerda@g.globo',
						created_at: '2019-05-28',
						updated_at: '2019-05-30',
						rule: '02',
						status: 1
					}
				]),
			0
		)
	);
}
