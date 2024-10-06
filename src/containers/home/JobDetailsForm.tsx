import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormInput from "../../components/formComponents/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PageNumbers } from "../../interface/home";
import { IJobDetails } from "../../interface/forms";

const JobDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
  setJobDetails: (details: IJobDetails) => void;
}> = ({ handleTab, setJobDetails }) => {
  const {
    handleSubmit,
    errors,
    touched,
    values,
    setFieldTouched,
    setFieldValue,
    isValid,
  } = useFormik<IJobDetails>({
    initialValues: {
      jobTitle: "",
      jobDetails: "",
      jobLocation: "",
    },
    validationSchema: Yup.object().shape({
      jobTitle: Yup.string().required("Job Title is required"),
      jobDetails: Yup.string().required("Job Details is required"),
      jobLocation: Yup.string().required("Job Location is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleTab(2);
    },
    enableReinitialize: true,
  });

  const handleFormChange = (fieldName: keyof IJobDetails, value: string) => {
    setFieldValue(fieldName, value);
    setJobDetails({ ...values, [fieldName]: value });
  };
  
  return (
    <Box width="100%" as="form" onSubmit={handleSubmit as any}>
      <Box width="100%">
        <FormInput
          label="Job Title"
          placeholder="Enter job title"
          name="jobTitle"
          onChange={(e) => handleFormChange("jobTitle", e.target.value)}
          onBlur={() => setFieldTouched("jobTitle", true)}
          value={values.jobTitle}
          error={errors.jobTitle}
          touched={touched.jobTitle}
        />
        <FormInput
        label="Job Details"
        placeholder="Enter job details"
        name="jobDetails"
        onChange={(e) => handleFormChange("jobDetails", e.target.value)}
        onBlur={() => setFieldTouched("jobDetails", true)}
        value={values.jobDetails}
        error={errors.jobDetails}
        touched={touched.jobDetails}
        />
      

        <FormInput
          label="Job Location"
          name="jobLocation"
          placeholder="Enter job location"
          onChange={(e) => handleFormChange("jobLocation", e.target.value)}
          onBlur={() => setFieldTouched("jobLocation", true)}
          value={values.jobLocation}
          error={errors.jobLocation}
          touched={touched.jobLocation}
        />
        <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
          <Button colorScheme="gray" type="button" onClick={() => handleTab(0)}>
            Previous
          </Button>
          <Button colorScheme="red" type="submit">
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default JobDetailsForm;
