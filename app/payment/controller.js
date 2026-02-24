const Payment = require('./model')

module.exports = {
    index: async (req, res) => {
        try {
            const alertMessage = req.flash("alertMessage")
            const alertStatus = req.flash("alertStatus")
            const alert = { message: alertMessage, status: alertStatus } 
            const payment = await Payment.find()

            res.render('admin/payment/view_payment', {
                payment,
                alert
            })
        } catch (error) {
            req.flash("alertMessage", `${error.message}`)
            req.flash("alertStatus", "danger")
            res.redirect("/payment")
        }
    },
    // viewCreate: async (req, res) => {
    //     try {
    //         res.render('admin/payment/create')
    //     } catch (error) {
    //         req.flash("alertMessage", `${error.message}`)
    //         req.flash("alertStatus", "danger")
    //         res.redirect("/payment")
    //     }
    // },
    // actionCreate: async (req, res) => {
    //     try {
    //         const { coinName, coinQuantity, price } = req.body
    //
    //         let payment = await Payment({ coinName, coinQuantity, price })
    //         await payment.save();
    //
    //         req.flash("alertMessage", "Berhasil tambah payment")
    //         req.flash("alertStatus", "success")
    //
    //         res.redirect('/payment')
    //
    //     } catch (error) {
    //         req.flash("alertMessage", `${error.message}`)
    //         req.flash("alertStatus", "danger")
    //         res.redirect("/payment")
    //     }
    // },
    // viewEdit: async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const payment = await Payment.findOne({ _id: id })
    //
    //         res.render('admin/payment/edit', {
    //             payment
    //         })
    //     } catch (error) {
    //         req.flash("alertMessage", `${error.message}`)
    //         req.flash("alertStatus", "danger")
    //         res.redirect("/payment")
    //     }
    // },
    // actionEdit: async (req, res) => {
    //     try {
    //         const { id } = req.params
    //         const { coinName, coinQuantity, price } = req.body
    //         await Payment.findOneAndUpdate({
    //             _id: id
    //         }, { coinName, coinQuantity, price })
    //
    //         req.flash("alertMessage", "Berhasil ubah payment")
    //         req.flash("alertStatus", "success")
    //
    //         res.redirect('/payment')
    //
    //     } catch (error) {
    //         req.flash("alertMessage", `${error.message}`)
    //         req.flash("alertStatus", "danger")
    //         res.redirect("/payment")
    //     }
    // },
    // actionDelete: async (req, res) => {
    //     try {
    //         const { id } = req.params
    //         await Payment.findOneAndRemove({
    //             _id: id
    //         })
    //
    //         req.flash("alertMessage", "Berhasil hapus payment")
    //         req.flash("alertStatus", "danger")
    //
    //         res.redirect('/payment')
    //
    //     } catch (error) {
    //         req.flash("alertMessage", `${error.message}`)
    //         req.flash("alertStatus", "danger")
    //         res.redirect("/payment")
    //     }
    // },
}
