import { useState } from 'react';
import Input from '../components/Input';
import FriendList from '../components/FriendList';
import mockData from '../_mocks_/friends';

// import {addFriend, removeFriend} from 'helpers/list';


export default function FriendsPage(props) {
    const [data, setData] = useState([]);

    const addItem = function(name) {
        if (!name) return;

        // const uid = uniqid();
        // const uid = 123123; //hardcoded for testing
        const uid = Math.random().toString(36).substring(2, 10);
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
        <div className='MainPage'>
            Planning to join us? Please put your name down.
            <Input onSubmit={addItem}/>
            <FriendList items={data} onClick={deleteItem}/>
        </div>
    );
}