import SidebarRow from "./SidebarRow";

import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src="yes" title="Joshua Costa"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
    </div>
  );
};