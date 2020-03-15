import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';
// in ListWrapper below we use React props, map is the pure JS function
 
// the prettiest version, with the spread operator
const ListWrapper = ({items}) => (
    <>
        {items.length ? (
            <ul className={styles.wrapper}>
                {items.map(item => (
                <ListItem key={item.title} {...item} />
                ))}
            </ul>
        ) : (
            <h2 class={styles.noItemsText}>There is nothing here yet, please add some items.</h2>
        )};
    </>
);

export default ListWrapper;

// alternatively, without spread operator
// const ListWrapper = () => (
//     <ul className="listWrapper__wrapper">
        
//         {twitterAccounts.map(item => (
//             <ListItem
//                 name={item.name}
//                 description={item.description}
//                 image={item.image}
//                 link={item.twitterLink}
//             />
//         ))}
//     </ul>
// )