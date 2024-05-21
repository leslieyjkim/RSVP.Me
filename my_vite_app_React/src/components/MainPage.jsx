import { useState } from 'react';

import Input from '../components/Input';
import FriendList from '../components/FriendList';
import mockData from '../_mocks_/friends';

// import {addFriend, removeFriend} from 'helpers/list';


export default function FriendsPage(props) {
    const [data, setData] = useState([]);

    const addItem = function(name) {
        if (!name) return;

        const uid = uniqid();
        setData([...data, {name, uid}]);
    };

    const deleteItem = function(uid) {
        setData(data.filter(item => item.uid !== uid));
    };

    const clear = function() {
        setData([]);
    };

    const load = function() {
        setData(mockData);
    };

    return (
        <form className='MainPage'>
            Main Page
            <Input />
            <FriendList items={data} onClick={deleteItem}/>
        </form>
    );
}