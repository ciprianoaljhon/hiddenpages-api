const User = require('../models/userModelv2.js');

const updateAddress = async (req, res) => {
    const { userId, addressType } = req.params;
    const { street = '', city = '', region = '', country = '', postalCode = '' } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        let addressToUpdate;

        if (addressType === "default") {
            addressToUpdate = user.defaultAddress;
        } else if (addressType === "additional") {
            addressToUpdate = user.address;
        } else {
            return res.status(400).json({ error: "Invalid address type" });
        }

        if (!addressToUpdate) {
            return res.status(404).json({ error: "Address not found" });
        }

        addressToUpdate.street = street;
        addressToUpdate.city = city;
        addressToUpdate.region = region;
        addressToUpdate.country = country;
        addressToUpdate.postalCode = postalCode;

        await user.save();

        res.status(200).json({ message: "Address updated successfully", user });
    } catch (error) {
        console.error("Error updating address:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getAddress = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const { address, defaultAddress } = user;
        res.status(200).json({ address, defaultAddress });
    } catch (error) {
        console.error("Error fetching address:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = [updateAddress, getAddress];