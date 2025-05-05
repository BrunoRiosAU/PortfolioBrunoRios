

export default async function Project({params}) {
    const data = await params;
    const proyect = await getProyect(data.id);

    return <h1> Aaaaa {proyect.name}</h1>
}

async function getProyect(id) {
    const res = await fetch(`http://localhost:3000/${id}.json`);
    const data = await res.json();
    return data;
}
