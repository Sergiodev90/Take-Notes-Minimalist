import './TodoCategory.css'

function TodoCategory({categories}){


    return(
        categories.map((category) =>(
                <span style={{
                        backgroundColor: category.color,
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '12px',
                        padding: '0 8px',
                        margin: '4px',
                        fontSize: '14px',
                        wordWrap: 'break-word',
                        boxSizing: 'border-box',
                        maxWidth: '300px',
                        height: '40px',
                        cursor: 'pointer',
                        opacity:'0.9'
                    }}>{category.category}</span>
                ))
    );

}




export {TodoCategory}	


