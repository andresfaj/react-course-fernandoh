import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoThingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NoThingSelectedView />
    </JournalLayout>
  );
};
