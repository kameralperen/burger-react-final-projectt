
function MenuItem({image, name, content, price}) {
    return ( 
        <div className="menuItem">
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h3 style={{marginBottom: '10px'}}>{name}</h3>
            <h5 style={{marginTop: '0px'}}>{content}</h5>
            <p>
                <i style={{color: 'red', marginBottom: '10px'}}>{price} TL</i>
            </p>
        </div>
     );
}

export default MenuItem;
