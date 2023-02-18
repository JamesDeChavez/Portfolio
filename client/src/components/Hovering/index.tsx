import './styles.css';

const Hovering = () => {
    const className = 'Hovering';
    return (
        <div className={className}>
            <div className={`${className}_nameContainer`}>
                <h1 className={`${className}_name`} data-text='JAMES DECHAVEZ'>JAMES<br/> DECHAVEZ</h1>
            </div>
        </div>
    );
};

export default Hovering;