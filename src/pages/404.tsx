/** @jsx jsx */
import { tailwind } from "@theme-ui/presets"
import { jsx } from "theme-ui"
import Layout from "../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useMinimalBlogConfig from "../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const NotFound = () => {
    const { basePath, blogPath } = useMinimalBlogConfig()
    const url = typeof window !== 'undefined' ? window.location.href : '';

    return (
    <Layout>
        <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
            <span sx={{ fontWeight: `bold` }}>404. </span>
            <span sx={{ color: tailwind.colors.gray[5] }} >That's an error.</span>
            <div sx={{ marginTop: '20px' }}> 
                The requested URL 
                <span sx={{ color: tailwind.colors.gray[5]}}> {url} </span> 
                was not found on this server. </div>
            <div sx={{ color: tailwind.colors.gray[5]}}> That's all I know.</div>            
        </section>
    </Layout>
    )
}
  
export default NotFound