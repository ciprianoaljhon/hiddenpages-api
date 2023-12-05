const User = require('../models/userModelv2.js')
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid')
const uniq = require('uniqid')


const signIn = async (req, res) => {
    const { username, password } = req.body;

    try {
        const userData = await User.findOne({ username });

        if (userData && userData.password === password) {
            res.send({
                status: 'success',
                redirectURL: '/home',
                userID: userData._id,
                tempAuthID: userData.privateID,
                firstName: userData.firstName,
                lastName: userData.lastName
            });
        } else {
            res.send({
                status: 'incorrect-credentials',
                message: 'Invalid credentials',
                redirectURL: '/auth'
            });
        }
    } catch (error) {
        res.send({ message: 'Server Error' });
    }
};

const signUp = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.send({
                status: 'username_exists',
                message: 'Username already exists',
                redirectURL: '/auth'
            });
        }

        const newUser = new User({
            UID: uniq(),
            privateID: uuidv4(),
            username,
            password,
        });

        const savedUser = await newUser.save();


        res.send({
            status: 'success',
            message: 'Created Successfully',
            redirectURL: `/profile`,
            userID: savedUser._id,
            tempAuthID: savedUser.privateID,

        });
    } catch (error) {
        console.log(error.message);

        res.send({
            status: 'failure',
            message: error.message,
            redirectURL: '/auth'
        });
    }
};

module.exports = [signIn, signUp]



// const signIn = async (req, res) => {
//     const { username, password } = req.body
//     const userData = await User.findOne({ username })
//     if (userData && userData.password === password) {
//         res.send({
//             status: 'success',
//             redirectURL: '/home',
//             userID: userData.UID,
//             tempAuthID: userData.privateID
//         })
//     }
//     else {
//         res.send({ redirectURL: '/auth' })
//     }
// }
// const signUp = async (req, res) => {
//     const { username, password } = req.body;
//     // const hashedPass = await bcrypt.hash(password, 10)
//     const hashedPass = password;
//     const newUser = new User({
//         UID: uniq(),
//         privateID: uuidv4(),
//         username,
//         password: hashedPass,
//     });

//     try {
//         const save = await newUser.save();
//         console.log(save);
//         res.send({
//             status: "success",
//             message: "Created Successfully",
//             created: true,
//             redirectURL: "/profile",
//             userID: newUser.UID,
//             tempAuthID: newUser._id,
//         });
//     } catch (error) {
//         console.log(error.message);
//         if (error.code === 11000) {
//             res.send({
//                 err: error.message,
//                 type: 'duplicate',
//                 message: "Username already exists",
//                 created: false,
//                 redirectURL: "/auth",
//             });
//         } else {
//             res.send({
//                 err: error.message,
//                 type: 'server',
//                 message: "Server Error",
//                 created: false,
//                 redirectURL: "/auth",
//             });
//         }
//     }
// };
