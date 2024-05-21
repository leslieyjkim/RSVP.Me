//this component is not as complex as you might think.
//All it does is 'maps a list'.
//It doesn't have any state of its own,
//simply it give it a list of stuff, and just displays them.  



function FriendList(props) {

    const items = props.items || []; //  || OR,
    //this 'empty list' allows us to test this Friendlist without depending on its props.
    //To say, 'make an array in case you didn't get one'.

    const list = items.map((item) => {
        return <li
            key={item.uid}
            onClick={() => props.onClick(item.uid)} >
            {item.name}    
        </li>;
    });

    return (
        <div className="FriendList">
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default FriendList;

