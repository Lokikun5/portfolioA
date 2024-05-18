function ContactItem({ icon, link, children }) {
    return (
        <li className="mb-2">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={children} style={{ width: '24px', marginRight: '10px' }} />
                {children}
            </a>
        </li>
    );
}

export default ContactItem;