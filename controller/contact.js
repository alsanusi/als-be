exports.show = (req, res) => {
    req.getConnection((err, con) => {
        con.query('SELECT * FROM contact ORDER BY id DESC', (err, rows, fields) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(rows)
            }
        })
    })
}

exports.store = (req, res) => {
    req.getConnection((err, con) => {
        let contactData = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        }

        con.query('INSERT INTO contact SET ?', [contactData], (err, rows, fields) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(rows)
            }
        });
    })
}