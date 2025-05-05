export default async function Projects(){
        const proyects = await getProyects();
        console.log(proyects)
    return (<> <h1>My Projects</h1>
    {proyects.map((project) =>{
        return (
            <h1>{project}</h1>
        );
    })}
    </>)
}



async function getProyects() {
    const req = await fetch(`http://localhost:3000/projects.json`)
    const data = await req.json();
    return data;
}