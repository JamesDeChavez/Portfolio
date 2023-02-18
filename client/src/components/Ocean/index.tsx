import './styles.css';

const Ocean = () => {
    const className = 'Ocean';
    return (
        <div className={className}>
            <div className={`${className}_nameContainer`}>
                <h1 className={`${className}_name`}>JAMES</h1>
                <h1 className={`${className}_name`}>DECHAVEZ</h1>
            </div>            
        </div>
    );
};

export default Ocean;