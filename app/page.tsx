import NavBar from './components/navbar/navbar';
import About from './components/about/about';
import { educationTimelineItems, experienceTimelineItems } from './content';
import Timeline from './components/common/timeline/timeline';
import Separator from './components/common/separator';


export default function Home() {
    return (
        <>
            <NavBar />

            <div className="w-full h-full min-h-screen flex flex-col items-center">
                <About id="about" />

                <div id="education" className="w-full h-fit flex flex-col items-center">
                    <Separator />
                    <Timeline title="My Education" timelineItems={educationTimelineItems} />
                </div>

                <div id="experience" className="w-full h-fit flex flex-col items-center">
                    <Separator />
                    <Timeline title="My Experience" timelineItems={experienceTimelineItems} />
                </div>

                <Separator />
            </div>
        </>
    );
}
