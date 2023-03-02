import './styles.css'

const ContactSection = () => {
    const className = 'ContactSection'
    return (
        <div className={className}>
            <h3 className={`${className}_header`}>
                <span>{'<'}</span>Contact<span>{'/>'}</span>
            </h3>
            <p className={`${className}_text`}>
                Duis mollit amet fugiat ea sunt mollit in. Cillum culpa anim ipsum dolor officia aliqua aliqua cillum exercita nostrud consequat velit. 
            </p>
            <form className={`${className}_form`}>
                <div className={`${className}_inputContainer`}>
                    <label htmlFor="name" className={`${className}_label`}>Name</label>
                    <input type="text" className={`${className}_textInput`} />
                </div>
                <div className={`${className}_inputContainer`}>
                    <label htmlFor="email" className={`${className}_label`}>Email</label>
                    <input type="email" className={`${className}_textInput`} />
                </div>
                <div className={`${className}_inputContainer`}>
                    <label htmlFor="message" className={`${className}_label`}>Message</label>
                    <textarea name="message" id="message" className={`${className}_textarea`}></textarea>
                </div>
                <div className={`${className}_buttonContainer`}>
                    <input className={`${className}_submit`} type="submit" value="Send Message" />
                </div>
            </form>
        </div>
    )
}

export default ContactSection