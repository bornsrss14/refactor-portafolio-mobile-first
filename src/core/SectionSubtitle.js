import { IconChevronDown } from "@tabler/icons-react";
export const SectionSubtitle = ({ txtSubtitle }) => {
  return (
    <>
      <div className="flex-circle-txt-sub ">
        <h2 className="font-sub-titles">{txtSubtitle}</h2>
        <div className="big-circle">
          <IconChevronDown />
        </div>
      </div>
    </>
  );
};
