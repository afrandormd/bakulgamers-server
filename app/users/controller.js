const User = require('./model')
const bcrypt = require('bcryptjs')

module.exports = {
    viewSignin: async (req, res) => {
        try {
            const alertMessage = req.flash("alertMessage")
            const alertStatus = req.flash("alertStatus")
            const alert = { message: alertMessage, status: alertStatus }
            if (req.session.user === null || req.session.user === undefined) {
                res.render('admin/users/view_signin', {
                    alert
                })
            } else {
                res.redirect('/dashboard')
            }
        } catch (error) {
            req.flash("alertMessage", `${error.message}`)
            req.flash("alertStatus", "danger")
            res.redirect("/")
        }
    },
    actionSignin: async (req, res) => {
        try {
            const { email, password } = req.body
            const checkUser = await User.findOne({ email: email })
            if (checkUser) {
                if (checkUser.status === 'Y') {
                    const checkPasswod = await bcrypt.compare(password, checkUser.password)
                    if (checkPasswod) {
                        req.session.user = {
                            id: checkUser._id,
                            email: checkUser.email,
                            status: checkUser.status,
                            name: checkUser.name
                        }
                        res.redirect('/dashboard')
                    } else {
                        req.flash("alertMessage", `Kata sandi yang anda inputkan salah`)
                        req.flash("alertStatus", "danger")
                        res.redirect("/")
                    }

                } else {
                    req.flash("alertMessage", `Mohon maaf status anda belum aktif`)
                    req.flash("alertStatus", "danger")
                    res.redirect("/")
                }

            } else {
                req.flash("alertMessage", `Email yang anda inputkan tidak ada`)
                req.flash("alertStatus", "danger")
                res.redirect("/")
            }

        } catch (error) {
            req.flash("alertMessage", `${error.message}`)
            req.flash("alertStatus", "danger")
            res.redirect("/")
        }
    }
}
