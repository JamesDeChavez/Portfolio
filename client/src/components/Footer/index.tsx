import './styles.css'

const FooterSection = () => {
    const className = 'FooterSection'
    return (
        <div className={className}>
            <div className={`${className}_iconContainer`}>
                <div>[ ]</div>
                <div>[ ]</div>
            </div>
            <div className={`${className}_name`}>
                James DeChavez
            </div>
            <div className={`${className}_text`}>
                Consectetur esse veniam ea duis ex. Sint veniam reprehenderit laborum.
            </div>
        </div>
    )
}

export default FooterSection