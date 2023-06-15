import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import MenuPills from "@pokedex-graphql/layouts/MenuPills/components/MenuPills";
import { useHomePage } from "@pokedex-graphql/pages/HomePage/hooks/useHomePage";
import TitleWithLink from "@pokedex-graphql/layouts/TitleWithLink/components/TitleWithLink";
import defaultClasses from "./HomePage.module.css";

const HomePage = () => {
    const theme = useTheme();
    const { menuItems } = useHomePage();
    return (
        <>
            <Box component="section" className={defaultClasses.homeTop}>
                <Typography variant="h3" component="h1" paddingBottom={3.75}>
                    What pokemon are you looking for?
                </Typography>
                <MenuPills menuItems={menuItems} />
            </Box>
            <Box component="section" className={defaultClasses.homeBottom}>
                <TitleWithLink
                    title="Pokemon News"
                    link={{ text: "View All", url: "/news" }}
                />
            </Box>
        </>
    );
};

export default HomePage;
