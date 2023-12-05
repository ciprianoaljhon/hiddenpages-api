const User = require('../models/userModelv2');

const getProfile = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const { firstName, lastName, birthDate, phoneNumber } = user;

        res.status(200).json({ firstName, lastName, birthDate, phoneNumber });
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const updatePersonalInfo = async (req, res) => {
    const { userId } = req.params;
    const { firstName, lastName, birthDate, phoneNumber } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { firstName, lastName, birthDate, phoneNumber },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "Personal information updated successfully" });
    } catch (error) {
        console.error("Error updating personal information:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const updatePassword = async (req, res) => {
    const { userId } = req.params;
    const { currentPassword, newPassword, confirmPassword } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (currentPassword !== user.password) {
            return res.status(400).json({ error: "Invalid current password" });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ error: "New password and confirm password do not match" });
        }

        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        console.error("Error updating password:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = [
    getProfile,
    updatePersonalInfo,
    updatePassword,
];