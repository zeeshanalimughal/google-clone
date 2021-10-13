import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/solid"
import HeaderOption from "./HeaderOption"

function HeaderOptions() {
    return (
        <div className="flex px-5 w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start space-x-32 lg:pl-52 border-b">
            {/* Left */}
            <div className="flex space-x-10 md:space-x-5">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="Images" />
                <HeaderOption Icon={PlayIcon} title="Videos" />
                <HeaderOption Icon={NewspaperIcon} title="News" />
                <HeaderOption Icon={MapIcon} title="Maps" />
                <HeaderOption Icon={DotsVerticalIcon} title="More" />
            </div>

            {/* Right */}
            <div className="space-x-4 hidden md:inline-block">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
