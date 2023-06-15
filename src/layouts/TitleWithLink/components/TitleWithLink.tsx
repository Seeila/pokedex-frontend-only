import { Box, Typography } from "@mui/material";
import Link from "@pokedex-graphql/components/Link/Link";
export interface ITitleWithLinkProps {
    title: string;
    link?: {
        text: string;
        url: string;
    };
}
const TitleWithLink: React.FC<ITitleWithLinkProps> = ({ title, link }) => {
    const titleLink = link ? (
        <Link
            href={link.url}
            underline="none"
            color="var(--pokedex-palette-water-main)"
        >
            {link.text}
        </Link>
    ) : null;
    return (
        <Box display="flex" justifyContent="space-between">
            <Typography variant="h5" component="h2">
                {title}
            </Typography>
            {titleLink}
        </Box>
    );
};

export default TitleWithLink;
