import './styles.css';

const Pendulum = () => {
    const firstName = 'James';
    const lastName = 'DeChavez';
    const className = 'Pendulum';
    return (
        <div className={className}>
            <div className={`${className}_nameContainer`}>
                {Array.from(firstName).map((char) => {
                    return <span className={`${className}_letter`}>{char}</span>
                })}
            </div>
            <div className={`${className}_nameContainer`}>
                {Array.from(lastName).map((char) => {
                    return <span className={`${className}_letter`}>{char}</span>
                })}
            </div>
        </div>
    );
};

export default Pendulum;