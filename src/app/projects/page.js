import { headers } from "next/headers";

export default async function Projects() {
    const proyects = await getProyects();
    return (<> <h1>My Projects</h1>
        {proyects.map((project) => {
            return (
                <h1 key={project}>{project}</h1>
            );
        })}
    </>)
}




async function getProyects() {
    const headersList = headers();
    const domain = (await headersList).get('host') || "";
    const req = await fetch(`http://${domain}/projectdata/projects.json`)
    const data = await req.json();
    return data;
}

