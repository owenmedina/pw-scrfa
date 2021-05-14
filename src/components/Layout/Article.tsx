import { FC, ReactElement } from "react";
import Heading from '../Typography/Heading';
import ColumnarContent from './ColumnarContent';
import Spacer from "../Utilities/Spacer";

interface Props {
    title: string;
    titleStyle: number;
    content: ReactElement;
}

const Article: FC<Props> = ({title, titleStyle, content}) => {
    return <div>
        <Heading style={titleStyle} text={title} />
        <Spacer size={'md'} />
        <ColumnarContent columns={2}>
            {content}
        </ColumnarContent>
    </div>;
}

export default Article;