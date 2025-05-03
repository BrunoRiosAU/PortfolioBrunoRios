import { useRouter } from "next/router";
import Head from "next/head";


export default function Project({ project }) {

    const router = useRouter();
    const { id } = router.query;
    return (<>
        <Head><title>{project.nameen}</title></Head>
        <h1 id="es">{project.namees}</h1><h1 id="en">{project.nameen}</h1>
        <p id="es">{project.desces}</p><p id="en">{project.descen}</p>
    </>)
}

export async function getStaticProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json();

    return {
        props: { project: data },
    }

}

export async function getStaticPaths() {
    const req = await fetch(`http://localhost:3000/projects.json`)
    const data = await req.json();

    const paths = data.map(project => {
        return { params: { id: project } }
    })

    return {
        paths,
        fallback: false
    }
}