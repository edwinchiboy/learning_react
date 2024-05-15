export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>


        </>

    )
}
const person = {
    name: 'Ranga',
    address: {
        line1:'Baker street',
        city: 'London',
        country: 'Uk',
    },
    profiles:['twitter','linkedin','instagram'],
    printProfile:()=>{
        person.profiles.map(
            (profile)=>console.log(profile)
        )

    }
}

