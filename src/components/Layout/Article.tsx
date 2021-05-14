import { FC } from "react";
import Heading from '../Typography/Heading';

interface Props {
    title: string;
    titleStyle: number;
}

const Article: FC<Props> = ({title, titleStyle}) => {
    return <div>
        <Heading style={titleStyle} text={title} />
    </div>;
}

export default Article;