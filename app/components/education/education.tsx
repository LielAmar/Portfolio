import { educationTimelineItems } from "@/app/content"
import Separator from "../common/separator"
import Timeline from "../common/timeline/timeline"

const Education = () => {
    return (
        <>
            <Separator />
            <Timeline title="My Education" timelineItems={educationTimelineItems} />
        </>
    )
}

export default Education;
