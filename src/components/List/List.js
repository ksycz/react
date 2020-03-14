import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './List.module.scss';
// in ListWrapper below we use React props, map is the pure JS function
 
// the prettiest version, with the spread operator
const ListWrapper = (props) => (
    <ul className={styles.wrapper}>
        
        {props.items.map(item => (
            <ListItem key={item.name} {...item} />
        ))}
    </ul>
)

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

export default ListWrapper;