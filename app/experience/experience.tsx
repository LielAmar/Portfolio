import Separator from "../components/common/separator";
import Timeline from "../components/common/timeline/timeline";
import { experienceTimelineItems } from "../content";

const Experience = () => {
    return (
        <>
            <Separator />
            <Timeline title="My Experience" timelineItems={experienceTimelineItems} />
        </>
    )
}

export default Experience;
