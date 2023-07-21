import "./../../../src/common/styles/index.sass";
import { Stories } from "features/home/stories/Stories";
import {Form} from "features/home/writeSomething/Form"
import {Videos} from "features/home/videos/Videos"

export const Home = () => {
    return (
        <>
            <Stories />
            <Form />
            <Videos />
        </>
    );
};
