export default async function handler(req, res) {
    let u = req.query.u;
    if(!u) {
      res.status(400).json({ status: '400 bad request' })
    } else {
      u.startsWith("@") ? u = u.slice(1) : u = u;
      const getd = await fetch('https://instagram.com/' + u + '/feed/?__a=1&__d=dis')
      let data = await getd.json();
      res.status(200).json(data)
    }
}