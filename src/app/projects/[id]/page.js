

export default async function Project({params}) {
    const data = await params;
    const proyect = await getProyect(data.id);

    return (<>
    <p>mesi</p>
    <h1 className="primary-text"> Aaaaa {proyect.name}</h1></>)
}

async function getProyect(id) {
    const res = await fetch(`http://localhost:3000/projectdata/${id}.json`);
    const data = await res.json();
    return data;
}
