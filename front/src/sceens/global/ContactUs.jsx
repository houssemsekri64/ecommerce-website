import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { useContact } from "../../hooks/useContact";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import contact from "../../assets/contact/contact.jpg";
import Image from "../../components/ui/Image";
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.number().required("Phone is required"),
  message: Yup.string().required("Message is required"),
});
function ContactUs() {
  let isSubmitting = false;
  const initialValue = {
    severty: "",
    message: "",
  };
  const [alertMessage, setAlertMessage] = useState(initialValue);
  const MessageSucces = () => {
    isSubmitting = false;
    setAlertMessage({
      severty: "success",
      message: "your message send with success",
    });

    setTimeout(() => {
      setAlertMessage(initialValue);
    }, 4000);
  };
  const MessageFailed = () => {
    isSubmitting = false;
    setAlertMessage({
      severty: "error",
      message: "something whent wrong",
    });
  };
  const { mutate } = useContact(MessageSucces, MessageFailed);
  const handleSubmit = (values, { resetForm }) => {
    setTimeout(() => {
      const valuesSend = {
        data: { ...values },
      };
      isSubmitting = true;

      mutate({
        ...JSON.stringify(valuesSend),
      });
      resetForm();
    }, 400);
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={{ background: (theme) => theme.palette.background.paper }}
      id="contact"
    >
      <Box
        sx={{
          py: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 2,
          width: {
            xs: "95%",
            md: "80%",
          },
          margin: "0 auto",
        }}
      >
        <Box width={{ md: "50%", xs: "100%" }}>
          <Typography align="center" variant="h3" py={3}>
            {" "}
            Contact Us{" "}
          </Typography>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting, handleChange }) => (
              <Form>
                <Box
                  display="grid"
                  gap="15px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    name="firstName"
                    label="First Name"
                    fullWidth
                    onChange={handleChange}
                    sx={{ gridColumn: "span 2" }}
                    placeholder="your first name"
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <TextField
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    sx={{ gridColumn: "span 2" }}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                    onChange={handleChange}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    fullWidth
                    sx={{ gridColumn: "span 2" }}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    onChange={handleChange}
                  />
                  <TextField
                    name="phone"
                    label="Phone"
                    fullWidth
                    sx={{ gridColumn: "span 2" }}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                    onChange={handleChange}
                  />
                  <TextField
                    name="message"
                    label="Message"
                    fullWidth
                    sx={{ gridColumn: "span 4" }}
                    multiline
                    rows={4}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                    onChange={handleChange}
                  />
                  <Button
                    fullWidth
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{
                      boxShadow: "none",
                      color: "common.white",
                      borderRadius: 0,
                      padding: "15px 40px",
                      gridColumn: "span 4",
                    }}
                    disabled={isSubmitting}
                  >
                    Send
                  </Button>
                  {alertMessage.severty.length > 0 && (
                    <Alert
                      severity={alertMessage.severty}
                      sx={{ gridColumn: "span 4" }}
                    >
                      {" "}
                      {alertMessage.message}{" "}
                    </Alert>
                  )}
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
        <Box
          width={{ md: "50%", xs: "100%" }}
          height={{ xs: "300px", md: "550px" }}
        >
          <Image
            src={contact}
            width={"100%"}
            height={"100%"}
            ImageStyle={{
              objectFit: isNonMobile ? "contain" : "cover",
              objectPosition: "top",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
