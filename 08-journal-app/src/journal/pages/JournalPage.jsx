import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NoThingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NoThingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  );
};
