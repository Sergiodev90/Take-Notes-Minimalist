import './TodoCategory.css';
import { tagStyle as StylesCategory } from '../TodoTag';


function TodoCategory({ categories, isExpanded, handleClickTag }) {


    return (
        <div className={isExpanded  && categories.length > 1 ? 'Contaner-All_Tags--open' : 'Contaner-All_Tags'}>
            <div className= {isExpanded  && categories.length > 1 ? 'Container-Tag--open': 'Container-Tag'}>
                {isExpanded ? (
                    categories.map((element) => (
                        <span
                            className=''
                            key={element?.id} // Añadir key para evitar advertencias en la consola
                            style={StylesCategory(element)}
                            onClick={handleClickTag}
                        >
                            {element?.category}
                        </span>
                    ))
                ) : (
                    <>
                        <span
                            style={StylesCategory(categories[0])}
                            onClick={handleClickTag}
                        >
                            {categories[0]?.category}
                        </span>
                        {categories.length > 1 && <span style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={handleClickTag}>
                            +{categories.length - 1} more
                        </span>}

                    </>
                )}
            </div>
        </div>
    );
}

export { TodoCategory };
