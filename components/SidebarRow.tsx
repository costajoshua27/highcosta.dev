import { Avatar } from "@mui/material";

export default function SidebarRow({
  src,
  Icon,
  title,
}: {
  src?: string,
  Icon?: React.ComponentType
  title: string
}) {
  return (
    <div className="sidebarRow">
      {/* {src && <Avatar src={src} />} */}
      {src && <Avatar />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};