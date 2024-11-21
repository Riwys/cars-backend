const pg = require('pg');
const { Client } = pg;

/*
const client = new Client({
    connectionString: `${process.env.DATABASE_URL}`,
})
    */

const getCars = async (req, res) => {
    const lesserSpeed = req.body.lesserSpeedToSent;
    const greaterSpeed = req.body.greaterSpeedToSent;
    const client = new Client({
        connectionString: `${process.env.DATABASE_URL}`,
    })
    await client.connect();
    console.log(Math.floor(greaterSpeed), greaterSpeed, Math.floor(lesserSpeed), lesserSpeed);
    const result = await client.query(`SELECT carSpeed.id, carSpeed.speed, carSpeed.title, carImg.img FROM carSpeed INNER JOIN carImg ON carSpeed.id = carImg.id WHERE (speed > ${Math.floor(greaterSpeed)} AND speed < ${Math.floor(lesserSpeed)})`);
    console.log(result);
    res.send(result);
    await client.end();
}

module.exports = { getCars }