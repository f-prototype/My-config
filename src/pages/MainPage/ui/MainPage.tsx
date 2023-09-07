import { BugButton } from 'app/providers/ErrorBoundary';
import SvgI from 'shared/assets/icons/rocket.svg';
import imgT from 'shared/assets/icons/rocketP.png';

const MainPage = () => (
    <div>
        <p>MainPage</p>
        <BugButton />
        <SvgI />
        <img src={imgT} alt="w" />
    </div>
);

export default MainPage;
