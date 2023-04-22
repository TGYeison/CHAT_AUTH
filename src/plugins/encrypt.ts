import bcrypt from 'bcryptjs';

export const encryptPass = async (pass: string) => {
    const salt = await bcrypt.genSalt(10);

    return bcrypt.hash(pass, salt);
}
