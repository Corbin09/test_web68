const checkAuthN = (req, res, next) => {
    if (!req.headers.hasOwnProperty('authorization')) {
        res.status(400)
        return res.json({
            errorMsg: "yeu cau nguoi dung dang nhap"
        })
    }

    const token = req.headers['authorization'].split(" ")[1];

    if (token) {
        next()
    } else {
        res.status(400)
        return res.json({
            errorMsg: "yeu cau nguoi dung dang nhap"
        })
    }
}

module.exports = checkAuthN;