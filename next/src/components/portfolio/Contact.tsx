"use client";
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { slideIn } from "@/util/motion"
import { styles, RaygunCanvas } from "@/components/portfolio";
import type { FormDataType } from "demdevvyshared/portfolio";

const Contact = () => {
    const formRef = useRef<HTMLFormElement | null>(null)
    const [form, setForm] = useState<FormDataType>({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState<'Send' | 'Sending...' | 'Sent' | 'Failed'>('Send');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading('Sending...');
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const { success } = await response.json();
            if (success) {
                setLoading('Sent');
                setForm({
                    name: '',
                    email: '',
                    message: ''
                });
                setTimeout(() => {
                    setLoading('Send');
                }, 5000)
            } else {
                setLoading('Failed');
                setTimeout(() => {
                    setLoading('Send');
                }, 5000)
            }
        } catch (error) {
            console.log(error);
            setLoading('Failed');
            setTimeout(() => {
                setLoading('Send');
            }, 5000)
        }
    }

    return (
        <div className="xl:mt-12 xl:flex-row flex-col flex gap-7 xl:gap-0 overflow-hidden items-center">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="xl:w-1/2 xl:max-w-full w-full max-w-[600px] bg-tertiary p-8 rounded-2xl h-fit"
            >
                <p className={`${styles.titleText} text-white text-[30px] tracking-[6px]`}>Contact Me</p>
                <h3 className="mt-3 -mb-3">
                    <span className={`${styles.subtitleText} text-white`}>get in touch - </span>
                    <span className="bg-blue-400 text-white py-0.5 rounded-lg px-1 font-medium text-sm font-sans">deankadricontact@gmail.com</span>
                </h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-8 flex flex-col gap-4"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="bg-primary py-2 px-3 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="bg-primary py-2 px-3 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={5}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="bg-primary py-2 px-3 placeholder:text-white text-white rounded-lg outline-none border-none font-medium resize-none"
                        />
                    </label>
                    <button
                        className="bg-primary py-2 px-7 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:w-1/2 w-full h-[560px]"
            >
                <RaygunCanvas />
            </motion.div>
        </div>
    )
}

export default Contact;