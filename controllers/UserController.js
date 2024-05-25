const CheckBalance = async (req, res) => {
    res.status(200).json({ message: "Balance" })
}

module.exports = { CheckBalance }