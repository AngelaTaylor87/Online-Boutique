import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@me.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'Ang Tay',
        email: 'ang@me.com',
        password: bcrypt.hashSync('12345', 10),
        
    },
    {
        name: 'Ash Tay',
        email: 'ash@me.com',
        password: bcrypt.hashSync('12345', 10),
        
    }
]

export default users