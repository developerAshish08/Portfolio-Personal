"use client";

import React from 'react';
import EmailClient from '../../shared/EmailClient';
import { ToastContainer, toast, Bounce, ToastPosition } from 'react-toastify'

type ToastOptions = {
    position: ToastPosition | undefined;
    autoClose: number;
    hideProgressBar: boolean;
    closeOnClick: boolean;
    pauseOnHover: boolean;
    draggable: boolean;
    progress: undefined;
    theme: string;
    transition: typeof Bounce;
}

const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
}

export const ContactMe = () => {
    const nameRef = React.useRef<HTMLInputElement>(null);
    const emailRef = React.useRef<HTMLInputElement>(null);
    const messageRef = React.useRef<HTMLTextAreaElement>(null);
    
    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const templateParams = {
            name: nameRef.current?.value || '',
            email: emailRef.current?.value || '',
            message: messageRef.current?.value || '',
        };

        EmailClient.sendEmail(templateParams, onEmailSuccess, onEmailError);
    }

    const onEmailSuccess = () => {
        toast.success('Your message has been successfully sent.', toastOptions);
    }

    const onEmailError = () => {
        toast.error('Oops! Something went wrong while sending your message.', toastOptions);
    }

    return (
        <section id="contact-me" className="bg-transparent pb-10 md:pb-20 px-4 mx-auto w-[100%] md:w-[50%]">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
                Contact Me
            </h1>
            <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Just want to say hey? Get In Touch!</p>
            
            <form onSubmit={sendEmail} method="POST" className="contact-form space-y-8">
                <div>
                    <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input style={{ background: "hsla(0, 0%, 100%, .1)" }} ref={nameRef} type="text" name="user_name" className="block p-3 w-full text-sm text-gray-300 dark:text-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Your name" required />
                </div>
                <div>
                    <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input style={{ background: "hsla(0, 0%, 100%, .1)" }} ref={emailRef} type="email" name="user_email" className="shadow-sm border border-gray-300 text-gray-300 dark:text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="example@gmail.com" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
                    <textarea style={{ background: "hsla(0, 0%, 100%, .1)" }} ref={messageRef} name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-300 dark:text-gray-300 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Message..."></textarea>
                </div>
                <button type="submit" className="px-4 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">Send Message</button>
            </form>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </section>
    );
};
