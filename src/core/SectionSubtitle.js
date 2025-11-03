import { IconChevronDown } from "@tabler/icons-react";
import { useThemeT } from "../contexts/ThemeContext";
export const SectionSubtitle = ({ txtSubtitle }) => {
  const { dark, light, isDark } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <>
      <div className="flex-circle-txt-sub ">
        <h2 style={{ color: theme.txt }} className="font-sub-titles">
          {txtSubtitle}
        </h2>
        <div className="big-circle">
          <IconChevronDown />
        </div>
      </div>
    </>
  );
};
