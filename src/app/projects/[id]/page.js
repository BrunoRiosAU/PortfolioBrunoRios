import { getProjects } from "../getProjects";
import PageNotFound from "../../../components/pageNotFound"
import styles from "./page.module.css"

export default async function Project({ params }) {
    const data = await params;
    const project = await getProject(data.id);
    if (!project) {
        return (
            <PageNotFound/>
        )
    }

    return (<>
        <p className="primaryText">mesi</p>
        <p className="primaryText">mesi</p>
        <p className="primaryText">mesi</p>
        <p className="primaryText">mesi</p>
        <h1 className="primaryText"> Aaaaa {project.title}</h1></>)
}


async function getProject(id) {
    const projects = await getProjects();
    for (const [key, value] of Object.entries(projects)) {
        if (value.id == id) {

            return value;
        }
    }
    return null;
}









