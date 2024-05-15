// import { useState } from 'react';

import Input from '../components/Input';
import FriendList from '../components/FriendList';

// import {addFriend, removeFriend} from 'helpers/list';


export default function FriendsPage(props) {

    return (
        <form className='MainPage'>
            Main Page
            <Input />
            <FriendList />
        </form>
    );
};