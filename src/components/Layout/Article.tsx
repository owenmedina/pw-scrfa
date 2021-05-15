import { FC, ReactElement } from "react";
import Heading from '../Typography/Heading';
import ColumnarContent from './ColumnarContent';
import Spacer from "../Utilities/Spacer";

interface Props {
    title: string;
    titleStyle: number;
    content: ReactElement;
    contentColumns: number;
}

const Article: FC<Props> = ({title, titleStyle, content, contentColumns}) => {
    return <div>
        <Heading style={titleStyle} text={title} />
        <Spacer size={'md'} />
        <ColumnarContent columns={contentColumns}>
            {content}
        </ColumnarContent>
    </div>;
}

export default Article;