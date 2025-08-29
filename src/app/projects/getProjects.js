export async function getProyects() {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
        const req = await fetch(`${baseUrl}/projectdata/projects.json`)
        const data = req.json();
        return data;
}
