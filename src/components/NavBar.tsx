import {IconSearch, IconStack,} from "./icons";

interface NavBarProps {
  onSearchClick: () => void;
  onPlaylistClick: () => void;
}
export const NavBar = ({ onSearchClick, onPlaylistClick }: NavBarProps) => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">PWC Video</a>
      </div>
      <div className="navbar-end">
        <button type="button" className="btn btn-ghost btn-circle" onClick={onSearchClick}>
          <IconSearch />
        </button>
        <button type="button" className="btn btn-ghost btn-circle" onClick={onPlaylistClick}>
          <div className="indicator">
            <IconStack />
          </div>
        </button>
      </div>
    </div>
  )
}