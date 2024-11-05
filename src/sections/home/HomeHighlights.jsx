import '../../styles/HomeHighlights.css';
import PopularSectionMiddle from '../highlights/PopularSectionMiddle';
import PopularSectionRight from '../highlights/PopularSectionRight';
import TrendingHome from '../highlights/TrendingHome';
import UpcommingSectionRight from '../highlights/UpcommingSectionRight';

function HomeHighlights() {

    return (
        <div className="highlights">
            <h1 className='text-3xl'>Highlights of the week</h1>
            <div className="flex">
                <div className="w-1/4 first ">
                    <div className=" p-4">
                        <h3 className='text-center'>Trending</h3>
                        <TrendingHome />
                    </div>
                </div>
                <div className="w-2/4">
                    <div className=" p-4">
                        <PopularSectionMiddle />
                    </div>
                </div>
                <div className="w-1/4  ">
                    <div className=" p-4">
                        <PopularSectionRight />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HomeHighlights;