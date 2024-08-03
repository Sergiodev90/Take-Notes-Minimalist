import React, { useEffect, useState } from 'react';
import './TodoCategory.css';

function TodoCategory({ categories, isExpanded, handleClickTag }) {


    return (
        <div className={isExpanded  && categories.length > 1 ? 'Contaner-All_Tags--open' : 'Contaner-All_Tags'}>
            <div className= {isExpanded  && categories.length > 1 ? 'Container-Tag--open': 'Container-Tag'}>
                {isExpanded ? (
                    categories.map((element) => (
                        <span
                            className=''
                            key={element.id} // Añadir key para evitar advertencias en la consola
                            style={{
                                backgroundColor: element.color,
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: '12px',
                                padding: '0 8px',
                                margin: '6px 6px 26px 6px',
                                fontSize: '14px',
                                wordWrap: 'break-word',
                                boxSizing: 'border-box',
                                maxWidth: '300px',
                                height: '40px',
                                cursor: 'pointer',
                                opacity: '0.9'
                            }}
                            onClick={handleClickTag}
                        >
                            {element.category}
                        </span>
                    ))
                ) : (
                    <>
                        <span
                            style={{
                                backgroundColor: categories[0].color,
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
                                opacity: '0.9'
                            }}
                            onClick={handleClickTag}
                        >
                            {categories[0].category}
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
