import React from 'react';
import { getUsers, updateBlockUser } from '../lib/firebase';

const useUser = () => {

    const [items, setItems] = React.useState([]);

    React.useEffect(()=>{
        getItems();
    }, []);

    const getItems = async () => {
        const _items = await getUsers();
        let prs = _items.sort((a, b) => b.score - a.score);
        for (let index = 0; index < prs.length; index++) {
            prs[index] = {...prs[index], rank: index+1};
        }

        setItems([...prs]);
    }

    const updateBlock = async (id) => {
        const _items = items;
        const index = _items.findIndex(i => i.id === id);

        const block = {isBlocked: !_items[index].isBlocked};
        await updateBlockUser(block, id);

        if (index !== -1) {
            _items[index] = {
                ..._items[index],
                isBlocked: !_items[index].isBlocked
            };
        }

        setItems([..._items]);
    }

    return [items, setItems, updateBlock]
}

export default useUser;
