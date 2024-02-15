import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What privileges do admins have in the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Admins have extensive privileges in the dashboard, including the
            ability to manage user accounts, access sensitive data, configure
            system settings, and oversee various administrative tasks.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I add new users to the system as an admin?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As an admin, you can add new users to the system by navigating to
            the user management section in the dashboard. From there, you can
            initiate the user creation process by providing necessary details
            such as username, email, role, and permissions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is there a way to track user activity and login history?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the admin dashboard provides features to track user activity
            and login history. You can view logs, monitor login attempts, track
            user sessions, and analyze usage patterns to ensure security and
            compliance with policies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I reset a user's password as an admin?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As an admin, you can reset a user's password by accessing the user
            management section in the dashboard. From there, you can select the
            user whose password needs to be reset and initiate the password
            reset process. The user will receive instructions via email to set a
            new password.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What steps should I take in case of a security breach?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In case of a security breach, it's crucial to act swiftly and
            decisively. As an admin, you should immediately investigate the
            breach, identify the root cause, and take steps to mitigate further
            damage. This may involve isolating affected systems, notifying
            stakeholders, implementing security patches, and conducting a
            thorough post-incident analysis to prevent future breaches.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I customize the dashboard layout and interface?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, many admin dashboards offer customization options to tailor the
            layout and interface according to your preferences and requirements.
            You can often rearrange widgets, add or remove modules, adjust color
            schemes, and personalize the dashboard to optimize usability and
            efficiency for your specific workflow.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
