import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";
import { IRequisitionDetails, IJobDetails, IInterViewSettings } from "@src/interface/forms";

const CustomTab: React.FC<React.ComponentProps<typeof Tab>> = ({
  children,
  ...props
}) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const [page, setPage] = useState<PageNumbers>(0);

  const handlePage = (pageNumber: PageNumbers) => {
    setPage(pageNumber);
  };
  const [requisitionDetails, setRequisitionDetails] = useState<IRequisitionDetails>({
    requisitionTitle: '',
    noOfOpenings: 0,
    urgency: '',
    gender: ''
  });
  const [jobDetails, setJobDetails] = useState<IJobDetails>({
    jobTitle: '',
    jobDetails: '',
    jobLocation: ''
  });
  const [interviewSettings, setInterviewSettings] = useState<IInterViewSettings>({
    interviewMode: '',
    interviewDuration: '',
    interviewLanguage: ''
  });

  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={page} isLazy lazyBehavior="keepMounted">
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionForm handleTab={handlePage}
                  setRequisitionDetails={setRequisitionDetails}
                />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm handleTab={handlePage} 
                 setJobDetails={setJobDetails} 
                />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm 
                handleTab={handlePage} 
                 setInterviewSettings={setInterviewSettings}
                />
              </TabPanel>
            </TabPanels>
            <DisplayCard   
             requisitionDetails={requisitionDetails}
             jobDetails={jobDetails}
             interviewSettings={interviewSettings}
              />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
