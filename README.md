## This app is for:
The app is designed to create a list of people who can join a gathering. Creating an application that collects people's names opens up various potential use cases, each with unique goals and creative names.  RSVP stands for "Répondez s'il vous plaît," which is French for "Please respond." It is a request for confirmation of attendance, typically used for events such as parties, weddings, and other gatherings, to know how many people plan to attend. Here are some good name suggestions for the app, along with a nicely phrased statement to prompt users to enter their names if they can join:

## App Name Suggestions
"EventEase"
"RSVPMe"
"GatherUp"
"EventHub"
"WorkshopEnroll"
"MemberMap"
"PatronLog"
"FamilyGather"
"ReunionRoster"
"KinConnect"
"AttendEase"



## Statement Suggestions
"Please add your name if you can join the gathering."
"Kindly enter your name if you'll be joining us."
"Sign up here if you plan to attend."
"We'd love to have you! Add your name if you can join."
"Let us know you're coming by entering your name."
"Planning to join us? Please put your name down."
"If you can make it, please add your name here."
"Looking forward to seeing you! Add your name if you can join."
"Please enter your name if you can attend."
"Sign up here to join us!"
"Add your name if you'll be there."
"Let us know if you can join by adding your name below."
"RSVP here to confirm your attendance."

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
