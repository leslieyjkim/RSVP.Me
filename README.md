## Stale State
```
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => {
                setCount(count + 1);
                //count is Stale here!
                setCount(count + 1);

            }}>
                count is {count}
            </button>
        </>
    )
}
```
Eventhough the 'setCount(count+1)'is doubled, the result still remains '1' (not '2').
Once I clicked the button the result shows 1 - 2 - 3 - 4 - 5 (count by 1)

But, if I update the 2nd line's code like below into this, 'setCount((prev) => prev + 1);
Once I clicked the button the result shows 1 - 3 - 5 - 7 - 9 (count by 2). Because the (prev) is guaranteed the most recent and then plus 1 on it. 



## lecture link
https://www.youtube.com/watch?v=f2O355gGTtw
