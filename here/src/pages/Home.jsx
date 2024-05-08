import { Layout } from "../Layout"
import RecipeCards from "../RecipeCards";
import headerBackground from "../Photos/header-background.png";

export const Home = () => {
    return (
        <Layout headerIamge={headerBackground}>
            <RecipeCards />
        </Layout>
    )
}