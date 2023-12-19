import nodemailer from 'nodemailer';
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
    try {
        const req = await request.json();
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your preferred email service
            auth: {
                user: process.env.CONTACT_EMAIL,
                pass: process.env.CONTACT_PASSWORD
            },
        });
        const mailOptions = {
            from: process.env.CONTACT_EMAIL,
            to: process.env.CONTACT_EMAIL,
            subject: `Client Inquiry: ${req.name}`,
            text: `Client Email: ${req.email} \n Client Message: ${req.message}`,
        };
        await transporter.sendMail(mailOptions);
        return Response.json({ message: "Email sent successfully", success: true, status: 200 });
    } catch (error) {
        return Response.json({ message: 'Error sending email', success: false, status: 200 });
    }
}