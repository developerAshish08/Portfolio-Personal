import emailjs from 'emailjs-com';

class EmailClient {
  static sendEmail = (templateParams, onEmailSuccess, onEmailError) => {
    const { NEXT_PUBLIC_EMAIL_SERVICE_ID='service_l87al3b', NEXT_PUBLIC_EMAIL_TEMPLATE_ID='template_ohrs3be', NEXT_PUBLIC_EMAILJS_USER_ID='G0PwJxcX37xYUXDPR' } = process.env

    emailjs.send(
      NEXT_PUBLIC_EMAIL_SERVICE_ID,
      NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      templateParams,
      NEXT_PUBLIC_EMAILJS_USER_ID
    )
      .then((response) => {
          onEmailSuccess()
      }, (error) => {
          onEmailError()
      })
  }
}

export default EmailClient;