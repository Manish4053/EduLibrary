import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kumarmanishsah445@gmail.com",
        pass: "rrucgzedbxfwsazi",
      },
    });

    const mailOptions = {
      from: email,
      to: "kumarmanishsah445@gmail.com",
      subject: "New Contact Message from EduLibrary",
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully" });

  } catch (error) {
    res.status(500).json({ message: "Failed to send message" });
  }
});

export default router;
