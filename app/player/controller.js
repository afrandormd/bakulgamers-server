const Player = "./model"
const Voucher = "../voucher/model"

module.exports = {
    landingPage: async (req, res) => {
        try {
            const voucher = await Voucher.find()
                .populate('category')

            res.status(200).json({ data: voucher })
        } catch (error) {
            res.status(500).json({ message: error.message || `Terjadi kesalahan pada server` })

        }
    }
}
